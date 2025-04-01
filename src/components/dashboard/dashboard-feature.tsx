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
    "2WtorbiGhbN1BUQAejRcPRqQmuZ6iBo2cT7KTtgpS7YqXCUc7kf7UzVvv5D85SKR3jooPgSTZFiAG2bXjDmmYBzT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n4WevADGKPGTs7cXKJh413sMjHpjVUJ81cVMGkbSEZk7BfaY3x4xbRfZpiboRf7ujNNd3fxwzbGK1MjA1bHDba2",
  "key1": "2dUJednUjtaj8CaZHvcwNKJPvdSXvCYx2fN9J8tTtV5ojXwcQ5WWDuj3CbYWEihsawgHTb754y4HVJQFotMPgAjA",
  "key2": "3H2ysWaE3TW6i13mtWPVmWRQTo29d4uMjAeVhR4szAgwSv8PfbEyJC6VsMXGPMnGBREcKYhTWQ46x3YUVm1sXq7j",
  "key3": "4sqSSktwSak9L8homrMjsZMyJW3iDiG9FJdsGvgMcrWE6YbADCZhbgK9iyjQEAKRwo8uriLPP7KfYSr873BHk3YJ",
  "key4": "65qJb65492KjiCivt5CtxgbEBpJbTVshTHFdYBdXma6QCGVDtkMPHA5pK13yh6SzYgBMcp3XrRzkD39Xu3SW1HQS",
  "key5": "4pVHEGFNVSR8f7pG7XqvW116YVVvFSvJ2wtcVpWcG1YWkvYgdtj9qvatcWyZVLFo9XhSMmedXt7WRwkN8CdhjWyS",
  "key6": "5thW9cc4jLJvGffADiaXWA84x5rMJ3rX1NvA9i3UHaByEe2PtvB5UFL8noDtmipzvjEEmN1ib3ySSQaAPKrAEjJ7",
  "key7": "1LPuVS6Wh2evZLhW7gDJTDYqLCB9hg4YHCeGtpsTkZioSjJoL9YS6uMJC223G7bd9PNfs9Y1ThtmHDc1MTfKUsX",
  "key8": "5NuSEwpv5edvHZNinazt8TfFBHSv9JatxKsa1HNgpYRhGT77khe6iWyDcmZ3BW1XminANCcnwW1dLE6RHczoiUtb",
  "key9": "25tj5aLmxHbr6QnMjVpQr87aVyu2Vy3Qq1d12E3ah5oxnXY3FQu5n5Xxqwj5q2VGSkuAZgfsSZKVHLTqNXMGWdGW",
  "key10": "5cbtGp94Hsbj8hmFjgfeacUYciqsfhASLWx3m7S2kaC4JG3zjbwvK9TyhbmUMeQjqNJzgyvfBFASmdCWeEUvcSH2",
  "key11": "6iN2obT9wFavPdEuNRc8cpAKWkrVVbd8wA5UcEZfzjkesvNGZdJjBW8Dqp8B5CXoRopa8mHacMHoLnAh4aFP2GV",
  "key12": "36h5kL8VqjidfXBt1UwQr3hqUBQ3CuS4ZFWL2grzqVKCSSrmEFg1Tz1696pPgmWoEmYuxym2UU6emRnbU6vDPKoD",
  "key13": "436C4Eg7KSDWWZbXVGRTNKhaqj1QaB36YvUL9KzLZibEQn5P9GUpssQJiR3hcWgntcq4tSoZb76811qPynyP8DCU",
  "key14": "4wGYG6XZTu432XhWrvA7jvFgRS6kCYpSGS2BH76ymeFVq432XjHTPLKjxGyvHKfvCDjNgjsdeWajCBFYUmboa6ts",
  "key15": "64x5Y1vT9iBZ55zFgsxYsvRFo9to29sAfKH7fK5GXvpjNPNTtpLDxYxqpd2yj8C6kWdVkjZMxBNaQvphrYbfnPyh",
  "key16": "25pC8Um9qXaY87jnhLGxMBvz3FmTZcFcQsTHqtkrQ8JF4W1xvbZ2CQcuRkXFY9H15z2khwxGhtpB9edCuLSiuVus",
  "key17": "49rkf85K4N9C6XfmxAsoAsZBnkvQHGY2iobbWMUvmzLcccYGY42P8AmnZ3ZqC3p7DTKs52RWJwhme4byb2v8iMHW",
  "key18": "fUjHof9iZ1sTw9bcV3FNckQNXUTXt3QvZgGN9whLCxk49tbmHZwe3TFtHJTTXGAMXorp81phNSgDi1mJCg2Jzch",
  "key19": "2dfwtTJAiZCrTszKHCWJNjU5UodZrdYS2pAmk15cunWHAnMVbMWm5BkBzuZnZdtAsfNXu6HfaCzCeTDVreJ7V7EV",
  "key20": "gUPYUDcknrJSk7K8jqBKT2mEAkigvjiZm6ptBz1BFMHUMfsFGcen9FBUNbq91DhxwaEAnjTdnZfn1qV6TVVQZVM",
  "key21": "4Vn5QMKUiG5DL59jNsiay8R8Khuq7fjoxhS3RALKZgZ3h8AGhmTHx7C7hTyBpfCBgXmhVFPHHsU4qaMabmmDwJue",
  "key22": "5yZGVc4Ytmq3TgJtRugi1ZZ6ZKCWUWwvrYHwSSD1hTu2r5a4CjGRPv7agwUD2MiJDdvxH6t2MUq8Vuxn8Uhzt2qt",
  "key23": "4SbzAEYhiJLcMtjkbAZMW4fytxM1S2JSJhpdbPd1VyUHKfbh3bw2pWWoqXhUq2miWTemx9VmQKXJH49UYeWtrFPV",
  "key24": "2qXz98yjqhfYsX338BkpWt5WX299fPzxK1cxwdwyrJj3o2g6Q6KPadAeer8fnRdK1BtnitVR7fwBXjsFPwxMZ19R",
  "key25": "4LjeQcFyQH2XrvkCq3DRNg3jN3HaHJi2CmqMXb3MDESZTH6A9B8sq8dQd26PdM1gwr69P81ygW7LE9eZMByvw4mv",
  "key26": "4DNoWPPcbcYn1n95s3fKGoLMnezkJt3N2BKk9NAVZAxhMssqHGf3ahdjBskdQoy6jmswSR7SQMx1nykn6j5pfJkq",
  "key27": "52Zv2SL1dR1g85yKK2CSMEdbUhGknK489qriBaTtJM2PhLyJ9x3pFpYnqkauXp3SnB8xuTiVAnX2Bo1ZudyviRcy",
  "key28": "4Rni64AxCeWTbjCtPcrxxbCbHJKcGBA142SLuEpvsrbAmR7oUPe81imHruGQ1iqevNKU5f6A79AiU5bicZqKmpBt",
  "key29": "FoJf7LMLMctvPR2CrGhogdQ9vbpVCgxt4FFE7BR9VeYRtoKekSS5FcyiMHGLXbYbGNSe6625ze5TMWAWqDmHR7r",
  "key30": "5afEphL4auQ6CEfvNR5jt62ibqxvodpdTwjKekLzQH7yBtjhQ3h2Au86zx6u8WM2bryuYTEVTAMi1EVTuZy34zAV",
  "key31": "33PozfE63KV7os2R6Hqyq5WBS46ZDh3S7Pz3JaysGpuSdjePj4BMZQ49K9NSrYSwxAV9PG6EKyU5mB3HheyfiSk3",
  "key32": "2XNapknF5jjE98cAWFoXe3MuBK1Jd7kxmM7iijaY2t1GQazS7EaQjV6P8Exa6wYzHrsX7SchTCgL6CnGTqapCQQt",
  "key33": "32U12rRNsoTLuHaLJt9FFNmgSsdFt9VVc7NhucsEBQSwq4SMFLwQGdFwkUvA3E5fsy2wUqK9HKqLztrR6E8eJkQp",
  "key34": "5fzixDmMAozuTF1xuy7iHNsrJSGbr8gdTN5d8A7RPfQDU4zVtbzVia8hKsYrjB8eGBMfgRdgJeKj6qtP3EqNeEd6",
  "key35": "2khaLBrZYXhHEJZENuWSVxP5nT4iWZAwPo12H9S33YRVM1TtnWcYaLyGbP5wPDW8fBHiD7aLeZgLZbh472sYKhCD",
  "key36": "4omyDkQBRU293wDBiuV11n4tnYNEs7rf8BZgoWDm6t4vPJrxnWMuqDQHSMhBpXELnyszQjhJfZrF2WapkAvfXsy9",
  "key37": "5de7BizfMQov2u6f724UueZmctLJkTnC7rEeVADsTApq85LPzpQKhwtCJPRvcoCTyNz2E5JJRJFd5jciVNMXKqhu",
  "key38": "W1TXpxEm9395epmkk9Zgvg64HbT3E4ZnmyQEYXcJfuB1JHwAnU3gLFScSSpR5VKV8Aox7W2pzPEg7KdcaKQAnjG",
  "key39": "5bdxUL9BQbwHFhU7BGyks26nStREUFv6p2poPhSiGJB8f5p1u6t8NUUjzHqXfi2tWDGBuRNid4smMju4RMzLxRwM",
  "key40": "2rKXDbdNWa7zTcpZfGB1GVarRRrFDWJucZqcy7MCoSioJZXkhkDHhCddJ9VMxTP6xjCHvKxsn6c9PeRAdbB4jy75",
  "key41": "223fedExXdH3FKNCENkWBccVDL55oNqHz6jQCx8U1G6NMBEtCtNpMKM38aPmzLNAJb3jZn7PxF5YLWpJK92aHRnq",
  "key42": "4Sf6VfaVXZ9P4QuZmgPMGV46tjhTfh8V2qZGSDRNBZrQSqdgZfvqjyncRz4d3PQBbu7XvG1M4EohktptpR9JZ2rm",
  "key43": "2VMTZUYipLimJeJqLcmu3AVYejpowTB5hsAz7EiHWNNGgeBQLrLaSE7gHr5oyRyLjAZ1pHEZNebV5dYaqriZzwUM",
  "key44": "5zMEpoq6Rcjb5Wbm4Y8xEtWXtq2gJ1EfJpVZ2CQVYRT9L6m9HhNoNDL7HmFZRqAVMVCRMnw9Hk84gT3hKWTGmLUm",
  "key45": "5TRt1WNuTXR8HCyuPJB12bQekzjLFL8FEWxcK274GUM7LXkFhv5ddJp1cF8LTuvfZ7xvDBL3WLsXpZ8EBcBLT1Nm",
  "key46": "ivQwFtcgg2g72raqAAGQRX22UUedEmLR3KcTYZtkYfTrM1yYABgqDUtNASdiqgWs8KA2JmLCoEnN2Cxju85XWWw",
  "key47": "AafaTP6nsfskjURH9SsyxsekMamwprbx4Nbj6sW3XLUDcjkjsMftDqxKTjWJTi9QtB1zmU4d97B4Sq7SbBzDKXJ",
  "key48": "2ToSZ3aYX6GRSVFfZBYx8oaQbU3LZX2N6FJR5QsuQQpJmHztXrHd1VrK94DshvKN7jBhovmuGDSPCxedWFKDHcai"
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
