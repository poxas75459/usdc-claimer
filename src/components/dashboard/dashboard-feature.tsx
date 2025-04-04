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
    "32PUgti9P4uWdFSQTBUDQDbyD3iubeW3TNM5XwKayFUZR2uaphPCEQUXcMAAvuCr6nYFcb8kuGQsHztLBimukzxZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HU7ac3KC7NzccRo8H3ygtHdUMm8ESUj2tYxTeFSMYVRJkQ4WSnjzGHzgm88r1smDZaWWJdvyYXjPTeDypKruZ26",
  "key1": "5Pk8JdTFWhub4eCUJvYJgf9pp1dEqgMLcqtbedtATH1SYetMYjLqJ93JbRFaCr3fQ1JnbDYZ39JRbzYpb35SRB8U",
  "key2": "3CK3cfc31bV2Sqp1rRCFa6fxPEBURt3x5cs7KZ3xzFbG8bhA1Siy1HSdV4NkCQrBp1n5JkjwraqgYAWPU9qmbUhV",
  "key3": "4USDJfmn5f1Kb4j1u9MobMpCFfaMTY1iaaffFdFVsFKnUQJrEUwHjtXZ8j9CG2o7zMTyUP3XUu4vEPmU9J6ZLh8K",
  "key4": "47TGYeg8tjeP8NaMMX75VnorHG43orUd19e6ha7uGGzpXPh8JoxBjX3QNGhiThrC4ZvL1koDYJiAjPQJci1e4fqn",
  "key5": "2fBvYS3Pj1vK9cp8Yv81cQXPWWEc1b9b27ru2S6o7ETR8ydsstPizELLTe79H5KwDuxsyChS7SUQuKv8PnBpiLu4",
  "key6": "3vcL8yHu7CTrugTKe621qjQ7BwC8SriHbaRoJmiXfyeyfTgG7d8NNvmjt47ooWSuWXQ1GudX5qrb6UE4XpYaqR1Y",
  "key7": "3epBMz28z2R1RTuQfXwHAjmzS3kZKqL5uuFziBwXsW5pajQ6mQPeK1yz4dKWwabMMAi6TsC75Th5XK94Vy4rjZUd",
  "key8": "3MPAXcpmxRYLwKyCvv8crK2pMQrZekJkg4Cr5mmUqVKvdQ9Ruat2k7wWYgVRaeRrPH7CqsGWaQR9reQTRELvwMzP",
  "key9": "3ymydpKFCjEPkiMVSfKyn5BeWMeUBq7VsAGsY6vpzVxp38dsL4L3hbD3hYZuMXGeUzCF3r415dib4hGRf3XKxhjf",
  "key10": "4yKUyUqZSczxXYhdQupWAJCRNXepS7DPajMTdFShHwAVZufFZ1uDFsxzb6W44uvAijUMpwGEso3fjkm5R6vEdCr4",
  "key11": "2kRPa8YHz1zHJgQSE7MbKwEtp2f82HcJw3PDLaJupUY7o8HWSezGX6xWEBkYDQH5XEQipsnPqsCUHeN6nvSbQchs",
  "key12": "3c11UtsqujGnQooGMavYAmkRZ6tnXT5Hg48jDHogx8PC1xxBjVeLr4cEKmTtL6NGepFudBUV42FkfVpdN5Rw7ra2",
  "key13": "24mNSvGFzkPFhsxsuSpmon3iT91KWrRjxRXCH9oUhQY3rd3pybP7myJ2DYZStg8FtvFFs9jKAZ5E1w1bAURa2tmz",
  "key14": "Ky9Nbv6rWDbg5qVmTPsEmq4fpevURW6Jhvt9YKBr31JWDuiZSXhyMi6js93vnrLa7kVdAnSoX7Z5cRmsKdY1uV7",
  "key15": "27x3KAqgP9UJc8x6g878pdQEvwphEPBtfnhpL7bPJFVH3cbZAQuwyMvbTdHJRYYEnaBxoXMMcyRKpT5oZFmAmguv",
  "key16": "3rCAk22TjoVvghnbN3ZtqQwY2o8L74MSfY4MJbzvQxvKzRdNW2MnixHUZuuCpxyK2YKtA39JjCYUqpAoZNQgv8TR",
  "key17": "4eMyBKsxbES7bRkDMfpjYPcdjkAbnGkqmx2NSgnZav6F55sXzB2pvbEu12dymYV5nGCcyDwtVurK7mFabtZansAq",
  "key18": "2RFMotinDWB4hy5L5ZjmiiDE8FJdbBvjaEN4NybqNGCdmoYywV75qFkEjju2VdyekLvDpGjdVaCC7aAQeZVNPSP3",
  "key19": "3dUiUp5APMP7RtrG56h4bn8rwqmWbWE9dhRmQE34y9RdGMAg6Xhfw5WAy7jkWWdRaschnf8hBP6YawpHENgi2DFQ",
  "key20": "2fTtXACy7PTYspJW37U33NRm4Uu7D5dpXjYcKSDJnxU5dvt8c57aVRueDCT2X7UP9C8XwDMUBvKJYcCjhSzq7jsc",
  "key21": "3au8q9LexguMn7nBwkwCh7Jduyd6XuTq1uFhRdqA6eYerFvZ6zJFd7NjS7ceLsnEgMASX2VESHCPy3vZJFg5Sidi",
  "key22": "3DViU3zFUvTBYEyfQWoEqGc1jKXkEQkyCWgP5rh2JdMh4RjMatcA138zwqijbPnCZik6zmAmbiVnrS5TSsPQuavZ",
  "key23": "2GFJ4J5vcepmHq5KG9zQ27fmX9je9WCVgSR98MAiXjuZKnZTsxU3oDK4cQ8CKk1jcdfZFTMxGqrdfeWyd2NJ4nFq",
  "key24": "2Na1yJGr3MrK4ALbfk3UDKyh28KW2CK5WBkhcidCXAEtWnLrjtRbMpb9Yt6WH9m3KMmQAw45cnBCpjm8yeF68ioe",
  "key25": "4e9PkkB2iQnFuFky6gJ19hsD9QVdSm1t2aEeHWQKq6W3FhH3gxYHEv1xxiiPiCPzu5hAbUVbavpA1RaQD8KuQ2eW",
  "key26": "5HHLJGnVGLyupg9J2e3zS6bLJnbmjPnpoHxCL3hgwARESaqHTJLcfibiD9bq8hY1SPDS5DzyeYBKm6niTL9hU1G6",
  "key27": "2AVTUtwbdsEVrBgVyx5o87jW8DaCP4QoTHVaZhrrTLXya5TMvvs6rQrk4zdziZWbccmrAvFqgbDhYFdkf1ikD9Q6",
  "key28": "3qAooy5CKx9cWGntFKWKN95w6cAYx9PuTViNzHeTKLvpaeUZT3UJzJk3JFitQnw5vhi2NRvWxVJTbDLayagp5tKt",
  "key29": "3J3gkeS7LyNB2ZRVajemAR3bxCHtrnMPQcEKpLiLnXZWCPRbChVVeFpg8sJz3RezKW2feS4yVXSAz7M2gz1bDF11",
  "key30": "2QCpRPUWCH5hgzLMFptuhFsqJJgigLE6B7zfbLjyyiEsZ1bkK6oVQ6WEUTjqF5gMX1WWXYJGEePobSM996qFi8iE",
  "key31": "51Km8nMKYrqZzL5RaKpw6WFzn9VutV7yAc1uJCFPVWvsopzYXsvt3vJnivzPRCMptDKTtXmoWSZAfbWyEGUWjvAT",
  "key32": "kUHxD1TDeXU349JVx2neMbo6eXTJrZmBt7BPAdHB9SsQwL7MhtjotsLZxRdE8fXhnvtGAZafbRPZUUMdf1FFhMm",
  "key33": "3MvVijkN9UDt52UkcpdTH9hpQp94c92ig6ReEEEEoGKR2enmWCjLeJYCr4m8jr7pHaGMyTaK6R6ATMVX9Rz77CCU",
  "key34": "3GMRNPXkcG4yp1314DDsHnY8xFwJhtgUQSseNReXD4KvauUXdP35BYfLoHKwZnVcFGQqxh66L86PwPMt3HzFQLjW",
  "key35": "65MXTxTWaBLZFZYFjMEFnpY2hf7nNXxVcQkDFzaTn3RSbAnXhaDrVDse27CP6z68vYyHwSUMgLLWvvYTzTXUp9G4",
  "key36": "2UKFPqzqcFh8BVQJ5BCVDqa9DigJsjfUtSBU3Kn8S3PC6s1nFHbKzwuS9cZgwcuXFYDQ1JQSgW3tq1NdEcZh7U3",
  "key37": "5R4eDoyo4FT2hEidXRWDVHMhThtt3Cn9vkDfhcghLfkJ55J4hGjy7HsQsdSgsffr7Xru93X2f6B3ndrHJmYmtZub",
  "key38": "43VrLKT3jCjpyhuaRNgmd7Q6g5tSSbdekZzYSEGtXdwooyRJqhEe5fHj2UEZRvtWoC2bgPTSBhXMqhJhz9fxfKuM",
  "key39": "1Yyk4H7twLBGFkfPZydfkNKwrT9pRwQgQESdvk1W1oUqA3b4CRXiNm7PZ6tpjBzKhrYnKbXnYA9zfnYSbzXthL9",
  "key40": "kCoGmMapihQZUaxqbyevkekrgUeoLa7drjGibZF2Yqh7WGjrFEad7xUFNBZYtvm78vvjss5FcJBzk6pvTLFCAC7",
  "key41": "njBtSPxZQ7iamKWYr8X6X5myK6MQL8SfUXJ3s7EakbESro2guu3aMVRUFMugwXSE6d88mJxZgqz4Wc6HGjdUBCR",
  "key42": "2C9sRrTTV7YJUBo3Wm4RNaASasDuLyvFEPzKsmMBN1x7osnzLNiWTb3Yw1q6Vr9mBjDPzYaM72orD7xxuU9dSmAG",
  "key43": "3RCrYgkbcpJdUsm5KhqnsKFEPFHwuddbDdqijjz8qeevkMmT5NeUiyBYpvt6zh7tiGVomDaF1qaMAGgPP7f8NpVa",
  "key44": "59QDp5FscynUs1dB3gFtFusMEnSC75fBXtZngt2PcQSBi9wzo7ymFhFfGfaCDCqkmBvoW7LTDrVUzGMf7GXRW1FB"
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
