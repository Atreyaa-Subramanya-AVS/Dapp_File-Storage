import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FileImage, FileText } from "lucide-react";
import { AccessPassword } from "./AccessPassword";

export default function SharedFilesDialog({
  name,
  account,
  fileDetails,
  contract,
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="" className="mx-auto">{name}</Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-0 p-0 sm:max-h-[min(640px,80vh)] sm:max-w-3xl [&>button:last-child]:top-3.5">
        <DialogHeader className="contents space-y-0 text-left">
          <DialogTitle className="border-b px-6 py-4 text-base text-center underline">
            {name}
          </DialogTitle>
          <div className="overflow-y-auto">
            <DialogDescription asChild>
              <div className="px-6 py-4">
                <p>
                  <span className="text-black font-medium">
                    My Account No:{" "}
                  </span>
                  {account}
                </p>
                <br />
                <div className="flex flex-col text-black">
                  <div className="grid grid-cols-3 gap-2 p-2 border-b font-semibold bg-gray-100 rounded-md rounded-br-none rounded-bl-none">
                    <div>User Address</div>
                    <div>File Name</div>
                    <div>Action</div>
                  </div>

                  {fileDetails?.map((file, index) => (
                    <div
                      className="grid grid-cols-3 gap-2 p-2 border-b"
                      key={index}
                    >
                      <div className="max-w-md w-fit pr-5 truncate">
                        {file[0].slice(0, 12) + "..."}
                      </div>

                      <div className="flex gap-2 items-center max-w-[100px] text-ellipsis overflow-hidden">
                        {file.fileName.endsWith(".pdf") ? (
                          <FileText strokeWidth={1} className="text-red-600" />
                        ) : (
                          <FileImage strokeWidth={1} className="text-red-600" />
                        )}
                        {file[1]}
                      </div>

                      <div>
                        <AccessPassword
                          selectedFileDetails={file}
                          className="w-fit"
                          contract = {contract}
                          account = {account}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </DialogDescription>
            <DialogFooter className="px-6 pb-6 sm:justify-start">
              <DialogClose asChild>
                <Button
                  type="button"
                  className="inline-flex justify-end mx-auto w-fit"
                >
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
