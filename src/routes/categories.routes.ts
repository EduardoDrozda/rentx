import { Router } from "express";
import createCategoryController from "../modules/cars/useCases/createCategory";
import importCategoryController from "../modules/cars/useCases/importCategory";
import listCategoryController from "../modules/cars/useCases/listCategories";
import multer from "multer";

const upload = multer({
  dest: "./tmp",
});

const categoriesRoutes = Router();

categoriesRoutes.post("/", async (request, response) => {
  return await createCategoryController().handle(request, response);
});

categoriesRoutes.get("/", async (request, response) => {
  return await listCategoryController().handle(request, response);
});

categoriesRoutes.post(
  "/import",
  upload.single("file"),
  async (request, response) => {
    return await importCategoryController().handle(request, response);
  }
);

export { categoriesRoutes };
