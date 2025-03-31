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
    "3A3C6RgJMsnySTxrdmAfZGKR1ThnSUYsAPwxzifT4zAzah6J4fLGbdJbgQCxNEaE3Tu9fjJHD8UNT3wi9pnw15jX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29KXDRXGRgbKqJaP95YGg3GRr4FNXNczpknWXFwxJTqTi4Z2B5Bxk8gqx1ViNzmeRBkwL9g3GPjQ6nF1MQTob4XL",
  "key1": "5m6aZGtvmH7oTz7Q4QBoPWEwknjGFgBUJNwVNwAr2TrQ7rQ1JM4aw4uzsCdyakZ3uGxHUYpGhwocuokXrenPDW1S",
  "key2": "2B6mg19vX4kN7PWv16e8AxJhTpTt8HH4vWdEHgaCZBUeHGKHBJX9FkEDJqaRCkD6QveaUjkELANhcDXmTqQnut6V",
  "key3": "55NR56vPcjNeuUKNaBhrHiBG9cemwVHCwCHsQwctbm8nE9J7SDZdbnoKcvC4XiJYxJrPJBNGX2zz2iboC3URkW9x",
  "key4": "5zuBbpgPdgv7mUUS6xfnE3cUqAuwwrSJJd7jSPnijAJHNBec5Ar9QJqBXMQJ7dZBV98SNxH8qUZqjjxUrSicGSFv",
  "key5": "2NQ4kwG1V3tNSTTXgws76DEeWgqEqQH5NabgCXioSE7Yov9WHU1DU1xwJj42xN6XKPJu5GJYHG4oAjBKjuTr2kd5",
  "key6": "2ctnfiHXRZAczA6UCXa2MUNR8pU7nth2m8jyGTdk7TjidpeXvpCwhZju3hbV1kpNJckB8uoe7RWFNmWVH6JvsrNT",
  "key7": "4mVA4tAXE6kDVXpSmrJr3AqDSXap6Ve9bRWxpMTDnKbcFRBqdY151dNnYjxuAcJTq5f1CNAWJqsrUhojUBvHTpY1",
  "key8": "3YNbCtk2Ns3ApRk4EwwrNoBHT6TvXwUuUaMY4LHofP7QRTw2e2CS9ZxeECJiDkTqzXuG5tXFK7LyhfSQXy3buSZ4",
  "key9": "5VrQyZynm34WXATTYK65wtB7E1Tfx6FjKnJ7Qser4TYPW6sRmAcQ5Wvirv5T3s6oFfV8QcDzGJXKM4Ac1qC2YdsH",
  "key10": "5MQV12yhzcgCgHrLstnjQyRLeu8QiFaqja7YcCpDLy5qRXpYsAGZ8ZxSLcavDokqociE5w6gK4s9RSFb7C5e6Kn6",
  "key11": "5ShvMUjVaAvX6EXvoi1aYXyxM1BTzo3cGJs9XoMeAVigQDHPxyomLXKCCV7333tVVggGxg7okpLWfv5KXGKPhCTC",
  "key12": "3sUYhFS56cJCWcX1PExRreaMdgWmSi9zpVMWLHCLTTp6iTtPnWphdYxeYeUuLL336WPSVgSCDnJ8UnoxcvNcVvYg",
  "key13": "3BEi8E9biBr7jRrd4ESkFAZVrRrBHPomo2ToCAkpJSRu3LWKk3EXkgpW2m16GaDEjkzazarNh833FvYG2jJifxjA",
  "key14": "5CQBfpYbLhP2ftjJTjWbiqAhKTCvfaEWgu726pktpTwodkhqJoYu7uuJ93fcyuMd7AEj1MmoWyFhE1fHKWCLmpZR",
  "key15": "4qBKGTrqiL3ZKHGqURqGtpLt4A5x2Q1nkAYuqXCZQMxRfn1hKLeQQFMe3n6So6u7F2Kn9feJXCb2F2RV9bP12Xbx",
  "key16": "4Ht7QMAiCLZXJi1S9LwtJ5GP6Pq1tYt5k2NRUKEZ3Sgj5YDXYdvrtc9325VKzmRvhUrX7vhNeTXsjHaaUKBvmSJV",
  "key17": "2QUUpSruGVPU2GYyiRsbW3ctgJ5vWpFLGTKozQfXDZFJYkRPZFNkqWgZtkzXKfenp9cT3u6p91GCtJLtfWBXspWB",
  "key18": "5YW521GpJ1ALLUEj7hC5v4sqZjbKiYbthp8jFpBycx5NkZFheXVLQtdkJ1wFPanKobshWv3LxCxG7CaYi5NaEEvw",
  "key19": "HkqihxBrqQCTGJQLiXGDjjTrCEVGq3HGNHR9uNzvSQEdqkab73qY1MFDyZZCaLXd4Xp2tM7rnXysS9x1iS6pU86",
  "key20": "5aygAu5CTCvenDrfiXs8dHEC2dDzGSWnLCAPQid7yfvpxupvDmWEdiR2tPpVkbwSuP6MShdtEDUJtEyyUY6o1jFh",
  "key21": "64iYSr4dtRF7heqzbb1AndescXRo4ekVgMaSzwVwK91raqUdZVVpaVva7e3h23Pt7voWEw2twYHwN4jBZxqGeL4r",
  "key22": "4k1RFV7arsEeQutYUPSUtnvG5MjBU1s8UXNLh4fp6Jph8PXL9Uuyijkeg9GneKCk6BiHP8i2ozJmJohr9APpr7ga",
  "key23": "EiEUnRy2rMbymzLJri8jX91a3Lt2hHGBHFTtK1z1h1cmSCbiu8b6GkZbDS9vKsXeLpRFHmVyew8ppQ9rCGzVXkF",
  "key24": "dqsLVY8jRc4aaCf7bU18piDwnm3xFQdnzhrJkn8hAwfKbdTF2355Yqdsw4k8tYx82ZJq7X4GKb4jfd1Dgi5n8SZ",
  "key25": "2iK7JZfbTpU9qjgK5bEQiC8nU8cKyLaFZjUCdAstiYh77SxKTdM2W6Kj7jBVwbfnd3uiWs4oumq5EuuF9zMqUCt3",
  "key26": "3PKfvpimMdcGwxP74BVwktdJgHngqKF8nVwdgQk5eQw8prMaoSAZDYErsuxV5rFtcLxBS8WHXkhjSkXCYVhCC12f",
  "key27": "58JhkzJycfBhHFZsiXvHXfiU8sepdNWnqJTa1F4qx2S4ex2xkS3yCsufF2Mx7gityPXUvKAuXHgPNi8eCJptUmpE",
  "key28": "3H9RvfRiMEyokc2dyfPrN23LvwsSFk2cYSVuNbuFB1kB2MGQT5epbuPf6eGZvrXk2DQaeWXVLFLf8zsgABizJ3Qu",
  "key29": "2EQY2MaxGJJ2H8U4pnrAXDxoVnpYa8xkjqH4siyvQmGqAZVvhBALtPcNYKJT16uZ7KqguGhkxo8jQzfGvNLGRPaV",
  "key30": "3JfawmvFdgHBWy1uW8eyJ9VQxkZvYZ6VDToFJazxf79pkq11pkwnUPo1S7e5tnRqY4Vsd7356W4BmvM1AKK7fpW2",
  "key31": "66Pk65rvNgMdQn3e7xpTMNX1ob9xb9SRdFLhrdS77vU5GZMCUQs7q7hW1FLxBpH445EQt4TyYtr3gpetFbF56mxn",
  "key32": "5HF5wchdyhokuGujNGAuZeR9qzHim5rbAPXaJT58gQB7jLUQiWWUuZ4Rpp1AZF4bLzGmsKvXhz8ta6sSL1GGttMH",
  "key33": "9NEsJnFtNgE7Yqju4REvdY4rS5XxdxfYne2GM4oH8aQHCjhtXy5p2H3QH2MoC4P4UCKGiiW8ZGAQCfJDgoHfKpB",
  "key34": "xf1V4i48DH6Ad3qtG7sZEMYjor4xwohywbRQERhRw2ME85k22tDjdixXK67gDK6DgduSD5APNed7NVcZfeEdT2t",
  "key35": "3EkE94zyRuKzpgvoiZy32WFfAYkKb7NgfpGB6CkjQDfigHr417Hg65t685j1EV2z1CD5Ufi2BQEsos4W8grqfZau",
  "key36": "4GRBf5PMmkU9nBC7hhLTfzKrC28eKpPZRF9PbWNrsd3ysf9mi78mZChQF88NVHjbUquC3CnCyzJGeuz5L2eeVfks",
  "key37": "5y4QKzUSesbWH7Y632nZNyk784FmttgrSSbEZWa39jjtSPoGsWLP462KGpq8m3bDss1EWH6ZzZwERQKw6NMxThYP",
  "key38": "27UvYh2d5Nj59NYnNkm2pqqsfrP8Ed6tDjT6aBWYsnGWnNRm73vSicdzBb1zXuRW6x2E9RQZy6MQtAPqb2tLiB9K",
  "key39": "4ob9EnMPNp2kFBYV9H5nkGviS4pE3DiceTyVgvchRkAyfKWR3JZSYwQX4PpyYaCKsYcWfPtTSbQabwMQGkGLcgMr",
  "key40": "3QUtDdJsJHqvyBXL2yayJ3q28mt9KKQvV6tKqmsQGkhUmYetLy7MLejXTNQwUEN52zxnZHZKbVfo1aktoppjoJCE",
  "key41": "EpGe4CpbPpLLXtqv3Lsqdy5bZhmb2eMt5BtxSZ4jtRhWQfegrZS18kjFEoAt5qNsoPbm5APQqMq8fnfrCthnhea",
  "key42": "BaGJjEWSQ7CSZFL6JjqGLFWTcUFdUyEi4CeKdsvX25X7CsJAYp3MHKWUgDmdtvvZv6kSU24qxdr85CvX6DTDbLA",
  "key43": "3HYsyuCwyCiWHECCHyQHKwBAvNJz1SopPe1ME4cGMSjcewRLx62ykdVqDBqEW8V4uindaNh1JG5XLKruMR4HKAWu",
  "key44": "xKpbD9cwn5KXk79eNMnxrW2zq2uy6Xd3GLmqGa8LjQTDAtQJeSezE65HPujH6BQxSfgbfstf7pDiibwkNgUAier"
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
