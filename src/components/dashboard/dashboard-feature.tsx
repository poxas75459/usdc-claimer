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
    "3rREV6KxwfWZ7oVZ9H6AsFmWYwqhnLWqfgXPUStucc7aHCiqGzFzVhJq2XHWgzL9SBxnY4EfJ2wrz4fG3WSjyHgS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39GGAkPbKUC3MsWv6yUFJ6cnbFmUHEVBYfUtrctVKkHpG4M2MgiCN5DfmwdL414iRggAGFY1M8yZHZUaATd1V6xy",
  "key1": "41qP2zJP2pnbGrzrMFpQEgK3HfTmq3pab4rBQPFm99UQy7vU8mAeWJQAgfbRyhM9riV9SZjnnT2xmzgcY4sqTCtV",
  "key2": "4Bd8w6w4MQdC9ctF8deQsdLrh1dFkgSV94tyKcQR5R1fxuZqoCA76Twb8z2nPPpJBqeFVCr8xkP2aMxVXnsir7d1",
  "key3": "4jM8X6prF3ZPLkoTmfWeFCLBVGntiYjjQhwY8ibrSjACn8as4zgmqhta8UsFzEZocmZSx7PdymZpeT7AgidtiTZe",
  "key4": "3cDK9RWesGoef5KBhhfqMSbbdWYhJNCZfiyUeA14WmpMVEpju8edEd66HvjGhxYuELfx1dDSBjxB6ZwVvGdYXdDr",
  "key5": "4rLki5sKje8sq3dpBvCSeY7eBWDBVXrhExjkMMDRQtaMNmVD8j6rVGXhnwHgVH4N3mEyHHafds1EfEu4a7c1Qh6A",
  "key6": "4kfhAHAJhE9ENg2h59HohcqHnFn6BUEJLFsWdYvQ17hGAeaE5zA5hkYQRugM5jsTCW9hMBKQ1gWAX6ALSxYpuETV",
  "key7": "4ESydpvh66qEAgKtxuzkAXCh3JnRkVk1yyA78J7votJVpzBBEtfr1qaPFV53JMy124wTxXAYQ73bjfbsJy6HBpH3",
  "key8": "4wUjbLjEvP1MMUh9KCB99DQPaV6sYMN5mUccnu6MpPiD9QCamEj7Mzvo3g9QBpiVgEuShctWaSiB4Z9sjHevFihw",
  "key9": "38v4HecQ62xcijpx3RXbq9EsGWpyRpbe9UtmGCCDYc2eYgtcBHSQuiFyiihEjp57YfyKkMTcQ4m7FmgofLB3DQXd",
  "key10": "3nSYHWeWt53aYzkSJKCEuvQHc4v5AEcQAK9JxFeLxWVjzMGYtC9Upw12UPKXVzDEuUxqDw8zxF5i6MNErCiwkJnJ",
  "key11": "4PWuwj18xjxW7vPePkmRXnwn3fAJqFpZTCf1EZy4bYViRMRKzQ8SdsmZ3rx1XW4qQFVDXsTkEwzV8745nnA6yjrj",
  "key12": "51hWypynbkUgQY73bfotgbn2oY63Yc9Am22kkHcpMNbu1x7kW2ZsoBBZWbGtGJ5mFbUkBTkjrS4SCXiCoHpiQwjE",
  "key13": "2AFoq1r3NgJdgkx4SRWVuMg2YMnVuDC6GzHPnzGErtxUbgmyfvcYhzW4GgRcJsm86PG7McXnLrRg6FLy8wvSwkPq",
  "key14": "3FhW9XM9eQx2xuin76FoG5TPBXtxXespX3anJBpQwCir3BbZJ1RYGqCSE1Ej9WuZ8dyuSn7zcirj95X4vToBnJuh",
  "key15": "2kH653s196UrVbtWndz1QNHEyhNmi2GLgPn5xfHFsxLQ7A5Hoj242f6LZ9sA6mXBckCcxrACnyGvfvsw2NzSo33Q",
  "key16": "4J2DJxxpiyjdAbvwSf17eMBaj4vhCe5JmaiBWxp8KLjibXFswQHh2AzWN5VPTztCwkdUNNE8mnUCfTkoNXQsqorf",
  "key17": "348jg1QS6fmuUkwHkaSgR4k4cosuuJJY8uHo4yBZJPhx768dpRpDTu9b9PvkkZqLijMog9fcpHyb8qrTYf4nbgfo",
  "key18": "54QVeXXMUkoUZdu4qJpnysETqPJ6FuMf6Lba9yrgRRqqVJoyZXA6CMbDSRAYHvfTTRZZYvvN98BPfo2GzmejNowt",
  "key19": "59pfxRBRqnw96FwtGiFphVdKwJFQsDtfkPXzdHKsdPheVS4CA6siQxgDeB3CCLaJjKT4Zo1sZuQD2x5ZvGcJnUeh",
  "key20": "46H3FEPFe7YczdEbBrs25Mn3TWZCfKFrkWqZWr6VnmUatWCdL78mXk3cVNNuDE5vV621wHV65zXGWKif71KCUMQU",
  "key21": "22j3j3KN5uCsP6dKyTKGSV1SeoZmRFGVLmjKGarkzo6nZ1A1cS8dpHeXYCuDfS4Ur2L1W95A5AsPuCk8cXcZtt1w",
  "key22": "5jBbKhP7uLoMDowRWBgKfyhniWx4q79ijvJYEAGvyPvYLbKLYYSfjEwKLSFzZh2VtAD3N5Ho7zkAripS3xnYs6ud",
  "key23": "5DVXsvncQAkY36gNZjGm2rK98M3SxdJJfDPjha7VKsCpTeVxJWnZoyydQBfcA3Bs6deMm81R3TrGEGUCMtBoAoxQ",
  "key24": "2Y9xrwZ3J2rHU69Tf2d2J8iCMNwmagMRs6Q3RoYyoKJFVBLmeGFetk3b7bYVkSLLtAWZ3e7Yc7TS98KidUUNh6g5",
  "key25": "57tbjqVvpnFunv57tuV8DqEEHHHCWFkcJi3H2q2itWjWV33jDYDDUikNxZmDnGgptSt2xzWwaxEGRyP4Bh9aptki",
  "key26": "3QxfbYxSZqu54yW53mqDN1Km88Ds7qpvA1uZZqQgXtWoZeHZaKdZwpt9Pku4wtKGy4KMh8FNy4swhcpbiAkVktyA",
  "key27": "3gRsfmmuLQGgVEXXhQn34U3qR3Lo2gDcM6AYfdwV2QEuN8RkGy1dv8MuBhVTGEp5Pab3WVttC7duutjin1CB1FTv",
  "key28": "3qsgxyXkoGvXo4FfRJTF2GH7hBiRFZZxSHEDxuTXp24bmesW1RAhtUKZ4zqx86DTAWQnfu4do8bxwSg7YLoVsc5P",
  "key29": "2fNNNWQU8WEy7xZW9mDDrdc9wbDz54D6yquQ5BULWfND8D3Sts7KEzViswgJH7wGqvm8PbLGBN4EndiBwunaLNEg",
  "key30": "62MXRZpuboFKGY94E1nCPMSHWAGT1v7pReWvgULA9aq3aaktoN5QpQaBBsjgERsXU8PhJfoZ3N5ftHTRRJMPYfzd",
  "key31": "jmEgHndQusnEdhigYRccatossgiQdyjBi8TGLrJbiGh1K6ugtsbU5cQcFsaBhiQACpQ7qCVswDSgj4G2dAReJbZ",
  "key32": "gMQYeLAEhE1sQTqBdYmw4dbBRo3CYVPnu8ZxBht5zQ5SnZPAqsMZAFjJvLcjy1K1tNtC8pLRqbTNqd8WB3QFsA9",
  "key33": "2RZA59Ff3YXcgDBtdfc5HVrBzbY4HcaWaxi2P7BirJ1xLaj8oS2wQJVdCJ8rA7A8ijpFgGrh4vuBdyEToMhm4KRU",
  "key34": "55ra8TaaQ25LcM8BDY8z6E42nhdopkJtsaz1JTpjcGFB65GFmdnQx5wkLJ6ivoEt8R6PCDWT4vQhECe9A3Jkgjp6",
  "key35": "5Rz7grJiMzwYJkhPcdgrouMxvnkDJraK7MTnkSnu1CcTsst61cMZdMRUeC1KrNSHBFcfgYbVcv1VMZVcVrbDvQKq",
  "key36": "3P86Kru5eSzHnhEjKatJwfzPWpGyJtaZVgEtDWnuBjpAyrPKcDqUMyRTduu6ux72zKH6kEUMHqY1qSANT7odMh3U",
  "key37": "3AVijYKxATBmWPZyWkMRnjTda3iAYpPmdjXEUetAxpLKt3NgT9gtZ7UE8htzXHJJB5bMXbJ1K7LYQymQtncKL2pb",
  "key38": "2PCrcc6Eh1rj43WR4hVjeKmXK8RFpb6QUV7pjDCzSPppJT9X6MJUitW7R7NPWfzp1Vgs8wLpvxhfetjEKWRHsF4o",
  "key39": "61C4Y7QbqKKS5ERwkaFLa1PRbmR3fxQgWqyP53gcb27D8TEdJxJ3EATBtwV8SomqtvYLJmzyvfWxF9wvroCSXCq3",
  "key40": "3hWUjVJPZ5ZuQhFtoCqmZ1oPnkmEkxHdETar1VdApTcU6TmDcdwrCQGE1byePpzTwNrN3NuNa8gTD8kSYQt5g9KT",
  "key41": "58srqekQLmP2Te1E3DwHYvuJBh2AKkBpqrCQ97b72UHv1RwzKYiujHXi1T69w5QgTZxeTmNWnFoxgoVC31PFw9R",
  "key42": "t2DpLUAfNsjVeish5e6od1L7JwdBVWX2uZQ4nkfMZsg79MHhXxsXk8ANGsQauRPHWiJRViZfvGo6cMgX36wZxTq",
  "key43": "4QoYXHjdDsU3idTYe2kKHJEpSMgiT41VZf87fhMik11a3zgEwcr88fA5XgS5rC6DWKLJCFxNw5mXw1ybjm8wo6PJ",
  "key44": "CGkrYaix6vnjVsDTsvKA7YHStJrs2VKYWysi5ha65kFDbNXM7i7Ds8VqSSvRiGEUAvLqBdPyviurxHpUX3NzbzM",
  "key45": "3Nkuz8gdnUCnVgWqbREaVK8LAXEDyNGibBYzCsYVEH7BnyAm4WW8reucgX74gGirR9c4e79mCziDrZeX8UqRsvmp",
  "key46": "4vpWDe4uzHLgZgzYi4h4wdXPpKq5ipbSvchh3o4tkm3WJCiQGv84LYpyDNvPgqGNmWCqEpwpXwkK3SENSV7CU1B5",
  "key47": "3A7HMSG7c9gxKY61Hwjib9asRQqzvJSiAGbc9wdSoiAUD1E5ZGYfNi3KsHW2WGu5FBU9gFsLCRq2sZBBLqvfa5Qo",
  "key48": "jZVdXUk3HVJcbLDqVShCrxmhmjB6HXbRbgAk7n2tyrYKkjR17jFunxfssSXndE4xMtJWZYE8UDWdbMmXDyi33Lj",
  "key49": "NTgpQZPi3JtoewCeYzu3DCDkc5DeJJcArx38HDM3cUTsvsXX9TPzCdU9AFBKFWmZaJBumunozYRQovbAiFKZXA9"
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
