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
    "CF1gWaw11eE8FZBCx9E4hzn6EvZ8CCkk4GAW61nRaUaW3JAhbViauZXZuK4JWxzRviv3LQKHwn8PCez7AhZ3c2S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EwMA4FZ6NFhm2RYq6QdZsM5gn7FF2t3UcKk6jHWpbNR673xYoJMRXajTvYGcUBi3Ek3MgX1fFDbrgoJ5xmW2NnP",
  "key1": "41chXqcedhUogGae9UerUWSoCH34CWtof3hA5xaWnDbSyRzHnX8smfWfmFdwoYFuHCDjNuGsGMArb8mSdVU6B4ZF",
  "key2": "3Q2TSNg4qUbTnJXFkCohXdt1zcAg2UULBAqhXxjcKjnMvYDCAMmJDjFF351ToSptAkdXFZwSEVxhej1DJLU8vcRA",
  "key3": "2BieLGxyZFHWta2xH1yQ9WniCx8DFEXAnXusr4qTMSCVPzZKSyANhGNHzid7jDTjHuxqaoQpttbKLjBBE5ytNKh9",
  "key4": "fYio42L5MvKWoSzQGpEXDyVS94KHBCE96CFF5BobixSwc8PVxoEVfFyfxvqEZeRnHWXGGPXK8VRfsfwAs3Dwss5",
  "key5": "HeSbG9kVASXsUeoZbCVJUEKS8s1FpLao2BAZKavctdx5cHYRttcP7pHspDBnHxE7KySBATwRHdduiJ6ivVpxTVF",
  "key6": "3k3oaN6vVxz8Kr3Fi8hDGD6iKA1YgqcacFtRi7vfE25uPRAT6AXLUcxjUQzoSzjVwxRdvCUZJGf6SLoPc9Ea1Vcm",
  "key7": "27qpPLTxnEyP7HMWEQHjAVdGoBeJ4z5NSahjdW3aC3BQDEkFNYrUXvCFihRDRFy6eC6FPpfJCGxUHjSCmo2bAXZx",
  "key8": "5BmUCSk1pUyqb8E9rqRbaQKrKAVEhiMDMfLU3hrEsJmayshsHb96oEnRVz8A4D1SgL6pHaSQZiV31wzw2QGf35VV",
  "key9": "4bdm5VnVdbSyhMsNRNsmDDnKZL51Heax826EKYfNtBdn4s4fXfVSLcF1vmhjXhbhBofPEwmYfsim2KqV3xTZSonK",
  "key10": "2XMu8ToKBXZTT3XtCkrpB3hmDwg47CH66vz3uLB7GuVnvXHkkeSzYdAKHr11Hh9dxZWQuQTyherSajTwrTxiqk4N",
  "key11": "491CuLxT65CExQSfb3JMEwofHBqw97rFSJhhAZmdGVHQ1VHvG1gqarsY3g6cJk1iaL178hqB2b95LJ9nGv3FNzWo",
  "key12": "382KPiDFvTtEgGyYD9jjfyemQn8voedbzt1eurDgX8QD1zRbnhuajSDnzhUS7fwJWCM7cAGELBAhqXQNDwQBntvD",
  "key13": "57bVZYZTkbf1mxoWzRoRLByEbVqpsuCj2mu3oFyKXcVX1LpFpsa7rGgysJCZKD9qj35ZVgTEpcsyizjmrJCaqYg1",
  "key14": "y3jZtpDZtesHU3THEAxjnhfekPHSNsen1Mt8mFAax6Cao7hK3qgwUiQdbVKyP7FP5DjnmLd8QcESmUHJRpTpZia",
  "key15": "5w1AWBZfez3kzdE3x1ftmMp8ucUUQ6zynnqSJzug4ZMpGfNFiZ7jpwsovMBz4rk3g64uXFctSbjnnt7n4JpLw3No",
  "key16": "5HbVbhvmiTwCj6PBCxjHtMuUqA8c2LVEtYa3ZLQDxSrGgLUX5b6WEXc6r8d9VYEX6fE1t1p696Zv8VZhur9e91TU",
  "key17": "5y71ibwaX9ztpDgHkDH7h1yT3188xW91UFebswhUBC4LGduZGB7oLB3G51A5xu6gJVp3fLny9qwdnF33BgvJDtKZ",
  "key18": "3Y9gMwc22HsQYpuifJ9DZcmJdiFkymexbSQsSTL4kej42SoN3wKWPimKsmR6PUrPek5uSWaF3s1N9imzzcofEmTQ",
  "key19": "2ozmMCT5XBoEDFTXcnpoY5wUhb4oCuB4Cfov4P9pQSJ48UjSNmvoD29YF4hP6cFzU3oEhSc86r8WvWcPJ2zv6q4U",
  "key20": "vjV2vysYPQe111z8W4jotz8ihSc9KaM9yDsR5nUjsnBfb3ohvTrLRwYS8VXEK53vpQp1kbshJkF7WnYwLL41Cat",
  "key21": "64xUeFr1U49hEMvzp36qdgwssXHH6UAPtQ8EEFsroNkRz3XzgYw5pSx3AAffmm58PWeqKG5wT4bCw4YXPt2ZpnmP",
  "key22": "2ysA9mYAGi91fAwGeg8ALt7ydUZgZCasKxb2DUQ2Rs4PZRz5jpSSPAVn2ZKsqMqph5e7V5RUEuRfYLW3C6GqZuEn",
  "key23": "3CWHCNqQRbhmJGNZUeCNpQhhRysgWw3EZKvSUkw37irTcL2dajTv1UfJAADVdMkYkPkFURgPK2W3nxUAFmRjY1vZ",
  "key24": "3wEos9UwGtFnowWUY6nCZGfprQsbJhdRJH1okF5mY1QYQZGkAXE9wqgzWqXSpLX8Cbg8rBba1eCWMCVeGTKSVyDN",
  "key25": "5miyroA1FpRuBeiJRcTYKA1NhcHQwdEZJFevsZ7AfvVxkVmd21XWntr5yRnxRCvKfbYrt7QeK2a1ipbT5nHKQKTG",
  "key26": "5bACxmcufYTbT63LQVeFhdzqsQZu2PddDqsUfL15F5HwE7Pv3woY5xLTeqSVEw8EK6ZSw6Q32BPTj7wxiAkvgAUx",
  "key27": "5Uh9QNyjXWuo8pQGHGXAC6BMbeRZGhDJEzRH9Bfae5BUg9SAwfyAGpSF5oqpizUEykx8gXXinSnBa3ZrJdHAJTAK",
  "key28": "4ozPL3Cfvg3eKaTLjJnJc1LhLKZ9PgcsBf5ay4GB2QNaPy1vV6dqqofAijVBE7g6kXS3wU7LQms19MEcxRoWc5xL",
  "key29": "nFnRgf1fvTJ27Z37jG7iFDf8cDjKJdcjiHPaognAx8FGjD4jUDFxpQXJp8qqGKQWwcSDWH5bZDmod6BWUFmBLCD",
  "key30": "2WS94gDcNEhz4iwoRL6kG6YLtPZt4FaFRcpS9w1oKPivZRg6sDdo9Bsvhnz32LZ3SNREyg7RB1eT5y8Pm1hpueL8",
  "key31": "Y3Syutth5ZnrGxJSL6z5EzZok5EqtFxsw34Y2PT3syS9v4A7ZNEm8PUS1xQmUW8wMRiEYUjFr6SxNLfrEc3WScu",
  "key32": "5mD4bWvXZW92T6nbRmmUYuXNJ6r1VcWnzz6LJCTV5nrPPAY6dKJgiKMWvqPNik3LDkbNCEtaHCz1aqngsNvKKjk7",
  "key33": "47pbikT9rm3ziKvUfkYT2rJy2fWMhXfyjriu7TdbuAj2dfHkkHcmjYTMgm4vG8H8jK5D2jAG4d8tt3JPf7BffSK",
  "key34": "2JUpYixRt1oSUF3YKGHTzHD3Qkk71qwfAZ5QMVcGyb4HdEzCXFEJyu3fMEFTQh6QH96jZCNjTHjMzBsiYzSAWJgw"
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
