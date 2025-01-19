import { useParams } from "react-router";


export default function MailboxDetails(props) {
    const { mailboxId } = useParams();
    const selectedBox = props.mailboxes.find((mailbox) => (
       mailbox._id === Number(mailboxId)
    ));

    if (!selectedBox){return (<div>Mailbox not found</div>)}

    return (
        <main>
            <h2>Mailbox Details</h2>
            <p>Box Number: {selectedBox._id}</p>
            <p>Size: {selectedBox.boxSize}</p>
            <p>Owner: {selectedBox.boxOwner}</p>            
        </main>
    )
}