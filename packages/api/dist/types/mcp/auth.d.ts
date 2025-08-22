import type { PluginAuthMethods } from '@librechat/data-schemas';
import type { GenericTool } from '@librechat/agents';
export declare function getUserMCPAuthMap({ userId, tools, findPluginAuthsByKeys, }: {
    userId: string;
    tools: GenericTool[] | undefined;
    findPluginAuthsByKeys: PluginAuthMethods['findPluginAuthsByKeys'];
}): Promise<Record<string, Record<string, string>>>;
//# sourceMappingURL=auth.d.ts.map