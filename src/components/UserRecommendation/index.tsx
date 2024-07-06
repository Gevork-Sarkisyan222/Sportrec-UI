import React from 'react';
import './userRec.scss';
import badge from '../../images/badge.svg';
import ClearIcon from '@mui/icons-material/Clear';
import { url } from 'inspector';
import { useMediaQuery } from 'react-responsive';

function UserRecommendation() {
  const isSmallDevice = useMediaQuery({
    query: '(max-width: 1270px)',
  });

  const NoScroll = () => {
    return (
      <>
        <div
          style={{
            backgroundImage:
              'url("https://static.vecteezy.com/system/resources/previews/000/095/240/non_2x/abstract-bright-blue-geometric-shape-vector.jpg")',
          }}
          className="user">
          <ClearIcon sx={{ color: '#cccfda', cursor: 'pointer' }} className="cancel" />
          <div className="avatar">
            <img
              src="https://s3-alpha-sig.figma.com/img/4292/2067/508d3554fecdf911c1c609b257ae6fbd?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l9egpPQadZw0zmEKiusBDkv0YDkB5hWD8iQ7LiqKXCvjreBPr2tZ-mZ5gclr5RuBMOzEnvagxyaRtJMvKF47~JZ~r4HbBb2eDvBjJx6r3OZ5hAj4ID~8ul66zq3F9tDEZhTgzuOMrrjQ2lxbvQWDRN4G2gWWP3sKqcMLJfSUpNKVlUIIAxaLl46UNM0wCjivL3KRCK-m3ahkWZ-qhqjEU7WzteUjCVG3esGF46aKd-gIoxQElKTV222pGsUL5YwtEcw243wXFYkXElolHMtZMQDVOTpihrTJ6vADDYS41nPou4ezXJw0BwaftOQrnRj-vTxavGdBy1Fzo3kNT9y2Pw__"
              alt="avatar"
            />
            <img className="badge" src={badge} alt="badge" />
          </div>
          <div className="username">
            <span>Александр Магомедов</span>
          </div>
          <button>Подписаться</button>
        </div>
        <div
          style={{
            backgroundImage:
              'url("https://img.freepik.com/free-vector/electric-technology-background_52683-34277.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1713225600&semt=ais")',
          }}
          className="user">
          <ClearIcon sx={{ color: '#cccfda', cursor: 'pointer' }} className="cancel" />

          <div className="avatar">
            <img
              src="https://s3-alpha-sig.figma.com/img/0798/2581/6edaafc2a55624423a97cef88106d4b5?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ISZU~WczEFlopH~qvE1-H5ziVE4CAwnAm2rMX8VjSmTaC8Sj-Oqp17T3ZXQ39jtR2JggEEs6TYwKGDOcjyz32kzAJuimmQzfWtl5u8HdlLv~QYiJmpoq-zfhuQpDGxg0ZO3tuQPh3m3tGYiG5OENlRip7sjIMYb1Yg88oHIH8llYZIXKMMZKfVCi1rfofT~jJK7z~axB3Lvumb3Hr~g7GcPEszRTYccRunWUZwz0g41vRoOZphzKzyqxlqz0bYsbQgxk4BXs6v7gCtBMvvONuBYswSVVTcDbVcX3YlIM2JHtHgzqmPW4zMJo85HDKJAYH-YOJ6cPoCLIAhzdYuRCQA__"
              alt="avatar"
            />
            <img className="badge" src={badge} alt="badge" />
          </div>
          <div className="username">
            <span>Дмитрий Алексеев</span>
          </div>
          <button>Подписаться</button>
        </div>
        <div
          style={{
            backgroundImage:
              'url("https://static.vecteezy.com/system/resources/previews/000/095/240/non_2x/abstract-bright-blue-geometric-shape-vector.jpg")',
          }}
          className="user">
          <ClearIcon sx={{ color: '#cccfda', cursor: 'pointer' }} className="cancel" />

          <div className="avatar">
            <img
              src="https://s3-alpha-sig.figma.com/img/f2e0/6c1b/8c680398272eb8eb98824fd367b60561?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iQDtOhqCVkxgH6tb6PC935Oc-tqMlEb3lvjwZxLfA4xkvdCWc57U-hpbMP86gUYZ3MnDlrbVOaLwRe4JlVlaZZkiYnW5HOcJ3rs-SPk4V2qVb7oBkPf6g-Vu8YZE~gzJcQIdULu1Izwmw~hjiCzfu2fuMvwzrnpGRasFA4ElO83Ux133UtZ0TDDoFgKaL1hlK9RpxuWCPZGvs6wGhM4GvzBZd0bawVimx3ogNZsoenPSxctnJ6ERJ2wgRR4Y1Ro-xM2MviuK6jeT4bWrG1Pefs27jU88FOgY9uY7LR3YfkPc8cFr71f~7S0cjDrdkIMFzH~csj68hPlFS0Fnp3OAGQ__"
              alt="avatar"
            />
            <img className="badge" src={badge} alt="badge" />
          </div>
          <div className="username">
            <span>Амир Магомедов</span>
          </div>
          <button>Подписаться</button>
        </div>
        <div
          style={{
            backgroundImage:
              'url("   https://img.freepik.com/premium-photo/abstract-red-blue-background_797981-54115.jpg")',
          }}
          className="user">
          <ClearIcon sx={{ color: '#cccfda', cursor: 'pointer' }} className="cancel" />

          <div className="avatar">
            <img
              src="https://s3-alpha-sig.figma.com/img/bebc/640c/883143803fc398db458382c3bf0aa880?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g7Wo8Rq2pCTgnobS8CoH1hxFs1CUKfTwNpFrut81CxhJjWVGCW3MC8UTmuYAc-vJYS5IVEPK58FmXlznNMVOKemInXZzJvItnBATOh-UWgrSU-A~27aplO6zxTsZaF-b15GwBt8PXzZWo6L0n0TxHb0esEQWN-H72aE9-PuPG0-5~Nhv6MTL-FXO0O72jsJHTW3PS3RF1q1W6gjAjXshgnyZeM2GOKwOnXWs3fmDywrJG2XUtdcmQ1whb~Yc~AHY58o0Ka-pU9ge8zLyVCh5cTWCVE~e8U3tgCv0PQlQ4f5KVjCZjECqiwY4tVBiypQucg6sQlZ39pYWjxi2CXZ0QQ__"
              alt="avatar"
            />
            <img className="badge" src={badge} alt="badge" />
          </div>
          <div className="username">
            <span>Наталья Шалесная</span>
          </div>
          <button>Подписаться</button>
        </div>
      </>
    );
  };

  const WithScroll = () => {
    return (
      <section
        style={{
          display: 'flex',
          width: '900px',
          gap: '10px',
          position: 'absolute',
          left: '10px',
        }}>
        <div
          style={{
            backgroundImage:
              'url("https://static.vecteezy.com/system/resources/previews/000/095/240/non_2x/abstract-bright-blue-geometric-shape-vector.jpg")',
          }}
          className="user">
          <ClearIcon sx={{ color: '#cccfda', cursor: 'pointer' }} className="cancel" />
          <div className="avatar">
            <img
              src="https://s3-alpha-sig.figma.com/img/4292/2067/508d3554fecdf911c1c609b257ae6fbd?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l9egpPQadZw0zmEKiusBDkv0YDkB5hWD8iQ7LiqKXCvjreBPr2tZ-mZ5gclr5RuBMOzEnvagxyaRtJMvKF47~JZ~r4HbBb2eDvBjJx6r3OZ5hAj4ID~8ul66zq3F9tDEZhTgzuOMrrjQ2lxbvQWDRN4G2gWWP3sKqcMLJfSUpNKVlUIIAxaLl46UNM0wCjivL3KRCK-m3ahkWZ-qhqjEU7WzteUjCVG3esGF46aKd-gIoxQElKTV222pGsUL5YwtEcw243wXFYkXElolHMtZMQDVOTpihrTJ6vADDYS41nPou4ezXJw0BwaftOQrnRj-vTxavGdBy1Fzo3kNT9y2Pw__"
              alt="avatar"
            />
            <img className="badge" src={badge} alt="badge" />
          </div>
          <div className="username">
            <span>Александр Магомедов</span>
          </div>
          <button>Подписаться</button>
        </div>
        <div
          style={{
            backgroundImage:
              'url("https://img.freepik.com/free-vector/electric-technology-background_52683-34277.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1713225600&semt=ais")',
          }}
          className="user">
          <ClearIcon sx={{ color: '#cccfda', cursor: 'pointer' }} className="cancel" />

          <div className="avatar">
            <img
              src="https://s3-alpha-sig.figma.com/img/0798/2581/6edaafc2a55624423a97cef88106d4b5?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ISZU~WczEFlopH~qvE1-H5ziVE4CAwnAm2rMX8VjSmTaC8Sj-Oqp17T3ZXQ39jtR2JggEEs6TYwKGDOcjyz32kzAJuimmQzfWtl5u8HdlLv~QYiJmpoq-zfhuQpDGxg0ZO3tuQPh3m3tGYiG5OENlRip7sjIMYb1Yg88oHIH8llYZIXKMMZKfVCi1rfofT~jJK7z~axB3Lvumb3Hr~g7GcPEszRTYccRunWUZwz0g41vRoOZphzKzyqxlqz0bYsbQgxk4BXs6v7gCtBMvvONuBYswSVVTcDbVcX3YlIM2JHtHgzqmPW4zMJo85HDKJAYH-YOJ6cPoCLIAhzdYuRCQA__"
              alt="avatar"
            />
            <img className="badge" src={badge} alt="badge" />
          </div>
          <div className="username">
            <span>Дмитрий Алексеев</span>
          </div>
          <button>Подписаться</button>
        </div>
        <div
          style={{
            backgroundImage:
              'url("https://static.vecteezy.com/system/resources/previews/000/095/240/non_2x/abstract-bright-blue-geometric-shape-vector.jpg")',
          }}
          className="user">
          <ClearIcon sx={{ color: '#cccfda', cursor: 'pointer' }} className="cancel" />

          <div className="avatar">
            <img
              src="https://s3-alpha-sig.figma.com/img/f2e0/6c1b/8c680398272eb8eb98824fd367b60561?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iQDtOhqCVkxgH6tb6PC935Oc-tqMlEb3lvjwZxLfA4xkvdCWc57U-hpbMP86gUYZ3MnDlrbVOaLwRe4JlVlaZZkiYnW5HOcJ3rs-SPk4V2qVb7oBkPf6g-Vu8YZE~gzJcQIdULu1Izwmw~hjiCzfu2fuMvwzrnpGRasFA4ElO83Ux133UtZ0TDDoFgKaL1hlK9RpxuWCPZGvs6wGhM4GvzBZd0bawVimx3ogNZsoenPSxctnJ6ERJ2wgRR4Y1Ro-xM2MviuK6jeT4bWrG1Pefs27jU88FOgY9uY7LR3YfkPc8cFr71f~7S0cjDrdkIMFzH~csj68hPlFS0Fnp3OAGQ__"
              alt="avatar"
            />
            <img className="badge" src={badge} alt="badge" />
          </div>
          <div className="username">
            <span>Амир Магомедов</span>
          </div>
          <button>Подписаться</button>
        </div>
        <div
          style={{
            backgroundImage:
              'url("   https://img.freepik.com/premium-photo/abstract-red-blue-background_797981-54115.jpg")',
          }}
          className="user">
          <ClearIcon sx={{ color: '#cccfda', cursor: 'pointer' }} className="cancel" />

          <div className="avatar">
            <img
              src="https://s3-alpha-sig.figma.com/img/bebc/640c/883143803fc398db458382c3bf0aa880?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g7Wo8Rq2pCTgnobS8CoH1hxFs1CUKfTwNpFrut81CxhJjWVGCW3MC8UTmuYAc-vJYS5IVEPK58FmXlznNMVOKemInXZzJvItnBATOh-UWgrSU-A~27aplO6zxTsZaF-b15GwBt8PXzZWo6L0n0TxHb0esEQWN-H72aE9-PuPG0-5~Nhv6MTL-FXO0O72jsJHTW3PS3RF1q1W6gjAjXshgnyZeM2GOKwOnXWs3fmDywrJG2XUtdcmQ1whb~Yc~AHY58o0Ka-pU9ge8zLyVCh5cTWCVE~e8U3tgCv0PQlQ4f5KVjCZjECqiwY4tVBiypQucg6sQlZ39pYWjxi2CXZ0QQ__"
              alt="avatar"
            />
            <img className="badge" src={badge} alt="badge" />
          </div>
          <div className="username">
            <span>Наталья Шалесная</span>
          </div>
          <button>Подписаться</button>
        </div>
      </section>
    );
  };

  return <div className="UserRecommendation">{isSmallDevice ? <WithScroll /> : <NoScroll />}</div>;
}

export default UserRecommendation;
