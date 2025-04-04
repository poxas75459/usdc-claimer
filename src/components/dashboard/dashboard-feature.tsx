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
    "127EuZGfKpb5QYTG5jp7i7WQTAc2TkABpGTb4bh6xnWSXZ3ugpkEDtvCMzSJTonNiJKF7cKsNenqg4nADtSnFfYT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XxKbmKT1aFDgz6g7SBLWzeNnBXpSWJuP9cde8j7acwGK2q9Ag8kqsrinYp3Z4mQgBTrgA8HyELQGUXFug9z9b2X",
  "key1": "5rcgJSgfFwFfASuHZqy2Fbd95kNcwmerH81FjJs2vQfLpZo4wNpKSvXhQmrbetKrMBE2CgjcPkhxu3UtyufyvuU5",
  "key2": "4K3fZzhaqPMbwnxvcEwd3DzKeyS9dU2TnERawRyPc75tzDY6TE9VpnXUWzQJu61F9ggBgseGQtTZef1yySLyrRhC",
  "key3": "5HJbdcyqNXAYVoqJEkFaQY4ApNeA9TxmEWUQgoJF8nj1XkizA6oU3TMbhzyCng8mTmK8kW8ZjDE4CiSb2NQiZAQ1",
  "key4": "33BKnEfL5teZ5D9dduXLNvhyWgeEvgZm6JE4bQtVZpmLmLg5xJtsBpyVhZTSK2yjqZW3Tmwznyb3GmhzeLxHELbE",
  "key5": "5fEgeNbZSpFEuAHkHUDjb2Lu1bmSf7FwTqjDrhfFrnyhEZczWspSwbjGcywnezahU1Nuv8qVSmkpqjJEn7hgCmFR",
  "key6": "2t7ednZe6NVqB5pPv6PHfPh8o1kL3895eMN5xk1FZuy75TuDDUxmz9Rm8SDmyVgjTjUp8LhJMGt5iyLGmXjjaiEK",
  "key7": "59AuB51DhC3aWcfirS1QJEjBw9SswuSszzbhFbFwCgk4oDGXWwMapztpXcmJ9aZ8S84kZwWny6ZuVDbvWCSjGsaL",
  "key8": "4wCvHw76jF559TuMJFPYYY4tKFXqzWmQYch3Z1z5nQao7d57v68Z6zNJja9CAxm2wuKP24V64ns4FsGeFECCk1LD",
  "key9": "5z1jkcTxCzZKU2pirLsMYozraCfQCfEgis6GqnbtTk1PadVSqjjgsbZGGnfhTMnRYcUj8iqnJtWU6QnV6hZEghy5",
  "key10": "3kFHtFMSE97VNW3XbNQm9gfTR6aAPhQEdkejDqjTRJZebLr5eF13jj1oVqHcJKxHxa5Yvc7PKj7HtBt5TqGCWti4",
  "key11": "VuTue7cLHYjwqqsUY87dHav6phqzFhcBW71XTXNbrSsY2CtqYRqRoAahGqK9eRsY7fibSi9ZEEA86hMBPcNKfBy",
  "key12": "41eUvL1pVg6DJ6Dphp3A7cBCDanB7KhSTUEa7xADaRF89hc6UD9LGyG263LmeXhWCv17MURkErbyo8QsyHQt5Ths",
  "key13": "4sA4L8jiKpGqLSNrc4hjeWXEYBy16MyjMzxUZz8ikcftrF91K5MuLRaLdzfmRWLBGPJTSicxsp8vwKExKDJFLnu",
  "key14": "a8wcEyX9y94gjrZLEbi7BQGDz3q8RUz82Fz6hkvHrLiuvhcfVRNtMaTQVpmnPXr6pFx8TVfSARTt1uXkMAX5u6d",
  "key15": "4PChZ3qN1ActLaAj9dYJtoAFNpFZaaDz9pTe7fYVSEafqPnB38XenyiVA97yPK8DRHeKt5LoN8xWQax6KdyAGG38",
  "key16": "3AJH4D2qhwwZ1ZMxjAm4whqn4iDg5QfjGpHcM5PfKeCDDAzuxdwoDrZLrSMwoa529Db31ajwumgTM3JxNGQeEwmS",
  "key17": "2udpX9jiZWvvdHKzSupWNeMeLPe4wmdKMLVF5rtcfC1ju9fRorz9Vvv7EwpCPGQ5FSkcYowmrtamF2jb2mh7z3Ah",
  "key18": "3Q9cSeUis4jXwjCCi3ZKnqf3gvqEyo33dFn9xYDWWcLbSPspC5s1G7avWDpua4ZsUU6FU2wYDsMA9WnZUTUky29o",
  "key19": "42PS9Q6gucU9UpMpMXrfm9QBVzjjJwSHy1pBNN2ELo3pLsoza2vepVjsa5RDvbnh6fgsXzcWMDyNFTwCsfNzA5Fu",
  "key20": "5Qg8Xbrri821hwvWRG1GHUCmK19apBNw2PM7MioMWCsoA5Fyh2iSntFnX667cDDgPTkD5VXxCxuq4HWZYqtXUPbT",
  "key21": "4fJxfYRBDLZJU4BD7qJecDNVof7PFiMMbvyfJac7PndTXKKJ8oCsW6Z6jst2xZYcgae7Sx8fBBTapK5PLAdHcYa6",
  "key22": "65Qi9mY6xumDr2Tp6ZiyfSbUUWjattvg4NmfrvhDwMqDk9YLNtiiUEBpMk5HeQA8ed6PM52CXy7eo9tnphWgmkT2",
  "key23": "2q1Z8HwtLyiUg7v2LFVsELUh5StczChGzFch4BwUhujJPxctaswmQD9ThnnNoVY4Aqs49WvWXJ9VTa54bgNao4oK",
  "key24": "5dfkB3CeNnpd9rfmbx1TdvSD6byMD551ACeeDtdD9aQvBCxPTNYnvCAtmSVeLnZQP16VadNG1gHiNoqPkw9t7aRe",
  "key25": "5RPq3Gsk2TTE2Swm1kLbwJPbMtU6ZWnwtevXosAAnhJgTUuXNDsNkzrREUq5e6J8jYNY8q4xXEAsWfPN63w2s6pP",
  "key26": "3RjsDPuhusANP1WU548tXxikfGt8iS3ui5J4tctcUTgvRRHzyvBrqvSbCy74fAja5YnbfQD7SEHgwBFF41v7cdj9",
  "key27": "3HouJ91a6Z3nr1NAassDvhHkjPqceJRxgxopwtrZmovDEEKFA7YaPbpB5aXbSWAr1FDCP7UjxRQ4WqgCBVrx3u3p",
  "key28": "ZCxAaxrSzuJzKnMYyK1CmVNcf7PXWjVSTmVKPkshMPgC3uviQ7kojnSEZur7fetKyATUkagc5SpQJQW6jRiErtz",
  "key29": "3rSnKk1DYt1yJ27JhwxqbxixnyoL6EsyUoDqUy5VEFRibGLqR8DPtNh4CQTv1asVjY8aSUA5w53tq4hhZbTYJ936"
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
