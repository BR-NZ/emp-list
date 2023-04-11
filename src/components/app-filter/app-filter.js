import { Component } from 'react';
import './app-filter.css';

class AppFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttons: [
                {label: 'Все сотрудники', name: 'all'},
                {label: 'На повышение', name: 'rise'},
                {label: 'З/П выше 1000$', name: '>1000'}
            ],
            mode: 'all'
        };
    }
    onToggle = (e) => {
        if(e.target.hasAttribute('data-toggle')) {
            let mode = e.target.getAttribute('data-toggle');
            this.setState({
                mode: mode
            });
            this.props.onToggleFilter(mode);
        }
    }
    render() {
        const mode = this.state.mode;
        const btns = this.state.buttons.map((btn, i) => {
            const classMix = (btn.name === mode) ? 'btn-light' : 'btn-outline-light';
            return (
                <button type="button" data-toggle={ btn.name } className={`btn ${ classMix }`} key={ i }>
                    { btn.label }
                </button>
            );
        });
        return (
            <div className="btn-group" onClick={ this.onToggle }>
                { btns }
            </div>
        );
    }
};

export default AppFilter;