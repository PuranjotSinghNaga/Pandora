'use client';

import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Spotlight } from '@/components/ui/Spotlight';

export default function SignInForm() {
  const router = useRouter();
  const { handleSubmit, register } = useForm({
    defaultValues: {
      identifier: '',
      password: '',
    },
  });

  const onSubmit = async (data) => {
    const result = await signIn('credentials', {
      redirect: false,
      identifier: data.identifier,
      password: data.password,
    });

    if (result?.error) {
      if (result.error === 'CredentialsSignin') {
        alert('Incorrect username or password');
      } else {
        alert(result.error);
      }
    }

    if (result?.url) {
      router.replace('/dashboard');
    }
  };

  return (
    <div className="h-screen w-full flex flex-col md:flex-row bg-black/[0.96] antialiased relative overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <div className="flex items-center justify-center flex-grow">
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
              Welcome Back to Pandoras
            </h1>
            <p className="mb-4">Sign in to continue your adventure</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="form-item">
              <label className="form-label">Email/Username</label>
              <input
                type="text"
                className="input w-full border border-gray-300 p-2 rounded"
                {...register('identifier')}
                required
              />
            </div>
            <div className="form-item">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="input w-full border border-gray-300 p-2 rounded"
                {...register('password')}
                required
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
              Sign In
            </button>
          </form>
          <div className="text-center mt-4">
            <p>
              Not a member yet?{' '}
              <Link href="/sign-up" className="text-blue-600 hover:text-blue-800">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
