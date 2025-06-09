import AboutMe from "./components/AboutMe";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main className="max-w-screen-2xl mx-auto mt-10 px-5">
        <AboutMe />
      </main>
    </>
  );
}

export default App;
