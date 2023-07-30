import Frame from "@/components/frame/Frame";
import photos, { Photo } from "@/photos";
import React from "react";

export default function Photo({ params: { id } }: { params: { id: string } }) {
  const photo: Photo = photos.find((photo) => photo.id === id)!;
  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto border border-gray-700">
        <Frame photo={photo} />
      </div>
    </div>
  );
}
