import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className=' w-full h-screen p-4 flex flex-col items-center mt-[80px]'>
      <section className=' w-full grid grid-cols-2 mt-4 gap-2'>
        <Link
          to={'/controle/inktec'}
          className='flex flex-col items-center justify-center bg-slate-200 h-40 rounded text-lg font-medium'
        >
          INK Tec
        </Link>
        <Link
          to={'/controle/contrapeso'}
          className='flex flex-col items-center justify-center bg-slate-200 h-40 rounded text-lg font-medium'
        >
          Contrapeso
        </Link>
        <Link className='flex flex-col items-center justify-center bg-slate-200 h-40 rounded font-medium'>
          ...
        </Link>
        <Link className='flex flex-col items-center justify-center bg-slate-200 h-40 rounded font-medium'>
          ...
        </Link>
      </section>
    </main>
  );
};

export default Home;
