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
    "4LUpKUaH55WdWyh9CKQkUNHWgyPh9fTCh9NnYeotfzUkU1SsGHLqtpYistqSfeQdXoteErcLVppTur7WaHQWJKWf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wcGuQuz7iw4XFxCVQSXmyJTrkEdMEkcMZqgLKdFgtHAvNBUyHmu2sMxQVZ5P2qF5nMqs1vz8RMULgA6TvGDVJpP",
  "key1": "3FZeQFCuzNiX3yxYZT6tAYNVQZNJo7BHoeTKvNSLfHBgW6hntekHPhukNJ5jdrpX2XwBANmgStETzhsdtNEfjyN6",
  "key2": "4xU8mWBsTixoGibHhU4syu2v9jjsWNq2ZRTVatnw9HxRvM1rPMjdALy8oYxoCn1N7t1dFjQbHfLusJggSqiRkx41",
  "key3": "2EhANSDsvXGiXmQaZ7x1dZQRcCUqnL3TfKzo6GAopEjVK5q8WdMBPUUjhJhuJMmFG3BbpBeouEeGepiAjVVofj8w",
  "key4": "5NKvFsauco8DRim6JqLTcDXiyc5Yd2vWvARK7ZaNYRqbm34d5d2ZbYnxNq88d4vKX8sd5b3KjS1CBHApbpUBUN3v",
  "key5": "BVN1Y112hUT2KKWUghejfwgJVNoMbH5LY1foJj1r1sUMtQGo2RMMBCyuboHc2qHzJXi6scw8pLh1Yzr9zp2KWub",
  "key6": "e5gXHqFjUy4w7vQVRt82qM6L6Le1DKGvqY2WcEo1gKRqTSZaq6Gdk5t1jBtKMoFybADrUkzYYo44f1EpQSVVCrA",
  "key7": "5wop7SaMpvYEZ4VLRGUDNGCBhD8xnijFkMSGSxpMNVYK22kVokN7k6sgKRUx1s24zfwd2aoY2SoRfKt7PSvvwLDy",
  "key8": "3VSodMAwjeTELjYHYVuntShztoxCNQQyWhV6YUcMYSkQFsRVpfRJueG1pSLsxRYBQWugnWdrb9Le4K8fBNBFf5ZV",
  "key9": "31VtGF54AYu75TBZDLGSK3bs72ggoPom6XphMB8f5siaSccSNcrThsLALmLnMmGqFvbUBsjLUsPcg35gh2xZjfPm",
  "key10": "ZAVLLXh4bP9vZJkqTiDSiHcGMjhmX66TJRDpwFxFun8ULcqycR93GJ4WCyLnKi7uErP3K7jd7RgJx4BfFmKnkCT",
  "key11": "4M5u1QEQxnVfPan6YLtyL8L2EuX7oPWN7V4QHMC7iHJES2Lge9GTavi1d9ijnUvd8PwB1MZQgNjMJP7PivT9ga9H",
  "key12": "2YZCvGBdhogzi1QB2eKdG4ZSCvcQn2Mx1WJFKJ3ZMbyZm5KWhmuy492Py5AUvfTJ19Z4xomo5iesiEEggoVfR4vo",
  "key13": "53Sdu5CxVeg8MUaDSNG2rU3viKYSix9cUitSqJeHrbGvbiR2TAoUmHzj8hpHX1mcqPYCWgKEJjWPxgQFyeARF2Gx",
  "key14": "2kNQ76Du9xpEUJjn4zzaHjeqdsVxPpij9zLHV4G2gj8YCux4Agcu5LKmsw9DKRKHUU7ieqtkdKiuMYXRfMCQtSog",
  "key15": "eniE2KgQEQYZ91JpghxD8XiPaipre6sTCzDRohU5pQt2Ta7T4AjLVxetqUnmaipCfLxKKBLe8T8Sy4fjBh3du2p",
  "key16": "4BhfmP6H1ZXZdyNjsig15dUNqDzEEuG4Pk5XPfGDg2qmzm2pLAJDu27fMncmKvpHq7grm45dK7LSfhjjUNcPaeqe",
  "key17": "3CqT7Bq6CsoCSv1GEfJwqqUuPVLqaBmKxn9RmDCDhngsqeBHbai3AZGd98Kbsmxp77BZVFh4ZET8FVnpDNqyNCdq",
  "key18": "2DcBMXREBzgPodirAroNgV2NPMN2rKaaUjtHnMcEawkT4xMvKhhWoC8RSCN79NHi3Vskb5KyFTwV1E5Q7HgdX4Rp",
  "key19": "4atfTiAo4HfrnkLRhb5rznjwnLPQtthsW2YCB2GzKQRAMqTjVgv88pvbqzGamf1Xj9vZ1q1SYt24w5kZQp7BHW6o",
  "key20": "3JaEtkZSTdFpWCmeP8sQ6FYQAopbAW7H2w59R9CqmgNBbRGofd3xRKANcVGFKoTBcPxzLuZrki2QgRuAUXss95c4",
  "key21": "5BhWcHXyHyYJxk69gM1GCyvpTZeCQk8suP6eHkCxnEPdKksyKLaHbE7oAyDJH2H9btNxbeMzftnygVm1BhmNdbXY",
  "key22": "4SCW1ZwejGjtjobgJMo88pw991YFax5mEv8EzjSzB2McGkC3Kt86gKWro9SnH1CsNjgUFVJGLNm8tQzMRQqTM1kg",
  "key23": "tREonNDrP9x9oqeBvh1ajzTarBVzqFkjLC4KhVUiLHEfomFEmWXyCTQvAyq2AfD6vuu2h6dGsoYQTCVwKbGmVBZ",
  "key24": "477xr8zQ9HPEEArtd4uhr3Magh1Z7Dm4cqYKc47MLVk8G1PJfyoiKPgnZ2z99dRjMTeaRBLpoy3HxmDCR5fB6Dkq",
  "key25": "4jqVswDD8oZhcc6yum1qCeU9iFp7cAFv7yR8SAkaEheAop55uwaBM8QQzs1d7timcv3YS8F1ndHTsDBKPwdMfXiT",
  "key26": "3ez6q9JRCopAPHFTNm4jQd7H5oTj2nMFXJJy9du3nBERChgBTZ3dGj7CkXAEfaH2hnTtvYNptUgj29c46C4RH51E",
  "key27": "2sdKQvAuFa1gmM2aLGjqNm2rEEe2iDMVuYrj6dCK9GEMWr24rgXZqqH6pu14HfWEdwYYEUsAX9LL3DGRM9G8yiTJ",
  "key28": "2PmZ4jdybSbgknqcRqvynjXocsxii74VT5waqm6pB4XnbpZjvY2Rv8xCwwTqWxJW8pEFtjUzi7JQQhjfvZZPruwy",
  "key29": "MGB6mx4NvXtKhSxRd3zmAtbjkvLogq75tyPzyFie9Mq4WCnq39fXnMg7i7HJqtKGKPR7bMLrTngEGWxRsGpMwj7",
  "key30": "2CQquSgZEhM1GFKumj44PX2hHsDbCfNe34XL834zRxj4WM11cuP2hmSiX3jCXGZiPr5yHfDcKNvG5h6ErogzPcvW",
  "key31": "241tDVpADsNRKt7XA7jhB2QrzAAGCCDSSwYwd6164RTp6dt1rQd193sqkWXQWmXx35jtwujBRMdns38ZNixUsoDV",
  "key32": "2zkDDtaFHM3k9K6CBbfSHSbjFHpbmEqybpnyb59DroaFMPVpb74d9PY6VkaqwFNXpjzqvNQ2W5mY2Abp24PDp99U",
  "key33": "vqaAszVtnWghKaDDps4cPCTtAGULfDntynz6qoYbhqC1yFsWxkdwrAUwR4j6fxr1iag1ciSbgvWRxFvHLYB1krc",
  "key34": "3mKcXaWtUzgSFjD6shS3g9Lns77j7pNKi9BQh53XJdkHbtKJ86AtvbpLUpCjVqks11tQ6XEJ2DvXZ6gd1xYr3DoL",
  "key35": "3At4XhRun4sG9o7TS2z9kfZyhvjZQ2L2c5rwdNDxnng8yBD1xrvCV2dSVg9zL4m9o2wqfY2j32TAgR8rmnweGwwp",
  "key36": "5nS5iD13x8UvEMeuajx7QfD69AZoNM5rcAmFboFZUU5jBEgAgJ4pRCZYYmPy7Zb9JTJAPBVaidYVbs6rBxfPmJKs",
  "key37": "3Fdv4QZgtYXX9NthV51scyEUNQ6AZzzttGeHzHZq4YQ8nMNbGtUvzms21bwCJ37e63H6iJXKQsET8UCypphxoXdy",
  "key38": "JnpEvqJjbwYuBZinwfH5rco4zf1M9KbyLHFKKqmvWpNT6cTvXMbCHomD1MPxnmseuvifmJgJwxt2d6F7qqeB8tt"
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
