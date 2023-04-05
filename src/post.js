import { DataStore } from '@aws-amplify/datastore';
import { Post } from './models';

await DataStore.save(
    new Post({
		"title": "Lorem ipsum dolor sit amet",
		"comments": [],
		"content": "Lorem ipsum dolor sit amet"
	})
);