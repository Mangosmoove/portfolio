import './App.css'
import HomePage from './pages/HomePage/HomePage'
import { ViewContainer } from './components/ViewContainer/ViewContainer'
import { AboutPage } from './pages/AboutPage/AboutPage'
import Navbar from './components/Navbar/Navbar'
import ExperiencePage from './pages/ExperiencePage/ExperiencePage'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'

function App() {
    return (
        <>
            <div className="w-full mx-auto">
                <Navbar />
            </div>
            <div id="home" />
            <ViewContainer>
                <HomePage />
            </ViewContainer>

            <ExperiencePage />

            <ProjectsPage />

            <ViewContainer bgColor={true}>
                <AboutPage />
            </ViewContainer>
        </>
    )
}

export default App
