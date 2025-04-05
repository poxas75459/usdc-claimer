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
    "34QLjhjkbAm6EAxMrH3AuBwXg45aZrsE75E19vSFdBzxN7ULpSY6G1sQtGf4zPJijGhVoHTafB4GdDnUh4wAbQPH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VC87ujMCp5QZ6bxkeT8c9hNSMPereYTEN9m492cnCDALjJjLbQALbjMtb8M1nHM1gigL9cAZzHZ7iW7bK4KD18T",
  "key1": "57pCandxgHXaMrjGyvLavy1WJEZBKPEi5go8KJwCFAhNz8ETKEPwPw2ZQYKAdmBoqV5i8jsTnexfLQMLQMNVRpAN",
  "key2": "3YaFtABT8XqEnipSJnMuWV75KvPvbTWp4w6AUsVGLJsxMA61dDhRq7rwG5LbfgDghXfMJZQSZzpNViqgVGTN9EBk",
  "key3": "57F94xLmDdzGCmjxrT2tZCXQfKNBMFVf4ZU8etXRGFe2QQ1YanVke5soGUffLKAGffPpf72Gxb6eAaFtPX6ofTVr",
  "key4": "21zoKokDRSA89G8FH6K4h6FH9sVShcGEuwke8gtCePATs9FpSs6aAcDgZGkvrXUTYdneunaKZ53WhKKoaPKSTmgS",
  "key5": "5MdchirjoewwqWfc5Zq8baMn1hSRNcP1M5M9fokdpMGhpYwEQJPTzKEuwfNz4XYKA1f7GUAHiNA8fWkrSfsWzT2Q",
  "key6": "4iPAPAP5JXYnxa4XxCof6VK6JAokYkEte4vhq1QHYj3Gpq1QD1ADEKLioKmLrMs1sb4eDVJwhmvsMvCMc4RYAtn",
  "key7": "3z2e4r28DyUyXoWJ4cyMv2y567YgQHSsMVrvddJnWQcXK5Vsw4X64TxTDVUkiqrPZVQyZJ6JNfMR7mQHQnHvNUob",
  "key8": "47bibkm3aERE9aQPPMrzhTSRh6obGFV3zLiNGvLQnvw5mL5TVRe68iBcwFc2sSApCGmsdAf1oCVXiE8Rxrx9j9Kf",
  "key9": "ebhfMZDsJ8rzE3pdJEn6mNs4py4tUiQ6kXNLzZBNHHwByKUcBb9vtwunTtKZLnR1wHLPzt8XjiRNbv6KAJey3b9",
  "key10": "3VYwedfKn4H81vv9eJS3g9UGek4omi9opEvJ69UXY6iYyeFS3MSeR2z9f32nBhMMskUhkNgnY9vswiZZMxkcfay1",
  "key11": "34NXNfuCyqRmSd2akSMJXZzTmXu3JTamiHj2754K53C5LaQBdPmQZj6fgGGgHvELzHJ3mUMozn9mV8BpB5BSwWYi",
  "key12": "4toWB67atCSSaupp9fHLnUHasW8FNny4FaaxT5aruffi1GtrpaK2gaedboSGtLEyHvqFAQYP8FU6jMqMNEDoKuqo",
  "key13": "vGC9TUAUD9URtkcoG9FqG3F2mBNfAjhEU2JMr8pFyeEGysFvmo5hGHk2KeATKp7nUJm7LFQAnLaZfDHyWEdjcvU",
  "key14": "5pMQYat2EtcugniApu71WuGydgZwbyfb7wv8Y1nopMAqNzibpB6ZxTUUQEkXjrj6jV8HMv2HTrB5Jrx9HXsgrDTh",
  "key15": "4Y8xtmh9xvH9gaFzwBAJUCiAC5arbx5fW5ZVBeeqrwHQr5BASxNdwAqDz2ryrcDHoR55HPGQ1jJrBRe9eCTnZtcd",
  "key16": "3iT6iSDZrYbiBUdGLYZbDLCR3EDsWwyMTyrBvTQtmFiggZNRC61vQTb5xn9caHqsXYH52FTu1Aj8oogChL24aKeN",
  "key17": "5jPeMbb3T9MNsyJuFyXhauXKX1yAkUMimJPWjpYGjTyJfzdvoJUbVHeMP48zNQWEtfvnMLNWvia6Hxs8xkvCfJyh",
  "key18": "2cYYY62Aocz6cJuPbvACmVsNNtHAyDTGSCZxf7ENLUqhCunUktHKuLmbSrLCi8CkZk8hCxqmKAao3M4uX75pe4vx",
  "key19": "5jEEvJWQdMyRyKGUrFzNkdSgAEhD9ADkzarYiV52u1BGr2LW9DDtkB2igEN5mQ6GeWYeqL7tYoLt58zgehhsDcUb",
  "key20": "8g3dj9E1CDQqLmBXviudEBD3hHw9oofodQ389ULM92BcowfFtzwuZvooiMi7U68acQcdvMxWjV2bbkby7Dd5kon",
  "key21": "41ywNEtABcuV52xcgrcvx1HYtAvwb7DnVmaCMbY8Gk9prtnEZSkrUA6bE72bnkAqymbTjvrfkKFAZ14CaarhnaSz",
  "key22": "5suJsCVMcfzAMoLGgdUwr2gKydgWF9VZptr6vE7NS3H66nSyzgY2MFjhKJtg3yisr8pYWVyHGyDSAsN8XakeqKa7",
  "key23": "3nriFtNCmMTxwMYPyTE5mPpLB4X9eD9ufMg1LLXS9TK6Piz7jiaADEey5ShQ3Vzm1VHuJkLN35zjzvhKZVBFHxsK",
  "key24": "SJFEnrwxEcuPZ7ibxauAjZwJKJLq2dfdwLxK7nK4tp3c7XaXx15X24XWQ5FhEXuKHBwgWuau46PsyTZE5PKyZ6g",
  "key25": "GL6bBWNBVPVXcKRJdr4KSkMzV5jFDbsMzjjsMNijXRzcHV6j51xQTmbyVN2assEQdgnv58cAUthEvUd98gfaiM8",
  "key26": "5Nm2iUL132LncepdpfvmHXPw8cKSjLFvWUmiMrjCkPR8CNzbBzVZnd6d51kBQZuxYhyYZALwvuW5tjRp6MxucUJU",
  "key27": "4WCyMXLAWXMJerRiR5spP7YVQemiPc6f5hPRdkGmf93hWETadbSJnUujUXMhTMFQoJmQWuvsUjQYTHHdYd42FoRx",
  "key28": "2JdiJVpuRF4HvdeHMVevPCBqRcVsvNWiUjQmqeWT6KcDyucuEz2nK98dNtDRNKsp9RDNBAS6rRqvEygvsJBVPSKU",
  "key29": "4my2ftH5BVMQfR789TSPk6W18d1ASMCptz5mvexK8d8BQ31XBLZMs2vb5xTejRfyoJtRsTjhGNAazMTmKR6xvLTZ",
  "key30": "3mx2qosxSEgibagGKo8mjhtjdcN6CSexqsKuCr1W8NQmZ8zsfV657hFf8wGvRhEXU53dS3To3CFjTu4tbgC8vgm6",
  "key31": "28ZJziuoyLd8H7QMyjTg2mkjgAgxiq4KFhoPTYzGLCFr7StEkLs43P6HzhSjev4rYVMxuJUoZJ7TccC3j3PvrGeX",
  "key32": "351h6MdB5PwUxBc8GXnVmEMCWbaAwnPkaiuVyYL45mafff7hi66pZTWnmonM2MYhNsVqUE2DCnHqHMSU63XuD2zn",
  "key33": "4A4M47vZigc3T2kKHqEo93tCmUvitDkGZt2BftX4ff6LwcjGD7t9sBPrXUer3m9kqo4V22ueeBDUXbjEh1sh4CUz",
  "key34": "25XnChsKJeg6eLfkr9fU8ENUr5fHKn73ssXLvucEyDub1WJXvfxfs2gtVvuZGtwagQP517k5wrXBuS7h9GoDSopa",
  "key35": "2xzoAbak9LaadWwGapZYiXCheKy7yts3xCCd8BabNF1vSQ7CzkiVcG59QLEPP7yPcbH4tdT4hjoSor4DUsQk4cEa",
  "key36": "73qq5qdwLwtHmZ4E3cmLQji5edSSz7GQANmwthktrH2JC3QZgsmunpARrYC4R5Arh7bbkeJKLpBtJ8SLZT8bhAG",
  "key37": "5pXAQtu7DiTd4mDtyAKpM9MrrXLyM7DAUKZ5bQ8LUkrSQmZFbnKPRHJxuLSoSnHWHgVSZE3NjBiuTFpxM8ZSgdr8",
  "key38": "5W83t9h6sFy4HxhCuVd3dw7iJ4cCA7L5YjgiMT4KwYWQmoAc7MEGDrQ7znJ4y8RBf7z9WBwsHui46DbZq19ZhZ6a",
  "key39": "3Wma7bNaPBxAR51MBEWYLo4P4fzKFwGFq6CNpNC25WxWAfR9QoKALe6658DRnYrvoJKEFmaRppyV1xGBzse91PDf",
  "key40": "jTvnJ1hHP3VXaAitt8SQfudwY8s6DZLxkDZD3hBF41hSQFh5hUvEtroQ6WnwsSgCmmmWWTSZXHiQBXDUEq5Lc17",
  "key41": "5iaoU9f7Mk8XqcNJGYLQrwX22b4Xk1ZiphvJijr9DRSyT9QbRRMrHRcycJ8YNUm19ETTQ82vLQw9yGm1neBU1TAX",
  "key42": "3p3jxk4CuDwbU6mgXGzbj3Z7KEHTSiCSkjDkfnKMot9MkJfJWWSU1Su5gwEoadbH9sSYYMbcGEykm5eZ1DDyWCXx",
  "key43": "62BjEdrftWwvuDdJ6AmPvQhv6shQARdH6kekrp6CHayG8zXhhNDBbrbcPwovW1ewLstgZkDGPeKreSARWcQgguur",
  "key44": "4FRBB7sEQgDTpwHcaPaPYktzTaPUHTdnScLe5B9qDXW5K5Zt8AjeX8fJacq98EXd8Z48qnN25dsHjvkFfmd1cHKK"
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
