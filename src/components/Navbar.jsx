import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm flex justify-between">
      <div className="">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div >
      <div className='flex justify-between gap-5'>
        <h3>
          Home
        </h3>
        <h3>
          All Tiles
        </h3>
        <h3>
          My Profile
        </h3>
      </div>
      <div>
        <h3>Log in</h3>
      </div>
    </div>
  );
};

export default Navbar;