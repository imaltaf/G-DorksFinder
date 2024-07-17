import React from 'react';
import { useRouter } from 'next/router';

export default function Disclaimer() {
  const router = useRouter();

  return (
    <div className="flex flex-col h-screen items-center justify-center bg-black text-white">
      <h1 className="text-3xl md:text-5xl font-bold mb-6">Disclaimer</h1>
      <p className="text-center text-lg md:text-xl max-w-2xl mb-8">
        Use this Google Dorks search engine only for educational purposes, ethical purposes, and bug bounty/pentesting.
      </p>
      <button
        onClick={() => router.push('/')}
        className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700"
      >
        Back to Tool
      </button>
    </div>
  );
}
