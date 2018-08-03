export declare interface SlimInternals {
    hasCustomTemplate: string | undefined;
    boundParent: Element;
    repeater: object;
    bindings: object;
    reversed: object;
    inbounds: object;
    eventHandlers: object;
    internetExploderClone: any;
    rootElement: Element;
    createCallbackInvoked: boolean;
    sourceText: string;
    excluded: boolean;
    autoBoundAttributes: Array<string>;
}

export declare class Slim extends HTMLElement {
    
    protected static dashToCamel(dash: string):string;
    protected static camelToDash(camel: string):string;
    static rxInject(): RegExp;
    static rxProp(): RegExp;
    static rxMethod(): RegExp;
    static lookup(target:object|Element, expression: string, maybeRepeater:Element):any;
    
    static _$ (target: Element): SlimInternals;
    
    static polyFill (url: string): void;
    
    static tag (
        tagName: string,
        tplOrClass: string | Slim,
        clazz?: Slim);
    
    static tagOf(clazz:HTMLElement | Slim): string;
    
    static classOf(tag:string):HTMLElement | Slim;
    
    static createUniqueIndex (): string;
    
    public static plugin (
        phase: string,
        plugin: (target: Slim) => void
    ): void;
    
    static checkCreationBlocking(
        element:HTMLElement
    ):boolean;
    
    static customDirective(
        textFn: (attr:Attr) => any,
        directiveFn: (source:Slim, child:Element, attribute: Attr, match: any) => void,
        isBlocking: boolean
    ): void;
    
    private static executePlugins (phase: string, target: Slim):void;
    
    static qSelectAll(target: Element, selector: string):Array<Element>;
    
    static unbind (source: Element, target: Element): void;
    
    static root (target:Element): Element | ShadowRoot;
    
    static selectRecursive (target: Element, force: boolean): Array<Element>;
    
    static moveChildren (source: Element, target: Element);
    
    private static wrapGetterSetter (element: Element, expression: string): string;
    
    static bindOwn (source:Element, expression: string, executor: Function): Function;
    
    static bind (source:Element, target: Element, expression: string, executor: Function): Function;
    
    static update (target: Element, ...props: string[]): void;
    
    static commit (target: Element, prop: string);
    
    static readonly uniqueIndex: number;
    
    static readonly tagToClassDict: Map<string, HTMLElement>;
    
    static readonly tagToTemplateDict: Map<string, string>;
    
    static readonly plugins: {
        create: Array<(target: Slim) => void>,
        added: Array<(target: Slim) => void>,
        beforeRender: Array<(target: Slim) => void>,
        afterRender: Array<(target: Slim) => void>,
        removed: Array<(target: Slim) => void>,
    };
    
    static debug: Function;
    
    static asap(f: Function): any;
    
    protected createdCallback (): void
    
    protected connectedCallback(): void
    
    protected disconnectedCallback(): void
    
    protected attributeChangedCallback(): void
    
    protected _isInContext(): boolean;
    
    protected _executeBindings(prop?: string): void;
    
    protected _bindChildren(children: Array<Element>| NodeListOf<Element>): void;
    
    protected _resetBindings(): void;
    
    protected _render (customTemplate?: string): void;
    
    protected _initialize (): void;
    
    public commit (...args: string[]): void;
    
    public update (...args: string[]): void;
    
    public render (customTemplate: string): void;
    
    protected onRender(): void;
    protected onBeforeCreated(): void;
    protected onCreated(): void;
    protected onAdded(): void;
    protected onRemoved(): void;
    
    public find (selector: string): Element;
    
    public findAll (selector: string): Array<Element>| NodeListOf<Element>;
    
    protected callAttribute (attr: string, data: any): any;
    
    useShadow (): boolean;
    
    template (): string;
}

