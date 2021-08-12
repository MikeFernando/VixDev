import { useContext } from 'react';
import { RiSearchLine } from 'react-icons/ri';

import styles from './styles.module.scss';

type HeaderProps = {
  onOpenActivityModal: () => void;

}

export function Header({ onOpenActivityModal }: HeaderProps) {

  return (
    <header className={styles.headerContainer}>
      <h1>Tasks</h1>
      <label className={styles.searchBox}>
        <input type="text" placeholder="Buscar por status" />
        <RiSearchLine />
      </label>

      <div className={styles.profile} onClick={onOpenActivityModal}>
          <button>
            Nova atividade
          </button>
      </div>
    </header>
  )
}
