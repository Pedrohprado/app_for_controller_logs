import React from 'react';
import SkeletonInfo from '../helpers/skeleton/skeletoninfo';
import { useNavigate } from 'react-router-dom';
import DeleteButton from '../components/deletebutton';
function InkTec() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [clickQuest, setClickQuest] = React.useState(false);

  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const url = import.meta.env.VITE_BASE_URL_GET_INKTEC;
        const response = await fetch(url);
        const info = await response.json();
        info.forEach((item) => {
          item.hours = new Date(item.createdAt).toLocaleTimeString('pt-BR');
          item.createdAt = new Date(item.createdAt).toLocaleDateString('pt-BR');
        });
        info.reverse();
        setData(info);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  React.useEffect(() => {
    const time = setTimeout(() => {
      if (clickQuest) {
        setClickQuest(false);
      }
    }, 2000);

    return () => {
      clearTimeout(time);
    };
  }, [clickQuest]);

  function questClick() {
    setClickQuest(!clickQuest);
  }

  async function handleClick() {
    try {
      const url = import.meta.env.VITE_BASE_URL_DELETE_LOGS_INK;
      const response = await fetch(url, {
        method: 'DELETE',
      });

      if (response.ok) navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className=' mt-[80px]'>
      <section className=' flex flex-col gap-3 max-h-[80%] overflow-y-auto items-center p-4 '>
        {data && !loading ? (
          data.map(({ card, createdAt, hours, id, office, user }) => (
            <ul
              key={id}
              className=' w-full shadow rounded flex flex-col p-2 px-4 gap-1 bg-white'
            >
              <>
                <span className=' flex items-center justify-between'>
                  <li className=' text-sm font-medium'>{user.slice(0, 15)}</li>
                  <li className=' text-sm font-medium'>{card}</li>
                </span>
                <li className=' text-sm'>{office}</li>
                <span className=' flex items-center justify-between mt-2 '>
                  <li className='text-cyan-950'>{createdAt}</li>
                  <li className='text-cyan-800 font-medium'>{hours}</li>
                </span>
              </>
            </ul>
          ))
        ) : (
          <>
            {Array.from({ length: 7 }).map((_, index) => (
              <SkeletonInfo key={index} />
            ))}
          </>
        )}

        {data.length >= 1 ? (
          <DeleteButton
            clickQuest={clickQuest}
            handleClick={handleClick}
            questClick={questClick}
          />
        ) : null}
      </section>
    </main>
  );
}

export default InkTec;
