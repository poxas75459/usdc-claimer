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
    "4pM2DJicXLsfjXw9i5k9mBTKqKXuDy6Patd7zJyLG2WzAutMBv7czek9zdshYbmunpnmBNuTBx2ijQw855Rh1te8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BnPZaLLaRYQj5Xf9Pa4DfPgwNyMTUYyChED4Lo6V1SaGoDd3dFQcrgTqRG1L8fQLBUPVboVpQCf4T3zBirYYLfC",
  "key1": "2gLtH9x1pmVUaGRKLgVnRoAiNryCfVZyQfV6A3tXDJWUJN3NDgvFAs9Ao5qs6SLXDaEPpvpSJMNCh9gh8aHbdkwz",
  "key2": "jXpvqckascwTzouZnLd9ym3yGoCS9MtCw9nwTsiFFjJaofLdmX5syQkiHYq8WyQzNCiooYKmb9uLMwmRMZtDNne",
  "key3": "35kHk2R8hPWyc1o53DfRspgkWwVMPZn8Nz3LEaffamczUV8JuSAnPfbVR3rdDFBSXeDVzvMXZ1bSi2bH25qWALrd",
  "key4": "3jG1ZGALQERdR7suBeofQweJ2dBZ6JrcYax3BZ5MuPYhKjQaGbEhK1NSRqyh44gL36dRaRW4M2Pw5Ad4GZgFLXtS",
  "key5": "5pEW1nj1wVEfq7ftPEPYDcFw3tBWf3smVhCWiZ8brKHF7ANHhkCQZ9AQZWLtE1daeYBkkHSG5csc5PTRZKCuUxEQ",
  "key6": "4qd2RDPowCJrqrg2BhXm5JUBwGh8Wpg1CKvYLeCaQKB85SjsB4oP2H5UdzvZmxsgY8JPgz4feXXu2bmD7Ug6PZxF",
  "key7": "4rjTAdGxp1sxta6R1zp3tBYDpYJwES7NUCyrNd9xc8b5VKWmSpC3JiDUWpuiwysyf2CUunmWvRMZk6DykUPxBeUV",
  "key8": "jnTrYkYZqqAEgVHkZaSKw3EEaYcAUPmU5of1h1x4B229x8JCqGtLc67oFRtzftVbV7zFjAa5pJPrw2LxGzKJC1T",
  "key9": "zhBWVWiuuY2UuB9As9dAWDiDXvR45uatTUJ9WnuSxcHZ5a8tBqK9rVSRhguw4jaN2VBhnVMnt4a5m9DDyuGv5MC",
  "key10": "4LuVunYMkK6WUc2VPYrJao9oerPUbzfQDML2mg4SVon6t1tqHrHMbQM2EsN2Ro6wbUUgLRPnRT7GyzC4Zqr8Hbhd",
  "key11": "3GYWy6pE7Dp23TSUdBE2k6fC4BUR3dEv7kf65TWGM8np6qe5uS2kHZesaiqXJu61uavvGhXLt1xoXsmsTVmgXbGQ",
  "key12": "33xBLjZFmibzPd8TsKf439WWjy1W4akBsbAusnJfU5Wpepg8gkvTm3uBWDAe89GMpzQ3ix2fz7mtnqzSEMnpYUi4",
  "key13": "557D2sYRduen5RLoRJVXvs3XpNSnEPfVxYs7P9k9rwSd2Y8ADReWWEdte3HHw3ZMmY7fi2sn1LMn9B9jN72D968A",
  "key14": "2Z6ptx1zrGNE1hnFAqR59cDwJtfNH68oKAYuQcG9AZMZ5JGsafdGY3u4GmFVmpJ4rSR3sZhZPa1nTfmL6TnDHEuG",
  "key15": "22qsSC97STnLxFKrRoAbPZKvM9HEbcdPDXbQD2BbucqB3Vn9hUxMeJdJ829mWCeyxZ4UiPjHydo3WvnTpnAWdKvj",
  "key16": "4yU3UuqB8ZVbHC3x58gpA1xzBXBmqq33NGRCqmQ1j5ZXWwJ8BmyWXymmR54XS5qj7UqdNtJtH8CBmxpLPXh68y7B",
  "key17": "41kbxsJncQ3Jw35fzGfK6N7RsDzJftbYR1YqGgyy2udRGCSi9wKk7ZP5Pf4PzZxCd61cFQ6btPPBr2qgC9SMfXmF",
  "key18": "t8jjDoLRwWGrkjLLWuqMwGzaZJunFPsR3yQGvFcR1YyocBk4k1pghYgRvjeVYaPVybD8T8BqhmJJTfhZwkD9xPk",
  "key19": "5a1u3hU4t47Nrm8Ng1raFWQLfyPd78xh7MmxL2BczbBnN7iq6fQxrZEgP7K93d5NuSVNK6fwasyUzYNSasNS7xKx",
  "key20": "3DSfa92GqCGMQaScBXqKPqVwbV4bivuRYr3Honv8Ws7RV5fSTJ5oo5CvMPx62EmYy2fCVecpsmXdDr3N92a3vuDy",
  "key21": "3ACBrqd9UqxXRJdJvHdNYaKanWgDQj5W917dgAu6UxrTy8bumSc1fTbDriaNHnfAEaZJoe1EXKYohWk5KPgJAhST",
  "key22": "2i9tQmBdN4FAUaYpDHiL3qiidHeWFQu5QPDj5FoLQHdu5ioJPVdEj6uWRWLngir9ZH6tjeW8fdRmL6Wat95erNnA",
  "key23": "vfj6nLZeBs24ZSKVm9B7oNtYEqAGNHKZ6cA5kKGauL57AhvvHGjCQgvGmRzQXakJQM8XaDmg8LSyWcj1oNBJxVE",
  "key24": "t9dze9nzDUukUi4pSoGrGskmnMuP6ic5KNprCWyHd2QKXNHmdYxRYCrrTZxH3zzBLSDeu6aANz9WhyTQx2F8Uwq",
  "key25": "Cnm1WkoE3w2H2VVANqvZw2N9FWQUYkHJ5WwE42kZZdhb4HGqnYVjKdVjC2L6Znnmn6ssbhMUn3wpGH1n1g15ma7",
  "key26": "shapGVH6HJqYHve48pf64yEW4gLENiZHUaqPzJWCaux6aV5E3XrydbMwq7Y7hbznZSuh99AnGK9trFVBN4MLBVM",
  "key27": "PYmmfaRfUG6KcrwuR5gdBZUeoAX3ShST1cbGsyuEb1kHRywn8cPJebn9tEF1SMJy22ZFCsPJJYQSQFcSJpRha4B",
  "key28": "64b1uYxiFkRJUYJ4FXT57NXWvbzqzmPvJPTT2V7oiJQu9yo5492t7tYK4EuRgAtAwyG6P4hKPnXGqqHAjdTjBSkw",
  "key29": "CfULKgRWwCF4F6Cwkjp8FJrGPyB378XVjhF5r3junv1WPFogrxKpVUkJRsZpykaabLb1nSJUuACHui8YgJic4Cq",
  "key30": "2nu3EWjMjaA3YNNjFdzJXE97GKaLckvZRn43KDqqBgGWUAWiEfGSnKKrKUn94syFodQ37Ang1JShBMu812jTXSTz",
  "key31": "3MLqProhs71fTdCNVuGWhp9Dd1UsMjmMNoSgMDjL6dKLK1Nc4YhFGNJtap3YaRjcfoBEmTH3g1N5fnZiJHBVrA5w",
  "key32": "2NC8vPX2NS1depLFWwwZrM17qQG71wFYbeZhk1uUcYL9dz7R9AbahYtTYFnYfYe1w8use9NnZSyuMw24Q5n1Gj9y",
  "key33": "22JMpE2YFoBp9bTbNd1MaRBdFMAB4a1pXXkBy26WKagCUvgeSADfV2fuoahjAYMa6sqmssgEvUKZXZRDFwwBtZm8"
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
