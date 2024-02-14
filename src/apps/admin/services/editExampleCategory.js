import request from 'superagent';
import base from './base';

import getToken from '../utils/getToken';

export default function (id, item) {
    const token = getToken();

    return base(
        request
            .put(`/api/admin/example-with-categories/category/${id}`)
            .set('Authorization', `Bearer ${token}`)
            .send(item)
    );
}
