import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface FilterDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function FilterDialog({ open, onOpenChange }: FilterDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[300px]">
        <RadioGroup defaultValue="all">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="all" id="all" />
            <Label htmlFor="all">All</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="with-vehicles" id="with-vehicles" />
            <Label htmlFor="with-vehicles">With Vehicles</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="without-vehicles" id="without-vehicles" />
            <Label htmlFor="without-vehicles">Without Vehicles</Label>
          </div>
        </RadioGroup>
      </DialogContent>
    </Dialog>
  )
}

