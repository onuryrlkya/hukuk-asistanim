import { FileCodeIcon as LawScale } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
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
            <Link href="/chat" className="text-sm font-medium text-muted-foreground">
              Asistan
            </Link>
            <Link href="/contact" className="text-sm font-medium">
              İletişim
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 container py-12">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter">İletişim</h1>
              <p className="text-gray-500">
                Hukuk Asistanı hakkında sorularınız veya geri bildirimleriniz için bizimle iletişime geçebilirsiniz.
              </p>
            </div>
            <div className="border rounded-lg p-6 space-y-4">
              <div className="space-y-1">
                <h2 className="text-xl font-semibold">İletişim Bilgileri</h2>
                <p className="text-gray-500">Aşağıdaki bilgiler üzerinden bize ulaşabilirsiniz.</p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <h3 className="font-medium">İletişim Kişisi</h3>
                  <p>Onur YERLİKAYA</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">E-posta</h3>
                  <p>
                    <a href="mailto:yrlkyaonur@gmail.com" className="text-rose-600 hover:underline">
                      yrlkyaonur@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="border rounded-lg p-6 space-y-4">
              <div className="space-y-1">
                <h2 className="text-xl font-semibold">Hakkında</h2>
                <p className="text-gray-500">Hukuk Asistanı uygulaması hakkında bilgi.</p>
              </div>
              <div className="space-y-2">
                <p>
                  Hukuk Asistanı, özel eğitilmiş yapay zeka modeli kullanılarak hukuki sorulara yanıt veren, belge
                  hazırlama ve yasal rehberlik sunan bir platformdur. Türk hukuk sistemine uygun bilgiler sunmak için
                  özel olarak geliştirilmiştir.
                </p>
                <p>
                  Bu uygulama sadece bilgilendirme amaçlıdır ve hukuki tavsiye niteliği taşımaz. Kesin hukuki yardım
                  için bir avukata danışmanız önerilir.
                </p>
              </div>
            </div>
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
