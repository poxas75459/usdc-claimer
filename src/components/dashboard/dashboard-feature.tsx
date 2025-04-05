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
    "5qtxYW1qoNjMTnd3SWxXhp9NNWxvJHgv4NXYtvkeiq7LwUSvK7oqoRoVMENs8cNqNLf14Big4kSpwLS6yqkGv176"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Nnw1zsV819QVjRXxf7uc7cw1AXfiiDe3wfExFWkRtrvubDbgqAw3LhRyRZ7FSGEyPsELxQGZTCa94QBjFE1yehE",
  "key1": "5n5o5wxmhiBAKgrGsfBztJ4Brg2YZwf2otjmtsrzGf4KB6oFjeaMGdVD6k1kbgyUFnsE4c1ThM1T3jgiZJ2tKoNt",
  "key2": "4cZUgqWfZsWrYNB2KvJyaw45zomCidRZzoovfpYy198iSYnSTti2LMWwD81x1HxquJVVKSeUot17tq7yMTFEafws",
  "key3": "5HqiHZrmTJ68cYbtoS1Zg49ZGkc7yku4qgucesmYNBnGi6kHndT6bLAm2E7LQTh69huUCnMuBy7oW39d8sCUhhj1",
  "key4": "5fJsWjypJSe4ixzPfMTvpnHK17cWPo7dZodWS68ccj1YA5s86CuXR2TXR8FwM2a2SmWrxS3RHAEZYjSduSWW3ZRb",
  "key5": "2HF5FpnBtoaMy51KbphRGVpfcmeJaZrMa7inUL6qFQ2QijdooSAN7M5zTugdKJcmMFeTc5gs9mu9cEJwZtuupaDk",
  "key6": "5X5YpC6ngVXTt5baUVq88jGfQm4ZQmDHuMpmmndzS8JgKGHRQeKUX3Qh39kG2ErKxGRX5DKu64sqjjhcc5qmCeEj",
  "key7": "22QrMMiJkV2rJwvQsH88SBncvD3c52QrLZzqn71ET4vQZWwqkmpoAoGpoGaDYjT4UZfzdN3srjvznKTrQtwvepiP",
  "key8": "2ExxbhEVS2p2gofsiCLiDRwfXMuMPXwD53dbaZM5TKL9fMEkz5mjHHMHLmxTfjnzajivABkcYUQvGwBVuJRYmR7Z",
  "key9": "rRKafWBeubucwbSkXmJUpMsXnkwVnLBArpvMSxp9bTpnJbPd9CXaoW7sonXpJV5wmTuhXxT11LjAtBjqzspxFhE",
  "key10": "4efRtHHLYALwoACbPiR5q1bJRXb7bKK6BC9bdQTs5NJHadBRMb64daSGDm2K6GqeCzwmMRrcAx1BVaZJ63qEKire",
  "key11": "3Mp2dNY1ub7zBkNTEU6aLyrcaBSzypYmj63XbR3ZPqBQUWnbtBG8uDw3w8uD7jYprn2fgWiPCjgSFxSa2AmU5hQT",
  "key12": "5GrkgSuSmrqYjDCRjA73PX86aQCVduxVkMonL2L1v7Qz6kDkkygDSkkv3RVxNBBhKZWARPznrFeCXvXFFNaDjETo",
  "key13": "zjh5JRUmGZHiGu3ZyDFz2bVcH9FAzeCNbLdfZR5Rnbp3CZrcW7JoHrGVq4tk8HEZoX3KQEiKpCaXDaGq237U5QU",
  "key14": "3QeJnB4hQtkVK1U5Unf9ndLLtZaw5zaJviwJDFVHq6kuKaQ9CmPNKzSUiQXenZc2BBq2MKG98nA4NtzsAxwj8FA8",
  "key15": "5ijZN37cwou6Z3xpRpDuTC2UGRqu8CNRdUmVxcRv4VrfPF9BCpZwU7MeBR7dUDbBVoMcQiu1n4HzmVqE5QcVvp55",
  "key16": "57xHy8SGLoU7E5oWqkhHwkDakSrJMagMF97gKMGBrAWY1aStqM1sPrFETcC3niNcwsrcn5Cv3GLfeLQoGJUXgXVu",
  "key17": "3tUtqq3a7LrbaareLJYwnE9UGi477Kb2Re1VdYK69Lr9F1JWD9kBZPiAN3o9um41rgN4QjQaQHqxBosqtYVU8ZLg",
  "key18": "3kKHMZHvBjcxMaz93VJqFy1ZnHvR1u1Zjkp4XbYYMuPvZGToUKZre9XpKWan8pjpdknxffnSJ9nctL2tikT5mJtk",
  "key19": "48otr1dorpJXht2MNL3CrpNFXmVwq4h1nna7SCvFWbY2FiEdw9eTKS2skzWSCJX1u7JNsbHbtGsCC8irYchUrRLH",
  "key20": "2M7akt3q3bvyHg4ameH92vGTQhvXzvwsJSfgTQjjYQk6HEjzM3sj3kVUoCXjgMKwiNTuGvNo9dsngk632jakgbr7",
  "key21": "3uqN16DbwRnfUDi6vqidBJdZBgdkwQWpH6m7VLcpiCcwsHNjgZP7stJgrAhM25p7w14vnKpke5aDjNrkhiSEnsQf",
  "key22": "2qdPq6fkQRDefMVhUjzYTdFfhf7HmekGeiGkSo5faWNYNLgEA8p7msHU3uxsbPtRHCAj5GKUzy1py7tLhxCeYVL4",
  "key23": "fnGtSKt46axM8oo4iP8imJsGUBWAtw1CCRiaUvVigPVqYE18C93wG9TxWpjsXcMDo4dbFZ6gxnKAQZzdcKC22wn",
  "key24": "3GimzLRV5fwP2n9Wke6eoxnNFfmU8TBy1kySXySQUzdbZpqcSbZfW9zn9pJVDR1imbZo9dSRoX67REom5fXuQFUP",
  "key25": "4XYvPEtgM3gxbMgX1E4D6gmbwVfwsGusP8hWdkZyJ1uL51Vp5nRf8aQycdHfWbgHimTYfSUvqfws6aXVr6o1pN7S",
  "key26": "zQdhUZXmDNyPWqWiZX6aXBrR4hZDTawF7udRsyBJDpQCuYvyUC7tnGtd8t9HqCu98SS4JWBtDSPURPZHrAS7DjD",
  "key27": "5VBTg7459VNFDveXXoczqpnaRDK6WR5DkfjhqxEQPW5eXFnzwhsetXwPjVX1xC4jeWUL8nTWVWeHKrBWxA39qE49",
  "key28": "2NQoFjVT28HqmikJSTKiH7k4QtCUMzi15xJKpJjKVgX75Af26dGZN5oHxMXT39QiZRbhXnYZ28Rmzz7LNKj7yBEh",
  "key29": "63mCW5KS29v7bPPhGrbb6rJJg8TSqMsKJ48GSBavo2mvXxkFea7cfzkPG8A179hnxLhsLtKdMYp31LjnMFwJKuBh",
  "key30": "5QahpsGH4ydx68ZDLSgFsnp55HAsKfx2qt6LsN6yBn3MgbcY3jsH83RszMEjbwkwS9Pi7JKxAH2naNS8HnhYjka1",
  "key31": "4FzXiQM6enMAEoSdjSsmoPkxZo6A5KouiGWmLKQN1mShDdxBHB9LytzaZRjSiwfotPuFrQLuRbHNRYeZjm5URSGV",
  "key32": "2yKDP6oSmKGZeGCkSR3sGaKsAKCbPjoL331LKLZQrnrf32Zzb8pG9tJceVoyfBPhEJKGSoV1X9NHEEYu8QbiLQq1",
  "key33": "4MAaNS21X2ByL3FwxtW4f7gcXQueFicHxDmj7dgf8u7Yhvihid7qj4KgGJf1iEuGfgBGf1HuSRTCmPMQ237zZfXP",
  "key34": "3MzmAnc7oGCbdejYjDvJkLgwJPSriUGceDcXTUCHAqiJVVqLarZU96MaiD3Ziis4VWtWQJrDUp1d8Np2WBp6WcAh",
  "key35": "4EP26zZpnqDayeUs5zr1D2XZzLrtVQWsXW4iZdtotk8hpXua16vmZXVV6Dbt19JTdFfvvRMRY9JB9Ag6ZRpjvXqB",
  "key36": "oBS9qENqh8tRT5PLuZbbTswBCUbgyNkSaY2MryC7opmQ64Edb2wnVMbxSa4CshfJWo7EQA9nXf2Pj5U7sHc5cP3",
  "key37": "veYrTm28Mork5ZRapEGFmP9kW3bijKDsC3pDobZvmCaaEJ3vr852jDQtMpfLj5Q2X9vPGqXXxrZNzpWBR6zjfQR",
  "key38": "zbXhmv8f5Lrd2srArvy5TrPawd9gFGugCzvFjxqnuRKbEaSCeWr6rUbvZ46Gn6UUGG6uKHBH9rD3UMbRn8mH92y",
  "key39": "27b7um25d1u3q6BwAe5oVELhfZPoGkaETHScc9WNRhQiodVu3nPCWeWabJAJbW4fKfYh5De2DUUVQWQXBoYsNzgz",
  "key40": "o6bYniEyTSXontg38n95AceaxtZQNGS5ThfMzD3Mhmw1PPFs9p2dNavUohogYzGExr43jqs99JjKUwfxM6Gd4qW",
  "key41": "2mAbV3sQEUpmyErsiiNwppnV4hKhieDZ4jnX5EN5kXgVjy6529GWxu1qXQQaWaNuH3jyGM6La59NBAjc6HxQCm23",
  "key42": "4tTvykRrH3dNhsxM56oqwAdxt4Mt6W1yKx7tNTh4A1Dt84dvhrxRqiyMhhM3ZmqxtgyMVN9f7GSApFpWVWvvewzb",
  "key43": "5CfXHN4ocHpL26Pgicb6455o3yZE4CyVSuYRjBoi7kVS39V8BU7HWVoUXaST4Q3NWbkFvcyPSLRzQZsMpeKMLiXE",
  "key44": "MMn1f5SBgGAX5URiWAQ1dAJwNqsNrfDn3o2bpPfvcgBKYYSvtfqDG4cegNZLRSQ6SvbMx2GVq8xtYCiheSkmB6n",
  "key45": "2DyLkmS5toE1QxeUjS1iUXXRxpzihAemeZHpKBKsEP4WaoycyZMzFne8x3Lpgnfaobt7RjHngNC18ktLjrfbL413",
  "key46": "k1nCJ6s5ocUrHxm1KUukAErG2RKLomFLPjkbHSxSQruuZzdpksA9gUp7qNXDJkBeZY4Yzn5BqBD3EdFp7jt3Z5X"
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
