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
    "3i1nPNEWnWvqhTbxp9faKt459aKPXXhvh3FMMU2xnWbNvsieNyKpcPuXaSkL2jGuDcvgebjZdMYB4SbUB5t7hFrL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nuQf19pdFRrYGmWG16xtMqFMT7h6euU9hQEcXAqo23m8uZrWgV93AbYWu4vuaU2T3Pq2T6fwJB9Q4kXmXdjvKYq",
  "key1": "4fArGRMi1N7SBJY5yb1FVLTBexARj8YSSnpsBwN1ufWAJ69z2KdvP6kB85gcaMpWZ6qS46eohK4csj1KvQr99wBR",
  "key2": "4JkcneYTBtdtY4rLPbtcyFreCkrV7Hj1SBarGzs9afQdZzLm3AY139kZy9QnSfeCEArYh5hyTYv618YA6NEYQBNK",
  "key3": "UHpV1EjrwfLhXLfEdHsewUHAHWTsyNyczGRPk9zLxDB4RWj3pazj1uKr6jpaBeTQZ7yM6xyM2rtzeHNGkvDRDUn",
  "key4": "2MAqwVoyXfh1DakjEeSqNwJsn8MDrADrD5WHhnnTs6gGA4zPQJGkDtsXhaBppYSKcuitZpgZRhcGQG4ZQQGY28EP",
  "key5": "2D8foeqcxBZgWDh5JFfuQz9Vf9T7N8vvkb4Gm2i98j6GjhCM1vykWcrrLYPLRWAP2EhyyDEAoSGsuFeeYbBKg2EE",
  "key6": "45g6QT5P2zHKtYjTuPqHaNHkX834mKnffXSJdUXWNQmEKGBEePYG49MdFxMfePaueDLxzQd6WGejBrPs2RAcuegF",
  "key7": "27KZNnpYqEkxnTPwSDERcFXGYGaa6qzgRBbE9hz8RkXt4g8A9oSDBwTgbsJh4h2mXznd6igiNNteFrUUj33Ln3Zz",
  "key8": "52XZSxVJRvJ2p5T7MVE8PuNUHkCkBnKkUosu5eZbq8jBp9KjTYKccsFikCbrbjvCvShL7XPyTL5J3py86UTM8cp1",
  "key9": "2e2g7D54MnEqXJbrwnuDpcpbdyTuEEqgK6ZerebVY8PoR5PBT9aMYsEmiQpY1ZsAPABiHTwNkxGL82x4e2VpcWFE",
  "key10": "548pvuGqGrj1mYcD7AaTw7YTdLz26WRAWoviJgXfQkArJRjWt1dDUhhHHyxHjzV5s6uF4JA7hjFskNeWaXP52sCe",
  "key11": "67MmZdKkubtoBJU4qRxdAm8NPKpERAmpJL3AiuFpk5hAFJrtN8VmCGg8JHmq7u4xUa7j67Dy2cUHxQr8U1e4pNNQ",
  "key12": "3GiA394VoqWNaYbaHtba1iYDXkczz48v7RRY4vXKGuZbfMSsz4ihuNs6XVFrxZpcRsXLtgCUcDBgcWstTgsGTyFx",
  "key13": "22X4guGcf7dr9h43eXH69iD89nguwGQr4NXLPeKPnJ9aaZkVm84aEwJ1kzWHoXMVB2qgVZh6bExZDfs52LNpAUA7",
  "key14": "3hoVACESMD8EsKX26ZNjy6qUpBquSwUGEbdvC6qekcsbGLgexstG6A4X1oUEfaP9o45simuZDhpuCjFiGT3uDPhr",
  "key15": "5C7JgFsXKXy9MBxJ6Gf3aMW3uP1TQ6ZBpyC1Fw1L4zGtnsWH9cJZSYHtyAiftFi51Qwrncbq1zLb4bsBAYb23iAc",
  "key16": "3ARU5LmcpkFr289swpqmfEewK9cPgfPA4WyYXch4DfCx9vFJH2bd5pqEpEa58i1ttqmVZMGXDbzPHy7WbWqigMeL",
  "key17": "2VxVgFjAoyYXJrJrS6CwZj5Lrxm9e8AWhRJJgMyEXEcAR8m3A2jFLrF3LozqKVv4RNmHNtbFmuzMREGa4EDvNWzL",
  "key18": "42RrUpt8jJZFvRbkT75Xox2V2yiYauk7T8j1u7HbGFghb3YKKxqFmBfCLm24kH3cXh1YF2h6ziRUjNASNm8BThTR",
  "key19": "4pc3TNdTJ9HcXv93qaFkia9gQ5tR9NTLB8cwWmZR4qXsf2GrmP8Pu5ey6YimQRNQLxvdQ7GmWXQTeixmZgZafY13",
  "key20": "4JKBXgp2i4TeMWLtFmuUpwDks8fyEdvLq1gsCkJ2kmYyLYiKhgxsGa9kHMZxLJeSftasZKo3TKRdhLgwpxa9zy3y",
  "key21": "3Ch4zDdtxZFnaheks5pgCAe9NYRrnz6x4Zy48zyZC7Ms6yWi3M7HtrssPs3xJU5og1QgkQgijwGM9KyHzteKeGuk",
  "key22": "6L111Qk3ZZadiQP5r9vbJZxktpFFf9YkmU8Ub7hFF63HsGPnD2wA4Vtd6MnZMNYDCwTsaEPuFWe1HoXofhHgK6f",
  "key23": "31xxUAKfBvR9ivPuXxLAh486zPDDZNNUpnxqsqT3YsqV3BwY8AHkwvqAZbqqTc1pxWYvysrt97exbkNtsZj1wiRz",
  "key24": "LAEg5Z81HuLUr3nCzyB9YTkboCNUbi5NbddJX6sAD6ZJqugPkZfgAr2Q1Gxrco94fSWXnjFoPCaGZcKHMow3QSK",
  "key25": "3fJnkzH5QfrfwvhtR5knubdA9XDEk4gVTWswbnqua6tQGPs1MzPcTHFkzzChDnMhruebbvRtnj8RudsucrLUPhe1",
  "key26": "4PGC5vzSh8f7Cz7DxgU6WCx3fe8D22oCbYtWnedo1NL6pf7DjmBPaHhmQLDvyJEj522ug4YZFXvTUxEgovQdxixP",
  "key27": "41yGVeBgR5xKivzwWDeAqECEXteTZHa3v1qJ3UhncVr8BskDarnK8g1KB4mNBSgi4cCyQrUQrYUsT2YKtKHLEKn5",
  "key28": "h2evKypaXffr6kXk1Qukayjki8VbEh2bj8gAJxA4HGcxvbe8rZYgpfHT1hHk3nAK1hN6ADU8BcrqFfkeqtWJENv",
  "key29": "2o1BZDmEbMWyaF5saGDVvvJXrGuVdjwS4j9No6ZZ1ma6YQeV8DJHGskSZtCFTUCiMGFWEszTx7WmEUNmyY1wug39",
  "key30": "35RQAu7EfX46wHC8anpRFjfJpJX5rK8pRruAWPkqGSdoFsqj4NLTpaPpj39rgfRRTjCr6Enj7T28SPszhTYsfmuN",
  "key31": "2gBMUHKWVbaeyDakS6rPf87pwADWhEe8vRLwzZA66PZEA6xBkDmWaDcWvLeKMXNXEtSdNM4fgedUuG3FNYZiXAyc",
  "key32": "5FqpssiicpCs51KpyExNMBBg2i5yhrMkUavgXvZXFEdBCKK94etRJxvJEq9qbHptjapWZfoNgMtPnr3JV7Y2rgif",
  "key33": "5H46wQJRMqamxxmBXwQJneiMcZWoK5nX1TyeTor6secEwVzigoVViRs17o5zA3yWnD6Xft5qDsX1SLKRb7vzwnQY",
  "key34": "X9zirCQnXZxtXCV4aVFTxMFmm5NYPLyXvhX7TqYJiL1zmgJwJDk6MGeTfCNwL7eHM8CoYNGps2VbKroYJWEsaDc",
  "key35": "2VAwsr3zKTu6ADxoDyXzPXLWxs5ApWYcpxtTq6KxkUbNjfbAZKeufDrKJkxgRVZTLJ2N91nxLdRudvyqwNz9apsG",
  "key36": "3T6xTJRy9jQaBoFrVZY1EKzqL3sSgmcgyuRDRgaV3RHgTohjiEkTgu27GVck516gcB71hKwNzJEkvLsQTmikvsKZ",
  "key37": "4cb74pYeinhu7942QXBY8AKoeU7qC61sVNCVK7YYFkQoDNDmiPKFsA7G5J6D1cmmFNyk2fGmPz5FgP99PEiHf9Ew",
  "key38": "4brej2SE6KUznq7AdV3xKRLKp25mYN2bT1KDpmLtd7myZFZzQAuiKYqsHNDKw4SPVZUm3YcnxX53xtkhgegatzhe",
  "key39": "2rJQ64CTt8pFteg2hZpUqTKETLUdxaTd8r17MggdMgdYDGyMqNNSjXCEQWnCZyhB7TF67aGgiGjqPwzpNjZM52F8",
  "key40": "39xrac9SiWxP6fjJnxNWC69wcBnGeftroFw75X1cQPRF2yUgFcPUESrKeTLd6wgU35Bh4syhHMwZwFrdijgeZL2o"
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
