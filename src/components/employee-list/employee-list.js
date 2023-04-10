import EmployeeListItem from '../employee-list-item/employee-list-item';
import './employee-list.css';

const EmployeeList = ({ data, onDelete }) => {
    const items = data.map(item => <EmployeeListItem 
                                        name={item.name} 
                                        salary={item.salary} 
                                        increase={item.increase} 
                                        onDelete={ () => onDelete(item.id) }
                                        key={item.id} />);

    return(
        <ul className="app-list list-group">
            { items }
        </ul>
    );
};

export default EmployeeList;