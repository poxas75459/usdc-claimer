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
    "5LUvdBdbaHTC5sinykHss3UpG25Ttsb5Y5yK3QEUek65XAQ1mg7sYmp8morJRW2vrVKN7Cx4yLBVQzKMoZQbrNvu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZNqxtaNz1cULVRJdghFptTT2M4pU9vaD4X6SXA5BSmN2xN6jLE5XVzaMx8h4FajDZReTFrzdCv8U37PzkdKWTQi",
  "key1": "6RNYxfBKhK4zJWjS7jMGx3d8rHpYrok9oKFNR6L1YAyYCaxjsvr6Ec2xmh3NC5VQAzkHciofxb6hm9biw8jBnCd",
  "key2": "5RrYCmGpep3KSjeKy5oKuuvoSDqD7ByTroX7MTsX2zH6J8wUPArrrEHs4HbNz4vLeTchVJJaEriiudfPyu6yqjhQ",
  "key3": "66hdPUtRa741Ze6UerHVoB2vSwToBFwKV7N7xo9aMFX22DZHxeWFD1nJr8JUUw6JVVJV9hrqkcDu8hALQHAYwV1t",
  "key4": "4fBQGi9s9t6tVR6DrA8aDBJ74ujc94Lm5gBAxdLaqyBJQGWUmKGujeNiA7AePHY4RmzeHGYVBtQSEWw66J3CxmiM",
  "key5": "3Wfgy6zUJGgCpgdGeNGrCnVrecaj8XBdMZyANg4GuKVsP3owTFG8HhPShryyF4tp9uHDQC12SKFp7Ro4y2MRMQzH",
  "key6": "5YFHnmkVtnhFkymrHwE9bwT7UfRZ163NcPz3nqsCQajW9Jmjox2vRWSKVeBA3vLv7DtvapiGVqj3tNt4snW6jMiZ",
  "key7": "2YEmnFTLhxy4kegPFaf5NdmwUaFTqMdM6g1mMqGCWcm15qFAENXyUv5fKPwoikoArypFSZphDdesTrFHTfv7HKVs",
  "key8": "2LHWCFPcY3nz4VqxwMowJbQSg8gmbh3gYkfFWuRTo4TjY1so846Jp3GRgVAonQu5E5pVQPp4yg329nR9ugGmq8rb",
  "key9": "2cMV4JqnrUzUUtPE19UVvepv6Rb4qdFLaPCtbHANr1XmBQxRRh8CpBNYuSfgcXQVQjHiRVEj68sBZZStwJf6wyA3",
  "key10": "3p8sRaAheffvtkZZJpreek7PVJV6BpwBNe79SSBuTHJBCaz4g4U2zoek57haSYBB8Z6ZeUDRUVftij1HYWCTiJzd",
  "key11": "2dP4FKb4cZMhWuN6dvddHrUv5f3rXf5qsPnGEDW8C35vjDXpm7yUZtQ24DWBHLXHeuv2vzda7zM3VYrWRXzj2kEd",
  "key12": "SVumfAQVdKH9FhemQ4sqazsLcUyQAuUft9HGsKvpcF53syJspECV9cfhx7QXZNXT72SyYyRncYeNDorJiA3sErC",
  "key13": "2BM8KZtv8ZeVqerSMQWF8aAAhSo2NDw4LUmTbmpqvWWU3MJFRNGzNqp92xo5d9WKCCqDRchrQUpqFf53DBQKd3o",
  "key14": "5kfQXY3LvhT41M8GyXSNwRu6jc9MVW1w5JBtYAUgQBxqfvur7a4FSdkEVrTsFvso8QKqSSszfqWQC711raYNkK1U",
  "key15": "3f4JQsMicUKkPAaiCBirFkWReLEojD1HKA7Xd4zisZ4uGh2MQKq7vifzQLfvZZQSLYvd4ifojEz8UTpMyd14Cz41",
  "key16": "HdYv7Hvh4WzuXhVFHmM9oZJWu4tb6VqubiRixB2E982iHfUsGmotrnfvuRLWiaKLLtVd5GAJztKt92F9mxLP4zf",
  "key17": "2Pd58KnTUZoY627wpMDLjnpxCwJcPfXoXUbyjnXK93csJHVvwJSNfgSUWoPmi6zeD3oSW4coSaghqBDKAhEg7w9r",
  "key18": "4bMh1aEtwXXPEgd9ESBoBmS6pRxzoDdCSBkSx6YoTtm68WqenpoWgFcDinQJKkuHfKcjuuFMV3cGgNN2AYn4hqkL",
  "key19": "4z6uCjkPS5ArXoscfPnptWeFJyQLXmGpotURYcwBNkThatX7w9iEDcJFgmSzKsXDQi7VEue7frdBgwRxkJm2cTN1",
  "key20": "2VRYB6Snsr3YrMwDut3wWkFdHStufJt9p2BeU1wWJvWpYb7g8RyWpKPzXPgECeQkTHNz4Uc7aYunTvNcA6FT8MbJ",
  "key21": "4bdvGtgdg2F4TqkB6DLSs47tEkPz5AXe1Dn9de67vGxJYynyVphxLAC6aDMkVXEs2ubrWC519YHkTJsmqwEsDU2o",
  "key22": "4gjgteYaQHDHTsGRoskEqHV3M2U58UArjRxHU2xySG1Rf1LcPjwYEPHrUEDStPiRVfq8jK46bAQVvjgyrP9dU6aG",
  "key23": "4zVXjbtRiqdGq2TK8pMXikmtewDiPZp26eZafYRhJbq6UdaWLyphpW5ZY9CqH3BCvxjoeCKXCJjyyrSps6VKYDEx",
  "key24": "rSmVqapiywK5qMUjUmDFYq76D3r11N4yExRn7RZqdz23Ez3YB4yqBAy8fzcdRY7zFRTpxoTYUUX8QUatWKo2Wwm",
  "key25": "3GYcvPMEidkR2eDWSfJyNUrSTWQN53UzrnLdY64bNSDMgiRHF3SXuS3TzqXDpREhJLTCsboYC8eDkBKRRVMnWZJx",
  "key26": "2AVQNA5G86NLRSSxbJ87YKMwWNvXnDP5pAoaH1LM8tAXx5dAoD5aT19bXAAMT1BHhRxMadMrJKikfop7AgAXfJ6g",
  "key27": "xNKupjynjrN23xACB9PmWGF4QMAtCL8n6aDDcABYXxhJKJyxnpeFiU51uPi4gpUWTza5PFNYZbwLw62diSVbJEh",
  "key28": "AfHwQc7fUvN6VTDGp1yQGdGqMxdD94FfsEDeLuaYTbrcAUEMwByu2XgoNaVAnFmxtPhHbHfovYCri5TB6e8zbmP",
  "key29": "38YdEE4xRjEC2YyuacWBqjXBrPhSeLrPDEKSLdYTNics4Hf1eE8xKzMja7u2pHWxrCJLmfQwsrxWWYuUrfy9ywUM",
  "key30": "2ojhuKjMLw1e8ybSTJJxvhbBr5hE4GDzmt2fg6WVFuSUvEPTCBmuS2QDFBSkLFk7TSU4S8qCpen9mVvUFxCKqfZx"
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
