import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import PrimaryButton from "@/components/ui/primary-button"
import SecondaryButton from "@/components/ui/secondary-button"

export const metadata: Metadata = {
  title: "Popper Framework - Computational Skepticism & AI Validation",
  description: "An open-source framework for systematic AI validation through computational skepticism: Evidence for and against",
}

export default function PopperPage() {
  return (
    <div className="container px-4 md:px-6 mx-auto py-12">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Popper Framework</h1>
          <p className="text-xl text-muted-foreground mb-8">
            An open-source framework for computational skepticism and AI validation. Named after philosopher Karl Popper, this framework embraces the scientific method by rigorously examining evidence both for and against AI systems.
          </p>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/videoseries?si=jDMnuKG_W6_6l1Rh&list=PLgOGgHS58rB-_qAesCOzXfu1394C8G4v_"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <p className="text-lg italic text-center mb-8">
            "We can never be completely certain, but we can be confident in what we've tried to falsify."
          </p>
        </div>

        {/* Main Content */}
        <div className="grid gap-12">
          <section>
            <h2 className="text-3xl font-bold mb-6">About the Project</h2>
            <div className="prose prose-lg dark:prose-invert">
              <p>
                The Popper framework is an open-source platform for systematic AI validation and computational skepticism. Rather than claiming models are "correct," Popper establishes a systematic approach to identifying strengths, weaknesses, biases, and inconsistencies in AI systems through an ecosystem of specialized validation agents orchestrated by a central verification layer.
              </p>
              
              <p>
                Led by Brutalist.art, this experimental project emphasizes learning by building, inviting contributors to discover what approaches actually work in practice rather than claiming to have definitive solutions.
              </p>
              
              <h3 className="text-xl font-bold mt-6 mb-3">Philosophical Foundations</h3>
              
              <p>
                The Popper framework is built on Karl Popper's revolutionary principle that scientific theories can never be proven "true" – they can only be corroborated through rigorous testing that fails to falsify them. In Popper's words, "Good tests kill flawed theories; we remain alive to guess again."
              </p>
              
              <p>
                We apply this philosophy to AI validation through:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-bold">Balanced Evidence Assessment</h4>
                  <p className="text-sm">Methodically gather and evaluate evidence both supporting and challenging AI systems.</p>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-bold">Conjecture and Refutation</h4>
                  <p className="text-sm">Propose potential strengths and weaknesses, then test them systematically.</p>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-bold">Critical Rationalism</h4>
                  <p className="text-sm">Subject all claims to rigorous scrutiny, regardless of source or confidence.</p>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-bold">Scientific Skepticism</h4>
                  <p className="text-sm">Embrace doubt as the path to reliable knowledge while recognizing corroborating evidence.</p>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mt-6 mb-3">The Agent Ecosystem</h3>
              
              <p>
                The Popper framework organizes specialized agents into classes, each focused on different aspects of AI validation:
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mt-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-bold">Data Validation Agents</h4>
                  <p className="text-sm">Examine whether datasets accurately represent reality.</p>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-bold">Bias Detection Agents</h4>
                  <p className="text-sm">Identify and mitigate various forms of bias in AI systems.</p>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-bold">Explainability Agents</h4>
                  <p className="text-sm">Make AI systems more transparent and interpretable.</p>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-bold">Probabilistic Reasoning Agents</h4>
                  <p className="text-sm">Evaluate uncertainty and probabilistic reasoning in AI.</p>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-bold">Adversarial Agents</h4>
                  <p className="text-sm">Test AI robustness through controlled attacks.</p>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-bold">RL Validation Agents</h4>
                  <p className="text-sm">Evaluate reinforcement learning systems for reliability and ethics.</p>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-bold">Visualization Agents</h4>
                  <p className="text-sm">Create interfaces between AI systems and human users.</p>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-bold">Falsification Agents</h4>
                  <p className="text-sm">Actively seek to disprove AI claims and identify limitations.</p>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-bold">Graph-Based Reasoning Agents</h4>
                  <p className="text-sm">Analyze relationships and dependencies in AI knowledge structures.</p>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-bold">Causal Inference Agents</h4>
                  <p className="text-sm">Examine and verify causal relationships in AI systems.</p>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mt-6 mb-3">The Popper Orchestration Layer</h3>
              
              <p>
                At the heart of the framework is the Popper orchestration layer, which coordinates the activities of specialized agents to systematically evaluate AI systems:
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mt-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-bold">Cross-Agent Validation</h4>
                  <p className="text-sm">Testing approaches to identifying when different validation agents reach contradictory conclusions.</p>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-bold">Dynamic Task Allocation</h4>
                  <p className="text-sm">Exploring approaches to distributing validation resources based on changing priorities.</p>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-bold">Pattern Recognition</h4>
                  <p className="text-sm">Experiments with identifying connections across seemingly unrelated validation findings.</p>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-bold">Decision Optimization</h4>
                  <p className="text-sm">Exploring methodologies for translating validation insights into appropriate system improvements.</p>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-bold">Continuous Learning</h4>
                  <p className="text-sm">Testing how the entire validation framework might improve over time.</p>
                </div>
              </div>
              
              <p className="mt-6">
                While AI technology evolves rapidly, the Popper framework is designed to adapt and learn. Our open-source approach emphasizes transparency, allowing contributors to understand the reasoning behind each component, challenge assumptions, and discover through experimentation which approaches yield the most valuable insights into AI validity.
              </p>
              
              <p className="mt-4">
                The Popper project offers educational resources through videos, documentation, and collaborative development opportunities. We invite you to join us in this experimental journey of building and learning together.
              </p>
              
              <div className="mt-6 flex flex-col md:flex-row gap-4 items-start">
                <a 
                  href="https://github.com/Humanitariansai/Popper" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                  GitHub: Popper Framework
                </a>
                
                <a 
                  href="https://www.youtube.com/playlist?list=PLgOGgHS58rB-_qAesCOzXfu1394C8G4v_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                    <path d="m10 15 5-3-5-3z"></path>
                  </svg>
                  YouTube: Popper Playlist
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
                  href="https://www.humanitarians.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                  </svg>
                  Website: humanitarians.ai
                </a>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Key Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-3">Critical Evidence Framework</h3>
                <p className="text-muted-foreground">
                  A balanced system for gathering, evaluating, and weighing evidence both supporting and challenging AI claims.
                </p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-3">Causal Inference Pipeline</h3>
                <p className="text-muted-foreground">
                  A comprehensive toolkit for rigorous causal analysis in AI systems, from DAG construction to sensitivity analysis.
                </p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-3">Multi-Model Verification</h3>
                <p className="text-muted-foreground">
                  A framework for cross-validating outputs across multiple AI models to identify consistencies and discrepancies.
                </p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-3">Graph-Based Knowledge Validation</h3>
                <p className="text-muted-foreground">
                  Tools for analyzing and validating the structure and relationships in AI knowledge representations.
                </p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-3">Comprehensive Data Evaluation</h3>
                <p className="text-muted-foreground">
                  A system for assessing the strengths and limitations of training and evaluation data.
                </p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-3">Explanation Assessment</h3>
                <p className="text-muted-foreground">
                  Tools for evaluating the quality, completeness, and faithfulness of AI-generated explanations.
                </p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-3">Bias Detection Suite</h3>
                <p className="text-muted-foreground">
                  A collection of techniques for identifying and measuring various forms of bias in AI systems.
                </p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-3">Probabilistic Calibration</h3>
                <p className="text-muted-foreground">
                  Tools for evaluating and improving the calibration of confidence estimates in AI predictions.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Contributing to Popper</h2>
            <p className="text-lg mb-4">
              We welcome contributions from the community! The Popper framework is an educational experiment designed to evolve through collaborative learning and development.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-bold">Develop New Agents</h4>
                <p className="text-sm">Create specialized agents for novel validation approaches.</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-bold">Improve Existing Agents</h4>
                <p className="text-sm">Enhance the effectiveness of current validation techniques.</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-bold">Benchmark Against Real Cases</h4>
                <p className="text-sm">Test Popper against known AI failures and successes.</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-bold">Document Best Practices</h4>
                <p className="text-sm">Share what works and what doesn't in AI validation.</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-bold">Integrate With AI Systems</h4>
                <p className="text-sm">Build connectors to popular AI frameworks and models.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Get Started</h2>
            <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
              <PrimaryButton href="https://github.com/Humanitariansai/Popper">
                Popper GitHub
              </PrimaryButton>
              <SecondaryButton href="https://www.youtube.com/playlist?list=PLgOGgHS58rB-_qAesCOzXfu1394C8G4v_">
                Popper YouTube
              </SecondaryButton>
              <SecondaryButton href="https://www.humanitarians.ai/">
                Humanitarians AI
              </SecondaryButton>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}