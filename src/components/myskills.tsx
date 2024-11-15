import React from "react";
import IconCloud from "../components/ui/icon-cloud";

const slugs = [
  "typescript", "javascript", "dart", "java", "react", "flutter", "tailwindcss", "bootstrap", "c", "python",
  "android", "html5", "css3", "nodedotjs", "nextdotjs", "canva", "blender",
  "prisma", "mysql","mongodb","reactnative", "firebase","git", "github", "gitlab", "visualstudiocode", "androidstudio", "figma", "AWS"
];

export function MySkills() {
  return (
    <div id='myskills' className="relative h-screen flex items-center justify-center bg-custom-blue text-[#D3D8F4] overflow-hidden">
      {/* Foreground content (IconCloud) */}
      <div className="relative z-10 p-8 border border-[#D3D8F4] rounded-lg bg-opacity-20 bg-[#0A3673] shadow-lg w-full max-w-6xl mx-5">
        <h1 className="relative z-10 mb-8 text-3xl font-bold text-center">Tech Stack</h1>
        <IconCloud iconSlugs={slugs} />
      </div>
    </div>
  );
}