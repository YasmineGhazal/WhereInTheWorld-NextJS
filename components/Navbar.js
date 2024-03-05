'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Light = () => (
  <>
    <Image src="/light_mode.svg" alt="light_mode_icon" className="mode-ico" height="30" width="30" />
    <span>Light Mode</span>
  </>
);

const Dark = () => (
  <>
    <Image src="/dark_mode.svg" alt="dark_mode_icon" className="mode-ico" height="30" width="30" />
    <span>Dark Mode</span>
  </>
);

const Navbar = () => {
  const [lightMode, setLightMode] = useState(true);

  const toggleMode = () => {
    document.body.classList.toggle('dark');
    setLightMode((lightMode) => !lightMode);
  }

  return (
    <div className="navbar">
      <div className="navbar-content">
        <Link href="/"><div className="title"> Where in the world?</div></Link>
        <div
          className="mode"
          onClick={toggleMode}
        >
          {lightMode ? <Dark /> : <Light />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
