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
    "t5zuxtYT3fM4yPyj9rpM7JcUydATLNXM9GpqrSqW4NdggaqR8rmgU17s449sRN37qewMGigemVTpatUc1kkHj77"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZnmThek5qpT7mwQ7nFG7j61PjrMyWPT8EQhKRiWWySPLuHzMDpBY1LVvUz6CWXbQ5vXHbprVJ1dteN7rHuqDb1B",
  "key1": "YkrMFEs3ZMyfd5G6YyuoyJcB59qXmKX1pREHXA8GYrsyUYt7qvqxS9Ajy1PfHvWLwb1MZxqTRrz2eAXXAjaAXG6",
  "key2": "67pB2kcYPdGXtCgRA85bwAMcNMLh4BQNwZg1o5M3pu6fiqoQoWt3KycXHmvHRPUc96vxvXXuDNEF4xgqzAMqYsuo",
  "key3": "67P9orF7MMqGCUYhGJrGsqRZHL2PZrCU9RYRzyavsxj41xuGz97WVLzgvMKLwcVRVGFQgXRDpTi3LTyqEaKqtEno",
  "key4": "qnVBxbfmjMDsxVZCVAkDU4ibNKU3zvfYELLaJxVmTdNxt21gyhJPUeejbcmXLfzpbtPqR47icfCDMN25Ng8EWKd",
  "key5": "54Jd4vg3x4QXPnK2qsaiSSE9A3rGheqVx5NF5RhnMWSrA5fdp2mJXuf4sSCwkxyj9h7R1jqoAEkxuewXEWomiNjq",
  "key6": "5qq1y1PCfYoCU4gwKLEYy8TJgfgfTfXS2SPGURLhwvTSwQiKoUSpoqmgkKr2FAhq2CThYiPyJfVCWQuJFVh5WV1f",
  "key7": "3bD4d1h16LTErVAUpV4j8uiUbJsFEHxcnE5RsEt8recm4ySsQbRr1bG7y7QwKNesHMBSkSXz9efRUMKZptLwFLEz",
  "key8": "2u6oQNGmUw8b3HxsF64CQ9YMrkB9v6VhHUxngKKStjiR98n48oYVugCjHR6YXYZEpPmwmLaUUrDNBWqfhAm4ZYhB",
  "key9": "fL7CeU8aTCr6bHUxnzdhcZFNrDwdJR6ah6KZWrQCUKZDTYuEJt4BBQy7fNcZjtCAvHhzBPf74KD3FmtzRfMA1np",
  "key10": "51sgv4KDGijgFXGaXMhVvEexXGXt2jtQkpeTpR2dyDzWk5xeH9TQ3VR1BSWwJfZFqjmX4LgaiwbzweimhBgnT579",
  "key11": "4J4brQDcnJG8Qh4LgdNzYvN4KSqovyEXaR9GDqyd3MVvchV2ZD61sE6KNZjz9CvgFoA3WLymvVLLy7X8voNCuzdS",
  "key12": "27gQXABoVRH85NwDHtbwwAXq7hmA5M4ChWHiHschCWZJH1cMJHW2mZt3gvijd6MSiLMf7D7oc8hRrR8bkfwAXfib",
  "key13": "3v1r6BXmHvLwxwmajbYMWw3R9rCvMKbUHtvsqPXbWMDV7FMoyS1o6S9ZDKtPuVgMM3EZv5ZoSBgMeQMFABmAdstA",
  "key14": "3B9ZmeAXdiozhjPTAXspijQKpNb2YHv8s7WE5rnXhs8YK5UTdDnXN44zFjuTUAMo3JbMbS5HtJNRNsHomZQCW3j7",
  "key15": "5fS8XCwvMfrUaAUxmr2yPXUGFYKXKwVWy2eDxtrM6duRSNUoo18Rh9dgeexdKC2SbsTD9uj5LmiKapkBvKeXyCdR",
  "key16": "4Y7cnot6mybqhtebQpZ6cdWFed6kWXh5ZAa2cWgVL4UvJGmbAHTTucv4uTszEE6JpZk3KSmNjzAVFp4vZcYmj9Jh",
  "key17": "3vvtEWXXU129DtKsgLi4Ug7DM7CHQnE14noTGcySUWBGiJD3KkC9SNLoLhW2eJvTgiKHTiB3EB9o7CFBss7E3NqL",
  "key18": "2V6hBLAz4bH7R6TFSJGu5HusnY7QDGv3jdK2zb8KBG57CS7A3MKMDK3QGLhcRxQmfpjofsGWwksiLiCtSCVBFypN",
  "key19": "5p3JQGMFzjfWeas92e4EZsm5a2mNbRZQ5puRbD3hKaTeFiyt1VYnfPpwfzRzZ2vh2MScLF6hZv3GV57ioPnpg6i4",
  "key20": "Pjwyq3daZHsdJK7QRm8MWV2iofDJPHERVr5EVB89SN56ESg31BWrzaSdES1d5K1HWvnwit9TdWoQWe39GHDGYQR",
  "key21": "2yutWa4j7ZTab9DugUwg9KJPnHBiZpC9rwUDEwdw3Fz6QtBPxYhAPn1mCL6AqzvuDpA35y1Kfnon7u52nAe5tHW3",
  "key22": "4UJ7aNmZEGWkWXexcbNPw11K9Lt1SahD78vSh1uC4R4doEMbR546pdhpJ7HBa3uUbjq8nYamnhdp3bkRG2FucU26",
  "key23": "wtRk7n6anmccrFx3kvRwX4v8zj4WshZsZADxJSkByrwG3xjHJRVwhMkexaS92Emfp1pxTmrJaFA5C1S7i7dReEY",
  "key24": "2HS351eW6vggobGeEJd1TXiZMsSX8G987WY9x5b4xosHd4Y4CQggayEnipuDvqGw1ca1fmwMWPjU5AB4Eyes8yX7",
  "key25": "2itapp16wJaC9LKvyVU6Nvd5xNfAJQFDhpyiGBTs2VXz3kfxG15UYu3wq3ow6hY4yn3vUqupTQZeC1HZSYz7wvGf",
  "key26": "JgwYA5X2B5BtkUqznuynYqYjynTPvTCrgqhATSC8znENrM5sDXdk6Y3BD1AMSa4xVef8okduv5YCNKq57xy9bnW",
  "key27": "5pVjm1pNi6fHq5JkWanRvDmHnBxEsmmafcPQ7Zi3MF34ZYuB5mLLYNznFdiUKKK2dZMCMbvCixTNDePTa6gUddtz",
  "key28": "2bHSfp7UBgtAWqv6xZDWrqZ67Tbm5dZRf4BxAM7DuVy8pq457utiU1JKBziNM14y8DhkcJN5FN3gxPe6x5ddzbxq",
  "key29": "4AfLDbUYRjcG9WFYyrt3WJMW54jBfNexNetrJcqGETt5fsJnSJ4GTDrMSQXDFBFgx7xqEZCuz492nAaNgdddkrCd",
  "key30": "5oFi22ZQ7LR8z3Vpmr9SXagSDRWutXCiKXe7pMh7Qv9VFnF1jmMRLhDfYHD5hZWLAHt7DQBWM88y7ouyMtkESM4u",
  "key31": "2r4VZVnVrYYrRUaeg45Tpw5NEQKfB1m1PTfE6oT1QonjCeDXtswRLDvCcq5v4LGsnW23nEys4b9PnrAyRR1r8SK",
  "key32": "5Rdaniccw9y4a4DByo7uDVaUxTuHhK9WBkv379CopQ7hLFCd3vC8cqxi4Q7JupEQ2JCnu1sGHyzKNSTKiTzBZPb",
  "key33": "4qGTYewikaVvw2mPzGPmBcskY96UBzYupZTT4Dqspo6FTEL4QYPqME6SgaS1gz8NybkWfFi2RewjtWzD47rFXqCm",
  "key34": "4ZntrnxwBvA6tXeT9GjbudPWTtPHShmQD3BstnYjEGwCTdyLfoqsthtw6gcEGvAEboyPgGD2MDYphWyu6WU79YZX",
  "key35": "2Uvoffavg7CedFFav5oRdzn2UaurBjSnE5piC6MfzJPNSXSYX9uKi97nrDLW85fnFeR4upQJCyJCPHgV5sG2D6ik",
  "key36": "5CoMqG3UqWAirjKyNKueqvPvxX58SFdwAUTLSvzzqPvgaxeTZcmo6MGTSi5Z9J59f4YWmCHWaLK2rEtpvCEeVxWk",
  "key37": "AYGxZLPkNhtWh5qWYTqyS1Py57B9n4ey7eZhnN91t1z7uPNAnAtc7owdd7WTqrYf8WZHVNcuaqm5YaEfbnoumqj"
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
