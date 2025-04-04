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
    "28qt1nUi2H8q7Dove8C9fva8zoRJR2jmPJqPM4VuZEAwJZ7AHLQnCQBqpE7ySfPHtXqqHgFQfqwm3HrxQeuLCV7w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G9quaaFaQNcTYtGF2AihU2JwuNha91HQu3nkA28hkXvDCp3NCbTPQiENQKrSfyn9DoxaHiJdgP94yX3DwBhRUjD",
  "key1": "5psRX6upqhAX9LXvtMhYMh4SE65aN3qiDW8vZFzrLFRiUEdNfCy7tvpVZJ8RSBybQDNX26VAQMxXFExd9UnTzPNa",
  "key2": "5aaUYnGJgYka14kwqPZMk7EeFSfQ5Sw8hkf6GwhWEBNrvEakrZJzkjRv1t6QhSDY83RbykiSFQQ4e8FhwnR5BJJo",
  "key3": "2L45aDqb4MbuRjJStyNcpTqWDKW5VCCaPcRVWEbm5YdmQKXYC787cpdV4QGbM4zhz4ZwMbygdNCyDEFqMpFZSz2d",
  "key4": "4eg2rC6ktupouDfeFpHftziiTwkdKEsUuub1z9zUhCFL9T3j4jM2nFD4mzWXPAFjuJMvERPsrfy9PuGLTf6yWh7q",
  "key5": "3d45xCipYQNnGSCCst5Gb7bgXAT5qVgfTLrHfZu9C4BXsKPdepKBqyD8AAxMAYmk1N2G5tkRyQ26H2CEr6yNc5H4",
  "key6": "2fG6FJZ9UAJ8uAP6PbsqiFMF6Leg4aEMPfXYsfsJhWLigBhWTtbWQb7yzrart9UwEvK4SekZi5jj37MTqKAMvr1A",
  "key7": "3gEpiuxwoy4EbVAf5mhUKEGmQNdCzjwC7AiwFubVCm3yoyK5z8KBKRnzf8z6zPD6PqB58f1R6MTd5xUvbCHrFZLC",
  "key8": "Hg8XVY2FHR67BysfeRiHp3rjtHfUgu4XTEGjPZo3sZukgUzVnDob6i6e3s1fRHeFVNyoNf7qDUtN9aGSgFacvT5",
  "key9": "2j1nDLW4T9WMkSxc6tMiPpaWTJQBGzmJoaxw9vu3tjcHUjPaDn9EVRnWgsvvN3HhCogR8PmmKZgHJ7gUaeyZpq7s",
  "key10": "35SaU69f8zSUjugMSBwBe41mPVH6vNxSmVAqwfLvJsDt8Vm9dM6bynNYU47xvVCh4C6Du87CaZ5oW4MmJFEbMf5G",
  "key11": "5J6ewzkjngRE8iMjdxM3vZVeXBRBkuameJNAxiM1hPmMzUDqePTosYfhSQDsGVMfECGvwYk3Hnqu6KjxyY32JwVC",
  "key12": "3gHLQtYuQ3bMDEdAUoDvYe6dDSNhMRZvVWEkH773dDmy7rhMxbE8Bqcao86Lewf7yuTQ3K8qP7Kar56R4nemhnF6",
  "key13": "4sC17dgFiKrSTpmPd8GSEtXTsZBQds9mJ12gYztCpYEySFWB1ox9Tirur8rusuZ6LJqQwABkKFfSXiKSnWfFmVJL",
  "key14": "4LrNfU7d64LwEXiuf4CDqfmvwVgp7V5DMTLfNCzRLi5o2YcEWmuAgZxb3GjbbgNiAecckwTabhfpKgDGbk9kAD7P",
  "key15": "3fDNYmyGrodLmthWoKFCivGVHcmiqb3KfuXkxermbUMEE5hXVnCuDWmRcs91pDwcqzwsK5kELLnKdzJDksBTwR4w",
  "key16": "UMw8bnotJp27KRQLC3rJQyY9AP4EQRXjBKNd1Dz4DMg3NoHMpoPJc5uLYKDyyf9k4M2q259EVvkurAnqJ3cph7g",
  "key17": "67aAonCfLRiByHG4DdTXMU788N8jHZLEisMnZQYiDjZB3diJxQcYZN63RQL7Es23yiBg4xuARaqinxMmoPwM3PQU",
  "key18": "5yQggGLHr9FnSQaZyyjw3RM2J28diTen4kNfXCaPiG5RGwXY2muPvfqiFFrV1Tz9jifPjRi6X3bY4yZWg33GhHuu",
  "key19": "3mhwNvLP3GhaFzgF2KPnX9aT59CotweacWLbBqqKxAD7Vg5K7MHAkGDNtZFQon9CJeHcuYwfGTnue6WuVkmcfqtE",
  "key20": "6HMg2FsgFa7ovTrDtD6gFHCSZpEE8noNKjGGchs1X4BxfKJmiqZfX8MnaicmPov5ijwSR5CB9WGFs8x24eDizFm",
  "key21": "8CkvAgNT45NfUc76ynuPawjAHTgCz4ePGTCY5LwfF3p5RShyeb9w4vqnf7Frd1CBSjTP6d4DkvZViirNKc92pzD",
  "key22": "3JLxkjcq8orsaUnVDEh5qV352TFoYvXzyA66otLBDF6GcamexHoxSBF6dfDjXJwfnAPz1fYqxbMzhBLbwVNWcuiZ",
  "key23": "531XuVbiUTSr5aPvt4zq2W9xiPPkHsPUc58RncMP73mPGT7K72HktDUdKrbbbBgKN81XBc5ELRXyeqraiN6CDthG",
  "key24": "65Ak4CkedddkUxQCEkKeNPYNs2p9xWcFQbQtZ2M2fjHm3uiVtNhwvz7ritY5DXF1qqqsXgJ8qwq1eDTtTK92X7Cb",
  "key25": "32PbW9QaDWCxNsyoCzj57iHFfaSQ3HSEeQNTCUc3F7AyGucLgAmxtSW3rVWifqi2LzeqBYqsuci4cVaXMeJeo5w1",
  "key26": "3NrCq3bGykM9h79A4p9eFxMH6kDo3hZR1zdaQvMvEKYmZFguXRPz68vGrPjqKfUQkQsrxNSaFBAJHurMbbLpRZj9"
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
