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
    "4oQ6C6ZsHLd79NSz4jyKYeB6MvUzjz6ELSjfXg5bEYoCnSu6Kcpr4LCsfv6mS3YMv6DHbpfWXmFzEUUxiv3Wz5kc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bHAbr5pLVVS5niVqg7SXA3PKx3AQLM1esXR37ymUqjhZFRLVzwDZu2aUXxrqCKPw2rLRBUnwWzC4zm5LTt4XKf3",
  "key1": "3pJhRGE9fLUyL8DW8jrDsAzW4t4teoa4DsPtRiBwqkXL1kyBuqgCXEE7BJveozuN3UySAeRtamuEXi4ATkqh3dqs",
  "key2": "2X9oMvokSSWeSxKSzSL8Tf6diRXKokYn4qqYZKsgBCYRsVHvGYAP7NHiEv1JLVDDM1UmQzNmvbzGHYZT6rhr6MH9",
  "key3": "5JfecKAeZPz4c89XBCDKiWfSxoezrifGbQwVs6NfY5v62JJzgTiSmZ93WqFbbkewwfpQTkTDwpBv8UuDKZiGASt1",
  "key4": "2sBTtpN3e9as7cB1qgKTPqhS65QguDtYFenjKpo9tE72Xcv4M5GVs88MDKrYZG9PVaHvcSSACfRtX25QsdrCpzSr",
  "key5": "hoimzbAcKL5hwhAZHZZWQ6BrqutHc8tKe1W2aLto2yQN3ZN5A248rUkz21FGCHmWCJxvJWdAMpybRC1kFAGmdMo",
  "key6": "4WsrFHeQtMsr1SSvvQzk6zcRmSWHhaa1bwXT5XAAFf6LhpH7oE3ZReWvAxfGtgtMFVKVYXzSWkhF2dfduJn38CYt",
  "key7": "pFQoagH6w8wv91cfDznZrgNWCBPVDtUWtxsXGgLzeKMPpUmF9ENd5b1FZuyB2Rf25ghT22jKsSdvVyrKd5VhiTY",
  "key8": "5eML5cMDne8w9TqCDEJe527D87iVUygFMVjVWMeG7E1ejajDr3NBzU9mPg9NhD6jvY7RrK3iU2PGZdMKnMRSQJgU",
  "key9": "52nXLNRU5fG3rN17vwvmt6agcbcjEPvQamUGodKRH4oKqGwKJC8AtEmE5j7ZbJCwJMPRRtB1JZvveE9MdU3LESbM",
  "key10": "8eHF8pSx5q61iPQZ7JrrmFV38h1SFd6kmW8cUWNBnm1ia7NH7jGc46vGdQ9jab4yAMreXAXLH9VijwSwy4wkfzq",
  "key11": "s45e7NmyXLRMjeKVj4wtJsnQYupZijJuZj9wVHCHktjkKEgK4RRRFa3wWYtTJR4KPutnKghExx8SyZNCCm3rnLc",
  "key12": "4ugkFEcdgbEFCx43V6FZqNr7bfwTzNdXip6NxPnUr7BqZtAMcNHNZVUmZmKwWRWJFESxkCh2TpJM9SLfFvAwhPq7",
  "key13": "4qUsHRQhfXU4yWTbK9qnJvD5jeL6NxPFi8Mnt3r52Thz4mh6F5L1BjHVE6movsTp7LacPjjjvER8TFhWF1KU8DRE",
  "key14": "67p8mfkAidDao3nNEsE2ckwqEU5x5zjiKZFGacvrw49i4MXTovDoyHktFFBHY4gBkMHNwoKwZN592XsfdtDYoamq",
  "key15": "4bYWai9GEpSGLfEn5ggw6NDLWWRRehye3j4bVDyB2JxSGZgrPA4XuJjvihc3USj2N6fuK47yhg4ZYuv1ygYY2bs1",
  "key16": "2RvuuL5rMiuWHdbSUM1ENQmz11pHJnNaF7a94RHqfVu1tYzrC8GbMoKnDrqjPbN814MaJmfoj4jW7P3oSjxqpFMy",
  "key17": "2ZQub21cG9qFBhJh2RQGrXR2FXHwmoKYUwZ2qedXHFbYNVCGXyptACt1Z1vyUJU8g8tCiKtfKEyHpAWmzwRik4JJ",
  "key18": "3ztJjMq2uTdhzNocN97dmVLSppisX5C5qqcrCadjKRgTnM3XxpGjpQwxw62bKypC63srBDGghYnqjmNcc4BUbAvp",
  "key19": "5oQAPa3LM25JGRPUsKszL6rPPzv2TAHkSJRzaXHG5e63zuYd1kKswbEn3CUvRcKG47NM3qx1rw3gFdiNGbVs25G2",
  "key20": "5o3TfQA4iGLvdAZKXMjXZZqK9eU11hjb1FoWMeqA6eXPoXN5fECg5KwpypGj1d7XsCkVXkN2JhQkdsJwxRVfJLLx",
  "key21": "5nnsWfvFGdu2hSPe2ZyABncsfvxuJaHkNyteTRZaBYFpfayewMUXW5jj6moBQpRQRPNQ6KJD5SsMwmovfCAyPPPC",
  "key22": "5a7v89QL3VUVWJND7PYpLgdKvr6AZ6D2riPNHczshur26VzSpSTvqAu8zFhy7DcEYWi8J2jEwTTtxLaSUAovJuCw",
  "key23": "3aXbiXPagPadPUpkDWKFrDSX2o9SCAL4s3JgjQRri2B1aBMC9YGFMtVr5EF72TRtpYvCgXcXcUY1WiJQFJbTnjDB",
  "key24": "V3Dub7afsWHSJkPjKn9CH6LLz7e1FiZUmhFvK62f2CYsvMqc9aB6u4qovKE9Mr8vUXannZBU9h7L5fqePCJos55",
  "key25": "5NomMMb4ajnfbPvsdyp7epbYu5ZHBbFBskGoonqDbacG2BRXTrBqjtWbnewNwwPBAUbmfpH951te1VhA244z9FXD",
  "key26": "37CnwbvATFPUndstHZGiGdAzHLUaXhUvAtJweMCeMzSastBU2YJjwiezrdu9yM88srxqiYaSuSPe4HaiYjLzhskq",
  "key27": "31ypcRNGpizGidRUFxhSdvuB18x5hGUXzKMdmkcvvuuo2axApN9xrbYhJnqoQAt8A2FUaRYxiHByFgSx4oYni4VA",
  "key28": "4EPWj1Nsri6a7FBPPF6pfSUnC7v7SinzFwTVg3HBhAPxYhZvFM87gNpWc5n62mEdaAWzj47sarJSiK6F6QFXtz3X",
  "key29": "5Eaw8jNKbD7HcJrAGcoPua5dq82uZy7XdyaEzgxEL7Yd7nGHYBAJzkt2jNgs9V7PtcFxMpoRnQ3eSA57xJdXgzjK",
  "key30": "45JddzcARd2xmTXv4LFpFAS35bgoLeNUKXqAQYSrqPsc7VJEinNRqRoQ8b49zD8evQfMUGVcz3uTv4T8VwPhp5R3",
  "key31": "49pPSf5jBUSBm195EaVyr7yxvwvXRSrwoAboyYzcKVRjAPizMiTrsBiz82a5dRTNmmQjaACE9EbMdj8DDgNfohbR",
  "key32": "2dYDjRtrGNnz5HWset1B5Fi4CzG8uxMmg345t6EsJe3DeyHS8j5TNsSWzpqibo89SVbvFT9JsHMeoprgG4unfBhB",
  "key33": "5bfWuGL5Rwm2eS9tRFSvUnNcKHnEyAUeyeF6sMy7xSMfQa6HBFY3ZayNTKrbWDPnQJhykL7L6EN9om3f29PHB1mu",
  "key34": "4wtx9FCQeFv7yw6SEM2gm6dZZGonG7EU2KGYatCyS3dTesA15Q2hKPceGqgfToofxya1q1yaTGcuqxDWvbipHXAz",
  "key35": "4P7sB29MuJf4LFRSsNWn5Eog7b9YWfC9bJq2qRuC7vaJCH8ucQ8mjAGTHFVNmmECFbzfsHMfvZZTLpWZrMQS39rf",
  "key36": "5ayhNUWBLeuwBgsmaPqBtTMzEstWCYieKVn9VtedFpNJ4KDJtU2ZZHHexLC4hKRpHTxTkaRX3EtiwCsc7gXWmD78",
  "key37": "2s3iHLNZ7kCfJc8aL59TyRFco9eWfRY8KdaZ7YKERrV9S9SeLANh7EpJJDTTrXwaKGvDR8xNY64TGH2JmTEjbJqw",
  "key38": "3Pk3HNfUqijQqbDgPhsUJSaCkJniyJ8cBAYo2Qkx3S87UNjr5V1VNtgKRoAhviLioAufc6kwgmT46jj7Ddd4dSsf",
  "key39": "5WaDNaatWRyJPAeZAkE3jZ7BPF1vWADzuWmxE46s3sVcTpWds3m8nXXebs3eabDp99228kkhFo7vdJ8sueDGbayo",
  "key40": "5EWnLBRf2xK3tvQHer3DtepQSZi7j1LoQRfbkwswQb82ktwSZhh3EBexer1cttGTm5GPXjSt2jVVtQDNvZj8Q9CC",
  "key41": "3aMxDEvcZm7VwnViCL6vn4BwLhG7UGhMNs8UsvbTbZTzSPMwhMqREz3MczTdqstCmmpcKFncaJLd6eiTFtqgLQ8"
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
