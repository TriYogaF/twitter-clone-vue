import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";
import TweetInput from "./components/TweetInput.vue";
import TweetCard from "./components/TweetCard.vue";

// createApp(App).mount("#app");
const app = createApp(App);
app.component("TweetInput", TweetInput).component("TweetCard", TweetCard);
app.mount("#app");
