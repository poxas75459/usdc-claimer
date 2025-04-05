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
    "65yw7Gh3PJjzsBJXebJwTDko5FDZA7gpDMZTUfpbGuauMg6vyDEieSCC5gAuJ3ojS3DqXzYnekjkaoo5tBjS8UL6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RGzTUXoZdrH5TNk2ALFeU26DTXHZ6m9HUkkK1Uu3qmbowkLqUnnz1ccq5vTkdqpZggagpK12TUgP9VP2M2aeLAf",
  "key1": "23jkEwbRDJ4zSFLiJaJWTRYBxFg1rtVnRH9F7E3V1CR9CtJSwxwoEuuoqXT9MK86AATWoksz5R4jfZZjmkX9LsuG",
  "key2": "3AgsXpcacFCdnE5NmFs1ajznovYtjLUsHrBuEiKLEYwXpwdJMAnLsKw2M2FvZnK9ANYRhrz4LdVFhbPwNxb8kUjA",
  "key3": "2kc5ExKY9w2kmri4bsJQ19jhtVBk47uP95BdS8X7M3UqXNzjJpCRQ2QYjkH1JPrAFgv5JZXWmysvA8KP92XmChf3",
  "key4": "4Y96ozisa7VrsomGGbyhozf93AHvcCHP73UVnUqNo8qLQpdWjzyXozpKduHZcvWnRwu4PMXXCwRe7WzyKtQ1YYfV",
  "key5": "CvUMyZPhtudwfUy3ggFQ2VPtAuDP3EtheVMm2AmFiAfney4MNAkgjNuQe4UjGoM5WaN4g8bKtCaCsvZio8HmVqb",
  "key6": "4XdikWMUXuLAr2ZRdrCera3c7xFz69rBcNAiCggivnZbTwpcVeSesqScfkSuemVtq3UkhbkdPKpHXNVfwpkR1gZd",
  "key7": "5DcmU1RwmdMmPLqQLK2XMZnGCyzqokqVDHapuN7KF53aZb41NziGPDNcGdbfe4hecszz1sCD9o9xErCc3UyNtFeG",
  "key8": "36JLha6WZKPhLJRCckKtcMCuysTdkbNp5UbMCAjjB9vbr8gAwDGwmqT2yrw43jzYjyx7nS2cN5wPGVYyGkHvDXg5",
  "key9": "5GqJdfhEwEBKwLbJFDtPaK59oc6wk8KuPbxaNCfjpGdo5GS2D29ymrapA9Euud1N435m945N39TqrXuoNPb1NQgp",
  "key10": "2MDE6hqE5trzPiE9NnmEdojVH9RhPpU3FHtF5hFYUouRah4D3SyqKxcubbpxsz3FYXA79Zs3gwsXnoVrd9xL4nbF",
  "key11": "5anmp425ukh8udFthTtttFvghLfNo9Xrpq9FMdpNFr4vsNJ9itkX3ywq98NPGWvT8vj4J5qEMweqo8UcsyhKnLFM",
  "key12": "4eB5fxRuEB8KRE2hxLzwqNruuKD59o1JpqfU335CEgJELt3UhQjVBdAnrq6KAH7iQSN98pL6hY794Vy6rpNGrSEJ",
  "key13": "5hJmLdGcNFN1bsV7z7LkHFRBoHfg4mEhsw8yjvoEebA5oe11ifE5c53xdEwvvAy8Es1o6GeC2VEf35XScu3KCbCH",
  "key14": "4LpnRsJoxdgFfTHpU73zhmdAWqRkas1yVcN6seWkAx7YfyqPVy3qu7oS1FQzs4kdHV1S9y6VFGXMcejHxmLNX1bu",
  "key15": "5pvfKgARvpBa84R7poGZi2gKFPBbSXRD4Fa9ok8X1va76576BPzWXxPU6noPb24HzWBRffxRgYFKB1VxHAvJkHi1",
  "key16": "2KZjWsoKgCyCdf8rCMq1izZk7PcUm58iaNyxHcqaUWTV4mCxxtcV9WpDBJfWiGuyV2ieRpXh4wNW3zt8mDQVz82E",
  "key17": "3YeEe14xjr9MzPfTBdiKAW4YDtADGJr9wd2vqf7QmTeB72VahcDZnvF7t2Hu3iojdBj13GySdUH9M4PJwJL9nsDH",
  "key18": "5WxpsjfZ62MqM7m7HBPURJbyP5s45vekRDvbyJXnxhc4nVS5tq5KZtqkGQhJnspUtpiUB29Qdy5wuS8i5jJuxozD",
  "key19": "4hnRcsucHpryUgs4yUFg7z4XrkRP2y65yfNb7TtzcyaSxCvLw8JojhAAVfBcNyQQkRLvUSB7N4sErbk158pnxYii",
  "key20": "2EeWwtkrPGiwo5oStbm8iiu2uDcUz6SqpdZJk2P3Uy8kv6g5zoa2FjgAhDf5zjXZ8eVqoPU6F8kW89ExRJfL2xGk",
  "key21": "XJPU639KmutDqN1ewmKTULYQZGqnpZnFLSNEStGQWoQkjhfYm1XzVC6trTGKD2qFEj81s9XtT1ZCvyjYRPPVpZD",
  "key22": "2F7qbz3NjXwJUD9AWkwzBX4uaGeMKbraRrUkuf27Vs9a8ntSy1Vs5BBzGXei7V5zJUdwMvmFs9L7sLEGA4kFMuTT",
  "key23": "2mW88SdFRJR1tu2jcqoD1vnzrNjXx4C3dK1TuzqetTsGmWM9YQzLxAdLHie1yYgwNgPfD9goAFGjQGWVwTkX8hoN",
  "key24": "2eqayF2p6h9pKLj5EYVp21b2Dy3gWX8mYvF7J6SgAEzmj4dY7pymyq3t99dkbf62eBhRkokEanC4mGLrCiVkDE5F",
  "key25": "4qBJeb6FLGFxEyquU9mdjjXkCmLxMAuuNcZGJiYPsPSM2oaqPMJ2Ebak1QbDuc7tfajprwUjtUepBoeVGqBfe8yt",
  "key26": "46q5msp66JGX1SiVGEjxLHHh8xpQK8ak1sDVQ8Nx4wLcKGiLwi7LouM1rB1myYUYfEtBrUt1YAPy1LcqW4sFWUPg",
  "key27": "2SW6QKWFshBWacFKXR4HqZRxXoojZK3JSxKc7ToVd86FKcRC6Tdpsyox3Z6E2MtT2WRhedqsKqQEMe5XMxm1HyzH",
  "key28": "2A243gj1UF4HEMrfTjDg4VU4ZhAiPqeE1X9ThnwnTKvy6PXknJ7fmir9j7BT92YjEhxQkXZNQuWtS2vLKAMzkiPk",
  "key29": "5HZaBgqqkMiA1bgqATWQGFG4vKiyo53gvD54jVcdfv7fH7m2zVS73WRJDxMmjmsmPvssT5zpKktYhXX2XQoSgwDQ",
  "key30": "4Xvq5nPQrrJ9ShctY9iHexuKr3yxq6V3N8jPUWM7FuGLC1oHJaWpv2qoQSKUzrEBNFMGRRMceSUArsyA7PzCoMnf",
  "key31": "5Kx88zeXzmA6HHasDwiWRrKEUu2hEMBk8XcTqCrx65yweYnuNrA6yuYWs7vyb9rJYv5jcV9DfRhHpXEFDtsMH6SR",
  "key32": "2zYe4reLMDf1eKzmZbgWsTp3rwAVwo9Ah2UvRT7PwTcp2hKRufQTjtfJsDbCxwQZvRqQ4UWT6E53CR7q2gCUeG7Q",
  "key33": "SAEF9afEJdi3WYnDDp8kCg97HX2ZTkhpxVWBQz9N6iAuoQm4zpTVaRVydWv7VGq6se9S8JFz1fp8ZyEC2sE1W68",
  "key34": "2dr6RrU5p3Fbds56LFq5cvfJWst6HPaoQbnYzKP2CBx3LmygQmPeQdJfGqfhjhiEfFEJoSS7DcQw1hHTELym1WWT",
  "key35": "FCUBM1aywZG1s9r8U7EqFvmoG4S5pVimi1MNaXmS5MhYj8NaeyStbqXAua1DF6pWbcYKGL6CxLTGt9Dok6Piri9",
  "key36": "VWjo5gp3geWHw6XYs2ZX3eMGfFCSxfADC38SxHU5rivfL7TXSVpHjrJjmfYjZ2hY2T7Ly9JbCZ4LJgfysRWCgkp",
  "key37": "2CpB8FJrJpB95vV9b5J1ywQbzJGJE9f6cUZ95PHLtX3rYUoML7meV9SM7zYxTEXpCgtKkJ5Whp3DSiZM4qNKwC4J",
  "key38": "guKAyZ3yEnyD7vwmUwWh9J7yFh14LDzak2qmjJyB6SX4vydbYnULWCFrUwW64RREqTMyVpJWWYzzK17UYa6t3AM",
  "key39": "5MrvvTjqEdWJML9GUnkhpbjTb8aiz963m1FhgfDSv4WMBguJ6UvgWbf5eEy4oRAxqaTkq5mmPH2y7s254kNSEEnv",
  "key40": "3nHw22V84PkLAsmaU3GA1BpADW79kJCEw6KYZsJLQ1QHzVFic22wx9zNjkooSoxrFaLessMiMF1NMDz2URu7dDL5",
  "key41": "EhJi6JXPLgnfJ5RZM2N1J8rPBcCCK2iwdn8KZnzb9QvB4FLTTJ28B6cJZ15GYsNK7n1G3hsWHzMg4TfiQq3Jt1j",
  "key42": "43S4Bp4gQYNtVpiKqgD5nCRNW1Fs6StwBSrDhJNbHFcVF5xZTQHMCHcgcumetkvmcVpr9VjYFdSUU14wzREHVRX5",
  "key43": "3FWzDt19xiDqjAQfnfh7rbcbNHhK5ZcBxmwiwwBUZphoWEcLfNZXGUbtrbwWyX2NfmAyxmgfeDNX9zNPz5LAQ5it",
  "key44": "4Wj8xPaB9i8dGXo7LmVDC1W8PzoRvLMdR8Vud6AbvNKzQvtRCpEuLvt62C3i33fqWoas7NTuRYhNdxKZV8m2YqnK",
  "key45": "51dByKcdJc6yopQ5yaFoh5qBT1aizU6CHEsiheSjUjFrAAQEcdinQEiKkAUqwpjhMQ2KrUJxVEc46fr3ezioS4dZ",
  "key46": "3odWKCB7BtjcpJiNJLTbfjFtQRpzDkTM4acJ7bMfaw5caGovhMBScpYBJq9HUdD2684o6HV3AQXfyTUjPN55a6jo"
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
