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
    "4E1Ww5mX1D2cXYRHNebXj7x3nFcrQSEbB2VxKuewk7J2AhZ6opy6NxUeFb1zESmAZ6fyhAXmJZFC5bBmmQwmKvBS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38cDEgKfcy4x8mS2zAY4qzBnHPv4NDUa6PYRJAMChgYzAFmPi9eS6pZhJ9Zxz87Y35YXEEpikTt54yvGGW81MgfY",
  "key1": "LfEieApeKs72HJVrAVAB7WuuFPYYUZsm2kuqAL6mBHSJdVpm6AAxCC6pc9buwrFNsy8S7Dg1byGfTyv4fBqTxTo",
  "key2": "5GmCeCTXgSuX9egkpTXAdjUV2TFzA2F4c3q7DiSujNV3DMx5ddmqAaE8Cs1MBvceHgKQ5r2SPwjh3riQGm6Nf7fT",
  "key3": "5AtUuivyrKP4NBqSQ5TXu3rhzTeNbHFqRBS4e6uFzkYPv9vqjgbEnZ3NuQ13o6WyGCq1kyFZWPAoRYuebkGiyKcz",
  "key4": "58L71kpwjiiFsjUEqr4vMNX5nGG7uk7J4fphnUHzASaxVBzJZtWDN98ZzfG9HAK8mBoqD83jSz3Ba9DcmBZa8Xqi",
  "key5": "3PmjSHLazzH9Gzecmnsx2WRYFzeyfNLqLNqpm7Xr7nMBV47RFWmDFuQpwLha1BGj3AXyqJqw7ksYxfaXc9V8CjQy",
  "key6": "2VipzopmpGH6kTdkL8g9pHHs4YwUKBxfsJGhTJ75uEECSy8xUyFPEjiPoXiuPvpnWDQrV66cftybvfC2Xrd7VbJJ",
  "key7": "5EUpFB4LeiF4mz7gPHQYoVH2Pob6nnNU98Hg2oznyPjHrcraaUSyBm6z3oNg1cd2EzoxryrAyjo4m4zyjn6y2jCK",
  "key8": "5Bexz7Mi6ziNeC2ScTx2Nue7kft31CJAKfYVxsmvoLRyDCiZqGDQN6sSx11aRQtvZsfaxtrFNvNT8QkvmM32cStJ",
  "key9": "4U89Rj4XKo8TV1LhK8a5Y4Z999HG44DWw3kEC9N9Pc1EZTF3VohmVVzhQ3DUKdMZGNZkRhUmZf62pdgTHPAv1M3U",
  "key10": "NULDWjCKstjpas2g7eDjzWe8JpqgaVDqoXMH6Z9w5ZR8x1QiZJqoSZTUv5CK73M34jHVEJvAzEXUzmVroa9fjZg",
  "key11": "5Pred41feqFSKnrXYwktPnaCaWPttZZyNnYGgnCU1dcVe4CFz3oLwb5XfCtoRrWCSHR7jMnYVRgF5YfmVDuZ3qsR",
  "key12": "5jcndU6r3x1SnugfgKWKqtj1xubsvzVKLVjwSUCvkF7D48g8xmCS6qvgDv7WZVGiN9qZ6qXPQHiQDf7o3mXdxdj5",
  "key13": "57PFa1oWDtE7oN9R6E7gH3BtfXUnTveiWQoBaWdyMtwi37aT6eeEiopaFf63AUAG5pMhkoWxbwCB9ACrEU8G35NU",
  "key14": "5w7QTDLLKbK1ZXZioXqkkYct174d7iQbuvzqzo5zz8LdgUM1QsHva8UHvin2WtoeX896HSDuRuFmuXpWm2Gh1M75",
  "key15": "3LmEx6a9HSQ2KvbeJN5hQ21FQcqd56VxezJb6b9BRRFPznd63Ryg2sPDsm7iy4kdrBVrff29NWXnPwKTmeTKwMxs",
  "key16": "YZqd6Py5aLbYK4C7bQKQtyddhkZYRGdXqLwYPDH4XDnLzxCvXauLuk3ceFwTd4YRQtuyv9nYxL5HNCR69FgGGiQ",
  "key17": "4EohsFcecapdat5QjttHifmWZarwvsgDSh9PXgLMV2sy1CiAVm1rW6bpp4GoHPUGdL5sHJGzNifCN7PTuquayNF7",
  "key18": "TNDjVpv2bkznvETxy6VMBE1DnAar3U3jeEYGULznJvyzizDUirvw9qjgKamF8fw5MNnvjBoxbtABfyUT7V4YwpH",
  "key19": "4DAvcFj8vGD5SoL6GDzWbGuZJRqgxDzD2dq3KWfkVRYXxnND3wEBtzVKNJHUHjFws9PVM1P8N9B37WzoshBbsCH1",
  "key20": "hDWr4eBk1jFLnNCiLM83Fut6pmuZ37qYW5aqQKfTdRv6tzYubfU7d7xWhERmtCpiQ4wNneQ6sy8AmkfJ2ap3jUt",
  "key21": "4m5zbrFAvbySqyRTQXBv1ohaVtiTC7ucE9wgASSytjEAH8KhuRs5keg2bGj8WARy4fyCTien1pzqgWs5e1PNdfzK",
  "key22": "MjMoTGjudKbVjpET47x7mN8GApjcX67anctaD9jG2hnry27ruA7Yio4pKGaFQrAxRxCgULzEijE91qNJBzGcWWS",
  "key23": "2NNEKk6PPZMer3KddiTWFzj2S3HCkrekpybryek2SM7JH2HyTJVMVBJZM5GJHgjo6GJ1xhdLnU6yrhdNvRFEPgnD",
  "key24": "218zbZ26oaxfxHtXm1MKZ5q7DBrozz7pAWT6uX4Ztukpdu7HS229uVSeD9TzpYpGt6vcAZCEdwbg7t7oMiEPQKWZ",
  "key25": "5USxJunpRSYQGfT6aTKJD6kVXkiyxxqv4sXXSEBUU59gC15833oJRgzAWpzaaLjKaozmarW1BtmGNzmTZkF6zKyv",
  "key26": "5xAsQ5SRiPYM6oVhvrK2wrynTaCkXi8qfPNRjV8xQ27iSJwqyH5Zo7JMmdRugERdrKkXM7W2NkUtBCYDsmQaS5TX",
  "key27": "4Wbjekpgd8DkHuDxyXWWF9rPM4CdGjU6Yd56yLGDRQpgNsBaXfd1LKVXCGCooBXYiQjRf1MU2mwbdTosqNdzBmkG",
  "key28": "4zQGmtUvdewMoFd7F91V8MVBf9mmbuZVHUVF7XHgzQmBdFRoEkJjZBLcNUQAdUrfycMwxAe1L98isL8tNCryxnzD",
  "key29": "51pznU4TWR1vDf8abubxeFRoL1qWzqdgnYjfGu5d1hfAkfftvLqJP4sFk9sZarKSkbrm8EsVeKGA34UzKkv9qmsJ",
  "key30": "4VX99AtQcKkHbgRiz1Khrs8JYo4Dku94QaHpXUFqjZJwAeBbsTRvBtfu4bq448aMCJj1a32wcm377YL9riXGMGYn",
  "key31": "4jf9o1ExDUTj2fa6oqt4jJu5QJm2DDmF6y8sL9z8FyP99DqefLn2Pi15dsRuvUXekKvomBDXZqP1V28n2cp6J73h",
  "key32": "KtTCj7inozuVkVBoyPiLsso5VHZ4pZKvFaGCbNaY1R3jG7L6kvdxZVWRZwEPdvmXDugiJ5UvG5QKCFLS5S62mXG",
  "key33": "3ZapMKQHokuvqXN39SNapUfWcMrGcy6k8kEJkvT23QPcof9PSmsNKonxAZ3geFWYsYyv5PjABMvRERRiApboJGMj",
  "key34": "4NkfnFm5CztLhdCtv7vcFa3dYXdjRVReuuJ1bxWZLzzXdJir4Hnak9okmnJrgFKXgG66g84FcXUjMV3TWpbhTEhn"
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
