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
    "2wrxEAnTojpah7QG472g2KFzsNX2WHUTd3ZEjJ8usvEfXDPb7annWBjgCsXEFjPBNCSjDwXjAyfcR2fKNYHn4jBU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wk7RqpcXVCGNYxuzP1WmXory6ZCiJofnnBG9EhcbwzHkENik1UtVFeRxEhra41fZCUCBEYfiNTmez8qf3x139Ei",
  "key1": "5tRx3YyYqTfg21AL6Ena2RhNoj7wNkTyNJFHVHUZvaYTu3MXBiBz2e7KQ5h127KrX34Gc2jtaDVxSr4Xugbw1iUM",
  "key2": "5fwc16EgJVDzhtumvk3wnvguFQcrSegZVf6WV8csfCQuFyX4jievygQSiy74BYDzfteJpfgEhXczguHLwugkJ7j2",
  "key3": "gZrS3LP6e65xqywLHc5UxEZu8EeGemYEg1Vn1wnHQE2yZ9b7VH8H8c3NRv1TQQrDNrt526frRdMkJB5SB4K94SW",
  "key4": "2KJEfEABjBNfrqycyVceF5N7sFiS6ziGqkTVyGA8epthEnu4kvFDKjh8u9EnYmgvQdSXRmHYwTaGC8uy9nRcwKzq",
  "key5": "6YK59RF8VAK25ZqzVewJ7FbFiVU8ZKZXFypX2HYgMQmj4NDCiFipXqk4gK2LmskuSomBKhknZRTwjgdNqLX3cZ2",
  "key6": "27bEYmma4HjHXYQdPmRSF2n3hqNzVSNg1A1MHBPhKZHvfvZBsVBP5FRQB81eSuJDUbSFrcJkYZxuFFNA8Fvr2bkt",
  "key7": "NKmZBYWZoYVw3dL2bPfPBnnCruZDY3CsvYWZPePtjQ79H5NxJcLKZA7zneEqwuA9E5X724CSP46LJTMAxHdkzRU",
  "key8": "32Xuta7DZGgVUdKr2Ck6RnpeXuLbm8oaeJXBQReV4Mvgn6KLi5Smh1rxT1Hi445r6Dmi1nTWGYR1GrusMCtq9bBi",
  "key9": "2qEDxSVHCWdcTVeXJiAqbcZugWVrHXt7ZXzDdfSvro8feVJRYCdeBYynxpdCSzneVNT6PKEtfmcRZx3GHEjBoYj6",
  "key10": "5sA3ne1JNDwMH8T8kfgBrWMPqhLxoKztcQMzmZiALZJ3Lk8fi5aNnk8Tv4CMoPtyy4zUCGev5dREBkLpBBNrRpZz",
  "key11": "3czghSaSWtTpEhJGUnxKJ3ScjTV1KhG67JmBdZ2D32KDWyxTy24FeEkxmQdEwhYEpf9jWPmBmLSMa1aWV2qyuqhU",
  "key12": "5uZiF2aeGfyo5oCmGmTEyXq1bkrTv86SbhRofFNW3pUbQz7qNEqjZpdc4HYzW5anAWpJQN31rnMs58roNQSCVQwh",
  "key13": "2VtLFG9aLgSYMaiFyoUYjSjDzMAdHGu6GskWNxqhfrPccwRC4GZnM1as5vHfxdFpREdMvdAUDPkXT2Gy7nZPT24q",
  "key14": "5cSiVYsRxCKjFinXmkriT2WvxFXbu9gfjgp8195ecysSZg5LBAnpLFedQj5F5c1knNTaMsFMYdPDXwULnW1aqfNm",
  "key15": "338Fo1EhoWxTaAsnEquTZqX1HPqHZHSsfmqSF3LeqMabCdE8UxzJwBA2pEZSkMuYknxNVus2xodniwUQp5ueJEqa",
  "key16": "5XuLf4kBmg8kP9LHrN6JGUcwS1RRtWcXpnX8aotMo9vd7p13QTosPz36nq8YvX8k4sCu2PiRyphXK3Hr1JLFCSJD",
  "key17": "4YM6rCTAy5WyTTLoHGMKwhuwxafA4aPWPFJgkq7vnPxm91E3TVDvuBYUXYTswHktyk3EFReo3gYfsCMXAQ7mVJAG",
  "key18": "3mM99GcNG2QszGHYPpfAehKAHKnicCoNmcq53Nedd1Cv1wruCygGwmEYn2rkjN9Te17T5LMmtHnpaHC9zFmDLGDn",
  "key19": "5M5N2QUPjzXtUUtEsLGBv95PmMnCxMXndNLuED1ArypEbhCvSbMhugjv7C8QiC272QnuDX2XXYMBjRrENHBEV8hH",
  "key20": "5mMGuPHAYEjkJsUroEGVK78BDrPuHfzmntMHCrBCsQBLWWcTVJGy5dztYaAuqoecf1LzmDwisfasVk96fRVBU86F",
  "key21": "5zfDsA7jDsFHPFoKbeh5KkQaUeKQ2Ue4wRfqbxsz4YaXmHQ3uF4hJJmktPmLfKjCoygYb9BbsRYP6vFM39QdcntM",
  "key22": "34ibR2xRw7MgC6aJX9aWsAefFCZ5mxWKgE1f3tAyp6C6L5h2mSyiYvvcqqSJLoHhHPyc8nToesBMDTZDJWQMY8Av",
  "key23": "9aA465vsHMkHYvDfahSF7HJ5MS1vSqXUjafZZGqt8KgdmbecF6tPN37oVquuUcJAd7nN9yY29C9ZnACchgriD6x",
  "key24": "4sWBrcn8RFFpuN13K2kFJr4PwxEHk4trsBdv9Yp8kRGJEK7Qm26pBYQ1emvkxfB7Z5RVoZdD2ubSMTeKXYFMsGub",
  "key25": "tZrV1E2UVQ77FGpGk5QnWVDpMeK8fN2f5FWqv25LrjrWSFkxZkECRtQVPkfSCRroC3BADxu3FpFdhNRZmmUPYZi",
  "key26": "3vuBpDGkfFrxNRuRsjWwwsFHxaZYj6URxBquLPjZTtvuKahA6FnFHxvCqs5Pg1hmWMX5cS5rvw3xcBTtHhFCyYYm",
  "key27": "5cRz79du5idDPfKJdh2JryPeUJWUHd39TmHZimAYU8GqsnnG2D5ni22C76snTe5io8r6Xow4gEEuFNwdJWTvziEv",
  "key28": "4Asv2HCBsgREgEm4usPEmvHP3CboXSiNdSWfeg5WGgrdJAzkfnq7tdQq8wCPh6Vk16aQLhstBptaWDwWfNtzby4p",
  "key29": "2YrarkdGr2n5gdS9rGn343REetTtKNcLAXqnkGJhBEYQFVnXGnaA7b8w3U91LTW1mizxciM2APZ1FW74yBD5dPdx",
  "key30": "5aVrr2Doi6zYdcXyeomdYDweCy7G1gs7nGyoFkNaXJ5kXnsTHN9qFx1xWBbFRm23QJFBvbjcwYmgd3mr3112Hfqs",
  "key31": "3QqpFoUgBFNvVhVZ1fVUUEhkv8oMX7Ld9BCYp4wYgheBkMVycbGRvc45iBMN194xDEvW36WkJiUwbJGnzp2pVeeb",
  "key32": "3zB8K7fMMUFCUMcCUbVAXH9Uduhs7kPJ43aXYEzCsaemqsiCWbrYeTMd6mqrvW9sDwB6sDiNf1EU6ozsCPrrgWL2",
  "key33": "41sXzNpK21viAAB4cUQVzD8zefEdZY6RDy67pLvMr3Kr4v8oeTxMtrHp1YzHxnL2xvGNZQfVkvq2HFPC7JviGkCb",
  "key34": "4iCKg1CN6RCBA4RhBAdmDSYVEDkD15VyUyUmC9zm4q8wV7DbM1DvSPxmtgmUNJbxfG71yYRqUEJ3MEAh17DA2Np8",
  "key35": "vqZdkV2m4B6LArsv6wnnoDf7Pgx18sz3Q9ZYWZGojc9vGYWRo6eUSAhyQsMNK2vGz3gxw9TEEsW6h2V4ovaLqSE",
  "key36": "tRYxTjPTgusb3LcvEiYCV7A5LKDZUu36US112YXneuMdiM8iEFNGazqxkGtyzTytjQ8VXiMVaCqNmvdDLiW4UAY",
  "key37": "4QPGbCSdgB1yxeSmvXGtzCubzovmW8YJcVhdtc6oiSdYAr8WFTgMj5cTCWYsDbw5retfrDQHGiKjLHvU9imL91zv",
  "key38": "4TUjpSYBwnULUAYdcN8xjocj4D46joajH6qwA3GNYGZLCCr9c7GhZvAm2tZmAWQ7QdwzrNSoQZXdm6uMY2niraZ6",
  "key39": "ezAkUUCCXAvpBBgbfkDxzBAB66UoyDKmoaKTdmRBQ99ARAdc9EXj9afvzwP9tLK7hat7huzKdi2HeDGTUTmJrLe",
  "key40": "26oGaSEBQL2fAyCSziJstQ4a1nhdKm2dgzqxEN1xX8KfbCrLBxg2fwsBPtizC7GUCkrRNUCfCrzuB1kjmWGM8AHa",
  "key41": "8Sw4mYa3UXzTUGtK9ydF2NP15vhTyU9wUb3ewgjxe8TX6ggrfZdNEdwYUJLsGbjULWYjoBZPsGbJJhY2WXFpfjA",
  "key42": "gZYV9xM7jRn8viGw5PB45EgjVAG7rmxK9wi9BHXNUmNyyNReuuwedVbZmh8AQ5eKMJ3Zj6dwUS3bcCSeuz9dRJg",
  "key43": "58aCCuDnVehmXu6EX8VQE97KoYEUoCN1heqcLaTGeAadFvB67ZXGmnQPJUwxM7KxPNaKMF7HGmoBGu9kDLf2uG6g",
  "key44": "U1E2Y7N9M3znPk53nAw6gASWbsjGJsKwJaxj8oQQPNmtwYKXSXBDt88293EYNvTC1n6X7hZJ6KbKMNodnykFNhX",
  "key45": "61cfjxYDSJquuPtc981wJRpjTx9wv7kje6MmvCLmSKWJ3FDrVhiyaUYmxG4oRfD9WwZzYH2kvBUCMHg5u9XZa23j",
  "key46": "M8H7jKC3RWukxMeC677u7qH8UpJPFwKnysiKuPovkTPStBeqZGX3uZWRvpLktfZWzAyYiLcHM1bFWp7mgzj9F51"
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
