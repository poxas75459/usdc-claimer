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
    "2rCFHvVYEbiodXrYoys1AMQnxdH8nFm5epLnKCMwPjtZwhnjsjG4QyDUQePnWvvSi9UdRrPW2PVc17dEnNutdqmM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24152u8Md4FtTQrjhMgoJiDVGGWYZZUrNALU1FBEe79m8a3rTBdZVPc7HWNg4qwSuXYk1GJo5xMKyVqwoQmMCry1",
  "key1": "nu4nBFvZsKbrGsffG4izzeTjMp2nm44wKuWBQum5rVf3H5Qcdu8BXk4HBpZH2tLFGdo8mGBtPiwML6Y3H9ZD1xw",
  "key2": "4ijac5YhazBdo9U9JVKjfS8eQaYLhHabZ49wnXbRmZK5ZawKJpnQEfN1UQLbkmc15m1tebYQMyeUwVRQAJk8UBPm",
  "key3": "52Woq5KL8WF1ywL6i4SN25nZjXWvzsXZmQKrLvkCXWpZhG7JkTgqvK6PxzFmT83k3CXZyegSr7aia5nGPrE7W2nv",
  "key4": "4GGNUD6KjNggb2vWwkpoq8d6Qr7pNuSKb3FodujmGcFHbmqm2vVAQyrMn2ynQyeqMyJuxapv9pJQXysHdbvVk5rs",
  "key5": "4jkovxCQo4bekXa9yY5pW2Qxu1zuxob4py8hRGXAVrmjB4kB8nsjZbFqj9bcny8m1pucryZuJPf3C6SmGXLPpug1",
  "key6": "2zKDefgeUmYw1fzoWNyMTCorviKD4GsUgW62pBsKsoQWoJ1ozUpNUsjr8FYkET6sVUs2sEEP7unHoVvRorCyjdQ9",
  "key7": "4KveugpxQb6SdtpBgDyDKJJGM1oi5MktkPSYLipxpoSLLB2oGTEVd9rZ8ghwvdJgm3Amcv6M9VZNozeWEWRW875t",
  "key8": "5LxEZbtqipg9Zg8UQiTvGztSdfrGkNuRWfYhyyq6eqHdoZCn8qWuz76TPjFT1Zd9trAaM4emAJS6xDDo8SZXhWr5",
  "key9": "yNV9zAnZcr9HxUiQ5VxXfvUVx5HVZnhgt5zQb8WosDj9iTGwJyUvuMvc79ccqLb1n1ZHAeXBZkfcMgXL8qbmop8",
  "key10": "5PmthUcriybvgQgqxkTTN9PPW7SpuXoDVtCxgLTKbdd8ApgCrxRvuJbrD2k22ygQNmXzoJ1yD2gc1t8gJN9uMnxg",
  "key11": "21Gh1EjfN4oiXBLkWaDUpc2V9RCMGZSgyjCeCVcz6PB7me8wa9HfqSvdhSXg5p5adneFXDZngjMnpZzZSGTXCFtN",
  "key12": "4A9FZoNmXpQtXdC3nfgzkBXZyuXaSVPqdXuS76KvMTho68Si7Kp7ENXwzDy7k5LvPZFy2PBvnoRuciDxCvcrtEJG",
  "key13": "3KtB56HjADibaNM1ro8GnS6MFkAqiEciJLDaEq6BzEYtmATADev42NgVUCgsbhGBVKbEuS2R3xywFdRjuVSa3Bhr",
  "key14": "4t3svJYEqs5egcp5u7CcUDcJM9ECAjsa2SX9BVd3GMK5oT9PMpzXMZge4RZrc8N6mSkasPMXTKfHa1F6grqns1EH",
  "key15": "ncCwB8RwbCRgFy8zeorPahFVYaBAmNeLYe9jAbgNydKz5XVSGuwUAE4uUbfUNG3h45FEYTA4VELtNtLf8USRrkx",
  "key16": "2XqyKFpU4vJ9nUgvpzRmCXV94niaaswKZS7aPSGWwLXh1TAWogCZSrK9RitAy6GEAxzjL9bau9SoDgANVoDvYiSc",
  "key17": "2k7EJ78hX4iDZgf6kF4ihcuYmJHK65uu93VRyEF45RokP71Z5ANonQeDpsncV9rzQwRpC4GGzp4vbuTAatp9CFhB",
  "key18": "4Cyjb1p2WGrLegfwzrwDDmoUcQokuoBQvztJgBfzczr6ViGDgi7ocSy9uDQJp7qwRAW1SCwfvYhRm7bSELAc3SKW",
  "key19": "562uYxDFqNKVxYRtrjAxpPcXTHR8rgPNisWZt6yH7Vgtt8X6eNMdUYnqTKjqMJ9amVRrFX5uqpEgp77RK5wGGhDv",
  "key20": "4StWcZdFxAF4PNpSZj756Re5JMFBf8Sz9avD7Est7au4dTeUgZBMtTwPZEz3bJPQrKE7Raf3cF1yKwYQzhMthufm",
  "key21": "4M1vyJuSxLChfvaQLuhg2V1mnf4HERAFQFS82tss6kAwLxuBCrFY1FwjwYhooFXrwf7PxJupokVaHFAxk2PHhmhP",
  "key22": "2S11zEhUxUNqoBCnfZV1tyeKLv684dMg3iGzcPscuNa8WxKtVqBjGqeQonZe75pHuyWtgQKykzRUJUpK65f25cZP",
  "key23": "5qH8qT84MyfFZSbgLEewRzPUDQsmxtt2adVMnZojKTF6GqJg1qc7oakgAKdYH9M3h9WUGNNgqFP68Ss42fzNSWpK",
  "key24": "4S77DVVvr9d2S1EMn6Mvnxev6HozRwj8xVA62mJ9Mum24q1eZdsF5ECPq4kKm6k5B6cGp747LD1e45DZ1FvgQgpZ",
  "key25": "5wDZRATaxu4KygJqhyuxjjpHN9uArz1bikxupcpE7XGNEv8jR3C1HZXBRPcJ9KErtkLVTswTYvFJuRnoiWSvPuo",
  "key26": "52NUmMkX9oMiQYNfmFTpJqprfutGMu8PWQ3Fr6irP1RJkCgzSjLekSTw8rbJhDH5QyA55mhYswKHwmR5jEjFc9mB",
  "key27": "2wL4mGYhHB5y8ULGrkMDWVFD3y2RSZQ4j9LeQVBietkTp93gUg2T52v3CvbZHz96BNpiJfozZ6nooDpAirgFkeF9",
  "key28": "4fz8tRmoMbhXQCQXDLkfoTytPjf5RQCT9E6W87J9zg5nQD57acNdJ1gPQjqiGKXpSwvNdLSudaYUwQjZu38EqRgm",
  "key29": "5vQLfMF2PwvWEfYbuQZRy1FeM7zTsUKq7vxEfEacWCah49Wb82UqTRd3GnnPwQ3psUgkmQYnvKzYkxvY8zmw5G8v",
  "key30": "2CizSsS8YzxEyezu8KduNgZPjmNgPSPpJgvNWqQBkmr1SiYg1wgxkH717f91zHTv3zTyDtfLdqduBWuZtAdC2thn",
  "key31": "43FHQo7h7ptJczdEqWSvYpbELaTUoU4rfKB6EEDUTqBDfVXf7RGKmjws8D7BuXPbfGNhLHdND3VsxZ6BaKS9Bp3h",
  "key32": "2HdY3vb9vHUaci3UaWHPZqYUqEZXzVngwrzGeRuDmTPwv6iWqGZHc746kGgVm4obLxc3nBArC1bvJUi4nwV8m69X",
  "key33": "33JLpsDiiRtUfCyPCQ4Zep4gwnmzzWXU6DphBLPeDAru4qkyLSikowVQUF4qUHpjLoxadKtUobiNnHHUhVqGRew",
  "key34": "23nMjfrVheAYrNQmgmMa84wPoyuDeCkbXXTYP6vqoPdp1M8B5SzxSsr2rPW69JLv6MixoaLTS4JKD4Ck2ZsKjymo",
  "key35": "2JakKeQeC2Yb5Zx5Vgx12PA5Agt6jJHPRqanvwSM5Q4kW4t7vjM1RpTLbADV4zvvmy13JZ9JT8d4UCiJuwWF9kp9",
  "key36": "2XZn8hX5bssFoy7bwkieyVjdxXV7x4T7e6RvVq7SNSCwhG31ieErUJBzVBaQkp8VxXY3UiwAxcafEpQea75PGaJY",
  "key37": "29yE6Tk38r3BQprmdU5dyWUxasWbsAk8W8c74FJjRjU4QPMRaBmi7JV1ha8Gr3F7QDCsyUv7jGMT5MEjy6H5fizA",
  "key38": "3kXpNaugggw1HrgQXoTk6Ru68Cxh7DXUC3ehBRJmpqdZmmTvrekm6ao22g8UWgTRqhw4xAbzKQbiCPukkVkfMK5a",
  "key39": "JzjaR1tDVs22nQNqnGdt3nDLqU1k13VuihqsK83teGRj2iP3A6x3MxodmpMZaJiiMWvZoEybyszGvUkQTNRLVNF",
  "key40": "2s32zLMqVGuRfZQxzjjWpTBsvqAJB4iTsQQmbgUau46yCU84SDQwK9ga5q2RnNSHDf8vuTW5ro6CriwwVP6QUUY2",
  "key41": "3Cj8sm91jKMJaMVESJN3wrTKZLLg7kAz8eW8nh6AhsxEPPDrmozXNcDBdECycgVj1G137ZKRmjTp73sj5tf5kQXh",
  "key42": "2w3yjKcE1ivRba2J4reoX1Y3ivxGJdnNJMPCFvZg4y1o9HH8p6gZ5pe8GnELZu2sUu5VAjtMbQS2AwoPSRqpVsA2"
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
