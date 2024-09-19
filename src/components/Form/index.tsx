import Icon from '@/components/Icon';
import JoinBetaForm from '@/templates/JoinBeta/Hero/form';
import JoinMemberWLForm from '@/templates/JoinMemberWL/Form';
import Link from 'next/link';

type SelectedForm = 'vendor' | 'member';

type FormProps = {
  type: SelectedForm,
}

export default function Form({ type }: FormProps) {

  return (
    <>
      <div
        className="flex w-fit md:mx-auto gap-[10px] border-[1px] border-primary-1 p-[4px] rounded-[20px] mb-[48px] md:mb-[37px] !uppercase !font-[700]">
        {type == 'vendor' && <>
          <button className="btn !border-white border-2 !rounded-[16px] !px-[32px] items-center">Vendor</button>
          <Link href="/join-member-waitlist"
                className="inline-flex items-center justify-center text-primary-1 cursor-pointer !pr-[24px]">
            <Icon name="arrow-right" className="px-[12px]" />
            Member
          </Link>
        </>}
        {type == 'member' && <>
          <Link href="/join-beta" className="inline-flex items-center text-primary-1 cursor-pointer !pl-[24px]">
            Vendor
            <Icon name="arrow-left" className="px-[12px]" />
          </Link>
          <button className="btn !border-white border-2 !rounded-[16px] !px-[32px]">Member</button>
        </>}
      </div>
      {type == 'vendor' && JoinBetaForm()}
      {type == 'member' && JoinMemberWLForm()}
    </>
  );
}
