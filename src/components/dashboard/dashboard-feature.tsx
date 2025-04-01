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
    "61aHRMGwjtFUc47NAH7d56mcq4D25tvF539P5FeUAoxb5DutcgTw8xTUqyEaXcKTbSC4rqThiyfeYMkyhrxry9NV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jqh3ykWrmWpQD8wixdzAD3z3we5SrsdrXHbK54tPragY1XcPEMoMmjGsv2DP3vKwKmhKpyRGVCwJRjeqjwYatff",
  "key1": "5NdtwrL7GeKSAFP6eurq3vBHUkiNEVF7cx3CmEfNtbKq8yCjVBUrbNTzW2GURWFSgwgfmzP2699jxhu8LWjwdWs6",
  "key2": "2ehRdfsJn2EWUNKAJ8j8QwZ6wXRcQNphPLm672zT3QMjqCv39vQP3Y2MdtpFbjTKgfPAJmhbMVDDdWGDpxW3z4vM",
  "key3": "3ReVxXUazfhS7Ag1TcsQt8F9HQ6qgqG7Fsa9iHaJPyE6DvrAoDMecrPFZkW3LT7TVQBhWd9zJW1GjK9mpXHQZoZn",
  "key4": "4x4WXRfLSPXeDN1eRG4KXFtxnQk1oFKThuGHsT87brVqmnp5MiorfASSj1zRNjuRNse4WEjCCYhf2V4NtVC53fND",
  "key5": "3b8AUmNRm7ALYkwuoqSrdnQUjJv2vGYRAqHXtsPRZaSrkgi11nnEKueP3xktKRdpixePJy7KWe1xrYyVkZQrPByB",
  "key6": "2aVaSrtCAB25k48NNwMUFDJxEVaCfoYq8Vf15jWMLo8bg6ULDzfp1rKUixWa4ukogEzAtrAx3186zasAn2omvPZH",
  "key7": "3qFTNf4y6q9CzEANFscMHhWR6zauNWecyXX6ksdGPzsKBRp2MsrVBcQtfiQizr9rfvy2Z7gyhb4No8UHLXezMtbb",
  "key8": "468ia3SNcAnDNkFysKZnydeLT1JVo9TqiN963ZucZRyAKRP5R1qiX9V2DWNnDFktrysLhEBmRfxJ9bafdKHwg6ix",
  "key9": "uTs6kBCMxpXWv7qWWsQTs77ASDzn4YEZrheyuxo1G9tXMtx4jMsPx46pTuU3JVPzcscoZvzq7gPiHvePqyafrr9",
  "key10": "5xtmvBRNjDUnBVhLN7aUMuSf7N5L2aqBeAPTVS1dEkn3RhfL9wgqhWVyPL7rvteB63Z6gnDKetGCqBiLvLoiPJHP",
  "key11": "66qVsqG9FrVy5FzP7B72i7sTbRG3CNBVcD2uzZEybosbqNBuVdtwhod2m5cqjv5Nv83bb463hkFMzi6ThjKRjFr",
  "key12": "59JMQo6Q1Gm4EykUfweab2f8ZwsT8Xosga8N6Mqy4CsHhP4STpN1X13aZjS3SRz6qT7qCsA8KekjQZHLzeFFb6Yk",
  "key13": "3LXwidTBUAT582CKezyFrrMTB4VFhzsHHCU9ELeFAZRdHVhARGBQyBtC16HRaUm6ixs1BErsVoDGRccUC6b6ZfUA",
  "key14": "4xpghS9GjU4Ghddr4JsmbvjRsefNVorbxGLzh5ecegy4mMqxLd7h1cm5KimT1iSWs4zMjcU6gzmSBdrJQ4sFw4NT",
  "key15": "36SMFVS9GTKVPZvNNTmMGgAXA58oeZgPrnbFkab8RthEZoh6X5tNTfmKoNgHGzrzQB1huEEXGNgPcjENf35KWdBr",
  "key16": "4P9NPF1KAiZrWbkjf1evf4ucSbatD7cStqPxvnyjCZaSDZgWe3kSPGPHWgPjTTpQJbR8WZFHoaRR6N8eGnV7M5vY",
  "key17": "34e92Au2QX8VBxGN9tULbZBa5Ey4vWR8rZ2h5ezo3eAGFYwNhsKTT4bWF9QdVPRLca26gEACm3PjDaFjRgEKRhp7",
  "key18": "kti9hrdgsQUpucGxM3UZiWTWa7WCAiCgXXYvTq7nyveXPJ3PSkQAMSPsNWXmkY2MR4oeLnYhS5YdvmKnT5UUthp",
  "key19": "3KAy688jma64ETCjocBfNnKf3jrtsFQ1J7rXUPSaJhtxyqjErKRtfwwdXoqjriPtE2jni2suPXWytUqowrs4skXP",
  "key20": "4L6Z4gKWFQyBW29z4K7eCKqiyZea12DXnuknjDtWKWQ5cCJYd6XfsCdeXZTizg7qV1smNDM3jsRrjjJuAK4zi6fa",
  "key21": "4qeTCDAg6XR5ZkK6RygxGsH1h9DpfR3JFSRxhLKReex5VkiRYVxdsuEr8VGbWdQ9u9w2oKNU5b9qyhwDFcYvrTte",
  "key22": "5oSTiG5Aq9WD4meTgiWXfXvsqGHPJeL2VEDKCJiZdADKQnApmZ8qVYQdjHQpY613rz4zk9dKwgneBzkdCSeKcwNG",
  "key23": "3r6bEe7AaF1sZ3WsqtLre5MkpfjuTQCdS3wQWUPNUbfTSZvawPVcqKGUmkJQTVxTEDZ7fAdyJqLvt5iSXoYXX1m1",
  "key24": "5KMioxDbAUGpvnkVQrAKeuKZaTThc2ioYbkcV6aDefDTvw133q6JgVmpPCGiaHNpienthdsHTFu72CPLoqDtYtPa",
  "key25": "KiZYxYak2hsAPTjFtGeP16bScsXW3Vt2MiLb8gKCvn7SE7x1hbZCwLwPpQJxXJBt7zvJCWw1pXntCXm9nYZD6Jh",
  "key26": "4iaa1PQNfiVrinCz9VPki42pcWb6sfmdfnPRNH965JbyYWu7fWvbkHi22YivBK4jhKcc6EhFQyBVHRCPyETKCx5L",
  "key27": "2VppRh9eyffuuRC8eoi1VGDbYxqcApSWoQiBaN4rJFBkK4wy3xZ7spmHQ9Sg7yB7TpFjwFTZSf8ngXUMFvPKTcY6",
  "key28": "5qXVcZjof4PAaCo37gcQKbHu688dtn46QdFhqk788R1YQDZ3Xrj1r7Hijy45eRFT2N8H6fYigJAdJfRthJb5Zhzj",
  "key29": "3eF1oCqDsSmB5QZ2J7RTVj22taWKmk2xZjT7uH9GFAAn4mJRWmoggurSW9qsyz8PtoWQAX6wgyekxFi46qBTEHVT",
  "key30": "5LxQmFbHXBNSScKskprSn4RFsZyWCrQxrmA1eER36bE4ZVus1yyuwRtUAggSWc8HrRskRSTtTCCNvpxkPdyZnvwv",
  "key31": "23ZDF25HPYxdYERnD9QfStm6UiCY4BqZAngPS8CZYc8zNEyxcT9ioTPRTDBBWgY7H5vTSE8qHPFpDjb67nPZ5Y7i",
  "key32": "3ppsBtgakHzkKrjanQoJv4nr2crRpRntBmDYH1rdNuz64vfEvPnC6RtJXXKgsJUnKK76DR3tRiBzSJDHe3RDVGQQ",
  "key33": "2fy89jhQiyAaUyUdXRJMcaMHV4jwVU6d5oryTJzbSdKmC1fXBTTLy7VPemYE2NfRfXz6cJ54NsXbk7uKjPr5jCPJ",
  "key34": "5NeAHvw17QTzYq5vwb2Pc3xVMojDmE2HCqtGDKeWEBLn8QeznSpAyYNtpYQNa3iuSF3ufnY4cxft5ow19MwmD2E9",
  "key35": "4vZD7C3Nq3QE9wzTzvXMN9KXU6aPPCdN2LCGLZ6u2bvHkgiJUNob3xz4FzVErUBCCTqSk1KPHMXDCGTAmvWLVyBV",
  "key36": "45koq8QkXWUkr7u2mZpDnfXCE28UmLLmwGAZAUZnSkkUE5c7C6gqjDyioaxrwTnRMaGWS9GqYbR2jS7e8s6WjVKJ",
  "key37": "4sX2PeNkxb8v8H6kQCmQw1uVxBwDtN6NeNk3SGnW62V8GqAF24Simv1cGhoDxeCFzT3Z5ncWG6kupEeNH9TFtfuv",
  "key38": "4bhTVAq2TaSEWBxjvKADL4tLraiNuy2LF8runsKiTdY6wdEytYWn7N5jAnkSjPQYak2LT5w4gyTBzLZBBiHbiiJH",
  "key39": "5SXwvLPLibnTsCHQBBkmb4xN81BGrquG3XKvLgQU2bGdrPm1pYXuimcq2zj6tdMQq7vKMB2cGnwfkezyEfsz4T7q"
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
