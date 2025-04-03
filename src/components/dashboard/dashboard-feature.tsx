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
    "4MDnK3CYduuBDBkyJ5FaMbtHjfZNkA1UHBWFQAS5cwsMi9Kb5HVN3W4Ya74RTkjT1qvorjMsePM3CanYwGeMyEuN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "292r5oqCGgvPsA1XmZbLuxz7uL1QXA52UtAxt5Zwr4USLJFeo3YLFbKL2iSKxCYoPH82En6aDetn4wBc6MicvEnV",
  "key1": "22zT5Uj6UW4krx7D8hbvNxMkJvGb9HKeYgE6m5ni8yqpkN5eDtrk8ckAFKCaaUEiqW3iGagtTg62oGgFVkCPFXgv",
  "key2": "VxnQATqjze5uJVvn6k974jCys2J4Dqo6EpeNKdhz4ukMFFZF5Dsh4EW5jyvEFpGLiKLDhDX1wXbNDi4BBdsZF8E",
  "key3": "KbN2hUGsbcs9K8NPMkBms59sGE3QvdbtzoqJN4FsgfTQdKTtomLWQukereKmwRK21ECZ8Vp7Fj8WycUQmUvg2ww",
  "key4": "53uKjurYh2KqUqSJ9uJJNgANmDVTfPQzCXPh32v7onH72juamvPrHhZXzFRnigNzyApSK1nzxRgVB6Lu3nYaXieM",
  "key5": "4uQLt4Ck9BgtVT1E9R7PBim4JimafaotVWhcjemZEzVGdRZ376jvx2F8kb3LWsuU4zpj9Nmzzg1Q6g1FXps6ySd1",
  "key6": "2jApa5dwzEBcn3qK8jyhCzMm3eo1CnVApKwE85rutdgVqvJ7kXiQzuvJzXU4oYLpKhtkik4d82ZJECEY1HKSpDDZ",
  "key7": "31N2KXbBkDtbUwofCHsyaRiM6s731fA94gJmTshr5q3q1mTJmjgWWfxc4SwxFqMugJyrf5KdxvP7pD7qj1DDjvxA",
  "key8": "55pzUAhUXcUsMRQ6kM9wqfi5H27xkumQbdkTgByS5SbpYkHroSBGcgyFoNw2Q3pnyxQNmkMUudifS4TAVLoR6grX",
  "key9": "2HJRLChrFM6W1BSCvsjusrycNkHcnHHNR5qzS4tVFAhb5UcwsNk2RNXeEufhG13y9istKbQjfasSehYY8dEpou7b",
  "key10": "4FmVRpxDtL9zw4Syrn87DfJtbsNY47tzbd6kyeVTye9rs34icNToMpeceNC9LoLXE1HuQzhFAsvXG3LbKB9DJo4D",
  "key11": "29mqC5XJL3tfCJfYaA4fvHjeBwQhCZXsgYe93TEidao2hFAWWPEfBhUyKJAM3isDL7XdmAdUsEoRp1mSFwoFY5Nr",
  "key12": "XHhPqrKW1TL8ptwTcMX6uhR35zj7vHeEdeXsB4NqnaLpTQgJ9UhzFoJWnRW7UW3oFoaZwvoymonVRfXxiDrL2Qz",
  "key13": "35SziLNYKi4vrq4a98qz7AHUxdQJCvFvEu98miRpgYBrAKZFaxCcKJBYZ98riV1ZdWRxeafAPg23sR7X1wnnyQCm",
  "key14": "2wwa6GGTkgUFWKXTya5veAsrmqyRECbnCT8pCsq76D2caYTebPx4ofhDAfXEmRsqnLoL6HTi3yNv1bms1e13iQzW",
  "key15": "3qY2ApqPKgdsGi8MZQvDAk3vjKsCr66Xaie29qDSC7VHMBuaPfc9fEMUCkUbS9Mo1VjYLBHfQMgqyibfjziVBXhz",
  "key16": "3MavLVZcLRjCFK9U5YHUxcgHGDZgTEfpKugAVq6J6mxvpBpUQDLGRLfZPRv8HMxbZxS2RMLmZ9wTtxREVhVdjrze",
  "key17": "rnbGsKZU12dJ3viGsqgaxej3vVzkdY8g9mXjAZkPi7Ki7L7tV5SdqVnwbwk7TVqzFppDPFsqJY2zt9Ysrf4U7Q3",
  "key18": "3d25uuYNYwEdwUoW8FD7FVQ5Qqdw2j6bwSJnXD9E6q3ZckBEqRMAscibsPgrLstQ1Z3i93WYvfvrqT5qp9bduD14",
  "key19": "4wPGmnB1VnTXTuSsgZcpQoQD5ocjzjHtAT1XQ2vYSECm3exDUsZAEpJjByTfgUvvzj1vzFdv5TJju5ok3Pc5aYw6",
  "key20": "2mc6XVwvosiZUK9ptZ18PsZA1paECjb5BzHCFX4o7gTfEWmBHzXBkzCpZ9e66af2Vhq3nxUTbTZN3zXCjWR511Q6",
  "key21": "64L6k1bWpzZEpaLWeGUo1AboyitbJk6jnWtbPQThi8FyWM4tXfEXEby3ta4RRYbGn6wuXQKHQA8dKzCgbCCmDwwA",
  "key22": "5sD3CsRW1hd1xs8ooUVspmUu2bh9jEHm9DsBTqTwnDWUqD2ZVw2qKGMfmvQT774y8UM77vqfLgmjRWK3n5n4gRvJ",
  "key23": "5WHbYm29Ln7WkZUqUWEjed1QD9Zn5RBDe9VFGFmpBbXcLM5AUTReRVuPW66zHnnJxiUjpqHfwahjGfiM489eQxZ4",
  "key24": "2fDfGPoFjcBcYofLgf1p7AxvvKFJJ9RXG2pHhCmS8EQ8pvTfYajCKgvfqXU6WZ4CmsjCrMY12v4ksdTxrdaMehy2",
  "key25": "2ESiXGjqhH7UKvgNUirjiudet8oHKa7ytk3tgnxJdyWqtcGquoj76kXGMEN3ZGUphuTXCTMmcmye7hSXUhhmLriZ",
  "key26": "57qv3NE9eAWLbTXsBzKjhTWywvzmdZyQQmJ9tvaqtRAXo652VNejrzTNjKRxg55x29RvQyHaxaNcKFE48mbePvW",
  "key27": "4cPrkuKXAQppQTbYNkqBCmLpTBFbKpiytT1evx4pM61L71hqNrYEuZyvnSiAozqvxufZaNKYoycmsctr9xU1epvi",
  "key28": "2eQjfwdJ1vrYJAqiLF93FE9KtX6LwSfPn6DbP5hYxCj8rucx6J17GS5cHQ955u1ZX4tWx9ZifvcUBAd4NvBQuytY",
  "key29": "673WQzXf2jMHXjQyCf696s7C7JFCy66XgCgC47faLzjLgSVXRKaFsfk54io44ZtSbYNvjJwhPHJf7xvnnGB4oco6",
  "key30": "5oZyuRPXrxMHBNoCHYZ7QXHjPnmZH2MbiKXc6kGdqKFGs4QrX4vsKY2xPZu9o1shkmhkFwpEC2Qc63WWf6H5XYRr",
  "key31": "2WZqUi8rBe8mghFfNBXcc6dVCRrye8zNEJB2JHzpsDd1vSukJf5yDEyT4WiFWVG9ddBiEunjRb3gKA4jyVmbHfqx"
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
