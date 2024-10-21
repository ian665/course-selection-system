import React, { useEffect, useState } from 'react';
import './LoginPage.css'; 
import './background.css';
import { useNavigate } from 'react-router-dom';

function createBubble() {
  const bubble = document.createElement('div');
  bubble.className = 'bubble';

  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  const size = Math.random() * 40 + 20;
  const color = getRandomColor();
  bubble.style.left = x + 'px';
  bubble.style.top = y + 'px';
  bubble.style.width = size + 'px';
  bubble.style.height = size + 'px';
  bubble.style.backgroundColor = color;

  document.body.appendChild(bubble);

  const animationDuration = Math.random() * 6 + 4;
  bubble.style.animationDuration = animationDuration + 's';

  bubble.addEventListener('animationend', () => {
    bubble.remove();
  });
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function LoginPage() {
  const [selectedAccount, setSelectedAccount] = useState('Student');
  const navigate = useNavigate();

  // 使用 useEffect 來啟動背景動畫
  useEffect(() => {
    const intervalId = setInterval(createBubble, 1000); // 每秒生成一個泡泡

    // 清除計時器，當組件卸載時停止泡泡生成
    return () => clearInterval(intervalId);
  }, []);

  const handleAccountSelect = (account) => {
    setSelectedAccount(account);
  };
  
  const handleLogin = (e) => { e.preventDefault();
    alert(`Loggin in as ${selectedAccount}`);
    navigate('/home');
  };

  return (  
    <div className='loginContainer'>
      <h2>放假大學選課系統</h2>
      <div className='accountTypeContainer'>
        <div className={`account-type ${selectedAccount === 'Teacher' ? 'selected' : ''}`}
          onClick={() => handleAccountSelect('Teacher')}>
          <img src='/images/teacherimage.jpg' alt='Teacher-image' />
          <div className='accountType'>教職員</div>
          <img className='selectedimage' src='/images/selectedimage.jpg' alt='selectedimage'/> 
        </div>
        <div className={`account-type ${selectedAccount === 'Student' ? 'selected' : ''}`}
          onClick={() => handleAccountSelect('Student')}>
          <img src="/images/studentimage.jpg" alt='Student-image' />
          <div className='accountType'>學生</div>
          <img className='selectedimage' src='/images/selectedimage.jpg' alt='selectedimage'/>
        </div>
      </div>
      <p>請選擇登入身分<br/>請使用學校信箱登入系統</p>
      <form onSubmit={handleLogin} className="loginForm">
        <div className="inputGroup">
          <img src="/images/emailimage.jpg"  alt='passowrdiamge'/>
          <label></label>
          <input type="email" placeholder="請輸入帳號" required />
        </div>
        <div className="inputGroup">
          <img src="/images/passwordimage.jpg" alt='passwordiamge'/>
          <label></label>
          <input type="password" placeholder="請輸入密碼" required />
        </div>
        <button type="submit" className="loginButton">登入</button>
      </form>
  
      <div className="options">
        <p>忘記密碼?</p>
        <a href='localhost'>請點擊這裡</a>
      </div>
    </div>
  );
}
  

export default LoginPage;