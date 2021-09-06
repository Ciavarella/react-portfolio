import styles from './Mpm.module.css';
import logoNeon from '../../assets/logoNeon.svg';

const Mpm = (): JSX.Element => {
  return (
    <div className={styles.mpmContainer} onClick={() => window.open('https://github.com/Ciavarella/mpm-extension-vscode')}>
      <img src={logoNeon} className={styles.img} alt="Music per Minute logo" />
      <h4>Music Per Minute</h4>
      <p>School project that is a Visual Studio Code extention that will play or pause the music on Spotify based on how fast you type.</p>
    </div>
  )
}

export default Mpm;
