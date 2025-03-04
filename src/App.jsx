import "./App.css";
import image1 from "./assets/images/match1.png";

function App() {
  return (
    <>
      <div class="bg-[#111] w-full h-full">
        <nav class="px-4 py-8">
          <h1 class="text-5xl font-bold text-center text-white">
            Trend Trackers
          </h1>
        </nav>
        <section class="lg:flex lg:flex-row py-5 flex flex-col-reverse items-center justify-center gap-10 px-4 lg:px-10 bg-gradient-to-r from-sky-500 via-slate-50 to-yellow-300 mx-4 rounded-2xl">
          <div class="lg:w-2/4 gap-8 lg:flex lg:flex-col mt-4 lg:mt-0">
            <h2 class="text-2xl text-center lg:text-start font-semibold">
              "India’s Secret Strategy to Crush Australia in the Next
              Match Revealed ?"
            </h2>
            <p class="mt-4 lg:mt-0">
            Get ready for a high-voltage showdown as cricket giants India and Australia lock horns in a thrilling encounter! With pride, glory, and bragging rights at stake, this match promises to be an absolute cracker.  
            <br />
            <br />
            India, armed with a star-studded batting lineup featuring the likes of Rohit Sharma, Virat Kohli, and the young sensation Shubman Gill, will aim to set the stage on fire. But the real game-changer could be India's spin wizards—Ravindra Jadeja and Kuldeep Yadav—who can bamboozle the Aussies with their tricks and turns.  
            <br />
            <br />
            On the other side, Australia, known for their fearless and aggressive style, will bank on their explosive batsmen like Travis Head, and Steve Smith, who can single-handedly flip the game in a matter of overs.The pitch conditions and toss could play a big role, with teams likely preferring to chase. 
            <br />
            <br />
            Buckle up, cricket fans! This is going to be a nail-biting, edge-of-the-seat thriller you won’t want to miss! 🏏
            </p>
          </div>
          <div class="lg:w-2/4">
            <img src={image1} alt="" srcset="" />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
