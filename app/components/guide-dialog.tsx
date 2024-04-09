import { AppConfig } from '@/app.config';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Info } from 'lucide-react';

export default function GuideDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" variant="outline">
          <Info size={20} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>🔰 {AppConfig.title} について</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <p className="text-muted-foreground leading-relaxed">
          素材やツールを使用する際は必ず対象のサイトで最新のライセンスを確認してください。また、記載された情報に間違いを発見したらお手数ですが
          <a href={AppConfig.githubURL} target="_blank" className="underline">
            GitHub
          </a>
          でご連絡ください。素材は
          <a href={AppConfig.githubURL} target="_blank" className="underline">
            GitHub
          </a>
          より誰でも自由に追加/リクエストできます。
        </p>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">閉じる</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
