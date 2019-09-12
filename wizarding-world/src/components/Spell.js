import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';

import { accioSpell } from '../actions/actions';

//Styled

const Spell = ({ accioSpell, spell, isAccioIng, error }) => {
  useEffect(() => {
    
    accioSpell();
  }, [accioSpell]);

  if (isAccioIng) {
    return <h2>Accio Spell!</h2>;
  }

  return (
    <>
      <h2>Spell: {spell}</h2>
      <button onClick={accioSpell}>Get New Spell!</button>
    </>
  );
};

const mapStatetoProps = state => {
    return {
        spell: state.spell,
        isAccioIng: state.isAccioIng,
        error: state.error
    }
};

export default connect(mapStatetoProps, { accioSpell })(Spell);