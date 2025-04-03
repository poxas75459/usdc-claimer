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
    "5dbAVs5hT9Nmd7Avs1csU6MQqr21j1quB9geFY1yQqR5tnL2eEJr7s7r7V8rpkftaejbz9yfui3P77BMWkNwGfhe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65z1gaT4zPukLhc7iQfFucmqC7HnAzua5nScshq3t9iehCMu4Z9Nab2ovF8GHmmrvsMpcaNpxQwuimqrNJmxSLoR",
  "key1": "UqWvuvZ5tiVHNVowgXgiEu3VH2M9g9msLhrVBv3rKQhcRWUW3v2KiR6wmsp67jz4jxJTFGv6ZF9A39ovcDgR62q",
  "key2": "Jd4zQQqfAttmA3dxGYbS6dmXvxZkCosTVEowVP4ifSwZtPLGERDpdYzZTzDW84gLMgcSTobTkJ44UXNaAQeE6w7",
  "key3": "xqCMskPiu3Ja4fu4mbZGjLDuRSNJTW35rP2UxZ9LZGwznUMvJ84WDYXbzyZK6kY8kwC9AzfGBuDV1Fj2jMU64mQ",
  "key4": "dUVeY7J6QW2BXAiPY9g1LB6duegF37FVaWo6cMWhWQkccE8ZHCtjtCM81JFh8GB96tKkteDdchqehSpSihXVKgN",
  "key5": "cNQRw8bd2N2o9g6j3nQXNCs6BaYzTB34n8yBsbJhdaWswEUoMjnNyWHui2pH6tMR4V22X84k9ttcqs9x535Hjkx",
  "key6": "4ez4qabwHKsaFbvmvNn5Dh9SAVB4dZAuDGrtX3ueC1pNsyLBCSgjRZg5UuXWdbixLbNjDBYsi2JfffrhCnqygdhk",
  "key7": "3vy7NopdNdHnfAqbmTvgy3FkFNbu9FJWr7ABjb2C56xskGoRUPHqPkogDomguoRwaJUUwKQfg2J22vh6v9qyEZRo",
  "key8": "53t19uCb52jAWx4Hp2A66xAMYeDA7UDmQ3yYsoZpLvG3QJwLQUfB5DaKBWF14R8G8k9nNa3NVEqc1qb9eB6s9NZa",
  "key9": "FDeixf1GDPr5ec2kr1vd3ALhS5CUwnAipvFdGJY11yZhN3zixnrgya2xWsy1pzqZPAzxPRG8dR4tLdafC7AoJjz",
  "key10": "25eGvDwZKuopZNUp2L4jvYN92cUApj8py73sSpPJTQn56YHVX5BRiZCiNbZKjccHNwv24EhTjeUKuAknxtqSAped",
  "key11": "3hduksDFFTTLUaeXpzioXoixSL629KyykX9pHBbpVDupStK7zAPZSq9ycJcTPfi5bU4MpA5mJfCJuur8Z6QTxRCy",
  "key12": "4PFXkXfY6Rhp2oTJB9PmTcZRBJi6GSwXXj1CpBGzqmYJPD52YwC3de1sf1yuZJGGzZ1KTNGTA89pjcJFZGRJ2R4y",
  "key13": "4JDhQzGuDccfG9gC4K1dv2Uu3oJR4qtXjSmMjiK3S5WsFhYzeMGobEMVrvC9reZYDYBXBFdUNqNkc336HzBQqu7Q",
  "key14": "3CWqJKuiiu1jvHXpxJN2YMCcyFA6h1y1PgNq9u5vjfXnhVX4a8fcsnUVwiJWNHBZnAsF3xs3w18ukKsUar8uUQgb",
  "key15": "5JvqbqCGNfBGLEqR5MhKqEjggzoeYuZHB7W2vVxoyyQMP3ozHkKte3VQDoWQBosRUKzCVM4T3pPCzz9YtGCDzk93",
  "key16": "4x2FjeAFS8KFLCzqK81ScQjGd3xdzWuBmn2wpnLbxMyepq15uCRpY5jyQarQWkdaz3HY5W489FyKfBJtNEx5NLNC",
  "key17": "56pcffnzoQHVSKLJQhQu1UA5LsokkF7c8TcKvYDuuiQkDX8L9Yuj1bUzuhoDyBSapAZdAHBiLwiAHEAN58kpFEzy",
  "key18": "577L5ec3c4mgftiPBT1sKYBoGUJPKZas7GyVZaCi5fQuuDKQegR2ZtBSxGcKsQfVYNiPZS9FZhPDfzudppgandCT",
  "key19": "wExUv3kVgPUbs4YnNuAgPivkh1RkY8kMcVhVZNfwSTnSmfFvxk4bK2RG9HHb5MqpHX4BFsQiB8TBxvETULbjVRg",
  "key20": "3h5CUuxDxNznwg7zyzuphYfJQTyJTW6PqbdFSrGM3AY4UNK1c6PbJKfDcA9ba9VP2gZZQwoKnZVXxraHJuMsUaKU",
  "key21": "4yjdWXW1WzfnrtFBKAwKctHTgEBeq1GFDmY5WCgetbgUpZqMcgKHXCbhiNMDXh82RVCgjjsWmgD8DWN3av1q5UKt",
  "key22": "3HWb1UzPfWttjsjYiW2vtWK6U6DWxtYsb9nUB3Vyb4NHNgoRVWYj6efARKx89PqaFa7muBk2pf6FAWVDrYho1cyU",
  "key23": "3hcQtx7ZCLRgr2EjkbSrrPzKshK2dHczMQ7bgg7p8KHZjdTyFB6ESZg6erjxLwAVTWGnzud6eWfyuPv7puBEbKck",
  "key24": "61b2ZYr5Phdyxy7VutGvAo3VY5tCGZHgvnfc8UtTbWyLf5Gotz6nYagYax7GfazqCcseQFJ68bN6P1QURSb47awM",
  "key25": "4eP3vwdjC1BrGNAcWfZLsu7zNG8kE2p3tFKxdz5xkzxvrpQYXBnrz7JyvtwHXi2aCFQy5dZ6YhP8fLWf6WMtczUj",
  "key26": "51XvVLLtqwH8eRPrYSHG5MD6ozzxTfSPs2NbDwCxd2zCsyDaPZRhgxXD8JsUzoZB8u2wTUJDwWv9Lm6PtgdPbtyW",
  "key27": "58H6r4oJHi7YW3Q89riYU3HRCCu85Cn5SR97JFfWd8ZKkayKSTHPNvhyiRcKgB82XcbBMSgJ81u7xA6LsjTm5sXF",
  "key28": "3TsnU1oqwM3Wyob7KizpFsAzLHe3QaA6ergYfspXCz5zRtckSxG8MDoDi2nd57AYUQaJXLPpcJbmrjm6Q4uThi57",
  "key29": "4mJy3CVZmfPchAbxk5Qn1WGyxCwmXM5uVNkxp7SRKDdRWndDffvEyScea7d63R5ye4tXY2jsWBW71XXoScsLGT1o",
  "key30": "2T5W2d4BQ4iGAHswMirdzU5Nra6S4u5fxRCttD5LEx5ezmtxMTM9i4GUNt4ap8D6MrBFYATSVaoGKgKpzSKL6DXg",
  "key31": "22bAPhDFZMRaDgiq4AXLEwkej7i5Jw3DGur5mgJ8N6HA9mFzoj9CtfcH3rYVxXji7NzpchcX1tioZ5SoWqkYG15V",
  "key32": "3Z6JzRZBirPHKf39JBWbKv42jrkPs8U21rZ5iZ37TWYNsLxKXQwDgNnZFWbX6owZTa58p6T7YZRaWv1P7tZqNcX5",
  "key33": "u4irUwYRbAqGPKZkRBZP94cY5iKdL5eZEyCoFj8mMg8jju95ty9sK5tirJ7zQcvioFj1Z6NhwYuLHDeoxeVDkR8",
  "key34": "drZEVSthvMUjpsZjcmrRaNpNtTBTPfg3JsBc3FEWohpsYPGGVc1Y9KgT8ycoR5MsMJtHAjuhGd7kKLViWWCnbFW",
  "key35": "2edpzTKBYZT2aAGcicz7GbLo5wqahQf9sJLhB7XTAtHvW1o6hb5ZuLYU8zEhpBc373cie7hbvs5JPBHogzMkDzek",
  "key36": "3ECt4ppEnCzeXpqjqgXWar8VmcyALc2xZuYiZj9hverGoGaXR7vurPBc1YFXPkEovNmK8D95ZcTrxVweh2mie6s4",
  "key37": "5dvZq7uVgLU6CtobNpgzqfcrcyJW2CNAESGhiaKvYNeduqW7PfQLu3sw5wiFGbWirj2cZdnSsU9fxTxTtWjCysfN",
  "key38": "3hEKE4EoNxTosj3qXuAGF2V7sFxQEkF3pLRPYHBrHKwKCoH2WjTWSdE4KtM85MAoi7hn5fHhrfDby13F3niK5fQ7",
  "key39": "26Q5NNAF6AWHXPMD2bsA62LJHv7tALq8iPV7PGM23uDsYzkguqsaxrvJRCBt127AcpBLhnSutGtQB8ek1BLrcvAV",
  "key40": "5GQvCwixU4Uav4vXVLFiAsN8EKCxRdUbtuEhR1PrgsxaPdrT2o49C6vCrJq1SWAHPWSv637iUhJvxUCH3SgZ3pgo",
  "key41": "3KNJhqB8bFAUxy9RQqYEtfKAH4WVVeE4Mu7rSJzVB3A3aHmvXHB7pQiPCASpE6dHckE5Yr1nqk8pnGJpKNjc2EwZ",
  "key42": "ZBox22NipgJMQbDBmPvMBzQ4FoayBZ6Vrr1CV27QY6v1N5ZivnqXiTrXkr21BKNkb4UAGURuzKdJjosAkBiLVo4",
  "key43": "4g6FghaomKP6YD2Jc2mHjx6bZYoUfoNLsG7CvAKFtkKtQK6PFc69UAdgGDqbVachMRHXw9RFRzcGM5WvFHYXVtoX",
  "key44": "e6kcYdGUgEcpoFFhUkAgTTDxXAsn4kw6eMv7dEJYxytFi2xfnABiYGzQssfXf16VotbeoxkR1hJ9yNnyU6DG6ck",
  "key45": "28S5DQCdmW752SNRZBtUX5U3JkCfpBZTpM7s4vfAiSJL3v4Nw8anWWGDtRSVa8Tw8kvBCckk8eEbuqWaLEdepTvX",
  "key46": "2czxCwgrdfTgmGivR9UFnAZ9Ggf9frU947jLPBn3YHf31DQcQrrxwacbPc2Td19kkAp6jKjAAHh3pg87rt3tb5y3",
  "key47": "3CoWVMN6C3RZzXhG8dvRDedGwoDNCw69AnkETTG2akgoFthsAr2pKnPCZYFXJZYDptUy3vRbEaHHcHdEj9epPB9Q"
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
