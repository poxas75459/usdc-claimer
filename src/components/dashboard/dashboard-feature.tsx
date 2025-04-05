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
    "5GEWGad474ERi3rRYcHwUqgEVf1RvAn3dp1VULtPb5D6NJdVJXJuL71yiNY4Z8VMmTPfKjr4832WLv4unNRf7tHT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1hqY21St43pM1V9jbs6FasKMYvqhu1468SXuBPKbW8LaoC873xr5sc1Ptf7XPUBdC5pWGfsvgYSfAhBFdVU96gH",
  "key1": "3eh5bWiS74Pjm6hizG2vRNb2wJVnzYdgKyz6ikBwK1d7Qj48HGhGsWJW3Au87iQxTCw6ck5V5CsQXpEnFPDr7oqZ",
  "key2": "35Y2cZTaMxXUKnPffAyccWb8WvchdwctChzUXLeLpdhgnyNL79gtLnRYcdrapuU5SDkZbKax6LUa8vSVgRGNsf4",
  "key3": "gMTEqzWks68VnhiDcRdBs7pprMjqMSFxA8heA5K9CMqxqya7CnSoz3odNgowC3d5u6UWfp3wtvAxVxZGpMw8zVS",
  "key4": "TCUHRasZT3RwH32tTNMVSUuSkaKFTe1AKGjdfvDdutVZa86sUF4owBB9HPujrCxu8ff7sKVqoizVRF7BXxrNcn8",
  "key5": "4by33ugbkMRjccCsKWwwLVLQckuBjGcq1PJ1HTATyhqpudv54U2yTgEdv4DdVeYN1ppz9jjEtzCNAT28YxPv8U7b",
  "key6": "3qEX3XEMJxyB2tC6Ld3eo9V1TQ2okLer1WNXpuciePM8XkvzJ2HwBdPstrKLZcGHXSFVAt3uTtVu4Voxs4ciW4nv",
  "key7": "2wrcbijLoXmrbGP3uNSe26kncjKLaGAdNvJANKHCe3CYui3WJbT5JET1wukZrtBbqX968ZwBgBXQJxHdY3JdF9nR",
  "key8": "65JNqZkZqajP6mBDri4pP65obhAMMkPGioGxDgRaRztwENjasCzVFZCQwWrP9Nd2DagF5S8W5rvfQusJMzAc9Q9U",
  "key9": "2mCWoSaP7utAcTqCbcEmHvcmthzA7iCFd56vvZ5iSBF1FXC1aya9aoaHzE2PxzorstBZsXoHyTsTDjApJtYGGL7K",
  "key10": "3q1FNvPX3eWph4aZotpEayQWLjzGG44L6XiMaY56PGRzNRCLj8zPunya3rYrjgVFmpF94K5QR6bxER5bUmLYATBX",
  "key11": "3HinLLkUtGir2wESwU2UnCVJpZ3SaRepPPacVFx28bccbRWuUpWsfb14PbLCHMAS2GqLiDck4YNdtkAKPMQMt2AG",
  "key12": "3FZLrU58dtGmKRFRuwKsJdHdPzjYdKWcx6oYu1RK5M9aMw8hSaimvohBZaZaTegE8gRw42v4CUXf75Cit9i9p1Vj",
  "key13": "9TxEd5VKQCPYkv4mtYTZ6zooeAEXb8anFSjoPzP1ivuFJyFGbMsGLh7Gp7mSV8LDbTkU4kHMaaUb8qyQhKpzL6Q",
  "key14": "cHGRN6mULMi8f8E9hkqwbib87B54wa7zXJnyxB4rp4wCMXR4zB8DmGgnaU5PcRTkhHoA5vkk6hdKAw2sLWcQpXw",
  "key15": "54dxVoYe3KEDipVkUNHsDMyLuDjzcEPcurJLAtRgkjwi1HVCf7GdEjHoj4GVfCvjM2PomT1EE2DTaW9Srv75kX4f",
  "key16": "32MEQPL2LsciqeSF5FnBzKi49QnL89cpLWKUkcU2nkYonPwP8ogofGDSqbubtRdLKffMLxncyhVAUG3mdFc9jvrW",
  "key17": "3NAhvFtvqrGQFQ8oiBfiof5osD4gkDE8vz7FBgiM5YkYwxXTj6U78NRVXbtYLXwX8KiLXkn6C89ojFyTuWF2RATc",
  "key18": "3vU71aDP2JREM5r35Xvj8uH1xLU3dadZemnKWpfpNPCJTpfK6PKhAEwQFMtr6bth2zYCqLVRSFBBm1N8PMKwK5Tu",
  "key19": "5dANJZaxJAScBkp1rC3pscm7JfcQyEgLN9t6TQuEMtEDzeoCaz5UzRgtVdE1JU3yh8KhKFHA8EWXViytYjpV3hwf",
  "key20": "o8pnGBdHA14G5Nj1fhuu4cTkbk87ZaPvMmB8S7uwW5xPJq3wZCjM2r327hLgeS9TBVfL2Z99gnrg588fAZRtS4L",
  "key21": "4HEu5JRW9GMzFkpAnAwA9k19Ebmfs1G1Y7C8qzHK1i1YPhJPgaiKViNcvrWBtAvYUNq2W7aT9xJmzx8ya5X6LJCT",
  "key22": "HXo6XoC2DZpYjqPZmKkEJa5uBFfaGjt5Wgtq1FZZDY7Vd9M4vEWs1FKVK8WKeqwLcXtjLQKWR3BXBSLB9LjYKoM",
  "key23": "4acthfzN3YvQvyTojbfsd8qx9bJ4EGT1JNfQE5WaJgr7hoJLpzfptPRzsgMb7oLvJYKFv7rC8anWTup6KwF4roQv",
  "key24": "5stX8QHyTZqWzDm9VEqJgCa7dkvCLSG1prk5TKw7AJzK4szeTuGEgmfiWv6ax7hAGc99EvFErWRFAoRnTyUyA8va",
  "key25": "5v6N5WMXZ4EYHyDHaZvsTjhtDSbeWwmKhP6Yk7dsoGz2e3o8U8HVFSCQEhZ8YjSwG9Pi73YoFZEdUMeLrgde47dj",
  "key26": "3r6c8S99oP7jhco2c6x1ZenDUjg7F2Knb6U4KqwszbgU1gQsd93vTvwJgTVSAUKM43uWrcCQ3HUEZLnizvHma4NB",
  "key27": "Yx1xcC9zyYh8KANea3LbcdqP6tofKKd2CACJe7oer2TmDyQrcoptKP9jFyoBSkNJjN183cQPXUAvNhBB4uFH3Ko",
  "key28": "4s8xboYgnv8rVTmgaxoGhextX8h9vE864yfSYmDqxdum6RBs5dYPxboZGjTm41ohuHYgSbou1WCgxvGHtbchEe2V",
  "key29": "5dVnsUgeiXJpqki1Tn9JKJ1WgJyU3BtMQ9yS1zRj1QvcmvtgyGahJFMszVKzCsuwqDJEaDBRN8TaPsgqXBnGQ91t",
  "key30": "2tNnuLxAJ3g4vyThxgK1uWXq87ymKiPscYmNFEm99zkkBnYZ81Awjgy19PmXmZV2tosiPFKRCTuJjPdtFn9uF2kF",
  "key31": "4pcmF3PT83cYxtMP5qnLwxmj6xfFANGtTPzpZCMjsEvXRzAoNCeEs1ZXe1a71vpdDkBP3WDhEaPgEnxNCpiQgssx",
  "key32": "53yXTccQDKwkosFWKqrrpKLjW5KtGbe15x7J6R6hWJ5JMjs2jyMYykfzhXFkxaqNwtXMq2mAEomBjjizphdWfED7",
  "key33": "QqMuoKqbbTECkUfvLNiUhyR4zRnATcFb1Q3KL83W9Vgmoj8bEVSmWY1fEvDbXmUVaiGyV7AMJznsXqeR3h2m65T",
  "key34": "2jzuBSYY7t3WtFExPV64zzE4ey3gRkMJKge6JhdSJ45DWYQ7QkbZe9HXfLfSwZm7UUisih1UrdL5bA4ZBDWaGa62",
  "key35": "2xj4Mo3DJyhAXo6qzjs3DLDmopSLw3ZzNa9qsaCWdUBXo1bjrUVe4oZ1vsCHRcyD8AYo2Qq2i7wFCj3CSMW4uV14",
  "key36": "4bje8hrgSySMnHgPxpdVvqyAvFBJe85PUqVb1yMAVUpYp8JwkzS45W5AUNU1wx6a4YnhBJRjS1iduWXtJyokwi4A",
  "key37": "yqn7ANwSGsGxost1Av9vtErAD8XxKWdfNKH9nR9o672oQGLPrZ8L1sJgDrcpoxZCrj3vdMLuuPrkUnFg68dXGuC"
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
