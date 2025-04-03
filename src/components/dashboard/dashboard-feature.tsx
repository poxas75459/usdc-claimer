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
    "3nTREhtku9M138BMiWhYNvycKEHtTPASvbjSfSR9KetyEenwFcBLobWdtcSsrYqobmuPJhGoTupFHvDd6e855tKp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X5jHozXJ9WNzp3eNce9YDAwsBstr4evGPvJ9Q9rqWa97LvMJAnJHfz2qMPavHuNuMtyGLHUmcMpStuTHVU2RgxR",
  "key1": "2xbU2fgcxCYTHAjnZzLviixjU7PxXBapZRw8nSWfdb1ErjirCh1h3ibdephW9tp9nL9oesSXWuGAFS7BWjKCV2g5",
  "key2": "4wAHH2QPxNoqCUoaZ3BpmLhSgjd76hvBgC6GRu9Y8McCUZ55eV7hS4Be3vB1DP71whcHWGYZtTtrB3eeqgdeJPXZ",
  "key3": "2B9wuX32vAkpZeWTXYn8NTBGueT6Ew6Nh4kucXv6Yy3kBD3o1YeMzTCiKqYKHNZ8gtZLveoo6RjsVsJCSHZ5naDx",
  "key4": "Q39G7GvbmDibVTDaZKiyNiHQCfHbsNsHgA97EqJep6VHQxTPQCjDmYmJ5euwL9FAkyAY7riUhNXMDRUqziBmKvL",
  "key5": "7icQw8WudwVRcEY5fVmGxCNc4Zx8B1NDVxPNxsKqRmsJiApTi4BUMaUQkz5HCragtxy67Sk7rCLwBfbptC5P2jE",
  "key6": "52gFWS5qTWfY8EtKQh22prvojHKrZXziMp7WMdWbBUYokQ2NvuMDF18aog3x3BsrVVn72k1c3nZSjU61ri4qnogX",
  "key7": "2rnbYRTqe3wnCWMaXwZ6uPcp4peKrr8FE1k3312T81V88vm9dXNcBwgh17jFocYszY2sV5yby989CfZZqHaLMLH6",
  "key8": "3YkRQCsi5ySwz8F9ZnZE7hLcVKKhLTfJZBKTJxCWWaD6dexUSr9ecR97UrViytaEnDgEPByrMacKuwczD1URfsKF",
  "key9": "4tBPSSXUMdb7GmXc1NYY8PGxeoaMxiyn5JG4L2kid8jYxujuEzmsMDV7zeTnE4HdChK9TNm8ppGWd9DTdfDXKcn6",
  "key10": "2HpP4K6gx3qnAXZGEyfzJcernPpzLw795x1SwRsecJhMP4HVAQGfurgm7zyLS61K1UUyE88X3pA6KLoEYqyFEGtR",
  "key11": "3a9kJztXQrYTj2xWJ9ZSJsiCFqHUepc6H2sxmMuBtkiKQjFeyeFEkXzNzTmxsxrvZccTAty2xySQbzysuu8w3qPD",
  "key12": "4vmv5DmrTxQkJxu63CgwZER2yb39gVErRdy9ZZFuTg3TedjcFYoRx1gX9PTPcn5vJH21chyUGgBFKq7KhrMJud1n",
  "key13": "5mR5w5RZUmXNvBJ2rafs2NjJA8QZYnhLvbiV7mne9AfssmoeZRFJV88a5xZFFWWNmy9ceC3rg6YgFb8cYMKCyPFJ",
  "key14": "4wELHoQvQpFyZFgvxhC8D3ativaYU6SQEBGHNy3DLeddXUypH3g1WLxtmntVdQhug9dLYoLUP8vuCVbE85SuR4tG",
  "key15": "4QChKZWWA9sBQj2xoHtywrrPTUS7tqvuYQRgJxA9V9vsXaNJcqZcd5nyma8VNGu1yq4e9ES7ZTB5TEj8YHh4fVX6",
  "key16": "2gkecTKL6yMsVU4dkgSgaLUNwGsogSzXundfCSJiF3EQfaGxqdGdcE8UfPz9vw6mUdzfbqvzA3xgj4jWgFFhqgWe",
  "key17": "5i3hbUJVM7pRoGyieC9anK8P4c2R8jSBroLiGcGiyeUV5dE1ZbRk9psnLcHV9zRSrDFxtFEMPiAYuxMVg6vyFmNg",
  "key18": "2VvwQS5UKAQEzeADTq48rCpgMgneLcPS7eBQ8i77sLWqc8ipZNXRWW7qBhEfYzf11gjXaMtcGYS1iCDLTK1PK5t2",
  "key19": "4Ud3wYrmngJCwcKfj9Cb7kxgKNG6vyjjLBMsgeV8FQZEyHsLUPATf8sr5k5zsNAuJrVV6sRTRjyGp2AFyPWkq3WW",
  "key20": "5hdv6epK7ERNu48PxPnuKnW8QDvvgFm32nRLfKQ7fk7Ui9LUQDiTpkk61MNVcoLsiSMiqyWhhMEbZrzPb9Yw4zqm",
  "key21": "2WSPmL5KdtarggeEBKuApNNJsZ3XrCytFNtjAHNHdfhgmSTtN2u95GcrWm3ucK7hy8nbKdAAQCBzaydx5VDsC1GU",
  "key22": "45mTCgnYR8oc5WTosWS4PrnyvMfUusWeqnGw9ZZiDbVxUZEotQvebnxXsV56n6XD1iQa2Rt2ZWMRfC1oiqPnD4sW",
  "key23": "344dBidqJJuLzXGfipMyxJ2MNYnAzruYTYTHFta6NC4WiPFsyxf3BomfXWuu9WX1hceCL5QVxiY4z7QUfvsUJQaR",
  "key24": "5BYShXkfhrMc7vdeCnrN7mMU2Pa6oQur5u4ZS1iRyHDQK9NfqUEWE25sEUgbyV63J3sncsGWwehrJSVQavo1fhqD",
  "key25": "3kY7GiNRbmLJoNc4aiGs825pP3d5C2HPUsL2Nv5YrLvPPPKTrJK1QPYV7or5Ge3DokPY54rK4MRMVSXvm8FMPKef",
  "key26": "5i361NKMUsEnRoDZosacBkCmGEt9tD7vYUiCV8r69y11MrEEhRPUwipP7JEZN7Tf2XkkvaoY9g5VHpuuffCN6v6V",
  "key27": "51qEFSrxwoh5fsRAFeM1pws3wPJhcZH3tGevyuJpe2v1FhhKYZ6uwH73oNZJ65PfeueKV26ffQywWAaJGgLoQ1aY",
  "key28": "29wM7vKkRbX73dcYnvmbR4hnmGjLTCuatTLWniDcb9H1oMLYLPGPziS6YK5HT32DmGnAwkrzwRPbdWknai4XzHU4",
  "key29": "5UDpsJPweWtTVSnTBmq1oPcdyJXJbavxpWoHec5VSZtx51U4cS7otBmLwTKxizvwhbvGqBE61oq7d8gjn3NsPxAa",
  "key30": "36VEwqj8rzbBuHU6H8FejNDbJTWNVPJZkBg6mrbvBZfMBvn67iiM6ohpyiLrSX43KxRPRAx7HnBo82GiwfESsvQQ",
  "key31": "GVPjwi9usScBEhUnUvNccqva8mfsGA8vJFhpR2yBjtxP7rfXHARBYVGV49eWzvHZHB28jrHYvHB96hDRBLfrTmy",
  "key32": "2V2KfkUxt1S3nCs5oHNSdwunZLG48U8dB94vQkZ2NXSsaAQ18q4NkuYQLPbpmZmvLv9qyGr1LyJYG2imKk5jyvZt",
  "key33": "27dRmF9mNW2CgcEjXmW494cuZ8A23jfYrfd4wnw71CjbFL4HU2ZUDztgF2pYR6TBqHXwbZd6FHZXbEsZo7RjpJVx",
  "key34": "4SVsVSTqApHPt33WR5GaPvzHR68Wjy7f4joyVSRaNN9SqgV6UTQ2i1xPS3nGrZ22xJijhHRdnSY41uF9bVKfF1rY",
  "key35": "3s8qknsAGYj3MAbyNBfzYS14obhvbp96aJWKbCV5yiFkAXAKnVpMUyA19gPss8dAWRDEvrLWanchDJHbFBVeTAVh",
  "key36": "Ksp2fkV8LpjRLcZdHpnnE5jfDjjLidHKVAgQmmFUDQ6HAbvcYuGRtepkXthLDvR7dWZQEnkGunVsqf5ERQVBS6S",
  "key37": "4h3jq1ofRinFTNX1FYrJLYCDgrNUKecFwpr5Am1krtA5yN8ZEoMVax7cFjrAuufegBkwDVwRZoY5BGEMn2tmTL8F",
  "key38": "djYFKV1HZAJyKkA3j5aAG45tqpncY3sPT45vhuYAeRQzvLF6vC4bd58dHhrc3XoRiddqrvXbvyFAnBj6h1FjWsB",
  "key39": "5KeYCuvWsxf3sphMFUZd5Xb8BkVqgDHR6QaEqMPqZ9XYfRdei7X8QaHQ6Niq19KT43sruKfe1kvEhRKQuj3uRH6N",
  "key40": "u2bRNpP72uVAUThf7x6dSwn9hmyaVPK6Y3vHdXnnh5TWdAEwWQie1kPocZ3reKjuppBXnjp7cKQzY2WkVZzjwbu",
  "key41": "4EkEVViVUpBwCjiDTsefo1saPYkR5uYbyvz6hbWuQA4THdhirwvZdBEfUum5Hb6YXXWXFaoKtLYaUnGbnmXjEvMs",
  "key42": "5BuNWdsy5CA7CLrhcJ1chzKUUTUJBmPwcdncWTEWBGNzv4XP8htKRRNzxD8tKNNpWdHHdxP4zmqF29339f7J2tZ1",
  "key43": "5k9hysDXEspZKTMq2MEHda2EQiuPRCEHiVVffjhjbU95Zw9nLXVahXtHFjP4ZJxDauAmMSzRGaEVP1zt8gxL6dH1",
  "key44": "3Bu455UjH9sj5Y8kJNSDvz4T8WhyzH8AZypTyt6GjDLuyM1WT2NJRxhdXuGJU5bYywFqui9ohymre6GRQihXVcKq",
  "key45": "2dFUFjV27Yq8F2XAYuPtRUgNfkABA1yLs6RbFYAMuc9LwUTy8yDbo2Ni6cJNc1on8A4PN7VZx5csGEhxX1srtj82",
  "key46": "64Vequbq2fnLC9vrzWyUCjswrjVBV9Xjs3sA6hJj7bMBN7UXcNgWGiD5t8SMU3ENa54NqKEdAN4adKkGrXKMUcXR"
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
