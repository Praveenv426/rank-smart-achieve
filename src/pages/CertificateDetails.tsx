
import { CertificateTable } from "@/components/certificate/CertificateTable";
import { certificates } from "@/lib/mock-data";

const CertificateDetails = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Certificates</h1>
      <p className="text-muted-foreground">
        Manage and view all your uploaded certificates, their verification status and details.
      </p>
      
      <CertificateTable certificates={certificates} />
    </div>
  );
};

export default CertificateDetails;
