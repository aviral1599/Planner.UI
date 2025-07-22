"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import api from "@/lib/api";

export function AuthForm({ type }: { type: "login" | "register" }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!email || !password) return alert("Please fill all fields");

    const endpoint = type === "login" ? "/Auth/login" : "/Auth/register";
    try {
      setLoading(true);
      const res = await api.post(endpoint, {
        email,
        passwordHash: password,
      });

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        router.push("/");
      }
    } catch (err) {
      alert("Authentication failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label>Email</label>
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
        />
      </div>
      <button onClick={handleSubmit} className="w-full" disabled={loading}>
        {loading ? "Please wait..." : type === "login" ? "Login" : "Register"}
      </button>
    </div>
  );
}
