

const mockUrls = [
  'https://utfs.io/f/d0b56b4c-33c2-44c0-8243-1b1a8c66464a-ae7dag.jpg',
  'https://utfs.io/f/c0a7bed8-7444-407b-86bb-2b8f4b767cc5-rxjna.jpg',
  'https://utfs.io/f/03002d2d-3655-4200-926b-22f840cffd72-oe3zud.jpg',
  'https://utfs.io/f/ca26c1ea-94cf-4152-9681-ef47499f65ad-wyvz.w023.n001.1462B.p1.1462.jpg',
  'https://utfs.io/f/71085ff0-7473-4fd0-b766-90b6405e2abd-1j.jpg',
]

const mockImages = mockUrls.map((url, index) => {
  return {
    id: index + 1,
    url: url
  }
})
export default function HomePage() {
  return (
    <main className="flex">
      <div className="flex flex-wrap gap-2">{
        [...mockImages, ...mockImages, ...mockImages].map((image) => {
          return (
            <div key={image.id} className="w-48">
              <img src={image.url} alt={`Image ${image.id}`} />
            </div>
          )
        })}
      </div>
    </main>
  );
}
