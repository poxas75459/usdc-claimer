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
    "F3AjjrqJbqz5wLF7g8LwzUFc5GWJCh6wz6b7UK68ryPdPNsonoivWvs6SW4gkPXoHrKzgStuTtohe9N5pRJRB1c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bgSHF28Ec5w7oL2SaLvTMGFoSwoVdzckT4AQCQaRE7KZ6g3dKVCR9ATcnNCiQqqZHYrbh28kTTBSnumaSUPuLK9",
  "key1": "3xphNZqXBH8AzEXHFd4PhbZYBNaicviyvGqsk2GGVQ6yc2Kiea43sc3tWGY5YTwmByRLCqrB6yDrdNphDbqWpahK",
  "key2": "23ComCQVfxRW3WYezL3VRRjEYZySh4WxafiZn7aN7DFYeDd2xYbm524jxi3SC8g9YQyXs8xwQuukamoPmo9G9CrJ",
  "key3": "46mSDeyfWf9jWosxvKvnJF5GutaAZgNL5vnLBAaLstq7f5AP14pyhNnnLZtvJiCZzZtFadpk7ssbhpVvZZWiWA4E",
  "key4": "55xwM94BHR7X5TA1zbifLZ4xFUmkcS7mU5u8UJXb3Na5sMovbwdEmFHJDf3bP6t7vSerT4TkRkvJEPubm17rrQdJ",
  "key5": "3WWV1zCVYH4BbAWPv6CQo3GmamgmqBEcQzTbPLJzuBPTpozxJYxf4XKd1qM79TXNFBmLCMrVMguDQGFt7uvyNhTP",
  "key6": "3aBHVZdEgmFHUDggG8e8SLuca8ks4T68cAs4yjNQqsHWUckGsKSM2KVTzWUi9TTn9nHtXTccE5LE3ftg2HSzKkJV",
  "key7": "39geEUZcWvXf23v7qm17Y3VWeXvu2LRAVp5m6cGEbLzo6QVZPcVUg1kksaZPsnCs6abzYiAxekuBW4AoCSYn2V2K",
  "key8": "4tYytVxxJaKfN1jUXDSgPUbf6HS1xnUXQKVJd26rPRsfATJAPJdXd846CNS4KvGhjaBCe9FzkzESX6r3NJ6YYAj",
  "key9": "5KEDXuUJiymnEJjTBDePFWrbjzrcXP5dkytMSRkKw34aYaV7j443HEQz9kk9CRfcc32S7z8GmjGw1FkGXQ4KUQnX",
  "key10": "8edwNUpAeiq3q2g7vd3F2tXwcWm1t7L9A7sEzeDqDQGeSibTCmCtCzbVbL2RxnvXUxMzQn3yyDrw2nYUPUowjGL",
  "key11": "YLL1LdpD2zSqsQY1yU8xRpj37MSvnh4sqDR61CHe2VSTX6sj9TTxEtKRbvhFrPzzqSFC3EusNK42kyhSeeutVwS",
  "key12": "3xE4Cnzvc6KtSzdzpp6TPo4DQpN2FwQ8QsvRwyudMUUr5uiG12YtziLQMZGvqyY4md4TCpxpGtxjvY7wUwhaS37Y",
  "key13": "3yzbGfL6DkJSXaztJzoLW9vPjAqmUGGJTeaCb8dg5jdcAMi4UxwGv4BccZnafdnrZ68paAkkpDMWpLbdJfzmTFUH",
  "key14": "3h8Q2acoUcPa4Ljn9A9bJAt8Yf7fiR7nr419YgxZ6W43ZG8VTPApCEpXfLnazMasHZyPsLK2F3DJvrWJhqQ9EbrN",
  "key15": "3eCLquFuHMKWiaMBYA2QxJxjfU2R1rW1LVzL4jBNrVZpUD6RAcDae5bThocBod7Edjf7Jg62VQHWWNaF66VhD344",
  "key16": "5z79CB73TepnS6VWs4n7BnMHePLgMnY3RpxnoEdzs1WYWKVXd4DrCGnkE9hjL3vUPJm7Pc267u28pQHzfJrBsUhh",
  "key17": "2bLEFVyFceVqkWxoTmY1TsVyMc7CHB6Zo7SmRT8Wnm5SBx4vm7f3PTRCT6AcbM9TFnTjE77TuR4xSknw6e4MNvhC",
  "key18": "573SAqjSHbmLNLtQvG1TrPzQRdfxqMseTib4Nnhkm2K5DzuS8VWmch9tUcBdgBmZNhZj5JcZ4Ti7Ez695BJPjbz4",
  "key19": "4V2dC3z8JbL4ZKYoSLbTX1EUjB3BHBKLyxrJzd4uknac4swi3puXsR6wujUCZddHVYTQwmGx5D1epmZCJMpmLTdt",
  "key20": "eBtdVJvp32hQmtX3VqngaPktMAZqRd3NoWYkYF9Q2uyu6S9QRws8F2i9aXZSfC9EyuzgFZWaRVh7CixRhya8AyE",
  "key21": "2zAKrVkW6WBKsVy4srBTFBYoZ7RfYZTr2uZRwUHqL5GJXEd5jEgbC2bYw8XAvsEkYrDBX7iWbJZ5fwycpwDjuEDP",
  "key22": "5WSgEjxCS67svZGbHiva96owbZ77eaQ9M8SJTvKmKLPmgfW66YTALqmP48gpvFCSDYQQ1E8bQQTcdTL7hNAhmPJo",
  "key23": "2Sa8KgQuATErJGZHpVkNX4gDndPwp6eEu4cKkMXivAsc1HoFisihy4qojQstwaHYhgCb9jAXDKg5CAWMY6WnxNEs",
  "key24": "MUhCm3sEjsoeMywNRtH38gomM5FDkDwqg8czmjGbsTSHRDUiLY4vCnKqQEXJ2Zh3Tz1wj9QbAaFvbapUSR6wprC",
  "key25": "pqyHYBgDcRZPS114ouENGVzLTBpAgHXvzBw5MjBJt7vKyW6DJrr89MxLcwsRmcVosedTj5aYxE2Y2wCs7SM96k1",
  "key26": "xJzShHppPRhkd9EWEhU7ATwZGtV7PiPd9QAnnpotKdJ7QDLUXFZAy6r9RfCLw7JGXWyVAwxTk46y8x2pHDiy5VY",
  "key27": "4evuHPDdDEUxBERiMkVAJ2GPUua6GaeNEturNwWsJpRvjC5ZKBPY4wpye3DKkRqYVtCktphHAt9ZM9g6NWYJHaed",
  "key28": "4jmMSizAodwgnsy9kn3b9s3i4DWp3UTmXfG7gMjBXWGY1rBD4yJ35GgQnBqnHPpfLGEH1WtSZREBczwkQ22N2tuF",
  "key29": "2hCfaKkGK2WymnPjxJFkyN5QBKgtgCctNeWs48bK5U387rgUud5mvf1NZVqqBR4UgNtC2X2zUr6bcbRPMW3VeCjW",
  "key30": "56gvFww7R1BW7c2rtw2fedtewQnD25LRGiw87ssLRF4zLzVbM8aTzA33fq8ywFr4RdVs3bVEt8rBEdQm1jHZJPuN",
  "key31": "4QSy8BsJMtMUHQS4QbZn2vu8YNKUndsNYgePFHqGRDTpNCVNjM3Z4AsEe66ZbSQENN2LNag4JaGn8NXucXWpNLQS",
  "key32": "2VJ2Dfm2irfmkzGcak7SkS3puYZDSsxMa6XbnFfvQRTvGEPfGQAb13nHFmPkpJoTZMsKmV6QZRitXuPXG2VwL4Vq",
  "key33": "38TeavGW7ugj8R2LuSrgkNiRHiDYgo8oL3weF7cPgETj5EnMk6d4XR2ZGaLBTRqZyFxXyKG4SNTBtAGyYbgJRayU",
  "key34": "2341F8vtpQjfN2HBvq7md9PBRtyc6SanhffPkZZb38T4xJRu1WB1Zw3oFe1rYK9iY8WZcHdT2xc1p7gcXrWLTcWa",
  "key35": "5dwyvXUbVP3xEpFKwuYczXCgo3Lfhs2nYRTxFuT7QrNmNuy6KaYKZBzxPKMiZV44YSQygLSan2hWfAXN5Xj8XQux",
  "key36": "4fraycNCBPtbKbP6aNKNsYsu8sVw4z4kaiGCN25Ay4ayEAsQ6u2siX9d8oU1BvtvZFc2o2YzfKf7YucnXNG7CcA",
  "key37": "36Wywn41hF8VoVEmyEgzQ1rXSDBXSSBgcQEfzvwqAnPz2A6gc3cUaihtvgoPMhZeUhvHhEeLH3vqjh6inwsw8M9r",
  "key38": "2xGugYocGjxvcmmkaK6RLQqpWMdGe4tyUaJeADUsP5pHVEFHfFbeCMXFvv9omi3o21GWPkQkhoyxX6DGiTEtJdEs",
  "key39": "4anMficVuPTzcGrh6gMwfBrbWBzicN3tkqXg9oVXEJ1pDNs8jdBJ8LC86us3GKJgktsiYKNYU3Wdx584eWG8PkgS",
  "key40": "XhsQwCHwyiZtfgGU6Vve7Uxtm9cqVS5oBDcpUmkySKY38vLhX2iLqfr3DzyrQiPdyLxA5LoJSUvtoMnnQSmFa3j",
  "key41": "g63JKMb3nTSG96dZQjSPc1gaj8n4ryUx1xpk44aHVxdaUc9p5WBYFQ9E7Mdr5kcqttZBVjG71NL7WZi1qoSQmtV"
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
