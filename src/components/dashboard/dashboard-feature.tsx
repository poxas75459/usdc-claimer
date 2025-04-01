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
    "2ZFTEgbSWYWgZAxaFJuW2Pu37CWNkVFexV39JZEpvHnSudPSEVhCRiktD6CEL2iHB7ZWwDepzMezAXnRNg3jd7r5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HLSABvAi5jUonAkKjoXQwY16rbChfGVv1PtYPpTD7qqf1VUp8ouahhs6CYLMNrX81RpqVR6ViEndAsrFRPNhc2Q",
  "key1": "42JBtQEBEEmeBYQSbijNaydzn42Ct2yxAyfMBYzvpmBvKgvYGyVbAFnm4xq18gcRtWf5sm7o5SVK96qraKFsvQV5",
  "key2": "48qMExFCdFjKwuc5yeRYkjH6VDyVm7cvV6gPXL8SX7eFmJBbvZFT8JVmgRTx58d5yqZDPy3ej5A4yE9G4yH3fpU3",
  "key3": "pGs7oJAfvYWkiRPL3TTZB299jnP6VnX45yQoZRPcjpAQ9iqyxoJ7kMCpNWzco2zHy5rCZXM3CnZAsU88E5qLRuN",
  "key4": "5C2kcW2GUgRKry3TW23mNwARX4DSqPEXWdJgY8jvc9a5VTL3v5rm9mEnLedEC2mzgXfSeeHs2xD8zyJmUGD4QNMc",
  "key5": "4Cqo1q4YKEkT1LHDCf5TJeo8zn36qhTYD5tFKDRfjHtB1W9Wb8tQKYrniiGrhThADKMAiM7Fd8ri4NM3JypeYxnM",
  "key6": "4kCxoE69kFz2D1LxuvBd2y5ao4tdoZmKNgBqhMBxq1yQJSxhMkQs84dyJ9cbv8nBLLZK8TQPxzoH1dRRPnS9zaA7",
  "key7": "4qyZAhLxwPEb2Jh8BP8i8GbXLWEBnzQT96BpuDxsWhY9X8rBHNo698uHCMj75GLqiCoX2eWnx9SuxPBawXBop5Wm",
  "key8": "5yk5GiKngjU254i6CFEoovbtUkWvw7nNic8dRcSmVLnAv5f6BfV2W1uagZLbueiKjG6ptrgbGkYebn7XjrKK7GNN",
  "key9": "3FrrepqBPYY5gej9snxh7BpLqUFsZbKmkdW1G5c3pu1pF9mGxyuhdYSaKAEBnxygxzk6uKFRwXZSdxJrVGkb12Hq",
  "key10": "5j1hYcnLo3rPC5woVYhwZ7EwzcSu7tMQUwXZGk49AcVpWE6b22TfMQjDpeMDLWY4hm1JAe1UcfWw8zp5bQ7is22s",
  "key11": "5hW1cRp3XW5s3m6e6MgwgVZqqQn6foan91z8gZvMMWHthqgfy5kzHYbYp5UPRbMm53m4Q52zNg8K6dNBX3HR3nk9",
  "key12": "KLsgzc5sKS73iv76K8P9f7uoYG16iUC1eTo96ewWFjDvG6kqRTfRdiBVWxjoVPVnYyRsovwgmzjphTGZTo77sBt",
  "key13": "4G8YnzHnRR9uSCkSaVUpbknUtcedpqo6F4Cc75X1q2cHjaRPAfDyHUQwEb6ST7B3dhiE2WA7d4FyhA4WvNxVzLDJ",
  "key14": "3eic6og6hu1L1gPkqeqWoErgbbLJpyBjhqGphfvfUTRCfkgSqJMTv2hFJnXCWkf1qCkmjrV2FeQiV6gEbLwyZJ5e",
  "key15": "4gLMo3Saopkhyw46p9of8ypGBbF94ibmv64xcwHGCAQHJfcRb98wBp9jzV8pv7pJn3474EwvjGFpUPDeJkEQcmno",
  "key16": "4AYBtCCRXHgoWuXGXP4Z4yUzYcXeJ7Eb8MHpAmTbjpFzg2jLLUTu77ZwiPvkXPjhPiDgaM8Y3cGaVZuDUNbJjB2A",
  "key17": "5mXb6AVesKRMx6RQq329xeAkkkfGuhdKjF7bmVVkFCmW9Jea5gzMiRygGHjTX25hdCqkudgVjA4nhvP4SvChi7fN",
  "key18": "2CBnFEQrcvdyM1iWKVioyxxkdXDibywSu7E7QHaGX6FVmNUBaBF8y7sY1HHpjvnKbCF6zJ8NkTJyts7tULbqVRGX",
  "key19": "2tyHzMoxpw6ETDBcCMYKb5YTFhWA8qE9dFTuHaE6y8vjQXu6oCsSP1HsbZ6pYTCMz4MT3xUQqrzvq7EcYstJQCD",
  "key20": "43J74UYM2RH8u1vzqWsF5C4XRVV5FBC4T7f2Ta7mQ1YE76cEkW1AAyBPhvZgwuSaCyVu7VvSYY2nQSma1fucZLjv",
  "key21": "4dPfKduVsUkkKguzpXYyPnJJnZHuufL9o561qGiukfhfJiwRchVJs1X7WuwLaRbdkXrtW8ZCV1YpRLyY3uNb81zX",
  "key22": "fbGdwbNp5s659UaVudWZmQRxRkLBkDSEateQxR5s29jspYYZbutA97von1sKh7ZGAsFdpzaQMbdeMBCy6e6phb9",
  "key23": "32R28vPB9tYVvRZVndeg97aSczGiwSxvohQ7YGfzsfKw5xN4eW71AF9o914gKJsTHskH8KDsdJa8j9eegmRxvsPc",
  "key24": "5n4GBXv9oLsUFeq1fCEnf3HhWYxSxZkBdWiK8WShxsZtYN7afUxi2tMcpFf4s6u1pWaaBRwNy7ymzcsMSfRbocTD",
  "key25": "4PYv5PXuvhm6PeVMuzNVvumWZV8j89uQVDR3grNFqQkPF9AQPksZoVvSC3qHFDkNfYPLMkvmhmqTJfHaYfrxrmBF",
  "key26": "5bBLRkXGsvoKRAQ63CnRoPS1YUtkK6aWeCwUzZz5wUueuYqmwPtwS9i8h2fD6zkiTqoELcAUHvo3cUqbGuQQ6RLw",
  "key27": "3BV1TfFiBrUnxdcHLYTFcgyzkZPaEtqX7mfDR3n3NYe3qShFC4q8Cot7sEJYQAVfft6WKr9v542VhGVc1xi5v36w",
  "key28": "5epou6xiybLUXMSwL7yHsqyGad66ELyLrXXDVxR6yG5MEvc1xs3rosL5FZWGGxWDtTtmWNg5tFfSPsH6jBGn6S3e",
  "key29": "nR5sfeUnFTMVaYiNneA9s1kTq5j2Rad6KSA1QgWaYHGcCPksFsyki5reAaJ33EEHjHNPcsQ79Cu3D7pNpgDaLDJ",
  "key30": "FuVP6KxnbU9YZGBLYRGV6Qd4WtjHtcGWdJELRY1T4WoyF5b81gQToKuKeGSHhoybx4jveWXZivymiY6n3Z8Uhur",
  "key31": "4Pbrn7ne4AGi5Szpz7QCmVgN7RXk7d1s75js1Y8wkk7nBQotczXS5LRBASCPeH3zKJRVVhVeSECdBj1WT6UyWuZq",
  "key32": "5MfVArKBrN3fumttUmRkSH2cSCoUteLrTzC2LBGVEf6vg7VB7McebjD6bY95XkQXeAhXXndHELegEYDVWEkdTB8M",
  "key33": "3yHqU21fjHXYrxcKGjYToK1nztiD5W9W7J7EtLJtmC4qMx7SEzxDPWzGj9nnAiJBj2XpDAHWBG9t2xDdw5enFVKR",
  "key34": "3i2s8Uyd7VacZDwQSQc6owhsLHGuYJfXq2P9KQAmsbTZ4wqEg7Z4fMckEJHj4XjUi8Vt1s9rL7JWydm3oECCg8L5",
  "key35": "4WCQHq6sy9i9ndpALrbPgT7aEL1uUkEimy8dnYPELiuKs6TkC5ovbW2LVFV3e8VQh22WyeBLoNx7WXRg7R3NdcSk",
  "key36": "3rLe8Zn8ZxE5dwT43yexkypceZQk3DvpBHLVkPqhtNYTxYPty8FSjtrJujGDppq1bexqPQmq23dR3JySSoFTZpeC",
  "key37": "62YJTnbYb6UVFeUYWsPbVAb7w5Du3cpfBCyaWJnshWFBUYX9Lf4ZBPVSFFvgkn6YcLQYgi19tkY4ZvCYizEBc9ap",
  "key38": "67FNTa1indmNcpHbcjgRC4xsUpBX7DaavtVpHzey4izaMKAsHscRxWFJFKVE3SigKkpnEiWLDBsTtW5m9RscSBRs",
  "key39": "3kWQUgjoXY54BWZJxaTWy5ZPwCJXDkFRhgHES1SC1aTMRstECKukCTcHBaj4Q4XZP5fnFYajepY1ActF1CySTkfh",
  "key40": "xTeyySD9VFSFUFUyNHAd6Hi9LR9MXR5kPdSSeVYS9qQKpFY5ebBGfKniPqLRqPknT29TTxmzLC7kCDKEFCwzuXS",
  "key41": "5Mv7g3LCuqSsdEc1wEGt8ec69L9zwQhBjrb9nPykuQ1qdGC5dpJLGj6k4SpEnaUrgHDyu9vLawniDuAikTQGhpGj",
  "key42": "4UWssZ6vMCpFQDVPeTjy1uMvP3tawVRXR65sM2D6xMGzQbRtnw4PxRQej9LwUAs4Cr9jqsQgdK3wZmArQFjYk52q",
  "key43": "1USpvjyRBgPmazvvkTAkkhYWmRL4Lt5aLFeRDcf3QAkZr4abi1EBmDrnhJrdPve4jNmNtGkZ2uomfLtuU7Gm4RZ"
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
