// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json({ 
    '0xE6cf1795036e8C88fdAdBE035282b0A3856e8D82': 1 
  })
}
