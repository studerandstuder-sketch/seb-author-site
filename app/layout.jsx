export const metadata = {
  title: "Sébastien Studer — Author",
  description: "Official site of author Sébastien Studer.",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-neutral-950 text-white">{children}</body>
    </html>
  );
}
