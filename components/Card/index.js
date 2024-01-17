import React from 'react';
import styles from './Card.module.css';

export default function Card({
    title = 'title',
    description = 'description',
    bgColor,
    borderColor,
}) {
    const cardStyle = {
        backgroundColor: bgColor,
        border: borderColor
    };

    return (
        <div className={styles.all}>
            <div className={styles.card} style={cardStyle}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}
