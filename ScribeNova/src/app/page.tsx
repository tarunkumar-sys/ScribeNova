import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Auth } from "@/components/auth";
import { Logo } from "@/components/logo";
import Spline from "@splinetool/react-spline/next";
import {AnimatedCards} from "./animatedcards";

export default function Home() {
  const { userId } = auth();

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <div className="flex bg-[#E1E0E4] flex-col min-h-[100dvh]">
      <header className="px-4 mt-5 lg:px-6 h-14 flex items-center">
        <Logo />
        <nav className="ml-auto  hidden lg:flex gap-4 sm:gap-6">
          <Auth />
        </nav>
      </header>
      <main className="flex-1">
        <section>
          <div className="container md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Side - Content */}
              <div className="space-y-6 text-center lg:text-left p-8 md:-16">
                <h2 className="text-3xl pt-10 leading-[0.6] font-bold tracking-tighter sm:text-6xl">
                  Create Everything, Everywhere — with AI
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:font-light mx-auto lg:mx-0">
                  From Instagram captions to YouTube scripts, our AI handles it
                  all. One platform, unlimited content for every channel and
                  audience. Say goodbye to juggling tools and hello to fast,
                  smart content creation.
                  <br />
                  Let your ideas flow — we’ll turn them into content that
                  clicks.
                </p>
                <div className="pt-5">
                  <a
                    href="#"
                    className="px-7 py-4 rounded-full text-sm font-extrabold text-black border border-black hover:bg-black hover:text-white transition-all ease-linear duration-200"
                  >
                    Docs &gt;
                  </a>
                </div>
              </div>

              {/* Right Side - Spline Viewer */}
              <div className="w-full h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
                <Spline scene="https://prod.spline.design/TEYYukImtz3DV9BS/scene.splinecode" />
              </div>
            </div>
          </div>
        </section>
<AnimatedCards/>
      </main>
    </div>
  );
}
