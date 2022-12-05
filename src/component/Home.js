import "./Home.css"

const get_data = (parm)=>{
   fetch(".src/db/2022.11.07.json") 
   .then(response => response.json())
   .then(data => console.log(data));

}



const Home = () => {

    return <div className="main">
        <form onSubmit={(event)=>{
            event.preventDefault();
            get_data(event.target.db.value)
        }}>
            <input type="text" name="db"></input>
            <input type="submit" />
        </form>

    </div>
}

export { Home }