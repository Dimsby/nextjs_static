"use client";

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  background?: string;
  sideBackground?: string;
}

export default function PageLayout({ children, background, sideBackground }: Props) {
  const backgroundStyle = {
    backgroundImage: `url(/img/bg-${background ?? "home"}.jpg)`,
  };
  const sideBackgroundStyle = {
    backgroundImage: sideBackground ? `url(/img/bg-${sideBackground}.jpg)` : '',
  };  

  return (
    <div className="page">
      <div className="page__main">
        <div
          className="page__content"
          style={{ zIndex: 50 }}
        >
          {children}
        </div>
        <div
          className="page__side"
          style={sideBackgroundStyle}
        ></div>
      </div>
      <div
        className="page__bg"
        style={backgroundStyle}
      ></div>
    </div>
  );
}
