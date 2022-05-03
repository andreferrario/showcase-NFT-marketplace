import React from 'react'

import assets from '../assets'

import styles from '../styles/Global'

const FeatureCard = ({  iconUrl, iconText }) => (
  <div className={styles.featureCard} >
    <img src={iconUrl} alt={iconText} className={styles.featureImg}/>
    <p className={styles.featureText}>{iconText}</p>
  </div>
  
  
  )

const Caratteristiche = () => {
  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
        <div className={` ${styles.subSection} flex-col text-center`}>
          <div>
            <h1 className={`${styles.h1Text} ${styles.whiteText}`}>
              Tecnologia
              </h1>
            <p className={`${styles.pText} ${styles.whiteText}`}>
              OrionAI è stata sviluppata usanto una tecnologia multi-piattaforma, che permette di essere utilizzata da più sistemi operativi. Questa tencologia è React Native 
            </p>
          </div>
          
          <div className={styles.flexWrap}>
            <FeatureCard iconUrl={assets.react} iconText="React Native" />
            <FeatureCard iconUrl={assets.javascript} iconText="Javascript" />
          </div>
        </div>
    </div>
  )
}

export default Caratteristiche