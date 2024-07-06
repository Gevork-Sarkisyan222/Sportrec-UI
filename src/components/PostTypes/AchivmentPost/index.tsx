import React from 'react';
import Comment from '../../Comment';
import commentIcon from '../../../images/comment.svg';
import viewerIcon from '../../../images/viewers.svg';
import firstPlaceIcon from '../../../images/first-place.svg';
import secondPlaceIcon from '../../../images/second-place.svg';
import thirdPlaceIcon from '../../../images/third-place.svg';
import wingIcon from '../../../images/wing-icon.svg';
import './achivmentPost.scss';
import { useMediaQuery } from 'react-responsive';

function AchivmentPost() {
  const isSmallDevice = useMediaQuery({
    query: '(max-width: 1270px)',
  });

  return (
    <div className="AchivmentPost">
      <div className="top-content">
        <div className="type-info">
          <p>Спортивная Борьба • 2 марта, 2024 в 16:53</p>
        </div>
        <h1 className="title">
          Результаты соревнования по чемпионату 2024 по спортивной борьбе (греко-римская борьба)
        </h1>
        <div className="places">
          <article className="place">
            <div className="place-avatar">
              <img
                src="https://s3-alpha-sig.figma.com/img/e0c2/7f40/ea540c3c446b658bc10b8281990aad95?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C1as~yxYjCBIZamH-dhJPfgjPAkHJnP-QYqjA7noAfYF7~Zqb2VRrdR5ONFc4bz584VB7sWxsRxOWUmgZGC0C9BaWm5XwKWH13OR3agGJTnmMN5RdoJf5LaB-9gbXIIFRnsPUr08w11zJKz8ip-CSH57skB9Kor~IAQAVqOOnUIFiR8XWCeV3IOmMeoO2MNDDb0QsQ0ZC3LMfKBdTEHGCMYH3yTU2oEs1JCRxMJzezhOdfMOastClfAMGxXE4KpKiWzUukf6Q~-eP6yKwOgjzkC7roydZ1YaRLMzDLTCDHxauB~GFloLmpetBUIUysgbYJsgo0xVOHkpW~NlttfzHw__"
                alt="avatar"
              />
              <img className="places-icons" src={secondPlaceIcon} alt="icon" />
              <h2>Дмитрий Романов</h2>
            </div>
          </article>
          <article className="place">
            <img className="wings" src={wingIcon} alt="wing icon" />
            <div className="place-avatar fist">
              <img
                src="https://s3-alpha-sig.figma.com/img/fb46/69c2/cd2c70c4d3e9773e43b974ad219014c9?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dpAK9Wob2isiqMRCY4cjNb8E0I6V5-pd59LZyE4DAnrCZtzeUiGgrd~iw5w20t6ZmKN6Nkp3HXquHll6VIkqG0d4eQd2q3-qhTiGjply8AQNev~bzzjYwZxn0T6HKdgWEJGL8YX2nn1MWtv5FCyHGLJ3J~IxXZaIqZ0C7KfPNmhkSi91DVSAuuZvRi9qyZ3NglD2hPLbcgV2yFTewy~zMm3y2LIvnshrEShQJwxrdWCTHlHElqpA5cDB8EAnX04FnO1PEzXABJW3JQna1k0Q6eDHC6LIZoyIDG1hCIXjESCq7mduJidoa5vgXkeVgmDFcOfPSLFRi8IBOdBfXbqk0Q__"
                alt="avatar"
              />
              <img className="places-icons fist" src={firstPlaceIcon} alt="icon" />
              <h2>Александр Магомедов</h2>
            </div>
          </article>
          <article className="place">
            <div className="place-avatar">
              <img
                src="https://s3-alpha-sig.figma.com/img/ac76/44fe/702f6f08daa3cc73bd14dbb43d912866?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YVkMBF6wPXWy9nBBubWxlP8oSvvNoIGlmEiWyMVmO5Cc6QdGFchVHVbtOmMbHWTf9YHSkyBWWHrGJP71ZNpBRJAFntwpShWWW514NnOoPMyTPpW5SgHP07wefKNNlodl2UFnElJTbGlML0Pa607sm9umOTXjL17DXv~hg2LmJgT~1OHCUxEh1ayZ-rU6LsT-KMgOyr0rey8-CfqF8m8yuxiUCje5heZzQIxU06tBM7XSoUW2bwJHluQ2k2YCvfLp~LyxSzD07Jf5~iPzP6oe0MFoguRYm7-ixgyv2FVlLF3BLJhM3LoYD5mVSbbArs1xhZyXrio-VrCkRL3KhfuvDw__"
                alt="avatar"
              />
              <img className="places-icons" src={thirdPlaceIcon} alt="icon" />
              <h2>Александр Куприенко</h2>
            </div>
          </article>
        </div>
      </div>
      <div className="center">
        <h3>Лучшие моменты соревнования</h3>
        <div style={{ overflowY: 'auto' }}>
          <div className="shorts">
            <div className="short">
              <div className="viewsers-btn">
                <svg
                  width="20"
                  height="14"
                  viewBox="0 0 20 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.69654 7.26867C1.63897 7.09594 1.63891 6.90895 1.69638 6.73619C2.85335 3.2581 6.13424 0.75 10.0009 0.75C13.8658 0.75 17.1454 3.25577 18.3038 6.73134C18.3614 6.90406 18.3615 7.09106 18.304 7.26381C17.147 10.7419 13.8661 13.25 9.99946 13.25C6.13458 13.25 2.85494 10.7442 1.69654 7.26867Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.5002 7C12.5002 8.38071 11.381 9.5 10.0002 9.5C8.61953 9.5 7.50025 8.38071 7.50025 7C7.50025 5.61929 8.61953 4.5 10.0002 4.5C11.381 4.5 12.5002 5.61929 12.5002 7Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>4.1 тыс.</span>
              </div>
              <img
                src="https://s3-alpha-sig.figma.com/img/249b/6c29/77fb17552ecf333fb10d8c096cd0e9d2?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k14uN2MDPDaRjV1rrk30oGoXYTx~qz4qy3BzVxE666bIn23bN~GHlYY-mXE6Sa3-E2pSQGohwoBKNCJ3xuzd0yD8722LaqErDV1JtlGaZ-n05C~zXFWfqcDucg2cY0jQaO7I3IjNWpydgbVcTXHpz2OIPGh0kMmQwv4VKLAxn6t8vjfrBe9iTUYkfikxgPxF~namNPsxSDl1gNoWpcONU7qhbKnxogk3FlKmLkyaKMZ-xdzqhDUnfxpES7-5bwsM8lSKwSac3g5IG5hAxRz03VXW5DXdd7LLXXxtKgXXDQy4p0YmnYtEXcC0TpKj19KF0-M6Ib-KF~7xGly-JlOfDw__"
                alt="image"
              />
              <p className="duration">04:15</p>
            </div>
            <div className="short">
              <div className="viewsers-btn">
                <svg
                  width="20"
                  height="14"
                  viewBox="0 0 20 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.69654 7.26867C1.63897 7.09594 1.63891 6.90895 1.69638 6.73619C2.85335 3.2581 6.13424 0.75 10.0009 0.75C13.8658 0.75 17.1454 3.25577 18.3038 6.73134C18.3614 6.90406 18.3615 7.09106 18.304 7.26381C17.147 10.7419 13.8661 13.25 9.99946 13.25C6.13458 13.25 2.85494 10.7442 1.69654 7.26867Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.5002 7C12.5002 8.38071 11.381 9.5 10.0002 9.5C8.61953 9.5 7.50025 8.38071 7.50025 7C7.50025 5.61929 8.61953 4.5 10.0002 4.5C11.381 4.5 12.5002 5.61929 12.5002 7Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>392</span>
              </div>
              <img
                src="https://s3-alpha-sig.figma.com/img/b4b1/9fbd/0328e655c50a1abe150eb37d90bcf822?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oRw4OaIe0YlhSnz5NIaeLySJHZTm7qz1~zL9hRnCWvBurv1ju5J3n~V4L~jmKBq8Bnr27EJt52FJoSov0ZCl3TZySVjiXLJqxDT4lX707rZDJT0RWmmQUSLF32AA~hTyB31kXKAFZlnZ5amQVkafCzxRnEtFPKFHINACRHr4GiBvU0Bk9FyZHRKVoxeRXB3tfq-XpfHOOmAvZDsZkbg5i2Nee0j4w44dmzXNt-3gU-yqrkVNSaRnWdRMbI8WJ8HkAyiz54Ipkhl3pO6a6t8cwIxUQmzOxuMiSC0Ik-q6s7I-vCXxME59GGmVGKZYzSwHkWM7vBvxcWKNeUvKYaAnHw__"
                alt="image"
              />
              <p className="duration">03:10</p>
            </div>

            <div className="short">
              <div className="viewsers-btn">
                <svg
                  width="20"
                  height="14"
                  viewBox="0 0 20 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.69654 7.26867C1.63897 7.09594 1.63891 6.90895 1.69638 6.73619C2.85335 3.2581 6.13424 0.75 10.0009 0.75C13.8658 0.75 17.1454 3.25577 18.3038 6.73134C18.3614 6.90406 18.3615 7.09106 18.304 7.26381C17.147 10.7419 13.8661 13.25 9.99946 13.25C6.13458 13.25 2.85494 10.7442 1.69654 7.26867Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.5002 7C12.5002 8.38071 11.381 9.5 10.0002 9.5C8.61953 9.5 7.50025 8.38071 7.50025 7C7.50025 5.61929 8.61953 4.5 10.0002 4.5C11.381 4.5 12.5002 5.61929 12.5002 7Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>72.8 тыс.</span>
              </div>
              <img
                src="https://s3-alpha-sig.figma.com/img/2bdf/eaf9/eb0f4aa4fe9ad8dec3acc592061c0e05?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oPoIo4R4tY5a0Ol3O1Mk95bkglHZZ2uyc744Vx1QzwXPtl1ds2hlqJANrPWZXMGu8Rh9rGDLNO5LO8UTD6pSqPBHj5X1bompdzDxwdDOtCF-XNz5CTAAsbhtqNKb7~YBZ3xzLCNQHJy92UK9GGHS2EyTRb5Txw3UxpR~DmvtLkdbQkWvMCAGZWNWqEjTSU~78Tommihb3lsTCV1YC9zrEfy2IIKCmlAmqZAzfRD6rVqW6-RVCwhGz3r-2jIxQt4jDdzRFakKgV4ilpNEz7q39lgvkBZLjWjnYqIKQ0RS9BtGGeQ22u4n5RhZKVTWKLu98ojX60onPgs5cDQJf4FM0A__"
                alt="image"
              />
              <p className="duration">02:01</p>
            </div>
            <div className="short">
              <div className="viewsers-btn">
                <svg
                  width="20"
                  height="14"
                  viewBox="0 0 20 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.69654 7.26867C1.63897 7.09594 1.63891 6.90895 1.69638 6.73619C2.85335 3.2581 6.13424 0.75 10.0009 0.75C13.8658 0.75 17.1454 3.25577 18.3038 6.73134C18.3614 6.90406 18.3615 7.09106 18.304 7.26381C17.147 10.7419 13.8661 13.25 9.99946 13.25C6.13458 13.25 2.85494 10.7442 1.69654 7.26867Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.5002 7C12.5002 8.38071 11.381 9.5 10.0002 9.5C8.61953 9.5 7.50025 8.38071 7.50025 7C7.50025 5.61929 8.61953 4.5 10.0002 4.5C11.381 4.5 12.5002 5.61929 12.5002 7Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>521</span>
              </div>
              <img
                src="https://s3-alpha-sig.figma.com/img/8da6/2f73/0c1bf7fcc517b68742f0a53adeed1379?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BXf3v-MLExaWHIulLiB8oDAjnK-UVlN12ma2g2syTMGwfzMaysVDTFroy~wC5FI4qSBQR0z1fohZgiMDy4Swp2V7lanIrEMJ94wsEtwE04-ruPLRNv2Xw-EXkU11uPcQYyuEmIn24~vIneav3A-9cCsR3rwo3X2judqGHoAJasEdIRTF5BO1ifa3MQH0Z8rvjy2d9WcF~Z~D~DqlazOBtu6kaT1Fso8HTJSDDY5BQ9udEdp6KcNvSKBfx8crKwmGgCbSgcp7w-GphYxPcRTiZQDb0tLK42r9TTCPkMXwi3aQ47Yps32QXhd9LVt4RAkHvsHx6tRUNO0BDWvJgqLJRA__"
                alt="image"
              />
              <p className="duration">04:15</p>
            </div>
          </div>
        </div>
        <div
          style={{
            display: isSmallDevice ? 'flex' : '',
            justifyContent: isSmallDevice ? 'center' : '',
          }}>
          <button className="see-btn">Смотреть все</button>
        </div>
        {/* <div className="post-images">
          <article className="postImage">
            <img
              src="https://s3-alpha-sig.figma.com/img/4fc0/9f70/080bb5a8bd24769de777cf4a8c86ef95?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DX2zJ~6wu3qm2lIRJDgWt~9WRnliBDqlhDgj23obnMIXBi~eRGPfXCj0BJLm5y3ld0Ue~f-OPll6cWCUfJKYaLelbVJea1TjqYIeanOr22ijDwL8GhnXXyvfrtqpAQLjkX5JfTMYxOOyuT7V9g3wmeioxfYAsBRYWqY0cPvVYgpa7nPZ8DoAv0Cx062wH1JaytE8XyT~wPYA58wvujjPBPEtKTYChs8rrTKo8L9fmHFZmUeoH6RrLePOSaLs~yBZ8AQ6AZJyEslvqHIadwtbbc0ewGFDVucTeN62TnWh7VeEPxn2eJZwQ9imcp2M3s6klSZo3ZcR58LFmYcTQxO3fQ__"
              alt="post image"
            />
          </article>
          <article className="postImage">
            <img
              src="https://s3-alpha-sig.figma.com/img/5b11/bc1d/9133ed899972c506cd93e7f067d8a5d4?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o3pH14Ol-omoCwl~JIxtMZekYRyh1sX-R0UrTc2wlW3BQyfTcimqxYPGsZ7MLdFMf90hqUDaLnA1Ll4MS12WTZ3ixoKci0-FGzKKhgTfBjVlSo5nIB3ufvmsf2l2d-hWs0lRYsR0DofuIyDDuienjKeEvAoJKRvWcsygBtDyIv6dJg-KaedUU3-tOzz9KYjoXzHEeNNvit5syB4sulo2WIXXxPxkymOAaz8RFNsOaxHgxgj7qPRqk9dxGERRbbsfCTGrBgPNCImmOa9F7~LriQ9ZYCJfs~vtzVry9k1yCQjQdDOqab4r7dGxSbzZYiyOUfda~xYTa3iMRj2SKJH1MA__"
              alt="post image"
            />
          </article>
          <article className="postImage">
            <img
              src="https://s3-alpha-sig.figma.com/img/3faa/389f/a79ffd661bf4348064141796e652307c?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MaXa4dsGp~XWkoqB1aV3MAFRoSxCXtkCRg87YiUuCN7MKVy3d8ABl-1o~nIRcLRNDFzJzxvNMeSnExxM5IwgA53FdchcXP-YDiqbxToC1Fp3wEKz0yP4ZWKbkGv0GQ0bmBAmEeIzxbn8EtsA0UqosMzXjZ4E4Q0W1oKTn~Tm6DKkZeCbDLoNc-1n-1Eswf-Z8OWhdOcmHTzi8efIaQ2wk48Wz5KZdfnDJMjBS8r6D3zadeAFLfwLQ~r5AB1qnd5qDfPdcmHnD6r749mY-i9RZaIX-3LH3MvpALcwZiFX0GM7U8b9Tv1Rt9ksNq4WU9H41yFpImmuzzlYnYNiyLlW9A__"
              alt="post image"
            />
          </article>
          <article className="postImage">
            <img
              src="https://s3-alpha-sig.figma.com/img/fe6f/f3be/0221bc0bce1995608a5ac74ed86548f3?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J~dXEBVacXhNwtisL5OYCOrD70d8o~LGhNNbduT29dt40SY5Gz2kofBRfXIMK5PjauuWMbNq~r2DV6RFnawmGgqswpFFYoD9uutFzN2TUjYcLpA39alfAnqJ7Asa59jm2HEIeK1mUrTJ1kvLlCEIFghR3d3yKJ17uzum-aVSco3YZulutK-IOCLkpRp46XHy8CH1Frt29RwkljI~l~VAJO9s1d6nP3mnn1bbYyDqA5oQTgFSYy9Vrb2nuXfBugfYG~FuFh-oYHd4sxYjic0hbB-N2wlG4xl9nCuWTvzOmW7Q94BqxX76lqLbbYYpN0nKfDIohOd3rM1L2CxioGQ0dQ__"
              alt="post image"
            />
          </article>
          <article className="postImage">
            <img
              src="https://s3-alpha-sig.figma.com/img/e27d/ce73/aedcffc005bc4b2c5d28444094d500e9?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xnr89AU4B30gaR3GnGtOY4H~EaO4jP2-dbAiQqiJ~CQ2t~W1gulHMBIhPnenfYJBqyDx-Aj5uotsCmX6RbdQtTz2RQISKG9M7MjjZ7DaXasSkB4JNf1IMljSLZDdkaNJHWtQ8XBXI6CYTWy9SpOvk8rZNyW-en5VvcVdVMMwHYCeLhG1iZpndpmPzbrObsV0HKcOHHvx~5c6k87tgfSZiZIs5AgfAQGZMZqHbET7jrDSXaKDbfnatbAiy3zXvdUh6jNRxN45PWlXjACvSKSB-eX0WIUXHYxJL9AkLzxIwofWKzixO3qVLuJYTh4WpZlj9NkAKSaoHEYg2X1JOnQjEA__"
              alt="post image"
            />
          </article>
          <article className="postImage">
            <img
              src="https://s3-alpha-sig.figma.com/img/2c79/7c46/ef995f52ee1868b07d7451716aea0da7?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HSvgUrv~6GQaQWdHmbRYI5ugHAEfV2KbCAw5R41c4mYpy0Ud9qBujsO~HCPXjtXkKJBJRjBuT5mLEUuM4yIHPahS5dwsT-viA3MSemY3aT77XIhYZUvZfrI7Jg4Bhi4IZs7Cl914mhYjUYwLQiF2ZqWX0cT4~vroJiwy92BtRvNMqOEXtHxrMC5~nNYo1NvVJfnmSpd14pXNJK4VvyOFLdNHcnTai0yLoUKnun2UZlEjIClnCWI3EG4lqbgdUtNQPSJC6RaIngs9UlTocL0sWWCvuD4AFcFCQDaWY39KIvtZ0sXXrHy3UjilH~3Am3NdqkSAlarteijHJAlvTLWNYQ__"
              alt="post image"
            />
          </article>
        </div> */}
      </div>
    </div>
  );
}

export default AchivmentPost;
