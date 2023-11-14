'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const [isMenuOpen, setIsMenuOpen] = useState();
  return (
    <>
      {' '}
      <header className="bg-blue-500 text-white py-5 px-2 flex flex-col  md:flex-row fixed top-0 right-0 left-0 ">
        <div className="container  mx-auto flex flex-row gap-1 items-center">
          {' '}
          <div className="container  mx-auto flex flex-row gap-1 items-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"
                />
              </svg>
            </div>
            <div>
              <h5 className="text-lg font-semibold uppercase italic">
                Energy Audit
              </h5>
            </div>
          </div>
          <div className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </div>
        </div>
        <div>
          <nav
            className={
              isMenuOpen
                ? 'flex flex-col  md:flex-row   md:space-x-4'
                : 'hidden md:flex md:flex-row   md:space-x-4'
            }
            id="nav-bar"
          >
            {/* Add your navigation links here */}
            <Link href="/" className="text-white my-4 md:my-2">
              Home
            </Link>
            <a href="#" className="text-white my-4 md:my-2">
              Reports
            </a>
            <a href="#" className="text-white my-4 md:my-2">
              Recommendations
            </a>
            <a href="/dashboard" className="text-white my-4 md:my-2">
              Dashboard
            </a>
            <a href="#" className="text-white my-4 md:my-2">
              Login
            </a>
            <a href="/analytics" className="text-white my-4 md:my-2">
              Analytics
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
