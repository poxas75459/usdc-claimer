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
    "3kMKWoiGJj2ivsqyQxbBtLp64yacCF4ogDJwjGY2tqXy36tm8rWM1tc7sZMKwi55eBwq5DrTLNgqBLT7ceSaq8cE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FbbQtL5QoqFCjUD3AgL9QPW2FTjB2a2vkiFu3AxHzajdA4Re4VBqGJcddhorqnuhzdWEkjbzTh6gBUr9BkVB8Cc",
  "key1": "2HmgXronbFLzc5bhJDUFYCp4Eej33YaKArxK1WNiX4gQjcagCyhWgniPiTgQQv7LX7DVAzr51xP32vM7exUa1bhL",
  "key2": "D6RRgdfBEayKEP17cyy6Z3GLn4GGFMfsh8feCcerpGzPyaEfnjbfUj1ei8uMAEqyWs5goDMS2zNaVPNSK9TTQSy",
  "key3": "4qzeTMgfhfv5Y3pGHBK4PHxidnLCJwXEdK8QbE4NTNitrmanwQuBTL97TcuZXynESkMSjt7uP97j5tQmGpV1Gjj4",
  "key4": "4CMJVutocC2dQUpswt3tvgtdWKHEN4QPR4UFTKDozFNy9CHAbKXBrNU2dyhDxE6nmHWX5RYWLxz8xsYWGHpZNV8w",
  "key5": "5NsuCnrTMiHXYo9HDpsRDhRECRSPiqK62qxMmCLSLohabFgjgpcYzFXyEUiJpLZEQwZigeY5FZq4TnZQwSVhEcwd",
  "key6": "256dQ1K4KHRvrNU72xv5ey3ufAYSPJ1hniZvju7JBLLBJ9MsbSpZSe2XTRpHvDUdYdLuLUvKQvDC72cKhqYPxBV8",
  "key7": "2DjvuXVU7ygP1SUgUTVPTGxc7tWkkdMmH4P1VLdHk96Mwdj4A3x2haaGngtPT8TEhwnMcxxh3nQ6uxhKHeJv38NR",
  "key8": "4M9GeWoJLfFtp8i9deUMW38vvoiRwqzAYX1z4dBkWA6ptjVLngSs3WVGFkjYum9pvWkSpJ9QzTiQsTJ6nPeGzSf2",
  "key9": "5yDMbDtAknWmjHnSEH2ZqGhoZ1qBxWRkEAqQwxCPv5u5858qDGqtGXErAm8M9U41SwYLNoW6wWpt5butrr2oQNrk",
  "key10": "37ptTyemfsw9PNZK5N62zgYFPQM4bNwLj56xavkZnXrVQYh3zdj2oMAg1ndTEw5MFFcXgkfLjhUGjd7MFXetChr",
  "key11": "4WmYHQqW7nC6tXefPZd6PGdcGgBnB6PjZqLnxNJLXQAwDnTfYQw3mVQgMhXygB68cZwosYG4ChvvS7HVV9xh172Z",
  "key12": "5Yx7XmrdrgdyHf281VzAzwSabJ82Fv5SHFxxbjpQ3bPWuPbJuJWPC2vk6VifZXKKjrvsQSVKt53SkrpZnFwa2Ahu",
  "key13": "4d1eeHaqwKm7vb4bcsKDTH7ZfrjZ7z4wjPuurE9HDziKPrzEv76xVNuM2tYaYAvb958yrRAqfof8g2iKA39E1w91",
  "key14": "DENmx2xwxXSPx4JSQq33UVhskUVwUD27WidS3L6mHceZisiTiBSdGsFUpLYJcjvRmj8TBCQgaQQSz6ZkpRynZzi",
  "key15": "4tL11gyNR3EfhrEobdLmWbzU5XhMy6s2e2aJEp53YjVK2yUn3o3yVSMsR8zLcEJQMgGyrsveSQi7UZG81dN7JjEe",
  "key16": "vNskJShvp43e6fqeo2fuGHJgjRFyYxPU9MHFuJZgS9pwFPNpShZGb9Gt3DNCDRVtaodj7DfAx45jdqaqfoDm9Ty",
  "key17": "4harT3P4d4GMaHVwt4HKF2d96SRaoH5yjXd5Lm35L4bBgoo67ShPe4zkN5dfAGjewgpyVsHfDb1cNneoeqUL4nnu",
  "key18": "3HHmA8YRX2UmAEL3jZVNYsdzR8cecgYW2hLMHeyun6P4yR3mWd85NmFdbQi9g1ZjNAsqWxnhX2vCaDVbTEvQScDF",
  "key19": "2iwMfKk7bMnkcwDHkmi8yLz3Y3WdNSpe9P8ozNJGfKqKRTUFL5cUfAD4X1aycxok2t2jKP45mCHwRBbPZLnGEuRP",
  "key20": "5MQ422WtCjkGLtLtvs5yYQVkxSU4fySqqrVvn8mBmnJ1avC4xKJsrueawMsJqii4ParaLw9Dza5opevq5BQsyZkb",
  "key21": "ma8SPjC6HkKAPUJLkDz72Yx4s4XVtMRuKGHkbhgbcVdKm73Qgnf12THDgj9Sz6WybvefcE8PXKrCMEznt8KumYp",
  "key22": "4iiEvyivF72MWJuXbsbk7qGKSJE4nxc5vPb38hHcHkFHxFM2zZujSBD7Aen2GXroHwTSPTAj1cMYqftCPbUXfsk6",
  "key23": "3dV3EHsR83GzAAwXBXgcPScHH4ZnHe49nJ7sY3oMf2oWzfSH8R5mzdZgMWvkR8DyzTDg5t485ytnGN1EQeQxMeYc",
  "key24": "5ZVUdDHDp372yuK6LRmiHRyEASzvzW15HHrh9GZLNwyACSZFoernvZX7XxxBwe5CMu1SCMFUAZVtsSFoHr2Wajkg"
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
