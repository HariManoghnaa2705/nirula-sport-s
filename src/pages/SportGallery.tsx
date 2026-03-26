import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Image as ImageIcon } from 'lucide-react';
import { useState } from 'react';
import Lightbox from '@/components/Lightbox';

const sportData: Record<string, { title: string; sport: string; description: string }> = {
  '1': { 
    title: 'Articles', 
    sport: 'SPORTS',
    description: "A collection of featured articles and press releases highlighting our athletes' journeys, major tournament wins, and the academy's growing legacy in the sporting world."
  },
  '2': { 
    title: 'TROPHIES', 
    sport: 'SPORTS',
    description: "Our growing collection of silverware, representing years of dedication, discipline, and the pursuit of excellence across various inter-college and state-level competitions."
  },
  '3': { 
    title: 'KHO-KHO', 
    sport: 'SPORTS',
    description: "Dominating the field with agility and speed, our Kho-Kho team secured a historic victory in the 2025 State Championship, showcasing incredible tactical prowess."
  },
  '4': { 
    title: 'THROW BALL', 
    sport: 'SPORTS',
    description: "With powerful serves and impeccable coordination, our Throw Ball team emerged victorious, proving their mettle against the toughest competitors in the region."
  },
  '5': { 
    title: 'VOLLEY BALL', 
    sport: 'SPORTS',
    description: "A display of sheer power and teamwork at the net. Our Volleyball champions fought through every set to bring home the gold in a thrilling final match."
  },
  '6': { 
    title: 'KABADDI', 
    sport: 'SPORTS',
    description: "Strength, strategy, and spirit. Our Kabaddi team demonstrated exceptional raiding skills and defensive coordination to clinch the championship title."
  },
  '7': { 
    title: 'TENNIKOIT', 
    sport: 'SPORTS',
    description: "A sport played on a court with a rubber ring, where players catch and throw the ring over a net."
  },
  '8': { 
    title: 'CHESS', 
    sport: 'SPORTS',
    description: "A strategic board game that challenges the mind, requiring foresight and tactical planning."
  },
  '9': { 
    title: 'CARROMS', 
    sport: 'SPORTS',
    description: "A popular indoor strike-and-pocket game that demands concentration and smooth execution."
  },
  '10': { 
    title: 'BADMINTON', 
    sport: 'SPORTS',
    description: "A racket sport played using a shuttlecock, known for its high speed and athletic requirements."
  },
  '11': { 
    title: 'RUNNING', 
    sport: 'SPORTS',
    description: "A track event testing speed and endurance across various distances."
  },
  '12': { 
    title: 'LONG JUMP', 
    sport: 'SPORTS',
    description: "A field event where athletes compete by jumping as far as possible from a take-off point."
  },
  '13': { 
    title: 'SHOT PUT', 
    sport: 'SPORTS',
    description: "A track and field event involving the throwing of a heavy spherical ball as far as possible."
  },
  '14': { 
    title: 'CRICKET', 
    sport: 'SPORTS',
    description: "A bat-and-ball game played between two teams, involving batting, bowling, and fielding."
  },
};

interface GalleryImage {
  url: string;
  title?: string;
  description?: string;
}

