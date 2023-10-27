/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";

export default function Definition({ term, definition, wide }) {
  const theme = useTheme();
  return (
    <>
      <dt
        css={css`
          font-weight: bold;
          text-align: right;
          @media (max-width: 600px) {
            text-align: left;
          }
          color: ${theme.colors.soft};
          ${wide
            ? `
          border-right: 1px solid ${theme.colors.muted};
          padding-right: 1em;
          margin-bottom: 1.5em;
          @media (max-width: 600px) {
            border-right: none;
            padding-right: 0;
            margin-bottom: 0;
          }
          `
            : ""}
        `}
      >
        {term}
        {wide ? null : <>&nbsp;:</>}
      </dt>
      <dd
        css={css`
          margin-left: 1em;

          @media (max-width: 600px) {
            margin-bottom: 0.5em;
          }

          ${wide
            ? `
            font-size: .9em;
            margin-bottom: 1.5em; `
            : ""}
        `}
      >
        {definition}
      </dd>
    </>
  );
}
