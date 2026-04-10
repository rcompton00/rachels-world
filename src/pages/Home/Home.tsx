import { Header } from '../../Components/Header/Header'
import styles from './Home.module.scss'
import Headshot2026 from '../../assets/Headshot2026.jpg'
import { ContentCard } from '../../Components/ContentCard/ContentCard'


export default function Home () {

  const coreSkills = ["GitHub", "JavaScript", "TypeScript", "React", "PostgreSQL", "REST APIs", "Agile Methodologies", "Test Driven Development", "HashiCorp Vault", "Adobe Analytics", "BigQuery"]
  const workingSkills = ["Kubernetes", "Docker", "GCP", "GraphQL", "Python", "Java", "Debugging", "Testing"]
  const familiarSkills = ["Go", "Kubernetes", "CI/CD", "Terraform", "Authentication/Authorization", "Data Structures & Algorithms", "System Design"]

  return (
    <div>
        <Header />
        <div className={styles.container_home}>
          <h1 className={styles.home_title}>Hi, I'm <span>Rachel Compton</span></h1>
          <img className={styles.home_image} src={Headshot2026} alt="Rachel Compton" />
          <h1>Full Stack Software Engineer</h1>
          <ContentCard
            icon="⭐"
            title="Core Strengths"
            description="Most confident technologies"
            content={coreSkills}
            variant="core"
          />
          <ContentCard
            icon="⚙️"
            title="Working Knowledge"
            description="Have used in projects or work, but not yet at expert level"
            content={workingSkills}
            variant="working"
          />
          <ContentCard
            icon="📘"
            title="Familiar / Learning"
            description="Technologies I've touched and/or actively exploring"
            content={familiarSkills}
            variant="familiar"
          />
        </div>
    </div>
  )
}
