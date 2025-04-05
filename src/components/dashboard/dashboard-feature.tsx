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
    "SngchxuzYimfLgoPZLsEmF5GTZwFdJ127CELFuutsE5ReWcRGbAQfXG3Daqp1WsntvorjJEzADgDWFKMP7PTD4b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HgqQKJnrmAtiVwL5byH891NXJUMsPyLKXzb7cKbJCSzCZwf5EZcW3uZZGgSuqpeBQnJiY3J3Sa7bySGfDBuWW8X",
  "key1": "oCgXmCCBpdwcN2Sy1uGWeyg6yHSchQRg8X1a9UAnQEzPUhnPwsvkDSA3awkZwdhee7GqtdVQVw1L2NHMFLsVH6J",
  "key2": "5Tg7cU4zkQPcaAn2GxZJEALLNnhV2t5ysGvpkLbCQMaqf4Wx5u2N2reqfVEn8P2QQiqZJzz8yKhsimR2WcAEMdgW",
  "key3": "HMoqFpH4RByNHtuTi7Jbef3C2HDNX4ApSfVSFAccQNTN4Q3rkcC5JCRbLm55gGoTGZMj4uCszVBtJqkMSkWWFR1",
  "key4": "3AVXb7DbSj82sEgCkEKwz9VgKXv55E1PFQEHbdQRHf8d7Ljjei4RbQsjP7QhYh7jwd4NBJhKsA13gNqFQFunFsjC",
  "key5": "4o1nDJCgUqWU3ekqcKJxpnPHcV5JeRkzvp5kNKVvYWYvDbHz6tGYeYbqvcbDs1ib8nSJTkC4xDvYXbC8HNqYPEm5",
  "key6": "3WFTNZXvh5PKygbgL6xJb7PpPBnPXqYz37GpPnVpgAaCDoUpEsyGzeNmWerpyT6zPaBsJ6D8DpA3fWSmiAbYCKRh",
  "key7": "3r6LWNYTpwAxFktvR7DPfMvaJj13QJvZkn5CKbux6HdewK52bSFmN7CgbWDF5Y3MbMyZBqXs5QS2bZTmzkv34yw4",
  "key8": "2Xb78qs3qM3q2aBfFDuHkEth4nW1BKPWvmPxDkzA7nSkWzrH8AD6V43v3UgJtycVX5Sw76j7XAk9uqsLAb6a1aFn",
  "key9": "3uMcpJXjAw1zXE1izo4Tx11ptFA6zt5n9Yi47DdVCyuUCfiJoY9fS5KAbX9e6eSm48m3q65gBGjrL9n2t15KP7Jc",
  "key10": "4sVq4AKtvR4rtbrmTNvk6Z8WjhiAXXyxbtNXR8QWvXP3WRyEu9ZxeRTCp6Epxrnoa4rws7xQMH8Qug6wj1RaaZAf",
  "key11": "22bZ3Ky8fSc2hXcXfn5qkREwYZNjdjyzP51sycHE2PXou2nyGfaUHsvsnBk3QPED64Pp7Qrs1RbRtPP93kfVjWCt",
  "key12": "2t4nf2C1rxLB42eihkA8S5Z7XscYfKG14eevZb6N3t2BBB1FSnUuSQ8DesMjsUfk65M1LRDDR9CHEriZNHeZSZg7",
  "key13": "3X5aCwGzQrZULHEUbSbtphtVGbcZjP3s8kTvwas9Gwg34Ah5suCeQxS7mAaZqVsRiK6gLaCEvtfr2EMk2fYn69m9",
  "key14": "MbWAhpy9ttWyCnQZHa68CyWPA4vKA5QXYibHNWodNyzXfafZCgfugofZTJ1C574AbbmF3pjqD9NL3WjGREGr9yJ",
  "key15": "2tBKq2ubTWN5wGSvqLB9fA7DSkJ7nnUdMmBUhKQUyJ9iaob7LM2mcAJQfLqLhCAWhap1HcDYY3EPUbR4eoh21fED",
  "key16": "4ZkDm45cYU3sbRsosW4r5GEUJA1nNPwWDUzz44y3VT2v53Y9siZfETpGBgasS65M159xvRTofqZnxyHweyGaCyTm",
  "key17": "eU6ekYnuYvfDTjWWvUoNEQ2tq3AuejHyshxsYQvLA5S7Pi5fCA7KEhbAYAuEiEVBt7Btw4zFiP9pCp2Bwm4kcqQ",
  "key18": "5dVoQWtuhaVPXBvynA2VQ73xiVvPGNYbe3N6NtvcpbRGV7G3myw4jfYc2DhmvqoPkLKXphbitWQhnRKHAw9GRvek",
  "key19": "4Gp7WBsM8cgn2qaxP5A5H451cwfGd5qxYBBVka4WB1BAhHzf9yWEYtP4AUeoihbJEggfybcqy3XVn8qqMmU8dzgZ",
  "key20": "56sKHfn9LVDcJiTH8duZX2WB8HbvjnziFvWUXu8nYDsc7hVVsoRkRcTioJuFieSxf38axK3DUEG7Ho8hwDfPyiAu",
  "key21": "5PK31G2kbZSTxFseQuSjnRRjzYRpNTqztFvSUxGo9Xd9cTAZKpWM87Vvv7GzdmjaC1y2CWvpbzy3h7vndLBWZiBD",
  "key22": "3iCsX1zVLG9vUoscVZyFV2NvyJHhGxsKBChHzQTRg8XFYzfwYg1C1BFxhSJX2jKx58xfgFEKpKzR6WcUaKjJzmXM",
  "key23": "3aA7fquZSPUVHpzgnjqrDcqh7nE9h5DKkSjVbpVbvCKFACRxKTNoTkppCtefBF7X7iUz6ZKQJt3JovxLH1p9E84o",
  "key24": "617C8jxwd6AkgbQU8kZzYWkC5dnCw1PV3f5TwHYLLvYQPbzzR2iKsg1YZoonWLKZRbLyn7ov4m9q2YNEyLwj2Sx4",
  "key25": "75xwjNXEeXK47FrazvxFwN17FRN49D7H1ZtmsawQP9e7HUzmMW3tEfHNGwMNUURHnkrusimiMSh9oYMK8KBm6sb",
  "key26": "5JVMEDFGgj9DSKuT6V71RsrDFE9gq7hBpBiQofMURiYh7eVQoaNUwq2H3efCeSnSoMGVT2Zh5JbB6R8f2afmrxmp",
  "key27": "3icnfka574VmhmoDvwTuEbsqe8bYYVQPwbpGrrFDFkuFzqHUPeTFWQ71PuzeKSS8NM9Jt9wDC7oXrHfui1cegxq2",
  "key28": "2J984BjP3oiZjzP9mJKKHMvt2gQx5kTewU4acLvAs8PS6QZbWV8XvP6tWkMvSPPoTyRxPNmSxTJkkvNNJ7b9Fb6Q",
  "key29": "4shdHHwunQifJXMqzntukhduzSjoAn3pHrTrkKnsCYFSaebAoNTAZnDdnLd5mRg2Xvyp4L3eypV7PwXtjUQDqFqU",
  "key30": "3n8YhwpBb1habHPtcZyfVxKnKf2SxrFAjgteYy38dqYbekrqfyHi2HJ87kqmQdpn3mVvQYXuHSjZwBT5ayZYZX6b",
  "key31": "58hQ4wK2m5ivRm4uDUFfuFb34CtHwTcr78kGgKfuYU2QSvpMCn548DjYKTbpMRTij2BwDCvr4c3zLLYwas27Zw8G",
  "key32": "5cvKW5rk88tcaDM8E6JYxMoWXxVhMgoq9WcFwCueoyf43ZofNRpYVcy37nj4RBCRCwGJ9xCccHb6rty63KrSMbn9",
  "key33": "2Y5vzM3iwL3LdruEcfGfC7CDbA4izb3P3cTsCw15XBSS9mC76KNCZdr2C8MsrLr8rbMf2wLF4841s7jBcED9EqYg",
  "key34": "5j2HR5Hr5go3ug1N1uac5JtzPxdGvFA1Gf2XZ4YcTmv2BSoXYRzcyoBjDKXrGajCQAfjf4ns7UkbS9UgjXedMA7e",
  "key35": "2A64H68enyGeYdV497zWfq65Mn3Tyd2MmJejEktL8wtJ8vFmhxMWhLvWKwwSi6hUvmVnxFoBrQC9YGyCy5AGYgWv",
  "key36": "3jWmEZ69pzzHM85nh6Ui2drWVgM3mAr1DTSfdDQiRRkWwo6UaXhnaeLM295KKMgnuUjD4dbyjZCsnh8XofNZBz4s",
  "key37": "4pXVVEJFSd23F3FSZ7cDwpnrNx3AqbjVzgPio21vKwY5QXkKwqDGYKwzyGnsT3NnHQXsEZfcT1cueA458wNbKitP",
  "key38": "RCNoibd31osrPW9kffTp9fH5R7ZVzZ3JA7qvRF21pq9aqLpkaehU3KKFd5SWTD1xeE8rMEKSLwJ54DtsHGZBP8r",
  "key39": "2KDMFsGKdbe2tjoP2wki1EyTAd93dfSnj31cXWKmCAr5zeHyYFg2WhDbNuWGycAhkHrZduPSNTB1fpbw2wNSPnJz",
  "key40": "3ypCtoc9vSWsCS5cP7cMb1fj99gGy2uWpgq5gvJot6ms9uGZbPtnsk1j6k2vvrUP6apSdiqQZnMY1Ldzc3tK9Uyb",
  "key41": "5GEKuQbgSSYG3VmaceKW6X77iLHqAyb1KXwwoyXAQNA3i1SAACDbLXtgfFTaPZ4mL4GvsgPzruzJAsyBQbVokiZ6",
  "key42": "3Qq7jkjbK9e5cjZadfANZsx28T3nJzE9MMHMGhZUefnc51S6hmJJLxQR5wnUNFbF3JMsiXrMwiUKvwKyZ8JPdMZn",
  "key43": "42y58s5r2KRYDqP3x3vuEpLvM9KFC8G3ZpSJUMydKVd6kEuvgk1c6YfhxqbdH3Ep3qHXxrpxe59YQhJXPWguG8RC"
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
