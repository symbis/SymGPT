/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
import type { Document, Types } from 'mongoose';
export interface IGroup extends Document {
    _id: Types.ObjectId;
    /** The name of the group */
    name: string;
    /** Optional description of the group */
    description?: string;
    /** Optional email address for the group */
    email?: string;
    /** Optional avatar URL for the group */
    avatar?: string;
    /** Array of member IDs (stores idOnTheSource values, not ObjectIds) */
    memberIds: string[];
    /** The source of the group ('local' or 'entra') */
    source: 'local' | 'entra';
    /** External ID (e.g., Entra ID) - required for non-local sources */
    idOnTheSource?: string;
    /** Timestamps */
    createdAt?: Date;
    updatedAt?: Date;
}
