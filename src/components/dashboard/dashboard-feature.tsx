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
    "3Y9fZnvgparWPSYKKnWeJwpTu1VsXcFzaxbEyiR32kfp7kBi9VMMQDEmgVnBzYkLXuptK2QepY3vHsiVMcQfWnGW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52UiUxeWkh76bK2ecRJQm58ZSA2vzkQoHeErXJLVPLCkM6Ue3hGn9TCoxBZRCrY8z8NXkhSAWsMDAmUKWyoVss1Y",
  "key1": "5BkVA2Gnje18mSTB5h3pLTPG9fh6kiRBGBBnRr5pEtjgktYHsfxdPc2xq6vivBvyqfYyt3jE3AYYT2ojCTRxTTek",
  "key2": "3SfpSmys3VerzYzEBQJvUMu3gA7oJ4795vXFx75tHtvGWvFiPi6kdK1cMB7n1iw1jXeEW1F5n8LMN5WqvrXvBqZ6",
  "key3": "3NtGTqd9Tbiy3FVVxchSzgccrwrmcNMCNmxcSWJEPeggkb8ykpvW3PY3APysGfD4qXYzRCURwGLiga9oituAZGET",
  "key4": "4Cyw98a8LDLHUMy4pRdd8bxdZzagrCy8Yk3EYHDfvxgzkeP3RfhV98uhJxj3pcztbbTfyAt388n9aUsafzrPDF3J",
  "key5": "2qTSgf9SDztsxjh9dyNcn3ZVVS2S9yg74bBNkXuReVgF8hLEmHuip9rWL1t18nLfq5bvRwWaKguutg9PYhGKtKLL",
  "key6": "5vWjBfQXYzBCaF4FqZLCgJr6zDEW9SurQzFdmDh24z1Rt7iSUbb77xwuUqsjwinQWJ2XBCWpU9uLX65YCAhAMcfC",
  "key7": "peMLrmcbRXJP2tj9dLxUXU5CqdxcodtKyfnfDFiesXbsdwsXJkkucrAxa6Ve47K7pfAZfWZbETB3SJad2mnbV4G",
  "key8": "V7az9Kks7d4x65aeGWuDcJufFGPfmbZe7HRNuaVud82rHecZogbUfpb4jJnqVMs2Vu4N6ohnu8MSnUP97KvQEbP",
  "key9": "4iYQwdyD486ziiJssnEVncDC9frTBitr385g6zg3NK5bg2ebZNjTkw7FP59a8tS2FXVNtWkTFQS7bvWaBDDCBjRC",
  "key10": "L2CPJMPZL4iJP5CDQN3CeVFkh5dCiiMGJU411JDMT6sQh7gXHd35jCVAduYNHqMDkcvmLcTW5E2NjkQVj2onqnB",
  "key11": "F9RQHfCry45z8wHEMdCrV2dkAzfRqpdNTD8svKJ5XqWRmnPwmAN4D4wDJ2FzFpWapj2iPu5E1vDKv6riG9xEVDm",
  "key12": "2aRphtA6mWJDCLPu6B5WzBkt9w283Ms9kGdzSEqaMeCQiLwMiLciyrQMTF27oFtUu54moyFXtmdSW1qgVf18tXsb",
  "key13": "4nPQu1N63iSr1VQ7QNhVw9QqVaJoQhjJWumSdyy3XCKC8FXnHogaZQ3oVkPpjEtcU6bWmqnq7pfto23wG4C7vcPa",
  "key14": "64n4Qgp1jWHr1iwoJUgMZzd5USazTYHStCLwrndVLQVWp5i8Df8PnVvmMgu6Jv4oFv57WU1t3vfM3A4UCV9USUqE",
  "key15": "5u79s1MZqhhHy8FJEsShcYgvmBPSt9XdzZkDB3SowzckpNktjrjR9eGqm2vbaBsFki8ozvAExmY5qGmEX3V6CHVZ",
  "key16": "eoH1P81VuFZe1uHH61cm2KKjU4ubwgTwox69NsXEUyJ51zKyE296sSj4Qj1rngisbRhCwCepckcgjBms82tmfsA",
  "key17": "3JN2PgRVdJ9ADvY7a3LQTvDYXHS92zUzakJjXUTvQ6jcMt7TRSvFPU6cgJTV4cMvrQhEAtk3kRw9jTpioPy8n81P",
  "key18": "2NJPs8QRVuwKga4XSwGJRKX1dteWJdpahczh33iPaa71SjC1J5XaeTdv5dZ7DNZJWW8YqwWHdDxAyEJFuAbz8Tu1",
  "key19": "4cSwwZbuZrNzWSNULHGWMtndSYdKotsBk4UQRhCzWd9ybTd9vEHwf8G3Y6EKr2W6QWoEjk3M93f1E18URA59RiJ9",
  "key20": "2TTwHdwnS7hjkwBM78eixDBbpRGdeNMDxKt622wE66rxQeZ9dxUFfrzgb4AP5Ey93cX2CGKdUEZgcuUQi9byugvc",
  "key21": "YKkEe6K2CunTuAJ1iXPiNA8ywJCEMHizG3xYk2yrktwBEKuXuWheg9VsL9CKMXJGk2szNm2RMf9WKtHFbGgAHpz",
  "key22": "5CU6nStBksGAb9s7NEEP4qYrSoEMTSwc5kUYxjQmAzwF53HA3vv42BkqnJHjotmSnogNgd3XqC7VFgaNa8HU37Wa",
  "key23": "4VKGvvFUmxtcas1L45ANT8jHMqczGYYC3udk9WqF4UUaaPMmEYXpornzXSPqW8TihP7Lm6eHiufTipEehscMTZxD",
  "key24": "5QwE4aGSktseNc43ErrS6kTkh3AmUt7A3xavJHArfEhn96tazc6nHMw7d7pdq1xQVmqdctqDAcF3i4MbhHFLwcnh",
  "key25": "3p4heB5VYcmgZEhYkxzdxH7fHRdhKHPSdk5Z11mRbN3LSuwMgzFanDQ8kfVs45B8oywyexqRtZSiKcMmAvN2UxYX",
  "key26": "yeR3kh8CTAyMfih5BLgUBzhkXYHsio4dSGpdcjZdLsQbZTFcHTTFZjN8NpL33jXZg8keiZm22AveRLR9TpG5vKm",
  "key27": "4rKFKdBJ48Q2m3BLMhLuuBQsFgwgBBpMs6UvHDVYqpHPsuJet3wiDfo3eqKJcEUHo58jgMKNQbDDyEquFJfhQVpR",
  "key28": "3QvhxfJw2G1tNZCu9CH5N3PNu7e5gDPb1Ps6mrtfmWB3fMjF89qNdFBkuwZ4ibgkhXTrknbbhSXzZX7m8suwPQxB",
  "key29": "24tWJJVcNQNSJDkqKucC1oCNYmyem6jrhHn4UCLqjS4WwzEaMdfyWLCbosd7jGUAVqNHKPWphoZYDdecHEYtQQCD",
  "key30": "2XWeT4uzkdidTRog9cpho3YhyPxu2SEjAzsRtezyQpCYC4db9aw4dVBNNu2Q6Rm5nzFwSfwPvRh9XVAG9vnPi9ZS",
  "key31": "3bkXM996wiF97Peprmba2LxPjkUnvNi5SSuFetuSPLpF4XgA3AwLawfUf5sZQf5ttbCHRpmGKK2SGzpP6Hx2ZoP8",
  "key32": "2aaop1rHdbY3QUDJi4WuA7aJfExgWR59BokTYRr6uBrWXjvmncBnMr79YALyH6mN6oPav5epgTrhEQnyGLNqDmzM",
  "key33": "3LvpHBE6qVx75TSpwf7Pd7H1Cy4HEWSRqBkJpTDw9HA4KA8yYCMGbfqeKUc3JVFbxoT27pWGPReiAs21buLw3P9y",
  "key34": "4SFHLgVKmeHvhm6bJMUQff49z5rZa65SnoghjmAH8eDNzeGxNjvJqxEu5RneYsuqGyCYwLBxiQ4tMkDzA2rjfEy6",
  "key35": "VRgRPU3XbweuNCxJGVQNUTTPh8keTAoJBUurPeL1Fd8Ma5umdf3GqxYpn4Xnsz4UYsfdAjcjvYEAvrHJR1uzRWh",
  "key36": "3MmzAEJZxUASa4GkD8SsWEdvKepfvffLxgdaRkYWpDVHK4TeyJXULZJ5FNKH14v5LdNAqBvSsNgeWNBv1YefuFSD",
  "key37": "57T6VtCEAvV5Cj8puxJx1vtq36ioY5R7hYMBYdCxgWPNAhsjuwCaL9dofLhTqA2F9MhUv3xW1TMgobVJch7rnBPL"
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
