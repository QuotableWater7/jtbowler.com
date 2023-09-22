import React, { useState } from "react";

export const Link: React.FC<React.PropsWithChildren<{ href: string }>> = ({
  href,
  children,
}) => {
  return (
    <a href={href} className="page-link">
      {children}
    </a>
  );
};

type FlexProps = Partial<
  Pick<React.CSSProperties, "alignItems" | "gap" | "justifyContent">
>;

export const FlexCol: React.FC<
  React.PropsWithChildren<
    FlexProps &
      Partial<Pick<React.CSSProperties, "width" | "height">> & {
        p?: number;
      }
  >
> = ({ children, gap, alignItems, justifyContent, height, width, p }) => {
  return (
    <Box
      alignItems={alignItems}
      display="flex"
      flexDirection="column"
      justifyContent={justifyContent}
      height={height}
      gap={gap}
      width={width}
      p={p}
    >
      {children}
    </Box>
  );
};

export const FlexRow: React.FC<
  React.PropsWithChildren<
    FlexProps &
      Partial<Pick<React.CSSProperties, "width" | "height">> & {
        p?: number;
      }
  >
> = ({ alignItems, children, gap, justifyContent, height, width, p }) => {
  return (
    <Box
      alignItems={alignItems}
      display="flex"
      flexDirection="row"
      gap={gap}
      height={height}
      justifyContent={justifyContent}
      width={width}
      p={p}
    >
      {children}
    </Box>
  );
};

export const Box: React.FC<
  Partial<
    Pick<
      React.CSSProperties,
      | "alignItems"
      | "border"
      | "boxShadow"
      | "color"
      | "flexDirection"
      | "display"
      | "height"
      | "gap"
      | "margin"
      | "width"
      | "alignItems"
      | "justifyContent"
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
  alignItems,
  br,
  border,
  boxShadow,
  color,
  children,
  display,
  flexDirection,
  height,
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
        ...(alignItems && { alignItems }),
        ...(border && { border }),
        ...(boxShadow && { boxShadow }),
        ...(color && { color }),
        ...(height && { height }),
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
        backgroundColor: "rgba(0, 0, 0, 0.8)",
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
