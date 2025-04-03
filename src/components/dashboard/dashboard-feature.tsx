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
    "2bV8gpStuJpNxWsHTAaZ1hvTqiUvpyTVoDzpynntTL1tfQ38e8nWawwuG3eeniVc1yCwXxps1S196jmH33v8r1uv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HnxHaqRZtSxGGufjSDjD6TFT9QqpSReQnUGYDX7bFHGZvirEZf9MXU1D51P657XZ47AUjKYBvHzpBYVBWS6mhmv",
  "key1": "28gp1X7VJwzNR5NYu551JFsEXcxrKQPdQDZyKMBMQS4vozQ8JyWxLHGmHWMnLwCeXwWmVAX7hLi8zhDN6bzRoHLs",
  "key2": "42muzVwQCUoqvAKZo14Y2ePThmmNAvHYTiUMYG5Yrxkxyoi4jXPkuHRPybzKsUhR7MciHKFbBaXVkp3yYeen8TAb",
  "key3": "2P2cSbomvqz7RM7XepeHLgRjxoECntrA3a9skMGSuwzo2ZLcAnNg7kxaPisnYEP3D9eCjmByztzYARig1EWwVJsb",
  "key4": "5TtnAk6mVp6QFiRch4yYNJGBU4Tx5bfqgvJvaeteVhBEHQkmzU6LruHXpek22GJGxFQCn5r2a4msBHGwZf3zWHAA",
  "key5": "2UovNr7XKbtMBnwUMvfcgjG2Yr5cjNj9JbtygazDGZmMF1mrSZc16hoibf7x1HxWYtqLos57ZQR686hhMujssNpo",
  "key6": "UdDonbejSimQfB5PfyDTLXt7DZH2vVDdkVXUYxViVdGerdvxwx962AgG3rF1hg8YKYQRBQfPNk6tSpb4QMnBq7K",
  "key7": "mfLcMcDk8Khjn4HFpCZ7H1SzjU3u1owjVVHV9A47oE389s78HJ7yNvQiKgT29eUg5VForw1rqVikAW3u4KtsQHF",
  "key8": "3JBMPrNu4pdHvurGS8Xz94zLT4vzHBWNUhusZeKyKgRzDus3AMhXsPZKzs5GdQ8HPF1E5f7UKDRMeNCxpkpMJnWT",
  "key9": "5fuGP7jH4KpHNzVh6gwTUbA5LqY6kSWxcDhPV9dXnWwELRgF7yroeSd8anUS1Mu3Y3CHtdHFHxNC1TBnZ1VbVX4Q",
  "key10": "z3qEQMHzn44rC49PD9XeHjG3DLbrcGoNupF9V6bzWgLFkwj1FEqHyMh5EovrtRu1SPJUw29AA3o1cLoNLnHttyu",
  "key11": "BhJjmk3NsgWxsK4yC1jn8TfQPbQWTERhEf6D3CTydAAbL6F2MUvdy9Qve5gQXTvUJW3R7tvrdsCVTq7eLJDde18",
  "key12": "5czH34VGAe732y6oSAZd2Fxr1aC93c8cW5N8HWAkPJdP437HVAKwmqyTCfGZitHjicpHARu5TXbYoqzGjWsNrssA",
  "key13": "2utg6rxNiBo845GRs3pB78A5rCKVT83P65qBkbdxzf8WmYovApVmv6RVc8sGSDks3dGupB5Q2d2uchkkjuG3ouDL",
  "key14": "jASBzubyPsQ9gVTQojuWcLgfbGsYB8XaSg82K3ET4pCzydriV9o5vLogSPA7bi3SqfdjLrJZa4rD6m4VGMMCTMb",
  "key15": "voPz4FyN16djBcKnxxRHtfEnTG1F4zdAaX2w68SMjdccbV2zSCAfFrXFqmexSfKwq4B9Kr5Jaiwac2eUy7ouX5P",
  "key16": "3AXd9HvvARxD7bsRDac4Meyf6JX48mdeAsZJ8DavDTjXvEKPMqsMFJSgcMihvmTpoFiNJ8FvEsyqg665Nx3cXyRK",
  "key17": "5dMXiPvVfKyua1vnQZe4vdcd44AmCE59Y56SDdc1w4DmhR7oHfQpEYq2zaYzTrteRrLEKEAoBwhacQbvpU5ZJVua",
  "key18": "51TSusepRg841DktqEayHptL4sKwXASY8mUu9th1YxGEi99fFnhNqepD95e3HhnDseEwkgsA4ZdfLkk5WXsbsYGw",
  "key19": "5nGknUV9B83CzkzkBzwRPPs5hrErT4bxDCTJbhCdUQwCe12WqCLpdrLAhcbB8XTXycP44vt8cJ3pRKsi5U7izKTT",
  "key20": "3JKLYVXoZhFBbZicMxx34DrdFvBMY1SGDkrMTJS7ik2UGsnR1ss7zbNzvfjafykDWzWWTaRXtdc5A8Tvkhmrcj5z",
  "key21": "5ZXuoEN1rJeajru7eLLZ9H1LtBsETsev2N6JxybgjbiVPaHVk6sCfriRrav5j4cNHeMrgvow8nnDY9YWxx61Z25x",
  "key22": "4mMeXwuSRR3m9nm3Pa4U541DPvASajaC4KtGQ8okf5nXfksWd7gzoCgx1NsLAvUAR5fzogYgBt9Poy13CEMFQL7S",
  "key23": "3uQGxmGisCLY4p9mXhPhLXccYYQcKLCQNxufYmrh3kzLQXmmpUiZaXM5JDSaCqNAVGDnmGAR2NXTjG8zVuDy2Rbn",
  "key24": "4FN3588fV7UM7DvTWD9dBEGtuErddJ7YqJBKyNPCH5unz2Um8xV3SbTwimy5UG1ob6C9FC3m9s1JwfT2kmiXJMKP",
  "key25": "A8o9ezJyWKLsJkvBudhoBzQhN54DApCkhSUgwkDJ4uq6fC9zjuaHzbLK17DkogNKxRT8YrdPS9ZXYwUYVdkLyXJ",
  "key26": "5wDvPmo2BcPFVX8AvAiDbUoAX6137mnTEykVPfYyP7XHA112R49YZR66HREUT9TcJ66i1cLTdAjDygnM6vQg8kYa",
  "key27": "5MqayJrKhGMKWhLCKDxxAAWtoADr23hitDn7gDYHApamnx6SLQsHFCYJqaxSFATRQcY38P2bBoau1DETFhNKPFjW",
  "key28": "Cj4RDaf3sPcg91LNgft2sxbMP8tfqo8eNhuz81neSMaTgjhrEGLCVXBTvnZxsvrR7XQBNee1igWdYxGrZVsp2RD",
  "key29": "27dbjfVX6uMhQ1Esrg6XLbbUtMQwjgvbZrN7C6y2hoXUo4cqJzp6WSB7uMpy5ZrwsKMg6pTPhisCwTTGtSHBzymu",
  "key30": "58YDJEv3TKkJ8CkEG93gh5HvoaSLs6DG8s6obmrFR1iKh6RVjSyfRqfETUv41aHnqM7JBGLkTzi4krRaDQTQ4Pyf",
  "key31": "4oBcmkyknDSRL9vPQLu2Ns7FsC9LBttS6zZZgQZLg4E8kkALf2oFaWtVWVjD8DoQjLD476Rmzsj5erkjgLBFcyY4",
  "key32": "3nwY6a9EdU3Ej9BTNgG6oCHRseLuXYMG7i8bLyW3C7zycMzjzsLYJcwFKDNhcotCfbLmc7Dp9qYa5rAQsxjA5V7H",
  "key33": "5mFviy984KNvvTC65veENFSa2hPiPbtmnCtyKpfW7ZK2Pu8PECo58MahuYKEfCDBJTTSpgpYHPvUgSdpkaLcCiEE",
  "key34": "3mphYsEpWQqcUhjYz1JFvyRGfBFaHu71AnBFRSFQjexHmzRv4ys6L48oiihvvCmMoJsqBJB3xo1C6QGKrzTpussQ",
  "key35": "3WxVJYGbXfgSffS4NLCh2TiWeBohCTA1iH55kyKMDyHG5gMzBnKXSqz5so7k8gTd8xjqeE1eYk8noLe7gVm63Tm8",
  "key36": "3mDFktkthRtMYTS9ndJFYnunNpuJboaLnoLLbdz79f1e4w3yfsq4UBs9ZUuxRfq1iDrewDTn2c9CKZ9zMmVZP8AW"
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
