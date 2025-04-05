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
    "5XYMctAWqfSo4Jp7hX7ACqSXS83bft72WefivBQbiRJ7nmzLp8kCq92DUGgaXdQe48hY43Xn9vjLU5QvF578bJzz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HpFPtci7JPwH6B5GvSyHcMw7CgdBboANE5cJC17m5occ5tZwuDMRc27MFFSw3NsW37naUo24HsGPpC46y2Ro1G",
  "key1": "C5FYAgdhLyBjEnt3Ky4ZEAaPzVhsEFEvRBqeDFKZPMQVySWQc4nrnESSUZ6TZPr1kTFs3n56KF9aFqGU6hrGRbJ",
  "key2": "iG2L2yaj8EXVsgHJNQx4jX2U6NgsQQ2d9uM7DQ6qwAhez8WExZyWuBu3F77Y3mi35yhWqEenuiqFPzDtfdfkv8k",
  "key3": "2dP7FvaEc6uo5EvDYXYjPZPysTanYEkcpu5xxEAam67zKcaJuoSSF4nzyGBpuNQ3rU4s8FZAnaSBXSn6Xmv3VXbM",
  "key4": "4MaXDSVn1unPvZocyu3syqQNvTRBq53rHHuvmKPdqhy5hxUGjpGW8q5RqQKp4YG8dxPGHnUGzj7GWAtqpyyT9oKV",
  "key5": "3oxgmNjDR4jJNwVyLp3RZJtTEWwYDJbvHJv5VkKCUVGgGzK3fKczTXUua8vWPJmtHQPueEeqSQiAn27PiKUGr1EJ",
  "key6": "3k4MqJ3HYnDWmhumsp6EBWDmmMefufej7zus8SQErxQdyF387kRDmzHMUKkizrHtQqLsm1M1xshmG5gxxXbEnZtw",
  "key7": "MJkjnjudzgopBeqbPBJVVXskDbt5HXpQ7sHMtzKc8QhcZicXQDAzMSzzUbNyo55bcuHQ1tEz1yZrwmdQv8Trc92",
  "key8": "5Lz1VDawx3HkpiTt82ei1366GNHw4iTt1dKfyjbajekcBJyY9W6yAkNjq8BY2jfe6jxibZsBZ1B9mRHGBkHLHvm9",
  "key9": "2U5xaR9HuUQ9zQzLmzvfAf8vsM83igadmgq5K3YN36LPLPLgPBHp18aMAGzcXagFeiSBzaiEwYKkTjeEwv8ad2Km",
  "key10": "Sg7T2RM4bwkCwDWXgGbcQxbn4z8maFUGqf5meUkyEyLookXQDsuG2EjYKQ5j3GaKXKEZU5SbzL8S7BCJuNT69qS",
  "key11": "2TQdRRwcp9HPWkrcWVL24oAxTi2dQ32X6PE98VibcoEbLCeZ9Gk4xXKc1ujBoZxrUncFv28R9XsC62x7GZRJgKSd",
  "key12": "4Hw9z1csyzUPi4r5oQfWLkz81rKYfdP18cBsNTfPjbjxFnrhkDAkBD8hHuYYmUZbCTGh22noNQaWak6oJKxLWH6p",
  "key13": "2jjA2ECvMT3t1FEvQ8XBmxRzJ4zeyq2jMobG2NjHpvWGRjAZwrfRxDGz87XezoV5N3THfdBeTjgLanMbCZpXoWtb",
  "key14": "4mMGSK6AtudrUwZ68oP58Xp5M3ydo5zab3w8ft6hpa3J3DktxgHViTgCHPfeFiicdxj3SYFZd7KTFB2ibgGrbJMD",
  "key15": "3vnxeDJkagNRG1bvKqyXRNvsZT81XvRv9PSE4Cie7wpEpJ8h6Dfk6gMWj4QQgUtyzFWoqNM2CD4BNYb3BuKbj4vE",
  "key16": "4NtfR1mZA3ZeC4JGjaWkhLxsxRsv8G9sYowEXJKWftgKk4bxLnjY5pZLQRYWuazXTMKi6RnLuhxiAW1vzS3cTYNu",
  "key17": "5aZynqt7CSASrLdktq4ifam3nYJu8f2EJLJ77po85xkzcPg6ihZGpPrcFXj213QEzyNxTHXYjgN44R5wMNffLRWZ",
  "key18": "21AHnmpEJm43712NQW5MKkv8LDpEXgoA1ewt9osvvi9cawSndrqX7RKajRW9UDGLdHRgkcihqi6nDCmBqoChZBv9",
  "key19": "4wHDSaeTK7WcAwirN9uKhJg6B1Pd79jwmYJ4u1tuyHYX52ueUobUQD8ktvWd8mTrefcocvH9ZgB8sqf1Wmeuc3rV",
  "key20": "3WG2wecwUt9iZRqXKk3W9RK1ayub6kyBCMLYe7r3cWufJDqh32WCPRj4aWztU828QZ17tbb2W36JgGiPYm8hydAk",
  "key21": "hmaNVBBSJ3eBemHCyPv546gFQsJtcdbipenoygM1G5HeFvjU6hymbfs87JNHHYLN799dX4YGj3WxF1Jjb7RJEaN",
  "key22": "61anL3TNYkShh5SCjh8V82MLzsroMbZYUCfXRod2nH2hK3eBPwXbHZWPtY1YP4Vz3NBiqfrTBfcziqoZy28RjHwr",
  "key23": "sXgzfuX4TVqT54mmePJpZzJsNx3CdrPvt2opM1j3wFVD9PUTCukxMxMpFVqB5TaeFeKBvhUa3p1BUXHcVZvqnaF",
  "key24": "5ambnmEqPLsDSoQjNThKgmRqQFMtwr3DW7FzoswBZcFWuyoFBnjsxzBqftra5iCMjLtJTjNSLw6HH7rHB84A8APM",
  "key25": "3mfygrQZ4aZZ79aX9VeRY6ejy3gjAFJnEYX7BPn2gBsKFj1SQmpyQTgwWqJH5NHKaGpvM4zKeSABwPbjpxCdRDKX",
  "key26": "2zdF6F2vqGtjX4BYNDzpTJQ8VxYptmgdPVVERb5CzQn3QofdysmGmaaVc3GUbVN63quQzVcrJzHfExe3YZwNuVmV",
  "key27": "2TuSQrM4mzyD2aSgtaqHguRrRdHfhsS5eJfiUxw7uK8G5RH4cGYUPv6b1trMZHHtfUxPu3ynaQopXw8uycLjdxnm",
  "key28": "2bk2nNN1MapfKZ8Tv24CFV9bFg2uQ7QLZc3Z7SmjZMBLkCfEDuhjFpfzf4bG34KpU3d45wZNRqVyceMYptwN9hgw",
  "key29": "3AjdEdhCx6uWLwr33Emn7xgmgCssoht3dNzs225ehCGoyLaDryTEQwGYZCmHw1Aa6VQezJEJEAvWuV7ZEGnoBygG",
  "key30": "2R8T9MthYp4SoWXcNZQu2qxH82RSpKr7pt3qYPbSE836dkfsxiAMc6hVXSva1SDobEyNFab9BL847hPbykU2YYgt",
  "key31": "2kJNJKW6PCtK9n4aVkZg4DFFTb8HxMqeZoezaUnR3smYTEFxEohHR4XnFDxagU3onWdsA7oyZd6gtq1LP1uFzSrV",
  "key32": "62yA47hkNdB8tx9A2wkxRFNjVAjQcjvQvAmS2X5sEiGABDx9AcydVnimA8ZyamcwjJusK9DxA6fLkA1BRMtjua3b"
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
