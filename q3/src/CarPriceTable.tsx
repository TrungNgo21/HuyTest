import {Car} from "./car.dto";

interface CarPriceTableProps {
    cars: Car[];
}

const CarPriceTable=({ cars }: CarPriceTableProps) => {
    const calculateRegistrationFee = (car: Car) => {
        return car.imported ? car.price * 0.1 : car.price * 0.05;
    };

    const calculateTotalPrice = (car: Car) => {
        return car.price + calculateRegistrationFee(car);
    };

    return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Imported</th>
                <th>Price</th>
                <th>Registration Fee</th>
                <th>Total Price</th>
            </tr>
            </thead>
            <tbody>
            {cars.map(car => {
                const registrationFee = calculateRegistrationFee(car);
                const totalPrice = calculateTotalPrice(car);
                const rowStyle = {
                    backgroundColor: totalPrice > 60000 ? 'red' : 'green'
                };

                return (
                    <tr key={car.id} style={rowStyle}>
                        <td>{car.name}</td>
                        <td>{car.imported ? 'Yes' : 'No'}</td>
                        <td>{car.price}</td>
                        <td>{registrationFee}</td>
                        <td>{totalPrice}</td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
};

export default CarPriceTable;