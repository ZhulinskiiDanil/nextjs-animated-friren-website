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
      href: 'https://jut.su/sousou-no-frieren/episode-1.html',
      title: 'Конец приключений',
      description: 'Конец приключений',
      imageURL: 'https://gen.jut.su/uploads/preview/969/0/0/1_1696098545.jpg',
      episode: 1,
      progress: 25,
      saved: false
    },
    {
      id: 2,
      href: 'https://jut.su/sousou-no-frieren/episode-2.html',
      title: 'Дело-то вовсе не в магии!',
      description: 'Дело-то вовсе не в магии',
      imageURL: 'https://gen.jut.su/uploads/preview/969/0/0/2_1696099752.jpg',
      episode: 2,
      progress: 50,
      saved: false
    },
    {
      id: 3,
      href: 'https://jut.su/sousou-no-frieren/episode-3.html',
      title: 'Магия для убийства',
      description: 'Магия для убийства',
      imageURL: 'https://gen.jut.su/uploads/preview/969/0/0/3_1696100154.jpg',
      episode: 3,
      progress: 90,
      saved: false
    },
    {
      id: 4,
      href: 'https://jut.su/sousou-no-frieren/episode-4.html',
      title: 'Пристанище душ',
      description: 'Пристанище душ',
      imageURL: 'https://gen.jut.su/uploads/preview/969/0/0/4_1696101664.jpg',
      episode: 4,
      progress: 100,
      saved: false
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
      text: "Episodes list",
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
      <span>Episodes list</span>
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