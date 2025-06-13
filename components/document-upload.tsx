"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Upload, FileText, Loader2, X } from "lucide-react"

export function DocumentUpload() {
  const [file, setFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysis, setAnalysis] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null
    setFile(selectedFile)
    setAnalysis(null)
  }

  const handleUpload = async () => {
    if (!file) return

    setIsUploading(true)

    // Simulate upload
    setTimeout(() => {
      setIsUploading(false)
      setIsAnalyzing(true)

      // Simulate analysis
      setTimeout(() => {
        setIsAnalyzing(false)

        // Sample analysis result based on file name
        if (file.name.toLowerCase().includes("sözleşme") || file.name.toLowerCase().includes("contract")) {
          setAnalysis(`
## Belge Analizi: ${file.name}

### Genel Değerlendirme
Bu sözleşme, standart bir hizmet sözleşmesi formatında hazırlanmıştır. Genel olarak dengeli bir sözleşme olmakla birlikte, bazı maddeler taraflardan biri lehine ağırlık oluşturmaktadır.

### Risk Analizi
- **Yüksek Risk**: Madde 7'de belirtilen cezai şart oranı piyasa standartlarının üzerindedir.
- **Orta Risk**: Fesih koşulları tek taraflı olarak düzenlenmiştir.
- **Düşük Risk**: Ödeme koşulları makul sürelerde belirlenmiştir.

### Öneriler
1. Madde 7'deki cezai şart oranının %10'dan %5'e indirilmesi önerilir.
2. Fesih koşullarının her iki taraf için de eşit şartlarda düzenlenmesi gereklidir.
3. Uyuşmazlık çözüm yöntemlerinde arabuluculuk seçeneği eklenebilir.

### Yasal Uygunluk
Sözleşme genel olarak Türk Borçlar Kanunu hükümlerine uygundur, ancak yukarıda belirtilen düzeltmeler yapılmalıdır.
          `)
        } else if (file.name.toLowerCase().includes("dilekçe") || file.name.toLowerCase().includes("petition")) {
          setAnalysis(`
## Belge Analizi: ${file.name}

### Genel Değerlendirme
İncelenen dilekçe, bir iş davası için hazırlanmış olup temel unsurları içermektedir. Ancak bazı eksiklikler ve iyileştirme gerektiren noktalar tespit edilmiştir.

### Eksiklikler
1. Talep sonuç bölümü yeterince açık değildir.
2. Deliller bölümünde somut belge isimleri belirtilmemiştir.
3. Hukuki sebepler kısmında ilgili kanun maddeleri eksiktir.

### Öneriler
1. Talep sonuç bölümünde istenen tazminat miktarı net olarak belirtilmelidir.
2. Deliller bölümünde her bir belge ayrı ayrı numaralandırılmalıdır.
3. İş Kanunu'nun ilgili maddeleri (Madde 17, 18, 20, 21) açıkça belirtilmelidir.
4. Yargıtay'ın benzer konulardaki emsal kararlarına atıf yapılmalıdır.

### Yasal Uygunluk
Dilekçe, Hukuk Muhakemeleri Kanunu'nun 119. maddesindeki şekil şartlarını genel olarak karşılamaktadır, ancak yukarıdaki eksikliklerin giderilmesi gereklidir.
          `)
        } else {
          setAnalysis(`
## Belge Analizi: ${file.name}

### Genel Değerlendirme
Yüklenen belge incelenmiş olup, hukuki bir belge formatında olduğu tespit edilmiştir. Belgenin içeriği ve amacına göre aşağıdaki değerlendirmeler yapılmıştır.

### İçerik Analizi
Belge içeriğinde temel hukuki unsurlar bulunmakla birlikte, bazı bölümlerde netlik eksikliği ve terminoloji hataları tespit edilmiştir.

### Öneriler
1. Belgenin giriş bölümünde tarafların kimlik bilgileri daha net belirtilmelidir.
2. Hukuki terimler tutarlı bir şekilde kullanılmalıdır.
3. Talep edilen sonuçlar daha açık ve net ifade edilmelidir.
4. İlgili yasal dayanaklara daha fazla atıf yapılmalıdır.

### Yasal Uygunluk
Belge genel olarak yasal formata uygun olmakla birlikte, yukarıda belirtilen iyileştirmeler yapılarak daha güçlü bir hukuki metin haline getirilebilir.
          `)
        }
      }, 2000)
    }, 1500)
  }

  const handleRemoveFile = () => {
    setFile(null)
    setAnalysis(null)
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-xl font-bold">Belge Analizi</h2>
        <p className="text-sm text-muted-foreground">
          Sözleşme, dilekçe veya diğer hukuki belgeleri yükleyin ve AI destekli analiz alın.
        </p>
      </div>

      {!file ? (
        <Card className="border-dashed border-2 p-10">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="rounded-full bg-rose-100 p-3">
              <Upload className="h-6 w-6 text-rose-600" />
            </div>
            <div className="space-y-1 text-center">
              <p className="text-sm font-medium">Belgenizi buraya sürükleyin veya yükleyin</p>
              <p className="text-xs text-muted-foreground">PDF, DOCX veya TXT formatında belgeler desteklenir</p>
            </div>
            <label htmlFor="file-upload">
              <Button variant="outline" className="cursor-pointer" as="span">
                Dosya Seç
              </Button>
              <input
                id="file-upload"
                type="file"
                className="sr-only"
                accept=".pdf,.docx,.doc,.txt"
                onChange={handleFileChange}
              />
            </label>
          </div>
        </Card>
      ) : (
        <div className="space-y-4">
          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="rounded-full bg-rose-100 p-2">
                  <FileText className="h-5 w-5 text-rose-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">{file.name}</p>
                  <p className="text-xs text-muted-foreground">{(file.size / 1024).toFixed(2)} KB</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={handleRemoveFile}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </Card>

          {!analysis ? (
            <Button
              onClick={handleUpload}
              disabled={isUploading || isAnalyzing}
              className="bg-rose-600 hover:bg-rose-700"
            >
              {isUploading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Yükleniyor...
                </>
              ) : isAnalyzing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analiz Ediliyor...
                </>
              ) : (
                "Belgeyi Analiz Et"
              )}
            </Button>
          ) : (
            <div className="space-y-4">
              <Card className="p-6">
                <div className="prose prose-sm max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: analysis.replace(/\n/g, "<br>") }} />
                </div>
              </Card>
              <div className="flex space-x-2">
                <Button variant="outline" onClick={handleRemoveFile}>
                  Yeni Belge Yükle
                </Button>
                <Button className="bg-rose-600 hover:bg-rose-700">Analizi İndir</Button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
