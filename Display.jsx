import  style from'./Display.module.css';

const Display = ({displayvalue}) =>{

 return <input  className={style.Display} type="text"  value={displayvalue} readOnly/>

}

export default Display;