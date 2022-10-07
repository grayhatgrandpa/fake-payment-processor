import { FC, MouseEventHandler } from 'react'
import styles from './Button.module.scss'

type Props = {
    children: any
    onClick?: MouseEventHandler
    type: 'primary' | 'secondary'
    className?: string
}

const Button: FC<Props> = ({ children, onClick, type, className }) => {
    return (
        <a
            {...{ onClick }}
            className={[styles.button, styles[type], className].join(' ')}
        >
            {children}
        </a>
    )
}

export default Button
