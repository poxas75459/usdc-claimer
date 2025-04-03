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
    "2qyMS9rN1pqCGoeFzW9XYTbfAhfMWioRMtL92nWiGrPY1jrUy1uUdnui4nghxfw8Bb8rf6Uw3rBzT9EznpzN19aU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41Xci2WMi3CeMeYo8QoaNHy8SStD6fduV45hrK4bj4iJib3PEf2xz65U8oF9vTKKhnt13Y9dQtK8pcqBUKYq73Zc",
  "key1": "zY3tV5gxFmRLB6djHxAxfV2Wva7gpZr6XmgS6k3bsDNXA9wdkDkzEhSQ6gaNawf4Q1GBPgj2qaMy5cCAfGexra2",
  "key2": "5HqTSuPhaTAM5mtpXydX24PfxwmXGvVDwKbkLtSWnCrdZo9yHXE96NHYthhzwaUcLrf8vcGY5zFvWwUZJkVyrQL9",
  "key3": "3uKzCABpxe2gBAKNx6uaKgnsnr3MzPVLduDhZqUeZLhQ6tE5ABn5VPQHTcLxNz6j8KZYzJEYM72LoquGcySdLX31",
  "key4": "2a3L844vCyuWB2vatfX1k4nCaqaxvKkfyj8WNtU9vyFwnhT2PPA7b27tUNdwvJq18i3xFWBoNsSwhGnwqUNQTa9j",
  "key5": "2AMCntTQZ22mZayTGj5JQQvB7kDCYWQ5cpCqeQVLEzRno9atHX74anU89T6Na34FBeh1AyaggEn4mttp6oof5Faw",
  "key6": "3TqHnZLSrrdUg28Me1WzPXwo29sZbPEt38VFjEPbsTDeHre9HskZSuTmFNbnaqtqJeFWmsFxaztiVbBtEjGPPpR6",
  "key7": "2Kom4GbcZ3FJYxiR6kcsJcxbXDyPrcTGi5PDmXbcZgJVFG28rpopiacTjtY4WMWVnDvsDnr4KixQztFmTsBU11QA",
  "key8": "2NsSvkXAZwzPpghRPsg6PCRzDsL3hMq1LYhW9iBEDP7tcP5ofoEYePU1NTpWBWenx8yXW5RBoP1PxG6L6YiXdHaf",
  "key9": "5wZaQYCS3BxCHNk4RZM7SfpLap41uzVTT2pfoqRj9896ayYixkZEsrJSDGqciFwYcVE1disk6QkfKdeLMeZeRKWf",
  "key10": "4ZXb8TUVUDPEX9kHe9Gf5Aag6vArC5yXocNLksVfMY5Uo52Q2fMFdUS4byr8oRKvNqQ5HTFdQVH5ymqYMp6XttyF",
  "key11": "3ECxSs8L7JD57CLThfSdZVVb7JrHZnfxLSJ3QqA9aGZ89cxjLVWa9Cdj5BUwbMUUxDdzZ3SJoAMWCzidJavD9VGk",
  "key12": "2An5P3iHKfn5xnEwozhvL1hzBG4KgXozqJidwYKVYYCrJjEAASLDxPbdEqxfmVUrDsSoC87K3Hcrj4bcA7nkEf6M",
  "key13": "4YWv8Tsbr6cUpYTrxsNg6t3B35VXN25AhLRpbCw14WAKW1hrfZbSNpn4Q6veuc1zZSmkHZEk5GkiacTbruv6F5Rx",
  "key14": "63FP6qA1Wg2AadtNu1GtQqmpcWrmhQPLqH6NXmCowi39AbvrYTMb1U18hbX1qpir58gxwWtimAvg4iSpEkJfnb91",
  "key15": "4uowNb8eaR1HEFUWb7FsWGwX7PgvTaSH57aFEXZszvWVYQ32w2RDu5ni9EUVE9xkwZRRQiRxYLyAgyHM14dy5EGm",
  "key16": "4Xr9vKTpyrGyEKuQy7mpGPXjfUKaGSUM6bY7uphJL4eNtUJrzvkLJyFiTQMr1evcx65toxirA1ZMR1sTafKyGxFe",
  "key17": "2xA7pyzVMkSCsTnAJ1JEWcVEfirEUwSbM2mPKC3YBDsMsCuM37mQJgCr9PsTh1vmVRzH8yrRUKJAhCjjPPw7Fvyn",
  "key18": "2sDDGApQVYs9xVbEVCZwdeovWwxsh5muWsNbtaxk3tBYBaP657E7hUdYSRK6N6y6sb6Z98sj4FbdRCGLMsC1Nk79",
  "key19": "etwrGjsQ3LXVQ6DCuV4ipSJXiXU359HJGPYaZCdwDckHu1vPF3v1yZdJDKbwEEaffYY3297ueFtx6doM3egFCeq",
  "key20": "4PMXTxi41xrtjEPeQyVS8cyDu5f8oYM1TehSCbUDDhTe38JEXLAYCiqgyBmvHWHKxYK6hK1jajtzx5Vk1MadEZRj",
  "key21": "b4SAeHHvFgqBijhihBFfaY52UufYEP8T1tPvHVioL74Shjj6NbdBamLokgpTvayr4d7sTcCFKdT4cEPzGq9sFcV",
  "key22": "3kfQi93cLdNoEKrrYdkYrDoNVyguBufhurc8FLuAFjBDztAJmu5kMEkxJVysQhWZJGN1rhSBy6ysap8XUR8sGLfB",
  "key23": "jA9VbN8DMCiZL8wJBckKGSgcY5ixhkcWF8NN49t2nBJ5oQUAiEjVqXXBgqmPwZWrBdy3FRKEEc8YHxYKNhZj8Vp",
  "key24": "63y5Bh7GJcq2UjvxVp4GUW4schJDKkhWtxQ3bTYJgRkR89jkj2Vaxv3gRmu4SEYNiFMqrqVSyZQWyfMbvXJZKu3Q",
  "key25": "3FXfHwGQKRnMDfQV1NoPRSngLw2v8WXxStrjuSdpALmDgWVuR1nFpgovNRbuNo2obBE7SZiEbJiB7eafNKaudUFn",
  "key26": "3mRBfEJsEux4YypHkykTk95KrwHvdRY9jk3BBQCBKkBnGKexLM5geLhKNpcjMDp2zAZEgtPnpf44MnLYc3BoVJEU",
  "key27": "26iFw8q1V4WHNJveCxUsJhPjWaHgiq5oRm1u4nppWZ5u8pNfDQ2waDEuAwG1UFmfuQJTM57vvGLmGU4q8Pv15ibL",
  "key28": "271ibAJe77ZK9tjWMQ92zY9u4q1QsR1rHWeQ2FYT9nAhwKPxa831djF56YyjTAs79Jv2qcuHXTUu7hLXXcxMK5M3",
  "key29": "zpbfdLZa4zSUnWt3A2g7DWkT7eNS9Y2qZrHCbpUxkVU5Wg8ReHJoVZUgv1tEMCpt83rW7X7Zo9Wey9ghkvuTEc3",
  "key30": "2bRxJVyoyAyer56yYeqp7bjKAGjdRL9PsZyDs2BaiJE45tGmsCWK5qgk8B33pTed2F4YvNWua51Mh3bZSjDGcAT3"
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
