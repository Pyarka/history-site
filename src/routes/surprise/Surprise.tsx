import React from 'react';
import './Surprise.css';
import audioFile from "./mem.mp3";

function Surprise() {

  const [flag, setFlag] = React.useState(false)

  React.useEffect(() => {
    const elem: any = document.getElementById("audio")
    if (elem) {
      elem.play().catch((error: any) => {
        document.addEventListener('click', () => {
          const d: any = document.getElementById("audio")
          d.play()
          setFlag(true)
        }, { once: true })
      })

    }
  }, [])

  const renderBack = () => {
    if (flag) {
      return (
        <a
          className="App-link"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Назад
        </a>
      )
    } else {
      return (
        <p>НАЖМИ НА КАРТИНКУ!!!</p>
      )
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <audio id="audio" autoPlay={true} src={audioFile}></audio>
        <img src={"https://avatars.mds.yandex.net/i?id=d047343620c07089617072174d537934399dfed6-8497333-images-thumbs&n=13"} className="App-logo" alt="k" />
        <p>
        </p>
        {renderBack()}
      </header>
    </div>
  );
}

export default Surprise;
