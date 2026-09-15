import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
<ThemeProvider>
      <body>
        {children}
        </body>
        </ThemeProvider>
    </html>
  );
}