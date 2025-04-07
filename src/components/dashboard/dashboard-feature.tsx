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
    "5WJd4LvEU3fw8bJAS9podMX8DoF6YUFe3u6YNj392kL9fJLNhPKgNCFDKPUY38459GWcneCN4vFjq9DK9RUHgG9p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z7QgvFFsj1w6H1H1v8xoy6w4FkuJaFC7hBA9a8AHzWuzgD6cWkgD2xmJpFdpTWvCcoDc59Z4wDochabfndrCC7J",
  "key1": "327wU4J2uwjxYv6VEedxnHNWxieqmwSsAwjiAstJEjxkmGNjYjtJAs4eF8ZEZfAJwobPQkmp4RptGZbeQ4gGYov1",
  "key2": "3o9hZ2jaRT6wmqwNLmJTzbjvNawUsh7HXDw6sMCfW2C7cDYkBEMsNRRueVeGcD2nwcqFF4wuGrhLjzewTpYcffdp",
  "key3": "55BBsyPTFFUBc9XpxRThjrZ2eDK1iwK9uX7Hfui1LwjtmS1YCHNRQE8dKpkdsCka8pk7Uwa7meXtDoTZ8H84hjAC",
  "key4": "3wAtLvo6HSTnghviu7NdXiTstFyYipKT7ivzaALmCnp1p8pmBENtc8JeEW4k5tkcf9y7KTNsViJN5Se5QwRFnFvQ",
  "key5": "3qcZvNnbgqVfPukXnVceFdcu8WuJ7JJioDokCw8nN1TZ75jSo5HUD4q6NZCPgVwWVA6iNS9t9cZ6fgrNHooQK95S",
  "key6": "5Qn1PZPVfQhVL5upzxKhAqku62syUBZjZAprqQZo8opGDnVoUmPB75aizJizXKQsVUFmbMDbSp1xNHPdgshBirqJ",
  "key7": "4Pi4jDXpTLwW1T1MmbUK3JnLjK2hv6RsmsrBiwbqZHWPKhQSnawJn6oj7PG6LiBvt4HmXQCwZzRxYEUuz9hk2cvF",
  "key8": "5GpvZDhffjA3RHseDpzMQnpv25xpuvw1M47rY6k4VoX9ZDPCCmxK2SEP8mQ44pv4TCAxSFZyWenfRpK98JEMqhwf",
  "key9": "326DbtL8axw8cPy5weAkSP8wngfG8iPA2jQEY4kqTpaTpjdmeL1o4G28MXhEAUyLMvnz5JyisbFUMciaoHkcsAh",
  "key10": "5kWe4WAR9NAjAaQn9rY1ETVKwS39iPFUKfRr9tunuwKpAN9FzRhTzrQGvLiFpVWMkWemCxuDHxgz4RzJX2s6FbSk",
  "key11": "5SBhrZHk61iFpC22YTuz9vtN2AKfJH3F7Agm2pFGrtoPMcSd1fjzFkZdYqFpN64LC8cyQbgnbyMPgdi7CLNXZt9U",
  "key12": "4ZuytXhudoFWUZ2jicGoqyJh4oMQ9ugjPGUjTnKx4HaxJgzmsCsJm846uJqt7hpbWbHZmN659JyLV9u2wuhLCBVz",
  "key13": "XZ2aoxZJvq21cXgJzrVQg6iySs9cQNbEWjv7RWXQNbVuLnwq77HuD2z55cWpXBeqkXj5pwVbJykZCpasK2M7xYM",
  "key14": "xyNd4gTZ5AWCnxy48cPXCLKr63rFY44CSJMnEoBZAq3TxZSurU9HLWfch9TjV7mqGJQ6KuoKQDbcY3PfQogvzXo",
  "key15": "4TLYmkGzW3bDDFECfDNiw4KUbfKzBL6kZqmvqbf1x51J7ptcTmBZZshKJHCMGAnzdvzuwN3tGXWr1kgXgPBsKXzx",
  "key16": "3cy5Mw1FJRTNJc9twwxx39svv1eZXPgh6NCMcDDabdWugygUgM49sVQqH5tQVH2N3wfyA19sqU3tsopaocVngkKw",
  "key17": "CNZZ4QtzPkhcAxJshQKgb1mVWrW1GYjEKaL7bm28BaMZsUKihHBY7b9Jn4KBfXvivN8ykcenWaBwavhybanGHZ5",
  "key18": "65arJTkgNNRwBKBava8VXex4LRVwiKae74ds8sDVx4SeuS9DpFCbR2MYWDsuCkvDccCeJXXCBJ3iEsUjqe8cmv1M",
  "key19": "5QkytMkWTQV1tywza28BjReRCqy1CFdqE3QTLr95zp74AK9sxS5MXN3daws3mxd4WeNp8Z1xGo8tc9QK1egpYNsM",
  "key20": "3yXcojj52cGqm14R7a7xX7me4GPbs978YcFFGWXVDDWXyu23GCC9UEQFPLNVLiema87PncazRStuAJonfXLqiry",
  "key21": "3bRQX1YACJECNYuLaLxiVcyuCtBmfbYLgXNcKqnzPeQQFABg41PTo8xtZfGd5STp1r5WPWXcihdmNegYMWKi9ocr",
  "key22": "24qJwVKLr16txbWWkfeUcQWkTFpLv6mNsSqZdm1jGuwsnZFkbzWhxV1xVGs4pHex7mm3avnntiPQD9GMqXGCh7xe",
  "key23": "64xgAUYLwKabNGc3CS5hntEXEeyZrHbqZzkwpBxyCP1Y6pbGUvMteywLmZXTwh3thJwCfqP4rZGEPMgpfzvC3WGE",
  "key24": "5Ch3adfXkh2ceu8HmtYP4xofRZTGQKemfh7VNBYSBoanXy2mD4JWjbgMxgHSavBimrUvidtXcVhhKb7RYHnnaxnU",
  "key25": "2SijNsEwJXZYLL9LJVwzAgRGkTZFKMK2daFHMYSRVbcEKtnPA889YhWww7qzW3dETnGyCGiZVthByBcUtEwhephs",
  "key26": "5aLaj2c5vDNaDQVDHiMza17ZUcmQ7ZHwStRL7ibjD9WboXTv6ZdfgyCJFnKFxoQRiNT2Egaz94KUWA95RZ5NF2ns",
  "key27": "4hbBVQzt8oX5yntnunoY54jTqirUyzj9kfC6mxbSFCHfU7gy4DWghubj1YScQMVrUMEujFo4EEnhs4Vsft4WdAaH",
  "key28": "kWF5v1dMSH8iLgtfHxfBvKx5EFReYQfLf86xZwkKHZuMMCmCWt8nKsqUs6qC6aqtFMcP3Z4J392mgYA3sxqt9FK",
  "key29": "3bbhgJXxTzQD3SwGyDVmp7uW9pN9XoGBEhpeNAVmyi87Gs6sZKqQRvExS6dj4DL4b6yyYRHr8HcvksuZRG2EtdCL",
  "key30": "5iJdGxJojVy2TiKGc4LG2XaMiAyeorGcyyqBZRV9WMXq6fLYNbfkfhWdiNekYK7y2qqZYdv3hkTviKUFtVg9zvxg",
  "key31": "3Sd18jGg9yiUastPa8hg1V4a9MNRJhkXotdVJ1h6eayCycCkEmA9b6x2wheLVnXzf3Uj7JFvW5JnN4vDCVE1V8fv",
  "key32": "52rYaaM5Bm8caaDuUuvkxp3oRLmjPVQ3vM1KLqSjrD6WYjjgvS3b2q9STWZ8A6zLmpgwMRbit6bWbEHadXrUMywh",
  "key33": "3EHDGkL7xQXXAZ6BtnyWwDbcyjJWbosc6v8bZCJiuqQJ85RyrWsqjKdkKAZRzFcuJNY5ysDy6XDMtwpHbsixhzjA",
  "key34": "2VnFeyT3PX5U4sCaLgLKRMAAwEiqpQXdpSkgGhWx7pLFbsugGsY3vNcFYMFXvj1UecZPLXQteGsKF5cdutimcV1d"
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
