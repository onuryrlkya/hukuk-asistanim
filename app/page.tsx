import type { Metadata } from "next"
import Link from "next/link"
import { FileCodeIcon as LawScale, MessageSquare, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Hukuk Asistanı | AI-Powered Legal Assistance",
  description: "Get legal advice, document templates, and analysis powered by artificial intelligence.",
}

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <LawScale className="h-6 w-6 text-rose-600" />
            <span className="text-xl font-bold">Hukuk Asistanı</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium">
              Ana Sayfa
            </Link>
            <Link href="/chat" className="text-sm font-medium text-muted-foreground">
              Asistan
            </Link>
            <Link href="/contact" className="text-sm font-medium text-muted-foreground">
              İletişim
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://3dduvarkagitlari.com/Content/images/2020/12/27/l/3dduvarkagitlari-ebe853f0.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4 bg-white/90 p-6 rounded-lg backdrop-blur-sm">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Yapay Zeka Destekli Hukuki Danışmanlık
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Hukuki sorularınızı doğal dilde sorun, anında profesyonel yanıtlar alın. Dilekçe hazırlama ve yasal
                    rehberlik tek platformda.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/chat">
                    <Button className="bg-rose-600 hover:bg-rose-700">
                      Asistana Sorun
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto lg:mr-0 flex items-center justify-center">
                <div className="bg-white/90 p-8 rounded-xl shadow-lg border w-full max-w-md backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <MessageSquare className="h-5 w-5 text-rose-600" />
                    <h3 className="font-semibold">Hukuk Asistanı</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gray-100 p-3 rounded-lg max-w-[80%]">
                      <p className="text-sm">İşten sebepsiz yere çıkarıldım ne yapmalıyım?</p>
                    </div>
                    <div className="bg-rose-50 p-3 rounded-lg max-w-[80%] ml-auto">
                      <p className="text-sm">
                        İşten çıkarılmanız durumunda öncelikle şunları yapmalısınız:
                        <br />
                        1. İşten çıkış belgenizi alın
                        <br />
                        2. İşsizlik maaşı için başvurun
                        <br />
                        3. İş mahkemesine başvuru için 1 ay içinde harekete geçin
                        <br />
                        <br />
                        Detaylı bilgi için sohbete devam edebilirsiniz.
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <Link href="/chat" className="w-full">
                      <Button variant="outline" size="sm" className="w-full">
                        Asistana Sorun
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Özellikler</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Yapay zeka destekli hukuk asistanımız ile tüm hukuki ihtiyaçlarınızı karşılayın
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-rose-100 p-3">
                  <MessageSquare className="h-6 w-6 text-rose-600" />
                </div>
                <h3 className="text-xl font-bold">Hukuki Danışmanlık</h3>
                <p className="text-center text-gray-500">Doğal dilde sorular sorun, yasalara dayalı cevaplar alın</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-rose-100 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-rose-600"
                  >
                    <path d="M14 4c0-1.1.9-2 2-2" />
                    <path d="M14 20c0 1.1.9 2 2 2" />
                    <path d="M20 14c1.1 0 2-.9 2-2" />
                    <path d="M20 10c1.1 0 2 .9 2 2" />
                    <path d="M4 14c-1.1 0-2-.9-2-2" />
                    <path d="M4 10c-1.1 0-2 .9-2 2" />
                    <path d="M10 4c0-1.1-.9-2-2-2" />
                    <path d="M10 20c0 1.1-.9 2-2 2" />
                    <path d="M14 12V4" />
                    <path d="M4 12h16" />
                    <path d="M10 12v8" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Belge Hazırlama</h3>
                <p className="text-center text-gray-500">Dilekçe, sözleşme ve yasal belgeleri otomatik oluşturun</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-rose-100 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-rose-600"
                  >
                    <path d="M12 8V4H8" />
                    <rect width="16" height="12" x="4" y="8" rx="2" />
                    <path d="M2 14h2" />
                    <path d="M20 14h2" />
                    <path d="M15 13v2" />
                    <path d="M9 13v2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Yasa Bilgi Bankası</h3>
                <p className="text-center text-gray-500">Kanun maddeleri ve yasal düzenlemelere anında erişim</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-rose-100 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-rose-600"
                  >
                    <path d="M12 22v-5" />
                    <path d="M9 8V2" />
                    <path d="M15 8V2" />
                    <path d="M18 8v4" />
                    <path d="M6 8v4" />
                    <path d="M12 8v10" />
                    <path d="M2 8h20" />
                    <path d="M2 14h20" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Hesaplama Araçları</h3>
                <p className="text-center text-gray-500">Tazminat, nafaka ve miras hesaplamalarını otomatik yapın</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-rose-100 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-rose-600"
                  >
                    <path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" />
                    <path d="M12 3a9 9 0 0 1 9 9" />
                    <path d="M12 3a9 9 0 0 0-9 9" />
                    <path d="M6 9a6 6 0 0 1 6-6" />
                    <path d="M18 9a6 6 0 0 0-6-6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Çok Dilli Destek</h3>
                <p className="text-center text-gray-500">Türkçe ve İngilizce dillerinde hukuki destek alın</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-rose-100 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-rose-600"
                  >
                    <path d="M2 20h20" />
                    <path d="M5 20V8.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C6.52 5 7.08 5 8.2 5h7.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C19 6.52 19 7.08 19 8.2V20" />
                    <path d="M4 5V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2" />
                    <path d="M9 14h6" />
                    <path d="M12 11v6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Adım Adım Rehberlik</h3>
                <p className="text-center text-gray-500">Hukuki süreçlerde yapmanız gerekenleri adım adım öğrenin</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Hemen Başlayın</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hukuki sorularınızı yanıtlamak için yapay zeka asistanımız hazır
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <Link href="/chat">
                  <Button className="w-full bg-rose-600 hover:bg-rose-700">
                    Asistana Sorun
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-gray-100">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8">
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2">
              <LawScale className="h-5 w-5 text-rose-600" />
              <span className="text-lg font-bold">Hukuk Asistanı</span>
            </div>
            <p className="text-sm text-gray-500">
              Yapay zeka destekli hukuki danışmanlık platformu. Tüm hakları saklıdır © 2025.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <div className="space-y-2">
              <h4 className="font-medium">Hızlı Erişim</h4>
              <ul className="space-y-1 text-sm text-gray-500">
                <li>
                  <Link href="/" className="hover:underline">
                    Ana Sayfa
                  </Link>
                </li>
                <li>
                  <Link href="/chat" className="hover:underline">
                    Asistan
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">
                    İletişim
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Yasal</h4>
              <ul className="space-y-1 text-sm text-gray-500">
                <li>
                  <Link href="/privacy" className="hover:underline">
                    Gizlilik Politikası
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:underline">
                    Kullanım Şartları
                  </Link>
                </li>
                <li>
                  <Link href="/disclaimer" className="hover:underline">
                    Yasal Uyarı
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">İletişim</h4>
              <ul className="space-y-1 text-sm text-gray-500">
                <li>
                  <a href="mailto:yrlkyaonur@gmail.com" className="hover:underline">
                    yrlkyaonur@gmail.com
                  </a>
                </li>
                <li>
                  <span>Onur YERLİKAYA</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
