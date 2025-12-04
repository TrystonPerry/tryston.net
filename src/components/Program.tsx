type ProgramProps = React.PropsWithChildren<{
  title?: string;
}>;

export default function Program(props: ProgramProps) {
  const { children, title } = props;

  return (
    <div className="max-w-7xl mx-auto p-2">
      <div className="flex flex-col w-full bg-gray-200 shadow-sm rounded-lg overflow-hidden">
        {/* Top bar */}
        <div className="flex justify-between items-center w-full p-2 bg-gray-300 shadow-sm">
          {/* Controls */}
          <div className="flex items-center gap-2 w-1/4">
            <div className="bg-[#FE6059] border border-[#E04137] size-3 rounded-full"></div>
            <div className="bg-[#FEB92A] border border-[#E59400] size-3 rounded-full"></div>
            <div className="bg-[#19CB41] border border-[#16A339] size-3 rounded-full"></div>
          </div>
          <div className="w-2/4 text-center">
            {title && (
              <h2 className="font-light" style={{ fontSize: "12px" }}>
                {title}
              </h2>
            )}
          </div>
          <div className="w-1/4"></div>
        </div>

        {/* Main program */}
        <div className="flex flex-col items-center bg-white grow w-full">
          {children}
        </div>
      </div>
    </div>
  );
}
