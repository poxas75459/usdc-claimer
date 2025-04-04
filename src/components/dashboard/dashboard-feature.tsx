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
    "2p57FzG1mfH6WohvasDofepcb3bViRRNtJXn63S3VQMcXVLNn1AAX44ZERPhgpEjdpkDN7VkrpCjgSuHfqGdkUC4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZmRyjGuNNFsYCQJhEREFkmpNkJTPWi5MERKs7cR1d6Tdf2rBeFz7PRQmJH6WZYxHdTb7tUr2vhreVvuH2jmnR5c",
  "key1": "5FJMjSFyMeHAqkcWJXCV1rx7FwiEG9AVRmStEJhY4BXw1iev6tWjuPMAb7nMfvqr4Ur5FA6EjuGGhj4VQAtnxoYz",
  "key2": "5aGbWxGBuBN3T167Xb85pqcSfLhDdiC3vZDZUUTbtgJS4n96dJUatyx3eReUUefRptJegpsUJTMKEGGDXCSWTwYN",
  "key3": "3pWV6B7RMqVrtYm3tkuRrY7iVxjYjiyK8DZDyjavFVnDcszbHh56vkqWAtPtXgTDBCzqrYq2iYjfTAzH1QfFGqXZ",
  "key4": "3ACRgDqPMp9g3dLs3x3eMCpwWpC1vbSuV721pTEUXZBr5waKQsUp44krZjDju1AYtyLkLbgKRGY1HN8UdSB34yg",
  "key5": "4XEeEAb7WYfGV8qvDSY5TqUj2CGPCZ3kFG5cpX4MTXqHTSYq7vc18nquT9T8nMws7VrrsRaPQEFEaAbfA5W35Z7p",
  "key6": "P483GkkFwKgWXvg3MfWXGqV217NHJx9kw9ZBajva5UPzrqZWCheMTwfWjWisFxphevgFw16NhBHEb4NVPoYTb2U",
  "key7": "4y69dWt5ggsfyTPngAyoQziFfo6r1zScyRzy64WrnAMmUdXXigKpqALMiHjwvtT37rk1Uc1nQ8E94EKggYenDvLK",
  "key8": "5fmzEowvGa9iVYtQXLXF8kkMSAS3aVgE1UDzkoGRzrtCzqppUDCVUwUwDeXCvUwZ2G14pv7pn7FUDqXc8RVNKb2a",
  "key9": "3jPvCg2VdjAzi24xsSTchj52CxMmLqky7QWpwnPXoQorpmzgxBBz4wQLsn31vpWPWbyT8TzecVHDgFi8dtYRGp2y",
  "key10": "3Xs5MtLwuHTskxaN7Aoqa3rLC3puwzyNo62xu1KzJPc4mBM2fDhBjDXcYtVuGi2iy9zQQyHhvH1CUh3RMzRrhFMG",
  "key11": "3Cv7iYhVUkrZgvpzmXXM14fVmCuhiGea8gqDNbe1CSoY14ZVUvCua6Ts9NA7K1LSy5BW4yCRModTVNxdvHNR2CZv",
  "key12": "66ukduLGEYNZ2zmPkBVHG98QRGFWX3YWDN9m77Gh6LDeRwHEmpFQZFsoMq8SVop8baok8ChUsno2jdxAYGs5645v",
  "key13": "4tf2yrXkzqXJmfDkV14LDF7JBiBKxKHGP8i9gdoofuSU3CsQAJscJiLWgAUdJ2vFuiQPpYZfZKXHEFAtAx1q1wR2",
  "key14": "677vzgzmzGddM3H1azAdLCWNoRPZTPCCJid4aQofX7sHw5Y7LYbmYB7nfsAeaBF4Pk4ykjV7DArM1hhHiowMF3cn",
  "key15": "4jK7CuDBBKWD83pBhTZ2wtq8sVFguN7ncNhHyjVWLgNMT3JXe267whFfJgRbu3y99mDvi8C3pUPriujUaciZcBmX",
  "key16": "2sd9yVLDiiAXKaDSnzuhmfXwxHpGff3CccSRneN31NGvA4U8kZ4276UCFU1H5YiUUUwETH3xfPodVvNctvCA6ocY",
  "key17": "4fzoK66quZdNgRGrJjjbmVPuJsq7uHEMkmWYnh3AkAqxGM4Zu6FMNujPsu6wfKVDKamz8LnQXXKF4VdmcKj6SAXb",
  "key18": "3D2apCv6w2EtmwMbu5v4n8v6QGt98tRu2qXXPmd7yG55DAAtXiTwMgxcyFWeQuq6R97yJpX37JmrFAzZcsggQuNR",
  "key19": "3QndgTATdYuhXUpXKM3aFJ6CpkwZ2J8R18tJm6voJZabEgdbASFidMtiUcpwYsWya6no84d5w7JfAZD7iumQCHSJ",
  "key20": "5mPu9zU9jhdx2vvaEbnSKykEcazE8c2zTLs2GW2tGZod3wVHXb3qW9yu3iqHcCvtqq3B2bKCxxGrxLwYFn15mQug",
  "key21": "3Yvn2PpUCL8G2VB6sCHofRxzSr72Bbnts7scfgD7nCEYbnH77MPXZ7n2wPZ6oYmGkHxzxUyLJScjkfw6uztDZeZy",
  "key22": "4n6mbFyu1k9T8zwmvpq27jQF15RcLtKwjvqwvvfXj8ZBPyTGWqTxgFLfb11Xkbtv5rNFTHUfyewu2sA4DJZ5uuDM",
  "key23": "56B5J4BubVaQxPZXp4t8SJKX7c82DufLLLE66MndPvhPvf9VyQYZ72iRUMYdq8DyFsRivaNNrceCfwjaYKkXqJTM",
  "key24": "53ARoDfm1fYPZ5UC2ZM9w5hUZ9HYqcErHEyHaY1vZcC3Ns6Zo4QzkwJt6E7KEBQXVebZkFUwvc13Q9B51kwUbZX5",
  "key25": "5nhxcGKmAq6qQ6MyEwM5Agjca33KoEuKPtXdUBTqoJo5eP9sKESbyC4CwoUXPdKea3yxSTxXCKBaYTs8Lwxk9gHn",
  "key26": "3QTTsyYALhBN4fQxw7AoQYcEcczqfYHHuZvS7HPwBK2eXvbVTwQmNesQTmXAmxqYrw7ABvC6NHDUN9EYSL12qRXa",
  "key27": "oD4Qhdob9MZKBRCj2ta6AhXoajiVQ7i3dDfLJzx86qL3w5ew71Y2ArZf2FDeEuLR1j57SGnTFHqkZgjrkc6Ytcs",
  "key28": "YwpvEaU9qsud4Xs5mGzteazWX19ox8id583caPkrvsm7UgSQ7gQnRk5ywUsQMtzoeBe1X9MPuAz3h9SGZxLh85P",
  "key29": "2zVCfMFW7CouKBQoNnkj2X9LAyex2yrkwwDcoeCcRr6Rc6S8AZqaiVSFTQSNnjrdYiJKfeADKHnRCoVagLNSrZWF",
  "key30": "52SmHTiYfHz3JbiDhb6ZWGqUkPyX7zKEx4jgtc1WdRTvmsfU3dxWvgPxQLNA3NB7iUQc8i3gyW9bkyEUdtW7pk8c",
  "key31": "3v68EedYpmffgKhZe9JVN9S645JPYk11e7qbFGYAio1fEFxDYtMr7G1D6jZcrZPNV4Y8Tzc9UZ83qSKsPGAWgDcw",
  "key32": "QpWKZnm8q5LNfoHTX1xdYtwg4avpLiTboPJ93NXYuNb8876PYJWeAD9srM7Uzx2sDHXkPfTrQEPoK6wPPj43sAV",
  "key33": "4kyLwpvsqRQqbWMz5mywSNYdGziT6LMxoEvUJcFrJYeNWXgKMbvACB1KSTYKocA9ky2VoXJ38bYHB9ARYdYJwfKE",
  "key34": "4dY5grRrfVpJ2412j6q9uxMRqhNRTJVVKeXk6WCSuGY7pv2CLYhRP83Du1uKhhJ7d3YXv3R55S14ZfvwN3DQcSJa",
  "key35": "3vZw17npMrK3qcpZELYjZ7CZN93MkeHVXmL8NwymVQDYzVDZ9U39TfaDPmdkApqFLPEwv8kf9M7TdKMUwJWA9Phj"
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
