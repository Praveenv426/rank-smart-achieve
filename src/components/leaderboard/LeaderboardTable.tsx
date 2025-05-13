
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { StudentRanking } from "@/types";
import { ArrowUp, ArrowDown, Minus } from "lucide-react";

interface LeaderboardTableProps {
  students: StudentRanking[];
  currentUserId?: string;
}

export function LeaderboardTable({ students, currentUserId }: LeaderboardTableProps) {
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <h2 className="text-xl font-semibold">Student Rankings</h2>
        <div className="flex gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="All Departments" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Departments</SelectItem>
              <SelectItem value="computer-science">Computer Science</SelectItem>
              <SelectItem value="electrical">Electrical</SelectItem>
              <SelectItem value="mechanical">Mechanical</SelectItem>
              <SelectItem value="civil">Civil</SelectItem>
              <SelectItem value="management">Management</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[60px] text-center">Rank</TableHead>
              <TableHead>Student</TableHead>
              <TableHead className="hidden md:table-cell">Department</TableHead>
              <TableHead className="text-right">Total Weightage</TableHead>
              <TableHead className="w-[100px] text-center">Change</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map((student) => (
              <TableRow 
                key={student.id} 
                className={student.id === currentUserId ? "bg-primary/5" : ""}
              >
                <TableCell className="text-center font-semibold">
                  <div className="flex items-center justify-center">
                    {student.rank <= 3 ? (
                      <span className={`
                        h-8 w-8 rounded-full flex items-center justify-center text-white
                        ${student.rank === 1 ? "bg-[#FFD700]" : 
                          student.rank === 2 ? "bg-[#C0C0C0]" : 
                          "bg-[#CD7F32]"}
                      `}>
                        {student.rank}
                      </span>
                    ) : (
                      student.rank
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                      <img
                        src={student.avatar || "/placeholder.svg"}
                        alt={student.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{student.name}</p>
                      {student.id === currentUserId && (
                        <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">You</span>
                      )}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell">{student.department}</TableCell>
                <TableCell className="text-right font-semibold">{student.totalWeightage}</TableCell>
                <TableCell className="text-center">
                  {student.rankChange !== 0 ? (
                    <div className="flex items-center justify-center">
                      {student.rankChange > 0 ? (
                        <>
                          <ArrowUp className="h-4 w-4 text-success mr-1" />
                          <span className="text-success">{student.rankChange}</span>
                        </>
                      ) : (
                        <>
                          <ArrowDown className="h-4 w-4 text-destructive mr-1" />
                          <span className="text-destructive">{Math.abs(student.rankChange)}</span>
                        </>
                      )}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Minus className="h-4 w-4 text-muted-foreground" />
                    </div>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
