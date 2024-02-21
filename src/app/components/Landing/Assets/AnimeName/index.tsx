'use client';
import clsx from 'clsx'
import gsap from 'gsap'
import styles from './index.module.scss'
import type { CSSProperties } from 'react';

// Hooks
import { useGSAP } from '@gsap/react'
import { useMouse, useWindowSize } from '@uidotdev/usehooks';

// Components
import Image from 'next/image'

/**
 * @deprecated
 */
export function AnimeName() {
  const [mouse, ref] = useMouse<HTMLDivElement>();
  const windowSize = useWindowSize();

  useGSAP(() => {
    const q = gsap.utils.selector(ref.current)

    gsap.fromTo(ref.current, {
      top: -50,
      scale: .95,
      opacity: 0
    }, {
      top: 0,
      scale: 1,
      opacity: 1,
      duration: 1,
      delay: 1.5
    })

    gsap.fromTo(q('[data-title]'), {
      top: -50,
      scale: .95,
      opacity: 0
    }, {
      top: 0,
      scale: 1,
      opacity: 1,
      duration: 1,
      delay: 2
    })

    gsap.fromTo(q('[data-title]'), {
      text: "",
    }, {
      text: "Провождающая в последний путь Фрирен",
      duration: 3.2,
      delay: 1.8
    })
  })

  return <div
    ref={ref}
    className={styles.header}
    style={{
      '--x': mouse.x / (windowSize.width || 1),
      '--y': mouse.y / (windowSize.height || 1)
    } as CSSProperties & {
      '--x': number, '--y': number,
    }}
  >
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
    <p data-title>Провождающая в последний путь Фрирен</p>
  </div>
}