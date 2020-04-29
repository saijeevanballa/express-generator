import { Router, NextFunction, Response, Request } from "express";
import { userGet, userPost, userDelete } from "./module";
import { APIError } from "../utils/custom-error";
const router: Router = Router();

// User Get Method
router.get("/", (req: Request, res: Response, next: NextFunction) => {
    try {
        res.status(200).send(userGet());
    } catch (error) {
        next(new APIError(error.message));
    }
});

// User Post Method
router.post("/", (req: Request, res: Response, next: NextFunction) => {
    try {
        res.status(200).send(userPost());
    } catch (error) {
        next(new APIError(error.message));
    }
});

// User Delete Method
router.delete("/", (req: Request, res: Response, next: NextFunction) => {
    try {
        res.status(200).send(userDelete());
    } catch (error) {
        next(new APIError(error.message));
    }
});

export = router;