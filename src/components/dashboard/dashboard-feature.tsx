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
    "3NEpM6XpcYXH5s3e6ohBiCfrcGzA1RLZNXzUU6n174DTCaXDsjBCZ2A42AVPu6kRiuabbaqbRwpK65vKBePgSQMV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Pen25DRSn3qYaxahUYBxQXa4dX1fUvcPhbm7RiPj2AHouFwhdJBfXZSYG7aYbordefcYq9PY3VuAs4RFSSJVgqV",
  "key1": "FgyB4963N6SkGNvCexE7v2cJAMXn7C5pWv4uY9rpCvurHviQYuTcYHRXtnX6GVUAPJtVJsRkwrBWfavxcDdRJzr",
  "key2": "viHWoknsjyfFn5J9rCb1JfX8qfM37QBt51fsaXRMUaH6MNWEmpUkQReg4GgMdKCfMVtx792wXVg6BZxRQr67HSs",
  "key3": "TfLLjdyHkSYg1B2QgaGcikfXVV3jJmM2kXJjG9METV1tasA2EMRpNEpREVzMN5xEPronK36zbR4ur19TPQHHM6W",
  "key4": "5PsJsbzBTrwgZLrVxWUKzY5TMzurp25cjsywq8rA8LPVf1wn1EWc6AeXxm37uGya8y5jzMdv78QbfJATRF7nzY7y",
  "key5": "3gNmxvfJVjb2yjkcz3N5PCba8txUrtzZNCp8xQk8QruvinXqtotgzRvyapFkMw34vknuAPBXmdruF6WYjHRq1A8r",
  "key6": "5XfeB3iHBjD2faXmDYEQXX14Erzahb5QMd73uCdGR4jRLWTgin43Kfs2o4aKP1GeYJbbjpaipXT8FMaYouXk3Zp2",
  "key7": "63mW4dNuR8uYGHy9uSJPHE4qfyBjmvAeN8E4wsZdVqjQSmYRdYTTsUEBDR6KQc6jDhUwc553XVEvY79joP7qX7Hx",
  "key8": "5r5L1fmkp8Z5N6GdjToyYWfDwMAZDw8hhJKL4NStqA97ps17BK3M2drHNnQ8QQyEPfXpU5C9zyRkVKfCL6sAtoXq",
  "key9": "3wyDs97upK28UXVTACDjCUHFbk6T3RoUKvAuQXa4eoGTk1Y7u7AYCZsZgSTv5X41wdQJUvN6TCfrB2ySRXJQQNd9",
  "key10": "hvZrEXDLG3E9XvZsSRFHqc2etZsUuuvVXQ9LWxFULQhas3q4tD68MsvhwYMuQf8XyCoz31MUpMBX4HMUvddUJYN",
  "key11": "3UTgN7DjfeTpfauAj2ToNq3nJTqSZCsuG4jrLSjfDVu5RmvsS82ZwGJXJrayKy2YGgS3JYTinM1WsahmLohai1nd",
  "key12": "5WQcoqiWLKzNd7NXcvKivBB6v4z8QmhTsUPfwgUzAxcBfAgme8LURorhKBXp8rk2JtARYr7Xd2bZ1jceYsg98Jt9",
  "key13": "2Hd4huWZJuHhbP26us5f659X3BceyhaFb2PxZujocwNeLUhZ3ACK9vZ7XTUnML2BN6P9Y3dNtYKQaS2ksPh5XVuS",
  "key14": "2wYDtQqL83A3rSPTqXMwQhqmNYeHt7Set2ttoQ4ZGrQ3gn81ifdiXyfg7Tcy7U1mPJPaMxCs7wEcuC3YcGE9HFTQ",
  "key15": "5DtzEdzifZmsBSHZgHE8JJKRqD7AR13sF4y33d2sNFc4fpunCn9DzDZTPkzM9Hx1NyAaK1RkXnN3tBTwo4cos8W",
  "key16": "2KmZBkuvh9xrempX6PbbEPs6NkgF8wr1VUQkeGbBwXFoKbTB7No9WqUEmm6VgSp7PEYJzBJxhcA3FbutgkWVUkGq",
  "key17": "2YqeX8GUKHwZ3mQjpjE9zU3eLMG9FtgSuLrzD4vNgfUjeLtwPJfWQcfeEVjQAhY9mT1NNNnjXQDim8TWMvCKmRRc",
  "key18": "4ZqxUAto2C998Agvdn8c2pbda9vgWqxFpKtNCh75gbbfLDamEtg1A5kxwoZrj9QqWsmQj6qVUC9iwVieQihSTzzF",
  "key19": "3tRtUc3TKKdLNWiFwAxFa4aqHqbUk1xs1JjsCSDuWXeHfxfECpeow4CUABQVDLqUvke3x6hWxigzYi9H4iLkKveT",
  "key20": "LuYPVBJf6YnR4rKp9uypiGQKfNjNUvi7nznNoS2MncgTmruLPJng3QGihU8gVgojbSJBwpgCCbiC2aU8ZakUJb5",
  "key21": "3NgDJs56DHiqbpMgpHQScMbuea7tdkwzJxRZGjL4MQN2GhJ4Ec3U5hD62guBaNt6gLkYdnS18aGdg4JWVeEZkxvU",
  "key22": "4npfeUvZB7hV222669Xj7eoLzF5ZAoTDM35nh7RRaHU3WovDmndZb8vX8E4pkLAitf4tws5QJsiFdyTzmsdhd4sB",
  "key23": "2h2iNiQCmtDyjCACqjCWYFZ74EmYreLMS5MbTmxnesjCnsL1wErJG641m4NpWt5Rw11m9g6zb8UC2ERCbiFqmkFv",
  "key24": "4Upv5PhPv9Z5zawAui3ztGdPuapc83cqiD5tU4BG5CgszXn6Jpy7AbPptrJvgNiJwNHnLXQHYeuBU3AD7m1MBUK7",
  "key25": "3rqj8zBxqt7Pc3ZokPgxw4BCk3SXXCsBUFcGZAzorHJRFFxuhzAfBEEHBD42U8daMqfYgHyVKhhxZs7wsvT5wGHU",
  "key26": "5ciYAikzj4n9HcZsPJvRispTqPmD6jmr1LpjdZgD1gVixppNpAeXUSt2k2bXQ93ZBwAWesBuHp73rNyr4hqvSBvq",
  "key27": "nPyTEgGEnd9Wa9oCoXUAbvQdMV9gn1LahJjjvRmwWwFJC7d7hVZQ2Z7HV8FNgs4UR1tL1m2dvuixCozz11RW2im",
  "key28": "4oyrGu2zF44aHEZpchddmGtipgMDnYokQziDhC5GZmUCC8c5UbFpW8Qcmn9F522HetyqpMtsmRCTuGtW5atM1Tph",
  "key29": "5vvLWyWp41XYaQ4VwHDMEZtuGep9sJMh454rJ6sn1rcog7CMzBGTPa5FVuM1sQF9r4PiorpVQLf4NQpUc1JJfWi8",
  "key30": "5gAQBNbRgyGNLztMGoMBXthdQ1zS9qJeaUCRbAupXwy4P4TUXdiuTgqiwexYmKUqyT65E7FFL1dLaYLRD8b7jXgz",
  "key31": "4ECcJ4tXnsuNH7nRTLWkrpX7yT1DU3A4CrXs6XjkediJ1TU3K1u2aXAWmWHou3YABamRQ6LPrvcwP3kT3pJwdsQn",
  "key32": "4e99zKhpBoxYUbQpXgaJTW1skeLZqWrY9fjDgfwS2fPda16LGyfiAxPom5x8c9iYMnZvmropuTLaq1sLbDRSrqsU",
  "key33": "55xaevMJoPEkooakBuW4L7t35P5bkCDFcbvtXiJYPcwc1yoT4VZcnDMBPf9nbtfqVEydKrJt9UdLUiN3snsaJihn",
  "key34": "FKN4XQCzNjZ3ujQDG97SaoN3kWXC3BMEANV9vh88S4x3uDCVx5hq6wsv1TBfRhWQivCdBorJ9xJcdJW69Av3PMp"
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
