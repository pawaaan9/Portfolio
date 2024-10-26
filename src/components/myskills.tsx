import IconCloud from "../components/ui/icon-cloud";
import { SparklesCore } from "@/components/ui/sparkles";

const slugs = [
  "typescript", "javascript", "dart", "java", "react", "flutter", "tailwindcss", "bootstrap", "c", "python",
  "android", "html5", "css3", "nodedotjs", "nextdotjs", "canva", "blender",
  "prisma", "mysql","mongodb","reactnative", "firebase","git", "github", "gitlab", "visualstudiocode", "androidstudio", "figma"
];

export function MySkills() {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center bg-custom-blue text-[#D3D8F4] overflow-hidden">
      
      {/* SparklesCore as background */}
      <div className="absolute inset-0 z-0">
        <SparklesCore
          id="tsparticles-hero"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#D3D8F4"
        />
      </div>

      {/* Heading */}
      <h1 className="relative z-10 mb-8 text-3xl font-semibold underline">Tech Stack</h1>

      {/* Foreground content (IconCloud) */}
      <div className="relative z-10">
        <IconCloud iconSlugs={slugs} />
      </div>
    </div>
  );
}
