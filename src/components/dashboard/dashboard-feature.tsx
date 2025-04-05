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
    "66J2dZcxuKPJU6VP7M1k3TuN96gtA5dQVgTNwu9jvt11kxjWNwHpu4oL9aSQ8QJmPFzBt1BU9mS2Z7RXQGDsR1WJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H1qXdka5peYxmaJ7j5XgboUetvVaeCS4uZTc1xdnA6jKYtT4MYRpWCskJFDAWsckGPghFEvbQDpFuUuhVeMLGGy",
  "key1": "62eezk5yMCFAXgR68r1tBNGrRH1pUpCTaKZj7hXVs2q2wtD34vNtohu22oHN33Z9qzmPsqf8MBTyvNT4NtE2i6qY",
  "key2": "XNN6EjYnT8vGQbdm3CZiDWDPVXHqhgMBcimmtEyRYazEcechjkHbhws5VJNicZfHVEFgaPnK4LSrRhnrjAqkjbB",
  "key3": "5fMNUFUbTfjjuwxRvyJX9xVP3AhKuTW24o3ent3Yoo8PKgAmzDjdgKApqYS7sYmBihax3bzqABtsbVn7uJ4VStS7",
  "key4": "iHcttYW4f14Pr8AYbfPpeAS55yb5e15YUEgdKhEYHcHw1sfbQgs5em9AWqDRJGXEdQbqi7FVGiWdGz61BKXYRze",
  "key5": "2ARnwqoZUfP84UNh2SToxuHcDhy4QqUs42uU4KFLSSeMtTeME1MNuuFgxGHUPf8WeZM87fsP7hXRK8cAGLQ5yzQW",
  "key6": "3X4oEwER4aN3vdo5jhevmUCtqT88P5k3vJ4iPzjUsJ3iJfSc8vjsKdcohLCtUCs6ccnacFQdFWFq9MYmcfun1c4P",
  "key7": "3UrDVPeTLtNb8tj9kpMw9TazbMKVNJfUyLxZqLCR7dfWmwzXLceS33VoQ8FzvJfFZyz8UmpyEfc6qHuGKa35B9CC",
  "key8": "2pZfUQryQp5DZecUpHfhWW8mPCi5Vosd1hh1vVbVcqvhqmutNtLQvgAcnXtjaK1tB6ASYTZgGND7XR2Uf32q33Ro",
  "key9": "MaPMShZ2Yc8eWkb1oSzWYVFRUjNSsUERWQXcnEbQTbdLAY1nAq871sBSiXMtUrrmVCNpdAz6k5N1Hokh4d8EmUa",
  "key10": "61tEboWs87X8zTxXEeU1pMbYa3oMFbyhdtBQZRipFkJANAdRoxWei484EZHfiYCVCrFuZpu9XaTrR2uZjzPHbXeL",
  "key11": "EbYhUMM7zBBb4ostTaFbLWfFit2nhPnbGeS8RYK6P6hdoo3ZiRUGjnCJWz6yu1HvTWx2t8wLhdB2yQVMBeBxPZ7",
  "key12": "3WVXr2sp4nMiC8Dodm9EhRDjytH1WQmZeUaPPnBuAjnYkzpMMrbynkPu6T9N9k2rECKeLdMKGBL21vAFh2sEuewn",
  "key13": "4F1fkvgZwEm66TFiC3HWmN7D4JyRZzGh2R6eucnxy6J7u7fMLxZ55UtJakkeeJzCGBnDwpk8CBstoG3wLz2NvF3z",
  "key14": "3ixH7hKhVZHcqvjD6dsWRojc4VueTmMbbrHKxqxzsKhtWg6Qi3uME2A53DFRF3tCfXeHi1PuvS7DRJFVURVsaun1",
  "key15": "4hxanqyQPutUeWaqY3CePShwq2BG4KodaMfqoANNiQxfwpZonvGUVmMCJ7QonnRocCLSjkKjALxTr6tdPS9fRDSN",
  "key16": "5asqH4xzkij3KSJBhVqaPT1Naxwza3ovj717SRpfBxoRYqBRmwuEkHdJLZqMs7PQCCwoH6cixuLTmt1m9nz42CVX",
  "key17": "2vp2yGg5pyuWfKmGqo6bXcoVe88sWAyTFoxLKUevKw2bgmPF1kW6MP4o8nNnGBxNdEgyvZHheQFPxKzBYnMnTKED",
  "key18": "5fd4Xg6EMpzZ7rkonXdPhuhr2TLijhYcTgGEdBRmCSv38991MysDoPJCdcFvp65wCWrkBirmoMyomWujCXXSnAnS",
  "key19": "R7VemHwcC2Hc1f3Bo2dLzMqcxN8kSYMJ5ChmBwc7komcZ728KUhRPmhwZfwMJcLTx5PrPa1eHfAX6rrCrKoPgq4",
  "key20": "3TKUwx3ZJfXErmUt6srP3cR4kZKL6WnzRpDNwXWqwoMgHD6FkG2ubPDG7MUoPEHALCoEjCZgHwL5J2zU6LQRJqLK",
  "key21": "3ymQehSeAhtsKjztP6Zt675sTobAq9QMWZZc5JrNXU1Bvghn8BT31UN5PTBzG4DhArCDA7Bd7BKUU49oRruFEQxS",
  "key22": "2tmipG3qrq5gKSGvKxKpTrZX2YivHhBLwJJ27PW1d4QrxamYAyc52MXtxoukHWY9FTEbHSWHLs3K9jXfprERGXL",
  "key23": "4bxfcsFmtgatKTrXhefXWza8m9EVHrXK8qnYN7WPesJhMgD5dijPUwNar8YYdYTfbXSBjntfzR2cYrBcJ9a5nKVB",
  "key24": "3HYBC7kRMp6E43NzhQTVw6Z2QJBYTZa7GYuaFVDZEPdcGzE1zvFJkW3aS4XkMMSU9pEE8g7RXKumQiXPUsUTUgxJ",
  "key25": "3FCwojnY8w7RzvZnr8fjdMyEiHJ7pknLJowJP85xnzWMvAEJ7k2Ls4eSj6AsNidyxBCukj2NYCH4oH2B26Pnr46f",
  "key26": "5i37EKQhNhAMLZThFh9Ncjnz8Nr4w88HpZKhF56nGxmbpBvmcA497wyaJUyMqnaxtzHnFPdb4BaYyKFkT9JKcMrP",
  "key27": "2XXWE5pFxW7pqLXKSTc4arZFPziXZm4PwLsgRTshk7BJtsZJLg62bBgM3ZaoSrArJVgCxHxApcqQby3HvvducLPm",
  "key28": "hhTQtvdYE2prMPigMqQ86quiDZhR9BLEZBtA4godqCuC2Ep6qXqBNnufzry1wQTMekTpeVAxj2njwoHkwoULdsY",
  "key29": "5tu7UV8JQ8UuizL8eXoAVjsVrDxVb8Du9ZmfnFCL2eRnHQQeyCk1q7PbZGfWKVXu1FengUd9WGcHcL4mZ2RCUA4w",
  "key30": "123WkPod2b6oGwJ9Ax8GaB317cDXi1uYXZ7WERwthMvv7LF7rK5xK8sJwmRygJ6kwfJyL55UZ5aC7aqujp3cCRSC",
  "key31": "4HAi14UpfBveLCSKcqiWsZ9gr7BtrfY13hyKbyUXpVzx5MvoNmf4jhoMmwyrYMbfsQQvXVw9qVDzeUamiZxEarkt",
  "key32": "39kSaGMW5qYQFoCDa9ZGRwDhqraApZrY1gxkq69tGNFiDdkCRkjBf29AFDf6vyaJfXk8CcmrYK64dHKwm3BBH6TY",
  "key33": "3kfAHBpss4EJNvW4Y1ZxMysryMr78be8xRTRXiHDSyXdw6YJGBzaUB8VtnGKWgH3ci61ZxcTLQ8YP6z2BfH6Tkho",
  "key34": "4Z8HNGSovs7pBCUymkr6NB1po4A7ipWKUoZAbLBjNvE5kkGg9h7kVXGPwHRkeqqzSHqCYaNCkcuzQ2nNN3h6DKVu",
  "key35": "5nAQaquEMwwe6UX37qHSso3JGtjy1jjYpvPwcPYP1EMC1dKjFNi12mvz2cq4cPAGB6CYJTaMawasG1A3qk6uCQUB",
  "key36": "2CUNwZx81fWmZ5q4UsrAJ8T63UkZUmRcaSyEEZGpmgYABA6BpgBoqM9ma3xTRrovNWTgNyNpyex4AhY9y7dMfCSv",
  "key37": "3WK4KTfMLLQrMPvMDRzi3wNEyCtDumeurEaSpkZ8UgKVtjzfziR8UiYNNwKjkWErLD9ED9imbjXnGvzrwgM1niCd",
  "key38": "3bw9rSqo2vfV1YEm1fm4tC6gWwbv2wYquLMLBzbvBZsmtaAYjsnYaHYaYUiDfm7eMvD9edhUTRBjdDkyZHQqz655",
  "key39": "3ZrySqxzi445qXYDNNPVe3FKBR5TapXfJDTDqU9ABUj5dY98nhrSvxjidteEqnwDK4drm1gs29Kv4hrHEF6Te2oS",
  "key40": "KXhGjRoHRVSJ9xKvVie3882FViWWNG2o929VJ4yvLFyvoL5oTwxEhGcdpt41pF9wfmtjjmec3wVmEvLZLhrdhcp",
  "key41": "2iJTDwoNm2H6NfRNd6ivWcfJKvWBpoT5zQKC5uaDPR6HVaz3rkzaSPA4LAeEq6F8vj6RBy57HkT88WjiMyUBpZse",
  "key42": "3JzKyAiukaayDzCbj3Z6QbvgaZ7TEtVSLywiMnuwQLCiLnzccy3pqwsZgxULaD5Pvuk2RMf8MrDRRZmWUJEYNVwd",
  "key43": "5cCTR3LvzNvRk4iTyZ3ww8ykSBxLiCQNXcaaSDsuuAHBqhkms47HMbito2mua9AgLo1wXfF2AFcsDJZdrRf4SoT",
  "key44": "5XxeNmoqCsi7BG9x4WnmT4kQSxG6bct7X1RQXPcFBaWSa5jyHbjHz8aNqS7DZ3hHmiUf2PX6uSnyDTR6tgm1Y7yB",
  "key45": "3YvzE4TxCrFcPZuWoybMgVnJhPCKqE5cW1EQdAvJokMPfkao6wDjB72VjQ3hc4K3jv74Aag5dfzG64hHNjfGWeXU",
  "key46": "23bnHnFLPv5N6w5y6ptjjR2Nh16ZHHD1xpd1rYKXDbgetsn6nFDJ8YPTa1MEY67N1NX5UKKrQe1v6LP5tJZFJv3n",
  "key47": "2xDP9KWvXHDjnUxSnA7pp4oWYtTXs9Fyx1ZuYiXHo9Baj3vy238GaWu8jcxDpzqbJqjUMaFAmRb9tT1mmqUuF6rm",
  "key48": "eBMbqGzR8bvMWSr9HTqZA14XidiSrEqzb5q9WVpNPAR55iotrTdtrE3HqJVJWFLFTKnQzVm5SeTvn8ZMif8V8Pw"
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
