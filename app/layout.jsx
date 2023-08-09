import "@styles/globals.css";

import Nav from "@components/Nav";
export const metadata = {
  title: "Ashas Demo App",
  description: "View the prototype",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-black">
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
