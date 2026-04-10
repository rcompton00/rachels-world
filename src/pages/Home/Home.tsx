import { Header } from '../../Components/Header/Header'
import styles from './Home.module.scss'
import Headshot2026 from '../../assets/Headshot2026.jpg'
import { ContentCard } from '../../Components/ContentCard/ContentCard'


export default function Home () {

  const learningArray = ["JavaScript", "TypeScript", "React", "Node.js", "Express", "MongoDB", "SQL", "Python", "Django", "Flask", "AWS", "Docker", "Kubernetes", "GraphQL", "Redux", "Next.js"]
  const comfortableArray = ["JavaScript", "TypeScript", "React", "Node.js", "Express", "MongoDB", "SQL", "Python", "Django", "Flask"]
  const growingArray = ["AWS", "Docker", "Kubernetes", "GraphQL", "Redux", "Next.js"]

  return (
    <div>
        <Header />
        <div className={styles.container_home}>
        <h1 className={styles.home_title}>Hi, I'm <span>Rachel Compton</span></h1>
          <img className={styles.home_image} src={Headshot2026} alt="Rachel Compton" />
        <h1>Full Stack Software Engineer</h1>
        <p>Learning, Comfortable, and Growing</p>
        <ContentCard title="Growing" content={growingArray} />
        <ContentCard title="Learning" content={learningArray} />
        <ContentCard title="Comfortable" content={comfortableArray} />
        </div>
    </div>
  )
}