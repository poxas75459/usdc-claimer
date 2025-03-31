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
    "2CJVY12umRZF4LuT598daorp4ofY8nQXffRxvxUZhFHh5X6qcutwUj2NmYgNzT82roVZnj7ZwBax1vwpSPfvvJv2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AMr86SaFhNiw2xWQcdP2fFk5pT6vyNBpSTmkr9gfKUXaYyCbkqGuJbfBC31LnjHy31BcdkD74bit3f1AzhH9wCw",
  "key1": "4hzB7XSQxAUuFo7ay9yQeyoXjfgLFfowpuc2aekFbpn16zvjEPJZoQMEEWBxTBfHjXXMgCXmBPTvYqVEVaQmxvrV",
  "key2": "2DUbbu3kcSb38yxJNZdnf3jdyJuZEzrQ7ZZSXStY56AbzkG8qpsdXSYBY9vVWMh49Z1aE3LE7Yn6mZL4jMvdb1NB",
  "key3": "oobTBFwmH2zUN8h6CRGHKWgwgmWDf6bfP5ZTRRYw52s2AgUuXbBD3s9N4YjrPAgs2gsUPNoupfKfWBg1jCqXdAM",
  "key4": "4EPtBYTEqXvq9WZz91eHVh4GdsUQkFcjhWmP3QuPnb85nt5J1WjyQG6Ng9X8syVn23UVDxFEbhkNh9YFQhwdbuDL",
  "key5": "KERni5X2Ebx2ccj7CwPvPGzRaHAVz3hFWU3Bmp1nVKkGxwCMcCeHoiMm9bfGz4vmMLAbTgxxrpNr4xsrqMZVRcp",
  "key6": "2HmwDgkw9sTisAQGJnBoo9y3XwPVCsa3RRHgVCY52RYZGTdBCcw8jPtofXWapg3GjcMeEKyQpSCzxZaKZvWAtbqy",
  "key7": "2vvQf3zB1efT6iNZJMpP8aZW7LX4tw643RhG9eT8CrPDfL8GyZfFSzM46iV6kHYCJKNs8MerGsLHh6zGRxG82ARa",
  "key8": "4EXo9SmNnmBUxYDaqUSbcbS48CVAZGCbMDpaTNpkgpt6nU6QB2YWqvZSNmtoaurTpFDA227E1ypUK1Q4Ppn7jWdA",
  "key9": "1Phxp1SyfbXxf3ax9ubGpPnEKPqjMTbQ5Yr5ggHZivEVEC83NqAV12tafxPcgB8dWbQpZe81BfZwaVDvrpxmqSJ",
  "key10": "2Nuq3HtGCiXGdwx8NMeQnqyk6yjLvJ3TQZSwiksQqchaHqU7BqsFqiSdf1eHR7jJwRHmRWNMtowfvksR4WftpFad",
  "key11": "2XKbpBAyM1uZKPS1Daw9FPVhjjrw6nZr52X879MLU3jQVccRLBsN8774efMqcv6Gvp2CyEL6iTLuiEg5hMGMJFcq",
  "key12": "4sxJGu1PdEnCTTDJD3xmDuUfLW8zR2eKAhgjwDC9HkdM32Yckoo2tryV9PcLhgwcFRFXxDg3zWhJohx6E3gE6Z5X",
  "key13": "5WdbJXBukPwwWxJwqCSiPj6d5yZ8TVi2d5hjXeXHYYDdedETncJhc2WQiV9UZSNHLFAnK7dbbC8r5jNXS2rhVWAj",
  "key14": "5EWmteoiaK6wg6CVaXeSv4nu5kVd4YEeTJm7HzpQLdeK8bmE4ebD597NdXGsHJzDGKzobXMcBeSKbtgd1DyuvSQe",
  "key15": "43PaFBw1xoQidKWswwFYcSMdgW35yRtqTUv5GRSh3hZSeRisVJfprAvkKYWSMeptL3zahoi7NqEqT2ywtpYKcxxF",
  "key16": "3UkraTJsykRtav2ADXeuamY7rYCxFkL67vi3PXgSaxSBy914qYQzoiuX5J5WFCuovRo7RKZKCTAafTD5ySzLV7fH",
  "key17": "VN141pMqHPHQDhbG1vqUddiDB96Jq7ynrzjCuBXRDQ5qFhkXqbNavfmF7qgv5ZE1gaFirmsK7okCN9hcHJLHGVt",
  "key18": "5XVPuw5vUs169SjdUvSWKgVUz3Z3uhCXC6ztkckGtH8miN7AVsbkXciHBDL62rKgoKCXubY2PB8rgzgayHx3SqT2",
  "key19": "4oHhj4u12xKqNhHwiL2Kt2Bz9tUhqFk1vrxjfKN61wf17LUiJVYH7naZXcoqekYRKUUvxUmEe7iWMzXhJhHaLWME",
  "key20": "4XsXuqSArMH5Jy853chvrzREL9FQ1n9zAr9ya76kycfJRKfWqBLjaFxtW5Kwsr3E4HRtwpHwZDrqYuqYESFFqsJJ",
  "key21": "4hZLmBmVR9ekNjdU3BshsuoDDC1K1wDXpjDpyBfyg14uQ7Bk1DU537DSKHtkQRx5s4S1c27uSYnuDj6zz4EVVHVT",
  "key22": "qVJQS7Bu4pBjoWNhH8REdT5ZhvcVBZ8aT87KuLkMFnrz6kvzPiEkdozfXZNv686Ygos2Swmx2vyMbp1PzdhVk51",
  "key23": "2cFsyhwhPshjF4BmofSdKeWEoiQ6zc3Pj58NpmqRHidafN9Qzp2UWq1maRawq3SUtqYmHRj6uvRdhnRgERzdtXYF",
  "key24": "XM6SRJ7Qv3szR3iFanmwYMeDvAXLQsJ5hnV3hejXfSA9HaP8ZzdqgRVGYqhh8qf2Gok3kmj4uMKLuXA262xYyBd",
  "key25": "36LPGpeGe97kNZW9KSiov9aswy7Q9EbCP3218dzbN4Nxueq9RCx9KqPyXkXUbm2xEFvw2tjBWqgVthdMcnZ9AMYg",
  "key26": "4vX9cpwuYYFqE6JyYvw7N5Hi3DYtQ1GtV34qUPYsNkGa8MMSyhEpTwpFSiqRduFBofHQ11nRStWWvhor4ZnQcZFA",
  "key27": "589Bxjvz5v2HYfK5jyJaqo5WjZKNeJNqE8CMdDgD2iRNkeEXVhJGTAnaJ9seYtf8HtsaWQb3vWnYTyTezSAHs1te",
  "key28": "64e7FzrLfyJePEwciNwabLwG9XvEn6HZgcv2rrUxiRgPQsJASG5dLZ81GZSK2SQQuCAGRAVTNg9cCQCtJ7qCFpsN",
  "key29": "479CaFxgnJxR5QyrDryNbgArS3xdWAKzSuJbScRaQM6xXfz4gyxyeZCBHoZi72eXWqBx7ztr1V4zb7csN34Hs4d4",
  "key30": "tSHFjkoJFgNDemeLni1rhRCp2dNecCQzacbvcJNNG1FP6V5r6R5N5wvE3L9QTdx3WPRE3sMCeh8F8fPZL36zRPt",
  "key31": "3eCVbLKjeF8Dj35MDG8oEkXHFBAs8Z7EQy17ZireT4hUcGv9QmgS5v49ErkEcVTgugJmZk6iy8nPpuJ426CK5BVu",
  "key32": "4J71MzKABSCokARo61qVj1vtnv6BtQVWLAzS2pzvwkbWqw4EWkQhzwnv37of1DeD4vrKByj563dYT6idgBpEa3bj",
  "key33": "5Gp8cgDuQsKpMdwLJLnLnzT4gJiNwXhCx9d1MhPp58LeSNuvnrDyiU5DHLkwcaSmPtBsgv3HvmGoxAYwa68pGtTD"
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
