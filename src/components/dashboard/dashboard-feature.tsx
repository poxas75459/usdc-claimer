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
    "4cMf38zupW8CEakmdTZHrbiFtWpxv7dnrRyjhQ2nz1Khva4kHPPGASAuCm7WXu8be8hKQey8BEVTs6tkqeu5azyv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SVEaZrihg2LAKh2MRNLZuG5qXL7gXe2cRASLEm5KCfr6fu28CGfNTkYbV9ZinvdAcr8ofDmn3Utm2WwPLvwNv6L",
  "key1": "2JbckYx7An21SZorBSDJuhXZhLnxbryrqMLXWpjR2Cd4EpZdU7Fq8UVxUfwywLejvu3kKDTs8WwDxJv22iPYkBZo",
  "key2": "5DABX7ruSk14yGLRVmY3HqR38nUi4oeZtbxCKEaHVnh6AYG1EnbTQsbncvGXesR6HpSPngKzbVJbvCA7a2YCe4zf",
  "key3": "4UEAnE7Evbw43cHEK8fCjJ9QAuErFnYneu9QGVfgyF8aHdPYFo2a1BXLNnsuafrLJxUnrKsDNVpmMJQ2241B6XVW",
  "key4": "2ayb1MW921TroLcR6aygBwpH8D8KKWKn4bohwt2tA7go9gLHxKJWQhu1WrRe5re4H2MtP8u6SnAaUuBtPYXeZn8L",
  "key5": "5mtM4rGE8wpZRdzSVgYeLh4xuikkwmJF2FSumckkNTabYKqvsHSiTLm4jyU3NjfCNRivz9TiTas2KpHP4HHzXYFz",
  "key6": "xUGwWbauwaSx1Mfw4d4CKbK86VVBoGwyE8rLuuJaK6KBBZani56S1D4HupBNpwv9NLDcGLNPsYEJK6Vd38pSLQ4",
  "key7": "1VaoLQR6jrM7fJQZZGHFd2urjFCbwTxm3mV8yJD9qSCYbo7qg7NB6fe7KVu1eKHzZx35NwhvReBD9tsPVhWyVAW",
  "key8": "PLQeDqBC1gXHi494vxEacpNXq9sJKQSEwHcbhMpd4oSjTrSZBpAAvRxpa53J3UPXDvHW18JWXJSNvaUNHS2W9aP",
  "key9": "2571hxVco5fGB5eSxuBAPhz4nAKUNh4BJGBq9ar7aaUkwDPe1jksWbk2rHrunSctXyLaefAq6xiuSqrvk2Xn1mb5",
  "key10": "3da8yieMXyM3myNdnRN257eWEJgGG1yr8tSJtKxTyZWmXXmHTeqPEPMopWXdqNhrrDsbnXAvawvVkv8RtSSEaqjU",
  "key11": "MKXrAZdzwkUf8r6HRM72y93tuCEW1C8BpwPUuoBn9LUbcjWwB8rP5H2UaACcyDsr1DohvbwvAxTZWk5GNBdJF1c",
  "key12": "5gV1UPNDJP2gS4nuaEEtvGD76RjPjhB1hLtGFXvd29TM7jfTgPg5w1gX7FKmPPNbooqi5uWH8uQvVSR834TdU6sZ",
  "key13": "2SExByuxNNY8jMJ9QJtUiKQZGrEHoeD4sMPbD1HoqwYkXzPkA6w7JqwtNa9dAyVo1MhE4NWdAAzYbAG9BtMztxfs",
  "key14": "CZoWEYFGzahmWG5gqau3Kcjor3X4yrE6yArCatof3npQhCwaaMFx6gdQy3jyBkyzHb8Ur9d4JaNZujSe31amyNq",
  "key15": "44CG6uRwP2xRtVgxzjiZPEAf87nygHMZWua2YiciwXj9fgsTPW1WGnp6cMYEsV7c8NHAjcNpFCTWqqrWs7ZHyXM5",
  "key16": "fRv7uEezRLduC3iFjMD7acrXXZDP4TZZUVHcrySZosVPL4BhCRMbqB91p8jVppvmjFamKLhRDeCZDByUJdGnjCu",
  "key17": "1BmhnTS7cR3HEGrMZzYeWTR7rLUn2ibnrSKgrqafASZCiNLvBHKisM1mCjuEwaSLXc86A8EGk5YxS9PToHNn4GV",
  "key18": "5t87gCYJ4Y6HWNYubgNSbCna8fYX8k2Hxo8VTncNVxwGKuGwy9bHXrZMaVpXKZccVkRbTHfRuA4zeU2QQx7xQhDL",
  "key19": "5pUNn6v5iaf3d56Vfy7tSJPZHd9Swo3V4LxMDkRbMGdEsYiCGurz2czC1c59e8MhpYrw1NEwXJ6ryBEHPocqFULg",
  "key20": "3Xet5yb3JAe7L1R7uug6D139mcnenhTrvQCewrSDj6StSQ2qhmiwkhNm1C1sHQTbD3iCs7yXQ33Gt7V6S1HdAAtY",
  "key21": "5MXJZWaN64pgdtaP9KSEnD9s3utg1931hUYH8q3ocKJPMHJYd9VvY9CaZDVHLq3v4qDDLopxWYCkPZeaXoDqeY9a",
  "key22": "5n1i2xgfWNSQDiHJHLdQtRFCcoHkqDhWtjm635SHeRzXg3yJNHk8Jf4KjS9zYAFwy9tZE4beinJRP5q5T6VJP4cn",
  "key23": "2PtKbX1gMm6PJwWV31pCJRENHfzX5DtH9cZTqMzjiuc9hWiKPUzCSh4k5AJvvuowtdZBfRtdgzFFcJuxt3UMvZ13",
  "key24": "5F51b53pnr8Dw89qXbL3NC8NPxZFzwyc223gfiqFzD2k7iPe5siauShC2YU2iPTY6J5pj7BkkAsmuCC9s68qnvcL",
  "key25": "ar7ahncvurf1a6hj7hN44u6mCwJppP26gaaTEXQyjMT3rj3kMgVs4m4G1eBEh1HDc9ryqnyJz34ehyoifVDVids",
  "key26": "4cduk79whBF2g81afqGStDgxFPE3XCeg93nm6WoYau78hsFnK6DpLfLCxnJ5sn2RZdMh53UcY7pnmfNjAHhqp2Kh",
  "key27": "3PhmebbWdh5KYEbXaA4GZRFN3eaz1t73wrTuJ2CiUySdkt2xZS7YL3TQzm8RTqd8DvCfoDkFxnjVBjyDhTwfWCAC",
  "key28": "2vAYwfGWjBwzzK3MRmwUGamqZW314Y4Kz9y27G9Y2iW6z8uBUfQjfhRsZBfXJXTee3Y7m5Yy9EtN4w8HEDjjXEXM",
  "key29": "5GXHa2688WC3iXk4WNzxTMebVNa74EvM5BU5VUJtEQZiUeNjHQ2nXp86J8d3FgvMFK9up1tZxGZTpsnyvw9uoCPu",
  "key30": "59bPC1c5rHAqs2dZdrGfe3qvtYGRNyE3NBoncxPQBVt5haWQgq2FHGRT3kuKh8tympQmPRp3TRfNkiZ9wJD7ikpd",
  "key31": "5rAWmnEFAA2vm28gKXqwdhrzza8n4J1XKFGRvWbwK2RG7KtKCdU6MJNog95oYM13zkQZz4NsSdSRbCG3sKq4Kgxp",
  "key32": "5JuUqgPSHDF6BmcvJmq77G9de2fcrW6urffrZ1MJiSYkWXKut791L3q29jcVR5sqAkiUcczC1N5qnA216HhXMhSu",
  "key33": "39BtKZAYSJfPb2BbMwasecQ363Mq4LBrZPFhZAjzozQzCAfMJkhkWgusGukmkrPPC3Z6dUm5imJpQtavmpD32gwc",
  "key34": "5gDZXB277bpQzmeDWXM4Kjzj2whSNCcs5jm4vv2N8XimiZJMRwwZp9XwDZ8YPn59BCDu58qs6Bja8csGys8taLk9",
  "key35": "2Ne5QVKRYEfnuDpFrxAobDfYv43f14WPAXcwhDeKGVb7T4jGYVXpicUdmigr9MAzB9qtTaph6T6djT1N4tjwEp5a",
  "key36": "5RMbgEYZxroCVw37n714YonypXnoyFwtiSzNv1ey44qd2GvqbPvvRz7J8xqiMsyJfQmi8WkRm8LaZp5caCyytQZ6",
  "key37": "4WaddfF4A2SrnUhqktzYQ7g5TMKPj38Q12Jv95eT9vfEJAGDhGQrncpP3NGTGcna6DZXKEGW7LhdoETH5vEuRZdK"
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
