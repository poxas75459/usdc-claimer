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
    "2fRnL8LjR2z5LQVLYgtnPDuxVctmGWjZDXzs1sSENdU2PGMpEu1Go8givW7NVPJ5jHFxcYoQVQhFssSVhNpyFotm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pDKN4MrP9AihcdVXR3eJ8QgCpJzF34kYYyuZYker2saHKdWukRqNZZzYZzxvL2csdQo1hdyF6a8SFnomTitAUzA",
  "key1": "Xnnb4W3wR8phw1foNvm2HSuscDW9ry1Pb8HPQLHiLSBdCmu4nDqR9re7UvQj9yYK6KMcV8su42CWNBXZUNTbQ5F",
  "key2": "4nXwS5wUJNG3757U7ZrZtedoXJ1JHvVGvu75A5qgLXe6Sh75Kir7j4BMHLgf2Dj5DuzjyGjtBubZ7KRvJrX5MAAV",
  "key3": "3SUaQU1Yb1NCfVsKKYNVRtZtpqWH9MSTZG4tjDxuFu9Ho6odt4FizRrimK5B2VTftYUbUEFitoxehsMpN6h1vepe",
  "key4": "4RtbcHAQcEfgnmsbsbKdMikzGeiksnsDsuDtQFBzw3JNiALZqyZeACDvzxbW1TmNg7UjAKsG1ninFKVTPdTfjDee",
  "key5": "439ibDJqLybo4698M6qJE9C36GWKXJ84J7T4Z1StnCgg9TkaGQ5faj87y7PLBZZSzrCuunGabnfsorkHqS81Svm",
  "key6": "5DJpwW3Jy2oCFsYEGZmZAsk99vBx9J4c9CdNdszsVDRDVmbGazS9NVSMkC7FMGkW9TrtjGHqutNMmpGR6p2SSXGZ",
  "key7": "ynBWCwAUFVe1XH6WaREWgU9Fz5FBAfG44LUKsk4tuy3rHGECWYCZRgXuVs6VC9twCVttr5Z3zuZWA1ep8xeMA5d",
  "key8": "5YpBdnMsDT5ieQyzc7ZosQc9HcFJMoAevMWNpXy8es2WeZAp2igfCx4hZpKbxDX5o1CAQbma7J15WTqFzaM8D78Q",
  "key9": "CxeyBoYkztsQRC7gGPmK234HgF6JsJ1vPoEwGEk4kqbbymQPjsFTFQQGMAdJasZqi4C459CNqbybKmD4ESLgo5e",
  "key10": "613WrQ9dVczipfmwDaVEGtWYkpWGmAv3ycDdgU6MtR6z9tVHucpkntg85CX2c1SwokqpQaFKPJqW1whdPLf2EARB",
  "key11": "222nvm5uncbe1R8T1Aq26ZBeoB382iRP13KGTHmRMNP6PesgVUQK11hu5cp9ZfKjTtjF3SAcQvMzUNZCwwzgLX1W",
  "key12": "2k9DQaJk4b7BtaQQdvUBtBm2uYCmNuW28g4gTmKvbKWjdTPhA7UMDkTxS7VDuHEY32Ue65pAcqaADMViKZyJ8J4P",
  "key13": "2waicLqhVbwRe8FePkdALBDKGicenKpvFvLDtNe4tjT73juZJ4c6n6UC9xh7WtmLtmz1frGcbtrvfavNRfyXRz1b",
  "key14": "NzQSngarm5U5ivJfTNbg72pseJfy44U5Qyyu4TXgjs2xxxhgxTM6zGacMHcRuwr4KThptSvHGPqkkMVxssQ5AxC",
  "key15": "cWeo47p72PQLGgo3GTCkgcwPMsUcHk7G7wzMtoKn32zbAQmhsvvNMXYJBrQcJ6nFKtZHpJz4TFsdZHFi3oH4YuM",
  "key16": "pYyuPSosbQMVAh339V1m3wNUSixb9xgSMGutgbe61DMQsuYaEpQP8VQ5szAwnmoHudqn81S4EVi2ZnCASNQkNFw",
  "key17": "VJAtzJjM4qwCPW4gGDbgEvq8i7DKpENBAxjXxpWzuFQ5wPh4AnDUxepheWU2CQTi47kUdsqj2J8nUyC3DohYd1f",
  "key18": "5tmbjusmDCSgqDg4qnLyfdWUHxtXrPXnhMxRUNckgcHUaFqmckxDre7wwzkpaxmYT4TKUs6LjyrBnixH5nE48VtP",
  "key19": "3aU85ELax2cwyoZbtzTQ76Uw9kaohA9YPAYknvDd7t6K9JYJh1Un5BENgdP1Fr99b5wKQdGYBR6v37H3rgsA1Gsh",
  "key20": "3M7r3k94MCPP8jgVtAxRE83YMJsU8itN7krSUuDFeaWos5shxUcfoD1Kz1oqcRksLqa6aAqL5uuXopiUiK4hMzsn",
  "key21": "4u8iYThXtWHo2ZgqSqNWVtRuVa997NnMECXuNWeZRBQNAK4QLQYp5KiFYY2tytMorYAtYp9ig4SGW1XYtqWidEyT",
  "key22": "4Ey8C2einj648whKKWuc2Ga4g7ufqMNhXR8sP5acG2TqBMU2dcqANnFaeRVsuQLq7RCpxd9kKuMSneEUXHqmwWw6",
  "key23": "4Wicq9GzR2HkPZGC6dWJh9gfYYsrUxykSYxThkVuMySSrQvQEoE1jxSoCDNjf6NP95RoqP3vuDxC2kRDskk7wLep",
  "key24": "3zGMY7F66ewhLJuvEFx3Tqq2gNtojdwUxsDBS12wEKigJtToNHiX82ednGUFGjg6WygQRD7Aa1zf13STb5cvMfRC",
  "key25": "5HDz3YEXE8ugqaJFxEcLK4SA6hGVK4zAr56MSNhnhkPYZGdSkAygpK6iZxYNpxRdfr9UkfsYyU2i81rJjk59Nvf9",
  "key26": "5aNMypGWFrHu5FLSjGFq9Dhc9YoetUWTDhU621Y9VMxYf4PKDRihf6RAvm9Mygq5z2DgBgvrbHZyUTAhEBmhyRj5",
  "key27": "5zeiWPnDXBiNh1HEU2MzMQ3zyooqtp56mKULpY6T6Zc1bcbWv8ApWUGAeavQXetbaA6TZdubYRRV56CeU2kDzehS",
  "key28": "2JifbjH88JppScstr1gvQ2q7JQNwutFNz8nCUxeGBU67QC9JD84CyP8R44wRS9UYe2oZaPe6WyJvpqizg2HMmd7t",
  "key29": "QCUTRKbjsbdujzte3C7ihdWwevvPMpaiM6uY1CPznHWbNVc831xZ9g68Uiqhq95EQ68C127xarEkKEefzQsGMbC",
  "key30": "32pDUZKSyLe2TAEUSQXSifrjTrudAYfKVPvmZSXo4fCAg6yiAXF4GTvP5T8SxjCD1SrJzPsQdEzrRnXq42ZjfNA4",
  "key31": "55NR31w34wfRG8irmgRwR3CDmfzKjtLwLH7tK5aQ2LfJcuDHxyTrr6KVtGWjBvqHdqr1FhWkTE252h97znPBGrpU",
  "key32": "3XNwzrxoSBU4KurtLmp5Xhf9vY6xurSP1Qp5peLVhM3PPNqptNkHT7iYQxqokAVQgBEege2pJzUiSqre8PP8LttA",
  "key33": "42gKGaLcLdKAEyXA6fqsndX4VhLTHSudCmWZuFRbK5TKXtmHg4eSr5rGo3hNWbGf8qkmqRUwwoJDoNFnqc1saBQe",
  "key34": "5Yf3cYpJfkSKFKQKbdFbfm8QGkkRUNRaFiFYpBTDxD4e3uB8sWqRbFWmy9SuvJc8fWEbe9Zm8vtHWDdVymrohA8B",
  "key35": "3BPQAFCftruXrMnRUCvTqUrQTGBYps1AxK7Lf6AJP8ArRdLSu7qgmwPRDEWS3f4NUMHGYmatxzacT5udqxnRig1x"
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
