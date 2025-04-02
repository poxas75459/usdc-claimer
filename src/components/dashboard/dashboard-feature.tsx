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
    "QKHMeB4PUW5n8ixHj4ncavjSXnj7KE7bG8QSWBag4VVavZCvsVpv45LV6SMmtUfkodeWhyDmb4AS3jGvZJDP8Xn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sXGHKYSR6XfLt361K4dqxULtZvr7oDC7vWUqyW7qDynjg4n6SiLXsCfQhU8NSkHxgTAGQ38TFuFiKyuKT3StsJu",
  "key1": "4Z6qcYJVUW7XnXiwfprF15R9BQN5UP9dH5rYeMCa3aTeicreyh8UPk2e1FantV1cQg5npt4xP2fpNNGSNVCShWnT",
  "key2": "32rho4CX7Dd8QpLFRZDpy15vzrNkm7q9yKLEEeJpg3jj41DYEERKbT2QV3BtVUnXSEwKnfvLzCkxzMBREtH7KJ1i",
  "key3": "5ufw7P6ZmFAbshSSufbEGpBMXf8tgNjDDCfD4oNkLW9z8HybsMuB2r2kGHwQjez73i4h7fucan5dM5Txo4TGDdCu",
  "key4": "ZYs9jpZy35Hb7GPRrsbQFpYZrVKWYcDumzk4cm6CtzGtQv7YiPoE6Ae1j2SrFTao6Zt9tLZ8a2DAJ9mErcHFDkH",
  "key5": "5XhypSS1Qm7UyUTSaDdcRMNQ7nbDPnmgmqq7JqQf5rveDKPNy13ftMHTcMpWgRM4W9U2LzNjKkJazni6CwfUN4rZ",
  "key6": "2zor83Q2skC7d3cxSt2AoPBMvNP9638hgat8PeCHY78D6DTgumNNz245qHMa84oAoXdH3uccSWNigctkUbCi2tYW",
  "key7": "4gGxBkxw19U7CxBRES9yfWssZ137fo74EW1qcmeHVEQRdR611LrFuUUGyLMcqJdQKQDKECJbzTN8B6WhePSLHctq",
  "key8": "2xLUU56ngNjYz5TMvo5ybWbaSveSHU8RJMnkwDj8YJdHUpv53osjuDXenRFbLDcpBFzrsxggHEvtXeQ8GdSFT8B7",
  "key9": "3jp3oCC1mZ2HJTgWzKhrqQMp5iPG7EjMwLxxzWHYpQ7SAJgXR4NoPAAHG8PQA18XF3ix28i4Epuj2hLVG6eZpRAo",
  "key10": "pHS9HdSKHWGbna7zw9KHBJ1tiZq6tk8Ly14tRex3zL294zw9qiNv4y9sqekMEgPQw3W1Mm7UFwAoSYMH65sRiA3",
  "key11": "5TYSA5kPAVJ8RqPgAQ7yeuAKyJe3cqYFTdJqfQtHU9VGsXqHW6xdhWoCf1BqWg79CEgj6763JZD3XQBLgpL8ZUkk",
  "key12": "5u8xy8BdiKDATjUiJC32UWDe9NZorkA98AYyADNLY9n72R5VvhPPpM71yB3nayNSriF8UTJAgrwRsjx1NSxFVNjJ",
  "key13": "G2g72n4jPuCjf8oqpLwjScXsETcuUauuHAbWrBywbaxh1xH5CeQ4RVXjKhtv25E8e1c1xYZBB8ERFkER2DRDPmP",
  "key14": "3v2hm91oqaoMUgYrBmHxDrcYhLu9tQz3YD3UWKCQx3m2z2TcS92AzyGE1x8rnTDi85TmrAFmrWgzptZLFzt1BhQL",
  "key15": "3jv3wpemDimXHcgaVmjSx4v4LpajzQtqGjbPebBdFt68TzqxTohv6Dy9Yh7EDNZFCBx4bfqjsfn36opEgg9Go12z",
  "key16": "P44f77s3uUDYHf8WU25o8abXL3Z4UGDjGsterjJt4NMszpNZBkK2Xisqk8mWv1RT77decNE9daED9VAEJpfuNtQ",
  "key17": "7GGda9yBrywx5Xv5v2GuDh49bXnLRXpEMrRJWocKrkrt9umHpKJ2DWbunVmFF9XqiaZvdmbakvtnwTpDCXEXsfC",
  "key18": "ShVJUEp5EmAxoHgVYJKGLNHsB9nVXGv5kbXAP5hebE6Dt5wNxNgeDthjcjB2oYZC3LYqGHX4veuqtYACzPSAP1K",
  "key19": "3zAnQmqpF57fYS23FW4usnTj4wxVScJkWs9bAFmRizSLd1p8iwPPWQ1iQua8sfghbCQAknbRhaXsrWknxRZPyiix",
  "key20": "2HbSRNS73mpN7RckLQno98cznxeARjHcrrtZ8GrqK7Bdwoo6PCRbyGA9NEWKcmZztM3eFkHdNdDuBq9Jnyukw5Xa",
  "key21": "3RPWakXhayyanhUgnGyr9HiFCaZyYQ4ZanMurs5smmGtqr3PJigmLvhjxWKwpBZSzgZB17hfXRtXk7M3fsoB2YmV",
  "key22": "3WYAyco6aWAZZ1XmSkC7QVPAivSYu9W6PaWtNh39reKxnSwVWyKY895ywVn6yxkxKhYVD7jrxujAXExs6NwjjTa5",
  "key23": "4QnoMav1WUveaZVFVCFF8sVpSFtmVfvUN1v6dQ4N2bUdwFDsxxrGxohb37a4HwK8SNtcG2Um31Rzfo9gv9kyxxQK",
  "key24": "RDDyUAFg21zQC7WuEoqhGHfCHYeC5dHtXvS53Ud2UMn5JsUu3uJVycR5Fmky3yA8TPh2LmCYEcfvaHtdASF9Pv7",
  "key25": "41csmmY21ybewiB8bhg7UFT2prYRWuCedxtH8tMRCrAbMzfoWBAWvK9Jxd9tp3FUT6662QE4N3qeo3EfXh7kLKXv",
  "key26": "4SsQrw9yZYaokqwynPzQCpNzg1arY4MUK5RNPnyYvNMmDFvVuzWFcQsF8RwY6vE5kWR3nY5x5Mmwku3nmd7efFFZ",
  "key27": "5q7M4ekpfTKV8YE1ddjp6JMD9vPfD6H44nCbvm9zt94DtE8fFwzhYrBs3hJkFA6iiUCZHVYCuj9fUGgLaeSFaV5v",
  "key28": "5fChy2ndPiVtmpRsnQvHVYt6pCKuf3wm98abiqdLyH6kD4JomUQ3q258dZjU8ziuf6L6x5Y2Be3sw4NCwD7cJtYg",
  "key29": "2MDK8xtWabvw22PbNXZYQ4PpLPsUV4ievdnZwYwuLr7fxfHJJDaNfjEp7E9cZUFjwrzyXch3mGx6wTUtaGqhEZUB",
  "key30": "cE4QduuxQ2LNY1uHVXo9YaGRUaZ5d2VYhSYhh7PqbEuDujBambRJADxbva5N7sSYrNLYFCcVEEw3yJabzxtjDPk",
  "key31": "3kZJ34GPWrjf9YtG8anDod7QjzGDeSRdFQoPZ9xcEjAWGMuPKCURb3cDkwsfznuh4tCUvuonvTeSYeDgySaUgf5k",
  "key32": "LGCY1RmrvDBnFs2r36BX1SC6pA6Hf81JfLyarJb5K9hRQMmZ9pNT3toDbChnsuytKVgJ26YJ46cqezN1LzkMRRw",
  "key33": "54nSyvQ7JtYtHpEQGSzFriVwFYwxX4ynZhjtLzGU8me1qhBVkw6mVhq2oKH2jFUDXs4UgVYKJT5hioWxU65k5tSb",
  "key34": "3hTEF5ixjmspveqt8W7KSui2dSG5y8q3gzU4Erzpz6GqcxDUeCTwRCn2nWuPGaf9KcxpKNqEBBZXExcrGHnzd4YH",
  "key35": "jqVovaym2REKqDEbZzMje4f6tgKXhByiikhWnrk99Un7rUJGN7Er6aCc4H2dteY7zPywa2xaYwf7C4mvWVoQ7ok",
  "key36": "48Qg4MojZ3dhppYqS5CaFaLvxRUBvrx3h1X5wvk9LuWY9DZAkULUft6U8y1ZJk3ntSWzK1Ay67g48tDkgS1wQZ5h",
  "key37": "4NpjCNCnxorkwdRtAVtZrebPyKC4HQ2tiHYVSxKhRvh7JCvCXc68jmH62D9H6nUtiu8xDGWX13mvN21qG2b3it1z",
  "key38": "3s1AMioYboy1s1FqNct5nB7q19DasX3hWxiEJ3VEj7HdXxA2AhcCn927y77gbW2PoJyGqgBupSDXjHZiBzRWcWJw",
  "key39": "3sV5z4dQQV6JbHzW53LH8s1guLDa1s9pxBa3iRmfMh8Z9nnjvssEd9qP1f9wdABdwjyLb7DQTvdxq4vLMuoDDXXr",
  "key40": "2bydV22rqxHtw4bJL9BUNk5evyUZBV9auB4eUMdzxz3gCkxu3E8hqxtCURz7xsxLpgeofG8QtZNYWGx51pdjZWgQ",
  "key41": "4DSTjBDDuRfs6fFUXMW1gG5asmbeo4ZCUiMMN6J5x3SKp3y4g9BzhFQH8REBXh4nTtsPQ2pimEFDPAhrupKmq5oZ",
  "key42": "EBpbnHsJdCMGuRpdqcXfNkuKGxNJgpq4CxaUnmCZ5xfycHNGjXhtfzN38hC77qJxyeBTbMipq5Qv31tLfQBhaYL",
  "key43": "4JNXAhF1ohw5BRpXR3ZHPu6bVZMxbFDozWfHRfysa51bzxzis5i5BuNzU4AsPtWNtVT3waaGXRQNaDRGKCNfGdSr",
  "key44": "64x3EtA8JsmFvvedH9TUSAxLmd7FBwpADJ9PkmuEAQsRC14JMdeHymN38VKRBXtXKpWY1s1ALp9zEUQhWDx4B5Ta"
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
