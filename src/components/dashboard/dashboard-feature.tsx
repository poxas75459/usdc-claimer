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
    "N3yH8j7EQbiaGwpgtJQqueCEX4CNQM4L7RNYRH8zC1MjMxwfgWZDBovQtsdb7yX6Angw3oZqRxNbNnxZiGsxu5n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yjdjBVp4oLeBpGBQKQsvxwDwmrpGjex6wvApUebRwLmbKrgT6AdoLgDxFPvkkov9zdtnShz4tpJSNTDdQALbci3",
  "key1": "3P4nA1SGXnMX3GG6uQa8WSvqjL6DshRBzmvhV4w8N9T2Dqi3csCKm8b7w5K753E56G1CSZMn4NqCJyjY5ioyDXD",
  "key2": "4nt6AoDq6P7KT113KhM5bDgQrTxYfeu6e6NgkGcXHR7o6KNmyPX5vyRYwTo3XAGstmCANhiBR68hNYjawA1WhTaG",
  "key3": "57tXkNDKCJPUBVCDDJ3xYB4iFtwMD73F8ukMn9RB5ARNsVxHWaSLykKFfWgDf2FoVHCSDdAS4CR2UQPsc2dCUms8",
  "key4": "4GSK3Bz2EH9N8GKnqtiv7xwT1s8bA3PrX8jkxTG8yKNNhDZBjTU2htWxntiWaKsmiTP5Sh8Dg3VLuPHkrfrCngi7",
  "key5": "4r2gmJYyWRaBCSUTv1d4S4KUpiZZf6gEyE3rhPHiqLfHwynatouwG8q97tBqgHMzjzE2mqDdetwT5aBMZ58jTkAy",
  "key6": "3Kz8xxvnNzdz5sRC5QJ3sM4mn12mkRTkRuqLFENGXd6PMkaoHhe7Eg8day7LVqDr9nH4uuVwpzWstjzDPtZ2sFmy",
  "key7": "2cCVnVpjSfe9b1Vy5KGYHzjeMeEodNYXG5ig24VHY6Yu4fHsaVEUwLts1kEGkCVyRPWRAhQXNK2uEQUaGCpfbw4U",
  "key8": "4tRmj5hzHbuSPmSrtShcdAV9jH6motAnjCkAFNHdLwN6JC9AkYtxZbRhe4Gn5mbrGLAuPfb9FK2W8pXAHuTt4egm",
  "key9": "3HqmL4JqV2Xrtu7bcAeEDktDc4V1kKgNVJKS7HtP7cpxwzQ6C9oTMN5HxMMf5j2n3TxUCrYBvxUA6tTyQd5eRofc",
  "key10": "3ZWhzMahpYiLvRBy5iZo4ocPU3uQqBkUyteSPfDmoivvdSJG3AhUrqTqmHHu1KQx7j55C6QFhFVgfyPUaNKu1FYL",
  "key11": "3Ctg3kQcVovEHv82pvc8ZgCgH351SbagcVvLJZ8YaRpZS87rSq9r7NUatt7eBobJxD8MEP2MiRHEYgDBm37gk1Uo",
  "key12": "2gLh8ZFyo1KyaBGPWevEjqGW56GhmG3749XKDDPPG6qsHdvcwuVzM96wLoFFP8JbGKfUZHkhkbw78Fk3yEbcjTCX",
  "key13": "3csaSKB5HNNdwm5jZsb5DWowvgZJ3h5GRWWuwpTMnHr3pmzqiZvfHiJbYb7CY6ciRJ81G466Z4X3U2Sev9Aw2GrJ",
  "key14": "5aKSNF6uT8C1pyoijKdYEVodZ9UWqqoTcWLCaHzmk9zgBdzqfokgqp2zzSGm9sJuF4CVNEaFAftYqQH9rDDqEGsA",
  "key15": "3xsGnxtyHQow7aLr6Bp2uLe9gVeoXna9oYJN3C8ZBzZeN3nHfQzxtLkXxXAURrYMvDamHo4SkR3TdbCAFcG6vfCS",
  "key16": "4u33Sd6pM7tnvKD76GzHjbykDouQt9ZiSp2crt2odfZgqS9eDUMn26YewbRMG9Fbjuutiwy2PmhLVUErZ5dWrgNA",
  "key17": "4V7vphbuApr7317qX1oa9vHK1pTgfT2CbUFobDPxfETmu4GvPcTjKfTL9aV9MnjeHMsBXshrQZurVxW2xNmT5RJq",
  "key18": "4Y8TvhJSg1ukwzek8GrnZpSfs3474MXeXzxRTp62oit4VKnMFr4ueR4yG2iLGX9NVurpqxjispomHfx5Fmb8biv4",
  "key19": "5rwvpaMuUEqB5YZjrAyY6ezboQctR26bMyrt6dVDTdBcc7ScH9Qhwcrfiq2nYPPzXXwxJBFP9aTJyr5EoEZZdttZ",
  "key20": "JFTDrM9D2xiefpyws3r4N2EH9F3SkzYL3unuZ4sCFeQEmejRntwMEbqPgx2in3w56xWMaHebtFKbP3zMYDsLhj5",
  "key21": "5wxSjMLeccQ1EkVTTJ9A4bjqjECJ3GbHqskbuivAm4nPgcWbBbrD4cGJdaVDa1gesTVGkmcUimJKkmUCyKvNTBdC",
  "key22": "4gKQxvqVQ4simT3dnvwN27C4LyW3SBM26h9NAcn4yCh96ZgwmNQ1RH78kVEXLuYtewLkdPGAzfoSUxqzqA8nN19R",
  "key23": "5rhEpFBxuczy7LCVHZaPr8EwxHTw4jVF5zEY9AP6UybMNHJf8oFGiSovuRzwV29TLhrJjQEom35VZguLSY1zxgjS",
  "key24": "3EeyVTJsBNZb1KHtVyd3rjaH4vAGoX1MB6hps73cKsJZJZQT7GzL56sthevpnobsugho4i4MGcodwq4tBzNJQGGM",
  "key25": "3Fu5mgPzfnLcyWzhf6nG3apjeq7n17defrbeY8tHYHBreKefDX8zaPxSjoYMWGNCkXYQth5MHLC6cN1cm8zrvQdX",
  "key26": "7BxZ7xekqNhZ8uQsX6Z84wzN1KkXNJzAzwucfoKRLVs2uqP4iHrUMoCaV286BAwMPtNPQn7aCqNCDWYhk99ztRE",
  "key27": "51jfTkh5NdEMrJiHRbPpGCoxVNLAK95dTUbqmTJTWLX2qB7sghMdeLyCP1maXEu2H4jAvHe4A8Ubemr17b4U2Bbv",
  "key28": "5dtACVMLCQrL24GQA4buMsaDgWYqR16P6hwuff25Df6TT2fCvLQeYNoit8f4rD1VpE3X8sCfzRmwjovpeMYYxWwW",
  "key29": "2X6NatJuHs2aWqKbpgejNfnm7tkjkubyUH8TWGnxW6xYPjqZRXW3HA2gz7pbicNVYoo4RbTwkq82diXmtwoAszhH",
  "key30": "46KgV7ajwP3GrQC8rnMRXuhyn66gitECBMyrRNuB668TkuMu4ojbqVBZxyQBV6SLaYHKehDJ4R2hnJZddz7CkrK9",
  "key31": "2tHRwtU8ssWFjKR4EWKoNGPxXzv21AfCX2suJdZAeecWuFnnGK78jMgxLRJgACNhnCmrd4pHkgzErGDASzXnHmMp"
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
