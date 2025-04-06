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
    "mqMkDLG86SaKD2y25G5h8E4QNxNiBAqrrLnFybK3ohwEwY9iJVQbEJdVtCDJgbwxpWWBmSJ6mhfaXFrrWij896g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y9RnJvMAQuBatxjFVEsZvjMbWUPPaGHk4tcFrsbcep8wVEGNGJ57qxWxxwxszUtB9nQR6bovQe7WH86amFW4uGw",
  "key1": "9ReA6qkzWCqyNRnvgHqUL7j9KQNd6dNfn4sZbhhyFTPXXjAgP2TtfD6LfBteCSPpvLdQXwRAgZaXXvmh7JSpWdt",
  "key2": "5ezqVBUKmBWtzzPZ43r9a8T7n8ZCQGcZGTcTFWTYVYyNvoyDCjjkZqhbFSKyZTYh3ewXk9twRjByn3XftzdoZzFi",
  "key3": "2CvkhoA6DSBAK4SjVVzZ4DNkSaNRTbyW3HX4yeAz74ksipbw8WN9VxZUbPQY731wz4mWYwwTSrvPc7rMTqxQRK7s",
  "key4": "Sjx67yT635sAtC5us44ambrdvrwKLuyrUPvYaEfF9WbehNygktdChR5P3jgsBtQY5MmWLX1oJBuaqGFHio6LvpX",
  "key5": "5MvKojV2ZW8Kvzwe7KYVAfk3jA8vXLPHsMzshob1PGWU2sVuzMsqTkHkqSVmQiPzejbdVyBxCEyqouFMdMLjoxtk",
  "key6": "1X8qnpkA2R3SjRHwmq8VZ4KUFiJVdqw5Di3McQrdDNq54mdWdQaoR1ywVtNEvmEsCcSmqxXutuoZv3VH8gUCS8U",
  "key7": "5bUzuFDbVcNUTZcnZtzsDB43wGRuJhv5qG8fFBP87yqh5bM745LaE2AVwLqktq7bs2ucp7fKSU9zHgBD4BmdAT6Z",
  "key8": "5KY7LYKBke7nE1K9ju8N1k7edfo6mr5aaofdNCjc2rRdaVexhZRgCWdgkL1q9LVf1i7TmkU5nY5efP8eftEYBxhn",
  "key9": "5ATH6s5JH2bZ4xg4Ht21hkapoaci7CTW7b5vh8rKW1nRnGWaptFVX8GGejP1cVtJbv3LR75VUYYigzib9w9NyEYn",
  "key10": "4SqkPBB3MjGxUvXkdQQUGkX24vJFqd3wnbaRxgSCB2YxGhza25SMhbEAqprxZaYqBig8q67DjsECFLu44Eu1dR6c",
  "key11": "52wykxXvjirqnDgnA3ufQd4KYgL6tv62A1vZQVdke8vFicjFQo7crH6U8RNrarWmN9JhCQaeQW3dvSJ75JR3Ee7D",
  "key12": "f9G4eNd2fRPzrzATxsawkG1wERpehkvg1tHvjdQ23KW2TRWmr7bojfneZ7eobLfZfgWp2cCrRApvSTqMkJNvdUE",
  "key13": "2nj3W9ertKPBLhxi8PQLy3pb8hyLtr6KWHpBPZEbktGAYpmLTVRKeTj2TTyqfs3dYgbwQZTEwMKHLrUEgahq1yLp",
  "key14": "MXWo7R7qoujvTFX1WuU2KTpGjViWZnUsF5zzvbHeyhZNrxSzKnuKCywNG4hExV86qCwbK8uskZE9aHj1TAu5Cqm",
  "key15": "45prCTeWg6hP6np83R8ZnaeJXSKjXh2bPsCDUUdmV2bZXbNPzP3WqeB2X9ba64pvnWbGNnh3umDcTLvT5Cgsc7rj",
  "key16": "JDid2NdVvFMxYbVh4PBy1i7QES6cqUbd9xAKF8dxFDW6YnxLwP5yconPVraerZoPW26mXfGRhL8rxiHXHfcLtBx",
  "key17": "iS1wx9mBoQ3LkdZNJZ7PXSYw5q85QPELGCsRgPcerDRJc79Sc59WxdD4VauHEKg55CC8WLMDGcLL1VMDnpE8R3W",
  "key18": "2Au8pxB6LzvNpby3Rk3jzyEokSsVv5eDVnbDDG8aCBbn6ZR9gZjuX6mXGGHcanFp5fsVJwXCPD1pnUpVV66wFBzS",
  "key19": "4efnucUrawYpdZ44ED1eUsHTJMpKQFfi8k1RZWkeMn2L7bZ6Sn6eu8Rz82No2iKKTHaBY7QreVKYWDBB28eap3kF",
  "key20": "5zbE4Z2Z2Fv1n8hbu6EdphpRFQfWCvjh3QR6D1JYbXdksX4gPV3oT2FcoTxRuSUEn3DJSxEn37hBT1ZS4TVfiq6n",
  "key21": "2yuHD8BttC3Gt6H4ozSEU3Zk6UmVxxmMW6Ldxbs8ZeDfCHxh89ChJePKwN1pdRbzeJi24EPRpk7s4cGqz8Sct1hX",
  "key22": "2sCo5EfboCxXSQAimmDSyvMKmNANpwA81LoeFbixxjCNRFS7mpNqFaHGxMd5AnUpCSLCha434Wb6gyaQ8iMGhqNT",
  "key23": "YHv1KgJeS6ntbQ5RA8iPUZBXqPAozeKaWCkRyUv1pYHEXVsAuAENMwKRi36jWQ5Bas9n12c3G4NPkwB2zN3Nc6v",
  "key24": "4J97f7dcuGKdhL2qXbmZpYr74Qhg983AcpZtJbbztTBgZtCFgT48o5prFJhTAKHLfCKXVznLP1voWtxxVv4U57Sh",
  "key25": "7fDdo2w6xbUtQms9mCKuDQwToEkXk3e81YR3BHpXZC3KfdGrWCpw9K5ZxyavpHycj4vQeuP5eRGFHFmXRwGrPKL",
  "key26": "294WjGjNSbHr7XsMY38ShnAW6wANT3cgPjGvD8vnJ9KpJSZSXcVX2UnU2SreGm6jhFfugFzGFKc8b1Sh87Kz6wsc",
  "key27": "5dF5i8x7EmuMKfuGeVkYxUwbKuaEWcztTdt87h9tVfdvYB9CyS3h6s2E2z5EJAL3ewmEEMMze99xKeLSwwCUoHqi",
  "key28": "hqC1ed2uRTzdvNeiqRpDUBoKZXEfFtavS5wjsh1EYqyc8nehYAGjaBXhPhxL8r5TyPFYk9rCadtnciyum1CWNmb",
  "key29": "tCu8ykQ16qLrSd9pnQegUuLpwUZfmUcgsaDNwARtBV3KAqWXe5ciscyPsTZs6wi3KQ6g5JWZZjFgp3T73z4EpUx",
  "key30": "3DdpqQGvNawrjBoN4L56PoKi98S4AYaxUcWQphckUmTbxK9Erj2REphzBjdJxFcnVfDi3KEQiqvWYXLZGLnqi2aH",
  "key31": "2u2Ujv6g1n5ffbPqv3FbEecprJ2K67fcMHnuxbeuwW3AbEZu2ZpiToJoynM1x5hnPtXV5sspQRycoHXFRVZQWKnt",
  "key32": "3phFzMYUriza6T1BTnbPs6zDhxBvTUaHBiX1wqiNymfq86JjLnq7dW5ry7YKA313TeK3VyHzQVJEAaJE5oJenH8L",
  "key33": "wgEcjYS6VVXrWyjXXwmKKiPnK7NtNsuenX6YonEYBYVCwCum9oKFjd7i1XiyunwtT5e6XocJGUkTTJqDGnw14uV",
  "key34": "2VumSdxLXu3kAgwCxHaSFw1mXtkccrSCkcTBPTjgMpKJP2MRQWGnsvzacQqnoRZTVsu1TzAtU6ZYtZeeLWPCxq8F",
  "key35": "4wHs79ftkFzdC35pt7BJUE7bmqHmsFWtB1VVV9xSjV8LQQ4JqeT7qC5qLGLQzKg8kqnmTN9frWHzUJi1n8SrqYQj",
  "key36": "5YSKBYmQR4ziriUcCKxaV3HuxBeiZkwhG1QvZwhecU7qtY13kkwqUuyqwF9L47cRgfStP8FJa154dg7apc1J9Pjx",
  "key37": "RDiXQ9wzeDi8PBm84QTVgq1aYYY53KzbpGJvD7qtorU89HVE9sLCJkSPYQXcCLh84zsApDMWzS3xqEsxE13Px5E",
  "key38": "3xR153p2wKUnGAztnaNhuGHGNJLFGGzrz7EUAsJxScm9uDYBsdtizWtdmcst5Jbpd5N7HoumXwBf1ApfsC43ZH1A"
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
