import './app-filter.css';

const AppFilter = (props) => {
    const btns = [
        { label: 'Все сотрудники', name: 'all' },
        { label: 'На повышение', name: 'rise' },
        { label: 'З/П выше 1000$', name: '>1000' }
    ];

    const onToggle = (e) => {
        if (e.target.classList.contains('btn')) {
            const mode = e.target.getAttribute('data-toggle');
            props.onToggleFilter(mode);
        }
    };

    const elements = btns.map(btn => {
        const clazz = (btn.name === props.filter) ? 'btn-light' : 'btn-outline-light';

        return (
            <button type="button" data-toggle={btn.name} className={`btn ${clazz}`} key={btn.name}>
                {btn.label}
            </button>
        );
    });

    return (
        <div className="btn-group" onClick={onToggle}>
            {elements}
        </div>
    );
};

export default AppFilter;