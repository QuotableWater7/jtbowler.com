"use client";
import React, { useCallback, useState } from "react";
import { FlexRow, FlexCol, Card, Modal } from "./src";
import { useModalToggle } from "./src/hooks";

import lifecycle from "./static/lifecycle.gif";
import Image from "next/image";

export const LifecycleVisualizationModal: React.FC<
  React.PropsWithChildren<{ isOpen: boolean; onClose: () => void }>
> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <FlexCol gap={1}>
        <p>
          <strong>Summary</strong>
          <br />I built out this diagram that shows the lifecycle of a purchase
          order. This unified several disjoint pages within our application and
          saw high adoption within just hours of release.
        </p>
        <p>
          <Image src={lifecycle} alt="Lifecycle" />
        </p>
      </FlexCol>
    </Modal>
  );
};

export default function Home() {
  const lvModalToggle = useModalToggle();

  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-8">
      <div className="max-w-xl flex flex-col gap-8">
        <h1 className="text-4xl">👋 Welcome</h1>
        <div className="flex flex-col gap-2">
          <div>
            I&apos;ve worked at startups over my career because I love building
            new products from the ground up. I care deeply about providing
            excellent solutions to problems. I also love finding hacks to boost
            the productivity of the engineering team.
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
          <Card onClick={lvModalToggle.toggleOn}>Lifecycle Visualization</Card>
          <a href="https://github.com/QuotableWater7/aoc2022">
            <Card>Functional Programming</Card>
          </a>
        </FlexCol>
      </FlexRow>
      <LifecycleVisualizationModal
        isOpen={lvModalToggle.isOpen}
        onClose={lvModalToggle.toggleOff}
      />
    </main>
  );
}
