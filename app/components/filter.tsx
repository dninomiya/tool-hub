'use clinet';

import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useTagParams } from '@/hooks/tag-params';
import { useRouter } from 'next/navigation';

export default function Filter() {
  const { addTagToSearchParmas, removeTagToSearchParmas } = useTagParams();
  const router = useRouter();

  return (
    <div>
      <h2 className="font-semibold text-muted-foreground text-sm mb-4">
        絞り込み
      </h2>

      <div className="flex items-center space-x-2">
        <Switch
          onCheckedChange={(v) => {
            if (v) {
              router.replace(`/?tags=${addTagToSearchParmas('free', true)}`);
            } else {
              router.replace(`/?tags=${removeTagToSearchParmas('free')}`);
            }
          }}
          id="free"
        />
        <Label htmlFor="free">無料</Label>
      </div>
    </div>
  );
}
