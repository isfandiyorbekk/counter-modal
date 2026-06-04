import React from "react";
import Buttons from "./Buttons";
import { useState } from "react";
import Modal from "./Modal";
function App() {
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  const [showBtn, setBtn] = useState(true);
  return (
    <div>
      <div className="w-100 border p-2.5 m-auto">
        <h1 className="text-[80px] text-center">{count}</h1>
        <Buttons
          text="Increment"
          variant="primary"
          onClick={() => setCount(count + 1)}
        />
        <Buttons
          text="Decrement"
          variant="two"
          onClick={() => {
            if (count) {
              setCount(count - 1);
            }
          }}
        />
        <Buttons text="Reset" variant="dark" onClick={() => setCount(0)} />
      </div>
      <div>
        {showBtn && (
          <Buttons
            text={"Modal"}
            variant={"modal"}
            onClick={() => {
              (setOpen(true), setBtn(false));
            }}
          ></Buttons>
        )}
        {open && (
          <Modal isOpen={setOpen} showBtn={setBtn}>
            <h1>Salom</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              velit cupiditate nisi fuga exercitationem veritatis itaque
              obcaecati in deleniti! Cumque error ducimus debitis. Alias sed
              commodi voluptas fugiat quae nulla, fuga, itaque laboriosam
              tenetur quas corrupti at repudiandae, neque ipsam molestiae
              laudantium autem magnam. Exercitationem delectus nesciunt nam
              eveniet ratione?
            </p>
          </Modal>
        )}
      </div>
    </div>
  );
}

export default App;
