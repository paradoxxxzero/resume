/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { useTranslation } from "react-i18next";

export default function Experience({ from, to, client, l10n, job, missions }) {
  const theme = useTheme();
  const { t } = useTranslation();
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
        <strong>{job}</strong>
        <br />
        <span
          css={css`
            font-size: 0.85em;
            color: ${theme.colors.muted};
          `}
        >
          {`${t("for")} `}
        </span>
        {client}
        <span
          css={css`
            font-size: 0.85em;
            color: ${theme.colors.muted};
          `}
        >
          {` ${t("in")} ${l10n}`}
        </span>

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
