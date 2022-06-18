import { IMessageComposer } from '../../../../../core/communication/messages/IMessageComposer';

export class GetPopularRoomTagsMessageComposer implements IMessageComposer<ConstructorParameters<typeof GetPopularRoomTagsMessageComposer>>
{
    private _data: ConstructorParameters<typeof GetPopularRoomTagsMessageComposer>;

    constructor()
    {
        this._data = [];
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
