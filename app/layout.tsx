import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MAX_CAMPO | Diagramas UML y Scrum",
  description: "Visualiza diagramas UML y gestiona el cronograma Scrum de tu equipo.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-100">{children}</body>
    </html>
  );
}

