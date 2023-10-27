/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";

export default function Link({ href, children }) {
  const theme = useTheme();
  const url =
    href || (children.startsWith("https") ? children : `https://${children}`);

  return (
    <a
      href={url}
      css={css`
        font-weight: 500;
        text-decoration: inherit;
        color: ${theme.colors.link};
        &:visited {
          color: ${theme.colors.linkVisited};
        }
        &:hover {
          color: ${theme.colors.linkActive};
        }
      `}
    >
      {children}
    </a>
  );
}
