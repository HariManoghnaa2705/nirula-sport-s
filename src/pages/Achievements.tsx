import { motion, AnimatePresence } from 'motion/react';
import { Trophy, Star, Award, Target } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Lightbox from '@/components/Lightbox';

interface Achievement {
  id: number;
  title: string;
  sport: string;
  desc: string;
  iconName: string;
  color: string;
  bg: string;
  image: string;
}

const iconMap: Record<string, any> = {
  Trophy,
  Star,
  Award,
  Target
};

const defaultAchievements: Achievement[] = [
  {
    id: 1,
    title: 'Articles',
    sport: 'SPORTS',
    desc: "Dive into our comprehensive archive of press coverage, featured editorials, and in-depth interviews. These articles chronicle our athletes' journeys from local trials to national championships, celebrating the academy's growing influence in the professional sports arena.",
    iconName: 'Trophy',
    color: 'text-black',
    bg: 'bg-neutral-100',
    image: 'https://i.postimg.cc/T3cqxgvZ/Whats-App-Image-2026-03-25-at-1-20-07-PM.jpg'
  },
  {
    id: 2,
    title: 'Trophies ',
    sport: 'SPORTS',
    desc: "Our growing collection of silverware, representing years of dedication, discipline, and the pursuit of excellence across various inter-college and state-level competitions.",
    iconName: 'Trophy',
    color: 'text-black',
    bg: 'bg-neutral-100',
    image: 'https://i.postimg.cc/Y0Sz51XL/Whats-App-Image-2026-03-25-at-1-20-21-PM-(1).jpg'
  },
  {
    id: 3,
    title: ' KHO-KHO CHAMPIONS ',
    sport: 'SPORTS',
    desc: "Dominating the field with agility and speed, our Kho-Kho team secured a historic victory in the 2025 State Championship, showcasing incredible tactical prowess.",
    iconName: 'Trophy',
    color: 'text-black',
    bg: 'bg-neutral-100',
    image: 'https://i.postimg.cc/zXm1Cjrj/Screenshot-(5).png'
  },
  {
    id: 4,
    title: 'THROW BALL CHAMPIONS ',
    sport: 'SPORTS',
    desc: "With powerful serves and impeccable coordination, our Throw Ball team emerged victorious, proving their mettle against the toughest competitors in the region.",
    iconName: 'Trophy',
    color: 'text-black',
    bg: 'bg-neutral-100',
    image: 'https://i.postimg.cc/SRnT3wbd/Screenshot-(7).png'
  },
  {
    id: 5,
    title: 'VOLLEY BALL CHAMPIONS ',
    sport: 'SPORTS',
    desc: "A display of sheer power and teamwork at the net. Our Volleyball champions fought through every set to bring home the gold in a thrilling final match.",
    iconName: 'Trophy',
    color: 'text-black',
    bg: 'bg-neutral-100',
    image: 'https://i.postimg.cc/ryYGPZ49/Whats-App-Image-2026-03-25-at-3-09-25-PM.jpg'
  },
  {
    id: 6,
    title: 'KABADDI CHAMPIONS ',
    sport: 'SPORTS',
    desc: "Strength, strategy, and spirit. Our Kabaddi team demonstrated exceptional raiding skills and defensive coordination to clinch the championship title.",
    iconName: 'Trophy',
    color: 'text-black',
    bg: 'bg-neutral-100',
    image: 'https://i.postimg.cc/3xKBqnDN/Whats-App-Image-2026-03-25-at-12-04-46-PM.jpg'
  }
];

export default function Achievements() {
  const [achievements] = useState<Achievement[]>(defaultAchievements);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>('');

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <Lightbox 
        isOpen={!!selectedImage} 
        onClose={() => setSelectedImage(null)} 
        image={selectedImage || ''} 
        title={selectedTitle}
      />
      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <h4 className="font-mono text-purple-700/40 text-xs tracking-[0.3em] uppercase mb-2">Hall of Fame</h4>
          <h1 className="text-6xl md:text-8xl font-display uppercase tracking-tighter text-purple-900">OUR <span className="text-purple-800 italic font-serif lowercase tracking-normal font-light">achievements</span></h1>
          <p className="mt-6 text-purple-700/70 font-serif italic text-lg max-w-2xl leading-relaxed">
            Celebrating the spirit of excellence and the relentless pursuit of victory. From national championships to state-of-the-art facilities, explore the milestones that define Vignan's Nirula Sports Academy.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <AnimatePresence>
          {achievements.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white border border-neutral-100 p-0 relative overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 rounded-3xl"
            >
            {item.image && (
              <div 
                className="aspect-video overflow-hidden relative cursor-pointer"
                onClick={() => {
                  setSelectedImage(item.image);
                  setSelectedTitle(item.title);
                }}
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <Link 
                    to={`/gallery/${item.id}`}
                    className="bg-white text-purple-900 px-6 py-3 rounded-full font-mono text-xs uppercase tracking-widest hover:bg-purple-900 hover:text-white transition-colors"
                  >
                    View Gallery
                  </Link>
                </div>
              </div>
            )}

            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className={cn("p-3 rounded-xl", item.bg)}>
                  {(() => {
                    const IconComponent = iconMap[item.iconName] || Trophy;
                    return <IconComponent className={item.color} size={24} />;
                  })()}
                </div>
                <div className="font-mono text-[10px] tracking-widest text-purple-700/40 uppercase">{item.sport}</div>
              </div>
              
              <h3 className="text-3xl mb-4 font-display uppercase tracking-tight group-hover:text-purple-900 transition-colors text-purple-900">{item.title}</h3>
              <p className="text-purple-700/70 text-sm leading-relaxed mb-8">
                {item.desc}
              </p>

              <div className="pt-8 border-t border-neutral-100 flex items-center justify-between">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map(star => (
                    <Star key={star} size={12} className="fill-purple-700 text-purple-700" />
                  ))}
                </div>
                <div className="flex gap-4">
                  <button className="text-[10px] font-mono uppercase tracking-widest text-purple-900 hover:underline transition-colors">
                    Certificate
                  </button>
                  {item.image && (
                    <Link 
                      to={`/gallery/${item.id}`}
                      className="text-[10px] font-mono uppercase tracking-widest text-purple-700/40 hover:text-purple-900 transition-colors"
                    >
                      Gallery
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
