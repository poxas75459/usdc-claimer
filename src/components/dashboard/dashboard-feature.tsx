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
    "4oDPpcfSLuQY8h7BKADeRHU3Y1rxPW3rqSETohaz3aeSwQi7m9fVbb98ZDQUxX9Ydfz8Eiz3dThrLzXChTCE2F2G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oNHaXNzfDvdMdvLaHEAKqwJ9EmjtBpS24EbmfBJzPgCDrvuMxjDY5jeaTpYdsveSkz8jmKuCmMLavPJo83poWhT",
  "key1": "QujRA3MefQGYn3JsokPuouqxtZbvaccGsJQrDdNuvCZNPsi2zzeD8Esg2gGzYQg18kJiHg9GwuRf34fNgLJpyLT",
  "key2": "yxc7ob2mhiHKfbfKgS3uDKDgrYhLK3uRkx5hzK8WcD19qdL4fWiU6ZzCnnu8TGAdV9kp2rmPpLd5gK4teY9f41n",
  "key3": "4D5QwphqPuyTzs76gVxwjTjJf1sZGnrJKf5x3LxiqRBN6J54Z9teA4ssbxiuHmqJszcGvebQoNVb22igjs39QWiq",
  "key4": "5iNvTJhMYafjn5RbDKM7YWQDEeYHcU1jSKMFTzVYytaEC3Qi2HpWBzEkGePeAUdCNUeotTruSs9rD8L6UMFBfDe8",
  "key5": "4eoxkH7ADnLKjtTjMdds3u2KYdYRzKjBJ5Fx4PFtSAiE1oSi5w2GFkyLVT3mbUFuXZNnAC8a6Q1ouAYcTPqDBHUT",
  "key6": "25gYdWtCrtkcLzNUrqC814LAyKkjs72QNusKUZVEk82mGwYTtRBamFfmDa4M9EzbuMUPXNsp5YYJDpv37dzHn97B",
  "key7": "kdnAxoA6WedWEnihjR9X1PejYW69S6zHP891tiUyGa8w7cRJwUiuKtGvwmkREjy2Q1hyqtFcK2Hwvim8Vqvuu9T",
  "key8": "5sKg5YXpbFQPewDQMwRxurcncpcPeraYLSXhKsdVsKYESwLerZDQkFJ9i2rcfjv4WGMBXwfwf4nbK5yEW5V591fs",
  "key9": "JKc2RVg5AuaZ8k7ccoBpVYEnLGLWnW84ZQqY8Y8L5swooiLjZe76PxegiHxYYA3mgvBpzYJoX1yDMzP7iKVBKqh",
  "key10": "2uV1szxjHK1vFUh9djLXt2sLcM1qc9TsEKQ8315NT8XcmynwtT6w2L7etMiekrm9R1TdZY6WkTtqxZFFDGA19vzW",
  "key11": "4YwwBhfWsLAgC52ktbrdfvSijwj8B3uNjE8M4i5YasXpNCSmyKGUdHNazLCSRPqgUw4peDnmjwrBDdWTknqWjQJq",
  "key12": "5c3X5Gqzw3qMy8sL9mkozSrZP7VabwErKqKQAeuaLxmGtKRrrQQ2GNVKJdYNHSdaEn4vSavDZgxpTbsDkNLTmt3f",
  "key13": "4SUNHUt5QQ7CNGKSMVgVriCzTrZdbZwDAMA4BVEriyjJEVjrzGEBhavFgWfTM7Pj7ndR24JBje8qhPNSEkmPCDPo",
  "key14": "5HosYWRsfL4xGiQTahwstvRbiFUxQLmQSEJknv7roBor73v5pBxN6jiCas9xWSHjUm36xTubo7xudC2RMYZ6uAuj",
  "key15": "3mpi1NLS62eDktTgiiPY9W2yxxYLCXy3kpe322a518g1HNrLfn788qAsDopFLv2z1yymNgrNNG5B6mVtVZAPB6fh",
  "key16": "2p8hqhPmW6Vu4eysTFM5FgCtBpSHBnkFGzJioRBBT3N3CPvRjN87BeAgBZiH9nFo9YWPMJnhJxz2yQJmaqkdkidp",
  "key17": "5pPje5yLbT2rQ9ckdQ8kTnyP66ej7ipP22VQoYUfcoQAJAbvn3cU7FmBw47k4Uw58dKRgVJfsZvH85V8avBCAfd5",
  "key18": "3nyncLNpy5VEKe6SLAyfLkWXozeWbtg69TC2CTR1Jrn2UmJGMwYy3U1puVFPAmmQ72q5SNvCTBwpoQ2NX9vse9Zs",
  "key19": "3Q7y6NoxxhJSdqjatvz3bHAdnAL2Bkard8yajoHL9ahpKVAbrKEAZVcrCTJYxJDa4yeYnANSHAnVrqVXus5swbo6",
  "key20": "3PR1kh8SkDCjhwjkCisYguMoRZCjdH69undEDbHtKEoTSokN4Nb2sZfc6bDwyUHVw384fVLeUn93CwCL3yLdLevg",
  "key21": "4aT7U5stmDJu1su9UmFLp8idNX86QHGjBCQGE6ZVhAvez7XvyMXE2177PwEGRDAch6nhQyozGzhpaT8sKwzcqsJe",
  "key22": "2eRt24dJTi1xHe1X1YYzGKixSD5fkfTfd7oRuyNpxdsTWp9FUXDwnBxfuKqewfR1jXZVmBewvcBM5WjLX7RAcC4k",
  "key23": "5RxrRBKLkX8oSNyDZmKz6R1SgMQuM7i6D2ZtdEBrh3xw7ZKTWR9G5R5TX1gxrVWEfNRhZhWFJoDDMW1WWr5GJD3e",
  "key24": "5gjnbXqYKbbe8zQvVo5pMHPPy1yRS3e8LXJod7PpHjGWMvmhavSmApMm7nhoW6XnBo1qs3AMLuZUrpvQhXCUEVSE",
  "key25": "2pVDcyv9ypYhdWWKdcg4RGva94foc4ceUVHrLSHsqGJVEkAKFnRBDFzJGAkfMT7BQg1GimL3eNpN7nJmvPM6zc6m",
  "key26": "3bnknLAqCdasaCqMRYAxhCg8GcAGv6bYJqvfGzgNqvxnsBdfC3Q4xnuGWMacjLYmYyt3CFrikfXG8DRE7UMVnoBS",
  "key27": "3QGhzdBxxPNJvZssrBG8U4AuiL7tZsYk43L4v7BuKYyQLPVfKjtn1LPLx4jH4JF3kWNPSgzgUuAyo3AujoUbxo37",
  "key28": "3t4iuQ7ZkvKKjCEfUtNpTSG9ZcVXAgWMpxS8DXaGvLe8kTFJQZQBBv8cNBbQduBV33gTJYRsFvA2vzRi2gcAbJU6",
  "key29": "28MCsKvDLkjppycaCUuPX75MqB7wnueq4as9ompVxXKo7diGLZboGT7Fi7QsyL3tDgA2nqSfyTfw956Y4mFsgAwb",
  "key30": "65pos3GRZrPHoeD3E4qBBcBT888cNBturhBx72ASNDJjanniuofCmTbJ3CrWGh9BYR8v7q9tUTnPSYmdnWp2WxgY",
  "key31": "51gspiMARmvTpxkFV9CUP46rcwyf3gfA6YGHGeRbTKdaVY3rysk6Sma4BQPx7mvXBm2S7xbhgPPjn7MGx6iYCuor",
  "key32": "5EbTnhZBsuXjzixLcjLU9f3fQpPaSWfVAKbFfiBb3hj6ZuQeNxL3JxqWD4KNBb1uMEGp8YXupLCPffDNxUPN7aNT",
  "key33": "4c83AraYHSPC6LKoi5ermnEFJAFVwwHHCwPbfriHBLgDk3YJjw3qUXUTSRmQap4W2TFUgAwoRN2kehJxw3SrYwET",
  "key34": "23KLYf88xdwqSuXvyG4ehaSrMCm8HTN1w8QYZsFi3GPrktRW8fzgUKyB6cjYQxYV7vdNf5mB5kTKmA7pBw4RnTqN",
  "key35": "2RiXpvEPChZY4YMSvdHGXfdyP86iD1DRy8GCDXdgbcHcahhqcZo1eyD9ansx3pjEzcHPsxkiFErKfCfzno4EEprj",
  "key36": "25FTo55UTtvnkC7aFqDmN65maBSpypJb2wPJThvbZPGY6Kt9a18AX21RyeV8ewCBi6FxahVybiWPs34zmRsfSzHW",
  "key37": "5F62tBa7nccBRv78wAinrB7W7iRiTAScntpLb57pTVumuGd4vLbNxDUh6ciXBN7KTG9q68B3gxdNfAeJ5uVNsK8X",
  "key38": "2Pkw4J7XX2M89rtu3E9cyNg2vVPGygzMQg7abMtUfa1etGib4uFreWrSGKJCUWM3iH62EJ4akLjE4fDRcXmT5zQd",
  "key39": "2AiZgD7ENK9vA7Kdr5ebLGcdvYTV1un26mme8svuBywQo9DYigUF4bgcCMP3RzzrAfUurnfoFiPiBtr9qXkT1Qdv",
  "key40": "4iW463SMVaDNAhMDHyskFbmvEtWcidNhK65eYfnMRSVrnZvkUJdT7aGnoR4erxN4aJjC7GeTuaG96raH5XHNAYJM",
  "key41": "3sAxoQ91Vvtb3AWytDYqLUeTp8B6Uq3azmpJQ27dT7nCwEj1HtWLkkc6okc4Y7m3Tbz8Kp9RpH8ASZ8ehvBaUMXA",
  "key42": "bXH6tAtvxg3K3axTjdDnz2GkZ7Uwt2k2k6vVWcHYoaLbvAsz4egKmWdy6a4es8Xtb7AfmkfkWBRiiyKV1C2bRzR",
  "key43": "2156NKHeckcKFKui7YeM73ep6YBMifTxj1FBBieMeZUFmMQWesCAgSuRPw8hAieFdgRgqYAaXgJd5LjnUDyxmTyw",
  "key44": "TcMXLgx3FvCf9KLJkqL3Kp22g6HbMYuayx1Tsm5dKt92M5wTTLEsQtdt5A6rpttxrmwWofAPVntYSieotS72RH4",
  "key45": "5kwgHktHYsLLwttpRyghuEqfP19Um1CRVL6cgQahnYRUFer864whPfZirtH1LweGiyNJtGVhWfmzs4nASa4jiWsP"
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
