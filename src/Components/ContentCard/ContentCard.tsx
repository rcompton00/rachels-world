import styles from './ContentCard.module.scss'

type ContentCardProps = {
    title: 'Growing' | 'Learning' | 'Comfortable'
    content: string[]
}

const barFill = {
    Growing: '25%',
    Learning: '50%',
    Comfortable: '75%',
}

export const ContentCard = ({ title, content }: ContentCardProps) => {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.bar_track}>
                <div
                    className={styles.bar_fill}
                    style={{ width: barFill[title] }}
                />
            </div>
            <ul className={styles.content_list}>
                {content.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    )
}
