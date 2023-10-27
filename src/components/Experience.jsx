/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";

export default function Experience({ from, to, client, job, missions }) {
  const theme = useTheme();
  return (
    <>
      <dt
        css={css`
          font-weight: bold;
          text-align: right;
          border-right: 1px solid ${theme.colors.muted};
          color: ${theme.colors.soft};
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          margin-bottom: 1.5em;
          padding-right: 1em;
          page-break-inside: avoid;
          @media (max-width: 600px) {
            flex-direction: row;
            border-right: none;
            padding-right: 0;
            border-bottom: 1px solid ${theme.colors.muted};
          }
        `}
      >
        <time>{to}</time>
        <time
          css={css`
            font-size: 0.75em;
          `}
        >
          {from}
        </time>
      </dt>
      <dd
        css={css`
          margin-left: 1em;
          margin-bottom: 0.5em;
        `}
      >
        <span>{client}</span>
        <br />
        <strong>{job}</strong>
        <br />
        <ul
          css={css`
            list-style-type: none;
            padding: 0;
            font-size: 0.85em;
          `}
        >
          {missions.map((mission, i) => (
            <li key={i}>{mission}</li>
          ))}
        </ul>
      </dd>
    </>
  );
}
