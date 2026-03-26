import { motion } from 'motion/react';
import { Users, Zap, Target, Shield, Activity } from 'lucide-react';

const interGames = [
  {
    sport: 'KHO-KHO',
    coach: 'KISHORE KUMAR',
    captain: 'MARATHAMMA',
    members: 12,
    image: 'https://i.postimg.cc/zXm1Cjrj/Screenshot-(5).png',
    color: 'border-[#5D4037]',
    description: 'A traditional Indian tag sport that requires speed, agility, and tactical thinking.'
  },
  {
    sport: 'THROW BALL',
    coach: 'KISHORE KUMAR',
    captain: 'V. VARSHA',
    members: 14,
    image: 'https://i.postimg.cc/SRnT3wbd/Screenshot-(7).png',
    color: 'border-[#5D4037]',
    description: 'A non-contact ball sport played across a net between two teams on a rectangular court.'
  },
  {
    sport: 'KABADDI',
    coach: 'KISHORE KUMAR',
    captain: 'SK. SHAJAHANBI',
    members: 12,
    image: 'https://i.postimg.cc/3xKBqnDN/Whats-App-Image-2026-03-25-at-12-04-46-PM.jpg',
    color: 'border-[#5D4037]',
    description: 'A contact team sport that involves a raider entering the opponent\'s half to tag players.'
  },
  {
    sport: 'VOLLEYBALL',
    coach: 'KISHORE KUMAR',
    captain: 'N. RAMYA',
    members: 12,
    image: 'https://i.postimg.cc/xjhvjk2S/Screenshot-(11).png',
    color: 'border-[#5D4037]',
    description: 'A team sport in which two teams are separated by a net, trying to ground the ball on the opponent\'s side.'
  }
];

const indoorGames = [
  {
    sport: 'TENNIKOIT',
    coach: 'KISHORE KUMAR',
    captain: 'T. SRAVANI',
    members: 2,
    image: 'https://i.postimg.cc/d1HP7hPv/Whats-App-Image-2026-03-25-at-12-50-39-PM-(1).jpg',
    color: 'border-neutral-800',
    description: 'A sport played on a court with a rubber ring, where players catch and throw the ring over a net.'
  },
  {
    sport: 'CHESS',
    coach: 'KISHORE KUMAR',
    captain: 'P. ANUSHA',
    members: 2,
    image: 'https://i.postimg.cc/pdr3w2nr/Whats-App-Image-2026-03-25-at-12-50-39-PM-(2).jpg',
    color: 'border-neutral-800',
    description: 'A strategic board game that challenges the mind, requiring foresight and tactical planning.'
  },
  {
    sport: 'CARROMS',
    coach: 'KISHORE KUMAR',
    captain: 'M. MOUNIKA',
    members: 4,
    image: 'https://i.postimg.cc/V6jgTT40/Whats-App-Image-2026-03-25-at-12-50-40-PM-(1).jpg',
    color: 'border-neutral-800',
    description: 'A popular indoor strike-and-pocket game that demands concentration and smooth execution.'
  },
  {
    sport: 'BADMINTON',
    coach: 'KISHORE KUMAR',
    captain: 'K. SNEHA',
    members: 4,
    image: 'https://i.postimg.cc/JhRzZHgq/Whats-App-Image-2026-03-25-at-12-58-44-PM.jpg',
    color: 'border-neutral-800',
    description: 'A racket sport played using a shuttlecock, known for its high speed and athletic requirements.'
  },
  {
    sport: 'RUNNING',
    coach: 'KISHORE KUMAR',
    captain: 'N/A',
    members: 1,
    image: 'https://i.postimg.cc/4nC9gN3q/Whats-App-Image-2026-03-25-at-1-05-17-PM.jpg',
    color: 'border-neutral-800',
    description: 'A track event testing speed and endurance across various distances.'
  },
  {
    sport: 'LONG JUMP',
    coach: 'KISHORE KUMAR',
    captain: 'N/A',
    members: 1,
    image: 'https://i.postimg.cc/NfbTKYLJ/Whats-App-Image-2026-03-25-at-12-50-39-PM.jpg',
    color: 'border-neutral-800',
    description: 'A field event where athletes compete by jumping as far as possible from a take-off point.'
  },
  {
    sport: 'SHOT PUT',
    coach: 'KISHORE KUMAR',
    captain: 'N/A',
    members: 1,
    image: 'https://i.postimg.cc/dVNJkN2d/Whats-App-Image-2026-03-25-at-1-01-27-PM.jpg',
    color: 'border-neutral-800',
    description: 'A track and field event involving the throwing of a heavy spherical ball as far as possible.'
  },
  {
    sport: 'CRICKET',
    coach: 'KISHORE KUMAR',
    captain: 'N/A',
    members: 11,
    image: 'https://i.postimg.cc/j22X55ty/Screenshot-(8).png',
    color: 'border-neutral-800',
    description: 'A bat-and-ball game played between two teams, involving batting, bowling, and fielding.'
  }
];

