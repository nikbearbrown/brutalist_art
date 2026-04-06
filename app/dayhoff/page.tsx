import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import PrimaryButton from "@/components/ui/primary-button"
import SecondaryButton from "@/components/ui/secondary-button"

export const metadata: Metadata = {
  title: "Dayhoff - AI-Powered Bioinformatics Framework",
  description: "An open-source, agent-based AI bioinformatics framework for computational biology, epidemiology, and public health",
}

export default function DayhoffPage() {
  return (
    <div className="container px-4 md:px-6 mx-auto py-12">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Dayhoff</h1>
          <p className="text-xl text-muted-foreground mb-8">
            An open-source, agent-based AI bioinformatics framework for computational biology, epidemiology, and public health. Named after pioneering scientist Margaret Belle Dayhoff, this framework orchestrates specialized AI agents to deliver cohesive, data-driven solutions for biological and health sciences.
          </p>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/videoseries?si=caS7A9UMCFewuuRB&amp;list=PLgOGgHS58rB-sBjm4oEfMfFXcYZf89IDo"
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
            <h2 className="text-3xl font-bold mb-6">About the Framework</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                The Dayhoff framework (inspired by Margaret Belle Dayhoff, the pioneer in bioinformatics) is an open-source platform for AI-powered biological and public health intelligence. This experimental project creates an ecosystem of specialized agents orchestrated by a central coordination layer to tackle complex challenges in biology, epidemiology, and public health.
              </p>
              
              <p>
                Led by Brutalist.art, this educational experiment emphasizes learning through building, inviting contributors to discover effective approaches through practical implementation rather than claiming definitive solutions.
              </p>
              
              <div className="flex flex-col md:flex-row gap-6 my-8">
                <div className="flex-1 p-6 bg-muted/50 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">The Dayhoff Character</h3>
                  <p className="text-muted-foreground">
                    Inspired by pioneering scientist Margaret Bell Dayhoff, we've created a 1950s era researcher with a brilliant smile and determined expression that reflects her unwavering commitment to scientific innovation. This character embodies our agentic computational bioinformatics framework.
                  </p>
                </div>
                <div className="flex-1 p-6 bg-muted/50 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Margaret Belle Dayhoff</h3>
                  <p className="text-muted-foreground">
                    The historical Margaret Dayhoff revolutionized biology with her pioneering work in protein sequence analysis and her development of the one-letter amino acid code. She integrated multiple scientific disciplines, much like how our framework coordinates intelligent agents to solve complex biological problems.
                  </p>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mt-8 mb-4">Agent-Based Architecture</h3>
              
              <p>
                The Dayhoff framework organizes specialized agents into categories, each focused on different aspects of biological and health sciences:
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-bold">1. Genomic Analysis Agents</h4>
                  <p className="text-sm">Process and interpret genetic sequences, identify patterns, and predict structural and functional properties of biomolecules.</p>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-bold">2. Epidemiological Agents</h4>
                  <p className="text-sm">Track disease spread, analyze transmission patterns, and model potential interventions for public health crises.</p>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-bold">3. Clinical Intelligence Agents</h4>
                  <p className="text-sm">Analyze medical literature, patient data, and treatment outcomes to identify effective health interventions.</p>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-bold">4. Molecular Modeling Agents</h4>
                  <p className="text-sm">Simulate protein folding, drug interactions, and molecular dynamics to accelerate discovery processes.</p>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-bold">5. Biostatistical Agents</h4>
                  <p className="text-sm">Apply advanced statistical methods to biological data, ensuring rigorous analysis and meaningful conclusions.</p>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-bold">6. Public Health Monitoring Agents</h4>
                  <p className="text-sm">Track population health metrics, environmental factors, and social determinants of health across communities.</p>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mt-8 mb-4">The Dayhoff Orchestration Layer</h3>
              
              <p>
                At the heart of the framework is the Dayhoff orchestration layer, which coordinates the activities of specialized agents to systematically address biological and public health challenges:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-bold mb-2">Cross-Agent Validation</h4>
                  <p className="text-sm text-muted-foreground">Testing approaches to identifying when different agents reach contradictory conclusions and resolving analytical conflicts.</p>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-bold mb-2">Dynamic Task Allocation</h4>
                  <p className="text-sm text-muted-foreground">Exploring methodologies for distributing computational resources based on changing health priorities.</p>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-bold mb-2">Pattern Recognition</h4>
                  <p className="text-sm text-muted-foreground">Experimenting with identifying connections across seemingly unrelated biological and epidemiological data.</p>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-bold mb-2">Decision Optimization</h4>
                  <p className="text-sm text-muted-foreground">Translating insights into actionable public health interventions and research directions.</p>
                </div>
                
                <div className="p-4 border rounded-lg col-span-2">
                  <h4 className="font-bold mb-2">Continuous Learning</h4>
                  <p className="text-sm text-muted-foreground">Implementing approaches that allow the entire framework to improve over time through accumulated knowledge.</p>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mt-8 mb-4">Core Technologies</h3>
              
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-bold mb-2">Generative AI Models</h4>
                  <p className="text-sm text-muted-foreground">GPT-4o, LLaMA, Stable Diffusion for protein design, spectral data analysis, and research synthesis.</p>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-bold mb-2">Deep Learning</h4>
                  <p className="text-sm text-muted-foreground">CNN, RNN, Transformers for pattern recognition in spectral data and protein structure prediction.</p>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-bold mb-2">Sequence Analysis</h4>
                  <p className="text-sm text-muted-foreground">PAM matrices, Alignment algorithms for protein sequence analysis and evolutionary studies.</p>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-bold mb-2">Data Analysis</h4>
                  <p className="text-sm text-muted-foreground">PCA, Clustering, Regression, Factor Analysis for biostatistical analysis and pathogen identification.</p>
                </div>
              </div>
              
              <div className="mt-8 flex flex-col md:flex-row gap-4 items-start">
                <a 
                  href="https://github.com/Humanitariansai/Dayhoff" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                  GitHub: Dayhoff Framework
                </a>
                
                <a 
                  href="https://youtube.com/playlist?list=PLgOGgHS58rB-sBjm4oEfMfFXcYZf89IDo&si=caS7A9UMCFewuuRB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                    <path d="m10 15 5-3-5-3z"></path>
                  </svg>
                  YouTube: Dayhoff Playlist
                </a>
                
                <a 
                  href="mailto:info@humanitarians.ai"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  Email: info@humanitarians.ai
                </a>
                
                <a 
                  href="https://www.humanitarians.ai/dayhoff"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                  </svg>
                  Learn More: Dayhoff Page
                </a>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Key Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-3">PredictaBio</h3>
                <p className="text-muted-foreground mb-4">
                  Transforming protein synthesis with artificial intelligence by creating "recipes" for novel proteins with specific properties. This project accelerates the discovery process and enables the design of proteins tailored to diverse applications in biotechnology, healthcare, and sustainability.
                </p>
                <h4 className="font-semibold mb-2">Implementation Process:</h4>
                <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-1 pl-2">
                  <li>Use generative AI to design novel protein sequences with specific properties</li>
                  <li>Optimize protein folding and function through computational modeling</li>
                  <li>Streamline the production process to improve efficiency and reduce costs</li>
                  <li>Apply responsible AI development to address global challenges</li>
                </ol>
              </div>
              
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-3">The RAMAN Effect Project</h3>
                <p className="text-muted-foreground mb-4">
                  Revolutionizing public health through AI-enhanced Wastewater-Based Epidemiology (WBE) using Surface-Enhanced Raman Spectroscopy (SERS). This project develops sophisticated AI software capable of analyzing large volumes of spectral data to detect pathogens and pollutants with unprecedented accuracy.
                </p>
                <h4 className="font-semibold mb-2">Implementation Process:</h4>
                <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-1 pl-2">
                  <li>Integrate Surface-Enhanced Raman Spectroscopy with deep learning models</li>
                  <li>Develop AI algorithms for decoding complex Raman spectra</li>
                  <li>Analyze pooled wastewater for pathogens, pollutants, and emerging substances</li>
                  <li>Enable real-time, scalable, and cost-effective public health surveillance</li>
                </ol>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Implementation Considerations</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-3">Integration Approaches</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-2">
                  <li><span className="font-medium">API-Based Integration:</span> Connects agents to existing bioinformatics tools and databases via RESTful APIs.</li>
                  <li><span className="font-medium">Human-in-the-Loop:</span> Incorporates expert oversight for validation and interpretation of results.</li>
                  <li><span className="font-medium">Phased Rollout:</span> Starts with high-impact agents and scales to others as the framework matures.</li>
                  <li><span className="font-medium">Hybrid Deployment:</span> Supports cloud, on-premises, or hybrid environments for flexibility.</li>
                </ul>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-3">Success Factors</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-2">
                  <li><span className="font-medium">Data Quality:</span> Ensures clean, structured biological data for accurate agent outputs.</li>
                  <li><span className="font-medium">Governance:</span> Defines clear roles for agents and human scientists.</li>
                  <li><span className="font-medium">Feedback Loops:</span> Implements continuous learning from experimental results.</li>
                  <li><span className="font-medium">Ethical AI:</span> Prioritizes transparency and responsible development in biological applications.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Contributing to Dayhoff</h2>
            <p className="text-muted-foreground mb-6">
              We welcome contributions from the community! The Dayhoff framework is an educational experiment designed to evolve through collaborative learning and development.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg">
                <h3 className="font-bold mb-2">Develop New Agents</h3>
                <p className="text-sm text-muted-foreground">Create specialized agents for novel biological and public health applications.</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-bold mb-2">Improve Existing Agents</h3>
                <p className="text-sm text-muted-foreground">Enhance the effectiveness of current analytical techniques.</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-bold mb-2">Benchmark Against Real Cases</h3>
                <p className="text-sm text-muted-foreground">Test Dayhoff against known biological problems and public health scenarios.</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-bold mb-2">Document Best Practices</h3>
                <p className="text-sm text-muted-foreground">Share what works and what doesn't in computational biology and health analytics.</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-bold mb-2">Integrate With Existing Systems</h3>
                <p className="text-sm text-muted-foreground">Build connectors to popular bioinformatics tools and health data repositories.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Get Started</h2>
            <p className="text-muted-foreground mb-6">
              Dayhoff provides a comprehensive framework for AI-driven biological and public health intelligence. Explore the codebase, watch implementation demos, or join our collaborative development community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
              <PrimaryButton href="https://github.com/Humanitariansai/Dayhoff">
                Dayhoff GitHub
              </PrimaryButton>
              <SecondaryButton href="https://youtube.com/playlist?list=PLgOGgHS58rB-sBjm4oEfMfFXcYZf89IDo&si=caS7A9UMCFewuuRB">
                Dayhoff YouTube
              </SecondaryButton>
              <SecondaryButton href="https://www.humanitarians.ai/dayhoff">
                Learn More
              </SecondaryButton>
            </div>
            
            <div className="mt-8 text-center">
              <h3 className="text-lg font-semibold mb-2">Connect with Humanitarians AI</h3>
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                <a 
                  href="https://music.apple.com/us/artist/humanitarians-ai/1781414009"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Apple Music
                </a>
                <a 
                  href="https://open.spotify.com/artist/3cj3R4pDpYQHaWx0MM2vFV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Spotify
                </a>
                <a 
                  href="https://www.humanitarians.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Website
                </a>
                <a 
                  href="https://www.youtube.com/@humanitariansai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  YouTube
                </a>
                <a 
                  href="https://www.linkedin.com/company/105696953/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  LinkedIn
                </a>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Please like and subscribe to Humanitarian's AI YouTube to follow our progress and learn more about our transformative work in computational biology.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
