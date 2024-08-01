import {Car} from "./car.dto";
import CarPriceTable from "./CarPriceTable";

const cars: Car[] = [
    { id: 1, name: 'Innova Cross', imported: true, price: 45000 },
    { id: 2, name: 'VF9', imported: false, price: 60000 },
    { id: 3, name: 'Santa Fe', imported: true, price: 50000 },
    { id: 4, name: 'Outlander', imported: false, price: 40000 },
    { id: 5, name: 'Your Full Name', imported: false, price: 65000 }
];

const App2 = () => {
    return (
        <div>
            <CarPriceTable cars={cars} />
        </div>
    );
};

export default App2;