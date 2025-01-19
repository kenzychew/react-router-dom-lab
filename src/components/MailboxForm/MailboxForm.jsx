import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function MailboxForm({ addBox }) {
  const [boxSize, setBoxSize] = useState("Small");
  const [boxOwner, setBoxOwner] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Call the addBox function passed as prop
    addBox({boxOwner, boxSize});
    
    // Navigate back to mailboxes list
    navigate('/mailboxes');
  };

  return (
    <main>
      <h1>New Mailbox</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="boxOwner">Enter a Boxholder: </label>
          <input 
            id="boxOwner"
            name="boxOwner"
            value={boxOwner}
            onChange={(event) => setBoxOwner(event.target.value)}
            required
          />

        <label htmlFor="boxSize">Select a Box Size: </label>
          <select
            id="boxSize"
            name="boxSize"
            value={boxSize}
            onChange={(event) => setBoxSize(event.target.value)}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}