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
    "2uUTHt2jq72wzDBgmcyo6FX7NxS8iPkXfVLpUexWNZWV5Fx8iRwbga3gT5GQYwciEZ8mBEXQ4SbJaxCQeapxhLfn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V5xLyYiUm3RvbjqGDZiLQT5Hi1LEELtG74ok3EDcMwXQqT1xWRTNXGvcoqtXrCkGHS5YwFWLZz49XVQP6E7oL2p",
  "key1": "4e9qy5NZWqBg3zy5vAm5DFWipTtKBxxAJdzVDLSAfW6FL7UUffwZ2mZFtnmtV8cmADf5HV8F8tJfzb3hcxtmdq26",
  "key2": "4WPERHg6ScGGPVBgvyUy7Mhoos7vC85Rc9mA4KVdLCEKHppaE4sAPUknWkobs4go7dYvqMW9QbJB9YYZpK9pd2yz",
  "key3": "668PARjFzj9aoiKXPTa2GSef2LvfxWJQXXNswdRrZe2HXF5dWeqG7Amm7mULUH3gCjoDePUg2qkhVWNPDEH8qgL",
  "key4": "5LgmYfWBQ1j558Mq3kYNpetHwUFAJ9Li6UWfoGAMBsg8xokkCU81SKKEuww6f9wxxffhmPSP5rVx7x33U5LReDLD",
  "key5": "ZLxqub9yiKqFVr8Uz2QYAkarzaDhYXWWqySUjsgRht87LWxE1xNiNYa8YBj211Mk8DS14Xk4LV8E1Kd51na4KSp",
  "key6": "4oeRoMjZfUTT3LLE21SDnMdFdrhZZnFdBfLU5ZxmJaq8Z87ZVyi1MaWM32g8gS6ZGMuReyYrpAYbzBWYv6nY3TmS",
  "key7": "59z2Tfgs3oQW6wVChJDBhdJnnhUZqRctqb5r1AHAUWWwcpTMWnTuiXLd7bM3rbLAoNYhhdymB2MjvDiKCxjgpWrf",
  "key8": "tF8xWCKki2qZDyBynabTe4Ru41JUUsoZ4Hv2tT95FiHgVuCuTtiT39ELDcvhCpXAivP17rW9r5ULzBtkqrWYwAz",
  "key9": "4rbuyRx3jTpkG6xcQo2d7ibnpeAS2tGQarKxTVkP3id4rbEPko7YzbFWm5yDdcXTCp3cSAEd88xRo9MHkLg1JEmT",
  "key10": "4JWKFVwE6kJzbiyTGpr8as21yhPFMdCuFa3oAzvJMFKUKxDmea8Dq91ruDh4S3MMtm77pstVc9oJdmZfmuzWefYK",
  "key11": "4kAZ5C5Y4Rab3E1gGzEXx7ZJ6DVwtch3X5s1W6GtDddnTEeooPpNER6tyCYWe18vuVD6RCBK6CHkbb1thoTmVKf7",
  "key12": "LtE5DBJJPzevCkxHZcZcL7ev2Q7zmKBcJSv6KDCxhpzp4mMfsLbiopeigWBUv6xuwSLo3HmPA2uDbSxkZ7knurk",
  "key13": "4wtaWU8V34YNSdHD7bEX8PLgm5XpanbLrEDCALWqftRcRaFpc4yYqJui3zbEHN9YkYiUrRfxtWRoAvE8ZSnSagse",
  "key14": "3otYEKh2xhyBACoALcnWQ6etpmb2o4DWBgN5cajyFgabGQ21xvHgQAqz6Ryx64bnaHa76njyDeMoSxJ7YKW5Fuj8",
  "key15": "3jVjJRtqxYMa8AMa7APH7FdJRR8L4eTmevfTzEXaqnRUqS1Yx7wN4Gy6C2a7C3kryUvQnJoXCJxPmLYTfVeLF452",
  "key16": "5yv1JbpXCL9ZRZikKHS2c4R6xs7BZwcEVVLfdpAXP47X5JfksDtzi8Nk8ML7pAuFoMM54hsymbcEHgmoNo58UeHH",
  "key17": "4euANvYePf6jpcEMimHyKMN4S3x4Q7yjsFH7Qmg53qRwoqg9MjUy44cQQzhNy9TETSRZeYwyLyqtC6xKBngkS2DV",
  "key18": "2M7gdXmgGufY293VUWDbcKisPs9oQSgbcmiVgEv1wmDCa4cUCWaep62xFcvmTvijeSNHUibDPBxTCYdQgEsaWSST",
  "key19": "4QfwDNatVzGnBTN4M5q6Aqpx3ojybf8CTYsqDdEiHpXveksv93cvc3kHWWahLi94gHGueK93KXsLW7aDgqnRBzjM",
  "key20": "2qA3gZaQ12MRqyGFgjrNWC6QBeCWxCCnUrFhus5J6pAqLLyWb6KeNLNhKDM7XuPx1oRBeFkX5o1FMvMAN5yQc3W3",
  "key21": "jQKpjXTJC4MYDZQMtEQyie3wFVPzj29YjmX3qrs6DxhJKVUNr7Sa3WMSgvcgDPF6v1JzEqvMRqMLBYTPxGLs2AJ",
  "key22": "57ZYfL7anPsvfqKFY8MCH1NYNVDNrXi3igHVs7K1B68PxFsNmFJMBKeX2dFgfAdJjutyfgpv6hfKFGgKp3oR1fFD",
  "key23": "56NAtdY2MLVnBmjUu8VGSS7qWF1fZCXcoAGhLZiRMxivkyYybGGunYQDwfwYAkHRumcSW2JeHf9FgKEWMQhYWzCL",
  "key24": "3mSKqgo4wY5tgiAiBj3miL2LFboqzzALr24yyvd7TtUi9tvapS3x3zE1bapQXpswLJyUPHoUVfUaQeaPGNY1EvjZ",
  "key25": "HbA4pimWRPfN42X64bqhSWqe2WEJwyPjddYmP99aNg8L3S7Q6MgKaUT8d4jc4W271ae7gVYDWqBkhX9rkmZbVXz",
  "key26": "4gyK5X2Wd9Mo8dwWfU7TGtxQiMZdSeDRna4WErFmDyQaAMfdHSh6HbjhxzmRWu5ffYW74vzJmVfU2hyMb6yg37Ye",
  "key27": "5WU2orZEi8HJELNVKoWg4uwyKHDCn2MR3p7rTeKcw7r6ZkeeAe3SmJpKRnETNhMbMB9MDcKNxZPcZjtHB7u78nku",
  "key28": "5njJwjBbfTyzX2dMYFYpZpHeTRNjCij782nJMJAxtRfLbKCQyyYsAgFns8YsLT62uMBKvwWhEQoBZuu3mgbsbrck",
  "key29": "uWkFc3iofPxRTkWAeGt3LnCdUXHsUsyGP66vkC13VMvzSpTC158PFtpAk8FLV66f2cqwAkVjJE9aqszuo9gxLhX",
  "key30": "5iMVB6HbdPU9WJ14riBeP1jzMuFdEREjiNME1RPpgsZU5AQ7cpTi92QiPZagCUxze6uY24u4QK1CBTnfyke34Q9j",
  "key31": "3dvFf8F4agzZo4273nsAkBcZgz9Gxt383S7Qd7JJdCzTNpyhvvnbiPzFggx9SVDGCVjjApp9xWyhkP4X6W3GJuto",
  "key32": "PJ78YWqPRnt8nEXQ8YF2dxCPtg7a7AZfgcgz5e6tDwdxBTyoUsapQ5YdhBrAMnZ953wn8KeKQZaGNbo4E4uTGRA",
  "key33": "pEzR5xzyomjSLb6xUc2EXdxVJukYKLwBHPazamjuhVdFECgWHKGL7erQ2M5kNKd1nfthZAyctz8rAkVXo1Dka3R",
  "key34": "63Sy1ZA8mtWSU9MXt565JQ1rqGW9U2Qs3h9bgcthbkofLrtt4GFMno9MYUKptXyqPM7jJcWZZBe77BXEuTUFqXhv",
  "key35": "sEbq3EETuhtzSerPxrgEiWwCiiTG4oWmrhsR7yxmu7mEjzTpN4eGReQMJEbvXmhtgRWVDSeTZ8ZBKaurGXbZsqa",
  "key36": "31PQXbpe3kAUC6MFRcMtedtDjpJSsUC9yNoZ4bH8q6Cs3AFwfvKWdr28ejrb8wd7azdzNpC4gexBwwaEiZ2msjCR",
  "key37": "3Nm3NenvXLW2vQ3vTSDEiMFuUBTvkjkmTxthTXDGsqH5GcZ9zDnHHLFtkthvNhA4J6DUszCu3hFkdRDNP7YBXmg3",
  "key38": "2w5MuEBBK6WAVH1DsVhuixi25XXoTykV6zavCrBo22TMqoh4ctqrh5Yg1eLTPxyz3jBn6ZYouwVqoNG4LHskK9v1",
  "key39": "447dvG9UurkEuQWvuAu5Z5F2FzRRhxhSdMVnPtsFxe9LTB3sFQymGTzy5WJb8fBJb8kmt4S1fZMTTeQn7gb7HG5F",
  "key40": "2cDBW9hyiXUn6zLiHB2wHyjuN5x2vGBjhUxgrtrSsFdSJANQCMmGkAkD34cfcTyQLrdmkxdrXJcCRmoaL7csGNxb",
  "key41": "4GoodKkFSmPBxzm8LgPPG1HFVstt31Ei1pBgajrkj8gce1k1WwfUq8ZsBEr4p6XxiWMDN9fNHvagRHjA9viEf35r",
  "key42": "KycDgavzsoYKxn8gTQpCcV76yEDoxamkgigLgnb8SwQjtDgmmWgT2SwsbHDteRCkpUqGcqqUBYiXpYEzoRi7kXm",
  "key43": "4MjVgYS534fkXAerwgyqiLXuptBejJb23kYQ9DfbthWjjG1d7QSoy2JsihWPxQ3zNEY3ffzrT7qUEZ6DWeAgT3xZ",
  "key44": "2cFgFtHNEkWEvMVP2Q5zpzftR64YHFJwtotN9iU1zhD1Avx1iN8ZxH458XxoFaE5YL3o3eseRweWgrWYmXzgAY3w",
  "key45": "1tqWkKhXjbvQejdpu7tdEZgz8xcZUKxo5bS47qoogso45CUeoDAgR43uK7wW2MHyyvDKvUwihe4utFGdY3AY9dK",
  "key46": "3akywj2uJbVzMNo2DwnLgK4JseuTtqQtspCswgaA1Yrpy4eMw6QYbigirRVupgeXstH5EqEBWv8mkAXgnLkVGnKf"
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
