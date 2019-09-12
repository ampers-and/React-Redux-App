import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';

import { accioSpell } from '../actions/actions';

//Styled
const Card = styled.div`
  border-radius: 3px;
  border: 2px solid palevioletred;
  width:300px;
  height:250px;
  margin-bottom:3rem;
`
const Title = styled.h2`
  font-size:2rem;
  color: #61dafb;
`
const Type = styled.h3`
`
const Effect = styled.h4`
`

const Button = styled.button`
  border-radius: 3px;
  font-size:1.5rem;
  padding:5px;
  font-family: 'Yeon Sung', cursive;
  color:#282c34;
  background-color:#61dafb;
`

const Spell = ({ accioSpell, spell, isAccioIng, error }) => {
  useEffect(() => {
    
    accioSpell();
  }, [accioSpell]);

  if (isAccioIng) {
    return <h2>Accio Spell!</h2>;
  }

  return (
    <Card>
        <Title>{spell.incant}</Title>
        <Type>Type: {spell.type}</Type>
        <Effect>Effect: {spell.effect}</Effect>
        <Button onClick={accioSpell}>Accio New Spell!</Button>
    </Card>
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