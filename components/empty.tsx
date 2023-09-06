import Image from "next/image";

interface EmptyProps {
  label: string;
}
export const Empty = ({ label }: EmptyProps) => {
  return (
    <div className="h-full p-10 mr-10 flex flex-col items-center justify-center">
      <div className="relative h-80 w-80">
        <Image alt="Empty" src="/empty.png" fill />
      </div>
      <p className="text-muted-foreground text-sm text-center ml-5">{label}</p>
    </div>
  );
};
