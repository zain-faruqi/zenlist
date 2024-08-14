// src/app/layout.js
import Login from '@/components/login-btn';
import './globals.css';
import AuthProvider from '@/components/AuthProvider';
import AuthGuard from '@/components/AuthGuard';

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
    <html lang="en">
      <head>
        <title>Zenlist</title>
        <meta name="description" content="Zenlist is a platform for startup founders to enlist skilled contributors." />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <header>
          <nav>
            <AuthGuard>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Projects</a></li>
                <li><a href="/">About</a></li>
              </ul>
            </AuthGuard>
              <div>
                <Login />
              </div>
          </nav>
        </header>  
        <main>{children}</main>
        <footer>
          <p>&copy; 2024 Zain Faruqi. All rights reserved.</p>
        </footer>
      </body>
    </html>
    </AuthProvider>
  );
}
