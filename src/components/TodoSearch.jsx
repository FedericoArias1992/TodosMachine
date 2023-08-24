
function TodoSearch({search, setSearch}){
    return (
        <div>
        <input placeholder="Busca la tarea a realizar!"
            onChange={(event) => setSearch(event.target.value)}
        />
        </div>
    );
  }
  export { TodoSearch };