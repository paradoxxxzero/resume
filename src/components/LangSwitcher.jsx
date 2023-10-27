/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { useTranslation } from "react-i18next";

const langs = ["en", "fr"];

export default function LangSwitcher() {
  const { i18n } = useTranslation();
  const theme = useTheme();
  return (
    <aside
      css={css`
        position: absolute;
        @media (min-width: 900px) {
          position: fixed;
        }
        top: 0;
        left: 0;
        cursor: pointer;
        margin: 0.5em;

        @media print {
          display: none;
        }
      `}
    >
      {langs.map((lang) => (
        <button
          key={lang}
          css={css`
            font-size: 1em;
            cursor: pointer;
            padding: 0.75em;
            border: none;
            background: none;
            color: inherit;
            outline: none;

            &:hover {
              background: ${theme.colors.backgroundActive};
            }
            font-weight: ${i18n.resolvedLanguage === lang ? "bold" : "normal"};
            text-decoration: ${i18n.resolvedLanguage === lang
              ? "underline"
              : "normal"};
          `}
          onClick={() => i18n.changeLanguage(lang)}
        >
          {lang}
        </button>
      ))}
    </aside>
  );
}
