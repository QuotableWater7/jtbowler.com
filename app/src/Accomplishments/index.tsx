import { Card, FlexCol, FlexRow } from "..";
import { DatadogDashboardsModal } from "../DatadogDashboardsModal";
import { LifecycleVisualizationModal } from "../LifecycleVisualizationModal";
import { useModalToggle } from "../hooks";

export const Accomplishments = () => {
  const lvModalToggle = useModalToggle();
  const datadogModalToggle = useModalToggle();

  return (
    <>
      <FlexRow gap={1}>
        <FlexCol gap={1}>
          <Card onClick={datadogModalToggle.toggleOn}>Datadog Dashboards</Card>
          <Card>Domain-Driven Design</Card>
        </FlexCol>
        <FlexCol gap={1}>
          <Card onClick={lvModalToggle.toggleOn}>Lifecycle Visualization</Card>
          <a
            href="https://github.com/QuotableWater7/aoc2022/blob/main/11/main.hs"
            target="_blank"
            rel="noreferrer"
          >
            <Card>Functional Programming</Card>
          </a>
        </FlexCol>
      </FlexRow>
      <LifecycleVisualizationModal
        isOpen={lvModalToggle.isOpen}
        onClose={lvModalToggle.toggleOff}
      />
      <DatadogDashboardsModal
        isOpen={datadogModalToggle.isOpen}
        onClose={datadogModalToggle.toggleOff}
      />
    </>
  );
};
