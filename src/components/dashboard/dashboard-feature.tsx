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
    "2P1YqKGpMecyVZnPLjrq3y5jG3fis1xhQLxiHGai4ttwUZw2yFeoVkEssqtvT8fTPJvXyMAjfWuqvmgPzQKSmgLC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NntTTzHYQZ9Sd28iPmVWCcLqnjydSUrd3x8ZMtRMVTNAdw24RQmbwS41kSJxpxgSD2SJWBhjpqxmpvLg8M1SEt6",
  "key1": "4fHdhN9ZWQJFaVg4DmL42nUTYrm5oEA1Qz6BDYqsrh7RqybH8etdAefJhczjS1JvxBxAejDgPpPQKSNv1UdFC4Ry",
  "key2": "39LRxfQ9QkTMViEajsgAm8vEuHnkAB7BGfddJZBTqKiubu5yQWgQqWWuGKr8VaLzpWUGF4xppkmXh5M4NKH5Kcam",
  "key3": "32yc5DqzvrALJD8mAKd4sRvTHdFHQpyDXuh1MeKCT7R9c5VKJf7e152331bpdxpL6bXrLtV6xZcWTmwWXYcXJcXZ",
  "key4": "2P4AEUqNUc8ZoqvmMZMUpC4gV6w6wHAuEuwpYXoWrqXLaMfEedMtcmozj7B7MDDXcoaoeSdm3GgBsJPeLP2pn22j",
  "key5": "3QgYKEgDZk3icVUFVJ7GEguhD7ybqvjHzCRfVAhQAewmoV5vP9xRumD6YUBBBbKg2fJw4MVwjhXu4yJZPhjUCcuz",
  "key6": "QWt6txWJTTZjyKTgsr1g3SGxYBT3xf4QWKCuRUwxoMZ1Q8kHyzAAa8X1Azedj4UQHQd52bwS88HtsxMPhdZpsMm",
  "key7": "4KcWTzEaEyz2JETqMnjxzPwi596N9EPsGVUDY5qzxDzbFHdH5cQ9Wgm3V9WJQPkv3xPmHb1woky2ewPGRhRqYR2q",
  "key8": "pCN4iTpDzxK53juhNSyeME77CSYoGMs5GVXTqdZBDJbBRwYgiwUJaAje5SBitBNqibFUGQHy9KSqjrDLBBEhqBT",
  "key9": "5o553do8Fq8MWvGDfM7tquDrmd6A3fCeKhMqNqqoZcQKVsDX8SU5bsv8wJJNNvr691wfG6zXkWFNhzi7pkkLyviV",
  "key10": "5jpkvUyJyf9gZeqD87cmF3AjuQDu48EMYZdb3s4zbpqSSx4mRjMsYE3a68CP6okWMYXsEHUVtWmoFwcZdZFZSMtd",
  "key11": "PNbAkjzJzFuCRf53N7fXzbMWLDYNJhgySr1AVejqoYAk6wMPR6aEMP6uB8DHuqo3xhYMr2mCv7sm7s3VQQVu41s",
  "key12": "Uv17MZzgtHxMCESRep7Hux6J2gsTmGFJNNNTGuoG3rJxRjzhpuoscgqn2kFwf4HmewgKssPJgEFJrE4W3hsHNNc",
  "key13": "5ZkVBFuRPbtYDrFuPsPGGxGUx16Gwsmp2SpiqQTxzfteXMCg93bL6N95qnFmCWURHbqUdYFfDMtevJEgVj7syejK",
  "key14": "3nuGpJ5k53ugu4krV9i5Qf45CM3LMjwgvBryTLkErLf4itMNYuuotBygoHLg16KtpUQ4bp5r1PPTyazGWj7FUVuJ",
  "key15": "2TihjoQfYtTRb3wdX9c5kjmuMerVkuCJXMo3N5M9u9WDaUtYHjbzr37Xb1uWvGUmdQNMaSC1AozuZHYDThCyUxwG",
  "key16": "4F6hyd82xCevWzj5AG3QE63bU4JGvD9t1qykLnvs2Ji6ww3wsSTAJEfAVVxATc27YN77PsMLHGr9DjDu2qZZeNe1",
  "key17": "P2jStsVPBx2NB5Rnn4gtY9jNq8K5cESEsMBQaM1spnJ6up1rkkaKv9JBwtFoHjnGp2YU881Q8uU9dXsNQXzQChx",
  "key18": "bXsTs1mzRGfGJ9hNmVQSGVRnyaeA2T5VAY3zDgHBsedUPgAPeSZUPG3cwboTb4aMQTXYEk1899fdDLQxKpoBJp6",
  "key19": "2cTnJDPgrTmyrXLmV2VvqipGNL129CQ3j74DCNJEF7ttLcnXdnP2sCMPbKXU6VG4oDoDxUzvDeqN29anQLpSW6kf",
  "key20": "3nGqWonEBYyg1TGv8Vo4oXEqiV3TiY4r4qApkAuUGoBy3JMg8YQRJ4JBcWviWzm5SFJjrZotntwrGiWmTauGaMRZ",
  "key21": "5hqWaZ6mT9HHZQsg2YMK6FaTmES6horwv3eQqjmq56kkNjut9DLt9xx1cZkYU4d8cHWFk6QwFfn8a5pzEpw58qYp",
  "key22": "eBWLASwr1RR7Er4UdxLQuQsaxzTWzutnEFBihrgJoVhjPQjHTXpXxKurdqAJWhVq6u3ciPHVYRHJuMFy4jUjss7",
  "key23": "5yu9HwmR1FfpcPrJF6phMxipNWm2uPBpqYrinSzHtpzbYq4teyCtuQZByZyrRsjqeJc74EWkPag9oBVBca5j4qms",
  "key24": "2b1vU5HBKXk3MhFnzhJHeJb1jwrtqkPndsD5VdjFn9sh59yxLwKsVKFBrudePjBTzbFyEPD4eYhEYUGhvxHUXk1y",
  "key25": "4TcxZ2MFTeNribZPEXXpRe3X64YNvTdUngevcJhDb3WaMJeGXW9k2yxu2sDMoBrvkF92R6m1LnLHtaAE2PZE1ZYJ",
  "key26": "52qzqBVj7NLd4epJAtzFvwGWZNjbg46jh4b8YKVZXYypkFPoUnfGVGhmFKLXFnMNzKYyHzBbf1c8Q5BXpCEyNao4",
  "key27": "55iwDVxC1kFNWjabwgZRLc2CJG3L2gGVw3HCu872vHLBNsZWxKWqPWd3pk4gecLgCp22jgYDDQ6jDCLKDuWdatUj",
  "key28": "5tazpikEzvYwn7chgjnEwdER56cuF8Zy5zXTqmQEWLu8mB828uGoot6BtuHdfLFeEeB99xXwfhcyCo318JhKcoYh",
  "key29": "28abv2WHMQ3kUTQbY9QRA89AJn7aAd2NxqtP1nt646nF8bTUhSHSYQZ8wyTGFaxfkuQHVKHE86vog4aH9FjAJUB7",
  "key30": "64qQfJjFZzqcxQmyD71vysRGquvfh7ama2EytXJK6bBUwev5gxmS5PiRwyH9ZZsnQjZv61MkYeJgwD2oEB5PoJnr",
  "key31": "5gX7bkseU5tYYqmCE2PWKbQQbydFzHMphTUpAAb1cLxsMe7P6c6BEbUXm7uC465qWpwpe1oAEN4hLSc5vnxLbVx2",
  "key32": "4Av2Y4nXNkUZXJnotrHEm9BPR6Y7mP4pUDPXJ7VB6hxN1DgpbpiibNTvwnsSeHetAt7HXp9NCPRHKwfdCSydjibX",
  "key33": "C1aPoQHJkuTiKFiygJwjJY6bkZRRL62aRWhUrXZ9NfcHxJ94ZVxgT9AgefZzJdwvPiNQogbouZkeFHKBsF5Nv4h",
  "key34": "mye6EkTf9i24fsX1eD6tsxeipnyKxGBEKjGYenx8ZycJAxy49Uyup4eqhDuWX6wwrQmadQ2o7itcbcmWwyfygXB",
  "key35": "5cfDPsGbyVH8HStnoMyNJEpkVL8oSccdtX6NJ58gCjPTrYc7hDGjvsyYwvSYGre1vuD2oSwshmUvvw7PXo2Js968",
  "key36": "6NChqTiv2wF9NhwMw1oTXoxKRMeev7M2ioZK3f29g1p1NAF1WqiUtsCcuMSTi5vHtw34Kn8sST51S4iHuHr7ByT",
  "key37": "3tbhJAcFbUaFyzMast5N6TeJPuNT1X1zSRnUK9UZBHKRkkk31HgspFCMRrBC3RTSVo16H6UgTf3o93KTbUnC6xAB",
  "key38": "5QQjL5yKpCEm9a3mgGkF7KSbL1QDMocqYL2Toqa2qyLppiJoCXhk7EmhfVSqFRcNaubys1gZpeaSBQTiGjQSSTPC",
  "key39": "3wLMwB4H7XWtsceP7ZbLnAKzQqmWRjjRVxVstGRm6kS65PuWRAYZ46XsnuLNgQLk7gCbGfP9THEzyoe7h6GWpBaT",
  "key40": "25Gde7UN8uQRA9XkRu9L3CmbLVvu5UyfxXcRDzUM6rj7aAXjFDvt9v6yi8KB41YwpuTYW98jFn4qNJcMXoU8jyp6",
  "key41": "4ggZ2yaJrEaSaa5zGx22YzkSbrM1eTjJSjqe7BTsEPoyNVUnCKYsCJLjqegM8tNSPg8fpJyNur3wLRWjVfxdprfR",
  "key42": "4sXGYYiepPBQLUY9XB5UBHqmKyvRCTDnbSaB5eNmPg1UP2S4BUvhpCJdWmbGrumHvCpqbgg7EorQNjVcUZYd5kbi",
  "key43": "4ASPQXmVUYLhoc4kaD2yyXEJ3f4VCbrVAQ81qgS998nFuyRd7FERGv5pKv9NVFouDTyHYE7UaS72iGwxvaVp7x8t",
  "key44": "3uHxms3x5ikiJvFM1SMQM5TBpd7fTBRiqPeDWsyzz7cXgDNsqLRaj4WBGCQbBXvAMcXVnfziErRGDWtjadohF67U",
  "key45": "4AxraBojedtgNeUezCHGVNZyVt76jk33ddZYDFwTCkKSR48vTpWLJhuNyYsquHxUhWGcukNTP5NsgdFmgnznNwxS",
  "key46": "hxaFeXQ7ZzFjmqUbRdqdic9PGgYD4uvUKvJSV95Pgz1gKCtYEvsimX1sHuQFrJsqAoHRPFn4WyLTCimZz2oYEYt",
  "key47": "5AxXWTyaZiEhix223KMaPxs1iARm4UoFUuDPniU1hWcyYS53yrWH9oVvypkZKFAY1fmZiRcPALieXdDwCH23LpiL",
  "key48": "5BCNrPxz4JHsTxDbziTBtrpWQU76y2H3Py6uzb3P96AsG8S6BRQ19GorSJ4N6zw4KQ6cys9fm8uVo5JF93WZpREm",
  "key49": "279umTRcYaHgxPyPAGwJvbC42Ttxj4e2fgFvwr68zG73BACAHdYF2rWdHhX1Kb7w3QZkAWx6WTPafhYGFUNZBLTU"
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
