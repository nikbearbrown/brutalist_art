import { Code, UserCheck, Target } from 'lucide-react'
import ArtistCarousel from '@/components/ArtistCarousel/ArtistCarousel'

const buttonStyles =
  'inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-black text-white shadow hover:bg-gray-800 dark:border dark:border-input dark:bg-background dark:text-foreground dark:shadow-sm dark:hover:bg-accent dark:hover:text-accent-foreground'

const PUBLICATIONS = [
  { name: 'skepticism.ai', href: 'https://www.skepticism.ai/' },
  { name: 'Musinique', href: 'https://www.musinique.net/' },
  { name: 'Theorist', href: 'https://www.theorist.ai/' },
  { name: 'Hypothetical', href: 'https://www.hypothetical.ai/' },
]

const SERVICES = [
  {
    icon: Code,
    title: 'Slides as Code',
    description:
      'Brutalist builds fully coded HTML presentations through a Claude conversation. Audio, animation, live data, responsive layout — anything a browser can run.',
    link: { label: 'See how it works →', href: 'https://www.brutalist.art/talks/brutalist/brutalist-intro.html' },
  },
  {
    icon: UserCheck,
    title: 'Built for Non-Developers',
    description:
      'Ten-minute setup. No JavaScript required. Describe the deck you need and the code gets written. The medium was always more powerful than PowerPoint — now it\'s accessible.',
    link: { label: 'Get started →', href: 'mailto:bear@bearbrown.co' },
  },
  {
    icon: Target,
    title: 'Backwards Design Built In',
    description:
      'Every Brutalist deck starts from a learning outcome, not a topic. Phase gates enforce the right sequence before a single slide is built.',
    link: { label: 'Learn the method →', href: 'https://www.brutalist.art/talks' },
  },
]

const CONNECT_LINKS = [
  { name: 'Substack', href: 'https://brutalistart.substack.com/' },
  { name: 'YouTube', href: 'https://www.youtube.com/@NikBearBrown' },
  { name: 'GitHub', href: 'https://github.com/nikbearbrown' },
  { name: 'Humanitarians AI', href: 'https://humanitarians.ai' },
]

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="flex flex-col justify-center space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Brutalist
              </h1>
              <p className="text-xl font-medium text-foreground/80">
                The slide deck is a program, not a canvas.
              </p>
              <p className="max-w-[540px] text-lg text-muted-foreground leading-relaxed">
                Brutalist builds HTML presentations through conversation.
                No templates. No canvas. A living, deployable deck —
                in the time it takes to describe what you need.
              </p>
              <div className="flex flex-col gap-3 pt-2">
                <div className="flex flex-wrap gap-3">
                  <a href="https://www.brutalist.art/talks/brutalist/brutalist-intro.html" className={buttonStyles}>
                    See It Live
                  </a>
                  <a href="https://www.brutalist.art/talks" className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium transition-colors border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground">
                    Explore Talks
                  </a>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wider">
                    Read My Writing
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {PUBLICATIONS.map((pub) => (
                      <a
                        key={pub.name}
                        href={pub.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={buttonStyles}
                      >
                        {pub.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/xJrfurLD8J"
                title="Brutalist.art"
                width="100%"
                height="100%"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="w-full py-16 md:py-24 bg-muted/40">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              What Brutalist Does
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="rounded-lg border bg-card p-8 shadow-sm flex flex-col"
              >
                <service.icon className="h-10 w-10 mb-4 text-foreground" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed flex-1">
                  {service.description}
                </p>
                <a
                  href={service.link.href}
                  className="mt-6 text-sm font-medium text-foreground hover:underline"
                >
                  {service.link.label}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="w-full py-16 md:py-24 bg-foreground text-background">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
            Let&apos;s Collaborate
          </h2>
          <p className="max-w-[600px] mx-auto text-background/70 text-lg mb-8">
            Whether you need AI strategy, a technical advisor on your cap table,
            or your next great hire — let&apos;s talk.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {CONNECT_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium transition-colors border border-background/30 text-background hover:bg-background/10"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-center mb-2">
            Music from Musinique
          </h2>
          <p className="text-center text-muted-foreground mb-10">
            Musinique, great music for your decks and presentations.
          </p>
          <ArtistCarousel />
        </div>
      </section>
    </div>
  )
}
