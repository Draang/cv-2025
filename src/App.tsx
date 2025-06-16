import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Header />
      <main className="max-w-screen-2xl mx-auto mt-10 px-5">
        <AboutMe />
        <Projects />
        <Skills/>
      </main>
    </>
  );
}

export default App;
