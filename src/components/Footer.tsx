import { MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="bg-[#050308] text-white pt-20 pb-10 border-t border-white/5" id="contact">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-serif mb-6 text-white">Dr. Rahat's Clinic</h3>
            <p className="text-clinic-text-muted leading-relaxed mb-6">
              Women's Health And Everything Related To It..! Providing expert, compassionate care for women in Lahore.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://wa.me/923250783600" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-clinic-teal transition-colors cursor-pointer">
                <Phone className="w-5 h-5" />
              </a>
              <a href="mailto:dr.rnc@hotmail.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-clinic-teal transition-colors cursor-pointer">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <h4 className="text-lg font-serif mb-6 text-clinic-teal">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-clinic-teal shrink-0 mt-1" />
                <span className="text-clinic-text-muted">D Block Commercial Area Valencia, Lahore, 54000</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-clinic-teal shrink-0" />
                <span className="text-clinic-text-muted">0325 0783600</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-clinic-teal shrink-0" />
                <span className="text-clinic-text-muted">dr.rnc@hotmail.com</span>
              </li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <h4 className="text-lg font-serif mb-6 text-clinic-teal">Clinic Hours</h4>
            <ul className="space-y-4">
              <li className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-clinic-text-muted">Monday - Friday</span>
                <span className="font-medium text-white">4:00 PM - 9:00 PM</span>
              </li>
              <li className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-clinic-text-muted">Saturday</span>
                <span className="font-medium text-white">10:00 AM - 2:00 PM</span>
              </li>
              <li className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-clinic-text-muted">Sunday</span>
                <span className="text-clinic-teal font-medium">Closed</span>
              </li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="h-full min-h-[200px]">
            <h4 className="text-lg font-serif mb-6 text-clinic-teal">Location</h4>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.662104918731!2d74.2615!3d31.3958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919018a8ea548c1%3A0x4a52b6a35411244!2sValencia%20Town%2C%20Lahore!5e0!3m2!1sen!2s!4v1680000000000!5m2!1sen!2s" 
              width="100%" 
              height="200" 
              style={{ border: 0, borderRadius: '12px' }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="shadow-lg shadow-black/20"
            ></iframe>
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-clinic-text-muted/50">
          <p>&copy; {new Date().getFullYear()} Dr. Rahat's Gynae & Obs Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
