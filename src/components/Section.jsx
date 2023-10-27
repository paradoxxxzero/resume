/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";

export default function Section({ title, children }) {
  const theme = useTheme();
  return (
    <section>
      <header
        css={css`
          text-decoration: underline;
          color: ${theme.colors.soft};
          page-break-after: avoid;
        `}
      >
        <h2
          css={css`
            margin: 0.5em 0;
          `}
        >
          {title}
        </h2>
      </header>
      {children}
    </section>
  );
}
