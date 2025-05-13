
import { Certificate, BlockchainStatus } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface RecentCertificatesProps {
  certificates: Certificate[];
}

export function RecentCertificates({ certificates }: RecentCertificatesProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-md font-medium">Recent Certificates</CardTitle>
        <Button variant="ghost" size="sm" className="text-xs">
          View all
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {certificates.slice(0, 3).map((cert) => (
            <div
              key={cert.id}
              className="certificate-card flex items-center justify-between rounded-lg border p-3"
            >
              <div className="flex items-center space-x-3">
                <div className="h-12 w-12 rounded bg-secondary flex items-center justify-center">
                  <img
                    src={cert.imageUrl || "/placeholder.svg"}
                    alt={cert.name}
                    className="h-8 w-8"
                  />
                </div>
                <div>
                  <p className="font-medium">{cert.name}</p>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <span>{cert.category}</span>
                    <span className="mx-1">•</span>
                    <span>{new Date(cert.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <p className="text-sm font-medium">{cert.weightage}</p>
                <StatusBadge status={cert.blockchainStatus} />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

interface StatusBadgeProps {
  status: BlockchainStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "font-normal",
        status === BlockchainStatus.VERIFIED
          ? "border-success bg-success/10 text-success hover:bg-success/20"
          : status === BlockchainStatus.PENDING
          ? "border-warning bg-warning/10 text-warning hover:bg-warning/20 animate-pulse-opacity"
          : "border-destructive bg-destructive/10 text-destructive hover:bg-destructive/20"
      )}
    >
      {status}
    </Badge>
  );
}
