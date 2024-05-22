import React from 'react';
import { HiOutlineBell, HiOutlineArrowSmLeft } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';
import InfoBell from './infobell';

const Header = () => {
  const [title, setTitle] = React.useState('Bem vindo');
  const [notification, setNotification] = React.useState([]);
  const [drop, setDrop] = React.useState(false);
  const location = useLocation();

  const handleSocketMessage = (event) => {
    console.log(event.data);
    setNotification((prev) => [...prev, event.data]);
  };

  React.useEffect(() => {
    const socket = new WebSocket('ws://172.31.98.243:4041');

    // Connection opened
    socket.addEventListener('open', () => {
      socket.send('Connection established');
    });

    // Listen for messages
    socket.addEventListener('message', handleSocketMessage);

    // Cleanup function to close the socket when component unmounts
    return () => {
      socket.close();
    };
  }, []);

  React.useEffect(() => {
    switch (location.pathname) {
      case '/controle/inktec':
        setTitle('INK Tec logs');
        break;
      case '/controle/contrapeso':
        setTitle('Contrapeso logs');
        break;
      default:
        setTitle('Bem vindo');
        break;
    }
  }, [location]);

  return (
    <header className=' w-full h-[80px] bg-cyan-950 z-20 fixed top-0 right-0 text-white'>
      <nav className='w-full h-full  rounded-b flex items-center justify-between p-5'>
        {title !== 'Bem vindo' ? (
          <Link
            to={'/'}
            className=' border rounded p-1 transition hover:bg-white hover:text-cyan-950'
          >
            <HiOutlineArrowSmLeft size={20} />
          </Link>
        ) : null}

        <h2 className=' font-bold text-xl'>{title}</h2>
        <button
          onClick={() => setDrop(!drop)}
          className=' border rounded p-1 transition hover:bg-white hover:text-cyan-950'
        >
          <HiOutlineBell size={20} />
          {notification.length >= 1 ? (
            <div className=' w-2 h-2 rounded-full bg-red-500 fixed right-6 top-10'></div>
          ) : null}
        </button>
        {drop ? (
          <InfoBell
            notification={notification}
            setNotification={setNotification}
          />
        ) : null}
      </nav>
    </header>
  );
};

export default Header;
