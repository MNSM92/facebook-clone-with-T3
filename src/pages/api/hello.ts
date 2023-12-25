import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/utils/prismaInstance'
import { rootRequest, helloSchema } from '../../../schema/root.schema';

export default async function handler(
  req: rootRequest,
  res: NextApiResponse
) {
  try {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }
  helloSchema.parse(req.body)
  const { name } = req.body

  await prisma.user.create({
    data: {
      name
    }
  })

  res.status(200).json({ name: 'John Doe' })
  } catch(error) {
    console.error(error);
    return res.status(500).json(error)
  }
}
