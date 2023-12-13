import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header_container}>
      <ul>
        <li>
          <NavLink to="/listar">Exibir NFs</NavLink>
        </li>
        <li>
          <NavLink to="/cadastrar">Cadastrar NF</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
