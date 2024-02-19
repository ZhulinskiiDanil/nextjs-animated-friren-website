'use client';
import gsap from 'gsap';
import styles from './index.module.scss'

// Components
import Image from 'next/image';

// Hooks
import { useGSAP } from '@gsap/react'
import { useMouse } from '@uidotdev/usehooks';
import { CSSProperties, useRef, useState } from 'react';

export function BackgroundIllustration() {
  const middleImage = useRef<null | HTMLDivElement>(null)
  const [middActive, setMiddActive] = useState(false)
  const [mouse, ref] = useMouse<HTMLDivElement>();

  useGSAP(() => {
    gsap.fromTo(middleImage.current, {
      width: 0,
      filter: 'grayscale(100%)'
    }, {
      width: '25%',
      filter: 'grayscale(0%)',
      duration: 1,
      delay: 1
    })
  })

  return <div
    ref={ref}
    className={styles.container}
    style={{
      '--x': mouse.x / window.innerWidth,
      '--y': mouse.y / window.innerHeight
    } as CSSProperties & {
      '--x': number, '--y': number,
    }}
  >
    <div className={styles.images}>
      <div className={styles.image} tabIndex={0}>
        <Image
          src="/images/friren_bg.png"
          alt="Picture of the author"
          objectFit='cover'
          quality={100}
          fill
        />
      </div>
      <div
        ref={middleImage}
        className={styles.image}
        tabIndex={0}
      >
        <video
          className={styles.video}
          src="/videos/anime-friren-footage.mp4"
          autoPlay
          muted
          loop
        ></video>
      </div>
      <div className={styles.image} tabIndex={0}>
        <Image
          src="/images/fern_bg.png"
          alt="Picture of the author"
          objectFit='cover'
          quality={100}
          fill
        />
      </div>
    </div>
  </div>
}