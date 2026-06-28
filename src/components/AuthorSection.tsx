"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, Code, Megaphone, Zap } from "lucide-react";
import Image from "next/image";

export function AuthorSection() {
  const achievements = [
    { label: "Founder & CEO of SOS TECH GROUP", icon: Briefcase },
    { label: "Author", icon: Award },
    { label: "Full Stack Developer", icon: Code },
    { label: "Community Leader", icon: Users },
    { label: "Technology Speaker", icon: Megaphone },
    { label: "Young Entrepreneur", icon: Zap },
  ];

  return (
    <section id="author" className="py-24 bg-primary text-background overflow-hidden relative">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent rounded-full blur-[100px]" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-400 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Portrait Area */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-background/10 bg-secondary relative shadow-2xl">
              <Image
                src="/author.jpg"
                alt="Divjot Singh Arora"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent z-10" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                <div className="flex gap-4">
                  <a href="https://www.instagram.com/divjotsingharora/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-3 bg-background/10 hover:bg-accent rounded-full backdrop-blur-md transition-colors text-background">
                    <Instagram size={20} />
                  </a>
                  <a href="https://linktr.ee/sostech1" target="_blank" rel="noopener noreferrer" aria-label="Linktree / LinkedIn" className="p-3 bg-background/10 hover:bg-accent rounded-full backdrop-blur-md transition-colors text-background">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://github.com/Divjot121" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-3 bg-background/10 hover:bg-accent rounded-full backdrop-blur-md transition-colors text-background">
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 top-8 -right-8 w-full h-full border border-background/10 rounded-3xl" />
          </motion.div>

          {/* Content Area */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col"
          >
            <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Meet The Founder</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-background">
              Divjot Singh Arora
            </h2>
            
            <p className="text-background/80 text-lg leading-relaxed mb-10">
              A young entrepreneur and visionary author dedicated to bridging the gap between complex technology and accessible education. Through SOS TECH PUBLISHING, Divjot empowers the next generation of innovators with practical, real-world knowledge.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-background/5 border border-background/10 rounded-xl"
                >
                  <achievement.icon size={20} className="text-accent flex-shrink-0" />
                  <span className="text-sm font-medium text-background/90">{achievement.label}</span>
                </motion.div>
              ))}
            </div>
            
            <a href="#vision" className="inline-flex items-center gap-2 text-accent font-medium hover:text-background transition-colors w-fit group">
              Read Publishing Vision 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Temporary icon fix for Users
function Users(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
}

// Brand Icons
function Linkedin(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
}

function Twitter(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>;
}

function Github(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>;
}

function Instagram(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>;
}
