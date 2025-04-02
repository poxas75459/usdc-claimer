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
    "3bQAi67aZ8Vz7mGJd4REePqUApPTMckCgHPoogcMK8Dfyu3meJiU464rxPBq723ZQmHbPePGKh34HMeJXKDZaPUc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46nxfwwJkHBnkwWuo68pApvv6siKX5wmCnAoxpPj4zDqCzvKR9kShXiT3iE6Qojbd7VwoD2H4neHzJhrbsbh42HD",
  "key1": "bnJV3V1Le9f5qSHBJzihHPGvANDFpJGCTsbSG15FLxoj2rBezSoGtCQHBKhMr3VXrePnhT598L9Qrzp9epXodQs",
  "key2": "5bmPj34YrtT4CXdzeBpa16moZYJ3rZp7W7D1JmoywJhmE7w7SwrVo23QV5iWnsN8VVXWNT7ZuBiu1xKCYkEWmbtA",
  "key3": "85Jc68mnHFVA8iRwY9tf58NPDb3raBeSqy5cPmSDb14exeheYCE9a9qoz32vKmfZxU1FMgRoYDgwN3SFFYGSTKT",
  "key4": "59DCSHzHfr1bGCPtBrszqVxrPDh4tFaAof8sSBAmahagzuc3mLaoEbQdmMpqxCRvu7LZ32qsKNnpDBufLR2vrhms",
  "key5": "3rroTVth7M33aBJbQhSczKkarf5UnWuiQ2JttemKjPZKiVQnwQWAQAdoiC66fJweovSMYXcY5qPz8w1H4XZsoweg",
  "key6": "4emwiN18ho6M5GPhuqCUyt7WdaeVqtJT7wCgpcPK63UetuNpRDmnSSx4gxFqbpUb3n1WK6pbwEq1VSdg4ak9pxDf",
  "key7": "D6qS7sHNYgB3ZaUmTq7jQC6XsuFDgJucpRX59BR6sJDXPGnHRWvHrfeXmwvZ3ihC3T445KcKtFxCXeecFCibwHw",
  "key8": "2LD53X13TVdJsqPFhRLeAmWorwNjEpYNz99Yhje6WoezJrye82pm771JVhPHcf4wd1WRhL4kFWz5AA3aFJMoJPpD",
  "key9": "4beNN3THbpyTZtiXvrJaeA36q1p8ZidmWieumccy1RKTwZ8iyTB7jbvDtL1i6fHqhgHvDc67qFtkZ2w6KvjZ6gyp",
  "key10": "4utLwzTCpF8HaGXaEMVKyQcRb9AZy1hsBhyFnNugLEJGN3UwpYbADUtkyRW9bkVLCZSAvBS7KQ5eFrCkA9QJQbtc",
  "key11": "35gv2MssjAWTbHqzsMd9yMWBXx5xq6cHNsK3YF6XctTUKMSniHd7iZQ4TX9yNEB8fGjUGHXY7Fod1vwaPeGbHwzM",
  "key12": "4cFefsuG3UeGd9PoNSTjmdrfhk4uuWHxDnpVJnehqFcoYK8eCUhg1hUg3Wf9x9MQggWScvKAt3q8JueCCJGPZZnE",
  "key13": "3C7prGqG3iaS5sPVhDRbQVUSPP6Dj29rXnEiMNxQRDv8ZbLo2w7ZELxYShi1655iEmEt4qG84Rpjjg2iPr9ZknJT",
  "key14": "2MeYrex79bXVN48WEJL4zrWYEqd8Bj62Fh6Vej5GEGK5te4ALUoEbyPncR1F1zNzVwnrweTZg5KoNH6ZbfQLHWa5",
  "key15": "53p9r9S8X7PGZaWjhKYJBL8bFfA9PSXucqHkXvZJQ665SxcaLGbMe9CKmpiC85iu3AEDpYVKeaGFcUbZKDR49ZyZ",
  "key16": "4PURtBYHxUijF75QYeTaWtMt7ewZNWjzsAMpd2VGYCugp6ZPzh37Ar1WxL3FUksgBKPD5DSmKdidn5r3k6fhx8vb",
  "key17": "zNS6NdUGsRr95iZFdBK7DhEUWHnuxxriPoYM6MmSrorEVM5kYwpdERpcCJwsbL8YKz5WhDsgf8V1q8CZJf5651K",
  "key18": "4a4vcarEFwMwvwNMiAs3KTmAw5RofjteKSJxZmp4Gi27dQowTGwLHLbdvUvrVY3sWyCoMnNkTDmEo6tCJSjD4i3k",
  "key19": "EHpcyRMBSUUTbG6TwPosTFH6xmJQPPdL553rNQraMEeSQXMfW58sjMGafMTV3FdEbpqvmnC1pTDWTg9sPTM6NMJ",
  "key20": "4mKLYJvUH8hXj2wgDcosG3pM7pCUmCEuwisEc5i2r1ZdLC5UZC95pYC7CKUA98BB5dxdRHxZqnRqQNqWDCrLgY7i",
  "key21": "4NcmPnXb23LHCUBwCm3tqgRunQA6FYeAEkL5FGpbwkmv6zB3wC3C5vt17uvbEWcQtbZjGGSLF8EDP19R6PageUkM",
  "key22": "4MaMVyn9Yu1xB1x1JM7jFtdD7YrLVTMQo3DbPmYoGMF852eLfRR6BHYr4kYHWgxCDGDRqBmUTHtebmSv678CGToU",
  "key23": "5Dooph8UayVyxDMFG9Vy9u3HX7JvaFRQJMj8qVKUVMfNcXvt5PXHyGfQdnCWvo9ajBvxtbbUjp1chLeBZAtq6G7a",
  "key24": "V8x4qGfVRe4ESXjr7UknpGiQmPFGNcfEt8T1izLBS4ewWKmWX7AxBdUw9ca9stR8gXux29U7ydvPrfyrQ1pW8rn",
  "key25": "2BW3LuxgqeJFmJHggpRCaa37REBLoUb61kjKRbqZtLxYmighedx33nirQqGL4Dc33ES2EEo7jzMQu52K5TBfjXLq",
  "key26": "3PdPNstRo94bLivY3794fnnj93qEFHUDQFcj6Gjuyxz7kH6LKhYPd9UVbVz2B4dVLYHXVJkum2eYuP5ZXM6rGZGK",
  "key27": "2DgQbdXgjyYrMCfsn621iR8czhYovmV78SrrEvEb1nUquRqE4268JBUmhHkmKUd34xVN1t5dsX5h8wERppm5rFpa",
  "key28": "4QtXB9jiDobfwCmKsnx9VfEBPFxWyCC6WnkQ9ikh4xEHHgJkGYJJYMFbahPEfAYGi7qdYoCzVUpLCu6D2dx6VcmY",
  "key29": "3rXby4yfWhoDMrizrabtPKqrkWJNaPGTcr5gL34qf4ig7DbUaVddF1wuEkZ2Rse3LnZgmdpEyLvXV7eLM8KUGVw8",
  "key30": "3sigLyzNPVpHH3VJ4rXBykx45K6hgLMHVWyVUq3twHEmbjT8WRoodCdzmZn8CabTzCZ2zbjoJDHpRJNVVs2NghRH",
  "key31": "5EoV1ztr6v252U14MvRWMAH6S6jybWMjKUs27k1JmAmSDjua911gjUt6Ca33rogJPyjysAbVpmCryJAMz33WDRjq",
  "key32": "iaPJE2qmU6Fz81WWBQbfA9x9nWdKf9uaRUwwVaDJkEM97TLzDvKbQJP9pabZz5ci1ZYgCj6zFwVYtbvCD8yZdR7",
  "key33": "Xp6kHHqm7T9zErrSFN9qshxGxGQmA9u8ibjDxRHYJ7tkQ58jGxNwNu21ZB2WaV6nwE9E9mk2bejgwDRJ9C6o9PR",
  "key34": "4sAcrR1ULuZjxqQ3d71Nk1heJMUd5uhvyWyPB41z9GJcxPL88WFv7pmbRx5KQ9sSzQVSRh8g6NZBkG1NUN9q9r1c",
  "key35": "4R5w4Aqf268evYufksdqY6FH9rfaTbTsKhdqDdeiZSMCCo4Q81c79K6tvbyjtWyWruewYBKiCib326BfJTBB2Muk",
  "key36": "6W6fW4k1NB7yX1qAsGUtkLscGsfFQYxSqCaevoFkcb6G7uGx8QxSfBbTk8DKYeJbtFRqmZQGNhocFucbEXHCvSc",
  "key37": "JNGD2LtzPvi8QFA4p4skE8BRXZSc74abptQnBo3iFQNiR2qmqEVPWM4SCwS3CwrWuf8JMXqMu28yycwKZ6d75R1",
  "key38": "5ZHN1wHwSMHxupwCQkx2imyBwMgRsquFCR4Tt4k8eMRQgFJmM8u1kiLYNXAjS2ha96C9febzc89o6CG3sjrtGRLX",
  "key39": "5R9ciRyAT73vtp4PFzM2z6XAejvdRWXeopywXtZiirUwRkb941p82Cz77QMk8TDtgqRwuCNqspm7kHADY3cV44b5",
  "key40": "3c2MgcwJtjJu93CmTyqxmJBp7hgTaaCaVzyTqYQrz8mrTKCxsSa1BknbB2p4SsZGaNhTxWmtrtiAe3mW3ShpCc7S"
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
