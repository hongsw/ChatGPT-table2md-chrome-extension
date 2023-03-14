import styled from 'styled-components';

export const StButton = styled.button`
  --border-radius: 15px;
  --border-width: 7px;

  appearance: none;
  position: relative;
  padding: 0.9em 1.5em;
  border: 0;
  background-color: transparent;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.8em;
  font-weight: 600;
  color: #fff;

  cursor: pointer;

  &::after {
    --m-i: linear-gradient(#000, #000);
    --m-o: content-box, padding-box;

    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: var(--border-width);
    border-radius: var(--border-radius);
    background-image: conic-gradient(
      #488cfb,
      #29dbbc,
      #ddf505,
      #ff9f0e,
      #e440bb,
      #655adc,
      #488cfb
    );

    mask-image: var(--m-i), var(--m-i);
    mask-origin: var(--m-o);
    mask-clip: var(--m-o);
    mask-composite: exclude;
    -webkit-mask-composite: destination-out;

    filter: hue-rotate(0);
    animation: hue linear 500ms infinite;
    animation-play-state: paused;
  }

  &:hover::after {
    animation-play-state: running;
  }

  @keyframes hue {
    to {
      filter: hue-rotate(1turn);
    }
  }
`;
