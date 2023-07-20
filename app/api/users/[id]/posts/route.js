import { connectToDB } from "@utils/database";
import Prompts from "@models/prompt";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    params.id;
    const prompts = await Prompts.find({}).populate("creator");

    return new Response(JSON.stringify(prompts), {
      status: 200,
    });
  } catch (err) {
    return new Response("Failed to fetch all prompts", {
      status: 500,
    });
  }
};
