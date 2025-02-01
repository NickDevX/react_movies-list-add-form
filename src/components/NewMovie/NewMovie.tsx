import React, { useState } from 'react';
import { TextField } from '../TextField';
import { Movie } from '../../App';

type Props = {
  onAdd: (movie: Movie) => void;
};

export const NewMovie: React.FC<Props> = ({ onAdd }) => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState('');
  const [descr, setDescr] = useState('');
  const [img, setImg] = useState('');
  const [url, setUrl] = useState('');
  const [id, setId] = useState('');
  const isValid = title.trim() && img.trim() && url.trim() && id.trim();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!isValid) {
      return;
    }

    setCount(count + 1);
    onAdd({
      title,
      description: descr,
      imgUrl: img,
      imdbUrl: url,
      imdbId: id,
    });
  };

  return (
    <form className="NewMovie" key={count} onSubmit={handleSubmit}>
      <h2 className="title">Add a movie</h2>

      <TextField
        name="title"
        label="Title"
        value={title}
        onChange={setTitle}
        required
      />

      <TextField
        name="description"
        label="Description"
        value={descr}
        onChange={setDescr}
      />

      <TextField
        name="imgUrl"
        label="Image URL"
        value={img}
        onChange={setImg}
        required
      />

      <TextField
        name="imdbUrl"
        label="Imdb URL"
        value={url}
        onChange={setUrl}
        required
      />

      <TextField
        name="imdbId"
        label="Imdb ID"
        value={id}
        onChange={setId}
        required
      />

      <div className="field is-grouped">
        <div className="control">
          <button
            type="submit"
            data-cy="submit-button"
            className="button is-link"
            disabled={!isValid}
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};
