import React, { useState } from "react";
import TaskSummary from "./TaskSummary";
import Container from "../UI/Container";
import Modal from "../UI/Modal";
import "./Header.css";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <h1>Petry's Project 1 - Todolist</h1>

      {showModal && <Modal onCloseModal={closeModal} />}
      <Container>
        <div className="header">
          <h2>📖 Today's tasks</h2>
          <TaskSummary />
          <button onClick={() => setShowModal(true)}>+ Add new task</button>
        </div>
      </Container>
    </>
  );
};

export default Header;
