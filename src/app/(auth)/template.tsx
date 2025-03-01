"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import "./styles.css";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout(
  { children }: {  children: React.ReactNode }
)
{

  const [input, setInput] = useState("");

  const pathname = usePathname();



  return (
    <div>
        <div>
          <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          className="border border-gray-400 rounded-md p-2 m-4"
          placeholder="Enter text"
          />
        </div>

{navLinks.map((link) => {
  const isActive = pathname === link.href || pathname.startsWith(link.href) && link.href !== "/";
  return (
  <Link className={isActive ? "font-bold text-blue-400 mr-4": "font-bold mr-4"} href={link.href} key={link.name}>
    {link.name}
  </Link>
);
})}
   {children}
    </div>
  );
}