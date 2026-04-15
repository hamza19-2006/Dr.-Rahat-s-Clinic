import { motion } from 'motion/react';
import { Baby, Activity, Heart, ShieldPlus, Stethoscope, Droplets } from 'lucide-react';

const services = [
  {
    title: "Pregnancy & Delivery Care",
    description: "Comprehensive antenatal care, high-risk pregnancy management, and safe delivery services.",
    icon: Baby,
    color: "bg-pink-500/20 text-pink-400"
  },
  {
    title: "Infertility & Miscarriages",
    description: "Expert evaluation and treatment for infertility and recurrent miscarriages to help build your family.",
    icon: Heart,
    color: "bg-red-500/20 text-red-400"
  },
  {
    title: "PCOS & Menstrual Issues",
    description: "Management of Polycystic Ovary Syndrome, irregular cycles, and heavy menstrual bleeding.",
    icon: Activity,
    color: "bg-clinic-teal/20 text-clinic-teal"
  },
  {
    title: "Family Planning",
    description: "Counseling and provision of various contraceptive methods tailored to your lifestyle.",
    icon: ShieldPlus,
    color: "bg-blue-500/20 text-blue-400"
  },
  {
    title: "Menopause Management",
    description: "Support and medical care to help you navigate the physical and emotional changes of menopause.",
    icon: Droplets,
    color: "bg-purple-500/20 text-purple-400"
  },
  {
    title: "Ovarian Cysts & General Health",
    description: "Diagnosis and treatment of ovarian cysts, fibroids, and routine gynecological checkups.",
    icon: Stethoscope,
    color: "bg-clinic-purple/20 text-clinic-purple"
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-clinic-bg" id="services">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-clinic-teal uppercase mb-3">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">Comprehensive Care</h3>
          <p className="text-clinic-text-muted text-lg">
            Providing specialized medical care for women across all stages of life, from adolescence through menopause and beyond.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-clinic-surface rounded-3xl p-8 shadow-lg shadow-black/20 hover:shadow-clinic-purple/10 transition-all border border-white/5 group"
            >
              <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-serif text-white mb-3">{service.title}</h4>
              <p className="text-clinic-text-muted leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
