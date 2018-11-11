import {Base} from '../internal/base';
import {ILanguages} from '../api/i-languages';
import {IPage} from '../params/i-page';
import {ILanguage} from '../model/i-language';

export class Languages extends Base implements ILanguages {
    list(projectId?: string, query?: IPage):
        Promise<{project_id?: string, languages: ILanguage[]}> {

        const url = projectId
            ? `/projects/${projectId}/languages`
            : `/system/languages`;

        return this.request.get({url, query});
    }

    get(projectId: string, langId: string):
        Promise<{project_id: string, language: ILanguage}> {

        return this.request.get({url: `/projects/${projectId}/languages/${langId}`});
    }

    create(projectId: string, body: object):
        Promise<{project_id: string, languages: ILanguage[]}> {

        return this.request.post({body, url: `/projects/${projectId}/languages`});
    }

    update(projectId: string, langId: string, body: object):
        Promise<{project_id: string, language: ILanguage}> {

        return this.request.put({body, url: `/projects/${projectId}/languages/${langId}`});
    }

    delete(projectId: string, langId: string):
        Promise<{project_id: string, language_deleted: boolean}> {

        return this.request.delete({url: `/projects/${projectId}/languages/${langId}`});
    }
}