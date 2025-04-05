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
    "v8yvrBQd5FbmHLjc57A2Jmx8DmKbSqyYGnUBwpGyGkBZ3PZ7hR6VMW26zzpchftFCAMafu3wevRRNDR8jCnbWtw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46UVz3J1JBy2jUfsR6bEpUudDjfubrPHXTv4ZqaiomyNZEvrosvohGxt8axspad19wwLXDEhX5h2RkPUvVJF1MB1",
  "key1": "522UBcSDZRGfLLBLV9idVuJV8hctK7HNwuBuPxuPkJH2d9qc5EvSi8trfMiV9S8tt93evJtRtQhbJ7WxAwc4MBkJ",
  "key2": "4dYwbVWpmu5cCZ2s12L9YMFfACWNXYnVhZN1M2o8kYECth4bpWCSdkV2g4NnA1XEoXDutsZ7AnZtj3QmAEANFG5c",
  "key3": "F8dvmZhfyffZpXpxaHg33Fg2j4JWMdN9ZyYSAWa9WFtqBH3jJ6segGRWA8nRQGEYVqXKq7RNAKW5AQkUt539E3G",
  "key4": "4N9J9cTk96EMvMDVT3V9NuVBqyWwEjGHd3fTCy2wYzmoaojLSN8J4Z8JgLLJ9x2gTL7iAH4eju9jZi3uqqgvRqvR",
  "key5": "3pxESeEVX36gDjVXBhrXbTKjJCAH9djxedhYcJ4VHmwcZUXY8KDAnFhtnPyFrSQrUFtReq2PmAAwCDUMYDTM1VCz",
  "key6": "5hFJUQ4E8grTVTi64smjTkvbYQa8UKkg6JPTrCPhXUKCL4jxSjY7vBj2YEuNt8pNkDBwkkVBatpT6Tr5faPCguRY",
  "key7": "3kdjnPCwbkVnhAF5LfaYWGdiu7E5Xr2e2fCpq1TyznhuSZUvQNgK49FhVyaXwb7H2Dh66pCj1zpHasByWS47V7hs",
  "key8": "2syFVKLpRMQzwK7qveE7b3iMp98Q231hwBvQhsmzX7j8Ws9rD7CaiHckwPk4ejjUVUNd36SUNhbDQ1K49PMSwKLX",
  "key9": "5RAnRFEVkVKmDkyN92juvuDYMKr6mAKWFCSdnZEwkhQs9661WnCSy4y2HtmBdA7pet2CSah3XRoGKWNin9XcicCL",
  "key10": "2SmQYcGpUKHQfuL7ikf6g4LKR95mUXcrBqMcbYSmeDyeFuLuB2TjawmuaGZNzT9PVqLYUefbR35MbyHzJB2qNX97",
  "key11": "SeEXc9nfKSGy63yd7PPUz6eojjn2npCw5m792dDU2TmdQUhiz4MkD4uq8QnapxYDMpD4j45VNqGZhehApfsYV5E",
  "key12": "3n9JnMTYS7Z77kKbUG38SuUKjAdkyFRcigVgmD6oZciSMD9goy6Co2k2SzJeMapBTpvLmFuJbKGKFuuqxVVC44XR",
  "key13": "4ZM3znwQhg7XPmCVkdELe4BJ2C1bbzqopsLSMnmiN337L23WJBjAXAKNh8mRNFHS8HDq4qBLodo78DJ6ButnYxZi",
  "key14": "TqzhPVf4W6yg1aLRF43LX5h8k2UNaad9rBYLiKPEFDUJdqktEiWXuU2W46utmwHjw9L1JgkZajt2MUYiAHgb4Vn",
  "key15": "4LP8oM9RCZvPeuDshUpoYgv25KMPh1rTeaLfEmJE1pc1eGECfRhKFPE3ihsLa8PCTBZxp3TMSGVnwMJLJzJJEt6B",
  "key16": "5k491FsSsN3PWVrUxJXekLibTthYjPauficQqx9gCMhtKRjwhxEAtZ3ZNzcGdfADeS8s1n4EcQZbc2RUxqGPwHMi",
  "key17": "5uWpeUdUPrHR1eMRDCvqoF5ydF4sU3ipPgYcTsGY3xQgoevEJBLmNHWRKU9sR1Q4CQXgERQWHCHDgiQNo1X26vM5",
  "key18": "4XLx7PYR3gLFjdAV6ubWipbYCswBmMGcfH7mdS8TjXi5fHaaWWEDyVeVfdwvGJ6TkyrGD3TkzEqCRuD97vZZhcgo",
  "key19": "28pod799wS9Cfj4HAjyw5HY6RELGPCADAMwS7zBBbJv46xwuWcjEWYfucFwAhFgU82GZG2iXWrYmHiNPEdyrxXWY",
  "key20": "4TQ6dxAtH78WSYC1QvaadRHAH9cRCcmxiB7BwEyJzL14MVXtQ41yG8b8nucW4o73GAP75DTNvvfYGhfEcgDybKku",
  "key21": "2A52yF7h7wLE8jFsSYqYF7j5gbMEEBzzcUEdR7NGgCtJFUu5o11TRNKTiNn3wCMumMUjLMWxkjXKMfjUzPiDmnXQ",
  "key22": "2KAbZwfwKeEdTHGK3HPBC9QFf56KRmqGNt7vTKWfFv8BZsLZ66xbZ3EDqpSz4mL1VazVtKkrNaqDpKAkD8967Cv",
  "key23": "nZJdPem33imV3feHKgFtfipg1cu2Cu5XE9bqFMTZJpr2Qzfn5AkQ7tVH29DBeqE6CbWHai5vghButjuDFR7EAC9",
  "key24": "FfEv5aF8vF3xStRJQjisumrhqj86cXrKHhtUZwvmepwUCKhzfZvcL9VohPFhfLJbSWrr35Pk6ifzTWEdXdQzsSr",
  "key25": "4BFzt5nMhQUu9P7TaVw1fifppeNdcVrd8Z11bSAaMG6pY4Wt3w47caqNhWUfr12SFD4Z2Db2LfYCtA6jXumq9Ric",
  "key26": "25JacHcomdDf1mMZBedoFzS4gnq3U1gYD3KvaR8co8rHcRYigdSzkoaQgDidX13fmkJ9o9KfeCNLNg4E4qFK7v4s",
  "key27": "bmkQ4KjapJr94YFL2BNtw1KspQF9acbZ1XHRXTp2mYrbL2VDTBL94LfBUGpho8AtFRHaUHXXLVFzSmRrub2MczM",
  "key28": "4WVufm6csRwW2pfaKAi6DjNTSVMFSHGtjCsvurdt2taoq3yDDNbUDb2d7nYGuANMcmRDetjbWuX9CxNFB44DjrUM",
  "key29": "vvJzPPU2KwURjYUGsZyzThboB3KZfptrG681cb89u2JftC3L2Zbrfa25KnKuov9s9HXHomxjwMmXxVHEULrEDLg",
  "key30": "5kMrP6KyWftL84pYeq293662GhSB8rcMy8srardFdqHypP7J4fYUmgZF5jk38rB4AGALKYX4CaVe8AVSPKVvcmFv",
  "key31": "4xvensCvryS3KoJwz14cLpppi2xp9QGT2ELb7EkAS5LPpcv9j8te5pPtXUue2am1XhhdV5iW4H9kmYByqgcjhaiK",
  "key32": "4kCSrSMmyBHrkAuPXwBahzxWqy9TfrHLQHGWpKhjM6eZFsX6DYjJtydG5ojj7vcx48qyCUQjzmQMfNaL48g9VpUX",
  "key33": "cRCqKV3raWSMEmA2ckP5g7FBJJqKn7Mar9VaLUVrD2XUurhcR5vrC2zJ3mNTvSJnmVSBBfZU3VqB7YZvCfWNVmL",
  "key34": "561aVc8YYub5ne2PCqv5WasAytxK84UdZaRBh9BVTkbf8Lwf4MT5s7W5VGLGHCjRM95mWmNeBaLQMP7dyQ2XiyzD",
  "key35": "3EC1AVVAAgeKk9fALD6EfSyR4hRCDWm8xdHJbLmS6BNuK4mYMeS6F5c8YxsqLM8c5VH5hssFeAxU1oAnxAfRyFYK",
  "key36": "3RuoHztjB6LwZiHN1rtJ1xuFJSuoqz5nyL2RPYurPez6fSgrHZhJTha9Qu3rwAF2hqLZkLYhXBKrsML4eqmhqNpB"
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
