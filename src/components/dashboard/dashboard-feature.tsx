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
    "Nhj96oudjFFfHK46NngrwyctETATQfuYCzNVtBPAh5WNmnkV3Yxwqy6X5tjqYassk14BJujbhJkc6hY8uL2rmKT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bjuWwsAw3XToZLgUVjWny9irfSZ5e4A5DK8fuh8S4uamVrNuG8nAxf6DK39zF7S4V6rwsXzus1c9GBV4YuUo8Ft",
  "key1": "441DRzSR24DKm7XDqzFoq3grKgPxnchs52NMWusYdnjGzP8qjKpjDba3gU6QVQJtjm7QZwgwKeLFWrQUB1FvyH4H",
  "key2": "5xvJjdfrejCtWbiizRUZmUGzhjP61f3zRVbpg2tUJqVfCFqfwzVZGApX1CCCAMfXPHqgfTmopuXfc7xPxGcdvQd5",
  "key3": "2YYkiaPPZiUU4yYSZeksGQxnpxbJoF3gAH6TzghKMw2cgpsqJkdRLeCukr6N6QUSHQNEFJXAaER46AYud2Q8BuNA",
  "key4": "5qCykZGG3CUoU8SmNpbfwXBokMxw3DGroJqrnyE4LNWNXmxPJncAP2XkhGTSDzTHostUiuAsRZGUe2JES71UNjbM",
  "key5": "BVxdrKtdW9WbppKHkex883tD846fWwT8SoGfCtoi6txEkqsKVYjwfijbEynLqALitD3qL93QZc9hx9ZzJpfhbLk",
  "key6": "2aYz9jjWBbTG7C8MY2eVtE61PJgnseL5QvYVxMbjw9kKQrmLdgk5YMBzpugZ4pGWnijjzaLRs7QuTR9QQkrXEuGn",
  "key7": "2L5uctjpEM5D69c8idCCiSDA6UFjgDx6DDGMEstm2uvKScUUNjbGZ4HWFVWqSWGGhA9hez7b3PqJCkdtaAMpEXjP",
  "key8": "5aDrcMXmRsktaTyRzc2LMVXNy3c5WH2KLyd1UfXGyPNCPdmQw5hJcE5892xGJur2JZLL7jcTuBKzqXCAATsUGMUi",
  "key9": "ScHzkV8J8YyHvVcNrMJkBovrGNZRPMDWQJX4UENNk1wLvvEVBpbSgQii2NCxuYVgMmLkLUeGNSCsjsEvzLTSuWg",
  "key10": "3e98pYHm1tbwsC1sHNhkvVD6s8x5GYUudVG4gkXpQVb24MgmmnVZTHTCHnyUb49caAQcPGQv6wQZ3kgGNH7Ly6Jy",
  "key11": "1ShZ42GVaGwTHUZUNNn5Cw8R8eAc3uCMyyMNaf78pQUWjJeeWd9jiJH6tw9FLSLGuUdiedcVLrmWfkUz3Vr9m3p",
  "key12": "5U9aTJMA4r2VB59norJNvdaa9w2bne3kkAeCx5YBgbGCqTWk1mMpzzsoB5qoH4uezfunGPnZfgpRTxQyQ1oj5F7W",
  "key13": "4Gs8oRHBxGaPDiyJBBirGd3GvkLcHcwybLZQ7phSdDrB8vwd5z23aEG1WKGrFrsqnXA3zcvxPgiPvp5ZABUBcFac",
  "key14": "5c3CdXQakoLxWrPfPQb9P4ruofySMopJSEr3wggnSYmePzkTjZkCcZcrgf5UgPZvpfmJhSN1uaGEuPiBe8KmfSDA",
  "key15": "2agZfkdvE16w96w97GDrNw75VHDZ6MimXZJ8xh2VYaKnaJurAJEz94PN6T5Ext8TSkhA4s1XZfGoc7BJB5mWJur5",
  "key16": "2SQ1NVT9XKwK3xRrGA5d8EX3kLfZuzLXVpgUHoNQ1jXh3JZYkHb7yg4d7sp4zgySivpmcSSHBCJYPWcxJCgLF1mM",
  "key17": "5DwTmEdNgVnA8D6tM7amsfzg95hcCR9PUBiUBPxn61oakspVfbGHfVrwS8Rtu8swRH1SNg5vcc5MNCVkBtLUvSp6",
  "key18": "3ZVC3BXx1cgaWasY1eW7qT6RAqcAbi5bVN9Wy2V3scpMjA8xo5Yy9JS6wKJMW5RWC32qxbeC5qn4u4oCgd2dw2bH",
  "key19": "2r7dQFrCSbZ6123diEAfnTzMkqhzbjVm7CMHVHg4v62CRZxFpj4nMDpAzLt3RLUsCvWM48zReY2Lz5R1wVVP9skn",
  "key20": "4H42ZEm9nt19fpMr5nhd3fXn86tKwf5JieqwiCmM2YHm2dihWbsYda6URDT8UtJSK3FgJtyAh9FTRhGC5d1rvQoX",
  "key21": "3TbUV3ytqEWwdbfN3byn7iVLs55hFpPDAAJUUBdGkzTEXDcJkXi5FWZRnaTxEc8Cp22xAV3uYis2JxomSKZn2dTr",
  "key22": "3mPW8zqmnp2bpkjuxcYueHDKhbEmkAbAUFkZtzbbwopKj6Mu6nvbdJCZbyNSTQjgNnTexjYdk3qwURpAeWBcoiuX",
  "key23": "3asfCzTitTzBuRiZJWM7wdhxu157DZkLwV43GwMBNRA7DJacCE9HMoDXoNwq1qUzXtMpZTYuoGZrwwXRzKisbeDg",
  "key24": "nszRBLFsy8eqBGhSnVuzZ15ZbLsCFnujy5RJxoPMB39FJsCTybsJ8i2HBJKUB8y7pHzvrmfKpmv8jC1Y1SKyAot",
  "key25": "3Ujzq1UfYZb1Y6u95JrAuxgHUkUxg9tJ1wH5bp94oe8e469t2wFmcHX7rRYZqHRos5DEyyBJVi5aae4TzULxMYdS",
  "key26": "4evLoMP5y1JQFJDeCA8ZfDtKGbvqjBvq3d3jkurrXQMrzTJkWtHKVcNUHx24fQBZNJqocovk4sGdTp9tBaCLbhYB",
  "key27": "2LGJTUQ3cdQkXx4tZw22qiMNSSpf758DHB7e8wc9z9bQNf7yuo8ZXL3XRxAj2jTfTBQ2fKcSjxXhouan1GGGWfvR",
  "key28": "3szmKV9hStB23aNqrKZBNbn6rUGLRVjAfvpwFvmzYGwTz4Dy6ny7PkFEt2r4CoTjx97EcJqddtLoh5A9eNqkZqie",
  "key29": "UncZQBPYv46LTX359Wrkn8uh5949G9vusRsxB6Ncx6QGVeRqoo3do7PP2PUMZWmjf3ZazaPguMZtKECYsDSUYgx",
  "key30": "4P9pJgGKvYqmzNYXWpt4Hs8JwTaCu93wrfFyXw7pQooozyYSfJkeu9XyvBKMUXxvjQo3zwNqtnutAfSjoVkudZm3",
  "key31": "3xJZ1nWnipGeFNngEMyTrte4cCW3nfF6teVxhLJJ5BQoqPz1aTYxb5xTbRMb6WZpCh5Av3ED738wR6dT3oiFtPq4",
  "key32": "4QT6As1BQcXZeNRfNJBBjKcGxpoL6Nx8HggXtRMAY7qzXaViQEPs2EBJSTzwg88kYArYHwYdQ6DCqi1fUWAF3Grq",
  "key33": "2WZVnLgbQ51rmSXMxrBGHMP5nmuqawatnyM1ZAHVADbx3L2729FBG9MkL1vSrU5ac4egig172Q286zP1hEZYW4Mb",
  "key34": "3awsC3WdCfm1NeX3ZzczqEvAbnyUZFA1PjKsECtnfLKL7mahPHHykC6PCR5RvzKom7YEuh2vVxCaGfLtBSzT3xmR",
  "key35": "5rBaSKP7tbCS2rr6hzwShwpU4H9AHdZ4G5DBw1iS9RRbVfbwdrPf4ieQ6HadBtvoheKF9WA3n3Fty3NrxLCBAto9",
  "key36": "pjtA3qSyayXqGk2ZkiWih3ybG5Ky38iN54ctF4DXwsHu5KaSqgXuNAvyReenUo8246gG7ksvYCvdizZterGstD6",
  "key37": "oFy2KmcwfaaebMTL9fNQeQBFgF2JqznQtEfuoh4JLFitAcNEw1y24yE63zbbncoXPvc2RgCYeKoggKBG2KRjJrX",
  "key38": "5ex4b2jfET3wfYwmYjqLWFkNL4Vyrf68KBNezF3Lv7qaMVPDgshZ2UZyyEXUAPYuWrXfFfVNiFKxAT9XveGa3E2L",
  "key39": "52Vjc4qtD1LCzFzHk3SVRKhVQqLWP1Qhd7SaC2opMEEBWAXgRVG7nLwhFnpTVpFJzR2JRMsC1cDFz6A3rGafmBc4",
  "key40": "4NmBm7At7sbtEXVVjZKeFg4H7fQjmTLL7LhWf7gMq2rC3gWAziMYQdpqDt2VxANTLiBZyeLew8wH6anKVTXWUXPQ"
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
