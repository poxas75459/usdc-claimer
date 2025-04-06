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
    "2vs69nXk4P97F4bq4m9F1hdS9ghNR8nKoUvJA5Xh88gG5Exqygk3pPF1FMesVGrXEGzoursjE8dNhhwLN8ix7CEq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gegsqxdgssmkAvKYy564tpmVpieoVhvdKc3VJdbTDQVWW7PgWjjGxpvLBjcSsSSKJ3rcBADBPcogZj8BPut3bxf",
  "key1": "569a6Ko3VouT6MJyitVi4fRRiSp2DCFe8QXBiAqBkVipcfFFPxjpYJZvFNcGEkCWJqrernsogucL9A1qs8AkJ51o",
  "key2": "274tXWWaUWa65maYxBpgTQ2R9FTjnRu51xZoJMPUoEfnm7yh3W4DGTFcJP193fWREtw8fDhzpFnnKGxWJMrLD9sb",
  "key3": "4qD2YBbCGMJJpXcak3wPjvjMtiriEVmpkn5RxNV1MvDr7pdm5BKbdLybGbuj6HQp4XgCkyvduTQhFS5Qa6sWhjZg",
  "key4": "5pWTY548XByr87vfSbhKh56YrGozmUSK1gQY1owGRBXZ1gJWrTNwifTiL8fcXZCMptAFh2GYCQ358iRcxWTH36un",
  "key5": "2gJVK3Tcz9Q3oYneqH4LRLm1uC2gSRtUnakvyfdkciTdfDB5VUyVtWXnhrtHwCzjeL9LJHmJKg8QHHLKLKK2bSUU",
  "key6": "3LoWLj8JHQCmSFRsiKz13VkqzqHzPtCkstbVX7SYzVuafxtgP7UtSJnQAFHuDmPJR8LpLCgSXxWfSg1RhAFJD84r",
  "key7": "ZN1ZavW9GqrJLzpCwQoenM7XW2EPmLQUHpS9zaFJhtBPQTQ2vMQWc9WTcuLqKd4AF2hKt3r691Hppu13Xdtk48u",
  "key8": "3fh1gqBMSrruZ3V5WFtXepjkZBromWvSppR9hF9gwQSvcJ3FDzzpQkKcXWonZztYHwUiLMrzRJ1RSd7yjutpFLaK",
  "key9": "4dhcnCkqD1MZ6uTxuSwcKT3tL1XsQrADNhxcuUZbCRFMCVhzoFgiD7qSLid88DvZScjZzF3m1egKZdtSdNvr6Fgp",
  "key10": "5FSXJEZmLpPpu54jMxgqcdE1y9CaE8AAbYAnDvjnRoL6gWa3AMGAjtnsdkrGaM9HDFDSLp1e1hdywXZNcEdV2qbK",
  "key11": "4dAj92npXu37MNJcssU748omUuTmAueKhrEAS9uJUnfubzTvRqNZnwqALwwBFNKqq21j9cSsGn6mHaYb1GHXLQcf",
  "key12": "459ELMLKRrwTC5xoWUSGZGJRRU5PqAoM3w3XwkmXqSrHSkJZn8ouZc8egu1fHsNYHDyP57ju6vQpfvqzXnuiD6AZ",
  "key13": "39rB8Hcbgtwgx9YPezPKHbWZDz3M4nX6ZMTq2TZjA4J1ujpb98sacv9WS6j77LquKdsm4jQxEeyCkPv4pGNfxwGh",
  "key14": "51r2pUrGgFqbfUUxFi5QckFpvQp3jNjAbL411V4syr22KFTKJrkijVR5r1umtbKQRQ7rc1tJVx7J4dWCRZk2MRmZ",
  "key15": "2Z12kio2CZ7JYNC7pZEjVFTbab1FgWyxcEwASYEcZaypAkRo9663Bnwq7W1CgDMwPscbqwrz7B5iHVKCCxDhmbsg",
  "key16": "3QHaohWPPqARFPBzc3gHZfVR3JADcfW3BGcY4u9Z2eyfJW6wJmdDW3zYVrZJ8vJWLWawMY8E6bCPdXZAF8arxerj",
  "key17": "2HtfHv29qMd6m3dcbRh1CGwJXPtmvfNztLpA6Q1AGB2JWVrzZibKh7bg7Y2r4x2aoZXYKeicu5UcxaiZWAFgy5uF",
  "key18": "5eoaXWT3iod1LC2mKdj7EWQY85bNhnx4sgeQeX4dKzciN5Mu36mevBocpNhcwP2EP9tX1aapdDCWyUi74pwrScTF",
  "key19": "2GkgdQiSTvCgdyUzPY5KkcdUM1LkhxvTnCs1K9YDD71VqSVnd2ZX2464PqxkP4v9hYZeZccYppDf9ADM9BwPpuQ5",
  "key20": "42qFgHhp1HASEPUZUZ3KPLskKPFfeiK4zvAUcxEi4sszhhH8Qe1Dw5zGRShGMLuCVA9jKLkgiM6dWC35m9hCCJnA",
  "key21": "2s7o5BiVkZ9VYF3RxMzwvsodx7gMZx7pw8K7u4JXyd4KKt1rrxTQRoqp4FQwhykhHw4nBjqGEMUPdDP322PKMRrV",
  "key22": "4z6RwA6PvEGXxXweXu2mYzCv7uwZBBTSgeEDRwNc7rgsbbJuckdYsNeLNPhBcryoNNgZXFprqpRyfcG86jmAJqEn",
  "key23": "4Z2bRLNz1AZNrWa2Fs9fJTi7uVDEiaMzPkV456cvKx8LGEmpB7eWREqYTo5u7HhShgDhs7tBYMjM9Ycz6hJ75cVF",
  "key24": "ZbyNPvxR7ZdFR7RWdkR9jQsrDHQKgjcTZmCz4vozcY3AUr33BvAstoeaKjjP5KTQ5z8Vj71w3j5jEt3MgEJoKNi",
  "key25": "5TezAUQM6BgRqjdZcJikqPLevZZZZjCTuVWQXyzGW5EF6yGia1cMNiBK3Vqkymo8377brbizKU62XKPwdrScHjF6",
  "key26": "2eupjAQg9NCLy65rKTEobfosHfqQdoQg5RRMogz5nH3dDt8wnGgfAS89HMyZpWGy93qoC8dabrCLuh7exJYtE28t",
  "key27": "guy92jAGizJibVabQqbYoRdLT1btweJzroWFggpgQcHuUvsxUxmmdTxRuifqBinPyxkAt2iJnTWFnRCcyfFuZYA",
  "key28": "3WK4CvXYDrW7C4PU6WVM4hudAQuC8ND7GNnCvusHeLGbL839mHRUawxHjS5qfzGGDLEtEQWzrFpFDaVuo83WiBU9",
  "key29": "5BHHFtDitRzuvdfmp9SPZp2ZGeH8PGT7y6Xasw3HfVtBkXKiS6J3kogeikdsM8RYmBxoYtcytM2kavKTZdQ3Tj5v",
  "key30": "dAijBvtQ1Bit4WG1f48JzbskVC5a3JeptqtVgZDHHueP6UHfyeYHjZ8WwJEyUTfcYzeyhXvBfn5pvCVRZFxDfyE",
  "key31": "5GEXd4HhHzXYajBs9dvt32tUqVjevPa3nFa2n8bmsbgn4Bph4rkgHQ4SxYYeqKUse3Pp9nkLa2X4WZ5Zzotu6t1w",
  "key32": "5EAiyUXhkV9iSamBLHykVC2e5BTmDCWzJNbk9zyJ9BJHm4JghmRcE44BiiidE4DAt8WeCJUDgRy9dfX6QJ2mdTfj",
  "key33": "5B59AnbiGXzbVUxeKWXKjuQhxMeu9n6tnzqRRMaeRHZUeiC4ebM7pNP9CHUHeXvei5qcT8Bo6twhzaGar26q6264",
  "key34": "Ju9XPZKFGy9R69WrmWJXBZfZLPyEyRQTQYieLSSg8TqngXqoryMjVgbQBZVB57s1Cx2MJHeHVUp8ngeJfsCNi2E",
  "key35": "2csNDHpLx92RQ9Y6bkXAVWZXxgFTsn6DAt13wVcQ5gUEgoZgkjCJpjy6gsn9q8CYvzDxFZriLv7xWdbe5HxCnLJB",
  "key36": "yRXtY8Lsi7sWMr9hsXdDe4dCpnE1GQKgM4Qk1JvJdcrzLe8yCqdFUAiFJpWN8kxeFuy7ZEgHhXpjkHRHkQYt9DP",
  "key37": "55Gr29A1z4ES4dyj4qYqYGh9i3ZNwP8hYxV7ojWeHCKTAfjKw6X4UfyE2ntamyAn1dUiteQvNusSY2Zyr2azXU2e"
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
