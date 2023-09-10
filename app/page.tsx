import React from "react";

const FlexCol: React.FC<
  React.PropsWithChildren<{ gap?: React.CSSProperties["gap"] }>
> = ({ children, gap }) => {
  return (
    <Box display="flex" flexDirection="column" gap={gap}>
      {children}
    </Box>
  );
};

const FlexRow: React.FC<
  React.PropsWithChildren<{ gap?: React.CSSProperties["gap"] }>
> = ({ children, gap }) => {
  return (
    <Box display="flex" flexDirection="row" gap={gap}>
      {children}
    </Box>
  );
};

const Box: React.FC<{
  br?: React.CSSProperties["borderRadius"];
  children?: React.ReactNode;
  display?: React.CSSProperties["display"];
  flexDirection?: React.CSSProperties["flexDirection"];
  p?: number;
  bg?: React.CSSProperties["backgroundColor"];
  gap?: React.CSSProperties["gap"];
}> = ({ br, children, display, flexDirection, p, bg, gap }) => {
  return (
    <div
      style={{
        ...(p && { padding: `${p}rem` }),
        ...(bg && { backgroundColor: bg }),
        ...(gap && { gap: `${gap}rem` }),
        ...(display && { display }),
        ...(flexDirection && { flexDirection }),
        ...(br && { borderRadius: `${br}px` }),
      }}
    >
      {children}
    </div>
  );
};

const Card: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box p={1} bg="royalblue" br={4}>
      {children}
    </Box>
  );
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-8">
      <div className="max-w-xl flex flex-col gap-8">
        <h1 className="text-4xl">👋 Welcome</h1>
        <div className="flex flex-col gap-2">
          <div>
            I&apos;ve worked at startups over my career because I love building
            new products from the ground up. I care deeply about finding the
            simple but excellent solutions to problems. I also love finding ways
            to boost the productivity of the engineering team and scale
            processes as organizations grow.
          </div>
          <div>
            I am a lifelong learner and have skills in a wide variety of
            disciplines. I have played lead-guitar in a band, snowboarded down
            steep terrain, attained a top 0.5% chess rating (chess.com) and hit
            top 2-3% in multiple games like Overwatch and Rocket League. If
            I&apos;m not coding, I&apos;m trying to get better at{" "}
            <i>something</i>.
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <strong>Experience:</strong>
          <div>
            <ul>
              <li>
                NodeJS, NextJS, React, TypeScript,
                Postgres/Mongo/Redis/ElasticSearch, Datadog, Docker, AWS/Heroku,
                ChatGPT, Haskell, and whatever else gets the job done.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div></div>
      <FlexRow gap={1}>
        <FlexCol gap={1}>
          <Card>Datadog Dashboards</Card>
          <Card>Domain-Driven Design</Card>
        </FlexCol>
        <FlexCol gap={1}>
          <Card>Invoice Matching</Card>
          <a href="https://github.com/QuotableWater7/aoc2022">
            <Card>Advent of Code &apos;22</Card>
          </a>
        </FlexCol>
      </FlexRow>
    </main>
  );
}
