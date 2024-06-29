'use client'

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'


// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: '1. AsmrProg', level: 1},
  { name: '2. Online Tutorial', level: 1},
  { name: '3. Game', level: 1},
  { name: '3.1 Pixel Art Sample', href: '/sandbox/pixelartgame', level: 2},
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        //const LinkIcon = link.icon;
        return (
          <div key={link.name} className="transparent">
            {(link.href) ? (
              <Link href={link.href}>
                <p className="pl-3 ">{link.name}</p>  
              </Link>

            ) : (
              <div>
                <p className="font-semibold">{link.name}</p>
              </div>
            )}
          </div>
        )}
      )}
    </>
  );
}

          {/*
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
               'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
               {
                'bg-sky-100 text-blue-600': pathname === link.href,
               }
            )}
          >
            {(link.icon) ? (
            <LinkIcon className="w-6" />
          ): ''}
            <p className="hidden md:block">{link.name}</p>
          </Link>
        )
      }          */}
