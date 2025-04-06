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
    "4E6JvfcV4NqnZhqaTHmq8svRLp8MxZEBmsPRkzihrrSFEynmqb1bQdLpA5fDoZg4PeRGReyzvnoTz3huWMvdVfZV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F5x6xzp2q5HazqA8t5qvCz62N1Xt4KiNYCtyQ25RFdiXd1y5W2WLUQJR5TnMaPWKcyaoT8QhHXBAwE7V2td39dU",
  "key1": "NbWtbf13NCTRPUCWo7ru4rze43NLdwbiaGCiHH6PwUj3MTSgw5m7z1TSyC3D2G6HxWHDLwe6sCSp3bKyJ8FuXxx",
  "key2": "4LLHATx53McyTz4phUxensxbcdwwSboFRQbaSbGkeB96qdhxZSdHcyMuVS9j4H4xVMzzqXXBMx6YCvyPqAB2jN9Z",
  "key3": "9V1sZz9B9DnZFedMReTq1FjJSdAfFieKkUvaBaHB4XkZbER3Bv2Y2HYJomyNB6gR89mzuWdZscchZGerhvRSxxP",
  "key4": "3GApG9YZHqg4u87857G36uGJ8JzTmTXgWxmiNKgkChFmYtuCxryKU6aUhoC4Nb8JU9S499S1HrkGP8aVvv7xR3f1",
  "key5": "4z5wSkHq14yJmrjUgy4w57xJQoV8eN2BuB5STPYPqCGzKhs8mugYKsVC1uoSoHdm1iP88V7i1vD4iyi2Zc1H5akQ",
  "key6": "64ynCHGPMhjauKf3RcAuPFcFH58PbPLoDt523CwQPFT2J3q68c9k6o6S6J7owaS5xgknKiYqKLDUEWnaGgs3QMys",
  "key7": "5T8XEcnqUhiFiLepquWtGLQHztNRPbeLJjideeEwNVKgbsqiYAS4FeKNf3jGq9aYVLm9ntZ89GMe2BCE5BDudcEy",
  "key8": "4BpCJytpseEiMXEi9FCKRwyNGPx9Jiz7UbkpQwuXQW7j1o9C8xgpoCuGqqW8CU3kmMzgCaXjBxgnjc3HhEithLvR",
  "key9": "2ssPntMhW6ZcpCdvVbADKuRQ4iBofssJPdiePSvSz5jUEJb9dazZg2QgyP6DJioE6X2s4RdyU7KPqGJnHBkWLwKh",
  "key10": "K849tPWpkmwqikwf6QvNkjo94K1bzqBDfB4rCS7Tc1RjkNsAhj2yUid4epmr8LRZez3tKrn294wjdU5ihyb18o2",
  "key11": "4MEdeaGrpWKAfLdJbveWvjcjCfv5nU8HU2FGpCSBeTK9qsE6AExaYN9KNh9hJA41i9wJwuFuv52pvJSVfv46Rpu8",
  "key12": "264twD5PWP526e3xXq67cAZHeD2mb8yn4JvK2fvKaENCmdNMD4NFv6BMApRjmyAopYFwDto3zViJm6oEv6SrYYAf",
  "key13": "1dTcRz2buA8VQrZtBkw6MwQsMyvFUNUNoJBtDFrqZzFt4wnRjCj22y6u3G8MW2XjkZEHrSzufvu8KBQcxvUErX4",
  "key14": "7iLMxyheL7FMaSJMxfo7NpxFt4q7Qt5EgC3Yd5xzoQenxh76Awcp73DkPtNpAiRh5QiGDQKuAAdPd9PLC7wkc4n",
  "key15": "3coAomLKsjta8KdJeEP4eBxDNofgmrgtLnnLg8omeNkK1b1wpoBHqgpCfVgTW6eu6FeVgGDZyLk6r9RFyw1xgS98",
  "key16": "3oXkiarvBD3V87fz9edxXMug4ussd8v74wUKXrjVYepncHfk8cp45DSDEtYcroPn1PqT16AxR626zhEgfDiLiHtL",
  "key17": "22TkKpihUChxgWk3MKdyQ8UQA8yKytTZ1hsLfnit3h2vBbWJMyWcLYKy5cHJCmSKLtQMVFL3b52Lt5hsQiCapyeH",
  "key18": "3wyEYqmnc9bQrmokNLUk3KvYucPigWJjcqXwJzFrpMwuGeqd5YVeggEoupjbMsBWppgi33vgHJTfhQbTXBWGm7Wo",
  "key19": "31AGyvWD3R3uU85J43ENdbpHCGHvWYaDdaEuSu1k2aFGHHKaSQy8eXfYRBQ1NNGi7CwBWbLCx5wrXZHZuuBDmgqG",
  "key20": "4kbLW9hriPFcoNN9rHwDpPokYpZR9GqPb8RA2bUZ6usfoBNT6Z7b5TjFrane9NfZhFNBjiD4bGrXwBYcpBu17pWh",
  "key21": "5EPciuvQVyycVURKmLSyCjvV2zQ7o5GZ7UAHNKKkyWyy3CdxUfxKpovkLfr6hgwuDQ61qnJXYwXGF6z8oGU3WbVn",
  "key22": "y7WnWwRXK7sNDnth9SUJsYXbcPz3e7TLjot3BRcMwV7C191PLn693FwZyBCLDegkFnsbPzaHdkVBxPPY9RztrqP",
  "key23": "4Bv9cjvVsxRtjAnTERr8GetYfLXNPPDWqPyiE5iQfeWyVHVG3gmtdis4F36reb7YV5dBvK9KLSQLADtDB2nQp6zp",
  "key24": "4ZmhQRuhHKotEAqfRcPgoguGKcb9eJHBTbtCLXn1roKuchEg6YmNdcULFmkjzz8UfgvRhuwsu7c375VofrjcVLK6"
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
