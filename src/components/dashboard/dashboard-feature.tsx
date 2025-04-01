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
    "i2EoBV2RKVYFthg7QY6WgJSc6LUWfnnU9RxZ7A9q4gvz2qfK4LHaYSsCxgoA2x3iPFK5FQosuXgUdmjTMauNxuG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iMMH2dwGcw3qJvAh84qnr85LCrToawpZXcmdBp2Yk1EaahM7bgneBrjgVnCJiJxmx6eAtY4eaqjCWyCog56RS2o",
  "key1": "5qXawRuAHXm1HqKXp3AvMjANXod4MUXKHCitque7TnBKmWbXzWUVEi2hdHnZMyxucsZijQjNCibkk77bMtDAugwo",
  "key2": "33Gxfro4AjFKGJbiazbuKrP8m1v6MnmLvKsh4mT58JVkJgSCaQy4mHqysbhKzvdVkSokzLK4kJ79YpMbjnNRGxx2",
  "key3": "3bvGCYCWLGrVwfy9FKHxQjxU6V8Aod65axSCddcp31RtW78w4Grj3CwVTHJDXxK88FCsAzxmw2zydRYDk2XTLr1w",
  "key4": "5w28i6GWybeddHgQVh2NePFowkHv9Gjqs1NFvztRzzZuw7urPHRSieTw1ifBWXWu9MuL7HELbEBhXh5HtowJXmro",
  "key5": "5f4RW5bJ86e5YcMnN3X9kaFGCa1LJyzTHW8jkMgK8LPb7QmKmhYnhsEcrCx2jYF4jvVTjRB3eeYDhddocKYpXok3",
  "key6": "mbsdcVrBPARSE7Y4MD1dTmAffcCMNLRjKcD48yxAGTpHFPX64FTVNXq1pEH2EYAiDU2UcnocRgUWvTauTU15zUE",
  "key7": "4ZsWzY2q9CRokPxuMwsDqLwGyZh3L7J5Ykx2NtSd466daHt4QaH7VctyHqfc2wzypQuczBNJmtr5Ky3WEqt5Xs3q",
  "key8": "2LVe89fPtYz2Cpe9hM2RGMYjQwzvfe1cXoqkcrNAddKhmt65K5Zz6RZ9Zsq1wEXWjnNvTvc81B4AiyT2MfVc8ZkX",
  "key9": "4mJ8LjseBYi1V1NBrswece8eFT9HwWXrA2YGnTELq1spVvggzEGNshq6UGodsjK9vWm7sL7qYPYjFnQ9Ww585RsF",
  "key10": "58HLAyWtQwyQ7fkkvpbX5jywoM1WY7x8e6Gkxu2qPmZtpXp6a12qfbHYTkbPcWcfHf7ZbRhCq7qSCthawFA28MWH",
  "key11": "3sJHt3ydV5rJwQbQd9n4aMMQAbjyt54uzjzYvEYK4yvWKbQGPfyVBvibAjtL7NVoGwSR3dgHLbPF7ASxp1RZMukQ",
  "key12": "9qp54b9rapHYNsJRDJzifPmxBgDuHGGchFLS8K5Meta6ngh4YhYYASvwCwbMs67FgYDdx6LpXUiSCZZTZFWCvGM",
  "key13": "RFwgRgFUywY4uUxCX3YzdRGRwBjuDdvsxyWWmJqsFANWTavoKLyhCdSmrcXZNR6ZrPMoVz6ZnFd5Qxw6mCVEfCL",
  "key14": "5MbAcEDU7WqcbunKhTtWGr2pgQVtDJQH6jiRkr8xZjFvwwYxaCw9nYse5s5gYwFi4qzNKhwWvJPyS2tqHfycu7zC",
  "key15": "5dR65ZofvtjbJB7ijhwxLGBqXHgggbLnfzKhLUVHwCJzxcBYdFrkYPL8snAKS5QNvUYX9FAE3kkzTAHXyG4Pvi5Z",
  "key16": "3uiSNpMgQ4zk8o5QHbD8xQ3NuJudoa2FYeWRV74qrxZ6mM8JYKuxQ44Q2u6L2CNKCnVReGqPsDDSwapk3MwWgkS2",
  "key17": "24RsANRcqJ98QTYUTdGSrhDTCjV8x87HsYUjRAs9mHtdPnmoKvrnRdaodUDTZu8eKm1L4jFTYSk3hh3b7C6Prn7J",
  "key18": "2cTN8CeBem7a9FoeaL6SwCvcbT92hmRLai2QjFo6RywAd8nhgiYjkRx46rcT86TNFFaoKsXAi5SdTMTVxiVkdXgU",
  "key19": "45U4RP5Rzkyhhvoc4L1A9bD7813ZGbEjrfvYvd4XNYtsMjtq4uzoVVDgfaSyjqFBwZ3wwvSq4z2aDXyMyNNZqeV4",
  "key20": "4sBJDoQkPKnqgDCNBzgWgwRNafpkq15vJLcGh7ZxLEB1xqgBaZhCnvYuVHikPcRt1edZx4nBwf5QPX9xoYXh5ftu",
  "key21": "2ZvSpCs8Nf197mAwVH64Vrgv5xqRXZnJ46kH33JY95MRy7kMhdUwDa78kbppdAsikmqbhkQD9LPfDzvKuVgJszT2",
  "key22": "3jdiCde5M1PQeUQKz2MenX5NWb8oCWkcM8i9WUECq4zQ9WhtVVK8MaFhwPnzs4rVqkiAbB7N9LhdJm1gRPZ2uP1e",
  "key23": "5ovUeuBV8D2Jeu6hC3BB4knbtc1t5x8o3FiHnbQskJVUyy6HTRZejwNjN2Bs8fFhSKunVbRDDAY7SnCeHqmN7QFw",
  "key24": "4PbTcYZdL3bsrTsqghZejEeeAUqqo9TfoNcTXp6QnHGNFjzW94z13gmYATGSRYK42ptp2jhZyzHXsUbVMJ5RpQqh",
  "key25": "27EfNNbNXVH6xgTQfNjv2kQwLXZyeUeYx3y42qFJBe2WmR4FD57kxWWKs1xQivfN3Csb41c1djGzoEG8ZJaC9DhE",
  "key26": "65TYgdg164AADvKadZHEahMjnZN9SjjHcYjjWBBEBrttrDbuYN6kvNsaL4wd6CuCbct5VxwrW9wLpkga7U6hGy6i",
  "key27": "YmwNmFuraADNNbpagKVMjBz4jaYfaxhBPPJePXsw6MMtMM47mfUFTtZXpf8vW4z8CceTrnwfrH3EssrtasoWYEg",
  "key28": "4xzViPYmvaR5CaqxFZHKdyVQDgJdCyr8JUatzTxDSiLUS5EDuKKgBtxuLxLwJJqduXVSF4npbFNkALAVYm57nkEJ",
  "key29": "4GgeZcLcVtahoX7Cdqjikso1KEVt9teEdpeGdNYapi7iXqdv38jJsimHWRy4DZkYGCtjCTmX5Bkueq8qRmSCi4qw"
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
