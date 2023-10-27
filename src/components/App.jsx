/** @jsxImportSource @emotion/react */
import { Global, css, useTheme } from "@emotion/react";
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
      <Section title="Informations personnelles">
        <Definitions
          values={{
            Âge: <>{age} ans</>,
            Adresse: "Lyon, France",
            Téléphone: "+33 6 89 36 32 19",
            Email: (
              <Link href="mailto:mounier.florian@gmail.com">
                mounier.florian@gmail.com
              </Link>
            ),
            "Site internet": <Link>florian.mounier.dev</Link>,
            Github: <Link>github.com/paradoxxxzero</Link>,
          }}
        />
      </Section>

      <Section title="Profil">
        <p
          css={css`
            margin-left: 3em;
            @media (max-width: 600px) {
              margin-left: 0.5em;
            }
          `}
        >
          <strong>Développeur full stack Python / JavaScript</strong>
          <br />
          <strong>{year - 2009} ans</strong> d’expérience en conception
          réalisation de projets informatique
          <br />
          <strong>{year - 2011} ans</strong> en Python / JavaScript,{" "}
          <strong>{year - 2015} ans</strong> en React / Redux
          <br />
          Ingénieur diplômé de l’INSA de Lyon, département informatique avec
          félicitations du jury.
        </p>
      </Section>

      <Section title="Compétences techniques">
        <Definitions
          values={{
            Langages: "Python, JavaScript, HTML5, CSS3, SQL",
            Bibliothèques:
              "React, Redux, Flask, Jinja2, SQLAlchemy, MUI, Three.js",
            Serveurs: "NGINX, uWSGI, Express, Koa",
            Outils:
              "Git, Github, Shell, Vite, Webpack, Poetry, Yarn, Make, GitLab CI",
            "Base de données": "PostgreSQL, sqlite",
            Systèmes: "ArchLinux, Ubuntu/Debian, Windows, Android",
          }}
        />
      </Section>

      <Section title="Formation et Langues">
        <Definitions
          values={{
            "2009 − 2006": "INSA de Lyon second cycle département informatique",
            "2006 − 2004": "INSA de Lyon premier cycle",
            Anglais: "Courant",
          }}
        />
      </Section>

      <Section title="Expériences professionnelles">
        <Experiences
          values={[
            {
              from: "Décembre 2019",
              to: "Aujourd’hui",
              client: "pour Expertise Art et Patrimoine à Lyon",
              job: "Cofondateur, CEO et Développeur full stack",
              missions: [
                "Création de la société Expertise Art et Patrimoine avec Gaël Favier",
                "Réalisation de la plateforme d’inventaire et de gestion de collections d’objets d’art",
                "Développement d’un serveur d’API en Python avec Flask et SQLAlchemy",
                "Développement d’une application en JavaScript avec React Redux Material UI",
                "Création d’un outil de visualisation de photos 360",
                "Hébergement en bare metal, monitoring, maintenance et support",
                <>
                  Réalisation d’une landing page en React SSG:{" "}
                  <Link>eap-expertise.fr</Link>
                </>,
              ],
            },
            {
              from: "Septembre 2021",
              to: "Aujourd’hui",
              client: "pour Akretion à Lyon",
              job: "Consultant Freelance / Développeur Odoo",
              missions: [
                "Conception et développement de modules communautaires Odoo pour différents clients finaux",
                "Particulièrement sur les modules d’achat, vente, gestion de stock et gestion de produits",
                "Participation au développement de la solution de vente en ligne basée sur odoo : Shopinvader",
                "Accompagnement en réalisation et industrialisation de site e-commerce Odoo en nuxt.js",
              ],
            },
            {
              from: "Janvier 2016",
              to: "Novembre 2019",
              client: "pour Kozea à Lyon",
              job: "Architecte Python JavaScript / Responsable pôle innovation R&D",
              missions: [
                "Uniformisation de l’architecture des projets de l’entreprise : installation, pile technique, intégration continue et déploiement",
                <>
                  Choix techniques pour la refonte complète de l’usine à site
                  pharminfo.fr selon une architecture d’application monopage :{" "}
                  <Link>optiweb.pharminfo.fr</Link>
                </>,
                "Transformation de la partie serveur Python en une API REST JSON",
                "Réalisation de la partie client en React / Redux avec SSR sous Webpack et Koa",
                "Aide à la conception de l’interface orientée expérience utilisateur",
                "Participation à la mise en place d’un fonctionnement en Holacratie",
              ],
            },
            {
              from: "Mars 2011",
              to: "Décembre 2015",
              client: "pour Kozea à Vaulx-en-velin",
              job: "Ingénieur étude et développement",
              missions: [
                <>
                  Participation à la réalisation et au maintient de la
                  plateforme pharminfo.fr d’hébergement de sites internet de
                  pharmacie : <Link>www.pharminfo.fr</Link>
                </>,
                "Réalisation d’une plateforme de groupement de pharmaciens, d’un site de formation en e-learning, d’une application Android de réservation d’ordonnance et d’une plateforme de gestion de prise de rendez-vous médecin",
              ],
            },
            {
              from: "Janvier 2009",
              to: "Février 2011",
              client: "pour Objet Direct (Viseo) à Lyon",
              job: "Ingénieur étude et développement",
              missions: [
                "Accompagnement de divers clients dans l’univers Java J2EE",
              ],
            },
          ]}
        />
      </Section>

      <Section title="Réalisations">
        <Definitions
          wide
          values={{
            "Coxeter Explorer": (
              <>
                Outil de visualisation des groupes de Coxeter sphériques,
                euclidiens et hyperboliques en dimension N
                <br />
                <Link>florian.mounier.dev/coxeter-explorer</Link>
              </>
            ),
            Formol: (
              <>
                Bibliothèque React d’édition de données arborescentes basée sur
                les formulaires HTML5
                <br />
                <Link>kozea.github.io/formol</Link>
              </>
            ),
            Unrest: (
              <>
                Générateur d’API REST JSON extensibles à partir de modèles de
                données SQLAlchemy
                <br />
                <Link>kozea.github.io/unrest</Link>
              </>
            ),
            AnakataGL: (
              <>
                Outil de visualisation d’objets géométriques en dimension 4
                développé en JavaScript avec Three.js
                <br />
                <Link>florian.mounier.dev/anakataGL</Link>
              </>
            ),
            Butterfly: (
              <>
                Implémentation web d’un terminal Linux basé sur WebSocket
                <br />
                <Link>github.com/paradoxxxzero/butterfly</Link>
              </>
            ),
            Pygal: (
              <>
                Bibliothèque Python de génération de graphiques vectoriels
                <br />
                <Link>www.pygal.org</Link>
              </>
            ),
            "Wdb/Kalong": (
              <>
                Débogueurs Python avec interface web
                <br />
                <Link>github.com/Kozea/wdb</Link>
                <br />
                <Link>github.com/paradoxxxzero/kalong</Link>
              </>
            ),
            Multicorn: (
              <>
                Bibliothèque C permettant l’inclusion de points d’accès python
                dans la définition de tables étrangères PostgreSQL
                <br />
                <Link>multicorn.org</Link>
              </>
            ),
            "System Monitor": (
              <>
                Extension de suivi des ressources système pour Gnome Shell
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
