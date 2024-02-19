import styles from "./page.module.scss";

// Components
import { Decor } from "./components/Landing/Decor";
import { AnimeName } from "./components/Landing/AnimeName";
import { BackgroundIllustration } from "@/app/components/Landing/BackgroundIllustration";

export default function Landing() {
  return (
    <main className={styles.main}>
      <Decor />
      <AnimeName />
      <BackgroundIllustration />
    </main>
  );
}
