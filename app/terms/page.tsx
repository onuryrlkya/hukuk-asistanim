import { FileCodeIcon as LawScale } from "lucide-react"
import Link from "next/link"

export default function TermsPage() {
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
              <h1 className="text-3xl font-bold tracking-tighter">Kullanım Şartları</h1>
              <p className="text-gray-500">Son güncelleme: 21 Mayıs 2025</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">1. Kabul</h2>
              <p>
                Hukuk Asistanı'nı kullanarak, bu Kullanım Şartları'nı kabul etmiş olursunuz. Bu şartları kabul
                etmiyorsanız, lütfen hizmetlerimizi kullanmayın.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">2. Hizmet Tanımı</h2>
              <p>
                Hukuk Asistanı, yapay zeka destekli bir hukuki bilgi platformudur. Hizmetimiz, genel hukuki bilgiler
                sağlar ve belirli hukuki sorulara yanıt vermeye çalışır.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">3. Hukuki Tavsiye Değildir</h2>
              <p>
                Hukuk Asistanı tarafından sağlanan bilgiler, hukuki tavsiye niteliği taşımaz ve bir avukat-müvekkil
                ilişkisi oluşturmaz. Hizmetimiz, profesyonel hukuki danışmanlık yerine geçmez. Özel hukuki durumunuz
                için her zaman nitelikli bir avukata danışmanızı öneririz.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">4. Kullanım Kısıtlamaları</h2>
              <p>Hukuk Asistanı'nı kullanırken aşağıdaki eylemlerde bulunmamanız gerekmektedir:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Yasalara aykırı amaçlar için hizmeti kullanmak</li>
                <li>Başkalarının haklarını ihlal etmek</li>
                <li>Hizmetin normal işleyişini engellemek veya bozmak</li>
                <li>Hizmeti kötüye kullanmak veya aşırı yüklemek</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">5. Fikri Mülkiyet</h2>
              <p>
                Hukuk Asistanı ve ilgili tüm içerikler, fikri mülkiyet hakları kapsamında korunmaktadır. Hizmetimizi
                kullanmanız, bu hakların size devredildiği anlamına gelmez.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">6. Sorumluluk Reddi</h2>
              <p>
                Hukuk Asistanı "olduğu gibi" sunulmaktadır. Hizmetimizin doğruluğu, güncelliği veya güvenilirliği
                konusunda hiçbir garanti vermiyoruz. Hizmetimizi kullanmanızdan kaynaklanan herhangi bir zarar veya
                kayıptan sorumlu değiliz.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">7. Değişiklikler</h2>
              <p>
                Bu Kullanım Şartları'nı herhangi bir zamanda değiştirme hakkını saklı tutarız. Değişiklikler, sitemizde
                yayınlandıktan sonra geçerli olacaktır.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">8. İletişim</h2>
              <p>
                Bu Kullanım Şartları hakkında sorularınız veya endişeleriniz varsa, lütfen{" "}
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
