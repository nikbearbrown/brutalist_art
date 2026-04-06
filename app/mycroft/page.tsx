import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import PrimaryButton from "@/components/ui/primary-button"
import SecondaryButton from "@/components/ui/secondary-button"

export const metadata: Metadata = {
 title: "Mycroft - AI-Powered Investment Intelligence",
 description: "An open-source, agent-based AI investment intelligence framework designed for educational experimentation in AI-powered investment analysis",
}

export default function MycroftPage() {
 return (
   <div className="container px-4 md:px-6 mx-auto py-12">
     <div className="max-w-4xl mx-auto">
       {/* Hero Section */}
       <div className="mb-16">
         <h1 className="text-4xl md:text-5xl font-bold mb-6">Mycroft</h1>
         <p className="text-xl text-muted-foreground mb-8">
           An open-source educational experiment in AI-powered investment intelligence. Using AI to invest in AI: Building and learning together.
         </p>
         <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8">
           <iframe
             className="absolute top-0 left-0 w-full h-full"
             src="https://www.youtube.com/embed/1H0hsBU_foA?si=Tzx6XN_mBqR69m9P"
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
           <h2 className="text-3xl font-bold mb-6">What Mycroft Fellows Do?</h2>
           <div className="prose prose-lg dark:prose-invert max-w-none">
             
             <p>
               Mycroft Fellows initially build <a href="https://n8n.io/" target="_blank" rel="noopener noreferrer">n8n</a> components that do something useful related to investment analysis, market monitoring, or portfolio management. These components are designed to gather financial data, analyze investment opportunities, evaluate risk metrics, or generate insights, all while working with financial experts to create effective investment intelligence workflows.
             </p>
             
             <div className="mb-8">
               <Image 
                 src="/png/n8n.png" 
                 alt="n8n workflow" 
                 width={1536} 
                 height={449} 
                 className="w-full h-auto rounded-lg my-6"
               />
             </div>
             
             <p>
               Once a single component is built, a fellow can continue to improve it, build another tool or work on the orchestration layer which extends traditional quantitative finance approaches to learning with agentic workflows. This includes adapting portfolio theory, risk management algorithms, and financial forecasting models to agentic workflows that can adapt to changing market conditions.
             </p>
             
             <div className="mb-8">
               <Image 
                 src="/png/rl_agentic.png" 
                 alt="Reinforcement Learning for Agentic AI diagram" 
                 width={1536} 
                 height={1888} 
                 className="w-full h-auto rounded-lg my-6"
               />
             </div>
             
             <h3 className="text-xl font-bold mt-8 mb-4">The Four Agent Layers</h3>
             
             <p>
               Mycroft organizes specialized AI agents into four collaborative layers, each addressing distinct investment challenges:
             </p>
             
             <div className="grid md:grid-cols-2 gap-4 mt-6">
               <div className="p-4 border rounded-lg">
                 <h4 className="font-bold">1. Analytical Agents</h4>
                 <p className="text-sm">Test different methods of gathering, processing, and interpreting information about AI companies through Research Agents, Verification Agents, and Comparative Analysis Agents.</p>
               </div>
               
               <div className="p-4 border rounded-lg">
                 <h4 className="font-bold">2. Portfolio Agents</h4>
                 <p className="text-sm">Transform analytical insights into actionable investment strategies with Diversification Agents, Risk Management Agents, and Rebalancing Agents that maintain optimal allocations.</p>
               </div>
               
               <div className="p-4 border rounded-lg">
                 <h4 className="font-bold">3. Advisory Agents</h4>
                 <p className="text-sm">Explore human-AI interaction through Conversational Financial Advisors, Goal-Setting Agents, and Educational Agents that enhance financial literacy.</p>
               </div>
               
               <div className="p-4 border rounded-lg">
                 <h4 className="font-bold">4. Intelligence Agents</h4>
                 <p className="text-sm">Monitor developments across the AI landscape with News Monitoring Agents, Social Sentiment Agents, Financial Report Agents, and Regulatory Monitoring Agents.</p>
               </div>
               
               <div className="p-4 border rounded-lg col-span-full">
                 <h4 className="font-bold">Mycroft Orchestration Layer</h4>
                 <p className="text-sm">Coordinates all agents through Cross-Agent Validation, Dynamic Task Allocation, Pattern Recognition, and Decision Optimization to maintain system coherence and resolve conflicts.</p>
               </div>
             </div>
             
             <h3 className="text-xl font-bold mt-8 mb-4">The Educational Philosophy: Building to Learn</h3>
             
             <p>
               The Mycroft framework was designed with a clear educational philosophy: to build systems that help us learn what actually works in AI-powered investment analysis. The project explicitly embraces experimentation and discovery rather than claiming to have definitive solutions.
             </p>
             
             <blockquote className="border-l-4 pl-4 italic">
               "We're building to learn. This open-source experiment is about discovering which approaches actually help process information effectively, identify meaningful patterns, and maintain disciplined investment strategies. We don't have all the answers—that's precisely why we're building."
               <footer className="text-sm mt-2">— Brutalist.art</footer>
             </blockquote>
             
             <h3 className="text-xl font-bold mt-8 mb-4">Potential Agentic Tools for Mycroft Fellows</h3>
             
             <div className="grid md:grid-cols-2 gap-4 mt-4">
               <div className="p-4 border rounded-lg">
                 <h4 className="font-bold mb-2">AI Sector Research Analyzer</h4>
                 <p className="text-sm text-muted-foreground">A tool that automatically processes financial statements, earnings calls, and technical documentation to create comprehensive profiles of AI companies.</p>
               </div>
               
               <div className="p-4 border rounded-lg">
                 <h4 className="font-bold mb-2">Patent Intelligence Monitor</h4>
                 <p className="text-sm text-muted-foreground">An agent that tracks patent filings across the AI sector to identify emerging technological trends and potential market leaders.</p>
               </div>
               
               <div className="p-4 border rounded-lg">
                 <h4 className="font-bold mb-2">Portfolio Risk Simulator</h4>
                 <p className="text-sm text-muted-foreground">A tool that implements various stress tests and Monte Carlo simulations to identify potential vulnerabilities in AI-focused investment portfolios.</p>
               </div>
               
               <div className="p-4 border rounded-lg">
                 <h4 className="font-bold mb-2">Regulatory Impact Predictor</h4>
                 <p className="text-sm text-muted-foreground">An agent that analyzes proposed regulations and predicts their potential impact on different AI subsectors and specific companies.</p>
               </div>
               
               <div className="p-4 border rounded-lg">
                 <h4 className="font-bold mb-2">Earnings Transcript Analyzer</h4>
                 <p className="text-sm text-muted-foreground">A tool that processes earnings call transcripts to identify subtle shifts in language and strategic focus that might signal changing business conditions.</p>
               </div>
               
               <div className="p-4 border rounded-lg">
                 <h4 className="font-bold mb-2">Investment Education Builder</h4>
                 <p className="text-sm text-muted-foreground">An agent that identifies knowledge gaps and creates personalized educational content to enhance investors' understanding of AI technologies and markets.</p>
               </div>
             </div>
             
             <p className="mt-8">
               These tools represent starting points for Mycroft Fellows to explore. The open-source nature of the framework encourages contributors to experiment with different approaches, discover what actually works in practice, and share their findings with the community.
             </p>
             
             <div className="mt-8 flex flex-col md:flex-row gap-4 items-start">
               <a 
                 href="https://github.com/brutalist-art"
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex items-center gap-2 text-primary hover:underline"
               >
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                   <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                   <path d="M9 18c-4.51 2-5-2-7-2"></path>
                 </svg>
                 GitHub: Mycroft Framework
               </a>
               
               <a 
                 href="https://brutalist.art/mycroft"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex items-center gap-2 text-primary hover:underline"
               >
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                   <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                   <line x1="3" y1="9" x2="21" y2="9"></line>
                   <line x1="9" y1="21" x2="9" y2="9"></line>
                 </svg>
                 Mycroft Webpage
               </a>
               
               <a 
                 href="mailto:bear@bearbrown.co"
                 className="flex items-center gap-2 text-primary hover:underline"
               >
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                   <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                   <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                 </svg>
                 Email: bear@bearbrown.co
               </a>
             </div>
           </div>
         </section>

         <section>
           <h2 className="text-3xl font-bold mb-6">Get Started</h2>
           <p className="text-muted-foreground mb-6">
             Mycroft provides an educational framework for AI-driven investment intelligence. Explore the codebase, contribute to experimental components, or join our collaborative learning community.
           </p>
           <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
             <PrimaryButton href="https://github.com/brutalist-art">
               Mycroft GitHub
             </PrimaryButton>
             <SecondaryButton href="https://brutalist.art/mycroft">
               Mycroft Website
             </SecondaryButton>
             <SecondaryButton href="mailto:bear@bearbrown.co">
               Contact Us
             </SecondaryButton>
           </div>
         </section>
       </div>
     </div>
   </div>
 );
}
