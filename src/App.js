import Button from "./components/Button";
import Input from "./components/Input";
import { useState } from "react";
function App() {
  const [todo, setTodo] = useState("");
  const [data, setData] = useState([]);

  const tambahKerja = () => {
    setData([...data, todo]);
    setTodo("");
  };
  const hapusKerja = (index) => {
    console.log(index);
    console.log("masuk");
  };
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  return (
    <div className="App">
      {data.map((item, index) => (
        <div key={index}>
          <h1>{item}</h1>
          <Button name="Hapus" handleClick={hapusKerja(index)} />
        </div>
      ))}
      <Input handleChange={handleChange} value={todo} />
      <Button name="Click disini" handleClick={tambahKerja} />
    </div>
  );
}

export default App;
