import CustomLink from "@/components/custom-link";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="grid grid-cols-[10rem,auto]">
        {/* submenu */}
        <div className="flex flex-col gap-10 border-r">
          <CustomLink link="/dashboard/invoice" name="Invoice" />
          <CustomLink link="/dashboard/customer" name="Customer" />
          <CustomLink link="/dashboard/marketing" name="Marketing" />
        </div>
        <div className="p-5">{children}</div>
      </div>
    </>
  );
};

export default DashBoardLayout;
