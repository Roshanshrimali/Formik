import Link from "next/link";

export default function Home() {
 

  return (
    <>
    <main className="bg-black text-white w-[100%] min-h-screen">
      <h1 className="text-3xl font-bold text-center py-10">Home Page</h1>
        <section className="w-[70%] mx-auto flex flex-col justify-center items-center pt-28">
          <h2 className="text-xl font-bold text-center py-2">Click bottom button for Login/Signup</h2>
          <Link href={'/registration'}>
          <button className="border-[2px] px-4 py-2 font-bold w-fit rounded-xl hover:bg-slate-700 transition-all duration-300">Lets Go</button>
          </Link>
        </section>
      </main>
    </>
  );
}
