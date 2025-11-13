interface CardProps {
    name: string;
    age: number;
    email: string;
    phone: string;
    direction: string;
    ocupation: string;
    date: string;
}

function Card({ name, age, email, phone, direction, ocupation, date}: CardProps) {
    return (<>
        <div className="card">
            <h2>{name}</h2>
            <h3>Edad</h3>
            <p>{age}</p>
            <h3>Email</h3>
            <p>{email}</p>
            <h3>Ocupacion</h3>
            <p>{ocupation}</p>
            <h3>Direccion</h3>
            <p>{direction}</p>
            <h3>Telefono</h3>
            <p>{phone}</p>
            <small>{date}</small>
        </div>
    </>)
}

export default Card