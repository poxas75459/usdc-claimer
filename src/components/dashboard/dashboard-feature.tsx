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
    "2nT7GfkVnpr1W7WMEwHeg7ubRNy8kZ9fXsjx8zZz5nXNhnZ6f1CFM6uXz1g4LXfgxyg8gv6Vyd4sJB5kinu4QZVS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wPKMPKDKAhDehpBiZJdDSjUPV3473CAfcmxMhEHS8a64PyrZgzFkdGkdogNooVcg1n3nEKNNvqdtUn9hfUmM7P5",
  "key1": "3NtB1L78SLFRthdB4ysTodEnowbY3hUMjoBCx3E6MTNVn5gzNdCm3mhP1hpWB41C2QZ25xh5EcgvkUyWMokTYRj2",
  "key2": "N7Jaq1AVeQBuFHkymanNkqtZtr9MYGmDdSnEG3NtWAVkGirfG8rDzjnzN3vRA39QeVGvTsAYAtrwBpyEd2TBrrE",
  "key3": "4119iQmGv4LWj2cKucjZL6jZZejjgNdSj1jx1q39m8w6Qj2gTHXBmzf11iAmqKmayvt6NUZiBXHuqMtnga82bqLz",
  "key4": "46X6ZqEqeas1GScp8QczJFyC2zSQN8xkBUhZ3ixEcs15Zu5rQ9Bwqjb6xqZv8s4SCXry9WR2QduAi3Lv2bWrB1j2",
  "key5": "5HNhaZZ4j9VTMLuzTp7SE7cZow2G8Bd5RcjwrPNrqxexGQ8LZHvvHykMG5rWw9Yian1ZzNMTf62VXQYVuxwJmf8e",
  "key6": "2u3UTsLQeT6qUhcXG2ifHq66UGDyaXUBf4zVJfYAUfgR8TAFATajaTJexuYn7sH6AMYzwWzeE8riqi6VDUkRBLiL",
  "key7": "3sf7oPEXEwKZVYExZnB3C2N71VV46NnjP4juzyW26AU3pJ9Rt9vxgk5z9PiPqH2pMbpLKUj76t6D8M6UUzvxwhsQ",
  "key8": "4daLkVX88NUQmD2fTF6M7z6kgy2judGidafmt1i1AE4KakeSr5nEUevdzY4biqntDi165otaTMtL5r93bNT1ry4R",
  "key9": "5eHwFwcnFqEDs8MVZh4vVSwF9obcyVUodd7BpxkupZgBtoifWim4iQ7sJjD72Unft69T5Cozsps2KmUdzNmHVE1B",
  "key10": "4MxXxADyC8P2mdNkgq8GfYzSxyTVBUgy9jPuAxQCGrh69CbAdANkmRKbNyx2rjoidNtQAXSinpkVJYyrK3A8HiFc",
  "key11": "5dV8aztmVDmuhZPX5puqdju54HgUabyUNrbdx9AdkvcqqXmCdJEupoerMoL9m2KyKMdfdeemVW8zZCuueMxwzqUK",
  "key12": "5ARQakvZeqUN2aYZxZKBWxiokD27pUF1EnwZebL31mKyftovKSkEbePEMxiBqNLiuHKdjQov9ZPHhmF1ZtbTk8aN",
  "key13": "vv4RD5MsweRaaEsm1SkZWHfgJ5W7m7h2N6vTNT5U54xXzvPsDTQDSWeq5dwFf7C7BZsFCXQJBXqB6UCoHjAgg2G",
  "key14": "5ssGXJQhyDeFUVxAPDqUk2dJeAksRMt1Kn3mXjF9DFE2oFTLREjeEwCqxuhcAk6Ph6ZtJVvgmYjbCiM92EWGss97",
  "key15": "42fYQ2ikedb4sNXgLdUiupCM619mCd6Bb7NxvHq92hqb897yPWxZ69iKhaQcGM451eSJcjNdv4JjhpPxBcU95QUc",
  "key16": "4TCqn5ZHbSCSajJ3UC9PFt61SRczz4khw3Yx3AeGZnQ6qBznvjhD6gi7QLuiSmPMcqasTXyWVyJEhtSvKWCzZnRE",
  "key17": "4Zcxb4suGR2QzYncQGw7ZAXjaW3vVRetwyEkmorT6cna1rQDN2N9gTPyUt1RVaiWQYPwB3XU7hSmivKnjEZd8SBG",
  "key18": "56mwGLB3dP34Mcnq1Zj4e8no8yL3tkpWDvAmDxcU1grH6tSYniTDYc5g7dRYqHq27toxWgiwFXmwekQ7u65Gy5of",
  "key19": "3171Pp9rUX86VE466v4mDjbegtALmVGYMW77ywgZ6LVYBxL7QeZFxuvvLxuEJyD4423sPqzNWY8RZARxL61bGyvz",
  "key20": "dyUV9Bc5uKEdamXsNSxfmN1o6qx6UCQPWmoREFqggpbvWxk3HwvtRAgVwpfsmNY5d3BVxcv1mpWXJqg7gWBuUnd",
  "key21": "2jqC93Gw9TEf1D6SmhnHiq3KjP5xXwKpGy2wyvjvYtyg5cfNwYnVf39731Kzujrtj3RTVu1voseeB2DXkgpL1JdJ",
  "key22": "59ANRZFcG6CJJEqoXdHJSXKxbQ3kNA61cF5udKP3a1rVKXsG9eu5wgmPohmbxyeArEncPaoXdz2KfzWYb1iynXLP",
  "key23": "25kfJBKVTmqubtbdZoGfobDrbEX47DXUjjPn6ozczDftKUyXZHmT9C2ixH1qFc3nQhPJEaAquNj7yr5Ugt638Ri4",
  "key24": "cFCy4pZTkA4J4SPY4RpS3ntADZv9MmsoMeg9fizdMQnW1YEDJzFZm2saU954k44xG5Mr78JXDrcV24UvVc6TWm7"
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
