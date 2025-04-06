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
    "3RRMSxS1bPYZsfLdBHAXvo9CY7MSs4EjQd1rTUSjwExQa9PVAiVt5MMeckUt95ZyFnBF44ToDnYNpWw4f3oZs6Bk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GfqNrNoxbzuTNQEoNXhYuQ1xvLgGHeM8cBzvt17B2hpGD3uTTjiuB54VA6J7MXKdrdcH85eeVVWkjda9RSEoVnq",
  "key1": "4vzXisiQVc7N9PcB8WRZpUq8aDCdmn6wtJMZeZqZaPy5m95UnPfT3eQP6M3Q4Le4Wfx4t5QEJwNRSo1ZAdjx2kd1",
  "key2": "Dh6FuJverYaeQ2t9F6wijbvrkLx7yvPMBiYfcqE4cASzcpdzc6dpDBNhP1X7JKPDLKsZbKinUan7xQBKsi5h5mB",
  "key3": "5u8WPCbLveKYXGLv8HF4snyuJL8vrkbxb2rbQuuyb99yXDune8nHGJKqxar3SgDd8wEpsAxtgh9VtDFuCPfbbqif",
  "key4": "4S6gBMcapRc4jrqSDw19XaKuG2oxaffhwGJAsPjdF1qcDt2aT9tWuizXt4KXSQQMZdYLr3SuxvSNgza74C38oi3C",
  "key5": "2nPiszAyApyRySYMdsTBi8SeP8K7cwRkqTCyh4okQv8FogYxfiNSJM5f1rsHfQMHjzdtW4k5cBaZ9bA4S7r34DKx",
  "key6": "4sCmQPgzBUqCxNanGnWkvv9oMQ9f5xuZ5GjaaBXJXMppNpUrUyjFPEC8S5Zj2MEdZTz8ygSComHEJbYjRCmzjYY",
  "key7": "497rN8DGzYcZu4txNFf2aCfNenYx8GpTTgAEQKNABye3fXwvWHsf1QE43Vi7XLVSTm8VfUHsbJn5zTV4dCLBWbUk",
  "key8": "59jVcjNLFRikFufx4JGmGgyqMY63wnbcx7DjvaAb5rF81KpACAen62sDzxJM4jFXKzZGjCYGLnvmPypcCpvtPcVD",
  "key9": "2rpDAANLJ8oJrHZDbvAiKWQAD2Azv5uStiiUUuohBXjWhNk1Ds3Gg6FqKmTejzW1zJjAaHCCSW5PHnoW2pbjYWUc",
  "key10": "5qHcpW9Z11wsbrN2MrGcuP4Qst11PRjkRiCkf4hYWYr3fPkywKNeq7EXYAjFcHk8bHCe7GTwHazrhPnHrdLHWB3d",
  "key11": "7FgXCbNZiSNFWkNMkUNqpAcjzSUMpUFuApzoWz1LJp55DptnJdxPzpsxZ9qMo25qv6EvXrf8pxBsSfrPMb1TyAB",
  "key12": "4sGuZeEaZrHkq2Ug2NW9rXHYFhoHHtsHoVTPA7UFkGPJoybDbrtr6G8hQNVxs2XZNqMoHWnV1mnAX7EAHczmZ2tN",
  "key13": "2RJpNFHP55XYN9d1rCDfTvtJ7bHu92Aoui9rL5Qt4fWYXsxa79VkRLHmksQvpf9DZGmLQmr2aKWFsxAVyCLSndVJ",
  "key14": "2s8cZVPZeus5GWZSrPfNSzi7xK6mQQDbGm6ju9WRgqQ7R7qPy3f8eoqX25kJnKR49qGXQRbjSw2zLq8n1tpc3Lzo",
  "key15": "385RExW6BpCmL22Ybt6tJHp4WJPa6mHNMpDb8UhpuRFTVtojo8thiPdu61J6CeoY19j7enqxTATnUBS6VY4mapgw",
  "key16": "2cnbrFocZgafJaUKR4hRLzs1rZ8n5TVgH4oH82Cdcz2vcLTbfcm8FCvNHeok5T5PwsJvs5ijoVqNZd6ScZt9Ge8m",
  "key17": "aEjL16gzev8mWpjrjztiFbcquZMupheSYrUYQW8jjLtzqeVdmsoGGzTHBaaNEMEacrFtmbsYdfLzhU3CmpGoPVT",
  "key18": "xnRS2R2tNNxQEsCv5fo4MtMbRhLoWsBZrsUofrhpnsutMV8vZj5tLuD7EwTAkxQscCLkUTrGXvDehRB4F5CtYcj",
  "key19": "4SzCv2U6zN9T179Hjzg9WYR4fTFqesXFHycu2s73qJfj4cRvzoadKNNfriXSgGFSECxEQeBJozt2zNsurLurRHKQ",
  "key20": "4RbPV3mcNqH4PF5qDKYXW23ZN5svCb1vLKKuTrJ6G8vrUs4enmLgSwNvSDZEs48yd68SLhLYNwo8aLBxo8qBjvfE",
  "key21": "2pvMxwaxDoQbKwTZkrqwFzUzLqNziWFZb3jKVzLthVChv2tWaM3kbC5cty56MoCBCpLFovkYSxWNoVW2LzTcKatq",
  "key22": "MsuH827CLdmXYdkrNAUyCNB1TdoBCpPYvaS26sdHotoJN87vq7crLSwRL6GnkGSKeGKa7Tad82f5Pbva1mekCYn",
  "key23": "5gjwAKjjjbUAfaSmWASX1hD1gsXPozPL1gf2TMf11zbCkQxpwvvN1pCbtEW1QQmUUhf5LvyFB6sr4HGgU7BV6KHp",
  "key24": "2FJkWq9UA2VdcdibP1wd3JHokcvqViVDzvxSjAXcH37SvMWvMaXXW6HgjgbXjDP1tDPjoTSnRyZzFU8xkK2tDH3u",
  "key25": "wPfYKnnX7KqxHuAtkdrXrhGhQ3bRTar5Dvx9q7uffVJpE8qoRKmcgr1sNnZ36uZf5TZt86r4R2VicsyCfsVfqys",
  "key26": "XsuYJe3egUJ4MkiWQB3iW9CrZY7YqskTXHAhx3fjKBB3ZjdcBoTkmq27LTLc5BjHDeHNu7LTj6JJrdFnCxBSKQA",
  "key27": "2ECYgVNVaFHScZV5SFPYJTcUmjCJmWBjaL7jJfEsp8EFjYUu5Wqjy7LkBeNHTrBuhFzXCBnRTYkkuUHZEe46TbyM",
  "key28": "249XnVmmFxVwWcGJ9VgTAEEr9GQ5veoiqrBbYBBpWxUaQ7UNQuoahsfTPCvDVLakqKcspf1CGo6Z5JwPg7p2v15k",
  "key29": "2SQBXfxA7X6evUTkkx1peMhNL4MwHkeLfPh48n4gVcE6t1yEL2GDcdbJC9cYict5JcKjgztuGbfrTiCFUNVCjWRu",
  "key30": "Q4qo2w6fW8CrRV7u6JffX7mgCA9SzdH4upZANeZndrh5zrqF5nkrFttANVPDSgbTN7EHeqZiY2fyvRB32GJKBTM",
  "key31": "4AZueggzgaihLo3CYEkh8vuFc1x4RUrGHaZyrgJZx55W1ZUiknnGhuVEwWSo1QK7A5jia2BW8vBK9EJBEJSVXqVA",
  "key32": "4Y3A31wfEKjvgHJWHunXtpC5SZVBEknAb8ZtfwoeAuTpUt91bbwgQswB8NwVQuzdzTMwnBpcMhbpKxMrDTp274tD",
  "key33": "4WCWf2KY68QHVFZ8QvXufhyitnAbCMcLAGQby9w1XjfLFQXfKFLxKpX33ppbzxEnbFuDBNyYv5vdg7ybJ6sm2orM",
  "key34": "4aTontoWVG89TycTvrosu7ZfdfHCaqhgq3sH6fQg3XcUbdbRUfZFJKncqGsj56cTQEVFnZre8L9tQciysg8gmvNs",
  "key35": "HgVRUvpNgSUzcwEHKzt7ut9bBGHkv3GNhSR1CF8913TWcrGzWGqNKTy6U1Mepod9u2UJzb56dCbXe9Zegb5yCHk",
  "key36": "LZx3NGK99LAvzX497D8jyDRFxvpAionFJ8yjAYfqoJrqbuGGnihwnhUdyaYeMrkYwsSB1jRkG1PUSnjbDTyvD26",
  "key37": "3aZRxxSqWfrbbZMW1HD5wBAyTtsF5HYLvzCaJWwBPtE1o7qgJe2Tt1aEVV8K6A28C9EU6e57hqt3G5RxDtBywkGu",
  "key38": "3ytKJYwwC9cfoFSQma4W586L74RAcfZTvmVt9gDfjQxn2q9mKqjvd9AGkTdccCVnrV6kWGrmgEVervwypzPKCVjd",
  "key39": "2UQKVavVWiKwYvsiRi24LNVWj6hJDbDGty3TPQ8FkZr3eULMHkGtA6ppMVdxsixWqnvzHrH9QqRgfNeNTW3rHAyG",
  "key40": "38UfFj4hGkMaZ8YAxogLThm9RMrRyPtPLfiyWSgiFbUqzfyhHG9B6tRipaA9VwFBKMuT3DXYUEbuHF5UbXK8adP4",
  "key41": "4wdQEYgGCyy5cErFL1pfY2mbJcqaw2bZF5638fx5NmUFcMzbaZX7tAsF4LvxpPCqtUJsZFuqzoetgkG2TNey4rXA",
  "key42": "3hhonJbTSkU8zxmSmCLq1eeSrBhEkEFQeywarzKqANpxEna3Cejvna3S6h5CHiyMmjy1aSGhkuCuzSyFbjcxtHkN",
  "key43": "5HaGxqgr4M44VinMvo7CbCbhoGaeNtV2ZCqRqFYYAk3BF5ReUWCKRQvBUsSbXM31awunxHG9mA6njBrVKzeEEyAK",
  "key44": "3oSKAsrU6WtRS4coyniKw9Bh1oLnCUL1HQQqfUu3JNDX1QtgzeKa82UD5krdTPWe75Xx3oGRfnxDDZpmeKFs8byA"
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
