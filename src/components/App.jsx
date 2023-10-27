/** @jsxImportSource @emotion/react */
import { Global, css, useTheme } from "@emotion/react";
import { Trans, useTranslation } from "react-i18next";
import Section from "./Section";
import Definitions from "./Definitions";
import Experiences from "./Experiences";
import Link from "./Link";

export default function App() {
  const theme = useTheme();
  const age = Math.floor(
    (new Date().getTime() - 523000000000) / // This is purposefully wrong
      (365 * 24 * 60 * 60 * 1000)
  );
  const year = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <>
      <Global
        styles={css`
          // Global styles
          :root {
            font-family: "Raleway", sans-serif;
            font-size: 18px;
            @media (max-width: 600px) {
              font-size: 16px;
            }
            line-height: 1.5;
            font-weight: 400;

            font-synthesis: none;
            text-rendering: optimizeLegibility;
            font-feature-settings: "onum";
            font-variant-numeric: oldstyle-nums;

            color-scheme: light dark;
            color: ${theme.colors.primary};
            background-color: ${theme.colors.background};
            transition: all 0.2s ease-in-out;
          }

          body {
            margin: 2em;
            display: flex;
            place-items: center;
            min-width: 320px;
            min-height: 100vh;
          }

          @page {
            size: A4;
          }
          @media print {
            :root {
              font-size: 9pt;
            }
            body {
              margin: 1cm 25mm;
            }
          }

          main {
            max-width: 800px;
            margin: 0 auto;
          }
        `}
      />
      <header
        css={css`
          text-align: center;
        `}
      >
        <h1>Florian Mounier</h1>
      </header>
      <Section title={t("bio.title")}>
        <Definitions
          values={{
            [t("bio.age")]: t("bio.age_value", { age }),
            [t("bio.address")]: "Lyon, France",
            [t("bio.phone")]: "+33 6 89 36 32 19",
            [t("bio.email")]: (
              <Link href="mailto:mounier.florian@gmail.com">
                mounier.florian@gmail.com
              </Link>
            ),
            [t("bio.website")]: <Link>florian.mounier.dev</Link>,
            Github: <Link>github.com/paradoxxxzero</Link>,
          }}
        />
      </Section>

      <Section title={t("profil.title")}>
        <p
          css={css`
            margin-left: 3em;
            @media (max-width: 600px) {
              margin-left: 0.5em;
            }
          `}
        >
          <strong>{t("profil.description")}</strong>
          <br />
          <Trans i18nKey="profil.xp">
            <strong>{{ n: year - 2009 }} y</strong> ...
          </Trans>
          <br />
          <Trans i18nKey="profil.xp_lang">
            <strong>{{ n: year - 2011 }} y</strong> ...
          </Trans>{" "}
          <Trans i18nKey="profil.xp_lib">
            <strong>{{ n: year - 2015 }} y</strong> ...
          </Trans>
          <br />
          {t("profil.school")}
        </p>
      </Section>

      <Section title={t("tech.title")}>
        <Definitions
          values={{
            [t("tech.langs")]: "Python, JavaScript, HTML5, CSS3, SQL",
            [t("tech.libs")]:
              "React, Redux, Flask, Jinja2, SQLAlchemy, MUI, Three.js",
            [t("tech.servers")]: "NGINX, uWSGI, Express, Koa",
            [t("tech.tools")]:
              "Git, Github, Shell, Vite, Webpack, Poetry, Yarn, Make, GitLab CI",
            [t("tech.dbs")]: "PostgreSQL, sqlite",
            [t("tech.systems")]: "ArchLinux, Ubuntu/Debian, Windows, Android",
          }}
        />
      </Section>

      <Section title={t("course.title")}>
        <Definitions
          values={{
            "2009 − 2006": t("course.second"),
            "2006 − 2004": t("course.first"),
            [t("course.lang")]: "Courant",
          }}
        />
      </Section>

      <Section title={t("xp.title")}>
        <Experiences
          values={[
            {
              from: 2019,
              to: t("today"),
              client: `${t("for")} Expertise Art et Patrimoine ${t("in")} Lyon`,
              job: t("xp.cofounder"),
              missions: [
                t("xp.eap.mission1"),
                t("xp.eap.mission2"),
                t("xp.eap.mission3"),
                t("xp.eap.mission4"),
                t("xp.eap.mission5"),
                t("xp.eap.mission6"),
                <>
                  {t("xp.eap.mission7")} <Link>eap-expertise.fr</Link>
                </>,
              ],
            },
            {
              from: 2021,
              to: t("today"),
              client: `${t("for")} Akretion ${t("in")} Lyon`,
              job: t("xp.freelance"),
              missions: [
                t("xp.akretion.mission1"),
                t("xp.akretion.mission2"),
                t("xp.akretion.mission3"),
                t("xp.akretion.mission4"),
              ],
            },
            {
              from: 2016,
              to: 2019,
              client: `${t("for")} Kozea ${t("in")} Lyon`,
              job: t("xp.architect"),
              missions: [
                t("xp.kozea.mission1"),
                <>
                  {t("xp.kozea.mission2")} <Link>optiweb.pharminfo.fr</Link>
                </>,
                t("xp.kozea.mission3"),
                t("xp.kozea.mission4"),
                t("xp.kozea.mission5"),
                t("xp.kozea.mission6"),
              ],
            },
            {
              from: 2011,
              to: 2015,
              client: `${t("for")} Kozea ${t("in")} Vaulx-en-velin`,
              job: t("xp.engineer"),
              missions: [
                <>
                  {t("xp.kozea.mission7")} <Link>www.pharminfo.fr</Link>
                </>,
                t("xp.kozea.mission8"),
              ],
            },
            {
              from: 2009,
              to: 2011,
              client: `${t("for")} Objet Direct (Viseo) ${t("in")} Lyon`,
              job: t("xp.engineer"),
              missions: [t("xp.od")],
            },
          ]}
        />
      </Section>

      <Section title={t("production.title")}>
        <Definitions
          wide
          values={{
            "Coxeter Explorer": (
              <>
                {t("production.coxeter_explorer")}
                <br />
                <Link>florian.mounier.dev/coxeter-explorer</Link>
              </>
            ),
            Formol: (
              <>
                {t("production.formol")}
                <br />
                <Link>kozea.github.io/formol</Link>
              </>
            ),
            Unrest: (
              <>
                {t("production.unrest")}
                <br />
                <Link>kozea.github.io/unrest</Link>
              </>
            ),
            AnakataGL: (
              <>
                {t("production.anakata")}
                <br />
                <Link>florian.mounier.dev/anakataGL</Link>
              </>
            ),
            Butterfly: (
              <>
                {t("production.butterfly")}
                <br />
                <Link>github.com/paradoxxxzero/butterfly</Link>
              </>
            ),
            Pygal: (
              <>
                {t("production.pygal")}
                <br />
                <Link>www.pygal.org</Link>
              </>
            ),
            "Wdb/Kalong": (
              <>
                {t("production.kalong")}
                <br />
                <Link>github.com/Kozea/wdb</Link>
                <br />
                <Link>github.com/paradoxxxzero/kalong</Link>
              </>
            ),
            Multicorn: (
              <>
                {t("production.multicorn")}
                <br />
                <Link>multicorn.org</Link>
              </>
            ),
            "System Monitor": (
              <>
                {t("production.system_monitor")}
                <br />
                <Link>
                  github.com/paradoxxxzero/gnome-shell-system-monitor-applet
                </Link>
              </>
            ),
          }}
        />
      </Section>
    </>
  );
}
