// src/components/AuthGuard.js
"use client";
import { useSession } from 'next-auth/react';

export default function AuthGuard({ children }) {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <p>Loading...</p>; // Loading state
  }

  if (!session) {
    return <p></p>; // Redirect or message
  }

  return children;
}

