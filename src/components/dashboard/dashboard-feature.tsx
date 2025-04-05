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
    "3R51vad213JREMbbKWAVWs9ZEfqirDBMawaHP8ey5ft6WuzjbXHiSvyZ6LjeBfdCgcT2pRXY4qqACtzFDx5Te4Vr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C6NaDTqWvafy8uskNCB2Cd7VJn5cjD3Mau4t2BioW2d5Djv9nvrfUVQyujCZQ3xLSsdZqCFa6ByNL6ebexCesNZ",
  "key1": "24qaSt6QuJdvXr7KSRYZxzLUHMariTeMFa76jgEtTohHm4DDR75TXWgEje2D5qSKRu8jnU8iQBYLCraxjxnAiAys",
  "key2": "2ya6jiPpX72eQQ5XpKqtrY4HoY8jgeZEyrzr3Eu849StreEhi9uSHjQzZbp7eUQL8E1TatHypSWhevBvFXU9utyv",
  "key3": "53g1r5o5chJKXNrr3jxqxWFJPJzyog8NYQ67mx1BCcGDZzssFhQeGa7WaQjUTx2UHDM8uCLj9bTQpfHfUfhHZoQR",
  "key4": "3FCeSH9PiTnAPBGsvZyC4KKtHb3kJ6ZTi23WC8a4NVmf6EHbH7rjRb7XzRdzamN9PvEQeCPUtC3Fk8vR3ChPtVJL",
  "key5": "5gJBNPjkU1YipHNCoENrz43WrTxf7wzLHotYzeycaAcpDyPyEif9mN1wxHzm1yM569Hw1hFj7Pi8jmL8nwdUEnRN",
  "key6": "cTqVUhC8hSKxcagMuBxvZAaoif3W4p1Me3ac4onZhrU5euTW9j1uLS6wz7E7XyWn9f8XpKmYedjVkX81VPx1Nvz",
  "key7": "naVMhgc1uc5eeqSdUP7yVcqrtNHMvFRdGh7tBVCMVWYLq8xma2MF3i6Hz2BbbgMFTZPzyTjG6WMBy5fpRNuaYKQ",
  "key8": "34v1khXhpJBLcM4d9hJPcCXq8jKp9wmkZFayw5C9C9ryPFiDEK96PYLJh1BqQdacEK7eowirHxrNqjSjs28xLKcf",
  "key9": "53pbvN8pqhA8XTERK7YdgDLbLcNTBh3mTo7ZBUxGJi7esLWZmrBLWvpBFEb1CCXpX1Th58Lgfe6pgb35RagsCo7t",
  "key10": "CmZqSFXbw75L9nzjVWqGgZ3uvzDiMiSddWWek23W3hqJZrkeghPHUJhLM8TDrKY9vTad9Y6U9GbZu4LtKRXovGn",
  "key11": "4ryNyvG5cQ14KriWdWJCRww8J4CFpasDLh8z18SbDDTdqey5FubQHGssEa2k5x1vW5ebWZpAmnnKgQc2yKTmWrT6",
  "key12": "2sf1ZryHnomZUQmeA8sMPdgXiXptSTkQ3wFgeGHcyyBHtwRStFX23T9GVbXySYFzJWnMzPVyytE8mwgyoFsogmyS",
  "key13": "e43D2ibX3iDbHRFghNQgSj5PEzNdf3MEb38Ui2QoHKuYAPv2gyVAprRDe5jxWRKjK9vnYDe8Ak3jWBMtu2i38Ar",
  "key14": "Au14Tgeb3BwSQEUD5atxhU1ukPrJudpdrQs8zUyMUAbrRxz6CY3wzwN3NAfoY7i5tTGRBBAC3KX6cqvVXdS6Bfp",
  "key15": "52SfWnCNKDwAt2kfHcLdykf88uCborhqqa9nTkgCReENPkoFEhqh2y9ULyxgZUbmXLvjBgVrqitnURZ85NVRCoKQ",
  "key16": "3uS6RVd8dX3ndCc5oLYd5CZSBfcFkchq5xT5ZLbC26266Z9d7F1jtVkKn72ccFwfn676rEYG3nKhraex5Hmt1dS9",
  "key17": "5qurPjJSS7KWZxD7jYmKyFZtSMBizSrerkHJ3EdcUiiiRYgvJSrDUTPAQC1qMgsGxAqTajJTBAZPGNcJ8K9Gh23G",
  "key18": "2jdfUqrntoYYkFfxRTSiYzcv1rfsyhjDvvWLdLxk3KChJFKZdNGCBu26RMYEvDwPKmDMRj2XmD7vzUHNTwMpo4as",
  "key19": "3FKmXdFhDK41s1ZU82yjVcb5sgprSVkDJ4vsCvfhCoM4r6NhRbkSpHAbzKjwZEGukVoKekVacfzL3TUgKTeitjJ6",
  "key20": "HYp1jMPzdsKzos87ukyifXkiyFXm6d8ohhuN95xKKUhC9debcbLJS1PTyqFtt9thN19fMSZGG2TustqGy966JQU",
  "key21": "274seSGfzLEJ8Jj68fggivrLR9S4zFWz4qaAZEDfkqpDukddAhWcEJyXEQHvtn4SKMZBvBQyaiEXq67NbMB9HdRN",
  "key22": "2o9XBb7JroUMfUr3A8SeyXjcAsCsyZBNN7ng7uqLwZBK1NTqXQnH4TXmYHERfCRvn57AiRzFXu3jvSauAPnbaHoM",
  "key23": "4CawybpfAfdLhJ6qM7VFWoSdrpGf46uyA2ZjonXG5HRUyq14DBDZETkKjPvTYCcunjRxNJmvUUwLgCvCQjDHsjRs",
  "key24": "2DMoztkqNSdC2h4k1QYbGzhqKHSRb9dEmnWeF2AzMBYmvsQ8eXGvRLjPPj2gDpWgy5urZoMyh8XYJaT9gxV3c9Ao",
  "key25": "3sGs5t7e8cYAw9ShDmCLddpioufTsRW5mofG6Wsda2fsWqMncGuuEVr8C1ypTX6ojuV9UUtgVpFPqEBohbF9PEj4",
  "key26": "2qZF6TLshCboqcvtM6DcjwxBGjJdGM3FEFPKFTRAQ19ipf6eTP7CDWV94oRuKU7PbZjyj5VKA4t8dT1MCqeSD5M8"
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
