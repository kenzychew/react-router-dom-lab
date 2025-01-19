// src/App.jsx

import { useState } from "react";
import { Route, Routes } from 'react-router';
import NavBar from './components/NavBar/NavBar';
import MailboxList from './components/MailboxList/MailboxList';
import MailboxForm from './components/MailboxForm/MailboxForm';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (formData) => {
    const newBox = {
      ...formData,
      _id: mailboxes.length + 1, // Automatically assigns id by adding 1 to current length
      boxSize: formData.boxSize,
      boxOwner: formData.boxOwner
    }
    setMailboxes([...mailboxes, newBox]);
  }

  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<main><h1>Post Office</h1></main>} />
      <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
      <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
      <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} /> 
    </Routes>
    </>
  )
};
  
  export default App;
  