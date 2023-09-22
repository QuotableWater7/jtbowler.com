import { FlexCol, Modal } from "..";
import Image from "next/image";

import lifecycle from "../../static/lifecycle.gif";

export const LifecycleVisualizationModal: React.FC<
  React.PropsWithChildren<{ isOpen: boolean; onClose: () => void }>
> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <FlexCol gap={1}>
        <p>
          <strong>Lifecycle Visualization</strong>
          <p>
            Kojo models a procurement process that we frequently describe as
            having &quot;7 steps&quot;. I built out this diagram as a way to
            quickly understand the steps taken before and after a Purchase Order
            was sent and where the user was in the full lifecycle.
          </p>
          <p>
            This component leverages higher-order functions to provide
            consistent cell behavior across the different entities displayed.
          </p>
        </p>
        <p>
          <div style={{ width: "80%" }}>
            <Image src={lifecycle} alt="Lifecycle" width="800" />
          </div>
        </p>
      </FlexCol>
    </Modal>
  );
};
