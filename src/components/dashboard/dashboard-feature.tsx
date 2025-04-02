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
    "3ZpMmVRT7JViJadNT3Unr3tCt5y4RBiur5pDNaHuga6qrKFxXLTjLDc76mcxXRMdppvepvkZNE3Yq2YXdTE7QNu2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f8ATKqoCp7qN8DjPK7Yjv7AiyBV1AJX1Zw6wh8piioiEWAMmuR9Y8gaMmmK7VjajHytuB62HJrHAcmeSRawLtJL",
  "key1": "4kTg2d58KbsbgeTbjFeGGe32fo64t7PRhzModtrrpa4hGDdHkXuRgsrmueUAahmw9mj9D4HdBLy1U4SHBJeDEJse",
  "key2": "4mvRvMa1P5a1apy5qnYv5puawe9sfxjKSZm4zqgCRESKYbQknppJKUFBw2BnXLbFP8rkRfKQqjNAVJ8AhCZKvGCr",
  "key3": "4NiZCaSaquU5ZrD3EtmTYZd7cW1gEsXRFKtx4Uwdpx8LUbELgs2cmyq4AWpGT4AwSEXnq4uKCUEYmPD75ditXSgM",
  "key4": "3A2ngPt2SXJuXfVdvTqd9zY1czcQqQ7s3qxbeDWA3DXbdx44fsmgS4y21Vbo57jWCsmDLDPmFtzqKgQye29T6Vw7",
  "key5": "W6s3u2DaaSKJSiSxDggSD7RPd9gkFxBe8ytASm6zKsyvHfaCo5K45TLHC4aB2bBqygWv61utmZtkamgLpJaFj3X",
  "key6": "26ky8tySvAFChn4whS9EdT8pKHkGToEBQ7NiD1Gy5MKEJoBGw5zcrfm7v8pon8oSu1hsHBWZRpgvfSTogyGnauiz",
  "key7": "57CxVt8cjdF5aKT4mQMtsNP9ivvabeZYrgz2HuxXWfTV9b61ehACyFYehzi8ARW53vN57vdKp4VnEtJe3vC9dsJG",
  "key8": "2FkUA4WBscB6XdPU5Ln5BZ3qxBVxXCsDHQ7dtTGSKvLNbb1kCYFq9LXcKjK1Sqgdfuvg5aEgjG2Du7wRgbUqWFSB",
  "key9": "5qw6bZjy4vPZ3hqNT6AvScKQar1yaWCdkJhZKNKZKADASnDD8WcjMtA2Y99kSH75efzFNd1t75SHdw8Jnqgqeadc",
  "key10": "25j19AfR9RKm9upuv4R49zHYpkkgaXxM4fLQ5H1xNMQvTdeMfKqbscLjVx4SEyXjg7ZRkSgjnDuQMmyB9XQSUTuT",
  "key11": "4Z3DLTrPtWyurvSFGRzF5cUkxNKPKqo8psLc2GHZFaDELmwPAnWrCaRUonQGWA5zuU38vARV1BFc5p27t5tfFdrd",
  "key12": "5ghkgnj4gQGMnpPTA9Umz1kaidcGEZhQCmCaXaNjmJ74RABSsLc75fXnibCHjdYW4YptEs8k3BrTbLAZ6fv9PS5e",
  "key13": "28iqQySwkpmSbSBHAxsyVfKarU1HGRBCCoPuayr2g8gvDrTvcj2DaHnV1X1f9pV6vustGrQHbWbcG1UwMohD2PzU",
  "key14": "4QMyrWFLgQ2hRo6cFdgwMiC9cYWbFx8rP89DUsCtMhjy4NRx3mDEhPNHpAnfV5egS5d9KbnzPcXCPsPWSDYpKARH",
  "key15": "5hFTxjTSPhxHQMagSRtfir9eTLPzse4oFY77BvALQMFonTyCg4F9ubtV7q6JGQu9DEt8uwH33o8vpgh4My3fvi6i",
  "key16": "5Kbe4Df6EZMVFTAf1LiTHTJfLwRHLySr53jYmqcRQYCpttoKiWDxu1ssrNA8VXxihrrA7ay4zrL3RB6mgNXD58W",
  "key17": "4mYYFeNyKW9tERHn2Bq5wxf8oDFbZgfMpSEGZM87SdZvb7YjorZ7sAk8dh8YDxDVBM1dRAXbDDrkjYSZ7AJEkby7",
  "key18": "4Tad6oUaED7YgZYoTABB7wDQavVfkVDDGbiPtabNrk1m9MSeLqmb1A9UkVd5RcdXhPh8x25g4EkR3mbfbNnUUWGT",
  "key19": "nguHRsD8dUswzt6zD6ZPzaAKPa4Zr9tLbE7VzQY95jjFuLJdDmVdGLoCNiBoeNfXjCQsgqSMLXkzLBFDHmr5zhN",
  "key20": "4SZPyLAznhPxaoAQRhnUdQo2rCjGGbSrAzw9NgaQDiFoivLqkGNYkdQyScXAYRyzAtDHB7BV4B72pbk6TLq5eSk5",
  "key21": "ogpQrPL7sGu2FXxGFa5HeE8RpXaYhtkgkeXSTYwWz3joc74Z4oajtkoJoGjC67J2R9EVM1cagCaEJRjx29hGyi6",
  "key22": "2XCtPfX8akmt3h5pFQWBJG8U9PCuj6FMqBBJrUVQ7kvLAnAd8nmffrpk8aLFdLH6BGrnZsnNsu2K2bF1BYHRbfMv",
  "key23": "2tdLCuPQMxPi8orHdW2nV1D7HADad6zC8N7QqgAoGioQZebPa7ybpoYih9kkhnSfF4sCJzBKxMfa6zty6jWRDSeq",
  "key24": "N6jpkX1TYd8tEHeKcvGjg5h1E1VZ8x7BNwpPiGAsBek3j6W17WUHp1yYzwfCAdPMMWVc5VkEHaxgUxXnTQfMbrq",
  "key25": "2K7sXVJerqu88FLFo4sTYTqsozCo9kZsMu8Ldu5R7dkKky3EBrTm2DhPxDDaXVXsE6GMtQZ3XXaFniWpvB648Csz",
  "key26": "537szUzKrVoAa3pjtxeDs28K68mxDpxEEK2TLuzecrCwz7t12tHgawBnSaghGkxLjmMjq8Zsx8W3idTAoFBhjSLe",
  "key27": "5BD8YMD11offs4HWZ2dLzBnDzxj4Aw5LzXrB5fRwskn1Y6LUHv24qsti9HZdQhrZzBH21KArz9eZdeXEb6aPWCCC",
  "key28": "3ri8tfY55qseWwMteP41n6w9Qseg8TpodNZUmEfkKAtxLyxiu67uE9Zx1Tf4HUTBcrLbr78Y5yY1NQ12JPGm54kU",
  "key29": "5mh4uimALWKpUZrTHeN3jh9A4GnEqNHitnFqKMv541vm7SQE71iFioKAJZgALzzkRZtTcjrz7v6fX93swZfW3jhH",
  "key30": "GcTe6GsutpEeaxq9hY1EuDK2jun2MmGaa6CAKCo5GvYVaWTMVPh5UJHxAyijZTHHeYXnJZcDJczi7cADKirSNzT",
  "key31": "2hQo9DXSnbTb8ZHvfJnniT6VrxjnweYrbCRrzFy3ELawX1fZamuMtYRViZh5fRX5fG4ps1utcM1ibu9Ch4mcfBBG"
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
