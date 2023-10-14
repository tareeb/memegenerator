import "./page.css"
import Card from "../components/Cards/Card"

export default function MainPage() {
  
  return (
  
      <div className='card-container'>
          <Card
            title={'Make Memes'}
            link={"/memeapi"}
          />
      </div>

  )
}
