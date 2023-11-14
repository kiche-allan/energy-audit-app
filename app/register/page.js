'use client';

import React, { useState } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

export default function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  function handleSubmit() {}

  function handleInputChange() {}
  return (
    <Layout>
      <div className="bg-gray-200 min-h-screen flex justify-center items-center">
        <div className="w-full max-w-xs mx-auto">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-2xl font-semibold mb-4">User Registration</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Username:
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email:
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Password:
                </label>
                <input
                  type="text"
                  id="username"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Confirm Password:
                </label>
                <input
                  type="text"
                  id="username"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Register
                </button>
              </div>

              <div className="flex items-center gap-2  mt-2">
                Already have an account?{' '}
                <Link href="/login" className="text-blue-500">
                  login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
