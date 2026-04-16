import { motion } from 'framer-motion';
import { Linkedin, GraduationCap, Award } from 'lucide-react';
import { professionalInfo } from '@/data/professional';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/seo/SEOHead';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import aboutPortrait from '@/assets/mariyam-about.jpg';

export default function About() {
  return (
    <>
      <SEOHead
        title="About"
        description={`Learn about ${professionalInfo.name}, ${professionalInfo.title}. ${professionalInfo.summary}`}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-24 md:py-32 px-6 lg:px-8 border-b border-border">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0.8, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-4">
                About
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide">
                {professionalInfo.title} · {professionalInfo.location}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Bio Section */}
        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left: Professional Summary */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0.8, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                {/* Portrait — AI-generated placeholder, swap with real photo later */}
                <div className="relative">
                  <div className="absolute -inset-3 bg-gradient-to-tr from-primary/15 to-accent/25 rounded-sm blur-xl" />
                  <img
                    src={aboutPortrait}
                    alt={`Portrait of ${professionalInfo.name}`}
                    width={1024}
                    height={1280}
                    loading="lazy"
                    className="relative w-full aspect-[4/5] object-cover rounded-sm border border-border shadow-xl"
                  />
                </div>

                <div className="space-y-3">
                  <h2 className="text-4xl md:text-5xl font-light tracking-wide">
                    {professionalInfo.name}
                  </h2>
                  <p className="text-xl text-muted-foreground font-light tracking-wide">
                    {professionalInfo.title}
                  </p>
                </div>

                <Separator />

                <p className="text-base md:text-lg font-light leading-relaxed text-muted-foreground">
                  {professionalInfo.summary}
                </p>

                {/* Contact & Social */}
                <div className="pt-4 space-y-2">
                  <div className="text-sm font-light tracking-wide">
                    <span className="text-muted-foreground">Email: </span>
                    <a
                      href={`mailto:${professionalInfo.email}`}
                      className="text-foreground hover:text-muted-foreground transition-colors"
                    >
                      {professionalInfo.email}
                    </a>
                  </div>
                  <div className="text-sm font-light tracking-wide">
                    <span className="text-muted-foreground">Phone: </span>
                    <span className="text-foreground">{professionalInfo.phone}</span>
                  </div>
                  <div className="text-sm font-light tracking-wide">
                    <span className="text-muted-foreground">Location: </span>
                    <span className="text-foreground">{professionalInfo.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {professionalInfo.socialLinks.linkedin && (
                    <a
                      href={professionalInfo.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-border rounded-sm hover:bg-accent transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="size-5" />
                    </a>
                  )}
                </div>
              </motion.div>

              {/* Right: Education & Skills */}
              <motion.div
                className="space-y-10"
                initial={{ opacity: 0.8, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                {/* Education */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-light tracking-wide flex items-center gap-3">
                    <GraduationCap className="size-6 text-primary" />
                    Education
                  </h3>
                  <Separator />
                  {professionalInfo.education.map((edu, i) => (
                    <div key={i} className="space-y-1">
                      <h4 className="text-lg font-light">{edu.degree}</h4>
                      <p className="text-sm text-muted-foreground font-light">
                        {edu.institution}, {edu.location}
                      </p>
                      <p className="text-sm text-muted-foreground font-light">
                        {edu.period} {edu.status && `· ${edu.status}`}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Skills */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-light tracking-wide flex items-center gap-3">
                    <Award className="size-6 text-primary" />
                    Skills
                  </h3>
                  <Separator />
                  {professionalInfo.skills.map((cat, i) => (
                    <ScrollReveal key={i} delay={i * 0.05}>
                      <div className="space-y-3">
                        <h4 className="text-sm font-light tracking-wide uppercase text-muted-foreground">
                          {cat.name}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {cat.skills.map((skill) => (
                            <span
                              key={skill}
                              className="text-sm font-light px-3 py-1.5 border border-border rounded-sm bg-accent/30"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
