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
    "2taro4FqBoq7nbA1CbYe8NCrJPxQRnMNqnLJBGt2dVSnbgGm5y5BiNqdkrEhVAYVjqCGnHSN99Lw7DTYLNy91eos"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "328F5hNMSxkL9CofJMbK8jnhwQYrgqc5zBkGMFsV4sKArytgnc74CWfbKYabRyT33sJzB1rYcrWQeMBKxSaVD2fC",
  "key1": "5md44wsyBrYcJW7xBT8BEj9XGQrDnqEF9WUYAae4W69bC7RsrxPYsa1H6Ek9SMFvmhLt3HzJxUcErnnQ3n1BCjFH",
  "key2": "5Kb84jqh214E8QgDz7i7javYNd38FmiqpF5yC5HX9Ui8QZXeX5CJSk6btkp3NqCdGwYZQQ8KAzzCjyQdiTJqdfWo",
  "key3": "3XmutTUpevVDp67ZpfAnFEpuLkMBTJf7QkKQSEYDB5Tr29dvW27x2QCSRoFcWUdyAHFTA7yfAEe8g8Jhg2CzaVG5",
  "key4": "tJADW7aeibocn15rfdwi1uvgeLH4WinWjyWzaf8nn1HT1j9nwBthRHS1wWfQEey2ghSrmgWfCPrdkBjdituSgXK",
  "key5": "5sfdBU9KcNRGCYY9iXiA85DCg43NA1HRmVTRLy625ipg1p4mMp2x6QagN9LxG1929SUwYKLQNSWoyqwU7etubMrF",
  "key6": "3yb2FgnyXD5qT66GdzJahYX9izwP6GrsyutHzdXgThbLqNZZHmsKjAkUkSwRa3aMAyuriZf6uTfJcr8fT2G2oYma",
  "key7": "2C3QeH4CiTMmNDGkbPTP1RK691WxbnZ288GGxMjKSoeJ1HDsmBUR9DkAUyf893CHDY1Ybfiv1godkBHKNERnJMYg",
  "key8": "3GGhnqwKS1938LJBFvpsy2PXQuoD1nnUdSAUZpAg4CEypVAMuqvoac9PaRoKfYMiuQmAHym9ddRACPQLyi1qSAiJ",
  "key9": "5aLHKam558BjQobth1u6Z3wgbQozNBsd9gnn5cdbktBWVgFLJFNLx1BtAxAWqFzEM6cQCgq2Mo8LYw9uX6fTXAc2",
  "key10": "3s259azqHCnqzhgs9i4wMHJp8ykTpsxrFsnmJmTMLKRYoTYTN1JHHrp5RwRavW8j4e3VXSrGKpHeX6kDv56wJzs7",
  "key11": "s555Dcrwc585uvgiRyivAAhmqw8vtYcrLEva6cbXVyx8BBr9mRwEsWZq3vWEC8sJqSuan1XXULDqA2j9z8FxvQB",
  "key12": "xrfnuqfFnXzxKwt7ioKQSQhV8iYWF5tqrci7mCoztMgb9VPvwkDFWGutHuu2g5d5FeRiDiCdgKV26ajqm8caEFm",
  "key13": "2zLx3XpQgnnbRqTxcYayuqo4sJK9F8miuwBDpWEotFoAVFFH5ZUTzLHbCUR8UbkMX8WLCHRKVAyW6eTMAMw6VKtU",
  "key14": "3NhNU6odgUMHP8jqHdQa6fUkEFJgZcCQ2P1kMnRJJybDnSzg5QtnycrxER7XdcCjsftpSKVJGPe3MrJEZHkjA9b5",
  "key15": "3G9nJ51fb9cRQ4vh2w8pAz4rfCpykrs8Zset3oUbTs1RjaM9rT33RdAC946KMV6UNASiHKZmxkEb6Q4BJoK25Bsr",
  "key16": "3tVxtiBwFayRyRs5KatPRvAD39Ntx7kwLXNUWkmyTEatuRdVyCViCdAC93uyF56xzsa21EmCYmwcGRUVi4PXfXeu",
  "key17": "2yfqAkzYK82xrNZBCsYHfk84fxPgd2uU4yEsdvrCu7kCret3XYmuXzwCwKN3rDuj6xaPZKzJvHDVG27ttthSMGak",
  "key18": "3th4NAWTmjCyzo3sZ9gSkSsiNts6fmvyD4tJWKzvW64fSryWrRVbLbta8fb1fBMU6vxrfzZ5WvxK83kjNxCAbFCa",
  "key19": "MzU6ty7HtjE4ZGmhEDB91M4Wi2dMCTiXQkfQqUcD694aAJ5ymrp17svLRRSxzDBN2RsWHPa5FWYrxn1QYNeJXPd",
  "key20": "5vZ5uvugoGkX1LHpukPMCzYFWUwRw3tkAtS9A2XGf9tVY83qdbv2Z6e4sNmsLTUencLLyP2rJEGSzcEDoaQM5S3q",
  "key21": "5RSnLR3DbnKgN5EcxS7DMVX1q6SAcb2UchQcqjoM3MVBSmLxEpPDRyY6j8Rs29BWqC2sWEvvi694vMBe4XuNh9RG",
  "key22": "3afo8EfjggLudVDfEA9uiB4jYdBdzxAG57pSja8BgPNmEtin25ydRAFP5xM3GSu7qXvjEjHFsTjGM56MYj8ykUqZ",
  "key23": "KSD5jHgCNEAW4EKoRCKZDYvDYzBPERWUkfFNJiGKcE7FJ9TWP2S16orqpNNxEG5JhgBhZDKpRTCZBQkiMCEc6gL",
  "key24": "2DQugwBcueBc47cop2KL1a47NF7TrY16H3hcagMCQTkkWaxQMPTYFikaptK2Lg1K1kHi4JrymX1SzX7DR6AJsKEh",
  "key25": "2xuoPWSEwBqqocvtyenBZC7QGP2cYvKK5UghN9L6m8SsgYyC29YvrwsYxrp1nC7kTQsgse4ZLogrePAoMRPv6iGU",
  "key26": "2euyhQ2LDkUBwNuHLbPRY5oigvsj9NEs9uVepKLT3nGPgZ4nyzktrKLi4DmKhYRZPbUVK1nmG4k39xAS7Bv7RPgi",
  "key27": "4TRyK2sxfgbNty81uigSEp4DGHYkPnQUJ1vjwestsbBMdLvR6Tor8wmkBBuri27bpWhaxeMvt1rQmBuXeAEWF9wf",
  "key28": "TVa3PETNsr6ctLzXA8j4MKmKNbnM6McpKP57oSaW9k5fa8CiruUB7oTWTDoMcqDaijgKz9jhkUEfX7qa596kSJe",
  "key29": "27UDzcDLtEy4k4Psyy5FUQYhqBuN8Gx9wAh7wM4NPkHcR9eWZjgnb85Hpe4aWuuAKLZdGfY5cr9Q1jxrZvMvU8B2",
  "key30": "67QEanJy7JuzE4Bi8E6LtkRVjqNzui5uC3ehHeAf1YA2ecqqZHDxMRDVWRaHC8hVsJWZVJrMnD6WZzeFQjbQMW23",
  "key31": "CEWpNSx7za6LPc91MB49oTwQ4dWfpXBQJ4XfaC2d9u27uWAwfnD3eqarN1eBtcDronaWRGfUdApr2EhkuYKj9v9",
  "key32": "ErHqkM4XjQ3oAr79FuDKrYtrYtCYa8m5KyiR8X8aDZ6wq9Ac6L2yGHnzmPJB8RQyoSBSfEW9wcd18MwDkb8YABm",
  "key33": "2kDhXiieGuQtBxHx3qHqTiS5cuqAMSWe8assT3orupMuqNHm6JRxV7mVeESMXVWietybabdroWHJ6LAoGNcrsTMs",
  "key34": "bEpwBr63jgJFUL3y85JtEXddi1wpZcN3ZCW746MDGK2aodjib57kf7Ss6cTBsiyT3DiHh7FrpX381PQcgRzcDWC",
  "key35": "5RxEnMGFzKMEVUzqpJGoepQnLXMUnzTZc1iWBx7BEy4WXRpV3BFH3LHjjhPv5oQEVL4VQHkkDYK1idDn1T647cnf",
  "key36": "29gk3A87JAHvXnFEiK1eeSNh8vDs5mF61TJRz7RfwDk77VLL7VqPSPd4msSiPbuz7L7ppHq4JzHdGanid2VpSTmm"
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
