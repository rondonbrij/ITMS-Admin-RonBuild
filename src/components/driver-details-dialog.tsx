import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface Driver {
  name: string
  license: {
    number: string
    expiry: string
  }
  status: string
  violations: number
  vehicle: {
    name: string
    color: string
    capacity: number
    status: string
  }
}

interface DriverDetailsDialogProps {
  driver: Driver | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function DriverDetailsDialog({ driver, open, onOpenChange }: DriverDetailsDialogProps) {
  if (!driver) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{driver.name}&apos;s Info</DialogTitle>
        </DialogHeader>
        <div className="grid gap-8">
          <div className="grid grid-cols-[120px_1fr] items-start gap-6">
            <Image src="/placeholder.svg" alt={driver.name} width={120} height={120} className="rounded-md" />
            <dl className="grid gap-2">
              <div className="grid grid-cols-[100px_1fr]">
                <dt className="font-medium">Name:</dt>
                <dd>{driver.name}</dd>
              </div>
              <div className="grid grid-cols-[100px_1fr]">
                <dt className="font-medium">License:</dt>
                <dd>{driver.license.number}</dd>
              </div>
              <div className="grid grid-cols-[100px_1fr]">
                <dt className="font-medium">Expires:</dt>
                <dd>{driver.license.expiry}</dd>
              </div>
              <div className="grid grid-cols-[100px_1fr]">
                <dt className="font-medium">Status:</dt>
                <dd>
                  <Badge variant={driver.status === "active" ? "success" : "destructive"}>{driver.status}</Badge>
                </dd>
              </div>
              <div className="grid grid-cols-[100px_1fr]">
                <dt className="font-medium">Violations:</dt>
                <dd>{driver.violations}</dd>
              </div>
            </dl>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Vehicle</h3>
            <div className="grid grid-cols-[120px_1fr] items-start gap-6">
              <Image src="/placeholder.svg" alt={driver.vehicle.name} width={120} height={80} className="rounded-md" />
              <dl className="grid gap-2">
                <div className="grid grid-cols-[100px_1fr]">
                  <dt className="font-medium">Name:</dt>
                  <dd>{driver.vehicle.name}</dd>
                </div>
                <div className="grid grid-cols-[100px_1fr]">
                  <dt className="font-medium">Color:</dt>
                  <dd>{driver.vehicle.color}</dd>
                </div>
                <div className="grid grid-cols-[100px_1fr]">
                  <dt className="font-medium">Capacity:</dt>
                  <dd>{driver.vehicle.capacity}</dd>
                </div>
                <div className="grid grid-cols-[100px_1fr]">
                  <dt className="font-medium">Status:</dt>
                  <dd>{driver.vehicle.status}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

