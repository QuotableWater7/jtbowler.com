import { FlexCol, Modal } from "..";

export const CodingPatternsModal: React.FC<
  React.PropsWithChildren<{ isOpen: boolean; onClose: () => void }>
> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <FlexCol gap={0.5}>
        <strong>Coding Patterns</strong>
        <p>
          It is difficult to build a great product without a great developer
          experience. To me, the developer experience is far more than what
          appears in an IDE -- it is the environment engineers operate within to
          accomplish their goals. Equipping the engineering team with great
          patterns (both coding and communication) enables developers to deliver
          quality software faster and with less effort. Some of the questions I
          like to ask myself upon joining a new organization are:
          <ul>
            <li>How do developers complete the most common tasks?</li>
            <li>Is writing code an enjoyable experience?</li>
            <li>
              How quickly can new engineers contribute meaningful features?
            </li>
            <li>How do engineers debug problems in production?</li>
            <li>How does engineering communicate with stakeholders?</li>
            <li>How do engineers align on complex decisions?</li>
          </ul>
          The answers to these questions often reveal opportunities to make the
          entire engineering org perform even better.
        </p>
        <p>
          On the coding front, some of the patterns I am most fond of include:
          <ul>
            <li>
              <strong>Layered Architecture: </strong>keep dependencies pointing
              downwards -- e.g. repositories should not reach into your business
              logic or interface level
            </li>
            <li>
              <strong>Repository pattern: </strong>keep knowledge of your
              database centralized and out of your business logic for proper
              separation of concerns.
            </li>
            <li>
              <strong>
                Strong Typing (via TypeScript and other languages):{" "}
              </strong>
              Types are the foundation for writing correct code quickly. If
              types at the edges of your system are rock-solid, you can write
              code much more confidently in the middle layers where you write
              the interesting code.
            </li>
            <li>
              <strong>Great documentation: </strong>I have seen over and over
              that engineers adopt systems when the onboarding experience is
              awesome. Document your patterns using READMEs with diagrams to
              illustrate the most important points, and run sessions to
              accelerate the learning curve.
            </li>
          </ul>
        </p>
      </FlexCol>
    </Modal>
  );
};
