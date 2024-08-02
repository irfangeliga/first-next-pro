import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <h5 className="text-sky-500">Main Page</h5><br />
    <Link href="/post/">POST</Link><br /><br />
    <Link href="/get/">GET</Link><br /><br />
    <Link href="/data/">Data</Link>
    </>
  );
}
