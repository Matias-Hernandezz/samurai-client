import { HomeSections } from "./components/home/HomeSections"
import { Hero } from "./components/hero/Hero"
import { HeroMarquee } from "./components/hero/HeroMarquee"
import { SiteLayout } from "./components/layout/SiteLayout"

function App() {
  return (
    <SiteLayout>
      <Hero />
      <HeroMarquee />
      <HomeSections />
    </SiteLayout>
  )
}

export default App
