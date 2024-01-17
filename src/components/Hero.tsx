"use client";
import Image from "next/image";

import { SkillSets } from "@/constants";
import { useState, useMemo } from "react";

export const Hero = () => {
  const [skillSet, setSkillSet] = useState<SkillSet>(SkillSets[0]);

  return (
    <div id="about-me" className="relative flex flex-row h-full w-full">
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <span>
          Hi, my name is
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            Victoria E.{" "}
          </span>
          Johnson
        </span>
        <p>
          I&apos;m a {skillSet.name} Engineer with experience in Website,
          Mobile, and Software development. Check out my projects and skills.
        </p>
      </div>

      <div className="h-[500px]"></div>

      <div className="flex flex-col gap-4">
        {SkillSets.map((skill, index) => (
          <div className="flex flex-col gap-2" key={skill.name}>
            <button onClick={() => setSkillSet(skill)} value={index}>
              <h3 className="rounded bg-slate-600 px-5">{skill.name}</h3>
            </button>

            <div className="rounded bg-slate-600 px-5 py-3">
              {skill.experience.map((experience) => (
                <div className="flex flex-row" key={experience.name}>
                  <h4>{experience.name}</h4>
                  <Image
                    src={experience.icon}
                    alt={experience.name}
                    width={50}
                    height={60}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
