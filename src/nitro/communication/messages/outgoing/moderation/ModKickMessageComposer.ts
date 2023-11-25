import { IMessageComposer } from '../../../../../api';
import { ModBanMessageComposer } from './ModBanMessageComposer';

export class ModKickMessageComposer implements IMessageComposer<ConstructorParameters<typeof ModKickMessageComposer>>
{
    private _data: ConstructorParameters<typeof ModKickMessageComposer>;

    constructor(userId: number, message: string, categoryId: number, issueState: number = -1)
    {
        this._data = [userId, message, categoryId];

        if(issueState != ModBanMessageComposer.NO_ISSUE_ID)
        {
            this._data.push(issueState);
        }
    }

    public getMessageArray()
    {
        return this._data;
    }

    public dispose(): void
    {
        return;
    }
}
