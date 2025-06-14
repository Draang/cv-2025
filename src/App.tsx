import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Header />
      <main className="max-w-screen-2xl mx-auto mt-10 px-5">
        <AboutMe />
        <Projects />
      </main>
    </>
  );
}

export default App;
