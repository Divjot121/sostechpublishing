"use client";

import Link from "next/link";
import { BookOpen } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-gray-300 pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 group mb-6">
              <div className="bg-accent text-white p-2 rounded-lg group-hover:bg-blue-400 transition-colors">
                <BookOpen size={24} />
              </div>
              <span className="font-serif font-bold text-2xl tracking-tight text-white">
                SOS TECH
              </span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
              Empowering the next generation of developers, entrepreneurs, and innovators through practical, world-class publishing.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/divjotsingharora/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 bg-white/5 hover:bg-accent rounded-full transition-colors text-white">
                <Instagram size={20} />
              </a>
              <a href="https://linktr.ee/sostech1" target="_blank" rel="noopener noreferrer" aria-label="Linktree / LinkedIn" className="p-2 bg-white/5 hover:bg-accent rounded-full transition-colors text-white">
                <Linkedin size={20} />
              </a>
              <a href="https://linktr.ee/sostech1" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X" className="p-2 bg-white/5 hover:bg-accent rounded-full transition-colors text-white">
                <Twitter size={20} />
              </a>
              <a href="https://github.com/Divjot121" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 bg-white/5 hover:bg-accent rounded-full transition-colors text-white">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-serif tracking-wide">Company</h4>
            <ul className="space-y-4">
              <li><Link href="#about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="#author" className="hover:text-accent transition-colors">Author</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-serif tracking-wide">Resources</h4>
            <ul className="space-y-4">
              <li><Link href="#books" className="hover:text-accent transition-colors">All Books</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Free Chapters</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Learning Paths</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Help Center</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-serif tracking-wide">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Cookie Policy</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} SOS TECH PUBLISHING. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            Founded by <span className="font-medium text-gray-400">Divjot Singh Arora</span>
          </p>
        </div>
      </div>
    </footer>
  );
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

function Youtube(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>;
}

function Instagram(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>;
}
