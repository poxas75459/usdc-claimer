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
    "2obbHqyTgrn3kRfA5CYiamV1HTTuA5Sj1uN9Z1DCobShWUBfgpQMeTcHEtgA3YU2Cu37DCRRzSnehbXsEcmsbsrd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5is5LHXZ3JRPE3fnkfmpwVsbV3BohXdeeVWXz6SzzpcvcqPXgey9hEWvyLw3MpP1g1PQ4yTBiiDdnTt4BoUNqZeB",
  "key1": "34Tj3rfXkwC16jy3UxQRg3VgbzR94ZCdt1pbJawCPukcVnLWCZh8PHYzJgnyEUWCpq9R21XLCYEa3WJD2NKQtPo9",
  "key2": "4spEGSCMQjgYVDgZaMVXnYJbcNAZYbCGLb9fp6zEvRKK6iLrsGRLUmSMGpgJb8sZ3NqfeuUb5GzUZVLAr6TDKHLi",
  "key3": "21hzt7W75eYYaMUEeWtQzPVtuAQqRx6qrjNWZqbGtcJFTr2r6W87RDFZe4Yk9CyWmxpW6DxWJuE9uGD7kgFiCbk9",
  "key4": "5t5PzdYefTGZscaYWNaLBNCDYMZahmgfAKEmuc6J3suGorxS5jVU6GktRaNWw1akdv18eVQpoguoDo1DPfrZtBwX",
  "key5": "3fMhVZ2qGRPF35tUiB6te8Mq5TW4Y2fhrm4PPRwwRFaCRzn6X7QNXJRQJHg7ysJaCJTkfnmHvv6ufh9DQGr6r1F5",
  "key6": "WrjCZvWYofNQZuAFZdfbeWzv3nUQFLYB8fwrQS4tGgtKjwqdNnp5PC6t3BM2UCJ3zy1v4giNDXi8XkAXQ5RimqN",
  "key7": "52ycE4dkeugZVUAMJdHbiDade9s5JeaFHymmXG3ywAVPcLPs5SPiAwayHe7CA6d9ZBRwGrAQhhdeNyjWeGvEvnbR",
  "key8": "3dKZniqHBTEChdsDP84CSv6bZRxvxQizPwsGVy8sHbJ5ASgHJmU9zn9murqVQELFfZhpw5usZBvv5a1xgRuuQ6QN",
  "key9": "2AUdNY12QFAH7mTiefg78av5J8coc43hi1sB2hLmgYeAphKBcGDkHw94scBiRfWSUWCi6HzFS81PSgGsoPUTnzjE",
  "key10": "2Eg1BWD8VxcYdhvieVu5wJ27tFngszkxf9ntzk2PpqBpHLAKZQrpT4k3vMYwUTJFLxg49txoPrvnY5qJPofRVRkx",
  "key11": "3JdFXhKMsfSgDn1jtQ6kPqifQs1uZhFXkbC5sQVF1anBeAVEXJQXDkcQyAPSLZrivndv1anqvzXPwCCyYRo9UKoP",
  "key12": "WGnBrN1NhgaSDRWhctMpbfcgE2cAS6zJchAR1L1BMbW31WC5tKH6SriEWVosu8R5QbjsEPZUqsfHAQSxY8ofZCz",
  "key13": "3rVihL7opHw7dmmDmHTKqkfBqAeBNFa6ZZFCEaU3KvxKYHNwkZ2h6qgBAcyig9nFCXjmxhzcGnQzrHi2RXV4a8qu",
  "key14": "5Qc4hWfb2XNRCMxyX9ysrrJk3Z52P4Bb63vPvhmmhn7az1zojdbqG6RMyaQVUWUHWT6nc4jMfmHFx5EQnFkRtQfK",
  "key15": "5JLMV6M9M5p7yrNrFgpekDsChrABVH7GyTDFeC7V8cooYtvoVa5m9n53epWJEVURQandQBtMe4Suu8MpvdCSMR5D",
  "key16": "ABwGGEMAE9EN3Evcw7tsWHs3Xip64VwCufFX7MA2jqQdoEobvpAvrmeupqKVCVpQeoy6LgEDhCUaHV3HmzvcGS1",
  "key17": "2XFYFi78YvwtF7JhZEETKiPpSxK5rkZqyhqcCDGjijT2xjGdNBvbLAEdQG9cJYGyypBJNnJe3wBoS93khwsMKYtd",
  "key18": "54ggHQtiSoya4CpYGiDnUUTpRUday11oG57xjZhs9HA8t1kXd8S8QKfbotegub5YPzqHkeeDcS8zTUcR9iotv4Dp",
  "key19": "5ozfaWMnbpasFfPttAMimTPmE5VpApHsjjvDhTAK6jdvx5SQCTH3RZPSeHryDFjuLTT3MUtXNMpXQ59nebTgfnt",
  "key20": "u6LdQeXqw7d1DKQhyXdE4XPSmYLmDxP5b1fpYE4Hp9CTSwknRje8BVqJhwpGkvCpSef2Z8ZdGcWABrgpfKnLSrq",
  "key21": "zcenRCn4kzk6uN5uzYXP3bLKxofWKbTMcDgHWN5i7BquXYbxGo6j8CYFEWHoDqJfEbba5GWKmfEFYErg6toH5N4",
  "key22": "5B2M33QrnKnyZB7qeyFYT5Ejh5Aa1ykUfrUyUmxVuLz6uDP6y6hxFa8h1FGjLY3RKJ1a9fwyacnNdbkj4xTXDNpw",
  "key23": "4MsEFA2ZEGgynaWcv95wCvNuEK2jSAgeDKQX2176hQsB318SAvoNfc6TNp7Ktj7pnfX3SDhiBqsAEVsKK9wXniHC",
  "key24": "43yg4fFStrcWW5FJwFBUqMiWCa78WEpCjvBr2YXn386jZvYZrtsVdb8VAoW4hB6Vs3TpdoHqL8rJjCLWu3M4E7pg",
  "key25": "3wsuCEFB64H2vwYXb6kEnVY6nvGKfnhoxHwh5HByzGCXzxtFyML5z1duNkKqMULpFQ6zJcMBVZDYmunkWpMb7JBg",
  "key26": "4xCwKCAbRaH8G9xur5dao7KRAhGTmDWofAUTWiJr4imVAE6jyaMGuQJKxC5F7F8WgUAodN1MLUxREq9u2ioZs1jm",
  "key27": "2sCWTgT6LnGE8MFQWUjF1jrQvgN622pxZ4kKd68U1KfejV43JXPYEBW58bw42swASGhr1aep2q7KGhtqwQ8PcZuf",
  "key28": "2128cuRuFy5wjrWXwYVdRDFoe64w285gfpJ5Zn2RtWCG4Y18f4gpXcBGPagq3SnftYt52TRHjDodvGQNkLfeoS6s",
  "key29": "4vxog8ccNG5YpfGTrRhpRanrutknKGnF63bvhV9FeMwvFsi4eKRBdvvai89QpmMY937n16EtQqvpfDbHtw8Kh6zq",
  "key30": "2PbdsXfPhA5LEZ5qAN7p4beKeD7rbJ3f9MC9sHAcW2jmdYytPARmByQB9oFepUkKyh5u883HPyUAs9SrxB4JgVXd",
  "key31": "2ZqeMLos7Ch1Exbt7C7h5X5HFU7SWhkRLgmXU9MHJweYXmrqUGVEEBwTDbVBNtoHPix8B4v3Kdz1a8aPkmNbTXSE",
  "key32": "EBtb9aVmB6UFkKmFUeNd7J7bbx5LENadkrwuD8gxdo29emAXwHi6o1JAeDuiqEWfmdJvW5HKt1hj2Qp5o3uQqXi",
  "key33": "5q9cCho78Lfowd2Dubu7VgWvN6LxtXhrMTNEVb5ccrgxp5Qw9SBDqTeNuLpXnro7daJTWpA65h4uSkQqUFxqpyq3",
  "key34": "42zZMFL2ZiqXaXySX8GRkH4rohMv4SF8ZUYf1BTmUB9YKefzHFVrWq2gqRvCq1FkfNUmqhuXNdtJrZbuzX9JfNvC",
  "key35": "41Lfw3k8KNKp5eDhMmdb431SLmcCZR3WsqN7FPSurfe1KBkdLLZxkui5VZ8Uxx686gxaV4CXLm1rk7WLZpbEWn8v",
  "key36": "2FbJQHbZsR5Ga7AQWBsVPjqizjhMLt3v6WN5wswRo6w2WWB7xiYazFShxpbDCRBLDWdbSrPK369jrDyjLXCM5TmV",
  "key37": "4C55GxAZdjxwpNh15ozXNLRfzKDLhTR7oBusgD5YMWtC5PPEkJ56kxi9ubym1v9DvA5ZE4y1gVUtiT8RV1QdXLpZ",
  "key38": "w1vE5SdagXJ8hQorTzy2RhAPePQKwiAeDZenGN2twJWMkKGq8N497etBJzjpJRBv78qiLo6Wmz29EmP4wXowxF6",
  "key39": "3R39HtSeHQsQmKivemPz8vMFKAKcNWcuqgctZiqDNJtwpdPMgQ1J59HyMbQ2PvRTzF7eTZcerRFBsJ1jtMgoT9u7",
  "key40": "5XZH6LDtJtAKinduc4gph4wTYrsd5kks8k5Cj9qDN1KtmA5aW2EudNM2fbrwfcitS2v111nCd4M3kAnfdBGnHHxm"
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
