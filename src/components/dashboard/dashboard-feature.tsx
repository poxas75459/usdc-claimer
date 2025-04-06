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
    "2bojJnX8iPqzwfzRsJDCJaSmey1qw39CrDibY2RqHLnRcBu77AWYc3Q95ZXBGjjStxVXG2UqSUyBS6cx5YV9ku4z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jfVqX1F2h3u7A3Gw1ozVApLRAauSwaXd8PaMmLxgtNUuHazH4HXHuKTTLmiGKgR1fBUYxXNCrJZwKH4w4Ebfzxu",
  "key1": "3cXJHRVvpRWZrJVHwExV3tjr1tjV9bvtZGYcNJP4xVG8sSnZyUBn65FgsCfgavSAYts3NtHMBX8WXTRiiavMbVtK",
  "key2": "3GzXFi3aM9YohotaYrG2iko5apZh8mqdikSHR3ptEVMmDfYZk4HkUGy3QWjTgRZt2t511FW9oyxQUd6iMGGgwWLr",
  "key3": "39h3dozehWvEexBoiNYebAs6JuWyUPcwR36vhub5EW6e5UQFHiVg5cukDbseZUTtkCLLQepMb4ZFkp9Xz9dzeRyi",
  "key4": "4YcoWNCYjkJqMgaw7ZrWQLSge6hpx9D5qJcVEstDFbFhDjzme4KuXsidQpyTqy3zY6EFb5jYa5EKab21MPB1fTJ2",
  "key5": "36GHV9bj68aCfnwUMYtfqjgWqD9XDDzSUG4Kh4TXV9CWFSaQeMPQ9RN6aswmDXL12S9nEBW6kNiGdQE9faSstJ8f",
  "key6": "2CHxr76kneCBxwziGfTDTW6h3mvE3cs7jVmoQLfFbMEVuKPTyk8CcRN8cf49sRNAnqHGcbQEHH8FK4htxesdB23W",
  "key7": "54faKuzEnsVC9nUYjsoVyAtJefqLK1m2oiQbnbRjBq3LFuFpktNM3nE12QcuhmSpViVzJoV2fcGy9MZXVePEfatj",
  "key8": "3Dvpp3BCbDT3Wq5wbNMhjHaNFN4BkR26n3e1QaFY5B9iuX9sdwDCLAenLcK1ohmpEbYeVcUfKv6TvqNM7yRDmrWu",
  "key9": "bDY31vsdyCfHod3C7tkpZ3MVT4Dg3UJT8zcFTbaEyPugczywE7Fx2T8gSNG3JYE1tSoxeYYSdUBgXenhqDkxdfT",
  "key10": "3JhowiaQPXnpz8BgWAd9PCYpd2Hbykf2E9Af3itPuaPsWxGwKkTr8KKEZNScecVRyrPqBwQmGCZrYQrc7J971CXC",
  "key11": "41pxZ6MxhRUkB11wRR83Dennx6TLNkCnCMJq6yUP4Lxb735HtSU5XpufVWexRMwidrjtbpwZA87i5hfMmAjPicNE",
  "key12": "2uA8mRqpRx7jmrEJsLwUPB3yz944UkGjPpmc43uF8MarbzKWUhT7mpYqR6cub3mr1niBMyXDCtnCLk8xSCy5rbaK",
  "key13": "2zhhcjivQqmUKWHf3qU4UBPaEEazfiHVgPmPYB6w7Mcq1UV6rYVBTV1fziCKszmFQpu6fRWhSTCDrTNETMbQpfZa",
  "key14": "2rD8r8N3Ddf8rFXRGx7qUkQmjSh6u3w59GccHi2fUaQwutRE1Ake7RNAGMkrGYZXa5fxV4TineFwaqnttkKCf9pd",
  "key15": "4xRXVTVdoyvFNmqiCvX6KfD5voxeU7ZAqRpA3TXorVsZroKMJWz9QG1TYFP1YEF9U9fsvJdDNVVh8r8kMS77qmr",
  "key16": "2NNhbEMuFXZqBegvH9aATKQkVre26NrP5DRmgBhkbJFN9qKAmfH6cXsNw595jFNi9eVFtjQLpj7ufTSy6EALqJbf",
  "key17": "3NGhnNyvqAFtjYoBQx8hyzgGfBXi1cA9uuJSJPiGWTukBCUvZw8Er4QiWcy72MN3RcYruK2ruKYenAVN5uZ8XTDm",
  "key18": "4aKg5rTsXHA9xyeYGyJFFNxzKLfX71yqArqpnNC9aintAmUZgdptSsizTNpxNDgNyk3keQp817ZgvR8dj3FUDhWU",
  "key19": "4XkDKER9m3RTzneFbuMRGRZ3rcXDnxdZBP1RhcwTrc5tffYFjs5rdB6dF1ML7Bvb4xyFc7tQkbtTUU5v2GTPfUtW",
  "key20": "2xps1V1ZUUxoapGFu5uc8e1wZQSHH8xuSYKM1pXVzrSuj2cXEeX2bHw9Pcdt6LcFR4pUor99RkNZsDpx4HEu8pJP",
  "key21": "An2pY8LvY7xTwbcAg4MoTS8LWQwaR7chGpgnGLr4RdmoDas1zD6wp6H51eZXWid95R9G3Fy63gaA4F9cAwF91Cs",
  "key22": "3gBWWTSUQ4Tv92ttwP3Ktjei9bub1AiV862jFDNvkAjdK6EFEiJQTghFZ2crdGdozM1PKnJx26j7oLdcRxKjnjB1",
  "key23": "2scsZfAfABs4hcWhNmrXkXZUS6pHbr6zXHxj3ThUr246zRYiy25BahMVTYWGRXaMJotrHz7ehyEdrR1K4FrNbNZG",
  "key24": "3kLYETVXUp7c9jRjzJGzWqVL4tvWJMnNBcxSXMExGEFqRbThp5fpYAAaMv33kDBsQycz14o5N4v7BsRHwQhQeB3V",
  "key25": "3tX82biQbXFafCBVhFEy43FBQD7NA4RYxFbsyJ1c8gDCnDsED1JwFR5qvwNhxCB9DnNpJYX3ZeZK2xCZQfNuQfkx",
  "key26": "Lzh6PPE86bUvU2e1TEoJTp59GnwBqn4AqoJnRB6ryn1jp8sNkXM4fYQ1LvSgFgC96FcY9bkyNkLc28jWfwkQKyx"
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
