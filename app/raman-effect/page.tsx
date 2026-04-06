import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import PrimaryButton from "@/components/ui/primary-button"
import SecondaryButton from "@/components/ui/secondary-button"

export const metadata: Metadata = {
  title: "The RAMAN Effect - AI-Enhanced Wastewater-Based Epidemiology",
  description: "An open-source platform revolutionizing public health through AI-enhanced Wastewater-Based Epidemiology (WBE) using Surface-Enhanced Raman Spectroscopy",
}

export default function RAMANEffectPage() {
  return (
    <div className="container px-4 md:px-6 mx-auto py-12">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">The RAMAN Effect</h1>
          <p className="text-xl text-muted-foreground mb-8">
            An open-source platform revolutionizing public health through AI-enhanced Wastewater-Based Epidemiology (WBE) using Surface-Enhanced Raman Spectroscopy (SERS). This project develops sophisticated AI software capable of analyzing large volumes of spectral data to detect pathogens and pollutants with unprecedented accuracy.
          </p>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/3DJzPobJ6V8?si=i6tq8Kr1ZJvIWmpI"
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
            <h2 className="text-3xl font-bold mb-6">About the Project</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                The RAMAN Effect project is named after Sir C. V. Raman, who discovered the Raman scattering phenomenon in 1928, winning the Nobel Prize in Physics in 1930. This project leverages Surface-Enhanced Raman Spectroscopy (SERS) combined with artificial intelligence to revolutionize wastewater-based epidemiology and public health monitoring.
              </p>
              
              <p>
                Led by Brutalist.art, this initiative aims to develop cutting-edge AI software capable of analyzing complex spectral data from wastewater samples to detect pathogens, pollutants, and substances of concern with unprecedented sensitivity and specificity.
              </p>
              
              <div className="flex flex-col md:flex-row gap-6 my-8">
                <div className="flex-1 p-6 bg-muted/50 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">The Power of Raman Spectroscopy</h3>
                  <p className="text-muted-foreground">
                    Raman spectroscopy provides a molecular fingerprint of samples by measuring the inelastic scattering of monochromatic light. When enhanced through SERS techniques, this method can detect substances at extremely low concentrations, making it ideal for identifying trace amounts of pathogens and contaminants in complex wastewater matrices.
                  </p>
                </div>
                <div className="flex-1 p-6 bg-muted/50 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">AI-Enhanced Analysis</h3>
                  <p className="text-muted-foreground">
                    Our platform employs sophisticated deep learning algorithms to decode the complex patterns in Raman spectra. This AI approach enables the identification of multiple substances simultaneously, even in mixed samples, and can adapt to detect emerging pathogens and pollutants as they appear.
                  </p>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mt-8 mb-4">Core Components</h3>
              
              <p>
                The RAMAN Effect project consists of several integrated components working together to transform wastewater analysis:
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-bold">1. Spectral Data Processing</h4>
                  <p className="text-sm">Advanced algorithms for cleaning, normalizing, and extracting features from raw Raman spectral data obtained from wastewater samples.</p>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-bold">2. Pattern Recognition</h4>
                  <p className="text-sm">Deep learning models specifically trained to identify characteristic spectral signatures of pathogens, including viruses, bacteria, and emerging variants.</p>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-bold">3. Multi-Analyte Detection</h4>
                  <p className="text-sm">Systems capable of simultaneously identifying multiple substances in complex wastewater matrices, from pharmaceuticals to pollutants and pathogens.</p>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-bold">4. Quantification Tools</h4>
                  <p className="text-sm">Algorithms that determine not just the presence but also the concentration of detected substances, enabling trend analysis and early warning capabilities.</p>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-bold">5. Real-time Monitoring</h4>
                  <p className="text-sm">Infrastructure for continuous sampling and analysis, providing near-real-time insights into community health and environmental conditions.</p>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-bold">6. Alert Systems</h4>
                  <p className="text-sm">Automated notification mechanisms that alert public health officials when concerning patterns or substances are detected in the wastewater stream.</p>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mt-8 mb-4">Technical Approach</h3>
              
              <p>
                The RAMAN Effect project employs several cutting-edge technologies to transform spectral data into actionable public health intelligence:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-bold mb-2">Advanced Signal Processing</h4>
                  <p className="text-sm text-muted-foreground">Implementing sophisticated noise reduction, baseline correction, and peak identification algorithms specifically optimized for Raman spectral data from wastewater samples.</p>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-bold mb-2">Transfer Learning</h4>
                  <p className="text-sm text-muted-foreground">Leveraging pre-trained models on known pathogen spectra to rapidly adapt to new variants and emerging threats with minimal additional training data.</p>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-bold mb-2">Multivariate Analysis</h4>
                  <p className="text-sm text-muted-foreground">Employing principal component analysis, partial least squares, and other dimensionality reduction techniques to extract meaningful patterns from complex spectral datasets.</p>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-bold mb-2">Explainable AI</h4>
                  <p className="text-sm text-muted-foreground">Developing models that not only identify substances but also provide insights into the specific spectral features that led to each identification, enhancing trust and verification.</p>
                </div>
                
                <div className="p-4 border rounded-lg col-span-2">
                  <h4 className="font-bold mb-2">Federated Learning</h4>
                  <p className="text-sm text-muted-foreground">Enabling collaborative model improvement across multiple wastewater facilities while preserving data privacy and security, allowing the system to learn from diverse geographical and demographic contexts.</p>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mt-8 mb-4">Technical Stack</h3>
              
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-bold mb-2">Machine Learning Frameworks</h4>
                  <p className="text-sm text-muted-foreground">TensorFlow, PyTorch, and scikit-learn for developing and deploying sophisticated spectral analysis models.</p>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-bold mb-2">Spectral Processing</h4>
                  <p className="text-sm text-muted-foreground">Custom libraries for Raman spectral preprocessing, including baseline correction, smoothing, and peak identification algorithms.</p>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-bold mb-2">Data Visualization</h4>
                  <p className="text-sm text-muted-foreground">Plotly, D3.js, and custom visualization tools designed specifically for spectral data and trend analysis.</p>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h4 className="font-bold mb-2">Database Systems</h4>
                  <p className="text-sm text-muted-foreground">Time-series databases optimized for storing and querying large volumes of spectral data and detection events.</p>
                </div>
              </div>
              
              <div className="mt-8 flex flex-col md:flex-row gap-4 items-start">
                <a 
                  href="https://github.com/Humanitariansai/RAMAN-Effect" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                  GitHub: RAMAN Effect Project
                </a>
                
                <a 
                  href="https://www.youtube.com/embed/3DJzPobJ6V8?si=i6tq8Kr1ZJvIWmpI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                    <path d="m10 15 5-3-5-3z"></path>
                  </svg>
                  YouTube: RAMAN Effect Introduction
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
                  href="https://www.humanitarians.ai/raman-effect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                  </svg>
                  Learn More: RAMAN Effect Page
                </a>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Applications</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-3">Pandemic Early Warning</h3>
                <p className="text-muted-foreground mb-4">
                  Detecting viral pathogens in wastewater before clinical cases become widespread, enabling proactive public health responses that can contain outbreaks before they escalate to epidemic levels.
                </p>
                <h4 className="font-semibold mb-2">Implementation Process:</h4>
                <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-1 pl-2">
                  <li>Continuous sampling from strategic wastewater collection points</li>
                  <li>Real-time processing of spectral data through AI analysis pipeline</li>
                  <li>Automated alert generation when pathogen signatures exceed baseline thresholds</li>
                  <li>Integration with public health response systems for rapid intervention</li>
                </ol>
              </div>
              
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-3">Environmental Monitoring</h3>
                <p className="text-muted-foreground mb-4">
                  Tracking pollutants, pharmaceuticals, and other substances of concern in wastewater systems to protect environmental health and monitor community-level exposure to potentially harmful compounds.
                </p>
                <h4 className="font-semibold mb-2">Implementation Process:</h4>
                <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-1 pl-2">
                  <li>Development of spectral libraries for common environmental contaminants</li>
                  <li>Deployment of monitoring systems at wastewater treatment facilities</li>
                  <li>Trend analysis and source identification for detected pollutants</li>
                  <li>Integration with environmental protection protocols and remediation efforts</li>
                </ol>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-3">Community Health Assessment</h3>
                <p className="text-muted-foreground mb-4">
                  Using wastewater analysis to monitor population-level health indicators, substance use patterns, and dietary markers, providing valuable public health insights without individual testing.
                </p>
                <h4 className="font-semibold mb-2">Implementation Process:</h4>
                <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-1 pl-2">
                  <li>Identification of community health biomarkers detectable in wastewater</li>
                  <li>Development of AI models correlating spectral patterns with population health outcomes</li>
                  <li>Creation of dashboards for public health officials to monitor trends</li>
                  <li>Integration with other public health data sources for comprehensive analysis</li>
                </ol>
              </div>
              
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-3">Antimicrobial Resistance Tracking</h3>
                <p className="text-muted-foreground mb-4">
                  Monitoring the prevalence of antimicrobial resistance markers in community wastewater to inform stewardship programs and track the effectiveness of interventions.
                </p>
                <h4 className="font-semibold mb-2">Implementation Process:</h4>
                <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-1 pl-2">
                  <li>Development of spectral signatures for common resistance genes and resistant organisms</li>
                  <li>Correlation of resistance patterns with antibiotic usage data</li>
                  <li>Creation of predictive models for emerging resistance threats</li>
                  <li>Implementation of monitoring networks across healthcare facility wastewater systems</li>
                </ol>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Implementation Considerations</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-3">Technical Requirements</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-2">
                  <li><span className="font-medium">Spectral Data Collection:</span> Standardized protocols for sample preparation and Raman spectrum acquisition.</li>
                  <li><span className="font-medium">Computing Infrastructure:</span> Sufficient processing power for real-time analysis of complex spectral data.</li>
                  <li><span className="font-medium">Reference Libraries:</span> Comprehensive databases of spectral signatures for pathogens and substances of interest.</li>
                  <li><span className="font-medium">Integration Capabilities:</span> APIs and connectors to existing public health and environmental monitoring systems.</li>
                </ul>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-3">Operational Considerations</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-2">
                  <li><span className="font-medium">Sampling Strategy:</span> Optimized collection points and frequencies to maximize detection capabilities.</li>
                  <li><span className="font-medium">Quality Control:</span> Rigorous validation protocols to ensure accuracy and minimize false positives/negatives.</li>
                  <li><span className="font-medium">Privacy Safeguards:</span> Ensuring that community-level monitoring respects privacy considerations.</li>
                  <li><span className="font-medium">Response Protocols:</span> Clear action plans for different types of detections and alert thresholds.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Contributing to RAMAN Effect</h2>
            <p className="text-muted-foreground mb-6">
              We welcome contributions from the community! The RAMAN Effect project is designed to evolve through collaborative development across multiple disciplines.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg">
                <h3 className="font-bold mb-2">Spectral Data Analysis</h3>
                <p className="text-sm text-muted-foreground">Improve algorithms for processing and interpreting Raman spectral data from complex matrices.</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-bold mb-2">AI Model Development</h3>
                <p className="text-sm text-muted-foreground">Create more accurate and efficient models for pathogen and pollutant detection.</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-bold mb-2">Reference Libraries</h3>
                <p className="text-sm text-muted-foreground">Contribute spectral signatures for new pathogens, variants, or substances of interest.</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-bold mb-2">User Interfaces</h3>
                <p className="text-sm text-muted-foreground">Develop intuitive dashboards and visualization tools for monitoring results.</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-bold mb-2">Field Testing</h3>
                <p className="text-sm text-muted-foreground">Implement and validate the system in real-world wastewater monitoring scenarios.</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-bold mb-2">Documentation</h3>
                <p className="text-sm text-muted-foreground">Improve technical documentation, user guides, and implementation protocols.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Get Started</h2>
            <p className="text-muted-foreground mb-6">
              The RAMAN Effect project provides a comprehensive platform for AI-enhanced wastewater-based epidemiology. Explore the codebase, watch implementation demos, or join our collaborative development community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
              <PrimaryButton href="https://github.com/Humanitariansai/RAMAN-Effect">
                RAMAN Effect GitHub
              </PrimaryButton>
              <SecondaryButton href="https://www.youtube.com/embed/3DJzPobJ6V8?si=i6tq8Kr1ZJvIWmpI">
                Watch Video Introduction
              </SecondaryButton>
              <SecondaryButton href="https://www.humanitarians.ai/raman-effect">
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
                Please like and subscribe to Humanitarian's AI YouTube to follow our progress and learn more about our transformative work in wastewater-based epidemiology and public health.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}