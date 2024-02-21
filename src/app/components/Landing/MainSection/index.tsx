'use client';

import { CSSProperties, useState } from "react"
import { useMouse, useWindowSize } from "@uidotdev/usehooks";

import { Decor } from "@/app/components/Landing/Assets/Decor"
import { EpisodesList } from "@/app/components/Landing/Assets/EpisodesList"
import { Friren } from "@/app/components/Landing/Assets/Friren"
import { MangaBackground } from "@/app/components/Landing/Assets/MangaBackground";
import { SideMenu } from "@/app/components/Landing/Assets/SideMenu";
import { TextPlugin } from "gsap/all"
import { Texts } from "@/app/components/Landing/Assets/Texts";
import clsx from "clsx"
import gsap from "gsap"
import styles from "./index.module.scss"
import { useGSAP } from "@gsap/react"

export default function MainSection() {
  const [mouse] = useMouse();
  const [date, setDate] = useState<null | Date>(null)
  const windowSize = useWindowSize();

  const day = date && date.toLocaleDateString('ru', { day: 'numeric' })
  const month = date && date.toLocaleDateString('ru', { month: 'long' })
  const year = date && date.toLocaleDateString('ru', { year: 'numeric' })

  useGSAP(() => {
    setDate(new Date())

    gsap.registerPlugin(TextPlugin)
  })

  return (
    <section
      className={styles.main}
      style={{
        '--x': mouse.x / (windowSize.width || 1),
        '--y': mouse.y / (windowSize.height || 1)
      } as CSSProperties & {
        '--x': number, '--y': number,
      }}
    >
      {/* <BackgroundIllustration /> */}
      <MangaBackground />
      <Decor />
      <Friren className={styles.person} />
      <SideMenu
        className={clsx(styles.sidemenu, styles.left)}
        items={[
          { name: 'Telegram', href: 'https://t.me/ZhulinskyDanil' },
          { name: 'GitHub', href: 'https://github.com/ZhulinskiiDanil' }
        ]}
      />
      <SideMenu
        className={clsx(styles.sidemenu, styles.right)}
        items={[
          { name: day || '' },
          { name: year || '' },
          { name: month || '' }
        ]}
      />
      {/* <AnimeName /> */}
      <Texts text="Sousou no Frieren" />
      <EpisodesList className={styles.episodes} />
    </section>
  );
}
