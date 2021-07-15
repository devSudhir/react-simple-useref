import "./styles.css";
import { useRef } from "react";
export default function App() {
  const inputRef = useRef();
  const handleClick = () => {
    inputRef.current.focus();
  };
  return (
    <div className="App">
      <input ref={inputRef} type="text" placeholder="input" />
      <button onClick={handleClick}>Click to focus Input</button>
    </div>
  );
}
