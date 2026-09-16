import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'
import Stack from './components/Stack/Stack'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import CursorCircle from './components/CursorCircle/CursorCircle'

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Projects />
        <CursorCircle />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
