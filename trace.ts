/** Trace method invocation into console */
export function Trace(): MethodDecorator {
    return (target: any, key: string, descriptor: PropertyDescriptor): PropertyDescriptor => {
        let original: Function = descriptor.value;

        descriptor.value = function (...args: any[]): any {
            console.groupCollapsed(`[trace] ${key}`)
            console.debug(`[trace] ${key} input`, args);

            const t1 = performance.now();
            const result = original.apply(this, args);
            const t2 = performance.now();

            console.debug(`[trace] ${key}, duration: ${t2 - t1}ms`, result);
            console.groupEnd();

            return result;
        };

        return descriptor;
    };
}
