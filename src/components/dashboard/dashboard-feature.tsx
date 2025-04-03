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
    "JeyW5woQZRWjEikkpQzNydrB9CDv9kKHQJHD9m4v6mLbwdLDcP5fHU1HeKgiLU8MqQBqfhGdH4SkMmHDRNwhaUW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WZZAe7iK4M4G1N3e2cGrQJCemgxN5bG9JXeemAJEnpzbhCwzAFXi7FsYrHxivggT4yxVkK4RC5QjgCPca5EPwDq",
  "key1": "37dLAwPgNzKbH3MqKtXpDkmQsNPkAiPh2BSLtK6pELh3cSths4U382BGLmqcsg8wVxzyQnEuYxjWmkEoqKoJ6LuX",
  "key2": "5Bkcgk5uHChUrfJv66hJuZKjE6QtkA59Pi3gjoo3EPMM3FStNQg9p4aNJ1YTUaf9KkfsRf9FoFAL4FVHANA7YUGk",
  "key3": "hWbq1gXt4xQ5QjNXLK9BhmioRH2qzH7tT1hgxEMuadbevfUfEnKRPPLB2cBZsNpQibPFfx4zW8K19a9VSLKKXzc",
  "key4": "2LpNsL2CAzk5Lnb7LPqCWofWyP4DKqXajdxTfCceEvc8LVS2Pgkt53Lq9m4SrG4xAmR171rKft7xM82AzPQu8DbX",
  "key5": "2HRn3RG9xXntpkixrWMPDyrDmaKUspYZWZUMhPBnmzjggKcHzvnrrjATSuzkr3Q4n767RmsHD7HxcrYiWzEREgVx",
  "key6": "48WQLf2kk3RJz9cXgKu9ak6om69rBKK7GoA3fw3sfre879jQVxwAaJ2MutjujEWJfKz1wsfS54MBZ2jQTe8qhh9p",
  "key7": "2DK8pBJZwGPzqABnpTdZpPaKFGnqtJh4rdwaa4aMx1uRtAo7P1Qdy7H5uvnCQ8xjphsGTmLSc3vP1DbBVKX7RpSM",
  "key8": "3qpU1LVPKR3MfG8PDtujkQcSZ87NGD3UEXyMW6WM84BgsbsLZt1TdBnqvA7EfoXpqzWYCpJiaih1tXTKpsaH9L1P",
  "key9": "5KUoeq3zpXsJYnmeTf6gSq6LpUfxQuvV3PBPNGD7uqZiVHutDbUEzXPVj8GmRZyLRZrUpjE4cEim5DxgZtFKxpML",
  "key10": "PdHdZg28mVEACSsCPGSjVMkWG1eJi91DqrFefJwHgM6uoKJvFeB2sUGGC377D6zXdmBeNfBFMPuE2JdahpmRJx1",
  "key11": "8bHLSaBg3xEZyoPSp29UXX66SyTVeK3qz2gbrmZFBXgQbiYisgksGDR2AzPnGLwgYzbdwUvnALSeSCxZV5n22ew",
  "key12": "5kwXLvRpbXrntuhmDawbZs1JSsqLhRcXXGswdjkHFLPMyD8f1WgNPjEVWQvKgUERdby1QVfY3JqaUWkH3yBGds5v",
  "key13": "3mLAv93XVsTZcjoq1ZzTDZpbqthUSKMWEpooHTvy7CzXLJkEuLd9XcfBuR5V4CLYBw3oAuccTi7mg9udB517QsGb",
  "key14": "3ce9UcLCUGLdenbtxzLxAMhwbF37QjRZWhHdDnqpJT9P66LiSmKEgaAxMojTsnx9gC3Z2kBuPbTd4LyCQuHFqgAy",
  "key15": "2EnFu6W33a9jChbJDVWoaLyiS5x4s2T4qYPVUtDRxD9RZHoiBDmXGQ9KogoDMXnQxvXQ7ycuZz9ZkN4SCPyRWaLo",
  "key16": "5GACu9frcvej8Hrmjkxv6mVNAZZLp6Qf3xj8qurxkUP9GFwR2sFNN4wXpUG7CkzzWc9ZfhWC7NVsBAeu4JSQSHU6",
  "key17": "4vtcVxoyvih3xshi5xdjaXKtCb2fx4Q1rfW1a2Q3sihKDENUM7Bmvrv2qAPVYqS9XqQNLPYBH4MF5etqxaeqYCNk",
  "key18": "p2JhBEBU1SURQCafdAR72SvssTWySuiT8ktdrzMEv6eDZXk81hyUbu1LX4QFEb8fSitBJ9tmXxSmfdgfUijKaHA",
  "key19": "5b7KtQHnnnDeDKp8eWECkyoTMesWAySGmKEdpiYyAoeS44Aa4xoAbY7cXauxbQ15A9MAqVjbxJLyzRX549kUdihi",
  "key20": "kyF7UR9y61SQFnhN2nsvopBjzdUtfRK1szc52zeAmwYPi5XbBCbaqTnajAce1du39WTC5Ef2TLK3Wxd5pdP9o1y",
  "key21": "5JuQ225FPf7dyGCE6Au949ULGvsXuh18sMcnRHspXDVKCEr5pCF7fybsYTeaUWfgkmYARqgxUBbYuNezYPFPg7bB",
  "key22": "2EKxbexeRLBrc6gQsuu5rjEUNaBVrNugvFaW7qBGDVFEoirStnFv4vfcyvZKzgkzLvmQbTW8Fzp2WnwtP1MF44WJ",
  "key23": "3Eb4gRe5SkAVnFe1TGoAZoQ32ymwJdzWdtvZnYuea9uQjivvPvxujwtdDoFwZzWeFHrfYZzFP2HPSioGxUXgzE2k",
  "key24": "4KfE2YiuCPD9uncEQBJFMUWC26WCc7bpVv3qAa7nze5yvs3SQS1NKJvarjZ7Dwk52VvECyM5f3em9HZnnWc4b4MA",
  "key25": "3ebgpbLWfVYuht6zym27f7KyKHhpjXhhre3RZaQLcfAuPJZa3Y7WGbqC4TTwyJ5jzYGYb9DJHFX8PZY5jR4gc7Y9",
  "key26": "4VU3Ws6tnVsqyrrHJ1LGYxEmebDaimGJhbaPzyhjRUTKoKaMrV8V6PiwzXVM4JESeCw4rQsNpBrT6uLtaTEaAxtx",
  "key27": "5QSptFvXfoBbxp5RExyM9xps91qnBF7KHTChFvWmKCfp2K1qacB8x9yURtiTGhom6nfnYTEdxHZXSSRG2nZuAXcc",
  "key28": "73KM1scjz8uApKQhJkg38RDs6x9aT7Yr1HJx5MgxBUStXxQ98UNi2kQ96YSrGsfWg9nwsuq1r3iHUGYSF3NEuFF",
  "key29": "8PzEqwEQYmAD5ty8qh2DNQwy9jCUPLUSfUqjWn25q4sSK9UdY5RgBTymuZFwxDBuoCAYwjWEbPGuuxFTWepy2nB",
  "key30": "5y67ukiyGksb96cd1AUQqyby9avRXzpX6qW9ZFVKQUDJibq3brN337ffWyKJWXTUv2uP2jvPhL3S3CtrGf7w1BxK",
  "key31": "4DQ2Kh6corFxRkUqEEBXA4jz2bFFCFWeBvWHa51LekaWY9eSc8j8ywJjzW43rhVhnyQ4QhY83SrXoTSgXfH6jwpR",
  "key32": "5viSHFUsbSQzte5vX2hZuKs7Yh2KND726jBPJx6du62RaRHy9PyTQiB6kA6sWKv7ag6GCLeBvjxj8qyNS2rBBgt6",
  "key33": "4mtpF1nzAEtBisKXTBXmQNUs2FtS1B5KxJPwEZzMyauaJQsuiRxWbHAsk7oknUuMVHf97aBWRDdzFzc4q5hDtTCv",
  "key34": "3iPCz6634R1aNPTJ6s45xUTwhNWSNau15CR4MRjdoPdNxLieAbsLxQhc6WJFBUiawyxN3tuBMePdQEMHPeDyeFAq",
  "key35": "3zmjJoUWDgbir2eqD8TSDs2zCH21awCnzy3d5okUptEfpsiFwZawTgio1Mjwenvor8rGbHLPFjo8qdkt4oB9NHYi",
  "key36": "28RnctYmVU3193mWeUDbPtawYxFKN4BUnZ5GC6fU3Jetv6dgLhekjNA9zkAPxTpBya5YKZTNsY5hJazZvyEDdiZ2",
  "key37": "2RrtGVyt7AHUiBjCbN7kAhWPWgsoE13V1E2RdFBhypxvwyXK5Ufd847C7CjA7PqAABcvUtQ6s2Fhaq6vTr4YWaZf",
  "key38": "67DD9L1hBD1eT2wHYcKi5q3y7oRTbFytJ5F5Ts9hBzAHJkTRHjM2FjGBe7r3JhqttarLEauAkBpZbdo3dWMUixum",
  "key39": "63GLGfyZtHR5Lv8xbJV3XX27fWgiAP5T9ZeJR1TT1WvT9wuB9s4L7nL9BiaQRHVSnVs5vaqkhkeWuKSAFo7hhoqC",
  "key40": "4W5MtS2yC4TzCxEhn2s1i2mZkCVMQ4xSFgxC89SjX2YnoH8TqwY6W6Kz3PX88N2QrJQoi3Yhw7tHzyUwWZ8gPriX",
  "key41": "hNW65V9FKimfJCvHYuLJRfDyYKfT3pV5y329aCxDagEGqBq28ahZSXksL6apL3rMZpAGDD4HBmJwhFKzvEC89aF",
  "key42": "4AAfp3DnX7Rx9KzcUEpxNzY4SxNHk12yRnPnPTjJT9XCyedJ1PUqo16JNcq4ifi6tGn6xsykxshkmm2SxyExJmW2",
  "key43": "5KEQVhKq4RbpaVBQg8Ai5Pg1ZDu83oD3AHBs7Hezb9dZ4eZy3wK7WkTJP77ZWofQXoUgCmcpvrjtcse1DTnbc6iP",
  "key44": "4dD2ciyUUqryZ5jWnza3LyyFMYScKWW3GRTXcYLwAW1QH5447e9DeMSDH85XJVNufRm4R63apKcD8j9rBVzLKwa6",
  "key45": "5oH7RaN3uXbpTuRTJa8RuLkMJidwdAdWWKNpTAQNMWf2MHpZb3RPT2DPEgJQr7m7gt3AeZfMhraoWS9GnGxX8mAy",
  "key46": "47WW5bYZ3PF2AV2MrhJqbcvbHUhuEFcsh1NZU3emwJSaYWBwgg9vub4czcs6soYM5ftrMnYLEZkRd95gNZHBAook",
  "key47": "4oFf8RsSahBLFfEvHobCxD1gw9ZaBH8372fDQXPE4cGTY8tqBvx9saK1z3XfhXhj6cmoMVKnSwncXwDy6Q8YFUxF",
  "key48": "4MogC8WxZzLJZ22D2ErpLixMCGpW1KseLfBdLnMFzc7ccPgYd1RBayo7eaysh1dCvw2WDhVmkb4jXMrbKXha2WBC"
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
