import { IsString, MinLength } from "class-validator";

export class CreateCarDto {

    @IsString({ message: `The brand must be a cool string`})
    readonly brand: string;
    
    @IsString({ message: `The model must be a string`})
    @MinLength(3)
    readonly model: string;

}