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
    "4qZtpopLnNu8bPZYtGGhyshZJSD89s8t8HRcPFUrSYB4qhyyotsTsTkYx6vrLSfUqQgd5935zhMa1FHfccqamcgG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ExhwBf3NfE4PrYHBAaTmRLQpNg23hSQ79tV3P9jJLNR3q9VnzYNrz3VpNjpTRNmBY1htjww3KvhE1szWkA1Nisv",
  "key1": "2CEYvj9AzNjyQP765PCTggT2TQyfcssCgNW8hGYqGFiwMkDrZZsWeeGSfEc4nTPeHQqQcSavcaCxGRzoFrH8XZLr",
  "key2": "2Kz5RkNaFgU5U9gYqEH4nrtU86NcGofpCZzCPDqgtpruAoZQtEHnTWijyjEQoNub1RaDZbRAYApLikmQVJSpfyDX",
  "key3": "25cv7C31dgYL15TTYZztgNKQHwQyJYUV9E73et4V3txt8iMZSoCymZXea8ZgTo8gBhf5eios7pJS7tBFwDv9FPGd",
  "key4": "4UbVKtABA8qQoymM9LzGiKmyEWLATdFyMU9grkxYmyC3hyqLJKYSskSxV3cUFo6QDR5Ekbsyi3R8XkNMLyeqXMkX",
  "key5": "4yw2mo65uxWg9PXztNU71FZ5iARDkgBPE9kRJFLaNdohG52zVtUAtqpFwm9jxX1VC6SVbotynQmduAAHpDqyffnW",
  "key6": "4j27PfvHe9TwuQT7N2kS6AP8u95F5o5y4kFxSwdedQk5N6aRDd7TSyEUEY4hppnJE4Y8iz8uu1Bu1vhFWVVhRV24",
  "key7": "57rqhPeQosXixv9qbgpW67J9eAcScYs36pRVR1g5ADmPtwUdoyWSHKc9UyfhhxaRznG7cyERYRruYpf8VCunyPBg",
  "key8": "4LeoVWB4Tb2bZ4MrhVGHj5GvBGgsjhF4Qn8DUzMxDimm6o5xALn33uUYghDAVw4xtRmZEcS1eSQsxYAb2nnqxbi1",
  "key9": "4PwDWj81vXFusUD5Zm2KwqeHN4Ex1ebjNtonnpKysHs1xkxMgKXq81oVkaVFQav213vXH45c9Hf5YkCGrNDFYNHL",
  "key10": "52PMHohkt7vU1Mg5iDcfgsCi7CCVs85swyCzZjj2uzFm4tKCwashxJYYNnL2uMKYHqyezeddgu6AEAdMBgiyS5Ej",
  "key11": "2c5qpjt2ySvP6wEsWQTv6AZSwbb3bDBTt8KwZzcHUnZpJZmBxQ7cdas946WC5ecwSYbbb76SjR8BjCkXvoMEoEVo",
  "key12": "Xa53SQt7NQ1NiU8vbkNRiudWfLzAJeY73zqt1mP4RdZmSz8gCdmiYw8ZrZxxRmyJA6R6t5jkMc99QXt1o9u5ApJ",
  "key13": "2YVxYarHfzhSdVrXsTmHfg1FttPPsLvThNaQTZSewXz4uFWSkAPAr1ForVtgqe8F62HQtYaWcCjxkgL9dCHzyArZ",
  "key14": "2pFH2FeC52fzD3WnNPkFwUt7CcjYFxmqG1mr45johrLMvJmq2hY6XcPzUEt2HZtD3pjudATGRTfP89xPc2Q4xJJb",
  "key15": "4scR4Gosg6oac5VNucH2jRSYphbaTehmvryti8XRjRm1WE8s7LUoLGjxyeo6eSrcVg94Ynm1sKrxYRTWVMQMrfeW",
  "key16": "5mhtAcNE8XzRfkQJuXvNj9wpDZJd1oh5HHFT9bwKCdczXPtMe5x8RPHcKpK1Ccfo94MA5XPQpMBFvpvmCxPq9Tzo",
  "key17": "4qiBVT8oUYR9tr3BvmozJatJpf8YapnwDoQTMxBee1SS3BEaHPubP3e8yBP8n6z4Ls3gyXWVXyPBLELGidRSWKuA",
  "key18": "5rhn3diG8qxcnAZ5kMruffBF4TNEpvVyhzfpAZrii69wokSjjJpUZtkqeVdNHNj5i1BQiXa4HiBFu4EWozQGzFoo",
  "key19": "3PXtGAhjFBPgJzpc4n51BCkvaBNEigZYhEW6exfWetpsuZyW1yKhswRKCrq6GmW78DFZi4cCGVBXnad1akYGmhDk",
  "key20": "35ABfDLt4cb7eeJQ54paPBfZiAufVUUFhPQ6Kh3G4CPVWFJfXEzcVUZ4Qd2bVm5dwkX7vhfFSWhneqv1B7XWPhft",
  "key21": "2SQByotv8VQEG3h3royRFPrXCCRaEpT3xA1tAsRvWmvX5pVKV5Tkx42Cr7cbjnib5jwgfAwpSz7YLaCwCRT4v29u",
  "key22": "43T8vLnpDMQoboiUv9LgoLcnm4ZcZchxmg4DC6C4RqK2vzKV4yZ2ZAqx4eXD66evW2hWrNnnybmj8FXDpwHBgPbg",
  "key23": "4aFvagYGyvkrkAMXgUzzotSUHeV3pQ7nWgwEuy1wTTT2yZhh4SdN3g3hDTnDMpcDG4VVtGmpGnnBPbVkbb8zSbrn",
  "key24": "3hpp8V3LaJKsLZqyKMNXjhtQyvTkevkrGv4uaiBnV3S5QWfjqCFCQVJDDzmQavHz34uUrNSYqgw7rMovgxHdEwke",
  "key25": "2Z8Z2npHj1ggsUwBvXFfVsAMoyn5JsHsBaJ37EXvKGGuLCQ9nhDptAqA1SXBS1vjjDJkJ63kST1MwBQGZjMnenPn",
  "key26": "YBcBn4LWtxvDVN9VE7bXiefy3NZv8sW82fdi7p1JuofECQdHRNKwyVVUkngkixccdw4V849eqh896HCtkgpY1e5",
  "key27": "4ETR33u3SBQeUY6U9nPrs6cZB22DQsTtAG9mEDoenDhx9ELzkUUEHjQDQb6vmm3rvjoVZZAT5yA6LoV28tRrJ2jZ",
  "key28": "MnBPt2qixgPaTx8EYXLzryHiqpU5iWXHnccscnyWRMkf8Ba8zVUQRVWVYNaxEB5FGLerDL16hqW1kzRceNAGPFo",
  "key29": "2kTEsFHaW8trg3KVRBTriZHMVhUgHv3bFhhMyLuToR65vCTW2wRbbNaPauhbZSENcEXvbiY26ZAiMbwpSbqRCptd",
  "key30": "3uKtYdU9b9RayyAe6Ecjndxvzffzv42Vf6mWrjCGcs5Y7uEuqTrBbGGdF8XnTqtN6Ea8ZoFgXWrBs5dERtsdq3W9",
  "key31": "2qBRnEE1STfNzb5HkrhmhDB9DZviCtGcRWfQRi3KnN3iGdr9Q9R27ELMu56Y8GjBQ4zxwEexpyUNJiMN95B6Mqna",
  "key32": "3KSnGWzmSTq5eH9BCuCu6tsEyjSdLLkv2CPhUVKFoZnBuUT4vzAUxUZTd7Dk8mMekjtm9kXxHQDtkv3EcNAW3wgi",
  "key33": "4rMgFamvQBRYor9RD9XE5i6viXx7Ym8T6HucTM7XNLiHoYRb7LCxhDbEg5EfF84tUZSgyo1m1yS3oqt9ydonLcmT",
  "key34": "25dx2FQZR3f1AJVXXDYiZs9e5RW9ppE7zCH92wgKTor2y5q8yoivFKaTFyEm6XKTxFkRvkDzgUcyLFxXjEykjRmb",
  "key35": "qwwiyoMcZn288XSN93qhTSZAaugiD3pcAkyFwD92AxtTwtdAi8CDEGZbnCjmnYpWFX3kXJY6KYWA8BkyXkv6PGt",
  "key36": "43fytBkPzFNjcGLzQFfaHKigBuKxtmryvwCiGXdFhKtn15k4gtgTpuZZhsed39fdJKJc1p7vgbFr6QMwa5xdUDP1",
  "key37": "579ga5QmdjRvWETRXYFdeaAuquGZhhz7LLmi1Daed5zQwm3ftfbvyik9xWyi2bawmM5hScaZP5DuRjsULQbYfkqT",
  "key38": "3hD4VqUVipF5o5VYUXtsohCfaxKSbLDw211neDUsfSkB2fe9G6Nnc6iQYgbBfmj1x7ZCRUBzJKnS9ht4dPDokEKT",
  "key39": "4Z5z22StaiJMusbMoi4NRByhMZL8KRc4F49Bc7qMAw5TLBcfq9p1SjBM3E7rCFCPYP7ic7JZFVi9danSGFS8dEw1",
  "key40": "3EqpyMCD3HS8Cmuha6WM3izvh5ndXRGuqpLzx6QJ6FnhirgcPsLKqiLRGkyVGtYZjdTv8WX1TSjijZiEXTNswAMs",
  "key41": "2acG1gLVXQNSjcXZms3uYREMh9TudZst2UYM3zAZswXszFxt5N85GrRuKi3gyYUM6FmcYET5bzLRzjt5c7MaXrBL",
  "key42": "4fxXfRw1WYMGPDwoNimWQroiMdLhD7gTmZbdoiZwLKrXn61Sik6MnHApyQXnA1U1gquaR9e92JZwqbLw3cApbJ6x",
  "key43": "5YwveYHNrB4HWdpsFvVCuWNddMK4X5njjcPjiCmWRtpvpYe3cdy9yjVBJNXDtry5QQuNBDZd1WrNXuyrDbVQY643",
  "key44": "578Vr6HBzUwEB3cRRHRd5XpuVWLjQ6rpnkaB4WwNSAwVkVBJaZA5fXLwQKGHseMJrdEfAe845V7UW8D6nsai9LRW",
  "key45": "5KkywfF6vjtVJDZhxJgJqrifMpJogZGoxaNP3uLRXBvYbd42QZd8zKfBm4Fp4eCAFfcvMGE9BDPoDTGYFokrr21b"
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
