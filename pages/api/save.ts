// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    firstName: string
    lastName: string
    emailOrPhoneNumber: string
    password: string
    streetAddress: string
    city: string
    state: string
    country: string
    cardProvider: string
    cardNumber: string
    cardExpirationDate: string
    cardSecurityCode: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log(req.body)

    res.status(200)
}
