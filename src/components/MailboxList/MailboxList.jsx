import { Link } from "react-router";

export default function MailboxList({ mailboxes }) {
    if (!mailboxes || mailboxes.length === 0) {
        return (
            <main>
                <h1>Mailboxes</h1>
                <p>No mailboxes available. Add a new mailbox to get started!</p>
                <Link to="/new-mailbox">
                    <button>Add New Mailbox</button>
                </Link>
            </main>
        );
    }

    return (
        <main>
            <h1>Mailboxes</h1>
            <div className="mail-box-container">
                {mailboxes.map((mailbox) => (
                    <div key={mailbox._id} className="mail-box">
                        <h3>Box #{mailbox._id}</h3>
                        <p>Size: {mailbox.boxSize}</p>
                        <p>Owner: {mailbox.boxOwner}</p>
                        <Link to={`/mailboxes/${mailbox._id}`}>
                            <button>View Details</button>
                        </Link>
                    </div>
                ))}
            </div>
        </main>
    );
}