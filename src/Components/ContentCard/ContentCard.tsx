import styles from './ContentCard.module.scss'

type Variant = 'core' | 'working' | 'familiar'

type ContentCardProps = {
    icon: string
    title: string
    description: string
    content: string[]
    variant: Variant
}

export const ContentCard = ({ icon, title, description, content, variant }: ContentCardProps) => {
    return (
        <div className={`${styles.card} ${styles[variant]}`}>
            <div className={styles.header}>
                <span className={styles.icon}>{icon}</span>
                <div>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.description}>{description}</p>
                </div>
            </div>
            <div className={styles.pills}>
                {content.map((item) => (
                    <span key={item} className={styles.pill}>{item}</span>
                ))}
            </div>
        </div>
    )
}
