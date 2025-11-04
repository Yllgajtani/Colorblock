import './colors.css'

function App() {

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const handleClick = (e) => {
    e.target.style.backgroundColor = getRandomColor();
  }

  return (
    <>
      <div className='Rreshti1'>
        <div id='color1' onClick={handleClick}></div>
        <div id='color2' onClick={handleClick}></div>
        <div id='color3' onClick={handleClick}></div>
        <div id='color4' onClick={handleClick}></div>
        <div id='color5' onClick={handleClick}></div>
        <div id='color6' onClick={handleClick}></div>
        </div>
        <div className='Rreshti1'>
        <div id='color7' onClick={handleClick}></div>
        <div id='color8' onClick={handleClick}></div>
        <div id='color9' onClick={handleClick}></div>
        <div id='color10' onClick={handleClick}></div>
        <div id='color11' onClick={handleClick}></div>
        <div id='color12' onClick={handleClick}></div>
        </div>
        <div className='Rreshti1'>
        <div id='color13' onClick={handleClick}></div>
        <div id='color14' onClick={handleClick}></div>
        <div id='color15' onClick={handleClick}></div>
        <div id='color16' onClick={handleClick}></div>
        <div id='color17' onClick={handleClick}></div>
        <div id='color18' onClick={handleClick}></div>
        </div>
     
    </>
  )
}

export default App
