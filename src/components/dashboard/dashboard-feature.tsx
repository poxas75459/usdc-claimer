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
    "2d9ozYBUXQCG4gKWgE1LQ72AYZQjjB5ppsJ8C4qozDaJKPBwqWyDKxgun7Ai7qbdKja3B7D1ipAvZBjH1ihtaNKv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YiZTgHKzurr6iSNkxPV4a7TGVuGXwZVj9tVGE3KoUkeBsnUhwsLYtvd5RkHp6wJCxV8pQ84hop6xZv4JA56Ud6z",
  "key1": "YgCLhQcfPJa7Q1jNMypM73MGpPaixxwghsDU3Ro3BFQQCXHAGhY8HiYs1wMEyVSjtHunv2Ke8XPF26Nw34W5QuF",
  "key2": "5xT7XnU4FE3DhWqcWRnBFG5ESmCeLFwTS4n4tuTWadZ67BwkGgr1cqhTF8UxeUZTPqgviVJaN58yt9Mu6dV8rtpQ",
  "key3": "5PXv2y7w5VcR2333YNgQxuV3LygjcVbg7PKcvUibrMwW5RWqgVRN4snBqwL6eTCjs9mkZj4NoTjr2xYNfQ7aocAi",
  "key4": "2ixQWnjsA9GmnbaEUaqHgnpsPNSmzkRcsuk9b6wEFfJf9DwksndnFZVy3V9FD9qWAPupSNsfNuB9vySQ5woSP7bt",
  "key5": "3aXffqjS7f7kJyy6LRjk3Lrj8XsSu1eQcRest5PDvm7c9m7W4fkddbRBU9Sc31vanQUMVGaJ6gbveGFHrq4iVgqG",
  "key6": "47kuJQ5B4ArqQp7bK7dSNcmaNyGx5tJPgCdP67E6LB2pCNyCzjKimnZq5owy4LVh8UhnHXd23WhhfZDvjhQJSDo7",
  "key7": "33xRHMEEuDX4L9HRbYR2xpxvVFbYVVCxYMkLKxFmmmh2HX5FKq5zsYPsC6oefXJPcbkgAssTPunYgx9CUxJ8zMm9",
  "key8": "5fLHUKJiiwBV1Mn5kmrKuuAu8GsryQZ4DEw6AdDxD7bsftiEuCeQhqwKVjcMMGqXQdiT5bmToco6w5p2QuLx7c7p",
  "key9": "2jgoTjugAhhRqkqBDzcuTTMGvRhqriLPGmBtJgQT3r3if4vCBTgru2Job3NaNdW15TKD8hxqttukvhTkeACt3qVq",
  "key10": "2MQNRYVRiMFBuYgvLCB8EVZ8nq4PTrh5Lq5DYdBxvim2GJgPNt8j8UUBUsQ7R5cTBafEgzKyDnJRR6fVmLEQCM5h",
  "key11": "7futXp3krXoZR5Uznh2jFFbz4iSMMDkFwC5ZGkqG5Gbh29NqipS2PrqegjvcGqquuxWEWGkzSZak1x7RtFCP1q4",
  "key12": "3ZDUpA7pMcfNwruKcnbWd1KttgV3zUADgAymXMoAwupHPvnMmuT5HsC6tW9MhoGhfwZezBfzSGKW4HpGw7Gdg8NN",
  "key13": "42UGu66w4GFYT3bqXKHZiBd2muy44LmWRNYWJRJg1GnLXjG38XCssVY1sm56UesBmBBEtQdNj1tmzveAH281x8Vg",
  "key14": "RNK2ykmijs4MgFDuFiBiJRetCF14kVpsPsz6BZeD8cSLyjm22qj1AsD6odeRm9LfiP2Zqd3ZenMdswXmfn5Fr51",
  "key15": "rTUCarKRgMoPfuMwQPetdGv5MFXiueX79CjoZhHiSSmQByM896aTzWg6tFtrab1CKJSyWCjLWH69x3vqyXCQatt",
  "key16": "4hqPrc5NmHmX6oxqnTv1hApBnawRPM7T49C1LZxoBvgBTLKVNScJ8d5nrPxaDuwCwvGQ1aqFnUXCyRgs3SmvQ3rp",
  "key17": "2z6mJVdcWSYMhc6TiQArJsqAytnkNPtdb6Kj4YUsvkpAexRL5fchxwRrnMcreTQFGUnEoGPsWfDrAKfengGDztnG",
  "key18": "5zDYWGhBF1n483u1LK2C8S8xWFAuiEpzQnp1CWURR8QNfjBxT9YwyA1ezDRjhaEhsGX8KEE19bVkgbr6jW72dfrm",
  "key19": "3sH4ToHCn1AiFEDPRsmswjU3DwuDSHCcwujwyU6ssZJU3KM21cXgoEXJ21SFqKF45LY5EaKMJymrMpFXn5pSZ1wy",
  "key20": "2VQv4BVHihGXvG6et2QedniF7WhzjjNVGJuoKsnExaw1gJ2LUZ12EeNb7WxpZT46mnE2RpfRVzu4fc26NNjQr7nH",
  "key21": "2piyztn4wi7bStDEuRgX7ufrvfLjuSuJ7dsqTi2jAqbrshA2vMibUoXDhrnUofHqWaX52jbgwSM2hxNmER5VK9C6",
  "key22": "oBSgwJZfZiMXUaj3SjBiEGDULgjB1wuJqRizRAKbpxV2cnS6MRvSWdqjEidKm1f3DwhceDAbuDoMAoDAtF67ooW",
  "key23": "48BUChgEssDtXVMA9GZhhb6Z1LYkSZWrQDLqYXD6Fnh8cBA5DHeX3MtHLAfbpsEWQshkGFUDLXxxQjk6s5PDR7Ag",
  "key24": "5PfRxsryFiVQQsmfjMRnLrNtq1LBCV6DNv69FUE4EUcUrieV6KF9uGHhUBKpibu5BHLqMSKxqHCX9rbpRiKcCDqb",
  "key25": "2ncn9wvLhhC7i8PwduGjvpx654dd91M4UkBRS5Kj1i9pKeSgfZwon5YnjrUgX7E2EBKjqPGJCjAueXGtAqpg6drz",
  "key26": "26LwgKgP1y2rr58vkbkjhdoC71pRDJ2inZZ78esHVYfFbn8sdFEnK53QKb1dsutjzHyJX9Q6rk42LhrxYkUEBsto",
  "key27": "3bG94JQTnL5jWVbWB4TDoEXvgpBjF5biTgHf9QJQo4xWgmYUwjUMwvcBPTifp9sEA9y7GHZt4aWbnQoP7WfwG684",
  "key28": "QevrMFxjFuoPiw3Hc5DjfyFGzFEz4QDxzRM2rJwE8FE8X9tDka6sHRALNa27wCm4nhYu5gB3DkPDYrUfsb7Psu5",
  "key29": "YY8Buex4WwtzQmG92QyqqR4Y6FCcAQPCvSgj48B5Pkr2ekKCocTBb1XYo7GLHXAz6HKwiKcskDMixz2tEL4fSx9",
  "key30": "5y1uXVWho52cStVPhgpq8zcgNqC47tASogkbpfcMdi253ZAf2h8hBWJ66eGCsDbYpwoYcuj4h3wLnUr7FpgYgVi3",
  "key31": "4e9Et1mum8W8jsoMqjPJjSUEzsjjtSL8ck4SW5n9y7Eu3NaYwXo6EeAeHty4Lf8CGR3TY7vUT3j4nxS2wj7LVwSm",
  "key32": "59UNaDBRh4oK3GBJtWbiKscV3d7Zbi5inc4EgtKAwvygPurjKvcAbbLqgACjUVpQTK5HoCXkp9yfRPy3bgcWMQoQ",
  "key33": "3FZ7LqzTNR9QxTjTTWQUSZjpUazNp1wfpr8th1NMvMutLX4wT4F8W3mJmFGh6zLghMVZvxMrr81D3yBM9BbTfci3",
  "key34": "35VBqvGLANbK276Tj4nQexC4MTtDPpx2s9KL9mPSpxPP262jZ76VQ7xzedXFQMizj3g9ThHiiTdBeA5htkYXWHox",
  "key35": "5qA42SrVciY8Q9wpph4SABKnhSgxNxAKQ5buAoua2ZJM7YdpCjo2NCkVB43hhKnUtnoZYarAFt85jN9JV1QFZvWZ",
  "key36": "3jYQAoYV7L4SwHGMs9rVH8wfpeuEDZoRtDxgNZWYt48B8piS6k3KoT9eP9CXxbJvpoZT1aa3SmLDxFfVTyKVHmt9",
  "key37": "3PrcGqoXKZoF5GRcXj27euiUtG3W1CUWsYz2RphHNa1Ccd93XtY8iWDDL9BUmmhNjxnvXn49FsDLhzC2Lqdp2n94"
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
