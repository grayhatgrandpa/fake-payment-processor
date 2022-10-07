import { NextPage } from 'next'
import Image from 'next/image'
import styles from './Home.module.scss'

// components
import Button from '../components/Button'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'

const Home: NextPage = () => {
    const goSignUp = () => (window.location.href = '/sign-up')

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src="/background.jpg" className={styles.image} />
            </div>
            <div className={styles.textOuterContainer}>
                <div className={styles.textInnerContainer}>
                    <Heading className={styles.heading}>Guzooble</Heading>
                    <SubHeading className={styles.subHeading}>
                        The future of transaction
                    </SubHeading>
                    <SubHeading className={styles.subSubHeading}>
                        Join us now
                    </SubHeading>
                    <Button type="primary" onClick={goSignUp}>
                        Sign up with phone or email
                    </Button>
                    <SubHeading className={styles.subSubHeading}>
                        Have an account?
                    </SubHeading>
                    <Button type="secondary" onClick={goSignUp}>
                        Sign in
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Home
