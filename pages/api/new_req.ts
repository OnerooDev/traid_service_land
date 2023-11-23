import type { NextApiRequest, NextApiResponse } from 'next'
import { sendReq } from '../../utils/mailer';

export default async function handler(
  req: any,
  res: NextApiResponse
) {
  try {
      const result = await sendReq(req.query.text);
      res.status(200).json(req.query.text);  
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' })
  }
}