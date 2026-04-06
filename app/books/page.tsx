import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import PrimaryButton from "@/components/ui/primary-button"
import SecondaryButton from "@/components/ui/secondary-button"

export const metadata: Metadata = {
  title: "Books - Brutalist",
  description: "Explore the collection of books on AI, Programming, and Prompt Engineering from Brutalist.art.",
}

export default function BooksPage() {
  return (
    <div className="container px-4 md:px-6 mx-auto py-12">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Books & Publications</h1>
          <p className="text-xl text-muted-foreground mb-8">
            A collection of books and publications on AI, programming, and prompt engineering techniques for the modern digital world.
          </p>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8 border border-gray-200 dark:border-gray-800">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/juYjI3cncug?si=WqvsOj98AZuo_B-V"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

        {/* Author Philosophy Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Author Philosophy</h2>
          <div className="prose prose-lg dark:prose-invert bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <p>
              My approach to writing emphasizes accessibility, practical application, and interdisciplinary connections. I believe in creating immersive educational content that helps readers develop both technical expertise and critical thinking skills. Beyond traditional textbooks, I craft narratives that make complex technical concepts engaging and memorable.
            </p>
            <p>
              Through my writing, I aim to bridge the gap between academic theory and real-world practice, helping readers gain valuable insights while developing skills that serve both professional growth and broader social good. My books often incorporate storytelling elements that make learning more engaging and retention-focused.
            </p>
          </div>
        </section>

        {/* Featured Book Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Featured Book</h2>
          <div className="grid md:grid-cols-3 gap-6 items-start">
            <div className="md:col-span-1">
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg aspect-[3/4] relative overflow-hidden border border-gray-200 dark:border-gray-700">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <span className="text-lg font-medium">Book Cover</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-3">How to Speak Bot: Prompt Patterns</h3>
              <p className="text-muted-foreground mb-4">
                A comprehensive guide to mastering prompt engineering patterns through engaging narratives and practical examples.
              </p>
              <div className="mb-4">
                <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2">
                  Prompt Engineering
                </span>
                <span className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2">
                  AI Communication
                </span>
                <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2">
                  LLM Interaction
                </span>
              </div>
              <div className="prose prose-sm dark:prose-invert mb-4">
                <p>
                  "How to Speak Bot: Prompt Patterns" follows the journey of Princess Prompter, Witch Wanjali, and their trio of ChatBots—Bing, Gemini, and ChatGPT—as they explore the realm of Prompt Engineering Patterns. This unique approach makes learning about AI interaction accessible and engaging for readers of all backgrounds.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <PrimaryButton href="#toc">
                  View Table of Contents
                </PrimaryButton>
                <SecondaryButton href="#">
                  Pre-order Now
                </SecondaryButton>
              </div>
            </div>
          </div>
        </section>

        {/* Table of Contents Section */}
        <section id="toc" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Table of Contents</h2>
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <ol className="list-decimal pl-5 space-y-3">
              <li className="font-medium">Introduction
                <ul className="list-disc pl-5 mt-2 text-muted-foreground">
                  <li>The journey begins with Princess Prompter and her quest</li>
                  <li>Chatbots & LLMs: Understanding the basics</li>
                  <li>Alan Turing and the Turing Test</li>
                  <li>Beyond the Turing Test: Mini-Turing Tests and the Chinese Room Argument</li>
                </ul>
              </li>
              <li className="font-medium">The Magical World of Wordsville
                <ul className="list-disc pl-5 mt-2 text-muted-foreground">
                  <li>Princess Prompter and her Chatbots</li>
                  <li>Witch Wanjali and her "Book of Prompt Engineering Patterns"</li>
                  <li>Professor Smartypants and her Wolf-Dog Berry</li>
                  <li>ChatGPT, Gemini, and Bing</li>
                  <li>The regions of Wordsville: OpenAI ChatGPT, Google Gemini, Microsoft Bing Chat</li>
                </ul>
              </li>
              <li className="font-medium">Prompt Engineering
                <ul className="list-disc pl-5 mt-2 text-muted-foreground">
                  <li>Why is Prompt Engineering Important?</li>
                  <li>Prompt engineering vs. C++</li>
                  <li>Prompt Engineering Patterns</li>
                </ul>
              </li>
              <li className="font-medium">Persona Pattern</li>
              <li className="font-medium">Audience Persona Pattern</li>
              <li className="font-medium">Flipped Interaction Pattern</li>
              <li className="font-medium">Game Play Pattern</li>
              <li className="font-medium">Template Pattern</li>
              <li className="font-medium">Meta Language Creation Pattern</li>
              <li className="font-medium">Recipe Pattern</li>
              <li className="font-medium">Alternative Approaches Pattern</li>
              <li className="font-medium">Ask for Input Pattern</li>
              <li className="font-medium">Outline Expansion Pattern</li>
              <li className="font-medium">Menu Actions Pattern</li>
              <li className="font-medium">Fact Check List Pattern</li>
              <li className="font-medium">Tail Generation Pattern</li>
              <li className="font-medium">Semantic Filter Pattern</li>
              <li className="font-medium">Helpful Assistant Pattern</li>
              <li className="font-medium">Real-World Implementations</li>
              <li className="font-medium">References</li>
              <li className="font-medium">Acknowledgements</li>
            </ol>
          </div>
        </section>
        
        {/* Other Books Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Other Books</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
              <div className="bg-gray-100 dark:bg-gray-800 aspect-video relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <span className="text-lg font-medium">Book Cover</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Flux Prompt Patterns</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  A comprehensive guide to text-to-image generation with AI tools like Midjourney and DALL-E, featuring practical templates and creative workflows.
                </p>
                <div className="flex justify-end">
                  <SecondaryButton href="#">
                    Learn More
                  </SecondaryButton>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
              <div className="bg-gray-100 dark:bg-gray-800 aspect-video relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <span className="text-lg font-medium">Book Cover</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Computational Skepticism and AI Fluency</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  An exploration of critical thinking in the age of artificial intelligence, with a focus on data validation and the development of skills for effective human-AI collaboration.
                </p>
                <div className="flex justify-end">
                  <SecondaryButton href="#">
                    Learn More
                  </SecondaryButton>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Upcoming Books */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Upcoming Projects</h2>
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <ul className="space-y-4">
              <li>
                <h3 className="font-bold text-lg">Algorithms for the Digital Age</h3>
                <p className="text-muted-foreground">
                  A modern approach to algorithm design and analysis with practical Python implementations for today's computational challenges.
                </p>
              </li>
              <li>
                <h3 className="font-bold text-lg">The AI Engineer's Handbook</h3>
                <p className="text-muted-foreground">
                  A comprehensive guide to the emerging field of AI Engineering, covering the full lifecycle of AI system development.
                </p>
              </li>
            </ul>
          </div>
        </section>
        
        {/* Contact/Closing Section */}
        <section className="mt-16">
          <div className="bg-gray-900 text-white rounded-lg p-8 border border-gray-800">
            <h3 className="text-2xl font-bold mb-4">Book Inquiries & Collaborations</h3>
            <p className="text-lg mb-6 opacity-90">
              Interested in discussing my books, exploring potential collaborations, or inviting me for speaking engagements? I'm always open to connecting with readers, fellow authors, and publishing professionals.
            </p>
            <div className="flex flex-wrap gap-4">
              <PrimaryButton href="/contact" className="bg-white text-gray-900 hover:bg-gray-100">
                Contact Me
              </PrimaryButton>
              <SecondaryButton href="/speaking" className="border-white text-white hover:bg-white/10">
                Speaking Engagements
              </SecondaryButton>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
