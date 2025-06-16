import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  const today = new Date();
  return (
    <>
      <Header />
      <main className="max-w-screen-2xl mx-auto mt-10 px-5">
        <AboutMe />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="py-5">
        <div className="items-center text-center ">
          <p className="text-white text-lg">
            {today.getFullYear()} Angel Emmanuel Contreras Dueñas
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
