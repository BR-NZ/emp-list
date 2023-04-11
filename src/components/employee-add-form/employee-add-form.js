import { Component } from 'react';
import './employee-add-form.scss';

class EmployeeAddForm extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            name: '',
            salary: ''
        }
        this.state = this.initialState;
    }
    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    clearForm = () => {
        this.setState(this.initialState);
    }
    render() {
        const { onAdd } = this.props;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    if (this.state.name && this.state.salary) {
                        onAdd(this.state);
                        this.clearForm();
                    }
                }}
                    className="add-form d-flex">
                    <input type="text"
                        name="name"
                        value={this.state.name}
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        onChange={this.onValueChange} />
                    <input type="number"
                        name="salary"
                        value={this.state.salary}
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        onChange={this.onValueChange} />

                    <button type="submit" className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        );
    }
};

export default EmployeeAddForm;