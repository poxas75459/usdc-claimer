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
    "4MzCaSHGywiJr45LKGGz8y4sjugxAY62cF19kTPbCxmvyeiwwspFWk8Dwha1iaPBmXK38MoPfDJPAXm5g9wa6qhe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VoPY8rYAaHFiL5r6WeXw62XemM7a459FUtTQAB3XFRemY6cCuTsFMUru9zVswo9GoxpTnXtxrpgseaoikr5NNmA",
  "key1": "oCnsepob6NefXtkq6VSiMBuT6HtDk1t4mWjkAd55Tp2PZeqLDNMSswg3gzpoxFbXcS5v4AmHWU3Gqq3HWekEWgg",
  "key2": "2zGJKC7TqToVBtrYfA12ZrtyKZmFGumQXQmdpc63z3WmcUtkk4FGn33CtsRi9YSbZNX7JvqXt1Wn4XwZ7cYfWLT3",
  "key3": "49NBo9vmBBM2oodfuXHX12PCRGNcsd4TVkcm4dTR1MxeoMSPpxnp93KM5WD6hihRCtSMYT4zCFky5KT6tzkBxQUP",
  "key4": "zSfw5KsU7WujxfDuuDrM4xg6YVULubLm8Et4bTXy9CmzUgrxt7AT9LwpT6JcEwqXtUcPMXfxMHukovxEEH11d1e",
  "key5": "52xVcRgWWh5FwmdwJcyv9u4pYxDpj4Nd9AqR5ABGqp5yGx3nNXX96fbecqPRZbfmQKBFpUF3GoNeHWEj1aznavkU",
  "key6": "VEVy1L7Byv7Ra9UmzejeRNEMDKijRpsUTsrEkbuCCnx6HDZe9F2i5b5y8WqqyehGctJ5yFKiV4jFUvMbWTN8HAb",
  "key7": "3zno326KjrjV5aRAPi7bRZRX2aDr1wAfq3BLUywfmKzQCittg39JrUsWhbSeuoYngWvoG1GTQYcZW67Wa1x7eyBG",
  "key8": "2DuNZKMW7vkDjroPArSz71PACNAkWNGXPwf8UPGhaExqWMHKn8PJXKuaQebWu87N1t2xNebnx7EEMjKiGiwCy77Z",
  "key9": "3E4prbhvmcxG5waBo893UgMkFn5ep9c1PWw7od42WkzU3EcMwPDwDd7TC2qX7vs4TksePR4pmRyWKwNR7RESrLDP",
  "key10": "3468PZ8bNK3DX9XispXi7GJdbKDqg4uBQNV8bQzSmcFjv6Cw8tx5xVS7i9b1afxAbnip4AEJosnoXcJ6FNLCvUxX",
  "key11": "dkBqZwmTKsG6EffvF4qxN5vLAzotnyEnpvhkxZN2uZjMq9pBRCa1Y3dmdFkJCLzyxFkLNbiyokBXJUqxqtDj6ni",
  "key12": "4BquWn4ke6ePXfyhmEHGbusJ1qm2R1b8Z21GdZrfB33BgJqxEdF7zZa25QNKs8uEhxfyfyx9QTX3p9mdQNSR1uoY",
  "key13": "4DQkDvpMUHP4yJLRQpviKF8d1mhhvEncD3jdN1VJYiaZiiF3hSomiUyRmPoxMPPm8t7vEo3CiwvJoUJiuPF6SkLQ",
  "key14": "3QcpGkaZb1F1ksMd9u2CSLt2sEaKpPgeNPsszja9SdQbZBDiAacFdWpd8X341TJZor4a2RQauRJJy8C93b3gBXAh",
  "key15": "3nVs3MJJMVznns2RRYm7JmL4QKcH5wEZywsyqeyMcH7ugGitm4uWg9m3f7Y5pg95wrqJex3JMkW4raVhJg2Q1pEg",
  "key16": "58DdyNqqqnkj85MuiQ8exJjwA8moj83BKkEdGddUQ8ucZofpNgv89TaiRU9meYBP9i3o1x3N6URYtCUkP4YQTCV5",
  "key17": "3JMfYCZ1YyBwiv8W1H9fqkgybizVr2hY7ssSWmwuE69KHPjZLvVHpBesekQcBywCMVoik89d3XPWKBJFJNKk6WV9",
  "key18": "46Gtm6Y289JjZtG7KAwK7fvwC8rYvf7vjsg4iUPQ57uNAefMUc6uXbbY5XRkXVMB2tBdwQQ7RaFVYEW2uU1pwn3k",
  "key19": "tHVNUXunxcXtDkUGHBVxERjXzCVf6zEaH5WJd8QwXAEAdEKXMvkA35Rm8M39QWP8K5N7DDGouUSKuvnCWTn5pww",
  "key20": "2YuyPpq5u9SkUCSJBDL8i1YzfU5ttrG3sKSdkry1wUs3iMiSRvLpevgULyNqfjna4HZ7FvNj74GuykEUDCjpw4zP",
  "key21": "5ik2uvirv9fsZmQy3a9Hvw3ayDP2Yzuwtc1eALT6ES2kB99a5pvRtfMLLmXVGyPQShHQNrUTjkYY63gz85rZfcN4",
  "key22": "ycoeSmpxPEexuHpsr6ySMAwbVvcquj32dEzcbdFNGzeDbhJWnyEk5vNukbr44omXkjJEK8YJtfbuk8Po9ccZNvN",
  "key23": "55P3firnUPt2T7wLPeaXm8zpGLUDmGPMvkH44FyY2e2QuvBhhvoo5ihVwcz5261TAU6VCbrBZTRdUH8ZPWfJiGtd",
  "key24": "5t4J7heVgKWK4x2h1HMwQ9EqQsGVQPPy6hBG8UgjaaT5LZewGmwBsKEaCpEgywXqHdS7tyNFxtAUrZz9eQai813y",
  "key25": "3HX24TD4wWsisx1bNphRhKhqG2DwRCuadKzBaMDf7agJvFFhoeEWcUTmGn8eVnpqY2PAuP3W1pQUvYa2RLNEJmvJ",
  "key26": "b4Rhz8v2L28iygjtDwCyDnhe3EVLsTRVB2AT3ttqL2xG5Ce15xMnGEekXsZjVjVHwxdPHporEdivzqHB4op3LtB",
  "key27": "BJS1eRF4mhaXu9F8aAM56yqPrHSURhJ4gVHtREtGP3Eb1BPTDYiZLsthjQJRgAjaoTVktD8kzvCBmkEcndTKQaJ",
  "key28": "5F9Hh4s9FA7F4mLe3o3jhmuAdWNq9Pn126nruuVwjrkhAMKSgnkeT5EieHTSPD15hpzQm9y4o3eU2NmRmJ51L3yw",
  "key29": "2dc7uWyDjrYBvbtQgPshiq9eQy7JYRKXVanTbwaHiDCB7qkPW84TtEyhY7RKCvutwjTiL92JryQARP2fZMpwAuUE",
  "key30": "4FLqSs22gDmRWTjCmgKznreSgZG8ncHPj7Jmajmx1n19VY3GeJ7bduKmfy7bdmunSC1rtUrgMAH94rxi9oxeuRbX",
  "key31": "4dq4XuEMfaV8q7S92JSiSAiid7u5zb4dZqagwGTxdWTHQqHKcyHPA4o9Nc5KBARTj7o6GaExhrBZQtAgP3Amcm2V",
  "key32": "GZ7g5uBzDP7KY6GAXkPdmNQoFYmSnaYbEtfFknjA2Z6y2hTXoRW5QCt1x7SLipJNmevRgQwQz342qyfhwFiwWYf",
  "key33": "1tn1TLaq8mqAu8pZee3r8SNG4iVeEWQ4FMJ55H2J9axUoPTt2dNu9LY7dXpAFAjMTjgd6bswKNePYCNBVQLvnMf",
  "key34": "3Ycb7UMk1wsTeMum2RoGK1upuPrGQ9g8iyDwpvNrN3BLYiS7z2CsEkcZXgbeWrgkqqjRj3gVQrAcu1NJQRQi1nv1",
  "key35": "4g1GF6ttyYQ9Eu6EheJxXrEkTNqjvxRGHAvGM4Fc7QytPLityBgWi339rPV9ws126imhQkA7tZcSdecSWoNRCPzq",
  "key36": "34QLwXA8KVfxBro9Y9gzUsA4meaRnQhLxW5joNVLKA8cYDLuzVrZoVLJLk2sSjf3MoFmmUGC8ZiansSdvCAqtPqw",
  "key37": "2D4U7WSDC4jub3iEPAgmEeFBL1dToJVAftGLGmNKqCDbar8Tpoit5Rn28GRBy5WxXv2KnNij1JjqcNMGuGMaegQJ",
  "key38": "5e3rH4cKrJu1JHezWABahmrmbLhzmp4YP5ycQtjYF5qrppWxhbtzwGetTpPEdF1mYYiTkDZVFdcbtA9TRmhZ9CNb",
  "key39": "3EnhJdNNf7SDK187Uqj9NpffiZdE8W4cvS18ZkRTGLUGxwzYAABBvWBiswdDgtXooktvXqD2gwMtNnDiXGjUdyRv",
  "key40": "2Rx7mxP793Y1GwDtV7nxP2ZnKMNCwuned9sN8NP6hfLhrswAF9rTC53Qyq4NRNRn1ZnfsFSjMM5tLGzivJ8KgZdr",
  "key41": "4j72MzTjZWF6eiqJY7XAQPgiubEwPpZY9YztTVkugPAXDLnJEu44EBRERrFXVd9SovS38ig64G51jwcJs22ZkFZL",
  "key42": "4woJe96tLHMDWX1D9jVdsW68WPps6TsGX1ik9sjNmyH5onMfHGFJ3KfJNV2LRQgX3d3YWMwPLyGUXUaM9vWtbnF",
  "key43": "2o6WftWwjRBREQQtGbivJeb1viSFj2y5vbzQiJ3fVJK1C3VJxwxYAd8zGRes3Zsy6kVG6eidCNpzN1ft1Mzysyuo",
  "key44": "35f8ftLV7N7fjiV8DcdXV8R3X9RBAkiLG2jP7Z6dtvWyXGYa96Fr1FZhGdDeRwxCGxcVZEFeds1PXwkBWFhbQFc9",
  "key45": "ruQTPwpAaqg7pgWKPiCZE6N6xVawggL6ypY1fKhyUABa7FrG8YGXfRbkyjXzZ2LXkxR4apr3D6VDTM9NhRCLmpq",
  "key46": "41aRYVucz9RKtcHHtd3Gw5SUFxcHmpMjgQJCjB3U74Wnpa3RBKq3ih8xi13dEMTGLNT8fAYxQ5LkEs81Vmj1TgoQ",
  "key47": "3KR6oX6z4fxBXBf6aMEL3KCZWjyjNhxgaZjqecZpm5Pzu5MZYe9itVjYtvzjyoJE1pn9jHarfhpLb4TzKGqB3bM7",
  "key48": "2NGgeKft2Q12td6FEG77Kea7yzXEDVteRN84jiTpYvhLJMeqMmX278x99WoS8VUNgRPRRmgKp9JT38WxyEBDkRRY",
  "key49": "331czLXA8yLy2mfbKZeCvcH7kfzybH73m1cTCU47utNMfG2CLWG9RgyeYzJTRAd2bDM4ce8gvWGH3khogeJz3C6D"
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
