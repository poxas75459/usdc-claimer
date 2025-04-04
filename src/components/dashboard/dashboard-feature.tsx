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
    "7fXoJ6QzTiorJGyJsWy5ukE6a1KAWYmzzYyoUzS6bdW4nA9gWExWNwAE2GNF8pNo4YT4K9V1Dxe8XSemF16a7Rt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZFvKXvPW1xxF7fGkwTxA2UwQ1NxQUffnkf67h5tPmTb8bL8bYFDS8jv2ysaC7aNtoiLYgodYZJ9EFyYYZLx1LX8",
  "key1": "5LwnD7USphPTbbHupVKoiUtBMSNotK4Eikh6tXErhBo1z89SXzi5KWMzY6bEuNBFbZqYSEwTN1yzwYfV1d2MqHh2",
  "key2": "LVzrTzeD97VbLauvGY4hnDhepxDohKRouXtR75a8ppHFvcbaWdd6zMbp1A7emXJVDN4hv1RffPSuKgUALaFPDrL",
  "key3": "5LEtbaZgPzDWNpm1sQBEA5xRzkyzAQ5ByB5CkbScy76pcZdq1WRG28RmKRNGhE4z3KehAgGBLBZFKz9HnZWjmiTa",
  "key4": "5pNkoVniSbBbwSGpNmYKC6JqFXWkbH6MHKyMwVZCLUuCT4ygaQHVLckyoSBP4A1gHwRbAj7ApLbQQjVrDEdPtjH6",
  "key5": "5LW1krQNfRKqBZ2bQmK9z5GbdbcrQMTGgyjHtR1E66LjrvSckYgsbsjjpZqEKYTbMb2JaTUMNLqWDqk54JdHpN52",
  "key6": "2BhVXjSaNMjeanL6LzqL4nd4oNVcVSTRHMrGzaGo7UQXRF47BjH4LkTjdHdwNRU6qbdA1u1jZqMoK949RDFdPNHN",
  "key7": "4STehr1NSA3CGpbyBSHpVSRK8aKJE5EXVnX5ymSmSbr4BAQhZGDYxxQWRcEfj72G71HQWmWR5L3EH8Zp8vohVd9t",
  "key8": "2YqT641kjcJX2exjRUB47SyDkMLMCXoTzNZnNz7VEsLuLKRm3tpUphmqWL4dUEC3J6e97wkjvgjtB683ThBBCMJp",
  "key9": "128agNgtFQKHGHfVbtbSS3BqCrjzgtotwxjZAqu9eK5xHTx8aq6tJNNRuETc9YTFg9toiUTWvsjr3BReA5tRvLX9",
  "key10": "4zqwnFgo77JLag7tamfXJD2sVRz2oFF8XH6NNw5dL1NmWadJwRjgygbtrpPVv6nPCxLAW6q1G89ruckJv2EgBEev",
  "key11": "5RpzxhSSbibvmyppRGuLJebBQH2Z8QSfsKS6h5eq87QBkBVxyeDWbEHCrtGv8YXhuHhUKwAtiZ5oUqACX2NEQtrV",
  "key12": "61BEfH6MjycncBQbeyLrwkycpCUgUZyawdJ8Rsvck5LYCqpRYXrTEKNKKWJ7HQ8N8Y6eZnjWhSLhTDTc5GuW2iVJ",
  "key13": "2hx9R3MuZjr1ztQKa8j3tGCgi1xmRmrjzgYzVNTTWewYR8QaK5PCKKP9ztjMdDvMsoMn49wQnuYUbqk2dXdQBn9G",
  "key14": "5Xh8dDPPct1tjdgWsPH76okWWJLGTeZ9sEfmFiJFZYxyhEdXbVdBufNgR8nNuZBSwFcpUYwtanJyy7AL3gwG8rMC",
  "key15": "1beSsVwqW2EVJUe1wBezsn19n9KP1UKLX22htR7wMgGFv1ojnuPEALNLXxKtE25cYTvZMQbxxDMVm5tagjN9DDP",
  "key16": "46GYAJKkmkW2nzcA7LoGaEyJAsNmdShKSUDUXhaMSXFNgVfZt3JKPDYuRrqPeozN82omym6ibPuYPABYggVwbSdp",
  "key17": "3Bqvb96uZ4TDcrSRGSWvz8EWuQpTPG36H1n2ebv1LKit3Z5c2fkFAVe6zbtFKrTHjvTJhwEjaPPnAhoGbNxQgBJf",
  "key18": "4LyYbT9GzASKQ7fJ8zbtim2SsEb5Adj2YnR4UcV3iFjaWT4kCC4yUEv12PWTjEBoaeiUVL9kkp64xn8FSJGzrCXu",
  "key19": "644ruXK6KCMFjpwLqedEt96PVfyVsoPF5HMX3hoLn2hk8aSsrmF1CbF2qnpcfsDCssb5pLQgMVbCGyJrEDu72Tg1",
  "key20": "VXcGrrUjnyGDtWR2eVD2nmSbc1zogW1JNV1Q3dL1K1Nbw8uAdKmBcjz1Ldk5TK7Cuy4cyaNi39LPvB5hZQ3WQ63",
  "key21": "3h1BXYSYpWBQoemMDSCdTxye2w7wjCxHYyJcFV7nFuE6SXoZqD9uv8Ftj3FxTRySCqEJpQ6mfEdW3nv8hR57w94",
  "key22": "2PGtoaimwoL8jWr9go8vFVr4J89xN47gYbXNgdovcfmQo6iPwM7cE4beyGeWkK3ppeXAsuQ4vUpcYMFX52k2wGgB",
  "key23": "29CUE3VpJihNYtVWftvceSP1AS6E5KDKHRjBQhKVs7YoWXCGvjmq86mLYuB1iSvxUL8EhM2wqNryTCxuFGKHY6Wv",
  "key24": "2cBtn4jVXKHPHZkWBNHiAjgM3XYULqRrtnwG9MqLvmDrSNUqmqai4DjTT8H1gBq56WSMU1Jv83NTq6NpxDDTeRta",
  "key25": "RaSryfUTAGfdf7PwwLDL7Xx7gGeBUwjU1BGp9diAaJ9qvAeQzpLEk5WJi7hM9jECCvoyzSGfxpWmPg38sxPWjbN",
  "key26": "2xJCeBDmsxccCYEvyTSp7J2zWsk3fSsqoCDEdFHE5XnktQfX8xLxagpCP4qwZVqYceoa9oBT62s3mxKArN8hXEWv",
  "key27": "buGpJy98gZUXDLyJu66W54AiagJ82VxQq9mzk6PKd7Ns4d8LBX4ZcP68sLJTo3BVvLQopXa2NBNuUABghJSL6p9",
  "key28": "4FJhLGtWJQs66djaGsUBYrAgLU9nMGJyv3jbVVEHppusFJ1QYhHb6Hs4Ee5L6QA3jdNaWtrKRcim7TGy5948GwTX",
  "key29": "4qn6NAJsCrTCy8KnBYFyp8D21SaGfxwAbsmQkEAHmvkicMa1Ji69q4eTYijSAWbVBFiFHgGnqASoBNF4PTodxYJg",
  "key30": "3xX7bGKBAJmQVwmpWXwprugNE6PdcNNtf4LNSQpUxH7iLQUFmxvZfbsaorFPikT4xTrhPyWaMX9PYiodn3uiJHy8",
  "key31": "TJ1kV4HaeDiC4uhGctFp4o6a66CLZin4XaDKDX1fcyJk31BGRhrz8CbLwbJ8zYSpHLLy6TYirYyPX5KSZEWBMdJ",
  "key32": "5QBA8WPzWhmcYKSeFhorTZD5wAyjCqSQMthRkQTBDbuZi8YS3fAaqzcEHJ1VebAXppEeHt6dxCs3sjmnoySH9gRP",
  "key33": "2MvfSs7ZYeDhft99e2HanDHrtc1Kicgck8bx6853d2bfUmNMeSFvz1m1asVae1maCaPKvSDxnenYzD9ba9CXJa7P",
  "key34": "3ocif7qx52pscVUMmYFNyPAqVtTYP8ErBg8u9S4cj3nVUNLy6H6zTUzdVKFZrRFL4PtTUiAfMR86JABfxrquWzPr"
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
