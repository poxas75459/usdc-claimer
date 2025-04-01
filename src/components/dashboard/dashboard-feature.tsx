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
    "WPmyQnRWyiDwpaLzFYgCQ7T7ZVUsAaSXrjyWATyPvDj7K9mSRH8vTWfMvhdU7WCq2woDAKzShRoyCNbvWhLNrze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yqNQz8hQASfRo3aGyRSsUJxh8adwkzKP9C7hQENqJ4tfGvhHXVZZ5b67AUy8WdAxJrDB1gXYXi6y8EdjkAWVbYN",
  "key1": "NypXtgGhdCaQK2F9BnQbRQB6GVDRMNRb8Ys6GNzCNTCbBTb3Gw4dQddA1A69PzApa2dFnzFqcSj4w1p11QQRdwt",
  "key2": "3VnvxLDmH9g2zggVtdvampjDR7z4Xk1TMsBh6vKJMRhWwztNRp2DDMUGC9hiBexdRPDqZYiDNGtqcYgXEVidhH9x",
  "key3": "5JgT2cZk1yuFVu7a1LL6zMq6cETNRnbnEgw5hddJ3ztX112y1Qy2n9T5e5xsXyHA6GYnpwfJErpnW7es1xHB5KgC",
  "key4": "5jzRPN2P9aauSx9PQPa7rReeckmngV9phPKzC6tpUcgPKRY7K7CZz7kgQTVagHkCzUdE7qt2Dn8EccjGtgzcQ9HB",
  "key5": "5BAwddvujvYTZFvgbyHB37XdyGRQF2r4QVi3aEtZneAnoR6kpDfvryYjdy4q54ha89B17y9dypZoNgREkXpXS8C6",
  "key6": "2NuDo9mGhhdTk11QeT9me5wbHaLhPP1w5k83tEmvXZKJKfe3zNVQTo57zNx26zHk7oUdUxfMmAQuBGt6NWorDYet",
  "key7": "67B6fZa883wgAxG4eNuzrwfYs3AbaK6TWgu1krXtW981SNuK16T7eg8k1VL8THwAtydGwopBXxrqsQwUk8W8DskC",
  "key8": "23KBKBVD9QJMj9XH3eRQKQrJtHrNKcH2a3bEwVJF4Qithh9oD2XZm9hTu1exDbJNQCRFyusRw98e2g3sc1PNCpQv",
  "key9": "6255hKg2s7u8F9Y5R5y9N8hzcEejBo5G3mNbnHYwbyqj5m5Rm743nKCjaV1Bgx1toy8pKbheeDZMQNFJZnzNChfm",
  "key10": "67QoEod6mzmyxMtPD3QB2hdgXkNLDhCVEJg5Cwn37NYidcDS9UvD8fUQyyJy1R1XDk8RpDNB856F9NoAMK8atR3c",
  "key11": "2xppRAXPcWJ41BDpLiEjisTQMZSZLzTvpGYfmDK976hUHuw4wNc7fRgEbvTzqvxdJZ8rj3VUK8cx57SoqFtC2tqd",
  "key12": "5qSUad2sMJWq1rnYch5CmpVbGa8WgzewpBAQCodkc6AWAK29p6gPfn9kWZqYbo9Fjc5o1B2UvhaL4NBXj8ojtLfp",
  "key13": "5hq84hSXh5f4bqAqz4GBcpG615NejRMRwJxBGT5zQpj8R36xN9TvyfBQs6VZfVNa3zYCog9pRWDi4r8yysFKi8UX",
  "key14": "53b2qnLhYqYLkkZoyfZW6EyxzPx8r9P1dkEc9G5pGFteVgsf5G3tPwLpMRAD4QAZ1e5X7pcERXG7m6CjWuxK3ACo",
  "key15": "52B4fTvzMcEim92CTUCxFPRMcSaYzccEnUTRQwCF8dGWamh9RZcHjMZ1ep59fjFaxfUtzS5rsoh24kFWBcgarfAD",
  "key16": "2fbRBmGXwsDC2CfVT42PK8fpEDPMH5UKvVR9GcXvHkdkRk9kWYN9HnreCNwzNmyz31DpKt4ZQVXLZLXBpxudH6Zt",
  "key17": "6f6GzkjLDkM3vNPHPFSXdjGysmUPtzYnUSXMxHrFUcFvE1Z1C2z22Cf55eL7mG5MBQn4bhjFJ8wh4QNj4Jx8581",
  "key18": "5QQ7iYCmtahS6H4N8X6Log2t5BWsVyDvdECasxWFjmZkA5n6ZGz1MrwQ9Pr1Efk81RnXKq2Pd2taBrjSJ9PsBSuf",
  "key19": "5eAcUe48NLTrpB5afgcfAPetfxeCRJG2auPgqtPfp9MmGhfiGTR5SrHtgCupiVDZ8jr1wVoQT9KrN2pexV7C4DJv",
  "key20": "4NQ8kzJ1GQ7ztSfgGV6y2pWkWGBaN2FB5xJRNB7JXT4YsaqguWquevdw7RdQgPqNE5Pk8ip1k5BYSUCsUifqTgva",
  "key21": "45jHJ4tGsK4tPFCnozYeAti6gXMmwuTVr7SvArwekbEPuoBUXTjKUvQ24UD3Zd6qL6XGcNMPz4J2pDvy1gJz1SRC",
  "key22": "5sPEQXS8h14Mf8sFPGPppKYhRA86ooTSoeAjVNJNASxL2fJHhCc9e9bwrHEiPkJ4ZKnZbbpiNEFpVCHoNvLLndds",
  "key23": "4UMkk8jhQccgaQVDhzAj8QEJNB8M1bLe69uJGngA3Rh7rcC5Z731k99jDZzY3yAcPazVfZWPeCXjQNVqDGAMiiEG",
  "key24": "4Wo1mFgLaLe79mD2BmXjc23S9vZg93b3jxrvMiPYPbNeHitehi6Lo1eqcnMyp3vSsAN26QuMEyTonHwdJJmZLa7r",
  "key25": "5hLhqoj5aXfn1o5u9T6nocntWCn4KiUGyzKu8YeVVdL4xiFj2kGz7jytxXurRnFxpWwJvvVMux2zYfWcByZCPGvm",
  "key26": "62vs6BVaTjM2fMqjTqV1HvfkVjbZdMHKqFZhWWc9kXwJ5R8WRuQkqw1gaVcy9zo2ZTduBb4ZkusQEjpXWQZ2mNBZ",
  "key27": "2LCfQ7JVVt82L4KSFEcGedy9w5hxjdVnJYZSjbgPusaU6TsPsA1n4rDWnxWDMau9DtAEXpo7FNz1SfzBAhJ6iMJi",
  "key28": "5cj9u7msXHMrd1Qv56yypgsF77oMXDRj93Ph9NziMB2hg1odVrUPaCz6411hkq7GNnSn9w6vYvW3fRDSPNEt6de4",
  "key29": "fuVoBnVYjHeviD8Czc1a2SQYJn8SGTBhYbLzFjDTDL2gFMfSF9j3tDeXcJi2vtDSNH1j9A2gJfm4FxfBQqUUnFK",
  "key30": "4ypREfuaofKyxnVn92DSitvryKpYAjSGg1GQf1tX2DMs5PpuGQkvwXpc2tuL5rghsJ1doqvkPqgAzmyhN3etBjBr",
  "key31": "LKerXBB8HW4EvCeu76Bv5STgyz4MhrmcgRozRs4KVUkdXnBPJys4BjfAZ8bAChUMNUCVYBeRf3EhGGHk38a2EpT",
  "key32": "46yrxHDx4JHiav2HrDqmE8jQoUbaCi9Xb9FkQvJizehev915HF2XrY8S3gNz7NXeazKiLCuYEW1zLcDr8iVfL6EU",
  "key33": "5HTgMns2EFsTtw7KdHVJs1JTQEALLDcjffTTAMVxhMCzVVcAz8Nkw1BCFA5XymtLJv9DBaATEYCM88bNKxhiAZiZ",
  "key34": "3NeHKektAQXnrg33JZ66AAzeHGzkR81k5L4XMxXWbqjmz6crpFgHg7vJB9ZG6FTHz6oCrLPPUZHXjsWxp11fco1v",
  "key35": "3C4QuS1DBAsFnn8vHCurTaEaEahytRsJKWPeHcN4HBqEk86aAbBT6hUQj5Q73rXo2bjC5T93qWYELRmY1rQowEcp",
  "key36": "4EdP912pQNSMM5RGBxCAWLt8cAV6YHifA4QzZDwhnd1Lztz53xdiYDgw71tQz6mVL655t3nngaYRrGmZpzTQKCpq",
  "key37": "3mqjrCYrc3cERmBban8wLnGtTtmbDMPHEwthSobFgoDuXTbgJn2pvvrd8zxT3YvLjKh3QpjtgNBLphjrf7FTYjbG"
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
