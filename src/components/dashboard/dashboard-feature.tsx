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
    "3DEBvmH1yns5Qa7VRCKZwU8TEom92Sq5q4BQaofBvoEWBTHGuek8ndRujhmJ4oDLjawRia24UXWeGjKDGo2gSXxt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wbyRLmGrPEY9SEiJpiLjj3GaN1y3fATFEXhAziyaGZghnhMk9UPWCH3SNmBLaPzU78VTdZtNHLcqb3cD3qr4nZp",
  "key1": "2bnq87dQhim43GkvHURUeboh44Maf5sSRYu7dTYU2bhu77e6y9GGvzShDgFd6gzj538Sm1KFeNGEao1yEEYGWt7V",
  "key2": "5wu5j213UjMJ4ejtJrTKy3QiVEAZeuHqyjLvQzo6rMnGfAKvj8sFoSCbkdVy9oDsvdwUzMq8JS3WEgzCCxQZEvEe",
  "key3": "YH7YonFy2CwpLQjMSBwkTs9v7sGKmFneFLNpDqXk362wxFZPihEYcnWWLj1NDCJpqje9f32iYy4FNTPiwd7Mmiv",
  "key4": "4tXNFXAkJo68ks6fVTiFMfRZ6K2jgvAT9rsXoMQzvAdPit4zqHK1GpeEaXnnPoGvRULiNzmfjadpaNkZoajckCV5",
  "key5": "KD1f26uNjbhJnVwX9aqKp3V8MS8ECE6FHsXPNHjWHq3vsBrb3nKxUEF2AV1M8D33YMCxHMVEuKeTro57Wn9VNnk",
  "key6": "4HrXvU2esixCWcSA1PbtrE8oA7oQULBf4XSa2JZomz34guAkxYqi63rVSqn7Jq8XrxNLHBLZJHPTRPPzBiJzZh8o",
  "key7": "3GRQzM3hw4TPFkM93og3wdPwrAvnndGDt5RLW84C8NERyryDmXquuWqiq4bwJZz5y35sbGKHHMLRdopgCq5FAvVg",
  "key8": "3H5tiX7FCjDa5rzWv3bsLdxaLKR1dbCYCUDBsiRUdeygonh9eNWn2AbXCUv7XmbNScJfhENm9JUdqMHHpR9pzkXX",
  "key9": "21oGKobWfdNUqd5HL99NK4F2KRqU5QvuPSqNo78yJq2qRqW4FhGAio8RhopQoYmTgTP3pe1nG8TzFRxbToHhcxPJ",
  "key10": "4paf3ygh66vBYce2EVauBtWvV1EbFGFEAuKgi5Katcmft9QPBZCnJNcCFV3NAWWQnPuXY3Ee2bgqQiVT6CtSUEnK",
  "key11": "53P3U1tG2QAE3SGaUr8wGCVtPDnWTXwms9vKNi72XvNNr4LWvSe4hR6Njdb7gMQw7oAFWdfAxPXgCu2caGbhEP2L",
  "key12": "PVZ4gHENjTf6KdMVMuKBZzWHNJLVfuWTZ9uyDoew1y7YJoDmxkGacXN3GY5y9We1XC5ao7uGeHJVqkzMw8G8tZz",
  "key13": "39h2qH2WyhmUKULnHSFVcRn6qvp4GDvpacP4XXv1xWeCMCJhzDjkKTQsMotDJxjoUvdbKAhyjPJSmhY6ZFQR15S3",
  "key14": "4bryBavh7w9VYJeoQ9M7dp9m9TRWCWS7WMqLAga9vhbo9r3bxRNHMxkGmAP148g4ku7EzNfEwpfd4A65QNKcXbFY",
  "key15": "tAQzYNJ2tPnY6Aka2EWBjXS6RmbcMYtjrQnVTwNjpN1wuWciVfFHMyWpM9BKDNpkPUAZZn21AjDbxtXFaur65G7",
  "key16": "4e8ueXqyoo6XszPjFBjLaUhJ5HfE8nV7AkJedWhmfv7s2mXSXkuiLpG1Ne16PW2oMRPZXGYqeyWmhizc5xcd1Lot",
  "key17": "4hBPezSRQQJHAy6Uc4C9oP65vkbEjzEqccrhSKyVXM5TjwekK5YFZk7EY3oZjgEG4JMMaePxsPtrgp86yDXMMc6H",
  "key18": "55k1p23BzYwS8W1MM22YLJ6NubmDbB3EPYCZAthmWgM7o8Tism3fFPoLMk33xhDJw5eUPHeGRX4JR3EJuoPp95GU",
  "key19": "5NDarwo36orY2QXN2gMW5worGAr2yhXRtbx4DMtNDGswvjt5q5RL55Tn1g6tGAyBrBiQsiWwWdXG9Xv3Wa3gnSpX",
  "key20": "61a95XcnS7nHYZtPDnwCz5Zf5SQcEEhPURfCuQ7Ys3hJTXVqe1bMLqvzTR5E6SkXgpXt1WPH7bS2hMgk15PYfCXL",
  "key21": "4zJkvb9oiNyyxRJVQFL4XyA5qCyz5egbsm2hCwtBAMeGdarnfqTEw9miE5ZY8jggeHNTxrwiGDTn3xqLcX6Pkvvm",
  "key22": "51dZzj89ARaD7aQMsr3mN7Fa9w82LmSkcKZNiRSwZNXpQZb2Ex5seAaKmMZr8wGwbM8GgNY6eMsSZroubnWYrcfe",
  "key23": "4Xothvxhms5TkVYwhQ7ccbwNEtJ4zugE5F2hSRSHkxWBwd9uPuBwCpehmZ6w3ZHQbm5KreqK7sdiktRqVX987goQ",
  "key24": "2ELbSgwuu1vzyg7rvZJdE4RgkQudXmiGAECPXr9w2UHoNSrHcyR4crNThMYBFa3KVpCaktbTy2eeqQPp3Gm8H4SF",
  "key25": "5dkANXadY9fGtuVNkKNtfD4ayyWSyfXHha3cRVSojgXadGxry7icsPjXCoQH1W4qqbQPVEvwochW5sJRTszcDBzP",
  "key26": "WTZPqh79AMJUHAYkTgoQx7k76v7U3Gcf5Qqdr3uMbSLFW6GWp4c68SQa3WZmLysGqMZ4Ny6gEkdbKpxfHXRs5jf",
  "key27": "6jDPTHbhg7BgjcrqNhWy3renfb1JTi7t56vtrMFMGX2KccS3pgFhfKVVhZkPnZrSXpZM1iCXbEuezJdp6C9e9JX",
  "key28": "4XzjUSzGC6HQDpu3f1YPiXawPndDU4GmTTgbU8dZhfWX4ZWc2iMpKdsw2mntQKALMrZ2XezhckYVdjUKjkzKA8kC",
  "key29": "gfHaNW6ogCrqmdJWNFqgKkYwkGuJDTVDuxPXG8EZ8soFfQtkfMF2hT8FbnsH18R5n6VnPVkXNLNfFvS4K56azcv",
  "key30": "62CQmuiyP4z9ZJAVRnqKBQ67Td1MzEL22oeHZ8KijGzLfmaesdGaJkae5C1Cbxua3FkSwBCRgznqFv4B1xmdgoqm",
  "key31": "5PZmagrE2CWsLv51jCosq7p49zv6p6aZqXMZEVi3rEPDffeyDSFfp2ME1RMMaxAf2y6ZGTgucATtxdmrqDDitszK",
  "key32": "4KodjuzB842JvDg35ZQgjpEd4aVbmXPy8s6LufzUv9jMBDoNWRWGbAb6cggMBvqNmR3mnwmnBhMND7btRf9mhR18",
  "key33": "qGJ7DbUa1D9gDwaeG5v4p3WPNP4pZ3Mf67sJ9WpbTRcD6JUDuZzRGRUNDiqqNRJJ8bVJdUPL27APhbVPDjePnCi",
  "key34": "qsuZSj65T42ZDctgBEDJUVZ6pGWLfoVxeWFCFKMBHATcf2y42stP2h8FzGpp4jZGGYbp81M18iosUFrA9AVKnEh",
  "key35": "4fec7tZJAx1FdgS5A1QQpVZebM5EfqpCiScW2iqLsFpvo5uZwAiJNsyeszv9aideeBRBKGynZa5SEinHpGJmkYbC",
  "key36": "zJhyRuKoaSh3KdfeRSB7fQE9bm8pxVLP437if1o5qj8UeaEomFrAxqxATn2VtdpWqfX3KuxeAU6wRKpKdu3hfX9",
  "key37": "i5TiXVdLXyHoRt9vVyjfZkP8hjCk2QJ71pKaPBByhfdEPgvaRVRqmy5E85zaYK5j3MCkpF8e6eJNLN1FmQV5iVu",
  "key38": "5jLp2uk3LbJPeF4MF2ErXuPyhEgTEFBXe7aoYB2cqQTWLX1dbenWRfUw1dPyeiGHWkWtDiDiLsoajqprEXj8j2gs",
  "key39": "fUPhLEseQ7rF4y9eHsNmXQzgt8u2H6U9piJJzpFLYcayM82w1Db4FPw8hvaNpbKCBujokbiHzTqL6sBpasVXsQ8",
  "key40": "2QtmxJPdfPwwfHxD27KErAfUgScX5rPxQQktxJyyEt34WKgbC3Uy4gCaSbjMHcq8PKqmSSJEdf9t4fc6AWBGAnZ3",
  "key41": "3aCCZoVSFQjxcYuwiGUkUAdpS4wdBXAzQmJr9E15vGP9wqMsNqx5BLTbTRLP9WdHaPbFGH3zbJ2hT91tiS4HaH1r",
  "key42": "3PKhgqdfwvsoa4fm71WGpBZkhPB8ffxBq6KsmZvddvU4JLtCgEpw8Wf7Wx4NT7YEqW5NTE5Y4JfQCWA437Mre8VN",
  "key43": "4LUjWxYGWYzdPdmqev89AVGGtRKsZCj2fYVyUeZtqWdfDvmbGfZiNfoXUAugRp9mX4vB7j2vjqJeaoAco55EK1uJ",
  "key44": "2NuwoG5jHF1rzmR38ARCr5VcrByS8eGjkwesZSQFaj3r2TdHZpw34aNfdCdLdBj6gTJLzAHRLx2YbhTPFQ7tLV6t",
  "key45": "3Gchr9Lnnh3cbroeZzgDshPzYiHvsEqfrZQxLujpvQrYm9KKHykqw7dufKXRPahWNsbYoYdU1faw3vf6WbnJUcSD",
  "key46": "4ceGw2eERd3emZBxHHfJkzVfx3WknG4fZSWGDcG36cXsn7dzoZ1TWFCBuLduNB9aEBgPCw1HUzmoSMfL8tFJecDV"
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
