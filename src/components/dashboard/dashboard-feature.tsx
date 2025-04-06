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
    "3fGnfj7yHQLaDyo5GYUPkCoV4iEE5PcEuoomyrnjNW3ySSpiLwFZCHwyGmFKnwzk1QD4ADSc4ctj15WP7Lp3tA25"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51HrCJdVd2oZrgLpeTqM8wE9pSni4kQDiBsERTuhRYanxRomB8aBbnffK8HX9JiQtmB11GZvFftHPM7k9h2e6Twh",
  "key1": "3ZF1yUAbzM2MXG3YqfTQ1yFbZzf1HQWiKTBhiyo366vQrqQk6W4L3bxhivMV1UQ2igVhHHDLCqbAbHnv9yTWmX9F",
  "key2": "Z4KsMKhD52b1kY9FhPzdYHQSR5o4Lc44Cxzx7bDHbKZ9jKGFxeBrrTYRr1uZbmwAtPWkm9ht8KBLSDvjscVV8LZ",
  "key3": "W9naZ3Q5MfFCnvWrhDvatY5kcTmrd32QCJnJe8i6q6qbYe1gZGxGNJZPgZFbxK2QVYobnPMgbZS5tevrw3CnGGK",
  "key4": "21bt7HqsMmJYTsZQr3M1799dMd3szL3uq5tWKBMaLQf2bxwmppcn1ftiebmNukfC8XgwnxY4hcEMxmuw9iU1ktap",
  "key5": "5qDqddDAtYaoQVUwwsCmFg9m2r6KZuJbUJw16CpkqnFJY7wt7KDWkHdHCkwSr5fLNmSbBeU3rrHettG4iPhL1Zvw",
  "key6": "5jeRjNYfLyHy3Eoz881TGxckutfJgpppnKtsC7JwNTApfZVCVgEPZANqK2sVx4L8modDdiMmEU2ZAQscwfQr3qj6",
  "key7": "5xiBeu5J7P7HbkFvAGJEFkCjcRQfm6BMUfUcTDjb7S2rG7qf6wCtkexWe4D7bYpZSaAGRWk2k7tpaK57iYWZUsBa",
  "key8": "27zXrZmbUvpzNr5kmrjCbssH9FX2iSMFXCDd8xrXfRMHr485AkBfNmGyYXU1GrhcDXBW9dzaUAn1nHYJ9gcM6Bss",
  "key9": "4b9HZ3QyT6GtxFxaAYU1AUZBoGUvgjiKac4765QVwHai3YpkFdFWxfgY4e1DzSC5VwPVNPPYbEbeqQFCW1Y47AwJ",
  "key10": "5jD5dT1w12TDwoX3EHbsUKwXnrGLyWaX8TY9L9PWAzCYcVD6CsAE9PeSGixTVRpXPyDXVTGkz74gfWi4rAQ5o1QE",
  "key11": "5z23eJTuEt28WkHZVDAb9ZTb3QiZceyPixYKhsfXjvtedt8aw61foKD7tKCH7koUV8tzGcKH7feozvzF4gxGqtjC",
  "key12": "23VrQ32XBLTULEsRPd4dBqMHMc4bfEAyGMZayGwnReRaukke6rc8fMN1QE1rwoNWCKifKTB8zPtTHwmnL2hMRgE9",
  "key13": "5mSWb6A27oVpWzBwZc78L1yKHWKNLfWwtRUD2daPYteVKTz5PsW96uKe4Wqof3aZy5iJzhenwPWi8Rm7S3tj5wCS",
  "key14": "6Rvhw6mxKw5S9tchqyiGTodMLZuTiwxnvnjwQYU36CWsrtEz7L3VgTEeCS4WwAs9LxX74dyR8xkoBEm2hANUaNY",
  "key15": "4Zfxypo91k3qqSwgHbXztTfSfwftY2QQoUgGt1vrAgn8vnTG8ECyvbX8opY8xoFzhbczxdMW3JL7NaMLPGQy8EwY",
  "key16": "2T1HHfaSbVjcvFAbekLXiAe1MDPGddXggwYiSQKP2mybWfddhtRPNXkWqMkD1UQ61aPBjRAWQsXtVs6XmDHRZiRK",
  "key17": "4TXc28G4JmNLMnWP1Qb3oqv6EFfuDYyRKwFJnXoqBTL1DCB4gKqrpfVZj7YqMAdrfxnbtKUyHh9tAkSxoNDsUEDr",
  "key18": "3e3TLrdrqJJVt7Wf2fRjYqZpBt85PuwBSwJf2YMsbLpYe3Pz5gfoo1SAYwYmngMoaYS6EQ9FRy21APsrP45CCLKZ",
  "key19": "4z4Zw7pDTuCha5wdJxK2kbPktnj2DJb5TS7SwQA8GK6t3MgPLWg65eHnonZ4yZUTvcpTRmohsbGrvQAGqALszYs6",
  "key20": "5X7EwBnoVkY2putXf9WJBcTL9TZUr1jUKyovoz2ADHgWybDSwwMv3MyMoBsVVxmLY1mfw5iDJVAAzyrp6H1jvp7x",
  "key21": "4v2aB7Fujb2x9S8F6rLgFGii8S1LmVbcX34pzCw82aUSvwZGwfBwKEQeiZjD4xVzf1Fh8a8szeHPBG71JRYLFNFT",
  "key22": "5eVNGhKWPGY55KLTJn9aCJhWscEJFWU3J49n2ujEkD3chof47mNSRxB7y16vdkh5hPNjM9qJHzyvYBXMpqV3zwJy",
  "key23": "38fFJP2KkqB6RMr3LNqSAeaoxnDunuLfMpLAqq4LZVTtpUmwk2ycB65AUSztoY4KgYvoK3DmcYP6gHzvt8S94Fbg",
  "key24": "4o1THM5MaKdAo9voKeHNkwuznPtX7uC5ep5jLQb9Zm7oZAKiu2T4yZX2wgHaNrKus3sdaxM76Ke8nZuBa2rDvbkH",
  "key25": "3njCpCD1Nv4Ucg74qHR8CpH6UJX1enJ7bTuRm4GjvLqxrLWcgmitTb899rfz6HN3AiWDfWE4AgNTPuHDKqgcN6wh",
  "key26": "3BUww3EYbYtahN4JKan6RyVCfwjh2UJRFoLZy39wTMg5kbFqraBf1kfsFTyjURBmnFYboCDB63cJTHNMtmkMxiVU",
  "key27": "5BGTyGpagYqhcNZe8TbjbgwagK83C14ts7DwYo47Lkuo4yXUhhYUqAQADbZwRoq71epq1SufEthz5sd6KCLJYJrv",
  "key28": "AorrvDUbStRF6t44idthfwJYn3gqcH953LPFhBBRqhiW8PstybJjW7m4vdHtEnBqbpXntgwpvs5j1MdGuG5XPw5",
  "key29": "FbBsh2VUJpYi7ao8ooqWZ9kXz72ZS6we8pJ4DbnqJDPtAeMq4y4Yb5dcomPL8K8jaZiVxjCUR3ga6ZE3gjWTNd1",
  "key30": "m2WbJghyrmvjdtKF8AWQAxcSCgSa8iw2D1jgDhxsJoSemDeWYiS9VNgcyt1NYEKCru7jRxYeSE9SAbPCPtbCVP4"
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
