/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Experience from "./Experience";

export default function Experiences({ values }) {
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
      {values.map(({ from, to, client, l10n, job, missions }) => (
        <Experience
          key={from}
          from={from}
          to={to}
          client={client}
          l10n={l10n}
          job={job}
          missions={missions}
        />
      ))}
    </dl>
  );
}
