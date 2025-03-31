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
    "2JJE4unkwr7g3hGP4gPdZTrHYoZBkmyH4m97hbEjCsk7PUCbJ9NhVC855VuYC1a5xV8WSiSQwHQC5ekdRFTzmXj4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CQsqvUwwdLtVHddoZDVn4cDeqJXoBWhKBg21RFaTwKVgEvfx7DjsXjsThzbvsGCP8faFHyvjeRe56H5nPQD9m2H",
  "key1": "4pFjdWavBctq29ZoU6YPmGZRvnTRss5XnuhvUTjURpPv4nYNnMSrUezzPX1Swgkcwvtq66p2kgK2E5F7hTQ5cgf8",
  "key2": "3SuMpGg81ysnydTUzq7b9iwP5S8Z6mANiEegLeoghainnTuGTmDodqvWeDwH48koeHj1sjEujnTYmNK6J1WQRLX9",
  "key3": "53dMiFFZc2UXWAbYEzAVK92PzQ6niTr8xvkz1ebXFxBWuD9kWNoNEaRq7mvu23Ro6jok54VwiNb7V3TEs5x7Vbc7",
  "key4": "5vMZZQbWKAf8d7yNYwSacX8i4Gh66S9PHdMX59DKt1YF1GGHQMbyNKSFqG55QvT2Nz9dxBbCEnrhM1EC8AEs1gDD",
  "key5": "FDhhrvBVUMxV1FUUJ6SELxm1YPvfTjsx4Br8vxAtiMMLHnUBm68qfyF5eimqwekKSxG9reThLTyVv3Sk9gjXbZg",
  "key6": "4YUMrLE2ue7dpnGf9WW5MHWXsj15dK5o6yUdCWjYFt8khe71a4yBojFhd4JcGZSMGDyvZAPvfErx6p3MmDb2jEkc",
  "key7": "2VGYzdim7Qs456sqy19PuFDaZWvK3kWHETycj51wgpQnz5RDqyWu6NwAZW8HnaT4K8CmH7yY5aUBEb2wwc2hp22W",
  "key8": "ecL6oR4HF79QjsN9oYB4fRRnbrjwabGbSfWdHHeFcm9GPvaRzPgRLtq6gXHNvXKSpTfECRyJv1mRDMsLjywBY2f",
  "key9": "3A8Q1cq9oX1xMdWbeomwYxXqeRCwpejJHSJARmLYc6pEA2bhRNejdZAEZtE2uWyYxZ4EhGqKHco1pfyVWafcEMpR",
  "key10": "4BW5LqtoaMZaftHCTosU7FLuUqcZUsCzzZRhHkdbp9zPJDfeci2bhNP79FFqnZ9HR2EDjUC5Fy6jbgV7FAS1wjVY",
  "key11": "4R37qD4TrDC4BuPsgiSDrUXkFMuv42y5JvdBKJ2pKQsgJhyN2gxgyJ9H7DoUu8GEvG8e3dDcYpRHWaBaXVWHwvhQ",
  "key12": "aGLtPM8mLo4KJB4QD2Y2mJiTVBpwgrSanrV3EtnTdnRQPdtWmau9uVr45AoLRDhQ5PfVp98CN7pT3gVR2p5R285",
  "key13": "3C9iBx9u9hFY6G9TF43crqPTz5PJCvnrypUPXuBHEoGaYVdeFZfV6EoZiChnzkPUxahsU8s4hGqLgfrV5K7pGk8t",
  "key14": "3oS7s8ithEkPFFLwiwsRBWP5gnReAimsiLUBMvDBhvY3qq9RToaF3WHTfgLKcw1huWpwPBCfTZtW1s92eK16t7FF",
  "key15": "3QD7k6Aqvro9zWAH1SAJAygvDVCvJTxCshaajz31hdEyJMrarksqjgXHyRP1QtFM6KoTcXXhX47VqTm49gM7Xr4b",
  "key16": "5fzHyFnKn61zuWp2AnCwcymA5pXvgcPdTeBgNZqeaW2NpGk6PkFNjkFuihKUC1MNt9hGZJ5kK15Yc2FBXvKTd9sT",
  "key17": "3KHPTuo5vNqr4ksZWXW9pw4n5RfxkXkEuTSFoDgUbLRVC5Meh5XHLT9P5mMUrA1FPh81kFJ6Xv2CStiz5jqkSCW4",
  "key18": "27a3URrZA5fDgnoJXVJodHuwZjmNPuaWVYLiE981RKBDVGvFoUEcL88R76YadLceLX1UQLub1aFWBFeCimJSVuod",
  "key19": "3UWGXvwMvA2nwxm7MDqoeWto3aD1zg3vbC3usAo3kgzgD7uCufGNXUVRE6yQVnZTotWt6KZUd82KyUqWN8fui8PL",
  "key20": "3MMDS6tdM7UJmDSbujzy3FKxtB5Se1cpy6mjSGwoqdmQWMW5ujyC8fKm6zPhgD5ygPdKYg3HEEkVBLrmqSpfxZW7",
  "key21": "5SkGydzMrMEBZfSCUsk142F9aZJRHyc3mzP2SHNhh4bKkwctzrzvzBuZfV7EKFCbD7zZhjsKrXxmpTn7aEnGFpd6",
  "key22": "45bbuZ4CV2qXsgUy35gVMiUCQGfzasvATEskNJvfmFMLwwWxNZBzgh2NNpLg5Wef5uX7MPmxMe7k1c7YE25we7ej",
  "key23": "4fVrLoAtfGjF9B2HAfEHPJGP74qmX4xDWnBUgddw8Xr2XNHCFyRcA6dtTBE5Q5QJfCckrQK4pxsdoJ2LecupsC2X",
  "key24": "52BhwJ1BFcvCQW4Gqoc9JpEWYhR3hgjzkMvLc69pArq6jLU7scVyM6Hu4yJGwQe1xgkot2nRb5aYV7B4oep7UyAo",
  "key25": "2TFi1TSYizyb9JR9XTQbCRKZ3kJ6nSw2h2ggoG64EveZxvka6bVo73GZ7BwmUSoaUUB4Sd91YucwyJHrtVqZK8jc",
  "key26": "5XNTAokCDaJZzzrFYzz3cRSSfBhbJys66yV3tAjFZQoszofvmkMHbAmFPZ9pn7wrcZhZ4kL6Z7covcuaa3Wm7yH4",
  "key27": "cy8oPy6SpVqPQ9tuKitHduwqHLM3RPsHhjGdg1XB51Z1vMfvAu3ZcP8MLU2KDbntBDscBMtFWvScXhGFVbP8fHD",
  "key28": "5xvqJoz2DTucx7TbDMyeHRVbtA9q5BCGZN6oVeELu4w1vZHb5xTgtUscDGvKFTzCv3mrXrGUxirA2FtU1LqmaUkh",
  "key29": "3bZamB3LyiXbSpaVv3Ba23DVwMvmnX6hY67soWJREeMs7xwSWyyLhxcmZkhz5ruYDYFE916GdxZVVu9khyVP5vxv",
  "key30": "3zxt59aGVQEKxZE9VNPJhP3WwNHQWacupSwHVbtwZboHK8qs8Tb9MqquLTsAVqyf6sxyfHXa1J23GBLHDjhbMK3T",
  "key31": "3fthikD15qye27coGURgcQtd6jqKjPhW2BJb1T2Gf7EPwLww5D6ovEpcskAiaAcN8ytsfQCf4jXkhQhjkP6YkuLJ",
  "key32": "3S4TE2GYbM885VoSFW1Bbt56gWCneZNBDyEvNAZ1NKnGCKDaX8ZTx8H9B88kzmch5J2qSFk3DbccrqNzaMpsUaKi",
  "key33": "2t9on7XexfS2RAvzRaY17NknqJiCbVbwtfA8ZaQj3QdGFVMyskxJwUByPAkznNXdjg2QW4XGyGVVWUUE5F6QatAc",
  "key34": "49rop4khjcqPfxJruKYRpe4CHAX1Cbsa9vSZ8VPxKcnju2eJwTDYkVBpxuzw5JJLRhW6tfPpTA1RDPcWMEsiJnqy",
  "key35": "25wisny9rayBNArw6Mhn2wisNNgvdYXMT2yrsQdyRahPpeMg4S8MxjdGF13tgb8s1t3WHSregsEd8cNro1mBwDWW",
  "key36": "5A78SGyFvMFCf58VuBkZ4JAHCSiwt7oqS1d5zGv3BnGt7i9MKPXwynrXYfjWvTAchgkyWxd3VZEucmZaWBmaFdFA",
  "key37": "2cK5ETTNiTRW2KPrMgh5Fc1N54y6n3bk4EP8JL5zNxy7nKbMsnokLXpx8Did3C4LFEBxMB6Svriy9rCysVrqnyKQ"
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
