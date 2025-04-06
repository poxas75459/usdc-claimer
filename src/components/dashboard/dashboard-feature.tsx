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
    "2CyRwutX2G2oJDGFscWQ8mXfCUG9DRBaGjD4hQ2fUWjPK2a3b674g58PBDniYfv1Bah8heGXY8FMfNGtYswv53sX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nduTWa2nz8sFV8L61z4Zznveg3YFadY2viGwraqSi6nF3c4DUBRrsuUQgN8XXfWcrDpeqFkksqwK2UKVSvTbLoF",
  "key1": "m2Lqhtw3HUP7aESKjS9qht2LP3bf4jg3bbDj5WPhD9UxXWtwsFRTMSj7guzVZRKzuq9cmWoy9bSeQnyKFhqaMh1",
  "key2": "3KPzxSLCZjqkvJbd9xDDHpBN7cWKsDQGxLx6B7tegoDokWhhuABXeeeDX4WUv4aGs3zPHZ1heNztGVzhjPNPunK9",
  "key3": "3K9hKxwSGMSf5Qs1AiRDygqttD6zeiZLuSjXrBGtj4NGhykDVMXhXfvznzEM7kGiurRhR2u94F5rQnfwLvfHQWz4",
  "key4": "5x4nKKfwtxCDLK7KWuRY2pa47FBhV85Qq5Rico4D85xp5H6aVfCS65Bby56YwXEP5TZJ6cqDwpVhjE6M4BM4pHdm",
  "key5": "5Yg22y7fLg9P1ypiJAyGvFM3Tf2Qv8RY7yuGb4hdiUUcyv5s32x6N63Xwxto1EmjjyFwysfiEXge39kngcEdx7VL",
  "key6": "2wB39esL2H5DeS9JbtCae4D2EWs8dkbnuWDPEtwBZdB48V24SLfEoiDASe3JgBGgsBcJr1MEtfuECpNudx76WmRz",
  "key7": "3H94aFqa461J1GKFN1PJr2jtGBsVEWz8UYUP6SQoH823oLiXcrktpFxDNNBnE4ew9PJrJLzMyD8mRg27WP5yuhRP",
  "key8": "2BKaSaqCEs6Hg4JaqY3aRkcUUgvQdjkGrPMWARQz2uTa9iUKbW5fbHmSc3c7VHu2Gs2BN4wei59n9irD63dAPt3d",
  "key9": "3vgtNEwjmDH4SUt6ghF5RdxTbTAENnf2K2U7ZA9DXYdqUQwbta53WXeAMcciA8zmELgHaaCqBz69gWu81vLAM5e9",
  "key10": "5KhTAoTJFx2U7yc9uZ4K9UXTGooGojf25z5xmB7eLqWSD7ZGPk3iN7J6dgEzXDvVXTJu9bqbrCCbUTeecGkfEKYD",
  "key11": "5siRpkU7ggWco4A81D7n5c8Wk73rRVMcghTvZRJ2iKdxMuyYjM6LP5MCBEA1idCAkBG4jTHXcmXi8uJnyZoBtsdY",
  "key12": "4icDkHy6FkD77yfxNdQFgqzgsKU1gETqScs3XxppLMJyZkmCT5kAqj9kd6VwBGiP65BjKqgBHxB6ScXZ29HMVUmV",
  "key13": "4g1nizqAAhzNA4eXNSNZpwJNzhRo6VVDibiy465E1ZoeHP19QFUXWipYFcKEBtUgh5o4dd6RkHUjJ2FoqpgRUHpr",
  "key14": "38ByKgwTwUf9HXoe1YxZ5P4hXSBHPLgqkwk1GP7CwLZh2S1NKH2qMC6QYbZizqrwk1rD33ZZ7oQgo4m63tUfdK6M",
  "key15": "29gRnFasWhjy3bU4RtrNcfmnjiM8cobhCSx6ecehzqZctSTvjeiYEjPoczQEb1CY2K9UPtNPT1jyZxWqBR9FBYWi",
  "key16": "3bycX53tj3Ng3zQw4gy18ibGNuXqAcRCErKSaYLu45J3CEhUhnfiFmea8V36FSF97EBLkWfmCHives84Yua7HNxF",
  "key17": "3LCsFiB93Vt2ovKkuD7EkA4Tp15DTZFB6YyDuiY1Z2RTf3nFQczJX1miKF3ZrQKe7rgh4SPL5mUik9fytGCe55zw",
  "key18": "4cnseQ3u1REeqe1Fu91Q2HXb9YAcQzGEqowHNt4rghn5BCwc7z8ii2Wi6VnbRufMNsURXXULoG6BUfoxTAX4mbA",
  "key19": "5iLgARDcZWob7b33x2hPSdUtPsxZfDC9Sfu8cR1As4JvbDf2qBUhoP5sUxHbSWrKTCrk2K1M6EqeGpuxw8BMszWp",
  "key20": "pNdGYq1Zhnnqhwsdqfmz6zF9EVbzCPo7UWZUEkbSChrQncUXdYpjCBUSS8ZjHdioRsGf6sqPDdSDL6md5HtHJgN",
  "key21": "2SHMLVmthogmF7Xvkf39aHajnGPDJV9jTB6sruLzTEBFmDg96ZqisAbyQWGBbV1C4anPc86X4PUKKhVSTzNePpTD",
  "key22": "63o4fqJQbszPbnZTnzcZQjDj1Ap3bv8sVPLvrCQERsfYMzJxKi9zqoxP7Dj9zpcXXYzZreu2YdadQE33oxFBRt6Y",
  "key23": "4R68BpZg6c3P9qp2vUpPwEzULBZnNCXRwMdddTNJYqBJmxWYJCSgeq33EuLJ7Z2vvJ1CnmEwwiau6vsJVu5p3r3d",
  "key24": "4Hv4utYBwJmFsDYCkRXqCRuEAZMrGCG6NMGaoqaLer6QJ4wcnZfR9hZj7ahdqLoTSRxT1eABwBUcsDUKTivTjvyy",
  "key25": "2camuonZg2BW4fTzYYNVxMwMba6Qy9EJo5pAGFeDf56ZWHTkzSNHUp1Ni67wZWxY8rLn3q1St1jwBzz2q7Fp5cyQ",
  "key26": "2VN6Y62sYvB2F9HGAdqE9UDBvQ4scDExC45kShZWXggy8zoourxan28fpmenH4kmHzzVaWHBHsgaGq9ErTbm2e75",
  "key27": "2uD2Giv9mckCBziH3pyFBmu2i5Xmx1zqyP2WKUQPFYJRWCnBw5HCGzXCi9arjW5bYebqKneYgbZ9V6CAp8GQhbqh",
  "key28": "4MrnJpYCCLRLbGjFGR1YQWnaPvWLW1JuCexFiAQEuqm3eECLZedKJ7iWee2JRpBKZjkmdjeKZJ78Q97DP5hR8tpt",
  "key29": "3rY9AFjrZWoz6S2Wzc5ZpFrS411hwx12fs31XZqLMteFRrddLSijJWwh7Myf6Q21eCaqRprYnd2eyt75JpRUX6Q8"
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
