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
    "4CDe9yUWz5eT95oehgaBwR2rSQnbNPz4kAgHRhhms3iuesFkRaXCw3mYkAMHPbmSLFMgWyBbUr8AeHXyFZ83yGdE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eci7ZM4daAMwuokoWgqLjUFnaJ11p1baJ7UqC4aKRjwygkSJMH1hjcpWHXK1oZvnjv5s2XGVL5K4fW9VdYpgur5",
  "key1": "5cRa6qSiLNMSGi5tx5yKWEhRZUKnKiA4GT6x4uaaQtHHcHc445DigBMPWwUbhkmQngEoy4Uyhv7Kyvtn7auvNYSy",
  "key2": "4uhSFLBu4fsix9SzhTvg2YCJKD7BPP52p6TyRCdeedyW2qNCntMAZSe2kbPP5eWcC9vfkzQgDtMWcqD4KhRNqaBN",
  "key3": "2VQspfi8TAgKzqvVV3Ja7ZQ8vWkf2Xi3omYm8qqX5XsGUymXHbptWpar66Vppz5Yo9z5anegdG3AvXpBDxCUCm8G",
  "key4": "26LHcEgoFptnAx9G1heYCq6v7DHRkJXB15v66VoNbRNsqyuo1tRAMiTyYmAFEzpPk7S9Fvg7rCzb1xYDa2czkoL2",
  "key5": "3r3qLsh6MLYxxAKLxJJxeRPKEad6sxG2WxguADckSE2usjkrSp5WLrXLThKnQpT7bZshYLFAJ7fXcp6jge9KV5es",
  "key6": "5vw9CwxuogveVwqvqR8SX6jjTtHhokxkdvifTyXdnTb9zj76gHLA3z9TuZqV4wBPdGFHpAUK6i8YLWUh1w7GgScW",
  "key7": "43vKSyb2TadK21RHmYsvuF7uV8cQarusU528EX3GByHQuKLrcw592JfXpzhKPQnUQo13ZFPgyQj3pU4uULPEJczh",
  "key8": "t8cTTdEw3n99NoRBtP7uGTiy3uB8hSoT3WH7rjA1kmoacXVYM4oKpp1vYfDkbdnj3XpbhxQXwAwfVuqEsGr6q8h",
  "key9": "3wkYUUmVqGCB3QvPRCtzAnMPW2fmaMmuYLPSqyESZ2m5B6heFKfMgfb4GcwKxMLoBEE73JzMawguUosf8V2Te3Fb",
  "key10": "4cnrj9GGVHdKwaMy6TpmPzK611YxVpaswavMPEoHrKkYKEfWKzvg77U8KeWeFb1NB5mpNQfa5BsshRPbEgJu3gHK",
  "key11": "5wh3Cx1H27B8wecHGcuDLMMbwoNxHxr5fBMUgxMbKcJWQBDG2fGmYonsi61DYRzXJdnoz19jprWdnQbaHpR76JEj",
  "key12": "5Lzaoy9QxjTGi6zuA7dRK6EoNyuCCCpJfBdPY7Fnf779hp5bbYFtvozzFJJDngRVVZxQKdzDhSmFVpyARsLMay3q",
  "key13": "25xsxVV47BAKk6CTxL8gCcU8JpSmjGwRDfrHwpodMSnkaStYxH3QxXze6Way88D6LcRXv7JYjGEAZyXEb9wuvR9Z",
  "key14": "2GyAm4zL7Qy4vmDZzjx5HJ4Yv74CL3K6pdbySLTXFPsBSkyvtcjwBC68SJ4h9PtcA6u9LnK43HRovBW6iyyNg8hJ",
  "key15": "dKEKWi3a9cF3W8Sn33s5sVfscNL8WuXyA66gePXtGpZNr6su4RHGLUvLQzcTpyT7tLnd8H865DnzZU6MKZJRxoC",
  "key16": "EkKqZBb6gL68pjM9rgTFnnGEtyJfyWTAoYg3BVyoFng4iaPiWM1fPpM5YCDDnuQUkRk6auxDY8t2gXKvQCapgr9",
  "key17": "2wUQmLb83zkKfwpGhGZanpLzADvC1MruFGY38aX6cUFkeD7fSoYmxk71SdrxzsQnN2NHVkkubSmbryeAVvJi2w3J",
  "key18": "qsZUDfiud9k6nV7Mm6d8LuhpzuQCnVZEYwX2JGgL9XpS9mYJ2AafdQrptwfQfRHhGNyekVxtCjLfFfikrorx5Ny",
  "key19": "3XFi997ZA7jNkPBrXWgztMG2zX95rCN36yJXyfYswfaoDoHVan2HMkZKF3XQphSetyX8VvHUsiCPmvvwumUW3qiK",
  "key20": "5u6X6HRrTZvq1aJseUWrAJ5EK3Hzx71nzwvMmmWyatk3xsJ2obtvxSd48554fijwvDMU8Sj8y4DWBp2iMg5tWZYt",
  "key21": "6648XW8ytSeoGZBSx6G5c58aMycBNi6m2YLdvAngPt2exmwx7M755hB3fdm5jgfdjeskmjxW3ZoYiHUNuEJpGDTB",
  "key22": "2BrAwj3paGDtPLzjSxdwbfGJxby7Swd6B5t2YHMoCB65Zmcby6Bm6xDHvKoGiFoZbkFniUChFVMFKegQTwYhSwxL",
  "key23": "2xD8ZBEH9hun4knM5AN4idVxsX5Wav4eY6Lwc1i5MVJKpXB4Axd5eVHxcYYSHxa4kKByFYfCWFKUzL3fYQHkkc1y",
  "key24": "52GJeJhLZQw1MQrDwVCwC1fgBwoDUcGwMh9ZfhSnpNqRfdwkdUwVqtriUFRrqQtySgUkCpkVQnqST6rsee3KsE93",
  "key25": "4rt4E23QTEov6Earj8M4RyFMg9s97GgoqompMans9MFP2BDqdx99Zcm38dpv2RFUqrxJdDACzPy1pN8YmipnoPHK",
  "key26": "4ycRbY7XzDzvtkngZBFddRSSjY4ertLfQ3HTAsAPCoMPqYzfMWEzB9izsYjbk89SU9Kevy52bu9qbU3j8keRuxL1",
  "key27": "4jgB3MdUUirdhz7P3x2aojFcX9rVGUhJbMNpw1YUQpNZ9n8jJ8VDTRqKWg2DXWBrXCJykd4ZkF34smCoZ8dCzmp5",
  "key28": "a7nRjZ6jLWSbzCtMwT64yPu2ixFSB4PYqm78DJVUq2kxiya7HUcysC2A1mxZUoGgZ5heG7oYRy3dAJc2aQNtsND",
  "key29": "5wjCouGQxmFeMzyttrv7hmBpcE5S59jeqAzx9vmhregmuA891XhVDpiq7evEmoCVaR1Lhj7zDL2ss3GS52MmWpDn",
  "key30": "3Q1zXmmxcUzDJmtimfbwN8htxGYvR5AE9nDLVGNmYRwJc6JmMeHXT2TcpCZeQWSfto1UJgZjnwSm87STArdSwaWj",
  "key31": "46hSXWtmKTBHZfKXsHumd6BiKK91vewAWbuAPNbm3zpqkqDF6r4hfUQSPy1tSoGokiLixXt3pa1siWp9TM6NzSQw",
  "key32": "pqLDpuLff7fwfnCJYSk2XQKrEnmKhJZ5dgyeSbjhycz36ZZVRoJrbZu1pNVkbCen7js3P4SyQUALUVzhBcCZJCk",
  "key33": "4UnXtzsKZFe8xrk5qM94FxEtuVc6HVXb8R9o9EMXf73JvLkUf9Lyp7R9PwKs9Jyax48Sd8BXFeGPHRxpPW1XKwwA",
  "key34": "4zEDDuZUBWD158kuipoFFC1RVqQXSaBqUDevJXQHffLMuXXfpq2rspy4WZ2MjCpFQ21hU8usjHjA2uitagbmQfz3",
  "key35": "4ZpH4HBwAh4W8zJEgUpxNB3BQv6GnuGFqzVebjXxQ1KwWA6ufCzxpkRP1vHPXmLC41MiAvtmwh2wGWxVLcPMzfN4",
  "key36": "3dj6Wx4xrVtvMB2TAqPeUFqb9b3mNgqYYPf7XqjkxdRa15KW1HEfAzub5EHFyUWMJcqviipTtQuEa4GPMDs9WWbQ",
  "key37": "3pVvYVs6B5MmB85sVrdL34dR6BoAT3GSUb34W9t77eHAEaANXZGC3eCom3Nc4Q2rJpN7z6RthF7dketNHMa86cSh",
  "key38": "4ms7Vpom69mp4BNgykcoJm8qyAW8eZkTifUSVbCCiFaovWAyWnT5H5Hoh1iKYZExefAvLf7oCythXEM8JGKEn2zz",
  "key39": "4y89RNFo2a1VqytnmqjnA6cAeaadQx48MfHRvc5C5fmGQbPiRAv3NUJT65LyqkFepkK7ZeWqowXH9tBU7rxTZejU",
  "key40": "5V5rPoZoTdryF7ZZtYVHkkmZYev1Jdyxw5fScaksAKk6qcFKxjD4bFc775kZCWAPK7tqYE1ugQjFzEckSRqeM5ki",
  "key41": "5a7pjeYsDg2UQmNxqXfvuc1sux5cKTKoFD4P7epZSYVZ3giZtAsCtLdQXUDGJPCdZyZyQuEWx7eXLqZaZTLEp8tv",
  "key42": "5RuCYL2eoFg1sQW5qhhQ6Qt3gVr7uLQYJtSyMYLiXDeazZNgc7HJqHL8AuPsRPEc6kNbU7AC7JJTmBdJtQXm3imy"
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
