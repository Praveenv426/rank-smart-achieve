
import { CertificateUploader } from "@/components/upload/CertificateUploader";

const CertificateUpload = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-6">Upload Certificate</h1>
      
      <div className="grid gap-6">
        <div className="max-w-2xl mx-auto w-full">
          <CertificateUploader />
          
          <div className="mt-8 bg-card rounded-lg border p-6">
            <h3 className="text-lg font-medium mb-4">How it works</h3>
            <ol className="space-y-4">
              <li className="flex">
                <div className="mr-3 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border bg-background text-sm font-medium">
                  1
                </div>
                <div>
                  <p className="font-medium">Upload your certificate</p>
                  <p className="text-muted-foreground">
                    We accept PDF, PNG, and JPG formats up to 10MB.
                  </p>
                </div>
              </li>
              <li className="flex">
                <div className="mr-3 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border bg-background text-sm font-medium">
                  2
                </div>
                <div>
                  <p className="font-medium">OCR Processing</p>
                  <p className="text-muted-foreground">
                    Our system automatically extracts text and information from your certificate.
                  </p>
                </div>
              </li>
              <li className="flex">
                <div className="mr-3 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border bg-background text-sm font-medium">
                  3
                </div>
                <div>
                  <p className="font-medium">Verify Information</p>
                  <p className="text-muted-foreground">
                    Review and confirm the extracted information for accuracy.
                  </p>
                </div>
              </li>
              <li className="flex">
                <div className="mr-3 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border bg-background text-sm font-medium">
                  4
                </div>
                <div>
                  <p className="font-medium">Blockchain Verification</p>
                  <p className="text-muted-foreground">
                    Your certificate is encrypted and stored on blockchain for tamper-proof verification.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateUpload;
