"use client";

import { FcGoogle } from "react-icons/fc";

export function OAuthButton({ provider }: { provider: "google" }) {
  const handleOAuth = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/api/auth/google`;
  };

  return (
    <button
      className="w-full mt-4 flex items-center justify-center gap-2"
      onClick={handleOAuth}
    >
      <FcGoogle size={20} /> Continue with Google
    </button>
  );
}
