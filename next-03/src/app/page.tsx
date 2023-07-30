import swagPhotos from "@/photos";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const photos = swagPhotos;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo) => (
          <Link href={`/photos/${photo.id}`} key={photo.id}>
            <Image
              className="h-[500px] rounded-lg object-cover"
              src={photo.imageSrc}
              alt=""
              height={500}
              width={500}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
