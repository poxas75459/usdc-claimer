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
    "5ZkxWrBiYn6kewzfGuUSsDnrTRS6M9UED9v6y2fszQFKTdW3uNn7DLN48PKHwuSM2GD3FR6SNQktGvj8YcE9qTYL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46foRMvKLLwxoYs2k7uRRKGqEyfpv5xV5VNx9oafo69iZB7ZRZak1zU5DwZo8h1LwFaCSZaRzga3iXbrHDNTX4MD",
  "key1": "3D32Z8CAEjMRHLNeFgMGZysDLXPqRp6qfr1CVdWDVcdvizfmsQXHyujtjsrn8hwCeA7EvJXvCDu8T8ZR8cM3BVqq",
  "key2": "4TQu2idSMypddZzZsWJ9niCuKBiW3ksyXRmK2dsBEWy7q6vkS6pNZoQjCFkAZhR1qc3Z8ZFGjjfPR9CX1FkMr7nw",
  "key3": "4NnDXYLzHxTRWRkXSxWVZ2AGo2fTfH3UBFt1SVziAT9bhKNd4RdFdJ21VVA2dfNz91KF7PEpB7n6bkwMBAAGgUc8",
  "key4": "2HYWx7nyUZdGZMDXrWGDPoTY6JzMSX8VH5FNSg1AvM67U7rkTDAJhU9prmhB5T9Dsqd7fS6wkLJJVgsG2d9iVmTk",
  "key5": "5TwuTN1jRg1dg6fpyb2twLQPL83DE9V6Urone1nKdqXRrkLZFkxoBjRFbw8Ye7hzj9rGMSTap5MxJ6acDKvWFtsB",
  "key6": "5umGrVrpb7htyX86L78u4pUnvzMqdhvW4gv1QfTSs2TzWYpDeNWxnq4a3SaERqb1EK7swP7R52HqUqkUiivS55b3",
  "key7": "2MKHK8qc4mnhRFe9JeUafkMEf5VVwfWFcaF7k3dD5Fk48QkzgEADAe6QY1sFkXugiP1UntLzJKXbxXDrTwUuWGaY",
  "key8": "K2WRQh5mE7HvTwvBZmXmDj3LMZAvacXLF54YQBHdRgdEpS4Lg7CvJmBDUjR4taGXCJhYxN5tjiNj1nM3oVLwPNq",
  "key9": "fcPCKTe8tbZtpQ3cS9DMai5P5n5JSKULku21KcHkzXnWNNuSjoiDV1jf3Q9JWeniG1bhJfajTRTzcDowXx2kt8g",
  "key10": "62LvAAfEcDueYT9wSQ9jtUHZTV2pDTS1XBR64SJJm8Ms3mdaRyBCvR6Doga867MGmx2J4iAq4UgAC6Kh3tP8BCyN",
  "key11": "59Atk3Uo1Wq2fV9mMC7ydfT3MCn6Pda4tjZUEAssJsShBoC1CBgo5voSM1FSeUpahMZuMhA3u862sSCbVkkEKiVc",
  "key12": "5ohpFAtRPjLuVcpo4H7kEsUkda3zxNfpRfZtVPhv18aN5jSdkybTNseYKfN1CeqX53QoQmr9kWgSu9UCD9Zm3AZk",
  "key13": "pSrmLV3fwVMWyowm89CMU1bBX948wq3ZvMcitCt4ZoM82LDwYadNTVNkGDy1WExsHVvFFp4e6Mt6d619VhLaXWU",
  "key14": "4Sjg3URAaQi3HYrJrNSacU1Aw6Lfo4Et1NLNMvY8pQyzzxgZiXUCL4CH5LbKAdx874PxiqVp2EwBGT9A5BRdaYSf",
  "key15": "3rRUZt69LfjmBPUBZQisU8JCb4jKAdrbPzub9wKSLTeZno2PH17QU6FFswKJEDL4PjBGGVRUHruxWVqnDA22kGST",
  "key16": "3JZrNgi7b4ZQ8UX5Nq4JnS3HDXU3fCxFDFNjajJvnTEMi67K6Ye2NW4yMNhVZtaj1CY2XdncvCjDWCNv6BDoX7eS",
  "key17": "5ni3RaQmZBAQwMTcBx4AbNNNMVrxCwxWKpBYinYuBWKqDZsArhzmkYf7AaAgE39Sw2tiymHWZuvtxYjVzAvxJxye",
  "key18": "2PyS5QXAw5ckfBKk8xEzknarHB3hyUfFQy7FjA2q6Y6Kq5JR6Q2vxZUpWaKGYxBPgSv2StwtgkRFjbXyMpTagt67",
  "key19": "4SNS7n4UB5sNQpxaPkeEJjvB4MsmowsooTvKwPqLQKaiQkaXMrTWWaUWMBWH5MowyNo2VKz7vRbWcVCFqE7XkkjJ",
  "key20": "4Xth9r181qF6Nuso3XKE8EfWjuR5EwBnZkJkGWBDw66h64ZM3kajo1kXsLTJKvd8GHwgPZL4HfejwdohsPmKvj7B",
  "key21": "3mDtAXAuRiqywLw3RcKzV9aA57KHY62E29i6HJbVNkTfwni8rQD6uK3Y8RHKFsGox5XU1H2gX4BZn7FdRQtjFrmR",
  "key22": "64fdSMUHw1fPkQgp3zQfV3ZfsgUvMgJJ7VqgFhuGVvVdjsHcWLAwfonM3AQzNtwwhyQUTiPDT8rsJrYN2vs6Hgsq",
  "key23": "KQsRDr4mffiAGYxVcsB1feha9YFrgA24BruN5CB8MYXNJpccBumTF46fXV2qKAgQXJpL4VweJ6qrAvQjGZ6SbTW",
  "key24": "5wNjkc8LjEke8cEV26KfBYKEzNhW5eaMomxtGrfHUCEozJNN7VV4BykAF8RADzqeaGHLzoZBhrScwMvxFWnJBnhT",
  "key25": "3qHqnjsAQtxVp9U5s9FuD8vK5hTf2Uz6jYueDu2jBQYzLz3gjTANwpFtEpGYpi7XD3vwuJS4gS9yCZvYdjiXQkeS",
  "key26": "55fJ2sLNUEE1nymLyJ5ybuDpVHCzHqcuzoVCuveHxf4V69QJ56vFDd8STmoujsDFTyfZdvab9wHoWXsxApPq8Arp",
  "key27": "3wqcsK2F4hA8x8nZTSsNJS6hd4Vke1utffrsVanppVTY9zYcPATuL8ErP3fJZFdxfMvj7TbPX1CW2cUwJBGoLFPq",
  "key28": "2Tt9Z2okmBH8n9V2L2ZondUnaxAhqoy73N9w5p6VRRCd4mpz3W5o5urR1DpYqQRkBEUBRfngdVbZXJF8NewAHtKA",
  "key29": "5ckd6YnHyupHXoT8QFixPpoMYuyz6Pp9pEVqvUSnJfmU6MAcQmTaKaVsVrf6Jq9CYQFQkppcuCoKqUAp6m4BVFZi",
  "key30": "3LNXW1YDoPx1118ywyroG3Z1JwhJzkaKFJ9NkwN6SxauvZXTXDRWB3f3YX2a8nqMxB2V3jr3o1VsubiMLwu7MmMP",
  "key31": "2byQoQkpeMC3d7M3ikdvZ6yxVPQ9w6hk4qYSguLM57fmTzv79xcFeUpC58vYiBfktX2hWzX7yh8YATqbz1NxQ91b",
  "key32": "2rdgvPVTko76ZtXdnuSmeNMEXsHvW5zXnX6udfKVeNXEVfUAMGUm4tTRpHM91xY7NCq1vtjuQ9HcP6kNfTxBGVPZ",
  "key33": "35bPnxWzYdvcWz1RrdMmd1YphNQxWMNV7MqYFzgsBj4UPCTtBAVsGwDcaWRBri9XHUXBA1k653UN5oHMWxy61ma4",
  "key34": "4gfMADcffKuLZTJUjDtwtJspioFcssB48NdeJ8xJyE4xVwbXKceSZ3Fxet8v9DmjW6FsSg9Exd535n5BL69jLWFb"
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
