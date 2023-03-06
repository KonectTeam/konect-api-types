import { SketchComponentFactory } from "./factory";
import SketchComponent from "./sketch-component";
import { Class, GenericSketchComponentClass } from "./types";
import { Component } from 'vue';

export interface KonectPlugin {
    components: Array<GenericSketchComponentClass>;
    factories: Array<Class<SketchComponentFactory<SketchComponent<unknown>>>>;
    popup: Map<GenericSketchComponentClass, Component>;
    pluginInformation: {
        name: string;
        description: string;
    }
}