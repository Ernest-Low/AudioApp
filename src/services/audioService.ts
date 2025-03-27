import audioAppApi from "./api/audioAppApi";
import { AudioData } from "../interfaces/audioInterface";

const AUDIO_PATH = "/api/audio";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyZDMyOWYyMy00Y2MzLTRlMzAtYjVjOC0xYmFmOTljZDAxZTkiLCJpYXQiOjE3NDMwNTg0NjEsImV4cCI6MTc0MzA2MjA2MX0.FH7nl0-nzwI6ovNdLJ_mjRpJrF_1UNzxOFH2BfyEFeI";

export const getAudioData = async (audioId: string): Promise<AudioData> => {
  try {
    const response = await audioAppApi.get(`${AUDIO_PATH}/${audioId}`, {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching audio data:", error);
    throw error;
  }
};

export const getAudioStream = async (audioId: string): Promise<Blob> => {
  try {
    const response = await audioAppApi.get(`${AUDIO_PATH}/stream/${audioId}`, {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
      responseType: "blob",
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching stream: " + error);
    throw error;
  }
};
