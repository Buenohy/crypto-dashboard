'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import { signIn } from 'next-auth/react';

import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaGoogle,
  FaFacebook,
} from 'react-icons/fa';

export default function SignUpPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('As senhas não coincidem. Tente novamente.');
      return;
    }

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Ocorreu um erro ao criar a conta.');
      } else {
        alert(
          'Conta criada com sucesso! Você será redirecionado para o login.'
        );
        router.push('/login');
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error);
      setError('Ocorreu um erro inesperado. Tente mais tarde.');
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-primary">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          SIGN UP
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FaUser className="text-gray-400" />
            </span>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
              className="w-full pl-10 pr-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FaEnvelope className="text-gray-400" />
            </span>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="w-full pl-10 pr-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FaLock className="text-gray-400" />
            </span>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="w-full pl-10 pr-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FaLock className="text-gray-400" />
            </span>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              required
              className="w-full pl-10 pr-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {error && <p className="text-sm text-center text-red-500">{error}</p>}

          <div>
            <button
              type="submit"
              className="w-full px-4 py-3 font-bold text-white bg-primary rounded-md hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-300"
            >
              SIGN UP
            </button>
          </div>
        </form>

        <div className="flex items-center justify-center space-x-2">
          <hr className="w-full border-gray-300" />
          <span className="px-2 text-sm text-gray-500 whitespace-nowrap">
            Or sign up with
          </span>
          <hr className="w-full border-gray-300" />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <button
            onClick={() => signIn('facebook')}
            className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-500 focus:outline-none"
          >
            <FaFacebook className="w-5 h-5 mr-2" />
            Facebook
          </button>
          <button
            onClick={() => signIn('google')}
            className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none"
          >
            <FaGoogle className="w-5 h-5 mr-2 text-red-500" />
            Google
          </button>
        </div>

        <p className="text-sm text-center text-gray-600">
          Already a member?{' '}
          <Link
            href="/login"
            className="font-medium text-primary hover:underline"
          >
            Login now
          </Link>
        </p>
      </div>
    </main>
  );
}
