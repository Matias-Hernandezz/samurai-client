import { HomeSections } from "./components/home/HomeSections"
import { Hero } from "./components/hero/Hero"
import { SiteLayout } from "./components/layout/SiteLayout"

function App() {
  return (
    <SiteLayout>
      <Hero />
      <HomeSections />
    </SiteLayout>
  )
}

export default App
