import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.svg";
import Loading from "../atomic/Loading";

export default function Home() {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://63cf09718a780ae6e6710dbe.mockapi.io/users") //aqui eu coloco minha API
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false); //enquanto a API não responder setIsloading é verdadeiro e o carregamento falso
      });
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <div className="home center">
      <div className="home__logo">
        <img src={logo} className="responsive" alt="" />
      </div>
      <select
        onChange={(event) => setCurrentUser(event.target.value)} //grava o valor do dropdow clicado, para fazer roteamento
        className="home__select-users"
      >
        <option value="">selecione um usuário</option>
        {users
          .sort((a, b) => a.fn.localeCompare(b.fn)) //coloca em ordem alfabética
          .map((user) => (
            <option value={user.id}>
              {user.fn} {user.ln}
            </option>
          ))}
      </select>
      {!!currentUser && (
        <button
          onClick={() => navigate(`/Users/${currentUser}`)} //direciona para a rota solicitada
          className="button-primary"
        >
          Entrar
        </button>
      )}
    </div>
  );
}
