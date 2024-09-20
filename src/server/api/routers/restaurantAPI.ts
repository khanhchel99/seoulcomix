import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const restaurantRouter = createTRPCRouter({
    getAll: publicProcedure.query(async ({ ctx }) => {
        const restaurantList = await ctx.db.restaurant.findMany({
            include: {
                featured: true,  // as it's a relation
            },
        });
        //return restaurantList;
        return restaurantList.map(({
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
        }) => ({
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
        }));
    }),

    //to update the favourite status
    updateFavourite: publicProcedure
        .input(z.object({
            id: z.string(),          // The ID of the record
            isFavorite: z.boolean()
        }))
        .mutation(async ({ ctx, input }) => {
            return ctx.db.restaurant.update({
                where: { id: input.id },  // Find the record by its ID
                data: { isFavorite: input.isFavorite } //update the favourite status
            });
        }),
    getTodos: publicProcedure.query(async () => {
        return {
            greeting: `Hello`,
        };
    }),
});
