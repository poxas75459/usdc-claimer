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
    "3nFHHKAkeBQ6DpgqJBYxwW7osTDkh4dspVWzTdmtUbLQpp5B5Gqo28uzBrab9yiS9yiveoBUD4LfaiCKZJF8rcvn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XQStieNSMkmAdfrVoZ9baSQwFdYRMRSAcsKgnJWNpLmecs8oqiv9qkhwwZSWBad1ueNCz27oD8TmmmB76RUWua",
  "key1": "5xBbEp2cU7VbaAUXsJDfHtqGUqv8yY8NwkXwJhbUSDAeB4CpynUx7Ud7BRioD2dgkA1KCtFZ41xD6xhShCTZyeBT",
  "key2": "5tM7ZDxHQ9iwVD8WRRKDbS9iShjc8Y6aZDCjwACGx7PP9uSYVm2XgCb3gsJGJbwW7GqhkvMgHd81zKu2jtekWoaV",
  "key3": "2MpyiULF8v8v8TUkYsYmRfBfjKtjNfBRiPozSa4reYVGUp3Wa9YTSTAan79u5Jp2wFYed6Ly3CoidNn5tEDfFdr6",
  "key4": "GALqKYWjmeuFwaoqxiPdc8pQH9s3YfEvFPLxQqc2Pj6fQJy35UG26NKsxJPiZ1Vs7EscFbVksxhfNf9Errckvae",
  "key5": "6iBLANkad2CJfmh9kEezSv9CoEMHLhbmJMS2uvdujTRPPej6sRBVLww5XMLCiuCDSw1fLonUAWUXA7xLZYtaZvs",
  "key6": "1mh4AV5SfvYiBo6ui3sc2z9fM4WFGwrGAoxosvzgjpj8arCHsM1fZ19WimbjCJh3Ych4B6gz73s13iMS4wDQ1XB",
  "key7": "55JZDMioQ4nhYKxYv85Xs1Drqo9CDV7oy1x3e88RvbEzmDRSmQnMrjiNoRLkB7K5qnRU2NTdZCwtwqcVEV7FrZH6",
  "key8": "5Bocov5yWa9TJ1Y8QkZvAQBvPTkrALWhzHctjK23jHXWfkwmKTBc39vGDyof382T7QEuch5EkGUAZZWVLQV5x831",
  "key9": "5NorhRRwrC8EzDtBz9ndDUEDtsdxj9BUhGhLQ5PedBRAkaeQ7H8rEv7NACJf1vtqoBriudaeyLBnMz5X4izd6hg8",
  "key10": "zAoEREJagSZKTTHpaAZrwUu6Frruky4KdWtKnVom6q5scUPoTznn8z3QAA9k28BxH6xXUgvo8kb9kNNWsPTmjk2",
  "key11": "ZYZ8UjZ4L1jry6HQgC6ZWPsu2cjrCDW1wfNEAavgMDF3uEBPanZbqNduj7rzBykgYqjHKFnY9NQUDzyzwJbintT",
  "key12": "5ZNLoR9TSutZK13RBCwmu26HPTcevr6PxH9hWdj9cU1nx9garaEZdahHrHgG5hJbuYPQncbXE97s6rQarGD673cN",
  "key13": "5tMks5ptExw3v2pv6t9uuo7kQ9Xneh6nTz5s6ShMsEZ9hWECRWA8tDaJ4peT2tHsmkLAmZuRebYCGDPSwfFDGmTG",
  "key14": "2AayjjSdRKJkXmiHSKb6wPSYJQE6B1Wfcg2Bsvy63GYB1qzXZZUTEt9QKuNPatg7hdTUnm1SpQvz1ur9pDqq5zXE",
  "key15": "3UhVCZqJyMDiPEB3H9ge1ESDMV7JDP99bYfxfuPhZxM2DBMHAEbp2pXE8ECD5Bjq2qomJgjqieDKP8HRZAMQeMTv",
  "key16": "57jbRG58mirZCDuFyatEpnoUZrDpM63y2txGjLCcVUCBqcbp2EsJRAbr6JDB7WXMNLNZuz19a2d6BC7aLEn7MDVe",
  "key17": "5CUL1FhTmMgaZE8WErv6w21wVW7VUHoV5fNHER91HGuYgkm5kjJBmRCzdNxJeAhdMUJdtEZKh6t1wkDpLH4GNPfM",
  "key18": "2sPtgxo1EZ3Livub8gojeg24SU7V6zV1pCNexAXLG8yWW9CeN5jxaxZVSPsEK4fRoe6EBzYdDm17K51VuPbnCWXe",
  "key19": "4CYSwYcjhYkvFAVJKZ3dZF8Jz3M5x3yku8uwdYE5kgoVeabiE1XxAmPJ1YzVVzN47bosUQe2YG5cg9adpKMmUFfW",
  "key20": "5FGmFnrLk8nfkLkji2BGaGxRWQsaJ4g15kNCyGkdpzGqrYRhmJxyWGZLtzyugK7LBeFFYg6GtA5UPAQmekpvtUV2",
  "key21": "LJTrLG3wApF3cHheVPteBYxQ55x6CGjwfCZvYHaowA1oJoppMi8RJbTE4pBDVKbYinyw98Mwde2MtKAygyhsDiX",
  "key22": "4cdMvaMke6MSAJ8tbx7syz4pEx7VCDn3448rUBw5opPESMt4932T8ytHDRBmk1bXGtQn7p7qJnjnFJtqJ4S99Nvo",
  "key23": "3s5sdxaFTRF84eoMEtepC3HemMcxsV2N4voPVKKAL81E6TDE7TnV4GUgBCqUMUdtkwbcUBm6JCYqHf65j5fU2ipt",
  "key24": "46rwFXNDoos5NX7vSWXLbjSv7kxu9WfJBqjMgdjsmB7imdY3dVN2hTLhsQUfAmi7ERkMSdLQnmAGKsXvwGz7FGSi",
  "key25": "5aaQFVBivrnvR93CzD4nHbTJM3S5Bc4jqHQaTFj3PStvFhsgd1oyUftcz4Xu5d6WW1sZhXRYrZyqpZHKQrKKcMYA",
  "key26": "47a8ShkXK6tk9jQ8r7fGC5zPYv749LD2GijMLGaAnzs9JMSBYektFFLwieLCWRUkSaKAy4WnUAZgP2bJZM43ERnf",
  "key27": "3r3ycNtjcLG3SLj2VKrxfTVaRvc5FNRGjGVLmkeL68qh3aWUdoVpggUK81iGjAnwRuf8Hs1tzKS3woV93oTZafEL",
  "key28": "tZMiJ84Wzhuk4BJav5z3nAFsR2HXmnHaf89L6LnTzGGepCg5GifdZXBpYcLD73YDi6FmrxiXyGsvibWmJNSHBYo",
  "key29": "RnA3QacxDeTekfgNNgzQC3rX259ntqHdGtSKWoKiXLDVPbRLgrBp6NacNcBZiaLUJt2h1PffVrrBRRQZE5RZkzK",
  "key30": "4uipewdw77ubnH9FuL6pLpXVH2VwqJepZKnRK4rKXSod85NJRgrSptf1uqAnib8BD6hnVUasYPczHxXS19DakRFK",
  "key31": "3x4aesDf3xmjiMfHskr5o6Fn9AH6eab1k7WWJVHkwXLSaj7Ms9c5MBcwyrjrZb4M615spc4XU3B6GmL8DFQiuyUK",
  "key32": "3NGRXcAG43DmJJRBiDAy8hqijprE93992xFDnqTVNSCVoCEdJFSfznXjFoMqD4jGimSSNE2rGVVAdHeZEHwkepHm",
  "key33": "2jEeV7r2vYgYAo6V6wGtbiWbA49Cw5gt9mzx96dXvtR6jf6J1LSfo1zsVzgoPpuiqwYU5jvQdoh2y15CtZB17mmU",
  "key34": "5UA55h2VzuXqfZyUcDVnw3xpeamYLE7JTCbhFfHqxZBDuruAiKKUSqf7cKzegVg4xRx8XJq3uxZnvbwUW383Pr5j",
  "key35": "2FrRdEDLD9AT7vFBMc8JybmQeVKWVSRZudHNZe8tjmSEbKJ5GsEQSJZF2Bqayiu3VnyKCB2weNHjgiRb2U3E9kyS",
  "key36": "5wNDn1J47spPVUCXxgRvZZpyEZj83suY3o7JKXexevTYhsqpmExfz87ffcCDXxgyvySnchefLrBtx6C7KPFCoNSt",
  "key37": "5itaVoMDM2Vr3MryAVYHv4QkFmmDTZEa2jE27fPqr9A6VLBTpi8Hdmpm3EZQJHaGYcR2DHvYq72mo9j8R1T8x1Dt",
  "key38": "5niyXvR76pJTfhHVeQpDnGoVRwyEAdbFxXAfcY9MGC5p4MBEGVVPWZh12CgJQTxVqsX1EEcYMba7LASWkXLtqDgk",
  "key39": "31GuYmgZcZEmsPy2CgjFYSH9oyLaVoqs2YVi9LLKUbkd6LZrp42M5nnCwURWcWpPEHai5LmJVKn96Z8gbqojxYag"
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
