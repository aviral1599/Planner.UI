// import { Sidebar } from "@/components/Sidebar";
// import "./globals.css";
// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import { twMerge } from "tailwind-merge";
// import { Footer } from "@/components/Footer";

// const inter = Inter({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// });

// export const metadata: Metadata = {
//   title: "John Doe - Developer",
//   description:
//     "John Doe is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body
//         className={twMerge(
//           inter.className,
//           "flex antialiased h-screen overflow-hidden bg-gray-100"
//         )}
//       >
//         <Sidebar />
//         <div className="lg:pl-2 lg:pt-2 bg-gray-100 flex-1 overflow-y-auto">
//           <div className="flex-1 bg-white min-h-screen lg:rounded-tl-xl border border-transparent lg:border-neutral-200 overflow-y-auto">
//             {children}
//             <Footer />
//           </div>
//         </div>
//       </body>
//     </html>
//   );
// }

// import "./globals.css";
// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import { twMerge } from "tailwind-merge";
// import LayoutWrapper from "@/components/LayoutWrapper"; // client wrapper

// const inter = Inter({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// });

// export const metadata: Metadata = {
//   title: "John Doe - Developer",
//   description:
//     "John Doe is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body
//         className={twMerge(
//           inter.className,
//           "flex antialiased h-screen overflow-hidden bg-gray-100"
//         )}
//       >
//         <LayoutWrapper>{children}</LayoutWrapper>
//       </body>
//     </html>
//   );
// }

// app/layout.tsx
import './globals.css' // Ensure this imports your Tailwind or global CSS
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FlowSpace - Productivity Hub',
  description:
    'Your ultimate productivity companion - manage tasks, goals, and schedules with AI-powered insights',
  authors: [{ name: 'FlowSpace' }],
  openGraph: {
    title: 'web-wonder-builder-76',
    description: 'Lovable Generated Project',
    type: 'website',
    images: ['https://lovable.dev/opengraph-image-p98pqg.png'],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@lovable_dev',
    images: ['https://lovable.dev/opengraph-image-p98pqg.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>{children}</body>
    </html>
  )
}


