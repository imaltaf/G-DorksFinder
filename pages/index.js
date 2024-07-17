import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaShieldAlt } from 'react-icons/fa';
import { useRouter } from 'next/router';
import Search from '../components/Search';
import Earth from '../components/Earth';

export default function Home() {
  const router = useRouter();

  return (
    <div className="dark">
      <main className="flex flex-col h-[50rem] w-full dark:bg-black dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] items-center justify-center min-h-screen py-2 bg-black relative">
        
        <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative ">
          G-DorksFinder
        </h1>
        <div className="w-[40rem] h-10 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-yellow-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-yellow-500 to-transparent h-px w-1/4" /> 
        </div>
        
        <Search/>
        
        {/* Footer */}
        <footer className="absolute bottom-4 left-0 right-0 flex justify-center items-center">
          <p className="text-white mr-4">Developed by Altaf</p>
          <div className="flex items-center">
            <a
              href="https://github.com/imaltaf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mr-4 hover:text-gray-400"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://imaltaf.site"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white mr-4 hover:text-gray-400"
            >
              <FaExternalLinkAlt size={24} />
            </a>
            <button
              onClick={() => router.push('/disclaimer')}
              className="text-white hover:text-gray-400"
            >
              <FaShieldAlt size={24} />
            </button>
          </div>
        </footer>
      </main>
    </div>
  );
}
