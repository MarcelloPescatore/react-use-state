import languages from "../db/languages";
import Buttons from "./buttons/Buttons";
import Descriptions from "./descriptions/Descriptions";
import {useState} from 'react'

export default function AppMain() {

    const [selectedIndex, setSelectedIndex] = useState (null)

    return (
        <main>
            <div className="container-buttons">
                {languages.map((language, index) =>  <Buttons title={language.title} onClick={() => setSelectedIndex(index)} className={selectedIndex === index ? 'active' : 'off'}/>)}
            </div>
            
            <div className="container-description">
                {selectedIndex != null ? (
                    <>
                        <h2>{languages[selectedIndex].title}</h2>
                        <Descriptions description={languages[selectedIndex].description }/>
                    </>
                ) : (
                    <Descriptions description="Nessun linguaggio selezionato" />
                )}
            </div>
        </main>
    )
}