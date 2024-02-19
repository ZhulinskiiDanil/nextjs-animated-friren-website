import styles from "./page.module.scss";

// Components
import { Decor } from "./components/Landing/Decor";
import { AnimeName } from "./components/Landing/AnimeName";
import { BackgroundIllustration } from "@/app/components/Landing/BackgroundIllustration";
import { Friren } from "./components/Landing/Friren";

export default function Landing() {
  return (
    <main className={styles.main}>
      <Decor />
      <Friren />
      <AnimeName />
      <BackgroundIllustration />
    </main>
  );
}
