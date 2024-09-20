//mark this as client so the userQuery can execute
'use client';

import { api } from "~/trpc/react";
import Restaurant from "./restaurant";

export default function Restaurants(){
    //get the data
    const {data:Restaurants, isLoading, isError} = api.restaurant.getAll.useQuery();
    
    if(isLoading) return <div> Loading Restaurants</div>
    if(isError) return <div> Error fetching restaurants</div>
    
    // Sort restaurants by id to ensure stable order
    const sortedRestaurants = Restaurants?.slice().sort((a, b) => a.id.localeCompare(b.id));
    return(
        <>
           {sortedRestaurants?.length ? sortedRestaurants.map(restaurant => {
                return <Restaurant key={restaurant.id} restaurant={restaurant}/>
           }):'No restaurants found'}
        </>
    )
}