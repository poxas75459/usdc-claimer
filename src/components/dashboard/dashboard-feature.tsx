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
    "5yveJq3qg8WNHwXX3PC7h1DLRyCrWMoCG9WkKRbaRWxoQkRCpUG5dBe67YwpJTKqDreXwXGuJpUwquM6nB1kZFs6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NjvfRUCcSy814pE6n23Mw8HrKZEgxDf4tD8HBGmiWnxwK9jUFDgHRv7m177sDbmv8d9yR9dkYJxaGkQZkww9Q3V",
  "key1": "3xZkHQ2yL2nqG9CA8Pi57T7AprVCdUEFQi2msF2vJBXadubSucW6KupEtGJ99Xkmv4c2xv5Gp8QkCrkhne2fqRsN",
  "key2": "5J2W3cHbsXaNqFr77gxNvCGjcKUHFWG62Q2GBUGfpkk1TzgS8TrcNn73uVhA4eDo4Q7MHdL1QZm5yKusL9uUQru3",
  "key3": "mXWC6UZPwAcUyB8jUXB8BmLjaDZBp6TcQMQn1cV1R6Jy4BpSBRaVh49nd2S5gTjhCr1SBNgL4rSjruyo56Mj5sq",
  "key4": "4HNgmCLeeKYnYf6VNmaHMJHeciwmcDkQAbpZvTpHP5WaFSdeFkBonvSLvqWP5LkWsZkq3reeXXVx2NjpxkVKYkw2",
  "key5": "YEpj3X8Wr9E22TFwGBXic4UThHHSjMqFUqpsdSC6ZzRo2RF9pKkW5rR9YWcU9y1DgCs6kFrG9Ty159oYXJuiT44",
  "key6": "4vyCie4ufu6mQCZvp7o771q6LygxxPCNpvGSiV4HqHJXHfz9DDxu9fnowG9hpAUgU2tAgCcgqH12fiMfyVwkqrPo",
  "key7": "44BUwqp8Naz2qtArZTxsUJ5sVf4WSkWrDUuSgn1aQ2WZhkaZdLaxMzKXzebZaxAzTJ2NdWHuGmnoHwwWgGbQZzig",
  "key8": "oYGfeRgmhhnvSWp9HXahSHzKgzH7ySzQsjNUzZ8ND9VvZzsD6A5m54wzBmRRgBt8CESeLbBG9qNJff2uNbUQtqo",
  "key9": "5u5PeK6YiLFF9ymhVrR4VkzUo4qdQmj6eeSL2hYgYTptyPbJzMHCPH9WytHZ28vU9T6R8xMwAGKRa1wqxzUaa2vN",
  "key10": "3BizZUq5m4V7RfxXupz22rSaqYcFEpmPkfq9wrEaNUC1rKJdaKNFq729Fv6qyqDT5xGYmiGvmXoaSLrmaFGsHie3",
  "key11": "4r1cDXs19z9ns2UnZ3qa735RBpFAUgCHrJJHJx65oWQs4GjCtd51SU3BixDrpkQUHXnXeGmtZvvNapzKZZx8WAZa",
  "key12": "318dRwWxjdacZ8i3NLgNBHCbwpfCjcUsy4HcnpxKbodCsR2N8z3K1CXtUmBVx3MwE4H4B93jq4hRyCVtgpADSFc5",
  "key13": "53e2qUqeP6Myk53keFJ9DpWtwDaCP6tcChFXq7KZmWwdVfSDNhkZauXRZy6wt4ZjvuJWFmyF3Cif19Gn1HTWHuEw",
  "key14": "Y2AwiBGEoBRTs2qfdmb2bWSktyv7VMQUMszKhP2aRAGgDsgPDjLGDHYWccPCT3LaJ8xeaataM4dgBhfX5UEfkUf",
  "key15": "8f44aKU5WawmL3dq2NsdiehPqAsWngChCjK9F19iZ1bhcy9XVVksckSUEX7u4ASLW7BRx8gebPTMq1pa4c4H5CY",
  "key16": "3iiK3nM2Dj2ndN1gHGVpzsFAq8zaUaDK6CZ8mGZFL9cVo35oFeegVMDRoADmw3USZqtQfaieuEZPwQzSDEkiscDD",
  "key17": "5QhhgiKUH71pe7mWGc8PyJY1GChr8j57aZuXz3hb3TULnVRg7uwwLDbgu6ZgpMpQhi2i8ZCSedU2XaXTsV7b2oJ4",
  "key18": "56uV6a6g5a7TpikEgvH24zgk6BX7Rgz5P5w3qLEEDYwga8GkncpqVRVwXJD8z4KraM4hfmh5mggferyFcVbhGcfT",
  "key19": "2ypJwCLFZjfKdKor4S4FJhJcqEmjxSCap5MctFhXyS21iaLvBCGqTpjQDkK76yFGVM5VXdAH1imYZHXYqZX8RQ63",
  "key20": "2Ka3zBJERpvM2ckeocnV1bCKUQLUHyq3CWdoXCfZwdZkHX13hQzA1YqoHmqC8ABQXJcPvzgE5r8NSHo9wwWoMb2",
  "key21": "2DRq4qV7JBZQ2LMrek3PvZweCwV7TAfPXuuGE1QK7KG3LriFF24VhSE4N5hnDS41QbwfoU37BB3VP9A2xNVrXHsu",
  "key22": "3apzvVTcMoLR5Z6kEDK1ANeoDDNQx4A9VNKa1eBvhEG3A1zn9vRNXwbgJXd9Bqd5QAnEzfsSkPa1vZHNLQ7uEP4h",
  "key23": "3BYdaTgEzVPSJpFpHjPFP68phRfxt3eDmqqGBnQ8fE7wdUFYyLYtWU7zfzvCWpmYtcSJi1BLshU7zQVjgJW9g84q",
  "key24": "4DfdVhc96S2hUZHfMtQhCtfFwuyiv75hnAMPf233RUbTWbvnjDrM7YMqNQGT43iF2PYNQ5EriCnQ2MDJSFhGt7ky",
  "key25": "2YAppQbXvxrXKGtRAfAeuRZfWKLSyNh45CQ5V8RjJw8GAgjEiYjRSXaiUqYP2F82U1KvLvR6vVxAYDGnM5z82pFw",
  "key26": "53CTzwJ7QzAAkNoT6u1yExXZqf2GneiZ8D5Ce2RfS7Lc6hMdR1JewubWZCgoHdYik4tnGsRMHbtpwy3uGZZWG3B8",
  "key27": "2HTfYyMtHGibxFyiebg5Fo1kbZo53MZ1WJDJ7wKVsh7zoGMGJ5bguzW1t4xHMbteJbqoZow1i2usiNbVNZVHkrrs",
  "key28": "52rYeRPgYHbC5b9h9J7q4UQyWi4oZ4HmV6k1McSHLc4ZcWfvyTxFwGfmXDbXLjQFu3GsQ9eMy9SLDP6jYdacarkW",
  "key29": "3oy15mkFiKQPWQNeVE5ea98NKW1bf1tXFmdMP5X9Bw87HFUG4eognLtwCAQxhJg7JXZjbzoSiFX1146UY5LRgH4o",
  "key30": "2yVtzaQgAgcRw2W9bSZQ8Ydb5VfRKstz3my9fnfWvG8egUNd7FNt5PjT2SdVW6KEQmmqPTNwkHgR6Rcgq3sCy2JX",
  "key31": "io6gx9MZ8Wpsu6UZA4M6bjFHvBXfHC5Rb7Lo1hfVqiMCNW1HstVS1yCsssMTvPBGVMbaCjgEPnswBtijcju6KjK",
  "key32": "25RwYVaoVDG95ZWmg8XVXWAeg8JEjzyiUshWcpMNEvQtL4psJLi7gqjrKCivDuUEstS9SvUzJEyhu5JSX51iw7vy",
  "key33": "5aZ9trow5ZN8u5m9asWjKbSm4fnrk4TXUGxg8Z7uQLPmhz2zks57VcAF1QppuSu4A5bcUTubVtW6TPCERfdzTW2h",
  "key34": "BeF3Vw1bNKcaPvhYqDcq6VpQUB9UuvBuruwyi2ZYPpozZWYiziTCg8P1yk6oavJ8VDgn4eZbQag8BoBzpurLoVv",
  "key35": "4ZZ4D9xW6J3VV7foFergv76xNSQog3tncJbHEDN26LtuoZey6tcYXGUgAHUX1P1xq1m7VqFAhmAGcLTd2Agn9C71",
  "key36": "5r2f5Dfsu1eks6BQ6SnNJM8tVhNrpz3x3DaGBDu4Lau1NFyTNHYkudxq5oohivkyQdsHHfwjHADZdZezynviS5q3",
  "key37": "4fuTMfWDYTGg9FFKZo5fw3efMGTMz1UXgxR9m51PzJBeLtqfYvv7PcdLyhHBSq77EzatruVBxTCmDkHP76R7wv63",
  "key38": "21abeCYLWmw4MXdC7J28PNzMpqAzsrrNQ75JTMWssa3vvek78RUttriXsm8m2QuFVxwMdywq1spmV7rmbLUcGrLt",
  "key39": "4ZYWdAsVS5EMZeqmCQnoiEcJiUoLryiCZpLnK3NW9j7SgQbXTodKEKsUcJNerxJ9RKoGR3fYd8JmKRFoc2Fem6VH",
  "key40": "ezkWsoeFjCuXwweMQ5QN1688cKsTWhWa2QVT9jmnn486hVf6JsnunWpLFFXejHog8XNo8mYWaPxcXR3gijtucr6",
  "key41": "2DWzTdYVXdNuWDZw2nVn2z1fXUL2a1rrH4ZUg2JJfkK2qc23eHw3UsEhkBTqWZ1uMYNx9TZxR5rLA9pt58mnyrUb",
  "key42": "mGYExurZBmLPwLdESuv89WMLXpTPJgTTfryMGBBpb1FDsTvCkVGt6knkqxjzy1sTHymmCEGmhsycBPyngAVuLyX"
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
