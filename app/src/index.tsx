import React, { useState } from "react";

export const FlexCol: React.FC<
  React.PropsWithChildren<{ gap?: React.CSSProperties["gap"] }>
> = ({ children, gap }) => {
  return (
    <Box display="flex" flexDirection="column" gap={gap}>
      {children}
    </Box>
  );
};

export const FlexRow: React.FC<
  React.PropsWithChildren<{ gap?: React.CSSProperties["gap"] }>
> = ({ children, gap }) => {
  return (
    <Box display="flex" flexDirection="row" gap={gap}>
      {children}
    </Box>
  );
};

export const Box: React.FC<
  Partial<
    Pick<
      React.CSSProperties,
      | "border"
      | "boxShadow"
      | "color"
      | "flexDirection"
      | "display"
      | "gap"
      | "margin"
      | "width"
    >
  > & {
    br?: React.CSSProperties["borderRadius"];
    children?: React.ReactNode;
    p?: number;
    bg?: React.CSSProperties["backgroundColor"];
    hoverProps?: React.CSSProperties;
    onClick?: (...args: any) => any;
  }
> = ({
  br,
  border,
  boxShadow,
  color,
  children,
  display,
  flexDirection,
  hoverProps,
  margin,
  onClick,
  p,
  bg,
  gap,
  width,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        ...(p && { padding: `${p}rem` }),
        ...(bg && { backgroundColor: bg }),
        ...(gap && { gap: `${gap}rem` }),
        ...(display && { display }),
        ...(flexDirection && { flexDirection }),
        ...(br && { borderRadius: `${br}px` }),
        ...(border && { border }),
        ...(boxShadow && { boxShadow }),
        ...(color && { color }),
        ...(margin && { margin }),
        ...(width && { width }),
        ...(hoverProps && isHovered && hoverProps),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...(onClick && { onClick })}
    >
      {children}
    </div>
  );
};

export const Card: React.FC<
  React.PropsWithChildren<{ onClick?: () => void }>
> = ({ children, onClick }) => {
  return (
    <Box
      p={1}
      bg="royalblue"
      br={4}
      border="2px solid #ccc"
      hoverProps={{
        borderColor: "#ffbc40",
        cursor: "pointer",
        backgroundColor: "#3399ff",
      }}
      {...(onClick && { onClick })}
    >
      {children}
    </Box>
  );
};

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
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        position: "fixed",
        padding: "1rem",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <Box
        bg="white"
        boxShadow="2px 2px 8px 2px black"
        br={6}
        color="black"
        width="800px"
        p={1}
        margin="40px auto"
        onClick={(e: Event) => e.stopPropagation()}
      >
        {children}
      </Box>
    </div>
  );
};
