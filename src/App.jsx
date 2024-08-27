import { useState } from 'react';
import { Cake } from 'lucide-react';
import esterinha from './assets/esterinha.jpg';
import confettiSound from './assets/audio.mp3'; // Certifique-se de ter um arquivo de som

function App() {
  const [message, setMessage] = useState("Happy Birthday Esterinha!");
  const [showConfetti, setShowConfetti] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(confettiSound)); // Criar a instância de áudio uma vez

  const handleButtonClick = () => {
    setMessage("Enjoy your day!");
    setShowConfetti(true);

    // Tocar som
    audio.play();
    setIsPlaying(true);

    // Remover confetes após 3 segundos
    setTimeout(() => setShowConfetti(false), 3000);
  };

  const handleStopMusic = () => {
    audio.pause();
    audio.currentTime = 0; // Reiniciar a música
    setIsPlaying(false);
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-sm z-10 relative">
        {/* Foto da pessoa */}
        <img
          src={esterinha}
          alt="Foto de Esterinha"
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-md"
        />
        <Cake className="text-purple-500 mx-auto mb-4" size={48} />
        <h1 className="text-4xl font-bold text-gray-800 mb-2">{message}</h1>
        <p className="text-gray-600 mb-4">Wishing you all the best on your special day!</p>
        <button
          className="bg-purple-500 text-white px-4 py-2 rounded-full shadow hover:bg-purple-600 transition"
          onClick={handleButtonClick}
        >
          Send Wishes
        </button>
      </div>

      {showConfetti && (
        <div className="absolute inset-0 overflow-hidden z-20">
          {[...Array(15)].map((_, i) => (
            <div key={i} className={`confetti confetti-${i + 1}`}></div>
          ))}
        </div>
      )}

      {isPlaying && (
        <button
          className="absolute bottom-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full shadow hover:bg-red-600 transition z-30"
          onClick={handleStopMusic}
        >
          Stop Music
        </button>
      )}
    </div>
  );
}

export default App;
