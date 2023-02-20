
import AppInfo from '../app-info/app-info'; 
import './app.css';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

function App() {

    const data = [
        {name: 'A. Smith', salary: 800, increase: false},
        {name: 'D. Draper', salary: 1500, increase: true},
        {name: 'H. Spectre', salary: 12300, increase: true}
    ];

    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            
            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>
    )
}

export default App;