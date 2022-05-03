import React from 'react'

import styles from '../styles/Global'
import assets from '../assets'

const GitUrl = 'https://github.com/ItaOrionAI/NFT-marketplace-mobile-app.git'

const Download = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.blackText}`}>
            Scarica il file sorgente
          </h1>
          <p className={`${styles.pText} ${styles.blackText}`}>
            Scarica gratuitamente tutto il codice da GitHub.
          </p>
        </div>
        <button 
          className={styles.btnPrimary}
          onClick={() => window.open(GitUrl, '_blank')}
        >
          Source Code
        </button>
        <div className={styles.flexCenter}>
          <img src={assets.scene} alt="download bg" className= {styles.fullImg} />
        </div>
      </div>
    </div>
  )
}

export default Download