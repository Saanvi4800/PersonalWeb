import React from 'react';
import { Link } from "react-router-dom";
import './bottom.css';
import Icon from '@hackclub/icons'
import h from '/src/assets/hc.svg';

function Bottom() {
  return (
    <footer className="bottom-nav">
      <div className="footer-text">
        made with reactjs and ♥ - saanvi tripathi © 2026
      </div>
      <pagering-link theme="light"></pagering-link>
    </footer>
  );
}

export default Bottom;