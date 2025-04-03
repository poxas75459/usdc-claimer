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
    "298H4uMNVy5xBwfndtsKeem3P1nrTB16TRpAPsChEcA4ciqRbMnT4fVXCtF5jdp3Vt9LJyV6k2TL2qHxfzsspFtr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kH2m1fx5dvEEkHbzAevDYFyUvAa6Y9DFg4YTzL8RH42QYGXdjGTJBXpNw24sxaRA9Zs8W9roPz2JrPtPeoPe4Tj",
  "key1": "4xb4PeGBQvKJeVExeVnHtaW1fcCMcPhHbPybLp63tKmnpeA6ipaBDpMiVod4dcz6U3awrZvDrxQDtJxgSNgZtabE",
  "key2": "4DBB2ey19TtaAjbcL8rQ1BUXLZdpq2jCub2MFus7jHB14dts1NaDjXECWnKar8uyyNc5HiPLYSs4VFN5dMBiRa8J",
  "key3": "5BJFzoMp39LSDctsFNSshS68ZHJziCHXwhoLZuASiHuFFzDZ4S8KhP24TYdgy8n5abJbdhJxN6y5Pm6tZ5jEeQbG",
  "key4": "5Jtsec9ZNJbCX2BoSzHyGDr5qvTiQzprGU32h5u8Apow2btB6QHyz3SNgEttiixrs5fwsHR8zgKn4AsYKxwzjeYv",
  "key5": "2qKKamw66teK1v2p71vQyynHA7BvxJcNxWJv37kJsBJ12cL6ysH4BVB2as3DiVvY3EF9UqKAbxFs98iiBhUe4ZfS",
  "key6": "KCga4T6Bm7Z3xh8AHkUXiLXNFjKAyWsBkifKMUQwx4UG98dhtLBkboKMxiKCcksAQ4sraTYZRThJQMEQaSS3aJ9",
  "key7": "53LptbjmrjTv8j2Dyp2V46pmTp9e6P2GWxpgU3jDdMe8usqULEBgED63Kpw4vEaDJJvZgT9CBBXpcEUedubGzQfJ",
  "key8": "3NVetBr8FUHUPsmkrsPgPz3o54XvxQPRRKBvQNUmitw5bYitJUxeczqfVSTLhUVCSKNSCQY7J6SmaiHPKXzbEoWC",
  "key9": "jUvx6o35eedRrKfpvP8XjQw9JrN7ibgiCoMUYEW7XCGSDvmV5kkNwLkMjvwHEJ1AGbfv8n85w7v9ZjkSJyouSxp",
  "key10": "3dkYAficRSeCXq2H1z8dT8WLV3C4Kg3Mk1gixwDrXokWnxGsFHHEFrRmxb2DxvA6gRMxdGifs87eGdU3Qf9dy4QT",
  "key11": "4dsfhGLQmdDkN4u6A4xzYDj4qpYhdDbjXNRRam9CyKK4ygvqxAkhC2uGD3MbkY821HmB5dXBSW8RefDuZyK7njcY",
  "key12": "2hXsviJbFFejx8P9xaUyFb5SrMarnUQjtGEw6dUHYUnVL6erWEDcUZCQnd26S1a1RKXawh1yDo66XBEnLrY2ENxy",
  "key13": "2hMx88vKM31e4KNfEYS2kmybbYf2g97TssDGQfcm6169VjE15dK5cnRpjSQDKuJFHvaXaU5JReHGXPAZYLjKSdoe",
  "key14": "4m6y3z7CQ1DmFSgShaGVbxCSaGaYXC23ki8wmF3sVGqpWTpwHHFTsCnAuBb6sAyAJCu5yGkLLs1M3K85siPPQtM8",
  "key15": "2ZtSSDfzoBCx1wjPCSnhgtEaZWwjVcpFjxY9ip54Kr5R2mFXLGG6MTgEh85vpK3mNuf6w5mnMZ3JXbFX5cztsynQ",
  "key16": "4dkyaBaQdND7GNEudDdDFLnBYHhQtUSPJRXP9GBCNvQywce9BigwSnftcov5jm8MctK8S1opqDatV8Fn7GL815fr",
  "key17": "3TYbnSgtRaHECmFWkkuXViZQjTGeAWcnnkuToxSH4nmfxsAUsWEgubNQjyARV9f4ahnwJaABgfU1ttqpqXDswrKs",
  "key18": "4EzZKCHndRUmBq2Bps35wWxomZxGi6TinKJshHHjKerq4iyduvL6svg16uy2RmnN1vrRobejNp68Uuu4eJDgwWhJ",
  "key19": "5BZC6k2m5etyYjJFNwXoQ7aRrcaMuLtHWxc5sqto1S7qW9fhBTMtaHGr5bAmKXxsomx2GjsoLyzW1evUMg2T7Pvb",
  "key20": "3XSE34vAiQuEzX2QUSo46PKRueRW9reQmtdHoALcPjzaeW6mRFnaUmBbh3QZrC2WwaKg48vUcUvCx2kbk9WQZkz1",
  "key21": "hz4ouxjyMAkN9WrKLHN1xh3NBFit1VKz59zpdHP6T2BeXcMg5NFvrLPLGu3mh8HGpeyCHxkTamiLfPT7k7xNUPy",
  "key22": "MPyWu6byEJCz9yCL9Wkxc42YS8z9Pdo28fSYgjtrSQDBBu4opuoL6SYXJQJHc7Nnu1Mp7tZJo4m3hpNe6KUwWyy",
  "key23": "5RSg8JiqCddLvjJbB3CZeS7CCaszvnJ9zvpfdm6yK5eSNSiJocBJQPGSvnTKjq7XyYNJsN9wcDiwy8MFAKYEBVba",
  "key24": "5BMWAGkwLP5BFodRiPAK91HpThy1H8ut9mthrFJJJJkY6pzyNSmefuCWrnc86ZRrPHNYVmLTg6xRg8C5Gyanqo2h",
  "key25": "2Png1Rm7dGdJEJoQWzo1AZE935QTXqyLi3xTiP2QN3zjSn16BRQJzPw3cTnKmG9kJKcQNLw6pbDDdQd5mUNBXC7B",
  "key26": "Kgrf1DTvEBRqAMuCRKwhu5JMV5BRPU2VWDokrZ1rs2XXyzLrqJECiaQWFkyzHrX4YgpfS6Zh4eGoaXVWFLASWxC",
  "key27": "66WGMhgDi9JDeG49cqE7UE1J4SNigwtx73L1w1pZuk985de8dzGQW1UV6vFb8XER7jNrKt3ESmhJxqfziMjpnbPQ",
  "key28": "3JrTpXfnydA9FDvDsBfgACAn8Zkp4faF8v3KiCDcvB8CLd8sPK2De1oEbZkzh5hh5NUrwPfLHCcL1U8DrBbZSXgu",
  "key29": "3hnGyM2hudmf7eW86fqrFGmWbS4gKBGzBQU9Zy4ND4nFEMQLX88Jn1JHhjFaZYCvf7AyJAt3NRis6ixEVQM2ppya",
  "key30": "56g6aKAVwdhmbq41nFWA9GDurWHoYSoEWTF1fW5M4nuU7ZoharcxaK5AjNkb9WPy2DXDnfDvXvAre2CjcHoaVg9E",
  "key31": "NfV6es6TiYv2qkP9UH5vfRGoeNLPTgFoxhrFZwDoGN8iSVtgaKBjVePLoxFvTSNxayoUKL8iTQwwfQGypDkdg1o",
  "key32": "33yGD6Vv3oaWEdtRzko3MuLiUfie7ZakUKJH3WgxUvgDxLNbEPakpPzDXbv8qTriproPsPPZnp6hZzmRV4PjCDM1",
  "key33": "2utgkmLtCL8VmD28XqiRksP4KaVYhApQ3zJqqW2shqg4bbntf8kBCtcvUxzmZQFfxHsdddEqKM1df5C8CjvUasxi",
  "key34": "kju6AWQXWCAAZwexQE9eMPsX8irsFoLr48ET1nVbXS7SKkJt8mxTU9oBnWdMviwh3ymZiLEDqcT3fHEmAnBarNA",
  "key35": "33qdy7cSG55We4LLHjepY4GRgQWwNQvMT2d27AynaR1uDf9rae8N4wfpmJDvssvUem5wkRtjvyqxz2W25Ef1o13h",
  "key36": "5h5vaQHjdgqJresfnBhSstmVaHhScXGAttZg87dcvwRXnzWXNdqtuqbudVCGuJRnTqCyCydsLQ7PRwyW1s7drQFs",
  "key37": "65EnNUezWa3wKDz3Wkc4QsLJFhj5Vuwqo92iSizkQm7AC5DXVjhwUJnr36n3AqH4p2QJc7FBkGsESRme9wT8q7ye",
  "key38": "4nACK2UgLt9XShFUQZBKapQa9KPcpvSPvWKEvSZu1jz8VqMjtZ6V4k5e71XbKVaCk6T4bbg8zaMEqdX3RGsGmHdH"
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
