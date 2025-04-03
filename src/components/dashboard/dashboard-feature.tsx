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
    "x4AmceC1x9gbQXTuws5GV4GRFDCcJwhaA7eq1Nu7iM7NzW9ENiZtsWWmFiLJwLNpr3TxZYDbY1hN2nW8sW6UaES"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kbDHaXzTcBxhqSRVyrUPkAv5M2kmp1zAMWypFRFjD2uSRuyo2kh5MSjNmUzu3t5xbwDgwyiap8cKavaiFskbgCZ",
  "key1": "4c2uN2t9wgtfes5azSAhbpNBRtJmGR114t1FsiuAwGaCGmtzxC4rH8PQHEZkNfhhbwMPMnjv64dw3amykSGLeaB8",
  "key2": "jPFfhtPFv7HGThysD9HnSHYmAXzcMgUyKkFjgtoqEDmo5kHFbrbwotDXvknimekEvyhsmd4U7bpZaTnwfWpA6sV",
  "key3": "4LcUQpSs3w62CPoEp9MY1XSxX17xqxe8878fvnHKgGibXToSpVETeQzhcbNiSF92Gx5PB7LW96cY8jcYBHg4LroE",
  "key4": "2YZePWLsfVtSUG7dpPuziQm3zi8Ue747HGzrxRGUz2FsGX5E9YXQcihS8BtBQzhRzRyCxbMK4HntrJXo8qW2CAzc",
  "key5": "4ArbYmKTCsaecxRVKrceAtdm2iXHvkRKPWzh3QcwHvGMMQLrzBnpchCcAir6QjWM8Gnt6Jd4HhAHxHpkcmcKUWvm",
  "key6": "3AMGnsaP6fvgpeMrcTMphuXAwmTyGiFDbfCTjA8BhAF1KsKY5ZQznU9EhCLbh3vHJeCKqswz17nno5pZ7GDbTr6Y",
  "key7": "2QPyiDViBeR42skniWJHA9nhomETT11bggHpnznQXycp4gJGVCDtAoUpHwGk4NKFz8MJPZ1NgYUL9fAcG5PvGftV",
  "key8": "4AumMdZ8bRtagkAR4Vsa3mBtMfzz4zLUq7YxK6rTTCfxFAFDmD8gNd3MP824hR42mPzL5LC7ThbusSgKRhpMSkW",
  "key9": "63EhYkV1LoXgrD8DkZ67TCZgDXu82dNiboou6zPGEj1ZXSxCjmxCybfXgRb7exRDCPspGFK4ReHBomyAWyugbPJn",
  "key10": "4BQzt2NoDYfc16rZZaJr3kz77RNnLZ536eure8wjYGkH3zY7r5HnmPipwPz79uPjNbuZtJqL1oSezqtPnWYtFiTg",
  "key11": "o6jLd7nVC7vZjirn2xC1vpAdhkrZdULPhp6rMiKtQWETd4HZ7ZvRWRpjqX1xneLxrDguzbgzF2Pbo45XaSqtgmW",
  "key12": "5LCzRAprjxBUzfqRs2U8JWTyGSB9xaF4VSxYMWZ6Ghzcksdk69TfJCWevbuhztUQsyJNxU4hBg7SViDVpv1uJVMX",
  "key13": "55nTGu9V6EVM3ZHwbqTLodZ9hceNu2CiKQgXBd2e8912D8ApBtVhCjwXvJ5Eeq38HhTZPo1mWxsdz4XioNWFrxs7",
  "key14": "hXFD12AX7Lsb92jg9h3NU4MjMHnApsXeGEPbxUuHAkQpayKP3R5QeWovKY4dydzyPy7ih6J84uyiNVViCZE1nxR",
  "key15": "2VhHnFNk18baFmJ7HqiVDQxEZQmjapRFyLsBeG1rMioqgZ1nLi6YWXLTvNqj3TdQXy4wuAwvTHEBj1rvRwcwLfuU",
  "key16": "P358oTJAFHopsvXR7VvCWaqTQAhEhAb7DBBKCK3YUEqocb9AA6TYNCVosN9vescNXTNVnegr9W6JXtcqQkLfSAe",
  "key17": "4SEGgkyiqANEBcM4NPh75k1EYCPeiA898dV3G9GXg2U2tCuw2jY7stuTNBC3CiRxB8GRV61gPBQQ25a7Qzvoy4kg",
  "key18": "2MDCTotFiWvQsd1daDk9atJUMH5KX3vVtSpM7RHz7JtzN3VGCVErxYwEacN3v6DGvC1ySp3GVKVBhacajoNoAGsR",
  "key19": "4AEzvk2BG87UCvQ3gbeT4sKjaC8wXP65WyQZS54B4abhhYatnL61Dr3WegzuiWf3p8vMD6nYm4WzR8rBuYLUkhWF",
  "key20": "21TxMC9UZU5hjVUi1kF2HSej33c84nAxheB7eg81Un6btLPnNWNhCXE6rvtTsZMpgQUCVjcoA824qnBCGUkT5brz",
  "key21": "25D83ep1o3inzJPKuBheuoZdFaPw9FtXpudmGq4Eu7YsFdExPjgLCTSWr3S7eS7s7J7Gen35qFYdNsYy1GixJb7T",
  "key22": "4NvzwQH3VmegaPQHB4T9fE9yrUrfcC7Vc2QgCrsWprxRzxSHbmCauYuKAnjJqVScHQExcB8pHxXv2VrjenaG69ni",
  "key23": "5Ad3cShcvX49vGV6oyFAEYE29j8G1yrfvcyXXVKU82VDKrV8TqiLbGHNaa1SGu3b17VPCufme4u5T8rfHr2atZQ2",
  "key24": "4c5ppDbc4sDQM8yVwQgz4YymitSSN9NGoiHH2XxoB4rLPmw6AMT3frBFZkN8GhGNqubGQu2Ddd3CjkrJ1KWFaFGm",
  "key25": "26Hp8kC9bBvkiDwR8C3yzcgavPf3XKGjkWnkXNKV3wqBmceHvPy3QnpVZjXMrHLa41CmhFreRFTsYnJWr8z9CwVb",
  "key26": "4tznuNWm99CidV16N1t79JDaUCLrb7uVNzssaQUYLbxq9porzVaAsufYuHX6iAQepMmfbgd7T4TwHBdKFcsKawsd",
  "key27": "4Trn2vFXYYLQKZgq5ExPCkmZYEbu63n5ToppP9shPreHQCLwtLYEgg311tVMn6JeY3xEgC9xUZTrrVMZ3LTabt7Q",
  "key28": "52bsdVCMv1njMMNJWuejEGZW8xnjeETT5tUBjC8NiKMX3rD671MzGm8SmXk32WEdf7uMC3dp9pjT7Vka9Wgrwz7",
  "key29": "Q6FkyW4bVPBwaBcm9vCXMpc8iY9iu2KNxbvQFTJw51gZMcf2t4rUGvheCfomLT5wAw12EdzBL4qAfiFeCfAWsAM",
  "key30": "3vRXqdd4qFvwLoas5mihD6Dkr9mioN4f34zmtsV42DfiKiSSJvAYVQwrYGSu6CGm5kmgCcEE3Jjhb6PrmorYKgvu",
  "key31": "4hMo9Hv5Cy8dKexwVRYd8cNTiiDYuNxJCot3cUXHM7fcRnaVEZAm2mnxkHNLSXJZUBEJEsAXoPajCtpQXoqUQFza",
  "key32": "2kfFpr6XUbBKjUuevxYxqHuhE41PUdqrPbXdBCdodnqKwZRsgqrrTMtvr7hzEExjvUHj7RBae2dHQUMWk5WQsJHi",
  "key33": "3yJTV79KxAVwa2UA6SsitdaYLareBH13WaDT3mSFBVxb57YNpBDuo54XsR7g95qQbYpzMFYy7utCi1ozb9LgfXvJ",
  "key34": "2koDjuQ2iAD2ZZ3pYkgReVJedK2byz3xVoyeD9hc28qpCY6mUBPmYiJ5W1UYkN2Fmdg1tDD9XCSDHSaQakrgHTfB",
  "key35": "4JHBH5RLey9xQTjqJ28g4vfR5NgjAkduL7GfnL3J5MPR7DyUw9xktHXuF8Q4VjCShE85ZQh5mgjHyY1NdcARLxGs",
  "key36": "2jFQyPRd8vEBFpSsgndfFSk3r7aAv6MJt6oR7yDkP9ogFbGo177Ru3c5ihmnMPHss5sjhmcc21adjBRCL2cdfmam",
  "key37": "4kQnSemroftqgc9RappeUPJHx1FPTtqBgD882gtkqcRX7sbMsVY2omU6bMEAtJfPHdKufnoSwigZuJR6MzoHM4ut",
  "key38": "29xHjTNpyFKqLdW8ff8SG9PjP3cVVENmfNgZEbzveBFvimc55KL4Ziud1FhpcRusvSk9XuHsqjpGQbJiC4hjF5Yj"
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
