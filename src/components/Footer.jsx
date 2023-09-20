import Card from "react-bootstrap/Card";

export default function Footer() {
    return (
        <>
            <Card style={{ backgroundColor: 'white', borderColor: 'white' }} className="text-center">
                <Card.Footer className="bg-white text-muted pt-3 pb-3">Copyright ©️ Joe Debrah</Card.Footer>
            </Card>

        </>
    );
}