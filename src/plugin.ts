import { SketchComponentFactory } from "./factory";
import SketchComponent from "./sketch-component";
import { GenericSketchComponentClass } from "./types";
import { Component } from 'vue';

export interface KonectPlugin {
    components: Array<GenericSketchComponentClass>
    factories: Map<GenericSketchComponentClass, SketchComponentFactory<SketchComponent<unknown>>>;
    popup: Map<GenericSketchComponentClass, Component>;
}