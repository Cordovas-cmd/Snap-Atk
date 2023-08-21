import React from 'react';
import { capitalizeFirstLetter } from '../../assets/utils/helpers';
import PhotoList from '../PhotoList/PhotoList';

function Gallery(props) {
    const { currentCategory } = props;

    return (
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.description}</p>
            <PhotoList category={currentCategory.name} />
        </section>
    );
}

export default Gallery