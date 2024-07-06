import styles from "./Advantages.module.scss";
const Advantages = () => {
  return (
    <div className={styles.contentAdvantagesLayout}>
      <span className={styles.advantagesContent}>
        <p className={styles.count}>20K+</p>
        <p className={styles.countBottom}>subscribers</p>
      </span>
      <span className={styles.advantagesContent}>
        <p className={styles.count}>19,5K</p>
        <p className={styles.countBottom}>successful cases</p>
      </span>
      <span className={styles.advantagesContent}>
        <p className={styles.count}>4.8/5</p>
        <p className={styles.countBottom}>rating</p>
      </span>
    </div>
  );
};

export default Advantages;
