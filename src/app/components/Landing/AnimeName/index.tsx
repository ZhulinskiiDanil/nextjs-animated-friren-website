import clsx from 'clsx'
import styles from './index.module.scss'

// Components
import Image from 'next/image'

export function AnimeName() {
  return <div className={styles.header}>
    <div className={clsx(styles.image, styles.stick)}>
      <Image
        src="/images/stick.png"
        alt="Stick"
        fill
      />
    </div>
    <div className={clsx(styles.image, styles.potion)}>
      <Image
        src="/images/potion.png"
        alt="Potion"
        fill
      />
    </div>
    <p>Проваждающая в последний путь Фрирен</p>
  </div>
}