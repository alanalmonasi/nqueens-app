const queenURL = 'img/queen.png'

const Cell = ({ queen, color }) => {

  const blackBox = parseInt(color);

  const box = {
    width: '100px',
    height: '100px',
    border: '1px black solid',
    backgroundColor: `${(blackBox) % 2 === 0 ? 'white' : 'black'}`
  }

  return (
   <>
    <div style={box} className={blackBox}>{
      queen ? <img src={queenURL} width='100px' height='100px'/> : ''
    }</div>
   </>
  )
}

export default Cell
