/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";

const moon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
    <path
      fill="currentColor"
      d="M235.54 150.21a104.84 104.84 0 0 1-37 52.91A104 104 0 0 1 32 120a103.09 103.09 0 0 1 20.88-62.52a104.84 104.84 0 0 1 52.91-37a8 8 0 0 1 10 10a88.08 88.08 0 0 0 109.8 109.8a8 8 0 0 1 10 10Z"
    />
  </svg>
);

const sun = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
    <path
      fill="currentColor"
      d="M120 40V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0Zm72 88a64 64 0 1 1-64-64a64.07 64.07 0 0 1 64 64Zm-16 0a48 48 0 1 0-48 48a48.05 48.05 0 0 0 48-48ZM58.34 69.66a8 8 0 0 0 11.32-11.32l-16-16a8 8 0 0 0-11.32 11.32Zm0 116.68l-16 16a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0-11.32-11.32ZM192 72a8 8 0 0 0 5.66-2.34l16-16a8 8 0 0 0-11.32-11.32l-16 16A8 8 0 0 0 192 72Zm5.66 114.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32-11.32ZM48 128a8 8 0 0 0-8-8H16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8Zm80 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8Zm112-88h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16Z"
    />
  </svg>
);

export default function ThemeSwitcher({ mode, onChange }) {
  const theme = useTheme();
  return (
    <aside
      css={css`
        position: absolute;
        @media (min-width: 900px) {
          position: fixed;
        }
        top: 0;
        right: 0;
        cursor: pointer;
        margin: 0.5em;
        padding: 0.75em;
        width: 2em;
        height: 2em;

        &:hover {
          background: ${theme.colors.backgroundActive};
        }

        @media print {
          display: none;
        }
      `}
      onClick={() => onChange(mode === "dark" ? "light" : "dark")}
    >
      {mode === "dark" ? moon : sun}
    </aside>
  );
}
