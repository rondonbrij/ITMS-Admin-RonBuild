"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Car, Pencil, AlertTriangle, Trash2 } from "lucide-react"
import { DriverDetailsDialog } from "@/components/driver-details-dialog"
import { FilterDialog } from "@/components/filter-dialog"

interface Driver {
  id: number
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

interface DriverTableProps {
  companyId: string
}

const drivers = [
  {
    id: 1,
    name: "John Doe",
    license: {
      number: "DL12345",
      expiry: "2024-12-31",
    },
    status: "inactive",
    violations: 2,
    vehicle: {
      name: "Toyota HIACE Commuter",
      color: "White",
      capacity: 16,
      status: "Operational",
    },
  },
  // ... more drivers
]

export function DriverTable({ companyId }: DriverTableProps) {
  const [selectedDriver, setSelectedDriver] = useState<Driver | null>(null)
  const [showFilter, setShowFilter] = useState(false)

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>License</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Violations</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {drivers.map((driver) => (
              <TableRow key={driver.id}>
                <TableCell>{driver.name}</TableCell>
                <TableCell>
                  <div>
                    <div>{driver.license.number}</div>
                    <div className="text-sm text-muted-foreground">Expires: {driver.license.expiry}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant={driver.status === "active" ? "success" : "destructive"}>{driver.status}</Badge>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary">{driver.violations}</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon" onClick={() => setSelectedDriver(driver)}>
                      <Car className="h-4 w-4" />
                      <span className="sr-only">View driver details</span>
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Pencil className="h-4 w-4" />
                      <span className="sr-only">Edit driver</span>
                    </Button>
                    <Button variant="ghost" size="icon">
                      <AlertTriangle className="h-4 w-4" />
                      <span className="sr-only">View violations</span>
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Delete driver</span>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <DriverDetailsDialog
        driver={selectedDriver}
        open={!!selectedDriver}
        onOpenChange={(open) => !open && setSelectedDriver(null)}
      />

      <FilterDialog open={showFilter} onOpenChange={setShowFilter} />
    </>
  )
}

