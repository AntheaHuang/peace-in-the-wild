import SortBy from "../../ui/SortBy";
import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

function BookingTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "All" },
          { value: "checked-out", label: "Checked out" },
          { value: "checked-in", label: "Checked in" },
          { value: "unconfirmed", label: "Unconfirmed" },
        ]}
      />

      <SortBy
        options={[
          { value: "startDate-desc", label: "Sort by date (latest-earliest)" },
          { value: "startDate-asc", label: "Sort by date (earliest-latest)" },
          {
            value: "totalPrice-desc",
            label: "Sort by total price (high-low)",
          },
          { value: "totalPrice-asc", label: "Sort by total price (low-high)" },
        ]}
      />
    </TableOperations>
  );
}

export default BookingTableOperations;
