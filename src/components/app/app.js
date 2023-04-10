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
                {name: 'Alex N.', salary: 900, increase: true, rise: false,id: 1},
                {name: 'Mike M.', salary: 800, increase: false, rise: false, id: 2},
                {name: 'Sam J.', salary: 760, increase: false, rise: false,id: 3},
                {name: 'Nickolas O.', salary: 500, increase: true, rise: false,id: 4},
                {name: 'Olga F.', salary: 980, increase: false, rise: true,id: 5},
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

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(id === item.id) return {...item, [prop]: !item[prop]};
                return item;
            })
        }));
    }

    render() {
        const { data } = this.state;
        const incresed = data.filter(item => item.increase).length;
        const count = data.length;
        return (
            <div className="app">
                <AppInfo count={ count } increased={ incresed } />
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
                <EmployeeList data={ data } 
                            onToggleProp={ this.onToggleProp } 
                            onDelete={ this.onItemDelete } />
                <EmployeeAddForm onAdd={this.onItemAdd} />
            </div>
        );
    }
};

export default App;