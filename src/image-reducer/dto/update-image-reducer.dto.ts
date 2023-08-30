import { PartialType } from '@nestjs/mapped-types';
import { CreateImageReducerDto } from './create-image-reducer.dto';

export class UpdateImageReducerDto extends PartialType(CreateImageReducerDto) {}
