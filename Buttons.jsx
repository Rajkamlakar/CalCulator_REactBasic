import  style from'./Buttons.module.css';
const Buttons=({onbuttonclick})=>{

  const ButtonNames=['c','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']

  return (<div className={style.Buttons}>
    {ButtonNames.map(ButtonNames=><button className={style.Butt} onClick={()=>onbuttonclick(ButtonNames)}>{ButtonNames}</button>)}

</div> );
}

export default Buttons;