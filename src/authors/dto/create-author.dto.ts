import { IsString, MaxLength, MinLength } from "class-validator";

export class CreateAuthorDto {
  @IsString({
    message: "title is required and must be a string",
  })
  @MinLength(5)
  @MaxLength(30)
  name: string;
}
