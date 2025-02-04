# SmartLink - AI Destekli Kişiselleştirilmiş Link Yönetim Aracı

## 📌 Proje Açıklaması
**SmartLink**, AI destekli bir link yönetim ve analiz aracıdır. Kullanıcılar:
- Linklerini kısaltabilir ve kişiselleştirebilir.
- AI destekli otomatik açıklamalar ve SEO dostu başlıklar oluşturabilir.
- Tıklama verilerini analiz edebilir ve hedef kitleyi daha iyi anlayabilir.
- Özel QR kodlar oluşturabilir ve sosyal medya ile entegre edebilir.

Bu proje, küçük işletmeler, influencer’lar ve e-ticaret sahipleri için ideal bir link yönetim çözümü sunar.

---

## 🚀 MVP Özellikleri (Minimum Viable Product)
### 🔹 Temel Özellikler
✅ Kullanıcı giriş ve kayıt (Google Auth, e-posta ile giriş)  
✅ Link kısaltma ve yönetim paneli  
✅ AI destekli başlık, açıklama ve etiket önerileri  
✅ Temel analitik paneli (kaç tıklama, hangi ülkelerden)  
✅ QR kod oluşturma  
✅ Stripe ile ödeme entegrasyonu  

### 🔜 Gelecekteki Geliştirmeler
📌 Google Analytics ve Facebook Pixel entegrasyonu  
📌 Kullanıcıya özel önerilen en iyi paylaşım zamanları  
📌 Rekabet analizi: Hangi linkler daha popüler?  
📌 E-posta bildirimleri (linkler belirli bir limit aşınca)  
📌 Mobil uygulama (React Native ile hızlıca çıkabilir)  

---

## 🛠️ Kullanılacak Teknolojiler

| Bölüm | Teknoloji |
|--------|------------|
| **Frontend** | Next.js (React), TailwindCSS |
| **Backend** | NestJS (Node.js) veya FastAPI (Python) |
| **Veritabanı** | PostgreSQL (Supabase) veya Firebase |
| **Kimlik Doğrulama** | Firebase Auth, Clerk |
| **AI İşlevleri** | OpenAI API (GPT-4) veya LangChain |
| **Ödeme Sistemi** | Stripe API (Abonelik için) |

---

## 📂 Proje Yapısı (Monorepo)
```
smartlink/
│── backend/               # Backend (NestJS API)
│   ├── src/
│   │   ├── modules/       # Modüller (Auth, Links, Analytics vs.)
│   │   ├── common/        # Ortak yardımcı fonksiyonlar
│   │   ├── main.ts        # API başlatma dosyası
│   ├── prisma/            # Prisma veritabanı şeması
│   ├── test/              # Backend test dosyaları
│   ├── .env               # Çevresel değişkenler
│   ├── package.json       # Backend bağımlılıkları
│── frontend/              # Next.js (React) UI
│   ├── components/        # UI bileşenleri
│   ├── pages/             # Sayfalar (Landing, Dashboard, Login, vs.)
│   ├── hooks/             # Özel React hook'ları
│   ├── styles/            # Tailwind ve özel stiller
│   ├── package.json       # Frontend bağımlılıkları
│── docs/                  # API ve proje dokümantasyonu
│── scripts/               # CI/CD ve otomasyon scriptleri
│── .gitignore             # Git için gereksiz dosyalar
│── docker-compose.yml     # Docker container yapılandırması
│── README.md              # Genel açıklamalar
```
Bu yapı sayesinde backend ve frontend bağımsız çalışabilir, ancak bir arada yönetilir.

---

## 💰 Gelir Modeli
### 1️⃣ Freemium Modeli:
- **Ücretsiz kullanıcılar**: 5 link ve temel analiz.
- **Pro kullanıcılar**: AI destekli SEO, sınırsız link, QR kod desteği.

### 2️⃣ Abonelik Planları
- **Free Plan**: 5 link, temel tıklama istatistikleri.
- **Starter Plan** - $5/ay: 50 link, gelişmiş analiz, özel linkler.
- **Pro Plan** - $15/ay: Sınırsız link, AI SEO optimizasyonu, özel domain.

### 3️⃣ API Erişimi:
- Geliştiriciler için API kullanımı sunulabilir (aylık $10 gibi bir ücretle).

---

## 📌 Kurulum ve Çalıştırma

### 🛠 Gerekli Bağımlılıklar
- **Node.js** ve **npm** (veya yarn)
- **PostgreSQL** (veya Firebase)
- **Docker** (isteğe bağlı)

### 🚀 Projeyi Çalıştırma
#### 1️⃣ Depoyu Klonlayın:
```sh
git clone https://github.com/username/smartlink.git
cd smartlink
```

#### 2️⃣ Backend Kurulumu
```sh
cd backend
npm install
npm run start
```

#### 3️⃣ Frontend Kurulumu
```sh
cd frontend
npm install
npm run dev
```

#### 4️⃣ Çevresel Değişkenleri Ayarlayın
**`.env`** dosyasını oluşturun ve gerekli API anahtarlarını girin.

---

## 📢 Lansman ve Pazarlama Stratejisi
- **SEO ve Blog İçerikleri**: "En iyi link kısaltma servisleri", "SEO dostu link paylaşımı nasıl yapılır?" gibi içerikler.
- **Ücretsiz Kullanıcılar için Değer Sağlama**: Ücretsiz plan sunarak daha fazla kişiyi çek.
- **Topluluklara Katılım**: Product Hunt, Indie Hackers, Reddit ve LinkedIn topluluklarında paylaşım.

---

## 💡 SmartLink'in Avantajları
| Rakip | Eksiklikleri | SmartLink'in Avantajı |
|--------|------------|----------------------|
| **Bit.ly** | AI destekli değil, pahalı | AI tabanlı öneriler, daha uygun fiyat |
| **Rebrandly** | Ücretsiz versiyonu sınırlı | Daha fazla ücretsiz özellik |
| **Linktree** | SEO desteği yok | AI destekli SEO ve öneriler |

---

## 📌 Katkıda Bulunma
Bu projeye katkıda bulunmak isterseniz, lütfen **pull request** açın veya bir **issue** oluşturun.

---

## 📞 İletişim
Eğer herhangi bir sorunuz varsa, [e-posta adresiniz] üzerinden bizimle iletişime geçebilirsiniz.

---

**🚀 SmartLink ile linklerinizi AI destekli şekilde yönetin ve optimize edin!**
