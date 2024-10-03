import { useTheme } from '../../common/ThemeContext';
import { useState, useEffect } from 'react';
import styles from './NavbarStyles.module.css';
import logoImg from '../../assets/logo2.png';
import CV from '../../assets/CV Trịnh Lê Hoàng Dũ - En - Dev.pdf';
import search_icon_light from '../../assets/search-w.png';
import search_icon_black from '../../assets/search-b.png'; 

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { theme } = useTheme(); 
  const [searchQuery, setSearchQuery] = useState(''); 
  const [searchHistory, setSearchHistory] = useState([]);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() === '') return; 
  
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
    window.open(googleSearchUrl, '_blank');

    const newHistory = [searchQuery, ...searchHistory].slice(0, 5); 
    setSearchHistory(newHistory);
    sessionStorage.setItem('searchHistory', JSON.stringify(newHistory));

    setSearchQuery('');
  };

  useEffect(() => {
    const savedHistory = JSON.parse(sessionStorage.getItem('searchHistory')) || [];
    setSearchHistory(savedHistory);

    const handleSmoothScroll = (e) => {
      e.preventDefault();
      const href = e.currentTarget.getAttribute('href');
      if (href) {
        const target = document.querySelector(href);
        const offset = 100; 

        if (target && target.id !== 'hero') {   
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = window.pageYOffset + elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        } else {
          window.scrollTo({
            top: 0, 
            behavior: 'auto' 
          });
        }
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  const handleInputFocus = () => {
    document.getElementById('searchInput').style.backgroundColor = theme === 'light' ? '#f0f8ff' : '#444';
  };

  const handleInputBlur = () => {
    document.getElementById('searchInput').style.backgroundColor = 'transparent';
  };

   return (
    <header className={styles.header}>
      <nav className={`${styles.navbar} ${theme === 'light' ? styles.lightTheme : styles.darkTheme}`}>
        <div className={styles.logo}>
          <a href={CV} target="_blank" rel="noopener noreferrer">
            <img src={logoImg} alt="Logo" className={styles.logoImage} />
          </a>
        </div>
        <div className={styles.searchBox}>
          <form onSubmit={handleSearchSubmit} className={styles.searchForm}>
            <input
              id="searchInput"
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              list="search-history"
            />
            <datalist id="search-history">
              {searchHistory.map((item, index) => (
                <option key={index} value={item} />
              ))}
            </datalist>
          </form>
        </div>
        <div className={styles.searchIcon} onClick={handleSearchSubmit}>
          <button type="submit" className={`${styles.searchButton} ${theme === 'light' ? styles.lightTheme : styles.darkTheme}`}>
            <img src={theme === 'light' ? search_icon_black : search_icon_light} alt="Search Icon" />
          </button>
        </div>
        <div className={styles.emptySpace}></div>
        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.navActive : ''}`}>
          <li><a href="#hero">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className={styles.burger} onClick={toggleMenu}>
          <div className={`${styles.line1} ${isMenuOpen ? styles.toggle : ''}`}></div>
          <div className={`${styles.line2} ${isMenuOpen ? styles.toggle : ''}`}></div>
          <div className={`${styles.line3} ${isMenuOpen ? styles.toggle : ''}`}></div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
