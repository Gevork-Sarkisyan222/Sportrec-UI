import React, { useState } from 'react';
import './menu.scss';
import logo from '../../../images/logo.svg';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import userIcon from '../../../images/user.svg';
import MenuIcon from '@mui/icons-material/Menu';
import languageIcon from '../../../images/russia-icon.svg';
import englishIcon from '../../../images/english.svg';
import franceIcon from '../../../images/france.svg';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

interface propsTypes {
  handleCloseMenu: () => void;
}

const Menu: React.FC<propsTypes> = ({ handleCloseMenu }) => {
  const [openLanguage, setOpenLanguage] = useState(false);

  const handleOpenLanguage = () => {
    setOpenLanguage(!openLanguage);
  };

  return (
    <div className="menu-wrapper">
      <div className="top-section">
        <div className="logo">
          <div className="dot"></div>
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <CloseIcon
          sx={{ color: '#7B7EA5', cursor: 'pointer' }}
          onClick={handleCloseMenu}
          className="close-icon"
        />
      </div>
      <ul className="links">
        <li className="link">
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.13135 14.75V9.2C6.13135 8.77996 6.13135 8.56994 6.2131 8.40951C6.285 8.26839 6.39974 8.15365 6.54086 8.08175C6.70129 8 6.91131 8 7.33135 8H9.43135C9.85139 8 10.0614 8 10.2218 8.08175C10.363 8.15365 10.4777 8.26839 10.5496 8.40951C10.6314 8.56994 10.6314 8.77996 10.6314 9.2V14.75M0.881348 6.125L7.66135 1.04C7.91954 0.846354 8.04864 0.749532 8.19043 0.712209C8.31558 0.679264 8.44712 0.679264 8.57228 0.712209C8.71406 0.749532 8.84316 0.846355 9.10135 1.04L15.8814 6.125M2.38135 5V12.35C2.38135 13.1901 2.38135 13.6101 2.54484 13.931C2.68865 14.2132 2.91812 14.4427 3.20037 14.5865C3.52123 14.75 3.94127 14.75 4.78135 14.75H11.9814C12.8214 14.75 13.2415 14.75 13.5623 14.5865C13.8446 14.4427 14.0741 14.2132 14.2179 13.931C14.3814 13.6101 14.3814 13.1901 14.3814 12.35V5L9.82135 1.58C9.30496 1.19271 9.04677 0.999064 8.7632 0.924418C8.5129 0.858528 8.2498 0.858528 7.9995 0.924418C7.71593 0.999064 7.45774 1.19271 6.94135 1.58L2.38135 5Z"
              stroke="#06082C"
              stroke-width="1.35"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>Лента</span>
        </li>
        <li className="link">
          <svg
            width="16"
            height="18"
            viewBox="0 0 16 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.3816 6.75V4.5C11.3816 2.84315 10.0385 1.5 8.38163 1.5C6.72477 1.5 5.38162 2.84315 5.38162 4.5V6.75M2.07563 7.76397L1.62563 12.564C1.49768 13.9287 1.43371 14.6111 1.66016 15.1382C1.8591 15.6012 2.20771 15.984 2.65014 16.2253C3.15377 16.5 3.83915 16.5 5.20991 16.5H11.5533C12.9241 16.5 13.6095 16.5 14.1131 16.2253C14.5555 15.984 14.9042 15.6012 15.1031 15.1382C15.3295 14.6111 15.2656 13.9287 15.1376 12.564L14.6876 7.76397C14.5796 6.61151 14.5256 6.03528 14.2664 5.59962C14.0381 5.21594 13.7009 4.90883 13.2976 4.71738C12.8396 4.5 12.2609 4.5 11.1033 4.5L5.65991 4.5C4.50239 4.5 3.92363 4.5 3.46569 4.71738C3.06237 4.90883 2.72513 5.21594 2.49687 5.59962C2.23769 6.03528 2.18367 6.61151 2.07563 7.76397Z"
              stroke="#9395B8"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>Маркетплейс</span>
        </li>
        <li className="link">
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15.8813 14.75V13.25C15.8813 11.8521 14.9253 10.6775 13.6313 10.3445M11.0063 1.46807C12.1058 1.91311 12.8813 2.99098 12.8813 4.25C12.8813 5.50902 12.1058 6.58689 11.0063 7.03193M12.1313 14.75C12.1313 13.3522 12.1313 12.6533 11.903 12.1019C11.5985 11.3669 11.0145 10.7828 10.2794 10.4784C9.72808 10.25 9.02917 10.25 7.63135 10.25H5.38135C3.98352 10.25 3.28461 10.25 2.7333 10.4784C1.99821 10.7828 1.41419 11.3669 1.10971 12.1019C0.881348 12.6533 0.881348 13.3522 0.881348 14.75M9.50635 4.25C9.50635 5.90685 8.1632 7.25 6.50635 7.25C4.84949 7.25 3.50635 5.90685 3.50635 4.25C3.50635 2.59315 4.84949 1.25 6.50635 1.25C8.1632 1.25 9.50635 2.59315 9.50635 4.25Z"
              stroke="#9395B8"
              stroke-width="1.35"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>Рейтинги</span>
        </li>
        <li className="link">
          <svg
            width="17"
            height="18"
            viewBox="0 0 17 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.38135 11.25C5.89607 11.25 3.88135 9.23528 3.88135 6.75V2.58333C3.88135 2.27295 3.88135 2.11775 3.92658 1.99348C4.0024 1.78516 4.16651 1.62105 4.37483 1.54523C4.4991 1.5 4.65429 1.5 4.96468 1.5H11.798C12.1084 1.5 12.2636 1.5 12.3879 1.54523C12.5962 1.62105 12.7603 1.78516 12.8361 1.99348C12.8813 2.11775 12.8813 2.27295 12.8813 2.58333V6.75C12.8813 9.23528 10.8666 11.25 8.38135 11.25ZM8.38135 11.25V13.5M12.8813 3H14.7563C15.1058 3 15.2805 3 15.4184 3.05709C15.6021 3.13321 15.7481 3.27922 15.8243 3.46299C15.8813 3.60082 15.8813 3.77554 15.8813 4.125V4.5C15.8813 5.19748 15.8813 5.54622 15.8047 5.83234C15.5966 6.6088 14.9901 7.21528 14.2137 7.42333C13.9276 7.5 13.5788 7.5 12.8813 7.5M3.88135 3H2.00635C1.65689 3 1.48216 3 1.34434 3.05709C1.16056 3.13321 1.01456 3.27922 0.938438 3.46299C0.881348 3.60082 0.881348 3.77554 0.881348 4.125V4.5C0.881348 5.19748 0.881348 5.54622 0.958015 5.83234C1.16607 6.6088 1.77255 7.21528 2.549 7.42333C2.83513 7.5 3.18387 7.5 3.88135 7.5M4.96468 16.5H11.798C11.9821 16.5 12.1313 16.3508 12.1313 16.1667C12.1313 14.6939 10.9374 13.5 9.46468 13.5H7.29801C5.82525 13.5 4.63135 14.6939 4.63135 16.1667C4.63135 16.3508 4.78059 16.5 4.96468 16.5Z"
              stroke="#9395B8"
              stroke-width="1.35"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>Cоревнования</span>
        </li>
        <li className="link">
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.63135 15.7502H15.1313M3.88135 13.5002V7.50016M6.88135 13.5002V7.50016M9.88135 13.5002V7.50016M12.8813 13.5002V7.50016M14.3813 5.25016L8.69935 1.69891C8.58398 1.62681 8.5263 1.59076 8.46444 1.5767C8.40974 1.56428 8.35295 1.56428 8.29825 1.5767C8.23639 1.59076 8.17871 1.62681 8.06335 1.69891L2.38135 5.25016H14.3813Z"
              stroke="#9395B8"
              stroke-width="1.35"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>Организации</span>
        </li>
      </ul>
      <section className="languages-area">
        <div className="language">
          <div className="lang-item">
            <img src={languageIcon} alt="language icon" />
            <span>RU</span>
          </div>

          {openLanguage ? (
            <KeyboardArrowDownIcon
              onClick={handleOpenLanguage}
              className="arrow-icon"
              sx={{ color: '#7B7EA5' }}
            />
          ) : (
            <KeyboardArrowUpIcon
              onClick={handleOpenLanguage}
              className="arrow-icon"
              sx={{ color: '#7B7EA5' }}
            />
          )}
        </div>
      </section>
      <div className={`lang-selector ${openLanguage ? 'open' : ''}`}>
        <div className="language-wrapper">
          <div className="lang-item">
            <img src={englishIcon} alt="language icon" />
            <span>RN</span>
          </div>
          <div className="lang-item">
            <img src={franceIcon} alt="language icon" />
            <span>FR</span>
          </div>
        </div>
      </div>
      <div style={{ marginTop: openLanguage ? '20px' : '' }} className="buttons">
        <button onClick={handleCloseMenu} className="reg">
          Зарегестрироваться
        </button>
        <button onClick={handleCloseMenu} className="log">
          Войти
        </button>
      </div>
    </div>
  );
};

export default Menu;
