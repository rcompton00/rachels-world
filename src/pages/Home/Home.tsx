import { Header } from '../../Components/Header/Header'
import styles from './Home.module.scss'

export default function Home () {

  return (
    <div className={styles.container_home}>
        <Header />
        <p>Welcome to Rachel's World!</p>
    </div>
  )
}  