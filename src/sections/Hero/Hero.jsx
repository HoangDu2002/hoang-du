import styles from './HeroStyles.module.css';
import heroImg from '../../assets/avata.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twirrerLight from '../../assets/twitter-light.svg';
import twirrerDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import instagramLight from '../../assets/instagram - dark.svg'; 
import instagramDark from '../../assets/instagram - light.svg';   
import facebookLight from '../../assets/facebook - dark.svg';   
import facebookDark from '../../assets/facebook - light.svg';     
import CV from '../../assets/CV Trịnh Lê Hoàng Dũ - En - Dev.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
   const { theme, toggleTheme } = useTheme();
   const themeIcon = theme === 'light' ? sun : moon;
   const twirrerIcon = theme === 'light' ? twirrerLight : twirrerDark;
   const githubIcon = theme === 'light' ? githubLight : githubDark;
   const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
   const instagramIcon = theme === 'light' ? instagramLight : instagramDark; 
   const facebookIcon = theme === 'light' ? facebookLight : facebookDark;     

   return (
     <section id="hero" className={styles.container}>
       <div className={styles.colorModeContainer}>
         <img 
           className={styles.hero}
           src={heroImg} 
           alt="Profile picture of Hoàng Dũ" 
         />
         <img
           className={styles.colorModeContainer}
           src={themeIcon}
           alt="Color mode"
           onClick={toggleTheme}
         />
       </div>
       <div className={styles.info}>
         <h1>Trịnh Lê
           <br />
           Hoàng Dũ
         </h1>
         <h2>Developer Intern</h2>
         <span>
           <a href="https://x.com/d_trnh/" target="_blank">
             <img src={twirrerIcon} alt="Tw icon" />
           </a>
           <a href="https://github.com/HoangDu2002/" target="_blank">
             <img src={githubIcon} alt="Gh icon" />
           </a>
           <a href="https://www.linkedin.com/in/d%C5%A9-tr%E1%BB%8Bnh-l%C3%AA-ho%C3%A0ng-9245b1300/" target="_blank">
             <img src={linkedinIcon} alt="Lk icon" />
           </a>
           <a href="https://www.instagram.com/hoang.du_/" target="_blank">
             <img src={instagramIcon} alt="Instagram icon" />
           </a>
           <a href="https://www.facebook.com/profile.php?id=100007716254804" target="_blank">
             <img src={facebookIcon} alt="Facebook icon" />
           </a>
         </span>
         <p className={styles.description}>
           Portfolio Website xây dựng dựa trên kham khảo và được thực hiện bởi Hoàng Dũ sử dụng Tool chính là React + Vite với ngôn ngữ HTML/CSS và Javascript
         </p>
         <a href={CV}>
           <button className="hover" download>
             Xem CV
           </button>
         </a>
       </div>
     </section>
   );
 }

export default Hero;
