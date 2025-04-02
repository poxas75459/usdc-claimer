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
    "2bUHFsdKCJLPM2wpE8w5694JGwoXdVmfPvX4eoTmhcPv7CbvdRifkyEw8cCpQeeU68YYoSw3Yp8eRSSkLcpUg16B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oJ1isNmd5nsf9oc47P3qewqBujC7NFWjf9WzvZUPyZVb6N2NGt153KuqDTdrjSkcZadYk92qTaRoDqrPb3Ax1kq",
  "key1": "2y7oUHKZuqg9LJ8DiK4M5ZgMSPq6weLfU3sY2AfPXQZUMTY2s9o78eaoFDmLEC9SaDjX7rTbcghncS8Z8icKi6nj",
  "key2": "2DMwGzz1RM9PsVtDCNFYDsBUad7m7BGksRjEQmJgDTV7XukHxvkLRkAYPjzJBzDxuSVMDgwtg3ZuJbUGqEKAM8zf",
  "key3": "43zTY9VQXSHg1sVr7B24PqHqp5yb5QwkZ5th8YL8Whui7uagwd65UZbSFhypMbrDdXo6oC3PXcGGxEAgV26PwoJJ",
  "key4": "4xwfxMGVxQCN6TMmxuqsPH7H5dAD6mV1HJrAQ5TxrLKCpgvnVzZ2GkEszzSgwHfdYVkZDLvbyNP7F4Bw2j9zhD7b",
  "key5": "2jF3kasBHDCUfAsYHCcSf6yjB4e6Vta1vjRPcZEuytEFkgTwTuvcD69pN7FgEFRkbFxjczQjcB4LCEZSbcDup7Jk",
  "key6": "2y7wDs3GShysE5c6raGEZkZd5Dp2hdCd9W8E6jSRZw8B8jsfAehEAyu6bKgdyst9D51yLB2RmRmwyWs47reABzPA",
  "key7": "3vmWh8sR6onsNbdSktYynfnzBYNQxsZr1j9qzfTpLqHiaa19gqqjAVJ5KHqM4GALgxmDnRkM2tYgTCtYztcDVfsx",
  "key8": "2qwLK6euJEtNfx3CtF4LamtyCLb2qAeg5nLieAzBcJGGtfJVcQXpPc5FEueyNL1kjVWG1HwNegbZEMFLiXbXtXfL",
  "key9": "31kRtSmQYbTm4yZmwieZqDE7gswKrVx85wNZ7r4pkLDv2Gs1D1Dt3ZGNEuBcezQDWwDpmyVJufME8BghLfxL8xgu",
  "key10": "2xTRFtF3UnuE7xXShx6q7EKZBX9PzBx4UXEXgXoh7TEWaH2kkDjnt5ZQMFdangSCW9y2VgDmEcfBiZCr42gxZfop",
  "key11": "422XCysmXkrZfaZDcsuRsreFzg4b6x1uHbVNBdXbDPPwpUo2KqYkhPt5PPrk3XVicym3FH58rSw42kAJqWCjj8J1",
  "key12": "4FDJ3hg3iJz8LLKybkdM2TUh8M3BMfjpi4eT2kprKPSKKLQ1mBMa7MUvbBAa4h4HqjPh7VG4psUBK3jTcSAy2LjQ",
  "key13": "nZwUDyhGLrsdXVuvdEREVvWzBGST8PsTah6EEoN3EFAh3SZDgKt8LwDw4urp3sTGnrepFxMy2cEDsUv8DTLoRwt",
  "key14": "3oGDLjk4e32xfveF9RDi1zqgydSsHyi19HRnq2GLn2DkR6Zvf8q9DediyDKgtpupS3M8oBZ8kqGYA9kvzad8HQUP",
  "key15": "3JqNTxhG8yGw9FjHr35Rj8zrRdNUzswD3CzpXBua5j3w3B9gg2EiuGxq4YvZravhznQ1TzgUQzpw5o2SNjmbRD5",
  "key16": "XixuNvaypBi3527exKsGX5cZdoKofXr5uFUVxLaf7dXaYR34thqADpqYdmF79JoLxRj9Mr2Y4h6vy7oTPV5jfN3",
  "key17": "w4kUNyEZeMbiyZbdsMe2rBtQ5G3kbPz4owiGdT2rfyfrBr4o9By5JAUTmygdn54CTrhUnVjfqLy1AQpZsCBwvgS",
  "key18": "yyzaMofkG2isuinvJCMXTi916Y5VcAfk7PXUdM3Xoo6LGpFB8DoHa9GXAQSjqC42Pvcm2DjsVSup54ebNzFga6A",
  "key19": "5TsziLHQuwchCSoSGFZqPUWqabqRifckHRWfrQRBgQST1WipjHvTibtj7CgYcPh1xxL7X2dMCWw46Skri34VGgqN",
  "key20": "2FHcsyVJ9nFoLD2CcwaRuNCJLL7G1UK2VFjFY1x3WxcYH5npM4sRsVXyUV9iFgANPccg4KEY3auF83KW2AkWnsfE",
  "key21": "2HbYaoLy29SSuNS9JcRLLkWQiMRyf198mXCrVxioyHdQzcyLxSDNtiof4aSDQtBv7kfV4yLbQk3vFuvqmEbAkxT8",
  "key22": "3KMczes485VjLbGWPC9HXKUovq1uTLWmScGVdEdLeXRDZG4QK3pU8sYDx9VmqYggtu64GEyB9FDKamPyA9Adrjsd",
  "key23": "3pSQoknKmPF83PoUjqQRx3VpGBrNrXisyQMVHTQFzKcrTqdXbTds7Z9njQpvAN8j4nThFHSivbRVLaHEmmYwNA2H",
  "key24": "4PfnvAY3PBJpFEJCywSF6ZEJGBRShtbvaZPv6kq4PbrXGe54LwNkRvqwj1WZg8DSSqXBZQ2ZdVm8eR4V8eXQYQCD",
  "key25": "4QD2aizYryj7WXiunrhuJm5j5S4hMyExRt6e28osWBpJfMgyJLEymUH9bN5xrnaspNLSQs4jNcjFbxcis2C17N15",
  "key26": "3fjRPVtufooCWp8AhuYUkcu6avdoQzXrcgSqRpX6PFwrdC4eDAJiugzjzP8BcguwpLev2barG8G241Km3Pu6TdzM"
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
