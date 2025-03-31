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
    "4mYRZcqUDKDh23fKZ8bw6ohSRBm9fuvFraTenqmiAia5Vd8seHf1DHnMToJWxASywxj5Y8wUZ4N1jGxJSfSDbHsd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L4CJUPuHRRVEFskHMAQsSt1agn2A92uUavnZgcZsYi5xueWGE3WuetpZ3G7XExs7USgvznUCeaY16PVrBQeUnFV",
  "key1": "3Ae23ojQau7C2xppqNV65aDXnGaHZpxmaEyWfNewoKAnsguJQHmLdrHbsvWnJm3AjQsJwQNcfWHYBK731GTjUytk",
  "key2": "znaiuiNDjyPmdj2ANV1WC9TyyadiKb2TbG46m79ubD3ARcu4wE2RTnJzGaQkG2ADi5upPNPxmfyfbE2awAdaxMi",
  "key3": "4vmhCT5r52ma5ULV7cqniLzRCaPWErfP6kBVi7KuwaJxcgBck6vcjShMRmJsLbAmPJaKbnLxXXtx7dvAGbrSF1jp",
  "key4": "5a6cyHTSXFVbNkQbZ6uLHZ8qfMqNdXXog8AkMLnKtdMhgLChJXU29gVLGQiEerAzFWvWkTVKDiNteuWuqbhjMoUQ",
  "key5": "2uQP988x6cAVcjwWufHwKSmZ6J81ZRBmXbm8n1ZSkrRaisMbmwEqJarBjLwVZghDt8m8PovScXUykZCAEvxaDATL",
  "key6": "2qXq7vZVZdGtVytGqUB2P6sjgg4NjUKMu8BdGoT9eUw5b8ixB14wrpMB81GHgBbXkebo7XXEJYBF6PZucXn2yfDJ",
  "key7": "5Fn7DP3AUC2bMLreemaRurcNNPKzvWj1M3UWjERHSkNU8rys4QsFA59thWskcAoDtRtVYZtiM7Rm1NMLQPpZKBnA",
  "key8": "4so1BjDjaNmrorcChrmpsNcuS7HDLGM8doyJjEfBXtEf19ifQ48z5oxJykbo2iQ8E5ti56fCqFMFFoCgGrWn4YAH",
  "key9": "32YFdBSRJRhQBPALbtYHiErA25421JYK6o2Y5cqasvXUxNAWqFBCsAG6F9gWQg4qsf8nBGVRKHYsPYMShTwidtns",
  "key10": "LSrArD4FqrhJFP9Dy8CLAcUQV8aewMHtm1CRBgHzFfiHPRaJgQuBtDebg4Rw4t1NkqxQkY8zFExjzK9U8nMitxx",
  "key11": "4nvjxrjQo86Fey9gQoAPeVK166YeHpqfR7A7CN1iquTef2ETvAiiqMjZY4cX7GexJ7Xi5fW8HQikUz5ZgYtvoS7Q",
  "key12": "apM9D6C9GeR9Q6cSCCSSEPgrbeEUGHFjgNU5mpVdkbiETwBfdJKqL5XYKeQ7iowZjiQwMykS2hcPWoXEaFoxtJ4",
  "key13": "2wmhLQgz1kqUkjqUnKj3iqHEgz6fTqKccWFKeG7YPHnSCwWfP7qKG3eSjPhEZkEkdBGNjN8Gys32iZkYv6eWuteS",
  "key14": "bnCa4rFqm8Rv4yigFG5fPN7yRpGCsHbUwdTihjadt7yEBBWdAJZMEz3WESk6N2JfjYydeZvYUJYTFsq7LicLXNm",
  "key15": "4juUnGKK3T7fnz9H8cMFRY4v2VEYPkpP4BxR7DVXS9J9gKyTeY5jj48h8PeLiz5adWMudajc2AuqkiUXp8DbqVYH",
  "key16": "4LpZwi7eYxYZv6Ufjq9VmMTmuW215rUd6o7DywWTVauPRuG65z1VB94ag5GBSWJ4CH25XGM3H5XUsPibp8kQF89W",
  "key17": "4GoJiRbzbgeeBoR1quUXRKeg2RxSpZUY1c1gez6cpxz3K98MYsBREi9mjRYBKzJbJMXgLHLHJk81LhQVsm49iPaN",
  "key18": "52JQ7fxVS19ukysVbx1fPjHEtxjVRuJLSQ5gqCL67Ecxx7MkBQuA1yUc5WVyU9tLGrhvZJ3vjewsrqgZMfky58AF",
  "key19": "3enNaP5jsjBvczo5Vki8bKtn2YUjrAQkyzrqq9aGhUKHKT9D99nYYtdgQUsMT3ku9YssshrH4CbZ8kVsQMXWQtWZ",
  "key20": "5QUDpJCvGRThZdXqkcnD21mG9CDmFP9EToMfKMQ8kjgMNmhKEMCoLUTXSZhcc2PQkJTWjut37EHTXMf7LasXdSJS",
  "key21": "2F6hs5JGrB4GeqV4nd4nUkS5WoK7T2EWrXKPjfYcc65dSYn6GopHtgfhFXn3NrcEjtwgmCeZ7jx1H1um2ZQcjpJ7",
  "key22": "ZfqUiC5rFW85v4fAoN6indLRTaMaZcFCvx9ZDFMpJSSeQsBEmySPHcDGrRT6cCw4pX8N3LecptXa3u2GzqXD2nf",
  "key23": "ZLZZ2xzwp9ifAf95gYZmvADHi6nw2kPPytpSYvpu77NtsxUSEXt9nng6jYdfiV7HyTnQseCZj4y6td49ygU5rH4",
  "key24": "3BJhj6ftwaJPzMiYdtevW5ouu7Se4pCZKc4qqDEpyjKSxYFa6A4mV4QMeHVM8PWjPtBAC2ZhK8ic99z8PdoNAE9H",
  "key25": "Z7P9FPYy3fSZC6hSzV9WBxtqvSmhJLz6RwBRiHGysAkGmnQBoUN9xW5L48YVzCqcHTGUyPdsFXPJPG8aKwjxERG",
  "key26": "4UXESJsPTAEqmdfdS3hcr27AvwtE3FBRBLDKYu2HEGwBU8dnX2gTahqozaznexdXTgyhyfK6zp6KukQrv8QEx3QC",
  "key27": "5JjrpFLityqDLR51wxWQSv2CehfXoJphXBFTDuteA8vFVAQsH9fsv4F8xS8R3s1vSNVEKMm4c8skrafJv1RZkwUV",
  "key28": "vciTJ6vS1MYdmvm1yBMCYoauEA6bD8eEibpcQthi5sHxQT8eDcKw6D9QWisou4xMqM6yeku2Y9DA5vFJs9Hddzq",
  "key29": "5TgSNie3DYjWsJfdpjvnCawVNo4bWPSSo3beG51kuG1KPAYcTk2PNYZ8U6GNTKfP8LppuMnRRNWcwnLLcwxHefqa",
  "key30": "3Znh4sxTt1sd4edKK4yKH8Bs9dpPhgnaq24cmgnfi8DPc115sYM8b5m8pdUeo8R8A2AsSWP8aectqPMbZ7UCxNQb",
  "key31": "4KFjmnEw4VcovxiWpaigsHF7fGvzFab5nnDD2YTWvpvHNS8vbBx9Xc5wqf5XHVYReF8PrgEGtR4NCLZQThSe8kNg"
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
