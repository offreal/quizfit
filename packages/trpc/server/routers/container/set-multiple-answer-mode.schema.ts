import { z } from "zod";

import { MultipleAnswerMode } from "@quizfit/prisma/client";

export const ZSetMultipleAnswerModeSchema = z.object({
  entityId: z.string(),
  multipleAnswerMode: z.nativeEnum(MultipleAnswerMode),
});

export type TSetMultipleAnswerModeSchema = z.infer<
  typeof ZSetMultipleAnswerModeSchema
>;
