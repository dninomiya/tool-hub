import { TagId, allTags, mainTags } from '@/data/tag';

export const getTagLabel = (tagId: TagId) => {
  return allTags.find((tag) => tag.id === tagId)?.label ?? '';
};

export const addTagToSearchParmas = (defaultTags: TagId[], tag: TagId) => {
  const src = defaultTags.filter((t: TagId) => !mainTags.includes(t));

  if (src.includes(tag)) {
    return src.join(',');
  } else {
    return [...src, tag].join(',');
  }
};

export const removeTagToSearchParmas = (defaultTags: TagId[], tag: TagId) => {
  return defaultTags.filter((t: TagId) => t !== tag).join(',');
};
