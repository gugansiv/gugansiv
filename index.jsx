import React from 'react'

import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <div className={styles['header']}></div>
      <div className={styles['hero']}></div>
      <img
        src="https://images.unsplash.com/photo-1683009427540-c5bd6a32abf6?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwxfDF8YWxsfDF8fHx8fHwyfHwxNzA2NTc0NjI1fA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1500"
        alt="image"
        className={styles['image']}
      />
      <div className={styles['features']}></div>
      <div className={styles['pricing']}></div>
      <div className={styles['banner']}></div>
      <div className={styles['faq']}></div>
      <div className={styles['footer']}></div>
    </div>
  )
}

export default Home
