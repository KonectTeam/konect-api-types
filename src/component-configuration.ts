import { Class } from './types';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Component } from 'vue';

import "reflect-metadata"

export type ComponentDocumentation = {
    description: string;
    slotsDocumentation: Array<{
        name: string;
        description: string;
        type: string;
    }>;
    output?: {
        name: string;
        description: string;
        type: string;
    }
};

export type ComponentEntry = {
    methodName: string;
    entryName: string;
    type: Class<unknown>;
}

export type ComponentConfiguration = {
    name: string;
    namespace: string;
    returnType?: Class<unknown>;
    icon: {
        name: string;
        fa: IconDefinition
    }
}

// ---- Annotation ---- //
export function Component(configuration: ComponentConfiguration) {
    return Reflect.metadata('configuration', configuration);
}

export function Documentation(documentation: ComponentDocumentation | Component) {
    return Reflect.metadata('documentation', documentation);
}

export function Entry(entryName: string, type: Class<unknown>) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      Reflect.defineMetadata(
        // this here is to reference the data later when we retrieve it.
        propertyKey,
        {
          // we put this spread operator in case you have decorated already, so
          // we dont want to lose the old data
          ...Reflect.getMetadata(propertyKey, target),
          // then we append whatever else we need
          entryName,
          type
        },
        target,
      );
      return descriptor;
    };
}