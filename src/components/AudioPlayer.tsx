import React, { useState, useEffect } from "react";
import { getAudioData, getAudioStream } from "../services/audioService";
import { AudioData } from "../interfaces/audioInterface";
import AudioCard from "./AudioCard";

interface AudioPlayerProps {
  audioId: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioId }) => {
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [audioData, setAudioData] = useState<AudioData>();

  useEffect(() => {
    const fetchAudioStream = async () => {
      try {
        const audioBlob = await getAudioStream(audioId);
        const url = URL.createObjectURL(audioBlob);
        setAudioUrl(url);

        const reqAudioData = await getAudioData(audioId);
        setAudioData(reqAudioData);
      } catch (err) {
        setError("Error loading audio stream: " + err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAudioStream();
  }, [audioId]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="flex flex-col justify-center items-center">
      {audioData ? <AudioCard audioData={audioData} /> : null}
      {audioUrl ? (
        <audio controls>
          <source src={audioUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      ) : (
        <p>Audio stream not available.</p>
      )}
    </div>
  );
};

export default AudioPlayer;
