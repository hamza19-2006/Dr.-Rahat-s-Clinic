import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Ayesha K.",
    date: "2 weeks ago",
    text: "Dr. Rahat is incredibly patient and empathetic. She guided me through my high-risk pregnancy with such care. Highly recommended!",
    rating: 5
  },
  {
    name: "Fatima S.",
    date: "1 month ago",
    text: "The best gynecologist in Valencia Town. She listens to all your concerns and explains everything in detail. The clinic environment is very welcoming.",
    rating: 5
  },
  {
    name: "Zainab M.",
    date: "3 months ago",
    text: "I was struggling with PCOS for years before I met Dr. Rahat. Her treatment plan has been life-changing. Thank you doctor!",
    rating: 5
  }
];

export default function Reviews() {
  // Duplicate reviews to create a seamless loop
  const duplicatedReviews = [...reviews, ...reviews, ...reviews];

  return (
    <section className="py-24 bg-clinic-surface overflow-hidden relative">
      <div className="container mx-auto px-6 mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-sm font-bold tracking-widest text-clinic-teal uppercase mb-3">Patient Stories</h2>
            <h3 className="text-4xl font-serif text-white">What Our Patients Say</h3>
          </div>
          <div className="flex items-center gap-4 bg-clinic-surface-light px-6 py-3 rounded-full border border-white/5">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <div className="text-sm font-medium">
              <span className="text-white text-lg">4.7</span>
              <span className="text-clinic-text-muted mx-1">/</span>
              <span className="text-clinic-text-muted">15 Google Reviews</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative w-full flex overflow-hidden">
        {/* Gradient masks for smooth fade on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-clinic-surface to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-clinic-surface to-transparent z-10 pointer-events-none" />
        
        <div className="flex animate-marquee hover:[animation-play-state:paused]">
          {duplicatedReviews.map((review, index) => (
            <div 
              key={index} 
              className="w-[350px] md:w-[400px] shrink-0 mx-4 bg-clinic-bg rounded-3xl p-8 border border-white/5 shadow-lg shadow-black/20 transition-transform hover:-translate-y-2"
            >
              <div className="flex text-yellow-400 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-clinic-text-muted mb-6 italic leading-relaxed">"{review.text}"</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="font-serif font-medium text-white">{review.name}</span>
                <span className="text-sm text-clinic-text-muted/60">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
