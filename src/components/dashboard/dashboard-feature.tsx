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
    "5XWvVZxeErfoWegxGYDBHWVf6Zg9tKr1jHVFbriSxS9s47deBV1BDpfJkLJ123wpCM4jnvQZ6Usj12paSNafzZ68"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JtJAnCZWrnvQjxmDuuFxowVzh5ACRcNmn3JeJPzYMQtEVxCtqdKp5fadd5PYpQRqT89hifcWuTZRtAKThp9XK9E",
  "key1": "5j5hTP4ajignZH4sZeCaxgBpxHVxzzABo3BUdMSWyVePMhzeBam4qt7W5bjupYxVCU283phB8pQsG4bkApFRovW3",
  "key2": "4V899dp8i8XXnW5YDCtrkdzJj3GpucZskYj735smzaDCpXcVqDCui2NTKfP9nGUWkZYH6hhrXFWw7jiqmyfK71Bb",
  "key3": "3YCH75rMyR8pkCJt5gudKR52eQhykV4KV9UUxshR1Ctzqw6gaSwyxD6sYBzx2qTuWDVwGeZG5weLt3sJqKvFfJ6c",
  "key4": "2fhtKcKrxjtqroS3CfFHLdMwruVkY4teoDwrZN2V7RMkeBkrDDcDo2ETyCf3tKbJQw8j98VForJ6gTvehJ5BFfYn",
  "key5": "2C2n9yEgyy4RRyFEsKJNiMpUUbfNEF2cwiXxkLxLDFP5GoEvn7NBcNCpFzXUzqJEDU3EfgNuWBK8mKqRkvyTVhEw",
  "key6": "4Szh7Ua3CVVj7JCNKutDA6aTDYUrohsKkxkbpsYu6hbpFsgczNw9uV5Mew225YgLoF7yHoSgPFL7AtnmMvSzFg2W",
  "key7": "MQxXbXTCVYigZJgefUHTTpLHszvbM2VF5Rq4M8ggpD5BqkSbW59zbx88rQ1fMMKRXfZTBnXhdL3QXgzywSMqZ59",
  "key8": "2ai6XPq8pgiiMciggjfmJDkcUyDf4wK7PDpetSkjcoMMJsxjju9oEcpFza6K787RnfEzArFaMUK7fVTHtjReUeGP",
  "key9": "48DapsyTeXJmxBr9RD6f597E8HfTjmoEMrZjQEK5Wuz4tPpUJbWpnfg5z9pCbLiqRDTP9s8mnp3fFpNt2NXYsvnK",
  "key10": "3rvSRuaH93fmnTQmHQL86Xsk9LNew59ahVQD7wcqdjkGnCqoDuu1wL5btScvqSMVsXUtDetrBkWDMYhe3zgXAgf2",
  "key11": "URzmRSQjjpzJHwJqmUMQwPV3J4rvaJ1wTci3VoohSDouzqdGErDVZ9vG28g5JBXWUkwrMgjGuaKfTCnSjfyHhCx",
  "key12": "2yve2gZYc2GTAuF6zcC8mUTwUALwkWnR5jqS8Vae5uRXempFLx2HHX8G6i3iJvQfaMhgHMeyoFFFX1VKjMn9zAz2",
  "key13": "42vu232a4Rmi8i2XNLMkaktZfDe4ASQUzMb2MzyAvQb9q8N97Zz5egAHhAEfN2vCgzRzAzYj9ErP3sacF6WXvjtv",
  "key14": "2zxEFDghbP6pXYasBaDDVJXZcieGgePrL2ZMUEjCVVP2MwGpxayMnRV4t1UTNtKnzwMyrhavQnE2SSbnMi3PdEv1",
  "key15": "Y5D39fBxziofyyYPTKTWk32uqSeGYsXeUg8zNQsu7n1a3rxpxDki9yRjjjiqptZdKKaN5Cp8A2nZEbi15nEHd1u",
  "key16": "2mjAU4TKvgn4VFn2W1MwTgagCCnoB7u2QYHjxAvUQm1Ln2TbaacVoS9hN4sPgxqWQ2QghcUwzxNiSCBjyu8UCh1g",
  "key17": "5fg5WQEcdqcvPzoCkr6MhnwKK8fS6QPq2mUPDPbF9DjcTsWLfsaJffc2rvm7zyKRSDxqhs8Wb9yQhj7g2SfEkGoV",
  "key18": "3tYAbHUyg5ccFicPcGUTtVUvxMwGZevaBieAPWTrWSiVK34vV1B8nbrM7ZFXvUH1CwT8dXuxzfnLB5sj3L4gZrK2",
  "key19": "4bM2YXWDdBRM47xk97cST8VRxCjkF4JhNKiePEnKkLnQ4Ae5GD2dieGRxv8KwEMjYd4yy8Dfwg3kMrN3NCBKZFFH",
  "key20": "4KVAfQXxZWYVXo32yF4zDFi8y4FhMN43UnCecb1coJZV4H6AoGVKd4AJenv6kn3PAseg8gm218D6wrC2qtJf3Rda",
  "key21": "2EoURe8G3fvm4t4SQc9nXHpXgjkPdiRipbpNcNwiHyvM3Jo2kwtgRuEwLBL3ivazRgEBF2XkkBGvZruzmwJ6KCxU",
  "key22": "28YQ1DiS2X6cpXXQTV4qhB4XYny3CtSV2tSNfBRmUBrXc5aVFXur5efwGpneacFgwttNbvbiYFfaLEX2yU9ZvLKE",
  "key23": "5SwJRJmgXhXEckLDmLAxZQPjYdywwWi1ruekPEzyAMqTqigbjnUxLKTqmXZyDbaQ73dMFeUYM19ceN7iAWZgdZ52",
  "key24": "gEVqGTJxz1xBvjbJXVxm3tQg6BQwob9ctWH17Az31wCSQr5P4NtfyrP76VTELoNBNqQHPQ2ZDwsNW7f2Bvkvqc9",
  "key25": "4WMhsmZn9KzZ2xNhLPZJve2iBCnuDoHD7ctGyiU7meBm18kPEeZkMFkBZ8JZ4mSMYZoohG7ntXt2XVaKFV7PFnVK",
  "key26": "2xwvk4YHgNLwnmAQWXKkTdohjCMCFokg1mBCA3CVPwqKZig5v1KEyXM4wD2ZU23EzuRNo8E5f2eqaGc4KimE9qZ1",
  "key27": "456RqLFyWRLeaezsFf7gWf6p44N4vPpcxEgXjUS82f8w5Z6BdQYqSsAtBtVBVkni6SAgMubihoKJB7rR7pFa4aeY",
  "key28": "2ybEPBGJ4VXniq5WUcP8CzRbBybdaBiyUV2y6hh6uoNHaMXJpDkmuTUMoGSsUvMp5SHkTd3XARiENktk9EePSoJj",
  "key29": "2NWmJiJvZXxLpWqhGrMX5qgnJqbooikKi9b5YKAyXRrJmw22p65DW9bwe13kMUPnQm3YwPFdnhHKj9jsr64cNNMP",
  "key30": "2EAHujkYo5N217dsoRKewDFN2XPCMXeb1FAUwXu8FanULiT3QyE61B2TZwwohTjkchYQj7ias3XL6mg6rU15Ez8i",
  "key31": "3VrBJwtdFGJqZEhz79dBqk1Yt76XscW56m6oVtmEz985iUyWEkHkyAihw6qBXuzHTudS92yduEXD37Wu1LYVFtCk",
  "key32": "3fppPbZAZTvnEVVyJZazReYFZLkwfQFYT8ktQNgVA5CWxXzLiUuL3ZfmmVGwVkASbdHynAq7utaThw84ypX3zsE5",
  "key33": "4yB9EDb8T1q8PCz6TSb6etkh62FSNXdBEAJugpL152dSME2oJQnLRufAxeDHd1pvUTkfyS88nB8tbWtqmuLKhaAM",
  "key34": "43s9jwWJ6VT3pTxkdJ4yyr1nU5zYX7BnnymFC76DyjxY1AMwV4wzfKGn8RZcLG9bce31qoGVfyzPvR6hhwLdGMkN",
  "key35": "2v1oq7g6whA2Hxcf7QhssATaXWaLbrUHj43Cjd5vVXwrnMWrAePMk8ZT1ANN9F1t9p5T4D51tTAvsM7Ys6m3PFeV",
  "key36": "3EpvCyHA9tBLjTUmwuax4NUM9zt5EPkvs2Jxpv4JQNgdJpj2bykqWi5iW4MoX672QVtbEZYhoNChQtd3TAcJH914",
  "key37": "221fRCKazbYvpJ6edmpCYQYLjMLD5C5CNCQJF3PZFWeDxK6weBsCaJKm4K5Z2FySLbodaHKhxPfy9L7UZGLmzk2g",
  "key38": "4BXTzMAakJ6zWAwdqnkfMh3Asxt6sHP4h1z5hLWhmkGzkf4aaYFjZPc6iFRTTL4citXQU3eK2EgD8sVQgTaEBq81"
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
