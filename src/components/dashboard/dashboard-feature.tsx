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
    "5N46PU7R3mypBYsuMiM2gcfin8M2b3kfUmPX2DH1z9zo9tLCmeczoH9M7MBxUjHGtGjptgiuMza4uyAoTkiJbNgw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gtgnSniocbE8GL6giY6Dc7K3mV6k3arVJSvhVPpbM4HwMYXRvtM3kG9qyPwU554B9wGzjZmTKE8paf1Wfrdwym6",
  "key1": "4mfV8ZRTFEEyjPJCBcX1hqUQVk5cjM9UqQTEvoyL9L5CbKs1Gz4ctPuc4HTW69uVBcAxGiZ6Xxs7GJZuUrPyvRGA",
  "key2": "3MbdfVhNArHNGWvRsfow8rM2HdTjeAWUHuqDdKnLhVxWJWLsEYXdjhKriqmiPF2isAQbx52S6YskyuzTbm1ZNRtW",
  "key3": "64jer1mG9QcPWcaMRXKwb5fxhHUaAZ5kNPewm8YbwwYqjxuwKdnZ5bJJoBpnSCmYwKMYGvkVrb2wrCKuMoFZNxNV",
  "key4": "5NpeUsBJTAtFqYW1h2fiF9XD7Tqw1UvBfHZrT4PWB37hXPrc5n6djsL2g1ChVBsKFX2Hz75K24sbyFT9tDDFXL6W",
  "key5": "4AYDSH21q6qEQ6TVDRHiVHhrgFsBddsooZ9kHrELKzeF4jHhtoGQzrPSk6ZXGGiFuYkGpcm41rdq34cJZu9yMXxb",
  "key6": "3KQEkMcdXJR7qZnaEvmKuctoU1q6L1E4zdKYNeLmSisU6XegDPXdUEGYKUMddjdnpsgDHtqWiztWoxXLjxcUPhcF",
  "key7": "5tu7h5QTQfsNwNosR1V3Ed2Bx5qgVv3GgRsAPHtmzKHUR8AZrrmwwobPqL9d9dzn4scX5EbBBa6SsuPXD4cXYLWv",
  "key8": "2HKEYA1BGhdNETXVvvccXSu36GtFS8Gw1JWnRCiHrwcAQFfJjNqBvd7S118Eu9o1LrxZG7KCBYikNtE9nWdXzV1s",
  "key9": "3RQWniHa8LfzwrhgfiREjQm2nUnkukupFuTo7hDHe5MdxS41bwNQ3RtA2U3xgxfnz7yKWiU7tJQ2BYjAyAstYmoN",
  "key10": "3JbasZCGez1eaE3iKGBWL4r4s3PoXr2HKuxSoxrgnDTH7oUGxDHKkqVTKJEvurDwzqUu6beWayptxC7CeaBJgoQ4",
  "key11": "3qyM1d7RP6aE5nuAiSS8EdSKmzK5MJbxJix4KWECZRM6yanWKvda7ZQRPC9aZ24p9wxXXaXJ1qZGnk1cdbNResHp",
  "key12": "46WEccpDhwBYCzfezmSbQJkyz7q6JKWtiYNaPtGtNG1NxwABEHJLnyyRgCSzYgtCVnPHDmjtBwyTvDNa6W2nDsVi",
  "key13": "5pRAicxpa13gXfWuxYk3JbfWwZbwHjYQftfqJpXkXjcaciAULbtjVrn9jUwEaQ5x7NAA7LaRAJKAKeSkkucUQBwr",
  "key14": "awBhrYNZcBEuhgvvJLtTKTbvp2eqq2adMS6WKsNCGFUxrueM6MTK46GoD1DDyGgf8sLctVswigEUGK3pdpYPwN3",
  "key15": "2vLykrWbudGfQ4bjMgGBaXLaPmSNe843eQkogZcXDcpGnh8m5RYYqrJkR9ZS8tSQ3t3WLe8C3TciytcJdravhyZw",
  "key16": "65UJkJ4fzRq4gnLN6Hi4s5HMw6imFKroDbJgmvvcnQbaEjDs69J2GLDdEm8EDHt3fRgPLmJxsk2sTfdzknrtvqoY",
  "key17": "TRQCqGD6P5X5Wmb6uhCKUEbzYDZizNESKJqU3ggmYAfWzMk4pi9vmWaru2tvcvsqSa3SF7ZwFRLSJT6WiPeF8Pz",
  "key18": "2Jme9gEQFQHW3HARcWYbZ1Xbj8woGyYzfDLpVhyqMJYhiYJoKcB9dme3ERMadCa5dHoeLji6AZS3wH6oKVqQqiJx",
  "key19": "2SvTQ8SCJEH8ak28YqmDE3jWkxfZFTKZnFWedbXuYi1W3ukBii6osU98FoxNLV7P7QhGDiocNHaU6WoTYaGbokxV",
  "key20": "5opry1m1qUGTdYuwiGCWCJa9WUBdt35Wz9ufJGRP6SoL9fu3xodXksMHZVa24f5ucXBAFrGbQnEwewphMU6x3pmC",
  "key21": "4oEJcY7NVkPgom6RG5eyUyXoUSCUA2fwtAKoLzS48sL5qfX8ehUr4CLQGdEDkhaBvAySsfEq1FK9hwMDJnzYY6m7",
  "key22": "nAJdhTtKT7wmxzUHm1DHYCxFxPSUkxovWdQr8jS5W8B2ik4tpj9C7F57amveYbAuXiHqyZJ6wG5syRcgAXN82ZL",
  "key23": "2iL2EsUKrqySnmkhrpqYvv9Fw22aYr9u5kSe8pDVAn1Qn6HCqz5fe87Y7VLCdU2LMM4Daz9dqmHe599K5CGnPcSy",
  "key24": "4XC5Q6bqtCbE8RYL5LE9bDWdgCTW1QeeDwWtx8VaLdMvhqxrXjCjBxLyVxwVWtFZjNtCtZXCfEubi6ew4AwmUxgN",
  "key25": "4sf83cNsQASWiSgjXQLwuEep4pvodwGLyCNAoV3DxCLWRSWidC7CWUJFcLGMZcBiQZgshBxjRuKxpnknVipZYtPv",
  "key26": "4JJgmizcSwx87ssbAEWU9khKqX4JC4Uv6p8cdxFEyfjo73Kh1qoszLReQsCo7Qndvnee7A2sCSbM1hnRgVTFai6L",
  "key27": "2L1yufJy1NjQSvJ8rPLmNfMUgzeuZPNd7SNv6umMJ2pTP9TzHcWgWSn94f8sv1iTGCqT3SL1PVejLGWGiKMhHcLp",
  "key28": "3TH2vtGhxsu6x4P13XkDRzM4heB8w7BNM7e5VDBPEM2GZxZ37vcSsduRvvbwQQuTgwqtqXuqGCXpBrGZQT4cb4KC",
  "key29": "5H3rw7YYFwxyeTGZwQwbk7CWM5njxBJQsNmXdTCV17qkjvBNtcJatsrEztXs7x8rErSEmNdrCxSRKzJXo56G4v7e",
  "key30": "3LgueXixhWYBHdm6fkD2yZdgZhmf5iw13u1WfYgyfidepQVdund78ChMbmjpRakPSEYWoEaF13nNKT9T5KYFJSeY",
  "key31": "M9iHo8ZBFyZy4GoXWLaPHeo2GUEPy1sCRpBj5nxeQEB9qQoJgKRHrYDbkmeHZXb7GJgaBJSCxJH8ifmSz7jwHPm",
  "key32": "UjbjAgyJZsj87upBJ3RxVwKeivHVJo3XPx8uXx2AriFozctLxsewf3Q2drjFzStuZsrKuZjSkXP9vTFHurKGhDA",
  "key33": "2shYNL4u7osKR2pbie3GD8CDmFkoRCYV1S7gVnmwvVwooUKDe5zSsffvQ8pnqzk81Esq4CjtYiEY7siPyiem7AC5"
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
