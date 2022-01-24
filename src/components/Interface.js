import react from "react";
import '../style/Interface.css';
function Interface(){
    return(
        <form>
            <label className="label1">Query for the Counsellor:</label>
            <textarea className="Query" rows={5}></textarea>
            <br></br>
            <label className="label2">Anonymous Confession:</label>
            <textarea className="Confession" rows={5}></textarea>
            <br></br>
            <button className="Submit" type="submit">Submit</button>
        </form>
    );
}

export default Interface;