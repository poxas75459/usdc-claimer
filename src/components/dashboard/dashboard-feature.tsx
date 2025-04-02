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
    "3E8T9eLpkGZG5xj9nQfKsEEs1ynSSYok7c8oqVwq5adnR3iZuW6qY96ceW3k3VehDhKshMK3spYN8FoJFmvRqmHk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61LjPDZJeNHqjzLcdQy4YAcRKG3zGEThcK7JLDLu17qmX8pZjHmPkippUJA9i39SRe4kUfMeu2qF9gexufajykyS",
  "key1": "4yXVQz2XWkZvqTiQy3pLMhveWtuUwFAJyRDxfH9gkqYEMCUg2qL7JwFkjs5ytJSvbzmfAigvA3hTUdv9peqQc5SH",
  "key2": "29nzx6kAuJvTwatvmWk6neXjbZAaSo9ANJYNkR42VLEB82YqoEGX9cKaf8Ce9FYsJhWEg8Py3z1eRADW8KyWVi7g",
  "key3": "2ubEi9wSthKgdvqr5TBduZkbo6cbgVc2XsqmH4u7uGgp8fbBbLcDnSG3RvNEvWUctX9HNK3dZNzdhA6MWdAFJzoi",
  "key4": "s1kptLgkH4H6QisKKYwRs9h6P6Khj6QqjbDW7NyD56SSjmh2o8Xsy3JxXJC9s6Qz6aPto5t2NazFFScNJQUMpKn",
  "key5": "GRpb9obeEXH4DRyvnbH1R81s4263Tipmgi2LVGU9ikHLDKWj2gVJPuHCmMAXTLu6vU4iZQTjmjiZD6daXD4M44k",
  "key6": "3YwcWiTeUt3dRZBfWKtPr2BXUjKoGUe8sgoSzhn2zNvgPbS1oZXDky4GdDYQfHTErn2zEmSpdNNxkWuhZMcM3dFh",
  "key7": "3GazhAGQcNHNi2avv7cDCb8bSHRFSNVrL6ibSvfCcACjGdjrpK1qtVmdeSsqyWXVeiC5Gwdxe64HegTX5M1qGoi",
  "key8": "5Fbc54ooTfLHMWvsxuVFpnoBnZFiwQgtcJ4qXR7X3WstAat1aa2KExeYHVStbucVa616JTdoyz9AbuyQfwPYU7XK",
  "key9": "61Ap6bfd1gfEKszkPhe9bUfgd5KCekAHUQPxYvWpbV2G4YE2SPCunuRgLjaom3k6xavppnF5yLVwubvDLARtsKxK",
  "key10": "2mjSYZL9w58ipnWXtAP4Z5bKrKPW9GNs4M8XUwkoMJ2fWaH5DTpLNtAHprmzYteLBL3EsfbSXA1YpQm73mxNDqzc",
  "key11": "3FYpkqLenkbkG1kws9v3z5rgY18etxjbLnTg8fyH3crTVYt7kKkXUuEuLRaX8jLmxkorVzZKxAvVPoA6dUdivqfc",
  "key12": "3Hja7z8GufqZ3WKSvo4w8SxLxsnzqXuQCi5hJt1XetLYoWWtZcHaukrA4G7aNJ8jvRczvcQKBTzX4mFxV6Gp8sLS",
  "key13": "3JxB9sMtko9GE5JWxfpef52rG9eAAJMhV7ppYYRM8NcdADnjyB3ftk53PkwDuhhaCNGnwFwWNjEcnRJf7t4zKu33",
  "key14": "3t2CUZ1xZDLrvx3KhCNLPf71BTMzE2KYBfYcZB6Q84v7MXaqxfStGNNQg62ZX5TRYc5N1SgamEygm5SxvBP1b8WT",
  "key15": "gypFJpvbvu3Qj6P3jmEz9fan8jYyuMbBhVj48Xe5iKS5NSMwMe3z7i5Dxv8xa6VnnpSsQkHMzQVcWRnKKsJXxLG",
  "key16": "49qHwR8gwAS6ebu5tgH8LQAd7qhk4aeN2xoGnvd59qzgpoP7wqRJnv23mKuNK5sbZG2n7FweBiQmtPjfFbLricVm",
  "key17": "3qRCKiKX7x5igxJXUkLdaoGduSzug1ZtZUKEmrdyrvEBBCUzSkJZKb9mGc7CFiWdwFvpFvq6JYJwKdZFAPexns5a",
  "key18": "2K1n8ACq3dweKQgFbKyfTiZfJbH5Uu4AsuwuYuQFPTWzyRfLfwM1nR61TA4ACnBVup6jG2jYUWzQgWjtH9KShMWJ",
  "key19": "5XV7FRpP24E4LLmv9vcgGX94hA8XDXxr8H2KSBjKxfRxXtXtGAWcnVpWTFgLJAorSuEJeUpWgk2rqy8w6EAWTjGp",
  "key20": "2KPGFjHa1T4PTZDhdNWhAJ2ckdiDv5fSbQZyZM8WNxacz3xenEN2w2q4FhifYSg3m1KpVrBCVauAvybk7ZXdnqtf",
  "key21": "67ibmLJU9K1cLYayAqoU3ckQMqz8ssSCdiHqKj2vLt9cyJjmBiNxLT13mCJPsX6m5nViXUBWXkvfw8bNLZxcS7yp",
  "key22": "CrQ2nYrPnow7NiKujhid8qamXFLNzywSWGNXGfqLLouVTDtYDYXrszqxAHmQ4KEYrf9LJ2ixrT1yYz8DFGtzSE5",
  "key23": "4wG5Td1W4F2RLjeAWhf5KVcp2vGYPVQbpKiDAxhPGpAWCe5XcJsa6LYEtpwS9EgiwS5iuLjCekLtU2BDpARzdpc6",
  "key24": "36szwgGDoYb7wL3KHpTiYSmtka9JbTMfQJLbPz44yPVVhiGt6A6CAUhanW3iTTrbQbUi2bBCgdca3ZeKkwAZGwZF",
  "key25": "55nGayucyt1GcxnkbEr77MifxPNFzZ9W1jUoAPRurapeaC4MNm92gQjrBzmx4XihrRvnijyo2yUT9EhbBuiEFahj",
  "key26": "ANz4R1WxFu765WNHF141s47Fq6Lk5N8KysySGpPJsH973drTSJTG4VEdckvGBUte7aSDFf7x5gvtMvNBKKm6zHE",
  "key27": "DvEDC6hB9VvUgVgQQVEYVZnycPv9aAduwiMXJkjde44LqNURdsPKjkbe9hF8CR8Y4fzVYHqx7Yvwbg2ZNjZQ8A7",
  "key28": "3Zvk6TQ6ZHVCy8ehxyqqjYBj59GNkDCBXec6dqcUqKJ5sJa5sGjUcbtZfgMLEwVGQWzsTrFcJ6TDFA8N76eiCpfR",
  "key29": "589NAJRm5tXtr3pVtGoyLzMzZj5WL2dCV9Vrx6q9DPmo7giu4gp1Lp3xa2ww3ntX4hfGNpQTS3BJqxubgAR5Bgpd",
  "key30": "3keD91hqDHiCiXCrbzREuNwcWRZ8MfYHZnsbM8iMR3Ued66xhNUMyWRjQPNDAxa7nZdRHFRrMh9amW8Cs97PG7nQ",
  "key31": "4xxH97aXe7m1AyMCA3yLk2QHHE1ssR1pPq4foidqfPFNexKyx1BZyoAiaAavdxB8MJj5fx7XL6s8UfpJxVrciYhn",
  "key32": "21Dp2goz9SxnNNyDyV5yov7JR2x1opWWGo9SnMkg72A2Kke7BWQhKhDsNBVnoPyXinpXfzzo3R9vNoA41rv7G1bZ",
  "key33": "3MxTL2MK8XsdJhzet64F9WzoJTk48YUJDwSLjGz4pRsi2Nz3KcKQbehC9i5bqB8txHhcSnRyQbTfZvJSU4P9n2Z7",
  "key34": "FU6C6XJees4AwSa4VQNy17wp8BTiQTBVvUt7Eaa6LQWEdgcLczKy1VTFq1Nooo2uzueY1xc1AFptoExEQN2W8F8",
  "key35": "7xLWpxGC9t2t27ePMsBM7zP47XsgTgv5NitvGzpCvBPkVqKFQWqsCx6v1e233yUmUC5apP12now9TQMRy1goYQX",
  "key36": "4DJXiornA23EUe1ZpreEF2VDX3LmTqMsU7QFGLR8PXEW3DSqN4vTZHn7Wgg8fXr2ATvNAsBsWjeshZNfdH7h5uLH",
  "key37": "2Eju9LFTit5iwLeWs3pTQ5DXU7QMAsx68cdhhGscQHgZeJHb2VyUmZKcoGmV52ukxr946DpfYF7r6YR9yqiivcke",
  "key38": "5b31NaGn3mGyh25G8kUBinFdDN6izghtcxBYF3Szc2G6RBLEQ47kGYDFVbVe5z4L1w1vrn2RQYnvLqqUz9HAN5He",
  "key39": "4acV53dKd6sZgRneiFPeAA9cNAxGpenNB2oNducyXzqJFALVPw7Uc6mDy9HQfpk9QNeAnUixL1azCYudverDAz3g",
  "key40": "3XSrXvz1X9LFgGDF7YNSmCvVigu8cQKggHPjAMEPNHRmDaEZZZw47vy5w9C1wMiZrz5YRtpgyFENfvQXSfoxX4o6",
  "key41": "29M46U5YSNnfu5Yyr5YY2RoC2D3F1JwB5t1M2DnUsGZD24qaNsB7pQAGbTPctq8B7iobC3995bj6wzWJs5WpAVR2",
  "key42": "2z5GCtuDzQQNPHDnndvdr3ydQrcge98Pbk4TFKa7HwEzi3sm9vSysVhLPe3o353SbS55Z5bXEkNgFwUWpEXYt4Ku",
  "key43": "4RLu159NV91GQrAxnAJ3j3pHsGJk6KdaPMBarTxtyJxUhWQgYF8AubwGwrP253dmsRpK8pxfJYMbUwo1dNSgVZ52",
  "key44": "6HBiN54vMoZWvugD1G9ScTTqHWPaKEXvg1KE5bKB4XYQWH3yMRDCQacsXMZBhQkBMX9dQaZ2BkPfuYfVfYkdi2J",
  "key45": "21W6FtdLnBmo35ncfpABhFvU8gGPvkC9PDLdeNP5BD5pH9Rwbnu583LkgMmuSG5ctxgRqYc7qBv1ZnRuEGinAAj3"
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
