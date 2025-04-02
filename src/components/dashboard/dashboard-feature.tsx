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
    "2b6fFFJNggUACGfEkAHzQfkLxAQEyVAvGAq6eFFVon3KG4ibqCaDdbA3jJHwbHNvxZcv5ToJGPXWH1QUz7WDRPNL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uUH56iTGywjZQ41BG99QB9vEPKuKaPcnp2mZcQkjLs6rQWtLxariUyWtCdw6pbWiS2B6RjAy7dBr8BHZ16ShWHG",
  "key1": "5khAmHFiMuQu6nRQ3UjUF3SZccsbakrtcqBkiLZaNLgp8RZrrrUf2vCvYczr9pA5vN69gMTUcRhXcg5tbGWEAYSN",
  "key2": "B2zhUeXvQbPvEkHL1yRT41FRyCJhuG1WDMnifqdz7mFdWPKvRWByBya9RuBd8gq7m99jezEuUXiXsmw18a6o1ny",
  "key3": "5DgSdh14AaqxgeKiZDYqE3F4hyfjUoXmYv2MxdsAK5LTCcEV5C4qoX7DhVneMJFP5pBSQNZR6Fbir5ZTevTZUxRX",
  "key4": "2xbTocZBNT75VSnLvmjxg1uaGSca4MUfbkFgc29vs5Bb1m1USNYnqBqKdDEZ3Po8u64HbGSfjcjxFsmhVJSJNWxY",
  "key5": "679NXhkJd1zDxLCnfZH1Vv9u4zJ1v2aR9De3jSXaFNV1g9UFGBJmx6S9Tf7w9s5z1Fn8SFf8iPq4smerDwNJ2uje",
  "key6": "2GgJ24GXaDkZthb1R1BP4jhKBGF4d2WpoKVPBdgwUnSXKttrpzjtAhHsyvbsWvvkwY11EynQxhSrCh1n6aDjF2eH",
  "key7": "4yqD316c8M3n5qS4DaECuX1q6nMEpZtCzS8h2ec3hfkp3sZAoCfw4HtXmnBVQdMPi2y15atQc56ofZhKKgtbw4Jd",
  "key8": "4fkkGhD1C1yXx4HYTUAEvGNzJkyrfedKFT4Nq7NcZkJgWamSqPQ1ixH66g81GZNX9fwCFhF6DkDEiRZfLC3ysZtS",
  "key9": "3LpizRu37WCqmtV83mYzdpdw58wfwHXxzmd3H1ra4ijthkb3VPEx7CXHHQEmvsmZi54WPcFdURpV7wxkqjw1ZcGf",
  "key10": "3HVUMdf1WLATkGKT3PQkGFJ7uQNQeGGziCiTXA1LCJ89zoyeMEHFkAJ9cqc8dZWbDeayhait6wnim29nq63KHog9",
  "key11": "5MyCDwLYAKCY7H8hsLvQ4NNRu3P9j3keCUiGDBC2DjntTBVeXJNwTLBPL5kwrpU81bMswFLGGg4YhZFAeRD5Bn9b",
  "key12": "3a9MkiZ7Wxe9SrPAHnCc84YJsA7ZZ82Avp16D1zwPghWpUsatjsy3MBi8r3G7gtZtkuQihtG6VoQ3z4Sbd6Dr567",
  "key13": "3ViP32iB4H4ThRL2xkMriHh9ZhXADPuQ332qrggzFU4Dma7GzZQ4WUwBm3yBuHVj3dS4dSiZzJc8JikJNLWK5HLQ",
  "key14": "2dsJEtKEHS6x1Uj3BP3swPbcXtECwtAv18vNbMJUH6DRS5oSuRKwDYKpBuH25qnJEiV2Z7kMvTV2Uit3sVnPnaP5",
  "key15": "5TvH7xYEpyybjheUMDuEnTB7D5SjAk2h1gZmeoXsqUGQJUJANPNYuhkd8RLEbYMD6TeWbDiViEQhcZid86ey2rgx",
  "key16": "4vf4E9MSc5AGZwqRN834NNs2Ln1Euie2T3wpYnAiR2WJfNFUAenMaFnfPM5edLaNxnW3p8tTUNFH6UQUEuzfpS9Y",
  "key17": "5WcNi4D2idiCWPPvxHHXDgwFwR5Ch7o2BiQnTKAdtRwLUTR1jWmtL98BMxBS83haXpz6osUTArffiDBAZcaABQhN",
  "key18": "2H3vH6KfadHCShYhNDpgcatdrj7CUXm5k1ChzmQ4mzDyYnDes8Mig9bS5paQJAZrHHi5Sj7xKxexDd6RBkqmqhqz",
  "key19": "4U4EgAsy9QvpdUgaCksjDiKBcHykR5ZeZpXcJGPxYKCQNnP8qZazVbh67sFQkJN8YU9UWqLyM2qqZCRsZDUMVwhT",
  "key20": "WPGtKM7tHaMryMtsWkP1QHop9cwFgdrtDRj9dRJq6aL9FYwPpVQeJW3LKgAWtfXbwnDeQmso27VT7GmsYskHFdM",
  "key21": "2udowjWGhdsGpedx17NVxcH21Z6RTECXDY9gRwqeMn7NfkfHCUr8htwmVEW5rxSJGUTkzUrFqM3uAj9bz32KJz5A",
  "key22": "5Jun5NKk32fF8GQRNfRHti7RMeaGwqGw81sAPqQNDfonyhgVWEkKAwctMNtK1k6qvgUNWCwHJYYrfWPhzXUt27bZ",
  "key23": "3otfWBJwuuVEudyHnAM54R6DfRkrUgQj8ZDp9vLuzhsdPXoaxuko8MazvkBaY8i3bZjhzSLyUSHgA5FJ5xpxFbS3",
  "key24": "3gjZ4UcC6LFUtheU5CVcautihcKq6KNjYypsVuAUsqRSWzYB4EYHtDiyyPKAuF32i3yB1B1yPxkuHdan6Csnqdtv",
  "key25": "2WBXf3kejn8Q89oPPA1AaXRs4PBdVY4X2kZF8WU9ZThwRoaHwp6G9PwTVzFSijgq3DxeUxx9danMRRkFK4Ym1cTP",
  "key26": "5CAtofq5MBARJsQpJM2juEe5EDcdbUF6DRB5ZTztmxWENEXq3BL6jSZeTtbsAZH2spthYXiBZwpgKSmkkZFE4T2h",
  "key27": "4DaKVytoDU2YCs8fctgSA1w5MdWRnRoPBR8KeHW8YNmY63s4catPWaPE93DNgcPzqTteJpYCEYC3dymKp6EBichP",
  "key28": "5A9uXFL275LPDecTPboPpbABoCqv3UAhy7XZhJw4a9fwvaK46Y2CYueveDo9KrpSqiZaqTHHWrTkYVZuzn3EikKM",
  "key29": "5GW1tiApXJJeRVn3KftJNciGjH7zkUxbYE7wGkExY3rU6Jz9Ei6NUxiJiHQWzVVuz6Bg8fMBFNTw5CaoYQc7orU3",
  "key30": "jkJwLmTcqKoB2Ac4W3VE8VyWQMearKh4h9WqogaY7J94a1JPMKDqfuhNRM42y236m324cKQjFJQAtV82dVg4zKF",
  "key31": "FaDfTshBeBm4CkphP97PM1o1iz3s79zLCYLzCVafeyfp61m4zxyEXf5ouze995oNG1wTGS4KszLCwTKYQqzxds9",
  "key32": "53F4aRmyu6uGgZE1JBfqcsBmSub7uQepBz9DjKbzD8WGm9HkTuqufws1NXsZMfjRgtuQHNHcxcBdKQ86Zzut5S6b",
  "key33": "2JUyCqnuGRwYxELiQBsg4YvZ7pW2b7xG3Uw1Tsrbk6z4NeLKDnLWaaJLPaqCNxmhmT5K9v7nkLjdHuXRwZaWuZdF",
  "key34": "2CZAE33pZjjG4DoBDQZYKfx3wRDtcEHcZ5BH4Qx2C4gng54aHbNkwwSyNT6uUNcdXRcXczCGGzk6e1yxhYGpnYKs",
  "key35": "34C2iQE9eGRJ8RiU9k1j6YXabxM84A41MQHsvJZg8TiPN8j9NipEAwgfKeeuimbXh5cJt7MzsZaYDRyvzjgvB1dg",
  "key36": "4m4bnTTsgahBokFVUkr66JKYhSCAd2JmUTqqjScKUMSYtqXsJRXBrQKDK34Prh9hErVeUFSZeLZisYc3uPLmGnJp",
  "key37": "3KKTcekLGCbjsnjuyff6ZxLzAw5mtz5PD8BoZ5ii7uqsvWhCJTeGE1nWPSwtXqsxKr6pJt4eqMNwA5jT2UTk2BF",
  "key38": "2BTwRVTnzBwaine4ZdHRstPuQvqwuJDygghRF4zPjX52Qu4x7Y8RXUecfYyFQ4KHB4cs917yWmtNpxrwNfDeTyu9",
  "key39": "38Pc6DKXMQW8KUubh65s58PQDkwSjaMEGiRtTfh7ZuacaNLHfbCHZiVYYJ3CqXxQSaeXH9EjK8pqXwb6RNSZp2SD",
  "key40": "VryYDQB9KebL3ta2AuCMufzfpZ86qZ1VKxdtwwxSzaTFMERBorWaoG6nHyPKnCGmzrw7LyTLWxcYMdQDfbtsTzy",
  "key41": "2psPRJPvVfTaSmRYQdEwTkwW1EXrbKQQ5DBfkK1EtgbEqdqmqr1E2X4kEgcW6czKovhePjQg5FGh9HHHwYn8wA3R"
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
