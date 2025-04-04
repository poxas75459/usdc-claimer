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
    "oEmqfmfsvEtGVvLeVeAB1wvthCCuJj5aTo7ePnmzJgfK1dPMyuGhZbJtSTdvcKA78SGdPWnoTrBvyr9MQcRfm6K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BD3toxtiWBRsMQoDwJifJV9BPDYg1es6VT5K5ioYwYyCooFEXvLcWKrvhADHpUzsamyqKougW1jhYeE7fBciv6F",
  "key1": "3RAdLDMK4MbGZQMgJnhbgMaQq3fthTBxLjcBfgs1rmjG3QPX2yBEZvb97umHfb4mEuV4xNDYNCMwmQmAUyDdAnsY",
  "key2": "3cpCJjS3F3wcefSrbAphnH7aZdmpNhJhdJAKAAaRM9jorBu6yWgRsvPvvMJqh4BsZVyrt7pzWCcFo3RW9Y16BssR",
  "key3": "61s9sEt6rGknob2bcZzuiERvGLCw5SYzSbFi6jyPuoie6nLUUbp1NESKgGkzXseiqFPS68t1bn74AaX7PT6cX551",
  "key4": "4A53RGcL5hJoiTuEp1GBKnJYbPW5beZJXdDGB9xDQUcHtMKwsismd8XqcLRordZirs2xckqjFrLzNxfV981se4Zs",
  "key5": "ZKM4wbCVFEMhe4o3Arghfat4s2CBFXvQkTr9VuqGmL4nCnnG5UZX8sJh7TL2j69nUtHtuoBrt6KBp5ETbQEdhWU",
  "key6": "4ifvKZpGcWvSrBaxDEnDAtofyXmWF9eC3jCgL2JtfiTh1NpwgXufYWproHaS8jB9vTv3nvS9Z9PfsbbwdQBxRvam",
  "key7": "5mi3gda7G3VKuww6SpPMRPrLacQJvijQXtz6nKSNzaob2tZV9GXVAgJHySpQ1t3ag9HRXkpdYaYepgJBSbbHYZPD",
  "key8": "5KFxNabbm9bXDM8iQH6uYngJaTaze6ZheCmjtVFnVihGPL8z1JwkAXpo9ywvmMLTgFrAhBpaWNcCRMncFvRwaB7N",
  "key9": "3FrzPvTM4dostahYqqDkLgs7GY4UNNh91no1pYGCmme8oWvL17ohsyhuT6mAZ24ZxFcv96odNqc8QcnRiR5wGBZB",
  "key10": "4H374EasqErK3yfLARLUJLnymLagr7Wu9tEaeBkEP75AoMn8Uxd9hd3dq87MKa43KPc91g1JTnqUdbDpcs7bXyZu",
  "key11": "3KrDSq5qLr1LUAsV64v2xSuNcNvMquUadrA68Y6zpFxxJwHu6o11V5BoazkSzt4s2maHX8gWpXwVTYmaqR62TGT8",
  "key12": "3S8p55oBrE9fzBcmaoNnKD3b4zzcRy3zA7pH1v3H76CM87gEmeEgX3BuMUMv75KBZ73HshphSTDh4yco1uN2S4qF",
  "key13": "5jFvZK8K2UvHoHZGGMQmT247TYpqbdhkLt8zHXPVxMb7ocxA3PG4s2Aujf2xkXxGaKZDhkuq1ti6WgVwm5EzocwA",
  "key14": "58uNpcx23LXiYQW79FgF4VLMybs3Ev7wfwFVbd8ekF9FJ6JtESZVGXQuQBezJDrgQeFKqCXaMGC8iZbx4EU1Cf38",
  "key15": "aTLeMofcgre5TsRKXGppf9N3MfCu4w3bkJn4bDWwmhfj9h3MrPm1geYFKga2hrzWe5PZv2iQiUCwFoWF64sU6vh",
  "key16": "5nN3ZrNmGTJJG6gmfHptojzVTfSUZnKfDNBcvjpnMiuEiEs8Pb8bW3d8Kaucv5n2V7dwvjiJAanX1z6hzP178TK8",
  "key17": "4cWhziqdiMV7Bj5Lf6BUNAzJa8gCxHEDjAvAC7E7xGxjLtscta3Q8zUyXF9ejW4k5pdYxW7qZsN8oyJhWQp2CnWG",
  "key18": "3nRpHJe2kfswfemGW2MZDLgmozJKxcmsF7s4uHXvw6YcyorFj8Ge2qPiQshzKcS4sReu2zjEqNdXy6M2wHMqCUem",
  "key19": "3UbDi8ZcS8QB2QwbAdJ1RhrVXgrRkVRZiL4BdaaChcvb8erLUVzipdwfWkM2un3EJ4p2ryMksoAZGhRKTjTHe69N",
  "key20": "5jE2xt44S7eR9NLaGwwuzEwjbbwzfDfQ5WGFLfoofF2P4H8osP7FZ72KH9s4V32GsYfTRaVbYQS52Bk5ax9xZdeN",
  "key21": "3EHS5JbwN5UpNb9dSwnuPL7wykBYCAjA9smV1TPacKVRd7qMuJiz72AMTq5rbXf6LngU6SDKdXpHpwcTS3sSgngH",
  "key22": "393PzZMPRAQxYvQsh2MrF2nYiTDSczkUGd9AS5xxykd7E74zDksSthVm9paDv9Ba1kbqHN9qaATz4VsWZSBi1KyC",
  "key23": "ccgfPQtrtVRV6zTCSMMeoMYM1uZxFRkad1cknvwxcRQhSQrbqApBzsPcMuWwFg3o6YgVCakPoQmLC7ktWfA915r",
  "key24": "42vC3FUx9WZiUp3NQRLEyUfYs3DwTqFJo5pd3xu6SZDqU7nBfnd8RmzNV8PFCPYq19bKQiai8TKbV8zeGLQH9eLG",
  "key25": "4UjsDMmzrusdMQPUBnSkJYLCb8iua2A32LPQ6tYaErtX7FZAnnFCAoR2mZpiJKrRw73MErEQ5QRPnbMkKoMPXDX3",
  "key26": "44545WB2CK3MBsnYTrUxfWkCf9sVbnJW3ctX4PhuTvFsH94GzZkYoNx8xuPT4wnWoga8fz27KEc8aQQ7osR4jJ5y",
  "key27": "dZUzkVpU1u1Hr2zsgoCv855AVVtQhoFrAXjV89Xq3EwzLHAuqWJL7E9R7qKc6AHzo6nvViFtzRexgkPmonexTvq",
  "key28": "4oDhDPgAsFQH3gHFyZzrwjNyuRSfZpnk6BZkWyis6USmKWLkbMgktiDwuYowqEFrvPQ43wwHk51qU5u6VyRVyzz2",
  "key29": "3kFzjxJKxjVFneMsPQyj6rMWgr5Zi8JX5TppB7KjkxLe21jc9jRiigwRYcSf8fK54m9ZZLPUV2qCYzHZeHN8ASy6",
  "key30": "4xCfzpGdQb4x1gf3xFShb2J4NQ2HM94BMsVDZJgoUozLBqz3FQ4p1FZrVm9UTurs8aVF2kQU38eaBpcenv1nv9ZV",
  "key31": "hPzaowzYPbXfdMfoy5FGKrwjdhyFDu27ZvRkCrRbmtrz5HHCsNodq3s3tPPLCQYYACDAyaD5P63EWo2FPoRxFNN",
  "key32": "zZyexTZuxt62EN3bcSbhNQYt5id5CuVoBucbzzfMxjhVmq2wzFvtyKfAXtN7X5i6PqchNZNXj6ueAKTdMtx9n4E",
  "key33": "4DYzRJoANmuqFhF678vQgS28ZRvE9ZoWudijX9jUqbfr4a9qXXCRHogRYaAh4NuN4x2HRnneURUgSkWDT3gz5rKY",
  "key34": "56orDU6ZRwxYHYZE2LjLW6jSh5mMkg6bp9LmY5G2d4YpgQJgBnmYMjnyh21qQYZRo2KgyRBqMFok41pi7DneDW45",
  "key35": "2D84jC98FCm65LvVNxvrxY129gAgmLaTaXPdjXNzxXAUz1jZC1BPk7GUyWD1VYnzxaHoaAbR5Wz9rqwK5Lkfaa6h",
  "key36": "5GydHxYHvVD6rtwi6PSCiqhvWbYMrE4GbeBSNcC1Ug2y3Uc7wGzne5Ub5Ym581bgPk7S3zC3VsrPeaSez9YzWcZL",
  "key37": "3yEGbirNDfLEP6mXRhQecUmiNAchvzVNFiD5MQ7WqD99QpRKMTqdvRBLeAuxBuLjF4v296vNtwm5xXRFXUfhCP2v",
  "key38": "4jrC56Ytoqb4yzFTLYNMjqvSGDbSBbFpZiw21AJiv9ZG1V18MCoNdPwWsmKGr766Ri9F1cHfMd9ehvuw6GhV3AKA",
  "key39": "5yGuq31swDuTU5SPbR4u54WAvA8Us5HVKn2L4HyyX9ZekeApUtLnpBQZXzsUReKRKnB3Dvu2DfqRsgQvL1kdDkMu"
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
