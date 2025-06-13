"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { FileCodeIcon as LawScale, Send, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { ChatMessage } from "@/components/chat-message"
import Link from "next/link"

export default function ChatPage() {
  const [messages, setMessages] = useState<Array<{ role: "user" | "assistant"; content: string }>>([
    {
      role: "assistant",
      content: "Merhaba! Ben yapay zeka destekli hukuk asistanınızım. Size nasıl yardımcı olabilirim?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    // Add user message
    const userMessage = { role: "user" as const, content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      // Create conversation history for context
      const conversationHistory = messages.map((msg) => ({
        role: msg.role,
        content: msg.content,
      }))

      // Add the new user message
      conversationHistory.push({
        role: "user",
        content: input,
      })

      // Make API request to ChatGPT
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer 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`,
        },
        body: JSON.stringify({
          model: "llama3-70b-8192",
          messages: [
            {
              role: "system",
              content: `Sen Türkiye hukuk sistemine hakim, yapay zeka destekli bir hukuk asistanısın. 
              Kullanıcıların hukuki sorularına, Türk yasalarına ve mevzuatına uygun, doğru ve anlaşılır yanıtlar vermelisin.
              Cevaplarında ilgili kanun maddelerini ve yasal dayanakları belirtmelisin.
              Dilekçe, sözleşme gibi belge talepleri olduğunda formatı doğru şekilde hazırlamalısın.
              Hesaplama talepleri olduğunda (tazminat, nafaka vb.) formülleri açıklayarak hesaplama yapmalısın.
              Her zaman yasal uyarı ekleyerek, bu bilgilerin hukuki danışmanlık yerine geçmediğini belirtmelisin.`,
            },
            ...conversationHistory,
          ],
          temperature: 0.7,
          max_tokens: 2000,
        }),
      })

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`)
      }

      const data = await response.json()
      const assistantResponse = data.choices[0].message.content

      // Add assistant response
      setMessages((prev) => [...prev, { role: "assistant", content: assistantResponse }])
    } catch (error) {
      console.error("Error generating response:", error)
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Üzgünüm, yanıt oluşturulurken bir hata oluştu. Lütfen tekrar deneyin veya sorunuzu farklı bir şekilde sorun.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2">
            <LawScale className="h-6 w-6 text-rose-600" />
            <span className="text-xl font-bold">Hukuk Asistanı</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-muted-foreground">
              Ana Sayfa
            </Link>
            <Link href="/chat" className="text-sm font-medium">
              Asistan
            </Link>
            <Link href="/contact" className="text-sm font-medium text-muted-foreground">
              İletişim
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 container py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-3">
            <Card className="border-0 shadow-none">
              <CardContent className="p-0">
                <div className="flex flex-col h-[calc(100vh-280px)] md:h-[calc(100vh-240px)]">
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((message, index) => (
                      <ChatMessage key={index} message={message} />
                    ))}
                    {isLoading && (
                      <div className="flex items-start gap-3">
                        <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border bg-rose-50 text-rose-600">
                          <LawScale className="h-4 w-4" />
                        </div>
                        <div className="flex items-center gap-2">
                          <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                          <p className="text-sm text-muted-foreground">Yanıt hazırlanıyor...</p>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                  <div className="border-t p-4">
                    <form onSubmit={handleSubmit} className="flex items-end gap-2">
                      <Textarea
                        placeholder="Hukuki sorunuzu yazın..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="min-h-12 resize-none"
                      />
                      <Button
                        type="submit"
                        size="icon"
                        disabled={isLoading || !input.trim()}
                        className={cn(
                          "shrink-0 rounded-full",
                          isLoading || !input.trim() ? "bg-gray-300" : "bg-rose-600 hover:bg-rose-700",
                        )}
                      >
                        {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                      </Button>
                    </form>
                    <p className="text-xs text-muted-foreground mt-2">
                      Bu yanıtlar hukuki danışmanlık yerine geçmez. Profesyonel hukuki yardım için bir avukata
                      danışınız.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="hidden md:block">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-medium">Sık Sorulan Sorular</h3>
                    <p className="text-sm text-muted-foreground">Asistana sorabileceğiniz örnek sorular:</p>
                  </div>
                  <div className="space-y-2 max-h-[500px] overflow-y-auto pr-2">
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left h-auto py-2 px-3"
                      onClick={() => {
                        setInput("Boşanma davası nasıl açılır ve ne kadar sürer?")
                      }}
                    >
                      <span className="truncate">Boşanma davası nasıl açılır ve ne kadar sürer?</span>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left h-auto py-2 px-3"
                      onClick={() => {
                        setInput("Kıdem ve ihbar tazminatımı nasıl alabilirim?")
                      }}
                    >
                      <span className="truncate">Kıdem ve ihbar tazminatımı nasıl alabilirim?</span>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left h-auto py-2 px-3"
                      onClick={() => {
                        setInput("Birine dava açmak için nereye başvurmalıyım ve hangi belgeler gerekir?")
                      }}
                    >
                      <span className="truncate">Dava açmak için nereye başvurmalıyım?</span>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left h-auto py-2 px-3"
                      onClick={() => {
                        setInput("Miras paylaşımı nasıl yapılır, kim ne kadar alır?")
                      }}
                    >
                      <span className="truncate">Miras paylaşımı nasıl yapılır?</span>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left h-auto py-2 px-3"
                      onClick={() => {
                        setInput("Ev alırken veya satarken hukuki olarak nelere dikkat etmeliyim?")
                      }}
                    >
                      <span className="truncate">Ev alırken hukuki olarak nelere dikkat etmeliyim?</span>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left h-auto py-2 px-3"
                      onClick={() => {
                        setInput("İcra takibi başlatıldığında ne yapmalıyım? Mal varlığıma el konur mu?")
                      }}
                    >
                      <span className="truncate">İcra takibinde mal varlığıma el konur mu?</span>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left h-auto py-2 px-3"
                      onClick={() => {
                        setInput("İş kazası geçirdim, tazminat hakkım var mı?")
                      }}
                    >
                      <span className="truncate">İş kazası geçirdim, tazminat hakkım var mı?</span>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left h-auto py-2 px-3"
                      onClick={() => {
                        setInput("Kıdem tazminatı hesaplama: 5 yıl çalıştım, brüt maaşım 15.000 TL")
                      }}
                    >
                      <span className="truncate">Kıdem tazminatı hesaplama örneği</span>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left h-auto py-2 px-3"
                      onClick={() => {
                        setInput("Nafaka miktarı nasıl belirlenir?")
                      }}
                    >
                      <span className="truncate">Nafaka miktarı nasıl belirlenir?</span>
                    </Button>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-xs text-muted-foreground">
                      Bu uygulama sadece bilgilendirme amaçlıdır ve hukuki tavsiye niteliği taşımaz. Kesin hukuki yardım
                      için bir avukata danışmanız önerilir.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <footer className="border-t bg-gray-100 mt-auto">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <LawScale className="h-5 w-5 text-rose-600" />
              <span className="text-sm font-medium">Hukuk Asistanı</span>
            </div>
            <div className="text-sm text-gray-500">
              <p>İletişim: Onur YERLİKAYA | yrlkyaonur@gmail.com</p>
            </div>
            <div className="text-sm text-gray-500">
              <p>© 2025 Hukuk Asistanı. Tüm hakları saklıdır.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
