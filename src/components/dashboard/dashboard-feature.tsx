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
    "5YShAwaJRaoYkAUcVgouLrKkfdZ5JmX4ci33etUdzty5bTTvAtP5UDrtyapZbBQK5NrMignTRsjGaTr1TaKvuEnb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wKX8R4Zio24nqmWJ8v3ejkpS9UyUqAPoVYyc793s9sSczxiHKPKrwbXpTrRWnk2PUBEdg3txkG9tvvLTDBrG8X7",
  "key1": "3pfoTZmm66e8AqPA7kpmthrRmXy2kAT1ZNRozQnJrXvNLTJ1xqj4fbS4xw2sEz38bn41jX1ktsrVtutjxCvR1akj",
  "key2": "4sn1avWSCJGVrHDw7XDbFbzhgpkjc8rskF4VaFtB5Pem3uJdD6SvvDeQcEN8YS3tmbguPTiKkNJXfQEUTaRfiS3U",
  "key3": "VFHcSWFRQ4G5jrgjHBCJNNZUR9yErEecffjrQJJpYafZRTXXc47MELhka6bbm4gxEhgGxi5KBctVNbXfMbBQz14",
  "key4": "4majZ5pT9axHP6QuH31sz3ndKxv3cuptHdcpdjEY1gS2So9ra1fi4uLGbbsG8WRnKaD1ZXm5yLEtMkBcokEth2Nj",
  "key5": "Ex62fD4vJ1t68Hze3q8moXHm9pYfHYwJuFrbWTYcmJFqVv34n6eipxH6md7NJJV97WxnecGKpwcSe9A3VRTwaz4",
  "key6": "2yHUUCAsAnigGdCzphQpLxkN29csHB2CJn28tBe3BhjchMmtZssvAUSFKURjqeMzivRvHk9TbuT5Yr5Rks5XU3GK",
  "key7": "5WpFdTSugonk1SHVBcGEEroLEdRP9sALn4B3fReEF8mqo97KZUJTw29ag3jSTVnM7GmJxiMaKWUyudZPjgAoGk7e",
  "key8": "2ZTMi3eJMb4nnAytzog9cMu4UokLy9frTPpbwKTAL16YPqYSzyQrHGSA7PRqaGBzrttd5vTcHH34gdnzRuNTEDVx",
  "key9": "62YWY7yM53J9obHXv6cF8YWc7CuKVEJCqn3M2dkZRosKNkFSWMfkzrFYzoonNZacKMY1d7Ro7g7NoCYJxSNyF4Te",
  "key10": "55zxHhhyyS2yqnGmR9yyvYeT5vR3MX1c9WQisZomszdL9wwPhwasqWDRewz3wB8h5BzhApBHgAjdkCPZVguojfhY",
  "key11": "3y7QXijhZLTS4HpY5zGwzEbvGBnxWzwc1hY5PpQjEAKmw2UHQh7SBZe34EkmQvWX4ngUP3uF1PbLy2qSFRv1tsQt",
  "key12": "PGJyFphGBhT2wXiuiaVjaARG9KVznnhbmBAoLSXRS7aP8i9LimRbyQsaGgXynJ2NPoTrkHmYvdEFeeDFHfaaZ9G",
  "key13": "Gf44Xofu4RWKuGU2YMbZZcdAG6w58mwXE5qAH4YMqcuEY4Kjxo1Ls9R6KD65abBgmPTd1n3wkXMPcYWpg7Q33Lh",
  "key14": "2N4udEqeDVppKstJsNki9XD3zj5XpVQkythP9mMuuwPPpTCtzjZ92UXGmwZEbSKha66tX5supC4jDJXkB9PEtB1w",
  "key15": "CdqhDnaAPLFEZ25ot5RDMewYzWKoEMWVBJEJS9HAnS9gRebRTqrFC997zAaaeHA9NFBigMsbehEVj237GMG1HST",
  "key16": "2MJdUoBDWQAhuVhD9Mqo1YWdABg2FYyW5CADU7m6hQpF7ZVSrjbx2c7PCBLwiH8ctDZ4aVbaouwnvbNeNPn3igE6",
  "key17": "pfpKyVtC4ouZuQmHCQQMRo6nShfZuvUSEUY6gwJzwCnweJpUBqP2n4tgeH9uo2HUaQaXVVW3nTxpro5awxKhX5Q",
  "key18": "mKZBohh4JdxAHhZPaSZTUCV94ceTANeFutXBuAuREpJxRVP3a5wPZavKiWZ4RaQsn7qhkepb7NDuYfRNRePRZLE",
  "key19": "kNPPSRzPnZNqs1XVV3xw3c6MB822hhkw88gJZoD4rqp6m4oT4KUsAPX4WiSzohESvtm1RPfvn6K4piY7TXxPtd6",
  "key20": "33cs44BRV28QaVbL1rKtjAQAUFBJtE8ifqtCFBVyiis8Lnp6nyJeeQhpJDcUMssPnKZCJb8fFZmMUavg4yzNP5UJ",
  "key21": "5NwL2mttSKghM6kS48HQJoisLdwoRMAhC1VYyqYVZPZJf732uqvEekaWfdt9nU3vzbJwE2nE38ZFTDYdGhNM2eVe",
  "key22": "39j99KR8LFN5jPrmJYXsipFVsd823KzmafwG2SxgoPLdG6KjtNvRaZinQs1mkmn7hvEiDzHp1Dqm39L8kqS1gnhZ",
  "key23": "4DQ9mfGRLoootR4eoAnXG8StpFneo7FRhTWRTZcotHmRK6FaFtyjp118Pw5oaaioLRZgiiAL1ugSeVJH65n4SExv",
  "key24": "4v8aqZh6ywbZ2TfbkF1ZUAVkyTi2PcGLXEriJprKU3xbeehqkeB6WygGmBYa92VQ9mNu9zTxjKLepYYRkDKLf4GF",
  "key25": "xiyhbVA3dW77GiKXsngNmxycjNccXJSHnsSem6Pwg38XLEC5CCaugofdRhYKe6aEL53rDg5cjyhZC2R2x5KpZZB",
  "key26": "PQUGoVvU6m1bBCmfKqdskU9bo6gTH5qfVznjLZyVxieumbCP8YyntyFkiR1YRtQv2han56aE4JpA3vmFkg921bQ",
  "key27": "4qKcBmKRJ3q37VYoBUZhXbKxKLEAEWzwLPPwyk31ssb1chFjWCKMJotiykYrzfrcecSF7SHRcqy4Z2mcEw2wDWfv",
  "key28": "31TPafZDmZJDEV4W15mN4gynPyP3UbB1sxDzgEFmWcFnqQbMFvUwYBdzj8ANkYkcFHV8EsmFwBQVfq5xq7mxXCuP",
  "key29": "3MKd9qUdahkAWjbhChgPzomvn3EKmMJsDPAuCmM3GjysubgFiJZi8czX3HHN14kumLkw694AnMQnish2KPTD4Nge",
  "key30": "3T7ZxMEsKo3kv6nHkTmVXW63Rk7nNJLPUqwPtMfB123Pi8KKFvYmXN8DM8yKCvjzSQpMbUbb38L6EJazr9WNNLoX",
  "key31": "4VVgAZ5GrggvrcSsmvDKSJYUcgc8YmtRTYxARz7Ab78j8HTviyQP5XRSeuurYVEM1Ji7nRb2LJbzkhiiNniBartL",
  "key32": "2XNCjJzqzUKhVxShqDprtLasYKxp99si8jQvwfmqGNxZKAULd9fmUuUPpcxTyR3g1pPWYG8AiA4RhZaMSuFGdu1H",
  "key33": "48zzFiRAjurGXzK6NnVv8uxjKBmA7K1FSobNMk2TYoNnKEwfvAY3nVkdo5KaYBW8hTMv4946vi3mG4StuvnoCPF6",
  "key34": "5U7uTwS3XLTm87Jm9ySaUdYEazxSGtuUR7EXTPhTjpSBr94TXUwEVWJJzCVsibrCThXUwgEkEppT217ZZ9RWxV4w",
  "key35": "4FCL46eXrNZLLznh73enuN83dDwK5iCUJ8Z2jcoEWc7tQxvkEeYc4mBrb9Xqok5SJbGChtyPJESvvT6u9cjovA7P"
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
