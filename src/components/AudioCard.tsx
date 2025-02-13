import { AudioData } from "../interfaces/audioInterface";

interface AudioCardProps {
  audioData: AudioData;
}

const AudioCard: React.FC<AudioCardProps> = ({ audioData }) => {
  const { category, audioName, length, description } = audioData;

  return (
    <div className="w-full max-w-md rounded-2xl border bg-white p-4 shadow-lg transition-transform hover:scale-105">
      <div className="flex flex-wrap gap-2">
        {category.map((cat, index) => (
          <span
            key={index}
            className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-600"
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Title and Length */}
      <div className="mt-3 flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-800">{audioName}</h2>
        <span className="text-sm font-medium text-gray-500">{length}</span>
      </div>

      {/* Description */}
      <p className="mt-2 text-sm text-gray-600 line-clamp-3">{description}</p>
    </div>
  );
};

export default AudioCard;