export default function Games() {
  const renderGameGrid = (gameList: typeof interGames) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {gameList.map((game, i) => (
        <motion.div
          key={game.sport}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          viewport={{ once: true }}
          className={`bg-white group relative overflow-hidden border border-neutral-100 border-t-4 ${game.color} shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col`}
        >
          <div className="aspect-[4/3] overflow-hidden relative">
            {game.image ? (
              <img 
                src={game.image} 
                alt={game.sport} 
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="w-full h-full bg-neutral-100 flex items-center justify-center">
                <Activity className="w-12 h-12 text-neutral-300" />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <div className="font-mono text-[10px] tracking-widest text-white/80 mb-1">{game.members} SQUAD</div>
            </div>
          </div>

          <div className="p-6 flex-1 flex flex-col">
            <div className="mb-4">
              <h3 className="text-2xl text-black font-heading font-bold uppercase mb-2 tracking-tight">{game.sport}</h3>
              <p className="text-neutral-500 text-xs leading-relaxed line-clamp-3">
                {game.description}
              </p>
            </div>
          </div>

          {/* Accent line that expands on hover */}
          <div className="absolute bottom-0 left-0 h-1 bg-black w-0 group-hover:w-full transition-all duration-500" />
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-16">
        <h4 className="font-mono text-purple-700/60 text-xs tracking-[0.3em] uppercase mb-2">Athletic Program</h4>
        <h1 className="text-6xl md:text-9xl font-display font-bold tracking-tighter leading-none uppercase text-purple-900">
          OUR <span className="text-purple-800 italic font-serif lowercase tracking-normal font-light">games</span>
        </h1>
      </div>

      {/* Inter Section */}
      <div className="mb-12 flex items-center space-x-4">
        <h2 className="text-4xl font-serif italic font-light lowercase text-purple-900">
          inter <span className="text-purple-900 font-display uppercase tracking-tighter text-5xl ml-2">games</span>
        </h2>
        <div className="h-px flex-1 bg-neutral-100" />
      </div>
      {renderGameGrid(interGames)}

      {/* Intra Section */}
      <div className="mt-24 mb-12 flex items-center space-x-4">
        <h2 className="text-4xl font-serif italic font-light lowercase text-purple-900">
          intra <span className="text-purple-900 font-display uppercase tracking-tighter text-5xl ml-2">games</span>
        </h2>
        <div className="h-px flex-1 bg-neutral-100" />
      </div>
      {renderGameGrid(indoorGames)}

      {/* Our Team Section */}
      <section className="mt-32 mb-12">
        <div className="flex items-center space-x-4 mb-12">
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight text-purple-900">
            OUR <span className="text-purple-800 italic font-serif lowercase tracking-normal font-light">team</span>
          </h2>
          <div className="h-px flex-1 bg-neutral-100" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group overflow-hidden rounded-2xl border border-neutral-100 shadow-2xl"
        >
          <div className="aspect-[21/9] overflow-hidden">
            <img 
              src="https://i.postimg.cc/T3cqxgvZ/Whats-App-Image-2026-03-25-at-1-20-07-PM.jpg" 
              alt="Vignan's Nirula Sports Team" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12">
            <h3 className="text-4xl md:text-6xl text-white font-display uppercase mb-4">THE CHAMPIONS</h3>
            <p className="text-white/80 text-lg md:text-xl font-serif italic max-w-2xl">
              "Unity is strength... when there is teamwork and collaboration, wonderful things can be achieved."
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
