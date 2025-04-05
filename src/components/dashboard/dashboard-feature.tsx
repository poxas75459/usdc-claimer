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
    "2djJ4shVtHUVMtUTp9mT1rMAyL74pMQKYpCeZ3uEK5ehQJD3WgJfQSgiUyA58qFB8QsjJ2iPQJNBqyBrmPBrfC3g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hNNtAWkHFngpeYb2VZpoN9LTEnMGXMtigeAe1s7K3QEgY18Xje4U8ASQX6Lp1bJjVrh4Z2ygDfmV5o3fjeNtap9",
  "key1": "4vmnwyfT4SCszuEvoMGs7MDPAY8if7k6QDTSbeX3arFxDZdxF9NnkPxFBBqTJLvbQBnqo6adX1R9YG7y77VbXudv",
  "key2": "2CWgzwrPCvVui9jbxAshBvpPQe4RpnMg59D8DQ14JzP4nvAEUg1BXbHvbaAEBRbE6f7h4KSEArHWnH1xrJPhXxbL",
  "key3": "4H11mNh5Nnn6cvW8QgyayMEjgNE6iJnQnCyTrEhArQGWWDXBD6HWUYwNFCMUVr3s4SNLicAtTVmAnSqPaLqcF8C9",
  "key4": "3sMu3ELm7poXNxkcT73K8tyz7d7ZP6yPoQ2K8QFJppAFwBmkUF8xJabJr1NoK3hFcyc8LwhzCBdNSQX8k4PQSRT2",
  "key5": "QGfBpsvVSvXjhidz6WpCzCAFkqcxEBttHsqbbsy1qEDwihWzDraB14f8dBvjWstKu6L55xGMj4qZit7GcVgJrWG",
  "key6": "4PNnXa5hdQUiiv2PqZRDtvx97ka6gRk7biuE5PpCd5AxNnqZAiwfH6uMjWaYb7kHkW6TZGmAwVGhf3HhauWHi2HF",
  "key7": "51jW7ejBCSRox9ZFTv6cn7ncKmfQbrdUTnr4At6mkwacKyN8y2LnGeENE9McqWF3fev86S1wPjfeFCQMV8LS8oDg",
  "key8": "46ozjtqFxPCjm75wzfVEzCQUZQGbbvS1DUARXZH9egAKSzSuev12vEgdg32QnzJ6XFQRNyPNMLadoBPTMuVkQXZQ",
  "key9": "3Yz11AtoRcS4Sb5XJaMZCRZbvpoKHpq7bCzq6SKcQ9SiYbXWMKuFZdsUJjRgKavLFndLU4dEzuxYxKZvc62t1gpb",
  "key10": "4xDURPJoEqmyrJMT4vJHW446A9CggwLRzffUUvckCyT3ppdJX8vHkGxNBuvshT75jigJC48TxHeX14FQTRpHyXYm",
  "key11": "5G7bhaexa1uJzLgmYpe5NTd9r8xYVgadPtt8gJhU1nmxh6TEfhUTMChX3gVK8LXrLXZhQv2HbLgSfTPxqWNNZh5a",
  "key12": "MJ75gY9dK5L7LUhfvfuPePXHu9sjB6YhvHVuTeQMu62UtBZgrDbkZMCZVtT6kBjdVxhwRGscbUzaXR2u1vDQnrd",
  "key13": "FTXAcC3KnMiGCgostyfX9oFhpNjvZt99Gk1qdvkQ7amwFybHFWD6gsbx6gvjLE4NaY88svYXeVcGUyhEpiCNvnU",
  "key14": "2ztgcHdkQTe7EKYXx3WEBMeQca7SMMzBEBffcKL8mNPRmwvBGuEQYizt6S1RRu5phpxRJjhG5V4CbcUzJAqWsj9D",
  "key15": "5FnbQfY5Tz6X49P7SbpXrDyXEPtkTUtGANPsjm6vXoqXGiqooKRgkiB1pyrDwKT1SUynf6kyjZ97fPKwsQAYxzVw",
  "key16": "2gjoetM435V9X9vLMwe9G4X61BCzVBvTotLGX8uJhxeU3BuWM8sLgHaYqeUpMWPHPS4M7kK9xrbgK1hWYBM8My7n",
  "key17": "3CzEqAR6zxC6nTtzK629JBngPPDvvc4jkmnV1Gg3iWCdsiVGRMPNgexYscKSUrPZe1P9cHJGC4S8XEJ4h3hRxzTM",
  "key18": "5WbCPt5qFc2Pq1UqdVmHe6hddzmw4GARJyaacE3XK7pEiApqi1v7X7Z3kSXvQJhRrBZHcpSFLhaibqr1zogMK8aa",
  "key19": "5yKKTTBpdvfiG7DCyfGmwA1iuC5fKa2Tkzt853LA5yvKD5U6WUKvhQXGh6EQ1ZFuuHNDEJP1wE9gbKP4eP86HFDN",
  "key20": "4yCpXnUt1brGCv5yXt2rAacJiDqBZCmpP35TkT963k9QULZmXr7CCMQrKagsDkZKkgrrQKdU1yiwPjE7nWb5y22",
  "key21": "2DwaFiCy4wHNu3vaDpGc6hAVw9cohCADzhJ7e4ZLq1gxQtMVRLH5MubYjNZ4earwUo6h15n8H8pvJuwnYvyjJb1e",
  "key22": "3MCyvtg9WvNHkDwyD3Y9PBX339ysPfebPWJwDY7c8CmHSTjV94A7ULUU6qm1bKxvB3HpuvjnC6Jz7nYa7kzWraTC",
  "key23": "2ufb9E9D6eAjHjjc2f3aGKbBzJeN4edDxcxxatoA4e4joB12PM18rcKzmfQwkqGUJhPNBUTW4K5ua3vF9XAtNWCD",
  "key24": "516p4vgYH8ssPhaC8pVghKxSMfXrjr8zGcpPFbmf5n26FnwRvC77gpgavRWzus7ZLNmhuAVeyXDNo4KzAKRyPhJc",
  "key25": "3LKg8ekucW6TzcDGRu6t2SDMX97Ab58CTTZaPmWHXz7T8tgv5BchJAigYN3PGZnEKmoNN47T6fMHdoprY63X9eq1",
  "key26": "9cKxDJET92q4sFe93fG1Xih4gFV8zhkJX2DNJPSmYJXn3zrdG8ngxUgM5BatFuqBD3Q87mVzuytU7uNyCziuZ63",
  "key27": "3nuAQVPfrsZEWVgQLSreMqmTE5YiAMHbeTjn9DPnQ6UsSVs5KMd9RzapUmWi4bgAjM7htvcLiJrc6chprvN1veDc",
  "key28": "4grKaVTpVnv12dijLCu8cTaY7mLnRZpXWYBb4AnegnT6E8LopuNdhdR8SWNRNtKuMP8Dq5jJUrWZxMayxYJ5bx4x",
  "key29": "3DDn2hVDcNBKHGkCgkwY9qJfxDeusn1WYmdU7tQxiAP5SAmiPqAAE41rPegceH9n3doZMahxrUHnGvZnvET84NGk",
  "key30": "3yMbzHejbY6coYPCjaVpx7PFjnPtMcvuNfX2S7zMbrqLw6oYukwMo4t3X4y9fXCLmncmf7Pz6WLGDE5RNAgg9C82",
  "key31": "5M5Qr7jUm69zaQpQjJ28hQ3Yov4A85njLEAPnyXGFucQPtfUr1CJDgaAVVeWcdkDv1QqLgHZfWtYSQrJHgcwkCsm",
  "key32": "5c32yYP1FTJgqSKeqyBWVz8DozSXG7rxLvojNibgGnrAFBxgBP5ueeyxJBp1d8ri5zSHVGFDgEGXz6f37NsrkSn9",
  "key33": "5KtAwoezAdThzCFWFYtdFcDG89PgY9Jx9xwTYUeqb1vVGXa5GxbdJYZwr7VmEDw12ya8n7MkNU1Ank2sZCd114x3",
  "key34": "3ZUou9JmisWLmvNw172CqrYXmot1R54QuJpr5daUvLWc8JWBGe5rsYD4scoKQqSkNLeJEWF4C6W2mpy3LLTz84gD",
  "key35": "2iWB7SBd4TMUCHckpU2HkR3aekSwA9HT9tBtUePgYyaZuvCHjUsWboW6V2XvQFMWhCzBbHBMVb6A4iuifCEmoXyk",
  "key36": "3hdYbeYH2HGnAXSqyoSD7VB5VwH5E79coZ47rKghHsSHKuApgDVtGRza1CJJJyJaYd9tJCDCaEDdYNVWFafZJrF4",
  "key37": "3vhF61i9Wgc8Qp4ggZfurtEUU2xgw6o6QcXHQnaJrmQu3FypytxYS4FechF7aze3gnvs5yqPmFF2XS2e9U5WC9S",
  "key38": "4945onWsGKcCmoyktnjVvz3EMy75bUq91ZX3rUmX3VNFc9zNU8Rkb4WtHEEbNHoedDuaXavueQgC9Wprr62FMAeX"
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
