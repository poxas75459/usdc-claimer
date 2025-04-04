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
    "5BPs4gEANozZ2LpCQMuhKax8M7wMBEt1s6PPSxTdA3v9rGjRWBfmJBRHfx8H6R7UBXeA1Ms8kWouzNuQS8gDrAtS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4obhhmLqXk4CNBwSihHfhU1tXD9GQ7dXdtC731hwsPjziwV9DybmX6H3c1wpfj6Qh8X3KgHJ4GZy4CuMdrVjNeL8",
  "key1": "2MvCvVHWB2hGTB1inxFbYeMcpb4cQWNWKRtbV85WAZXc69UySf5WjkiJVZbu2oYdBjWev7iZo2tR6fiZouLza3sc",
  "key2": "vU6CGucU5oaMeme2HkmcB7bLLJE9aMVPSy8Xyauj8dxsqNvZyEzSRDJV3yk9aM9y2orKYpVAufQbAtbMvTZkeMU",
  "key3": "4oPK9vbw83sXfGPxhdXx54AokycJjsHS5MhAjQvkrcUQesDTMB2JGS8BJthyTjG6PoyGdcT6HRk9SekZrWTPLeCi",
  "key4": "3TTs6JJUxNLtPPDEANXUbXLwfeTS25MVh3LtY4Wephy7njffdcDhThqWUy1MA5ZXue6NzHwcwkhaSx5vehBNL1Wr",
  "key5": "66WUmE1cMbPvcLSW9aKTGM1sKWVoS2qJGCx6qRPUwqLQP6M3b75N39i1ShzGkWxXis1uQHN2Qo8uqGGvQFV1h5RW",
  "key6": "aX8k48sfXTZxAFMuuzyuLYzXywsY3oPEY5nMh7kw5UDWWCcYxqPdmBZF5bGKfTYpasd8H4yMkfRBcRDFnd4Y1bG",
  "key7": "2fECMFGPPpLP1Y1Ben3PXjtdWcNqtbwsWRZ8eoXjxQ1a3qirYbiCHxH9f9VuMnAnZfQDAmqwZmfUBfrhyz32jZi",
  "key8": "2pFetqqYQYzkt7W7AvTWUThd2zr2pT219HzkPoRcamQq3tqSPgYJsepGfyqgb2pRfhU2vCghAcRsMXB8TvFuwiHZ",
  "key9": "3HozyigWt8j8yp1jFyoVRk9cNDn6auYFC9SQhEumEuyzFgRhAz3e1yrVXgqaqtNNH5HNEMMPu9mkmMTGKSDJJe8m",
  "key10": "2Qj1PNASvEUVpLquZ39qHobxhudHF6X8tmuvXaDkvLNSu1y7eGkaGwNvyfjm7JfxN7oFoteSLtAepKphR8Xsxknb",
  "key11": "FCgSggKAWCKZhA3gCtHkrvCc21Jc9MhTq2GRGuxgxbF1XK8Vt6HH231FC1bEt7j9spdsaZMoXUzdjy61ArEeaE5",
  "key12": "5Jx6NdbnJMUu3t9BaNUdP6DBUAvWrCiUfXgk5RunuXv4vcX37eEX8rooq4E6wsSFUmVQHKMcrTHigJ7QHCm4RixK",
  "key13": "5S1b6mkbJHKWzS5H8o9nvipf61n3cXnEBJdjkG1YLBymKCDMPZEv7ZXChyCFd6qh2YC6qR3omDQfbZWMW1FtoxtS",
  "key14": "2bt1gTRSbjFFT3xPdYvuNwXfKdJp6FZKYStvk5afGj78KHV9Tj6HWrTiLgEuxv4EPAft5UAEnV42PhGmun1uiXCo",
  "key15": "NqVySkD3t4pYMZQTb2F4inqWE48UtuoMBShBPgGqfcGmKwYAC8FYh9twdyRC4B5fiYxB5F2TbFGDfotgm9V1puG",
  "key16": "2r5P7WURA7PpsC7YNJXgAEFQ4KCHQVgnvVM5Q9mqKRH4ESfKhho2oNvAuy2ykDtYMTf6MXYtAWtQrwf3h7P5roir",
  "key17": "T8ok6G7XzA9w4nzbR1zaSrEZL4cmL2ZTZKJ6zQdUJX23r1QL5xZBQzJc6anz9RsESNyx5PNnhsBUbBfX1iKF4Y8",
  "key18": "5Tryp8kdQRHziCSq2jq2As65Kq77UEUAkZcWZCBsGwH8Ay9qgLNXWoYeD6ViFWLRMaNhTwRAzVwE71VawafYvdPt",
  "key19": "5GKrm9ZThypYfy37ooCawA6TC5kULBna2gxitcRNUP9jvUxuQ1ydbxh9MMwwP7AKi18Bxdy3XmnookuwzzEFvaCE",
  "key20": "7bWAz5KBLyLtnD4vEqRf18QQyetGGWJZD4NhPLDAfe3ViPyBXNQiBMfM1aBDSfoy39NJNyW6E5S5CnpJBzxUQEW",
  "key21": "245TxYAQCbypaepqN65xveLgpaFPfyVZLbZYu7zsTBRjcN9Cxu4Wjc1sKudwLaEkjxz1RHxQPH91TcxLXoGd65zb",
  "key22": "4EJoUDoptyiGojToVnfgp2Qz7tmDqKr41UDfhfbf3aKrF7rkvjMrB7NcEBT8Kh1Ns14vbZ8wumMbtHjY2PYBuUvL",
  "key23": "3c7E3bX58wFGWra2gT2jhvpdaJ1JNZyUJ4giV7wvi7rnAR87ED1DBQ45duHnHVMsGarNYS5LntXMCB5xbipDQKSU",
  "key24": "4fBXz4L9BYTSb3oYvdxeES2iLiMcdAAHUmjnZqJGS8eVYzyF1ySpRze68u9PJrLpsCz9MT1pWYPwv9KjSpDV7gxC",
  "key25": "5yUdym8xi8vaA2mfeBouxCBZdJzEbdXzHghpvt2798ouztPEshZ28ishFJVnJCcxnspNi8u8zG1yopFYARZw9bSf",
  "key26": "2wAze1w2t7DUJCaKF4v9j3PQSNj5bYJovacmGkaRrzEsqEEyxUynjJbifh2Cc8vKC7gZPNVe6YWaSAKQG492hWC1",
  "key27": "2NUnc89Aw4ZcK2zrbcnSQQxGiez5jT6TpbBxPPYKqBcapiUHDq4D3mh8RvVdZDtUHraYyUbhiSmNZmgrdjRWziV9",
  "key28": "2GYzeByRRKP6JUMX2gk4WjjpyPuRbsGfesCzZiPLm9YPdbYLchjbrHVGb85LZqPJ36X6tHxdQec1nEQEVfjoHU6U",
  "key29": "2tkjYPayeMvgZMWetW7z1efAYvc37Tj3LaXqRpNSY1NBnzmRMKWRP88MvFwxkWqGa9UVwJzkXCzW6c3uQEUyqp2m",
  "key30": "4fQvcqg4H54551A8gStgD8XE59swMuKhY9sQzooYbmaXtRGoZrWHqHw5KsNdRPPTkegqHAqJMrkyWLpkARUtVzX6",
  "key31": "2mKyJ7YU37CXHhqcv1W4EhzagH2hobGPYWzSvXg1bnFugsfMRkkJxwq98gPurcVnV8zCZucrLMt1YkKza97mZz23",
  "key32": "2qLEp1RMrWSxDX5pK6iZuuT4btdw2Gk87sXRqrgk4ZA2C9PWcQRegJsx4ZSwrtKpAuzmKiQ999mTkPNzg6vbaWJu",
  "key33": "4LgZJLHUL8H7cndP44rkjXDHMWNsZUcHsbtvQFcamSvA2fwCsWc48kqJKb2naARXdZS14o9VSuqmbFjSVKqLpwSf",
  "key34": "6PBkCmaneaSDGdzWnPEs63bLs3UPkWYZ6it76ZBmCMsBmjsKu7YaBUxipdBNqEr2c6tCHjqu8e2ZeaHNitqKKwG",
  "key35": "2bzF4fomD2H5c7mhETspWXpa8vpQKpdqWrHhoF2oqJgC3RV56YBmm5yC6YtEtgGB6RtFxeVN9ZQRkxoFHBSV7yfJ",
  "key36": "2gd3hN1ohyjbPH7gz1P7QwRT5bDw229oMSUh81RZ7y6LWUkhU578B1ScDfhm73Z3oZbQbvsEcayn3kSAYW9aB23x",
  "key37": "3dZfhmYXGW45o8TyzQX6dRLEiAS97XFWijpsasjMA6MFUXGbNEB5XpAwzZaiH8GJibHxPqJzoyewVstSyUEZPvVq",
  "key38": "4R5EY2nu4dGwJJa8ugb6t4ZhoDxPghwLbk8BZ6CfFGMxsan1gPrayYwVivKfjrCpAx2Xq28AB6m73YyhG4ogVkgc",
  "key39": "v6p3L2tbT4xKhzMqvpSp4LJLTYHxSTBfda19CKkB3X3AD8w6AeCRjGzznxqjywzjWR1DjRvh2nZMNsLSgvwGiVU",
  "key40": "5ssuoMvaG9EtNKj2DVXhX7ye9EZWMeWqJhk4qP3HSvd9FgGtyHnA98Gd3KBMpQALFoHX2K2Atr1dfELG13ek4v53",
  "key41": "2pGp6Pktbapw3XBqrwUHkVPpqKUFH66opxFBoDUFqvfAgtgFoGTEUGDEpAaDUczEb84dk2DE5Yd36Tkjcu8Bf2uM",
  "key42": "JJcP5CdktN5Dgq9kbnCVMSTRF3YKvr6CocbMHNNpjzsPLJuEfLghpSWyuSny4V2z7evHFnU8R1MZ4GXun3WeroZ",
  "key43": "5JfpLmske45no4fSVMa3ishqyMRJL8bRigeiLVUP8okFFrq57tS3NcF44f5R95xpM2jJvzguBiHG4RLBw5kgXSPY",
  "key44": "3TSkiBvkYGxfKv2S7W9LFjKgHZpNc2c8njwcBCwvXN7UBZ49kxdWLDAxdrm9YHKocPECE3UHmg9BZ7YaXzjbktKS",
  "key45": "3hiew2zfHn3RjePpPq2WWa1WnwPxZ6VTc3gNS6mF859MT7LNyZGXKFtnBPpqAtWGfeZnoqtH8F6oG6HTFtzh92cp",
  "key46": "5ATJwgTrzqkkaKMonC5t9z4dudea42wjqNuwgcGtdHEQPzJe4WD1XuVcAXSuHyUVkJjGvtz3SN6H5EkZVoHZ8SDP",
  "key47": "5WznWrMSBQQ4CB1NjwuHNHgfZptGHhavBK4MXZiAZ9TXHaEPa4Hz8Kg928rapANaX5aKTE1WR3VsQwSYhjtXqgum",
  "key48": "63hZ9g9ZR7cbNZzHAULo7G3NyyTVEieY6fA8zfQoUzWgzshgRDfCuUvo1kDE2nhN4u7HjMa4e3DeEqtRYcD86nkt"
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
