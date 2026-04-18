import { motion } from 'framer-motion';
import { professionalInfo } from '@/data/professional';
import { experiences } from '@/data/experience';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SEOHead } from '@/components/seo/SEOHead';
import { ArrowRight, Briefcase, TrendingUp, Shield, Award, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroPortrait from '@/assets/mariyam-hero.jpg';

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
        <section className="relative min-h-screen w-full overflow-hidden pt-24 pb-16 lg:pt-0 lg:pb-0 lg:h-screen">
          {/* Abstract gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/30" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.15),transparent_60%)]" />
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background to-transparent" />

          <div className="relative lg:h-full flex items-center justify-center px-4 sm:px-6 lg:px-12">
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 sm:gap-10 lg:gap-16 items-center max-w-7xl w-full">
              <motion.div
                className="text-center lg:text-left space-y-5 sm:space-y-6 order-2 lg:order-1"
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
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight tracking-wide text-foreground break-words"
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


                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
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
                  <a
                    href="/Mariyam_Jawaid_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-border font-light tracking-wide rounded-sm hover:bg-accent transition-colors"
                  >
                    <FileText className="size-4" />
                    View Resume
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-border font-light tracking-wide rounded-sm hover:bg-accent transition-colors"
                  >
                    Get in Touch
                  </Link>
                </motion.div>
              </motion.div>

              {/* Hero portrait — AI-generated placeholder, swap with real photo later */}
              <motion.div
                className="order-1 lg:order-2 flex justify-center lg:justify-end"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
              >
                <div className="relative w-44 sm:w-56 md:w-64 lg:w-full lg:max-w-sm">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-accent/30 rounded-sm blur-2xl" />
                  <img
                    src={heroPortrait}
                    alt={`${professionalInfo.name} — ${professionalInfo.title}`}
                    width={1024}
                    height={1280}
                    className="relative w-full aspect-[4/5] object-cover rounded-sm border border-border shadow-2xl"
                  />
                </div>
              </motion.div>
            </div>
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

        {/* Recent Experience — Timeline */}
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
            <ol className="relative">
              {/* Vertical rail */}
              <div
                aria-hidden="true"
                className="absolute left-[11px] sm:left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-border to-transparent"
              />

              {experiences.slice(0, 3).map((exp, index) => {
                const CategoryIcon =
                  exp.category === 'quality' ? Shield :
                  exp.category === 'customer-service' ? Award :
                  Briefcase;
                const isCurrent = exp.endDate === 'Present';

                return (
                  <li key={exp.id} className="relative pl-10 sm:pl-14 pb-10 last:pb-0">
                    <ScrollReveal delay={index * 0.1}>
                      <Link
                        to={`/experience/${exp.slug}`}
                        className="group block"
                      >
                        {/* Dot */}
                        <span
                          aria-hidden="true"
                          className="absolute left-0 top-1.5 flex items-center justify-center size-6 sm:size-8 rounded-full bg-background border border-primary/40 text-primary transition-all duration-300 group-hover:scale-110 group-hover:border-primary group-hover:bg-primary/10"
                        >
                          <CategoryIcon className="size-3 sm:size-4" />
                        </span>

                        <div className="transition-transform duration-300 group-hover:translate-x-1">
                          {/* Date / current badge */}
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-xs font-light tracking-[0.2em] uppercase text-muted-foreground">
                              {exp.startDate} — {exp.endDate}
                            </span>
                            {isCurrent && (
                              <span className="inline-flex items-center px-2 py-0.5 text-[10px] font-light tracking-[0.2em] uppercase rounded-full bg-primary/10 text-primary border border-primary/20">
                                Current
                              </span>
                            )}
                          </div>

                          <h3 className="text-xl md:text-2xl font-light tracking-wide text-foreground group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-sm text-muted-foreground font-light tracking-wide mt-1">
                            {exp.company} · {exp.location}
                          </p>
                          <p className="text-muted-foreground font-light leading-relaxed mt-3 max-w-2xl">
                            {exp.description[0]}
                          </p>
                        </div>
                      </Link>
                    </ScrollReveal>
                  </li>
                );
              })}
            </ol>
          </div>

          <ScrollReveal delay={0.4}>
            <div className="flex justify-center mt-12 px-6">
              <Link
                to="/experience"
                className="group inline-flex items-center gap-2 text-lg font-light tracking-wide text-foreground hover:text-primary transition-colors"
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
