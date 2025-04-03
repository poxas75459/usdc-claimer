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
    "Nnf31SHEqAGXRYLYqDNAnLGj4exLhfAU6MxNQPCLRq6CDHoiiZ12MTib73nbBf4GKtP4G9F2nAeh8mMQAQvBYFX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QfbXjaN1zkBUWxVWxjuWzNArATbX2wFiccK3wiZ9rY4Q9xjKAzh2dtz84aVYJXLD17vVgfzTw6tWqK2h8Hk37Tw",
  "key1": "5LrR1Bh3pAGXKFyRDYfhVNgkG8Z7cfPhQti4fNvNmP9ByEdbYZUkqZEUy3RvhhEyTi8eeB84NbWoBu18YxpydK8m",
  "key2": "4JdJ9VFnJrdtywfWjZtQXYvKCkMP5w8A6GoQVYbtGjqy3pSMjgmnDs1isxKzMQnYnwr4eKGqwR33qw6hDXUmTZBn",
  "key3": "5DiNaDXHY738LqjQuZENmgFrTti8862LdLuMsGHQz7vpQcoDbzKSSmNe16VnXnhM46wpJVoxTQudG1rydEiMhHAs",
  "key4": "2zkAVYMsNQoe4Hiq4odVd4YkiivzDwmdk6DoR26A9CWuUjcBfLWxTvUaeBkWE5FvbSqtndxB554Q8s4PYvxzc1yM",
  "key5": "2so2uHXHPrhChqtu8rJKJ8c3QmmYunb7ZBzg5WcjqB4uC8vMMBwtvXJ8tHCzmmtv8nBXmVbg6GtWr4MNqSgcaciT",
  "key6": "4eRJxy8DMnYDW5E7uEW3qM4cWACVhNVbxuankXYq6cvewz66AMsuSetdzQYBKDZWitHiRQmLGcCYwvqidWr79NnD",
  "key7": "4J5Ly7gecpM1DgFEZhkdvUvJBsxMfaaj3jzD5vaMA3BZRHGz1j7qua3XkQienKNVtQ13qDFoH9H3amFnPrhSkKe8",
  "key8": "4P3qMUzr1z5aZi5Zn5PS2uKJRLnVVZ1sc7Jw8PxLxGuHBUcdoPw6SQMa5QufQgoNxq23sPcV86ErMjjN2HzN2k23",
  "key9": "4XGTBc4fcbpXYkgkmYRMQkxMXtrjrwyPVV57XJeQsE5sEVPmYDE73Ts9pWh8bBfSBrkSGBz5H5YCNpcLyRKrZhzU",
  "key10": "5G62C21PV52o5CNNTnCtZRtWBAe3HoHDF4xtf2QfUJ8hmBCJ4fJKhNgZLVuNqwfutXpMmwzunQn69k3WS5CfBgUu",
  "key11": "3BesNmvrkMEJ1WTVi8wZkv65MXozWHctFCfymTbow4mbPBawdCijvoQ7ZXY34pqQGAETYrp3Ec4T67ZKUu3gmS3Z",
  "key12": "4EptgqiMBvDFKuoxqPjh2z67QPL5rg7BeCoUwSPVEGCyge133SgepqsNMxSA3SLFSP1rC3Nh3JzhJE6inuJApWmb",
  "key13": "3TJbLzeYBxbjvVZAi4RJa272tUC8rE3zTNgxT6HCqK13c6kvXgtuz9pGoq8n91mDeUoZ1E913vEwgVDXAn5AAdr6",
  "key14": "5orwrJsubergZyQPP2hQSFm68i5zCPkvAcz4LNK3QPDZnhy9yCtHiqkD7orz6Yfaa2zMTEMigvVWZGxUd6PEH47p",
  "key15": "4rY5daoGmrKj9y9tFRwrgRMK1o6hjnWYLBY7bspyQ3nmY4fQU7Ehb4G2KJXEUgCgSdsfYiXxNHDPgakR2H72pLvY",
  "key16": "eQUiH712o8J6SCmZu5PGiXTDqgUhVN6cx4JkNWK7EaYbEhkZAfnEgZkVvXxjRMoYbaoevncfPGvbFeSwXSnj6DY",
  "key17": "2JP8uWecVoVtwmpR9GdqwQ8iiNHTCkB7CXq9CTSayExj2Wc42CjCbmpjfYcNFyo3nzU7jCH2nWoqz3B4vZwDHXiu",
  "key18": "2J47eJWY1GuMvidWoyqD1m5Yb2RxteFoo3srzJCgUgmkZUor2KTjwn9VvKENo5aWMp1py5PHbm7sZZUSjBmbV83P",
  "key19": "3ok6HE3t9Kw4b1VxesMvw1gAufx46thjPnF6KmqLnHkirYsXHsWgzpC2PV4PNcjwf2isQYCA2gcxm88KCYBBCNYE",
  "key20": "5gSJnqaUeKSyZTBCP92JwxQsox5xumpsha68jmXLUgaV6VfCpmE57iQQFZoqtuXXER9cwcvvj7HzXmExaSDeRaDA",
  "key21": "G3Kko8vqh8VZ1iZFCA58CPTEgzZCYoeeWBzYUSr3ZZ3TgPtNJDC1whtT1HqBUtJcH2Q5R37m496uxqmMDrMzwUm",
  "key22": "FdNwEZo5Muz8Dcfe8XJ4mJLfxUrYj766XH7gfZxm69Dhrs6px4JTb3oEimF1PMpHt5769YPMqCReUitphMvfBHh",
  "key23": "eCetSfuSSBDgSK2T8hdSw6M6hJ1XNyrMJ13jakDtRb68aq4Pq7Bvnx5BJi9Di7KYiHNzhbhYKuuPKULLDjBeBpQ",
  "key24": "BqxZavVzo4J3opdPaTgAWaUsJXxfeH5oVz3J3VixxdNBTeqqHNYXPmpFEtmjF54CZk8YbWo8S1QFMLSwV9AQFKr",
  "key25": "59QSAunG4Wdjae7AAc4YZchFVjwC8WwyJqyN3SjSK4eWyn8tZAa2nAcddKYdqfynkX1QXwkb8WcTUT2wC4zvXBX7",
  "key26": "2N9raS8qneQBYo6DMfsvv3mY9Q56j2fMrjKraaZoV8w7t6RXWeScVFS1ETbs1uYY6SmpCKnM1fjj6MJHTQKRd3DR",
  "key27": "2isApwUduLzYSmHhyK3xzbNNB665NRQwnbPi25GTnfHrHyp8q7X7H77ZtBU5sykxY4NCYFPpd5AeUwqCfs5dddPQ",
  "key28": "MQ8vyx6VQsVNV9D5dtavZzjX9yZLvjrWTwYXHRwhaLxGYH2DZF7FV7cEW7T7eHf6hkTJQo7aUTM3hjX7HLyWTLH",
  "key29": "3q56d8kYhiCiFPff2x7EzARcVfL7DopdJGivWUGQp5mjwSnTCeqyo6PcGcQdtQ32xKwhuYsgsbMshzLdu2yYXpfV",
  "key30": "4kp3W8ptBLNJ4sJ1Cam89uSupWmBupvfK9i38YxnqAE6ZHzZwt8TjRnfV1ae86Fbd6r4HigDQ79BRq5hEx5fySnB",
  "key31": "5kv2fytD37aiQZ2dcJHSTka7MB5xWzG49VtVcz7ZiV9ubR5xJD3dBVWdPHvWkgH3EErvizKYqNprPWySCabheRRD",
  "key32": "5exrXqeiRxaC2jZkvFYuL9kYEvtmhCMDzQS91DgboY1RoaVr3CCJ5nNqUZuTw8KvqiXSG6e6j42xYqovrxyGuqv7",
  "key33": "pWx1boMu2BVxjjbmXF5BR1BPx2Ec84M2xsvohpFpVjSCTb8hxnkQLQFaLvPTaP4NNdH4D6HRGqu3PtqEiNULzLL",
  "key34": "3XVnT5W3Ekc4n736Mc27VDK7yX1AjbE3Twthqx15rcocK6WazJ7diyQUZJChhJxkcfNpy5ZCBfKrmJ5ofZK3f5EA",
  "key35": "4Ss8MDb2ZFCt48EqTzacfU7Gas9GeAV3j2wHJkh81LUqn7pQ3XtMRTywvhbDjiae7mX6iyfiHz9JEB74MjjNg9mN",
  "key36": "5brHthwDFtfcTTSkhJ8mXbCrzTLSXCNeuJ1ceWTofm5pmLZni1DEBTa4KWnv76EMh8uawP3NwjauK8m582FahCk6",
  "key37": "3JQMLMJGeuxFYKaXh1UGyH4mRi7QXWBWzssT9qLJgoQYipyG8K1aNHNgeHkmAFqo6eUCgznkuDDyu8MUZxTSUPWH",
  "key38": "5vfKzFR8tHwbPU4gFZJfccMHePuaPfdmkccApdTPfxmq8mZjNwPd7KVMDjLQrqFZv5MSH2QbnNMtwd3qgProR4jf",
  "key39": "65fgutSYChXiwHCvh1xu6ZYjHLahbsfcr1gBtewEFqLGrjwGvEzcaA3UePFMzEbeH4rw1xkbfDB5zywuM6ndv1FK",
  "key40": "3kkaG5vnDbFBhv6cNRqNDVC4ph4EuK4H2aiGiLFtKGCqtLFnfC9qNxJ8z4t8DYLX8bfhBo1Bjk3adg7ncYWyjkbz",
  "key41": "3JYqQbkzfGnh9FCdvUDsFyXwDyvwVKYmGZ3y3VGnFWxotxiyXaP1AN7jjZ1BNQropxJ2MqLkWmYy1QZRi6YiLVqK",
  "key42": "4aCsmZQGnuThg4tYUte6BZRk2d57aHWKFqQ2S9NWzyMHAUah1VKG7oNXp9poBoAB1PFixt2FtSwdiVQhFaoqMdpg",
  "key43": "2nY4jsRgKjERVxitCaeXyNVhgbFmfuV2BehSUdtQFNkYxPF42opBjMaNzVdmaG6JcPRUwPyPoz8xPqMxXzdYey6f",
  "key44": "5j4qEFahoTZL2J9QtvXJNk5XdxT7WizYLPa52vxWBhU5odR9dpanGzTxaUnEMLhoc3WoKKdNgvGCrdgjqWpJGZ8B",
  "key45": "4gNZfPcCYoJmGxyPd8UJY5UiUSnFdfL85eaefDhpLT1yNKLi2Yyn6u7sgPGmuG6DL2QiiHzYUic9dKVvgQsoSCfu",
  "key46": "5gZcn8P7x5N6HdtMZposBGyWZ8CeQycqCHc8dbW6DNyuPebDhWwf7uGLukQ89wvhtk43XiUgw17r5Kob9eCTiFqi",
  "key47": "5QwULQYbGr2aZxWQnaTs6AAugZeNrLkrbuSQBSYXpwAh5xqYPB7UPVXz7JaBb44aZHt5EeFzYdMjkMGBjmRXU6iB",
  "key48": "5AThnAbtJxkb5L8WaZ8yYEwL8imnbCAx67c4RbNMvwUqCkJGNs14GphKxLu6qR1NK3aZopoHLYn7CsNpuVZUPWmC",
  "key49": "qmheG2rBc9miF3DY1xNyyyYAaRtbnwWbp5j9bAqFP2BGeMabPkyucyW8fuRJfLeuFGxwL6LaJfc6RpYKKQrEp4w"
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
