import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const jsonPath = "..\src\data\data.json";


const seedDB = async () => {
    const data = require(jsonPath);
    try {
        //check if the json file is empty
        if (!Array.isArray(data) || data.length === 0) {
            console.error(`Invalid data for JSON path: ${jsonPath}`);
            console.error('Actual data:', data);
        }
        //scan through each of the restaurant data
        for (const restaurantData of data) {
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
            } = restaurantData;

            //check if fields are missing or malformed
            if (!rating || !rating_count || !category || !city || !desc || !id || (!images && !Array.isArray(images)) || !name || !price_range || (!featured && !Array.isArray(images)) || isFavorite == null) {
                console.error(`Invalid data for JSON path: ${jsonPath}`);
                console.error('Actual data:', restaurantData);
            }

            const restaurant = await prisma.restaurant.create({
                data: {
                    rating,
                    rating_count,
                    category,
                    city,
                    desc,
                    id,
                    images,
                    name,
                    price_range,
                    featured: {
                        create: {
                          ...restaurantData.featured,
                          restaurantId: restaurantData.id
                        }
                      },
                    isFavorite
                },
            });

        }
    }
    catch (e) {
        console.error(`Error seeding database from ${jsonPath}:`, e);
    }
}




seedDB()
    .catch((e) => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });