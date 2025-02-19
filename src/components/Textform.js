import React , {useState} from 'react'
export default function Textform(props) {
    const handleUpperCick = () => {
       let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        console.log(`On Change`)
        setText(event.target.value);
    }
    const handleLoCLick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearCLick = () => {
        let newText = '';
        setText(newText);
    }
    const handleInvrCLick = () => {
        let newText = text.split(' ').map((word) => {
            let newStr = ``;
            for (let i=0;i<word.length;i++){
                if (word[i] === word[i].toUpperCase()){
                    newStr += word[i].toLowerCase();
                }else{
                    newStr += word[i].toUpperCase();
                }
            }
            return newStr;
        })
        return setText(newText.join(' '));
    }
    const handleAltrCLick = () => {
        let newText = text.split(' ').map((word) => {
            let newStr = ``;
            for (let i=0;i<word.length;i++){
                if (i%2===0){
                    newStr += word[i].toUpperCase();
                }else{
                    newStr += word[i].toLowerCase();
                }
            }
            return newStr;
        })
        return setText(newText.join(' '));
    }

    const [text , setText] = useState("");
  return (
    <div>
      <>
      <div className="container">
      <h1>{props.purpose}</h1>
        <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="10" value={text} onChange={handleOnChange} placeholder='Enter A Text'></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpperCick}>Convert To UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoCLick}>Convert To LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearCLick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleInvrCLick}>Inverse-Case</button>
        <button className="btn btn-primary mx-1" onClick={handleAltrCLick}>Alternting-Case</button>
        
      </div>
      <div className="conatiner my-3">
        <h2>Your Text Summary</h2>
        <p>{text.split(' ').length} words and {text.length} characters</p>
        <p>{0.008 * text.split(' ').length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
      </>
    </div> 
  );
}
