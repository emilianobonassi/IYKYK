// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { getApplicantStatus } from './kycLibrary'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  // 1. Users asked for KYC
  const users = [
    '0xE6cf1795036e8C88fdAdBE035282b0A3856e8D82' //example
  ]

  // 2. Check KYC status 
  const kycStatus = await Promise.all(users.map(async (user) => {
    const status = await getApplicantStatus(user)

    return {
      user: user,
      status: status.review.reviewResult.reviewAnswer === 'GREEN',
    }
  }))

  // TODO: 1 should be collected in a previous step, 2 should be done in background/webhook

  // 3. Create response for Sismo Data Group i.e. object with address as kyc and value level
  const responseBody = kycStatus
    .filter(({status}) => status)
    .reduce((acc, {user}) => {
    return {
      ...acc,
      [user]: 1,
    }
  }, {})

  res.status(200).json(responseBody)
}
