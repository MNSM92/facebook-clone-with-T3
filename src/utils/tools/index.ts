import type { NextApiRequest, NextApiResponse } from 'next'

export const missingParams = (params: { [key: string]: string | undefined }, res: NextApiResponse) => {
    const presentParams = Object.keys(params).filter((key) => params[key] !== undefined);
    const paramsLength = Object.keys(params).length;

    if (presentParams.length === 0) {
      return res.status(400).json({ message: 'Required data not found' });
    }

    if (paramsLength > 1 && presentParams.length === paramsLength) {
      return res.status(400).json({ message: 'Any of required data is accepted' });
    }

  };
