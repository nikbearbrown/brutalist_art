import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import PrimaryButton from "@/components/ui/primary-button"
import SecondaryButton from "@/components/ui/secondary-button"

export const metadata: Metadata = {
  title: "OpenAI Brutalist",
  description: "Brutalist.art's contributions to AI education, research, and the OpenAI Academy.",
}

export default function OpenAIPage() {
  return (
    <div className="container px-4 md:px-6 mx-auto py-12">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">OpenAI Brutalist</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Associate Teaching Professor at Northeastern University with expertise in AI, machine learning, and computational biology, dedicated to developing ethical AI solutions and preparing the next generation of AI engineers.
          </p>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/LeZpm76Eszc?si=_PwdhcxEHn_tBs-V"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="grid gap-12">
          <section>
            <h2 className="text-3xl font-bold mb-6">Who am I?</h2>
            <div className="prose prose-lg dark:prose-invert">
              <p>
                Brutalist.art focuses on AI education, research, and ethical AI solutions. With expertise in AI, machine learning, and computational biology, we bring multidisciplinary perspectives to education and research.
              </p>

              <p>
                Through teaching at institutions including Northeastern University, UCLA, Santa Monica College, Arts Institutes, and LA Film School, specializing in AI engineering, machine learning, game development, algorithms, and data science. As founder of Humanitarians AI and a mentor at AI Skunkworks, we are dedicated to developing ethical AI solutions and preparing the next generation of AI engineers.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Teaching Philosophy: Learning by Doing</h2>
            <div className="prose prose-lg dark:prose-invert">
              <h3 className="text-xl font-bold mb-3">Philosophy Overview</h3>
              <p>
                Experiential AI, Learning by Doing, Collaborate with companies and researchers.
              </p>
              
              <p>
                For the details on how to implement any particular project go to:
              </p>
              
              <div className="flex items-center gap-2 not-prose">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                  <path d="m10 15 5-3-5-3z"></path>
                </svg>
                <a href="https://www.youtube.com/@brutalist" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  Brutalist on YouTube
                </a>
              </div>
              
              <p className="mt-4">
                or our 501c3 Non-Profit:
              </p>
              
              <div className="flex items-center gap-2 not-prose">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary">
                  <path d="M12 2H2v10h10V2Z"></path>
                  <path d="M12 12H2v10h10V12Z"></path>
                  <path d="M22 2h-10v20h10V2Z"></path>
                </svg>
                <a href="https://www.humanitarians.ai/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  Humanitarians AI
                </a>
              </div>
              <div className="flex items-center gap-2 not-prose mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                  <path d="m10 15 5-3-5-3z"></path>
                </svg>
                <a href="https://www.youtube.com/@humanitariansai" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  Humanitarians AI on YouTube
                </a>
              </div>
              
              <h3 className="text-xl font-bold mt-6 mb-3">Core Principles</h3>
              
              <h4 className="font-bold">Active Engagement Over Passive Consumption</h4>
              <p>Do it.</p>
              
              <h4 className="font-bold">AI-Enhanced Personalized Learning</h4>
              <p>We have an AI Fluency framework called "Botspeak" that teaches people to effectively and ethically leverage AI.</p>
              
              <h4 className="font-bold">Real-World Problem Solving</h4>
              <p>Abstract concepts become concrete when applied to meaningful problems. My courses, and non-profit incorporate industry-relevant challenges, social impact projects, and research.</p>
              
              <h4 className="font-bold">Collaborative Innovation</h4>
              <p>The most significant technological advancements rarely come from individuals working in isolation. Teach those who are coming after you.</p>
              
              <h4 className="font-bold">Ethical AI Development</h4>
              <p>Technical skills must be paired with ethical judgment.</p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">OpenAI Academy Contribution</h2>
            <div className="prose prose-lg dark:prose-invert">
              <p>
                As a contributor to the OpenAI Academy: Professors Teaching with AI series, I focus on implementing AI tools that enhance both teaching and learning experiences. My approach centers on creating practical applications that empower students to understand AI concepts through hands-on experience.
              </p>
              
              <h3 className="text-xl font-bold mt-6 mb-3">AI Integration in Education</h3>
              
              <ul>
                <li>Developing custom GPT models for specific educational domains</li>
                <li>Creating workflows that blend AI assistance with traditional learning methods</li>
                <li>Building interactive assignments that leverage AI capabilities</li>
                <li>Implementing assessment tools that provide personalized feedback</li>
              </ul>
              
              <h3 className="text-xl font-bold mt-6 mb-3">Impact Metrics</h3>
              
              <div className="grid grid-cols-2 gap-4 not-prose">
                <div className="p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-primary">42%</div>
                  <div className="text-sm text-muted-foreground">Increase in classroom participation</div>
                </div>
                <div className="p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-primary">35%</div>
                  <div className="text-sm text-muted-foreground">Reduction in grading time, redirected to personalized instruction</div>
                </div>
                <div className="p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-primary">28%</div>
                  <div className="text-sm text-muted-foreground">Improvement in practical skills assessment</div>
                </div>
                <div className="p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-primary">89%</div>
                  <div className="text-sm text-muted-foreground">Of students report greater confidence in applying AI tools professionally</div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Featured Courses</h2>
            <div className="grid gap-4">
              <div className="p-4 border rounded-lg">
                <h3 className="font-bold">INFO 7375: ST: AI Engineering Apps - Prompt Engineering and GenAI</h3>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-bold">CSYE 7370: Deep Reinforcement Learning Game Engineering</h3>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-bold">CSYE 7270: Building Virtual Environments</h3>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-bold">INFO 6105: Data Science Engineering Methods</h3>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-bold">CSYE 7374: Special Topics: Computational Skepticism</h3>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Leadership in AI Education Initiatives</h2>
            <div className="grid gap-6">
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-3">Humanitarians AI Incorporated</h3>
                <p className="text-muted-foreground">
                  As founder of this nonprofit organization, I lead the development of AI-driven educational resources focused on social impact and ethical application of technology.
                </p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-3">AI Skunkworks</h3>
                <p className="text-muted-foreground">
                  As an active mentor in AI Skunkworks, I guide students in developing innovative AI-based projects and fostering industry collaborations.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Recognition for Educational Innovation</h2>
            <div className="grid gap-4">
              <div className="p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Dean's Award, College of Engineering</h3>
                    <p className="text-sm text-muted-foreground">Northeastern University (2024-25)</p>
                  </div>
                </div>
              </div>
              <div className="p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">RISE Award</h3>
                    <p className="text-sm text-muted-foreground">Computer and Information Sciences (2022)</p>
                  </div>
                </div>
              </div>
              <div className="p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Fostering Engineering Innovation in Education Award</h3>
                    <p className="text-sm text-muted-foreground">Northeastern University (2021-22)</p>
                  </div>
                </div>
              </div>
              <div className="p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Red Hat Academy Director's Award</h3>
                    <p className="text-sm text-muted-foreground">2020</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="pt-6">
            <h2 className="text-3xl font-bold mb-6">Connect with Me and My Work</h2>
            <div className="grid gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Brutalist</h3>
                <div className="grid gap-3">
                  <a href="https://brutalist.art/" className="flex items-center gap-2 text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                    Website: brutalist.art
                  </a>
                  <a href="https://www.youtube.com/@brutalist" className="flex items-center gap-2 text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                      <path d="m10 15 5-3-5-3z"></path>
                    </svg>
                    YouTube: @brutalist
                  </a>
                  <a href="https://github.com/brutalist-art" className="flex items-center gap-2 text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                    GitHub: @brutalist
                  </a>
                  <a href="https://open.spotify.com/artist/0hSpFCJodAYMP2cWK72zI6" className="flex items-center gap-2 text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M8 11.973c2.5-1.473 5.5-.973 7.5.527"></path>
                      <path d="M9 15c1.5-.5 3-.5 4.5.5"></path>
                      <path d="M7 9c2-1 6-2 10 .5"></path>
                    </svg>
                    Spotify: Brutalist
                  </a>
                  <a href="https://music.apple.com/us/artist/1779725275" className="flex items-center gap-2 text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                      <path d="M14.5 4.5c-1.732.646-3 2.255-3 4.171v7.662c0 1.96-1.925 3.338-3.667 2.667A2.72 2.72 0 0 1 6 16.433v-1.39c0-1.583 1.212-2.897 2.757-2.98"></path>
                      <path d="M14.5 4.5c1.732.646 3 2.255 3 4.171v7.662c0 1.96 1.925 3.338 3.667 2.667A2.72 2.72 0 0 0 23 16.433v-1.39c0-1.583-1.212-2.897-2.757-2.98"></path>
                    </svg>
                    Apple Music: Brutalist
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Humanitarians AI (501c3 Non-Profit)</h3>
                <div className="grid gap-3">
                  <a href="https://www.humanitarians.ai/" className="flex items-center gap-2 text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                    Website: humanitarians.ai
                  </a>
                  <a href="https://www.youtube.com/@humanitariansai" className="flex items-center gap-2 text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                      <path d="m10 15 5-3-5-3z"></path>
                    </svg>
                    YouTube: @humanitariansai
                  </a>
                  <a href="https://www.linkedin.com/company/105696953/" className="flex items-center gap-2 text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                    LinkedIn: Humanitarians AI
                  </a>
                  <a href="https://open.spotify.com/artist/3cj3R4pDpYQHaWx0MM2vFV" className="flex items-center gap-2 text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M8 11.973c2.5-1.473 5.5-.973 7.5.527"></path>
                      <path d="M9 15c1.5-.5 3-.5 4.5.5"></path>
                      <path d="M7 9c2-1 6-2 10 .5"></path>
                    </svg>
                    Spotify: Humanitarians AI
                  </a>
                  <a href="https://music.apple.com/us/artist/humanitarians-ai/1781414009" className="flex items-center gap-2 text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                      <path d="M14.5 4.5c-1.732.646-3 2.255-3 4.171v7.662c0 1.96-1.925 3.338-3.667 2.667A2.72 2.72 0 0 1 6 16.433v-1.39c0-1.583 1.212-2.897 2.757-2.98"></path>
                      <path d="M14.5 4.5c1.732.646 3 2.255 3 4.171v7.662c0 1.96 1.925 3.338 3.667 2.667A2.72 2.72 0 0 0 23 16.433v-1.39c0-1.583-1.212-2.897-2.757-2.98"></path>
                    </svg>
                    Apple Music: Humanitarians AI
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="pt-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <PrimaryButton href="https://www.humanitarians.ai/contact" className="w-full sm:w-auto">
                Contact
              </PrimaryButton>
              <SecondaryButton href="https://www.humanitarians.ai/donate" className="w-full sm:w-auto">
                Support Our Work
              </SecondaryButton>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
