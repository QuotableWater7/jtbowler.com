"use client";
import React, { useCallback, useState } from "react";
import { FlexRow, FlexCol, Card, Modal } from "./src";
import { useModalToggle } from "./src/hooks";

import lifecycle from "./static/lifecycle.gif";
import Image from "next/image";

const LifecycleVisualizationModal: React.FC<
  React.PropsWithChildren<{ isOpen: boolean; onClose: () => void }>
> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <FlexCol gap={1}>
        <p>
          <strong>Lifecycle Visualization</strong>
          <p>
            I built out this diagram to unify a concept spanning several
            disjoint pages within our application. This feature saw high
            adoption within just hours of release.
          </p>
        </p>
        <p>
          <Image src={lifecycle} alt="Lifecycle" />
        </p>
      </FlexCol>
    </Modal>
  );
};

const DatadogDashboardsModal: React.FC<
  React.PropsWithChildren<{ isOpen: boolean; onClose: () => void }>
> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <FlexCol gap={1}>
        <strong>Datadog Dashboards</strong>
        <p>
          I have instrumeted our server logs to provide granular details about
          our requests coming in. This gives us the ability to detect
          performance issues from a wide variety of symptoms: large payloads,
          long response times, or frequency of calls by operation and user/org.
        </p>
      </FlexCol>
    </Modal>
  );
};

export default function Home() {
  const lvModalToggle = useModalToggle();
  const ddModalToggle = useModalToggle();

  return (
    <main className="flex flex-col items-center p-16 gap-4">
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
          <div>
            This site is built without using any UI/UX helpers. Check out{" "}
            <a
              href="https://github.com/QuotableWater7/jtbowler.com"
              style={{ color: "#008f11" }}
            >
              the source
            </a>{" "}
            if you are bored!
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
          <Card onClick={ddModalToggle.toggleOn}>Datadog Dashboards</Card>
          <Card>Domain-Driven Design</Card>
        </FlexCol>
        <FlexCol gap={1}>
          <Card onClick={lvModalToggle.toggleOn}>Lifecycle Visualization</Card>
          <a href="https://github.com/QuotableWater7/aoc2022/blob/main/11/main.hs">
            <Card>Functional Programming</Card>
          </a>
        </FlexCol>
      </FlexRow>
      <LifecycleVisualizationModal
        isOpen={lvModalToggle.isOpen}
        onClose={lvModalToggle.toggleOff}
      />
      <DatadogDashboardsModal
        isOpen={ddModalToggle.isOpen}
        onClose={ddModalToggle.toggleOff}
      />
    </main>
  );
}
