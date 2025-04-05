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
    "2kRH43DjEPErmbuK7jZeH2KJ36LZsR3jQDvyzjEvm7igLXjmxPn5jH9zgoXxeKoTwEGaABzVv5yHKG7kSrs4QEFC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f2KHSpoyk8JMhsqDbmg2hqKm4tNmPisxGXaK6kXux2GqN9RWtjZGxssiXV9ztqsXdWS1CjPkZ9YSpBpVo6ekfVR",
  "key1": "2D854tNktGLAHjbHrFNh1ei7KQjhTPn33U1P1hp6FtF77iZwPko7hhD5Jvr4ihzyJybMR8T9XaRrFytzrKpTWost",
  "key2": "54ihFUYUwwgmzWxMeCBooAksNZapVUYu3pWFzrLXNhPZUegYrYjRL4m55uY3YR1JA3qmH4hEnT3P5pfHPu86KM3S",
  "key3": "5VWwB7JgvUdJp7aGvg5GqCTAr7gfHP2ZGmmhYL31896LGq1AC257mDRUcqv3oEtZ4bWAKVcSaFSNE7W7v1Dfi1th",
  "key4": "3yfjf1ECgXu7GBFp6PFXGAaKxkQ7MyzkMHSLa7szempMs5eNE9BtDeR1AnZY1NbXNnvSq3oesCVvb19ySyaKJmCU",
  "key5": "2yco97KZ7ZzmhYZRormHEerUcay8jV2LpnVd4qLQjN4LBTdBpTVVdxBkkxH9FQNReMzaFJAxUjMF8roSg1BvoecE",
  "key6": "3fRwbpvSTHtE8nzctiJVoqhu8wtxnQMo9yd4SZDTXhoeZjht7scEU3EZJ6nutzS6Z2azgpS4gQUtkxMWsKzFXE2f",
  "key7": "VrMb9DWP3zxmM9DHhG735vrhRkzsSf7qqa4jV8ihEnEREg3WeyoriKUs1B2uJf7NcUSNKcWxJgYDVW812EGWuP7",
  "key8": "43i2Wb7AeWS91YaQpJu2eotjP44E5L1156jxRdJ6g9ekpr4B1tnSjRSy2SboXhF2TSeUjdfzStRsaa64hDA2XbcY",
  "key9": "2imP8rtRpJxKQkbgwfZaRkKEnBtsKYM3dTvfLQouRk7HGkaR7ySpfCAzd6cZZXhkcnnmeJJTZM3LnV2e9g6TmXj6",
  "key10": "5CXtzNGqeTroeUxp2pBLGTVAFCsbjxfbfRiiXADEYGKsLCqFXJUTob9Hi3Em1Gh4WJcRPySV1tvZu8ZAQBBCVeAn",
  "key11": "p76DRmB4VGquGfaYTCVHcWsW96DUcpgDEKHUMTP7vFmVEr4ctchbEgenvBPrcMRYEowkxR4mrkYmLNjsxqVuimP",
  "key12": "5eUPXL7Pxiqqc1zKewJDFuzJGaGYozto1w82Wgue8AkEd5h6pYd9YjxG2e5qcwkTSgANLs36THJcPZff6vC5qd7L",
  "key13": "3noHueUhK3FTMcKr5SJfraKnp9LRMjzy8r1fj4MwV4eSDpUaB2cj7fx2rWp9VXpY4sFR2hdFowt6WTU9f3Jy1xEb",
  "key14": "3s3Jgpxjf1BW2XfVDwF5VJuuf6bNJ7yD3Hv1tzadCpjXd2GS8qqy5CdpMnhzMkipcrk4mSi2gM7okcUUbuaTfL1N",
  "key15": "3FXi9mL8PfrPu8PZpqafLnV5zDHo74zjKmBGfLQQL38x1skci8mo1r6FsCYWkepvkVBEmJM8KPXynYkg4QCpMxQ",
  "key16": "4yFy5Pq8bbWjyStCuMStjX1jMCkVenoNf6MtCPAjkZ8KQ1UcoJFzAr6oLQ71s5LBFWF6hkKBTasL6xnizeGd6DEs",
  "key17": "4pYWbhwxi48NoidVMHmeixM3ZyHtNbeuX3vgGmyM18irtmVLsax74uDNLFZ8sZMwjzH1ftYGZfSJGTZ4zW5HdnCr",
  "key18": "4odDjk3mZXCccAVBFmwR1iA9BFPJS9i2pKNdBYWDx8RVV3vC8h59MjyGbnwwg74h6A7Z4pT64UCooXTYihWRdiEU",
  "key19": "2q2faaU432T4Gko4AtVJkh3d6Kia2aW37Pub5wGQ5UAsj8a3479JnboWeSSGBheu2xP1G5SnjBa14d4he2fJVDAa",
  "key20": "4n47WpBqBjecGn5n9B3JKR9S7D6VTH5YxJZdx4TRWrsk4GfE32SkzFgEb9TrhmGHTo4ni5yXcWS6pQyTw3gVYuF4",
  "key21": "3b7WtN5SDf1CdwuqzamHePSbmLs8iknZB2GXRjnpSiBZmqANaqAgWFssAbjjTWvWtnTNj3YjeVurvgKUoy9M8Q1R",
  "key22": "4RyxA5tGJ7TpDFSWWUqVEUKsb7pYrh3ULaUr7PpRMZUiZN3uXb62ejg8FGpNpi6jLMy5PkN36MUevkR7mbx1v7h1",
  "key23": "64qVebRVrFNcgDvJQEB79A67tEUATPs4vJoD7V2e5doEyrqtrhDU1bLfBEiN3BzDP1ggTRHpbNxpcWzV1jZbZ8oH",
  "key24": "3Bxm81RQdgxG5dsbanafYop6KPGqyXdQa8ytbQzdVyx9dsPGXBCYnXYnp2hgFE8xBcsZF7mh3JWbP5A9c8xZYvb",
  "key25": "5oxzszGtvUkonW7Vto3zHF2Tp3JV3JkRCHegsBZzJEVhQpgBa6U2fxHUKiBoeMTcsBpiRsD7Zrb82C2nxv3ZZ9bM",
  "key26": "45hGp8nqUDPCL5bvQfHpcUNvxLYWWovkM3uFKe6hWCG52Ax9FsxtNVq11sNCi4ap4PZ2BAKVnJJUMvzkpdxCP8pC",
  "key27": "4mwRHfjegZuFeP17Pvou2hu9oHDABTHU4G3J9Wj2kFuh9HGDYJ6EMQ9hJb85DRUQvfS9DbCa9bgGKd2VGEzWgyFy",
  "key28": "2V9xzBhNpKSJ9q46HW2pKSzzhRG12D8K7hPV1d2g2bS8hMJgnEFSoJq4FbrZcoM9EirHbRxX2dznvB6qC4zfbLre",
  "key29": "arfcg2tjubrsS5XUcp27pqf3vHjRsT1EVbDQRPxiBJKgDtTyutXJMdHpdxanHQLRFNdneDFf5E9CmUbCLgzgqj2",
  "key30": "3NBzNzAeBa9wiMYt9FtFsm1AJwMro8XxcsrXCM63sXCGo6QrSHDrxjm4LvrCZMEMWUv2QPDz2rDpR6WxtR1h28ZQ",
  "key31": "mgwLBcWxi9FKHjkCRJebrV69Bbw9oGGqFmWt67etMZyUNrZSm43V6yrC65rnU9CfgA6aMryJ5LTmtF7LZhbbCwo",
  "key32": "35jSXcfXdFWKBJ1w4rpZbbSGXD9R9DadpAjNWQqfv5Lp1LyhnVHBJugPypdzHMcoBeNoZMJVgQoFdx7ff3FV33q",
  "key33": "35826nNJcjyRruLXqmb9PhmdS1okXwVEik64DGiiDWka5txQi85xzqUApnzeFZDnk1rX3VmaUx9dwaVPzZgtUB1b",
  "key34": "5p2Rgh11FxKkhK2nBdQdBtAf2GzzkuEmn9y75FgpkZeKgoHgVWWE8usTEmjhtjLsLGVaARhXhnT88dCQ1RwViwVS",
  "key35": "4vaDVJrcCB2dDsedN1N7pXUKNnxLfGFLtihqDyfSsXDqxZxWc4tLHi75qQWCFyUsSZufdKBSR6snbN8omMQKyZ8F",
  "key36": "4Jwd8P7tWuq8umsb5E1SxvEYVYWEsXDynU6Z3JjY2SZGibrBfhaAaTzu8mRtTcGpuymm416ZzH5TNcxd6vHi2dUR"
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
