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
    "4DN4LqETwRuZnrbxmhwJMuysuyu9ZQXhDPBgoVxtuGLLaxSZky2m63RJVh2p6wem7RPSPidyqvVHpcRaKHKFEpZB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39Qb8hF6jef6Nf9eJpsdYab5zMDcgE93PQofj5KPeVPuzNJDohZwPgbzJhY5hxE9JVzuhT1r6Gv5yFVe7jceyAfx",
  "key1": "3my4Ex7PHJzY9q1FHUS4pyzJy8r3D2F4C7cQMDetmCzSLVrUeWztijo1NyUTQiH71sVj8owp6JCGez1HsLSt56v5",
  "key2": "5oK7P6NPBLSuKuNZ6nq4Cpdty4pFN9SiVortR2MQCBhkJmjsrFnLzTWoSwVYnZYCqjmXTeojpfC9fDcgHdWJBLvm",
  "key3": "5DC6Zf9cVYaYq9tTcHAqhPR8km5jdsqhAGAvKZsQKMBM49PHH6U6KtBkog1tFBjWgu7wnDXp8pMvMq5Qu26xX6s9",
  "key4": "2e6WFrSnU7hCgnx62fbPRQdyE292p7uy1hyn3KVVjYtXNHRzRZUj1uX5Qi8qVSLHpDF4DLfWDgvtKCG8cyZAVBWe",
  "key5": "4fzHX2JJzyWhFNv8SgGeWnqMQ16SjGQWkfB1KNkEXY7p6j8E8EnM8DfY9PmZsgcGXGhjFVrUV78vvExx8dt6oFXV",
  "key6": "34PwtRXXz6aQGesZk9rZ8ThzBteEqCZyBrryhJxJZj2tdVcU1r5HWL8zmiJTuEtmqYJmdAxcbk1gE2BaJsWH9yTE",
  "key7": "5vYs5UCcqYjThG5818QzzzKDqfn9V2Pc3MdeZ5nNVqSBxWvQEjH9sv4pWQng3sKFkeoVJ82AUWKq8kmVZ2KEU3AC",
  "key8": "3B4PmkhjdpS4pZyUXKDWtGQGXk9EefR6GdTPP6inNZmEAxdgn7mJnqTru5aNBx6nshXoMBruiS7kiQA3QWCkFReH",
  "key9": "3RCcHrbuh15ed9SMM7VTxHf5EsC6xbiCLRocxFHR9bySDhRsrenoyUmkytf1GtqpcEiDkPqtw9BxdiQpUbxP69i5",
  "key10": "4ikcQdGBtD49yxgkw7fZqaWfs1YtvpErBY4sy1D4RXjPGmNucFyD6WHoACCAMkkE9VYYoYLCgM8QUVrdYJYzKa8L",
  "key11": "5rtTMq13ZiJrkVqn7pXR2C3mTwBiaff989ZEYJdBXe9NMLvviYiCzLYSUzUrxVSe2LJvso6czy7GwLuCNtADfVaH",
  "key12": "2HKuCmXndc3V4hVPBEFcNNGA3SZAygK7QHAHnSM7JJktdHaUdmPoTo2GPpTCbtr9cTRy1wMMSZDAcQ73RKsE1zA1",
  "key13": "2b4Fz9LdX8KnC9323rmTLoFaN22God8bXuXZPwenwp9yxWXnPGhDAQqNE47gCy54fyp7UUjfMMnvBE5Y57qx9CEz",
  "key14": "qtXgVRdy3EgzchSSD582rfihoeuryKZhp471r5paMuBG6jQFdMXuKx2Rdx4w8JeqRUok3woDWD3ZkLq1k7Skyht",
  "key15": "yNBHiGKDNacJztc3J4udzX9h7H6ATVTubmq6Fqhh61X9mCGtphatrzZj1xzyFwbdNv5tuKEVxFyxWrwpVW37ovz",
  "key16": "5q3T5jabqFjCfvUrJ7GYc5SKSWgViCUR8C5pxUkk2KYpfshqTcHMgHnMTmjcjckuNxa7yU2ib3GiCFyidqazqjYT",
  "key17": "5MBKfKoLXi8QWSBAYTBdm628aW4Nnj35tAbeY6kNuwxLuY6uA5eUgNyaYFPeoiVXu1BUS8qq5jFBGKUC26xxJbfC",
  "key18": "5gt5VGQFKwYbCmQF2DAVseURn4SQ27PUcdHhZMoziyS6NNT51ogYXM3SPqAXgZyjGb84dnZokv65nPDtPQjawmku",
  "key19": "Bfe7bFeoWQ6VjgoWgLdZDxwhnDddmE7mQDLNFUziFue3w47YcxRyCFTP1wqHL73FPRRAEe3GVehgb6QzftA9U1W",
  "key20": "x1QwwLaMQXkBtKLHbw4GupKJBviHi33RWEpwNPGHtdCH2kDANnvnejDswsx6oNksMUKiZuJzWU6gktmub36k7Lo",
  "key21": "2rms5DgDkpLcepx8Gq9REbLsoSTx6ERqGjb2hVU4RLQns8Juq76vkPvq5dKtpBYUQfLmSqL9KRS6MvFjP4TfaD2p",
  "key22": "5heUiw3euoVomMbqqNYMkmpKXTaEQXzKrzmstpszDwywewyEnnYg63N8VuhVBEo543G3RpQiuqyRrsdTYGTovfP8",
  "key23": "5Ya1ExQDqqNfvtxTTfaHahFgbURRBf2SncXa9UBY3EYD1BFSGw82MvaJnfNtnKcj4PQCZcMt6oJFsxCfVjMcikjb",
  "key24": "5gj3pTtddZ2jAxySxcpWckUo66KWo2ZLHM6C7wbBd5vvDexcdGYQEy8bWWKEfau89h6GCh916SRSUdoJrHtHac4g",
  "key25": "53Br2vqniu8oP7TN1CdhitTveZoFEd26Na6bdnCng45WbSwnveAmebqGXobFe7mg8JD2nzaJ4pcCzGhWjyu7bLeg",
  "key26": "zjca78vAnKpy6ptm2eAECYr6e9hFEYJYWy8nNjTccr6BfM1EtpkkYm2B7su79dU9veYSrzZPwRjVR5Qpjf5HtjN",
  "key27": "4SdvYnAiENAswPtDCmL2yXJ2efdNC6jPMUMGu2UoB25An8oKJ3R28v85fp9SqGSmsEVwbnaurb5NeJSnLawVG45C",
  "key28": "uvmz6FmrzpMdhAEoyEFTDUGdjDGTP2XGnBK2TGqFnHSHuK2nnHqC7kFGLps45nmCEAEQrNRCH68BikyUx8mNu6c",
  "key29": "5uR3ChZ1H4s36mz6A9QPue8DhNrA7aiPWPY1HTyYHodX7s8hnRDRAiAf6YQNXbfLvY7LWvKQ8dh1Rdhn39x7Ms1K",
  "key30": "2vZG6bETiFz3PGABQAHWb39Bv4BCrx54t37txYgmBe18HLAvsWCgL9MckAxUpE3KWMGqAkMchEyQJn7uxcHajzRY",
  "key31": "3SaTSygvnfCHPRoW14ADx7VWnF24MFUVbBKYeLmMF6BEMnkmdwihMTHt1S7bLodz2co32Fsr9TEd31LZjpPd2tWK",
  "key32": "h4raEn6UJcsKjoELoTTBsb3HyZkBHtmPYpJ3u2HqZbi2sirBjXKPUkxn9VgftzH7q42RYgPptfj9Yfr49o353V2",
  "key33": "5qPYesaHi8idKHvLy7DhQaesKrdx5R6mUK5LydnKiurnurGq3XUWqem9h41s5F7hpJmdP3peAexCLPrdneqD7oB6",
  "key34": "41yat8roj85rYXKNXX2ExYmxdyu12UhggQHtzHGMVS9pdE2KX6q5Jn2NsHepCjukTJ2bs2qmhveXN1K5QVDsurVW",
  "key35": "3t8dAa2J74n47wVvVVkxZpBDCsU8Qu5oS4Zbp3gn3aQiBa7pgK5NvRPNfkbXdZqG22gqYuh5zb65ES8r2tNJaucz",
  "key36": "5hUEujMTT3GCua4ETqnLXt2tKkyvG28R4yKigBgTDNvGqe9gwvZHJ2XikCGkUg3CbDbJMAYNGMfcuF8MpxxfC6Kc",
  "key37": "4D2gfBzNRhJbBEF7Rr964APcMssxFSNAycFUqPD4EGjCGkSMpt1esG9689YYoUNCnjhnXeFFgsxvfzRRKEk3JKXZ"
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
