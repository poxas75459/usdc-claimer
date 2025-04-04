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
    "41a4LS2pGD3MtJYZPK9AUfyyKmEuxC7rHU8cu4QbpLeiNib9WkFFFYo94aKEpa3epkrELCxaynVqduuUjv5QprgC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7ExHsPaarUqVUbsMyoSSBWjXmk9Zdg5XNXCDnC7GjFS9EFWuZ4v569wxjP9z1jG7FtJfvwMr2KhzhRjpe5QEtMq",
  "key1": "5U3mpVwvNVeAKrixEbpR448RQvaar5WGjSKvSBXCm1A4bLuAf1HiH99Tc6rdfeCSwZkfEDa9Y81dmoz34SxixAQJ",
  "key2": "41Sk9Jcy2FVEJp6XF9vo6EgZBH1TA3d3FRp3Wy2F4JnwKU9GPuG7tP48e5RKRpNtLJX5QZeygCi5Lkt7P2qX4mCo",
  "key3": "2h2JgPFrbxERgKQHBrqzfpKqoV9CnzTMjXNb2SzP8NTrgVfg1xPjdyKP5xMNSv4MY5eYaWgpTh4jhT8SEtRhNaJ8",
  "key4": "nLfwf6iT9aPTpaW51h2aSEToDpW2piwJNBpyThUikRLSxUL7NaPsmJkuyBhpmrAT5frXWozbunNPoy1javpMbQL",
  "key5": "2S5JnRpiFbibtRsL3ovDFegZuisJkCa1jkYrqvtzupNaFjM7nqYF5RGnvicn9AdPyiVeL2MNV2QjugnDUcz1vuMh",
  "key6": "3nnYegvD9159Kb9v2keFKV8nDVGgXNSWAvkbig7YLrisYRCUbVn7DSvL2vRnR6MRhutmbu7YZPCvpgbZbQhskkWd",
  "key7": "huHibmFMfoB46T3d3ULEDp9GQMbtModfY2Vuctt6Ncq8C4Zv2Dgy7s3wHbcq4YSsK6Kbsf1spZF7XKd6oUrCEU4",
  "key8": "3dwhvFqFWoXV8UHUXb6iNbRpUE9vH8XMSQrPziNAHjJ4ihUuBTpq8k8TiTKwnAYVTzGTYjPVS6qn6t4QYcSLWVeX",
  "key9": "5W21eDRBFebpKBsL6hao1pNCCqCCuqs7uJCm9GaXdvCfy2MpApeBnA3Fo2fV3VvdDuhwP2vNH8yWz1MwgqQcA8UU",
  "key10": "51ypLe756fwFWBStKcTREgXnDZNkoySyiaVeWdyCvBnxwWEm5pHmEfUyNF5V9JaiDtPquiZpLWA5czzm3nPCMuED",
  "key11": "3Kaf7eHjGLsNvVBEEA6L9xhmrqnuJgSn4tLJL8zBQpSqYwXE2U5yJk7vkYHMnWtdLP2fZKGdMUiH2nq1hUWP3sHa",
  "key12": "3Ma1Ld1b7ZgLDE5pcAMzsLN9cuTqovMdxQfMT4A95Sm9vB8a7sujuv1YuFbYGh48YFWzC3aJZAxiBeQ5s2MP9u2o",
  "key13": "4cnqxwvtyPgjBB83gfR4DP7L2XcEfqT4ZaMi7pVvN3GmEsKSyXppRzs5GzdY76ganAdR2MopTCSsTKF9JcPZ74XZ",
  "key14": "5y1zFteCqvZkNZiCH9da2r5L6vapRXJ8V2RnaEHqoJgrF6dzrYgjHRFYeeCTdGGjfzN8FGxg8qCgmYHuJP4dsUcU",
  "key15": "299aTaA2Bzxq4wZto9FwYVwArfPzr3JQ89rQD6YgQC9AxotDCRCxBCoDBLBB2Ugj3EyJXwXsJPeHenwVWZU3dWza",
  "key16": "4ggwKqmQXqWdSAJJDBA27rYfJmuWG2VnKvupjAnTKvUnaRKUrgEvT7hs2zuH2UxFmMr6fkpzBXFdkB7rWxaBhmw6",
  "key17": "444RvuyNRmajzeuqTrB7Hin1jrknRqYBZY5qFUtHPwrAGAwqYNGAdQa6fRvcx7qdj2ZHRQgGQzZMfT5DnfFtE1u6",
  "key18": "2bU65G8bUXA4Fo8EVeUdHU2gRcjsdA5vWhJkbzrfsTftqaWu198jWWsV3in4rdNuaM6XqDzS1z4fTXEusYzHJNMk",
  "key19": "5rJMdgYkrRt2R8rAa32GjA6Ce9xQbDe9o4HCMBPqpHAZvXfjFwmM9eTwEx3pMBjtzNBWjV1awonhQWibcJbJrYS8",
  "key20": "eKL2hCWYA3upLaEFGQNA9wLKZAeEatFviLP93zPeufXqZ2WCHZCQkdzcitxjogCTxauVVuNWF5Um8scQEf9ENGd",
  "key21": "4xzsHHkCfc5JD1Bv4WF2UrktXYufrdetxA6qctWAkDggmKdtZZ7vcWPJfjoLTT7xZjcoRrkszikMsGmD6RhqN2aZ",
  "key22": "436zHDVvVfw5YR1gEw9wm5vqN14WVKvgA9TkiEWwq8mDfqVmdFBVqGY9dHCi9U9cSgBV4hSbb5iodVRvwgSr6pJT",
  "key23": "4UxxEJTRukpgUAzURz3hX7R3RZjjQr8PAnqmKaTqYqeXtD5xSPi93PhatJ5p4cKzdCVmixpgyRfk8nZ8zGsyfVUt",
  "key24": "2aH88bikuHzt2oSyRGmaDhNCPFGLfViAH2sMqdAtmfLFRVHavK81KE6dG7zDKsaxS3Sydwn9rnnTpod4379Xn3kS",
  "key25": "3RirYDMZRe11zbpaDpX4Ug57KM3jfjuEnKjhhFbWcF3kjL9GbrZJnHtUUvuSeaJDqhP3H57d62n8pHst8xMEmBmV",
  "key26": "emuQ8giE6jMgRrChPD24u75MJ1GjMomrzNTZCi4XBL5EBb1YYDqW9UUTu9Yd9HpyM92pbg4cHyQmHCSg5dtzfNS",
  "key27": "8t186HuMeZo2aD5YkmGHs8yZSJzdnV6zgWJxoYyounjXCqsuU6yoFAwvSY3xQgvhySpXT9XCDVR9sFSBywSmyWB",
  "key28": "PNE9kvnqd65AqDpfHMhqamfouDr6Hss5e3YqXE2eSMsN658ebtoR2hSvmdNY5XTTrctbSF7svn2p7nqnVRJQauB",
  "key29": "2QvVd4DqEAd3LeLMtvUVx2XGvCgcnPKM25dQ74ahugKDC6oniRDD74ecdovtDxu4A7JjddfD1HmU82Yx3V1YJcht",
  "key30": "52iMevq9X7NtbUoxjJodK6RVp4QrLTxi2Eo8fmwGfyb5UUSfQh6kFYGW8Q15YXJXhwpqztgSCCuUnvKxnHNyVifN",
  "key31": "AHZJa2JfzTXpHABJyJ6NbmzjnG8DeyjomFYbk7w4BxwhEp6Dt5in4FqtF5Vg2gCARbm1iQExbcWtRRHV3p4rcNP",
  "key32": "5GPTWqBe4vwiMoLuzavqRe8VvzYkuhFu85D16EiRyNrx9mVNCiYZ63vv9FZL6ZAMLMHuTW6qrSoxU7sgPNRd2pjj",
  "key33": "5jxUawKTsXUxo8XAFHnLS7TUm7h9BFCEMs62hKRLdWkDcr7rA4gjFq62mbNW1yAFTqKjRQK6P3qPNMhDg4fUVgca",
  "key34": "nU3m6p9oy7N32mKwbjYNdKz5w2n7xwv2JApntMAh89JYzc91yDLtbsX79JWQVCLZgQ2sx55NpSqFutCpT97yFRL"
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
