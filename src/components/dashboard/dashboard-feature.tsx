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
    "aAbyv42BUrb6VXPRT2YgbHkkCY8jCEv77a8EXFVrHKiZ33XDBdAmXoeTMRmDpLBVgDYQ7sz3CZP1rztkH4bGgzS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TQJEnGRiVooH9KRM4TNvzHKenDZLRtnkTD6LXdcDEQh1VKmpA66qfe5E6YY79gtg68W3QjbcbLRmGxeguwLgr7y",
  "key1": "3HrXzpbiGzNesYhumK35spVXxWcPVaXwxfmyqGgYrVNPKZSHwWf95YRr3zxsxU3sb1LBHxMcE2pMXhvwdzNc28L9",
  "key2": "PJH9aXkYAoycNP7FZN7epjDkQTXZodrTXFRvaLgHPwM7WnQC5zYfvYsnnjXeSg87QCQXc3gq6NhY3gu7PCRpBVr",
  "key3": "3EQUjVRXYrPJjDEcV8fyFmW7iERNpHyYfuVL6A3QB9pqyZK4svFgapy3bPAeD95QgW9LUPXWbCT4X5Ut1LJiFzgk",
  "key4": "3dyaDAKcwehJLyY9rGHYvD8TUPpppvTBEiqmNJmD89p1x64oecZyiDpYu9LSCPvBsyMpFHS1s5raBMemBWAzVtrp",
  "key5": "3vJfDcqUWK6ufecCio2tWzK3RyJBdY95G4QVrCy2Fb8wVPyoQnati5oGYtf7JmdmePLowVHTDj4zPv2hFe8n4D52",
  "key6": "5E6dSBGZRY9orJTXs97p9FXFX91FTirqTa2jycovEmAxWsKCMgCQr2K4WZQ9rPznJayPWNcgz3u4WMhqtoK5uT1D",
  "key7": "3DT4RnxHw3w5fFQ4pGAeaoKjFmWVR2Vuf6wfE8Z4UiQXNbZA2tu4bG2Z8zFsvSSTZuxBejE2KLdnkendqkVq9xwK",
  "key8": "4DW7fMyPxzQc3sqJBbsYrz8LwAuZXrdL8EZwq6VwEqCgdHQNNQ5g7MhnSwAMRq7i2T3hxuBpGMJoep72wMEwY8kr",
  "key9": "2zWhjWLAk7jXeDpNCs6kYToV1o9UgtVYZHkpF82LGoW3Dfed9vzxn5rExY3ufHSagvTgTagAKsYqTEDq8gD4MwSA",
  "key10": "4cPRcUfzwHaX5DLxPbbGosWhuiveHrBCNYzSsEaC1uRBxiK3Wb7EVnVabEMgY6KsnwLR7UiS7b94hWbE8soz4hfp",
  "key11": "2tr6H5Qqpa8ooRYte6usH7qsdBt8QVjssEaN4X6yE91eYibuBDT87VoK1bhfMq4rxNNW85Jgbp4HTz29GntpwMo",
  "key12": "2xhM3wc9UJmUWd6o4QYa2VJch3wanQD8Y4945fBJpc92hWpkpXAyAAvbL6oqKFEH6sc2dodmRQmcDwD2xt41uAqN",
  "key13": "26diRube8cHZqMpa676pNzBz5NmMqzmaLSaGRZPPktSUeY97mpZhxt4rtY1YpYpAvWCD2wPYwtNaZYVWUat8irpb",
  "key14": "3QhZqceU1BKhvTzj2JQ33kNDJojBev72tsBsC8RrjQB6nA2d6K1MFZKFPEbzbzxRa38MfqMe8EgJP8WnqRNCV15C",
  "key15": "25Jh1zsW6UXT2wQXi5cuGyxm7RE3Db4SKbo7Y1W1dSvL3EsxGMYQEFvBnHojyYofnTz6utq642H7hAykWV8N1GuT",
  "key16": "5ci1ZSPvMtB3Af3ghYb3pidMKb5ZgbLHoGEofWQWtnPw7wRCA9RPGYXkTkpd4ZRpzXfs4XbmnqNmjSKGq5befa1C",
  "key17": "2QavS9FdYb7z2owjJvfvSHuCpf6iWazy2trn6kotnZ8nvQFiATvwm9JUaJuNZqcRJVSEK7HbmqFXa4At9PxuQK1q",
  "key18": "4dwD5vM27G6L1gysx5iFB1tPePhZuHtPhkUfS78cB4o6sLJxYtVVjt1JCK1KvGN4hXM25LA2fJkx1JCL47U41QLN",
  "key19": "35V9LbNr2U64AKZMXZos2xdZJrW8N9ubJzqtp4dD83PnaSY64SaEaxCrkAGqHoTCBnFtf7KPqLiwEuLKj2ojfyqg",
  "key20": "3mBbGrY4tK8gfxYVFFrvNdPBEXtWBNYTXrEVe1jJFv4e9NdaUYQxpiQBLENsCuAFmE1wQxprPgKYUkBgvvDLjt2S",
  "key21": "4DqynBGer8yEz36uBaEzsWrF2fL9mnDSHs7F7fY1LGqyiWhf2A4E3UcYnsKPeUh57Hbj9pSZF2VHrXmbhYpnhewL",
  "key22": "5Y7LNbxjriRdV1mHJ6xEdkrCkhVFb7Jhxt9sJUC6JHzjnPyQpC3QMYtncnUedCWaVM3C5EVe7JZ5rAiRQbmoJkfa",
  "key23": "BnCWk2vJCCPhdnADLrzgqGXeS8KftFt4TuMcy5eJTDMkmE6HmohfCy5BF2A63xSxKKAPmLZscJjiZFYMd9tQS7D",
  "key24": "43isVcV12FbUqrYhJ9hjBSCxSszF7YFFSWruJarYUkKrmn7Ety11uZyQ6NkrjaP7y45XbAQYoNXRjqxt5HhB4quy",
  "key25": "37X6qKMSR8kDPkLVbaQT6CjY4CPb7rD9A4wEvubMTA47ExHsZswCpB5hubq2Bja7cvRFpHAdiZHsWcCyPmfvcHqP",
  "key26": "46QBBxAaPuCKkKmJhQxCMnYWPPbLytZbzUZ5YMdwjzBAq81xfGyeZ9P45mMoXQjMiivYCVNpgYSWQq9wVpU2RRXb",
  "key27": "DhV5KLPdCFr4cXC2pfgQM5gBLseU1Gav3DDvpHPMnsAaMCSkJgB3bAWxWefQY1oX3A34i2XexrwhreuzsUe7koE",
  "key28": "QMjD2omukExQcSxUR1t7TXvcnsPV2i9kuQkgq5T4SJEZKZ8ewmFvX6Qz9qProyzALwVbQ2ptBoHS88LTDvtkVi2",
  "key29": "2auCFnSnTSMQ43ZJbiSsMkBXxBXwdxdmVtjnCKSZbR4hoys1vN9RdaMTJPCbytQTSpFfQbnAvYfwCFcWxYDmC1CV",
  "key30": "3RBhwd7WHUuuSA3E2aeyFaJoDh6uwEcJKMXpJvTouhvbcUnNXwign2YvuQqnhDg6KiCrpXPLdiFgzgDUdXuLTndF",
  "key31": "bZT1gTmF14ni4WSPSrwn8C88zgHydJ3Mnf7VXSjWGwGBk9VK2i5EN7i3CtFiXWw86pmW3Kz72am4KP1z8Diy729",
  "key32": "2ckxRLsM48F8nj7obiMJK613h3wF1nh8jT5NzgNQFCNRNuHS8FVgmomh11m6ZVrpt5cH9EwczfpbQoWe8MwgLoox",
  "key33": "5Jdhmpmf9s9rajrASv6h8PetgHwgoAdjQHSygEudJhoGdMK4aQawA77Je9uAE9Dcmn5YvaJFmRJTYBan31bwJxcM",
  "key34": "5iUACjNYishf9d3wVhB8iCLXda2zhcuLCgjPuWY3jyGwVrQ7KuvLp5wPdDuLPNTPqX61ec3uGKKvRbHv4VoxtgG8"
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
