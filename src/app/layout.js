// src/app/layout.js
import './globals.css'; // Import global CSS styles
import Head from 'next/head';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Zenlist</title>
        <meta name="description" content="Zenlist is a platform for startup founders to enlist skilled contributors." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <header>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Projects</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>&copy; 2024 Zenlist. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
