/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "XnrwJyCWnWA3DVpxkyAbRFKLB7WjimBq35xWawXU9FZeumELbM2Qo4YXeJp8Diturwpz6pPqkc1KWb1CP8eNbeg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ENfdi65qDAtjQq3ZdGV7uMYv1K5cEQMXdMBvGvPN1aDi86ywpLhe39hPJrJNViTRXAvtx7NkDhoqJ5mwGe2z2oy",
  "key1": "3gGvW39HwrGmxf25wVUuxUxQtQSFEif3ADmQ36Rr2sPak3HwZBF4svRBQ51Gqbdqnz78DYBgzjTKTTz56z6Cdvik",
  "key2": "HnwhgPRKKRjzjbjhJfL89fCMKqXd54zTeK9Nq84A5hEQN9HAew2pnFSHg7oHHV3NGtuGF7Mfd9A8DuuAXg6tNQp",
  "key3": "hTWh8n9YFubvkBCtqE3bKNGMngziXf8EhVrDnvtJccVVjwu9Ma2RXQLcjMeTLBJoJ5C4vABgnhzrVkixCtjcJ2N",
  "key4": "633W8qeoZwgMHq3G1QWKkCvPWfAFvJ6EPS8fN8npkHNwFtp37fwMWTuUdHVTxaM3GzUeFzXu2CRAizd9uV1dtyAx",
  "key5": "2npf7tEk1GY3XuzbPnpFPFdTx17r7DFav2cH5ajD8hu6m2vsmFZXwL4feR7uxkGEqUoGbW9gRdsxWKHWa4XG97R9",
  "key6": "4Ni9ypKrxcGaQRrfKntCpduV7sTC5nqN89MouzRiQey6MrfCMUCXhwzJPboQ82dfvfaSAw3cSGcWu1sjBRGjE1ve",
  "key7": "2JC44RvuTKTiiYF3dCY1YEyp5mSXKppGxioPLCw7h8jKkWjYxUN37jCGDY54Ry9dC5gFrZhSbq8tWeWkDJSxrVE7",
  "key8": "2qvP1v9DrD9eEYt9HqjPzZDFEdizqfkNTer5y3FSvhZR9rdPVtv4oN1rUQZz7jxhsuvhAdYbmmyrf4mBBVqGtqxh",
  "key9": "3oyR19pBe6bEDowVgvM442QzKnk5k5U7sA1tcY8W5vm4TBf3KsZbt4Noh6XbWPgeqqCta1iXfwxHqgzLYja1H9Yw",
  "key10": "2GCG8FrkWCF36dVkszYekebhSmNqVEWjEdPGpmfsJGp9pCHrDxqtrW4Qpp16v8faGHrwEyJGjekQcvoACDnU8KEV",
  "key11": "D4tkNrcmmpV1sZsxJMssesvvYZCqzMA9j4dgv2VtKhAf9geMMg9NewRLehjNq44ebETCnV9znYtz3yKoSrEZzc1",
  "key12": "KtA5qe65UEKTAkBTgz2THmD6kFpFzcWhR1cmTDnBXDctdCdCw92URqrdwLxCbwt7YyFkAPLRAmSroAtYbNxWJd4",
  "key13": "2UAW4RiVZr5A7kPKZtcwbUhPNKkRQu9nEXsrEwk3P1fqkNqyGkN18KLV1wd3tDNgFxYUHMEGkVJpWngUfutM3B8X",
  "key14": "555nmwpRSQJ9SAGKEFq9TL4jjtuB75JN65iWq97kDBwbWieoktuownRz2WbKTVnVHxrBUQUCHL1hVVpPyWL33J3Z",
  "key15": "4y4dfejWozBaLBb2c5bbLjnZVJmxLiknJpep9biJgxHqom1w9g7w3KYPpZx1ZtBMEWMVkfEudktq6tp5LSMwcR2C",
  "key16": "5pgYWryByQc1R32eDDEnoSCaGczjNg4ZfS8JVBcLHQc4xqgCnpxPPP8zJQMpMLrh3QYHgiczbsjzgqK5CothGYkX",
  "key17": "2Da9y8JSfM1diYfiTnNQmoZ9qqFd5uG8UYvEv2QcfZeALV5UQS5gRfCrJFXiGgtUV2P8uXQViGzSu7qNnvDZysQN",
  "key18": "5648nTt7B4XQ1TKpFEwzxUoCKK8ofSbzVYTeJVFY7bLsx1wUqjwNKv4asdvBisU8RA2udEYVTXP9ASXmjvPJL84v",
  "key19": "3nAGtCviNZfKgi2GZ2R7ZJPAvbgArrKk1EoAkJksNbeCECizaytA7XaxLPtgpEiK1EbnLRwbg6osQMUmMXLZ7e7H",
  "key20": "5xbad9SPTCSDxuPjwSwmFeGJa3uqfVJBFqWMe3wdz653Ta4C75f4ewLRdArN9ci6kiUtirf8AuMPTrEHG7k93CJC",
  "key21": "po28Ef284msb26mi1NjdoxRGX8ymLUA5GzLvMKH9YMEvbUk6g73dDfhY7VKgKXt79meFoYtEuZm2NCZCGaS8akL",
  "key22": "4sHSzmUkAutAVQ8vJHoWcSk8jmaMNpxFNBGUaPy8Z76WbkGqih8BDQRLvqbLXSk2uizHxtuYALNMokY69h1QCu7z",
  "key23": "4i1uXPQ2V3BwNu18MPT6n759dKtA3KPE2TSWAkyobwxKG7aEHwtaLaRnTnn1tyJLZdQWz571JLodGMWzy9D5wef6",
  "key24": "55gUWPtr1fth11DGQai4WkbYCV17suT8F44RUvmmeUWEbX5421MLrmhjXfUUx9gb9gWQ74kA37C1mA2Mkejo5KV4",
  "key25": "2fBryjgT96zb3sc7cK23vAaovPo723mKEMCtZhZMxSmUrJmhiA4zD7Jxpvj7BkfvbxYxbcnXT4pSrtV5jr1tzAKc",
  "key26": "35nkk1K1ZErj2ojxCmkYZ8WKXkn62QHrqyK7nHcjW1tjEvkTk5xM7kBBEkXatXxiGBFUhgoyzEj28bNDyKhcpAiC",
  "key27": "3gmkEJGz6DSaahULZfPCVLh36CDdAKKsgMVszbv9JRr5aiT8W1o9RQUJGejL7ShWw35yFLRMCbzRcWoo1Y7ZzzLG",
  "key28": "kvQEvsZg36swKNFgS1WePd5Y86iPLZqesR1JQj7brFd5fdNVeirauPnyiFMmojEyq4Krxfn6ea9FJKjG98ksuFx",
  "key29": "2r4Xe7iFyCJR5oGE7zW4E4pr8e67CXUu1NT311g6Pwx8hRAJsfrXw5wJhAutBiq61BmUuzCDoBvzg5pxbuoNnaKr",
  "key30": "vTxBBu3e7kE8h47CtFkbCSAgXhubne286hgFiy41wA4RyT33EwDBmBsUsYY3g1PfTiBxMqRfYpGyxHqqZraja4q"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
