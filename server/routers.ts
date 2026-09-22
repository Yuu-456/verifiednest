import { z } from "zod";
import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";

const demoListings = [
  { id: "casa-amar", name: "Casa Amar", city: "Bengaluru", rent: 14500, match: 94, verified: "Verified" },
  { id: "the-arc", name: "The Arc House", city: "Bengaluru", rent: 12800, match: 88, verified: "Verified" },
  { id: "nook-27", name: "Nook 27", city: "Bengaluru", rent: 9800, match: 81, verified: "Partially Verified" },
  { id: "terracotta", name: "Terracotta Rooms", city: "Bengaluru", rent: 15700, match: 76, verified: "Pending" },
] as const;

const demoMatches = [
  { id: "mira", name: "Mira Shah", score: 92 },
  { id: "kabir", name: "Kabir Mehta", score: 86 },
  { id: "zoya", name: "Zoya Khan", score: 79 },
] as const;

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),

  demo: router({
    listings: publicProcedure
      .input(z.object({ city: z.string().optional(), maxRent: z.number().optional() }).optional())
      .query(({ input }) => {
        return demoListings.filter(listing =>
          (!input?.city || listing.city.toLowerCase().includes(input.city.toLowerCase())) &&
          (!input?.maxRent || listing.rent <= input.maxRent)
        );
      }),
    matches: publicProcedure.query(() => demoMatches),
    createBooking: protectedProcedure
      .input(z.object({ listingId: z.string(), moveIn: z.string(), roomType: z.string() }))
      .mutation(({ input, ctx }) => ({
        confirmationId: `VN-${String(Date.now()).slice(-4)}`,
        status: "requested" as const,
        listingId: input.listingId,
        moveIn: input.moveIn,
        roomType: input.roomType,
        studentName: ctx.user.name ?? "Student",
      })),
    completeDemoPayment: protectedProcedure
      .input(z.object({ bookingId: z.string(), amount: z.number().positive() }))
      .mutation(({ input }) => ({
        status: "paid" as const,
        provider: "DemoPaymentProvider",
        receiptId: `DEMO-${input.bookingId}`,
        amount: input.amount,
      })),
    submitComplaint: protectedProcedure
      .input(z.object({ category: z.string(), description: z.string().min(10), priority: z.enum(["low", "medium", "high"]) }))
      .mutation(({ input }) => ({
        id: `CMP-${String(Date.now()).slice(-5)}`,
        status: "open" as const,
        ...input,
      })),
  }),
});

export type AppRouter = typeof appRouter;
