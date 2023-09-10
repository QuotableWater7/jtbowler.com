import React from "react";

export const Modal: React.FC<
  React.PropsWithChildren<{ isOpen: boolean; onClose: () => void }>
> = ({ children, isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      onClick={onClose}
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        position: "fixed",
        padding: "1rem",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          color: "black",
          width: "600px",
          margin: "auto auto",
          minHeight: "80vh",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
