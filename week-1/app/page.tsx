export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8faf7] text-gray-800">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-green-700">
          Nutri<span className="text-green-400">Plan</span>
        </h1>

        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#home" className="hover:text-green-600">
            Home
          </a>
          <a href="#program" className="hover:text-green-600">
            Program Diet
          </a>
          <a href="#makanan" className="hover:text-green-600">
            Makanan
          </a>
          <a href="#tips" className="hover:text-green-600">
            Tips
          </a>
        </div>

        <button className="bg-green-600 text-white px-5 py-2.5 rounded-full hover:bg-green-700 transition">
          Mulai Sekarang
        </button>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="max-w-6xl mx-auto px-8 py-20 grid md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <p className="text-green-600 font-semibold mb-4">
            HEALTHY LIFESTYLE
          </p>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
            Sehat bukan berarti harus{" "}
            <span className="text-green-600">menyiksa diri.</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Temukan pola makan yang sesuai dengan kebutuhanmu dan mulai
            perjalanan menuju hidup yang lebih sehat dan seimbang.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-green-600 text-white px-7 py-3 rounded-full font-semibold hover:bg-green-700 transition">
              Mulai Diet
            </button>

            <button className="border border-green-600 text-green-600 px-7 py-3 rounded-full font-semibold hover:bg-green-50 transition">
              Pelajari
            </button>
          </div>
        </div>

        {/* Hero Card */}
        <div className="bg-green-100 rounded-3xl p-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <p className="text-gray-500">Daily Nutrition</p>

            <div className="flex items-end gap-2 mt-3">
              <span className="text-5xl font-bold text-gray-900">1,850</span>
              <span className="text-gray-500 mb-2">kcal/day</span>
            </div>

            <div className="mt-8 space-y-5">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Protein</span>
                  <span>90g</span>
                </div>

                <div className="h-3 bg-gray-100 rounded-full">
                  <div className="h-3 w-[70%] bg-green-500 rounded-full"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Carbohydrate</span>
                  <span>220g</span>
                </div>

                <div className="h-3 bg-gray-100 rounded-full">
                  <div className="h-3 w-[60%] bg-yellow-400 rounded-full"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Fat</span>
                  <span>55g</span>
                </div>

                <div className="h-3 bg-gray-100 rounded-full">
                  <div className="h-3 w-[45%] bg-orange-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Diet */}
      <section id="program" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-12">
            <p className="text-green-600 font-semibold">PROGRAM</p>

            <h2 className="text-4xl font-bold mt-2">
              Pilih Program Dietmu
            </h2>

            <p className="text-gray-500 mt-4">
              Sesuaikan program dengan tujuan dan kebutuhan tubuhmu.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="border border-gray-100 rounded-2xl p-7 hover:shadow-lg transition">
              <div className="text-4xl mb-5">🥗</div>

              <h3 className="text-xl font-bold mb-3">
                Healthy Diet
              </h3>

              <p className="text-gray-500 leading-7">
                Pola makan seimbang dengan kombinasi protein,
                karbohidrat, sayur, dan buah.
              </p>

              <button className="mt-6 text-green-600 font-semibold">
                Lihat Program →
              </button>
            </div>

            {/* Card 2 */}
            <div className="border border-gray-100 rounded-2xl p-7 hover:shadow-lg transition">
              <div className="text-4xl mb-5">🔥</div>

              <h3 className="text-xl font-bold mb-3">
                Weight Loss
              </h3>

              <p className="text-gray-500 leading-7">
                Program dengan pengaturan asupan energi dan
                kebiasaan makan yang lebih teratur.
              </p>

              <button className="mt-6 text-green-600 font-semibold">
                Lihat Program →
              </button>
            </div>

            {/* Card 3 */}
            <div className="border border-gray-100 rounded-2xl p-7 hover:shadow-lg transition">
              <div className="text-4xl mb-5">💪</div>

              <h3 className="text-xl font-bold mb-3">
                Muscle Building
              </h3>

              <p className="text-gray-500 leading-7">
                Fokus pada asupan protein dan nutrisi untuk
                mendukung aktivitas fisik.
              </p>

              <button className="mt-6 text-green-600 font-semibold">
                Lihat Program →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Food Section */}
      <section id="makanan" className="py-20 max-w-6xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-green-600 font-semibold">
              HEALTHY FOOD
            </p>

            <h2 className="text-4xl font-bold mt-2 leading-tight">
              Makanan sehat tidak harus membosankan.
            </h2>

            <p className="text-gray-600 mt-5 leading-8">
              Pilih makanan yang kaya nutrisi dan tetap nikmati
              makanan favoritmu dengan porsi yang sesuai.
            </p>

            <div className="mt-7 space-y-4">
              <div className="flex items-center gap-4">
                <span className="bg-green-100 p-3 rounded-full">
                  🥦
                </span>
                <div>
                  <h4 className="font-bold">Sayuran</h4>
                  <p className="text-sm text-gray-500">
                    Sumber vitamin dan mineral
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="bg-yellow-100 p-3 rounded-full">
                  🍳
                </span>
                <div>
                  <h4 className="font-bold">Protein</h4>
                  <p className="text-sm text-gray-500">
                    Membantu menjaga dan membangun otot
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="bg-orange-100 p-3 rounded-full">
                  🍎
                </span>
                <div>
                  <h4 className="font-bold">Buah</h4>
                  <p className="text-sm text-gray-500">
                    Kaya vitamin dan serat
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="bg-green-100 rounded-3xl h-52 flex items-center justify-center text-7xl">
              🥗
            </div>

            <div className="bg-yellow-100 rounded-3xl h-52 flex items-center justify-center text-7xl mt-8">
              🍳
            </div>

            <div className="bg-orange-100 rounded-3xl h-52 flex items-center justify-center text-7xl">
              🍎
            </div>

            <div className="bg-blue-100 rounded-3xl h-52 flex items-center justify-center text-7xl mt-8">
              🥑
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section id="tips" className="bg-green-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-12">
            <p className="text-green-200 font-semibold">
              DAILY TIPS
            </p>

            <h2 className="text-4xl font-bold mt-2">
              Kebiasaan kecil, perubahan besar.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-2xl p-7">
              <span className="text-3xl">💧</span>
              <h3 className="text-xl font-bold mt-5">
                Minum Air
              </h3>
              <p className="text-green-100 mt-3 leading-7">
                Pastikan tubuh mendapatkan cukup cairan setiap hari.
              </p>
            </div>

            <div className="bg-white/10 rounded-2xl p-7">
              <span className="text-3xl">🥗</span>
              <h3 className="text-xl font-bold mt-5">
                Makan Seimbang
              </h3>
              <p className="text-green-100 mt-3 leading-7">
                Kombinasikan berbagai jenis makanan agar kebutuhan
                nutrisi tetap terpenuhi.
              </p>
            </div>

            <div className="bg-white/10 rounded-2xl p-7">
              <span className="text-3xl">🏃</span>
              <h3 className="text-xl font-bold mt-5">
                Tetap Aktif
              </h3>
              <p className="text-green-100 mt-3 leading-7">
                Luangkan waktu untuk bergerak dan melakukan aktivitas
                fisik secara rutin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <p>
          © 2026 NutriPlan. Healthy lifestyle starts with you.
        </p>
      </footer>
    </main>
  );
}