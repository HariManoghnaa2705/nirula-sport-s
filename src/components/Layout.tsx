import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Trophy, Calendar, Home, Menu, X, Users, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'Games', path: '/games', icon: Users },
  { name: 'Achievements', path: '/achievements', icon: Trophy },
  { name: 'Contact', path: '/contact', icon: Mail },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  return (
    <div className={cn("min-h-screen relative overflow-hidden", isHomePage ? "bg-transparent" : "bg-white")}>
      {/* Navigation */}
      <nav className={cn(
        "sticky top-0 left-0 right-0 z-50 border-b transition-colors duration-500",
        isHomePage ? "border-neutral-100 bg-white/80" : "border-neutral-200 bg-white/80"
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-32">
            <Link to="/" className="flex items-center gap-4 py-3 bg-white rounded-2xl px-4 shadow-sm border border-neutral-100">
              <img 
                src="https://i.postimg.cc/vmf6HM33/vniw.jpg" 
                alt="Vignan's Nirula Logo" 
                className="h-20 md:h-24 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="w-px h-14 bg-neutral-200 hidden md:block" />
              <img 
                src="https://i.postimg.cc/rwMsB7rs/Whats-App-Image-2026-03-26-at-11-40-53-AM.jpg" 
                alt="Sports Logo" 
                className="h-20 md:h-24 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </Link>

            {/* Desktop Nav */}
            <div className={cn(
              "hidden md:flex items-center border rounded-2xl p-1.5 space-x-1 transition-colors duration-500",
              isHomePage ? "bg-neutral-100 border-neutral-200" : "bg-neutral-100 border-neutral-200"
            )}>
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-xl",
                    location.pathname === item.path 
                      ? "bg-purple-900 text-white shadow-lg"
                      : "text-neutral-500 hover:text-purple-900 hover:bg-neutral-200"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className={cn("p-2 transition-colors", isHomePage ? "text-purple-900" : "text-purple-900")}>
                {isOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
              "md:hidden border-t py-4 px-4 space-y-2 shadow-xl",
              isHomePage ? "bg-white border-neutral-200" : "bg-white border-neutral-200"
            )}
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center space-x-4 p-3 rounded-lg transition-colors",
                  location.pathname === item.path 
                    ? "bg-purple-900 text-white"
                    : "text-neutral-600 hover:bg-neutral-100"
                )}
              >
                <item.icon size={20} />
                <span className="font-medium uppercase tracking-widest text-xs">{item.name}</span>
              </Link>
            ))}
          </motion.div>
        )}
      </nav>

      <main className="relative z-10">
        {children}
      </main>

      {/* Footer */}
      <footer className={cn(
        "py-12 px-4 border-t mt-20 transition-colors duration-500",
        isHomePage ? "border-neutral-200 bg-neutral-50" : "border-neutral-200 bg-neutral-50"
      )}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl mb-4 font-display tracking-tight uppercase">
              <span className="text-red-500">VIGNAN'S</span> <span className="text-blue-400">NIRULA</span> <span className={cn("italic font-serif lowercase tracking-normal", isHomePage ? "text-purple-900" : "text-purple-900")}>sports</span>
            </h3>
            <p className={cn("text-sm leading-relaxed max-w-sm", isHomePage ? "text-neutral-500" : "text-neutral-500")}>
              The future of collegiate sports. Pushing boundaries through technology, 
              athleticism, and innovation.
            </p>
          </div>
          <div>
            <h4 className={cn("font-mono text-xs uppercase tracking-widest mb-4", isHomePage ? "text-purple-900" : "text-purple-900")}>Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {navItems.map(item => (
                <Link key={item.path} to={item.path} className={cn("text-sm transition-colors", isHomePage ? "text-neutral-500 hover:text-purple-900" : "text-neutral-500 hover:text-purple-900")}>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className={cn("max-w-7xl mx-auto mt-12 pt-8 border-t text-center text-[10px] tracking-[0.2em] uppercase", isHomePage ? "border-neutral-200 text-neutral-400" : "border-neutral-200 text-neutral-400")}>
          © 2026 VIGNAN'S NIRULA SPORTS // ALL RIGHTS RESERVED // SYSTEM STATUS: OPTIMAL
        </div>
      </footer>
    </div>
  );
}
