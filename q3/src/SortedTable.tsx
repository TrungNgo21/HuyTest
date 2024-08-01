import {useState} from "react";
import {Student} from "./student.dto";

interface SortedTableProps {
    students: Student[]
}

interface SortConfig {
    key: keyof Student;
    direction: 'ascending' | 'descending';
}

const SortedTable = ({ students }: SortedTableProps) => {
    const [sortConfig, setSortConfig] = useState<SortConfig | null>(null);

    const sortedStudents = [...students];
    if (sortConfig !== null) {
        sortedStudents.sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? 1 : -1;
            }
            return 0;
        });
    }

    const requestSort = (key: keyof Student) => {
        let direction: 'ascending' | 'descending' = 'ascending';
        if (
            sortConfig &&
            sortConfig.key === key &&
            sortConfig.direction === 'ascending'
        ) {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    return (
        <table>
            <thead>
            <tr>
                <th>
                    <a
                        href="#"
                        onClick={() => requestSort('name')}
                    >
                        Name
                    </a>
                </th>
                <th>Major</th>
                <th>
                    <a
                        href="#"
                        onClick={() => requestSort('GPA')}
                    >
                        GPA
                    </a>
                </th>
            </tr>
            </thead>
            <tbody>
            {sortedStudents.map(student => (
                <tr key={student.id}>
                    <td>{student.name}</td>
                    <td>{student.major}</td>
                    <td>{student.GPA}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default SortedTable;