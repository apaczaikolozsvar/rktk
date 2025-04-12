import  { useState } from "react";

const Eredmenyek = () => {
    const eredmenyek = {
        "Irodalomtudomány, nyelvészet szekció": [
          {
            helyezes: "1. díj",
            iskola: "Márton Áron Főgimnázium, Csíkszereda",
            tagok: ["Imre Karin Anett"],
          },
          {
            helyezes: "2. díj",
            iskola: "Bod Péter Tanítóképző Líceum, Kézdivásárhely",
            tagok: ["Majlát Ivett-Rebeka"],
          },
          {
            helyezes: "3. díj",
            iskola: "Bartók Béla Elméleti Liceum, Temesvár",
            tagok: ["Kaizler Károly Krisztián"],
          },
          {
            helyezes: "Dicséret",
            iskola: "Bod Péter Tanítóképző Líceum, Kézdivásárhely",
            tagok: ["Csoboth Kinga-Réka", "Gajdó Klaudia"],
          },
          {
            helyezes: "Dicséret",
            iskola: "Bod Péter Tanítóképző Líceum, Kézdivásárhely",
            tagok: ["Ardelean Georgiana-Renata", "Venczel Beáta"],
          },
        ],
        "Történelem és néprajz szekció": [
          {
            helyezes: "1. díj",
            iskola: "Bolyai Farkas Elméleti Liceum, Marosvásárhely",
            tagok: ["László Blanka", "Zsidó Emese Tímea"],
          },
          {
            helyezes: "2. díj",
            iskola: "Márton Áron Főgimnázium, Csíkszereda",
            tagok: ["Kenyeres Mátyás"],
          },
          {
            helyezes: "3. díj",
            iskola: "Bartók Béla Elméleti Líceum, Temesvár",
            tagok: ["Olah Anna"],
          },
          {
            helyezes: "Dicséret",
            iskola: "Bod Péter Tanítóképző Líceum, Kézdivásárhely",
            tagok: ["Timár Eszter", "Ciuraru Daniela"],
          },
          {
            helyezes: "Dicséret",
            iskola: "Apáczai Csere János Elméleti Líceum, Kolozsvár",
            tagok: ["Kovács Tibor"],
          },
          {
            helyezes: "Dicséret",
            iskola: "Nagykárolyi Elméleti Líceum, Nagykároly",
            tagok: ["Drágos Rolland Gabriel"],
          },
        ],
        "Fizika, informatika és műszaki tudományok szekció": [
          {
            helyezes: "1. díj",
            iskola: "Apáczai Csere János Elméleti Líceum, Kolozsvár",
            tagok: ["Tesnádi Tamás"],
          },
          {
            helyezes: "2. díj",
            iskola: "János Zsigmond Unitárius Főgimnázium, Kolozsvár",
            tagok: ["Szenkovics Ervin"],
          },
          {
            helyezes: "3. díj",
            iskola: "Bolyai Farkas Elméleti Liceum, Marosvásárhely",
            tagok: ["Gáll Ádám", "Szőcs Balázs"],
          },
          {
            helyezes: "Dicséret",
            iskola: "Apáczai Csere János Elméleti Líceum, Kolozsvár",
            tagok: ["Sütő Anna Ágota", "Dezső Janka"],
          },
        ],
        "Biológia és környezettudomány szekció": [
          {
            helyezes: "1. díj",
            iskola: "Bolyai Farkas Elméleti Liceum, Marosvásárhely",
            tagok: ["Pávai-Marossy Kinga", "Porkoláb Csenge-Mikolt"],
          },
          {
            helyezes: "2. díj",
            iskola: "Bethlen Gábor Kollégium, Nagyenyed",
            tagok: ["Balogh Anna", "Székely István Attila"],
          },
          {
            helyezes: "3. díj",
            iskola: "Apáczai Csere János Elméleti Líceum, Kolozsvár",
            tagok: ["Kozma Julia", "Lukács Mátyás Ágoston"],
          },
          {
            helyezes: "Dicséret",
            iskola: "Kolozsvári Református Kollégium",
            tagok: ["Ladányi Laura"],
          },
        ],
        "Pszichológia és pedagógia szekció": [
          {
            helyezes: "1. díj",
            iskola: "Apáczai Csere János Elméleti Líceum, Kolozsvár",
            tagok: ["Kovács Dóra-Brigitta"],
          },
          {
            helyezes: "2. díj",
            iskola: "Benedek Elek Pedagógiai Líceum, Székelyudvarhely",
            tagok: ["Ambrus-Torzsa Krisztián"],
          },
          {
            helyezes: "3. díj",
            iskola: "Bethlen Gábor Kollégium, Nagyenyed",
            tagok: ["Dimén Balázs"],
          },
          {
            helyezes: "Dicséret",
            iskola: "Bethlen Gábor Kollégium, Nagyenyed",
            tagok: ["Vass Elza-Brigitta", "Szabó Ingrid-Imelda"],
          },
          {
            helyezes: "Dicséret",
            iskola: "Marosvásárhelyi Református Kollégium",
            tagok: ["Henter Jónás", "Szabó Kristóf"],
          },
        ],
        "Társadalom és kultúra szekció": [
          {
            helyezes: "1. díj",
            iskola: "Márton Áron Főgimnázium, Csíkszereda",
            tagok: ["Ferencz Kincső", "Ráduly Szilárd"],
          },
          {
            helyezes: "2. díj",
            iskola: "Bartók Béla Elméleti Líceum, Temesvár",
            tagok: ["Barabás Evelin"],
          },
          {
            helyezes: "3. díj",
            iskola: "Bethlen Gábor Kollégium, Nagyenyed",
            tagok: ["Kerekes Dóra"],
          },
          {
            helyezes: "Dicséret",
            iskola: "Bethlen Gábor Kollégium, Nagyenyed",
            tagok: ["Varga Áron", "Kiss Boglárka"],
          },
          {
            helyezes: "Dicséret",
            iskola: "Salamon Ernő Elméleti Líceum, Gyergyószentmiklós",
            tagok: ["Madarász Rita"],
          },
          {
            helyezes: "Dicséret",
            iskola: "Bethlen Gábor Kollégium, Nagyenyed",
            tagok: ["Kerekes Dávid", "Lakatos Ana-Maria"],
          },
        ],
      };

  const pontszamok = {
    "Irodalomtudomány, nyelvészet szekció": [
      ["891", "99,66"],
      ["743", "94,66"],
      ["860", "93,5"],
      ["128", "91,5"],
      ["166", "89"],
      ["101", "85"],
      ["305", "78"],
    ],
    "Történelem és néprajz szekció": [
        ["442", "100"],
        ["318", "98"],
        ["267", "95"],
        ["999", "91"],
        ["347", "90"],
        ["414", "88"],
        ["218", "81"],
        ["231", "80"],
        ["182", "78"],
      ],
      "Fizika, informatika és műszaki tudományok szekció": [
        ["341", "92"],
        ["564", "91,66"],
        ["650", "86,66"],
        ["468", "85,33"],
        ["802", "77"],
      ],
    "Biológia és környezettudomány szekció": [
      ["120", "100"],
      ["187", "97"],
      ["523", "94"],
      ["690", "92"],
      ["578", "91"],
      ["354", "88,6"],
    ],
    
    "Pszichológia és pedagógia szekció": [
      ["369", "100"],
      ["584", "98"],
      ["652", "97"],
      ["782", "96"],
      ["379", "96"],
      ["140", "75"],
      ["708", "75"],
      ["733", "73"],
    ],
   
    "Társadalom és kultúra szekció": [
      ["847", "98"],
      ["156", "95"],
      ["438", "92"],
      ["399", "91"],
      ["915", "91"],
      ["791", "88"],
      ["712", "78"],
    ],
  };

  const [nyitottEredmeny, setNyitottEredmeny] = useState<string | null>(null);
  const [nyitottPontszam, setNyitottPontszam] = useState<string | null>(null);

  return (
    <div className="min-h-screen p-6 rounded-3xl bg-[rgb(209,40,52)] text-white font-sans">
      <h1 className="text-4xl font-bold mb-10 text-center">RKTK 2025 Díjazottak</h1>

      {/* Eredmények */}
      {Object.entries(eredmenyek).map(([szekcio, lista]) => (
        <div key={szekcio} className="mb-8">
          <button
            onClick={() => setNyitottEredmeny(nyitottEredmeny === szekcio ? null : szekcio)}
            className="w-full text-left bg-white text-[rgb(209,40,52)] font-bold p-4 rounded-xl shadow-md hover:bg-gray-100"
          >
            {szekcio}
          </button>
          {nyitottEredmeny === szekcio && (
            <table className="w-full mt-4 text-sm md:text-base table-auto border-separate border-spacing-y-2 bg-white text-gray-900 rounded-xl p-4">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="p-3 rounded-r-lg">Helyezés</th>
                  <th className="p-3 rounded-l-lg">Csapattagok</th>
                  <th className="p-3">Iskola</th>
                </tr>
              </thead>
              <tbody>
                {lista.map((csapat, index) => (
                  <tr key={index} className="bg-gray-50 hover:bg-gray-100 shadow-sm rounded-lg">
                    <td className="p-3 font-semibold">{csapat.helyezes}</td>
                    <td className="p-3">
                      <ul className="list-disc list-inside">
                        {csapat.tagok.map((tag, i) => (
                          <li key={i}>{tag}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="p-3">{csapat.iskola}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      ))}

      {/* Pontszámok */}
      <h2 className="text-3xl font-bold mt-12 mb-6 text-center">Pontszámok</h2>
      {Object.entries(pontszamok).map(([szekcio, lista]) => (
        <div key={szekcio} className="mb-8">
          <button
            onClick={() => setNyitottPontszam(nyitottPontszam === szekcio ? null : szekcio)}
            className="w-full text-left bg-white text-[rgb(209,40,52)] font-bold p-4 rounded-xl shadow-md hover:bg-gray-100"
          >
            {szekcio}
          </button>
          {nyitottPontszam === szekcio && (
            <table className="w-full mt-4 text-sm md:text-base table-auto border-separate border-spacing-y-2 bg-white text-gray-900 rounded-xl p-4">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="p-3">Kód</th>
                  <th className="p-3">Pontszám</th>
                </tr>
              </thead>
              <tbody>
                {lista.map((elem, index) => (
                  <tr key={index} className="bg-gray-50 hover:bg-gray-100 shadow-sm rounded-lg">
                    <td className="p-3">{elem[0]}</td>
                    <td className="p-3">{elem[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      ))}
    </div>
  );
};

export default Eredmenyek;
