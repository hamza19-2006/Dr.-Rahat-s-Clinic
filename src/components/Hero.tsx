import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-clinic-bg">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-clinic-purple/10 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-clinic-teal/10 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-clinic-purple/20 text-clinic-purple font-medium text-sm mb-6 border border-clinic-purple/20">
            <span className="w-2 h-2 rounded-full bg-clinic-teal animate-pulse" />
            Accepting New Patients
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-6">
            Women's Health <br/>
            <span className="text-clinic-teal italic">And Everything Related To It..!</span>
          </h1>
          
          <p className="text-lg text-clinic-text-muted mb-8 max-w-lg leading-relaxed">
            Expert, empathetic care by Dr. Rahat Niaz Chaudhry. Comprehensive gynecological and obstetrics services tailored to your unique needs.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://wa.me/923250783600"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-clinic-purple hover:bg-clinic-purple-dark text-white px-8 py-4 rounded-full font-medium transition-all shadow-lg shadow-clinic-purple/20 hover:shadow-clinic-purple/40"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment
            </a>
            <a 
              href="#services"
              className="flex items-center gap-2 bg-clinic-surface hover:bg-clinic-surface-light text-white px-8 py-4 rounded-full font-medium transition-all shadow-sm border border-white/10"
            >
              Our Services
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
          {/* Image placeholder with organic shape */}
          <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-clinic-purple/40 to-clinic-teal/40 rounded-[100px] transform rotate-3" />
            <img 
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1000&auto=format&fit=crop" 
              alt="Doctor in clinic" 
              className="absolute inset-0 w-full h-full object-cover rounded-[100px] shadow-2xl shadow-black/50 transform -rotate-3 transition-transform hover:rotate-0 duration-500"
              referrerPolicy="no-referrer"
            />
            
            {/* Floating badge */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-clinic-surface p-4 rounded-2xl shadow-xl border border-white/10 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-clinic-teal/20 flex items-center justify-center text-clinic-teal font-bold text-xl">
                15+
              </div>
              <div>
                <p className="text-sm font-bold text-white">Years Experience</p>
                <p className="text-xs text-clinic-text-muted">Trusted Care</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
