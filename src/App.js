
import { SectionWrapper, Download, Caratteristiche } from "./components";

import assets from './assets';
import styles from "./styles/Global";

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Compra e vendi Progetti sotto forma di NFTs"
        description="Crea e vendi i tuoi Progetti, unisciti a oltre 25+ milioni di utenti e crea il tuo Portafoglio NFT"

        showBtn

        mockupImg={assets.homeHero}
        banner="banner"
      />

      <SectionWrapper
        title="Interfaccia Utente Intuitiva"
        description="Design e interazione utente intuitiva, facile da usare e semplice da gestire"
        mockupImg={assets.homeCards}
        reverse
      />

      <Caratteristiche />

      <SectionWrapper
        title="Distribuzione Applicazione"
        description="Orion Ai utilizza Expo SDK. Permette di distribuire l'applicazione su più dispositivi. Il sito web è pubblicato su un host web decentralizzato chiamato IPFS."
        mockupImg={assets.feature}
        reverse
      />

      <SectionWrapper
        title="Un modo creativo per mostrare il negozio"
        description="L'app contiene due schermate: una contente la lista degli NFTs e l'altra contente le informazioni per ogni singolo NFT"
        
        mockupImg={assets.mockup}
        banner="banner02"
      />

      <Download />

      <div className={`px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04`}>
        <p className={`${styles.pText} ${styles.whiteText} ` }> 
    
          <span >OrionAI Development Team</span>
        </p>
      </div>
    </>
  );
}

export default App;
