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
    "GKg1B8kQYSMjk1H9C2vZxYEJKjWW2wEAWSVZt8EXR3XGqi2owzFWJ3mFoA5uLWBFgvKwAWYXNBJS8Fd4X92M5f1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27RvB1uR8zZd9Cb8R3zeYR46fonDi2SnnjEYivgZpLBhTY8QZDCzRs1hk4Ho1kBKgweKcjm2cD4MJKpaneGMxpRo",
  "key1": "4oBQdzVEm9oaGNxpM9AXv7KyiLPcP2Act1G9JnaRv5dnBVPt4rq8fKFMLnUMWdnXqNvS3RegKA89AYAuMiDzGwvq",
  "key2": "37aLYiQqHJHkV5n2A3pWF7j4zLFeqvPG1dPrwLmufeiAnYrng96QE8o7hUp336gEYTULrEhLPjw8bYwLuct2SFUh",
  "key3": "66JjsN39dbsboH1jhZqaDLsby82R42sStkFodCTRHaXbijqTnmSbDFePUXaPRxSLd3xKqsPjfj2EsRSwwm9hgBz7",
  "key4": "zJBhuvi189ZMUJPzKzeD4rDea7BRtVYM5sy9YpJJfLA7pfGksHV1yyno1u4ZysHceC8qJy55TpUViW8hnxXnzBE",
  "key5": "2AuE6fDZu9MbmL64YQF7wJzGNsKSH5hqpuihuEsaxTqjd6qABKeP3P2VhXmWxKD8yRzvRJWPzdJ4wkfi3iUc3Dmp",
  "key6": "XKudYTQsmVUEwTjNovTR9t5aNWhYnDykEUz3z7aJ9FSwsj7ZMndcmuAawcKzpRHpoth5c2x7QKMtpmE5VvchtWh",
  "key7": "5mtB6u5YWcC9sogMZmPWPPXk7Gsq9MMEZ3ajP1EKTdXM3DV7d1FXpiZpAURGZpSL5pB3qpEWZLLNAe21A6TjkEwW",
  "key8": "3wb8hbhMgKZbL1ghjCdDLuWkuB3QrEVo1KCeequRD1BxMnMehHkb2wXzVLyfn5tVFzPCcJMQUVNgRxxZxt6NL8QB",
  "key9": "5FdiLtNWFfucJYfnV2LpK4wLU6gkKSCpvBTxHuZihCwoLcXEmZihafC8Qs674HCDPaEACd8BoybzXRvtjA1sBr6b",
  "key10": "3SasEx4WNfdnF1mKBNGZfTkuf2bjEVjQCvJC17dG5CaP2CdM9xJDwojEGrVqrhYy3aST2Zp2g2oqN3XCczHJbvU8",
  "key11": "24oC2KQEAvD7KNAXvcquL6Gf1mRzf5ysFNLdsQTgPWD9W4vpd4QNdEKw8PRap7R4Zg2SyTcdYVVWh4mFD7jCFaX7",
  "key12": "2d3kqgL28Tn8wLejzMBcq18KPrBPJER7Q7heorT86NMf9FXJSAxhRZ8Lz34qVFntd86bTw2xeuyhDc89vLm14PNq",
  "key13": "3Ks7makSP1T4LmjNZW2Vif3pNGkHcRXmQGZoPhHgpbMV32ba6Q3xBWQb78WBCF2D6tGLmy5hJjmzKdvvEkMiqQyw",
  "key14": "2NzQH15YB1Ak6eKok2zTCuhEWC62Kgp3MFJZtCdgLkA3fcS1XnzCVLcRbgxquEmiSFmmdbTAGBWvXW6JGrcBJTFW",
  "key15": "5f1gud8qM2LU1H9rZ5pZo61maXn5LcKNbZUXqcctAaj5724Paji17RhYDU3eDdEvSgn9jnUxWTp1dLJdzroXUjbH",
  "key16": "851r1jrsDpsw7ay2TWESLR7oyrc5Q8Xx9gcUJ4vfdrghwuzRPAv7RguEC884XmUWg5APbDtSe8kFcK4x4DwT6VU",
  "key17": "2hcmrxzN9MDvJ1yb6aV5y6uRHMYg5ytzv3kRQHHEQdr8LRqLSw1fZgotQaxz49czbxmZWVzRyNK6bo6g6bPAZsM8",
  "key18": "4yhMa8HmgyXsPKkFeW94BQhRr6U7MvieZpedfYKfXjj5aQENmWanUoxgq587GZqQJTW9XxYdiefxYGA27iYbto6p",
  "key19": "5EiiGy68oPkAMZn8LD33UWrvpCfd63LigWddZj9LHKvoRXZd9TMRKhvy1Q8sjxMk7zSFj54zHX3TCyeuyh2ZsxMA",
  "key20": "3QdsBWXPDQnZ6YP9EWiQ3n7KmbuYz9QSv2BLDhdhJ7jtQ6Wj6RSTsFHT9wLqkHFEvv4CMmoudWS2URDQJA6vikAr",
  "key21": "ZfDz6Rsy9CZYe6magNuWiVZ6x3Fgi9UL8VuVGC85pp9sd9yBF8EaiM5fWRk3HredCuPkpb3xUnceeiu9HSsiNPz",
  "key22": "2ecC3d7DpCFzfC62NtsQrRkZVkku8h12yJY5apCSwhhwc9B6Urpun4q8AkJHULJ5qwTVpdiqNxwKfobRgyqSZHkH",
  "key23": "5XS2YGF77KK6S4ib5o2Jdk1zjzSaABfjE9SqWYruMbM3hQiP5fr7FJivfp4fRv3ejbJGRyZmwumDP4Zx3Z7XwxWh",
  "key24": "4xsXf4nncxK6YkyiKkERViend2NhufrgbF2RgBzracyBWJnzobXXghd6yDTw58x9rkkdWTG1AmP2pqzy4YHjKoLf",
  "key25": "icLVoPrEEGLStL2YkiUSXXTjBGBzbr5LLk6a2SMN1Tai14HcxpE2jM6VE4ENqt5MXPQM7rCA7JEVUW3Fj9Cmyix",
  "key26": "2nv2jGgbq8duVVWrAdz4E533ha9F8yR3Jv2uzJqqiWkGKYjJEBf5ZZ16ZGqR6JGDWHjFGgeEsrJ66o7CkRsdDhfF",
  "key27": "2WKrtpPDeKrNiZpuq1ZjSsbGLTCZ8jDiAV48Kh7vpLnPTVmYv7uUAwZg1poLJseHhd9yPyckLcrN4rr4yGuEkofZ",
  "key28": "2CeLVef9vDTf1ykX7JxNaqTs5LbUqpLfmu2DDGVZ6iyTYrB83aQRTMT2Nftnm8hTfs4uhR4UMD593xWvkX3Li7q7",
  "key29": "256H7gJ7ra1WZWUNv8DFa94LbxQ64EVR8shGXU91uf9oPNXkGRm8fctpx6ba9ZnQn5u8DiKhCGcNmyxQbhT5vkwg",
  "key30": "3woAdDHtvKHiX7mXuWoG67mqADcvQGbrBNYZaUyiFY9R4RYQxCsJjfho4burF4odjrMsWtkteL26MjvbesyyDUHj",
  "key31": "4v9Ye8vrkhv7uGd5gvc4s831qwN2UXYfBpdrszHmAYQUDLSSt9DpjxHmheHrfRdyrKp8RARdDcRQQ9BQbbdZTgYt",
  "key32": "3DRVgSD2BiFXa9oHQgCLSu5iLWfZkGuZtSn76iU1gm9KhwrJwX6BJaJU7AwZxKr6ojHfhkjuW47L3D15SiBgssQn",
  "key33": "oj6T7PFQNiDNdERFa7vqzisxcv5FQnDnVDet5ky4wdcKG1otJ4mCu5sJ425ENZVP1svkPxVNZwjuMtSzoVBj8Gj"
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
