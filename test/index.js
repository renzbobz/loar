import loar from "../lib/index.js";

loar.start();
setTimeout(loar.stop.bind(loar), 6000);
