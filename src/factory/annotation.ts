import "reflect-metadata"
import { GenericSketchComponentClass } from "../types";

// ---- Annotation ---- //
export default function Factory(componentClass: GenericSketchComponentClass) {
    return Reflect.metadata('factory-for', componentClass);
}