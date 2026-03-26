import { motion } from 'motion/react';
import React from 'react';
import { Shield, Target, Zap } from 'lucide-react';

export default function Home() {
  const features = [
    {
      title: "ELITE DEFENSE",
      desc: "Our program focuses on tactical superiority and physical dominance.",
      icon: Shield
    },
    {
      title: "PRECISION TECH",
      desc: "Utilizing advanced analytics to optimize every play and player performance.",
      icon: Target
    },
    {
      title: "HIGH VOLTAGE",
      desc: "The fastest-paced athletic program in the collegiate circuit.",
      icon: Zap
    }
  ];

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background Video */}
      <div className="fixed inset-0 z-0 overflow-hidden bg-black">
        <iframe
          src="https://player.vimeo.com/video/1177221688?autoplay=1&loop=1&muted=1&background=1"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[100%] min-h-[100%] w-[177.77777778vh] h-[56.25vw] border-none pointer-events-none opacity-60"
          allow="autoplay; fullscreen"
          title="Background Video"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 flex flex-col">
        {/* Hero and Features */}
        <div className="relative">
          <div className="relative z-10">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
              <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative flex flex-col items-center"
                >
                  <h4 className="font-heading text-base md:text-lg tracking-[0.4em] uppercase mb-4 text-white font-medium">
                    WELCOME TO
                  </h4>
                  <h1 className="text-5xl md:text-8xl mb-8 leading-tight tracking-tighter font-display uppercase text-purple-900 flex flex-wrap justify-center gap-x-4">
                    <span className="text-red-600">VIGNAN'S</span>
                    <span className="text-blue-600">NIRULA SPORTS</span>
                  </h1>
                  <div className="h-px w-32 mx-auto bg-purple-900/20 mb-10" />
                </motion.div>
              </div>
            </section>

            {/* Features Section */}
            <section className="py-24 px-4">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {features.map((feature, i) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="p-12 border border-neutral-100 bg-white shadow-sm hover:shadow-xl transition-all duration-500 group rounded-3xl"
                    >
                      <feature.icon className="w-10 h-10 mb-8 text-purple-900 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                      <h3 className="text-2xl font-display tracking-tight mb-4 text-purple-900 uppercase">
                        {feature.title}
                      </h3>
                      <p className="text-neutral-600 text-sm leading-relaxed">
                        {feature.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* About Us Section (Our Legacy) */}
        <section className="py-32 px-4 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-7xl md:text-9xl font-display tracking-tighter leading-none mb-10 uppercase text-white">
                  OUR <span className="text-white/80 italic font-serif font-light lowercase">legacy</span>
                </h2>
                <div className="h-1.5 w-32 bg-white mb-10" />
                <p className="text-3xl text-white font-heading font-light leading-tight uppercase tracking-tight max-w-md">
                  Empowering women through athletic excellence and competitive spirit.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-10"
              >
                <p className="text-white/90 text-xl leading-relaxed font-light">
                  Vignan's Nirula Sports is the premier athletic portal for the Vignan's Nirula Institute of Technology and Science for Women. We are dedicated to fostering a culture of excellence, sportsmanship, and physical well-being among our students.
                </p>
                <p className="text-white/90 text-xl leading-relaxed font-light">
                  Our programs are designed to provide a platform for our athletes to showcase their talents, build leadership skills, and achieve their full potential. From inter-collegiate tournaments to internal athletic meets, we strive for perfection in every play.
                </p>
                <div className="pt-12 grid grid-cols-2 gap-12 border-t border-white/10">
                  <div className="group">
                    <h4 className="font-display text-5xl text-white mb-3 tracking-tighter group-hover:text-blue-400 transition-colors duration-300">10+</h4>
                    <p className="text-[10px] text-white/60 uppercase tracking-[0.2em] font-bold">Sports Disciplines</p>
                  </div>
                  <div className="group">
                    <h4 className="font-display text-5xl text-white mb-3 tracking-tighter group-hover:text-red-400 transition-colors duration-300">500+</h4>
                    <p className="text-[10px] text-white/60 uppercase tracking-[0.2em] font-bold">Active Athletes</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
