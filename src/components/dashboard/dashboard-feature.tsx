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
    "3LdFSDyHFCVKwZxht14UKgS3ot2DsjkdzuZS3g2nS3csv8mEX5rupbAmCM2XoZna7Qaq5kwYVYJcmxAUTCEd4asV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BjwmZXpzBXnJ91qBMG9RqKibJM6xvZoxxM5EXgNnB2u5xTmmk6KD4RhXMD9tWzrcvn4oyhbLgDnXBqfN51yVYRd",
  "key1": "63pKuznyZ96EbBAxaLL94frvFjX7qw3etkdKTid3XvGSCVzNPuSuFjEJaKA9P8kzDEj9Es3KZNRiQJg1q6v5VdHz",
  "key2": "4KD1evfWHnYMqDys8BDMjctiu9G7sjzUvXDGoyvL76rPQzxUYZWzs1fmyaGtJbfVRbyNd51vBUxUecnU9qXj7zvT",
  "key3": "4t3RebtGh3u8yZKDWDEQ5TFjvCit68FfA7JrPZASTHmUrD8dFPmmcb5PiSvTZ9jvkPf1cKZ6JXqtqoDYtmkPnQbw",
  "key4": "NoxKybmLJCj9sZHZxTRCKti6BMmE5ag2dsncwXxQ1amPpd58WpdLcDTBaf9AZz6Tt6ATHFz4Z6opnSjmJ5u3Gme",
  "key5": "3YcAdBQEaodR1FDvqMaAWGAqYuosm474MAdvHwJ8wr7UA45abTvABkCYDMymvDFT7B8TWnN4vnzprS5WhzAVr533",
  "key6": "2Sd9oVYi5Vtsz2F3QoZcb3JMMJu5NX4eCMiDdb2rQwTJSfRHDXGsG1SkpHyjX3TfqMFBYPku5yFtjJc5zZaL6NdL",
  "key7": "5k1XotznoiSEA1ZQRs3CkytFxGyx82J5RVGW7wcQ5hG2mr55qaEFdXdE66PoQofGKMAZnt9gpVJesStPvQkenCBs",
  "key8": "5uA7ttxGnicDUrUEQtBrbhUH6f4ueoPUH1CqHHdhSWWHkHGqs8s64VtKCjwEy29ERJiUfEPemnzuZbnkpa8E1vtP",
  "key9": "5LXbMQ3fTg491VDKoUVjLwk3ZMXLVdqmK6WqpVejbDfSQ791P9DRzHYL3rKqnWjiXNQvGLJBfsXv8jGnAj6TywpS",
  "key10": "3q9WaiYeKWu5uU22igzV2peDcVCbryWtePWsbHBHoqiqUPT9U6uubHRgJwx5aZ83BErVkPMZUZNapkcEpFqGH21s",
  "key11": "4eiKJ4QGA7jHXRK55YuWrqP6HrsofrvkBsYD9Rqz6LKhhS412ibZUMvJ9PhyQhpdN4mvR38vYwMSUdeGzMV9pg21",
  "key12": "2sLuxDduGm2ryWcorU5vjUTsnJjqDV3KqP5wjShf4N1tKCsAE5o2eTxoJSrcSQgp9JBTLb6cEebqBfxG1jK5Erdd",
  "key13": "5sWSi3XBxNQFPDnHEg3EEgaDG9fjfg5dfrLD85eMas5awwwmc5fabiDs1jVC9tqn3LchLXwd1HFtXHTfFHHAL8Ed",
  "key14": "2z3A1FacFviXSEXZEMUY3S4G5tWK4SmEYK8a3Yz7Y1jL3uPoobHSvvWzT9YghF8ahG9zJbnQGXZQbwvJwf4Pbm3F",
  "key15": "M51tiq1AoYriSFzqoipGx41Yyf4iLoA5FoL6WGKr2RvnZN2aqHqUta529wqRiaJyBBjp9qVyX58MBYXrEPoW2s5",
  "key16": "2FVrCFkJBB8UTY7duWPeaRPhyPCmzRsKES7ggJiMQhjm9xEFcyuocqnm521qhuK62vD6mS2dBHRB7MJLSnRD8tUg",
  "key17": "rZu7nc4z6YJXCRsa8JHXeQJBpppXDYbTnafeNf3BWVVULwDfjxtr6krrmvRLzRRgBxaUtpG4hrDqnebCC9ga39k",
  "key18": "2yqujREor2F1DLHT2t4C5oVqKNhK8oQrD2yvbc7mTZmVbpxbMsZ243uGTUHqeuqni9xdKkWaX1iYnxjgC6KbVHmW",
  "key19": "3s7cev2efga3QKnvUNeSkBJesSWUbqbitKVVYS5kEf5wa7nHvMNc9oqRpwhJvb23TPfjmDdXk66hrKd3VeybRSdn",
  "key20": "z2Spekh5XFcnJuzfPLxYDy5iVCm7tS5gPvLZHXN5aihpezgQiKq5eESecXF2GKf4JhQFWpmVecjToS8XbcucM97",
  "key21": "2ivqWBweDLwiRYV28mmDDb7LajhsvdAuQrLjbNuri6yZXfyEZ8NHu4JtHeRo8BTbhtpTYE9SkxrnyuE8MEBQqc2W",
  "key22": "5uNVv4hZKfYgT4x6GZrEm78TYdJBZ8Lu17dvs3n7yfLLwHmVdCcETySqECm3ucmEnEJaRVJfYiwjNaUbRzvximH8",
  "key23": "3ecpMwnSc36prwgGeBj3eSWpmR3geXYNuS7AA6JHGSZsdpquYGCFryfuKg1KFNiWwCsW5ELgu7RXYMrBZyrFcuYM",
  "key24": "h4APybwbabXwNmY8MHLcVEYP94N55A2EZfaAvCjLLfPdNpFsGax4owgMTtnM3GmS2PiXQRWNePc8w2aqkaL6PZh",
  "key25": "3gxeNRL7uoa9Pyv4eCRPLuiBaJTUpysKhSTH5LbBqv9rhYZfHxXBxxyhn2NGaYaz6EWT7bXYAXLgVrz1hYxFrreS",
  "key26": "2QuumnQi9CrtQLvg8mSJWAphRK6EfvnKWiw2Dqgzroydig4fBdu5Q5xBqBzrnqo1XWVYr1NZoBNfjAqHPH3XntPc",
  "key27": "A2KWwrQD1xkKwsTG1jFznkoaTgQ2yLqVvK2jRgVw5AiwesDNdCfV2udeKz2eoZQWqjJ2khhnLzUjQmXm76NnVgC",
  "key28": "59gcfTHXEQJARBCDZoi2okpt9stPLLThUMZoXXYqDWh3ektJnG2Ft8bBxxgPqX3Rz1CzMgaop2BSBY648zRQLS2f",
  "key29": "4giP7hfefXWX4JmTXMPPvwLRmxScgt9WACWU5y2qR6UjMa8voGowBsFhPPxTnhm1YA8x7FMtJbkddduikScpwiBG",
  "key30": "5bQER9fpPHZijAwcyJ31JuKnNrwPpVgkgFFztdS2epQQun5hwL1hbUbxGGQmDW5k7PbXpaZUDbitakD15UQU4frW",
  "key31": "3zmqKPyxuRdWGmPiFg2wuqosZZFgxCxpmjGoNu59hoMAWuyo3bjed73UNuE5e9bA2UkffBN6UhjTHxBqnNattxdo",
  "key32": "2fuCR9XBBNx3BuQmVaa1VcaRbz5fAFewt512hGf3kAPVkHvbxDNmdgirKSXZf2ZQLabgWo5EoAzrSPPfRHrRsz1W",
  "key33": "3L1hjhNNbXyGG4mPQJ3fRZxfuz7DPGH1BwgoDuFGJt5h3AQRpxoBMZaYnwSNg5RLpenDN9uW7apf6jnJ1YAnpdt2",
  "key34": "2uirufw1SQVWLRnxEgekJM68Wj7j6GK7XM4E3GNpRFE81Ch4Jpx5i7dBxcTcVY2MJrkjWXGCtf5iqgoQLtPtWhLe",
  "key35": "5LYoVpZg5GX1MJKiXJa1g2NRsthfFfcDQffcHxTmzM6HmMWxF9nkBLzZbFBtjUUtuCxVpTBdm4JgGCwhaWpQHcrm",
  "key36": "2mPZzQKuNQydB9iUxNVLHdegH2bgRE7hXLTYQHAfrE178e7QJvzCqdLBq7UbpohXXcJ2qS2wy1LhiXW3uredAwpu",
  "key37": "2VyBvKNvyc4xmeGFyrWQVrAUgnQ2p74f4s5QtfreZfnjguPaaEqNW1a1BQ18hswe7kwkB7tybBvcunrHgQoiWC5Y",
  "key38": "43djFbQ2STLhLVmnzwB5scTNvX5fm4YgQTjhjzcxGXd1JQ73w1BFieCBHhKpFSRRG92CK3FDqAc2cW3yKQN96vup",
  "key39": "3mCDPFY1WuZYPM4adDmdM3XXLxkP6Mr3vP62h3YBmh2h1jic1Co6QN67HdcMYstzBvDe6oJ99RkibfNp8YbYtgWf"
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
