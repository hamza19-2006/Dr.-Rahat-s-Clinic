import { motion } from 'motion/react';
import { Award, Building2, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 bg-clinic-surface" id="about">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-full overflow-hidden border-8 border-clinic-bg relative z-10 max-w-md mx-auto shadow-2xl shadow-black/40">
              <img 
                src="https://images.unsplash.com/photo-1594824436998-d8362c4ce9d3?q=80&w=1000&auto=format&fit=crop" 
                alt="Dr. Rahat Niaz Chaudhry" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-clinic-purple/10 rounded-full -z-10 blur-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-clinic-teal uppercase mb-3">About The Doctor</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">Dr. Rahat Niaz Chaudhry</h3>
            
            <p className="text-clinic-text-muted text-lg leading-relaxed mb-8">
              Dedicated to providing compassionate and comprehensive care for women at every stage of life. With extensive experience in both public and private healthcare sectors, Dr. Rahat brings a wealth of knowledge to her practice.
            </p>

            <div className="space-y-6">
              <motion.div whileHover={{ x: 10 }} className="flex items-start gap-4 transition-transform">
                <div className="w-12 h-12 rounded-full bg-clinic-purple/20 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-6 h-6 text-clinic-purple" />
                </div>
                <div>
                  <h4 className="text-xl font-serif text-white mb-1">Qualifications</h4>
                  <p className="text-clinic-text-muted">MBBS (King Edward Medical University), FCPS (College of Physicians and Surgeons Pakistan)</p>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 10 }} className="flex items-start gap-4 transition-transform">
                <div className="w-12 h-12 rounded-full bg-clinic-teal/20 flex items-center justify-center shrink-0">
                  <Building2 className="w-6 h-6 text-clinic-teal" />
                </div>
                <div>
                  <h4 className="text-xl font-serif text-white mb-1">Current Affiliations</h4>
                  <p className="text-clinic-text-muted">Visiting Consultant at Evercare Hospital and Hameedah Memorial Hospital</p>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 10 }} className="flex items-start gap-4 transition-transform">
                <div className="w-12 h-12 rounded-full bg-clinic-purple/20 flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-clinic-purple" />
                </div>
                <div>
                  <h4 className="text-xl font-serif text-white mb-1">Past Experience</h4>
                  <p className="text-clinic-text-muted">Formerly served at Jinnah Hospital and Children's Hospital Lahore</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
