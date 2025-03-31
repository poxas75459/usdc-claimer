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
    "3pGzs9CMApT442dWK3XAxcATuHKPGso3yEoj5YGr9FyZL8snfWVgSuvaBYAo1ZjqVua1jvvFRiYfJtKxgU4xaJ3v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LvAKwtL9QYdngeDs1exhmNEF7j54YgZKd2ARoVKxPizQn9et2jyBjX3itybb61X8rzhxJP2bLx8frp4Qa6VjBGH",
  "key1": "55yQr17SGxzNGG1CsavdqNMekqKFUTCLN3JyVaNhsZ5JuWkCARNqe5t4gYZPpN3KvDRhNie1dXM6Lth5HvBLXLj3",
  "key2": "48SYUU8P9tFNJqRHsiCVE5GW3Yp9nxjD98JkuzjdpfyTzusS6o74iBvctgfLu81LZDrm8fKcrVaMnN2rF6NoUXrP",
  "key3": "5jsNsA6PHufP7pe54jQkf1rKj2J2aDNkGvdeLoXfSxhpzRf55fdwVfUSi8bit8c1zPvGSRfoyKozdiwiqCmX6wT",
  "key4": "gKpMg6WZqcjsUggXwZHYn2Bu7SQsvRwworYW4B8c3SLsr6bPtBHPigJzAfogqXFjMLCS7RJJWVzfd6eZqCgLYR2",
  "key5": "5ULJ7LSnKFX35qyzvuHbp1iCd3Uq29hgjFxWqfM11pVQFiJ1XV75LLXYEw88SN7H9BM5XxzSmstiHL9yTDz29teW",
  "key6": "3ek6hGQxJ79ZRAuwJBdumoQRRApPVhERpovDHy2nkTKpWzYcA1PnTWztsznFWnDUnCKKKjfU9fBZuyBZwTdmUWyh",
  "key7": "UPmE7kKnhznXRbGzwQ8cByhkf5TUCQTbjsTR7FaokL6UukrVW892MNfAa5tfLqDwVskEJQZKCtMMteCcLPmYYPJ",
  "key8": "4MjyXwjZcoP2sfFFXRZvMMRcqXo3wp6U8WZ9rSPmDb8RKJGsfYpQJEqqXAbffvauzeXFgJz5STpmCR6g6tcpfEfF",
  "key9": "yQygh4bvi39vFcCCGTphz5czQZ1jaKtaXa9fckc35NLZMbFcsf2T7rd6dbjC1nGgepVrfm2ZXEDtdvoMGGrc8oc",
  "key10": "kFZ45Sypj8a1UXcau34iXuEBRVRUuCbkz15P18VVw79H3ZMkm9nRoiMQFnaCQtWfaMdxBTR8EAHjLU3KmHAcziV",
  "key11": "2GBwH4GiXHhNyczS2Uw6WxQPekTZUwz61nYzwmi5PjjjX2mQngE3fi2XCefYkGYQG8S6G81s867pZtcsyobdXdcJ",
  "key12": "5jnqzXYyAXGaXXL5TacaM7uReYecmrCe6G7kJn6G6KkhZwwU8R9QyEumZ3rsrQAoYDXq4Sbi4DA4nU9ZqtWvNDv",
  "key13": "3xAfXxohaV5E1Jqmq1k8qu72PR4s38NdYd3hdLGaFBAZQDeJUQuCsEkasYJktopLenmDNGUheQzUa2rVLEHYaQep",
  "key14": "TTi5LYMUvNwJAL2mxP8yg1jLqdJd5e6gTHsD3oPd2hxw2TVBhzRit8ZBU21fXPxvJu5zuekhq833NEGn868hicx",
  "key15": "5v2AVBXPCvhs29NWDof86sJ9rKkgVtmPiyJfJQtY4nEx27oAHQbFbZbeDwgCTA95xmsrcDneX75q2LFeWBBwJACf",
  "key16": "4KcwDPfLswARqmJh2QnmrATRaZaZLk9RpMFyJ7BBrk9nRDGef1qNUaNJ7ZzqQWzftjApt1KK6ua8daxakYAxLUwt",
  "key17": "21GuEGzeEJBTLb4Fyj3nLJwU8av6LCivgV15w4VuzWBh3wq8c1ygSBVXTZXMjdgiDoNS26GYsW2oxVQDijByL8Ys",
  "key18": "4BgMbEq9CdgbUuvX8mxD5VLhZ5wheFq1AxmBQLnEoGxcupFwVw4cGr3HHZcoaNwLiEocTQt5pqyVWG48P1fQYGmG",
  "key19": "3F1kGjAXwJn1PEaTNjqwPNxpBQsx8aUvZR9Qwqh1ooEqXe8g9XmNcpd6ZvGRajdSrakJHSC1V6tmgNVUFi9WDePz",
  "key20": "3mh37qVsKbxP2P4btY7hoAhNgJ1QZrVYjfxJ9hutyC7sTZWE8EVs5HmhHojTz4CgckZ91wY1qp7DLWRkimUSRn6",
  "key21": "5hc28RsrMpo6MsXGwRSdsjVtCDLgQTSUwcEv71fWkHFA78Z7HJ7ct7WHPVGeYH5TvpXPVPWrGNFdad71WRh3fjnf",
  "key22": "559zE88b3fD6SqCVvEyRfffE7oV7jovXvz96RgBa8ezovXGiqA1YDgofSMYRRPCEmypbwkeNRnhzNFWAWdgWqs44",
  "key23": "3pz1dGZdAdKLphGj9Bj6pNd53XkD8D8mPuapfYVWPdvgtaFCgQFtiptnB9rFfnkJeFefKKt4rVdJdYwzXMNAyuL",
  "key24": "L8npW5vHoivd91Q7N2kPxjKRb5itLbibryNyS8EVMaCW5PpQyR5ZBpknLzNCCSxHKLDwzQdA2hUc69TtsfaCaab",
  "key25": "4yZUKFvVz4AkiZEjTRNcT1YTRCPzBJNdRaZH5NMV3F1RvMnyAas6UCVyp4DdZ3Ef1rn86HGSR3F7LZ7GJHV4Bv5S",
  "key26": "jAyE5JpdB7TTHjWHMA2NJG21CeYqPAGsWT1T1WARuaGy5avJWt9zYScDsntgD1hR2BfMthoi1xE74Tfx9y5hu6v",
  "key27": "4rpDCngcJe9ocbPPdM7H9Jt86SHvTD2QDDLd6dcsMvG9p7xuJyBXSnzCFjCQagyQPJFbip6emaJCYRibtD5v3s7R",
  "key28": "H3c3UudmFG7jYgbmQaYpMbGC3K7xSwyMzm9X5Kj26KVtYbVwND1gPURjzMV5WPyWbn6Mrviv8nk7QGt9Wnwd7Wa",
  "key29": "2E1YuKLfAspKcqBCsQzBxdiWFeHVX389QzJYVhT4JprYGh5VPuEozn5xXaSkEiu2BVzyBQ7RLwTvrYtYy22cW5kp",
  "key30": "35how57ukBKj1UCB8zApadtRW3nQ4gc4sQwkuWzM3KEud1DUnY42B24RfeciAMRS2BxwLqjztKsLmyEjhnfp4x9v",
  "key31": "56RwhzBwWF896v39g9A2PeFxLhGrbwGsganEYgEL6LELNcGzPdeaqrMyMfnqDKnHKRdzVyqBVyX3tg9mUxjWjqZ2",
  "key32": "uQN6erVi3pZpjzmwLc6vewJj4Gt8LnRaWdmNEh63TDDziiCnsyihccbP9Ax1ArWVqnSy9eBB3KR2aupYqvCTvyd",
  "key33": "3VCMPtFRiQQCehaWyhfwNbNqh4K18aobxYvZX6Z7vVMcUni7PcrPd974QBquefQTDCkzNjSNatftYszTi3Bhw7tL",
  "key34": "YkakVph1q7Y9tLKxkT8tDJSEgDQWURqeSWMyBgsUEccUSqMzGtAHihZ3E8LqSyELKhEa85GyYQV9xaChFgBGvWj",
  "key35": "4aHy5LXbzDfMkAdHjTykiFBVPv93iMXr2QcgsxKbB1xLffvm7wVFG1sCmAoEDVjvZMw3HsV4B6Wr7p2sabKY2uiM",
  "key36": "22LHkTKxVmU1uQxHWCzi9BdcL4QUNCPq7mrmVBxutUUucb8tZVVqazG2S3avsAwxJH8UyFkkuzTnkPVyh8wpWoEm"
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
