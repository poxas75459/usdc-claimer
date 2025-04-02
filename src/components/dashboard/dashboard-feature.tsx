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
    "57Epe7CW2w7X3cQN66smsAHv6WxAzVk5KAgJGj49sjaS9cG6anj7mfFYdXZXorn6CVXsXaH92nsSREC8q3KiNpRy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qRw7iajsFuvCe6H9JnXJBxan15tNyDgB8wqhtzAUEhs91VNz5mRbcptywwtdNHSELmvZJ25KUtAmj71HDQ3CxZ4",
  "key1": "3fL9AA6q6ey44W1qsxhfY4Kh5qpMdSzhSrKzAJhogPQYUQX4An8JWZBKu9YexkFWHXYrAFd1NXCKL7U3eLK5Kh9s",
  "key2": "3WsTtPKEfTLJ4c4RDiXSqhnrMdMntzgiqFjtjYZnGbUsgj5p7vrZh7kjM2SQXSUoP99xN8ypjMqf4h1cDfPfWiyB",
  "key3": "4UouEor75FCUoGAmWHNrqVeU7FoJXbZCppqoYyXvj9N15aRK4qMJdLQRtcvaSJ2UGjotfisPw2j89dwYNJKx6eeY",
  "key4": "3mq2NsmNeSMiYFoGiTEkdY54cBRzyo5WZ6R3NGsUHahtGc8VCAC9M3gjveTKGcSmp6gBh8SLVnpZMMndG2tu1Ssh",
  "key5": "4kuipqXaQzFyYVzHmJNiwvR8HHbMH8wx3HyNPzCtarRJvnBgFiKKkSUMfTSLc11wmVwmeE62RvMMGKVxTGHoj8H",
  "key6": "3nAxr2Dde3weFqqVcUVAguZ5QCE4FTGsSTVHrpeFVT5WgkSFqf9dG9JNVLW88dH6DE5sQ2PERU561noyyVFw2Foz",
  "key7": "5AVmq6iaXqGMM7kfrLHAARbGeTuLE3pyoWeNdFUxkMichLUHzZ6ufsEEZvJPJSkXpFQN8zJT1rLKwBWy7kK3Phu5",
  "key8": "3ggprdAom7bsGuhXWd4Me1pRaRceLFa7oaqoV6Vv4qi9ThpKbCqKMUTesmTYKDWqWj5rZhqdNb2wm3Fh3h6F4FSE",
  "key9": "34X6rMmoFK65LtiXbjc5sT5JabidBrXLALYLUergS5WACWg1FjN4fSXvcbwGRWjK1YbVnGaVv4UtZEibpF7iBWpc",
  "key10": "4UfbRDnAPXyuR6ehp44dknTviB8VPeLfsGeL2E6oU49HLCjH4VjYa9GBAmCZgRYHHPSMtQjQgzRBzYY9PR7zA9PV",
  "key11": "4t93XTLhMEd8tYDcRi1VU4DY7WZK8aRJtmr7aCQYU9SRxdtkaj7Bnuh4nyUZJuoQHCmbjTmvsAdUX9r9griyvGyp",
  "key12": "5B6gtvU4ScEbF9z4kuEEcm8JRoDK1jgzBgGau8EhLzYH3tGJsY2RPtZue4G2tjVWoNzwiwRAKgktw5GMrwLf4put",
  "key13": "HXjArY55Ww1sb26smDAQ95muWRVD9fXABsHHE8wuV2cNNd3iyUdKJuvQ2Q5n22MugxBV3LU1ncMqBBxmbN2YxKt",
  "key14": "36TuBxnv7MZxDAtRUYZmACVkfyy8mbDKnzSjYN7GGuP1g2QhbefX5U7nHw9GR1MEkNKXH2QeSmyTdAEJV4gH2MQ6",
  "key15": "56RFdF72jDTM7uQWDhbFGbrg5GBk3xXxRB6ooN44kkT1VNGzH4d93tnrYRrzyFCfERkMrTdnyuJVvExH3bS8cu24",
  "key16": "cBJ8Fz2iMnHyFJFJ3cmn5mgEHFGej4ossDJMU127s3inQZbjzyYwahLHqJHBuZs2eMffFmPpB2nrBMcBypH8RJR",
  "key17": "5BdzaC4kjz3WuJoQ3BNfMXe8LQBJhNFLq556hnpTh3pY9gTPuXgkhR5W4zvTydGwQgtsSpa9fP8nK7hBpFhrAfPN",
  "key18": "3TNJXCNHcXhSHedpaFE5au27Zfc6pajcYRM75ZuVmsEAbyNha3XmkyfrkJFQ4A47KcrCnXfUjjcKVQ138J6zhHJA",
  "key19": "5xtaaM7hjQAySMGRh3boxxUpUnoenN9LYGUhbMDMmfKTg7uqcHzvghGHYkdBMZVMjYDoHsGTs3EmzAwXDZBTZatq",
  "key20": "4A74rpVHTXistng2qn8Hme8bcZa2Pe9gCVdp4NEaDo6cnhaTwgjLAZNmqyMNpJLffq3GFaKge5UXxh1v59YqLZPE",
  "key21": "36qU5SJ3No9iienbBNaAfhEE9AA8eGWujeBFeuUpBK2qs5hNEdUx4Q6mxtUFJMoJ5YYkrUVYbv3jTPTdJ9AeNtnS",
  "key22": "5ELcmXwzZfdXdHdwE65Hp2e128igqdGPwGkhsp5pxRNAPRvsMca9c56naPWiaWGBQYtP6pdqAYmiYSBnqB4DHmMr",
  "key23": "498bKZAQYH3GoJspYFYXEQvyjZTJR73F2DMmWte8tiN7Kood4Cfa1nvirSAS7aEV7s46BcAGH56jSjawYWP73Rdr",
  "key24": "3uBvEEQeQh6NzBZ33ufdJG8QqEu29jc9cxok2LEaVkgcHj4BE2Zb8b449NRGcCuX7o8cDDTbuGZcDDPRK1z6uupR",
  "key25": "3CRccK2nQaZjR1JgNqDcWCJ5RTPMDLBGeGoLH53qykRYDp1WBqT1DwZGm49oxv6pjeo2eoVbdfda1f4j6whcZi9J",
  "key26": "32bXvbqUtrKqijAXyZktCMHwnaiLh4q5EakbnsTTMbLCCr9mfJEtzzxnUiH28452bFiYyshWKkHew33XxJxNZpkQ",
  "key27": "86aL6G2ad6pRcqncSnsMRRMhj7xmAFoLggx6Z3MWUWTMpB6vngab7ReAHwwoNC4FV2W3MCuHwQAWyGSQTy9iYdB",
  "key28": "4wxY43JU8C2ST1nyfpUvA8qFZkdgpKbei3Le5uu3pc6ykf286pdYDwSPiVVuX9voS2nj9vueDkvSNp571jiLHnM7"
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
