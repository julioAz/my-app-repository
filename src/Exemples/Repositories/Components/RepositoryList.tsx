import React, { useEffect, useState } from 'react';
import './style.css'

function RepositoryList (){
    const [repositories, setRepositories] = useState<any[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/users/julioAz/repos')
        .then(response => response.json()
        .then(data => setRepositories(data)
        ));
    } , []);

    console.log(repositories)

    return (
        <ul>
            {repositories.map(repository => (
                <li key={repository.id}>
                    {repository?.name} - {repository.language} - {repository?.description}
                </li>
            ))}
        </ul>
    )
}

export default RepositoryList