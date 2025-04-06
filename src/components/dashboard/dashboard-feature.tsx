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
    "5bmaHwGhyg5qNDetNMoRePNuEPPaSwPW5FNXDctmHePqhGP8TCFZviptguxGu6JivnLQkXjC7t8Rosnf1erZkW6q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b8FhVy5KhiNyopFiFLbkeXwD2GkLWinBVMzdNCTvmDWYvdzdL6ZxSw8Tfez65kdVpni6ogKpzb9xbsumgH83rZH",
  "key1": "27CH96w6fRoLx2gcaohSraT7ZJcwiPxTxMw85C4N5TNTqTj7KwryXgYPgiHszbb2TgLt99Nh556wTsJ4WjC6MdXP",
  "key2": "5xFei78QbzkyiLQSpQqi8BuB4JvKQYbXdUZXvuhiH4b83TMVEFDUf8Lp92pTkasiDVVrfenerNCWQAcvmvKRohAE",
  "key3": "3S81HPyxemuQMDSzK5b7GK12gpA8AduH1yaVQY5cXiLUMyDg6tXEv4mvXDuJyMRxmuQM2k2LeW9SVXvKFzbBLRsr",
  "key4": "3Gt95JKreTWLj4g33W3A9XwuTBc7Usap13wQVBrLUgDpDgswNUMN24JLCYnXAWZUgECwTgyaUk98HmcZkEf6ubqi",
  "key5": "2SyBZ1ATRAuqgNJ6X7ivJF8QB1gSwUT4usJ63VY8nwgGzrEgE73uEvWo5A4AkoFDQUB9YsadG5UYQ5KGwQABgP5h",
  "key6": "3LfxCRkjz6TsWSH3jCDYcVZyan3y31Wmnr3VDiKvZi8Q4Bo4GXkt6z47DLiquYTd8hFbLnXQVEo9rSAzLKJZxMWG",
  "key7": "RUAjDMik45AVJedz4NAc5453xcdLnJ7PngVNJ1Dzdjc5epwsNNCWHCiLMjoof5troqRz8HjUFjdBdsiHcYPkWwu",
  "key8": "2YmFJ5PeryN1vhvpJf941yoqKkCcgrg3A3raBToe3Nqvbq5LQTdiiCLxComM47Uo5V81dWEEx5T8V5b3aLRH86Ti",
  "key9": "4HCuSeTRdrz935131yBhvKwZQn57NcoERRXniUKp19mCHX96QCyGcYDvf5HRj9CDvfHBK1ngBLKCXaXpByLms3w4",
  "key10": "3hvDxjAMGwNbJ4H8JCN2gShu66SwjepW2CLp9PLzMjR4E841WmwMdGQQKHHK5UUKiGxvbEDTHpMxrDHTGdGbaA8Y",
  "key11": "38Zgk3t4bp737nwENN3wmN8AtuGvp7j1uwNG1j58ZfAXKY9bzfHUq4yqRutux7VP949QZ5maF6Ct27FNVFqC2yLq",
  "key12": "2iXWL8v4SA16hh45oKuZ7vZujyRybfjr3JNURBZP3AcT4nkwyi9Xw4kNXxKRQLrY9EFtTmZFn94TQWAtv6ErrxXA",
  "key13": "3ckT4Mjb3h9jnBJMA47SPNEosa31pz5JXKQjmFKXjxaNxpUsuZds7gfghgsLhaCkEYfETF5BQcLpXkVYd7LJET1T",
  "key14": "3AQk6KVghW8KC5YXeXzXPwQpbCYbLiDZBtk5DZCz99uaR4shR2kFwT1sbwzUDT4KeVHNvRsnb51giuizykWuZMTN",
  "key15": "3WXm7NfySLCayPXpzzzdh6nYfGEPmuJZNSqfuSkDMzTpLE2L2tXVbV6WhoJXnjDRZXgWcAeoPMTpryrUhVQmzeZc",
  "key16": "48nnePNfsWjMF99NSaNmm8mz4TsaRm8JQAcBCW3sytkmj6ppSeddSYBi6JxPYR6vG52pWRNU7bdkPRv4QoPbXHkd",
  "key17": "5ZnNuPWpWGqDtqjtEHaWLsPfRxVJNXcwzShdWMthFsB4rdrEXfjnNAf3b1cnAqdkJrpzqw9A4a5b4Z1vvc8DpJXs",
  "key18": "ryzT2urrxkHX2Egc27H5mgdH5x8vmJ7gSMV5kdjjKXgFvtYA5G9dQRXn4dnUKxAJB13x2MnRybp6Dkz43FxStkS",
  "key19": "5mZDFwmFwaZ14Zos8NmFe4ux1Hsf9bzNJWHU7s6BmRn4vB1gmx9QnK7Fh9kBxNbQeZCK8gJBbcyhTgTkj7PhrNNk",
  "key20": "32S1sTjkM9EfRrURrFppj5eRU3NvLh41b8zUVV6cQ9EzBuHr5m8nx641VuatTwpqrxbRDABAj7xwCpQJSG2s3pKP",
  "key21": "4zt7ZVo8JLaQbpPcPvjCZYMGZdjB7WTD7Hu68Ze5fxuaN9FX8Jj26sDUogGfCwDM6CrfV6uek9PFqd3m6hLxkzCK",
  "key22": "2hF1r1NgNqNYKNGDm3PXXoyebJEtj5bn6ApDWm4c2fEmEFrDUXXLnpXr3jGCoNnowmV6s9TmeJRy7nVBhZD5sniT",
  "key23": "5TQmpRrZktU23WzWH8YPvy1YVV4zgkstcz5fDcUixH1Zv2c3fVTVQmuDKBv8XJuG4XxgNpwQPf5Czcbb77TYvzhu",
  "key24": "HathXnEq5TgSv6dBd2r18anicxssPopeToY9A6NCX1hc9bwtvEpJeJxZFm6g7wR58FF4P8tdnCRUZLG83mmozaG",
  "key25": "2wfJw4kYfHzmL8KzkNiUrBZfkL5PHQRWhZSY6MEnikkAVF2m3EopFrt5Y1J45c5yJDBb2UJwrBXVwpAND1zTERGT",
  "key26": "2eouefDr74BGVmvA65nmfoV9nzXBx7RuYmtdxfusvvrqfqrGgVRTjg6qZtnnku1fFc7Ev8p1K6W5ZFCbpBLQBHtk",
  "key27": "T7qccJjd3F57HaFnSqiwUhrYPm45HEPUtGUMJi3hkkNAPKwbLPKHv1e9HuGECmFcB5SB1JJxWUCFCvJ1DPv8uKU",
  "key28": "4jRG6gXxYf5199MR8SMrSHckjAuwoqSPyb6jHM37FRR6kDPVDjQYpyeKezPyDDTaRQ3Y9ReqfuQYM5BnTYjkJeKa",
  "key29": "3X7ciLLk22wUJ3CEuqxrdSTSpzSeCvAe6K6YrkNnNF7jzFNBVRCBqyQvyqDFV6uEEqgXttCdR1fjsu3EC1nWcRaN",
  "key30": "2zrkc4dvoeN78LmTCpkMVnfQdhXbtCGELekV9Dy46p5XRmPqiKmYXewikhATGTkKs4fSAM84A9EGe8RGsk115SHJ",
  "key31": "4wVeSuDedE6eiHqnVbKZGbzyGDUSVGxNyFKZhDcZC8yyUmk8QEVEWLLdrxWXfgpZL3dmjuVDMA4M8MRu5cZn3U33",
  "key32": "2jPTm52ZN3gqoNFZaT6Z1RByBPsaCWrhTkJGE2RYs6tTvSC9Ne5sjyzFf2uT9kuuQKiyweehvuicUyUd2vo5HcLm",
  "key33": "623YFcbbeWv5muuhheHWSG4e41Mw5AiWnjdY546egXCUtzuk2s3Wujxns1G5HpmfHguWaRAWatGuu9cN9HLFG6Hj",
  "key34": "2scZnwnQrVjABpkJdMve8hffRpbPYzuU6X1w4Di2g1u7Zg1i8iTA5bkMJu7c4CAG376eJNJfMbox2RiqupL98WcR",
  "key35": "5NQkgFMMqvCaJEjTgt6MjyaWvCknxXBjnvZiv8fQmE721jN7NZWZ9ivYBUfSEvwuT4VPv6APTV8CUphjyvrLhveL",
  "key36": "52QSj8ZspPyATAJ3roGfBNvAH4TMHQKk3EhynDBzoxqTKzNDdu6ZyKJp3wAicif3eZUuG73tcPsH8SviTFMNRmZy",
  "key37": "2vC7c1PDUdDLC2DqWCCT7aRNR3neUfogmD5pdJ6Y4Nk2tAhA55ueihM3VEmoy7pBPGKhjnufSd8b7MvxqpgnXSJx",
  "key38": "3GcJJuth7JArpy2sLXaUrKrFfC2F5TQ95cojDxBtLd8UNhpJ77EC1Jm7qjCKHxd1Sr3PB1vqViTp7UwoJy8rubSW",
  "key39": "mAY3gpA2CzE21JxaqWSevJJGkG9iu1LyThaRjwJw5kCbUGcjuzBW4n4MBrpx7isW6woYeK5PPNKfqyCuFTZcZQt"
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
