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
    "j6AncgKukKJ4M7piqXzyRynZNKw6YjY7C5xhd91cGaNnZy3k5TmccCqZhJe9jNdEEmAwXiLHz4ZhARW5dkT4xjx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u5vp1b3MvRYuWw5HW4DEkL8LRv4Wym4JZ1txmmu5UDsZYLXSAGVq1y47GpsGk1nLp8zkcGH2truUYspXsyMoaGF",
  "key1": "3sj2KpetmHDHNC7h2fv6SXADAoEmA319RFdhTSWGh33HShj5gmar3zdit9Li7T5NtxjdkBQ28CHaffuAaFjx8y1p",
  "key2": "3R72nrNg97ZqZxA7VVXSMmy72vGTuhzDH9Ujvnu1xwfnjX4upYqZQrARNiXHqUTNXYqPMJYJP3KhrY1iLYew8eR8",
  "key3": "ykENSYaFueGGbwbUk89xvhSTFYxCS26Wz5z5nHTp2T7DRqQJD3kAfPXGG8JPvVXWyCtLf4aayUazm8jSfqohqYL",
  "key4": "54y5dCXSCJyi2VCas7p7PwuRRSDbvTYBiqmhH4L3q4nCyvSoBH92XRLY5jpD4R3VNNtZEyKLCJ6PNiiKzC9GUcFc",
  "key5": "3FS1uLPvpGKpjQrcy9W1sm73JP9HZLQCXgqRZsNtRKTu2VfpLtWy7qKDeCR6TDTdpVhmbD6jLgHv6y6SnuwjoGbe",
  "key6": "3dqVfcGXU43mY4qD89RLWbnCxbK9c8FWr7FFsFirtbWuF99yUgYwtQbvJkpc82WdgFyCQamUyHsDpZcBmE8N6HD2",
  "key7": "55kyukDswZfNfPxaxKwe9jPXag236Q39SGUqTDxWMCEVg9ZNQiGiZ8Rh52J2CnkWetQZQUkagyMPLyq1zWiMEom4",
  "key8": "3N9HZvMJvRsY6faUsbb5JrqhvBZhhFgS4Bom3CxHQmCH1fqE1Vvaao99kVVeFkm9k57doFL5qdt6z2WZf8begejB",
  "key9": "61HF3rmq3KRjtWprH6AQypNhDCftj2qa9Ws3PsUuJQi7grJqWP3ambithBxtxo3fWmCHnhNRziAagQ6sq7Tb6JQa",
  "key10": "4X3dq9SSK3XhiCzfaimPuJkpRjijKxBCLLdoxqeE9ZtDnF2qZBqX85tMrBnwWgj7h27GJ2GoeHv8qTAoNRVmahU",
  "key11": "EtHysLksgeG73Np7BgyLU9RBJbBZNLsRpPZhvbVpVSswLinikCMSb8uaEh8an5SfR2k1eNfmf9aqRmDVP5tW89n",
  "key12": "RVJ1Jx5GofrA8cyTX6qwrCUJzXRSRjrzU1FThffBpDCyGthKLeUem2DVqRUgohQ7vPyUVoWUNZmoqUHqtSKwhVh",
  "key13": "5eUbvPNdRLKqb6M11kYXLdH8cSX9W1QJCc29Fic1S3DReUt8yAtPbYpDPmSycaHB71nD98hMtVHDjhqMh83wanfo",
  "key14": "5WEre7RNhwEMcuudxWtgwPRHxMUwBFk7uRHTMiBaWxjfM1Ygi71VdcDxhB5EAi7MSQHeTKePmWqANU6r516aL57Q",
  "key15": "71F6E6zDPQZq4Zk2kpRdoSh2uiLVR3ZemjnEjrTMwNA4YU1bDbjk7oKhcfWGn6M9ksqeKRHZ4TqvTeoFmJUmcw7",
  "key16": "2t2Rdkmi1GNbvnpE2arKefJXKsXzyZEwQvMwkzKxsiNtwFcdSmFW83SvRHy6YFJZGS1qphEZtTAZGYRSTXcsxn9v",
  "key17": "32pWtk6JoZ7cy1XPXgEGHemGhPqXsB6nLYnZsUHtygyybANZR5AUm5pgnheQo9bujm9vH5aW89bNCkNd9bKBAxaN",
  "key18": "4oiW9GWhHtYATq5Z25GQSbpNBhwQdom4AZEzLTgDnqSVJdgoS7pfY9Awhxa9RfGjVB4Ry9fHBTz3LB9arCZeGYoc",
  "key19": "5deKuAJe4BTyEWs2f7wfvbwAHrzEmwMjAUmTdTfcY27aUcDEpdKyuHHe2nN6BLErJ9npBa5ZUHKGjNzNN2eUNzcX",
  "key20": "36HecLpiY2sXfVyRKCs5mLbsKjL7mtiBB765kYL2pnHRLLdiHsFEjxeVWdHqnEvHrYbmxetXEKyrenkNkau4EJka",
  "key21": "62hgz5opighLrPikFk3UG7sPsruvxxyfTa5JwnJD42LTAduj5BmDxzFZ7acJfacKytdmDNnrS2tzwVN6x9FLFymS",
  "key22": "B1e46gFoTA1YvfRfk2DA4aAXvE2Q4TZZiuQi1hA6zEgVFsNdxPU2ij9s8AxvAyXugz73537ubY8CqgzLeu7QcvX",
  "key23": "5EBToDPjjLc4kUC6qPFrDJ55FWw8ms9NzUA5eHubBt7BxtrUSDd66YU9wfZ7psZEo9xTZr9bsPUP5b7XKB5R69hP",
  "key24": "QYRqzCk5QrGry1g5U5ptBmCbALozTfZ1YCXFJqPSqLVNNce2kA15T9KjUChMg7zzyvp6qAxA4QAEhvDRySSRTsQ",
  "key25": "4U1H7MLMBg9hMm6ZLKewgL2E3biZLUBS38MKQZurncWVVeApE3p67zqooKchWSQsynQEatKCMmQqXXRxKqRNYud9",
  "key26": "4nXGAkbgZ95ARfbyFPZ6bL454yXqBG6GpY8d7vjYv7A1SMPjyvorELqNnxUd5QDzZyLuRZpSYPQHAUdn71Rw8Pzr",
  "key27": "3kUcPrswSxwLXzF1FJK4rKEvzJgBS3FFvUTkP5vrnTrUb4LedvLnvhMpBTeuLLBF9baBc3AtCvmxrDGZmCYGf1hG",
  "key28": "R2Eo2CbST4hAXgkfPV4BF9oeaZNN88DJvB2LgqMjMS3AD6qEyGkftpNgny8VQtbm5LkamZqLaLVaZ9uYWBmidv2",
  "key29": "4scuCFF5nw4zsUxcerTNhv2PQ7R43jHC1EeJUW6UWTXvUf7un7dZGUAwqygjHLaz6DBsBt5aSxQGojTkhsyHAhti",
  "key30": "8rbvLKegpGkfkZc7Ue74k7WfjFz6iPmJo2hNCHhwxBavkLst1gDHZpiiUPwVX6919xRnakbhAWtziuNcYXcAzs9"
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
