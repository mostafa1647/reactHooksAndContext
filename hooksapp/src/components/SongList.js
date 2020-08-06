import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import NewSongForm from "./NewSongForm";


const SongList = () => {
    const [songs, setSongs] = useState([
        {title: 'song 1', id: 1},
        {title: 'song 2', id: 2},
        {title: 'song 3', id: 3},
        {title: 'song 4', id: 4}
    ]);
    const [age, setAge] = useState(20);
    useEffect(() => {
        console.log('songs updated', songs);
    }, [songs]);
    useEffect(() => {
        console.log('Age updated', age);
    }, [age]);
    const addSong = (title) => {
        setSongs([...songs, { title, id: uuidv4() }])
    };
    return (
        <div className="song-list">
            <ul>
                {songs.map(song => {
                    return( <li key={song.id}>{song.title}</li> )
                })}
            </ul>
            <NewSongForm addSong={addSong} />
            <button onClick={() => setAge(age + 1)}>add one to age: {age}</button>
        </div>
    )
};

export default SongList;