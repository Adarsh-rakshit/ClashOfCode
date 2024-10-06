import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>Clash of Code</title>
      <link rel="icon" href="/logo.png" />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
