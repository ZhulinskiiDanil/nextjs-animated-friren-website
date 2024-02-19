'use client';
import clsx from 'clsx'
import styles from './index.module.scss'
import { HTMLAttributes, useRef, useState } from 'react'
import type { Episode } from '@/app/ts/episode'

// Components
import { UIEpisode } from '@/app/components/UI/Episode'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export function EpisodesList(
  { className, ...props }: HTMLAttributes<HTMLDivElement>
) {
  const ref = useRef<null | HTMLDivElement>(null)
  const [episodes, setEpisodes] = useState<Episode[]>(() => [
    {
      id: 1,
      title: 'Edisode #1 – Tada-tatam',
      description: 'Edisode #1 – Tada-tatam',
      imageURL: '/images/friren_bg.png',
      progress: 25,
      saved: false
    },
    {
      id: 2,
      title: 'Edisode #2 – Tada-tatam',
      description: 'Edisode #2 – Tada-tatam',
      imageURL: '/images/fern_bg.png',
      progress: 50,
      saved: false
    },
    {
      id: 3,
      title: 'Edisode #3 – Tada-tatam',
      description: 'Edisode #3 – Tada-tatam',
      imageURL: '/images/bridge_bg.png',
      progress: 90,
      saved: false
    },
    {
      id: 4,
      title: 'Edisode #4 – Tada-tatam',
      description: 'Edisode #4 – Tada-tatam',
      imageURL: '/images/friren_bg.png',
      progress: 100,
      saved: true
    }
  ])

  useGSAP(() => {
    const target = ref.current
    const q = gsap.utils.selector(ref.current)
    const title = q('[data-title]')
    const episodes = q('[data-episode]')
    const titleText = q('[data-title] span')

    gsap.fromTo(ref.current, {
      scale: .95,
      bottom: -128,
      opacity: 0
    }, {
      scale: 1,
      bottom: 0,
      opacity: 1,
      duration: 1,
      delay: 1
    })

    gsap.fromTo(title, {
      top: 32,
      scale: .95,
      opacity: 0
    }, {
      top: 0,
      scale: 1,
      opacity: 1,
      duration: 1,
      delay: 1
    })

    gsap.fromTo(titleText, {
      text: ""
    }, {
      text: "Список серий",
      duration: 2,
      delay: 1
    })

    gsap.fromTo(episodes, {
      top: 16,
      scale: .96,
      opacity: 0
    }, {
      top: 0,
      scale: 1,
      opacity: 1,
      duration: .5,
      stagger: .1,
      delay: 1.5
    })
  })

  return <div
    ref={ref}
    className={clsx(styles.episodes, className)}
    {...props}
  >
    <h3 data-title className={styles.title}>
      <span>Список серий</span>
    </h3>
    <div className={styles.list}>
      {episodes.map(episode => (
        <UIEpisode
          key={episode.id}
          data={episode}
          data-episode
        />
      ))}
    </div>
  </div>
}