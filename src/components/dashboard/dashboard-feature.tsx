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
    "4WCPHTCgajPYU3N94wWAdeqT8SVTVVy2GEcq1x5gfPukdf34biFvrpUj8g3myMtK5tKifDC5B97DP7XsZDLQNHTu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t3r7qXv3DBEmyv5A4rVGsCE3nQbFRC8cxEKDiAKq43YyDhpRrGKsQmkgZ91Gysb9S2WSSQ2rSFNyYGkT7kBhwh5",
  "key1": "61osshvwSrqJy9nihFFMWAgLxW4oWHTUmfqjkyrc84n3gFM9AzkdpM8AmKSheqfnCsN8om6k9aXqPytsU9DmQbX8",
  "key2": "5UxvpsgM8gyL4tShVHF8B9gU3SW1yVzJDNTFjAmeNZTkKZAiQ4iVmMTMkvKA4JcxSu1SUxAvskvdCuPcUL68tKQR",
  "key3": "3EuNXnbw2YnbHgoHS7MSvqobVuXJVeNiyDaiL75zw5gGFqPzHFjTuFFFzqJViD3xXfGmRRA7NNp6MTaAe8xgxeMz",
  "key4": "EsFN77mHHPB83j7uTWbzrSscCF2JEokn1Bnb7Ch1uHXsHUb8vfop22GdxCFcpFVEZ9ZaKzUbCqb5VVnZyVfgLT3",
  "key5": "2r71fuJFkA8AVRy7Ls2mMvwnVCJSVXUc4QNiWpU2TZiGnsZNGnuTpUFKtcfbPNfcub58bnzvQgGW1BAmTPoQ3k8e",
  "key6": "3Fv9w1usZguCcvrxReLG58NQPt8bxUUvLZohN8zW5m6N5Yz39g2cqjbgEWVDFNDDZJAtmP2MbmxCW4uiZwfzu1zX",
  "key7": "4bc1EmCn13625gTV5m2B69QRHL9jJMrZ6vD7kjkuwKQGq4fQXFXYJuke2fk7WPVeZ6kSPSqJuAHQKTBGCfZQ4aae",
  "key8": "jbMkYHuLnNGur92sPRZZk2PRpBrKmPp8ARy9AQSwaXu5WAkTbqaz2n8e9XkNRisMisrNzyQ6UZBmBRcHhFNpFEx",
  "key9": "5QyFhAV8EeZecWRKzARyajv49WVrJPpYhsUyv9oLbCW47YkvHJjh2ELbE89tU4vjFdyfSXoCTPmLMDoUYGuyvkHR",
  "key10": "2eM1cJRYHkzUWeS8rRSiL7kNwPViDtLZY3YwxNLcE4XVRc6XSatvonypisz5nnHRiuuaiZKjVYjfLpUbk1zYcpub",
  "key11": "36xYpfFm8opLZSHZ1mFjcaptqoWEAd4FZkNB3qHRCYgTXWvXdrT8cciiQz96Rp9eK7rz1vppxwubQxxpQTSEGN75",
  "key12": "4rBS5WM5rsACwPRmQcyawnDjqoSMGxZEDLaFFugYK4McRLgkwHFiwUTN6o8q82WhQFqJsPEj7D3zdi9EmqZ9PWsH",
  "key13": "3m4tk9ALpbjkZx4FXQDAWo4wTCkVsqye4xMxdt6JcJ8rzUpfLnAhtPuHM9ctfTMt69gFGRdYXjvs8z4rnWQyzJa3",
  "key14": "5GcLYJF1mnyup6pNJh9S2zzsitVoiWyJ5wgG2VqRnpnwVwfL5J4s5382JLtJnimsUYnXyLP6X16z6CdP5WfiBWnB",
  "key15": "3vjGDYkPNoHvXpYUFeWrJB3r6ZwJ635EbQPpirMup24NghN3vpzWK56KHjSCoecibiWBEZHsSxdN9VT1bDEmAaEi",
  "key16": "2NoxCRkuTQrCp7rsFUGbgc7Asdo6fcnmYf2ohJ3knsC1sTV3b9Yj3vTehDsbubm3JUqzZmFcSiKVY5c3nTcGaJRn",
  "key17": "J7CaJbA1wL7aYJ8EgFfEUfwudNhk7jPn74UKX1uCdJUrXds6hczexD8wLY8Qreow7ax66anyB4x3ohfY47MQCTS",
  "key18": "k1peysAx6Z8PNfTx33Qyjfvevukn2W2bhogwNDe29687AdzJzLsdPVJWgGtk3NPgVJkbygwXTDQBsRBoT78ia6t",
  "key19": "31KV65pYKtC3TbXnsX1UKveydZcgjEt5DAZxU2HvTACrYtKN6U7u7m39JUrCY5VoT3Nrxjuh9apa8nNQSiUWMq4e",
  "key20": "5qRfRsPh5c8H7uTwHNbWGFtyynGo9TxdmX5aCLvboUDTaUWfzhdLapQ2e44CBVzfzVVdHbrhYdu9zCcZS9Pkx31n",
  "key21": "52Wis5RVUd5BVwKjc6kbfbomGo7K4WsnRHqWQS1fi6y44V2TS5XFKjEemRapu42WFVUEn3nJvd8hBxJdBFcCJmEH",
  "key22": "Lpk8d3C2NKkFnYvDZaqAE3fTgekrMMWbBqk5RkThCkD5cmhyJT1SALBT7K3E3kCnUr49GBSP52D7GBXRqk5QD9y",
  "key23": "55HMNPr9UpwLdq6z5PqMXKSc3PRUSzda4xYoc55TGvfas6Xoffb6Mi4AWFiU82wPV1K82LaMBajocrHcdKhGzK4D",
  "key24": "3a3hV93Z5e8ubHG5oZWn6fZXuEYDNduLuov9vMwApTmYTq8mWdV2UWNn3CWXqzB2YfTSFxPNZfBza3AipHswdn1x",
  "key25": "2znMLyRd7yytxKA3gC1ruP7vx3xKhLjUpMyap4dUL5H4VFC8GG18rP4v52DdZkyFyp4nzqzit4wMtFTp7iEw8saU",
  "key26": "28pFE9N7k1goV65L1JBZFWY2tr41qE3g5qF1YTH9jLu2judpwafgKdvNpFLACRKhYw5QBuwrWnAtXs1VP2fGEyKp",
  "key27": "9Ltdc5SzQX7AkjisLVYczSXtEXMpL7r3Ee11mdbzNCg7jPskQi6iDKnd5GP1NGT5FwbNKNshKcVsQmDVrxef7b1",
  "key28": "3YyU5PTd4TDdGrtgj5syZCyFF9xSvo5Q3TBDGR7Gs3jLa3FGBdc74gEEHqSSuouA7g8g5WhHexrSYmrrZFkZNvCw",
  "key29": "5JuiYbxVXKMkC1HXFHqUWqHMmrie5xNpe6QpWPSKYV95FkvW3BJLhM19QXwgyNTeiuTQwjUdVheQsSQWuaZrLGDf",
  "key30": "554LB3XCrm4WmxGgmxKXNyRVVr2eVoJTQCbftJ2uKsDEjpwQcnjaFb8D5d9G45oJcy6QEdnR1ogaDYry7ztsbbQX",
  "key31": "4Zj2iiTiXc5AEQLyQnoGV7ALT3WE43v3HUWsgRXLKxGunU8N3pw67YT8w9LesDr5pwwgyzcYswhRjYCG61tT8PSW",
  "key32": "4pF1V1ueQ3en4QPaHFyjPjLcFKMDLvY6GoxSneMve9SMehE8vetEQcienbNSxmKh4YuC7MiqVcSLPoKx2YvHxQ1n",
  "key33": "H4oyQzsHohvfnbkNJ6ue7nwV9cmqLm5eyAjdXvP1ToF3o1QainEaFPFdj4kXXrEq2Kgt19GBsvf1qf9qj4kLvku",
  "key34": "3efmoq1KASSScUeb1LGZk9Z88Q5sJqnjNHEdjFv6NqCAisaxJfXiCNt9JFcFNDNiuTBroNJYSFELJMxJ7HyZ5Soq",
  "key35": "5d6jLsnPinLxpk2RRs3Y9yoAUrWZeV7CMbHk7ZwAQAhqyRPQuxf2BU6FjAuMSwbkMvTRL1gAu8wa3mXaJCKZ1wmM",
  "key36": "2wRALuMo8LVeyqUrMnZ5ZsNEHBmEyTNUTsauczARqE7dV2C5Z6vKnnKk9sS2QK1nKBdCkVLjmvac2aHAXDGC9ZZd",
  "key37": "3mQauspYHKpdwvJ4f1cLPKRuqUZYY2DTPTJhZ4uCwjHxEC2GFZfvaeWomC5yLTNsQzR5kEUgLdEE8c8qTC8BGTLB",
  "key38": "5TxpUzL2AZqcVPYME96cBttdnXPQTJ3MCYqqUTvJe5dhHLNGSux5S26QqaGvgSZoKncrWxrzbUSvZ6iRVnRqKpws",
  "key39": "3pWUtdRCgt4WLCf8fpPx7ASAQYaFFbppndHtUu68vCSrdLWJXqhw4AwqDiWithKij7HvoG7zepfZmKCZAcGyaHpu",
  "key40": "13dBnmj3Jphsmx2M6ZXkYyt1PaBjfvCYMwR9mBNuogGxzNScSCiLygmj64LUHM1KGqe52MyR3NFijdFfWaUU3wH",
  "key41": "4PXvzYr1Qfks5szGffsbqWxNgpRWUbnD5MpAEhUmoB12FjKk8nRJqvB6gHfGwncFDkq9p9VtM3WPo7wirJMkb9MX",
  "key42": "4UjR3h1wxXLBCRX6pBpWE3tjsQQtjnFRCx65oFwyDBjBUpeGcWVLTK6BGHVXZ7BPGQtADdF3vMTvQCvYdV4ohfM",
  "key43": "57DxBgmjeAZXZqf7QYz4kQbGyhdkmLT6MX8GjhbNxGTy4v2N9sc7pHvJeMNMon7jH3RfTv9srb3gTx1Sz6ajucsT",
  "key44": "Pq7TUpxAhXLrV7d3PMwLnVrvqHAgVc1R1mzrgZMMFcVCn7XPmRbRh8HPsjzqnTXGFej4poEbDeE39ApNxuj98KA"
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
