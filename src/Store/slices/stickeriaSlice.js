import { createSlice } from "@reduxjs/toolkit";

export const stickeriaSlice = createSlice({
  name: "stickeria",
  initialState: {
    cart: [],
    isLoading: false,
    product: [
      {
        id: 1,
        title: "Fantasma",
        description: "Sticker de calidad y resistentes al agua!!",
        price: 150,
        sales: 0,
        liked: false,
        rate:0
      },
      {
        id: 2,
        title: "Helado",
        description: "Sticker de calidad y resistentes al agua!!",
        price: 150,
        sales: 0,
        liked: false,
        rate:0
      },
      {
        id: 3,
        title: "Moto",
        description: "Sticker de calidad y resistentes al agua!!",
        price: 150,
        sales: 0,
        liked: false,
        rate:0
      },
      {
        id: 4,
        title: "Fantasma",
        description: "Sticker de calidad y resistentes al agua!!",
        price: 150,
        sales: 0,
        liked: false,
        rate:0
      },
      {
        id: 5,
        title: "Helado",
        description: "Sticker de calidad y resistentes al agua!!",
        price: 150,
        sales: 0,
        liked: false,
        rate:0
      },
      {
        id: 6,
        title: "Moto",
        description: "Sticker de calidad y resistentes al agua!!",
        price: 150,
        sales: 0,
        liked: false,
        rate:0
      },
      {
        id: 7,
        title: "Fantasma",
        description: "Sticker de calidad y resistentes al agua!!",
        price: 150,
        sales: 0,
        liked: false,
        rate:0
      },
      {
        id: 8,
        title: "Helado",
        description: "Sticker de calidad y resistentes al agua!!",
        price: 150,
        sales: 0,
        liked: false,
        rate:0
      },
      {
        id: 9,
        title: "Moto",
        description: "Sticker de calidad y resistentes al agua!!",
        price: 150,
        sales: 0,
        liked: false,
        rate:0
      },
      {
        id: 10,
        title: "Fantasma",
        description: "Sticker de calidad y resistentes al agua!!",
        price: 150,
        sales: 0,
        liked: false,
        rate:0
      },
      {
        id: 11,
        title: "Helado",
        description: "Sticker de calidad y resistentes al agua!!",
        price: 150,
        sales: 0,
        liked: false,
        rate:0
      },
      {
        id: 12,
        title: "Moto",
        description: "Sticker de calidad y resistentes al agua!!",
        price: 150,
        sales: 0,
        liked: false,
        rate:0
      },
    ],
    offers: [],
  },
  reducers: {
    addCart: (state, { payload }) => {
      state.isLoading = true;
      state.cart.push(payload);
      state.isLoading = false;
    },
  },
});

export const { addCart } = stickeriaSlice.actions;
