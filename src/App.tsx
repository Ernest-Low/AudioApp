import AudioPlayer from "./components/AudioPlayer";

function App() {
  const audioId = "0b7f28ff-e9f6-4d80-a194-e5c28572615c";

  return (
    <>
      <p>Hello World</p>
      <AudioPlayer audioId={audioId} />
    </>
  );
}

export default App;
