"use client"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Users2, Pencil, AlertTriangle, Trash2 } from "lucide-react"
import Link from "next/link"

const companies = [
  {
    id: 1,
    name: "TransCorp A",
    contact: "+63 9123456789",
    status: "inactive",
    franchise: {
      number: "FC12345",
      expiry: "2024-12-31",
    },
    stats: {
      drivers: 20,
      vehicles: 10,
      violations: 10,
    },
  },
  // ... more companies
]

export function CompanyTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Franchise</TableHead>
            <TableHead>Violations</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companies.map((company) => (
            <TableRow key={company.id}>
              <TableCell>{company.name}</TableCell>
              <TableCell>{company.contact}</TableCell>
              <TableCell>
                <Badge variant={company.status === "active" ? "success" : "destructive"}>{company.status}</Badge>
              </TableCell>
              <TableCell>
                <div>
                  <div>{company.franchise.number}</div>
                  <div className="text-sm text-muted-foreground">Expires: {company.franchise.expiry}</div>
                </div>
              </TableCell>
              <TableCell>
                <div className="space-x-1">
                  <span>{company.stats.drivers} Driver</span>
                  <span>{company.stats.vehicles} Vehicle</span>
                  <span>{company.stats.violations} Company</span>
                </div>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="ghost" size="icon" asChild>
                    <Link href={`/companies/${company.id}/drivers`}>
                      <Users2 className="h-4 w-4" />
                      <span className="sr-only">Manage drivers</span>
                    </Link>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Pencil className="h-4 w-4" />
                    <span className="sr-only">Edit company</span>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <AlertTriangle className="h-4 w-4" />
                    <span className="sr-only">View violations</span>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Delete company</span>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

