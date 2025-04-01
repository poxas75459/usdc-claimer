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
    "3YbeyH4zUEvEdLhVxGapfrwB4RMPk2BmfJsHgoe2FYtFZzXGT2q5inV8vdxLBoD3ZsJjAB7xgCy1R7pnUM6ypoTa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UFEn8hjifva8HXCZpu17eYhLHurafvXWouLCmbQRQP92PMjzsD2RdDQiG6bbKHG1cnsFxxUiowYxo9USJqjj7r4",
  "key1": "4Bo7hwxPxhxzHiZo5iZEajajeBAEQFLkLMAsRoMBBdxuYuXuqUthHByfYAVd7aF86kaHbuXEKytU8ZxCY9K58bMP",
  "key2": "3AXRVJY8HtctSRXV6BPjqzev1G1aqRHENMBAtF6sZLXC145VrtxZWaNb3VWtW8Z7YJAdNHwHLCcrcBWkA37JXmGD",
  "key3": "4QfwGkMFkdSLKNrNcSQqeYGMQo6NT4AKPdELoxXxQqBYAKofAVWE6qWd9L8MZRYEP6smdc7LjDcWFbPpqQZwoqGQ",
  "key4": "3Snukt8KPbNKmBHA7ab8QdmrxnK2UM2QZwpmFTmSdr3rd44jpuTzG3m3FV3SrcjLVv4rvznMxyXnAwsSpEcuSjZe",
  "key5": "3n1AY5UHfZUjrm5qjdf8AWnz2h2GJzp8gcvWQqphLngRkJzqc94tgCJs5rMwcHAzg7oFHSBqkrvgPmtsbyFKBfGF",
  "key6": "4zF7shKncFVeczw6bcQjGkNigE7G5LsPskYKk7HhSDoUUm76T2YU5xLHhq6n3KFGZcqSDtB6ZERpJhhjAzcj2nKR",
  "key7": "5QhWM5AZEFrrhffUdzesTqimNhwYiXPaQ96N3Z2E7DXCgMF9rXRnoS9HcLWW7YtTTnhMe3VJqchcwNxP1c7CHkna",
  "key8": "3y9y7Jmj7QkHWht9isMi4Utzi1y8TGU25WcWvyerVm9vyLVKatdvsRA1hSDrNTPrNBL5KdhFWSGLsiZE8BbPrZyc",
  "key9": "5UP2J9Tshy3BQKRZnkQJ8ccmbS2jgL3bixRU6YhS92YHF2iKVo3gfSvfkfubRf5gxWFFe5VVfwNfKyeRQK7yEGN9",
  "key10": "2YTzdVk6T35TgVuvNrWZbCvHFCZf3MCnCoGmVdm28AZ6YrJiJswhzwZt2W8kdk8VQvz4qAzYVQyLfJopjfepmJQ5",
  "key11": "hLRGuqyRcuVfXCEGacx1y1iaR21kKzmkKf5wpcru97HX7dMK8MREugWtdTuou9UHvXobJtLUs9nfqaLEHtbWMEo",
  "key12": "Gb73iMub5uNW7247s4nLsbq4s1HqfgSeMdqqVmjPQq932r2MKfLch2Fc9J69t51oriVJLWuUaqiWSJtCapiDYvr",
  "key13": "23TJowfGLLPi79NC8FGefva1nYvRAWJ9TsYso6RXgZ3KAdq1egqG87oP3BGHz1bUXdhrBAZtWGebcMS4FY4FgvkE",
  "key14": "2z7JYLCfaY16Tx6N6B1SsbX84jSKBecjp3KYjyrC29XZd9TfLT4eG8dstiU7nj1DbFJ4XLFqS2CN8iDZpZpBRnJZ",
  "key15": "4C1RgGS7NiT65BJ7zrjaG92q2Z3fzgMJ5SuZP4p6mZqprFmf6LSod63tmcJvHgynTLPkioH9RKWHw8EMG5XRURjw",
  "key16": "YjbBYZp41Z2GQEf7pkCW434rPiPqb5wAqvH65KdjWrxsFbuXpKGfi9mPhgNPdRXVzpLadBp6wrtBAzNFbrutaTT",
  "key17": "62fSDgxdzpVGYxtmaq4aHJAssRYXrC1GfMXDac4cTGjxaJUurbmtJcyt6DFu79pjQcYXV14qsrXp3F8B2bnZzUjE",
  "key18": "2NWPMYW6qHoy1Syvazp6vbsQJpAgroH4w3mAn7E2khkov194dj6iUcM49bu17KWQdwjdn8KNiGZEMh27p2k4udQR",
  "key19": "3YQchSswcJSBNEA8dTZJnNvMXpWH5Qs5ifivTCDCJbwcKwiUBfqdk1YuvRqKeccHkWan2E8ssnSK7wu2QdPr4AGN",
  "key20": "3wc2L1GvRzSgAVhJyhSqn2jYPkH3YJ1NbgF3ZDBMma7Apg2jf1kxHid3dL1BBPsv4qxLfZmURfe8jCkfv9D5mFWz",
  "key21": "Yk6FSUQcTqc83CRq3mWeihPUBaP4BHyasTKAtFHhEEL8s4GGrfXqCBRPmMtedG75GvnaZigoPEjoZJDynTjgLqR",
  "key22": "2kqSsNnFWzHYnPV38S1gZvj7ujLSQegxjdkNq8q24Ftgdbv3cmSkqiLbafiCu1g6LtkaskHqeorbdQbYA3vrK9qg",
  "key23": "55yLcxmrWunnQTMriWP52NqV4mWJQp1rfFbVK5kkyxJ8ZGmkJWVf5o2bJ7mLZCi1xxz9GLgMtDM9DKMaZpKtxbq8",
  "key24": "44q9Gpwjni7Vg4ZZvjPEm2cbAAw7oUWWEsKHCSoFYaxJCU8imCziwahhG49Pom9nru6cChYPJC264EXMUAvDLbuZ",
  "key25": "3gKYi44QoYytBssj9kMHGauTpCfypaCcFV2cT1ZMCJ4XYeEfAPqvZcpqwYrZyaYHu3kUvwaGzuLwmwGjZXdQJaGJ",
  "key26": "dANg8kTAQAUUr6znuCj6UJGrsfqXZUntY3D2DQjiD7vXrkUPbiEdYkNJk2bg8kDLFFHjaAfPDTJM6HH4FfSzERY",
  "key27": "UL34snnwSzykAXbYSkJTXoRtw5QR6LQE8YShLLnpmNpSys7J2zTSEsSg4YQd1jLbJLNdJcun5ZMRHiYqJHL2sGd",
  "key28": "5iQXgg1ivninuJqPt6vKtptNqN28HeU5vh6f51mUSNT367qUeMnnAVvg42DPkC8a6axcrBxHAMbHKa2ppAbaLXg3",
  "key29": "4LYN6wuqHtXDigE4s3C6gfegtCtEyYrP35QuwwiCPbLfPYtKXdau4F5HcXqP55H3XbVJTtDEsiYkricn1bxWpqn6",
  "key30": "VrXzkeffK4s7NHn95NajYgY4c43W6LaG4PFd2Sr7n7dFr7xyzD7N87MhX1KuDquxvTBTjfBWgc9xVmQc5R5zS9J",
  "key31": "2SUyrcBpEYWSq9oa3ybxiGLFsWnpDKb1ha2P2ADDBaHieywCgRgdL8SA8N8uRuCXso66gncwjU2o23yHfbev2op2",
  "key32": "393XXQLy3aagaGC2LggDGXoSESfLDnuZNDHTSjjHhAYfF1qz3d1Lgb3TpNk5Mp5mNFVTBEVmT6hyrkXM46JQzgh7",
  "key33": "4pSq3CA3JAqBAR6x2p6DcoSkjeVy33XzW5GsxWH2KZdgFBhpPb14WMFb6vyjdymD1A9VMfXbHHT3NszXF6ENAKY7"
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
