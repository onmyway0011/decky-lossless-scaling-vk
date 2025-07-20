/// <reference types="react" />

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "panel-section-row": React.HTMLAttributes<HTMLElement> & {
        "data-testid"?: string;
      };
    }
  }
}

declare module "@decky/ui" {
  export const ButtonItem: React.FC<
    React.ButtonHTMLAttributes<HTMLButtonElement> & {
      disabled?: boolean;
      layout?: "horizontal" | "vertical";
      children?: React.ReactNode;
    }
  >;

  export const PanelSectionRow: React.FC<{
    children?: React.ReactNode;
    style?: React.CSSProperties;
  }>;
}

declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}
