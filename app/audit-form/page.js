'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import Layout from '../components/Layout';

export default function AuditForm() {
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
      <div className="bg-gray-200 min-h-screen flex justify-center items-center ">
        <div className="w-full max-w-xs mx-auto">
          <div className="bg-white shadow-md rounded px-8 mt-24 pb-8 mb-4">
            <h2 className="text-2xl font-semibold mb-4">AUDIT FORM</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Your name:
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.email}
                  placeholder="Your name"
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Date of Audit:
                </label>
                <input
                  type="date"
                  id="username"
                  name="password"
                  value={formData.password}
                  placeholder="Date of Audit"
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Next Date of Audit:
                </label>
                <input
                  type="date"
                  id="username"
                  name="password"
                  value={formData.password}
                  placeholder="Next Date of Audit"
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Name of the Entity:
                </label>
                <input
                  type="text"
                  id="username"
                  name="password"
                  value={formData.password}
                  placeholder="Name of the Entity"
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Associated Facilities:
                </label>
                <input
                  type="text"
                  id="username"
                  name="password"
                  value={formData.password}
                  placeholder="Comma separated eg H, J, G"
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="severity"
                >
                  Severity/Risk Rating
                </label>
                <select
                  class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500"
                  id="severity"
                  name="severity"
                >
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>

              <div class="mb-4 flex flex-row items-center">
                <div class="w-2/3 mr-2">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="finding"
                  >
                    Item/Equipment
                  </label>
                  <input
                    class="w-full border rounded py-2 px-3"
                    id="finding"
                    name="finding"
                    type="text"
                    placeholder="Item/Equipment"
                  />
                </div>
                <div class="w-1/3 ml-2">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="severity"
                  >
                    Risk Rating
                  </label>
                  <select
                    class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500"
                    id="severity"
                    name="severity"
                  >
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>
              </div>

              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="finding"
                >
                  Finding/ Observation
                </label>
                <textarea
                  class="resize-y border rounded w-full py-2 px-3"
                  id="finding"
                  name="finding"
                  placeholder="Enter your finding/observation"
                ></textarea>
              </div>

              <div class="mb-6">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="evidence"
                >
                  Upload Images(Optional)
                </label>
                <input
                  class="appearance-none w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="evidence"
                  name="evidence"
                  type="file"
                />
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
