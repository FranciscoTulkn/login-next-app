import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="bg-[#26313c] h-screen flex items-center justify-center p-10"> 
      <div className="grid box-animate w-full h-full grid-cols-1 bg-white md:grid-cols-2"> 
        <div className="bg-[#16202a] text-white flex items-center justify-center flex-col">
          <div className="my-4">
            <h1 className="text-3xl font-semibold">Login Sesion</h1>
            <p className="mt-2 text-xs text-slate-400">
              {' '}
              See your growth and get consulting growth
            </p>
          </div>

          {/* Inicial to form */}
          <form>

            <Button className="flex items-center mb-4 w-full gap-4 px-12 bg-transparent rounded-full" variant="outline">
              <FcGoogle />
              Sign in with Google
            </Button>

            <Label htmlFor="email">Email *</Label>
            <Input 
              className="mt-2 mb-4 bg-transparent rounded-full " 
              type="email" 
              id="email" 
              placeholder="Enter your email" 
            />

            <Label htmlFor="password">Password *</Label>
            <Input 
              className="mt-2 mb-4 bg-transparent rounded-full " 
              type="password" 
              id="password" 
              placeholder="Enter your password" 
            />

            <Button 
              type="submit"
              className="w-full mt-6 bg-indigo-600 rounded-full hover:bg-indigo-700">
              Login
            </Button>
          </form>

          <p className="mt-4 text-xs text-slate-200">All rights reserved @ 2024 | &copy; DevFJTR</p>
        </div>

        <div className="relative hidden md:block">
          <Image 
            className="object-cover" 
            fill={true}
            src="/bg.png"
            alt="background image"
          />
        </div>
      </div>
    </main>
  );
}
