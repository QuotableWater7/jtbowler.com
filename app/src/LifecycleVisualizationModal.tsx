import { FlexCol, Modal } from ".";
import Image from "next/image";

import lifecycle from "../static/lifecycle.gif";

export const LifecycleVisualizationModal: React.FC<
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
