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
    "KYsh86uVumHvKgiNoZ6gRwyvtmmeCb6wqsZQHNEP3gQYGJUiU1dNvR1e4Hy8ujG2qZFcXgxQvzrdiDkHK9rpCfk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2enjREJk3btWm43DNeFuBNTbRHA2ZpCvDtxroTyrkDKjpe7t4B55SGvkNLMn5iBhR9rt8AtzK6ywh2sxonN4nY4a",
  "key1": "3YbEmCdPnexwkDEwhGvyE2rCQUNehRn8ZkjLmAMXAbHweZ6DZ4gMwtpWB3RtgKXkWL6fx5isEvwGXRwr1N5ns7ks",
  "key2": "s4hAC6hDFTthZPEdAytxAjBVkyj9MyooJ3AQrs9bnrU6d3q36qeufiTR4ioTR6VQvVDGXCCSrseujwNuzcNDMVt",
  "key3": "4fg6VwESBJRUfgfJwHPhWy1YBEQ2qJ3Kf4ydJAwd75XxVAoL29mc44V1movnyEAw9bQM9X2z8LHTUXUexjA9szr9",
  "key4": "XAv8XVJPM6TET6NjtAYc6thWz9nv29eb7EsNEeoZUWLqaHD3HvwzPKfCHAqSZcbRGYPUkBdUXsWWVBLr6fgAwW2",
  "key5": "66SvnigwLqBfXN7uGXbWhrbqLLqnn27PGQsjv9VVWJJjFxR1Tzygh9mYj9LzF6FrBgsm6wLpxZwuG87YjUNm5Yxi",
  "key6": "5GtznvwVCGfUomu45CAKtKfVZyTQbuJhLMyACdxFcSQw26YQc3qsRAbcrdjtJBKJTeQdBGQ7BEPCRS57i9QMRqH1",
  "key7": "3iLxzqB2V5jepdZsDaJmMyaS6JgiCamDCq827ZRadmNWx2XgtoqBpqSFStvcvvSaPeTB5zJB32VKBZQF2atrCc9G",
  "key8": "27QpoBeg63u4wcbxmTnerZWeMyyD9VqTLbyoBUgeswRcBULtygF436gh8WbHwfZWgVxaA3YopARckU2jzHJ1UdEG",
  "key9": "2qBuoCPfWNcjBFwkTMC7dpHVZEERrd18VrbkgZ3sgCn29HyJk4bECju587Gi7AenTyiyhkwZy5mnZZaeaqmVs7Yd",
  "key10": "67PNTbm4i9EqFr5TWXqjtDNH22pip7V25npHaftf3ks6XVF2GpjxrdfkHV6FtSXakjvfkuqhqK7FN9JHbT6VzWzL",
  "key11": "4Q4E6tKj9pYdCte6oXiFLrMx51G23ZUMjhxohyLJHrt6VBHE4g3dAiyvvUXBAVaFLx5sZoNhYozSTHbDp2J7jQ7q",
  "key12": "YeigMfL7W3F3kZd4P6y1vke5mPzbMmv1MfASHyE5vxdBGRP6agpZbqkq5WGUoYFuKof1FK9vfyasauN4wkSUTUQ",
  "key13": "jjp8iGJoTUj6jTLZRUG5NrH3HUKApS2SskfBXxqf8LnacvcRUw6xj2aeqaqpxH7hGiie1pCMj9feTNF71EZkvt4",
  "key14": "on8a5ceq7eBPSmxnubHchxW4fs69XXQqX44A4j4ojewdp2Qpkir8sbVtr2uuxwFanqVqxZfU1eCuPfbueWduVUe",
  "key15": "4QHhekwKvorceC2NwSjULuVZQYR75rrPjrvoRDHZiFeLJvHHEMJSSsUZqAsFH4pQpK9YXxJtpHjgnpm7C1mexnV9",
  "key16": "3hysT5nbQ7Ba6MdN7PLYdYSihTN4uFW8k4boNp8ZtRJs1vhTHYSgrEAH9iotTGmbPvRX547h8JJrfMadaLvVWpd5",
  "key17": "3J3vWD8HZLzse1sFzfeLHmyXfaPZZc5q6CrUvPBhS7J3eRfNSkQDYiGW1YAdLFtZu8cLqzoLHVo88RKzHB5xRLgT",
  "key18": "61dnk72LAW3hYvbYLD87vNZDVTFLAWbPjSxDvF9sU8Te8LvvpQALgbTDeXycUm71bK7jCAZFkgzrEuK3xW7HDDXS",
  "key19": "5txfxzDJQo9ZXnZPBtzRU3dA9Z4KJ9VSNv67veDsigzhu7ybd6oNfXGJHanDz24YF28TowgTGjFSZN8StaUcvWEa",
  "key20": "DhZJT2E9Xt3niTKvyyHvahCsky1TchebCmB9vHU1nD4mMGHMgH9RqmHtjCqxGyMZHGBBFD8kQbqLYeTQ7eHDVXx",
  "key21": "3iwJcdrQ1TyCKutU4hK7CJwj6AdaXvhBVUiR7HMZmPRyq6yJmSJYUz6zeUvyFJmTxDFvehjLAgowgbGByDHs2pX2",
  "key22": "4VcFpZEAV38bB9xsxXW9zrSGgMM5GbJdpN1WL3qBhnC7wAH1aHtgUSsbka1hRMwMvrben9hyGnbhpMUoYRNzmDFD",
  "key23": "4pTW2A4C9GKtyv467p7wYJW6Cxe4nzBpbDrtzYXo4mDBnqZrTD3iuSHjxVvustb5aWKRnE5Tp1pW4ZNVkSA1FSg9",
  "key24": "46WWC3kC2DYa4Dv3kpU3fUdaGF2Pdbba2B6wWXXLWuHLgnd7QsyC9qhinX6kSMBJCGjupDUW82GD265tyc3XtFwE",
  "key25": "49HKKESRxPiHVRRUUqG66mo7iSHqW8c1tnGLB2D38XmDFyoabKYG5ZCfc8MoqFUjnUPyzwAqTxJbU7MJDbTTPqoG",
  "key26": "CWmEE4QVkj3jZHyorHyNcdS9RqYzwmaZUas3CJZxfNdPA3R3Y7bhmddhK1vnhSgf7g2ykQ4SFFHrFBGyrw9FJBs",
  "key27": "4zErD6otxtMn2DJDH8qCGJRHoti93V5k1pN1HjjSqJnZxfL1w2wcSg2pvv9Hn5RAFmRxqbN7CCJyEf3DTigkjkZ2",
  "key28": "2pjqC82iQZ4wxDPdhYFJUQaMXQZ2SgcKfC1qh5Ry9AtYWFzUEtYxgDoJPmrZba316BGiJj9mSqvYCMjh16ZULuo6",
  "key29": "2UHuEEPGz4PWDxfVEVNu75K8fjSBq7yuSKHK498ANF9tg46kNcNgCStdzPhs5sKTn4hD843WP6uPBpisu43KAXcs",
  "key30": "N55UEWgUBsrsAaAUX5kwLpALnVhGLZQ1xy8DhmKfsHkk2vj1EUwpxAeLeyRBt1z3VLWuphWgWfU4aFNkaJsTqTo",
  "key31": "3pEKudQSWRyhb87fZa2Tef8u1Bb5RSqjP9t1wppMg7vWvatwLa9xrsHbXSSWg26jgWa5RjUFcf7cP7XJJQ9eE4Bo",
  "key32": "UUYyc56GgoeaGX2MNZ3sf4wnVd5E1Dib16Ez2eNoD9KpM91DiYsgjsSuDvns1R2YnjEcESu71tH5z4cyFmUx54x",
  "key33": "5xFpVGM8RF3Vw4cDqmDQ45TywVtJ7q2UvXpJERxbM5hrFsPsoeiL5gK8QyDaZLfUHDyhYBzD9oshqiqhf3wagUNn",
  "key34": "4PQYDp9wwqWzBzV28CQQf75AfLiWiGYV3abSK4q4tVEZQNqxhLGKxbjnSL5mWBovL38xa8zYXVXjeJhaDrFQhbvw",
  "key35": "5C3gTYbgZUtNa4D5CNoLTP1Wa1yhcgsRMdJUFmLgg1n4hme721fsaesQ3iXoFhDDZXXTtkaDXNtcgxh2yBatzmui",
  "key36": "5J7YuLbdVoPJ8odL1HA88Jajcsc2cMPg2XhHgp8oFm4dHYdzNaah831UDNg3fAr5LsHFmJ7fNkgxwAzdy7xFqyWc",
  "key37": "5xsge3vxa2YZkJSrcj9KHKXAf9ccSqLu9G9JyTzvLoc4muHfmeKCWCyMJNVyqdCjEkX2UcHRqYR1gZLuHthP4cxr",
  "key38": "3SFeZ3gJAKKMzaYbbJyiNPqM2j2hY7JCsczKXZ8YNfQSY5g3hHXZKrN8YxFF8hSwd6pqzmojsjgVVEHM6hy6Jh29",
  "key39": "5BSMZC1T4wXYyZK4gvDX1Ke5d6D1DzRtfEjnQ6gGQeL3BTpD5BXgtjXCg9RGjPqCTkk7UdCSZhjrAUiMHXRGpY7L",
  "key40": "3ddGbxDYG2R82Ar3g9KAXzX1TxC5uzamLqP2FeHTqJCx4CGv8RjeEe6HfZ1c2Zfug4mcDiiM3ZFWpksVrRusV8b3",
  "key41": "23asoZNhUro466AM1ZhqsgX77PK7Sfu8x5TGdMY8gLeQmKm4qek86CGfaqhwqPXgzDaeBq5JXxUyHjmWDD3hiqvw",
  "key42": "4DCcmZFdaesEJFvQCwLWQ5Q5za2VWLfRNm3vsWwzBg1LUtiNxirWmktwUyatXMt4fJ4kzUZ9rWVNwQhNdaitLKxP",
  "key43": "2RxvfHbwBxJpVLBorr7dKt9YyCzDXdVdzUdPhMTxNUJ7dMWTRN22PRdChxppzduYHCneZ7Fm1mryqjt8yfrkVuL5",
  "key44": "66hrmbQxhJTme5GqGbhNuisHuTR8GbUbP9sW5w6vc31FKDk9UMLXum1NvDnGCLHgnzYTunbsJLN5W5f77fMCEi2R",
  "key45": "4nSmwEeiGKoJnnx2GwcSV9VeGgcuj3LeaHddih42icQVbXCyMiPZL6WuLARvyKfUkXQHu4Nu1AeaGjg5qY6ZGBxh",
  "key46": "4hHTs9oz9YVxWH4kbZzAyEyHdAJc6vyv9TbGPTVP7TTUxRcwgfFoo2pE7GNF85STVPWXYVJjda7STxVuzCCqj3UV",
  "key47": "41WUCaWseJ7AuKW18PqHqUfJKj9CwghPBxTkQeTeCPSLWKThpg5XmbRf56Ha4n46wCSVnApQD57yEzqkaFAcNvS6",
  "key48": "3gCDaEkFa4fZhFddwr1E8A2ceSqoPoihRondA3uBrVx59CponqVL1c16skHeBx6ULvbFxE5cYHt74DZWc7Kj6URS",
  "key49": "2fwYFaduPiNdexmLzsZs8fZNXc6Lxda5QZd5K6xitRVsppaGekryfBXfNeDLWxSgwb2Z8w32BgRdmrkdeCyn5BBm"
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
