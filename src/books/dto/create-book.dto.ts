import {
  IsNumber,
  IsPositive,
  IsString,
  MaxLength,
  MinLength,
} from "class-validator";

export class CreateBookDto {
  @IsString({
    message: "title is required and must be a string",
  })
  @MinLength(5)
  @MaxLength(30)
  title: string;

  @IsNumber(
    {
      allowNaN: false,
      allowInfinity: false,
      maxDecimalPlaces: 0,
    },
    {
      message:
        "authorId is required and must be a number without decimal places. `NaN` and `Infinity` is also not allowed",
    },
  )
  @IsPositive()
  authorId?: number;
}
