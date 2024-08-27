import { useState } from 'react';
import { Cake } from 'lucide-react';
import esterinha from './assets/esterinha.jpg';
import confettiSound from './assets/audio.mp3';

function App() {
  const [message, setMessage] = useState("Happy Birthday Esterinha!");
  const [showConfetti, setShowConfetti] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(confettiSound));
  const [showMemories, setShowMemories] = useState(false);

  const handleButtonClick = () => {
    setMessage("Enjoy your day!");
    setShowConfetti(true);
    audio.play();
    setIsPlaying(true);
    setShowMemories(true); // Exibe as memórias
    setTimeout(() => setShowConfetti(false), 3000);
  };

  const handleStopMusic = () => {
    audio.pause();
    audio.currentTime = 0;
    setIsPlaying(false);
  };

  const memories = [
    { date: "28 Ago 2001", content: "Seu primeiro aniversário! Um dia repleto de sorrisos e balões coloridos." },
    { date: "28 Ago 2002", content: "Dois aninhos de pura alegria! A energia radiante já começava a aparecer." },
    { date: "28 Ago 2003", content: "Com três anos, sua curiosidade pelo mundo estava a mil!" },
    { date: "28 Ago 2004", content: "Quatro anos de graciosidade, seu sorriso era a luz em qualquer lugar." },
    { date: "28 Ago 2005", content: "Cinco anos e uma imaginação incrível! O mundo era seu playground." },
    { date: "28 Ago 2006", content: "Seis anos de aventuras e brincadeiras que nunca pareciam acabar." },
    { date: "28 Ago 2007", content: "Sete anos de pura energia e descobertas." },
    { date: "28 Ago 2008", content: "Oito anos de bondade e generosidade, sempre cuidando dos outros." },
    { date: "28 Ago 2009", content: "Nove anos de alegria e momentos inesquecíveis ao lado dos amigos." },
    { date: "28 Ago 2010", content: "Dez anos! Uma década de vida cheia de conquistas e aprendizados." },
    { date: "28 Ago 2011", content: "Onze anos e um coração cheio de sonhos prontos para serem realizados." },
    { date: "28 Ago 2012", content: "Doze anos de crescimento e amadurecimento, sempre com um sorriso no rosto." },
    { date: "28 Ago 2013", content: "Treze anos, a fase da adolescência começava com novas aventuras." },
    { date: "28 Ago 2014", content: "Quatorze anos, repleta de sonhos e novas descobertas sobre o mundo." },
    { date: "28 Ago 2015", content: "Quinze anos, cheia de graça e determinação, pronta para novos desafios." },
    { date: "28 Ago 2016", content: "Dezesseis anos de inspiração para todos ao seu redor, com um brilho inconfundível." },
    { date: "28 Ago 2017", content: "Dezessete anos de descobertas e construção de um futuro brilhante." },
    { date: "28 Ago 2018", content: "Dezoito anos! Agora oficialmente adulta, mas sempre jovem de espírito." },
    { date: "28 Ago 2019", content: "Dezenove anos de conquistas e crescimento pessoal." },
    { date: "28 Ago 2020", content: "Vinte anos! Uma nova década para viver sonhos ainda maiores." },
    { date: "28 Ago 2021", content: "Vinte e um anos de muita sabedoria, amor e momentos inesquecíveis." },
    { date: "28 Ago 2022", content: "Vinte e dois anos, uma jornada de autoconhecimento e grandes realizações." },
    { date: "28 Ago 2023", content: "Vinte e três anos de superação e novas conquistas, com muitos momentos especiais." },
    { date: "28 Ago 2024", content: "Vinte e quatro anos! Uma mulher forte, cheia de luz, pronta para conquistar o mundo." }
  ];

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-900 to-pink-500">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-sm z-10 relative">
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

      {/* Linha do Tempo */}
      {showMemories && (
        <div className="mt-16 w-full max-w-xl">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Memories</h2>
          <div className="relative border-l border-gray-200 dark:border-gray-700">
            {memories.map((memory, index) => (
              <div key={index} className="mb-10 ml-6">
                <span className="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900"></span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  {memory.date}
                </h3>
                <p className="text-base font-normal text-neutral-300 dark:text-neutral-200">
                  {memory.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
