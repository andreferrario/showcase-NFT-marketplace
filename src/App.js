
import { SectionWrapper, Download, Caratteristiche } from "./components";

import assets from './assets';
import styles from "./styles/Global";

const App = () => {
  return (
    <>
      <SectionWrapper
        title="You own store of Nifty NFTs. Start Selling & Growing"
        description="Buy, store, collect NFTS, exchange & earn crypto. Join 25+ uinsg Orion AI"

        showBtn

        mockupImg={assets.homeHero}
        banner="banner"
      />

      <SectionWrapper
        title="Smart User Interface Marketplace"
        description="Experience a bettery UI of OrionAI NFT Marketplace. Smooth constant colors of fluent Ui desgin"
        mockupImg={assets.homeCards}
        reverse
      />

      <Caratteristiche />

      <SectionWrapper
        title="Deployment"
        description="Orion Ai è costruitra utilizzando Expo SDK. Per più informazioni visita il sito di Expo, "
        mockupImg={assets.feature}
        reverse
      />

      <SectionWrapper
        title="Creative way to showcase the store"
        description="The app contains two screen. the first contain all nft of the store, the second contain the nft of the store selected"
        
        mockupImg={assets.mockup}
        banner="banner02"
      />

      <Download />

      <div className={`px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04`}>
        <p className={`${styles.pText} ${styles.whiteText}`}> 
          Made WIth Love By {" "}
          <span className={"bold"}>OrionAI development tam</span>
        </p>
      </div>
    </>
  );
}

export default App;
