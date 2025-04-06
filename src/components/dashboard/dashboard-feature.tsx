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
    "3AQdqB2ShzB9NZTZM33JYACELvbqn7icuAGXHu2NFxhYMMvPQZ4fuxj3YsbQjhu192MshFsm9SYrG9nzJBwN5JKG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KTX8vZ2Bargfix4bvfgNTFfP7XmwGhSD4NyVWaMzZ3Bcu1xJZhNRpiL3dxPmjQPmsZLwTK7uLQEDaKH9VxEDS14",
  "key1": "VkJZqoXuWMmdtreyUMzSUnbrsARzJq8B46TXPoUmh2dwfHuydcDzMfcNvbk8b5N4f3XL7uxUVvBG9ZcHCMnSkL4",
  "key2": "5oYUYMYXqDn2rAYZ7epcsJDqaLdGvi3WUVT1NN73os8yDKVNrDQ2NMBYetsQSNVWEp1MAoumupQpPAPMDLkR2CHo",
  "key3": "MqSajDmtLrBUoPaGirz5nea5nhirefkAuygU96UGzSEQsobo3iu27P1kFx5PBEBd3Lh4c8KdS1fjKEoACHVEX6h",
  "key4": "3aPJPzvtd9sJSzuiAkY84EagxRtgCXnz1M7WFvUzAohYQSgu52bU5sna3xYJf6T6J2pQhPbjCw26ZNT59r6h9Vws",
  "key5": "2wyVwzzpNtovguK71o71qjVxaj6nHoLbD5Dbha6TVJhL1gcBsuvueEAQuM8tw8Eq1pMwF8HAW1yyERYYsFbX2rYT",
  "key6": "bog9umMcBKHnxZz7wHscmjcGoJSbgffrUgQmTkbZi5NPnH48hLgFCQJMW9A1Pq4SXgMDjDrmgJNWBpfSz91m5U9",
  "key7": "3AVi174eUJ3ztYwJq4zKytAUQdcZhBHNK6D58tFD1UqqvnTNQ3SETyuiiHGZKfMScXky2ePLzCdSNzb7XmbGqndC",
  "key8": "2xmdV7m5HbhvD8dmDcHJCrXczeHAjPYHUkRTvocrvWZqeKqXLwyeSCQnKmNQwRoSEngHUMzQzEGsa15nGH5du8Ho",
  "key9": "XnVNV3XfPA2SCMhRUDQGnUixKmXcgNU1MKStScNwD1xwXLtKQbYYvCCJXQQoyLmfdTwrt16vmspLBAFTRMa2buW",
  "key10": "3XFC6UwEPtcc4rAhNCgU8RYcRtVZ6UbgvKhMPT5TrnBvGMFKcgsUohySR5WWaoJEmzP8KsZyAymkQxc3hxFtirA6",
  "key11": "2btafmLwTPJdKyWpCeSTP8CHmHT5E5APSJUUj6LiUxUu6WCWUFh3twn3ywicz22ZX9wkjr681fagte78WVAa9b7H",
  "key12": "5LRgwWg38Vho399MU8uFox2xE63dyB1QjatKnpi4iYpJsMDitttahAexJVvbE9i8vGWnfbh6w5L3dmwsvBeRaUPs",
  "key13": "2vnhPpojkg2JFtDb5cp5Qa7Nj38hgJB5EXYoxKs5srXAJqBdiVTqSkw4pSqdVnkjAMtaS9JPMy2miDTQu4nTmPy7",
  "key14": "4oME6HJDssjLPV9AkfJ4kndtFK33Ksrbo6CZ6xBk5wbfw47Cp9jXVCwuTMhdGAgoocErXnE645eExx4jVWcjM5Sb",
  "key15": "Y9MEtUTD3cLd5pzUWGg9eZSs9wEi9UtEu8YsFkzudEWRDKVWCzysHw6h3tTzf6pa2YATGuFZwus6LMj9ibN5a8a",
  "key16": "2rv2N8LGMA77ARjcShSk1x1P8k2udu2THXVCH1fX6kzswLmEwjSTFeZ8bKTJvS14Fxdya6w2iKDCw2smn3SSchy7",
  "key17": "2xL9jtVZYphBgAWL843q2qNPagazGAihJx3PY7nfmkoqMesi7Yg6MQmUwWYEMzuCAzag1QCewLEvLzab7LRu1ftN",
  "key18": "57nojorMwhtuU6NrcwZGmQ3AwKYrmFCnwYQqC9vz9WUbE6iN9tYNFBp19GG7QDrN4rqvXV5RmqReTKVsjMtoTR5c",
  "key19": "1whXQk4WtTmLaNANZ2rFfsMHqTbNFyJM7Evxs4Cup2Bm3PEHBjL9uCt7qhchFByynYVzoHJssYR2NfJL9CZLWcA",
  "key20": "4Vh4BkPoQDa5MQVWqfbqD99ysKbcWeYDL4jYacuma4sS7FQqqzy7WJUgg4bNj2FNrD9Pou5n6qFpt965qhyEbfYC",
  "key21": "4EfYZiZoPL7aaNKU8YiDpfP7VDhxVACJPoD1H3RGa3yKjuX8J5f57ho9QoiwfYs542Kv925GoBa3ofUC4Kk6cUW4",
  "key22": "2qJ2RP5ZQmFFugX38J4J2c1Md6gqSGBeEWzyCDPQ38bAf91GL2rmNBkfr3dzaquCWjc5cBAfCMwYMygHH7jczgEr",
  "key23": "64fGw3F5VRJAK3Koiek9Z1kANE6Z2pR1kX7GVVsDMNZYERqAMLLfswvwmo6arxXtxC2gRGjTtk3gn1wR8Pi2hZpk",
  "key24": "2QEzDE7XjbgAdeNkCgaQFsnG55AkaAom7U34wjvJiFSaFCnv7kzEXXPQhuti9afwU9FBkKMSkLEfEAvyVFbw7QAb",
  "key25": "4UWo5drJ19CqYmwQAh44JNZafHxmq9PekNLBrpnP2RZdeb4UfckJKwRVDBhrNifjJNeiF1V1nQyDsPypKXduyCSt",
  "key26": "3xhMSyukyEXscFEPhddyrXStzp8evThEog4rECjzJPLMd4MD19KVYfPnJ5XgGfvCtnBruRVTXVe8xFMsDyc9Y6WW",
  "key27": "35xfazqGu7ud52xgAp4qoKDdgX19d3XtX6SAfu394qhM3gp1q7dC95whby4znsMQQRmWNPyYTe6gD8mqSMSEQoFv",
  "key28": "52FYevB5xbvdLPJ8tzHtFJGnwLUWVja9TztpxWbuF5L7mRy52E9ZfaCePdaGL2yVQQ3kAhSMqvwPWHvtxbPK3xB7",
  "key29": "5gAu4h9PmkQqUoozKmrPoTYTKVdQc14auWuaLmk5h8Bi2xHZcaXDkdzsgzYcphtmkQfd8WLhc3fKNH2P3DCDGLNR",
  "key30": "44h22mRYv1wde1mGNJ1JEp9eAKiCY4MeaCKWzis2Gju8VaW1zchPNZzuzBCVseMHiudx9jyQy5Z9si1hxp2oF55X",
  "key31": "5rMntyUKhbdLG8GjYN4KnV3mbBfG9qqxcVqPudjGdvVjYT1DqC6QGf25ujxczH9iVtFZGCJcLgaVpRp5jRddL79C",
  "key32": "565VCK9G1KfDox3jEmbtTUvSAyZQS6dw9rLbZNYvuJTNMoFz9s3ZqcP9EX5D2zpLTjjvF8moj4cD8JWafvkFCwkJ",
  "key33": "5bghvutrYpxTHo3HEsGKspS1ETHXbGdUCo7XSnpRjF7PJ5uNzXdTe2moHrNLnC2BJY4fMfywaSHhSJL8omYfh8tu",
  "key34": "2cb3JhCYb5mdv58c8Vpiahr175PkmzbAMYwazCyiC2PCxadAQYaVjN8w3vupnqMun6eR2cQXdLbqvAN59JZfsvrv",
  "key35": "4MwJEqFDGY3zZpmVk4VzQUMGCcMyM5ov5ujDnk7bkWxLzATrSVHDpXYKY9dVPf2sREcYtBimwaXBgCYgSq9iZ31Q",
  "key36": "xRKK9L956rgP4Yrw57NxiSL9iWwB8q3w1HpyQFrgb7zLd43DKKFYgFWwtqwaDvVvcxeXT9DJPoNCmwsgHmEPTqi",
  "key37": "2FkwZagoFm9u4pyKch3JXf5N2e88ZLTKzrk5J9MBpwnGCQVofmXAaT5Mp8HpfpTSgnP4CBB7XdccaEmv56ZJ8SwQ",
  "key38": "29BK7BJR8bjqRStzLqU6hhhRKqebcKeznSMcH32bnFj4aEVcXBw3BcC2hwAPYKGm5JwHTuFvjzk5Bcqmc1DsRVEJ",
  "key39": "3b2JJPhixeiioN2ZB1B8axrAx3Cwh1VgyyP7GFG1cXZuWqXASnRhYmmUM8Nep1SVqzVKwKxavuZATXHMu8ToKA1Y",
  "key40": "2em4MRtEtHgAmfpZkV3GycSnAnMk3SYs1wr7DvXd7f1ttbUmEk8QApLjCnoMjM49F4PcN44DgzeubYUpzuSTgB5a",
  "key41": "3pvYwHFWLw56ccHCJHTxb8FGwid7Hg4cYfrutpygU26ZtyfNWfEwBJ6t5xjFgQ74GmqffAwqL4bMZv3fYCp8S3aP",
  "key42": "2QfbFMfrapijTRmWTquc16fCW2u2vFjNqBTcSoNCZBTcAA3pamPcDwr7EfsVKDSzC6uXvRhngC9XhTMhUgH1whuh",
  "key43": "5fGDzRZPjrGWeLJQn6WMkwJJdewkDRzNzRr4T3SKPVTAyAbLT57pgLGpMsVaZcgCgCPJCNNVcV2h5pVKi94uyTU9",
  "key44": "3hK61QP7tJRAVRWTDapK4caT5ec3mdTH5WACCnAKef8vpAhvHyFkDhsEQAFEhbRU8Y3TikBmQb9h4RXPV5NT2cSL",
  "key45": "J3Yow61tUyj3JgqgvwFZ6zAHGo4KGvQAj8neFZ2vxuRvVKhdRxkiuRJE1YTHNY1hvd72jmjPRHsYHAtzF7ifo4H",
  "key46": "4dKLKfALvJFoxwZBTZECqK53sdCW6QDaskdTbdKNuG7NdyiJZnZBBQjZqVja7Dx9qzuLGcDzE2QeCpjJm6ZA9WWm",
  "key47": "tY3MTHBh1NybWJUvPpBcbKMbiEbMszA5YXrRMbdQbU2vgyNNgADHhJ9mZ9z6VWBm313mWm55tsbiNZSDCRk7pAQ",
  "key48": "46rWyjSRKGkHfCyoSG38NDBMmC2s5qNMSnVSTRkT7dA4KWdDGX1aXZfPFvjH3SGZqzp5SeXHDx76KcVYtwmZ7k4W"
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
