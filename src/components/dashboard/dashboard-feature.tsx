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
    "3g99UyoGncfvQa8BoxmtsNnWeTqzs6SomDUpgQQ3veS8mkAguyBja1Mcsq8WZUgfDg8ie1xBpEmyxwXHPKDdncyd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fQ3uwiedS8edzDRpCpoU2vRwEwXjVg67L1mZCzQHVT43WcnTZ2UMe7oeqskZhhGHLbPhxCWPsyFa4Yr2D9DT8y9",
  "key1": "3ZqUz3jZrXMmxwZLnTLSV8yfhkuurKBFv5G9BPjCYi2tyXSvRHjEHSMPPYnfjXX5qudKwo8o9Umt2kcQaDHaAcML",
  "key2": "qowBBDhzC3MRcicynedUF74ZfBBfKGB9bKTT9SjZYTLSUXM4iV3Ze1U1xBhVwSCmBuzGkKyR1KvAJhsCdgEUWYB",
  "key3": "4GZSJYenwZXhUDhuf3PZLwHmovbkvNBzKywoKAL2MmCCHkE8gZMJq5wiRsJirSJoMTdgcdTNtQHWQuPn6DUSCqhq",
  "key4": "5UEYTntAnde5PeUM2tt8SeXV8AUz9yXPmbxugmNsvqpjT1G3t4BCj7EwtsivZbv1LwNGMNperijSkB5wf4nQQ6PC",
  "key5": "24ot7Z32Etp69Djsyiirs4xWEBkA43zxSRfFaxMMzxPaJCVYAP19KeYGg5evvUJehM6BRaUJiZfVBJEEW5xJFwGJ",
  "key6": "7xYzjqThTNMQj8kBb47BYfYmYyicWpg11mifrcQw7VbwNq57Ardf42kdAABtivGiGivNdgcgAf733giwKSiGD6p",
  "key7": "6BP7j76X8ZKsvb3tM3S2wVoe8QydK2fi7gKxA3NsV5XfPWhirqCd4iAd4cAEihx8Jwpt5pvV3Zv4AVSesyJSbVk",
  "key8": "5QPDxwwM29Z87TUo7DRZzhzFfqZki49pKAFVY2H2fGy3DCHZfK43pBWrUvmKK6vXterrA9UDjDnDTxEia9UHitfw",
  "key9": "3YGdkdDXcZ4eo9xzt7X75dTXHVfjAMxHkRuryAVBkryg1in1kekzGFhfvGv6BX5oCWqc93Kwa8brVCqQ4XHi1cWy",
  "key10": "2ARHn1yZYShZ6SMWfNEXs6wWtDrkmQgeoWZCEtEVURU92yjre25XLVbwsGt7yUDBV8mtNt2bDcrVQ1UMwAGC3QjY",
  "key11": "2P7AsrXDNTc4AwxTia8Jt9udj2eCXAH231MJi9pNa6j2pFLKVHic1S1W3BHTYAfT6QwfMfUpUgM3uMewr88Lg6rj",
  "key12": "5gwzHmZ8w4N2fSvVPXynCS3kxUGQ1ydF9gqJzWrn2fYkeUxher1ZARA3s1L6TF6AfyFNXhUubajUbMSFAATGugpD",
  "key13": "42EooYMtD3Nngbv9mrLFrMaw8ov34Urek5YRxrdHtG2dWkCsRExS6xJGjn4iticWBUMAPoZrnPLTn3p3SqgvMwkB",
  "key14": "3V5NGNkGUbrrvzj9DsjMVYtQBbJ1nxU5HuvkFk6V3VFf5UngJnYb89TFiPNFV2yH1faj3p9gQkgRD4xRVEd23Dta",
  "key15": "4gzumPaPPgz5sEJF1opmkjpYmvs8mdV6J5dZ6SW6hwLaAAHc5RFZaxRNngKhT7LwRFHycLWHiVNHFeuPQ5LE7AEk",
  "key16": "5hTSiRhZm4ozTb1gahBfrhdw1yDyf69JqRPG7hDStL6aMiYCtxHyfPHU4kTm8aGof21LRPMoTeb9sZWa5SxGH5qK",
  "key17": "qBeWVPBCUTyEHo6S3z8EvVM7g4TYAwaN1na74FYBA2GK3NUjEDc2HGSdpmiYQMFPi1fNzceCkpCfRT6hcik9RVi",
  "key18": "5sryeaxjif5ZKfWwLu4HKHovDJmjZR5dY6PRsKN7Leapn9X8dx5CRp9F7N76qRC41Pdi5fLQUAkXBpaJZcEMX1DX",
  "key19": "XxpfLfNmJHFa7WNVyhAsADS3dt87QfZXsm8s3iFeXzE34rRXg6KnwPzy7E5kghhYHeE4qmveV5C5QTLCvDpJRCa",
  "key20": "CEjjQQRkAWqzKVGNiCzhnkf6H4aACNuUSPSpUm3Wq61foR7hnxpfGk7oDohtfHHvD7u9gdGqLNNbxNJonf2vU1d",
  "key21": "54uSnAaxLpK1hWQ8dDUD1sc5ykm9sqKe1kvahip34FX6Ew1fugdxCSDyJcqto9oXg1HDQktru86VT19XsDtbbbh",
  "key22": "4db9sPr2TxpwDmWVrmp9ZSw31n5AAdy12dgzPUxQqkRD9drNsuUJNaFviuRUMmUFAwqzqHkVEjfLm1Q1BAhdZjj6",
  "key23": "BHt1D1DEMWCc46LdzcEp3sEJfSAimEJMt3CDNUzpb4UWnpw5sdVHrGWNdnhd6NgTBf1QDwMvwhAuqGbhQjQZFGo",
  "key24": "4FLi1PSQCLvFYF1XQnqxwaYL1RaxSigVieKXkwMJs652ZAiMaf4kgPUGGjbvDpEU8tXMR5Vo4rh5SsCBejheJiiK",
  "key25": "4zwvASrMgAB2bgFcMtKg57Q2JVBoeFCmMDniEwzSnygDPeiWQ7CZv6xT2vFFAVpBkU1vzfMB6MF9R512DjsSKkhq",
  "key26": "p2nTjtD4h2BQt4oCsE4iHtpgi5L2iNa7Qeib2YrcnT6ELRnJxtyBj3DWQPYvLojPhG6Jmy9s86iRmf9VqnEetk2",
  "key27": "4AhMXk5j89CYBZw8gkULCUPpyGmFpYuu4Z5zPvCJvDVMPGUbX7ZDqeMYEb6ko4eDoF9PrqYL1FYEVVWZxCAASMqq",
  "key28": "2TooVMgRhkzXVwaVN8Wa36qnafNBLCp9aJsRMsXt7tZeqBx8zJyDcErBJBQux6W3nm7MuWPRm3xLWQjaSAwA8Ev2",
  "key29": "2EKpmjrMmARfZY5FP7v9uvyznE2FhwvU4C1BqHtbt5CusMVEmvQFeNE9KdsRFSmr6YNV2EyLUNtRFiNis5v3rC4m",
  "key30": "4q8G6LP4rgUpGT8RtCwt4nGiMEJgvbmL61DAL3QTNjQCtkxmfYRt9iuSBjMNJYPx5b7rBtmQ4MDM9bz2pMCFp8b4",
  "key31": "3wjvmvDa1Gi8ujUYgKezTdxQ2Lq7v1UaxdabibPPmUDqp6gkU88xfuzxak5xHN9fwjGJgavjyf6t5bXx6yfVEES5",
  "key32": "3g92yDcfxCWZMw7w2CnFqdPnX5evj1cqvRr59ecEZ8pJB7AdmydAvvWxBYV4gV7jXCZ6ZsQFTwukqgEMdXH6mpUg"
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
