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
    "2wSg44Mjn5LwLWQZbUhwRsengySS4Z8M6d9jMQLkWenQBSFrdGqhjSCkK9oo7uSQSpGbX19e8WJBcqgR36NM12Lg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3psNwV8uCy3ZwnCv6XjT4cXUU9rGRWMne2VvPNHbdmE1FzTtLZbejKoKx8gj2wDRVnYiu1mqtc3xdMtjAKu4FnHw",
  "key1": "3VRMXxHqakC5obyUmq79JgBGS8QTdsF2DZSwqdhpySe8qwByqV2yCwkjCVC79Zg9bHrQMLyKW8NK8kdNDHmHvPkg",
  "key2": "5fZneYXavKMke8gU64TuZkb7Qi4Ey4noaBmHbpb7YrAKCmEt8DjPFXzteiCnRytVf2K2UbrF8vyjzgr1qZaTU5Fo",
  "key3": "3gmLCNsAtMQFzKKwrQEgAQgwqPNQtt1A2fh1TUBp8Hx3T8Q6iHixJ6a6ppc9yFL9LTnwHh82amk8Hyz6CzJyuL6w",
  "key4": "4idJgd1qmFu118Juic4deCyVPtW5jy4QUUZB1L6m1x1U7Joj4HYb31JAvwcjpC1pYMnEzwLHqsxNJTaqUEWaCu3Z",
  "key5": "4sk3oU14892jBqfR9vvoPFZ41esBgFrkwyiwGYCYhE4mjUrtLXgDAaBp86FwkqVn63XZEArxmbzkwbe6KQFP4r8r",
  "key6": "3UQFT5ZA8jKJ9Wvb5oUYu9uh7AkcuZLFbuFRBfqm1JmhKJPboXbcq9UizELeeTWCHm9M6S6puU2jEzLD5DYdYEz4",
  "key7": "5G3sT3ZAX7oZemXTCkgNis9bUsetNNxxRtG2qMEWWPa8hYumr9PyYLTpDAqTgpqBFyksmT1UNrX4kiYoY6pRYfEq",
  "key8": "LBsYVjaqbw9FwsxoMqyrrAFgLhsrwmeUavbHsjXwgcq5882QBGnx8nNzestUr7kQLr5CsH7wWQ7u2AGiKPFnzMH",
  "key9": "4e3b4k66dv4MvFpL3dTN9CPrKoKRow9rkquMxSwhgiwSQM7Xjit7oKVrxRRNHDH2TXgtZTcYnYpEfReEn7Pmk2ru",
  "key10": "3bjzaomyEyuu5UYc2BTg3P1gqkewRHsJNoZpK6q5qYgKGsoTRnX5eWnPxrfPXqhxYHD5wiMqgCjWXKmpyGWFEjtc",
  "key11": "2G58NUBWtn1CauCipQhEe5RevuMpgPinywwVF83iwVZXB7twheZiDT8m713n1DZBH9kAFccdoCM3hEJJZthf13Qx",
  "key12": "4f1xtVcdgdZxjEJsLmPGLvReY5EfyPfX3dWGYKsA5qxMUPogs6knHxSDBGD9vnDw6gPBWTW9M45jRgJnjep1uxjV",
  "key13": "5XXEaxjhRJDVNRUqazGKaKNj3xRBDMssYHoEYHGRWrRdstTftRmLVbYk6XvURfpxoc6FC7hZVzMyHfSxycUaewmd",
  "key14": "342LpL1beHfp6UG5GAwVVya7Ft9sv6e2FR4bSWGmG9ZzaXNbHF52tHq1mUuwicDncPUVNaYnN5a7uQQuxwdJVKQM",
  "key15": "25tn6tHoGWMjDwCvBvf3NFgjRVsgLgA3aPyYFLrffHfnqWSM8Np8iRPutFX8sZJkSJGs27htBQXWEcJ3wktn9rAS",
  "key16": "oZ9aV2oUZSq4yzF93EPBdLBRkfhRNJWuT61XAFA3jkaJwJ22WBX7hgDaPAn1hFUq6BFF8LD3fzhz1vjTKGgTYDU",
  "key17": "5vhQJ3Vf3JweBvHB8obNtpSQyLoGvCfqQRnb8HnTQGbMcUJfKNTXi7y6R8hRRHhsJBvb5h76RaN21Wqgcy1WN92z",
  "key18": "49sSR1EfjyWueHfSASu4wnNa7DjWo4LQvmd9WfptZGpsnuKQUJCBApesX7C687YcCxb9SzXbLwPf1hey2wAXoN9M",
  "key19": "5JwpRyWVnDasd4KHcPscK3JvQqHS1KB78Xg3Fmb5VZzGRsfHBFTBWK69STW7ayz1TXYwGDmcq6QiD3yTFp9eAAgU",
  "key20": "3fB6eEDZiHF33fxhNXVpD5jnUVG5S15XwVKYut7htrRjuPYLPdiFpxLknExqmJUHh7Au15hBGx8p3P2aFSxgumC3",
  "key21": "28wmW75rK5rVj8kJ2mZqKWBZPkhui48QzY4AGvkDFQCLq9nKx3V93wjYFMRMbWpLFhm7NrEPfV9CHnuRK7d1Uqo9",
  "key22": "46K9b4ktTYJf9h6xhenpuQZzsSgYEQTKE32XWRcwYrR6daQNdHFmKiUqpw1MAtvZwjxbFAH8nX5EjLQH8WMWkrhg",
  "key23": "FdEmJcXsaENxVTBShJcHpLY713uB1LgeJ2z4vn7xkdTJR6ZMLgoiaHVZKP2JZagaM66dNirvCr8eySHgrvgqPRu",
  "key24": "5RLmhHBechNzL54KLtkS87usjMYGhCL85xUz8iFGoiv3RpZVHVLJC4KpLzqt3kVr7aNj9vkHe7BHoMVszxhhanXa",
  "key25": "371zVbQbGA9s8dhDurrSkHXjdkuMqfxGQ5jfbUHGzCDBYXgy7unJBf4ETw91s6JC8APmcv67AXje6oRKxm4TmwTK",
  "key26": "2US6VAiGXtMQzi4kp8HRdiJWVLF6bcHubUUaVckX7xn8s8eDV4D6huUPjwKekAijj4H2ostzXENrnzY8BBw9Fk8W",
  "key27": "5aXR3BUcYotXkvqzL5eLYQnYn2h3R5xpy64MZQZY3rVN3mu9ofmf39Y2LjzWby12jR9CLjLvMQn469PJd16c5AL4",
  "key28": "4kUPyhf4sMafhQJs7fC765rxe9ogvGftWfBSC5wcUpN5a2Pe1pNBSkZRruF48P2DjrVUbeStggEUoeRCfbzjE7WC",
  "key29": "1vGNPuYSdAAKrhELyqYakYX5Lm9drxjMxUAN2rdLhMsMJkbvDTbGCh1qZaNXBrkpAjMd4rVkY6KsE6ntxr7SmYn",
  "key30": "jXiggATXBUa34e9TcQu89jN8sewjHVNFebws9eGLmkRzojBmXemJTU287eK1soSbf1ebpu39vcpXv2VzMy9cyNi",
  "key31": "4mJJqWtxZJrGJkfWyDnuYxeyfXqJ9rnQskQxQ73fiL7DUA49DCgCb47w2u8FZJpkyPUg6hSdGTPecv68thaBaVAr",
  "key32": "RG2J7iKZPgK3ssKJPGoBZnYj4cRq5wFh2qn94KU6Mfd2ikc2KBTpFXuWGHFVuNp5Y9wck612iWnjotkpFd6QTMA",
  "key33": "w3kfKB3Ywcwog9Rf5LUxqej94fWW5S8SvKsMyVUZ1Wvf8Ci16TJR2CTTnp4spatFTn3DAD84Hi7SFnqqYjBxxc3",
  "key34": "5o2S5orgX2rPi5E5wwmqymZym3swCjELdNcR9wvAj26q9Q4pyNuxmL6ccPGVX3tcJLFGZit7qufLg8UYwSGWgyx6",
  "key35": "2rsu3DBTsfB7XvKgMbLWfRcs6hCQG6poyKXsyvv5DU3tKh1T5NbxS88BF8TjJt41K2tkwh4KF1Qy37XNEreyee9U",
  "key36": "eecqp37VhFJCdttsywpDuGLhFxPR67M6eKVjRZJSjkuMo2sgZcXeMaDgJ5XrK59Hrd2GHwrEuVE4nEmpXxgm2Cx",
  "key37": "XXG8D3bz2CU6fyNm34jieuxJ1V44x8svz7h3edexfb186ZxkGms8Ge18QXWdAJA9sXpM33z7CiNdp2JLmTaQvSy",
  "key38": "3didUeAPtJpZDbTFCzoPyPUvhAeRUS7ksu4viGuKsSCYcxGKxR5YsJwZ7RV4whgC446V2mvDp3TmiDcGpCmRBjVb",
  "key39": "Rf6TobhHRojoz8GR8XtG3fAjfskYGVLMn2yz7VCsua7mCUdVmrpbYPVc2KfQHL5FS5R2ogfvsSf8fZzTZo1tPvm",
  "key40": "4uXytafdJ3FMUiEEPuFyiiFt1MY6Hv1Bp2DtZn4rTdwHsyJnmXwSpLuUdWwy4rESvQzhbGZXX6BiT54Vq7FsV5hu",
  "key41": "5j3aM31eJPU8R2CeJF3ijrsKbq6JkM3utiUXDSJmL73rkDCLRndxw1fYgqAQjbSBxegqpFpMZbR16Pq94qqK9aja",
  "key42": "2cj1RACekBPHSye4NBtJEswynYYiQmEdFpAhfCSwZpoDxcrqsUiJNxwHR281KMujiN3hAK78S4tiYWUX53VkwJaq",
  "key43": "5jM4C8Pcp5Unc49sS7HXTQJwaCBTQQoS7ZXQmP1C53Fo8s4BREohhzgfafT4iw4aceFY7WPBturFcPVFwJFMYd3T",
  "key44": "24tgCyCtwbY3UXDvZrfmzA6Wqp4nHfPCSSTehzpEoKeEA22jT9Fj3PTinTfx9oh7cnsufX8GpUVhsJRq4Dy66wyq"
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
