import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addToDo, deleteToDo, updateToDo } from "./redux/reducers/todoReducer";

function App() {
  const { value } = useSelector((state) => state.todo);
  const [currValue, setCurrValue] = useState("");
  const [updateValue, setUpdateValue] = useState("");
  const [guncelleniyor, setGuncelleniyor] = useState(false);
  const [selectedToDo,setSelectedToDo] = useState();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addToDo(currValue));
    setCurrValue("");
  };

  const guncelle = (todo) => {
    setGuncelleniyor(!guncelleniyor);
    setSelectedToDo(todo)
    setUpdateValue("")
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          value={currValue}
          onChange={(e) => setCurrValue(e.target.value)}
        />
        <button type="submit">Todo Ekle</button>
      </form>

      <ul>
        {value.map((todo, index) => {
          return (
            <li>
            {guncelleniyor && todo === selectedToDo ? (<input defaultValue={todo} onChange={(e) => setUpdateValue(e.target.value)}/>) :(todo)}
            
            
              
              <button onClick={() => dispatch(deleteToDo(todo))}>sil</button>
              <button
                onClick={
                  guncelleniyor === false
                    ? () => {
                     
                      guncelle(todo)
                      
                      }
                    : () => { 
                    dispatch(updateToDo({index,updateValue}))
                    setGuncelleniyor(!guncelleniyor)
                    
                }
                }
              >
                Güncelle
              </button>
            </li>
          );
        })}
      </ul>
      <h3>{currValue}</h3>
    </div>
  );
}

export default App;