export default function SportGallery() {
  const { sportId } = useParams();
  const navigate = useNavigate();
  
  // Try to get data from hardcoded sportData or localStorage achievements
  const data = sportId ? (sportData[sportId] || (() => {
    const savedAchievements = localStorage.getItem('academy_achievements');
    if (savedAchievements) {
      const achievements = JSON.parse(savedAchievements);
      const found = achievements.find((a: any) => a.id.toString() === sportId);
      if (found) return { title: found.title, sport: found.sport, description: found.desc };
    }
    return null;
  })()) : null;

  const [images] = useState<GalleryImage[]>(() => {
    const saved = localStorage.getItem(`gallery_${sportId}`);
    if (saved) {
      const parsed = JSON.parse(saved);
      // Handle legacy string array
      return parsed.map((item: any) => typeof item === 'string' ? { url: item } : item);
    }
    
    // Default images based on sportId
    if (sportId === '1') {
      return [
        { 
          url: 'https://i.postimg.cc/T3cqxgvZ/Whats-App-Image-2026-03-25-at-1-20-07-PM.jpg', 
          title: 'Championship Glory: Vignan\'s Nirula Dominates',
          description: 'Our athletes showcased exceptional skill and determination at the 2025 Inter-College Championship, securing top positions across multiple disciplines. The National Sports Daily highlighted our academy\'s rigorous training programs and the tactical brilliance of our coaching staff.' 
        },
        { 
          url: 'https://i.postimg.cc/Y0Sz51XL/Whats-App-Image-2026-03-25-at-1-20-21-PM-(1).jpg', 
          title: 'Nurturing the Future of Sports',
          description: 'A comprehensive special report by Regional Sports Network explored how Vignan\'s Nirula is transforming the local sporting landscape. The article focused on our state-of-the-art facilities, including the new indoor complex and the advanced sports science lab that helps our athletes optimize their performance.' 
        },
        { 
          url: 'https://i.postimg.cc/zXm1Cjrj/Screenshot-(5).png', 
          title: 'The Visionary Behind the Success',
          description: 'In an exclusive interview, Head Coach Kishore Kumar shared his philosophy on holistic athlete development. He discussed the importance of balancing academic excellence with athletic rigor and outlined the academy\'s ambitious roadmap for the 2026 national circuit.' 
        },
        { 
          url: 'https://picsum.photos/seed/article-4/800/600', 
          title: 'Breaking Barriers in Women\'s Athletics',
          description: 'This featured piece in "Women in Sports" magazine celebrated our female athletes\' record-breaking performances in track and field. It highlighted the supportive environment at Vignan\'s Nirula that empowers women to excel in competitive sports.' 
        },
        { 
          url: 'https://picsum.photos/seed/article-5/800/600', 
          title: 'The Road to National Excellence',
          description: 'A deep-dive analysis into the academy\'s training methodology, focusing on the integration of mental conditioning and sports nutrition. The report emphasizes how Vignan\'s Nirula is setting a new standard for collegiate sports in the region.' 
        },
        { 
          url: 'https://picsum.photos/seed/article-6/800/600', 
          title: 'Community Impact through Sports',
          description: 'This article highlights our academy\'s outreach programs, bringing professional sports coaching to underprivileged youth in the surrounding areas, fostering a culture of health and discipline.' 
        },
      ];
    }

    if (sportId === '2') {
      return [
        { 
          url: 'https://i.postimg.cc/Y0Sz51XL/Whats-App-Image-2026-03-25-at-1-20-21-PM-(1).jpg', 
          title: 'Overall Championship 2025',
          description: 'The Overall Championship Trophy won at the 2025 Inter-College Sports Meet, marking our 3rd consecutive year of dominance.' 
        },
        { 
          url: 'https://picsum.photos/seed/trophy-2/800/600', 
          title: 'State Volleyball Gold',
          description: 'Gold Medal in the State Level Volleyball Tournament, awarded for exceptional teamwork and sportsmanship.' 
        },
        { 
          url: 'https://picsum.photos/seed/trophy-3/800/600', 
          title: 'Best Athlete Award',
          description: 'The Best Athlete Award presented to our team captain for outstanding individual performance across multiple track events.' 
        },
      ];
    }

    if (sportId === '3') {
      return [
        { 
          url: 'https://i.postimg.cc/zXm1Cjrj/Screenshot-(5).png', 
          title: 'State Championship Finals',
          description: 'Our Kho-Kho team in action during the final match of the State Championship. Their agility and speed were unmatched.' 
        },
        { 
          url: 'https://picsum.photos/seed/khokho-2/800/600', 
          title: 'The Winning Touch',
          description: 'The winning moment: Our captain making the final touch to secure the championship title.' 
        },
        { 
          url: 'https://picsum.photos/seed/khokho-3/800/600', 
          title: 'Victory Celebration',
          description: 'Team celebration after the historic victory. This win marks a new era for our Kho-Kho program.' 
        },
      ];
    }

    if (sportId === '4') {
      return [
        { 
          url: 'https://i.postimg.cc/SRnT3wbd/Screenshot-(7).png', 
          title: 'Inter-College Finals',
          description: 'A powerful serve from our lead player during the Throw Ball Inter-College finals.' 
        },
        { 
          url: 'https://picsum.photos/seed/throwball-2/800/600', 
          title: 'Defensive Coordination',
          description: 'Perfect coordination on the court. Our defense was impenetrable throughout the tournament.' 
        },
        { 
          url: 'https://picsum.photos/seed/throwball-3/800/600', 
          title: 'Medal Ceremony',
          description: 'The Throw Ball team receiving their winners\' medals from the Chief Guest.' 
        },
      ];
    }

    if (sportId === '5') {
      return [
        { 
          url: 'https://i.postimg.cc/ryYGPZ49/Whats-App-Image-2026-03-25-at-3-09-25-PM.jpg', 
          title: 'The Winning Spike',
          description: 'A spectacular spike at the net. Our Volleyball team showed incredible power and precision.' 
        },
        { 
          url: 'https://picsum.photos/seed/volleyball-2/800/600', 
          title: 'Strategic Huddle',
          description: 'The team huddle before the deciding set. Their spirit and determination were the keys to victory.' 
        },
        { 
          url: 'https://picsum.photos/seed/volleyball-3/800/600', 
          title: 'Championship Trophy',
          description: 'Lifting the Volleyball Championship trophy high. A proud moment for the entire academy.' 
        },
      ];
    }

    if (sportId === '6') {
      return [
        { 
          url: 'https://i.postimg.cc/3xKBqnDN/Whats-App-Image-2026-03-25-at-12-04-46-PM.jpg', 
          title: 'Star Raid Action',
          description: 'A successful raid by our star player in the Kabaddi finals. Strategy and strength combined.' 
        },
        { 
          url: 'https://picsum.photos/seed/kabaddi-2/800/600', 
          title: 'Defensive Wall',
          description: 'Solid defensive wall. Our team\'s coordination made it impossible for the opponents to score.' 
        },
        { 
          url: 'https://picsum.photos/seed/kabaddi-3/800/600', 
          title: 'Kabaddi Champions',
          description: 'The Kabaddi champions posing with their hard-earned trophy and certificates.' 
        },
      ];
    }
    
    return [
      { url: `https://picsum.photos/seed/sports-${sportId}-1/800/600` },
      { url: `https://picsum.photos/seed/sports-${sportId}-2/800/600` },
      { url: `https://picsum.photos/seed/sports-${sportId}-3/800/600` },
    ];
  });

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>('');

  if (!data) return <div className="p-20 text-center font-mono uppercase">Gallery Not Found</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <Lightbox 
        isOpen={!!selectedImage} 
        onClose={() => setSelectedImage(null)} 
        image={selectedImage || ''} 
        title={selectedTitle}
      />
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-black/40 hover:text-black transition-colors font-mono text-xs uppercase tracking-widest mb-12"
      >
        <ArrowLeft size={16} />
        Back
      </button>

      <div className="mb-16">
        <h4 className="font-mono text-black/40 text-xs tracking-[0.3em] uppercase mb-2">{data.sport} GALLERY</h4>
        <h1 className="text-5xl md:text-7xl font-display uppercase tracking-tighter leading-none mb-6">
          {data.title}
        </h1>
        <p className="text-neutral-500 font-serif italic text-lg max-w-3xl leading-relaxed">
          {data.description}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Existing Images */}
        {images.map((image, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col group"
          >
            <div 
              className="aspect-video relative overflow-hidden rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
              onClick={() => {
                setSelectedImage(image.url);
                setSelectedTitle(image.title || '');
              }}
            >
              <img 
                src={image.url} 
                alt={`Gallery ${i}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <ImageIcon className="text-white" size={32} />
              </div>
            </div>
            {image.title && (
              <div className="mt-4 px-2">
                <h3 className="text-xl font-display uppercase tracking-tight text-purple-900 mb-2">
                  {image.title}
                </h3>
              </div>
            )}
            {image.description && (
              <div className="px-2">
                <p className="text-purple-700/70 font-serif italic text-sm leading-relaxed">
                  {image.description}
                </p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
