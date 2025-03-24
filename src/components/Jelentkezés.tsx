import React from "react";

const Bizotsag: React.FC = () => {
  const vezetoseg = [
    { title: "Fővédnök", name: "Dr. Kolumbán Vilmos József", position: "Erdélyi Református Egyházkerület püspöke" },
    { title: "Központi Bizottság Elnöke", name: "Dr. Markó Bálint", position: "Babeș-Bolyai Tudományegyetem rektorhelyettese" },
    { title: "Központi Bizottság Ügyvezető Elnöke", name: "Dr. Kerekes Adelhaida", position: "Kolozs megyei Tanfelügyelőség, főtanfelügyelő helyettes" },
    { title: "Központi Bizottság Alelnöke", name: "Szőcs Ildikó", position: "Bethlen Gábor Kollégium, Nagyenyed, igazgató" }
  ];

  const szervezok = [
    { title: "Elnök", name: "Dr. Vörös Alpár István Vita", position: "Apáczai Csere János Elméleti Líceum, igazgató", contact: "Tel: 0264-597251, 0735-871600, E-mail: rktk2025@gmail.com" },
    { title: "Alelnök", name: "Ghevald Júlia", position: "Apáczai Csere János Elméleti Líceum, aligazgató", contact: "Tel: 0747-030280, E-mail: gevaldjulia@gmail.com" },
    { title: "Titkár", name: "Tóth Rudolf", position: "Apáczai Csere János Elméleti Líceum", contact: "Tel: 0748-127083, E-mail: toth.rudi14@gmail.com" }
  ];

  const tagok = [
    { name: "Elekes-Darabont Renáta", position: "Biológiai és környezettudományi szekció felelőse", contact: "Tel: 0755-486721, E-mail: elekes.renata95@yahoo.com " },
    { name: "Kovács Péter", position: "Irodalom és nyelvészet szekció felelőse", contact: "Tel: 0752-184843, E-mail: kovacspeter201296@gmail.com" },
    { name: "Bárdos László", position: "Fizika, informatika és mérnöki tudományok szekció felelőse", contact: "Tel: 0721-756942, E-mail: bardoslaszlo70@gmail.com" },
    { name: "Lukács Lóránd", position: "Pszichológia szekció felelőse", contact: "Tel: 0729-078564, E-mail: lukacs_lorand@yahoo.com" },
    { name: "Pócsai Sándor", position: "Történelem és néprajz szekció felelőse", contact: "Tel: 0740-588481, E-mail: indifiu@yahoo.com" },
    { name: "Filep Judit", position: "Társadalom és kultúra szekció felelőse", contact: "Tel: 0740-616046, E-mail: filepjudit@gmail.com" },
    { name: "Jakab Antal Géza", position: "Szállás és étkezés felelőse", contact: "Tel: 0747-243624, E-mail: jakabantal@gmail.com" },
    { name: "Fehér Judit", position: "Protokoll felelős", contact: "Tel: 0740-035178, E-mail: fjutka75@gmail.com" }
  ];

  return (
    <section className="max-w-7xl mx-auto p-6 text-gray-800">
      <h2 className="text-3xl font-bold text-center mt-10 text-red-600">A konferencia elnöksége</h2>
      
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        {vezetoseg.map((vezeto, index) => (
          <div key={index} className="mb-4 border-b pb-4 last:border-b-0">
            <h2 className="text-2xl font-bold text-red-600">{vezeto.title}</h2>
            <p className="text-lg text-gray-600">{vezeto.name} - {vezeto.position}</p>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-bold text-center mt-10 text-red-600">A konferencia szervező bizottságának elnöksége</h2>
      <div className="mt-4 bg-gray-50 p-6 rounded-lg shadow-md">
        {szervezok.map((szervezo, index) => (
          <div key={index} className="mb-4 border-b pb-4 last:border-b-0">
            <h2 className="text-2xl font-bold text-red-600">{szervezo.title}</h2>
            <p className="text-lg text-gray-600">{szervezo.name} - {szervezo.position}</p>
            <p className="text-sm text-gray-500 italic">{szervezo.contact}</p>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-bold text-center mt-10 text-red-600">A konferencia szervező bizottságának tagjai</h2>
      <div className="mt-4 bg-white p-6 rounded-lg shadow-md">
        {tagok.map((tag, index) => (
          <div key={index} className="mb-4 border-b pb-4 last:border-b-0">
            <h2 className="text-2xl font-bold text-red-600">{tag.name}</h2>
            <p className="text-lg text-gray-600">{tag.position}</p>
            <p className="text-sm text-gray-500 italic">{tag.contact}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Bizotsag;
