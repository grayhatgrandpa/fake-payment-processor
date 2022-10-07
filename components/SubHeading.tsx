import { FC } from 'react'
import styles from './SubHeading.module.scss'

type Props = {
    children: any
    className?: string
}

const SubHeading: FC<Props> = ({ children, className }) => {
    return <h2 className={[styles.text, className].join(' ')}>{children}</h2>
}

export default SubHeading
