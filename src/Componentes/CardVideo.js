import React from "react";
import styled from "styled-components";

const EstilizacaoCardVideo = styled.div`
  display: grid;
  grid-template-rows: 3fr 1fr;
  grid-template-columns: 1fr;
  border-style: solid;
  border-width: thin;
  align-items: start;
  justify-items: stretch;
`

function CardVideo(props) {
  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }
  return (
    <EstilizacaoCardVideo onClick={reproduzVideo}>
      <img src={props.image1} alt={props.textoAlternativo} />
      <h4>{props.titulo}</h4>
    </EstilizacaoCardVideo>
  );
}

export default CardVideo;
