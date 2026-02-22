import { ExternalLink, Mail, MapPin } from "lucide-react";
import { Badge, Button, Card, Container } from "@/components/ui";
import { experience, highlights, profile, projects, skills } from "@/content";

function SectionTitle(props: { children: React.ReactNode; id?: string }) {
  return (
    <h2 id={props.id} className="text-lg font-semibold tracking-tight">
      {props.children}
    </h2>
  );
}

export function App() {
  return (
    <div className="min-h-screen">
      <header className="border-b border-zinc-200 bg-white/70 backdrop-blur">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-3 py-5">
            <div>
              <div className="text-xl font-semibold">{profile.name}</div>
              <div className="text-sm text-zinc-600">{profile.title}</div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <a href={`mailto:${profile.email}`} className="no-underline">
                <Button variant="ghost">
                  <span className="inline-flex items-center gap-2">
                    <Mail size={16} /> Email
                  </span>
                </Button>
              </a>
              <a href="#projects" className="no-underline">
                <Button>
                  <span className="inline-flex items-center gap-2">
                    View projects <ExternalLink size={16} />
                  </span>
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </header>

      <main>
        <section className="py-10">
          <Container>
            <div className="grid gap-4 md:grid-cols-12">
              <div className="md:col-span-7">
                <Card title="Summary">
                  <p className="text-sm text-zinc-700">{profile.summary}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {highlights.map((h) => (
                      <Badge key={h}>{h}</Badge>
                    ))}
                  </div>

                  <div className="mt-5 grid gap-2 text-sm text-zinc-700">
                    <div className="inline-flex items-center gap-2">
                      <MapPin size={16} className="text-zinc-500" /> {profile.location}
                    </div>
                    <div className="inline-flex items-center gap-2">
                      <Mail size={16} className="text-zinc-500" />{" "}
                      <a href={`mailto:${profile.email}`}>{profile.email}</a>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="md:col-span-5">
                <Card title="Skills snapshot">
                  <div className="grid gap-4">
                    {skills.map((g) => (
                      <div key={g.group}>
                        <div className="text-xs font-semibold text-zinc-600">{g.group}</div>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {g.items.map((x) => (
                            <Badge key={x}>{x}</Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-10" id="projects">
          <Container>
            <div className="mb-4 flex items-end justify-between gap-3">
              <SectionTitle>Featured projects</SectionTitle>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {projects.map((p) => (
                <Card key={p.name} title={p.name}>
                  <p className="text-sm text-zinc-700">{p.desc}</p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {(p.tags ?? []).map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <a href={p.demo} target="_blank" rel="noreferrer" className="no-underline">
                      <Button variant="ghost">Demo / Docs</Button>
                    </a>
                    <a href={p.repo} target="_blank" rel="noreferrer" className="no-underline">
                      <Button variant="ghost">
                        Repo <ExternalLink size={14} className="ml-1 inline" />
                      </Button>
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-10" id="experience">
          <Container>
            <div className="mb-4">
              <SectionTitle>Experience</SectionTitle>
            </div>

            <div className="grid gap-4">
              {experience.map((e) => (
                <Card key={e.role} title={`${e.role} • ${e.when}`}>
                  <div className="text-sm text-zinc-600">{e.where}</div>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700">
                    {e.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-10" id="contact">
          <Container>
            <Card title="Contact">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="text-sm text-zinc-700">
                  Best way to reach me:{" "}
                  <a href={`mailto:${profile.email}`}>
                    <span className="font-medium">{profile.email}</span>
                  </a>
                </div>
                <a className="no-underline" href={`mailto:${profile.email}`}>
                  <Button>Email me</Button>
                </a>
              </div>
            </Card>
          </Container>
        </section>
      </main>

      <footer className="border-t border-zinc-200 bg-white py-8">
        <Container>
          <div className="text-xs text-zinc-500">
            © {new Date().getFullYear()} {profile.name} • Built with React + Vite + Tailwind
          </div>
        </Container>
      </footer>
    </div>
  );
}
