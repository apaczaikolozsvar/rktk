import React from "react";
import CommitteeCard from "./CommitteeCard";

const Bizotsag: React.FC = () => {
  const committees = [
    {
      title: "Irodalom és nyelvészet szekció",
      members: [
        { name: "dr. Fazakas Emese", position: "docens, Babeş–Bolyai Tudományegyetem, Magyar Irodalomtudományi Tanszék" },
        { name: "dr. Farmati Anna,", position: "adjunktus, Babeş–Bolyai Tudományegyetem, Magyar IrodalomtudományiTanszék" },
        { name: "dr. Berszán István", position: "docens, Babeş–Bolyai Tudományegyetem, Magyar Irodalomtudományi Intézet" },
      ]
    },
    {
      title: "Biológia és környezettudomány szekció:",
      members: [
        { name: "dr. Macalik Kunigunda", position: "Babeş–Bolyai Tudományegyetem, Magyar Biológiai és Ökológiai Intézet" },
        { name: "dr. Papp Judit", position: "adjunktus, Babeş–Bolyai Tudományegyetem, Magyar Biológiai és Ökológiai Intézet" },
        { name: "dr. Urák István", position: "docens, Sapientia Erdélyi Magyar Tudományegyetem, Kolozsvári Kar, Természettudományi Tanszék" },
      ]
    },
    {
      title: "Matematika, fizika és műszaki tudományok szekció:",
      members: [
        { name: "dr. Szabó Loránd", position: "professzor, Kolozsvári Műszaki Egyetem, Elektro Mérnöki Kar" },
        { name: "dr. Nagy László", position: "professzor, Babeş–Bolyai Tudományegyetem, Babeş–Bolyai Tudományegyetem, Fizika Kar" },
        { name: "dr. Sulyok Csaba,", position: "adjunktus, Babeş-Bolyai Tudományegyetem,  Magyar Matematika és Informatika Intézet" },

      ]
    },
    {
      title: "Pszichológia és pedagógia szekció:",
      members: [
        { name: "dr. Tamás Borbála", position: "adjunktus, Babeş–Bolyai Tudományegyetem, Pszichológia és Neveléstudományi Kar" },
        { name: "drd. Rusu Szidónia", position: "Babeş–Bolyai Tudományegyetem, Magyar Szociológia és Szociális Munka Intézet" },
        { name: "drd. Gergely Roland", position: "Babeş–Bolyai Tudományegyetem, Pszichológia és Neveléstudományi Kar" },

      ]
    },
    {
      title: "Történelem és néprajz szekció:",
      members: [
        { name: "dr. Nagy Róbert-Miklós", position: "docens, Babeş–Bolyai Tudományegyetem, Magyar Történelmi Intézet" },
        { name: "dr. habil. Murándin János Kristóf", position: "docens, Sapientia Erdélyi Magyar Tudományegyetem, Kolozsvári Kar, Nemzetközi Kapcsolatok és Európai Tanulmányok Tanszék" },
        { name: "dr. Székely Melinda", position: " adjunktus, Sapientia Erdélyi Magyar Tudományegyetem, Kolozsvári Kar, Táncművészet Szak" },

      ]
    },
    {
      title: "Társadalom és kultúra szekció",
      members: [
        { name: "dr. Dániel Botond", position: "adjunktus, Babeş–Bolyai Tudományegyetem, Szociológia és Szociális Munka Intézet" },
        { name: "drd. Izsák Réka", position: "Babeş–Bolyai Tudományegyetem, Közgazdaság- és Gazdálkodástudományi Magyar Intézet" },
        { name: "Csíki Boróka", position: "óraadó, Babeş–Bolyai Tudományegyetem, Pedagógia és Alkalmazott Didaktika Intézet" },

      ]
    },
    
  ];

  return (
    <section className="max-w-7xl mx-auto p-6 text-gray-800">
      <h1 className="text-5xl font-extrabold text-center text-gray-800">Ismerd meg bizottsági tagjainkat.</h1>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {committees.map((committee, index) => (
          <CommitteeCard key={index} title={committee.title} members={committee.members} />
        ))}
      </div>
    </section>
  );
};

export default Bizotsag;
