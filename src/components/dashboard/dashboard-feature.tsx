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
    "3tf7G5u8uiDCXoRKmwbmZSBv9EQpg5fqUDjqCiS1DCdhxntGNXfVo5EQHM1DVMquXPqDdXREjT5BUbqoiQnvJdQD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "267fXhtimae7BziV9XwS2mi6K7y4A9XwLEtaZ31kdG5QHuXcYDSX7X9RAiBEv1kVtV5MB8g13rbowRivvCRq4H6u",
  "key1": "3Jk1JfAVHPEFYfzeuzNrjY1NMsgcdWM2EtHX6TMX1bmgrSdKTjiM7JA4527AXgNGJT7DRBCeTcRfWVPbLwm5xV33",
  "key2": "JcM5ho9XGWPAVojuQMqsWJaYUUJ2EUAqLgw9QAjeJLJ1ZRNq9fYu3c7w25PSkGJRxsMLujh9LjZNJkqiEqvotLn",
  "key3": "5vSv72g1ZgDvNHUEmXyMbzmJfpECXCQx6Q7YRop4GZKe4PCu3tz1bzaBxVqv7ooxGt3C42Sy15HECKyE6nmDawqj",
  "key4": "31eiee1JcPmcLTjmULg7DprAkGMoET5Vh2sb8EcbCL3AJCDLoiYXfGgJErmnsHFA7R9YMLmGKht9QRa5kGnr5Bf2",
  "key5": "Mt3NCevN9C6ZR7aGpU6CTfg6C1mHDN6a1RqSaeqYQ9JSAfAg66FnFjgPBERhz5S5qu1j2Z2gCi2iK7aUCWKYioi",
  "key6": "5n4CxUJ52yLbuUpuTjAXxAiT1tiZRKefL4YqDj1xvG39Mf18dTbThKGe9pH6kbvhtUENY9okGE71QCHhASwXZXW2",
  "key7": "eqW9sd9bZdsCPc1cEPyeS2B9LaBHjEDRj9AL9T4bdfSPKynFaRxm91FDFChXPDq84WXh84fVXCkLc3TMV2bYwRe",
  "key8": "4BopxCMiZmBPDZU3pK5G7duq9RUPUyG1NdGZvfsvtazjVEgWng35em5nePUavYRqYDM2gTkMKXMTWH7941pzFnoH",
  "key9": "pLjxQnfAf5zGpZFGeUopjsaJzeKQovDLTwqiRX5GNmru7FjwmVEWy81uUrkFgrP2rHDxJgoTdv1fgqLKWXzXhQN",
  "key10": "pBFS6FW4QQh5ezV2CqRbquopEuAoJ6UN2qt7ogbQW2KQf7A6x7LoK5aph2P84SPtUbcSYXSXbLeUo2VcC54k5yu",
  "key11": "22fgQy3gkiBVqdhm1LnJDj8XBBuAKZXCbKgKAWgLfqyotSUph34ua6pGoyMMrsXtJyZUJuMRnetC6zqBuZJ3Z6aQ",
  "key12": "2ZjqSZDReyhYDuMpSs7azy7Gn8WRrzNt2jboaso6TzuVQ77USf8fkVQkwYWx97EtoMvmNmi2rohapSJdTL2jJ8vV",
  "key13": "35tSNbQPnaF1CaQtsUxe5Zb1RpB15eYKaSxnvNjeGXEQfETthLFBX18j1dun5wdoH54t7RdDJj8x2UJ53iiNJFzE",
  "key14": "3f3TXpsjGEbVgScjboUNZGV3hLFJGJSVyS3fYzwanAgee49uW33ndLGcSWSL9fXSc8GUNHjw82sk7GNPfm9bq5yd",
  "key15": "2EXv2V1pcExtCa84Z2ihSHanqeVWxZXfS6RdvqUmjtDYSzRyinFhUwzwQfcZ2cXVq5qV4q64bwdtFgzUp2S8S2aq",
  "key16": "2Hqp1HkxemdP5wp4e82w551ZCdrGxtTo335B6m79bfgYw5mKjR4x6jF6ATBtRNwmq7fn7UGUFpr39F3LAFSjLvgh",
  "key17": "3vNUSzxnkrEi1ufUotdAy3JSjU8XyqKoH1ahVTBa7mskrWodC3K6v1DyF8XeGi4TeV4X232KhRbfhvK78CsrJ8FY",
  "key18": "5oM4f48EEfNhPkBFnjn5CEzTTZenkcHekQu3vTdYyrmkvbPSiMfpg4NECRUTRC7Fpe6xfp1oHTjf7u9GpZHyHc6w",
  "key19": "5JrLacWtPFZdEUoTxDPdQrW25dHiqQi4565HfAtmcoGHauKJPcnyPhP1wvxUmR3KDQXSRdBbKhZV1d2z1KEHwiqf",
  "key20": "TNmDf7ippyczgXY24bCbCvekRHVTEVn1vpvcyR7aCkg99yZ27K689EPKkMHjtVLmk6gS6MmfZZFUxj9oUhTo9CQ",
  "key21": "3YRx62zAwHnFPYfaVfbzSzkbKGtc6mdsqCgxsAQhkCygDyUUqnuyMRztCzfSuvx5vqR234HoMQmGqVkqTExVTzWU",
  "key22": "5QyBPkxQMQ1fnJyNbTD6NL3RMc3FsgALkep8EyfMoPuiypKSuStG2VvyTghQwKqCHiNr6fnaepErQsZaWL7AiruY",
  "key23": "41R6eh5hQRJdSjXmkySGxJt8wGhrWJaabKFVZpcM8kadaoSYnSj3fnNvJvjH1Q5YLs7qdZYVSkZQ18MKUXE8EG7g",
  "key24": "H56UMifKa86tuWJEqdaYAhrBw3ApopLGWwhzyrWjof1H9u47mXn7R1c27oF6Cfq6oDEHe6ePaZ8WSUDBwxWJq1c",
  "key25": "5w6uoGBZx6q3hDY4ffXKyPYop9ss179UTSm8dHHSS8iqyHRZYiZSpRXQwbRrPPSd3bDz1KnFzPKL9d5BPicvbYsZ",
  "key26": "49MWwVLqX7H1sVDqtXS399HmMWTJuaCVN1nmWWp1FGSs6uEYxwikAEMdMGxK6EeJMkZVqsnV7FfbatGSvzURrimh",
  "key27": "2HJ8G1dYtTRFZG4MmfE6qj7MieQFrXz2NwWena3QaoacV7qLXtMTXyoRbxE3vHF7938TiBjn2CZseNRtJATuFFpL",
  "key28": "4eXYrDD2u6vomHoN7wPF5bikj25enH4zGw1DSRAjM4F45pFTJ9Yigqeezc6nuCPGFcXdy9KaF9k1n9Lcm5apyN3h",
  "key29": "4xFSSpQxWnbtoHN3nRoGZx2vMnYAh6dQRX2RRwVBdtxKmyzDLWap3xgWJJM38uB4v4icfdmsh81LT8aa5ay3BZvx",
  "key30": "5r9uUcvpnSgxy9HZM14pE3DwhUDgMohKp3qK9sB9BNdQrSYpCsRdMMBN31FsgtvSBxpLXepNVPevdxLht5ZFs7W2",
  "key31": "5WhkktKqLUdhc9C267EvvV2RwsiGMTUzNJxu7ECS4qHRrrEHR6p8Xk49uva4yqNGGqaFqsybXUAqF8cgM9Kn8Kba",
  "key32": "TRK3QhQyEWQBMvJfebzZwR7RXK3AELiTFWFnyUWLF8rdVzzYMm3xY5WsLKAjHCoYyF6SKhNDEbQnqcbriUs2S57",
  "key33": "5Uewcq9VNQAKPs8pjALxDXkt9ZkzTSkbphtJYyzoREJ9yFscurT6A9sCQv5kKEmm7vddEkvtEYLLGJNrrVFcrjKR",
  "key34": "2HAkXjLg2j2n8JirxxkY7Hk8Us8gFWSJPCX1in3JMTsDeBDZBfAxh5QGB3u758aTHmnBiwB2WqwZg7SHGVSAfLHX",
  "key35": "4tXK9MsuLfBXqwJw9LXyk3vWAoTR7H7gerdYZ3qPDJvTREeTpsJhZpurPi3LYFhdU7bavL7QC7PQScra4ws5qekg",
  "key36": "EKvTSRJanNQzLekbKhhhPbeF7jP2VoDPYfW6Ce3sF7ixmhWwqtPXAKmVi27bCuWcN6QGdUti9ZmWzYUgehdVoq2",
  "key37": "4FbdGizUKdojdoegktLcJdHDazAVfSuZZwbLrsSRvvdmTnW9BQ7SoeKZUEvLZZtMTVCctCjvBH7DgK8BzdGqtRZK",
  "key38": "EK9jx85vY5s1M3b2N1SMuCiQmcn9fjQpBa2Phspg17XaBmzR7nkMS7DABBKsuzzA5zv5cRVZV1wKWtv41rZdu6u",
  "key39": "2kyS3R9UFvigusMJJMKJKZfeHnWGVuqHTTLwWJcsF699wnNxW2X5TpQQfVZKiQRNw7SCxuxZaVLFJyLtjSmgXhX3",
  "key40": "3TwBR9wLQ9pFTesQzbUyZugLH1PhdRmtEuXZV9uBecGj57M5hRyvd5uPJiEdgB5PT8tkHzZ3ZzCf66hW7gjQ9jWi",
  "key41": "615Pw15VqAkKc9H5HJAVssKGZcsY2UxqAakL4EimAfPThzpJ43c3xgr8fzGSZU14zG9kjzj3DysS4nocWiGgX2Tz",
  "key42": "53CcySjLk9SQaYti22BbTWaEr7ivC1ghF2xJGqLsYdzsVWT9yrNLhxzYEVsu2TsjfYEyx6K8XxnGBFFaFHRy4DkV",
  "key43": "5Juz1kmikHvtEjzYuXq6VHNyBRXxkJigGGkAr5opFpsjQB3Ze9aNRhGmTEmw5qTPc3Y55kjrffiJHqohigiK8nDv",
  "key44": "3cStsd21cFk9f8fBqDtFkzqRxEG3mbs6ewSqg4e8hYui9Gejkg6kU224eS7cF3VEKJRSYKf1tEwuW52sY5v5uBEn",
  "key45": "3snxeRd84424tcgHj2bnMXLb1QT7keMTPcEqCV8oCofmX9dGiLiEqkzjLUhpnT3NhRrq3yZ6q2Wt7EXoWbYYxXpK",
  "key46": "3UV5UDFwJWeRE35KVVcrxAcMN3jQmhSxcwXkuhTtkHfVGM7GCZqbm2vmNUnFyqLCJxUNDLczKYC2JEvi3qdADTAj",
  "key47": "3bra9AU6eH5ixWagm3UmCM9NYMYywr5mZzALB2pqxMPvtY9ZpVVxTtG79KquXQND24ViJaf8jx8Yr3vGDkMqu9d",
  "key48": "2oyqauXksqFHC8JhUDYjoSweqC9VxYk6344eAmfyd9NfR6yRiMcvGFyj7Qg8yPB4NkVmFHwvWRrGVmZe7GKk6X86",
  "key49": "2s38ZxXdB8VwQXfUC9TXwV8G9EpiW3ohYUsdHNMMKxiNurqDN7mTRLzjESZT8oy2YeFpRsJLxcq9mBu8RHaHVJ7s"
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
