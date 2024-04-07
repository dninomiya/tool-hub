export const allTags = [
  { id: 'no-license-required', label: 'ライセンス表記不要' },
  { id: 'photo', label: '写真' },
  { id: 'illust', label: 'イラスト' },
  { id: 'icon', label: 'アイコン' },
  { id: 'free', label: '無料' },
  { id: 'video', label: 'ビデオ' },
  { id: 'public-domain', label: 'パブリックドメイン' },
  { id: 'font', label: 'フォント' },
  { id: 'icon-font', label: 'アイコンフォント' },
  { id: 'audio', label: '音、BGM' },
] as const;

export type TagId = (typeof allTags)[number]['id'];

export const mainTags: TagId[] = [
  'illust',
  'photo',
  'icon',
  'font',
  'icon-font',
  'audio',
];
