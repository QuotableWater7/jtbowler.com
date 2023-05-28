import React from "react";

const Box: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <div className="p-4 border">{children}</div>;
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-8">
      <h1 className="text-4xl">👋 Welcome to JT Bowler&apos;s portfolio!</h1>
      <div className="max-w-xl flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <strong>Bio:</strong>
          <div>
            I&apos;ve worked at 4 startups over my career because I love
            building new products from the ground up. I care deeply about
            finding the simplest solutions to problems and getting value into
            customer hands quickly. I also love finding ways to boost the
            productivity of the engineering team and scale processes as
            organizations grow.
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
                ChatGPT, NodeJS, TypeScript, Postgres/Mongo/Redis/ElasticSearch,
                Docker, AWS/Heroku, Haskell, and whatever else helps me get the
                job done.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div></div>
      <div className="grid grid-cols-2 grid-rows-2 gap-16">
        <Box>Datadog Dashboards</Box>
        <Box>Domain-Driven Design</Box>
        <Box>Invoice Matching</Box>
        <a href="https://github.com/QuotableWater7/aoc2022">
          <Box>Advent of Code &apos;22</Box>
        </a>
      </div>
    </main>
  );
}
