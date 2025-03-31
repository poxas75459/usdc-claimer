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
    "sm9vxH58nAGFpub3Qn7Rw785SPii7SkzFuFSSTsr22pGbeWusoy5VwMq6VD9MCs7HJrW2i3yoPPGqUHtWb3sr5Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mpVHcUDL4cez3wHT8wR5iXEysJqmpJoyAQpyf13N83QAvhvhMCiVD36p6dfdM2yA9yBSz1sbySuYpqcvAL1p6dS",
  "key1": "3RRUpVhw1drwL4WoN7Ha1Y7fEun3Cj7weVqhiTG9KHzPGEZ8EZPgdrFjdprprAMkgcD7KJfqgH2XNBZBcWuMfuuy",
  "key2": "37QcG51Zfocn7TAXXpnJsniHqAxYXC8wUUcjSQcc8hhZRxNcB9XuiVHRC6QfN7gSHzNhhyB4o64Cw3SwwSysFNR3",
  "key3": "4mtCgY1X57CiCBm9SQd9FDK28G2MagsXKD64wrS2fGyuLDnPAU42JJno9uKQrVGSWBCtmG8Zzc5MCtHdzNKFVp5K",
  "key4": "5JZTdy29vYHKi8cLo8RE7SNTPbBEZa4i5yTjExDGq2Cpfo53jQ1rMJKcmedM1SArppwXD1Xm2XJ3CUWaUgsFk4Td",
  "key5": "5AwTfQtsjsafJ3QMAYA9n4iTeXhRES6x1R2zdGJrSphrj8AdSHTzKiqLjW47p9J6cf8JjgrgASXfC37wUN6thYsB",
  "key6": "2CXsetxsFzPrX6GVFK9pq1W8fv919h5nSxMAenkkkGVmKqLD4S8e6YjUZsUaidUDRYRhcWaazYXSbn7YaNefkv2A",
  "key7": "5d9ApbWyyWvwEri6FxTzyCZ96Vc6Vgc1LRnDRXFx3VRFP5fapE39k1JtLyyDQmrXw7vxzAPbmkN8rphxsvPRd9Es",
  "key8": "424nKRzEx8uQbccVeY76hQ4z7tLJWscT5BBKnSJ32QQLWmTKp6ncmeydrmgjVY9ncX9en5ccZodAos7gf2xNhaFY",
  "key9": "3Dp1BC5fSHE1CbYYqrhqmuEmU2ux6HS4adB5hBYFEygYMsb61o9NeSdJMiZzAdQTFS9ChcPkEps81PzHGHMCCECH",
  "key10": "5nm33EQwWLXdcvZKmbKYDaX5W1L2ivBZaphrs2HtkNLYkJZ27Ph6U9UJ6kcEv6T5iwwGmKeAepFnRHXZPUMxwYQJ",
  "key11": "UyBowwx1Ua5nkY9XYcRXLBgww9BCoDYnvdEUo7PuvCTtKHd2b6UAXufFJXW8aYhEbjKfifaBQrjJmfZFHUg4A46",
  "key12": "4Ydk6wW92qjNXKbVLA3QYPvS1v3VGcmr7BiEtefbqVkinBAtyLeRkS8a7PS96mkr2TapGwymW7fckPDF9mVeBDtC",
  "key13": "kDT3ntXEF25ZLatMoi8WZMZXFjSmXLGuBUcENqUXsMcyo1h1o3ZbgA9ycYd7sqEUwQYiUWpbq1oWswRfuSWT2EC",
  "key14": "4jLk2EG5ggNH4ampCyuG5bSk4Mf2caAKAmVwuzFzTujtdyprk8mx6KckTZYBLEJ1qrjLQKx7S6qXrQz2v5oKoz8h",
  "key15": "4oU5SuAgtJigy79XwPoTctUfZirXR1LiRomeuU5UeKgrKoCrAvs8Qk9v8reJrXUtWRYJnnfx967upASiyvKXErSQ",
  "key16": "5ZBtza6VxYLPZaSQWF93pWPJsUX2XKtCyd5NTPZcFQpqS7dkVtXxUvqmQUA5tmd67hYNec5j2RF6P956YZm5tUbP",
  "key17": "5PHr4bo9DEvXuQPJVm6oURUaSS2wpvnt3esnjnDYqNXxaCUrXmBPpexA1Lpyc12uBvaesiFz1yauGZSJ6JEgcsv4",
  "key18": "4EgY9m1HR6sXPvKr2iqiKnoGgEVieZAZecpa6tyRn3hGMxJJay4YZ3gjBFWwapXSwo6HbuqCQUEJfwKhiWbJv7tv",
  "key19": "2Jw2kNnkgJ3JvwpYu2rKwsZqAsWJPPudZfFUh5LFzrxiLYZnxXZW2nbpT9MfPX4uTGusZWxqAmMUQEh1QKEQsCWf",
  "key20": "5rYpWXLgQVzN9CsknTnZAgaFcqa6TXu3RqZ8ZW8DoyngRbWWGfKosGpqzt3urVfhzhhbLreXskppCAAz6AuBMv3e",
  "key21": "evq6fSEb2u5yMjqfPYJ6e7RsxJrMtCj7yZ38yEHbrdMDy7jfRANrxXByxmbcm4fJSQPEtvD589bjUfD6MXfJFM2",
  "key22": "2XvM72DaXLh1ZxhSXwTkebvFJHwg3dwMQddXXr1wGkrfYLxChz82T4dGeZnBFV5hYN2VCDUJkfZVV3hotrj6EqD9",
  "key23": "ypoyQr2nVVQ35C93CVoEtviL88eb1sX4uZNqfciRMmYxmqvHuQ6z7qcn8ykwMnVZ9yoi884XhAnEpPBrVrVtnaC",
  "key24": "3aysZqE1DkYjCcHfmh8sfTL9hygun9iCRNJaAs4YBpayWVnkMhngcX4ZFJ5tAWQnqCBH9sg5f7kUA4JjTFi2rKRv",
  "key25": "jogCxsLjJiMzDAbeatnUqs97hQdyG8ZDpEB4u7pARM8q4pkKbDYzuZaxZfHdDU2EnTmYpXAsNMG5zrmPmrTcGA3",
  "key26": "3Wf2uNwjMFGa46R8cZwT4NUZyPwffXZdGECDP7hMkC1vwCTvEtD8Jg7uLX3F82KGuYLndfJmfkqpgHarZ6DJF4jA",
  "key27": "57F5Ya7SUChJPg6zdMBZ6ZPzAsqBbJGw5KsAgstc8oc9p463yoTd5Z2HTuKLoEEsMN4zwVDicvf13h4xTvGthXej"
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
