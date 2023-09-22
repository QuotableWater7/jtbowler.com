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
          experience. Equipping the engineering team with great patterns enables
          developers to deliver quality software faster and with less effort.
          Some of the questions I like to ask myself upon joining a new
          organization are:
          <ul>
            <li>
              how do developers complete tasks, from the most basic CRUD
              endpoint all the way up to syncing data between platforms?
            </li>
            <li> Where is the friction? </li>
            <li>Is writing code an enjoyable experience?</li>
            <li>How quickly can engineers contribute after joining?</li>
          </ul>
          The answers to these questions often reveal opportunities to make the
          entire org perform better.
        </p>
        <p>
          Some of the patterns I am most fond of include:
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
