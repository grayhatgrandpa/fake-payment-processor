import { FC } from 'react'
import styles from './Heading.module.scss'

type Props = {
    children: any
    className?: string
}

const Heading: FC<Props> = ({ children, className }) => {
    return <h1 className={[styles.text, className].join(' ')}>{children}</h1>
}

export default Heading
