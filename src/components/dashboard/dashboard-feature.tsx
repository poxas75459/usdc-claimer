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
    "3B6qMauqUXCj9ziFjk2vdSjsJ7Yw1114rBW186nc9fLNk9NMjAhzGeBGzFhM4yCyg2sTmUdD2BzPLghYAWT8C9qe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HyEgE63ysDhrguL7uYUGLpkS1vt4xkB3CNE2R7CUcRgbgKkVWZza4SMzQgud4zRvXebemAALfSwa7M8rTVqmt2a",
  "key1": "ihoooXrPSc64du74ViiDJet2VskCWiaekHMCyDMZZgfD5DThgCunCfx7CFFwCe6vHLubJyQMgJSUVufhG789nfP",
  "key2": "LftQCQjbkBax3GusxCWKY15CmxL1fXMT5vEPKPugGFLcvvtpo7CSWuvnFf3s1eRJog4MWsRco82SFx7q1dCmd1S",
  "key3": "4QuQBKex1vmrw8wWAvUAsV3yy8M3qHC6KHsYoTsWT7eAxppXjiqwDAC9S4wCnHcM8rVE6yqdNDTx46zgKLJcpqZX",
  "key4": "44wTQzkrrdatCWhFw4a7kuUS1fQkD2MZKVxt1fk1ZpUNqB2AKCHsEmH7G61TBRCPBKwQ936nuePZAxAFamyvMVRm",
  "key5": "4CUHhXGmTDhdLdQBxzcAatcgMUxcardJXeWSZHHQaxw2U4b2X9FizbWVN8UfoEnuyUWc3k3ERB88qbauuRS9M9x5",
  "key6": "4uqdpRwbu3ecCXdmDwUXCQhk9f3kiwteZEqZ83iC5zDXLPKawE4VGbvfSwAsvv6235kqE1hHBSF4ZasygNmBaBSk",
  "key7": "hGyakG9pr8YMoJTt59aBupqrMMQ6PNdb8NDpD2eR7jkWQYMUHGoBZj6JS1LNt7UNeuAKRUnxHXcJQJSnmbrFwTH",
  "key8": "2J57nZXfRquZLhB2oLpea98uDDMiZY41SdVo3AMfSCUQxm9JPjKgtL4EzGrGJBedeGzYGoFo9MjACHnGVGZK9Q1u",
  "key9": "3BM9gVEwH9214EGdCYU4TWVSTMbr3ctbv7KcB3QnZh4bxvTRTt4nCBLG5J4BY69KGzQUetZUyiTjJ2szad8Xqr7",
  "key10": "gGeE2A62WUEZpctM3SFB362ReQaGvkXaCuwTugj7RdtcdrcU6dyuxmbua2ECbAHRazjTMDdujG3Z6CahDAdy6oL",
  "key11": "3ZwYAQAN7is2T8WYMnAYb5YemUZhnVavnPPTmguNd3sjxGjqnPa2VKhAc4a8TZH75pq7hEDvmVv4rfjNUtSgKuJQ",
  "key12": "65FvX4UPWmQ9bjUE9vKRwhRKJusSn7deYFHAN1ZA3C6xtpDhtWyt9wZczzu3AGN3Qx2EUD6QQKumtyRGca8tZqDM",
  "key13": "cN1dzyG6L4gK6BW3xAT3VgG3BeN2JTRs3khKGWFKZc8tvMjc7g8Ty7KSdE7wLM3jLo1uZ65jRvV7dam8FoahMQy",
  "key14": "2VVPUf9bAYozkyqRiNgs2KFyd8PNm5HBmodNdj5ZAiyDBPTCYGfoe4DxEMrrxahryjEtAPBx6sBXMNT4vqYaqQc5",
  "key15": "KLSNrQGBsMQ9qMJTkLKKPJRanTVMneE64iTrBpJJQVHqCt94pkJbHTPHsHR3zZGJ6PzLYjdnn3LivQbnuSuoPz2",
  "key16": "4jLmC2zcCKV6a1NE3DX8Z9nNhg2q5Hs6XmXFpBohGJmg5hMFiPq8xLZUb4JwzbLed5HXcw5m1x6ppdRQdPZ7Yghp",
  "key17": "2Bd6BoHew7hjbAg4PER9sm3s9Z1GR5zk7k3wAP6KFaZdDR45N4vj6FuzidUKVh11gtHEQESjpdf2ZXutEWaZ62zv",
  "key18": "3rZgR3Xp2ZyQVavKrnQxdNc1oetrFYL9T2RcsqvNqdBDwuPWoAA6FwWbbAj64qFdCbc96qhJjAkchbjQ5fKCp5XR",
  "key19": "54myLmAWKQR4Sna5gSVZoC4XH63y4pCCP2wYVBYuD8AUUUeCfCMEmCohnWUcbm4Ruxb96xKbMuaHrG36RdQ8zDxt",
  "key20": "3dQDeEoyEz5mhdEiJ2k8gdxWeTJjLuAY6qBWyNCHUnQ2VgSZp4ntk9Mj3UjPEotoFisgkGZsJW8H21yCcWKEmtgu",
  "key21": "54LpaUwR2vtW6MdVvkphhdLh4YkvoB3Mv7CxS273VAG3sqejXMH7nk9r6sUFwAyzyd4XS9XJdT8z2UkMHbZntu8F",
  "key22": "5CA9eafpWKRHYZwmSTggybKe18Rakv65Bfv4bZTh7NNMeyNJcDtX2t5wBKqiscwXsfVnQPiDyYeRNLaFsV6CpPdV",
  "key23": "4agSuoF1LrUWATmRfgpdJKG4VskCEgJNQVTtHwym5qW73DyYrkoKVfuZVEE9dFZ73YGsh8uXjUHmXAsYAdCozjAw",
  "key24": "4xhdHYuir3vRVXZYKSJkhJa8FLZWuzUFBvdghVxyLWhyenccnnfemtwRS8gNmsxQp6qtpm5domrpt4ypzqrMK3bY",
  "key25": "4kaAGteYYCqGLG3Zuf2v6pd7YQqavGkhyrbWkzk63j5vrLbafnKgx1QgUfCNWLz6mN8qP48ihQE8NYC1C3mPgNxr",
  "key26": "3hvuNrh13wvnCjnq4mAPFy8BVV6vdVHQtNTB33GZboqpyuRCqSAEBxwztX2co3UVbyuBXkdZYCgfYz1xT4E1nT89",
  "key27": "2wPahj1vdZDokYmSDFtb9PykWJbPkSFmfz5H1MaRZj3SwM7DvrC5YTt83x3RaQBqPswt4BJbr521iE7Tzqjxa6YZ",
  "key28": "5WCtyquXC8nsqhKE9RPjjjLBeFEGfY158EREkGjaJzgTGCPDkwX74oghUo58dw1mskQB9UFxPV9jirr1Ue7FZGQA",
  "key29": "4DG8mEL3xfbkUr4keWMinu7R9d2PJg4vHWiTDXcCQQrkpTVdM2gEHabDEvrRCCUNkGAh24viWPu48Mo4mJTcUgVx",
  "key30": "5xYd1jhjWcq8dfRusYiah5S89Jg9C3tsRwBWA9QgxUCy8NYU1GAg6tNSUtoy354HhiyAnnyXmFjohjZmm3LUoh1J",
  "key31": "5v9SAokKFWoxKojhgE4Jp6jjZP61EweuCBmqG4qx5QBKHt5iCxTWUyeshYP1eUo68TN3fb9ejJzoBiabx29fkuRp",
  "key32": "5ygRpxqcNnERrZYEb1364DCinXqhMc1c2rGpusfgihQeED49VkcpgZ8Ltab79N9PzfA5q291WSaFxjnso3Fmom5S",
  "key33": "5LP6Wofjn57bGsui2UZtLanmEPdwzvHQykmY9k9LaCAYzuPAoRtDDk6kpP735X8jmV9PDtJZL3REJERC29TMQyjH",
  "key34": "4ar4jcaCrQcgWsy6sZfuaoQFxge9rowtwk8ygcNXh1mva6aYj7Mc7ZDzTqYsaW5a3HCDDok7KPqdTAnTPHKpYBZD",
  "key35": "Rsb5WKPZYvxypRnv4oLUzVt298Y9AtMgpkX2e91t7q4afJAYPcqV3Fae4cb7j8sni1W69iu8CQaFHf24ThtqXzT",
  "key36": "5V7rYR8hiA5c4wZ44TQGcz2hn4kAE2r96EQ5nTvQt2fon8Qu9VpKUTNwLoeBhpJxKusEG1xZuoUCNDdx9YirjRTZ",
  "key37": "3JrtpvSQ6jSyVzXYeGewoUtrtU36WNFjwTGXRQ8W5HgUwAMaxFPcF1GBRsaB5XfQX1txNTGYVo8QRCvQFFs6QtWy",
  "key38": "4FXnEyNqQFo4nLG8nx7jajsXnvXEYui145NxEpgrDkQ3ZiD4kQCPZJYCkoAFp37ntSAemAdZtxex7SXdaP2nFUUd"
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
