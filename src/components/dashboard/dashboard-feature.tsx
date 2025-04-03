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
    "258gbcpAYZXcBsCkZA4dhSjBd34qxx7aSnpFo5NTuhURoAWLU9hhGuLaJnhYWAqoHTKDkbYdNVaVaHtHBDmv45as"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28oUo19Vv5t1nsMmuHw1X54fTEpLro876w3D2Rsns8o4VwgKiSKRo7yJGzDQN3gn8JspM5b9YLwciDZ8PdX3uZVk",
  "key1": "4cqxe8ZCErMrBuVYxHK4WsoMHo2rnkmNWs9m9Rhz1xy6H7BkywwkJBEQHnF9NMnE5rLxnPbS5QGCXVXGNqd1oqXJ",
  "key2": "2ZVKsYvw5rcZ1UNFvA2bR7j13DUxT1LAgzRaUj9BD1eGfu1YogXUGgpdpTcvnrwa4Ep3DRW4PRF7sW3acP8jasHa",
  "key3": "L8vNy53uZyWrHkVbC1ubu4beb7aAW6Re4DuKifty9FLCoZbankWd1XjimMNz2qBeZbv5Qsn7DawngA3rPpCuGNQ",
  "key4": "5x95msvvP5B4RdHf4Cug3xdD1z7dF97bC331Ea58zxcbkSC7ZZZATsxUp2Fz2HNnaWrqjaKzV95fyjhzcjczBrGt",
  "key5": "2bD1nLupfhyvQVzJA7ui6oDK9fVSsuKx4TRX2CJbZBB2e46Tax5J1SKQsKDNFsXJPcy31ZzjpUoNuv7SkF6jYAMz",
  "key6": "3ippEbe5wUAEo3PPNgLZ2DHu6hZd1wGpkUeWyjp9UZ32sGTNRSkRqUmVmqvM6ts7g43AcLiH1LUDz3gP2ddYAUGu",
  "key7": "8sGYWJcroeCU2cL8Semhy4tcjZaWKbQhYuCDhbL7mKPfrtW4Y2T1yKMo6hEjuva88Dp7ujWeu3Mc6qxjcD7rxjj",
  "key8": "4qW6CiNtLHg3qgxMC2gk3UB65SEWaDSbRUdLRrSQDFFvCRfrx8BK4GJvTZg59AiMuJUpCrFka8WEBAEVM6KmNNux",
  "key9": "4cB7bdEfcB4raFHuyXgNhd9eforrTPjctXtaBCjF33kpnTTRuihpkMFr83t6T6LyRhc5nNMPW33brP38BZe16XxW",
  "key10": "4js7WCdVy8SeHYjptZRf2AvVhs6B7GoFpQYDCiEHuzjERancoY9UFJsteZbgyQ2Di7VS6WWbapPYjPFuSde83Ua5",
  "key11": "4USqCsbTSBCAR57otDduCwv2uJwL95Bi2PUpoVWJEZt67T2Knq32ELGPQTuzYsY8CMBhKw3HgRWpoAiCWiC4aF8m",
  "key12": "ddAzVCWPtBa3FX2d2tBCdkUzvHQwWBJUvAB2owXiVHxf1DNYrgS3p92QwfKYxR3aZ4dAZHRHPpFjvJsM82rusj7",
  "key13": "2tGJuNVWxCyaP9H6utsq4hbNsSkkut5YwvMNThb7TfQ1z7AzVfLUBV2KCqWqYNZ6WWdNSFMmoeb8ohKarQThHxrD",
  "key14": "5vHCD9NTrGQgt6fXMoRbCjPxEWXyYEPESMEe9pRbjvwwJ38DRTud8iJWyoadqn6vRBvPmm7AS5VdSxCu5xfG5kuQ",
  "key15": "5j34aCtNahEMLFvWZkw5XgX6hoYDhJEmq6YyRfKxXKY3LV6Qt7AKJenuz2Xo8E5P2q47bJNzJA2D3SYgFb4YRvj7",
  "key16": "2FVjaXgpBAvButuQCWVZdESbSvBmnmRNHjkWpRCe96hJooSeTKQcXLfu3ZDin33Xze31dzqW5rvRfbKWE8yD2XPj",
  "key17": "2vMuZWb64uuSHH8wstJRHxYLeJ7mhhAJ3YK22KeGjoXoJF7RDGDCRzqLsUBgyF24yjpBAeH49jwjiwiNJpz5fjMB",
  "key18": "5qs9LVbqVJsoyk37aYcxAsZtJ2z1Hi5BWdr9Dtr98ftXG3FzED3SmBZCeSFJheMnpSnj38e7H8oQmdLJQZ7neAu",
  "key19": "4KjDEr1Tfso8MvqQCUFLKEcc8VhT5Xec8RBYwbxJsFNefXXEPX7t9tZteUTaPeQvcGHsH3eP2Widm71McYNE14US",
  "key20": "3bh7GSDo69SE4dJiRCmfj2gMHjfV8d8zahvj59bty6jTZ1qnimcYjvhCsz6MC5YgYpoSnETqyxxGFk7CVJGC5k3d",
  "key21": "65CvittcEtKjbAbALY8esksFHaC6qAdVqiBUFiVGwsneRBF8vAYVBp1rvZ5MXNXAUnk5o5vuU5s4FquDUoyqzL1s",
  "key22": "2F4ySUr23M8xVYfqN2kDHuXduykgxBRizcqYLQ7uMsTx8GLS8UrLPwk2YbpK57jUnZYFHQQUMoSV9tPcS5J8PRrd",
  "key23": "3j5hZQqFq8bBbiFySjNawn9tiT1rHsfx3Bp7yBPZ8oYYK9q5Ak4CrBrfqSsM1RLSHB5KrNeu8YsFZSTJfaPXGDgY",
  "key24": "5W2kx4ueD1WRQdAyDnSpXYD2rmgXZftvZG6qHN1YT7uytkEhrkZ17S7EZsxNzdRiCCvwzGiwDc2gU31PhJNU4RkF",
  "key25": "5bMwNwBEeU5RZXAZPKfaRj73xnqK4MCJTQoHcPJAScJttYpv5UREBhTrNWCNVg3Eqj7jcA6YYtEKwDeYYro1eUk1",
  "key26": "dikQnBoMhVHQvjsprSXdgnvtrcQss7HtM238r8eggpeai7McqnsPhaGkBcuaUG6PvKc1JTFYVHwKmZhNtPsKsEC",
  "key27": "338wuf2c7wAVx2oKdM5WkQTsxCBr6fXfmd6H1smjfDLoa6xCeuQbhSCpPMS2rmoemFzxC4BSLUs7Bk52tUDoppLF",
  "key28": "zCyzqfBJJ6HVrsjNdBtY4Hqe1kCXXqVSP3KHtcmAanFfwn41xHa6pwVeMMcqtYsyp8tsYTehZfPL6T5m8hha76D",
  "key29": "5fsXGSwx5yniA95g9viQhbgdbdYKHCZz15LFTg6qpwX76NtaumdXMF9QJDyiopuKLnyAYZWcZfdQtCKqGRRVv5uz",
  "key30": "a2H9dF2whhjUQwNB3fke5ckWkMhsDH6G9CQKcSWTbAVcLncCz8wamSoHu8wh2VswCyJEWzVjK8bkSC238iW2BDS",
  "key31": "CKhZGjrwZ8WN3LJ1GphYBt8e9GecoZEy7ZgR3g2DsWFo6ZdLyqekKigmdKwZEqSDZW9BsUFjsf6sYeFodWvi23n",
  "key32": "3bbdSFuoq1zC5cFXaDqiMYkXo7CbMXmkBJbJFDee5Pa9g7BrQQgU25YY7DWrzxcRgoGz8auyMMmxabdbRgtUNRFe",
  "key33": "CcBPYRMNZuZRuZmBjmCj6uLxjPfKw5MhRHApjAwKzG19gysfk2HGT4xUZbrYQocr5vfF8EUC6bmf5mU6m7oGQxc",
  "key34": "5Enuvzp43rhh3R5CEBKszCQRTNa8ewKRWC8MV9mPpMCUUTTF3h43fKmE5bdg5FkAzZkuWAGogKcWFQX54Xi15deK",
  "key35": "4qLzkQeFbUVEyp8ejZyyUK9EseX8JwkvknBC6gCUkWmRGq1s7C749JqGxJ77o3KPgmCoJ7Na2uPSxeJSpKV8Vx3L",
  "key36": "64S5782J3QE4hYeDWtQ3warjgRzcZuyceFJznYZbAaBpAsri1bUm2Nwc39uvz8ti6tiFhVtMDEPoqRFKhZ98wwBy",
  "key37": "65vvQJSE6sYuoW9wfDrbfETRHeX28umkFE4kjFeip4U2dQBk22xaSALCToYECyPknX2SvbZ4AqEuYNLbCMNdqmvS",
  "key38": "3wemivHLKh9jAEedoTrvviAPxvhCZD8QJQdzjGkcthGVLBuR6jxwTt5TAqLihhZeC41mG4Px9ipwmdTqfHpvo9j",
  "key39": "e5CZZeSzxKtHgbczzGnmStJeT7EEboeFmonGjUVmUtc9UTBBqKhQabRq6f9xs6tdWpqLUgdMCpH8FJczzLQeUR7",
  "key40": "4d84HVekb88sZz9AyBgHzaQrFd2EHBXtNAJ9dHJCBuj8BxnHp97EZDn8KFa7yULMUwbwtGPGZRp9jESanNH75ujN",
  "key41": "4G3SkAw1dLP8Lz66hjJ9DNDYifWZXvW3iFefAnLdGY2ytBGKCL6GRNLsTqxHnvvDdcPdMJszmhhDkkz4EbX39X8T",
  "key42": "9WrLzjkaU6P8bzSRtx6ccS7jMD57eHMdoUQnqdKZHnhJM12oz6PsJS4d1YZcaTxAQMtadFf8CvNY5pbFNxqv81u",
  "key43": "2cgRm8yNPCLkNLzNKwhVhKQ269S5uVuVoAnM5MA2gH4ArWdKtuFRmyjYoYqJihMQinc4TwmorismmoU3BnxEpRTr",
  "key44": "4tLks5NEqDjLgX3DhMPSQaZLZZ9AEe7RjJHRJJwGrJ6Tfdxi3vkiKcJtYhDFA2fzKNNxkDTjrosimPnikfLGd22w",
  "key45": "59FSVKfvYiHb2RH7Yso1nQV8bugsgPfTJzcMv4jGpseFYr7SwWrXkgFVbShDcM6qSrMQczgdrafzE5ocQhAgskKN"
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
