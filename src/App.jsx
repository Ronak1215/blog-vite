import "./App.css";
import image1 from "./assets/images/match1.webp";

function App() {
  return (
    <>
      <div class="bg-[#111] w-full h-screen">
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Excepturi, illum? Repudiandae beatae voluptatibus tempore libero
              saepe quod explicabo cupiditate similique, sint voluptates,
              accusamus quae architecto ipsum rem. Quaerat, id dolores. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Cumque fuga
              architecto quisquam maiores alias necessitatibus eius atque iste
              aliquam laudantium voluptas illo dignissimos aut, magni molestiae
              voluptatem officiis quae temporibus nemo pariatur at? Veritatis,
              debitis autem. Rerum provident magni illum mollitia nisi,
              molestiae vero deserunt omnis tempore cum accusantium veritatis
              repellendus. Magni recusandae corrupti explicabo vero, voluptas
              incidunt deleniti molestiae saepe sequi tempore, sed quaerat
              suscipit quia laudantium quibusdam fuga blanditiis, fugiat eius
              numquam minima enim rerum sint doloribus? Veritatis, consequatur,
              a blanditiis ducimus maxime tenetur omnis aperiam, eum suscipit
              nam facere earum voluptatum modi ut. Aspernatur, excepturi!
              Expedita, culpa?
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
