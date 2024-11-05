import Backdrop from "./backdrop/Backdrop";

export default function HomePage() {
  return (
    <>
      <Backdrop />
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            Mealfinder.
          </h1>
          <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            Det jo simpelt. skriv dit navn, og vi finner en rett til deg. Vi har
            alle rettene fra hele køkken.
          </p>
        </div>
      </div>
    </>
  );
}
