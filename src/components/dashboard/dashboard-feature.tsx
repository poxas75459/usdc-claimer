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
    "R8mEeDuTWeLToaAVHBCEdHDwVyEn2vQb6Z4vmJovZw83vVxqnVzgz3NFJTibeWiNroqnmomkwzWndyXZfNGAWNu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZR5bR8jheQoAYK8P8px4dBcAqA8VqUBqMnTt1WdE3Khu5x5SnKnAJh8cLMidAvCW3nYrbXBVwaENfxqYKLKYcHz",
  "key1": "3t72CvdBEzGcVJn7NdFRa78S1gWZ3c4Cdn4UkBG3d54qaLK7BhHknvg7e78cFR1F7ApFMkKmqD8HAakzk5rM1msE",
  "key2": "3i5MyvFneDo22gw7QDC3ea3nnX4VgVFTZRE35LtaQQMLoDMJ75v7NR2xEa9XbkKZHPzHVESzCh2yhQXYizrjvuKn",
  "key3": "5FeHhbpMWaMjeE8aBhKTxXHCZNk9yBfAnkgejZy5UncsLu5b5kF2AFT2EBGURgQy6nrpHtwyzkvy5HGTUJNz1jqS",
  "key4": "5jw9tjeX4p54afeGSgPd7Rrc4dHPQeW86L6AtySqC9Wwj7vDk4jb11GpxDwNNL51uzWi65tx5EHCnQwVRirKPDJD",
  "key5": "2eqtnR4GNnxnSGvBuFtAGsUfrG3YF5jKkYBe1MfVkqgee8zbTTKDzb2e7cADfZUbQwkcRdLoXryUtE6UGxEcZ93o",
  "key6": "5TRFFk6VhHivkd6fwSR3eFJUKR8eohjuZbSKpvYBP8KpBnMHuVu19GMoxKgQdrFyykqVqxn8nV5uYJVMH9cUoXc",
  "key7": "3nu56Zq9sH4mJcMHPJtReiy5dqekWxuUJUncLuyGWUpBSqvqDVnznzUh5Gj9ebjcnJ7Q94KPFQigNxKf6bXVQzmv",
  "key8": "27BM8pYpemofU69nt9E9XfBG93qwm63WZ5ahuDB4v9CF1shQbvxkTegLfXawentybpfzWZ2CXTDTJenxEtVDaWBV",
  "key9": "FxXmPKgy6LZGVXH7tfTitj6dZLdanPmEtivX8CxGTqECcHNqULqHa1ossSu68AeQ7VzJLCTRTH9DarDJPFi9Xkk",
  "key10": "2YBF4VJK1ed5uhe7KYjyGCqzMS7Nb8i1bL9TM8pm68w5A8GyQX5ccz3WrsbKHLkAYu4FRQT2epAncmZYvggWd8qL",
  "key11": "2CZ4HC3PfsKY52CdK8AJTn2PizHeEz1vM7upGiwW954YmeuZ9vgxzwWhN5kv9wFEniJqEGEQPykmRqSimpPxdazw",
  "key12": "3KjapxN2aMRk9VfNSyCh9QWFiBTYNzwrn5XnyMALWBw47sBFGh1J5WuxwzLqAuDoSDUpuFb6JxbnAjGQGewdvN15",
  "key13": "5LLy9NvSY2YkscTKyH6YpRonb8CEmRJC37uSy845cv96h8axxGJjYVugA3HEnXZDucXCX3uPeZ3mkNFbC4frfrJE",
  "key14": "5us4gC7Pj3CgQ8cG6iNgikKHTE1vK2kaXk9k6rHZeyGJok9RWsx92BhmEkzagfYwkRDX7DEhgRGcqHhAR6MSz388",
  "key15": "2oQ2piPsmuqvE1pXY96Dwd1HxPLQx3zgANcPtW4Hn5jHozeYPCWjzKZEJpABAmtPHTLZFiY2KCYhR5gYdwWDxSC7",
  "key16": "49kmPQVqLWo2cDX7pwDNNcCSWgTf99skX1fWgY23JJfRkaiGEhrJGu4rzTfwL8xeS2ko1Mr4Ubi5YkvfBfJRTZwP",
  "key17": "vmguidGX5xvjHy7sSSqMazJqBtyYevNrWNmt5UHm8aihS4dieEWYRhjkpuXXh3Y1T4X3K37XrAVD59tNj9zvQZQ",
  "key18": "5g4f4UdVBBRjEH1HZ9qR2ckLHcAEN3YKmLUQQ7GoGs4ZSCCw9h1CnYT5yVnz7yApdw87AioYTim2ztGJdtmKYkmT",
  "key19": "meMkuniSgKnYe7FPsmJxqk2JDhymkGDHUvUgKW6qSgnbYP72FhbPbSTHEwXXafs5siCRVarswAyJb5QkibHxn18",
  "key20": "3eEmNzvjgW38qsKWYcB2CEzpurGNkwvoCWAnRNPwxmdhLo6zPVqP8ydXaZPN1KTSccPgBwV8w4c1N9VXrSSAP4tt",
  "key21": "4LYw2rnGgxGLHtGgpi6jVG4G9PmK3WLoLL8UGjQ5qXQGzXLqeiNZn7BD2wq4NCdxC3Vrcc1v36LCyNUDYw3UeHM1",
  "key22": "2h8QMS7uRGCPT714rTmJqTTAKphHL7a9T4BeGNLW8KGQuTaKK2VfrCpe8DGsG9jCDRQuTrDxRD3kc2RvE5f5iRot",
  "key23": "47RwEriJi9KsPeY8myYHFPCs15HR2m69bnZCeWFv8sqguzpUu7xewGxmmefjetQCndUpprdZw86rVFrUhfs3oXwT",
  "key24": "3RMQUooV89jCozQbJHYKcx2T2ActZkBfN2hPjH9uEtaBTcQwjBRC5CH9jqHQk9YQVDwQf3iRGjiRLooXzUizxjup",
  "key25": "3JEejKSPSRCcL3fCUDQFKwQKNkaJit1543dfgU34umzi2aVF85oeLd5BzMj6Gi5MFxEsc4bBVqAXmmeSAfJ5ZeZe",
  "key26": "58bYj1urMWftT9tPYxPXTJeCbwEczNLFNXhf5xdgV85EBiP5KgPaQiSzfBCuvMBebQ8yppt4fGgoCDu95U4ydPFb",
  "key27": "2Y2uWR2RmzDgKdKeVLMjEhmrVHsF6795Vpvf7kW3tGMPhdMDyZXL7VnmA25ir4wCRyzgpqafSkGo1AZ8S17n1SWX",
  "key28": "4t3GWZsdCLhLWThSMwaeqrCdFjiS6dKmNBZy9gTaYkDueJLLKPWcoMKJqWhHjryu2hmmWvjJFTYWiV5sivawbjxb",
  "key29": "aayu7wxDkMQY2SxTre7W9JcSHvQTH8F5ywnrcQjf9eyTgoPbnLUJtuWGP3eaButodBFNboCun2sgoM6ZW3Vu6om",
  "key30": "3SNcXpEebu87MdqZtVsRjGQU3A2qbKwtguRDvkbTbC1kPtp4wnD9nRP5s9kWNzAUeCqHHXHG6Fit5vtvyRQEdw67",
  "key31": "4dCYeuqUyt5dzrNWrGpt76fiwQb3f4xmoThigsGReH5j7bENpZKSubXJ6iTYViTVW7QMJUxjLSawQYDVbRWVjCK8",
  "key32": "2pXqdEPFaqwN3Ae264sLpQQ8mQaRFY8xq7ZWd4NVeUQ9giQfn2Dda4CVuUXCrEaXAJYhoAfdiJc32rF2KLx5dCwc",
  "key33": "3RYeMwzcQyAm9dRnj2mkxYgq8XAGLcNkXBn5Gn58oFYTFHb25RQdFr1DK6eQQSGJ4GFrDyFYQNSiksM76k214Ydn",
  "key34": "3KJhZdrF1oxwJJMhg5LLEPpK4DwUrMgH1XJxZKAdb5CtdtAeTnfjKJvwThBTtq467qHXNEvrp1rYeHwAGCAZw8ji",
  "key35": "2EpvX7rVW9ZxTeCkkRsKvXMztkGbJJWvSBXv889gJYWkeA6qafHh15TUh88fe5XehEEiTZBiVCVFjav5NVHYufMm",
  "key36": "JNfoswUVxogu9tZPD4tvCXDDNUBLfrFHMHQEuJtPqGdMwNBt2J7sNeymS29mBanbzT9Xv7gcb7ESwKLEXLJCjrP",
  "key37": "3YvSjtaSukVVYgmhkEoF4G2vzyD5MKrxKHmfZkeQ5RkWN91goCcqngkQVQzoNgpDPs14kS6jh7QZkhJcHhSh94oU",
  "key38": "4MkTFYeXwExY9duP5b2pDFSSZgiVJPZfVoqmtXDzdxtteVi67em3NRSnaZ7oJmCvwLNB8H5XyLWE1sMAkcsTxSsK",
  "key39": "4Kmai5QKJs9DtaBUvcS6Q9Nb8aViKMVDm9F3hdW2gojjJmm2zFRPeXoXihJwjyWTbMRpeaC6UdNWhNifW5hvNTS1",
  "key40": "2Rnoqrm2T7TkuFaAdW8FcMciqCwrgW3TfajUb5f9QcbrpRM2r2mkU6nTPxgJCeHYBRaCJmWDUThBL2NAush8u8AV",
  "key41": "cicp7kWKUUMi6WmsnjSYtaFL7bU1vG89BjHCCk9TtDwpAH7F3doZEv7Gvufrcer6PRpZgLb19UTK2ju72PaAxJY",
  "key42": "3FqK1a5KvThVRJhzZzhToyjjQ5uHCFn63kYo5EUV7DmWCR5wx78b4PVN2HqDeM2njLhNhDg5HMUx7EDgMAGkcq1Z",
  "key43": "61rRo7ayMVYz5vDYC5hzYckVqDnTaHBbD6w8ervXWocArZM7Rk1d2koTrezXWEFCH2FVaGzMna618fnVEfMPzqfq",
  "key44": "3FjhEbB8pUomPR2bqs5yQxQYLBUXoQ8jGVtBBGx7D7saNMvxkCp4ZnY8M9BsqSiGTLEQ9hFo8qMjw5NdWNFFADaw",
  "key45": "5uBK4LbNgngFLhp5WSaeeZtsrBG8h4f8kSPBiB8pkQAFmCQcpqNBPvPnmRmfsHk8gh4q1Fbe2yo6TetHUEfJeV6V",
  "key46": "3Z1M9XVUu6UxoJC12rfiZR5BiRSmgMDjqzW8kfX7RYR8D7A3NbmGqaswyTdDX56om1WuE7QPN3ZqajAUEN2DTHix"
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
