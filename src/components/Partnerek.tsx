import bbte from "../assets/BBTELogo.jpg";
import egyhazkerulet from "../assets/egyhazkerulet.png";
import sapi from "../assets/sapi.jpg";
import miniszterium from "../assets/ministerul.jpg";
import inspector from "../assets/inspectorat.jpeg";
import energobit_logo from "../assets/energobit_logo.jpg";
import dali from "../assets/dali.png";
import ioasim from "../assets/ioasim.png";
import medline from "../assets/medline.png";
import comunitas from "../assets/communitas_logo.png";
import knk from "../assets/knk.png";
import szabi from "../assets/szabi.png";
import kroni from "../assets/kroni.png";
import transtelex from "../assets/transtelex.jpg";
import maszol from "../assets/maszol.png";
import tvr from "../assets/tvr.jpg";
import agnus from "../assets/agnus.png";
import radio from "../assets/radio.jpg";
import paprika from "../assets/paprika.png";

const Tamogatok: React.FC = () => {
    // Támogatók listája (név + logó)
    const sponsors = [
      { name: "", logo: egyhazkerulet },
      { name: "", logo: miniszterium },
      { name: "", logo: bbte },
      { name: "", logo: sapi },
      { name: "", logo: comunitas },
      { name: "", logo: inspector },
      { name: "", logo: dali },
      { name: "", logo: energobit_logo },
      { name: "", logo: ioasim },
      { name: "", logo: knk },
      { name: "", logo: medline },
    ];

    const mediaPartners = [
      { name: "", logo: szabi },
      { name: "", logo: kroni },
      { name: "", logo: transtelex },
      { name: "", logo: maszol },
      { name: "", logo:  tvr},
      { name: "", logo:  agnus},
      { name: "", logo:  radio},
      { name: "", logo:  paprika},
    ];
  
    return (
      <section className="max-w-5xl mx-auto px-6 sm:px-10 py-10 text-gray-800">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-red-600 mb-12">
          Támogatók
        </h2>
  
        {/* Grid layout a logókhoz nagyobb térközzel */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 sm:gap-26 place-items-center">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="text-center space-y-4">
              {/* Logo */}
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-28 sm:h-36 w-auto object-contain mx-auto rounded-lg"
              />
              {/* Név */}
              <p className="text-lg sm:text-xl font-semibold text-gray-700">
                {sponsor.name}
              </p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-red-600 mb-12">
          Médiapartnerek
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 sm:gap-26 place-items-center">
          {mediaPartners.map((mediaPartner, index) => (
            <div key={index} className="text-center space-y-4">
              {/* Logo */}
              <img
                src={mediaPartner.logo}
                alt={mediaPartner.name}
                className="h-28 sm:h-36 w-auto object-contain mx-auto rounded-lg"
              />
              {/* Név */}
              <p className="text-lg sm:text-xl font-semibold text-gray-700">
                {mediaPartner.name}
              </p>
            </div>
          ))}
        </div>
    

      </section>
    );
  };
  
export default Tamogatok;
