import { FlexCol, Modal } from "..";

export const DatadogDashboardsModal: React.FC<
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
