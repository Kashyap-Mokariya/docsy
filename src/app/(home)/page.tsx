import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "./Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-3">
        <Navbar />
      </div>
      <div className="mt-16">
        <Link href="/documents/123">
          <Button>
            Click me
          </Button>
        </Link>
      </div>
    </div>
  );
}
