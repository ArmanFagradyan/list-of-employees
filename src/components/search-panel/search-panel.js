import './search-panel.css';

const SearchPanel = () => {
    return (
        <input 
        type="text"
        className="form-control search-input" // bootstrap classes
        placeholder="Найти сотрудника"/>
    )
}

export default SearchPanel;