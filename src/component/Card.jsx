import "./Card.css"

function Card(props) {
    function Handle(){
         alert(`${props.nama} dengan ${props.harga} merupakan produk dengan kualitas terbaik`)
        }
  return (
    <div className="box2">
    <div className="box" onClick={Handle}>
        <img src={props.gambar} />
        <p>{props.nama}</p>
        <p>{props.harga}</p>
    </div>
    </div>
  )
}

export default Card