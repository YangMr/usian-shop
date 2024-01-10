import { defineStore } from "pinia";
import { ref } from "vue";
import { persist } from "./index";

export const useUserStore = defineStore(
  "user",
  () => {
    const token = ref(
      "eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIxMDI0NzM4NDc2ODAyNzk5NTUzIiwiYWNjb3VudCI6Inhic2owMDEiLCJuYW1lIjoi5ZGo5LiAIiwib3JnaWQiOjEwMjQ3MDQ4NDQ0ODY3NTY2NDEsInN0YXRpb25pZCI6MTAyNDcwNzUzNTg5MTk0NDc2OSwiYWRtaW5pc3RyYXRvciI6ZmFsc2UsImV4cCI6MTcwNDgyNDgyNX0.Qv0rTaP5pgcJch4feIV9-D7IfUQL5zvpmBqfUjG6O2ufIuqJMhhwswb2pAL0tmyYAi3y2QW2HMZkhlnQkNUxIA",
    );

    return { token };
  },
  {
    persist: persist(),
  },
);
