"use client";
import React, { useCallback, useState } from "react";
import { FlexRow, FlexCol, Card, Modal, Box } from "./src";
import { useModalToggle } from "./src/hooks";

import Image from "next/image";
import { LifecycleVisualizationModal } from "./src/LifecycleVisualizationModal";
import { DatadogDashboardsModal } from "./src/DatadogDashboardsModal";

export default function Home() {
  const lvModalToggle = useModalToggle();
  const datadogModalToggle = useModalToggle();

  return (
    <main>
      <FlexCol alignItems="center" justifyContent="space-around" gap={5} p={2}>
        <FlexCol gap={1} width={650}>
          <h1 className="text-4xl">👋 Welcome</h1>
          <FlexCol gap={1}>
            <div>
              I&apos;ve worked at startups over my career because I love
              building new products from the ground up. I care deeply about
              providing excellent solutions to problems. I also love finding
              hacks to boost the productivity of the engineering team.
            </div>
            <div>
              I am a lifelong learner and have skills in a wide variety of
              disciplines. I have played lead-guitar in a band, snowboarded down
              steep terrain, attained a top 0.5% chess rating (chess.com) and
              hit top 2-3% in multiple games like Overwatch and Rocket League.
              If I&apos;m not coding, I&apos;m trying to get better at{" "}
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
          </FlexCol>
          <FlexCol gap={0.5}>
            <strong>Experience:</strong>
            <div>
              <ul>
                <li>
                  NodeJS, NextJS, React, TypeScript,
                  Postgres/Mongo/Redis/ElasticSearch, Datadog, Docker,
                  AWS/Heroku, ChatGPT, Haskell, and whatever else gets the job
                  done.
                </li>
              </ul>
            </div>
          </FlexCol>
        </FlexCol>
        <FlexRow gap={1}>
          <FlexCol gap={1}>
            <Card onClick={datadogModalToggle.toggleOn}>
              Datadog Dashboards
            </Card>
            <Card>Domain-Driven Design</Card>
          </FlexCol>
          <FlexCol gap={1}>
            <Card onClick={lvModalToggle.toggleOn}>
              Lifecycle Visualization
            </Card>
            <a
              href="https://github.com/QuotableWater7/aoc2022/blob/main/11/main.hs"
              target="_blank"
              rel="noreferrer"
            >
              <Card>Functional Programming</Card>
            </a>
          </FlexCol>
        </FlexRow>
      </FlexCol>
      <LifecycleVisualizationModal
        isOpen={lvModalToggle.isOpen}
        onClose={lvModalToggle.toggleOff}
      />
      <DatadogDashboardsModal
        isOpen={datadogModalToggle.isOpen}
        onClose={datadogModalToggle.toggleOff}
      />
    </main>
  );
}
