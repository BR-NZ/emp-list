import { Component } from 'react'
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeeList from '../employee-list/employee-list';
import EmployeeAddForm from '../employee-add-form/employee-add-form';
import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.idCurr = 10;
        this.state = {
            data: [
                {name: 'Alex N.', salary: 900, increase: true, id: 1},
                {name: 'Mike M.', salary: 800, increase: false, id: 2},
                {name: 'Sam J.', salary: 760, increase: false, id: 3},
                {name: 'Nickolas O.', salary: 500, increase: true, id: 4},
                {name: 'Olga F.', salary: 980, increase: false, id: 5},
            ]
        };
    }

    onItemAdd = (person) => {
        person.id = ++this.idCurr;
        const newData = this.state.data.slice();
        newData.push(person);
        this.setState( {data: newData} );
    }

    onItemDelete = (id) => {
        const { data } = this.state;
        const newData = data.filter(item => item.id !== id);
        this.setState( {data: newData} );
    }

    render() {
        const { data } = this.state;
        return (
            <div className="app">
                <AppInfo />
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
                <EmployeeList data={ data } onDelete={ this.onItemDelete } />
                <EmployeeAddForm onAdd={this.onItemAdd} />
            </div>
        );
    }
};

export default App;