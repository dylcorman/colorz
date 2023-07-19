import Link from "next/link";

export default function Header() {
  return (
    <div className="flex items-center justify-center h-headerH bg-slate-700 text-white text-2xl">
      <div className="basis-1/3">
        <Link
          href="/"
          className="border-white border-2 rounded-md ml-10 text-base pl-1 pr-1"
        >
          Home
        </Link>
      </div>
      <div className="basis-1/3 flex justify-center">
        <h1>Colorz</h1>
      </div>
      <div className="basis-1/3">
        <Link
          href="/users/login"
          className="border-white border-2 rounded-md ml-10 text-base pl-1 pr-1"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
