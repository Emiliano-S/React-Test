import { useState } from 'react';
import './App.css';
import { Table } from './components/Table';
import { TableFilters } from './components/TableFilters';
import data from './data/db';

function App() {

  const [list, setList] = useState(data);

  const handleSearch = (select, input)=>{
    const _list = [...data];

    if(input !== ""){
      const filtered = _list.filter((value)=>value[select].match(new RegExp(input,"ig")))
      setList(filtered);
    }else{
      setList(data);
    }
  }

  return (
    <div>
      <TableFilters handleSearch={handleSearch} />
      <Table list={list} />
    </div>
  );
}

export default App;
