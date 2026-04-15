import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, ArrowLeft } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/seo/SEOHead';
import { getExperienceBySlug } from '@/data/experience';

export default function ExperienceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const experience = slug ? getExperienceBySlug(slug) : undefined;

  if (!experience) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <SEOHead
        title={`${experience.title} at ${experience.company}`}
        description={experience.description[0]}
        type="article"
      />

      <div className="min-h-screen">
        <section className="py-24 md:py-32 px-6 lg:px-8 border-b border-border">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link
                to="/experience"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-light"
              >
                <ArrowLeft className="size-4" />
                Back to Experience
              </Link>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide">
                {experience.title}
              </h1>

              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground font-light">
                <span className="inline-flex items-center gap-2">
                  <Briefcase className="size-4" />
                  {experience.company}
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="size-4" />
                  {experience.location}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Calendar className="size-4" />
                  {experience.startDate} — {experience.endDate}
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl font-light tracking-wide mb-6">Key Responsibilities</h2>
              <Separator className="mb-6" />
              <ul className="space-y-4">
                {experience.description.map((item, i) => (
                  <li key={i} className="flex gap-3 text-lg font-light leading-relaxed text-muted-foreground">
                    <span className="text-primary mt-1 shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        <div className="h-24" />
      </div>
    </>
  );
}
