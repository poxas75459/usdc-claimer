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
    "mN5AHFRYUpJUarPG2pH6cJ3QLiYEqUeaYEDwLbuZJfTLW1wuv2u3XdqW4f9Mcnn8KwazUUJ5D93MV74wSS4HeJY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qFZ96aVey5maGY3iFKYLRuj3pauzmMyED9pB2bjV8ZqduvKjVohwh2VjaRsheZ8MUSxomKWuBu7GYyRk2XQc3Pp",
  "key1": "3dCSMk4SXEmjLvoP5GehcGy38f5gYsj1f3Eqe32VQjSasjkkFhCcdpsK9snQFuVkV5F3535fYDBHyFBHznL5fybj",
  "key2": "5qYkDry4RYYm5FULvfHJRzmg4A39ChQQP2jKoeiEKF3PZRpKTDWNQXZHjVmcSpgWMjhgvPhxUGTLCgKJXE9M4iiq",
  "key3": "3h2JhLKPiVHhYcjL7kUBwfSy7Mz5x74b3rihAHJhe7e51gQgQpChXUStA1VYh2VqwKGMHbxF4RaJyoFdvNwDe26X",
  "key4": "5XMsQLk8AojnWyX4o8rqhYUKYav92N3ioHgry5mWf4BGM2YwQ91rzqgDBZQhoXi8mEtkcAoyZ8iUPseBnJ1FM9yx",
  "key5": "2K6tj9cWp2e3d7BgQPLSBYzoZBycdAngRWnhCvLdeciF82vopJNhYhJ2PsYYkpMcGfAa9gKvuLK4HF7awbmge6st",
  "key6": "2Vpe6UiCTcgPniKUncZqFDznu63GaeSb6fcLoiBx3Wb4ft9CAf57mfptrZHHZ86uh8h9EuCVWGpjF8bZnCN3qP7d",
  "key7": "2poMEXGLzFbktjy3qYWgppkBgj26C2A6nedhcfmV44Hkqmn5nXfqrL6Dr24uxnQBFXfgg5VWybqFoLMD9Mqd366Y",
  "key8": "7gYQTryK4VbRVWeWkHUUhKUhJNop29dpGpcy73yDNRq6JBNg9bKQam36nNqK5Rmdcxfr6mHU7jgxAp3TZNC3xsS",
  "key9": "4hHv7WfmqjiEHvjoGcqKQbAPPeGacbGBw88MbFs2rPUiCjwaQNjVsLKy3HGS9GJEpM1QfTHSPZsj9zR6tEq6qqAT",
  "key10": "4tQrUXEpMVPdj65u6XaSMfn17R5VDBF6fQSviwTH5km5FptHxxyTjZYu61BSANcCcCZcr3gQLxpMkQRZCh3mzFZ",
  "key11": "4sDSJbig8rPLrGeTUFHJoa8smgAfwDTmq4C1caEYLhifPzGMNfpLNPfxwaN8jdoNqUtBoJT6bEYijwrypukVhAyt",
  "key12": "4CEUhEP9TDk2Y8N5ZK198CssRsr9W9JES6j8Z13ENCxV7wJdSTwA6gp3UqWhMCrNAt4LRWpcPDRk7upVxfaF9M8e",
  "key13": "3D9cgLjjQwHnBhJGSx227epmVJxXBghTNGjByPVb4J7UHsHv8bGFdyCixN9kWfeGHdeC8wePGSEQr2NGj63MzQ6H",
  "key14": "3PMTUjtWJKGLzCrfjW1uKnxt1xHcxKxAqz8C9yWdcWZ5w4JALiwrRTyAXh4A1hUurMycjMFfyB6Ty3UWyZq1jKwj",
  "key15": "2FgvwfqqRitRUqHxcDRXkuRTdUGR6BAzVcsioqbWjLMR6PYxs3px9cBBQyEjoeXWabUB44QXVQ9K7MWSbhKFXSz9",
  "key16": "uhc3yUQxJ6Zci6UtzNEdKJnWG3KccyTZ9fueCnjRurjynzEVDQPkiGhDK4SRwueouByTiXcU44DVoArwbfkUJkk",
  "key17": "4TAswBz1mBYdGnJ4wDQ1AYDHPgtJeXnFPgeMcztXSAWRhcZANuGHU46jtgb3xvSQP8gpyFr5pXZnVYmXPH9MwDJj",
  "key18": "NgxkFpWuyUMBSe4sy6YAnhofc4pyvAUuZYoLYJ1onZsmbSTiGrcLagC1M2kaEHjXyNy6ana4Ke241mqZbsVKJrV",
  "key19": "KEVxoJLtiwjdvvNvbPd9wAL3oDnvgEdkgoFcQsL6aArpN4x7bdiKbPFaHgQZ2nRkfzotTT3QbxAjm5n5Smq7bPi",
  "key20": "2FtnBPEWZ7xGHkAFJSd996Dsp2DPcL8H9dXxYhT9cFyFmxfDsUqdscYMAMRY8TU8m8ndHmuohrukxjGK2SuevrG",
  "key21": "4bDXuTprSPRTGcYZoyYtCHAxfWZ1S32qgSmc4gMPLzMkZutFmaMkg1bKbdRoVTGJJ2EnxsEFxR93TvRXmnq76nou",
  "key22": "5yVoBhh49NDidUJXhZwF4fk5ENbYiv2bxDDcrJPSKkEuyixGTuLN6RybSLj67t5LUdSxngHHp8hNdyG7LoR3Jb9A",
  "key23": "A7F4b8XY1WsZCWApYnZDmr6tWdHBnXfP6FGzt7UTU2qfwT65eLSyUMWCSiCVyEFYV4VAQGFUGHkt5sqmLru9gaJ",
  "key24": "bvvBB8GXF2xg49zfgJiq1GHpMxdGXnP14tW2JVwhrQqHnM6iRRdjL3fSR9NUhu6umanXa6fUZzpf2tYeGqayCpZ",
  "key25": "2wJ2pq59Hr4KDd8Eyud8Nirbgb2AaB4XQC8MXWo15Avvnwq5t9fvbgcmn2uS88as8SZZ4aq6AtC1F3sDgFoBAsrw",
  "key26": "4sTvpfqGz67y8FsdLZSwzMMWYhryL9XiWjsN6nMqkiSvTJFHWz4uWGLFNJu2QKW2oKJ1NshssrwLzyPzGeWiVc9o",
  "key27": "3HAXQVEZ6U7mzM7kQQYWpijBTJajYqPztW37xEKiBXRQPBPj2vvtAToaRuAFuZUwJzMeZrqvU9u9vtr9KSUuofar",
  "key28": "3RkRHh7pb5gHR13GWL6FbtUH1pAg4qCMXjHQLuqpsncGsZgwrEmiVdb43y43KRzrA4YpMnUsEHDL1j3hbyajxjAG",
  "key29": "dLzb2mJHg727ixkquT4C2tiZydH9vnFppvUwi2vpCkkL7KU1Un8jNTS2uLgALWmh5VS67cRbYr5Ba8jHmYkA4hH",
  "key30": "5vD1CotJTZJ3WgyHi4aTpeAiwDGkCqo9AutzuUrawpqZJyKFcrSDV6Y1wjA3ykUA4KSzCUXTwrMhZ4z13jdbgvoa",
  "key31": "kWEdgxd8NkZ52kvkKY6VQof3Ru7qyBbuKrtSEjYqTfsE7xd6SbTaX6FEoqjzcfw3Crs5SwxFLEz8Uoioo3XSbFW",
  "key32": "24wRUmVNeokg14zdMhF3nVpHjEwaoD2yZ9poeigJHGTnpD7N8oXKQcAy1bsS1gzNJ6eHEeeB34kdi1nzNpF1oYoK",
  "key33": "24qgJpc2yhof3ZLbiWTHCJ73V8mxiY8aKvfDYvVfrzc7gJSYQzDuRp2xc9eagdaNFdCcfrusNsR6kqPwvfCrAd8J",
  "key34": "5Stqv7spiXGfSaG88CRWbHBqvvHM9xcBihYy7SUkc67HugcpNHPuxu8FbwyB3LUCBbHqc9jpvah4yCra29WmNTGU",
  "key35": "2uc9vxKZu2iUdrPgCN7BzfbdqrAr4XKBgcYPCegixFfK2NzqoQEPcfwTYqSu63amHycenX7b7Q9jqKUYgBwihgBg",
  "key36": "3XjtAhmpaYHNAGpYyoiVDuNNAZq2zB488yiJeskQ3tgq1VYPTShUCfFy7e2qe7keJhxLb9VBEUbZkCBE1L1a1XXd",
  "key37": "Sx5jbFZxCC82vxaW8tpfbJjDRoFD9HuQwapicgoiLiyVZKP5nC9n5KZLbvHFPg7VqxqZgHAjid5oFjQPvNMGXGY"
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
