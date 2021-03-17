import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import { listSavess } from '../graphql/queries';
import {
  createSaves as createSaveMutation,
  deleteSaves as deleteSaveMutation,
} from '../graphql/mutations';

const initialFormState = { name: '', description: '', link: '' };

const Crud = ({ apodData, getRandomPicture }) => {
  const [notes, setNotes] = useState([]);
  const [formData, setFormData] = useState(initialFormState);
  let [showDescription, setShowDescription] = useState(false);
  let [showCollection, setShowCollection] = useState(false);

  useEffect(() => {
    fetchNotes();
  }, []);

  useEffect(() => {
    formatCurrentImage();
  }, [apodData]);

  async function fetchNotes() {
    const apiData = await API.graphql({ query: listSavess });
    setNotes(apiData.data.listSavess.items);
  }

  async function createNote() {
    if (!formData.name || !formData.description) return;
    await API.graphql({
      query: createSaveMutation,
      variables: { input: formData },
    });
    setNotes([...notes, formData]);
    setFormData(initialFormState);
  }

  async function deleteNote({ id }) {
    const newNotesArray = notes.filter((note) => note.id !== id);
    setNotes(newNotesArray);
    await API.graphql({
      query: deleteSaveMutation,
      variables: { input: { id } },
    });
  }

  let formatCurrentImage = () => {
    if (apodData) {
      setFormData({
        ...formData,
        'name': `${apodData.title} - ${apodData.date}`,
        'description': apodData.explanation,
        'link': apodData.hdurl,
      });
    }
  };

  return (
    <div style={{ marginBottom: 30 }}>
      <button className="myBtn" onClick={() => createNote()}>
        Add to my collection
      </button>
      <button
        className="myBtn"
        onClick={() => setShowCollection(!showCollection)}
      >
        {showCollection ? 'Hide Collection' : 'Show Collection'}
      </button>
      <button className="myBtn" onClick={() => getRandomPicture()}>
        Random Picture
      </button>
      <div
        style={{
          display: showCollection ? 'block' : 'none',
          marginTop: 10,
          borderTop: '3px solid black',
        }}
      >
        <h3>Saved Images</h3>
        {notes.map((note) => (
          <div key={note.id || note.name}>
            <h3>{note.name}</h3>
            <img
              src={note.link}
              alt={note.name}
              style={{ width: '35%', margin: '0 auto' }}
            />
            <p
              style={{
                margin: '1em auto',
                display: showDescription ? 'block' : 'none',
                width: '75vh',
              }}
            >
              {note.description}
            </p>
            <div>
              <button
                className="myBtn"
                onClick={() => setShowDescription(!showDescription)}
              >
                {showDescription ? 'Hide Description' : 'Show Description'}
              </button>
              <button
                className="myBtn"
                id="delBtn"
                onClick={() => {
                  formatCurrentImage();
                  deleteNote(note);
                }}
              >
                Delete Image
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Crud;
