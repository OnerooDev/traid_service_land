import type { NextApiRequest, NextApiResponse } from 'next'
import { sendReq } from '../../utils/mailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const result = await sendReq(req.body)
    res.status(200).json({ result })
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' })
  }
}