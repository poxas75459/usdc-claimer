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
    "4HQyyASrqR8Ungdi24bU4MF27TRYPmf3wsKc23K7EhMeB7gU8PPdCE9e678Dc9C9zkxaTUVYB5xVitGRVsynaRrm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N4KndVcNdmcJTZxDUnKf1STuujR5W1abFYQRxHRWGZCWZPcWPD95rGfcdci1bJ745UCQYvoLSV1V7EGT5c1kSuU",
  "key1": "2UCRcEFHsUDU2sWFLW4Ezy9TH7VvANkAnjkcEM8ATnoTRcMaQZGZXD5zN9UmyMunTwJdT9Lgv1L3xRezA5T5ohHx",
  "key2": "41aWRHRKuEYUqbYA1pemwrbzJFCaXvtyH6fwaE4fc1qDuEgN6DvN3cs36pNcaBjC7nDVYnotSoRq9mXU5jvejkXd",
  "key3": "WvpardbX7osP7b97scjjwWT2wy2kHCAMhnbMcbPzccDCCrki8Mp91Pfj42FLox3sjLVVHRVVCfxgYbKrdz4UrnR",
  "key4": "DFQGKyG4JUXMX3DFNP8A9DQbn5BNugrBYTKQT27KRLcz1j1sbfYd9oCmf7zb9E4EKeSZxTHqDcyScmBQVQvuGWL",
  "key5": "2sYQZiMQhtsEvPNdD4NCrH2AMh1Z9RVtgeTDvvpjoz1fJo3DCBL1LQ9DmJbnn51M8YDcmJPwwCziLZkE6UR4Yimj",
  "key6": "332g5EFwgZyo4ADwnPXpKRWNH1fcVtuedekQjTCrc4da6MjAbn3bwnHjefoVHjetWAGqnPcSU4z9BwfU4SdNDuqA",
  "key7": "7e9zmaUYEAHKW5GpTgtFSTwuT12jrGJg3N5xdVVLucdZMkjYojoatE5YJz63YminjofaVDvrfPh5x5RokjvZ7WH",
  "key8": "3MXyVggvQbHNMUcvqa18YLQBUhm11hRhhPi6i47XDY51VmRUhnmZiJ4qxFi8qqfuhaSszn42QEVFWVam1MyUNvDb",
  "key9": "Cha4WA9sV3uqrK8xMLcZhNNaNz6R69DLn4HUSCeF7QVz8SNgbtKpw6X3QaEN8sNTfVvdtRe2K4qJxeQkuE89FgW",
  "key10": "JwgagZASvuP8WtUeG4Euxc5TJrfFDEqSzM8sDxk77fbEoEjMULDCXpAdFvPrhbnTyrwzMK7GDBffJszWWMcM8uu",
  "key11": "2UBFyZZJSWn7JQYosmP2biuex8yKHXmHjgLwW2XgnmjfkLexyuiyXs811NTeCDsZ8WPMueSEjZZeoF9zKJ9cgr41",
  "key12": "w8tBgJvxcdvzAaXVCNGvT4gs1c4HRX6eofct3cTqgAuE5jBbSaH2YKfPQWXt1DCES9EgRMp97uK2p5xcuaXgHmM",
  "key13": "2oerfw2nQPYsrdKNXTwmBkKr4QJaF2TaLZtdjS37YdHr4gp5MK66QtF1GKuDdZiNRKekeVj1PmcK4126aKRw8Pmd",
  "key14": "5YdLGi4v4h91BM6JAY5mgwpi3FRPwUSyUUyMJyQvQXeiNKCokvpyGKs1xcZpmA5MXBTHAuwfw8tRTV4QJ98Kwjq5",
  "key15": "5DFyYhBC6wDajEN6xkkfqfrfX89WYVb5KyPsXcBGivuAS6emU6xm2esSmVMoejiy3wui9M2hGrdv3GcERAuUEQgJ",
  "key16": "5QBqPAwXdpS9UXtLT1TJWxsrELbRivgagFZu4NafidUo7N6nWGLQmGcCMp9bR36ztUj8fSYd1aKdXgJhwNmeqWCG",
  "key17": "45xt8dnnMEkS6KUFJHMXuxurZrNrd68wKbrgkR4V1DnLr1zq3TBYeaTAw1N5zywjMoofoQMMfbBpSy8sX4F7PAd2",
  "key18": "6CFooGhMgm9gTNyn1fREbS657KPQdwPFvyHSRGt5oC4w3WNTWayXES5Ck3n7ksavm53xmEzf6dhvRq2t9j3usX1",
  "key19": "EujRzRV8moaeQv3Qod9VmAQEVswsLZVH7VD4GQJeruEhJAPYqHC3PTQmsQoeqYcDfteDjqUDotXJJ8EWQR7u7hr",
  "key20": "2sC9tK9y5LihkT2FVh9pQM7wSxZ3ayr7HTtwWZBwL7WRsUtAhJTkXdGNNyYmCZZfifznKrqKnkP847BdpndFbqwP",
  "key21": "Phv3uncB8MgkrCUFwerrP7h7ZkVCT4mj9uzTGMSGcaE3Msk69RdzLZaTKECjMhHPQ5ih9vzwnEx9Vxcw8QwFGvA",
  "key22": "2CEMKkhLbLGWGHUdhst1ZmobsLYKb3KnPq2tDonHFdQv2fRtokZkehtJT6RApFVB6huob6cfWiqaFvUquctAFULr",
  "key23": "4UVoyEFQgW9oHhxGV7zp2D9WEwbtEjtViCFhHoQzdY73Yjtvtt4GepSKEHG8GUHaiSEiq64NJa3aw7SztTJZyYPZ",
  "key24": "55TCiQTKB9bQtJhAhy3kWgM34TDcZwupU9nAX28aDJ187rwmAmXPCpBHi43AWapS2KUPceU7pjEY3DwntSdJnYps",
  "key25": "4Loj7GpQZavKuzy67aNAshjW241uwEMvpKfhfbivihavtRnA7HTiLDq4LuCAZaqnGa6DF7HfesZCpEjvHShyEytn",
  "key26": "4xahcuRifv6DZcmTJPopjXSVSDjKm5CZ8DGMBgNYYserSwcFPT4zHzi8yDFTy53j2dqxBhJRe9gR6A8Gyc8GEHFP"
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
