import { FileCodeIcon as LawScale } from "lucide-react"
import Link from "next/link"

export default function PrivacyPage() {
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
            <Link href="/contact" className="text-sm font-medium text-muted-foreground">
              İletişim
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 container py-12">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter">Gizlilik Politikası</h1>
              <p className="text-gray-500">Son güncelleme: 21 Mayıs 2025</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">1. Giriş</h2>
              <p>
                Hukuk Asistanı olarak, gizliliğinize saygı duyuyoruz. Bu Gizlilik Politikası, hizmetlerimizi kullanırken
                topladığımız, kullandığımız ve paylaştığımız bilgileri açıklamaktadır.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">2. Toplanan Bilgiler</h2>
              <p>
                Hukuk Asistanı, hizmetlerimizi sağlamak, geliştirmek ve korumak için aşağıdaki bilgileri toplayabilir:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Sohbet İçeriği:</strong> Asistanımızla yaptığınız konuşmalar ve sorduğunuz sorular.
                </li>
                <li>
                  <strong>Kullanım Verileri:</strong> Hizmetlerimizle nasıl etkileşimde bulunduğunuza dair bilgiler.
                </li>
                <li>
                  <strong>Cihaz Bilgileri:</strong> IP adresi, tarayıcı türü, işletim sistemi gibi teknik bilgiler.
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">3. Bilgilerin Kullanımı</h2>
              <p>Topladığımız bilgileri şu amaçlarla kullanıyoruz:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Hukuk Asistanı hizmetini sağlamak ve geliştirmek</li>
                <li>Kullanıcı deneyimini iyileştirmek</li>
                <li>Yapay zeka modelimizi eğitmek ve geliştirmek</li>
                <li>Teknik sorunları tespit etmek ve çözmek</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">4. Bilgilerin Paylaşımı</h2>
              <p>
                Kişisel bilgilerinizi satmıyor veya kiralamıyoruz. Bilgilerinizi yalnızca aşağıdaki durumlarda
                paylaşabiliriz:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Yasal bir yükümlülüğe uymak için gerekli olduğunda</li>
                <li>Hizmetlerimizi sağlamak için gerekli olan üçüncü taraf hizmet sağlayıcılarla</li>
                <li>Açık izniniz olduğunda</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">5. Veri Güvenliği</h2>
              <p>
                Bilgilerinizi korumak için uygun teknik ve organizasyonel önlemler alıyoruz. Ancak, internet üzerinden
                hiçbir veri iletiminin veya elektronik depolamanın %100 güvenli olmadığını unutmayın.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">6. Çerezler ve Benzer Teknolojiler</h2>
              <p>
                Hizmetlerimizi geliştirmek ve kullanıcı deneyimini iyileştirmek için çerezler ve benzer teknolojiler
                kullanabiliriz.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">7. Değişiklikler</h2>
              <p>
                Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Önemli değişiklikler olması durumunda, sitemizde
                bir bildirim yayınlayacağız.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">8. İletişim</h2>
              <p>
                Bu Gizlilik Politikası hakkında sorularınız veya endişeleriniz varsa, lütfen{" "}
                <a href="mailto:yrlkyaonur@gmail.com" className="text-rose-600 hover:underline">
                  yrlkyaonur@gmail.com
                </a>{" "}
                adresinden bizimle iletişime geçin.
              </p>
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
