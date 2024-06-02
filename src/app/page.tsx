import Link from 'next/link';
import Image from 'next/image';

import { ArrowRightIcon } from '@heroicons/react/24/outline';

import SandboxLogo from '@/ui/sandbox-logo';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-32">
        <SandboxLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Yun's Sandbox.</strong> </p>
            <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
              <a href="https://nextjs.org/learn/" className="text-blue-500">
                Next.js Learn Course
              </a>을 기반으로 심심해서 만든 거임.
            </p>
          <Link
            href="/sandbox"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Enter to Sandbox</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
      </div>
   </main>
  );
}
