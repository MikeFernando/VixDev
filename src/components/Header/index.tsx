import { useContext } from 'react';
import { RiSearchLine } from 'react-icons/ri';

import styles from './styles.module.scss';

type HeaderProps = {
  onOpenActivityModal: () => void;

}

export function Header({ onOpenActivityModal }: HeaderProps) {

  return (
    <header className={styles.headerContainer}>
      <h1>Vix Dev</h1>      

      <div className={styles.profile} onClick={onOpenActivityModal}>
          <button>
            Nova atividade
          </button>
      </div>
    </header>
  )
}
