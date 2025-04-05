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
    "J2QdTa4yvDLPWs2sT2H2gpiFxx9FktzB5mhuJFgeDoumaM1TdcDMJMM2nwMM7Yx5tP35R5svF5iZFBHyKNkzP67"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sxxHmhMk3RhhttaW8YiuS5PKuX4NPvkndtN5f26RqjheHAxxhu84RSKZ2NwRmN3BUiEARyX51neuhTWwVPHxiwV",
  "key1": "3vBE9h8HnypVn1hCb8u2AEAwunbP7Yepk5p16AxfMLnerTthqssBAxZ74B9qwEioUijv9sEZBKhc8famyGyDcSMs",
  "key2": "65HDe4npATxtYkeAS5nkScKdKYah4kNTKoyEef6cFoCs5Xa6vLZUhgmw8bx1dYZD5RgvjyYxj1aWevuREGtqgu8V",
  "key3": "5YyYasTy1PJvrkiCZT8jSPiHyeCwgLSzi3MeNYsqd63mhhNA8yQ9U7k92ypjJNVDYLyQZ1BPiwkGAyKnj8wTPxJz",
  "key4": "4rF9ESRRibrXjLsCDuaQPcHzpwS2CyEiU5vLvdkFkqr3psL67k7ruZ3BAG8hteyjsGT4RuinZhf73nQeW3peAfEr",
  "key5": "3Jf88fJcnGxWWGnZbZJhPS4E97yRZCEigUDDRXCYLVnk1pYwrsTDhCGz1DpzHD7QsLudyn2iCWNtPhem3mKXrRQG",
  "key6": "2WNrUTLBE8Xu9cGDR3NX1MTutwBwBhbzDxrXDMw856YLqMDrurgYwuGkdjL5uwHFywcQ3GrDUw6JpXLXjZv556L9",
  "key7": "3Z4EKG2BDboVYMefkyREVM8uUaTE4zdqRX3ypCc12kDPg4jZzW3kR738iskHZQ7oqqrE9j8N1dmDzTLxa5bPHpRR",
  "key8": "2txNHg9PsFutKfWtNBk6iegpwCrDsjcV9TbvF2Fw19z7HPqmkpuUard6WjyoGqfEcHJTBXBYb4aU3boRFo9bCPrJ",
  "key9": "XaFHW8M8ToH3VbL82G4KHhk3EQywmXQ9WkcxQ5Rd54ifFjn4xve28tyX67o3EtkoC3KvAaVn9eowSg3H2P7VjsE",
  "key10": "3PxrVbTZDXVxZrh87VCCZAYaXEEmgbs6KJhtwGY72jo5Hm9GpBByRHJdZiGqE5Y59np8iqgnNQieusniwZoHejFd",
  "key11": "4LszWsQexvpJYRtVAxGNXDdV1eTQgA51wFQ5wzdxNRZBAt6Bq6Wwf3ULhMGRLzKuA7NT2AEScWxyP2wfGTXDAjHv",
  "key12": "2wGwKKcuJ6Pgrp5E1jsx4VVqYP4V4W9xhbRTc6R9r4vzif3Jmajn9YRoK9xYiuicyf8DNdVPWK1Da6ZjdfW3Nz1R",
  "key13": "3wwCU3Lu79dVDRpwxRG16LSGpkYe1UeckLb2NW9K3eTSesnDjHyqWXwzsn814jCxKgPwR6EN9C3fxtCjJ4rCUmfx",
  "key14": "2fRxXhzGpXmUWHbZfJ6ijK4bAgZBs3xhe6dK5kmR4rtR4UFWPCDmtdco3nveM8MyS7TsErEXET3YPetNeKYu2jpU",
  "key15": "5UnY3vhr21QxEfsuEenbdYGHkYCwXyv6vWS6ZmtgMFaeWxKNv1SxK3sDD8Ze7adZRSRmPXpRRQnArhRcJ8hAjyDJ",
  "key16": "4F3izXeghYyuRehtuNc91BHC5b69TByCGVoDmr8U99WErPphWp29azXqjaL23Q72UmwKsvQ6UozhzuJpQTVCU8iF",
  "key17": "5F79567TnDqZxDhEEr66RW4fTMR4v3bqL4MX71mQeWgpVWDXjZmTeFgoNHc4VyuQ1i2bq9Mn3dsxFuQoHabFxHpL",
  "key18": "2t5aH5bRY1NpG6RLn5tZHQiuQiCBHr9xEi8GQViYJ4MxZrvSEm4VDi3FXytdzV1LuKPEFakqACVK98ZnMa5cS8FS",
  "key19": "4mbw97qr4gZ8SuDrRZkSCPPvPzcLhHdW26swF2xM9eBSUjK1sJhN3JqKrrat3cp3gyFxj6Vnpk61nAm4XxB9bhQP",
  "key20": "4uA3DqXBKa84FdYVPo3Jxf5RHti1GS5DVGGoqDN3KqzBkE5ZYehVfhkYu6aiJQuVPy4dhUTgQt1GkLVRbx9ofUpS",
  "key21": "5p5YJPjm4LTvNpuxTZP53d4A4uhkkKdqq4XQ9jS9BQTYYixBbvZ1JUQaS3MmKD8rpyZCfx5q4eC2ZeC8jJao6mo",
  "key22": "f6PH4voHh5X1WxMVqxkDoCsLXfY3eTcLP7CxaGTzch8YLAzsjebU58fht8kgMzgFQ8WvgoFLm1EArrUrP7kLLer",
  "key23": "psUSmVJnU6Vj6swuXtdm4Bcrg58NuJqE1mXoHJezh9tjpx26wWvB6fRJtDu84ZqRF5oTdNzqmutmMX8ftBqx2Ck",
  "key24": "5WZpnXVSbrdBzqyVJKtk1RZTySmMKvD5Dvx97rQZzt4PPsKMxPJmREcgUbZ35T78L2w6XH5YqS8DJ4qj7YvucXsV",
  "key25": "5tRyzNwt97MpDaxdL9mxDfTSQsYP5LwmwY9zfRkLTmbfM3oJ5L2K4uCTJXAvN2S29cTAeEQUot6o4M5xf7LYfpj1",
  "key26": "4f1tgjmCpXEUHM83rSYT1xozS8gswuy8BxAZPtC6HJDkV8iMkYSnac7tLEyWmkANhCvjDCMNdVUW276Pdcz5r56g",
  "key27": "4SNL4G8qQQ1MqtHwzV27nZtwUKeDDKvJmGjkW421xkyPP9QvB38uG4BrBqRZkCiXZLRNYcE55C2V2ZtPvQWbMDy8",
  "key28": "4Vu2RNxbcwZsWQsYaUa3ukg7Ev8SkvgMACSZEBHxu1FgExi1wCrYKjYinG2FRR1Dmuo6Dtes4TKKMmUFTPwsGoxf",
  "key29": "5F93PBK1CBzd7hXG9P4V2KSwqeSLzAFz2cNnK9NTGWfdKXRdZVpLD4253nBEeKMa2DN6W9GpDwrqgeYnfFdMJzt3",
  "key30": "x8tkptywoHUnpyhXzvhCm4JRgHxi6GYrAJanAmnCEkvFZJLP9MJ8KYMfUX1hNHSNxoc2WFByvK1fMhtyj9NJd3s",
  "key31": "3mttQXBeQ4m469mg7rjE6GrCuKzm6uEuoWkurpM6QefDKzeEBLuBMv7p381UePmW1vGMSLesDVzYwRhsM3TBX6r3",
  "key32": "gPQwdPxjjT4tUjRMrv3X21g3XdWfcPWD3qcKQhFCxyHJnjBr5ZtQqWh3UsuhCMbyxE7Ms5Vuam4x1QM1rTTjEEz",
  "key33": "3dK94bzddzoFkfXDkzx5dvDbBcG3cEGztyX49vQqE18rxpjJ6b6WawtmH3qcGF5BVyMBMKsF2YSGBGH3iRMsoSSf",
  "key34": "4awJmTw7E4HGWmXrrKQ6oVxg6nWYe5P2dvzUi8cBB1XURGeZuVBevnmkFtCsvg2QBbyKzfH5vptuTc3Fr5FqBtaQ",
  "key35": "5beFvbPv2HLiPSHVZqcCTySM13cNZSBg7hKrFPd7TypHtBaiXu5e3yNrZ38ZBxA5e8LUJpKaSddFknBr1yaAmPVq"
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
