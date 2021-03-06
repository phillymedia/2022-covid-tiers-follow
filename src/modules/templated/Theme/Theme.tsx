import React from "react";

const Theme = ({ theme, hero = null, children }) => {
  let t = theme;

  if (!theme && hero) {
    t = hero.value.reduce((acc, datum) => {
      return {
        ...acc,
        [datum.type]: datum.value,
      };
    }, {});
  }

  const { font = "display", background = "navy", contrast = "light" } = t;

  return (
    <div
      className={`inno js-theme inno-theme inno-font--${font} inno-background--${background} inno-contrast--${contrast}`}
    >
      {children}
    </div>
  );
};

export default Theme;
