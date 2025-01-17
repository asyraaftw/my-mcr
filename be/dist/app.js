"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const app = (0, express_1.default)();
const port = process.env.PORT || 8888;
app.use(express_1.default.json());
app.use("/users", userRoutes_1.default);
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
