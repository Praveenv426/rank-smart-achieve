
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CertificateCategory, CertificateDomain } from "@/types";
import { Upload, X, FileText } from "lucide-react";
import { toast } from "sonner";

export function CertificateUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isOcrModalOpen, setIsOcrModalOpen] = useState(false);
  const [certificateName, setCertificateName] = useState("");
  const [certificateCategory, setCertificateCategory] = useState<string>("");
  const [certificateDomain, setCertificateDomain] = useState<string>("");

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFiles = Array.from(e.dataTransfer.files);
    if (droppedFiles.length > 0) {
      handleFileSelection(droppedFiles[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFileSelection(e.target.files[0]);
    }
  };

  const handleFileSelection = (selectedFile: File) => {
    // Check if file is PDF, PNG or JPG
    const validFileTypes = ["application/pdf", "image/png", "image/jpeg"];
    if (!validFileTypes.includes(selectedFile.type)) {
      toast.error("Invalid file type. Please upload PDF, PNG or JPG.");
      return;
    }

    setFile(selectedFile);
  };

  const removeFile = () => {
    setFile(null);
  };

  const simulateUpload = () => {
    if (!file) return;
    
    setIsUploading(true);
    setUploadProgress(0);
    
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          setIsOcrModalOpen(true);
          // Simulate OCR extraction setting the certificate name
          setCertificateName("Advanced Python Programming");
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  const handleProcessCertificate = () => {
    if (!certificateName || !certificateCategory || !certificateDomain) {
      toast.error("Please fill in all certificate details.");
      return;
    }

    setIsOcrModalOpen(false);
    toast.success("Certificate processed and sent for blockchain verification.", {
      description: "You can check the status in your certificates page.",
    });
    
    // Reset the form
    setFile(null);
    setCertificateName("");
    setCertificateCategory("");
    setCertificateDomain("");
  };

  return (
    <>
      <Card>
        <CardContent className="p-6">
          <div
            className={`border-2 border-dashed rounded-lg p-8 transition-colors ${
              isDragging ? "border-primary bg-primary/5" : "border-muted-foreground/25"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {!file ? (
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Upload className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Upload Certificate</h3>
                  <p className="text-muted-foreground">
                    Drag and drop your certificate file here, or click to browse
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Supported formats: PDF, PNG, JPG (Max 10MB)
                  </p>
                </div>
                <Button onClick={() => document.getElementById("file-input")?.click()}>
                  Browse Files
                </Button>
                <input
                  id="file-input"
                  type="file"
                  accept=".pdf,.png,.jpg,.jpeg"
                  className="hidden"
                  onChange={handleFileInput}
                />
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="h-12 w-12 rounded bg-secondary flex items-center justify-center">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{file.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" onClick={removeFile}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {isUploading ? (
                  <div className="space-y-2">
                    <Progress value={uploadProgress} />
                    <p className="text-xs text-center text-muted-foreground">
                      {uploadProgress < 100 ? "Uploading..." : "Processing OCR..."}
                    </p>
                  </div>
                ) : (
                  <Button className="w-full" onClick={simulateUpload}>
                    Process Certificate
                  </Button>
                )}
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <Dialog open={isOcrModalOpen} onOpenChange={setIsOcrModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Confirm Certificate Details</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">Certificate Name</p>
              <Input
                value={certificateName}
                onChange={(e) => setCertificateName(e.target.value)}
                placeholder="Certificate name"
              />
              <p className="text-xs text-muted-foreground">
                Extracted from certificate using OCR. Please verify.
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium">Category</p>
              <Select value={certificateCategory} onValueChange={setCertificateCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {Object.values(CertificateCategory).map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium">Domain</p>
              <Select value={certificateDomain} onValueChange={setCertificateDomain}>
                <SelectTrigger>
                  <SelectValue placeholder="Select domain" />
                </SelectTrigger>
                <SelectContent>
                  {Object.values(CertificateDomain).map((domain) => (
                    <SelectItem key={domain} value={domain}>
                      {domain}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => setIsOcrModalOpen(false)}
            >
              Cancel
            </Button>
            <Button onClick={handleProcessCertificate}>
              Process & Verify
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
