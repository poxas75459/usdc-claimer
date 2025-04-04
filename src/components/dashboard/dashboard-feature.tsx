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
    "64eZKZ5x6A8KSUHbaFGHJhyr9EHRjgGUMMTWvssGYgLGXpw4MwmW6baZJkLhTQy3S1K1ksgUDo6cEiiMxyz1TesG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EMKNgTeAi2zSiZ5meL6r9p3Y9ri9PrygRq8PZCpemc8iRNkWq2MrXj1HAjQpZcFXtZrwzU6FSJkMX5hqf31ubUA",
  "key1": "4G1snsH3n58ZSxh7tqBjQgGqUKu2SyLLnzcgL9w6xw4aqjgaGmnVCB4Ps2JrCa37RExWsNmVhx8rtHeHHMQucCZq",
  "key2": "3PtbTFNmBQqc8cYRtEJJiBVZff8DsVCw4QJ4LC8k87nAMzVXLaC58P2MS9qX1NPi9swTzZFPgaKrtBAuATWuH8dN",
  "key3": "2uxshKDbtrKs7xGLhs9rsaLbyiWTdkFcyQLk3JL6EXska1iykNd9NnsLGSwroZPv3AHzhuUgA9CMh26m54KUZThd",
  "key4": "5SQJfRV7LBMYsYDmGmM14QBWjUnLKgYjFVZct8itoxtPwYtrv2TZj5eE7YVxiApJiNqmhuoXPign8Hgkk8AV5AQ9",
  "key5": "3PtWQZaT71kC9NETDuakDGJwgHND93CcvtRXTb5VhaZDQG9jEXkqzEda4LLTn39jkjqcijLuBJ4urDiMcVMWPVfm",
  "key6": "1CW9NZEeYYugQUjCGXyEKPCBFVLKsQnHmsGG8LZeCAd28XkRLd8Rrbt3XJhW92dGwWnVSTtrh3TwV9AyWWTTncP",
  "key7": "4T2Qjj5dQevH9fMfht6SzQo5ktKT8HVbpeWwNwii1BsGgbB3x6Ep11TZqMfvykSG129vDDkYau6J5LHeHaVsRwxK",
  "key8": "58PNG9NbTfc2FqvtEi78hyYBcBzKvqTaLx5vUn6YsP8tQk36vD9oRhEq3RWm2rgrMmzCaaQQh4kbjY99W5qHCe9N",
  "key9": "5PLkEsYsxPF51xGS58btkQhoRw2tJrDgnsFTvyNzeSUJ2YBAmDtixs4YYX8XTby7V9F1CFV6pP3Kb8N7mNqXfL1f",
  "key10": "5ozQnsYU2McHPLyw1qkDnWDLvSDEQVSSVRdEXwjWdY2zH4gokVojWKVJNQeqjp3YKQPa2Ue2jvDV9qiRsQozgxsf",
  "key11": "4L7pgYkrBVW8rf98Sp52hcSkamkAWoTT17a8rahP2ggfe35P5SuFstkNKnd6RLYgk2vv41s3aDtYvKksWLMKQxTF",
  "key12": "23BqkcMBvr8UveQti37hms5fSrmFqtKnr8giYRiKfQJZszgHEKgux15EZZt6onANdfgS6UAUEzYcv1gd3M3c4g8s",
  "key13": "bhczPN9EJomT4jKPc4mn5pRNuE3b1WA6YGUojsGJ6bfYeXpW4ExdkcipyatpMw3CLYtjoMESZNvBZVCZmswrLVQ",
  "key14": "38rSjPakMcC5wi4t3tTyQotKtzJ2zBBdKgVxwACoQQ1daoquEHkzbUBSWX7ifJ75GDd8qTVcKatHCNfH6RHjH5tU",
  "key15": "4E5zewrvkfaaH6U33ePbYvNdekHqv5euEKVAyfAdWKnxtssibWyZZcUPfsQbrjcFUXee13cENYcPzqTkoHqoNfJp",
  "key16": "3e5nQUGk4XJ3e4kbziUzFjepJ3cZtFtwpBxDbkKJmHnQSf3hBbSUmBQDz3oaV6gsmnAh4xpZrV9PkP6f3kmJN5Bb",
  "key17": "31Jt3saRz6A7VKam2QU6fVtRQ7BEsy4dxNHdWi1Mt5AhYRFjd8o4WhPGY4dS6PXwae21bZwbmq7ADPvDFhnVv13Z",
  "key18": "4VVyvbxJGwsf6mV9NrBqj9gZqQQK6eBvTjkL5MJt7BZvscuzyV4RScDL3XHzbfHEmN7HXn2nn6BnDxwRhtrNctQS",
  "key19": "5DddZq2vk6Gcz7xtLdt66P5emQN4BbGEtv77UUDDBjpKnqUgPkDsh6Ph5DcNe8xxeghFFmR3KGGYwsGxZEkT4HZf",
  "key20": "4B2xGqSySJc22uTC3n6jyMDsKhHYKmpcBBAZpXuM7iR3gRae2qufb1xgNEUuYeubjzuyZXh7Xdnh8S1pxxjhb2J5",
  "key21": "4hm2V4Qr6QvwcDxDGmpj7gbDzPR3SXsqe1LtF1xySE31679WLmPHFnKa5RKW98xaYH3o4FNKJiqCht98UR9jbmpc",
  "key22": "2Rcyn5dgisVRtE9t2NhW5mZLSmbPkqLjUHx1BzYPjSoiAtFFtLExJootYuEPcjmcDMA5BzRTwo96NUcUE8gsYHNu",
  "key23": "2fWVERP2pADmvGyRcAUZB9ZGjGbPBc1YSi7d6zSM8XSYW2CVCuCtR77A8XivdMZAtcZM3o5giKTf6FhCfs5FxTmb",
  "key24": "5kBb4YX2g1zjgk4kFqLD8RuMxKAnoRBRrN3xUsQQHyhSJBA1NTXvwZ4651eZY3MepSbPzEQxFyc7oGdqPuiq1UkV",
  "key25": "5qqp61iTgTQwrxYQyiZnxAME2uwTJtwi4KzTsY9ffUhZUE7JxTNyHR1fvtKdwsWbyuxVc5GgjGg15AQPJyzUq6ki",
  "key26": "4wuQYDc7U4CCdFvqMhxKM87Gh7kiybSBciHUu2tXT5iAe8qkbqvCAjNC895ZXEYJCVABQcNrSWnEuK8hK3MrQfZd",
  "key27": "L1bJFpNFREYBmdXF6vwHShkx4dEF7s8TThU6ATm7UDBQ7omEM9RZ7tbHGHsXCPaHwvtTZCyF7KxLEvve1mcMsHE",
  "key28": "5TNGCdUAsmJi59VjvMk7wMRkBhrJxfK41ntgNNiMrUJpNgccNVUp3dYKYRuHXdNmWxakgTNfjevehhbuY3mve847",
  "key29": "4BKiDquMVNvybboRx7N293Vrhs532mb57uAC1nu9aQSm7jL6CLsYMii9pDjSWVX7bPANUzowrLoZmknQFfRhLNzq",
  "key30": "cGhx4XFponAttaHYcATFNEqVQHJebSoqniWjAgewxrZtm2rax2kWWWUAZ1HQGHyk5HiXq9GPKGTFxyact8aYGtQ",
  "key31": "YCeDhomeHDiY3kkTp5D8GDBzbuVaQHiPzE3kJoRFnS2VYrt73gGAT1VhRZvPNfyiCxARundStB2AZ8jUGbUgKsU",
  "key32": "X1vQuqpwU9YKJ3hyWXJAakLzjtEPGTkFGNfc98NPbhwCnpMkLYMXhJoXnuEAEjyQj9eDehLYh496gLd12oprBM8",
  "key33": "63stgV3zA12Ruics4DV7ix1GsA4SaZ1Z4JQDWBV1nWHiSf8QWeyU5T19XdZqSgc8pRtNhkRZseYmgPdFZ2DZoc94",
  "key34": "3mcUnbaLsByG3PZoZtiWyocSM9tabv1nLZWmChSXp6JmTmoXZ7ELdCBWdsHPkvpmnjfAW6TP32uWLNsdoVU11tmE",
  "key35": "53UJrbzufakjH64T7hcY2soZNg7XmewqEBHro8jtbiPFxY9okXy29rkQxC8rZxyFSqGozezfkbHcXYj5mnXRxCWL"
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
