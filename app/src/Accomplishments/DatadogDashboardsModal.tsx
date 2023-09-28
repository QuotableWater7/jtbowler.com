import Image from "next/image";
import { FlexCol, Modal } from "..";

import ddLog from "../../static/dd-log.png";

export const DatadogDashboardsModal: React.FC<
  React.PropsWithChildren<{ isOpen: boolean; onClose: () => void }>
> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <FlexCol gap={1}>
        <strong>Datadog Dashboards</strong>
        <p>
          I instrumented our server logs to provide granular details about
          ingress requests. This gave us the ability to detect performance
          issues from a wide variety of symptoms:
          <ul>
            <li>large payloads</li>
            <li>high latency</li>
            <li>frequency by operation, user/org, and customer integrations</li>
          </ul>
          Here is one sample log with some scrubbed values:
          <Image src={ddLog} width="600" alt="Example Datadog Log" />
        </p>
      </FlexCol>
    </Modal>
  );
};
