import { motion } from 'framer-motion';
import { professionalInfo } from '@/data/professional';
import { experiences } from '@/data/experience';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SEOHead } from '@/components/seo/SEOHead';
import { ArrowRight, Briefcase, TrendingUp, Shield, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const highlights = [
    { icon: TrendingUp, label: 'Trade Finance', desc: 'LC payments, import/export documentation & FX coordination' },
    { icon: Briefcase, label: 'Relationship Management', desc: 'Corporate & commercial client account management' },
    { icon: Shield, label: 'Quality Assurance', desc: 'Process improvement, SOP development & compliance' },
    { icon: Award, label: '5+ Years Banking', desc: 'Progressive career growth at JS Bank, Karachi' },
  ];

  return (
    <>
      <SEOHead />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen w-full overflow-hidden">
          {/* Abstract gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/30" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.15),transparent_60%)]" />
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background to-transparent" />

          <div className="relative h-full flex flex-col items-center justify-center px-6">
            <motion.div
              className="text-center space-y-6 max-w-4xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <motion.p
                className="text-sm md:text-base font-light tracking-[0.3em] uppercase text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1 }}
              >
                Trade Finance · Banking Professional
              </motion.p>

              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-wide text-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                {professionalInfo.name}
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl font-light tracking-wide text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                {professionalInfo.title}
              </motion.p>

              <motion.p
                className="text-base md:text-lg font-light leading-relaxed text-muted-foreground/80 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                {professionalInfo.summary}
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <Link
                  to="/experience"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-light tracking-wide rounded-sm hover:bg-primary/90 transition-colors"
                >
                  View Experience
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-border font-light tracking-wide rounded-sm hover:bg-accent transition-colors"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Core Skills Highlights */}
        <section className="py-24 md:py-32 px-6 lg:px-8 bg-background border-t border-border">
          <ScrollReveal>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-light tracking-wide text-center mb-16">
                Core Expertise
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {highlights.map((item, i) => (
                  <motion.div
                    key={item.label}
                    className="text-center space-y-4 p-6 border border-border rounded-sm hover:bg-accent/50 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <item.icon className="size-8 mx-auto text-primary" />
                    <h3 className="text-lg font-light tracking-wide">{item.label}</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Recent Experience */}
        <section className="py-24 md:py-32 border-t border-border">
          <ScrollReveal>
            <div className="text-center mb-16 space-y-4 px-6">
              <h2 className="text-4xl md:text-5xl font-light tracking-wide">
                Career Journey
              </h2>
              <p className="text-lg text-muted-foreground font-light tracking-wide">
                5+ years of progressive growth at JS Bank
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto px-6">
            {experiences.slice(0, 3).map((exp, index) => (
              <ScrollReveal key={exp.id} delay={index * 0.1}>
                <Link
                  to={`/experience/${exp.slug}`}
                  className="group block mb-8 p-6 md:p-8 border border-border rounded-sm hover:bg-accent/50 transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                    <h3 className="text-xl md:text-2xl font-light tracking-wide group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <span className="text-sm text-muted-foreground font-light tracking-wide">
                      {exp.startDate} — {exp.endDate}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground font-light mb-3">
                    {exp.company}, {exp.location}
                  </p>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    {exp.description[0]}
                  </p>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <div className="flex justify-center mt-8 px-6">
              <Link
                to="/experience"
                className="group inline-flex items-center gap-2 text-lg font-light tracking-wide text-foreground hover:text-muted-foreground transition-colors"
              >
                <span>View Full Experience</span>
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </>
  );
}
