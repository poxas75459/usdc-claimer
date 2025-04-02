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
    "2fewaB3nqbxdGtjsUoM3j4chC1ZAZ1JCnKyf3XkrJa2JSWsxCJUs87ndXcMWMEiEkWsGmYZsrX7HHhfGj9pxBpUV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DsFNK6RQkqf3PtueYGxRFM3htUYFxtAUeUAu7Cv3m1C7FeLqFie6uitRbqcRfP95aHm5LSWVtLjcLEmFjRZNN2U",
  "key1": "5iqeJ1sa3q4u9Z6nEmZSxGfDBfgSjKHRHxDqbjTnev1eFLLjp1GThfE6mc3YX5js1K2rU1PWicAbrooDF5gXjfot",
  "key2": "3HRaGC1ugqBEgnrbTZDLGWANEiahiyan7nboQ4WRpbjxLV8QifcqQWMnLXjwj2F6dxCdyLUcTfFGKnCTTHpzysSC",
  "key3": "2TxHnqErkz5uxs1duugPeQtQqH1gmovEw2r6o2VgW2b7TuNdqVBKLh4Jm572CvQVouVYDwJv9vczwSK8ueoBt4ET",
  "key4": "4wbF1o9jXWZd4pY2e9kvybFnVR5Uz5fzwHK8Khhyi2Y3rgR2iYd2Sjs74iwq5VkVsRPTd8FWpMo8255WW3wnjKcy",
  "key5": "BmTVURfqMQptKGGw7v4kjBsMsrW5EtmwfS5nJ8F2ND5YYi69J5Bi759CwVnvHqgm7XC8EHgM5XtfLwZ6q7HFBEv",
  "key6": "38gMGc28PSAmNm9D3bwhc6nzfT6QY1GkZ21qw2Xwc3YCWxft2Qk8Xo4HHBg2G9uJ4BMcu2h13GZ1rmXTYrLMcdKm",
  "key7": "2sRa7NhkwuCJN27vvBvKZiajdfCaX1aaDR75pr5AKzw1Qb8QAKzk2oj3aKVEABeQXZWmyT8AEJjSbkYL8ZEG4cAy",
  "key8": "5SL6vAyWzgxUuvbR6oPahwBWas2doRk8U7P8HRCKkgMr2xdjZzGGovyaaAukLp8w9DMorUkL1drQLpZQDxYn11Yh",
  "key9": "hgZBBTyAUYbkiKHQbf66sN3sZXtG8M9sNwrgftGGABef7nnW1Y7KtwDYQPPGgXgV5PQKx36RZhCzg9P53Prd4bL",
  "key10": "BTRc5XmXm7YEMaiVWgo46PrAik1PEqPoTtaUneaorjm4jXAfbawyYzqEP7zbTrx743mXQTxBTRrkA8UUWxvZtDU",
  "key11": "5HFpZ3vpu78B22ngdvknTQVy7WFtbNwT53wv3TxRscLj57SNuQLxoVjJuUKtRu4MQ3ztYuesjHZF4MP5WZ1Pf6R4",
  "key12": "z7h7YY6wzEUBQ5tnkx2QHCrXVBE79UetrYWDoYs7bCv1tbjUadZyyn4ew3Xjk7xnDQ4oYcE13MDYw56PEHoZdu8",
  "key13": "2s3K39DxEkGaY1hbtM2GNoLkgudZaHhZiz8FGY8rDyfEk8NJf5uJa2HHQEZ4qYBF3BTR4LFfFwz24rmFRPnaX8fo",
  "key14": "2NqexHZFjmrkybDw9gg8W1bop5nN5roZCik9pt3hkmLzBz7z9EVMop5k83Bwjb5eitRBRinw1QF2EbDipZPQyNjj",
  "key15": "2S6DEfLzYjxaAbEakxgf4Zwj1CHVhgumYuSCL6cEXLcoBf8iUkUi1jUjfjGVRFBADztbLbGP4SmkhnNtJZSCdzNx",
  "key16": "3JtbrgymqA8C7DPucBZJnLnL2jvhSwPXkpcPJiJag5sDyJv6FcagKjkxmJ3zuYAwuvpDSr6Mvde4MR5seKbjpcPt",
  "key17": "3eCECxEQT8zW2MGS5WKK2YEmExmriVbi66r7b7HABy4fBetHKzHe7vzJ26jox4P4LtE7n4GmjSGuSrWh94xSxRam",
  "key18": "2b4Y4qQJriJZGQvcP17odJXtpKDnDYf9w8gyU74J8UsbmvQf8VEpMcU9W1CCaEMJsqe7uNgsVoEbYgXprqrsQKyk",
  "key19": "37TawV5BCybFay2v827FA9oaq7BZ9E5bbiW1wH6U1wnYRvcXiKsy3in7T39bzn1XPx6jreoN9TshmyS9jU4Uc43M",
  "key20": "5tEBV5FxbadcCvKGzMTZStmnPuctzLuiHU1ACen9Hc99y9Cy9UxG9wczgNPmB8r5E6jkRH77FpUwV6kFb2ZecM1b",
  "key21": "4EEKWcFE9nnD1wmYKaoLS7oHkR3DfKauvSritNArzx7KrGH9zD7t4zJZeJnPuRTzPBTXxQrdk4FBb8sterfMu2QX",
  "key22": "5ijF1niPZiccNabq6XgyMZvoFHRfB2psMAwQ3F4TugKeiWXUbUtD3NdkfZb6BktcYx5qzLNnebknc9MRTfB46iJH",
  "key23": "21TCvR8w8LNxeM88ntVRggE3U5SaReLqDU1pfofSryWC1nKdsLnySuprqWMFZnwF4yhpuRMbKcyra15GiNuE953F",
  "key24": "MD8f4iyXyc7e7CWQBqgCrerS8EFRryUBnoMCHeDerwmgoLeJdDKg3LVMMtopn8bg9uV3KUZD3jzv1ZAPu6Ji9pp",
  "key25": "5uPrz3PLsLTE48u7CjconiezeYBZeNFRgLVbsCCVBsGkxm8zcdoUf4D4CmLGWm4NeJe4TY34LwkrCSRQNwTyursB",
  "key26": "2CCVB11XnNJ9snzhGFHq787YdkuTHWDWUgfY3LvUTWLRgtDEKQjWygCUfv3i7g4v2j52kH2m468Ld24MTP19sVxn",
  "key27": "64NXiiQqrmizBrswXCXXR3dm6Daodex5sCNTUiSUeyAhmJWSsoT6kQuymknieDLLxm14qyiSh56qYbXD3umx1oW2",
  "key28": "5c2zMm99eEQw8zoGUxPS6fBSugGGZtRSTR39eqoXtak4ZyjM3Xh6kRQcQRYUde2RanAYxefRqQxVtmfCK5cA6Pw6",
  "key29": "3zFHgrsJgkhDoBBjdsZmCcWSZx8Mbgo8NSBH9mDocqQueKkRQ12mq8dcVtG59VifWCAaHqGBGbcvPZXF4sYiRWYu",
  "key30": "3tHMzLsUtqT2QhyPe95M3qPA2RX8kUZzRJPcbixUHcZovCYeyLgsGyGer38LVpUt4QNKDFSovCVGqAkGS5NdhMkX",
  "key31": "hF6qJ8f75E1Ku2isDFmWk9H6EzvSaUmS4KRMPo4QnYwb76axVP2xrQt1iet25JUSjgVP86owidwc6KhmnZkmeM2",
  "key32": "3fsDfrNKDeMd1Qtcdq5aET19m78DvZYojyDWo2gq47K3pZyTuXbYdUSUvFeuEFTarYQmfnKsjxUBU8Whizh5ht9K",
  "key33": "2PnrJb3sebNywMdbpLuR4QQUHJ1V4jC4AWBCUuTgsYKHEAYrj3pR5VAwNDiaNyhVo5fwGt6C23RNsjcuyzqFKQQ7",
  "key34": "3BrW56Bf435KqmD1u77ZNnorumsWJyWJnuDYWu2wWe8uxYoFqf237uyPwDbqCfHgz3iAYquEgSJu4y4WkmhhNeBU",
  "key35": "5A8dRipGRMZzkn4QrDQWvpsoEiy5XQq3MkxYxknJPTQNjZgHvyaBj55gfFefQfewQz71CP7doSHG9ChQmJjvpcUA",
  "key36": "21Cbr52AQjHGSekiNRmFMA6AANmqS2hXSv9SvSEAF18zobtoiUWsi16brxaKKo5Z3AZ1nFtE71NjKto6C5JpMW26",
  "key37": "23xKpMFP3492PHnwzst7oeBdZHLzt3Gk2XdgXzMM1fWH5CDox2aRzvDPrWwkWukLLisg2Gu8mhZDvJyLxCZh4VYZ",
  "key38": "26MhFFhv8WjWoea1SUc9k9HGpYNVhP7FypEpHFFYMfyQbKVacS3MZVTJ2F8Bfq6Vdpkv63tGekXPeu2u2b8yoYva",
  "key39": "2iGjaYDsLW6o5NPMKWaDP7WqZkhVdjXW6NgfxTQSGpoLtrwHJAK3tcFLZpmi55kJPoLDUDnWhbh4be93jiW8nBia",
  "key40": "3bK42iUUULzFEAqN7QPmYt8i3XgRyDSxrG9b6Mr1rtL51dH3yzVKSjD4s8Vzw77Jx1gTCw43AfNYxhzbhgAGsvkJ",
  "key41": "2efXdiW5BYqZiMK7Bi1SQnQxSaC6vU5DkiNJyC53Yw9rnGQmdsP8Qa2q4hSVmTjfDQTTdpoxjMUuJpaDLLdsWH5S",
  "key42": "3WpoCcBV8uofSSs7a3Fp1hUxuD7ReHCfaRbaHf95rUSuMgJDvsCN5CLcpUboVxgQXECjt1ZptR9Hx3DpiUgGB8NF",
  "key43": "5q3cBjQzyYhKdq9GNQSX7pXGpERQqkxBSQi6VdXRWDA9PhMChyRtp4FQimCSvHbxrHDv8aL2hyXHdLzV9XGCezmB",
  "key44": "58huiTiNUzS6FApfvbLRKor3HgSu5oryASZQ6DLqavvSmkq5ncSpc9qs8p4qCFpae7A481kZhJyKVr1nivggG6FH",
  "key45": "5dNBvUUG8kgt1RU7Swdqu8oGWgrB35eQSZnkV3UEEJ4WF96TV5pTfKCixKeByCdmv9MwzusJoUHhrsbLYZioDR8L",
  "key46": "QRSz8YkPH9eENaSEAposFpZwK2NnLTo3Q3jpX65ndLC7w4ypjfNqRxJg5ZWWxBp5jtm5AbMFwCpqZZcKJ7W6C2a",
  "key47": "53ePL4fNthdpeRJsJYa9fG89FyczyUrB4nEXHrfaAFk2d8TkRCyZDZWw6namVRjZqJbH8ZLHUXkhmMcqirkjWFeR",
  "key48": "57SNZLLxjNUJ9K9xgrjcQBXWuZ3SgSVEk9N5iDYibTuHYziUGvtPhb9crY9T492kLUF9iVwtFC2tF7kiyVvZXTLH"
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
