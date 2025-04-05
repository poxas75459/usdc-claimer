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
    "4A5gSrH85mLuvC6UvKbqFjXu32k2MKAYZx2Ef2s8wDpGAzzYAR39gysK7vCSSBGPXcZJV6mpLtuhXS7i85QBNmcB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62W5PY1sPFD98W5PXiyyCheWUSx5edbEuR3TomPgHffKDnmHWyDdaPACMxzDaWUiEzN63i7CXBxaUETo1Vv8v1Xk",
  "key1": "2F2WeynTPiaAWSURJZamckfin2cRP8RJkFWFrncGYjRVUR4QoJdE6fvZHtEvXKKMZUy7TMwt7KbZjKdnCvBXUjEB",
  "key2": "5fFVrphAgFuhBFEKpBCuji5N6pGYEGNw2Xcqfj3RDzVjrYjjhXzp8S6yyNNTMrgTfGJYcZcQ6KaoQNuX16Xddjod",
  "key3": "2JJZGE2f9ZpFtiRk2aqsGSY46PZZPBHspbAsFehVEy9wbwWmReGR8UaBGVPQEXNCjhoaoWfRPPjL85CpaqCXtvJj",
  "key4": "CSen6Xz1WQKSh1nVKvoY3zpfrSCvzC2gsnqjdB9WKxs2A4Lnri5AYfCg7fWPXyk7aruSKiCQdhAiYCExckXVsks",
  "key5": "32ZaB1f4GfoKeVY156r9fsmmw8Y2f5W61Qy77nX5bd3dku7QzZL34WU5oPw4f8CXrB8mySUYzHWKc7trPquLnJNx",
  "key6": "2QABbKYmSqLmFwkXUkRBWV3mjkPCmB4NGbAr8a1emEgESxHCeC4M4dQGEgKwuGRNg5FPawq58NCzrPmoEEV6AGVt",
  "key7": "22cPxEarqQewW7Hc5RJ1Gqwn6R9gLzFJ7AyeA1F3uhoCaknUawUGhLZk3ssEUbPbRJfm1otPTFU7FaH4ovHDV9e9",
  "key8": "655ccTQPQCzc9yEB6eUarrBEtaN5VoCmwzKi5W85nAyLHnX5mQikD7Qe2L1cM7dzuTw32SQSYM9q51GEFFNowxtp",
  "key9": "5gVKQsP9wV8HcWtihnCSh6KWjGYEZiKg8HMV8zvaN1wigYR795STRErtEXv2rucsE6kRoFkgKRPSyvnfMe7vS7JR",
  "key10": "42iJ99p9BCEV7Dr1Tt99XLdunAF3tF6iRQZ3RdW8X37j3oSv3bRia3otTwoVF4Ztnb3B6rsQru91JwUioWvSZ63v",
  "key11": "5H2Z736yV8p3nF69UkaRALeGnKLHcJAJFgjNRjp2NxJ2k3w1mX9mVwF3CxvDLBqqXhnhb6kaBo7drgEyJUpSEHnA",
  "key12": "2WXnymjUL3AA26kCA7UfNtAkw5odrr2RCwYwQyuvkwsP52Q31p743hi5S2begEXjsKjsQgod8FLfW2tChHNjZkeD",
  "key13": "2fywkzpRKMod6thJ8kSn1Ks3wdDym2HJD51faAQH1A6EQLQ6qaXcqCSsXtUXoekCpzML4XyMS7GYLQkqVUL621ZT",
  "key14": "5orFy9sQTBDwSU7gBeADUGZpadfZxs62KK6UQB1uakq7nMs8VVVuRatRZJVTFSvjZHg2qDDTf1nXJFe6jJd69s3j",
  "key15": "4HbjdNtKCf6EQd2Z6jXcMtTLyqALnusLHQQHYy21GesXpYHdBK5FwnmVa1wMqsCf3b5qmWwkgtTPrYyDEPhoW12J",
  "key16": "yHuNzD5QXevm7dq2evRZLXPHDVv5NzCpFXeQZqVgqWxV8GzvRVV5SNJqXhzR4HmVA3bJGKBJbzB3A5PbXJeixu5",
  "key17": "32su8ydirbLPVyoMxyPrkyNE1eLttgzRonnZrESS5633Ctg7pDXSQJpcf8Jt9boNx2nu2mJdXFdjrQCfQDi2uDPW",
  "key18": "4urcdv1Lxm8h3NmVWcvUJjdQDPuRXjCjuXc5AoNeocgWfV98wFkx7vwZa2ZAUAfGX3VCGe2gxZvktT7xkbXcR7Pi",
  "key19": "4qhtpC1rj8xnUktSqSrdwG7r3LjR6dvsRxQiSj1mCWXyeCKS1eZzH7U1dM8BFHChEnDUMyT7cHo3nbuwmLfkJuzN",
  "key20": "2VVZS7Qt567Tzq6U9R6xaVwkAVFDng2ScBrc9tBX3i9GWjucpRSo8DPHfJ9rHu8NNrAULqzMBtV3QobJzmeHK3jw",
  "key21": "2GQAPf2xTnNpqX75qeWQs7qU7va2GyL4RUEhcJnLC1sGG7bxAs2NRHsYMQxLoHq8LEcdrGvwR7fmU8zoysHp3UX1",
  "key22": "bnRWWDFqKkMpesSnhmweTKjiB1NKo3fvj8kUjVdGNduhojqgr9mP5r1caryaBvArSBxGYAE7KEEtH9ySNM5XCQ7",
  "key23": "4SA8XkVijTNZrrpvs8SyzHjcSDMNAwhUYW3hXVo4QBFAXSfFhQA24GThTNP7zMzxNnXDaj3Z5dYVSxYfTumrB2Aw",
  "key24": "EVcPLj1UrDgz7MoGC88eZushe2Zd1RPQ3B4PUV1ArmwnKvVG2xdVhHSpNMskXhgQVk8YJHv1uFZCiDusAcfkEXy",
  "key25": "3dQCB79R5HTB7RozasvDDJQerydkhMvbFQYj6JbojAKd64CMELKd9Xd8Hr2pGeYCZYWSeQbNbNk6NHgAtw6LfKxs",
  "key26": "5x8UuqGDkFnV84KJX9kwDcDnxDWTswaArUFLFk9xE8nmDEkCK5NkbZbABTQunJgek7GvhVYxM1t2o4F8jvZkKyUz",
  "key27": "qEDUvoxQqxEKhbMwGticGbamR51BYMF7Wwp3qS6SkmiXT4rr8jDqtQLjSUdhcPpdY4YW9gwBZjbypczutQ9gGou"
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
