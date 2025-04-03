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
    "5RjsFPxvAy2ExoEhWZrJMnoZk9Ae3UPRDFcWkeiFRtA1bYVEwYPZormB8KborqPY4ZGdqZNb7y3eqT14giZNLv3e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iPq87ZrnTeKz7gKiCjapQcJYcpJcXcjPL3zwjcvSksBL65vd2CFj9xXecQKSiv8Qfy9MDqEAFszsZPspFFdB3Zr",
  "key1": "5eQGSLE4G7MhGnzg3LCWfYNdZa1kb2rEnn3vMhPjcwkdRm3FQpaKpaU6oRgqP7HwodGRw3ijXqRFEC5u5JS7sUiu",
  "key2": "3fbuwQuvL5KZw76CJU2ZiB1us4VETzhcpFr5PfYCMa5SNDk1wWiVWgbV58okDsmSyVkzHyuDzPBJio5tf2zS9qRH",
  "key3": "64osMTsYdZBEWMkE8vgr7agnEhPLJy5z4JiozXPieo6KENhpSeM89V5jRYWy8ftRAWJMLdm6b56c1q2HesFk5W6p",
  "key4": "3dmN6TFt1pVuPHcbRxLpzW3kFgNLfo6277v13QJ7rvnjPjwMs2yMpVBN2b1bgqKngpuMNcfQrvgwy33HQSRsao5Y",
  "key5": "3MrL9xrjyi8Ei4i6b4u4tyY7e9TV9LJ7dc4ekYNvQUfoiBkJeo9mCQLr8QHjFmvNKSuKVSEQfiuBR6X5BmnaSs58",
  "key6": "3kviCTYuzpN6qCpUVXQmat55LB4Q4ubjD7tRcWSxNxwwmjLR2RcHhrznPeyYLPfZPfpFHtAj5MCud9SmkMUKHzNN",
  "key7": "aLhraDNgAztLwsFYsrB8onUMM2ATWYMK3i77qAGo2ho1RnhjktX6Pr1AFxjVmpTY8Z938z2PpEHaZF3Nr3DjMSk",
  "key8": "4GRmtQ1Ye9zf84nRS2QgYBUE2DnPUCr1d71HkNDXLTQ5q6ioYLEJTKZ6WZPuvSj3JNTikuBtAyVyyVhZA7EPoHVb",
  "key9": "4cmbG2vLNSVZVnWwjHxVnNov8ynWyEk5TRwacw53vuRreqvRxMt9ZifBVcYb2upzCA41F8vHxTk36VSNxsfAFvtn",
  "key10": "4My5VUqSBhC43155TxTkfV8aERPNEmig1KtPvNRS1iaESm3GZedHwr6rENXEP1sisuA8LVEYtUucDZS4N9MKGY7a",
  "key11": "2QbrYRfK2TuoAHzgJkd6TEH6Gkp9wB2V98u7TaG1PwxVcu7kCL2qzde2dk386jpzzzWrF2wpmeRgwBo9FAvkrfh4",
  "key12": "4ymmzorFCRZ8vLwNZTynWTAZfv1q8wgfc5FBFzRjdyQf6U8V9nH3ofi5wHq2maadQHv3rF96LVmyXEaakCw5xpMA",
  "key13": "66CekJCr4j1ZF9pgywVaRMa12rBwqfWZaw6K2U5ijTRj6uTJqjbn3HFawApU3sVF5mP5PqHM25DQVhczqD5F1eWu",
  "key14": "2ogYeUbuMiZd484W17ydVvkuskLFQGeo6duB8XcPRAdexg8B5yuAM1FdT7PRuPHUnZZytP182MGCUBNtTZEn7z5H",
  "key15": "4Qmc9WdwRsJptCjnuTXwigcLBrwHbaGeFmNEGRJBkSynaXG7j7ca1J5cidKqZ14Z4Qq2VGFPWFpcP2QRQ9bUHdKd",
  "key16": "2G9ohWLmxP7HnBEKQKGdKTfFm9sGFrsuwUqVGzu2H8SXcSgbHQZ2sY219c73dC9Hp97xxp6jvek4WL6ze75MzQ83",
  "key17": "5XkruJcdUyDSQ92nFgb3TdJ3JxznnH9obwJuy1xUDK6i6u9oQ9cAMtiaqAiKJChyyGkT4nW6gQxz8eMxpAT61E72",
  "key18": "3qrddmgqqFZfo6cmX8uEYBBrzuk2GrLbFhj5pUgqHuYFekcyzX8uvGViDavTfWq68WCVx244SwvZKFWYazeGBKXq",
  "key19": "3UaJo17AXNTdCfjeEsZv2HSjQ3Gpg19kNAg6XmYvdFVvnkJT4V5nBXUQKDhfsJkqwvVS2HmbYg2m8WrLYfbnro4m",
  "key20": "2Z5TP3hv3GX3GTVrL4Cg2tzLKuyNtPeSNQVGFaGGVsVkCaokzrKoy7mA9Qjzfmhhrkv7MbyMcs3XN4zKND9Rs881",
  "key21": "2EXEzShCS7VCdhRpEYAk61ioFYMvJABc19xv5Dt7DTavae853fQdZHhAXSW3QL9ZFtV6c1HyNMvL938Xm9EnUVVs",
  "key22": "5v7SxHpnumyieXcs8w2rYwEpSL1nyPvE6BceNCgEXoHtTwwcAsq3VKdecVgAkrRGSyFNcH1ttboXLUXbg6MYiEnq",
  "key23": "AVcu3LdLHnd2Tww2muNoy9emyqbnsTSF36ye1cn5qEetK9bF6kPm23TBeEmtd3qECSzkntdHh7xdhS1eRoufeNL",
  "key24": "2PWnBUuVNNBNGLMRaa4t1YGzDpgQYXV9s5phN7XbbNj2wiwgkBQwAfB5WaGvkmMW54Zmhay1fS3EpYHcFzQtkuMc",
  "key25": "2nxTgAmKJb3CLLU65nfqBFfE2RKUwhbmym8VqKu25UzxU7NrZguVNZwLkzX7MgqopjQHAXBxQ4SusGnmk9GHFtjZ",
  "key26": "5NBF1QHLwpodMFSBdyc4knuyFqcEVf8igLHH81nVfVNmnvj4x6r7ndyvxKpwyos5nyvBWCC4SKJV8f6pbq9VB6Ms",
  "key27": "2fmD1YQDQjZkwRT92tYcLhVY1SdbZ2s2wAcKFZA7s7CSQqrhN6ZoF8u9wiwm32S54oHV5xJdbJpwmZNYiMxizGXg",
  "key28": "65ds61hfTe3jH3xcZKYb2ad6SQwqYsbgLV9sfAA8kdeAHGeQJ8f886aFetqG1bnT165Drvfc9UEF3HYHXqLf24kL",
  "key29": "XBhiWg1LEpSEvEFcYymSfoFSbpv56Fj1vc1BUKcTw4Ks76W7Zqg3wkero1HMbu3v5K5c15mVXrXerrs9x967Ewv",
  "key30": "4dDNVZrZjYcwXgechCF5VGXV97f6dKFh4f8c8XzA2R8WJWpME94mERx1tRohPR9Sac5ecgmQruE7EMX3xGotKn5X",
  "key31": "2LXGypdDLgZ3u5i2xCoGpEimhHWrhqn3B7nduCu3J5tksh5rhyLGKPxkKDetEve15ME2pGG6K4fNB3AQNXb1qM3c"
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
