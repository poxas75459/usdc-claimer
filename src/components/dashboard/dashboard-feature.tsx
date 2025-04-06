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
    "4PtvbD1Yv12Mdb92MefPf9aQWouAghgxMqTTtfkvKmTRo8m5DsfT5VdEgwqP9fJHiLCwpEMXCK1oZ4GkVFy6tLbP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28RDJqfbwsCzq43kea5muu8yYrjufLC83BjfVTxRbvT8ApVXptvZj53EAPLcjVjkuR6XAoL6jLMi5MPz3QhqAF6i",
  "key1": "5br6gWHo5ZqA52pNJZ8QidFCiUMbxQ8xJHzYBb14Sar3ZxgUsQcFEKW75HeuvkPdtGnGRjtaNGdJpaW3VzgU6zKH",
  "key2": "3HjJRK8Gm57HhiUgSAhU7AzT9jJtUmKisAqQ4bpv8j7rnNbSsh3j3JK35XzPP3wFmYUhQiUUiVtEcvrPCtECbSp6",
  "key3": "4xBaCDXSaEtLPhMkpNhM2n6LaYpoG77xFguuLTcBtYtZcCKFbbwEXX64s7gFw7RHrD195v5symLx2YXEvh7JtauN",
  "key4": "3Pv53xgqnZmoTfMWWbkABXU3hChNLmuZMDgDK9gxjcXnGC3jj2yxXfxSKkDp6oF1t3GVktM41MPNUnyh5PmwzeUx",
  "key5": "41Rr4yC3TCJqpgSz2tNeYJxoyennTiCYTZhX1HWTomjrQCxsNPp7ovNgkAt6auvUNdMB4Pd4zsc8Hhhg24F8YCrM",
  "key6": "5z3CudBcRs1Yu1xSGak8ds6wPZNt5Z3dHxjgAQfvmgwHvKsdpfLqQEoASKcVAPj9AVva4MnYzU23V4GTHitb2w2c",
  "key7": "3HQtq3AUFMYKanwjmz1Sjq6Hge6qAqMzLTkQXR7XzCjoFVbq2UEksQbTvvUR68U5pcTwgbQvjCufftXPQwFypER8",
  "key8": "3pTwuzDMtTNPvgAzSG2xiJnHDQQ7rsLwvALCsLKdW4BEH1vQYrMwpBtfc88g426AEqD1ARHxTFmdNQXLdgP1thZt",
  "key9": "4WDmsobtemyqR2MiUXfBdZnygafjGhHkFtHkCLpxFg93Nb7amYop8GMpsv9b2EsnyAv2L5ekmstB5ZL7eUueB9i8",
  "key10": "aFxsY18Qq5ip5vkRvFbVf63fbVtsUQF3CAC85e14CqfeimgeUcifBjTbT2v69KuynDMz8q3LBZW49i9uA36kxZ7",
  "key11": "3KbRaWyV4KH8TAH2cBHCHSiXvDuKex6gAGqKBSFFzeivcPtQv87aNKgp3jSh7XFyBRXEbjNBqztfVuqGjWCq1dap",
  "key12": "4UuvSamZsNaKzHggrzXtTX5RTd1ry4B59DRuNB6S1CYZwXYwLxMkpfuohxarQFEj2m4h6xqhNViFFPrpogyRqj9z",
  "key13": "3TDRapiXewJDJKNXsF8eRuntB6KdSah89yS69EpLkwzAUgdGCBmSn5E8BQuqxat1sbYoNb9VekgVsRrW9US8syEV",
  "key14": "5LBRdz95pbfipbxV5cT8q8AG8mQMjDUFoP3Ux2hqQh3t9eCuBwWnmXczbfiWSi5dCP5oCnB6U51wLQLrZyQzeKnZ",
  "key15": "37hEp98vBu4ceoHnRCyefHFz2GDm3qTrksFCUdf2Q65Qj7yRoDx4VKnfrwqAqjJZ2wRcGqC3DbtvvwMLjwjRYckV",
  "key16": "4TUXNjwHgzG6SvyXehMc1JffmsZx7GVcHRb4wXgLM3RYdcoUmrJshAgPWjyXyFTK7ue2n6XWNagnjp3mCj1uPe5Q",
  "key17": "4wCEkxXgJQFHZbkbng7nuBifM3f8xh1dJjQVKdqP2j8vaZZGUL1RZWdETyXdW4ZmgucCT3bVhQx3Mz4fM6A1R4Ps",
  "key18": "4ywHeR5EVTxxAPr7zSotBWXYqu9YT4AEp9935R6g62DVVeitbbAkoztsQAupZsc7BKDbt7asHrk2qS8QH61a6QQa",
  "key19": "RP1VZJJE6gYa1X7cALEMeEFabsygcCkZexX6MK1wkCJBaNUafaGcFPtdDrgLodksWVAAtniFF345PprCvDK6r3i",
  "key20": "3qs79UGwNqL4pzwZPfpc5VgfM7uTf244i7yEkyHsCppYK6vCsX9dRTJnyjPzV5nBNDwFtHuwVH47ndxtxUwL7en5",
  "key21": "2Gy3NUiqvFyFseqtWbyRzCaAAkUQxvbQQxLeiG3hZovrbYDgiYymai2EKkCd4SaNHS9PicVba43iCJc3GDw19pJs",
  "key22": "jph1Gk3mxktEuNW5rmYas1Jvy4cryRnZFP1KXpsKfXGJDUjLErjUPyHaJjX8y9kbGn9kS3RsLAvZX2nFeqFuAue",
  "key23": "5WgZyWbFRaJMZpKkU7PbPQz86cLMzyqGvmQD8eRqa3AcNeeYBTrinFuGdduUZiYTiQqp6sRaJFHvDS4iaMWUWQJA",
  "key24": "3d1j1FpWTxUwH3HAXrPbHAsqfW4sSq5WBuEFRMzapAhsqaeJCU1gz5eWJu7xCELLx8T8VHjGv8j5eu3sAvPSPwJo",
  "key25": "2XnbwVHdUGvha2NPfCRDSq823T7suCkyLAaSufFh7U6aVeGYnAyy3dpLg7SgjAQ3bExXP3M1EsjJizNXvVj42YmV",
  "key26": "5FDkgMZgNkcTaTJ3ta3moJ8rmQAeziAF8NoSs6wysLWePPuLz2BkcJrAugGXUK1zFSvw9PY2uPtq7ZY9BpXfrLor",
  "key27": "5BFUwUAtqL1ubdaquaHqYiMuTsZUxgzd3U3Kt9dSBDpTiepFiwsViuTfcYJxZNcCjKsBA9kqHt5prFyRnTb6TL1D",
  "key28": "44q8KKhLEbfRecRmfQHGfefMkhjB3CDdM51fZ6yGJxV1UFcnAokUNageuE1WNhnHS4KgKPdgazMzHhwArjxpHumr",
  "key29": "46duhjmHbGBaCPTNYF1abzfbugntianVSPF88S5ZMiYhNSouYxcwzdUQrUcyoi7VYJ9Jray7DpG5zCdjU6UbzHHP",
  "key30": "T3ron1X6oDNveuyMC69X8ns1rNcvPDgBPNKfPm9JbHTdj5pejZdfPevCKZJy58BfedURc7sBvPz27WyXAiUTz81",
  "key31": "5MkKF2Yc6y2pWfakuaH2Yed9BzBeaUNf6G2LiyGr9EX5Q87vFFXUBMhLfwH4qKFut9YMe4fx3TFgtnA9Xeg7LcQT",
  "key32": "uJ7m4Y82HeuNVVrcBeWFL8qud8fQi1z8hKZNrrwhXmKAviST4c6sCTB6YaQHxMDraXqQx6fsvTGom7AHtc7F6CT",
  "key33": "2THtGNYkJWzYw7zcKoThvSDY3anBp2bvp2P43iAUQykoRe7jJj11rYs2EoXewjrY7F28XfV5R4E1FSuu7FNpSRwT",
  "key34": "3K5Gzcj4YWyLEtqqJjbB9pNjg1n4FjFB5nfo4sPJer4PiDDZeWH8nEVddforFiXfYAiqHHktp7Qanv26dWTFrbYv",
  "key35": "2FEGUhnZGp2ifaS4bYUFVE9r6Z3dESYn6DqoBuFrWs67rSZ9Q5DzQ6rjdALAoLC7dHqqzWnPuxwGGfU6AYYaktDU",
  "key36": "2ujvfDrjq77jX5VeY7QrX4DM9aXi3LFcNpGqbY3vqfqyQt5xrKhmeBDxu2vgLuGjj6wDyUTdUCe6xpNoof8qgfKp",
  "key37": "2RtPvxscZy5juyLBXuSVrjfYfLQxQEvEURCuLQtqhKcqWLxFHXTfRY6Dv7YjCvQm67Yosm8Y9o4H5qi24LFbmok5",
  "key38": "2UxDL72e5hptnboBqQh9NxNzrrM8t4SenmL3nskmzURZ9B32X9B2KFVLpma1XtVCqERNCTBAfL1jzKAMsssAmYLt",
  "key39": "5eJrcEipzLtheXBKbiCzbPgvFjYXrAQ2Hn4GBZoDANNn7d5vgyoVLePKwx9N9E3pGR3T297kKULqUpb9fwqxmsS9",
  "key40": "3EAdTU8Topn3FPcoSWhHx6EXTG4hVXSeXSGY4cfqTy5cBDsYwab5EoSYFT7GKS44RqdgYrt2pogEE98eS29pEgLm",
  "key41": "624okS1iqXFQYWX1fGMVM5PzmVwuCcG4gUZFDyjfSWVkiGoNQCynFdoB57otsL4c3SFLWH8xcUwUdJTwBJH4zWdy",
  "key42": "2eG94dtPyq56CoVkHvedV5nnTRgz9bmEWg3GiMgd27WmmHhMyRYaNm9Z98wbixqhXM6T6eVUnWyKvkMscXyAMPr7",
  "key43": "5AJ4L1ZgJHepZmHsQeoeYdF7BzWZJpDwSSi4d5P58rdk9KJkHvCRRrHa45MNDArq11iJGJsZCz7x3DFMS1UPRauD",
  "key44": "k1F95cEsLzQmdoAjYYarTkiFiW8KRkgkNq2NkArHHD1AH6Fs5BnVrxHquUL12v5fAfTPPMb2jjmxZ7gnnppiAUk"
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
