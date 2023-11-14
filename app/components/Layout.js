'use client';
import Header from './Header';

export default function Layout({ children }) {
  return (
    <>
      {/* <!-- Header --> */}
      <Header />
      {children}
    </>
  );
}
