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
    "iLCnejGpcNbVy8kRf9ycV7BbZMxJMUP2k2msKvQh9tK7q3Uy6jo54t7quouWNAN5zWaDXBRBuUj6LzyBizST68G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hYpoLTkkcmkuzWr2GpvyWLcupfUUHU1hkV17gsV2MnKBzsYhU6A2GzBoHxW6ds3qMyGKd92dU4DNdj7ZeVUkXz5",
  "key1": "UXDGEzr3PeFwoxTBW4TZoN1CBaBmSBZZWxLe8SUyuhzu1Vc5aGYB4eMwAyV23oiA44xMc6j12JWYcSyg4Tgejvw",
  "key2": "5ZEdSozLJopEgbzH2rNmQmbveVawoGn2cRxMsVLqdkV7tX1UhL8DKksgBrpfR91rTU5iMVDu2YgG6gr34WJPq5Ap",
  "key3": "3pNptzw95jC6HPtmEDBjGp9EsmDpGWVrzdTEQiGqLucnENSg2SUhkzhofAvJ45d9oRcT3bvQvWGLCzSKrpT14Wej",
  "key4": "vdBJPu9Aq2fobKRaVLXNUnXieGbJPa3P8PnEv7x5CQzLUVizfevHuJAd9jTTBRZnVLeg1URjDLmJuMsmV13kfSn",
  "key5": "ViEQDr3WMwgdmnCuCfJkVC36t3wiWvytZiFmB4XS9zN4wS4m1Bqn5PmtWgaaVAm3AEq8qFQYwn96yGLCw4QVvTA",
  "key6": "2Dvw4EKQmbbavVTEuL6izjeRVWiqakKTDjfGCZUDH142M6JkVNkkBfWJyKd5YbDrtKpwToscfyPnRwQNY67nivv1",
  "key7": "42q1dSr8mrFuKRjRUZj4cvneBL3BYThxZPtG1GzA7XsqM5b5N2RocNiug9LG7DFaFryhfcL1byKeT5JpHzz6xoQc",
  "key8": "4His5QPFAkUPhQSdc3fWGsJSeGMRr55yywGxDA6E8Ef7C9togFKVctnKZz3rn9aSL7yccpf8spFq2DgR2XnToJL7",
  "key9": "3QaJTMEU12hwdADLNwYvcKdKvVs2SWKi7186yqbkqX8TYHeC1NhYhUxCwbbvG1mA8wELdakoPieNfBPN1KJBYDpJ",
  "key10": "4dEBs2LhrHPefV41vWkt6NMFfUcMHdxrRYZckxC4pV6L2zdmgKGMT7FJ3UMtE1XcKR2TXqKGSaucseRXetY1J6ZD",
  "key11": "46Jhotju8gg17tohvPGTtaTZrAexWwmh9owLRTARg2mpEf9MVrFUXSaszhnK2qiecQmG8WqUioEAzr3ZDhxTYJKW",
  "key12": "sFXUwJ9wCrkTgjrSWjaRhinmKp2QGNQyXrD83bgXmo9ay42yCmgR7F5Tm5FXymm6oSgh4HYspHfM5miAnQE7Acd",
  "key13": "3bUQtfR4xYoCsBZvcRJtDpS8yWJwTesJBDV961trSHgNQhkuAESfGocBNigS3jspHgUqtcdEnKMMi4eW21yBTvjA",
  "key14": "48E5FjmZKy75AtaXXYzqQRthuwfNDREZAQ8ZrQuC7Wo93TyzzmUqj6yPfUQfcgZQU3Dn5aaSX8bEu6ATmci7DTuV",
  "key15": "4iYvgY7Ho4HzsZiMKyxH2ZHqTXbSCWSRYLB4qpzcY4JtGJLuwVxhyo6Jdp7Tx2r6kVe9byChAQ8of1DHWjpZZicR",
  "key16": "85oAyujVTRe9AZXNSRomSKZpyxxEpbnuo9Fsn11Fcrt8932zHSs4NVTSUDUt7fzrK4VLWQBV23XYojeZrHuTzwV",
  "key17": "2UspLMUBPbj9AW9UjkkFQ871aQVSvjvwU7NpkkxcYXsurwEaR4Y2mVnWqUU8CeymXgc3mF4j8dqb3HYaQEXgPDU1",
  "key18": "3kKs15aETEw9YkcnLRBeXoY2HmNSQrFxrpBb1sYp5qamwidC6X8wsfEeWUtigvNmzzzRn7zDBaVGMtt2siu6HHi8",
  "key19": "yxBbSa6Lfvq6iLUFXi8GEaGMVWjDTHW7z82X9SNcvDYUYHGFFFKM7Z511MQPduj9Hktq1ZB6mkvzQv8FfZR1Jfn",
  "key20": "4AwNyF5Sq1FyDpXhY4SnCs3mxCwC57yytxGkfZJxBu86KBht6kYPq5Ykb7pWm68t513SXZR1EgsMwPYBQWg5YXDT",
  "key21": "4tSFdBjvzvSEMSdtQodFqVbDr49AEPTC9pzRHjsyeSgdbbdzhXGcE9wMmdh151Wjv5DPnCb4rsXX7VWGBAVpwLYx",
  "key22": "28fGd5QZMLfWf36NB5Msn7YkS7FZbS3mgTAw39jnFn1oRXngp6kLJuJMTeYXDcMeK7e8aKx2Sxk5g2wcc4hy8xb8",
  "key23": "5BnZxMaw6xvw3A3JeJt8cKFyeHsitkMUN4sKgZVuQDrKJoWunKgVQpdU3KQu289Uiv2rtStYoAuWZQjcoAJu8ku2",
  "key24": "48mdNCndGT9oYCgyhBA23zLn6t5WzfB9bMyvjqpMMR11Z7e3KqktXYRk4Ufpb5U5ZWCy1HbjghrzVxusLXNDDqGZ",
  "key25": "2cDtXCzZ38v2avoYeQaFV6d3kfGSvWJZmGVTTBLYk6gZUAW2MAZxd6rm5pZgpA3Uwpwq2Bduv6QMuP7B3bbwGaLg",
  "key26": "x9cABtvLgkwxRQxtQEyCc5R3aeodA65hxKuc6s41te5aoYrG4cMJaZn4bL6skiFNzurhFWfRF1myyLKovAjtNwP",
  "key27": "4T6xXtkoZfNx52VHYroSFDdLCXj3yZUT5LZnGtDbZF1EUYGnWk7NXbU4FJcRByzkSgGKz1oRDksVxxUTQNJvjwg9",
  "key28": "45AtuAjVGuQDtATFRZHi1UBX8MwG9XXaz2BEkhTvwyJvx49tWhBNFpmR3aufwTmerhXgT298BMT2tMuucG5qajZg",
  "key29": "3oCSV4bqdUDBptSFf78eDov2KZLBjnqVLwDo3FVLjhCHP4Mk8FRi1aE2kGDYJuprjJuG7uA8v4fB6HHacfTVvv17",
  "key30": "2TTxB8xNTmbDQTuWjPpU5D8VLs8fHhF2kT9qtpfPDe7K3F7wUo96jscxEqBUJvSufd9mooBp8KhennvUiiqUHvUb",
  "key31": "H6BQufwxUpE6uS1BtYSNuwTC65WFpuuNYJoY1H2qwLHqRr7PGPJrs62T7pwj1NUJbMSjaY1J9AX8kDmRNeTytkD",
  "key32": "4BCSbYg78gB65mTowcnDvP7MmjnB4LLojkrTmp4qSbRXdWnEyqQrXrQTA2dgm6MpyVz9DpfHgrZxRkdjStbdpARP",
  "key33": "2cQWBtvSxsgzBmHVGtNdZW4cdPAoUUET1xZe6LeyCBwrsV1LRUm3yrYy5Rx9NqR734K723VqvioB3nygMTchK9rD",
  "key34": "2tdederDZJzYyeV77YPYG174vtDZurwL1YTZRJWZCTYzK7PEpriL5eiqwRcnu1C7p5DRQu4HWcrBJEzpxSz9oYc8",
  "key35": "5mdz8iuWbJK3hVuBRWsYT4BePLCuyqh8pe3trBEjpudtWyyhMiV1pDB7wcwKoy3sB877iUZajgshTaWAj7XHEznb",
  "key36": "2gbt4Pav2bkyE43r6TmLeXYa6uLMkbbwR3XPxfXGxrs9rkdi3JKzHpqy8kUrXLixRcsqEr6DxGFbKwDeMvSWhcvP",
  "key37": "5E8nHe4QTEFHdvrvWNyuVkZrzB5YRzKGEvsAL1SX1cj8otCCNhGGxEkH4qd7xuSmsXDXory2tSZC6RYyfZTWmp6A",
  "key38": "5uVxfeg3x6N1GkJ59taEMLNjucSLmcESy8PrptXBJD66D8ueJMxmpRqetZ5EePgyRM7N3UcJBp45j4GcQ4S6e42K",
  "key39": "3UMo9rDh6b7pQkDVCXYC1E7J5DpDQB6HpQZj2voDuYLWLamcVWZNUJdhEgRRp8oXSLQ2Y1akLFwu9B4xZ7EsLFNn",
  "key40": "26DfqeJh38iyhTERSDkQMbbBGFFMNytSduyLnSauH43hWDzV5f7HHfZ9TAeqJ88FEEVHFs9Gw3b1hJ2bVMZcWT5z",
  "key41": "48uhGRXsz7uem9tmog44adiQsjj2GiuWQpaDnEvhnMKAsTTYSRnKVCu2mGXMASEfVvnRx6ZvFML6rm9thtxmy9NV",
  "key42": "67DdsePevka4jfgkGuZDJaNcwn7YawzsV2axSdQTMyqGCiCDYSBSVeytWT5WNHoTu4ncceBeLemc6PYMRBwYJLPJ",
  "key43": "2sHQoemAAXdkTJwrBaGpy6VPGTEje5ZiwqxjwL5nqUwHYo7VEXNqy73FzSZ9i5ytDnyePi1BBjBA22u1A1VAMWba",
  "key44": "5yqLgsAhgvpVVYVi4tonLRyz7QCrW9HbhzJB6ayDh44HqMojXH3YXa6GRddHMFbZGkC2qxJ2gZcQ6njUEED1MLUp",
  "key45": "556X3L6VficLThbcZ4Ft2QL1WPbNwNpDDKMeV3PBKfinsPc82z9xFdsbdAfZWk527VvXvtN2GxRCzqFtfK56vjyD",
  "key46": "NmJ5JRWHGoWW4soaBHAKFLBhVbCyUqvKvSeURvQEix5DGrUgMtGTwFGHpZNJmHiA5wNzCXkXSAozZ31AsRJJtxH"
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
