import { Zap, ShieldCheck, Gamepad2, Headset } from "lucide-react";

const packages = [
  {
    speed: 20,
    monthlyPrice: 198690, // 179,000 * 1.11
    description: "Browsing & sosmed ringan",
    idealFor: "3-5 Perangkat",
  },
  {
    speed: 30,
    monthlyPrice: 265290, // 239,000 * 1.11
    description: "Streaming & WFH",
    idealFor: "5-7 Perangkat",
  },
  {
    speed: 50,
    monthlyPrice: 309690, // 279,000 * 1.11
    description: "Streaming 4K & Gaming",
    idealFor: "8-10 Perangkat",
    isBestSeller: false, // Menyesuaikan, karena ada 2 best seller
  },
  {
    speed: 75,
    monthlyPrice: 331890, // 299,000 * 1.11
    description: "Streaming 4K & Gaming",
    idealFor: "8-10 Perangkat",
    isBestSeller: true,
  },
  {
    speed: 100,
    monthlyPrice: 354090, // 319,000 * 1.11
    description: "Kebutuhan keluarga besar & pro",
    idealFor: "10+ Perangkat",
  },
  {
    speed: 200,
    monthlyPrice: 409590, // 369,000 * 1.11
    description: "Kebutuhan keluarga besar & pro",
    idealFor: "10+ Perangkat",
  },
];

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
};

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <div className="flex items-center space-x-3">
    <div className="flex-shrink-0 bg-blue-100 text-blue-600 p-2.5 rounded-full">
      {icon}
    </div>
    <div>
      <h3 className="font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  </div>
);

const PriceCard: React.FC<{ pkg: (typeof packages)[0] }> = ({ pkg }) => {
  const price6Months = pkg.monthlyPrice * 5;
  const price12Months = pkg.monthlyPrice * 10;
  const savings6Months = pkg.monthlyPrice; // Hemat 1 bulan
  const savings12Months = pkg.monthlyPrice * 2; // Hemat 2 bulan

  return (
    <div
      className={`relative bg-white rounded-2xl shadow-lg p-6 border-t-4 transition-transform duration-300 hover:scale-105 ${
        pkg.isBestSeller ? "border-yellow-400" : "border-blue-500"
      }`}
    >
      {pkg.isBestSeller && (
        <div className="absolute -top-4 right-4 bg-yellow-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md transform rotate-6">
          PALING LARIS
        </div>
      )}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-blue-600">{pkg.speed} Mbps</h3>
        <p className="text-gray-500 text-sm mt-1">{pkg.idealFor}</p>
      </div>

      <div className="my-5 text-center">
        <span className="text-4xl font-extrabold text-gray-800">
          {formatCurrency(pkg.monthlyPrice)}
        </span>
        <span className="text-gray-500">/bulan</span>
        <p className="text-xs text-gray-400 mt-1">Langganan bulanan</p>
      </div>

      <div className="bg-gray-50 rounded-lg p-4 mt-4 text-sm">
        <p className="font-bold text-center text-gray-700 mb-3">
          Atau Pilih Paket Hemat!
        </p>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold text-gray-800">Langganan 6 Bulan</p>
              <p className="font-bold text-lg text-green-600">
                {formatCurrency(price6Months)}
              </p>
            </div>
            <div className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">
              Hemat {formatCurrency(savings6Months)}
            </div>
          </div>
          <div className="border-t border-gray-200"></div>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold text-gray-800">Langganan 12 Bulan</p>
              <p className="font-bold text-lg text-green-600">
                {formatCurrency(price12Months)}
              </p>
            </div>
            <div className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">
              Hemat {formatCurrency(savings12Months)}
            </div>
          </div>
        </div>
        <p className="text-xs text-center text-gray-400 mt-3">
          Bayar 5 gratis 1 / Bayar 10 gratis 2
        </p>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <main className="max-w-5xl mx-auto p-4 md:p-6">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            IDPlay
          </h1>
          <p className="mt-2 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Solusi Internet Cepat, Stabil, dan Tanpa Batas untuk Semua Kebutuhan
            Anda.
          </p>
        </header>

        {/* Fitur Unggulan */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-center text-gray-800 mb-6">
            Kenapa Pilih IDPlay?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
            <FeatureCard
              icon={<Zap size={20} />}
              title="TRUE UNLIMITED"
              description="Tanpa FUP, kuota bebas sepuasnya!"
            />
            <FeatureCard
              icon={<ShieldCheck size={20} />}
              title="100% FIBER OPTIC"
              description="Koneksi super stabil anti putus-putus."
            />
            <FeatureCard
              icon={<Gamepad2 size={20} />}
              title="LANCAR STREAMING & GAMING"
              description="Nikmati hiburan tanpa buffering, ping rendah."
            />
            <FeatureCard
              icon={<Headset size={20} />}
              title="SUPPORT PRIORITAS 24/7"
              description="Tim teknis kami siap membantu kapan saja."
            />
          </div>
        </section>

        {/* Banner Promo */}
        <section className="my-12">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white p-6 rounded-2xl text-center shadow-lg transform -rotate-2">
            <h3 className="font-extrabold text-2xl md:text-3xl drop-shadow-md">
              PROMO DAFTAR HARI INI!
            </h3>
            <p className="font-semibold text-base md:text-lg mt-1 drop-shadow-sm">
              GRATIS BIAYA INSTALASI (Senilai Rp 500.000)
            </p>
          </div>
        </section>

        {/* Daftar Harga (Mobile-First) */}
        <section>
          <h2 className="text-xl font-bold text-center text-gray-800 mb-6">
            Pilih Paket Terbaik & Paling Hemat
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <PriceCard key={pkg.speed} pkg={pkg} />
            ))}
          </div>
          <p className="text-xs text-center text-gray-500 mt-6">
            *Harga final sudah termasuk PPN 11%. Syarat & Ketentuan berlaku.
          </p>
        </section>

        {/* Footer / CTA */}
        <footer className="mt-12 text-center flex flex-col">
          <p className="text-lg font-bold text-gray-800">
            Siap Punya Internet Kencang?
          </p>
          <p className="text-gray-600 mt-1">
            Hubungi saya sekarang untuk info & pendaftaran cepat!
          </p>
          <a
            href="https://wa.me/62895703153160?text=Halo%20Admin%2C%20saya%20tertarik%20dengan%20promo%20internet%20IDPlay.%20Bisa%20bantu%20informasi%20lebih%20lanjut%3F"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
            className="mt-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300"
          >
            Hubungi via WhatsApp
          </a>
          <div className="mt-8 border-t border-gray-200 pt-4">
            <p className="text-xs text-gray-500">
              Halaman ini dibuat oleh freelance sales marketing untuk tujuan
              promosi.
              <br />
              Website resmi IdPlay dapat diakses di:{" "}
              <a
                href="https://idplay.co.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://idplay.co.id
              </a>
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
