'use client';

import { TagId } from '@/data/tag';
import { mainTags } from '@/lib/tag';
import cluster from 'cluster';
import { useSearchParams } from 'next/navigation';

export const useTagParams = () => {
  const defaultTags = (useSearchParams()
    .get('tags')
    ?.split(',')
    .filter(Boolean) ?? []) as TagId[];

  const addTagToSearchParmas = (tag: TagId, keepMainTag?: boolean) => {
    const src = keepMainTag
      ? defaultTags
      : defaultTags.filter((t: TagId) => !mainTags.includes(t));

    if (src.includes(tag)) {
      return src.join(',');
    } else {
      return [...src, tag].join(',');
    }
  };

  const removeTagToSearchParmas = (tag: TagId) => {
    return defaultTags.filter((t: TagId) => t !== tag).join(',');
  };

  return { addTagToSearchParmas, removeTagToSearchParmas };
};
