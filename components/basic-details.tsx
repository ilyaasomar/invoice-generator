import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useInvoice } from "@/context/invoice-context";
export default function BasicDetails() {
  const { invoice, updateInvoice } = useInvoice();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Invoice Details</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="invoiceNumber">Invoice Number</Label>
          <Input
            value={invoice.invoiceNumber}
            onChange={(e) => updateInvoice({ invoiceNumber: e.target.value })}
            id="invoiceNumber"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="date">Invoice Number</Label>
          <Input
            id="date"
            type="date"
            value={invoice.date}
            onChange={(e) => updateInvoice({ date: e.target.value })}
          />
        </div>
      </CardContent>
    </Card>
  );
}
