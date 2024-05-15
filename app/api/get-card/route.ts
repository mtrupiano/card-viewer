import axios, { AxiosError } from "axios";
import { STATUS_CODES } from "http";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET(req: NextApiRequest) {

  const { searchParams } = new URL(req.url);

  try {

    const res = await axios.get(
      "https://api.scryfall.com/cards/search",
      {
        params: {
          q: searchParams.get("q"),
          unique: "prints",
        },
      },
    );

    return Response.json(res.data);

  } catch (err: AxiosError) {
    return Response.json(
      {
        error: err?.code || STATUS_CODES["500"]
      }, 
      {
        status: err?.response?.status || 500
      },
    );
  }
};