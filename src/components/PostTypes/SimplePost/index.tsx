import React from 'react';
import commentIcon from '../../../images/comment.svg';
import viewerIcon from '../../../images/viewers.svg';
import './simplePost.scss';
import { CommentType } from '../../Content';
import Comment from '../../Comment';
import badge from '../../../images/badge.svg';
import checkMark from '../../../images/checkmark.svg';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import firstPlace from '../../../images/first-place.svg';

interface propsTypes {
  type: string;
}

const comments: CommentType[] = [
  {
    id: 1,
    user: {
      avatar:
        'https://s3-alpha-sig.figma.com/img/3ca7/729b/766d945ee572995c1f9d81a17d62c01a?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D7YETZiaJWZ09fLC8xkn7pzKwH4artg8eEhqVwn9HU3EziUM0eTz1KeHYwkOOp7N9lMdd5rSbSv6nxw8IiPYCZx~Vm6Jymu5hxWPmiqCSToV3bxd7qXIRztLRH396lK-DH8egB-sOKC5375NHEorrM-aOwhZtJi6bGr14A1D42H2kTbIvuvRErjXZR9~~XvMiRlbU2BaJmH~NiuERamBd~A7uGlFTAQTCEGfkLDwabUUobNb7oSGReD1oQhLuT~~siVWU5~rWeDaKXq8nG9OLho~-VL9mKiRT23S8fg06OctBGs57nt1gxygQxxpuHnTzUqSJZ~BGpOkh85sHhWbTg__',
      name: 'Вадим Давыдов',
    },
    text: 'Романов молодец!',
    createdAt: '15 минут назад',
  },
];

