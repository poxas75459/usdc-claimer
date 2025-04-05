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
    "25is3EPUPnZPDuByRtg61AXKaD2fWuv9WjsEawERwxMTZTFcxxsSuRgCiWguM8Y6ZbymveXsQGr8CvXidexhgft7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B481Ko2KGJrDD5oKneceAaggDnFx5CN49uHAXdTpyDScvBn8djk6gK1bgVbM5FgzefSrEUHUgiDmJfCkhVNs3D6",
  "key1": "5med4rbEdZC4PioApsNVvxj46yTcE8zmy1o7H1bwMUYn8HyB7SeS7PYpVDheNXhSMyYXJZvdGRzRX6RYPpMDUuhX",
  "key2": "2GTVnQyX3YQg9N2xSTWJntftXZutBBDQyJtgRuKhbeg7ihhogGNc2kcEFhbWBrAQYr5qD7GCQj7cdzhDLnsr1JjU",
  "key3": "5N54pbUWFrH1LGZJbDMq8wUw5ULix8hg9wJHbBAwzExa3sdYwDhPca8tfNmWNL6T8fMSJ9in2CbroFX7MjYnB8bh",
  "key4": "4LSTkSSUQCWo6KcoiWH8468iR9fUHKgGkrWumZijPP6hGKms6Z1pY6vVUBDK4wRVCNkMmmjte7iatADmFVMwbDcY",
  "key5": "3wMzJZ4TpUTqi7hY74GVpoeEeu4MSa1wr6n6wRiGgD1kngkSrb3Z71JoKSGGtkizPEjHWDTjy4pKDPRYv6vchSXv",
  "key6": "3n8oatFM89fSzZpkbcrEoQbQSwBAxX1s713FSoucnPVbAky8mQDsfg2rRR73xijzpHh1XFmZbPZEAUMj5AxQEjg3",
  "key7": "zWBnAvioVqnYUjrPQZrHYkvw8sf3h8Adir4DHJ4pAg3mnAYTxB6QmJy4XKNygbcwhtcVGG94LktcHDtKfF4BLN8",
  "key8": "64RDATJ8pko8YW2eh43k5a2GD27GyaCichY5nDQJ1xUz8kyVraHAefvSY1vmoAy9W8g6TfvuJJtBDYihYNiBbh2o",
  "key9": "2BwRLovmt8Ri8E8kTFc2JW1pyNqgy2vw5tGuXF52QRFvyEXgktbTcSLnjqEK3RgTD8hy4fVV4QuiKrwKMvMtmLyj",
  "key10": "486c2mS35rDNFpjLKborcTsH2DjWcrbRqDwnyWVPxaeWUTQbFsdZZmKn4Pdbf4ssp5AMFaP4bJ8diTuznhYznQLa",
  "key11": "3R6EgzbrL2KdfUjMxJgu3WKdTzG2nMCRsSt2AryJ1GHViNfZ2BKdSgGAUgFj2nwpQYa1SXzBudaEnHP48qQc8PXC",
  "key12": "2mkaV2EvdxPV9N6VWYEenup5Se3UfwmRiUBswA8HUUv6FkJWhnLVKjuX236a7GDEX2g58BKbyv5JHaob37bmbC1n",
  "key13": "3NbaTziKUgA5myN8Nt4umAaxpacPWdW1Rauo62gJYjRRBkffvhTkH1DrAihgciKH98jUJcQuXaoZJCNV6HRPhxLn",
  "key14": "5Uf6vdiLkL5mEKxXR4R5aWuKwS7zaGVY4zKTAFCBC5kQrVwBqHXoDkEo9kXMNVAz5oJ84zL8yDDu9NKLYFSnL4dE",
  "key15": "5npi5Tze9LFWVaShmSg9kcPxZvs6mg98NSA2SXWh1BaAm1PLYij2mkWgXKrL5ZxyZihKVV6twhz5FLPTdNHbjamX",
  "key16": "2goVHdWeacYo63KgWa9p4SnhCMmXC3uPgnJyKi9M3eVbZQqe8hnGNiRFdm57sUuhoZpLFYZcTqyTR6S8GnVNFcKn",
  "key17": "2XbGP6BGCcYrk6ofiPBBFDEJemKVabU23mAwLoGg4QEQbzm9hrQA16botVuDRFaFLYLfjZeWbgURpuNWLMF7Lbzm",
  "key18": "26d2PcfjxmV7GWqCyMWFaDE8BfYLcVv76eRE78woRHvGKNeAkVJtgZmDE4E722YqPGSR1xYovyF384N97j8Fgo3T",
  "key19": "55CDWb7KzRNNCviWbWGkDdqfaS2pQikyQL39PAvBxBaQH73j7hv5xTEdWsBttNMvAa2mHPAJUPDZvqD7gTVuH49J",
  "key20": "54oueiqLFD7ekMWi7XS2E9CnsLBq3fD4gZEHRqzjYxG6brwtJQT1Ss8yyaj9z3YxPSSyDCWobQcwmWZuiXFNrMnR",
  "key21": "4e4eeAisaCEzoX5ACwbExe2Xribb6TDuBxi9TCm85cEAiNNEV5oybh7kBcz1h8FPWDDjhenPsySWnRPMBRye92UT",
  "key22": "59pf4dLeP7eVZzbjNz5LM1d29JiuwAirpbbyPGfGrvvfzQkcPbxJW1r5B3Sug5u981DVWdUz6eqcsDBe11Qwprmj",
  "key23": "sTwVkLRvNrNpmqxFj9iggxAJhjnsP6NJx8CweTjKXXVuAuiHjfAbDroYov1nuZVX4hKtWfwybVhGZn7yLb4hME4",
  "key24": "4FdS7qUbhKZaj8igKJrAk4X3U4XDHHdeoqyjbCghbPKpoFh8Pob1rAGJvzvzZpEkNtG8DVAd193ZHWPNmsAXzVWr",
  "key25": "596SBuwYgpVWiUn38BvwGEVLW5KzEvu9wDP36LTGVgtSXRWkfWhMs3h8M8FZ4ss328iHAkyQXmWWJk8N53RyQXwj",
  "key26": "3Qgo3yVcNmMebaHApJ3Zgv3bnspSbMZc83Ujdm9vrERZ7HCMmp53LNoaLGWHRuLXVHieeH9GZx9eW4NvFhRbp31z",
  "key27": "353ok5u6B6cUCkimUWCrxb9oUMv4qGxmiWBp3Svuu6kiUXkDb2z8seY7F8zUvVFnqtHLqjgiPC1wBS8eyBKTjhKj",
  "key28": "3zMBnoG11bAuTRZSj32cX67QsEMBfuMxRQmNtPJ4UQa8mNaqrkRMGbFYjfA7CfAFotTbxdYpyKnwMabZfg6gKmtF",
  "key29": "2JwkYLZLc7Bn6j385aVYpVBSJDwvR2bufKL4CiELmjXzNyNDEam7ENHKESieFZ5BvcdVZktbHyXjxTm7b92QMgnq",
  "key30": "5D4mWhgrME91eo6bMR53BVWuYtjDaMALDiuCp7EWVJYMFRkhKuNZCpmj3yYFmFjZyS3z5gRZ73sfXVifRXWJDW16",
  "key31": "48T8wXQDRBzi8P4ATr34zwXK8B6AGUCeY3wKo3TeBDVtTx1ynGyvj2dvXopTC8PJxEQjku9n5VAXcjxiRZm5yafD",
  "key32": "acBkLzNWQkA7c6qvaVy4cmAurbdVfLqTosfMQQGvYRYNznnEH85E922ZJNkpqWuhr1Rrz1vjKB2EaZnRnqqc8pT",
  "key33": "5bfMjBM6WQQVpWqJcv8KnjbQKHKXoVC24w2ajn3g2oCHeYvsTsVgQAfEGuwW6RDwEPEAF4doWYhkeQScmNNkag2M",
  "key34": "4BLfasjEeU2TZu7eTjxHhzkj3NbxiBEStKZ8yfr3dGXmKG3HUT3vbgndUPux3yhBZAWjr75iUJtALLcHzyELaKts",
  "key35": "3MaB8JwGTTYvtPYF3wvJCLnYSpDXDrEC6vaSNzpTjUzYkNb1msCZTUdNyhKTePUtiwP67dteQrnwe8o8MWSGHb1h"
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
