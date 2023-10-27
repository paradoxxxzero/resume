/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Definition from "./Definition";

export default function Definitions({ values, wide }) {
  return (
    <dl
      css={css`
        display: grid;
        grid-template-columns: 1fr 3fr;
        @media (max-width: 600px) {
          grid-template-columns: 1fr;
        }
        margin: 0;
        padding: 0;
      `}
    >
      {Object.entries(values).map(([term, definition]) => (
        <Definition
          key={term}
          term={term}
          definition={definition}
          wide={wide}
        />
      ))}
    </dl>
  );
}
