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
    "3eUkkiw8XCMUVDbuGvbMFGvUTQXURVqe3CFj33iRnmAAUjeTNivjQj33dv9HMkLX6ctk36kmUTp9YWu6Z3cYHQLS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fnuCkArU2Nq8wHfRe87TAsUCcXcm2nnCo5PjUDLddp6pC4BKJmN8YwQuwd7vvN8bBMnmEM5JmZNxBYCMDXzGQkc",
  "key1": "4JFUsxirh6smykijtwGZ1dFS57KUVohpYwshprQ9vgQjiZ2aZy7PnY4pcLDfcbXwJ7W5CZAnhQNTWi3qi8haNJ9K",
  "key2": "67DcEsNhsTMbz2ZW774UNpmkG8Y9tS8R9rra2yEfxfas13tJzgnpjCiy69wvCeE3drfXuuuEU2dMxyZZPh5NakKT",
  "key3": "5Z2L2geDCdafLscFe6Q6QZuqypUUfUtQCsJ1uzqf4UKzcgwDygRcLTuZPio2u85Dw79k4YgrjDRQ1hP3AMox43Tm",
  "key4": "2aLhyZmRtZAvsHK2zenYBxLjF9Ww9EGvjFYGtxY3bwobvsUBdV9VRS5YoZoY31dLStsQGH1d6srVnacRV2VcGPh",
  "key5": "2rhGiyn4oV9bXvEax5Z94uSGckSC3nUb6aMhrMSY96idWhRQHHqkzBw8ixBcgSpYEqvkDG6D5mjj9FHsNGxfvsfM",
  "key6": "AGbbj4SG4cHmuN11vi2Q3A8QS8faiQYdmLCBhzwcTkVzQ91Fb2WcFQ9cdC7FTx878ohfLK7r3zrciVxuqsJahS4",
  "key7": "63XjYApowBkCqB5A4b8cJGJ9uKgE57S3UdWhmpWXg49iEEWTYifF7dw4pJhqxj7Q8fJxVXJbVTvzYquMmbhuUTDe",
  "key8": "5FgRpKWntqyrjpDN4PN5Gmn9geVYhQr67brQe5WjjRQiYB8R3HfrLZ3uEgVLjwv6T47DRTX89nKZfyPGcD9FhLkT",
  "key9": "ipts3gcRxj7mQVqmEYqq8s8jSPkZbryukpivdu5mQ1eZYwCLGDikJZrspgdTiqCZzvaUnS2gtqgvPFnKxmErC5p",
  "key10": "4TjhDqe2BdBznERT4zUzeLSQ41eqbj39HA9iMrvr7YNANLnDqJpW6zyWxudCwJcNJMJYtdRhjT7raQDPtzeZzZtf",
  "key11": "jvK953Fv5gpoJcyoGLKkSwaQWYiCbBagKLBRc89CAg6NV6x6uEPL9TajkvAz4iXzKMsB3JhVonPGH3odnFcJp2w",
  "key12": "HT7K53pNa9GhQvha3S4U2AfRWLymcJrb2WajqHSVFqVKdQFRqPs19pMjGcTknPfHAnLUCas9kMbKjrhCYK7a8Rt",
  "key13": "v13dpYrFTNVEhL1VsjdZu9eooBov9MwDrd8Qo9FMKzP9EN9GwsztTDb7d4k8TKsaBc4KYKfrSaokMYqoA3GxPp9",
  "key14": "3X2XYf5ih37VThV4Y447W1xehHXagJdz9nQwh1DXGGxEcLMrMUbtjRkP3oBhkMhULFrEkL79eCphPHzUZfVNT5g4",
  "key15": "5mxZ8cZq8wgaGNU8TzrpnieHuAoo4RKWLRXySfgmsU52YNNmfxWnEuNuYpZ77TafB68ycEzKJWQAzzW93C3AVD6f",
  "key16": "uvhXpzv8fExpqKUhLn7ncrbFV1cXWH8e8SZ4BBTQxoeaNcAXymKg1u1WmZQumjcfGDwGSwbddobCTE6kvnWFjtW",
  "key17": "5QRkYBpTh2P8toAQZd5PgW4hMUG8NAAvdoxdTjFmaMWpgVWyzQJ63THpk6KMzxtM51VhkVZJ7Qgq7SoVcV5cZMzd",
  "key18": "639UNghTNhNf4hhyGH744EhaAmfH3UQaMgRyDoaxmPTV7TpkaAHGa8nssQDMx2r3MtxywSP2oVWAniZJL8R1fCL5",
  "key19": "42CTQDVcAHpiS3VRTKvxQL8rPPPt2kCfJT1AHDyF11rdgzq58yxprf9pYPeucAC51ZxDByKxKJsxkC5vZXiLiaC9",
  "key20": "9xS8GnVqFGRsfiiD7AiT7mynhCS8N4aCP8CUyRRSLuoWFNJY9LvQ6hqPPWg1tBospYUVcvyTeMZazmdELP2wsN1",
  "key21": "35ZeG76xmPU1dNjJ3gTguxVFgPZwac3GPobRaw2KoAfL84U9x4HPjTXo6P5gk7RmZTirrQ4ReufSfYd4NXTMe7VN",
  "key22": "3QzAvqf5RMB8EUW8rbhqdV4qgAcY52uV2NSpEvKLU6ZvXCmDbhjfpTSjguvYFfbRZC1mCHCctMbN8jtXAFwhpLUd",
  "key23": "4PiotbU7u8bzt4oyvRXAGEtKWzJtnwx7SHxkkW7vjWtGvngnmjwGg3b7SPtcx65yujg1fRi5Zhf4CCgxniTJdHyb",
  "key24": "4acSz2cpLkt5rhERJF5YXuE6fSwH5J8s6P9z6EvBSXumMh9FpXEWzArN91LuqERBDzS8YkAH1mgeDpg42h5voUZh",
  "key25": "3XzqzU63kqZVzaoMz4evt6PWmwbnVUhEasJ4CmrQocMkjisWBJNSTTWWHVA6oDLUM8rHThz1YCjfHHzDr7uK71Av",
  "key26": "32fieTGMBJm7D9zToKyJDGfBp8FZJBrnsqrJivrtDvDF4Xfc9oEYoiLhUo5TBYjfN1TtqAp3pz8J6y42pNVP46Bv",
  "key27": "PchaZGk55y3CtfXZb4iFHCTAVm7bLGXBNrZzfJ4h7SuhXAh1p7hsHLf7t5EXHmobJXERKsemgRZBnaWP7y6GNUp",
  "key28": "2VgXPykJmvTL5XqJzhRoBCKpRuSqxiAY6QaENxxkPurfgDavWcp3cqc72Qkt7hz3FGfM5JJ7uYScdo7G3twx17KZ",
  "key29": "31VkpLKNjVCtGWP8Tfobfc91kdWxyVrbjvJEmaGNioL48LGLciaFWbrxL2pUPYDVHq3vThHski2anxzLt2qEzXTt",
  "key30": "4SGM6RQp4C5akyhpj6Etwp3QkPxHM7s7AJARP1TmxwKkRWXoCm9hMQ4qCFRmdJTh6ncfVdJbt5kMsd2qx3uMKuTS",
  "key31": "4mDPW8ofjiuXBqY3WYLapKctJDufyomsN9LGvpjJNGfPM4BCiNc1WE3deF3TrrmbN19YbPrqNH83zrmUtr2XFAYX",
  "key32": "3cDzDTfDz82a6Geyy89W7zKW81rpNmDw6N8eUxAEsddsgVBBvkRmmFMuWVoaaAkCtnnjdeCd25Y9VEYvrRumYMzp",
  "key33": "5puGs9aXgSEorSZ38rkKtrpeZBzr6dGrDbVaVF8WMkCE5mhwnjZBL3Xk3EQxmX2wgQ9uKSquHtR7oe8ixNHcJEx1",
  "key34": "59gz6xSoe8gWdemzqorY6ZdR6ysrKezWf3AL7S2sNnLYWAHMiq7XvbDHKZzmoY6pxs5WoMqX5vJQLiRxz4nkN5xb",
  "key35": "3BzYjDQkoHvFEbcjVwgDkB3Yzuq51VsBD4atURXMHN17Mw1Joq5mVhwZiroHw52oJiTkmNxybaYbi9KCGZGe6vQC",
  "key36": "4TVzZifuq7A9ecQUeJNk4xvkDbSxhdW6D8EBqT4F3wNH5Xcox6q96En7vWnqmGK8CEoyJHtkeQQSESFTLDpj3jKv",
  "key37": "2tCtbRSeRcVjeg7o4dQG7shNZrnTUGjD6hF4j3nqeZxGF1sRgVDZvpE1iRXMabb99P6cZycamMGwhtg6oGYDAFS2",
  "key38": "3f6BRZeE9aFaQsT1Ajyr11qy1bmGZvfCMZmJWKPF4C6HZWpJJZRc33KDGEzABMdz2wa6gQd8so8UgnjG5oxdk8bo",
  "key39": "yJ8Nhy4ADftjthTFopnrakY2iBtUt2kNrF7jWVAY7yBL6Ku2PQBD89Bf4rXVc614wBhzfgAK4rEh9TZtMCtUKR1",
  "key40": "2R1K7hTKWSQxrrCVQ7PEeLf6X7Wtbm6SHTtANE2kfvmpU6zretyV6GYZd6avcfLj91MQUJH5NgHQFEhMP51tvxMP",
  "key41": "2vCszUdLUm3n1waVBZbiQf963PTgz1NsTosG4V9XCBcwqiKdoPSbiTrmzcyCJtDohUktiGVt9cEhR6APdfqKcKSr",
  "key42": "2dKtLXUoYusovMFJhgApNiB89URMTFcS7zgnpjuc1iuqiDdJZUb2oswJV8Hz9fqTnqvykRznKHK3w84HGr3LRX4f",
  "key43": "53cs7LetFRHDD9nfxsVdKJSfhjxsNdZG3B37zzVvmAmUZB2QTMHXqKWCSWgpXbYyx6mK4TBbMLdvh8MDAnmM6s32",
  "key44": "635M4r25jcuh8X4GmTDxMd3SixnVocbYno4cBDZb6K9bkX1tQrUDoqJaLrtoP2tnxwB4HEUm7QDph2gfo2xfAM94"
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
