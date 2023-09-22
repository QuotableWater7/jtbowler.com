"use client";
import React from "react";
import { FlexCol } from "./src";
import { Accomplishments } from "./src/Accomplishments";
import { Bio } from "./src/Bio";
import { Experience } from "./src/Experience";

export default function Home() {
  return (
    <main>
      <FlexCol alignItems="center" justifyContent="space-around" gap={5} p={2}>
        <FlexCol gap={1} width={650}>
          <h1 className="text-4xl">👋 Welcome</h1>
          <FlexCol gap={1}>
            <Bio />
          </FlexCol>
          <FlexCol gap={0.5}>
            <Experience />
          </FlexCol>
        </FlexCol>
        <Accomplishments />
      </FlexCol>
    </main>
  );
}
