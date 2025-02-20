import React, { useState } from "react";
import SectionCard from "./SzekcioKartya";

const Szekciok: React.FC = () => {
  const [openSectionIndex, setOpenSectionIndex] = useState<number | null>(null);

  const sections = [
    {
      title: "Irodalomtudomány, nyelvészet",
      participants: [
        {project: "A sötétség lángba vetett lényei", name: "Datki-Turóczy Karola ", secondName: "Ilyés Anna", teacher: "Tankó Kamilla ", school: "Bod Péter Tanítóképző " },
        {project: "Rejtőzködés vagy önkifejezés? – A költői maszkok szerepe Kovács András Ferenc lírájában a középiskolás diákok olvasatában", name: "Imre Karin Anett", secondName: "", teacher: "dr. Tódor Imre ", school: "Márton Áron Főgimnázium" },
        {project: "A 16–22. ÉVES TEMESVÁRI MAGYAR FIATALOK NYELVHASZNÁLATA, NYELVI DURVASÁGAI ÉS CSÚNYA KIFEJEZÉSEI", name: "Kaizler Károly Krisztián", secondName: "", teacher: "dr. Balla Lóránt", school: "Bartók Béla Elméleti Líceum, Temesvár" },
        {project: "Felnőni embertelen időkben: az énkeresés ábrázolása Tompa Andrea Sokszor nem halunk meg és A hóhér háza című regényeiben", name: "Péter Hanna", secondName: "", teacher: "Dr. Balla Lóránt", school: "Bartók Béla Elméleti Líceum, Temesvár" },
        {project: "Lánytörténetek az üvegbúra alatt - Női identitás a hippimozgalomban női írók művein keresztül", name: "Csoboth Kinga-Réka", secondName: "Gajdó Klaudia", teacher: "Dr. Deák Ferenc Lóránd", school: "Bod Péter Tanítóképző" },
        {project: "A nők identitáskeresése a zsidó származás tükrében Tompa Andrea műveiben: Sorsok és szerepek", name: "Majlát Ivett-Rebeka", secondName: "", teacher: "Dr. Deák Ferenc Lóránd", school: "Bod Péter Tanítóképző" },
        {project: "Georgiana Ardelean Tanártípusok ábrázolása a kortárs alkotásokban (irodalomban és filmművészetben)", name: "Ardelean Georgiana-Renata", secondName: "Venczel Beáta", teacher: "Dr. Deák Ferenc Lóránd", school: "Bod Péter Tanítóképző" },
      ]
    },
    {
      title: "Történelem és néprajz",
      participants: [
        {project: ",,Régi szokás szerint…” Szakrális tradíciók a homoródalmási unitáriusok körében", name: "Kenyeres Mátyás", secondName: "", teacher: "Csonta Noémi", school: "Márton Áron Főgimnázium" },
        {project: "Asszonysors a vajdahunyadi bukovinai székelyek körében", name: "Gergely Albert", secondName: "", teacher: "Selyem Tünde", school: "János Zsigmond Unitárius Kollégium" },
        {project: "A néptánc és népzene szerepének változása Vajdakamarás közösségi életében", name: "Székely Tivadar", secondName: "", teacher: "Selyem Tünde", school: "János Zsigmond Unitárius Kollégium" },
        {project: "Egy néptánccsoport születése és küldetése", name: "Kovács Barbara-Henrietta", secondName: "Héjja Beáta", teacher: "Dr. Deák Ferenc Lóránd", school: "Bod Péter Tanítóképző" },
        {project: "Fény a sötétségben", name: "Olah Anna", secondName: "", teacher: "Fodor Enikő", school: "Bartók Béla Elméleti Líceum" },
        {project: "Paradigmaváltás a Tamási Áron Színházban", name: "Ciuraru Daniela", secondName: "Timár Eszter", teacher: "Dr. Deák Ferenc Lóránd", school: "Bod Péter Tanítóképző" },        
      ]
    },
    {
      title: "Pszichológia",
      participants: [
        {project: "Digitális fogyasztás és szociabilitás a Covid tükrében", name: "Henter Jónás", secondName: "Szabó Kristóf", teacher: "Márton Csilla", school: "Marosvásárhelyi Református Kollégium" },
        {project: "A SZAMOSÚJVÁRI MAGYAR TANNYELVŰ OKTATÁSBAN RÉSZTVEVŐ KÖZÉPISKOLÁS DIÁKOK SZABADIDŐTÖLTÉSI SZOKÁSAI", name: "Fodor Nóra", secondName: "Vigh Nikol-Vivien", teacher: "Pávai Eugén", school: "Kemény Zsigmond Elméleti Líceum" },
        {project: "Halálos ösztönök: a kamaszgyilkosok rejtett hajlamai", name: "Akácos Szende-Bernadett", secondName: "Kiss Réka", teacher: "Tankó Kamilla", school: "Bod Péter Tanítóképző" },
        {project: "Középiskolás diákok tanulmányi eredményeit befolyásoló változók pszichometriai meghatározása", name: "Ambrus-Torzsa Krisztián", secondName: "", teacher: "Dr Halász Gábor ", school: "Benedek Elek Pedagógiai Líceum" },
        {project: "Behálózva-A problémás internethasználat és az önértékelés közötti kapcsolat 15-19 éves fiatalok körében", name: "Kovács Dóra-Brigitta", secondName: "", teacher: "Simon Brigitta", school: "Apáczai Csere János Elméleti Líceum" },
        {project: "Érzelmek a színpadon és mögötte", name: "Farkas-Erdély Kinga-Tímea", secondName: "", teacher: "dr. Erdei Ildikó", school: "Bartók Béla Elméleti Líceum" },
        {project: "„A valósággal az a gáz, hogy nincsen hozzá háttérzene” Akkezdet Phiai, A 90’ es évek problémáinak aktualitása a Z generációsok körében", name: "Dimén Balázs", secondName: "", teacher: "Nagy Egon", school: "Bethlen Gábor Kollégium, Nagyenyed" },
        {project: "Ébren a Félelmeinkkel: Szorongás, Álmatlanság és a Képernyők árnyéka", name: "Vass Elza-Brigitta", secondName: "Szabó Ingrid-Imelda", teacher: "Tóth Tünde", school: "Bethlen Gábor Kollégium, Nagyenyed" },
  
      ]
    },
    {
      title: "Társadalom és kultúra",
      participants: [
        {project: "Amire az irodalomtanárok nem mindig képesek, azt megoldja majd a TikTok: a #BookTok hatása az olvasási szokásokra", name: "Kerekes Dóra", secondName: "", teacher: "Nagy Egon", school: "Bethlen Gábor Kollégium" },
        {project: "Feledésből a köztudatba – Kapcsolati pontok a diákság és Kőrösi Csoma Sándor élete között", name: "Varga Áron", secondName: "Kiss Boglárka", teacher: "Fodor Brigitta", school: "Bethlen Gábor Kollégium" },
        {project: "Irodalomoktatás a romániai magyar közoktatásban ", name: "Kovács Hunor", secondName: "", teacher: "Dr. Rancz Teréz ", school: "Nagy Mózes Főgimnázium" },
        {project: "Jövőkép és karrierálmok külföldön vagy belföldön? Középiskolások továbbtanulási döntései", name: "Ferencz Kincső", secondName: "Ráduly Szilárd", teacher: "Dr. Tódor Imre", school: "Márton Áron Főgimnázium" },
        {project: "A romániai elektromos áram piacának partikularitása a holtteher veszteség tükrében", name: "Bálint Csongor", secondName: "", teacher: "Bálint Csaba", school: "Tamási Áron Elméleti Líceum" },
        {project: "A múzeum, ami túlélt háborúkat: A Gelei József múzeum kronológiája", name: "Gazda Imola Flóra", secondName: "", teacher: "Szekernyés Réka", school: "János Zsigmond Unitárius Kollégium" },
        {project: "Generációk a munkahelyen: munkamorál és a munkával kapcsolatos életfelfogás vizsgálata", name: "Barabás Evelin", secondName: "", teacher: "Incze Erika", school: "Bartók Béla Elméleti Líceum" },
        
      ]
    },
    {
      title: "Biológia és környezettudomány szekció",
      participants: [
        {project: "A zöld kukorica-levéltetű evolúciós válasza a klímaváltozásra", name: "LADÁNYI LAURA", secondName: "", teacher: "Mihályfalvi Katalin", school: "KOLOZSVÁRI REFORMÁTUS KOLLÁGIUM" },
        {project: "Evolúciós törzsfák a fajok közötti kapcsolatok feltárásában", name: "Sütő Boróka-Júlia", secondName: "Turos Orsolya", teacher: "József Éva", school: "Bolyai Farkas Elméleti Líceum" },
        {project: "Titokzatos metszetek nyomában", name: "Pávai-Marossy Kinga", secondName: "Porkoláb Csenge-Mikolt", teacher: "József Éva", school: "Bolyai Farkas Elméleti Líceum" },
        {project: "Mit szívnak az apáczaisok :) ", name: "Kozma Julia", secondName: "Lukács Mátyás Ágoston", teacher: "Geváld Júlia", school: "Apáczai Csere János Elméleti Líceum, Kolozsvár" },
        {project: "Hogyan formálják étrendjüket a fiatalok?", name: "Balogh Anna", secondName: "Székely István Attila", teacher: "Szegedi Ervin", school: "Bethlen Gábor Kollégium" },
        {project: "Szépségápolás természetesen, avagy az emulgeálószerek helyettesítési lehetőségei a kozmetikumokban", name: "Popper Emma Zsófia", secondName: "Haizer Henrietta", teacher: "Puskás Ágnes", school: "Ady Endre Elméleti Líceum Nagyvárad" },
        
      ]
    },
    {
      title: "Matematika, fizika és műszaki tudományok szekció",
      participants: [
        {project: "Hidrogénes energiatárolás", name: "Gáll Ádám", secondName: "Szőcs Balázs", teacher: "Szász Ágota Judit", school: "Bolyai Farkas Elméleti Líceum" },
        {project: "Az elektromágnesben fellépő kölcsönhatások vizsgálata", name: "Nagy David Kristof", secondName: "", teacher: "Viorel Mititean", school: "Emanuil Gojdu Főgimnázium" },
        {project: "A logikus gondolkodás és a matematika összefüggése", name: "Madarász Rita", secondName: "", teacher: "Selyem Edit", school: "Salamon Ernő Elméleti Líceum" },
        {project: "Smart Pill Dispenser", name: "Sütő Anna Ágota", secondName: "Dezső Janka", teacher: "Geváld Júlia", school: "Apáczai Csere János Elméleti Líceum" },
        {project: "Elektromágneses tenger", name: "Hadnagy Anita", secondName: "Varga Vivien Hanna", teacher: "Herczeg Ágnes", school: "János Zsigmond Unitárius Főgimnázium" },
        {project: "Aqua Robot", name: "Tesnádi Tamás", secondName: "", teacher: "Geváld Júlia", school: "Apáczai Csere János Elméleti Líceum" },
        {project: "Homokdomb-lavinák vizsgálata", name: "Szenkovits Ervin", secondName: "", teacher: "Popa Márta", school: "János Zsigmond Unitárius Kollégium" },
        
      ]
    },
    // További szekciók...
  ];

  const handleSectionClick = (index: number) => {
    setOpenSectionIndex(openSectionIndex === index ? null : index); // Toggle between opening and closing
  };

  const handleCloseSection = () => {
    setOpenSectionIndex(null); // Close the current open section
  };
  

  return (
    <section className="max-w-7xl mx-auto p-6 text-gray-800">
      <h1 className="text-5xl font-extrabold text-center text-[rgb(209,40,52)]">A konferencia szekciói</h1>
      <p className="mt-4 text-lg text-center text-gray-600">Ismerkedj meg a szekciókkal és résztvevőikkel.</p>

      <div className="mt-8 space-y-8">
        {sections.map((section, index) => (
          <SectionCard
            key={index}
            title={section.title}
            participants={section.participants}
            isOpen={openSectionIndex === index}
            onClick={() => handleSectionClick(index)} // Trigger the section open/close
            onClose={handleCloseSection}
          />
        ))}
      </div>
    </section>
  );
};

export default Szekciok;
