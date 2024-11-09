import OpenAI from "openai";
import { GPT_SECRET_KEY } from "./constant";

const openAi = new OpenAI({
  apiKey: GPT_SECRET_KEY,
  dangerouslyAllowBrowser: true,
});

export default openAi;
