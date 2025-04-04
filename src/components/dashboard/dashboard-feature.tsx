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
    "5gyjZC174aXiFZuB7XiR5rZ1FFDtZWXtUeVeniPiTTfR3Jrx3mSMdoZwmdca4HqMTtVVJaQm4Ko6pYMicY14oEFb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67hEXuzuz56egt3F5uCZRGJqekX56gmYkTXd27FkuXbwQSSjf1SCVsajwpvkLyo5JjaohP4bVetGMbSd8KDRQctw",
  "key1": "58CgzM5U1Qi9bRUtS6WuPXQXAy7rcK1dvDRnNw8W2QGeT7RU4ibKnS1jTjTBnFFve8JmEJJah5Qi9YpPe8L8oZuy",
  "key2": "37aW2rz1ii9JHth3YJwkNSuYf4APh8BhWjPCcyTL56LQgB6JzqQzbKHbdHaessZ4Xfq5zV86cXvXU4CVUgAk4WF1",
  "key3": "4pGV8X5jqD4CwB7fNJKsq2gwvAQYXp6XEpw4VZSdw8HULkfhm9dew9RbYipvV9LS5TaKDHtu8n3KxFpDPwSzA2NT",
  "key4": "2w6KRon6Gj75US5kZR9HcLBC8VFPzzPan1tdMU7CMFxwLjju73QGd36mjAzdK6csbEdq5aSMhD7VKd8i9MtKksxn",
  "key5": "3Q26EfuhZvjhAe4datEBWWrDLzw5Wf9jMKRiaXQosEwKSw4KPLcj6g2F4vLzqAwu27Wvqd4ojPQnM3phaUeAyVLf",
  "key6": "5TFw5qGyN6HdnrPHwjo3cXfQMLyG5ar7wYchvUuSgU8fvUovf2H9BooiRErteGWSwemaWGfL1Pn8YPH9gnv8kgEQ",
  "key7": "43Nf5AfNjqr7E3aqZNnL1YLgfdJEXjUdSd5CqyeGttgZXhbFUsDshfUVCVex3aQDJvrY1VXrt2GJLdsMEeanuk1r",
  "key8": "3Xd3AzoiLp31w4wGQtFn1T7DS7fQBLw5te93fxMPP9TXPr3nPg5VW5XwJbYtGKUvxSMcSxmw5yYprtwZyQgxCcx7",
  "key9": "eku2Gv6cA1r5yjcMx952btAw8rHjDkTFEeWeiBmC2zjsQwp25FankzcXjiDwigrn5gwPSvWEPaeyyG7sptARU44",
  "key10": "3ciXPsqWNBYQMYxQpfgwSaoG7f2GMwDEbjc2EGNTziWGd3LrsmwGdLUzZCak1mYQyNZjbBxVeEisEdXuFEytEssK",
  "key11": "4h4J7Mjpb3ceMbSTA8QWfFrqdmPYztaLxqkBiZSh7brRFqykCqKdTdouifK7ZSGgdAfZrMUed9R5ED5wu1ZjeuP2",
  "key12": "5tuKinv6JPAQ5MLoWQfwVj6Xr8ytDFtanfqCUP8MXvK6tfAPMsbAv6KT93asVxX7JS1vVgFcvcibFKSnscBJ4tji",
  "key13": "ocgsWmSA6xs9y1zXDcUAVBqHTv3JXhZWf5KJB3xTX2ZbWnH6fifVSFpsJTbvqjMttpfD1YcZnA7bkEJ9DfBdueE",
  "key14": "3R3Cajj1HBM5spETi9ngAbno3a4FcTjByjcE6o6nyVdjzPrks52MwKqFaEHHA78YHbbSv1vLQ8WGi8LndJine4xg",
  "key15": "2L9m4sYY5t9eBb2S3A6828w6tfueRjuNr9Un8u8VnShTKxN1NibEwKC3BXFbDiiqBAWD9hGVWjVTdajUkDBi84dT",
  "key16": "65jT4zxvv6YNcbNmwR8kAAJuHQdwrep1Uu9tHkyTZrYtNCiLfRVvUXUitBn3Vbcyex1VgqafG8rmx2Qhu3PbJTt9",
  "key17": "xeHFcpqSwwyXFcfWontV3u1qyuBAyeyBku4J9A3qHqygVCksrZWMghUJQ6T1z9coixoLbYMQLjZVkdwSCsYVRb8",
  "key18": "48ySNP9LZkgzVtcULBQU4kjLyBMi1yUesQgZhEWEmpn4NSu7iA4ZKhun4C46sbCU4URfRhdH3DicfxxECo5Cq8gx",
  "key19": "64jEpSdfPP8hCRUyevk75qpQN62qXsUoYqFRT3FmF8rLLj3XYmp7vLD7NmunF5u3cCR5hhec4wVv9GHnFFGQ9N9k",
  "key20": "ZzK3ymqwUPNioaXtgKnbHc2bVFCnEXrLTQ3AtSJfCqwLXCu8qgCqLnghtD2dduFaNDoh5i4TocStDDELzPpDq5o",
  "key21": "12WGV2bZCogUNqQb84keZpBkusPvHRVGHmyFuHJMbecyqWJzrvsGBzfkv1bxVUwS2Kro5Gf5brknRoKNkqa3ZxU",
  "key22": "5UV1okqEEqQqrWocydpu4FGfS4QcvWLGNHWMakYYtgyTj22Eh3ygC9Se8uPsucvcdKiUAWZMwMVU2nv9ifZZmP9T",
  "key23": "61UbJFQ1EUSMPd9M9TXUs8gKdmzH6Uyhuzs6J8QAK7PrknE7YpekCE8Vd3esWkUuXqB4tEVqDYgeRTKC33yvmVFr",
  "key24": "3jpM9RWacPjvnUdjGFG1SeZUwqUSKLZ2zNmBLLKuBw842X9LpCPKtVYa1S1qUfzTkjJtFSrPLUYHz1pqYRDQd39C",
  "key25": "vV5sScZKXKXoRh5U8Km3TtwXczuDC8YrU1haF1FTFSppwc6P3icVSGmzhQXSUne1zfbKdvxYCDTHCYgXrM3WCib",
  "key26": "3pi4GFEfZCaWtui3BYKioyFvaNtQRjzdYYDmhEffJXefJSZDmZ7AvirHSSdj1ZUaHgYKLoCve5MdE4ZtVYdUKkoC",
  "key27": "64dJ3anTNMohQsFUQHF454mKGjKKMSp5PXZ7SX2f3c8Bojp4AaJDEN3bLLMzrusgi7nrBY7eDvaJnswbDf8NSr1D",
  "key28": "33FMEqLpEtvkpY3hZHaAMRZQLeHQGCprWXmopPADku7uJpZkuSqdJmkYxzCJfWg5HXiWd5yU6KkTzLxKfTUavNBp",
  "key29": "3mkHr5hE3vtCM3iF1zVvftrWY8m14oS16V9Nht8LwCGQJyZHvPWW5WmvPqMXrraoE9QQgR4GP3SVvzFg7h8vTnr3",
  "key30": "2f6pfpkm43imqeewEz6MUwMxdKq6KMauUuZepfokD61D1Y8kVdDtPaZjqkiLz1pbpamBNYTBwc9tahv74DtUTr5x",
  "key31": "3yBAW8ePWpRVFhXR6NuLiicm2k1KiWwn3hkbgR8AXGYVyGp2LJLngRsCuGDWX89vXETwT8D6iGnhBkFrPExJBmKm",
  "key32": "5zgW9ZLiQTaNUbNz3zy8o8DbKPypoNkN9FrMhcVTf6C1dGTYchdLfJPWTcyfvEriLNuRxS23DymjSsWFTyWH3DU9",
  "key33": "cPgEY4zmxwuEsUt2XZY6zBdqPiTPXRFGmhrhG7jqJ8Yc4LwuRWy9jgZEgUHfakCHPWckX9yFo2tbzjpGXoXJLi6",
  "key34": "298nVX4QeYjQEMMzC89U3Fum7qgKLk2Noud567MUR7NfU5YryxRUF31XKft1mNkKrnqwwduy7yPzUNN5PHtx938g",
  "key35": "4mF4MXkUbojDyLa4qrDT5H3JMfh6QSMDcxW3pDxP7nkZeDhxhwDJpwTg3TwrvvxbTYs1D3TR2SXFF6Y7tSzQ3Xxr",
  "key36": "2DCSDKcCEZyjcYP3Rd49cF2xhAkCjettyEfjBAREFhWV5eyMiqYLxETBhh8c1WBBrEYraLH3gFSUDvxExbr7pA8L",
  "key37": "2nibiyP4KALgsKNSR2oahMmyVXhyfyMaRvLExWCK2NAwmBex21PiNRPT5dnHRq4qSBvNqk24wE3fJTbBTSzkEAoz",
  "key38": "3LRBxaqhsTD3SiS8Ym3t7khzKyVYgSed63dB7UAb4kdhRTrKyC2xNvco2dA5qUFSTZK61pZnf1UPvHoWVhcMrD76",
  "key39": "5ervCPnsFHVTcZE79TdzXoEisFYEGdCoQtNxEz22vzRxffjHejJH49T2FxAvR6DGkkvqq9g9NzJip2M5z1fJjfjh",
  "key40": "63n7dcQX9Te8bVXdaj55gBYmBZeyhP8odM7Y1Rr45UjaBVDd7vEN5Pgn4hrP1R2nnBQWdsjb5x67FFi5ABtG1ENj",
  "key41": "5Jys6JMtougDENZFmt9CvNMRaPbjAsoc64ZywSZh3fhAGd5hVvvpLda1rVYNzs2kRu7dDtqrMGNGLiZcpSQiiv6Q",
  "key42": "NwZxt4FJ6ZNnPPRYrwJwjr6UrsFruJfyHN19ckvLq4y6YmnjUBTq1an4ngZtuR55uSVq9ZjgCVUUMbjXvipxNpA",
  "key43": "okUVHRDRb7e1qHahcZ9881gqBHuQrVHwoTumVhvZQKZDzg8kJETJKJ2TPvSzoYwPMSjKje5VKwk9NWpLDn7UGGL",
  "key44": "5QbzC7KaQfZNpcq4NZbTAKZ8UShaofuAv4wZiqSgJAZDsuUvz1q9n8HNWp2crdgpXtmGJGooeQ3zQFfXCZeBYTxV"
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
