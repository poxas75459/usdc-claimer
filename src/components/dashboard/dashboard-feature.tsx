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
    "mny3o3KuTtbDGVp9Y9wWAtiUQ2nLvV7KsrAadWKDZmm4Gg5xi5VTFXAg9xyKmMpPQF1abDMSuMTM6hhBbpYrNh6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ot7ZQSdwu7hG1HycQ5FwobUYJKo7mVhETY25Sk6DdemAhvdJyaoG6XEw17fQSwS2LAB7fstmQexBkbJgJ4K9fYv",
  "key1": "4p9pLJ2YHT2irYcq1mpwA9JkuntFtLYsibqKTzA9i2GkLATdy4cbf9Y4gSsCez41mRVRFkXof9X67EthDbfKK6cn",
  "key2": "wepo4Xh67muvWWfKVUtNQ4bM8e9sWADJTWY781y8U4dFFRFfbnzgLyyHyY16cnPGmd4hwF2ag76kKaMiQvoMExs",
  "key3": "2WFLavm75pERkNZW1D3ZeaExQC44NpqjrcDQug78LeGHwBE4MqxfPfm9aFShetrWccxuT7j7gqFFp7e8M4Wv9xm1",
  "key4": "4Evjdv9WMfuCpuLiXJXGbj448kvvoaz6wzpZA2zMNuMfBcDL4Jk94WdBrqCTTZGQCHUQ3ovTUbKbkzkb3H9j2doe",
  "key5": "2NWcCZame7bETL4XRY7GaYST6yTZ7xym3Fzs4nodAzcMifKcb39DCNzmUQDCArEe3qnGATUFK62wJ1c4QvTpA1uJ",
  "key6": "5gViLhrJNt46gBniHRa42dab3RHwkeNqupogA1CG7fV8J15rmc18UBewrmw3MNF8gJvTssT9bSPHXzrAc9wioBbP",
  "key7": "3mswqc84i1gJZpYcsnBzdEVqZXkdF9erDPFmkWtK16sQnD96Fzg5Y4LSXqbRSFaKGsKLSqfJtRDKU2yDwEMWg4Wm",
  "key8": "45eeBnrr6Y1o7ognjn5EjkrRLsFKKVcLz5g1oNTVezVZgzsYxyC5bECaTtw15B8GCR4gwVAN9svYxRjBsFjyGUcT",
  "key9": "2KcQeCV4jAxHpJMPiCoYUpvLDjS1LksWyRAFh72n7QbHAK34gubUhR5Hz76M9rhCL523qgBfKPhHyhbwW9AEuuSf",
  "key10": "ySMrMhEXBc48zKMvmREzh6wtodBcmYA2ydfYwDWMQNQXELoBzP3GJBGnRqy4JXLFb2EiYUfHkyRUsYvZLGAiPPm",
  "key11": "36HE2y29hGxDr7qGW5EYbridzCSh1G8svak4YSEzczc2UuxDEDj45n2xReojWSfXM9oKTHK8zJwnBx33GrP5y5hV",
  "key12": "2sbZeN3YzqEaev2B7sS2S37eztiMWzq2FxRJC5owkAheQRnBhRc92NMfm3yRebFk6K4Ph52WXNMKR1zWC35HDdv7",
  "key13": "z82rWYchW9VPwJ5gFYPJMjZm5Gv45yz739jfutrw5Fm7pVC4ExvBJXusbWiYhHGVuGjQPAwjyHGp6LHYC2JbQQL",
  "key14": "5reDvVJorddhk43QDYzoawym1QbNnC1P7Kz2F4dvE9Gz23Yn6gTLPHujnJBNjKdCcCWqAqZ5pJz5FH8uyS2SmQqF",
  "key15": "61c2CWbPrwvjehZxhqfwj8NCACM9Bf7FuMuxNytaUMA8nGCxLc6urSQjYKizeEa9HpCBBunWqQjkMguPQPFDs8Ke",
  "key16": "2SJPntz7fDUvr1kqixsocWmogap4VUrtYZvujm4oSCt7Y97Y1v2TnY8Po2C7uZMxeFwCPqBGM8fQjom5y3K5fAh3",
  "key17": "4pt64FK17BQ7mnJXAfUC1W4JEqECVbhWVsYs81uRGn6Qs5iLWstZuE5ZjeoCJQvouoYKT8tGbgZCk7vyLUeZZUfC",
  "key18": "23GUZgVYy3JaVh3BG6FdL8MDMs4fRbTjcpEwtZGiVQg8Ss4XZfdiNA9wKQXxyMMzKjf8yz4ddsNNkvZz1ez8wiUY",
  "key19": "22MYk3wi9qspXPYRQYTHVe7yDYMGwVBKDMEsBPq9SbmnyHkFdphozER7Cu9ZN2wVEKDZcd68X786UtSEe9qna7rV",
  "key20": "7KPqCqTKpcphwsUHf464p7fdNPan1BmQaqqJ5mAyoHMD1YmLLEUazPbMpsekyKfVSkZfoMxBFWb6u8pQkDHWvLJ",
  "key21": "53NuAygCyZKFxP1wrj5xWfGs37k12ixQ3akDYtSbc29DQkM3F9myJYdu5D9LxWtrWfCJRfVUeqi8awcDM7xy7Di5",
  "key22": "5XERtgYWKKzRp565mLaJ1drULsBECi1DPMJaY1Pg5X6YFeH3cPdMPNzvbS5xwSQELfWbkc5uCCn8UF7VqkYDq8hA",
  "key23": "4UNzVfmZBz1vpwgpjjvdHLHWjXcw6mLHTVJ8fgrymdg4VSEWgcg8aG1bQ5a9Gahxmbxa9zouhZ9tcaNb2W9f8NSu",
  "key24": "wNnLPNuF8VGfCpFLbnT8NbEizd3CioHJpTC1VH3faWBEJGXdUbu8MVWC13DEF53vKSbR6KkACdrhCpWt1k5XNGc"
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
