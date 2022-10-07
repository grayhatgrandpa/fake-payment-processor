import { FC, useState, useEffect, useMemo, ChangeEventHandler } from 'react'
import styles from './FormEntry.module.scss'

type Props = {
    children: string
}

const FormEntry: FC<Props> = ({ children }) => {
    const [value, setValue] = useState('')

    const inputName: string = useMemo(
        () => children.toLowerCase().split(' ').join(''),
        [children]
    )

    const updateValue: ChangeEventHandler<HTMLInputElement> = e =>
        setValue(e.target.value)

    useEffect(() => {
        const submitButton = document.querySelector('.submit')
        submitButton?.addEventListener('click', () =>
            setValue((value: string) => {
                localStorage.setItem(inputName, value)
                return value
            })
        )
    }, [inputName])

    return (
        <div className={styles.container}>
            <p className={styles.label}>{children}</p>
            <input
                {...{ value }}
                type="text"
                className={styles.input}
                name={inputName}
                onChange={updateValue}
            />
        </div>
    )
}

export default FormEntry
