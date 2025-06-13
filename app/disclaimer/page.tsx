import { FileCodeIcon as LawScale } from "lucide-react"
import Link from "next/link"

export default function DisclaimerPage() {
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
              <h1 className="text-3xl font-bold tracking-tighter">Yasal Uyarı</h1>
              <p className="text-gray-500">Son güncelleme: 21 Mayıs 2025</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Hukuki Tavsiye Değildir</h2>
              <p>
                Hukuk Asistanı tarafından sağlanan tüm bilgiler, yalnızca bilgilendirme amaçlıdır ve hiçbir şekilde
                hukuki tavsiye niteliği taşımaz. Bu platform, bir avukat-müvekkil ilişkisi oluşturmaz ve profesyonel
                hukuki danışmanlık yerine geçmez.
              </p>
              <p>
                Hukuki konularda doğru ve güncel bilgi sağlamak için her türlü çabayı göstermekle birlikte, bilgilerin
                eksiksiz, doğru veya güncel olduğunu garanti etmiyoruz. Hukuki durumunuza özgü tavsiyeler için her zaman
                nitelikli bir avukata danışmanızı şiddetle tavsiye ederiz.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Yapay Zeka Sınırlamaları</h2>
              <p>
                Hukuk Asistanı, yapay zeka teknolojisi kullanarak çalışmaktadır. Yapay zeka sistemleri, insan
                avukatların sahip olduğu deneyim, muhakeme yeteneği ve hukuki uzmanlığa sahip değildir. Sistem, mevcut
                verilere dayanarak yanıtlar üretir ve her zaman doğru, eksiksiz veya güncel olmayabilir.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Sorumluluk Reddi</h2>
              <p>
                Hukuk Asistanı'nın kullanımından kaynaklanan veya bununla bağlantılı olarak ortaya çıkan herhangi bir
                doğrudan, dolaylı, tesadüfi, özel veya sonuç olarak ortaya çıkan zararlardan sorumlu değiliz. Bu,
                platformumuzdan edinilen bilgilere dayanarak alınan kararlar veya gerçekleştirilen eylemler sonucunda
                oluşabilecek zararları da kapsar.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Üçüncü Taraf Bağlantıları</h2>
              <p>
                Platformumuz, üçüncü taraf web sitelerine bağlantılar içerebilir. Bu bağlantılar yalnızca kolaylık
                sağlamak amacıyla sunulmuştur ve bu sitelerin içeriği, doğruluğu veya görüşleri üzerinde hiçbir kontrol
                veya sorumluluk kabul etmiyoruz.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Acil Durumlar</h2>
              <p>
                Acil hukuki durumlarda, Hukuk Asistanı'na güvenmek yerine doğrudan bir avukata, kolluk kuvvetlerine veya
                ilgili acil durum hizmetlerine başvurmanız gerekmektedir.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Sonuç</h2>
              <p>
                Hukuk Asistanı'nı kullanarak, bu yasal uyarıyı okuduğunuzu, anladığınızı ve kabul ettiğinizi
                onaylıyorsunuz. Platformumuzdan edindiğiniz bilgilere dayanarak alacağınız kararların sorumluluğu size
                aittir.
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
