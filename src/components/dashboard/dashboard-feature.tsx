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
    "3iqDmYgcR3PCmxg9ZnH5CGZSjXbx2AR2ZTjYqZNzbdcbJi7SdZCzGVZXFLRJz2ypJHD4o61Y1tzGDhDkRZHPqYu1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ifPdJKBkFsE2PfLUWqRNP4EX2vN6oJt4XoaUkGv9Md7rrtXkBj8hSw61yfB3WvZ9MMYBoEwox4kTnPzSBTm6eTV",
  "key1": "33RAVRELbFErB2hmFQjgwBPvmxk9PctjUK3zQr82Pn4kt2wL8jBgCWJSNkcspJPbhzmDp7iALuiyip9TiLd2gGuv",
  "key2": "5mP4ucLeLEKyA8wbBpWeEwwrjZSZ6Ebty3HjbCUBU4zEzNACC4fR12eJQ4mzu6VLvn2ZDzZE3LGnMpsKBZNErEAo",
  "key3": "aNzVMQ2jMwtTafrtkBMwqhVPpxdoKJi5WmApxbZy8ogdxcMY1KVrenJDnqGFnH3FZRAeV9YnMAb7jpoG5NNBfYd",
  "key4": "38oYViBvBogKzDFpxtBbrAAQ8RWjgELEJMQrEcDemhX5VkQg5fmFFTFVRRzUFijsQuCGjDQzNDZvwxjW7doHyt5z",
  "key5": "2x6fvepd4z1oWa9CVRjewz4MD6QkTtUjRdBAZg7rJgLi7N5UWjeon4vgG7hUdjSQNAhSrnbtqb8cdhCcxwcaXJbt",
  "key6": "55W98JHWvinWbLLWgdjp1Dtef5vMZU83N1xiN4TWpgkehSGBwQbBMh4qjQUnsidw1c5rVZQcCSsPt9WDGCecD5nQ",
  "key7": "227LfvLFBZMU8mXyKBnVdcBb7Dd7qMeHvwvJ95wVGBRYUdBPyzgpB8tKTUorWnfyrwLoi5DR6LRwHtgmNHRhqUtV",
  "key8": "3nXDCwb45CF3kxcqirNHfQoZuqzGxxd19G3NoYTw4AgsQi9JbPjKjYz1fV1uAexf68fa3s3jV2fC3XPqrvhLNqrr",
  "key9": "41yrQzX15TfJv1BMFPP6dp5ZCRUMod6foW8AvgKExus2tZbHjhUDqBy2v64epMfJUChHfLdatNpwNnfyskZx6cdz",
  "key10": "tft2p2Cf47XFHGGvmfr8fQesTXK664FKgHTkYZSTSE68nmsMZn9DvuitECqrdVkjHL7EyGDPqFVMfirRGW5cYGE",
  "key11": "SmRMCGdYQKvLie8MD7QedosMqttMgW58xse3W1o8majLA3mUKw5rpQ5yCxaWmZ8BXHRyifm3KgRiTf9DEwk76z7",
  "key12": "3HZpNb662rfj19ySHeNVMKky3nSmxgv2kKL68rokc1BgFDR4McRBBTE16jY6neMLYVMbToz38YeCFicYQpFkU1PV",
  "key13": "3HBLyVQhoQKDsY391qZ8hbARQGJ3ThxDmonRHWrkmyv9taeA8mr7fa5GFExsuAbwho28oF2ZBHFcAA4yd7GhDbq3",
  "key14": "3AJ4aTXYnsAvdDBNNFqYQbqmRdQyKKcJGsQqk2GZpav3AAEzTnjNjTbPFozDosL7iBefna8bBSJVgg9p7hjKtHgU",
  "key15": "42Kbk5wbvDJd26YHJ3DVw1cdCpFZ4VuQ8UkErpD1x63tDLQW96u6U3Xwn1mAzhSGRBwzbChdFf1pWmJnRsrf1fCP",
  "key16": "NdGG1iZudm3b3wrLciN3U8WC65uBaCYBTb9SixFtVTqdwsZYexMRvwJwBDCLCPXdK189WEhu6Mw93opNT5X65Vq",
  "key17": "2RVXMaLfcnSvFx6FWa5hXNvtqa2VNzecv1myX4gxKJi5vwDio7oKcmHmRRYAch615734y2Qe11oyywb4cY3oaiDv",
  "key18": "9Cgiv8AZqnBWm6JbRmzRmoop8gBmeXstd5oWK2UHgfgv2q2G6qw1ee7kv8neBWjDbeEMTqami5GUu6Q2Sf1azWf",
  "key19": "2REQQBi9BVz9QJskK5knByj9aSgofRCr5rDKkoMdgfoqQg7vd4yT9U4s4F6QdCdpH4TyLLL3TLikEntVZ8F6VPYw",
  "key20": "5KxD2pxxNb2tQWQ1eDn27JrHqDthCnuuAN34Fwg3zpTLfqWMWv7KmACrJQtEj2B96Kqbho9Qi2a6QEhGazXmB9w2",
  "key21": "5uACvqyp4ewpi4gNQhfmAoswF9x8kyYP8BBGcy7x2WHvv5Bfqy2ipEPWcX6794wkVn9EGzsEQAnWru6d9Pahq7WN",
  "key22": "26LFUzMQZNVeo6RQQtAjLcMtrr2v6hoqh5XEq5SYs36giPQtireMA1tszUXpBTFiJXSCELqDPvKAaSN9EtHKzndE",
  "key23": "4VaF8giHbuvJHM4KGnWpSyvozpek6nG2j4pDzp5LCvLotCuLXgjEZJoMHQBhRTrYpGtTSD8oJMcG1kagfdmiQfB7",
  "key24": "671FM5gWHaYC3JhunAs8AEucuBudfd7Gp2Wpp74yvXUGjj2t1bpcDsqjiRTp1HgnUm8Z5B7eGw4jmcfMf5WotZF9",
  "key25": "5r7EZRmFtWGD3pyQ9SnEFxzoeM9wUhfdHFRehTHbd2yYKT4CmLGFgmoYiWKVur8gUUDahpBGL9du3Qiq9GZU1a6c",
  "key26": "48eAs7UVo8coFaAcAoV3Qbb283ggpoVszeTSkCr63uNT6eaVEPGPUeNTW8J6jQm1TgccX4PFpQeDvTfFmUXhwLsC",
  "key27": "5tf1CTDkJo4YQkHrJGBkzKfGHYTQTmyBJuAjnBrXRZQZqj7hHo7Zx4GoiDjj8fFs9rx4s5L6f6ynRVVa3k81UZte",
  "key28": "2e7Kio2FAmMzTN3XfYYMhh4VMZN3Jkw21PxLEo1gvVPMjThkzGLLhhveKr5Lb4JJTaMDjKuPZ6X23jSpQsMWbrfH",
  "key29": "3TsmbZYpWtaFWHzup75JfRKzxsasf4d8tFcqcGvrTZw4JEDaryFu9k19m8NK4mbze4QyeMzdeHrkTfknhPJyWGXS",
  "key30": "3G2YwSj8RJFnFUsoSbkxFYyp2XLwFJ9mHZBMBx6a5XZwjFFfv25jdcWD6Cwmko4ZqKBW7WRazWCsYbfsEYMXEGUi",
  "key31": "igCXc1w89TSWv9jgRX8JyQfpzSKE3bUfUrxGbWxtJhQTxLpTNbLiANzecN5Q5bBbRUvfBSWtA9cF1eA884VJKQ4",
  "key32": "4SnH7tRoouTDgwjB6iUGVjLDKDbEkowvddzUSr1SGMpLopXhmi62iN99rWwYrdc8d5eSDCHR2MeALuUuZKcusYvw",
  "key33": "57pxvR3yu1RieFQheQZ5WnRvWa3UKJQxVB2mgQUZpQTiD8eR5PqSndWunCYjUgzM5NK2RqZeU6ubYu4uN1dYRG3c",
  "key34": "3dc3vsaDCLG19qWHFeFPWiLzLZ2M12Sk1AGLmHu4uvyF1r3q7LDZFHZ5WaS99feihBGnpzrAdB21BWDBfyP3MGB4",
  "key35": "5ERS8FZhpi4KqpvZeCE7tgCiYd4KU5oTVxqHEgkw7WdhT51nZgbyX84t95LAN3PAspsdCbX7x6GwyAMyDfyexJ21",
  "key36": "2YQcXYgDNNhHcSUGHgdCMbjpczWD4qdFSgv16fFKNtudbS9QcSZLc8Vxmwp7oZ7S4P1FwRT9GL9cuh8ZLyf5aafi",
  "key37": "D488chrUrk8BVZLVW9UBN3C9J7z5s7mMszyf7FNC3ZqHwbyv9dsgi1suUemhsHTRW2BuQdeLTdb2dfULF6quQfp",
  "key38": "p6sMtC7nqSNQskwF2cfVnvUJ5Cg9hD6WFbR5LNct7LtVNAUbPM7iAudHiVAYg6ov5f8MpoxDURo9t2NChEgpLkg"
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
