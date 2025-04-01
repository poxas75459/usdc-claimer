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
    "MG73GiQfE7W3nS35J2MhyC412Zwd9rcMNZ7oNemxZHZ94XSBdcBPuiR4e7imaNJmTT4p3M7g8rNhU5tsP7fEwXD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35Ch7EsS4BvTYpDtDFNFxb4ESfiP5p9jr5g4FfShFDwnHyeXHd7yAeQ56HtZxF7TdnJzVUAY1oXuM4PyephdoGzY",
  "key1": "3izY6JQ2EoKfjGFjEoMtVtMnFP1NJTt8t3ygVjLD2uFqaR2zRYC6NYXm8N9y6mqM4sJcVhkZTYtkxkV3UrvLcqbF",
  "key2": "UkGd9j35cbf8jY4RTXD9LBrEpQ8kzFqu4jVWbpgy1ybAKALjnor5CENhPonX7PTgXJmHB1TUeK1npNZYi9QYCL9",
  "key3": "2uWWuSpRyuijs1fCQYxT4kmXTjrzSAXqULwYTPc4ZKGeVZvNoBJLKTGLRARPHiUagkfUip1EG1KvsvBKsnkyA47o",
  "key4": "5mqy98AVUZA6t3JmytyLgVqR5kPGXKXyC3dGxmjoMTJU8KRvJtcipFAbuQhffSoxr5wxeeHJpaeVWgdHcGCxXtbu",
  "key5": "3vUYy6n53defgVSNwyZ69aHXgcbWL91ghi4SSvupoqbRvgfRxiTMtjBty47Xc7tGb9UW4LihAwtLBMTB7tmy1bJB",
  "key6": "xUVC2NeZK8dHTLH9qGfKB3Keh3CcV6trKjgRQbURbxh4rcxjCqCRvimnhA9f8yKPWxgKpWNEAkmcFoUKtYLWS5S",
  "key7": "3igGt7jVdn2qXykTg1WqSDrPQ1m7cvr1HzLmo4GfZrVCAxzrZ5tpNTAmzLqjEgskA9pXA7Kamzt6G9t1muLjMg8h",
  "key8": "4eVJDKNj4nYM8672yB9ta1TNeSa9BMYEhergDPCNP1HqhsnCHaqcAZkZ1PXk5nBx6D4rGZFxazBH9M24iZ9Yv47g",
  "key9": "57LXDTRKk821jzjSmXXm6CGzcAofojRHR5QvQzs44Fws22HWg56HdPEpA8BFcXkahXeUVXuCVt441cY9whg8NkeU",
  "key10": "4J3ymcKQ5vW9G1Jup9dFRGCMKov2xu7hsatKNS2sJF9FfCroG4gQqn5BoekagspZmJBfb1Eq25Q3BFwqDvBUKhda",
  "key11": "58weXrpCS8kNkRVkv2F7jiC1gEqQbwbzdW5DVbP5hNPVXsU7ampys8DRQkF2bonRWLsS3RU6nyhvZwe2baD28rwJ",
  "key12": "4L3XYSHWFzsiga1Gougpzw1oTDJJ1hqsvE6udJnJk8d8H9GvVfWWFbgswtYUvNb7DQYvPuasJbqeEmYJfRZgie8Z",
  "key13": "DaDxkVq1zNktJwKdSuEySJcPCCMrk35koyesHqNGh8v9b9kMGPy6rT7rcuoTax3qAqhXat5GW5xgEBMnrvSLa3h",
  "key14": "2u1AdTHeibMMY6BcdPAufnZew8atxM7dUv8VEP7rQHqD1cznuXh88e8iQWS4GoVCotWJMeBmbXZk7PJ9Pt9WC9YH",
  "key15": "5M5p245DmEoSySn7s3sUAc8839zDmxCTX8us2WGUhKo1sBbxj4WuZydiUenQrz2C3EpKm9zRCm8BCtVvrSwHX2Yp",
  "key16": "GyyaTEXr26oDzSnpamPigohCmXLT5bvjspqg5e16kyn6dAhJXzwYHgT93m37YfwUDRfovTpS86cZHkcDq4bc3CR",
  "key17": "kmDpmbS4wNdCxCwgkeRLxgun9meyK96QNKsLVF4m2Ku69M8esDoA4gouywAeUiNckGa5JnFDnq63RbWUS7EaaNm",
  "key18": "28STK8zevR6zzLjACA7MW3C1XLdrn36VyKJefuwFZyxMS8xTz5dEqsYYrkq6qJHMvcmSeeGyn2Hk15ofDCTEiMpk",
  "key19": "2VWYe4JGzZst2C5KVN8NpnwmvFPD8UE6NA9gXGP7qGQeq9eHffkhR9UYopGhuLYVP2dbZCPScr98VUMPv448Bi7v",
  "key20": "xmkM4xddE1Qj8NpoQJTeHh8MFYN1cpJjjC9JTmwJ6qzPdPbqryRhjpnUEyvVDkAqJAV28j59LWvXKp4YrzP9Xmx",
  "key21": "FEGYJBAq8Xe6TDAStSYSEap5E4E8M6GeSHfaY792KEFfAm2ETsK65go5uk927mijF8xv7sMQP9dHxsY1zX4A4mb",
  "key22": "3N98Mq4YLC3tHf4WzfPkWA5Ajvo8G15yubx9g3HmfW5GstP9xLMz1uJDdnR6j88EDKaZXHyVAZ2Q45aE9wSmj8Xv",
  "key23": "5KFZbeHzyeVCpdL3N2uswN6TQ8gtF585Liq2EiXneeUcG5RXjt5wtvj5Q9yjvksUaB8ufLbjMHv9hStJbLKebjR4",
  "key24": "5zuMzFAiN6GVNd4XfNZ8LJVqedeFTGKAfrc12YzRjYsQikCHLMPhpuordboKh3UvVW8reDbyQWxibeeRHzKJF5Ax",
  "key25": "2ZwQWLHsNNUYe56GspSSb9B9szRaYb9aw1tQo4xMvrKG2YT8HM222PjAwtzJhFLw9S9oPB1J29fGqo64TAF9bWfc",
  "key26": "65R2bApUtryeouHUziuAie1VV8Zg92uvFb5qMS1SFnmBeNVFSBqV89bYFeTi219bT26qqkGVjSmT3MzvMgSZki9k",
  "key27": "2qLuvYbtKokNJPmBs7aRhJaPg4bTQmXNziw1hcdKYt1TJKm4giTyFC2GsUJog9htMswi2KTMBUxEheRxhP8KR25X",
  "key28": "5YRVAiL6pWJ3h7RSzjjL7ZrspxgrRgSFkykdmxjdG5iHAEJyQAHij4vnPA2YWa6cZHhu3M1bdjXNkHMBerJpQAy4",
  "key29": "2D8moVVqXDizkRNB1ELB3Uaxt2rwn9iMYrJSf7cnLJvcXEXPxsaXUFNJwFan6tySSbTXL3DtjpUV5puFvtoujosy",
  "key30": "3CLXcfAiMmbWjaktgAoiosKQM2R98JrQQcuERMLvPEV3vzhyDXxrd64uVfZvbAFkU4vmZfYJ12VyXjqpRrw5apT8",
  "key31": "4oAhk8V4iJQXdV3C4eXB6eaGugHRfN7cEo1Yw2zK6R73DUpiN4ZnPLW9RYxpSCXUmveNQBR9MPfnfwexpeVUMVPK",
  "key32": "5gPPebQEQufAC4BtKnzyPwspmRntFWu5fxba5RsFHy9oxM4frEHpr6PmGUDarMkzMRzJzkeqJ2bNi8GBrKi1FZu8",
  "key33": "5fefxAMf8SL6hmrQHE8szH1v2G1MvTU4mG5cxJyJ1uFVD7MUzyWTxAP3b5CXHpkoHzKDzi83fs8NCEehonU7rv6p",
  "key34": "5FjwydBMkJNvKnyHaqppAwEpMfKSxPumgL9UkUt9N2vewoTzi5XZn6Z5iNH2LmbGWbBgVFFMhbeGLjVR6xETqTdH",
  "key35": "2pgr5k8jZpWyoAUSRxd9auiYoqWAZ9Ykn66zNyQP3NPLJE4rxxEh4bqzXWTr4q2KK75AeoUbbUWgJL6gqkFEoUak",
  "key36": "62vKuT3RwQAgsLXu2JVVYXCuJcnmmvE2ePp73qnJFVuWWQ1orbTJz92ScW244apB7nVCPtbqNR3Y98APJ5hjYGKM",
  "key37": "5LdjjL4TSicoS8XNX7u2S8iqkzvC3gBuRso8AjAqSR9jHjHyLaRK1wjMauMZEJxyxejXozhbBtewWiHzEKWFdTpA"
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
