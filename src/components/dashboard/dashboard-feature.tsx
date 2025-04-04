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
    "59txcfQz452gtZL3kWL6zWzJJX8fSp4Luv4YH4HpspmPBzEzkAxMvQ8LtLodK8cmrToe9F1o7hZbxvpMh2NJv1DM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9o8XnMMeE6WB4BPuVPUEdhYj5Pfa7hyQEWvJtfdKNr1CB4zvYNNxqLfRzZRoPVCC8Apna67w9AdazAxjhfu5LY8",
  "key1": "Sg4nCFMjxMauxaj5D7PHqNRqsZJpcACnm69dCFLcg1TnyB581KRQ1GC7T7Y6ktDQjFqyUBCxTXHp5z1Ps26KdtU",
  "key2": "3gWrkJ8G2ZvWHU5Cn6pTtfk5Qf7v5cSuqWwFWmMuKHK58NmJGm3UZ3VF8srMJNktKC3C7h35QkkuYbY46yCtyneA",
  "key3": "2cX5VxmALisaVjXuo6m3eDzgEt6HTPX2Md4J5eLDVNyjzzFQ3or65eMBkcWUBGkg1mUg8MJ47KN5iq1B6vTcvLRp",
  "key4": "4cVNJaBoJbKNmuNk4oL9DL6eSBnmdSWqBj6TBEFXbX379EJ5HQTxnXB14DBRMGfrH86J8oePca69uwRELtNRcweE",
  "key5": "2g5FkW6HasfwPcjwJtD4HtuJvWPSoscy3zoxU3aci82x3WWNQFgFDMkLdSnAC4tFf8KkugSFmDYHC3zMPhmVUujV",
  "key6": "5dErcys54WPnxV5Mg3m4KK7UWa8wq3YCPaRdzA9NGtaXCLjwCoG94mCKuSLRoLMZUZxPRaWm5HMCAqrXvaSupqx1",
  "key7": "24YoQSuxp3orGgXus17fWtotVU4ti4NLRm6YgGp2Vj4f3izuZ8aWbQLDGZM1No5u3imAULSa1s9o76WLcudAVSaE",
  "key8": "61QrqczspdLF4JHpbsXMXjVMtbHb6sAtbQgKZsrskw5JhjAH5jPFBzPLitqsS1nBtX4boeeT3WRCaW3QDtzoAXc3",
  "key9": "2e9EH27yfMRnzybECXuAwstocL8GsUHsSKt2awW2hAAtYFDwyxkqTnux7TmevYn8qYes5jr9vAnjDMwYr3cZ52tC",
  "key10": "36mFAtqHR9aUW346G4rhvzJaJP7d163LHHBnZZG9tVmJdjq1mG9N5rL97ZLFr6oWnAUAVwK1Gj1wfbGeM5cMW2Mb",
  "key11": "3QKpXivkkcDFJoDL3PQoE7RZo4UwtgFghU7a7scUrfPwTsrWfXBHYc7SFW9GmXqjPJ7e1Gm4AcM1FU1RpWafVGbP",
  "key12": "25SGjCfzgLvxfpz7mDw7wK6U5xLMBaNGf85qEfux8nbtZA4tX8xTnW5wgFdrwHVyB2WTbTdu7fDRBRfFL6VnhawB",
  "key13": "4S3NCbBbJGLXS6cEurd1A2Hw3Pyyqb4aCTNxPX5uFinwvyPxmKzD5MXjw1pZaufPHBZCNv33BDuyCxuzr5mr5iet",
  "key14": "5xXAY94ojgd9Fu7wBZnDYHP5Cff53dvUS1e81aXfArbJGXvJeUsRAUinDwaYUfkHd3WgfipG3QTXhaSTHLXQmG1m",
  "key15": "4zUhHu5TdBpzLwQ2Jpe7YCDfvkhHcL3HssAabUaYwfhTZdQSkc8N7nJHfenBM31EzeTwpptWnjBSs3twRTKi9jqW",
  "key16": "3fzFNY7crzwXFerGKLi3V7ZFtQnrSsKK3dcsFveXdEFV1Vr5RQktCLVeJGgVEBn4Runog26XVNSdSv3qLE5XQPi9",
  "key17": "4wQ3TWibCF3cgCykL93sAhspwN5URTBAqhogjkochSVaR97gUdVtAokiZ9nz3NeeatAXvyN3o1qUET2vSjVkSh9s",
  "key18": "2UAvBndavThMs9J4tutQQbvB7GvbgGi22o7Ncxr39HmANDrJXLpELWwqiC6fpKX44pxrA7SFmxcQNXWpao4EiMhb",
  "key19": "4fj1RsRg2uzRozmpd4wmSUgUc3BwfPyyHAxU5XaLjTsqChmVoQmqP4rGN1g5TVu9CC1YPEkQ6oVgxrHdHN48pbtg",
  "key20": "4r7xQym8MaMhfLeN8rNE1xx91FqXRD9grVgtEHEMT3RYg6gTg1cbv9FBwxqoNTR32MoATU8Bh64hhqXNbe4DqX3y",
  "key21": "5gwBkC4StnBthwh8HHKBNE83tiMksvwtJRRTPZGe7CwGNcC8w9y93DEAc6G6ccpVb3CSCAKqZY6hfJjhbRP5TjyK",
  "key22": "3v2AXuoVsN9XBFRMVhSunTspJCvMcQfAMuSGhpRDV9fMVKJTS1Uot4Uvs8tr2thPPyGw3ACnnvL528E2p7NkD8Ro",
  "key23": "4WH7wTFGfjs3MYJrsHvDVYTs32vhtGbN7cUSLn7mUFJGYwZPbwUk4vSE9ZxupcxAManpLtV6UkhGp2nCdc1XY3XC",
  "key24": "383ZEXzkDzXdCuUSoJ5KiY2wY3FhGV39hB79WQLY25zC4wU56GqR8zCKjVAHyD3SMxyvW6VYmBP3K4ZTe9yeDhWC",
  "key25": "4xxGNwk6jVeEwu1aHXxoT2JHUmaKXadumKpZhNhyCrzESwcN4NDXNmvLNKFAW1GZMYK7psPkHcAsFWqysKdJmVoN",
  "key26": "3yGa3AkdJ2UA3DwCs661pBTQ8nL4oJWBsS2HxpPHtVfn4U5rk9wiGLgVwi9g9W3EXh7UbmMReJDH8VgPCkbZqm3u",
  "key27": "23UcSpdZUAqwFzbmSY3js34w3jbVBiWGEXfdXEbdezC99WKyGpTXqnUMNcC7ZQohuuDrheyxVvvHw6LzvXYtGeFx",
  "key28": "5XKmtvpUTHfxJmCiWUgybiJ8Tjg8jznSEF2YkNdPuTPK81ZTfT4LPiJVQHZ6x2yV4cvEvFzD6WHzARf9meFtifS4",
  "key29": "3F2Ko56L8UsjuWteCh4f2cF8foTGdWvxyavzHzQ7ykAGzXZ5tMYaKwnXsZWwgvCYsyPLKaDBmdqSj448MaKNgsm4",
  "key30": "56jXpyv6yvRMdJeERHVogtagoTKGeTWNnyBUCyoZQRN8Vj8hL4xWXgJSVnW2x1yFCa6eEpdnfL2UJw8kWU39Wxum",
  "key31": "4eUjrWZHit3RsH8P8ghmWWurSnpWpA3qefsXffsHix2suHJTQzE7oQCjcPkFRk2xcVfeteMSDGUd3xiF6QfTdauL",
  "key32": "2TorEaRKznF7CMtcVv3yTJWNynqgbucmQY8CN72WSTmKzyX8vot1dvXf5ZMDD2q66iuK4AkZzrGZy4qsQdW2pwf5",
  "key33": "2Lk5PanQwbR74fAJBjowPbxtZuUX3ar2bc9yPejG9VWcwqW2TDUE8Txjoc1WCPVBU9iRGaxdBin7kLKByvLUwrew",
  "key34": "2KnFy7HeUTtVFkHku57ZnqVrPWrXBb9GZqkvTBB9K9NpgXkomAu13CU8H61MjjUsP8TiGa4p6xPSGYBneb9xHZMR",
  "key35": "SkahPbBWQSenQ5xXErnhByXqLFs7ouHzyQAU6QjFAJkF4dbaQfHh12zLnpMGJnLHZnDeAX4PA6emoRmYsZ32fZz",
  "key36": "3B7XnJLmj6KLouDrxVaYsjhoDB5xEugqUcryFgd49Su9iSay7LvQQuusD8haAojLHvjLWYVrJfMx4NbjeYFjG99P",
  "key37": "5vPXYdn118VDh8omd3sJpkdyXwsqqX4DizCinV1HriWyUYrivBtshGLhRX6weCkfo5Hy84sBbDtsG4onCn21xRPX",
  "key38": "iPxv8nedGgMTsnn7LBjZPkBgybhJ4i14ek29vKxy21Wo148r2VThiMFtCi4nnUeVYPwMbNBMKPM8HkMo6cSvVPw",
  "key39": "e6yMw9CNp7P59Ugcmaxi5MjQSwX5RtzK7C9dpnxkbaniok6yB3yCvaFo1i2ziTXsK4tgDyGMnw1X17A1SCMMkK9"
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
