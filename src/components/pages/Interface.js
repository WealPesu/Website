import react from "react";
import '../../style/Interface.css';
function Interface(){
    return(
        <form>
            <div className="cont">
            <label className="label1">Query for the Counsellor:</label>
            <textarea className="Query" rows={5}></textarea>
            </div>
            <br></br>
            <div className="cont">
            <label className="label2">Anonymous Confession:</label>
            <textarea className="Confession" rows={5}></textarea>
            </div>
            <br></br>
            <button className="finish" type="submit">Submit</button>
        </form>
    );
}

export default Interface;