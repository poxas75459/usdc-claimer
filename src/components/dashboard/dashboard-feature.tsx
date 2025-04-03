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
    "4c8be4T8TFkhuJ9RZhXj9oFS3MjzfCTN3oVM17ED9J9uHQaCRe9TQ6Qubgs89R5fgCmR3g5t6NzAXpMjABUws8Ls"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31xbc71kSptM25Qpa63wrQQnbAegRUjT79DuzCysMY8qrKGsCxt1Twy4vu6LNDCRaANB85mAs99CqPuSrv5xmN5e",
  "key1": "2iYJmaLLzPnXRDpUob3ihk4n9SLn3i2enWwWnNES5VKNKGKEnuJXi1otJB2teBVXQWtN6o3WY3E964Y1zygphfNp",
  "key2": "4Y4nWNtDU5S7kiX43Vqpn7PG4da46cSAqFmFroJF7dt1sUJ77ZVgYugecu6Wr48FxezNojcRdZ3Z3GYUnfUurYM2",
  "key3": "5tPVor64HP1TJiketCrGoaxiDXbfRXsT4JpM8rRfSKfqEzXb9Ba1QCQKcQ8LF5JBLqBJMhHrVZ9VZWRM48kpiMpY",
  "key4": "58AroWvYgpuV3QgszfKBH7NsS3yejuFnPdRaypbPv3oHgevMEfuptNPAfkiGbxXyDcEKrpyzVCySpLN9MmjPp5gK",
  "key5": "p1ntv9pN6e1Z59jgBXgMeBzCmLSkXJsgCu4qMC7PMMN6dB8oYDiY9SANFoANjNWXrZyWWxmjkqcBc7oiuUbUCwv",
  "key6": "2bNoqJAkY6Uxk3Tn84Cw1pWWzye14XN4kPWZSLHBSsKkTyoYuFSF4gf3pL1492btJFcWhefzqDJiVRUr2Ss1kM2j",
  "key7": "4tNnfxn8X8cSSeY8JuWPbZC4ogNuHxYmsAqrt7KAvTEGbZ7miuCX5bHcsuDPGAAY6HrLvUcMwRt6BzNRcBQNds8P",
  "key8": "3XuV1DGYmiLJk8Aszn9NvFidaUtLs4PQ7BpptMwRXEKpWD3k7bcwBa1PdFkf7a47hEt5pwXYzdZSQZdRLukCTPPv",
  "key9": "EbinGG5RGVfXRV563oZmatkpvB3zuMbAkgeQk1DxQvgFxzdHVUPJNQH4SmcypwzoQZ7nkcxqwhRJ66zrhPfHpQQ",
  "key10": "527cZYDXfnMQk9aUUj1amsDG86yU3JzysH7kHDjnPtZoSapZqJp7ovRTpwRBsHwBpnLg1fNgctcZcwpxDRtMbzah",
  "key11": "ikwk2Wo3R8tvP6z3hS8sfXCVDicQQzq17Wph9GBzFn2w4roVMgUwfHxGVJMwLXpdVj92bCRsyC1m5dL1eE1NsMA",
  "key12": "4e3e3Yn8QNLATCo8uZ4ovXCzcBCF12SF57RQy3kFUocc58ChAHjyUmp39xWWJo6mmYGueVPQLp9JsAPT2CpfVsey",
  "key13": "5bd34dthjDqgPqXNxbMKUxqRqVZJpYxQNmAtnQQDSjEApXbWWsuwL5n2xJJoFBXHqVyz1wjsubKTnVUUQ61NtbYA",
  "key14": "4ysVX6XxGr1NedLhFL69NkQAm5er7fMBku1bzfiMDZ9HfK2wFgJHSRynue8CDtqrYQSbUx9cpwoPmoZCa4Sw5iXa",
  "key15": "2noFpXGRGGwAGPQ4kf76zAhkfAqCMbrMtzcvZWvUjHjxENRgSLAZ2HAmizgZP1547tMVWn7FCFkzEnbuPCevmsLa",
  "key16": "FxJ6tioo18Hw5ScfDN4hnCYzYBgf6BVBQCZDXnxMgRfD1wnGppTc7xqL77EFphgdLXALKAJvLTiVq1WmKsUaebE",
  "key17": "2Mpn9zFux5UhXoFAf1YWkk5vhnG4ZGemBHFTibR8nw4Hcs1rKiWxGaFT1spqSXBasGdrrukZpMBwCHjChpfsTpbe",
  "key18": "4FdRXnrvq1bF3oyqsnKzcWviJKeDmkWsMm9oDvRKNYZpyCAibXRr9w15LXv7ykDpQ7fM2wfnYmgWfU8cxFa8Lq3R",
  "key19": "2PvZ8Tv1w83714DeqV2ybGHvFSnZyHVMVUgRCmVhZ4C6onSkxpR4Pw6W7JUfFVwHNzTXyCh3iyDMTCHXrDjAqxXw",
  "key20": "3JQh7yWsSNnGWRW9mDPzNv483crRwJEDU59xgCH4rVe5CCsvkUhnw8RuBXeypBUxxX9WWWnrix5LfsPfXE7VCLWZ",
  "key21": "3yVF5dicxEmQebKHm5na9eF8kqoMGHbiJs1Hm7czMnQGTWaaoyC62SPGZEZeapCMqsLmHBqZvSdnpXMemNBLtBBq",
  "key22": "33nkcb1bGydsSCXHnUPZjw9Prk3rnhx7vzyYgGXh1AmpDCoNgEpt6zfBzWYdLrLnfoAsHMQnqA9MvLCQ2n3RA11Y",
  "key23": "4FTiJETEqNBZRLtNh8RtxvjH4EE7PmeNxh4Ex6uc8EzNeF3CCKSmXZgtz1idvMhJxyqxUdr5raqLFs2JmUdczDEG",
  "key24": "4A3k8xR6TuhkxuefWnS9VFYcu9CAPegbSYS6TKY9ztPLk2XjK6bDHw9ZQyQjWNTCSa7EC8UEjA6oNCVVvN3WMGja",
  "key25": "5aW3ERCeme8ZvMeCbsJCtMUeh2vDd3CYAoPyxQVFbGvfZRRzns5AfGcBE7eLkPTLpDuu7Zffa89i5kUCnMQQrFm9",
  "key26": "vnehgTcrPCq9VDTWZ5vGxEg2paKyKr3gnVmgvNwNx57kNkKKTtHYE2jDP16ijnCP9cxnM7qccL7FAQSZD1CXr64",
  "key27": "4RTePEZH1Z4YTWS8Ea5ELiG1oS2GPoE3zA7RuwRcxdKxsxySrhw2H24VB4uXgnUxbe38y75eMtJU34YWtZJxVWPY",
  "key28": "2cEzKYdKxaqj7Lr6YPrV8EhhVNLy6fMBfJevxKBTats6UDPBmo7Cj4MTtf6fQY46br2tfswLLLn1qAVg4qPium6H",
  "key29": "32Fe7XHU5mHvBXwBtXn7KNdfkodzb1aixi3CcKFzUY19SmAuv1ZVfYBUJhaUvuvgqDNPqVCpiFrLjcaP7zKZSAPi",
  "key30": "2k6FjMqMWg97b5URKhKqNwAChaNwAVh4EFZDP33HjhhZkv6o67StNbueETrGa1Ft738Vyg7bx6SRmEo89ragR2Tt",
  "key31": "4TRXcMfJeCaymfkfdCPc8uCTL3swHoPnTExCPquWdHnAQHD92edE9xEamRKiFX3qkfGrx5no6VRZZZVUAdd26Yyd",
  "key32": "egvYgGaS7RcGGKk3xRR6YD4LHqv1AL6kfsZHtsXcybXxnBhuKRjTsdyiK55B1ZkMVjNRo2y2BTU2chU7MMAQXkj",
  "key33": "4ykeedgeuyjd1xkytHkYcY1nMREHgtQyrna6E6c4NgBWfBgLw9a4XWV6393dkLKD5wrXUuHwySEERGoUrhsmPVKd",
  "key34": "2ukXbobLqziApsLhKrqYFV2HQ6ASQpDxPmV6KQooFQnnroL3VkJPhZSYQsuzofPJPxg43MGuiL3p7WqyabNaqFer",
  "key35": "3271CaC2BxVadXKE3CwD1cXNmXmdKp74Lnuf7psDRyP81nTEWLCqpPLs43XCTB9HiKx5esJPLw5tFuZKAvKwGswe",
  "key36": "xXaEp9mGdU7VWc2Pk9W9K1mYTMtD22Xbf2RKkbNViBnRebd8zzdsb8BPpwPk9G4K4BjUmCC7yTLzQNoHcCcJoP9",
  "key37": "S34zJuq7N1PrttJbBVe6KqiijodWAj3cG4CpHsAUVWbY9ZRzgfJ6RaimBCksEjSYs7KKXS9jw3j9wdhDMq3ND8H",
  "key38": "22G9CT4cz7tnahPNpmCpz3TT4echnPjpSif7FUjbqZspogYJbfD6JdiiixbLW6r95sjX4KiUmVb9nHQ2SpppPb19"
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
