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
import { Document, Types } from 'mongoose';
export interface IUser extends Document {
    name?: string;
    username?: string;
    email: string;
    emailVerified: boolean;
    password?: string;
    avatar?: string;
    provider: string;
    role?: string;
    googleId?: string;
    facebookId?: string;
    openidId?: string;
    samlId?: string;
    ldapId?: string;
    githubId?: string;
    discordId?: string;
    appleId?: string;
    plugins?: unknown[];
    twoFactorEnabled?: boolean;
    totpSecret?: string;
    backupCodes?: Array<{
        codeHash: string;
        used: boolean;
        usedAt?: Date | null;
    }>;
    refreshToken?: Array<{
        refreshToken: string;
    }>;
    expiresAt?: Date;
    termsAccepted?: boolean;
    personalization?: {
        memories?: boolean;
    };
    createdAt?: Date;
    updatedAt?: Date;
    /** Field for external source identification (for consistency with TPrincipal schema) */
    idOnTheSource?: string;
}
export interface BalanceConfig {
    enabled?: boolean;
    startBalance?: number;
    autoRefillEnabled?: boolean;
    refillIntervalValue?: number;
    refillIntervalUnit?: string;
    refillAmount?: number;
}
export interface UserCreateData extends Partial<IUser> {
    email: string;
}
export interface UserUpdateResult {
    deletedCount: number;
    message: string;
}
export interface UserSearchCriteria {
    email?: string;
    username?: string;
    googleId?: string;
    facebookId?: string;
    openidId?: string;
    samlId?: string;
    ldapId?: string;
    githubId?: string;
    discordId?: string;
    appleId?: string;
    _id?: Types.ObjectId | string;
}
export interface UserQueryOptions {
    fieldsToSelect?: string | string[] | null;
    lean?: boolean;
}
