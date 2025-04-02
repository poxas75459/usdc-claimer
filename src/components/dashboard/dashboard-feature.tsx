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
    "5NKy5LQhiyqnkd9bC4Hq4WtxT5ge3hBCNGLfRSs41q6VCqxjxXLDQQchaAZ1HNyTJdon7Go1wkDuFM5HM4jqhDpX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p68siJCPRcqicfAp6bvV98NEvzgjmJ44KqekXEcuyiWH1eGYREEHyZ7EP15ySbnW4ugEyuBfCTBh1LjBfp8ek1T",
  "key1": "55s5QpPnBtZBUPuFSW3PDcpUyp8q2VJqFY9crMdRdSdFTGqd8nwcmTKLNcugkmcRMKJ5UJzUJNafZJfDsTV3yHsd",
  "key2": "3UzRuMJf4BqmmY9zzeXhmRgpi819L6EU61N5VoqgJ52kkQsu6gqzcr2nFYUwgjEEm1VqvefhQzyH9WKBC4pE8Vno",
  "key3": "5eqJo66rgo3RWoU5K4unXtjxPnTmMBnZfgovN9ZCbiwkJNzVkk2NNGcvnwhNHxtHDHu5PjgdByVFaEmvwBurtjfu",
  "key4": "3SHxoZETsdH7U8swBebpSofh4CXaxrMtbUhSR51zqDs3A1cuK3rdqzvYJufZZnzBkUbyXEv82YjX5tWthTYiiH97",
  "key5": "5uC3Jibvb114cN3NdgQWPRax2CvYUHhJqJxds5Fd1hmhWLm1T7J5MxRPAABWBDVSUwiu35LTfrSLLbdGzmuQgVV8",
  "key6": "2zGMwsabC5Yhais7ryPXLmeegiXUWsvPYUZvsdtkCky5kjzoP3GTSSLDZWkpbB8vHs8Zp4Bvyu6STZuW3dcTiUTC",
  "key7": "5FEkhMtjx5HKLKmsANKDW91Z1UYw62M3uYEaWakZsDQeJWXT5fSemP7326cy1y8K6ZnKvZgM7EUmTQwU1psRLf96",
  "key8": "VzhqxZqJkDqFf78vXhi3Eg3vRqYi4A5G5D5s83AHs7fdca2CWJsUYJTnP1WdTnroQhcBf6SdwgKYnEnNCvy4rak",
  "key9": "dUUAMAE9JTnZTy31aDChndKyVv7RPmgNLUxpjbmJfhADLGxGQaF5Kk7FrxfLhA4Rkd8JKyRk5x6qwMGUCErKxtA",
  "key10": "322eudLT4AtQUhhLwtEsCdFocnDDs1EMhzRgFAeTPfVbVwDKJkcSUFtXRfUE7bSkc6LBeqTU33wzSpdCezfvNZkY",
  "key11": "5UUV1UYpeGWsBryHnJb64HceYvcuuAzjyqp2hktX3JWGC6TXmW7r3RRACguEvxCSbWDRwuovJKQeURdjRNvPq6KU",
  "key12": "3T5jp3FBrXdKZGfFTWiwvqg7eyyo9gdipXjirHcai966wF2Gh6s7fFGgETst3AxpsWAHFApnazv4HSkSAna7JDjP",
  "key13": "2gBzkWaMCmczaBDLKfC4XqYMBDMg5Rzr9Hcgh25UDJjbkm2UyUTiXFNZ186rpWiPD8ZgUi1n6yQNQhoHSTDrk8Um",
  "key14": "2MEjWKYLsG3o4cwEiZuPvF22fvR5EMLVKEHPZzEvjZMzXpSWheZ67YyVtjDsCqdjrA5MJFqJgCxyz5mVD2NsdKhS",
  "key15": "2tg2UeYhxXsQEtPLcYD6vG7DpDW59q6nX7g82hvTi6muRaQBq1d7JM76di9qvnZYkXqQY3AsJ8c7V8ppwnpa2a9k",
  "key16": "3k3cGRHinSKC1g2tqVK1sgUihbxUzzopdXvktcu6jxGLN77P6AwVpBX7983MnzqdRjPrDW7PppESD4YNj6DfbNa2",
  "key17": "TseBf5uaeaCvbGm6mjxCozQ3WH71VxdxoZACLtcMpspGJ5gsWar2LfqETQG2dvTguBLtwtxKr5qqBNHKbMmCzWf",
  "key18": "21BUWM2DRzEYYHEpfSwrshvSWq5UHs1Qqh5cjgHTnhw4nENLxZSfRy3TirbZSPnwMTwFzcDqcph9kxpa9zQokmYZ",
  "key19": "2Kk9Gje4NgtuuPWdwSTzpfg3c5SWttSdBhcq5oYqBdFZ3ZWt3FqWSPWNipZPvncffQdHy6GZ7sq2rwbg8Mp9QUXK",
  "key20": "FveMdW3qg87BnkhXG2jGbCmTETjJwbpXGYKSQbgjLGtQQWyRQg82e9qDbt5K4XfXYyYDaR9PuoB8p9SF7PECnVH",
  "key21": "4x5AHjHiJ1ZZg83W2GYHwie77qTsXKKFDLpUVe1NWsdVhCm6Nv8ni5GxqkiAWjWRabo9Zhbg5Sh2357q1j2U89Sq",
  "key22": "yzSPFQPjxEd28ugPbeLxZmatmEfc6xE5kJYmGoZP7XKepnNGyUirmCWeZW3DxKgizRcCPrpRfvyTqWdeR4V2JVf",
  "key23": "415QFKqaLNGZNk6Gqm9EChyeKjNcqybM7a4Ax75APvy6PesUJ7gkv9c6UcoTdjdbX74jgrvqGh3UJX9fDE2g2RXS",
  "key24": "2K93NmFg5BZd75bFB9Nj4rXHmEwa316t2sxruHi8gFpZULoy9E6KSQMnzbSbqVuw9U614C26t164cGu2Q48qgRPQ",
  "key25": "DrXLnQ7bAKeYLrzFRdyKxCUjfzByDAC8id8RtRkGC9ea9UsRh4AsZYm2p31tPUYU4GZBkHT9qz31SW97YXYJSi4",
  "key26": "5xUxYGphdbyDTAbAhePHZ9PJVdvHoJKpSibvWU1EyouNvjtktiEXdgnwL6sCcXWWtMkyJ6LL7SvYwyoKC7vaYdLm",
  "key27": "3zNta6K47Zq2fZgSXvrjhkTRkNexfdZCbG4GRKH2C5AjuTBJhkvLcDSNNsLFj7xpJvr59nPQsF2Qfw7QiWd8dWLC",
  "key28": "aYfGCRRssC7jtggZxY4jT2AftDGyKRHi7NzMVu663rscE8no9phWWBtfFkBu6R4A1GayguWBMmVWT1CZQGxpKve",
  "key29": "3PbsPVnoZSRoWjvFksirr7xxYWPUhS9acDnAdWbeyqCvjhzp1GwtZjywdwPCeQQQmtWTFqSKGuvzfGGkbEtFUsHU",
  "key30": "MqaLKwJFgje8zWmm2wZX8E22WKUiqExsrKU9Sffr9dKF5B3ftkc6yaxz2KP4tpNhDsNcogCAWNEdsad52EkWXqz",
  "key31": "3DM1ZG5g9rjwKbP4NTtDvsU86FJvcg1NgPbJW9ivXCeXn6FRoF9aYit9jneKo2eL8v3LLzCQJcPyxqAqWa8HjcXG",
  "key32": "33HN1G2PzurbhcnSDSemViWeTNkpjNmZiTaFVBuMGsms361dpNd738H2Gg1xS4Fzpfdtqtckj9ec6QNq6sfri3Zf",
  "key33": "3AUgjRJ231tAb4r4MhSUiajrrXrzs5z9KC1JQ5zrgDPr37qmMdJ5zHHVc2BnJKsaXh1SwFUUjFX6mGhoPvKLz1Jz",
  "key34": "4JXFL7Ky6YHYrX7oTfQbymgiCMquvthoBWCUy5T3aQafPxyWQqdkZ1Lnco2XqmCi4dPc17s3yQAzWjL61483FCEv",
  "key35": "4entid2M1QPqAHRSQxJXrmE6MPXx36usNwJTzGzNBMYKs7C6kKBNbWwYmFSh2sXAYhbYJfroCSuXrEUjRsJQZcdu"
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
