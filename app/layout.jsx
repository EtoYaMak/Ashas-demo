import "@styles/globals.css";

import Nav from "@components/Nav";
import Footer from "@components/Footer";
export const metadata = {
  title: "Ashas Demo App",
  description: "View the prototype",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-black h-screen">
        <main className="app">
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
