import { FirebasePlainWordmark } from "devicons-react";
import { ReactOriginal } from "devicons-react";
import { ReduxOriginal } from "devicons-react";
import { BootstrapOriginal } from "devicons-react";
import { NextjsOriginalWordmark } from "devicons-react";
import { MaterialuiPlain } from "devicons-react";
import { SassOriginal } from "devicons-react";
import { PrismaOriginalWordmark } from "devicons-react";
import { TailwindcssOriginal } from "devicons-react";
import { PostgresqlOriginalWordmark } from "devicons-react";

const ProjectsSection = () => {
  return (
    <section className="section projects-section">
      <div className="container">
        <h2 className="section__heading">Projects</h2>
        <p className="section__subheading">
          A selection of completed coding projects
        </p>
        <div className="projects-section__row">
          <div className="projects-section__item">
            <img
              src={require("./imgs/movie-and-tv-info.png")}
              alt="Spencer Saunders Personal Portfolio"
            />
            <h4>Movie and TV Info</h4>
            <div className="projects-section__development-icons">
              <NextjsOriginalWordmark size={50} />
              <ReactOriginal size={50} />
              <TailwindcssOriginal size={50} />
              <PostgresqlOriginalWordmark size={50} />
              <PrismaOriginalWordmark size={50} />
            </div>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://movie-and-tv-info.vercel.app/"
              className="projects-section__button"
            >
              Website Link
            </a>
          </div>
          <div className="projects-section__item">
            <img src={require("./imgs/calendar.png")} alt="Habit Tracker" />
            <h4>Habit Tracker</h4>
            <div className="projects-section__development-icons">
              <ReactOriginal size={50} />
              <NextjsOriginalWordmark size={50} />
              <SassOriginal size={50} />
              <ReduxOriginal size={50} />
              <MaterialuiPlain size={50} />
              <FirebasePlainWordmark size={50} />
            </div>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/SpencerJSaunders/habit-tracker-public"
              className="projects-section__button"
            >
              Source Code
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://habit-tracker-2w8k96s1f-spencerjsaunders.vercel.app/"
              className="projects-section__button"
            >
              Website Link
            </a>
          </div>
          <div className="projects-section__item">
            <img src={require("./imgs/crypto.jpeg")} alt="Cryptocurrency" />
            <h4>Cryptocurrency Market Watch</h4>
            <div className="projects-section__development-icons">
              <ReactOriginal size={50} />
              <NextjsOriginalWordmark size={50} />
              <SassOriginal size={50} />
              <MaterialuiPlain size={50} />
            </div>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/SpencerJSaunders/crypto-watch"
              className="projects-section__button"
            >
              Source Code
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://crypto-watch-blond.vercel.app/"
              className="projects-section__button"
            >
              Website Link
            </a>
          </div>
          <div className="projects-section__item">
            <img
              src={require("./imgs/spencer-portfolio.png")}
              alt="Spencer Saunders Personal Portfolio"
            />
            <h4>Personal Portfolio</h4>
            <div className="projects-section__development-icons">
              <ReactOriginal size={50} />
              <SassOriginal size={50} />
            </div>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/SpencerJSaunders/SpencerJSaunders.github.io"
              className="projects-section__button"
            >
              Source Code
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://spencerjsaunders.github.io"
              className="projects-section__button"
            >
              Website Link
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
