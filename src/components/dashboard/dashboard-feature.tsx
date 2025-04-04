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
    "gZySxVrcuZfhPaeFDmHxHjBUTvxhVaTTBRhYycWXEw15BYXYKDvVsKGMwYdrkRnCRNRGUDAtZy3T7uvYuFn5SSg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sAKYk8zE358QBvpbLyf5CdoGKMaaWmE63kkJjKZJohtqraozMVcnTeRxo7mNhk2zDFmdfW2d8WdpzL8nFT9t1zo",
  "key1": "62yi4kdEHuxQpEhNxEyMT6hViBD4sJ3Hvu5Mear3YztvDACvFRoa4DepPKtNZKGbN1TkrqdcL1L4P4jTJ6HyJS8g",
  "key2": "2kQADm4RDNgioMQ4V6fci3a3xFYaVDjmznEKiF7smtw3LyheYRALRwJ6A7qWMYaXFfbtheKjZ6PGZz2mHTHt3HtD",
  "key3": "Fb5n3tyZZJv5qdXzbzYrLRKxcsh45AQr4aiKCzEGaYH2NXdoTKfxsrsZ4CqnLY8dEJV7rUEkcEsQfHtGSQd9oHs",
  "key4": "4rKwEvTu2zQ8HqjZnucdbnUTWWR12qG9tTDq6o55JWYmiwXTLXfqtZ8wy6v8cGsKy7XTfKmCSc8SM1bTFjWpKNa6",
  "key5": "3o3hoz9ezDB7WSNBD7LG3mxdo42Ucj1awUqKurpfXpj9CVUjAY8DrfHdZnHvv4MzzQ4WunKpBvieUPaNRscRqw35",
  "key6": "55zHWuk19XjmRwLE2oupWRwqjMjbJG5rCow6jMrWHej6Rq3w4iW6X2HSxFtfyHKDzdUERpYcniEQZc82QseWAWfj",
  "key7": "3wYXq5CWkwU2qwRNT2vqGrD2NsqkLsRSfQeLeKWbHB2MVzppa1JdnT2YFbkah5NsXst3JsEFKTifMQFkm3Bq5Fsq",
  "key8": "AtHGKGanVqccosoQ97qauaQyd9eR2hqnd4TQZdpzZZvaNsBLtUjmnigUt2MUFra23nCpQXphrXUUhZWiybEufNq",
  "key9": "5d4J5GXm8nKku6xBfjSbiPinp8tSQfzK4db76Ebw4nEGVT6DczEapayFTzJCp9JSrdJ3TZKvFV6gL45h7cA5hHC4",
  "key10": "2xkTvjFQRzeqoFwq3oJKbN1ToXjyMpv7hkdQ74nqoiRYie9U4GDLTvWUF8Q8PQweahWvcbug5hsp4PqSQBAwQw68",
  "key11": "5jiw65vjL61iNbhmEj2sp7VnByFVvXC2FKhkADx7b4NToSkfDkoyZXhY2PMmpZ4GeWNNN8Dv4637c7E3QyK42yb6",
  "key12": "k14646n73dpDNtadZZ1hi7CyM9oNNNmA6XVKNtv5TV2iAyasmi9CxboxMzgsS275fRT2SXhkLbPzocDrEwkJ2Nu",
  "key13": "2KNo7sGBa7XbQSmVjzKygCCFm9vDR6Vx3UZtqihvwCurdEb7q94c4DAMDLLaSd9v3eiUN9bq6Vj9EYrTSCDLcW9x",
  "key14": "3SqhVXmfJJ9x4gKEJGGV1xKfBgKE9eDj1PwgvR4KNfm4sbwz1TzM9VUyRRPrgCgEPyezeQb4CYDWSsVQbdLTjpaX",
  "key15": "surj267AkHK6cAmSUVLVbr3wZuLi1QotFewcbS9KpRK9bqPT8cqvAu7miSCYiDxRvqXvQgmWBjktagj99FGZn9V",
  "key16": "3p8c4NT6LaB1PwdGKdC5g9Kot7mznfGxG8he69kyyXtNwWver4tPLAf5uA66U4CUt4WLDb8o8JU4mF8UFaCwM2YB",
  "key17": "4YaQ1nqfMUfkQK1JbxmSBQMJhvjMH9qgfx37v5DxP4zzHtPtH4QMuYffhTxgVJpktzt9q9CYSwqZaPTUjPp629ji",
  "key18": "yEHm9XyJ5b4gQoB9iDFUt51Jje9PCBmqvKQqRFBish7NtgaqMtLn1mNeZhkW7Knt5T2szQaozZzp11ABMbApKDW",
  "key19": "2mwhfMSo2o7rdip5mEka8mNq2CKBFfERDzNmb2rWybUjS8mj9XAK1sj7cbA4Eihd5GSpsGCDrhKxjykYFzjbniDv",
  "key20": "4cauozJRPePdLTDESkcf7hugHBf8uQ52YDkTava7WkF32685TBLBgowwCEg1orFBxuW6fL9ZaqXSNZRcoTmKu6Te",
  "key21": "33iwPGqr5SUgX3b8qEPAr8KKr5wqPtA1CPdeSubJy7DTbKLhvNpjhrLHqn982BYimj2AHo1jmmYh3ky2N9LoNJy2",
  "key22": "5DsTS3z4w2esMtp569pYpMvCcAch2Ngnk2PUTw1aW1x2St1o26PAai1hHvBCksiWkKmgjnffYwbM6bVdu9tV2K63",
  "key23": "3KTv6iNukiuzXPko575zDgKESnAg5E6ayW6dgbSRG64Bi2kLswt4dGcvyXyhzrhxKSPENXMr7fb15TtShTazt5iY",
  "key24": "2UNejAyHr5YCMnv2dhouxpwpJh2yyEtTz8t6Q6CrahM6ywkNL2KgJNwwdJ5H89vLrMECXnqDDeFYgrPMmHevDsnE",
  "key25": "TPaqREMrjQ7a99vDitEyfeJtVf7GUP2aajzMgkFmUgypJTY3YnU4jAPzPvbDWymETQW4DK7GAzwSZM9eW8uQqnc",
  "key26": "5inWyKBiTXy64VdSJL8H2BGxGTsBQ35YKXW1aBJ2gs7vq4yfvQJPHWLHhMyQbnJfPhxSaaJ1eqZZWXq1p74frhqC",
  "key27": "JzacyJgwfYEcAL5vUfJDoNfRSSeByBzXxzk8Z8wRmcAkNiTjcxTbamqhauSY75u7V5hKKuCrgDXFdG8c2q76NWc",
  "key28": "5AMxm5Y8BKxY1g6BY9GNuUEKCeFRYxAW3vzrpAW71gGhVebVtBMQsavjF5bMZqnbMLBnp7LcptQbCWmVjC6hW1sr",
  "key29": "631gh3KcgbkiVHkE31cejgqZxeszs9r9ExUkRzmou32iAf5zAL8hDsCjx78Jfq1WkBu5rvoMyd3ECkSTWuArkKwT",
  "key30": "3EvcGL5tuk6hB7njsXMyAEVrmxbFBo6WicJeZTsxK3bTDdwLBgFZLKvUHDvgdoD7X4yDPqnHtWtAuswRQftBQXky",
  "key31": "25ZLtJThqGFUmSdjDJvMztkrvWBG1oJ6tqJYD9W44CmUtQy7zotcPFEW6dF74KcamcGhKXDt8QUtdtysMjTNzxxo",
  "key32": "2tHBNTxyktKv9W2XPLNKqCnBZNm78x9Fdqu6ngWMkrZtjFZ8bKjimYUuLtZJux4DzoxA9NZ8j2AxQ4sGkwTR93YZ",
  "key33": "ae28sjaSf2Btn6nvsNqYVCfaamxFVjf5z7n1LP5XCa44BJjsmYtDKY8sx1G6jYJ8ay5AooskhHZhKU6FHk4N1Ye",
  "key34": "3BQBR1GMH4AZykmz8QnmuM1pj3HTm58pezNyzcsHmfihJ1WAiK8gU9hyFoa44ZwDA4z9uijaMn7xN7WQFgfHVNwK",
  "key35": "3VcM7JGBJARasbma5dRNKWzRWvhMbiQ9eH3dxa1ZjBnqhUmAUVtNii3YErEPhPjkRG9FabFiMgXKYmNmT9bNVSgF",
  "key36": "5ZmN95koHZduP5na9d3sZGoW6NcT5TXkSAp99uCZomEqVKs5SraNxPcCDKQJLB2kuJFCop5sP28yaVWJsHUS9kYU",
  "key37": "dTf86n5hetDpdX7mEDbhw1Hpnsd1hFDmxw4aQbeLQh4h51JHiiDEeXsk2m2PTFzBH3vZD7EsKK4xTw8ETp4Syt2"
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
