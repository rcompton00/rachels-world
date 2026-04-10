import { Header } from '../../Components/Header/Header'
import styles from './Home.module.scss'
import Headshot2026 from '../../assets/Headshot2026.jpg'
import { ContentCard } from '../../Components/ContentCard/ContentCard'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Link from '@mui/material/Link';


export default function Home () {

  const coreSkills = ["GitHub", "JavaScript", "TypeScript", "React", "PostgreSQL", "REST APIs", "Agile Methodologies", "Test Driven Development", "HashiCorp Vault", "Adobe Analytics", "BigQuery"]
  const workingSkills = ["Kubernetes", "Docker", "GCP", "GraphQL", "Python", "Java", "Debugging", "Testing"]
  const familiarSkills = ["Go", "Kubernetes", "CI/CD", "Terraform", "Authentication/Authorization", "Data Structures & Algorithms", "System Design"]

  return (
    <div>
        <Header />
        <p className={styles.home_title}>Hi, I'm <span>Rachel Compton</span></p>
        <div className={styles.container_home}>
          <div className={styles.left_column}>
            <img className={styles.home_image} src={Headshot2026} alt="Rachel Compton" />
            <h1 className={styles.home_description}>Full Stack Software Engineer</h1>
            <h3 className={styles.home_description}><ChevronRightIcon className={styles.bullet_icon}/>3 years specializing in Marketing Ad Technology</h3>
            <h3 className={styles.home_description}><ChevronRightIcon className={styles.bullet_icon}/>Built campaign manager, metrics dashboard & supplier self-serve portal</h3>
            <div className={styles.footer_container}>
              <Link className={styles.link_wrapper} underline="none" href="https://github.com/rcompton00" target="_blank" rel="noopener">
                <GitHubIcon className={styles.footer_icons}/>
              </Link>
              <Link className={styles.link_wrapper} underline="none" href="https://www.linkedin.com/in/RachCompton/" target="_blank" rel="noopener">
                <LinkedInIcon className={styles.footer_icons}/>
              </Link>
              <Link className={styles.link_wrapper} underline="none" href="mailto:rachel_compton75@yahoo.com">
                <EmailIcon className={styles.footer_icons}/>
              </Link>
            </div>
          </div>
          <div className={styles.right_column}>
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
    </div>
  )
}
