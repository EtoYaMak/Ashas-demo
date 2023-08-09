import Link from "next/link";
import Image from "next/image";

const Home = () => {
  return (
    <section
      className="w-full
   h-[80vh] mb-2 flex flex-col justify-center items-center gap-4  bg-black"
    >
      <div className="background z-0 blur-sm" />
      <div className=" z-10 flex flex-col bg-black/20 backdrop-blur-sm w-full mx-auto px-2 py-10 ">
        <Image
          src="/assets/Goldlogo.png"
          alt="Ashas Logo"
          width={220}
          height={220}
          className="object-contain mx-auto"
        />
      </div>
      <div className="z-10">
        <Link
          href="/menu"
          className="z-10 text-3xl font-inter flex items-center justify-center
       text-white/80 hover:text-[hsl(51,100%,45%)]
        w-fit mx-auto outline-offset-2 outline outline-2
         outline-[#111]/50 hover:outline-offset-4 hover:outline-1
         ease-linear
         bg-black/80 backdrop-blur-sm hover:bg-black/80
          duration-300 p-4 rounded-full "
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default Home;
