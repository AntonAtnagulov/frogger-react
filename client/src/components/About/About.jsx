import React, {useRef} from 'react';
import style from './style.module.css';

export default function About({setAbout, about}) {

  const closeHandler = () => {
    setAbout(!about)
  }
  
    return (
        <div className={style.mainBox}>
            <div className={style.textBox}>
                <p>Hello! My name is ...enter name</p>
                <p>Im a frontend developer</p>
                <p>My stack: React, Redux, PostgreSQL, NodeJS, THREE JS, Sequelize, Socket.IO</p>
                <div onClick={closeHandler} className={style.closeBtn}>
                  <img src='./x-circle.svg'/>
                </div>
            </div>

            <div>

            </div>

            <div className={style.stackBox}>
                <div className={style.iconBackground}>
                    <img
                        src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original-wordmark.svg"
                        title="React"
                        alt="React"
                        width="70"
                        height="70"
                    />
                </div>
                <div className={style.iconBackground}>
                    <img
                        src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/redux/redux-original.svg"
                        title="Redux"
                        alt="Redux "
                        width="70"
                        height="70"
                    />
                </div>
                <div className={style.iconBackground}>
                    <img
                        src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/postgresql/postgresql-original-wordmark.svg"
                        title="Material UI"
                        alt="Material UI"
                        width="70"
                        height="70"
                    />
                </div>
                <div className={style.iconBackground}>
                    <img
                        src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/nodejs/nodejs-original-wordmark.svg"
                        title="CSS3"
                        alt="CSS"
                        width="70"
                        height="70"
                    />
                </div>
                <div className={style.iconBackground}>
                    <img
                        src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/threejs/threejs-original-wordmark.svg"
                        title="ThreeJS"
                        alt="ThreeJS"
                        width="70"
                        height="70"
                    />
                </div>
                <div className={style.iconBackground}>
                    <img
                        src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/sequelize/sequelize-original-wordmark.svg"
                        title="HTML5"
                        alt="HTML"
                        width="70"
                        height="70"
                    />
                </div>
                <div className={style.iconBackground}>
                    <img
                        src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/socketio/socketio-original-wordmark.svg"
                        title="JavaScript"
                        alt="JavaScript"
                        width="70"
                        height="70"
                    />
                </div>
            </div>
            <div className={style.projectBox}>
              <h3>My projects</h3>
              <p>THREE JS landing with GLTF models</p>
              <a href=''>Sci-Fi Weapons</a>
              <p>Stock for 3d models with preview 3d models</p>
              <a href=''>Unicorn 3d stock</a>
              <p>Site for online play role-play games with rooms, videochat and map builder</p>
              <a href=''>Dungeon Online</a>
              <p>Mobile simple counter for board games on React Native</p>
              <a href=''>Simple MTG counter</a>
              <p>Anime opening finder on Legacy stack</p>
              <a href=''>Anime OP Finder</a>
            </div>
        </div>
    );
}