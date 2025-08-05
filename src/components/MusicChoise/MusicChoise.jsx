import React, { useState } from 'react';
import styles from './MusicChoise.module.css';

const MAX_SONGS = 5;

const MusicChoise = () => {
  const [songs, setSongs] = useState(['Flores amarillas', 'El renegado']);
  const [newSong, setNewSong] = useState('');

  const addSong = () => {
    if (newSong.trim() && songs.length < MAX_SONGS) {
      setSongs([...songs, newSong.trim()]);
      setNewSong('');
    }
  };

  const removeSong = (index) => {
    setSongs(songs.filter((_, i) => i !== index));
  };

  return (
    <div className={styles.musicContainer}>
      <h3 className={styles.title}>Música</h3>

      <ul className={styles.songList}>
        {songs.map((song, i) => (
          <li key={i} className={styles.songItem}>
            🎵 {song}
            <button className={styles.deleteBtn} onClick={() => removeSong(i)}>✕</button>
          </li>
        ))}
      </ul>

      {songs.length < MAX_SONGS && (
        <div className={styles.inputGroup}>
          <input
            type="text"
            placeholder="Agregar canción"
            value={newSong}
            onChange={(e) => setNewSong(e.target.value)}
            className={styles.input}
          />
          <button onClick={addSong} className={styles.addBtn}>+</button>
        </div>
      )}

      <button className={styles.saveBtn}>Guardar</button>
    </div>
  );
};

export default MusicChoise;
