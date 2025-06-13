import { FileCodeIcon as LawScale, User } from "lucide-react"
import { cn } from "@/lib/utils"
import ReactMarkdown from "react-markdown"

interface ChatMessageProps {
  message: {
    role: "user" | "assistant"
    content: string
  }
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user"

  return (
    <div className="flex items-start gap-3">
      <div
        className={cn(
          "flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border",
          isUser ? "bg-background" : "bg-rose-50 text-rose-600",
        )}
      >
        {isUser ? <User className="h-4 w-4" /> : <LawScale className="h-4 w-4" />}
      </div>
      <div className="flex-1 space-y-2">
        <div className="prose prose-sm max-w-none">
          <ReactMarkdown>{message.content}</ReactMarkdown>
        </div>
      </div>
    </div>
  )
}
