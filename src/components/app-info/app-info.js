import './app-info.scss';

const AppInfo = ({count, increased}) => {

    return (
        <div className="app-info">
            <h1>Учет сотрудников компании N</h1>
            <h2>Общее число сотрудников: { count }</h2>
            <h2>Премию получат: {increased}</h2>
        </div>
    );
};

export default AppInfo;