import React, { useState, useEffect } from "react";
import axios from "axios";

import Modal from "./components/Modal";
import "./App.scss";

function App() {
  const [users, setUsers] = useState<any[]>([]);
  const [showPostModal, setShowPostModal] = useState(false);
  const [info, setInfo] = useState();

  useEffect(() => {
    const getUsers = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(data);
    };

    getUsers();
  }, []);

  function togglePostModal(item: any) {
    setShowPostModal(!showPostModal); //trocando de true pra false
    setInfo(item);
  }

  return (
    <>
      <div className="App">
        <table className="table">
          <thead>
            <tr>
              <th> Nome </th>
              <th> Email </th>
              <th> Telefone </th>
              <th> Endereço Completo </th>
              <th> Cidade </th>
              <th> Empresa </th>
            </tr>
          </thead>
          <tbody>
            {users.map((item, index) => (
              <tr key={item.id} onClick={() => togglePostModal(item)}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>
                  {item.address.street},{item.address.suite}.
                  {item.address.zipcode}
                </td>
                <td>{item.address.city}</td>
                <td>
                  {(item.id - 1) % 3 === 0 && (item.id - 1) % 5 === 0 ? (
                    <p>TC / SENCON</p>
                  ) : (item.id - 1) % 3 === 0 ? (
                    <p>TC</p>
                  ) : (item.id - 1) % 5 === 0 ? (
                    <p>SENCON</p>
                  ) : (
                    <p>SEM EMPRESA</p>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {showPostModal && <Modal content={info} close={togglePostModal} />}
      </div>
    </>
  );
}

export default App;
