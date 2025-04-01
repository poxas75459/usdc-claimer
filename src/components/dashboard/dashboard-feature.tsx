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
    "37nzjPCMMhpbLEdZNqWp66hHJJptBAW3NCFR5aBGibTcwfRx5qBPAgc6NKDkGnWb9WxBYFmKxFuDESZ3TzBrhthu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RfjeFTpXrqDmYXjA7wYd8hnc8mfgXnpJAD439iYisksVHAxvQfju5x4XXgvvHEUK3WxeJC1YhQQ9S2bqr4VmZq3",
  "key1": "47a52nM3Qpju7dZs1wfbqMMS1oDGfsmn2euh3EjVQKEznh8ShYKvxeAWyZvi2bjUv5ZGQHsxt1mBuspdtFap3RDs",
  "key2": "3nzruzTmyEcBnDk8AbrinohR8UvKEwBojcRaBhjavGinabECUfuEvizf2dJSNgY2ibnQgWDUitsr6t6EXbCyJmnw",
  "key3": "87RHv2gCC6JmxKHqwLvCgjteVSANvcxykqpFC8xd2nqSL9k8JPz8BFJAkw1YWL2mMvmb7XmWpzfuQJwKBBx9jRi",
  "key4": "5YdwFcUDDormaKhnrukfSWyALQHuF4tytgKBDWP3NNsyYHarfQZ3MoJUggVeWV7q15cBU41RoDha3P64fBDnCVFv",
  "key5": "5N6myZshpWV8mrsiL3AX8q1TqZJ1F8KoQsCnDqLhzEUcEcixkykoVLiZkM3GXtRvkFTHDnpMqVHkdGwDqH4fRXGp",
  "key6": "3cooNVr2VTghDk5whDbaLYLYGCm3w7QsFg4LSgRaKdsk55u8HuEn5eJPpgBL6qYEepbwqsQ1G9hcpXpcuJVL2hnF",
  "key7": "5KRQzGgJ1FpoRCTPsZZU8vJG15mRwsBWwQXr8XScmNeUh3Kt4sPLF217yxzDUkpozdWhHjRG4ogo5S2k2jEStDn5",
  "key8": "5ErpTdv2JPbVTBGeKPubP24dXDMN3h8Ff3WxBbVADbJqWozDSoPbM7tJy6GbE9v4hcr5JCjNjdhx6pyGG57eDEQp",
  "key9": "PjELpLBrgyQKmC7J6ifPo1RefBUFbTx3jxgoNyJKLqR6SsjTsHm4oqJXSzQDMjDuEDPZWo8kr7ZF7APXox94iob",
  "key10": "4YqyAzmQRMz9m6kMUYmCgQkTsMuv8kYEKQzZQrPsgYTaoLKxX2LY47gfNAZmcjmcg5S8GerxUd95GKpUj1gipC8i",
  "key11": "tCwKXKXirVDin6EmykxkqWs8hHD4AgQM4eh8HhRgUnB5jtH1BtcfFAM5cgDxj2fBcz9H4fv2mTsBNMrH2hVpxH8",
  "key12": "29C9GnX2nYwTvYVVy3qT3yNc6zqpXcrLVZ2wRUtQTDFeUhsXejBeoZ1V7Gk4XHAV8fLWNBgiXAiTMwEhBJqibCKR",
  "key13": "QxcZ116wNDj3QMtJd3edgxN6Pc5KAAdRMkTbKGacmKC4wvLVKALhhZsMQPqEn7PvDUE6KLbrvMqzYin2gBFSmYe",
  "key14": "3HHnHFbyYeJSYMrJheWHFB8QPmhLj5fJF24LJvs5aVfGXZHgdd1mBYFUgcuaq6RtoFiYNzBrtz3J8urwqLRC7Xdv",
  "key15": "G9xor2Vozx4LchgSwBByDKLAGU2gUvPgqV6isAQdYyeFMi58tJZ6PRqTLUGSmpYPqsCjYiRKpcatvN7v7ec4yqV",
  "key16": "3PwSn4Y8kaQyXaYtL5c6wechj8NNc1ikdrswWdNea86prK52oRSA6fNuPx6hbVJaGd8wBBZmwABq9u2GtyKji8cV",
  "key17": "3MudeYRtZaTqhLfZqrFt2tTDqgENnKVXtv8ZVoACEPBFdF8CM2jVRo6zGfjjcQQDDY8PHMj3HGHnchZXZ9uwCkJR",
  "key18": "5wbmhqCbjcu8CjfqohTVPc5AboG3fEkJJCSn6if4Yn6TQsQL9FgFed7oiUZan3NWTkn9g4X7wmx9uSwYggT9HCTQ",
  "key19": "42nfAyviMZdGX3FygKbaG4LDHNzRMRvqUgsPUrPcPH2oSmKXiHMedcA2n9DQPx8YWatA4Xke4cgwqtosnEEVU8Ch",
  "key20": "3pxtfFdGNmDurZUXuk4MxjPb6CGBHLSMNDrnQmZVV17H5QtKfDpwtmzgqbWSyDhBhfAuHzHJqKiFDBhHXw4kCaqg",
  "key21": "3PL9n4XrDpAMFF5TTbS5ZYa1ed5TpTDrSSwP2Js8GutocBTX7SgBT96c8wAW1qg7YEi1pJWyvHaG5PUKvEwPni4X",
  "key22": "ozcg9TjJV2dTGZjAGSAioNM2RMAaqNBuqTHccCDAzYw2sAymigbDX4w8CBs1LAxdW1voPVtJ6UzDR1hkN6q7xuA",
  "key23": "3DyEUKpwt8FnDSGvcMrU9kVycgYa6AfWhmfMNsXu8YrkwpuB1ACDJM9oRieLgydAoirwjr2jJY5UM1dXd5bCtGgC",
  "key24": "2GFk9ysi2XF2NF5pgdNdcupFXaFbTgaQq3LrzE8FRti6rejDMzB6kFucZJF7LApHF2g6EVedUHpS5oXB45CU3uPK",
  "key25": "2x6WT3Yu4evhCCDdvhhi5HvmTY7ijVhvdnTwLRggCyTgF7e5qZTJdEsRAGc3gsm7xsDdBFDNvbEDHxJXgKpoCZQw",
  "key26": "5YEBn99MX1XRunvEeeZ8yZdxwLTLBEup1ehXuJRWdK9SnPfGmzzZuvnMTHjcHxgz66YwMk1jPvX4KotHDQ135nFE",
  "key27": "3zf83Dq6QPYcg3Wp2ZkevBQspiqxVNGX2jF7giWegCxVYSZHVWNRNZVgC2KMEEuuo4jgBCK2gGXc43biqtpnB6fU",
  "key28": "39vTY3bcWv78moEfBfjPrX63bSgkQBFxq1chKr9dGgo46ZrSraMJXMrbNRXUAL9n5x8ono5g4JQ9taikrJVs8WrK",
  "key29": "4ohYqgdCTsHK2hdtVby5L1HU37ZTi2YQJm3TtaprCZbWbE7VGjttmyCJbxGgSPqE5zkNLu4VWv2az8zUZRdZgrou",
  "key30": "7vib77ZYt25vrVASn9Kg697qdQygHjVKJEfeMs97xVpgBZ4uxrsnZiVGZ5J6KeyQ9WaeKfHkjaUFfPxkEfwfJ3Z",
  "key31": "4i3SRQdmP4Vk1v7YK2ygsHwowWZJMqUv3AyMqwf85ioaXynu12mhCDNGiipDS71ysUPpkHUR5bvEz6gFmMU7nwVS",
  "key32": "5bt8GWutWpKDwUHT7255ttPwNiqk5mnJUwxEnQo7Rb5285jewF4oCpjzTUv8B7im6a2FoHKEwhcG3qPJxV2z14Rw",
  "key33": "2jrbkfqaBhygGWztjZvtkDBAXWFZhguQBxyrzJjLhUHiifFSLhQz1hsqHu2epDMTDTbdmYGMKJzc4dNnot4sRqgo",
  "key34": "5pUdqTUW1rFB2yTJjZPyXGmfXyBJ6RCaeTAhrNQ76v9GDXa5sv1H3dmitv5HkundEhWtSMEjqo8PLUQ7Bthc1FeG",
  "key35": "4c6xg4WEP9vfTHRHnoxVT24UDsRuPKDqHZr6mUyGVk1vZR5xPLyskAsPemC6Y89sE4XF1JdL55w3g47oJofbMStP",
  "key36": "fmjNYJzYdmqEctwS65wRUajD94z5bzoidV69MgrA8a8mMNamyUDkMgMEpafgdQRGgpSea7spE5xHYWPfeXWhANA"
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
