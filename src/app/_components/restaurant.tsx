import React, { useState } from 'react';
import Image from 'next/image';
import { type allRestaurants } from "~/trpc/react";
import { api } from '~/trpc/react';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { assert } from 'console';


type RestaurantProps = {
    restaurant: allRestaurants
}

export default function Restaurant({ restaurant }: RestaurantProps) {
    const {
        rating,
        rating_count,
        category,
        city,
        desc,
        id,
        images,
        name,
        price_range,
        featured,
        isFavorite
    } = restaurant;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLiked, setIsLiked] = useState(isFavorite);

    //for image carousel
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const queryClient = useQueryClient();
    const trpc = api.useContext();
    const { mutate: doneMutation } = api.restaurant.updateFavourite.useMutation({
        onMutate: async (newData) => {
            await trpc.restaurant.getAll.cancel();
            const previousData = trpc.restaurant.getAll.getData();
            trpc.restaurant.getAll.setData(undefined, (oldData) =>
                oldData?.map((item) =>
                    item.id === newData.id ? { ...item, isFavorite: newData.isFavorite } : item
                )
            );
            return { previousData };
        },
        onError: (err, newData, context) => {
            trpc.restaurant.getAll.setData(undefined, context?.previousData);
        },
        onSettled: async () => {
            await trpc.restaurant.getAll.invalidate();

        },
    });

    const handleLikeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newIsLiked = e.target.checked;
        setIsLiked(newIsLiked);
        doneMutation({ id, isFavorite: newIsLiked });
    };


    return (

        <div className="flex flex-col bg-white rounded-lg overflow-hidden" key={id}>
            <div className="relative">
                <img src={images[currentIndex]} alt={name} className="w-full h-48 object-cover rounded-lg" style={{ borderRadius: '1rem' }} />
                <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md cursor-pointer" style={{ opacity: 0.75 }}>
                    <input
                        type="checkbox"
                        checked={isLiked}
                        onChange={handleLikeChange}
                        className="hidden"
                        id={`like-checkbox-${id}`}
                    />
                    <label htmlFor={`like-checkbox-${id}`} className={`w-6 h-6 ${isLiked ? 'text-red-500' : 'text-gray-300'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill={isLiked ? "red" : "none"} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                    </label>
                </div>
                <div className="absolute bottom-0 left-0 right-0 flex justify-center p-2 bg-black bg-opacity-50 rounded-t-lg">
                    {Array.from({ length: images.length }).map((_, index) => (
                        <span key={index} className={`h-2 w-2 mx-1 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}`} />
                    ))}
                </div>
            </div>
            <div className="p-2">
                <div className="flex items-center justify-between mb-2 whitespace-nowrap overflow-hidden">
                    <h2 className="text-lg font-semibold truncate">{name}</h2>
                    <div className="flex items-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#ffd700" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                        <span className="ml-1 text-gray-600 text-sm">{rating} ({rating_count})</span>
                    </div>
                </div>
                <div className="flex items-center justify-between mb-1 whitespace-nowrap overflow-hidden">
                    <p className="text-gray-700 text-sm truncate">{desc}</p>
                </div>
                <div className="flex items-center justify-between mb-1 whitespace-nowrap overflow-hidden">
                    <p className="text-gray-500 text-sm truncate">{city} • {category} • {price_range}</p>
                </div>
            </div>
        </div>



    )
}


