import React, { useState } from "react";
import logo from "../assets/logo.png";

const Home = () => {

  return (
    <div className={`min-h-screen bg-black text-white`}>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Internship Orbit</h1>
        </div>
      </nav>

      <header className="flex flex-col items-center justify-center text-center p-10 min-h-screen">
        <img src={logo} height={220} width={220} alt="Logo" />
        <h2 className="text-4xl font-bold mb-4">Welcome to the Internship Management System</h2>
        <p className="text-lg mb-6">
          Streamline your internship experience with our comprehensive tracking and reporting system.
        </p>
        <div>
          <a
            href="/student"
            className="bg-green-500 dark:bg-green-700 text-white px-6 py-3 rounded-lg shadow-md mr-4"
          >
            Student Portal
          </a>
          <a
            href="/mentor"
            className="bg-yellow-500 dark:bg-yellow-700 text-white px-6 py-3 rounded-lg shadow-md mr-4"
          >
            Mentor Portal
          </a>
          <a
            href="/admin"
            className="bg-red-500 dark:bg-red-700 text-white px-6 py-3 rounded-lg shadow-md"
          >
            Admin Portal
          </a>
        </div>
      </header>

      <section className="p-10 bg-gray-800">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-6 text-center">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 dark:text-white p-6 rounded-lg shadow">
              <h4 className="text-xl font-semibold mb-2">Real-Time Tracking</h4>
              <p>
                Keep track of internship progress, report submissions, and evaluations in real-time.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 dark:text-white p-6 rounded-lg shadow">
              <h4 className="text-xl font-semibold mb-2">Streamlined Communication</h4>
              <p>
                Facilitate seamless communication between students, mentors, and administrators.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 dark:text-white p-6 rounded-lg shadow">
              <h4 className="text-xl font-semibold mb-2">Centralized Management</h4>
              <p>
                Easily manage internships, generate reports, and ensure compliance with requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-dark-900 text-white text-center p-4">
        <p>&copy; 2024 Internship Management System. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;