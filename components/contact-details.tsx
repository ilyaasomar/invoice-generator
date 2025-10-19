import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useInvoice } from "@/context/invoice-context";

export default function ContactDetails() {
  const { invoice, updateInvoice } = useInvoice();
  return (
    <Card>
      <CardHeader>
        <CardTitle>From & To</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-4">
          <h3 className="font-medium">From(Your Details)</h3>
          <div className="flex flex-col gap-2">
            <Label htmlFor="fromName">Name</Label>
            <Input
              id="fromName"
              placeholder="Your name of company"
              value={invoice.fromName}
              onChange={(e) => updateInvoice({ fromName: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="fromEmail">Email</Label>
            <Input
              id="fromEmail"
              type="email"
              placeholder="your@email.com"
              value={invoice.fromEmail}
              onChange={(e) => updateInvoice({ fromEmail: e.target.value })}
            />
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="font-medium">To(Client Details)</h3>
          <div className="flex flex-col gap-2">
            <Label htmlFor="toName">Name</Label>
            <Input
              id="toName"
              placeholder="Client name of company"
              value={invoice.toName}
              onChange={(e) => updateInvoice({ toName: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="toEmail">Email</Label>
            <Input
              id="toEmail"
              type="email"
              placeholder="your@email.com"
              value={invoice.toEmail}
              onChange={(e) => updateInvoice({ toEmail: e.target.value })}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
