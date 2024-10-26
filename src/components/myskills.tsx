import IconCloud from "../components/ui/icon-cloud";
import { SparklesCore } from "@/components/ui/sparkles";

const slugs = [
  "typescript", "javascript", "dart", "java", "react", "flutter", "tailwindcss", "bootstrap", "c", "python",
  "android", "html5", "css3", "nodedotjs", "nextdotjs", "canva", "blender",
  "prisma", "mysql","mongodb","reactnative", "firebase","git", "github", "gitlab", "visualstudiocode", "androidstudio", "figma"
];

export function MySkills() {
  return (
    <div className="relative h-screen flex items-center justify-center bg-custom-blue text-[#D3D8F4] overflow-hidden">
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

      {/* Foreground content (IconCloud) */}
      <div className="relative z-10 ">
        <hr></hr>
        <IconCloud iconSlugs={slugs} />
      </div>
    </div>
  );
}
