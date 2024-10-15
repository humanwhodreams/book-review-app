import { _wixClient } from '@/lib/wix/client';

interface CollectionIdRepository {
  id: 'Books' | 'Reviewers';
}

export async function getCollection(collectionId: CollectionIdRepository) {
  const result = await _wixClient.items
    .queryDataItems({ dataCollectionId: collectionId.id })
    .find();

  return result.items;
}
