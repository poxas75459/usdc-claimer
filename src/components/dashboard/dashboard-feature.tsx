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
    "3fuebo6iwtyadwPgK6xp6Sb8BESwLLZ3Ht8RDN7rp69M8EAFcSyTYg6KBKh2sxwMrtv4Bau72TMCDGCEvMiK5uUd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35ED2emHDp5GNwrbQqmFxfv8cJoYnEEQjzdRrN5zRgxVsgJ9RvBFzEfY56vGLvAnRPbrKBD9GHhA7m54D2n7zfru",
  "key1": "N2zv6vtzYVXQ2pavVRLXybtbKTTPhyYyGThoQXVUoJ8xwbbsK5HnVizUZxAQ5QhqMQaFX9A92wrWBsC4Gu8YniK",
  "key2": "53VEXyRwvdm2xCHLcMbU9Muqjar7WBfmazXsLkTJMFehbhEwDLNNEzi7E2fx4cEFTRkesbJG6GTa9h261ny1mkrJ",
  "key3": "4ZU4CNmc9746cbMx2N7HHUekGaWgtFfeZtXFFuUFpRA7XzirBmYd8XsHS6LoLrjqEEYg5SxeYoRGVQTaYfYcs518",
  "key4": "3NZprY5ncpAprzhp5tptmV7TghDh2PmvYzz6GgoQFvYHRUvbg75a2tX5iXC2gGJKkFwLpKwvWbQ6SPDFceHTnhDn",
  "key5": "2DiD9Nf41uNKszRjP2bmsQySw7HnAnSKu5HB7uBL95whiMJZUWffbk7nnC933ZjXpTSQx7tRtt2AHeP8GMttZfiE",
  "key6": "wNfVH6JWXU49uKLurXu6WKYB7pmUpUVka93cakX8bh27mz81J5LRLCjAnCHTCpX4qvo6kmEQaw7FJXCwqYnMuYZ",
  "key7": "2xifBLfNAGQSErLtoXFrrL9u58qBb3x9ruPfo6znAwth3ipeQ12F7CQrKFewBkYnPFYSVKHRYQkLvSz66E6aqZGz",
  "key8": "27V1Cajom5LD19sZPhUc7ZSoctgALRf1Y14hG2qrUHrg8ing5E1zShTjCZ9gPD5Tw3EWxxNwEGNMhmoaqx1dmawf",
  "key9": "3wNDaZsKWTKGRNJj5QxKRxykfhKbm2eP5KBfewiy9K3mJcfrJmBEDBcDXmD9mfPv2w3gEtdjAo4DtKt69fDaApYt",
  "key10": "2ApSKVuq7YoVieTY2xtYs9pRA87P9KXNhP8r3JSAPjAgpqA5Do62q1dwr8jqCMaQDMGRkfYqgXqpWdReuagNHQd4",
  "key11": "3T9hQ85oUbrRcRApa6CG8Z7zNPFcWs8bTc9ramH6XdJUfY4MiyLokE1wyQM9ei6ZFDJWxYQTqXEpir6W2UkGNW5H",
  "key12": "5TcE3r73axfXkdWzewavRT5tDdZV659rzTJvVVdWoPVcjmnKrZwLno1RFfuFWcRwF2WqyLTrrg2B7c5bjAe3Fnv8",
  "key13": "5fzHMvVT29r3b1Rv4NEtGrQn7B53kezRjGcFBk4oaPGRnrQYWdA7ZKjVNrz5SaUHohib6vKLPBS49hc9WhPjoe44",
  "key14": "eoViwyfLZPbpLbJC1W6mrGAD5HnAfab4uLo8Cwy1sTsYWvwV4qWsheGLRS98VKpS9Z33FTzDKSGsVDM8aSxkav7",
  "key15": "UgCc9zAfMdbSM2J6decYZYRcEZCrNUeDbaSFF4Md6NxBnPUy1u5vQNBVNFPvrNTU6E3ZKdAeUzGzyfP3ym1pWhk",
  "key16": "2C66BcXnw4y62EB6T4UszD6HkmDkPXJC5Ezk2yUGHydzZ5sPZ5ZNnVAMeLp9F2ZwXhzTqSxEuaDxcif7ekbWSXie",
  "key17": "zYTceWSxXnF5n4azggb74Ddg9ekvUmNCuLa86CCtqZkvsboLB9am6LeKnPmAKrWGhEq2AaBLAYdHUfz5yytXouB",
  "key18": "2sPGrpurUEf6pPYqHGGfptCDPqNP2uUSpYsxmkk3h6ejTv6iNGzesxXdvCpUCywfTUxpjKbRKvkwjV6Pjvcvy4JJ",
  "key19": "4ZBnX5vXx2ysj8KfvEa2tZ68kt24aiXpvbNLCoQxQZFr9bq1QquFHWqfdzxCUdWjY8Bgxst7ap39DKjjeYbnJdM8",
  "key20": "FvixpNbRCn2PumDfosk1jPFEuPeMcNVtJysFcp7WLGxujfH2dqqCod2adRMdhMGmmaBbiACg7F4Mmfon8miHJdk",
  "key21": "3Pp79voRsNdvFfjqvwTdZP58Ms3UKoGBiZ8cwSWtQQc7ME3XuVQH2WGU83R1rcSz13TnuDgbi2ACFwmihScTBPZa",
  "key22": "41j2RcMoEFYk8UMubksTP7j8N5JJQTu4Zqtytx5ggFkXPbfzt1fzjTb3SGznZQHbMWgnuhxSPptPLgRK3AagT5iv",
  "key23": "3Sarn3dLdu12q7QuuM22piQnYPXUzmQNPj8f4Mi6oXH6dUc7Kyv9jZXUcVMPYoPeGCxYCqGqLwSNtgCpn7yg2UfG",
  "key24": "4PboyzY9aYY3YCdSEDoxRo7TDTiq1PjoFc4XX1gsPNALxbUn8VsMgvFN8HU8AVnzvFuXZ9AHR8rqnSVrPjaaCe5H",
  "key25": "4HCpB17veGz6ibnemMv8t3LT1VejCXSWGPJVQojfBYAwJw8SDvCgY3i4UGgg1KrcXbTEnJ6wLFfiPrwmyef4bDyx",
  "key26": "UcRictHXWfyfC9eGzVHs7nh7DER7ypZjLUf969eHCnPFUDTazRKjJFavvwRyNtvqPkN85MVu23AEyEtKNfuaJZ7",
  "key27": "MTMvxovjYkXZY5a5rdPz4GeLBcYVPXeUuf6BQpAREELzpq51LrdBPNkHVyVDJGvXNyxLV9svqk1BXqdEqHPyrR6",
  "key28": "r492SAWsg2jiWa2uFNpMekEtKLpBChEupQ2PF2M2eHz99bkn3BjA1psuMxbDDC85fTD9WcKqqeGR6wg5Q5Hv1eC",
  "key29": "3JZecn58SCoMHm6u4cVDeSipAJRaZT5Ek4swRm78Ft2g6HtoYepkJ2itMPei4HtkWRLV5aTYqvsv5Jy61sPabuju",
  "key30": "51Fme4oQ3ij4G2h3gqBgrEiKvN3jGfA8QsBW4eBvKrhaikmSoQr3Wcf4S9qvWMYMxSwxtnFaEoC357nB8RLQRXaU",
  "key31": "bjV1LcPQW2M7LiTHvVVnxyNoEGkXgAj573kW95KJzGddR6d8PKEw9BmDfYJejPfMbKgPMvAq8ci7VVRjMbomEri"
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
