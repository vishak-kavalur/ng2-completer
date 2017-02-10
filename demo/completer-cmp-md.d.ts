import { EventEmitter, OnInit } from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";
import { CompleterData, CompleterItem } from "../src";
import "rxjs/add/operator/catch";
export declare class CompleterCmpMd implements OnInit, ControlValueAccessor {
    dataService: CompleterData;
    inputName: string;
    pause: number;
    minSearchLength: number;
    maxChars: number;
    overrideSuggested: boolean;
    fillHighlighted: boolean;
    clearSelected: boolean;
    placeholder: string;
    matchClass: string;
    textSearching: string;
    textNoResults: string;
    fieldTabindex: number;
    autoMatch: boolean;
    disableInput: boolean;
    selected: EventEmitter<CompleterItem>;
    highlighted: EventEmitter<CompleterItem>;
    blur: EventEmitter<void>;
    private completer;
    private displaySearching;
    private searchStr;
    private _onTouchedCallback;
    private _onChangeCallback;
    constructor();
    value: any;
    onTouched(): void;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    onBlur(): void;
}
