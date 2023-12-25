import type { NextApiRequest, NextApiResponse } from "next";
import { object, string, number, TypeOf } from "zod";

export const helloSchema = object({
    name: string()
  });

  export interface rootRequest extends NextApiRequest {
    body: TypeOf<typeof helloSchema>;
  }
