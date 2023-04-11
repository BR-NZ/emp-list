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
                { name: 'Alex N.', salary: 900, increase: true, rise: false, id: 1 },
                { name: 'Mike M.', salary: 800, increase: false, rise: false, id: 2 },
                { name: 'Sam J.', salary: 1060, increase: false, rise: false, id: 3 },
                { name: 'Nickolas O.', salary: 500, increase: true, rise: false, id: 4 },
                { name: 'Olga F.', salary: 2980, increase: false, rise: true, id: 5 },
            ],
            filter: 'all',
            term: ''
        };
    }

    onItemAdd = (person) => {
        person.id = ++this.idCurr;
        const newData = this.state.data.slice();
        newData.push(person);
        this.setState({ data: newData });
    }

    onItemDelete = (id) => {
        const { data } = this.state;
        const newData = data.filter(item => item.id !== id);
        this.setState({ data: newData });
    }

    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (id === item.id) return { ...item, [prop]: !item[prop] };
                return item;
            })
        }));
    }

    searchItems = (items, term) => {
        if (!term.length === 0) return items;

        return items.filter(item => {
            return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
        });
    }

    filterItems = (items, mode = 'all') => {
        return items.filter(item => {
            switch (mode) {
                case 'rise': return item.rise;
                case '>1000': return item.salary > 1000;
                default: return true;
            }
        });
    }

    onUpdateSearch = (term) => {
        this.setState({
            term: term
        });
    }

    onToggleFilter = (mode = 'all') => {
        this.setState({
            filter: mode
        });
    }

    render() {
        const { data, filter, term } = this.state;

        const incresed = data.filter(item => item.increase).length;
        const count = data.length;

        const visibleData = this.filterItems(this.searchItems(data, term), filter);

        return (
            <div className="app">
                <AppInfo count={count} increased={incresed} />
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter filter={this.state.filter} onToggleFilter={this.onToggleFilter} />
                </div>
                <EmployeeList data={visibleData}
                    onToggleProp={this.onToggleProp}
                    onDelete={this.onItemDelete} />
                <EmployeeAddForm onAdd={this.onItemAdd} />
            </div>
        );
    }
};

export default App;