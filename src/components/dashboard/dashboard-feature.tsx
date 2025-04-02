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
    "4Zogezr9YuzWLT676NM7pnJDXi1xGUETER8sMiwjpReXpaiqj5VHXn662rBBqBYFnHGbuEox6TMpjWTwExRhZu68"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ge9vxnsnNfFG9gcah7wpLxBcZoPzwHuvwMawidWignAssEPbDVbpnPPjdKyJ53Wr54N8sszQ2pX8P9zjMvQxi7y",
  "key1": "42JYb8KtPduvoSn9kiwS7rKMHWZejkuBg1Ut9Byu75678R9um5dykRBVd1kf4zxcJVEzYVyHrLM2qnJzgwCqrZo",
  "key2": "3hivXuxVt6qnweFfviqSfg9ZFiJKVCUzwDpdCD9AuCDD8YZ2e4fBZSkxY8PqopERofhCJHnMvCjQmN42rMGUZw8u",
  "key3": "46PQ57hnDMH8xtLeDdRA2vDyNGG49rJdeW58RTPjufa4t7rMs6qgjq7BrAKHbzatYEvBpN9yFq34ReX5AndAzPGd",
  "key4": "srJfsUa7hroXxHAzFgFU4QhU6wp794W6G6fJV3krGDdSYW9dW8YqWmP71oCDyWCTB9rj3rqhaoUrtG3fF2nuLqu",
  "key5": "4xHBSWVwxECpaUN5p8Li39Jsjx5qy61SsNjdeLGFZ9sWZynYUo1bEFyGjuoCxHiPhdQyRBkVLyq6i15wuvc4T7Qj",
  "key6": "265xEfH8NLmnnpj4yQe2no4va6Aoq89Z4Ps64oxzmkzPAcXfcpU1JyN8t9YpPrb4bsmQVXn7hpkhgQHeHqaw84a2",
  "key7": "3Y7fsexwFyzrFvmu5Y1FvZuAZAD7YUbTBJKz667Q5ZnW2MpvzKteVU6tZWUzf1BsPyyKJeCooZEaTTEJF7xBuGup",
  "key8": "5kELM8PVFaUuFBi9EfGQXZEUUv5osUmNgxXX24nbQ4oNcSRWi2tjSnb9hMg8y7LFUS3c47QTARGDbdJxbyVuQ4ES",
  "key9": "9aqYBCuk5j1GCoJaExez1e1nb6QBzZdFo4CJ3vU4XxAh8TjAH32UxKqVejNnSNvqzLJfuWzyatKaA7VMeoaPnT6",
  "key10": "4ppfMTFGaNSfeagsZutwjiQKW9pdyMBwi7UbsPb2xv7X2TgYTfovRi79jjvKkJLXu325QydZ7nxGFcGAzqW6wXc4",
  "key11": "2rsicR3CmZ8GJ23tjCd1qJ13mGZP6YdNrAJe249H8Dg7UhFrbyRvJzTU3wetrN5FVdNZ2xaGCqHqjDFSXijEfBMq",
  "key12": "4Y8E46RXdje7vkyFfTNn86GiAAQnjFaQewMQSXeY1EFqBwASe9275QVeynof5fwuLr4qEAXpUxyxvAFG6vsVLqVb",
  "key13": "2buSAeoKBBhpuGiYAExgCiAcDDL4MHwPukJ3SQn38PLyzeGyA5GKFfVTDu3H6Tq2F7Gz45ZNR6z3Wj6AZViiwY3w",
  "key14": "MiyMBqiobZt6XUtgV2kS9sTWesgNjZk17RWH6oK9CvRQUFvTCW1kVha6SJF1hof7PbEJGSNydwau1mFSzuQGVCJ",
  "key15": "2Eyq18wrpDYFf9S2h73RUTRy7a88KgVkWtJj4Sa4u6mb6mCmYawpnkwb76RWC8yMP1dsoiyT4UNS3WpugXosj6s9",
  "key16": "57GP7n1QXAVuEr8NUBd5Uc1BRtWX4hJKLaSpHh8CM2EPBfvjr1Lzg4hCzj2StGc2mMTpupKJHDyQjQzJqMTeTgvN",
  "key17": "85P3CcdP7U5jWBv6noVR6c9ZWdH9fWU7TYG6yaQbV9HRr6k1HisXcYPQtQQoSSZa6LUmXCX37dvdg11U4pQtfHA",
  "key18": "35f3vGs7pjBPBXTzXRGb5pMuB66Nt4C4abE5AuedQaAgCi7vJMW3nHSdFvF9oUf1dTwhszfuyGS4NJMUCrbpBBXC",
  "key19": "2JeG7Gw4omsuJyhiYNaLGh7czux4F6Ld3VQ6V8sZVgy4g2pBLLxZfZJn8JayAVF1MtBkSCzWVcQHHFzETdQC4oVX",
  "key20": "2DSTYet4AqUnq4NcFsfVF3HqyzVkDq9qYAcSzQbZjhnd7vDLe2HtEYrRpaYvuc5QMLeLnYar4zvRFmxa8KanMbkA",
  "key21": "3N5geRLwScoQwo5g2HNAmp13Tf5KBLV29i9w88VH5Mh71qtc2wwUfK6ym1di6DaYKbruNkH1AbDh7hskzpF45Xtn",
  "key22": "5fqDdLzDHAPjpzhxprwXNhJ1Q9BwMntnXsT3Sbm7csFDp7CP5YtwVq4scWTEFhQ74Y9ZRR7xh2GHtnYJPMUbPLn2",
  "key23": "8QyEm37ivRQ6j53zoEGnfThGHaKqxEwoAa3P9TbfPusCFPBUEtj2QsNExRSJ5gfVU7wML32JnmZqVd5vnBFDJYg",
  "key24": "633Ztqo1PzHwbRHw3qv28F8ZRTsDo33MLT6JnhozHxMmE33esVs64wSVsG8PPBoCkJBB5xUFx2DANagXrUJD9WGQ",
  "key25": "4KwttWgMZAYe9LpSHsKyorFySXsqAnBaSLtfxHKcgCBh4hPDwGo4Zswk88LVNdM9YuiCvoHRchHm2qTSQQHBLBf7",
  "key26": "5VbzKqBdQgJRpKHj7h7tnKLbfyRPCsHiEbvVuyLQmFeL7djewQcHRoBYBahhR723vLQEbmpPHNB9do8YGxEUAUze",
  "key27": "4BpVDL2HTN8TwZxPjBzjL3MtR711xCwPf8BEqxZk1SpFXGg81vXp9qP9iwCNsT166Qub2NJ7JyAgC6LhkAKEJB7G"
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
