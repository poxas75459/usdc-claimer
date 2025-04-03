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
    "49NKnowiz6bqsFZ1V5dN5murmM8rjw3jXhrK8nhKzzNWpjc6VVWWML6LHfKotAGxVDRrGEJf9iq1ajQ5EUHgRJg5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ECwujDdZZ3ufCFn9H7qjcfJZbSXsXkKyKkPRjxVequAvpm8XXjbaEmxjaZvxzTX3pEwuNPYiPhD8UfbcdKuiXo3",
  "key1": "35vzB5kt7ZCbCdzbxkxVDHHUz8vLUvudoECc3BQc44N17yaCFD1FCt4pzTsZUnBXXTp4fqTA3RwW38Qemigp8C4",
  "key2": "4QqQvoTspVXsAx5PsPD7VVDB7Q1hnuJnXbdQ7SSfMyHJAVhNQYg1WjPkmcazwEmaM6GnVSsyYz3oi8p89UmHPs3i",
  "key3": "4jeaaMACNKzztcXjk9Z3dhogiVc12qsXWSwE7Kx1RzA3kp8s2dYXkJJxgPNMzeVGh7cj5AojXHUREDHG2L5ggAxv",
  "key4": "5dTgSeMS4DGJRfVxTwxjRv7a6M2x8T7CKnEw6FPcSbnKM7z2UPJBKJ3EE64juSodoPURMeFhDw2apyXQzbGBcPtz",
  "key5": "44DbL78snrNGtZGFesPrY9WubGU23m2eKU4ed7es4zYcw84CPPcgEMcWKBwB2nnYorwDyzevYYs2ohZKBtfhjvvX",
  "key6": "34kEAMnQdBhG6ULYZsW7xmTyf8zbZVHcmqqtHaTfYwvUD9SpmaHvPNihaWL5u83zWbLdckx1jzgVVmckrBQRCqAm",
  "key7": "2Nzq1AAtAT5dbgwBuHjivrD4NaattNhJMzo5KHe4jWcae5CjYuq3ZfpETHd466YcEChxCDppZknGRW594cYXGN7R",
  "key8": "5k7pLaYUeT3HRQ3Cc7iGcYY2EbJ2TQ5iZKg5VZXeNs9a4prbT1j7fjXLm3xiFnBMoGC2Ee6KJRrCmiUrwxgLKViW",
  "key9": "5hjD13ffRKsWWQK2fvSjqJj6mXgQv1n82SzLfQnm11ee49RkVvVuA6Y8DhFbhajMfbB2cLngcSWGNg4TtxL1WiYD",
  "key10": "2H1Z3wKTeK2EdY8H1nBfE9DjihThRpac5uWYseiUvyxLA7GyWTzJy6TdnQnQNBqqrBq9TbEJ4qfqoBHrWyankUiU",
  "key11": "2UUWZmpY3zLn3mts8QErFP1xx1q42acic5yX9hjgDbdstP8YqNi6G4bj4CpXmtR6cxk5q4nqbfaeC95iWgVbwZtz",
  "key12": "3cFiCRyha1HkNKC2prH3qfqtXLbuBzuJNJg9LcfgZ2xkPMnUj5v9jECsWAtLuoyaYaPS8dS8ySTYjUXCLKibA2Kb",
  "key13": "4TZQmbuzTNHviCHCVXVTfkGpP4cTz7bQCUQD32pvihCJP7quWHtj6dmGcqqv7xtwb8P574zvjPr6kU512x8meNBX",
  "key14": "46NzfKaeE8K6aMhUSX1rP357t76Y1hmkCQWgjZL8BsHMPdKfc6R1P8UNMJNfY94X31harMvwrbENHcTuCFUUrv2Q",
  "key15": "25mzsVYxSbom5ZmTXgytMWr9L6oT36omZznb3q5Y5dGZAHUnD8ZUSwhMn6FRnXDZmBmdzDVtSVWovvk6GJPksps9",
  "key16": "VyEhN4m4jNeviUhzddZQ14MFj7zj1vjVaKnj95Ub6dh7xDEepjfrwQzDaCXZSp2qXf3rzrs3a81zEhVJYAoieUb",
  "key17": "3YD4ZEZmqAsanr3HMnwAs2Sma4E8ahECJMYtXVTQst5kJuCcmDrJFh5mfeJJVr457mdoypU7t6xtRPc5Au7rv3C2",
  "key18": "68oZpnZKydj8Skd65y7f2YkPH4V83pa1v1RWC4CrB6uCriZGussVQR5L31nhXJFzLQWRCd9MeN7HHR2uf7CxQeT",
  "key19": "4h2sQs5eYnGM8i8Y7BY5VTRGWVqgWo3AY6zNawgVjyZZ9BAv6EYFhpcv98TR93NEAX8mg1iQDMS593CU5xzQUDWy",
  "key20": "4yWrfmm4j163YowNQ7bH47MpGTsx7g9DerwcyUjeZqsMtajTjXjckEKStUCStAA4AsqsU3oxeqBzBQDyqp8Tggy1",
  "key21": "5QNpMPtJexVePpfVNMRwsMG48pP5WMS2KRp5KVikeJNee5Xx2Vrv5asKiJwSDpdtD48MRucggtj2pnVZHdhaw3cd",
  "key22": "3LBjyQPYjoPpSbDQSxegd7iz6qKgMGMDV3iQyuSCqb4E12X1TwCb6mQSsDsbYJsRvLtRtuvGyKkDmXfJ5ShBDGxw",
  "key23": "5SFWhkDbR1p38U3Xj98CUniX7QWhXQmpX8KkDzxHuHgQfVe1QTFasu86mbvzPMU678WPRybXaSXq6AYyon1FKp9A",
  "key24": "5bRpasKv2BthZt9sfpK9hnB6YofnqFxbgGY1JHPFWwC6YAJbKvkDkPFsVQZsjRAparAouTsDdaXk1PQhVx17wfnY",
  "key25": "4UituHK7f1iYMcztB9LziHBY9kXTwYcb9RSGbpJRUnpW5C2b8e9TXo7wbAS9RndN1urNvhX8LzGNm5Q7Deiy4pN5",
  "key26": "45GsA3AUWb4mV1dQE7UU323zjxZ5oiJ6gkhoPXA736fhSSXDtbFsK372uUJRYNWgEPxKvrxir1hi6Wd9WiK67quT",
  "key27": "5Za7xkUTa5UDk5sCytAV3hrgqgPBeqPGDAYsMsySWYXSw3qx2o6nLdXw6q91tmkbMrZJjCHcRLRHGxU1HDDvS2ta",
  "key28": "5f8nTTMGVuUcBqenYFCX6bGRfJzNB4dX4YRtdT1KoeBiXYrBmfjmFUEj1kENseT8hMoW6JgMuevfXUBbEaYTFxcJ",
  "key29": "2k9AmhbbAMqpMTD5JxnVnXBQmNDSmYjvKJzFRbKnXdiviT9hKKare5ubs5dWdaKs4pVqWPcKzKDbfd8c31ycGjhK",
  "key30": "4jB4C77aFVsv4maW4mN9BD9hdgirxmoh6nia4wheV3TecsyQewJs5hLTwsooeMnP7A8uT54Ax6N6QUi1j6rJ8Kzw",
  "key31": "493ngYfZxnacrYdpEAUNmWeWKhaBA9S3EojUZLGZWfaBPziBHxuoyLGL1sqGEaCK7tcZYeFKqGhexjMhZcFnXPi6",
  "key32": "5VoZ6ntZc1T6yRLYfWKEtZ9tTNJ5hLerPaK8zG7KR4DwhKVGMWZBFTE3givqyWRBwL5e4cSox643iDUAaZr6uQsS",
  "key33": "5dteZJmG1saCTVUoZqMaYzmuXvihGagxtC3GoNBJGYaCYKBNiSgGXScaf6PPDHsYNhp1DduYUCXXG6fJcLhghd5r"
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
