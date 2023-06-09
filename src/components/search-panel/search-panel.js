import { Component } from 'react';
import './search-panel.scss';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };
    }

    onType = (e) => {
        const term = e.target.value;
        this.setState({
            term: term
        });
        this.props.onUpdateSearch(term);
    }

    render() {
        const { term } = this.state;
        return (
            <input type="text" value={ term } className="form-control search-input" placeholder="Найти сотрудника.." onChange={ this.onType }/>
        );
    }
};

export default SearchPanel;