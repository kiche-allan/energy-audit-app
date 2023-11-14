'use client';
import { useState } from 'react';
import Link from 'next/link';
import Layout from './components/Layout';

export default function Home() {
  return (
    <Layout>
      {/* <!-- Hero Section --> */}
      <section className="bg-blue-600 py-16 text-white pt-28">
        <div className="container mx-auto text-center">
          <h2 className=" font-bold mb-3">Save Energy, Save Money</h2>
          <p className="mb-8">
            Welcome to Energy Audit App for Moi University Soweto Kitchen.
          </p>
          <Link
            href="/register"
            className="bg-white text-blue-600 hover:bg-blue-100 hover:text-blue-600 font-semibold rounded-full px-6 py-3 transition duration-300 ease-in-out"
          >
            Get Started
          </Link>
        </div>
      </section>
      {/* <!-- Features Section --> */}
      <section className="container py-10 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-5 ">
          {/* <!-- Feature Card 1 --> */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="container mx-auto flex flex-row gap-1">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#3B82F6"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold"> Audit Reports</h3>
              </div>
            </div>
            <p className="mt-3">
              A detailed energy audit reports for Kitchen Soweto
            </p>
          </div>

          {/* <!-- Feature Card 2 --> */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="container mx-auto flex flex-row gap-1">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#3B82F6"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                  />
                </svg>
              </div>
              <div>
                <h5 className=" font-semibold">Recommendations</h5>
              </div>
            </div>
            <p className="mt-3">Energy-saving recommendations for Kitchen.</p>
          </div>

          {/* <!-- Feature Card 3 --> */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="container mx-auto flex flex-row gap-1">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#3B82F6"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h5 className=" font-semibold">Track Savings</h5>
              </div>
            </div>
            <p className="mt-3">Check energy costs per usage.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
