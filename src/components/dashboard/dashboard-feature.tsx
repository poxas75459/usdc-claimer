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
    "2Nw1GjJdXRh1Kv2FNuXozVfRmskPtq2YY2nf5JnS2CSXVG2X6CmNpmzv4g3muhRpacKrx8DCh9Yu3WHU9b4T7RYh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Qv4dqFHfF4fM3ubpuo7CDx3Nz18JsDBJAP4wBemHTLDtLwkgjsps1yXmyYUTbcrHEgS1h113bYPL1msaNvkS1Uy",
  "key1": "5g4LZftKqXpNs7fFxDBqH4786YYvuF1zHR14SKWLKbKCGF32adr8J3hpPuxuNcoAsVzt7P2PSMKGbQyZDPAiFBbo",
  "key2": "4xqZrr66nYq4EfXmwuU2nucH2QcaUXhnT7g8qyrbRLmEmbJHBsPxJiwP5vbUCaJh3nTFt9fPea1waeGyazzvF1pg",
  "key3": "5e2M62LRkXxQ55aPjn9hJgJDiKpZxBVXPDKPCxeFTQ6ytwyHCNFByZhVHsSDWccR3Xv9vjKSVHpLRB77H2pqVRis",
  "key4": "25N4nbxC73aXxZx95M8jVk6R4sDEFFLLkSKLqp8eaPrqS6c5VamKRV4QxsT2MYxrLvXS9c25EpMyEi7rwviU3Jfm",
  "key5": "RPeFCRPHPJSM8HcuQftiGn2CMoJwEFNEtFBbuUuMbD1X66jppd7fY1gzEBAcKoKUWxG4Z22uaXfdWthXa6wEqtL",
  "key6": "462UwWxaHX9SsQQ9hSiyt4rpYKhJVcT9Gu4oF3o6PtbC56HhS6G8YZ4mHXvGEUJbR7Aobdy1n9SNyym249mdZfyL",
  "key7": "65c2PFApGbmQBT6TGVKawKfsDcsTX5vepPTT1zNzonsD5N5eVAWXr9xocd4rfXtHB5FUXQk3D4ZHM8W2Y4at9Bpf",
  "key8": "5FKHkbXaKB5zrwb6hLa8GhAEYW9gZ1z6DzhgmtZbbiUi85cvb64BGRsmAyAVfBo7fURdGb1hSnGKsm6QTXmFHctK",
  "key9": "2HLTdBmk3jn6sWzpSogpm4cDsfbYvyK7Sud4yXuheeqpf3he8v5xUcUDLcoAktDWAbqKjd8Y3K54zo4HDqHmMW9x",
  "key10": "VG41jnrRw4HNu87NHimkbtVehyjn8RdvPGPwHSUKJN1GQ5DrSvXYs8Z8obJBb8VFhvRkFwizzA3i4yMVE8T1h2R",
  "key11": "2PkxRYwPjyMmJQfdVviaxxLbKqXqH25qPKYkLdD2SkHxXQ3f32NjVTmusHgZGeEihMJyxArwsbCxSRrGo57qYeSM",
  "key12": "5tjqt8gvDKde3TruBeGBxLmZkbCwZBLjZneSmtCpU4L6TRLCSx9PLKp3PtmDvkNv4hjrMCJLWxsPDW1GBt8JUubG",
  "key13": "2G2uA1oUqCB4kBYEtEWFD7WDspkdSRayrXEZm8zoxFdq2S4FGzhXF5SrKjZMZq1tznTgWAry7363pG7dqAEXBU2N",
  "key14": "5dtnArho1WGRwyxLdrwn8scJuk1R9XgmhGdVVG7h1PE4NxUDUEWAmQcXQ73oneSZjT193Ybj5JYU5EJ3GK99VWmL",
  "key15": "4mYZm9a9TDAHDSZiSzPWQoMP4VF5EpB3yGGnRcFLh7UmRJcSmFJrwh6wWfTpGBF9TXMEM8yPwULEnURD638qaR8k",
  "key16": "36pEWsqoYd3N4fraRb6CakX1FT7jY66EjM4dkAaSgMXGgVjkGnFSjx2Lp1is3zNzRTEnEPkYA4z82hv77tLyqBqa",
  "key17": "4TB1eFrtFBc5Sjdr3cB7sjB3x7ndRwHAGxKjq9ZUVmQ7MQXFoFxtnUWm4JnEaiKobRgwFvKrbAY5qtbymgNGAZad",
  "key18": "2nXPsszJhQ9vSqkJo1CqCdq5SKwH5yc4XSrqQLfYwAv9thPy3QMikBKnLw8k9vF8oRNYU6gfa6WwvxSsLicVQrpe",
  "key19": "5wZMQr1EZ25XvkyCotzwstKcvJagDAJqWtUwmmJgoLj2eid86CCT8TSjYmE3SMbswiF1NK2BjWPDwesFYGrBrmPo",
  "key20": "5onh5WZ6eWD2WeVzUgRgS93kdvyR4Exa6HMQAJbZ6wenC2WHHgJAbBbWEjL4xPy7RahC8gwVXDJjuSD69umWfWi6",
  "key21": "5FGF1dpszbZUhPnAAt79B5aJQJ6Ap9SyzqTvCzyEYfYMDmQuEtYH8R2dM4wFdWEK8b3RZAc5dhJCzaQcsF1cx57p",
  "key22": "17EVDvSeULMmRwU3JnwPbT5zAZdxaBYUpaGek8HCtDn4tcGL4w25Eje5NmEZ6Zs1GSP4PJ4iv6isVkeiEqFxnBs",
  "key23": "4MtVwd5WXZJmpw19WqsUhXV2Wpfe2wEJ2UB9ZRJTtwYAkvF9Ww31j6xqddZBCP2cqMSG5RCfEr6rgEA3k2FjZRew",
  "key24": "3hEB2aoyGQs8Uz7z8oPYegiJGmuqcmhRh5w4xx5QrF381w3sRTffVtrft8MQKtrA1k82ZW7Jj9R8sWLULkP3niFz",
  "key25": "4kpqqqrVfRkK5PAcrw5T5x6z37fgY8VSVoLxzG4jqfUV1c587zkfvfQeKdDYMPumUFF1hUfS6918SLD1Kgw6Qh29",
  "key26": "2K9tU2hQs2phySHi8MLxhBJZyDTWQEj3kDQ66bQkcHUZGUpLPo8BpFg1LuLM6DG49EWDdeVaUtPdQ2YcSPhFonVf",
  "key27": "2GyfHrG6vCYJTrKmA6bcjU6857bAuG94SvyWceMjULmRPXgaN8kDVGMJCpBBikQ6eAqYGKxE1fFYcvEqzP7SCG7m",
  "key28": "5ZiXwYJdesDer6rkviHPkxVq5kL29H2ajsKz7CMXJhtxJNtxCP3UEaAefBTdaEuK3jRwarJQMmdWxdDeAqz4JmUF",
  "key29": "57i5xYcAMj7Lb9FzTnkdv8pbw3sMzLZmGdbG614azL5ajL7cpdWhTFmzRrNbnxxbkfyiRizeW6X23pFGXBQKohsM",
  "key30": "JM8qCdoyhur45sHYKb32WFKZ7x8h6otWMaHsiCaHj2jN1bABLngqHaCsNiMssAT9VPLyC6f63Tm5g6pg95bR33H",
  "key31": "3zo4F3eKzw9EwKd8M34TKxdB28QQTsj5bimaHcPvNvJVAWhPAaf8C45DJCKiwMw9s4xj2PdzQrLXP5F5TGTGpuaJ",
  "key32": "LRj74jN2XAxoHucdEfaMJuvP7DeieNgVfFpLoXK688kr5rmrKDS33upQEo2bgBEwVF67cuNyzMKo292s9q6S5XC",
  "key33": "63ZcxSYSycRbZStFkbGmsS5D4WdzVVQmLVFkvXiVQBSmm78mrM1ovZm9KEUHwDGdJYVF25mEyojwQC9VQ3ULHxkH",
  "key34": "2J37cq8ipwWGubq8x2F9GwduAnPHGBSHQeA3oThJBhZTLWoWCNwabgYkwp4cEEyDeiN5st3WtsSNaxbU9v6nS1Bp",
  "key35": "4DwAxF2P33H79YBVwNi5Eubxby6bL8LzofFyfc5uwR9TrgUAtLGxdAcXV6D2kGxdYZsustDVxm8GUHVDGVKoZgvH",
  "key36": "24v1WaTQTiyBHriTRdKZamd5a3CibehEoouUBY5A6ebgpPNSMvLsmTkAu7KR44khEPi4Gzki3yxsLosqJAvGNDgw",
  "key37": "M71zMmXLXyni7R8i8KpDy1etc2ddfEJMwUzcDd2vojTZF95QMc7toAG2PVYsUD5c24gcmT76afLd6ooxLpF6xVi",
  "key38": "4ueYoYxrGMt9s6ifyqZsXuZjs6R4Kdpu7pJYfNQbmdNjG1nmV1TcHMey8n2igPnZTKm6YxQMgE6p4wTc2AJRnQAF",
  "key39": "48SRNqSJGFPi9zP2tjMDkeiDBHfTd7vaHWQbTZ5N9ni9axDp1GrgMy2VRTD8HcFfstDuJhim9uPPCkMwL3bVUwLm",
  "key40": "5zuLh5MHZDWBvFZKySC1wyMaqaPbuxFqQjPrYGojokUFAbL3RGjTKd57VXKQhfoub5FVfibQpDSvqoa9MTCWwEiL",
  "key41": "64rTv1E5ckcy3ndRNVrVm2WQCho1ypcTzaeKymdd5JqHY62YivHKREhcDKjxpB65eFMMqWTK68rpz7zST8jKgrM6",
  "key42": "Mb83abTQdB7mh1xAqsa7qjjYdzN3VaxsvAnnJFcLFCwu5dSdqPCJdskSBGobP5DYCahwaDAirSzKMMq5dZ5ABBq",
  "key43": "5mMZBoabUu1ABkPTjfcFwAGzAvqyQshsRgpVLzUCZTcjeQCNHCkUJ6XvH6DKeTt5G5p7D5RQGFzuzgtojwjP64Kc",
  "key44": "3wZ2nYuPLHbqPRtvAokJT7QigUsdgXHTQfykSs7KYsf9k8ndAsjpZ2PkpBgbTajF6YHf9Mz1M43sDAVFPE9inhVa",
  "key45": "3RSppnj9YfBNp9FnyjZn9Usz6gcXQgb7KMrHzcvkh7mQ57SwPmPSzQBrEyWfq8kiJgp5vhEMruBfYcHuDTqyqoL2",
  "key46": "2aWMLxWRLHexgL4q4wDhp1kvp62QxS2foZFguntWPRWzsSUnEi458EsDp9RFpLRZidLrn6o4Nie5YVKjpijbGyBq",
  "key47": "4Pw9F5DaZBCkziiKnhkLeR4NWcDYz51UYr2RUU8R73NJW6wePy8U3UhbgwHGrnofAvXjtrmWhddCqUezrby9AJ9f",
  "key48": "1s29QB5kzhPpNzfZNoWMuKDoqYEpJY6HFPKm46dWA7qT181GuZSiWG1DYuA4QvYPcXpSvRiqPjxsqLMNmDWBVj8",
  "key49": "5aoBLrrM82x6dWz1azmHLUAyyExFF1nz9StoRZhgymqiDPcMJ1Gp7vPdR5uGGAAm8JNnC7YNy416hjsQg7NH3kEp"
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
