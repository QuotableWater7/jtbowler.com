import { useState, useCallback } from "react";

export const useModalToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOff = useCallback(() => setIsOpen(false), [setIsOpen]);
  const toggleOn = useCallback(() => setIsOpen(true), [setIsOpen]);

  return {
    isOpen,
    toggleOff,
    toggleOn,
  };
};
