import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";


@Injectable()
export class ValidationPipe implements PipeTransform<any> {
    constructor(){
        console.log("Created ValidationPipe instance")
    }
    async transform(value: any, metadata: ArgumentMetadata) {
        console.log("ValidationPipe")
        console.log(value)
        console.log(metadata)
        if(!metadata.metatype || !this.toValidate(metadata.metatype)){
            return value;
        }
        const object = plainToClass(metadata.metatype,value);
        const errors= await validate(object)
        if(errors.length>0)
        throw new BadRequestException({
            errors:errors.map((error)=>{
                const {property,constraints}=error
                return {property,constraints}
            })
        })
        return value;
    }
    private toValidate(metatype: Function): boolean {
        const types: Function[] = [String,Boolean,Number,Array,Object];
        return !types.includes(metatype);
    }
}