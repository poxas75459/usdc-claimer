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
    "51icLZCfQ1gL3CiJK3My7hZYvKy2SZ8n8efdoibjrpYzM6vRWNe9JirWHxMbJjT6bbU5ta5L9MXWhH5K1W8mzFAa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jRZstGyTPDsnJJHuKJPZsKxtXdBPWT5WKCCDdzWbLvBLFYFthDw5G4sGi4TNx5gkbsvPemD3awmjXcKjJyHjgDh",
  "key1": "4atfsgh3c7aSDTWDQvspvu3jKFKXuYEa62p1bBdNv4yzmfuPCQxpCKesbMrFpVxviR8fGyDu6qteUzHhgVZM89tB",
  "key2": "2bPuu3TscPsH2tj7fXPQVvQsWvkRbbwi8G1BAvVQ9TnJEWRM84AYqrtnsHzn4Y5UsHkNgP1kZGMMimxy3Q4DWo59",
  "key3": "i4qs2WD8ZxnqYHjiHK3b6yeJDwsAvQ6BFmH5ozPPRJuNZVRkPSyDB6zQE9yCgYGcSkqUnDbaNJ9fvNwMz2C7DWN",
  "key4": "3r5ymyCn9KiieGe38x2aauKmX8sZb2PHFxbqgubdixA98nKnGhU43cYNxdm92KdVXq817fvHre2rm9vbX3yExx71",
  "key5": "5URWgkzSJBxx53aJvgNAR6i4C5HsJpbRsrx818fa7DHjqbEqFwm6qDuEedTL81hXbvLETBB8AUzyLNSM7rJBWfXa",
  "key6": "46MWY7SSeFC7QsuPm1HGLysyyrkVFKg2edLxhxuD2yzk42wQYnR8tiKT4auMrv9q9FUxbcqzM2cKoMcdNGbRMg8S",
  "key7": "3qtEAj9kT8eeDQoviyfnD4nYn8DyLua3NUxTCcE2j6bgoqDa13vqu6mp3ums6FyNY6dEh5vT6JBaxAn57jDqUi4",
  "key8": "3i6vTCsUCCJU3RBbm7c3kL4rNrERN3ioRrv1zhC7yYMVaKikEFxuubgmYeszSu34BUscvdKDe15wsZdQMftehfVw",
  "key9": "3dPzhDgBxtr1JVZe8Cs8QGtMrCdTWEQfraeSqGw4QdNU7YK45nMxQs8XcufAconfiBiuNsdPBHRscaEsAPascSNA",
  "key10": "5XYBksVkK8FG5wi789LXcmkQrQ21S9VwjDdfLT26gBbjaxfeNH7MeFsY8XSj6mzzxQjHRqKrr95TBQF1p2e3AwWF",
  "key11": "4vpdCXBXjckYFfhwgsgt1rKnz87Bcn156DBVAYSBf9g4ZWfDQw8etGvtfwyTo8kMWeZaDK1QsPmLku2SwdJsnyrt",
  "key12": "4C8Q2QvkyDQ8tC7148zoXu3gv5tKnVrPPycRRAbnAjqKbo89EYVABU8dJay23aiyUZkKaBkJDuBAoVdhpF5dYpMV",
  "key13": "4SddyaHNawr8rXYLrNp1iN7CTPDNpsHERcUXAbUM9CAjTPETAAY8CnZLZbdcTpuSKYPyr4gWHkrtVP4K6qSXq8nB",
  "key14": "4k4mj78hQupFe4TUUxG83McHsjBWWu8B9eZfz5TdrLP3sQPj7mpZrLxhDmKpEWqh926SgyhWMiguXhC7vcLj3Ksj",
  "key15": "2SGbbiGZKY9DZeVxGXgxK3ccWuSLf8K3xkFvyZZFdJyktLb8tz5SZzGmEqH2UxK5UPP79DH6388cYM2qHbxSvJ98",
  "key16": "4dpdQb58wWmvwBLNDkZa613J8NmMoTUF3wwZyKT4M22hwQYB72ztru5QCSQZCUK9ZmMyDqHNFyxYWzVGtPFW6C8F",
  "key17": "5vzoLTYskXU8GaUd2kZ31Vba4YCWxfFxzmQgpKy5wvSZRmgcSTN31FWC1BDp4ngpQ7A2AneJJFZger8o2gkB8s2w",
  "key18": "3cFKmRJiWj4Qem29L4dTfUXVqJKX4tvWAhEbKenavgSSdCxwkVdbXiksuwo7YzA1sed7ovF8NL5RfmWQBamZFoux",
  "key19": "CndxToXLbGgA9HXEZgtprf6meswJEZd85dwJoevB3Xe1L62BtevFcxuYRMSbbDjj2o4EbpMofMAkDXPQfU6Gq2Q",
  "key20": "WVqrM6AqW1KBkM2effSxUCPM7nP81ns1C5iRMitkzD36oacBtj7LNgHStTqyiePCxfEyJh8teuqUTNdtKuhiVT5",
  "key21": "2ptEPxqiFcX5PGmkei1HtsK5owHMJB7frZuCp9evZ5p8T5EAqnAFtNnmMoQaoD18z6M8FXm9XjP5B2t4G5vvcERF",
  "key22": "5W7FCvSFkWLCP5eedphgRfJSbjitwbenw6Ks4tcyp1wjrwwYKN5dhfAAacPcpPu894eDvCVFBQq132UMvK1gzNBG",
  "key23": "43v6ACqcdBfcFrF4i38MT3gEU8CtKjmtwi3LPuf8hJV9YDJRYT6amC677LMmGmjAu5X7pvVpbpUcEHWnhE3Jkfwk",
  "key24": "59zAK3YfkQJRm8WL13BxjoeiAqVmriWFYHwANQRzHqdwUej877Myy4Fs4SrcQKyMcEppEG82ZpThd6iPjUj1nroS",
  "key25": "PL4BJLt8ZLK5gJzDnHdt5h12CC8BLrMhRf8ydoX9FN25M5kTiMrmQxJ4ghzvAwaCe3fnridSK5d9G3AKcUUBEZs",
  "key26": "61BjNBvD2uhxrPeTbBPJXs5eWaoginK2nJcc1d2abAPGEpvij7UQXSsSnzVC5yktfWAE9LufiH9jCCn9D9qfwrAP",
  "key27": "3FsK7yAgQQBMkFdd2h19kK1qmdEZPjFUJrtQNcWTXitdQCzceEPgvpRSS6kBGRfTF2QS6RpZy8Hb1FC9tHZTxGtg",
  "key28": "48qzZEcPgEFMJtrmxT8Pn2UcBXrDA7k66U7xFTdEHwAvz68Bjp24FQhRVc2abRTqNyDw9G5kzpRocQb3mJNRtSZV",
  "key29": "4tTUNqwiwxLvJdBgArFxfgYVJC6aavx5AZAUmKq119QUNncd3QLuk9YTeRx58tTs65Yc6M9kUKfqsPFajm3gMLhj",
  "key30": "WRQKczp3z1n4FGeqyDyCv9GuXoaUB5iovXikmcGLaWy3Hf3dy7RKiKErBmb1WmAiqu9gBJrFw3yLBTFTpbGyY39",
  "key31": "2t4WQeb6nX5RK4rFUY2YC88TbxC4FhHd1ByKpoJ5pL1uP5PLqdQH8XnJApCPv69TwvXYwvCNba49TsyyDePisV9q",
  "key32": "4bpaFWBZhyWPGjmk9BmMeKr82oYbZrgjchpHLwqE56Fa2z3zVhd5uWxQj3Z2PTDkqdgL6srun8pAeef4NoyT77M3",
  "key33": "299nkreoAbXJwo1SQC8738RWzP1fs5Hx9cc8WPKWbJqfhppVPwSNGVJeBH8zsEfXSUPRtLkL1UBD1oDAaKa8YxiS",
  "key34": "2orzinpxRDakgYDpyJGMLmqhjCaEn43knquMPWSG1XSc6HUuuqSzTKLJsLhtfnaePYxdVffA9n4QNkEc5SKTDEwX",
  "key35": "3PzefQjaRWzpBe1qzX6McmLRX6pXVaZ8ZEpCJzRtPHck2j8scjEJfYasJz1cQimcHHx7GXkScLmYcPpekBnHXrP8",
  "key36": "kGLLcqR4HrxJHf3hsdTBvmHj7pggUjTajF1kmBzhVwSHxgnWeKCLhkxuWtZxfzQW6weVqAq2Dg5TeDH5qBcuBaF",
  "key37": "3KTLapT2wM1JVHhahf3xLFMPWNpLqBKuhnv2q3QvD8EZDCDZCon7A1424oXrfwut4ehNFfsvEdJXujb2HwWrgf8Z"
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
