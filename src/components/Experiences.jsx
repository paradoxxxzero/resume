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
      {values.map(({ from, to, client, job, missions }) => (
        <Experience
          key={from}
          from={from}
          to={to}
          client={client}
          job={job}
          missions={missions}
        />
      ))}
    </dl>
  );
}
