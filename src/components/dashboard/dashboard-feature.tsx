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
    "SauxRWzPHVxfbW8BrgxN14GEm1UXmk4Hp979Eu7toCGKqtvw1DyA21b8qN4nQoVbbpYpwrHk8qghQ1qayEhwRQq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "whVSdPmMTxyFtmHLg1oS6jg7wEHFrr6uEgRfsgUxJSovS2KeTUuGisgvEcUxCQr4pg52Kkr6d8YhZEVGyaTsPS9",
  "key1": "5sL1z2MRoYEhJvgNipuTEHhMvgL2NotKZ1B7F2Nq8EJKXqDSUnGf8wDrGG6hRHn9tg4wF8XjAyQtP5eSTeu89Vjw",
  "key2": "4hCv5Suya9346ogg9ua2KDtb12hbyJXunwLw9XjS8SqLySm43CjkeFJ77AL7PuMjt2s2yNSsTX1aYXPHXNSerWxG",
  "key3": "2tSH6CWuVfoKbkw2Ft4GJpiAhoGF8CjUsJVzSe5Y2SYCP71qYJ4myd3Et8rK7w1tK3y7oZKrai1j9GfH5pniidMJ",
  "key4": "j9YJRRXKEwB8ynijLKpkyyysa1m1Ac8UHSpN2VRac7L3y1zeZs4eTEjDNKsYY6g1VuN46F98fZTboVZ9JgZkWto",
  "key5": "3JAFk7t8HMViA78XSvvNV4mk15rvdGsPWk3395Wtqd9M2nYoupQCoH7H4vWxte7NZeBsJHtLBAR2oaJJoBiu9JBq",
  "key6": "2RTsvD5cCFGsDaiFhqFFQvG4nrFfdtCpiV6u75eS7Pz8zp5KSJkWxnwb75xVCgj6KQCVGQsZytBBZKxGCQP5edds",
  "key7": "5f8CMmAoQo8Wtjc8PgKwe434Gdhs4xD98DRcJKFHbX1ayotkeDN8gvDeEVybBpDRYPaeq24qxyE7kKNQd2EFihH1",
  "key8": "3x2KmoYR6XY9QKyrgGLuxKDdoPMEYehcTJUnZhn44kHkyK9Y4GDSotLgMsK4XBRRJSwsVcrYjUU3wM72SbzDzPHJ",
  "key9": "CFj3uVYfmZcaGDtJhs2oeZfQe8HY9mHzdwA9yRBcriWXgS8VfFgcrX7gTKQ3Z4LoCtdZqrP1HUxHj8GBJhhLmGt",
  "key10": "VxeXki3PP6mpBh6JsAZvzy5qmWdyCZjm2gV9D13pXF8XvNP6oo9SU4WHHSeqAhjAeh5gyExai5xWzqtFTU7DpkM",
  "key11": "4n5b8HKneqRf9zMHbZEEfuP6rv4odgvgpv9oc2axQ2M2fcQ8DHUwWKRGUPTBJUaKVQEFc9tyfaFxiWKxA9czWHrG",
  "key12": "23bv8QiAZXKm8WbGb88MsCgFy5LZezwJ9BCLjy2Br5hTjQvY3NFEgD3q5bZy5a1mewsbXiBuH4jbb7xxkt4L5tvy",
  "key13": "5Jn9ZyUSzDUj3praCkwT6Z3p7jkrhc1skJmVQTgrq3zJuFZU3SoTSskbsUcX35mHcvK5fsGVF6ovQYAoZgNwrB1R",
  "key14": "SmKaJZPpANn3mN2qdPvpVjnnFTqLs3hM6v4xSQdZoi4QokvQxLzvPgEiptR5aZFWKp5y8bqviduo8iLPpsEYXXW",
  "key15": "2iiBHtRktcDvjx3jXkQJ9jx65AoJG7u9ZbsxdQTJbdQdXUGWDtz18ky2FdANerjsC1N2k9TYbTstTwryw9etjpXW",
  "key16": "3zZi2SdF8XrbtMZVDMdnCfTy8heG1sgMtmeuZswUDYdUmYuS3Va1s3oTLswZQh415baS5Zov9kFqnmGs7Q6fXvdw",
  "key17": "2UMeuRVfu3uFuzm4zLSoogantfUkKVVmU4NHXKzqjBREdGQVgN9QYZuSL8732MX51rYHrYfVbMJWPh3Pd1N2zfYU",
  "key18": "5ZmxB2WEQDuf8gJDg6w4Vxtn6hBA6K34oJXoszUXdWkNYUd3PUtKZnZFyAMgZYmusZQeMvtBnUidpAnDeQq6fAEm",
  "key19": "5ikf883mCWV5eTET5bGjFxhxypWFtFyX1i8Wie9NGx1r8ax56QJ2zaqnmkq7iYM7Gm1uZkfWRzxrY1PpnHn9K11m",
  "key20": "4rtEQKc4FC9gMn6sbtWz3D7wFeNq2fLzigu1zt1caPo7NQhRxf4E5nqs6qVMQe3hLWWSdhxXFL5wrNqdz9eV9pdK",
  "key21": "2CQgdND2iDjcaY6GBGMdP19Q54cWuSUmAgnsdSYg9FCjMAXgWSiCUHts7S271npiNDgnZeikpWtZhCf636EshENm",
  "key22": "3UNU6iJdVgheVjZfYGoW6zRVbq1FiU3MabWfG9e7fSNGUgQrz6B8cNEZPLgwsvAmhs7Xbe9SAiNYcKieyguftTYr",
  "key23": "5wmMbdHechrNReyNeqtnCMdepaFHRjbnVHzy82fNHejmviTerJ9K5peR4NDxHwHFm2sjbQbjvcyCkVQEnLVTNq3i",
  "key24": "46geaBtK5DusJnXAk1FhMzGwzeU4EZ2kdtzZ1PQi4fNAsGVLubYvaU8h7dYoyucgLDosStYd73sqrcaKfFDe7Ttv",
  "key25": "3SfChHbxttE6BkpEjzX48kkQA88nZE5NAmiWH52rKAiCXUCYiCyza2VqieGG3HodqGE87N9Z6idc44eznzcZMMir",
  "key26": "UmQ8LZvLREyrSjWawmijHcmDYUZNKXyRyMzVynXaFjjfHnS2t9oYMALtuhdwLLhXfieX69ibTALVAPHzQihNhDv",
  "key27": "3g78AHGdkkr65kNnmddPh6JhCeJSfsMgzDKMY9qEPNqLGoLpC3E3fgg1q35a7p4cREtEATD13AoS8NZTHs75yDRj",
  "key28": "3WycBwYUFZYroKkqarAzoXghUVmiEmrSFcHi4nrDhHmwD2LuMWjWDMrpxLp7CBNPR2TEbmQvDp7SsaZBp4j763to",
  "key29": "5scR2QGSZgt1HAxJJ7gHTCusLEfiEKLT7r9HdtXWxtfThKupRh2gKgTqHqCp4FZC8XDrQk6uyRRjviTFYxndYMJ7",
  "key30": "5huBJAB4EMkbY53KAjvBnr7vYrk4ZzsMJBqPuM3HKWnoLFMrjM2J39HynpckVR9qms3TL8t3Lc5TnECTfu2uC3p3",
  "key31": "5Cwjv7qwcFcRJ1rUwMM8UxxXsYXWrQmuV9kpwLbgeedBzFX8sWN4caiwFQMJzzbigTZ7dBw4NUipQ52vG2bNM8wE",
  "key32": "2q98qFi8YcmnvVSuCZGGgExrV7FHxVSmvYt2FeQ2gLL5HrB1qBeQnKQRU1oaFVUZvssjCTkuZMSEU8N78sCGVsoH",
  "key33": "3B9CChPHKqxzYfHPfuHS2LK2KoG9TLSbW1nKfBuV16dcY738gMjXL1V4WNBxXQngVjqGCZZtk6dmkQRZGL1mzJyz",
  "key34": "3xsfHtC41GN2YvSS8Gfs8YW8fC4io5VpWi3wLTxBY4v5g5ZJrN1QLQpg38b8iRW83PnwGhdvn377EuzpJvRnSrGq",
  "key35": "2nJhvQyufx59dNByxwJSnmiBRjobLUBVhm3fiZtEpp8248Sj46LYvKj5Afv9MB8youVAw7JbqBLnnDMcUBN7b3xx",
  "key36": "4iogwNLu3Tpi9oadVfmBRE2EbzK7GqtMYwGFK8LvXmAcoES1XzYJKiGEvrEBNAywQW9ujM6T8f2Djw2W4RNGHo7n",
  "key37": "3LVJdhFgrAad5NNGLTTLHuWBErtriYAV71s7tRCzi7h9q4SdQ2zhsCrned3soNTWBWNHSSC7WYQ11iRqyACsUz9t",
  "key38": "4PDYfsfzpFnBNZSpeVskbJX3S34muM2ibYSeQZtLci1ppJSXBDZ6Za65HRweqN7C7K2cVyZQoiTTx4Uxs8gFjeiM",
  "key39": "2ZMkLLeQL1QriEx3vVZWSFHUWF4w3xmDm2igTTWCxiJ2HUPFz2xUJFQaxKZG8xw4sKtPTLCreE5ZvDYffG3YN8v1",
  "key40": "WnUHsZXoR2VYwVsmhCtJsABW1pHrSX7d9GYX3YwgdGRSJffHDDbZKFFGfKHgcbyEGtgvNMTfPPLYv44BsgtLU6p",
  "key41": "46q7XGXP3shZWD6vQJagnfS2yBk7iGMk8f8YztzSekNiaBBJYikrJx3DWQiNsdXjswmKQykw83ens6HduZrA39Hs",
  "key42": "5ZMPNDdZwZkuiUuDxMsxH5reZ3Gk7U6UAqRjF66PDh8UGGfz5RKXziLWheQsayQ36BK3UMwkDbDvK2mva4S6c8ov",
  "key43": "2TUZHkLcss1UQvjRE5JERWda27sodJAAjhvhbSeAWBUTLtcBQ9pE9nEfuHjNHLEoJ7ZGdFfv3f42PuxC1fcA3KFW"
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
