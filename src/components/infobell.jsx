import React from 'react';

/* eslint-disable react/prop-types */
function InfoBell({ notification, setNotification }) {
  const [isRemoving, setIsRemoving] = React.useState(false);

  function handleClick(index) {
    console.log(notification);

    setNotification((prevNotification) =>
      prevNotification.filter((_, i) => i !== index)
    );
    setIsRemoving(true);
  }
  if (notification)
    return (
      <nav className='shadow p-4 w-3/4 h-1/2 max-h-[50%] overflow-y-auto bg-white text-black z-20 fixed top-12 right-12 rounded  opacity-0 translate-x-[5px] animate-animationleft'>
        <h2 className=' mb-2 font-medium '>novos logins</h2>
        {notification.map((item, index) => (
          <ul
            onClick={() => handleClick(index)}
            key={index}
            className={`cursor-pointer w-full flex p-2 mb-4 h-16 shadow justify-between items-center transition-transform duration-500 ease-in-out ${
              isRemoving
                ? 'transform translate-x-10'
                : 'transform translate-x-0'
            }`}
          >
            <li className=' text-sm'>{item}</li>
          </ul>
        ))}
      </nav>
    );
}

export default InfoBell;
