import EmployeeListItem from '../employee-list-item/employee-list-item';
import './employee-list.css';

const EmployeeList = ({ data, onDelete, onToggleProp }) => {
    const items = data.map(item => <EmployeeListItem 
                                        name={ item.name } 
                                        salary={ item.salary } 
                                        increase={ item.increase } 
                                        rise={ item.rise } 
                                        onDelete={ (e) => onDelete(item.id) }
                                        onToggleProp={ (e) => onToggleProp(item.id, e.currentTarget.getAttribute('data-toggle')) } 
                                        key={ item.id } />);

    return(
        <ul className="app-list list-group">
            { items }
        </ul>
    );
};

export default EmployeeList;