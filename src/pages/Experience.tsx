import { experiences } from '@/data/experience';
import { SEOHead } from '@/components/seo/SEOHead';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

export default function Experience() {
  return (
    <>
      <SEOHead
        title="Experience"
        description="Explore Mariyam Jawaid's 5+ years of banking experience in trade finance, relationship management, and operations at JS Bank."
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-24 md:py-32 px-6 lg:px-8 border-b border-border">
          <div className="max-w-7xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-4">
                Experience
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide max-w-2xl mx-auto">
                A progressive career in trade finance and banking operations
              </p>
            </motion.div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

              {experiences.map((exp, index) => (
                <ScrollReveal key={exp.id} delay={index * 0.08}>
                  <div className="relative pl-8 md:pl-20 pb-12 last:pb-0">
                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-8 top-1 w-2 h-2 -translate-x-[3px] rounded-full bg-primary" />

                    <Link
                      to={`/experience/${exp.slug}`}
                      className="group block p-6 md:p-8 border border-border rounded-sm hover:bg-accent/50 transition-all"
                    >
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-4">
                        <div className="space-y-1">
                          <h2 className="text-xl md:text-2xl font-light tracking-wide group-hover:text-primary transition-colors">
                            {exp.title}
                          </h2>
                          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground font-light">
                            <span className="inline-flex items-center gap-1">
                              <Briefcase className="size-3.5" />
                              {exp.company}
                            </span>
                            <span className="inline-flex items-center gap-1">
                              <MapPin className="size-3.5" />
                              {exp.location}
                            </span>
                          </div>
                        </div>
                        <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground font-light tracking-wide whitespace-nowrap">
                          <Calendar className="size-3.5" />
                          {exp.startDate} — {exp.endDate}
                        </span>
                      </div>

                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-muted-foreground font-light leading-relaxed flex gap-2">
                            <span className="text-primary mt-1.5 shrink-0">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </Link>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <div className="h-24" />
      </div>
    </>
  );
}
