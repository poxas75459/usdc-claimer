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
    "5qkby6EFrgoonCi49D7b6fmJ8cXhiiGnG643Kay3goZvYTMRhxPecghq8vV6Z319gjXBB9iLSpHsVwrJUGQMdyAj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39YUVjAqmHFUyaAu3AyBKyvHMWaiiUV6Zye3hUu7borDrtJNsxRp4hsKdtkgD9inbxRFQeibuQZ4tAgxnvceVV7p",
  "key1": "2jQVGFKBfx6CYmcQz7ufmg1T2hu4g5ALcGTZXMpTQrZaDfyp24oPGqLwRP3t6bThsCTzq71KV2ARm2AnyMq5duNn",
  "key2": "4ASpgr5PsPiWF7r3sgK7MnHK54SdB8RVphgYGE3YgGUn8BV6qFcWTaAiqFH3w3jR56SF2gwBdenP2m24uCuVpwxY",
  "key3": "HVmeBTvmj6E9kcmJGNuTYYSSr1ma1L1XZREqCgR92tAf98ymPzr5tjZXDfWXTLcTRjrDmJxujHA6Mk7qiAZsnLa",
  "key4": "2SwkQYsE7Zv1dSakyaQaxRVeGneE271QLenyvgvSUCGxCHtJvGe7pYcTX5b7yR7Gj7957QSKRhEU8osd4peAAJsN",
  "key5": "5tEFSHfopdFveweASjwFB7UEu6Vs2ZCc3NxAkrAMbrCjDKhQUnUA3vorZUnFfbaWGX6QxjDubPSPFuZNHg4UzHpd",
  "key6": "4zYRNTZtWT2ntaJAuSdPTvoq5nwSjCkAkT2nBDrMUCupbb2JkKM5REHvdaZuqaWjvX3s7NcRXTLh9KdU2dVjKFM7",
  "key7": "uM2tUFbwyUvzsAWFmfZUJcKgWHD49YCTA2Jiy4CXydFmwrJFedSUg1gEz4toa29mNAcV7hb35rjsx3QBLFxuKse",
  "key8": "4M5h5wPveyqE5UF19YJi3XY2tvAfcVvT9rooZMjmGqvcRSXdzasEW8nCMSuBgKKtBReDU8QYoE2b9UdbsyJ3ma5Y",
  "key9": "67X1yG7qCy6t7W5vXyj7sBV3dZHYxAvhTcvrC1A48RnWKtA1ZG8ioV3Lu9KUi3WwpXSkppE19CFFKQPf9x3rj94B",
  "key10": "2mnnd8JDB2S1VqPUMvftRE9NzXxkuZbA5nJcpPyDkMQrpCZhJshJsbGUavdWJsc5a2J4xW3Ep8jPDUdRHFq34inp",
  "key11": "2NGFpmQbHL2VWyekExArp8Fd32n2dHvdVUXfBZhMbHUmxRvfwnrv2ahrvbAaE3cbawgYiGuZAX1fMy9qbP2nDW6a",
  "key12": "4wewZSmuKiLFn6uDU1jHLixrZE9U3DJgMZrd5NN1X3WXudubbo2NsyMUtVi8VDHZFuXduzsQqWaTRTAbWr4MJybv",
  "key13": "632Wm5ivQNqMAvPXjxVVKXNXQRpiEGGsKtjEfP8qBzpAwzFopzKsgqLnkFJHDR5V8qVfGjxvQAXGcRF9aiJtuwNh",
  "key14": "3Vn16jf12rgZ2LNvkJSWuZktbDgn3VmkXvx5oHLKMZm3FnHE1tdjA7JBXhDCTq2YXymFXUZefJdVxmN7KM7TCHjP",
  "key15": "49G8knuN6GSsvQx1k9z49QP5KSYtDKjNkVv7M5xDuYQDYvn1W7gG8WntfGexvnA5ALy67x6YmTzY12tzB2JVdxEj",
  "key16": "W5vbdQhXceajH5mJVcek77TPeU16SHLKbd8ELW2VCeQxnGens4o1FueZQNyA2tjaLKCEn4f7VjNdKsMRGSVnvq2",
  "key17": "5kUmFUH8ikRn422MhEauW2RFixepD8g9o4YHny3AynaZ4x1n7HTnQQ4ooUMRXRQMntEqjHNPZwjte4pSvrp6cVbW",
  "key18": "3aqJqDAaw4JX2u4zBP3jCxmz9EwsMDRYkbmXKTSgBZBdCBmDGwL4qqEsHFUhmqURTeUEk2h2ZMJdFKjzeZvVfTuE",
  "key19": "2VBXM1TJkhYJcNjdUV6zQtdhmBVQBmLB39NT9P83BFYgcuVAbUWP21kYogwzfbtnfYKUtAZnSTP2KU7w1ms7jWKg",
  "key20": "U7m99UPJiW2iwWJF51yc1tuVXL9R7cQEVmo5p1p76raRAV3cjV33EvuRVEfp16phgKJDjW8EtQvmbKtqgJ4WsNZ",
  "key21": "5vchMsUhU8GrCUQjhxkaiCKBXBcpEmPPqZnFEz6HPdEqhLuDh9UMMtfnrko2JSYV51NcB9Z9ChLaYuKNdsmCJC2E",
  "key22": "7QtToAhVkw2ZqeQW3Q3XAEsD8zR6a2enLobGu1aY9jaZvhVXVTMUbmJEakCHwXqD3PyHzYtg1WA8qAVxsN1UbMG",
  "key23": "5h9e5qCczamGrUydLfAprWvkSGoTGBf5NnNqR512gt52hBNZdzCwpCLWUHTBRu1fAhEVdhpmbQGf5vAPRCvV4P4h",
  "key24": "2cNUKnvjdRFwwJ65Gq9HnrNLD5dwvSVDjocaNpZJL7jQdD2ajhQSR3Gy3TzXJpCfkaKt872XU9KK9YQovFxezue3",
  "key25": "3gJQv3x1Q34FRAgq44vttCjpzvCtByifqWMwCgiT8xQmUvdAcddKnCcqRPrRgbhfPt23zy31ysEACL7EcPgKk4Ax",
  "key26": "4kDasSA6FY93CQuncc1hU2Yqw9QYGvMJYkhvzYmXwb7m7rFe5j9aJGWpnmRGrRkcha53tJ9KobnL2k1Zog6MjB5R",
  "key27": "2HtCKHusHAHXPXWXapnLNLZ3Q8FBJvxR6PFn7cwYqmHFXNVag6aUGBN3xhs7Xs9YSvCwQ4HQ5grDd2geH15Nfs96",
  "key28": "zTo7FwHrXBA9Ea7sspBmmhx7Vuh1ehmavVoEa6pAUWNjGcLqsgwYRjFHhtRfrFcMzWqyHZJb9NtXvd6uEaWHrUE",
  "key29": "2w9StHLHB1ZjFoMfzWEQwwYKZUYw5Du8CCjtUCrorXrT4iWT4Sjf8vkkmvr78ytSbLND89YE82jUMu8GLsDYspXB",
  "key30": "2AWiuZC8rbTai4ztgANbBZMW7U3MpQUu3MvLQU211FL4kEEJn7oiFFirYivMDaU1kdvH1WjkkZQ3g9moRRmYVKCq",
  "key31": "62QxdQHgdGecPabVMQj4khzKt8HnTG5MPXCdHVJJGuL4jRBmfFDR1zUzc6jRkW1REDqeJjnzvY7Fm65douTjWyvb",
  "key32": "26Fsiy5syYFHn999zwbd3JPv1ZAj3Juh6BHyYQqZWjX6TLwJnAkjt4VfDjNEm5A1NKBiANR9AZPRdGTV2mG5qqq5",
  "key33": "4kSdrQJvigGwDyE9jyLzQjP38oKp7naG6QkRCmiDGTdocxTypH5qxKm7658Dn2L4GskcRmZ8CCZ7urkXnweJriBJ",
  "key34": "23KHmnyab2bA2RaWT3A7VGXjjqsuASspKfj98WrQLFUwTAjohE1WQesRaiLVT7dpYeNgzv3ssCXtL5jiksvqWrYu",
  "key35": "3Tuyrgh1qkYCDeL9zsucWmUK6N57AEf2o5aj686joE1rhsy9mmr2SjsYHVDf3WHCd3UsJN1JDTgtmz2Q6uoyuiUc",
  "key36": "4sYs4mURzx88nitT76ERaDMAG1gVupV99XqEaPnaSF6HHmVPchZcCMEPe25WA3DT7B56NyyNzzCLH3c2Q9fYhENb",
  "key37": "2YfeNCfLsjwacxbUj1q5kUcJeabthK35dSZvGu5rtBYqH7y5H3XfTHXJFwWZ7CbQUaRQc96B6kw5TWJSJUNMq6N6",
  "key38": "4yJBEYJD11nfnEaUsxacDCeG1s89xPhS8nyxKHFBMAgmMsXvfad21hSNEnpKPH7KVYN6e5d1A2oFs676p611jFtT",
  "key39": "5AqEQW2yivWjf52C5pdU4i9y1PNuz7CTUa9eTfZ7mmdt8obhzmpgWNPx2icCLSdrD3kAkGvPSJ1Lry7agFvgMAsL",
  "key40": "64XLEDrghjVJP5b288uiP65be7vfWhwnaXt59HmE4XRC7RSFX9tLTiMDBYwu3y8ab9VLHpTGCa1N8NWBPUYP9R33",
  "key41": "3gdsfy4tUFkYEBoYNQZ9QQHm5rbEBb9YCNmCSfUgZLeJ6rPAbPo4GBmEjyAxjswJD6wsbmLBGnqSMx8qD5D42m3K",
  "key42": "4kxtR8RPepgzXFcsF48kjPV9gCnUqjjCUPzap8BqtP2u2RbLGbADVmFVDynUPbyEWXGUbSbDszDSF7T3kWQcyRN9",
  "key43": "3v5mjvDSKizNg8ZgzyxUNuKrvQHLP1dxzh1e3L3aaj1Zt68oAjHi1daNUCL8vG2UUwLiYbhGxjCMWUqZPJdcdRwV",
  "key44": "58ELCtYSUEDPmjMCYdKvKpmVTegrV5S2xtdiWycJXJcGM5RCqVVZfjSQCeaF93hkYTGbCn4sdxN5bzVogw9hTh6X"
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
