"use client"
import { Card } from "@/components/ui/card"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        }
      })
    }, observerOptions)

    // Observe all elements with scroll-animate class
    const animateElements = document.querySelectorAll(".scroll-animate")
    animateElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700">
      <style jsx>{`
        .scroll-animate {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        .scroll-animate-delay-1 {
          transition-delay: 0.2s;
        }
        .scroll-animate-delay-2 {
          transition-delay: 0.4s;
        }
        .scroll-animate-delay-3 {
          transition-delay: 0.6s;
        }
      `}</style>

      {/* Contract Address Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-5xl md:text-7xl font-black text-blue-300 text-center mb-8 drop-shadow-lg text-balance scroll-animate"
              style={{
                textShadow: "2px 2px 0px white, -2px -2px 0px white, 2px -2px 0px white, -2px 2px 0px white",
              }}
            >
              BASE $BULL
            </h2>

            <Card className="bg-white border-4 border-black p-6 mb-8 rounded-3xl scroll-animate shadow-2xl">
              <div className="flex items-center gap-4">
                <span className="text-black text-3xl font-black">CA :</span>
                <div className="text-black text-xl font-mono break-all font-bold">
                  <div>coming soon</div>
                </div>
              </div>
            </Card>

            <div className="flex justify-center">
              <div className="relative scroll-animate scroll-animate-delay-1">
                <img
                  src="/bull-mascot-white-blue.png"
                  alt="Bull trading"
                  className="rounded-lg w-64 h-64 object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-500">
        <div className="container mx-auto">
          <h2
            className="text-5xl md:text-7xl font-black text-blue-300 text-center mb-12 drop-shadow-lg text-balance scroll-animate"
            style={{
              textShadow: "2px 2px 0px white, -2px -2px 0px white, 2px -2px 0px white, -2px 2px 0px white",
            }}
          >
            ABOUT BASE $BULL
          </h2>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-white text-2xl leading-relaxed text-balance font-bold scroll-animate scroll-animate-delay-1 drop-shadow-lg">
              Bull, the mighty champion of the Base Chain. He charges through the blockchain with unstoppable force and
              determination. Along the way his powerful presence and confident swagger make him a true market leader.
              Massive in size and huge in charisma, Bull leaves a trail of blue candles and bullish energy everywhere he
              goes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-500">
        <div className="container mx-auto">
          <h2
            className="text-5xl md:text-7xl font-black text-blue-300 text-center mb-12 drop-shadow-lg text-balance scroll-animate"
            style={{
              textShadow: "2px 2px 0px white, -2px -2px 0px white, 2px -2px 0px white, -2px 2px 0px white",
            }}
          >
            MEME GALLERY
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="scroll-animate">
              <img
                src="/bull-trading-money-chart.png"
                alt="Bull Trading Success"
                className="rounded-2xl w-full h-64 object-cover shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="scroll-animate scroll-animate-delay-1">
              <img
                src="/bull-smoking-cigar-chair.png"
                alt="Bull Relaxing"
                className="rounded-2xl w-full h-64 object-cover shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="scroll-animate scroll-animate-delay-2">
              <img
                src="/bull-golden-glove-thumbs-up.png"
                alt="Bull Victory"
                className="rounded-2xl w-full h-64 object-cover shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="scroll-animate scroll-animate-delay-3">
              <img
                src="/bull-jail-prison-mug.png"
                alt="Bull Prison"
                className="rounded-2xl w-full h-64 object-cover shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="scroll-animate">
              <img
                src="/bull-army-warriors-spears.png"
                alt="Bull Army"
                className="rounded-2xl w-full h-64 object-cover shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="scroll-animate scroll-animate-delay-1">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Sep%202%2C%202025%2C%2004_23_10%20PM-TDtDRsZ5kEfI8k75ZTIBL4X3G9ebTy.png"
                alt="Bull Friends Together"
                className="rounded-2xl w-full h-64 object-cover shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="scroll-animate scroll-animate-delay-2">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Sep%202%2C%202025%2C%2004_26_13%20PM-AYrFLIorv1zhqLzrs15fl4MZZU0nhX.png"
                alt="Bull Market Success"
                className="rounded-2xl w-full h-64 object-cover shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="scroll-animate scroll-animate-delay-3">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Sep%202%2C%202025%2C%2004_21_24%20PM-FYYRp9kcIstxglEQjoImuT5BecMh4I.png"
                alt="Bull Trading Team"
                className="rounded-2xl w-full h-64 object-cover shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="scroll-animate">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%202%20Sep%202025%2C%2016.23.15-471XhFsG5s318Gp9t8p0UNRAgb0ZMT.png"
                alt="Bull Executive"
                className="rounded-2xl w-full h-64 object-cover shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="scroll-animate scroll-animate-delay-1">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Sep%202%2C%202025%2C%2004_21_41%20PM-NsuCARwlynHdrdeHiMYwLGT4yd6BiO.png"
                alt="Bull Resort Life"
                className="rounded-2xl w-full h-64 object-cover shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="scroll-animate scroll-animate-delay-2">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Sep%202%2C%202025%2C%2004_22_38%20PM-XlNaWQ4MULqM8pPmd1IJYZo0fmzHdm.png"
                alt="Bull Warehouse Operations"
                className="rounded-2xl w-full h-64 object-cover shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="scroll-animate scroll-animate-delay-3">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Sep%202%2C%202025%2C%2004_23_47%20PM-KdwshYnBpboMsKoAkXInzzKwGIYHQR.png"
                alt="Bull Mystic Powers"
                className="rounded-2xl w-full h-64 object-cover shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-500">
        <div className="container mx-auto">
          <h2
            className="text-5xl md:text-7xl font-black text-blue-300 text-center mb-12 drop-shadow-lg text-balance scroll-animate"
            style={{
              textShadow: "2px 2px 0px white, -2px -2px 0px white, 2px -2px 0px white, -2px 2px 0px white",
            }}
          >
            TOKENOMICS
          </h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-blue-400 border-0 p-8 text-center rounded-3xl scroll-animate shadow-2xl">
              <h3 className="text-2xl font-black text-white mb-2">TICKER :</h3>
              <p className="text-3xl font-black text-white">B$BULL</p>
            </Card>

            <Card className="bg-blue-400 border-0 p-8 text-center rounded-3xl scroll-animate scroll-animate-delay-1 shadow-2xl">
              <h3 className="text-2xl font-black text-white mb-2">SUPPLY :</h3>
              <p className="text-xl font-black text-white">1,000,000,000</p>
            </Card>

            <Card className="bg-blue-400 border-0 p-8 text-center rounded-3xl scroll-animate scroll-animate-delay-2 shadow-2xl">
              <h3 className="text-2xl font-black text-white mb-2">TAX :</h3>
              <p className="text-3xl font-black text-white">0</p>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Buy Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-blue-500 to-blue-600">
        <div className="container mx-auto">
          <h2
            className="text-5xl md:text-7xl font-black text-blue-300 text-center mb-12 drop-shadow-lg text-balance scroll-animate"
            style={{
              textShadow: "2px 2px 0px white, -2px -2px 0px white, 2px -2px 0px white, -2px 2px 0px white",
            }}
          >
            HOW TO BUY ?
          </h2>

          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="flex items-start gap-6 scroll-animate">
              <div className="bg-blue-400 text-white text-3xl font-black rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 border-4 border-white shadow-xl">
                1
              </div>
              <div>
                <h3 className="text-3xl font-black text-white mb-4 drop-shadow-lg">CREATE A WALLET</h3>
                <p className="text-white text-lg leading-relaxed drop-shadow-md">
                  Download metamask or your wallet of choice from the app store or google play store for free. Desktop
                  users, download the google chrome extension by going to metamask.io.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 scroll-animate scroll-animate-delay-1">
              <div className="bg-blue-400 text-white text-3xl font-black rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 border-4 border-white shadow-xl">
                2
              </div>
              <div>
                <h3 className="text-3xl font-black text-white mb-4 drop-shadow-lg">GET SOME ETH BASE</h3>
                <p className="text-white text-lg leading-relaxed drop-shadow-md">
                  Have ETH in your wallet to switch to B$BULL. If you don't have any ETH Base, you can buy directly on
                  metamask, transfer from another wallet, or buy on another exchange and send it to your wallet.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 scroll-animate scroll-animate-delay-2">
              <div className="bg-blue-400 text-white text-3xl font-black rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 border-4 border-white shadow-xl">
                3
              </div>
              <div>
                <h3 className="text-3xl font-black text-white mb-4 drop-shadow-lg">SWAP ETH FOR B$BULL</h3>
                <p className="text-white text-lg leading-relaxed drop-shadow-md">
                  Swap ETH for B$BULL We have ZERO taxes so you don't need to worry about buying with a specific
                  slippage, although you may need to use slippage during times of market volatility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-500">
        <div className="container mx-auto text-center">
          <h2
            className="text-5xl md:text-7xl font-black text-blue-300 mb-8 drop-shadow-lg scroll-animate"
            style={{
              textShadow: "2px 2px 0px white, -2px -2px 0px white, 2px -2px 0px white, -2px 2px 0px white",
            }}
          >
            COMMUNITY
          </h2>

          <div className="flex justify-center gap-8 mb-12 scroll-animate scroll-animate-delay-1">
            <a
              href="https://t.me/basebullish"
              className="text-white text-2xl font-bold hover:text-blue-200 transition-colors duration-300 drop-shadow-lg"
            >
              telegram
            </a>

            <a
              href="https://x.com/basebull_"
              className="text-white text-2xl font-bold hover:text-blue-200 transition-colors duration-300 drop-shadow-lg"
            >
              twitter
            </a>

            <a
              href="#"
              className="text-white text-2xl font-bold hover:text-blue-200 transition-colors duration-300 drop-shadow-lg"
            >
              ape.store
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center bg-blue-700">
        <p className="text-white text-xl font-bold drop-shadow-lg scroll-animate">@ 2025 - All rights reserved</p>
      </footer>
    </div>
  )
}
