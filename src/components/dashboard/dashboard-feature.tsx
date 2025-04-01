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
    "Pi6DhwY6EFM9KZj6GDKFNLWX1BBQHeZqh8wJqJMyvskhaNTmp5UTUdhGyrehX2tkAEmNfmW9wn4jA9oPzCfR7Ln"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jjG4qPQTu3dqvXgR5cd8kH52YmA3RZ3nYqBb395RPxARcGyUj14B97g9oVTvrGDjqrYoTRLcBvT5aeZw2Xa4EAT",
  "key1": "5hKhjgHDwS2PN4tFgPqwxFihueB9USikd3gY4AbSjn1pzydocZAyLbWJP3mP4B22Z3YxboNqXzQMVrK5TXWKFJHU",
  "key2": "4dMrFKKeQhbNzrSruKvcWFc2TbNbVJe2PNVHFXWKmELjgRUMX6mWNuoc5ZH4jnJX9Qs8hn4J3zVMFY44iUGzqA79",
  "key3": "5f5nXR96tSxExYrVkxHJ4cmgFC7BSF1ibQP6gTXnwR9MtVLLcfPQmnUPCsVi7AsjuX2gbCp4dvMTsABz8VWnwfmB",
  "key4": "3ESbVDhAYDNomZvpCRyt8s6MNEf5dbvCodDnFP3oxVjxUibGw1i1jPSpYs5hQ7r5KqyjcWfoxtnxBaw81DQkK14T",
  "key5": "4Ss9C3KDtEXm1oMgNjchLmEV9jA7rHr9HYJfaJj1yeKx5URLJVfC9gopBzNbgYgFQWHFZSEa53cFrxrQBbcia7fN",
  "key6": "2tGdNzLLgfnPRaucjfCwnyLsiUW9XPBHa6V6tk1rcBKaF1eooBzQTSVMUWkZviy6Hjo8wrKFX5RACQC2xDWxA4gL",
  "key7": "2w12R2wkvUvZAXEYmEePZEsAPSynNXQeofPp9xuKGiQCWLm2f9c8j5FAUz1eCFTiVqKZ63Yp3RgPbgqDu3H5HnsQ",
  "key8": "5351ZtoZFA4kjYoc2oBUNQHqA3z9vdnVVG2cQSJYjBMKngWJZph97EP48YRfUvNBpy6uTrw1BowMgVXDo4AqtAHy",
  "key9": "5QnMRcksC5QzXMchWqpXJgwpPrVzznGLEej7D3AVg1p8TYKiyhhEwTuvqc8ccDtsPx4TpmvP5yDagngWJs6dGA4S",
  "key10": "3hhRZ8RjPQvJ7Ve7PEVkYPuQPFXLiDA2JtczPjF1ekcSQbpkn8FmnNkiMxMHPyaJoAGEdiR2ej5MbXtYUdcX1acf",
  "key11": "1fUBhzpDo5rPNSLLNWAqJ7c54GvimDEEJ8oFFFa65Fz8z2MMwt9zcGPLNB3KnxGhKG2Pm16tcMFisHWFcajC1qi",
  "key12": "2zACJ5NkiTJ3xCqXM3frQSBeE7Fza5QRbJvrwj3k7NGdnzdPQKSc3uUQbKG8oNRQTXqYk3YFAdzy4rBZU9mfttiJ",
  "key13": "5VPiyKkoBNfNDNcCinUQh3eAGNG2iYQjXMFdoorfKBmVwJoi5jUvdVNH1k9NvzUPJwSnyM5er52LXoEru1CC79op",
  "key14": "4bMjTznjxe1eic4sQLvzrZaWjDa82RaJokV5CZjipp1czdfXV6HEmbEaVCKMaeu4ssCDmiLusegv6pr1etVYoXFs",
  "key15": "2mMA3c1CXviabb76gR3a2eyoE88875HXDmS1rrndZuQrhRysvxt1ii5VA6BQedavvi8zYqdRS8koEC5xVjqH2qMq",
  "key16": "4HLvJnsPPDPrMUVHFdJ4Ncykz76mRWELWVLeFj1hpZ2nuS25DcHmUHB9Wq9MyXtKmkxr5U1LmjjinpDDoniWDxhH",
  "key17": "4DPgmDFKiDCso1pBU8UiAzw9seoGHFc84FmTvk7tSUEbE3jVVcAJScF5TAjUm7LZ5zu7X6f9ZzYSee4wFRCUsxYP",
  "key18": "znZqzhea7vMdabDXP2idsw2zpNm3LymJxXyeu6qmXMybKpfb3Yypfo1GP1JCos9UjVp6kwLihkkme5qPDfnRg58",
  "key19": "5UUohHGHgL53FLXSH432MdX9KwLLmpZBZpWTibGVeRNLX4JEF1eFU3AwtAxVnEquPNfrtDzh15bhVkBjdRyzUxJt",
  "key20": "4VNxh631zEGY1ZpeQEURbo6r6HHkcoP8EpZBiSShf73ZcMWSTkt58uf1HUjUjNmmCT5EmLTg19xWZobT6ECu23gk",
  "key21": "42kYmMUA5KYTUxDkMboxvLugDgsX7nc4WgQ7BhuTUQw4ASdhiauiepsoVv3ifwJKr1f2yMvgqiavxn59mmhVkbDo",
  "key22": "4k7aYeRXYEeN17YEpsUmuQjwgBWM1vmknnUvdTh2rA8sWTsZ7gySHjVihScZE8C7pRz2QdgNEycqw91SfDsXudKD",
  "key23": "E5kV5WBbAytHQrq8GEaJgWUhRR8taR9U9WtxepA8hNL3UarAxL32wZfPWGP4Ja1y7PyBY7jYgHNQKxqbViXTV56",
  "key24": "5oNugzKgSJPJW1uKJ8Mw7hCpPguSkpfSgipFeKF7EAC1xR6agupGJvGBxyTjqVJ6dwrGBRUV1ixBaFig3FpzidHB",
  "key25": "4WeVhmkZtYTBEjyaDz3azHiswEiq9Lm2Y6V2UYyzVARGxZ2YXPmHG1bGMWs2Fw8DNYRCLy9EQHNCnsTkMJDmos6s",
  "key26": "5PPnoyjNtz3UJs1pKJtaCg5ZEE5ewRG2KiBNqLDp2qp9SJXLX7yvCUDbxQTTDdPZSXioAum7R4oX1YX9RX2USx97",
  "key27": "2h4wkmVoftr4ygU6vHi6TzLqeTHCFNezRR1Zbd8RjiB2hXCeyLBNZ4zVUyeDp3hLKzi4rhxipDi7SDxvK3jxfr2g",
  "key28": "2vQRsc9gDAGSSmJf43BzwA3tmJYeYNpSpSmdHVDx5rUE22hV5qEne3PdWrfvPnAQhdFJZwbYm7YDGcWUNtqGek3f",
  "key29": "2nWQCz4tHMqfRMVsDhHSYcxAkRh2Kasfh5YXyjDAcG1hvpNHrUjZ6dQs9d6Qz1H5kG8ZLSGDqBCspbQprtMKp17Z",
  "key30": "RxVcLYPxBHdidZeBo7T8ndwmdgp8N1RqoR8ucrFMNnz59ahBjhcXiXSbP3FyJUCjkKUp28k6znj6maRsgWqNjaW",
  "key31": "BuF4zPASRFMg7Qz4RxNEq7D1KU12FKYE9GDtFyWSeVjyqqJ4ARy3CsiyQ7LHynCC3MDvvKiuDy5BqQHpY9kabRx",
  "key32": "2FiyHwg2qkHwyWSkbHorwwY68bRqMGsNGSMhg4kn8tDST6QWST53G1uKRpRwKoivgAuxZYHVGQNB9QUEWusZ9Gke",
  "key33": "5hdcM4wye6f6sSzhJPjuvLLCc7GPpJdpoW66FxvRQgeCmUwqy1sMXERppeaKwFzz6ybjsRwKsXdhyHRQhrWDkurf",
  "key34": "26kwKuFjFo3ufPtAcavzuAd9M4BtcLvedLHfTKQwqwrfMaVLzgwzXfbRZ1edG9w21EGevDuZzVxCcm3c2FiLy3HD",
  "key35": "2CqsReWgmfUcGmhnVwUHL5jNDEzDtmfyG1SBGrHg7zVgZVuVWkVF8HuiMA3JxsBQVQqgMW4hjzhm3eMxfLPy8qbj",
  "key36": "4e3T3p8MhVX9bFaJkB6gQ3Q2KeaexN8ZVcGHYafipbZiTCuxJw3Wvkpu2yg4wMq8rBLGBSiwKU42A3pUFWC8sQj5"
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
