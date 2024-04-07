export const allTags = [
  { id: 'no-license-required', label: 'ライセンス表記不要' },
  { id: 'available-for-commercial-use', label: '商用利用可能' },
  { id: 'photo', label: '写真' },
  { id: 'avatar', label: 'アバター' },
  { id: 'illust', label: 'イラスト' },
  { id: 'css', label: 'CSSジェネレータ' },
  { id: 'icon', label: 'アイコン' },
  { id: 'free', label: '無料' },
  { id: 'video', label: 'ビデオ' },
  { id: 'public-domain', label: 'パブリックドメイン' },
  { id: 'font', label: 'フォント' },
  { id: 'icon-font', label: 'アイコンフォント' },
  { id: 'audio', label: '音、BGM' },
  { id: '.pdf', label: '.pdf' },
  { id: '.svg', label: '.svg' },
  { id: '.png', label: '.png' },
  { id: '.ai', label: '.ai' },
  { id: '.esp', label: '.esp' },
] as const;

export type TagId = (typeof allTags)[number]['id'];

export const mainTags: TagId[] = [
  'illust',
  'avatar',
  'photo',
  'icon',
  'font',
  'icon-font',
  'audio',
  'css',
];
