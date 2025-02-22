// components/Layout.js
import { ReactNode } from 'react'; // Import ReactNode
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/logo.svg'; // Assuming the SVG logo is in the public directory
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode; // Specify the type for children as ReactNode
}

const Layout = ({ children }: LayoutProps ) => {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="w-full py-6 px-8 flex items-center justify-between fixed top-0 left-0 z-10 backdrop-blur-sm bg-black/30">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Image src={logo} alt="Company Logo" width={150} height={50} />
          </Link>
        </div>

        <div className="hidden md:flex space-x-8">
          <Link href="/docs" className="text-lg font-medium hover:text-teal-500">
            Docs
          </Link>
          <Link href="/playground" className="text-lg font-medium hover:text-teal-500">
            Playground
          </Link>
          <Link href="/guides" className="text-lg font-medium hover:text-teal-500">
            Guides
          </Link>
          <Link href="#" className="text-lg font-medium hover:text-teal-500">
            Blog
          </Link>
        </div>

        <div className="flex items-center space-x-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-white hover:text-teal-500 transition">
              <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.315 3.438 9.829 8.207 11.437.6.111.823-.262.823-.583v-2.128c-3.338.727-4.032-1.601-4.032-1.601-.547-1.39-1.333-1.762-1.333-1.762-1.089-.745.082-.731.082-.731 1.205.085 1.84 1.23 1.84 1.23 1.068 1.826 2.807 1.298 3.492.998.106-.774.418-1.298.762-1.598-2.666-.302-5.466-1.333-5.466-5.933 0-1.313.469-2.389 1.237-3.232-.124-.303-.537-1.532.118-3.173 0 0 1.009-.32 3.302 1.23.96-.267 1.981-.399 2.996-.403 1.016.004 2.036.136 2.996.403 2.293-1.55 3.302-1.23 3.302-1.23.655 1.641.243 2.87.118 3.173.768.843 1.237 1.919 1.237 3.232 0 4.608-2.8 5.629-5.466 5.933.368.3.723.893.723 1.797v2.644c0 .322.223.694.823.583 4.769-1.608 8.207-6.122 8.207-11.437 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </nav>

      <div className="min-h-screen flex flex-col">
        <main className="flex-grow pt-32">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
