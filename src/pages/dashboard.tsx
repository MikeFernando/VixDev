import { useCallback, useState } from "react";

import { ActivitiesTable } from "../components/ActivitiesTable";
import { Header } from "../components/Header";
import { NewActivityModal } from "../components/NewActivityModal";

import styles from './dashboard.module.scss';

export default function Dashboard() {
  const [isNewActivityModalOpen, setIsNewActivityModalOpen] = useState(false);

  const handleOpenActivityModal = useCallback(() => {
    setIsNewActivityModalOpen(true);
  }, [setIsNewActivityModalOpen]);

  const handleCloseActivityModal = useCallback(() => {
    setIsNewActivityModalOpen(false);
  }, [setIsNewActivityModalOpen]);

  return (
    <main className={styles.container}>
      <Header onOpenActivityModal={handleOpenActivityModal} />
      <ActivitiesTable />
      <NewActivityModal isOpen={isNewActivityModalOpen} onRequestClose={handleCloseActivityModal} />
    </main>
  )
}
