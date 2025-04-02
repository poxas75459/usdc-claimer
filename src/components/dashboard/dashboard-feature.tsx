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
    "5itVKeyYjJ9nom1tdABS3pTzE9MbEBNqFSwZH6YY5hnfSbuzAS3odZ18qm9LJtKy2uD7LJVPF9vdnH8BPy2WeU3P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SgEMJS3M43ohPx6JJ8GXhgEjqSKBXpw6VwUqFKV4rn6cJQgqgaL684eekhQfUeFmnBQHzTXFQ7YitN4hCAeCtZQ",
  "key1": "5QYjJ1kuN4L4mpwqW9BsSAp5G5GoFHQe9kXuSRJnF64vuEV8gFrxSAASPLooLFstk9wtdKSaLQiK5rX4wZ1n1jVE",
  "key2": "4a4Kc6yGRRmUftW157hvbmUsgcebLfvLGYhgdAHXWCLnCVfGb6S5TTw9AycryF6Hu1ccjptx3WBXyh5KFBzgxw6h",
  "key3": "X2sUzNEyU969fSewFYDdcnDDGAVsaNBBJWp6kq1hFpuCV6bGJPPmqQ4Zc4ebTCP6kqDdYDHhThcXxp3tbeKLc4U",
  "key4": "5iDeKtLqpyRmjYFhT82UQzEwZ9UL98ZAuP5CzR4SkzuD8LUdv7nSBVjDK6AspkEeFNSGxxVFrvAXZjYdqcyGgabo",
  "key5": "4pWQEmkW2wrmvNcvbEMDCeQWoKSq9haqmjEHExprz7SasenJT94UPRH7qcMDggp5yJX9ERfYjHDB1y4tVDqo2vxV",
  "key6": "4xwnXrcjqE3fVCqoVpzGqEyUTAgubaBXNht9ExJagKZyDPw2bhUvutaMmLV8SEMvH9v8TVNHQbHU7SVUEdBE7RFF",
  "key7": "5ZFbSSV2Xzgd5G65PW4jrWeUxspgYEzW7iiMheQpUeBWrMQ2sVfKsYYU1bruEUjeNaHKdDiobQaUjEVm6azG6Zap",
  "key8": "5cPKQZsn7o2jVJRpGA2LMjfCYmncPxoTiJYgJtMrcbYEnUhP8gGx4bXgK6WDhhN4NfELmYaFzqESdgRmLUXT46Su",
  "key9": "35cXjAsCHutKYWHmE8nvP8xcAtrRB8h9h1Pjo8zhCR3N3fAY9DZq3v5VgpV22xyhzSCFXSSATmZrenbKWP5DBySp",
  "key10": "4yhyzk3SUfEboMWZxPQVE8FEnQCXiwGpn1xEUpmkNgf6mNb1dtd31Qap1uohosDZ3bpqj8Nsabgbyzh8ktUFJeMw",
  "key11": "UCgkHMZupak8tKzq3E8Mw7uUeFfaGC6P4QymM6eTJ2DuoBf7kLbrBorw8gHR7XH8MtzbQ7AWeRAockgKBKgCx4n",
  "key12": "3nem3gBqpE5AP3QwmNppC8vQZjrVpYY754Dr8FPHpdPcGfNwWH4YgE4HqVckmGhZ1WiY4MD6fGSddXdmAZcKkABt",
  "key13": "2DdEo3mijztSstR9ksCx5tCBbNw1NsF7DewnxkFhzerRDxfvs1EJLFB3E89cnceusuYeM2HGC65u6NCuzdgtp4Y7",
  "key14": "3ZUW9sTqDhBhzJfNnd6sND6Q939oxsTtaqjWWszLTUtZszoPg6j8Vqemopo4R5vfSQExHjszzaNzuSaZ657Q7iCS",
  "key15": "52oEdoZFnAAo6b12EMZF2gZW26onheX8aaMA2CtHFQcN4d8rcFhKqUchVVdZHAyabyjnuhJZTgAtWoxacB936fMg",
  "key16": "5EDK1J2Uu5DuDV1aQwpzKnRmELEzwbJGKaN1ZZQKdJVBhoTsB8f1FwuxXfvyWgFPzmEuxvT68Y9PTfLq4fg3ysg6",
  "key17": "2tGb5fN7UCjaWh7YSXr4jnuVE21P9r764vHDtx7uLhNEYTJ6NkihHB9BvCcb4cvuQ1coCwrZ21wRYkJsVwFWgivV",
  "key18": "44TDenikZ5oRrzcuzo5JNEkpsZZQB59SkkV1cXBfj1LR1pzQeZDqkZaxrkNFRvRMBnonmUJKtc1NXwmt2bgtmrnr",
  "key19": "4HYi6jEf2riYGfu3tVGqH73y4W2goz7jGkgvs1VJpucERw5fRG7KLNATiZxudsfATGiFa9vVLChbX8vsa6CCCXNK",
  "key20": "4TjyKK8NjRVadmPKhUiafoBt5wb6kSiFVEd8gxyQ6oJfQHGuh1t2DaTwbhzsmipEGSLNUr2HDtd4ctRqDZK63xFb",
  "key21": "3YU6tDejsaqYqQSgbGX8yaHVGKYrSd1MZkXGwdi3QHcpFLDEe6qvEBm7Dw5TqAALAkzjPiYpVFZxAQU9WawJbpHz",
  "key22": "3qkDHjjMYgywSESa2ghcSpj5ZMNQ8W8VUhq8RjdHoJQBkbfLTjkPV8JJde9BJiQDp6vsctHqvt8n7onuCUA6Mqqz",
  "key23": "3Q59jodpu7oPtAMAR8LdCGH433mWNJEMejta42WzZVaGAE6F8Hv8mQdhsH9YrFhVV4BbsmYkN8rtn31P3pc8VwwF",
  "key24": "5JCeuqGvkW4g6HFMR9dDNEq98mXB9xNnGdganM2NwMricb1vnhTrmD59cuLXyfRkbchHNbM8EL6gJMKsD7KZas2w",
  "key25": "3D5uuoUdfQAr47WsAQPycrxy25dtqUcP1UbKxi1GRnAGk6FsxTpAfJ4DUTiCPhjyNbagNgeo34Ag8yqix1ULPomU",
  "key26": "2nYJbsbXKSnXmhHgp4pU7RGqorLrmmjo1HmfZkA4vTL12q6PZHbRxbKUqmytf4nhs81CBMVNJAvNrQNHeCyc3UNV",
  "key27": "4E3318S8nQd9KpYX9Bk3xBisUDh1XyVhtBes2tSFVpZzEpsYvP8WQvZjiJnpXboCXXCC7YzZnrTqMvTVHjTyn6ZG",
  "key28": "2W2jdMtoZYbpxdgre1cApCNfJCU7df1Rm9XTNT2EAes9G66kTsbftFuTFjvDSj1dqpp6ULrpYtmEfD5vkqNmdTZG",
  "key29": "4XWEWSEtcMMxETBP7LNzXaxsJToYzvoJJxowqTzMTUoKBCYH3R35PKz89Dob4Eac3E6kV9HC5qwz3gyrCb41JXnJ",
  "key30": "3Ruo7oebkX4T64Hm2iEQ6MYRs8z9DAS2F98dXSUbotP3C7bizPnDvYU4LDZJXXmnJa5pu7SfXXP3CbDrEcTYKxJf",
  "key31": "4pvAsaDK6HuEtQMW8est34F6bmPBaiJmzAybMruBbw6CTmDGdr8vZT3pR9gBsKJK5rnxuNrBXUQNELVYYhud3chh",
  "key32": "46bSscTcZvUZcTxpoFki2TeHa8CtNxTewozbXmfJG5YAPsFPquVVom1p51vejfgcuuamdbQhCR9bddHSH9JGAa27",
  "key33": "2siS8CfBFzC86Sr3GrT2yWwbVqZhBs2XjQVWaW5xRw9WwfJxg1yBf6CyVcsdd6Lxao23cvdVsVdeARrEz1feSTPu",
  "key34": "3tVFFs24b4CWREGPYJgT3Q2AcADtNyxbybxxTjNy2WcH2MF2yn9fK6Ra4D1gmkGVVdL76t1ng3nETs2fMbJbA1ij",
  "key35": "5vFetWvjSt6MWUD3EBt9zk3DQMmS6iq3stxc4qByfAL4RDnTjSYLbs5661GsM9Eew6txTDwPXs9aXg9st4CdKBMG",
  "key36": "25PPwECjdvnnFoJd3EF158zioaYp9nU1DoycZqfhBG5jWLEyeyVWPMNtj2ypRjYK1wp1sYRqjrnT4P9NuxnKDwgn",
  "key37": "4c626mUs85vyX1hJxPfTkenSGcGTM4gZsrgZjBc8wBMT77yiQ91LnnVxQ8toPNFUYFqkWBkFhFECYyy3NgLES876",
  "key38": "4QTmDH1TakaPxDQCnEwhsDFGNKZhSXYtyRjuN8ycB8xjUtr44vvuj7DHfphmewqLDKtfMoy7NxVfz7X9SJZKXKjk",
  "key39": "3qKwSxEcyWEFgPEBSbHF6Ujg96iFaiLFzhadTuw8PRPhshR5dFv253KAaC6yRkmnLhJYj49xtNXhjBc5PNKgwtjD",
  "key40": "4RMDEdkhchPraYiY7P4xn57KnGcxXzXhrioGGh1AdwzoCEp9yKa8jZcMuUpdWeuepLNNn4gRQEqzKfFqcY9a4DZ4",
  "key41": "3xSVQZMmLs6RWNspfmkejVt7vQcUXCHzrJjqzivJYsz7b4ejvu3ECuweQB4g8kDVWMQiwz6otUKu4kXqHf8cj3NG",
  "key42": "44dGaE49JrFYF4JoTpprZnMAqs8aBYFKzWUsLJMzweT4EHw3U3HTPyoT9BhY5dNpqeoFWnEyFdi7Zw8QbCf4nYYX",
  "key43": "AJf1f5LJNVrozcHp4eDBqJw3mHsuPUH9y3CgbYgjLuTamVA6APrZnSfTjYJ46XTHFFxdHmBzccq4uQnEvcuqSiK",
  "key44": "2qMqNoeG43zLihvHmFKs17ab715ySnmK2q2N74TZrxGjNNmhdtKfXCnSDqAVm6RuVzGrtdPR7wTfDkq77nMLUPUZ",
  "key45": "3pMzamGHW1U3QKBu8eLXDAK8R5U5bUscVZ5pmSUF5gjYFkmSJKgbtbQyQk9qJPKSo8ukDi3pDXYsdP8Rh1WmJJPZ",
  "key46": "DZDw7biAMdyRAyYy1fuf4DuZTxT4R5QabCzPUi9bCdmCLyiVCvpyLXfwkUtzb68UWRrPdBcEmomRWNYnZBKuT6B",
  "key47": "5VSJJTV3WVyKM2AM2PLZr3TSgXExEd1nbK2UpvQZWty3jUtspkchUcrjz2aZE9L7SyuiryMSyu3x2GxA6a41pc3T"
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