const SimplePost: React.FC<propsTypes> = ({ type }) => {
  const height =
    type === 'images'
      ? '815px'
      : type === 'video'
      ? '670px'
      : type === 'achievement'
      ? '385px'
      : 'auto';

  return (
    <div
      style={{
        height: height,
      }}
      className="SimplePost">
      <div className="top-content">
        <div className="type-info">
          {type === 'achievement' ? (
            <p className="created-at">24 февраля, 2024 в 15:55</p>
          ) : (
            <>
              <p>
                {type === 'images'
                  ? 'Велоспорт 2 февраля, 2024 в 23:09'
                  : 'Спортивная Борьба 12 марта, 2024 в 16:03'}
              </p>
            </>
          )}
        </div>
        {type !== 'achievement' && (
          <h1 className="title">
            {type === 'images'
              ? 'Этапы Тура Альп-2024'
              : 'Запись соревнования по вольной борьбе в Санкт-Петербурге'}
          </h1>
        )}
        {type === 'achievement' && (
          <div className="user-block">
            <div className="user-info">
              <div className="user-avatar">
                <img
                  src="https://s3-alpha-sig.figma.com/img/4292/2067/508d3554fecdf911c1c609b257ae6fbd?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l9egpPQadZw0zmEKiusBDkv0YDkB5hWD8iQ7LiqKXCvjreBPr2tZ-mZ5gclr5RuBMOzEnvagxyaRtJMvKF47~JZ~r4HbBb2eDvBjJx6r3OZ5hAj4ID~8ul66zq3F9tDEZhTgzuOMrrjQ2lxbvQWDRN4G2gWWP3sKqcMLJfSUpNKVlUIIAxaLl46UNM0wCjivL3KRCK-m3ahkWZ-qhqjEU7WzteUjCVG3esGF46aKd-gIoxQElKTV222pGsUL5YwtEcw243wXFYkXElolHMtZMQDVOTpihrTJ6vADDYS41nPou4ezXJw0BwaftOQrnRj-vTxavGdBy1Fzo3kNT9y2Pw__"
                  alt="avatar"
                />
                <img className="badge" src={badge} alt="badge" />
              </div>
              <div>
                <article className="user-about">
                  <span>Александр Магомедов</span>
                  <img src={checkMark} alt="icon" />
                </article>
                <p>Спортсмен • Призер Олимпийских игр, двукратный призер чемпионатов мира</p>
              </div>
            </div>

            <button>
              <PersonAddAltIcon />
            </button>
          </div>
        )}
        {type === 'images' && <p className="desc">Фото с соревнований</p>}
      </div>
      <div className="center">
        {type === 'achievement' ? (
          <section className="achievement-wrapper">
            <div className="place-block">
              <img src={firstPlace} alt="firstPlace" />
              <span>Занял 1-е место</span>
              <p>В Спортивном чемпионате 2024 по греко-римской борьбе среди юниоров до 24 </p>
            </div>
            <div className="congratulated-wrapper">
              <div className="small-avatar">
                <img
                  src="https://s3-alpha-sig.figma.com/img/f349/4db0/c72d431f864ab8cf0101c0dbed2e97fd?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KEbfefyPNn-zZUQ6gGlaRmEtNeYuyDgfhdIkhm~KVDxTZwNabeveLco5dim0BNfLZm7mivYFoMLs0~2elkmugiP4hipF0yKIcmQO0jMeZnVIJUDSn~bpwW0kDc6SPG5feF5EmmWc405~G3yLGpBHmewmuQDpZsfdho53O4H1EtJaoC7GsGajxdnAEQwgsLui-VIn09rCNd0YtC7IcUpO88hxr1aQWSSOAWiz7JAJwrTDjh4jIMTUlUtC4ADk7vzPQEK4u5zE3xiJGMshce3vM9sATa2x06LMjRzAkl9dmtZ1turZVI9DIKzYESg5o-2ZZT6-qC0iQf-SgLl9dOcGrg__"
                  alt="avatar"
                />
              </div>
              <span className="name">Дмитрий Зайцев</span>
              <span className="count">и еще 500 человек поздравили</span>
            </div>
            <button>Поздравить</button>
          </section>
        ) : type === 'images' ? (
          <div className="post-images">
            <article className="postImage">
              <img
                src="https://s3-alpha-sig.figma.com/img/c211/6554/3957487fe4a3d8ef02c1195fa0258639?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EHeMwB8UC7cWduzZ2Cm7y77oeZ~EmQJof04Un0iJXjs58YTLXl-7KTo9FEI93sT4IKNO6StBtcjW9DW9fDgFDKCxxyzuzwd1TpXhuALOXF9PYRvOVNmT-I5KDZ6fmD3wNB0uIFELnJbj6v95GllIcowqbtzdD0xdt9uqcizrCmUQr3j-COOnkBWupdfRu8diAFwFUrrfjcN4u7Uy~5sSAu7UvClNZf7liMX~HEXt2iISB~0UWbWxG7KHbz4tP66VVCHlYHdyYPZncEbVmFgNQvxqXYQOFgt6VOknDtqUk8JZVT1wDXgLkuYmoRbVxuF30GBdIltpDTXvxe8MRojgsg__"
                alt="post image"
              />
            </article>
            <article className="postImage">
              <img
                src="https://s3-alpha-sig.figma.com/img/410b/b747/1d89e6f82ae4eaad390bafd8070da220?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cPhenZTYpiwxcfsJUDBnpY8DxqwhJbMotddipWNtHFi7A~7TaZ9pUGGhUbcAWY96~zt9WlkD-Rgj6Abt~MMdN0-7VvvlaXJVL8kO3Y9ATBoihigURiQ5KNBfoFb~a7bQimLPgPZrUa-1pF20D17dZTJ3rltpViHBLerONYhOvGHNrmTXrJxh4rpwEgnHgKQ8-zFKAopBZfFVOGnicGYI70MqDIi4Maf2bWP8l4TvalhplGEfWTtfYTzLzZfN2JCmxo2X~VFu847vBsXWmCevgsYYZ9qtYcJZxpOlIS8pMyApR-0~j13hGwJvVxb2mFHH6WCiQiRxUWGXexjuYJeorg__"
                alt="post image"
              />
            </article>
            <article className="postImage">
              <img
                src="https://s3-alpha-sig.figma.com/img/e660/36ba/a8fcf0d6f46f6f2191e5519dfe78b175?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qQ0cWP0zpeTtrlJxXvcyFg3JPb-X9ogouJzXRR3dHGbh3sDuEWHWWJY6cmDWa9L0KtEt-mzApmfzoH~H3ecZV29dIwswVsI~vSNnuftsdCfePH87FQpR-DRDmz7bbu1MKga2JJBWXD0Mtq685cYLvcF-C0IZlxboQXx4gaogqf-~6QtrVanf6iuSXIdSwQ4gUZXymEI1A25UOwCn00PeKvzjm6zb~R63NTY~uPi5mttZSaNmpDNZEYQL9Hxd4t~6k4JZKQtHuXXOaX2J5KJ-Suke2F1OP75R9-Nik1mUCEXQPKiF3zpSzlhSGX1EhGerZSGfzBHE4KKONEXqI00vBA__"
                alt="post image"
              />
            </article>
            <article className="postImage">
              <img
                src="https://s3-alpha-sig.figma.com/img/6c34/4273/6012bb3b863ada0127027849d790f215?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Am0lX7NrHNNb~2VWIyJCNjUack6ZGRbqHFQpSWEJv4w1rzszGkvtkeb-b-EljLyNonyepIf~javQU04Ffd4iMRgVEJWpjq2xS2Dqk6TjV3fuzJQeAO3j~j2Kp3DxbVZ5z9d29n0NkkitU6F8n1tXuLqoXpeb1rKx1WudbqcIbatVh6PQ2h6P65dW~KvL8NCal3hoEVJT-hDS9-7dRCblEH-prpe~MJ8b8unXo2q-ICN8QlBcyERvc5ACCy9-xkIX1Yf3nKhBybNvJCy7wv1hpUx32Wobgdk35EPlOwgl7xGdhUSXsofXKA4gdXEKYYxCh2ZTVsu4QQMx4GI-l3JR5A__"
                alt="post image"
              />
            </article>
            <article className="postImage">
              <img
                src="https://s3-alpha-sig.figma.com/img/7e5b/d116/8587ba641ee7c12036ba38007ef55cbd?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gABTf4HJNdUUAa1FXhf0so61yhVq3IOmoscjPvy~X4TUkvA~d3GBiheKSApwlav3zzr12rnPk1uvCQtDxRJwA5pWxZzbRdPsLKNpx~k2eagIY9FA1ReC0LJ1zWGQ0y9Z7sHOqkSEGBpVY06T-Y4tWfdhBWbQgUx3CV9e0b743LwJHZBFtxkonyI5L2hXsVsZyIIAW5xsP-~Us2YXZ~~pKMonleQHwSZet3IR31rOBBgdPJp4mRjiRgr0g3hv-hYFzFdM6J99g7JruRzv~pehG1lL9c3vjrRRdh5BV4XegBxLxNjJxeOnzAjoizA4aKjTlg7E-GzN9UtQ3YscTPnjlA__"
                alt="post image"
              />
            </article>
            <article className="postImage">
              <img
                src="https://s3-alpha-sig.figma.com/img/70a6/1239/33be0f3d263534527f9aae1c48b7b0db?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T19XDL8ay3Nv6KVZnlZUhkDdyGC9sV4rMMnH48B-GxCEQ~1kJVgJBxxJ9nMmPxqXcJQtpnQESny1JNQDkwyYlgB62WEl52UtkcKlAjQ-xpcYXM0JNTKXZvUGWkoHPMAeiXR-JMbWb5fsLVEpHB3gbo2vAWKqOlj1N5vUnrSlajzjt4zrKwf55PFyRhh1Ht8jDwe6xaduNT0fQsv4-OXxfiQml2v6qe5lc1946QXiWfOpOWyj0TS6WUn2UH03-WaqnpqBcduNe9~wOvJD7BMsfsKNkGFV5oJfY6Qpr-n8pAfEbLXlufzvQvUhLfrdql4XGL6kabcQQiZqmKE2~qKJMg__"
                alt="post image"
              />
            </article>
            <article className="postImage">
              <img
                src="https://s3-alpha-sig.figma.com/img/e761/f055/76ba8694b562f85eab37824e6d196c40?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pZUnXc8NAGSmoToeAzlGttGTeXAKCgdSrK9iHttgbZEsfY-as3zBLXaZuGA3TvRmuaVgOAOBMBpCxX0lk2eWz7gY4AYg0jVGqE~hPF0ARG74OiLraZxhWV0RsPWVdr6DctXL-2AfBh9jiJVoyp6rOXBurmNppVYYAvDt-~hoUx3618VWvmOpi-E9eFkUKzkA3phdqyx-KN3zCrWVLTDmhGCN9IE6quqTXKtrDL7OSbf21TuAAWBn3PFy4t4hwL8hVWg8kjfLgZE6iQRyQmMNVcOwEQFQy9ISpYIBNb3-5yT1zphGRxZb4DyV~twdPVoG7OsAtRZvBvxvtE0OTwunwA__"
                alt="post image"
              />
            </article>
            <article className="postImage">
              <img
                src="https://s3-alpha-sig.figma.com/img/03ef/6e6a/2fc7817b338b80a49f7cb1d7a970b05e?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PgZh2KdNVhAIOX57dhDVFMpbkFkFKzFekvqMrTU6Dhti3ADDMNz~RsHKlWoAyqj-pnZMB0CzaASOR01zj1aZwvwBcFBfazo2bka43fEVzyBV9OykGY1YrOBeXa6MpqDBqPlhcf8KMtp26TdmhQPu1Cyqk2yS5MOreaATVVj7tKhs7OGuomFW5BLxawGB8hOl7vLabGmeGnm-owJYT-Ia9D8NGpBHvF-k7NeLFbSJlT3x3RECnqLOPdnzGYa4iw~4-awvO0puQr1~73aZYJjfc6xmXKO2ke9MCD4j2GRGA7UvTP9n-uS8ts-PesvUZxNS~zQ7EtERLIWvUBCo2h5UVA__"
                alt="post image"
              />
            </article>
            <article className="postImage">
              <span>+83</span>
              <img
                style={{ filter: 'grayscale(70%) brightness(22%) blur(1px)' }}
                src="https://dnjpbxg2wcpr8.cloudfront.net/article_cover/5b928634d9e84082790000cb/5a280e4f03c6b7c0c700016b/635285074a92410008c5427c/63534acd8e0779ffbff5f2b4/1/a-2421729.webp"
                alt="post image"
              />
            </article>
          </div>
        ) : (
          <div className="video-wrapper">
            <iframe
              width="805"
              height="404"
              src="https://www.youtube.com/embed/JuBBIJ7adjM?si=Wh_EcCCu4rZqAsy8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen></iframe>
          </div>
        )}
      </div>
      {type !== 'achievement' && (
        <article className="action-icons">
          <div className="icon">
            <img src={viewerIcon} alt="icon" />
            <span>4.1 K</span>
          </div>
          <div className="icon">
            <img src={commentIcon} alt="icon" />
            <span>0</span>
          </div>
        </article>
      )}
      {type === 'video' && (
        <section className="comment-section">
          {comments.map((comment: CommentType) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </section>
      )}
    </div>
  );
};

export default SimplePost;
