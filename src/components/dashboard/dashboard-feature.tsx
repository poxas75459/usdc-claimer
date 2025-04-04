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
    "3Ut7XzzdNz6A7GCXgCeBZ6wfZsrYXuJnbvj9ykKEzyTgdJ3C3azcj3E97u9sRRC5FMj2BVAMBY8X6dsxfxFVKyiY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iNHTe7pykTvqtPHTvwHJexdmS9zYrp55ck3hMBq7YYChjKpsnpJ9auiScEJLSC91QSE8VPxDssVhvR6cU51EAKh",
  "key1": "5kp4GzNtKMLrqX7Zwr5Ajb5Gt6JJcrFNbqpw7AHPkNNk1M311LmVGmASAUsfRVn6KjQ11NueJeNmogevQdUaFvLC",
  "key2": "63eCvVtqWCQ7Qf28DTx4qXRCS2UBEBXR49M2nzqZ4wrhXofmLQRyCcEWNNNDTbTfqqA2JYJLboogCzufPWMy8BZ3",
  "key3": "KwaWT6tY5oksELnh74S43pwHgPF85iDWxeV9UEuzZLt8gCh4DeSyhuU1LC6DYhhjAH1QZFFWytyUwnUHG7gioCY",
  "key4": "abdUk8ULznFJ6D9bj6CChaHVJnAfE3TbwpZAno9ijoz1Y7Rv8UuyDi2zNrDLywtzkFBNyCMHdzuVUWWWNNHHyHb",
  "key5": "27NxBx63jh2RErEDJp7YL8fBJVh6urUs3TRGS2jTXQRKtZ4hTLCBHSkYDLbiyHWfPBfBP9VEdwsBJaGAXmQqg6rK",
  "key6": "5Ftv33y5kg5wtZNqNmNNsNcxVzw92W44GdS8Q9crV5RA3CKJaCc2AATwjdeMXiKWLHhGis9YiiX6LPfZqYDbP2D3",
  "key7": "Hxt3NQhAoCsF1n9QkoGHYNCFL9CWeQuWJ8FgT9pyMt3DVaf3aH1xXnhkQ5Y5pauAJzpFE3XxY1vSsYkSkgzyL3g",
  "key8": "5XtKAj9FRaV3YJ41dMbRbC14XhbkhqoN54DUytZzw3dvqkpMfxg9XtbLKcHsNQ7iUy6CoLHGcJfGFRgY2FpredcA",
  "key9": "4DtYGNMd9kMEfao6UfhttLxXDP3qS9rf2eSP2dF1VLYJES5mP2CrxyWLjEWbftDwFTme4vhiU8q93AP5yrQbJz2Y",
  "key10": "8o8YTRyzL9WE52LyuP4eJdaFgeFVUVSFHoGYnLbkG3DbXBB5KRgYeL5LTc1xHCXrcoV2v2cEbf1mu6FL9oKt3oN",
  "key11": "vnZqhm9iFFen974178GshLVNGRESZv9suFgKrQMmmWNxqo9D4H6zeQPBV2ZKsXgzmJmXtcrhiPCsF2ce2EAnfKC",
  "key12": "1ADoV63nxq2rmtoWKeuk4qLgE4WXQhKCCQhPs9gzowFrgRnTierRoPgjFgm16SbvZe6DoBpQMnTL3qVHsHhLUNm",
  "key13": "2QSnngTBrmi9zztULjWLa4i4iNq8LjKcfTyrnfCfzRZ4nWpshiG8qxaJxH5F3C2h65UiwqJy2wCpgvSXAd4rtV4t",
  "key14": "3Bi9wzdHMLoWDc6y46neWHETfxVLKX4gGeaY5mZjmP9ppdpeRgeQuqG86LSe9UCxerCqM33eJ4qBVKrzGqh8rQhj",
  "key15": "4dJT6Bessa5QG1dRnQgRDmdh2G6nEKizv1Nw9sPyGYaqBQpzDXewQA4SQh1zXWMmhGeNqamFKCaferfxZyqoUqNz",
  "key16": "5H3tamwQbZ5obm76y6tNDMtyK2s1asBXXxBaeWMGHZBUAofL1wLVWPogtGd4zUn73kVYzshktExeXPG93i1ANGrw",
  "key17": "3kRms8iX9DPaPWh6ZZPqDdyaDhokq8cAcUQHSRmgYmP44kUwWc527mJpRK5wtGYZVrtTJ2C73YdNgmg1rRjSV1xG",
  "key18": "5FWkN6YJ5ob2FNVNBoXqAeBmwa5P9Fj7rwMpWo4Z5Yk7ta6oscZTqyjMKJedwm6Lc9dFraMQW7fs2tfq23J4NHg9",
  "key19": "FzHiavJD891dtSW2ykyscs1pVn74dqWpBTnE4ao4jahvvd6UBz3bofribwixNEeiT4Jq7LEkTgabnds5GnD2VKA",
  "key20": "3CSMB2U5FKcWV3ZnAPnP4pQu62V9GxCGi2rot8fFF35Yj83of2ezKLXXJgQ7EzjaLTZsCYSogeaWFV4fjyKUeGdN",
  "key21": "43hjJ5nmQd5o9RPAcjaxPSCSyGA7wQvWk48DC24UviXd4RKqwt2Zsu3Hbmb4ptbibuivBq2XTg6qz8kWbpuwirZG",
  "key22": "21KdNAnH14Hu8dSYqcrq8vb2kh2tsk9KCoaWfKUngttHLA7n1QCVXsXnWYnJ38N58fkWhsLiFgzAFLY3okeZmJT3",
  "key23": "4reMtEFC4dyo41QuQJBiu78BD4YHSRGNxASp8fbdrAY6oyHBnr5sqFVccHATSc2JCTozWMp9EFXduABNjV2jcU6W",
  "key24": "2SFNJbxq7Cj8YdqXkJZjSW8Zw9QCJipZSQ6HkzJAU5hsecFKUWP3EbJ84w53AQH6UjJg6zpffmSApGXXjGKsMbVx",
  "key25": "4twb9tuAnr6EuzQhqH41NXTpmjXvPLCu7QTHzeqAZfYu5WGWCEpMy87tMbnfWUe5uyxsJUo5BK9Qiju22fJtnqvA",
  "key26": "4fX8hgFm9B7fSoADLvJaCyXG7c397hzrLoSUQHLbnjk8oRb2Y6nAgNFUYHRdHnffgg6eUE3HhiqpA3qCyD9wXiAc",
  "key27": "4r5eg2YnGesGH2EeD7QrnJHW6yKUjqPTLPYzo7JR7jR9KNYK8qWcxUaTz1yorzZJkb7LMpmt4sKX5qU5H2dE1SXm",
  "key28": "4rwqFhvGgN6GUMptLQRcPDbCXShfXz7i9VnNTqhz1WVf4cvBd2RPMnvhQDZAc1b4EMR8zXBjZGPKHnagwCkwwPKv",
  "key29": "3inQygLUEAmdvRa8FSqVt7ZriuKDdQpDqrt7UhVeV7TZcsbmM5qHBMkgzBf4zwLLo6eG59HjmwcC3VMJ4931YN1u",
  "key30": "4WSmiEv1N2d47jnzwHepbndKmsUYRQ6cvGteHgDwRRrv5jRJcQefV9nauhhFwVoF7Rc3WMsK4Y2QWBWKBMwDssaB"
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
