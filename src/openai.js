import OpenAI from "openai";
import config from "config";
import { createReadStream } from "fs";

class OpenAIClass {
  constructor(apiKey) {
    this.openai = new OpenAI({
      apiKey,
    });
  }

  chat() {}

  async transcription(filepath) {
    try {
      const response = await this.openai.createTranscription(createReadStream(filepath), "whisper-1");
      // const response = await this.openai.transcription(createReadStream(filepath), "whisper-1");
      console.log(response);
      return response.data.text;
    } catch (e) {
      console.log("Error while transcription", e.message);
    }
  }
}

export const openai = new OpenAIClass(config.get("OPENAI_KEY"));
