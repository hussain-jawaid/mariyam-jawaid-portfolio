import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { professionalInfo } from '@/data/professional';
import { ContactForm } from '@/components/forms/ContactForm';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/seo/SEOHead';
import avatar from '@/assets/mariyam-avatar.jpg';

export default function Contact() {
  return (
    <>
      <SEOHead
        title="Contact"
        description={`Get in touch with ${professionalInfo.name} for collaboration opportunities, career inquiries, and professional connections.`}
      />

      <div className="min-h-screen">
        <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 border-b border-border">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0.8, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-4">
                Get in Touch
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-light tracking-wide">
                Let's connect and explore opportunities
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-16">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0.8, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="space-y-3">
                  <h2 className="text-3xl md:text-4xl font-light tracking-wide">
                    Send a Message
                  </h2>
                  <p className="text-muted-foreground font-light">
                    Fill out the form below and I'll get back to you within 24-48 hours. {professionalInfo.availability}.
                  </p>
                </div>
                <ContactForm />
              </motion.div>

              <motion.div
                className="space-y-8"
                initial={{ opacity: 0.8, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="flex items-center gap-4">
                  {/* Avatar — AI-generated placeholder, swap with real photo later */}
                  <img
                    src={avatar}
                    alt={professionalInfo.name}
                    width={768}
                    height={768}
                    loading="lazy"
                    className="size-16 rounded-full object-cover border border-border shadow-md"
                  />
                  <div className="space-y-1">
                    <h2 className="text-2xl md:text-3xl font-light tracking-wide">
                      Contact Information
                    </h2>
                    <p className="text-sm text-muted-foreground font-light">
                      Prefer to reach out directly?
                    </p>
                  </div>
                </div>
                <Separator />
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-sm bg-accent">
                      <Mail className="size-5 text-muted-foreground" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-light tracking-wide text-muted-foreground">Email</p>
                      <a
                        href={`mailto:${professionalInfo.email}`}
                        className="text-base md:text-lg font-light hover:text-muted-foreground transition-colors"
                      >
                        {professionalInfo.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-sm bg-accent">
                      <Phone className="size-5 text-muted-foreground" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-light tracking-wide text-muted-foreground">Phone</p>
                      <a
                        href={`tel:${professionalInfo.phone}`}
                        className="text-base md:text-lg font-light hover:text-muted-foreground transition-colors"
                      >
                        {professionalInfo.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-sm bg-accent">
                      <MapPin className="size-5 text-muted-foreground" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-light tracking-wide text-muted-foreground">Location</p>
                      <p className="text-base md:text-lg font-light">{professionalInfo.location}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <div className="h-16" />
      </div>
    </>
  );
}
