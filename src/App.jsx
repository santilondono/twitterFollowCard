import { useState, useEffect } from 'react';
import './App.css'
import { TwitterFollowCard } from "./components/TwitterFollowCard";

export function App () {

    //Esto se ejecuta cuando se carga el componente
    useEffect(() => {
        leerUsuarios()
    }, [])

    const formatUserName = (userName) => `@${userName}`

    const [users, setUsers] = useState([])

    function leerUsuarios() {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then((response) => response.json())
          .then((data) => setUsers(data))
    
        console.log(users);
    }

    return(
        <div className="App">
            {/* Renderizacion de lista de objetos */}
            {/* {
                users.map(({name, username, id}) =>(
                    <TwitterFollowCard
                        formatUserName={formatUserName}
                        key={id}
                        userName={username}
                        initialIsFollowing={true}
                    >
                        {name}
                    </TwitterFollowCard>
                ))
            } */}
            <TwitterFollowCard 
            formatUserName={formatUserName}
            initialIsFollowing 
            userName="santilo.03" 
            avatar="https://randomuser.me/api/portraits/lego/2.jpg" >
                Santiago Londoño
            </TwitterFollowCard>

            <TwitterFollowCard 
            formatUserName={formatUserName} 
            userName="nataliag24" 
            avatar="https://randomuser.me/api/portraits/women/68.jpg" >
                Natalia Gomez
            </TwitterFollowCard>

            <TwitterFollowCard 
            formatUserName={formatUserName} 
            userName="felipe07" 
            name="Felipe López" 
            avatar="https://randomuser.me/api/portraits/men/54.jpg" >
                Felipe López
            </TwitterFollowCard>
        </div>
    )
}