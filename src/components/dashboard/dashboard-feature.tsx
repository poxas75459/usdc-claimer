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
    "3qjD3VCoLGeqVewgL8rEFRLjibtGHyU1sxdBVzGBrNv7zownM6s3WxZ9H1Ty9ry1HxbPMcDXzHRPspAua7BKMdQe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5saR6qTjJj3ZQZksJpasuQMzXziHJjx42tzJTQApu23vntLb1yki4P6LprN7fxwBFuNuhBAjnDbZQH6o5cu9N8hG",
  "key1": "2ZLCfid9wjtS2Y6mPb2GBTPDVHEG15zLFmZRbGReXRbAGCwYNUSSZfrBqhuVt3FgcZw3H4DdX6NM9yNeGtVbAePg",
  "key2": "c4K2fR8hzmYqNCch8ST57NLqYmAhkjiAMcWR5UX4e8QsPRCsSpRX54b9bvYdjfdUytAazKKyQZz4eUMY7TD4Y1Y",
  "key3": "34HT9MoGvL2KDspA1wPa2XKj1w7PKaMXyt4T8S2zj9afA4sBuNnyHBsHgSbZ9hGcFeh2JCtrfd1FtEFy8bsm4WBe",
  "key4": "3fGWmtFAveuSkpyCHATtF3CoEF6upw7FTHvS9gZmyvTYSoYsJbwdoNfH6TASPQ6fBBLZfZyiAv8j4CE4YZoSixSJ",
  "key5": "3VT9GGmZHuEeLFvBkubE66aU1YLDz1st11HFk7Kh4XeYSXokXDFh8tJjY1SoMB1QfhNEQCYKskUjiiLjwTi8oA4v",
  "key6": "4TKUScjGMCCH2c69Q527Zi6oGbM69aWnKb3oPj3n5joZaWZdFwguo48T83zVkcqviwDjJ6YyFDP64UfjD6kn5x82",
  "key7": "4fkZoY9nQhVKsE1hBREFtEXgxc1RYR4j9ZtJ7uXXAWqLWriAa4WoBwusa1A4e2HbhDAmFSspDs8BLGELYQRbu7W3",
  "key8": "2dek4HWdPSx2siyhUsE3TDbsZZdYPVJ8gHViGTxrrh2A5gQwtU6zEZfQY5cJjG8xTsQwkQoBof9KmGYUduv5oFyw",
  "key9": "2N97oeC4UTmJuLzayUbYySNAryFsquEzzQjY7WpioyNu3Yv9DZeQgnhXwwvCXmrQzBfJ5PJk6o9FH5WCa12nwd7d",
  "key10": "3ffsYp7VeZKqrh639UekH2SQ3jr35ttqhJ25ThGCnGVgcwsK6e2UK2XLXWGc8rderoYKu4sSrGExz6aqBWMzWmgL",
  "key11": "3UaQoVxyRVEHztnMAb7UxgxdTarjWYosqnpMoE5kAjCuwu4sLQzjhZqkdwBrhwtHmQixXiux9stPV4PkaYTNMXHJ",
  "key12": "PxxKRFSQZicfPZhvfzjnQCQCfHPNK47XfUW5jP3ShtiZfyf5zPSVCE1pAyp4ywtMHc192L24JUhFmEpEhjVmyVu",
  "key13": "36EwNve1xqGf8DxUSK7nAqjbVRnLJLLcccuBvmRwNpsJNbLArrPqQbMkimnJ89koY7NZmQEnUBZuTGXRaeaRfbJ9",
  "key14": "4ehpBu5FAhiKzADQc3wN8Xha9urQSV9Xb4ja8sBRx7zh3pQau4k65tQEz8veUYYUK9KPgLKijy2LDC8YEbtXH8FQ",
  "key15": "5rxCzHJ2Riaxb1iSvyyjxUDc9xV7QoBVUDobqwoEhWryPevzWoNKZLZAQCky1TXqXcLgG5yvQprF5yJrpN9XJRgP",
  "key16": "4Z9xEoLrJLTJwrrkTQKQ5raSLoMsnheXM8xn3NUc2vcAoqbHMpYbq6j3KqPmfGWQixQuJippHS2rXMM5FmrwwtVP",
  "key17": "54LL3jwJHx2tUPK1W3XwkBR4maEdVpJ453KZV627isUfFem9ph6qDhWDooPUDWX3RSVEWCUJd6gQn77RPW4CAe3A",
  "key18": "4koX1PGjYBq6Eu4DP6X79jsMASUEUYEbcp6so7UPxU3FxWTnkHXoafshm6RoNYFU8p7ySUBfUnobNj22tcTUwowt",
  "key19": "29AiJJXR34artHn9jcfSqt15KHxJd4Qsui6NnK5rJdMT9bMTw3iE9cG7jbBMayQjfGRgDVoKGVjoVSSViN3ypFp4",
  "key20": "5GoV8ofpw2KPEAo4cowh5JDLfzgWHJPW9E8ER79BsTgZyfDZx6tAZQrRQTzo8sQdDU1Hmqv8xswow6Hqf3gnssRi",
  "key21": "5W1RYKfQJsBAozXffxzUSr7nuib5BgaZBSCTNT1KseHoPCZgRRnLjrsGjqt6JnYx8kHjHqVEZhY2yqeCJaxYQGTR",
  "key22": "4DRxJXVY5F82qXfUzCpReKRkMttVXxWyeM1RPnSKNpnoHg6pyUySCUKuhxrebYPHQoqy5fsxBYF2pmMfR8yLM6sn",
  "key23": "yS1n4WEAw5d3jDmeRpcnXiEKQJjqCQL2CwruhLPm1QboVKrqJfwpDjqvrq6YMHhLZ6JDNyX65yNFM34kTiZgJRb",
  "key24": "E8bH5Cg5oW6JAucody2ysBkvUCbcPudcBUCzegATFSJathfyScRX9uj3akZuUxwpCHkT9bWvheDpTiehBMQo2uE",
  "key25": "2DJaSqaMt3Jnvb2HhRXsJSJbMBmpvSKhvkBDGWHbbEzjcGNHy6CJsyhJJQzghC1gFhaxnLQHUSPA4BaTM8GyRPw8",
  "key26": "NEin2TnAxysJuNXF7pE2QH5EdXAAGr3bxxYNWyLxCGd9LKLunkoMs7ZfpbncixMKsFEpyR4AXEYQYnChtcQa5hH",
  "key27": "4GFaU988WdRBymfFZ9LLTsXcpeJTAT3rEE4qsgHD89x8bpZXNwWNYib8q54Z7RUEqy5hDbjvNyoXyZRfJuStfhPM",
  "key28": "4xyukGNVEgdCt7eQx8jrsvSWHpbDtiSDBTFjvdCaBB2uNbBeEota5x7sA32q1oxZS7uSUTVWu8x2tQvfiUfBHL41",
  "key29": "3aQKFXNKXj6JwEfnzTCaSsAhQwUtRYxDHhmPvQzeKvgbrcL5fNJM4LzSqzJEAC8e6EUF5EFfAanTeyS6BhowvVnn",
  "key30": "4WCRPgGZr8FMi3nnYNQW9vPmNjPf4WM99f6Rm1WR8myngyZoDbQnE2stWnA9L7jBkTPidpZPzedJy5F3mwJkWMmx",
  "key31": "4VqtJ8QdwB9AYgCzWG8HzizduKEkGJhY6wYEnhZddViDzcXfYbApVPFZf5cohYtS45ftG8urSnae7YXp429hshok",
  "key32": "51u75rX9GgMy7ZCAodVgtmTSVmpAS2qdko3LsyCns5JgqbF9gpEbCsp2xPJV2aLasz3x2nPraPskj2br5Xc4J4mw",
  "key33": "4e6ZRioGGf3GW7p6jSVGUiz7T8n4z9bUTj3SmSze9S1EQLN5MU1xVUupXYZFQqwC1o6VKstuMhhCyZuR4ofTs3T6",
  "key34": "3RAH1mHTNkmjZRWaXXJUevhzxPjByMmoT6syZHPaa7Y69xbGXMaVFif7vsdzobtvcyiVSubSdMg5pwaDNvJVvdyU",
  "key35": "3Ysqeco4q3j7cT1q8Q98cLFBFDUUj8WHYydK9yZpGJwRVdmhNt2sTRh51ebgj2JRx6cdC5cXwrNCvzdAHbeoEuwj",
  "key36": "K66pm3S2uMX3JzEw1jgMfiGKwrsfs34Rc1dKKPKQX8o3zc6hrqHzcTeuzHhmqwvA9bmFjT3qRFYuTqGTVWBihie",
  "key37": "5EZ9tQxjjzHH2KvNcCrsRnH5TcY2EGuCQLb6ws1CMozZXN57Q71X9BmzdLrGNYtz2ZcR9h4Grbe5Kk4RW8H7HPMA",
  "key38": "3W6ZvScVeSYUgHdrxxHuotCbjAnwvmtEriJyvHEH5wabAp28EcktUaq3gW1ucMUKRAkL3aMxqq6oDpTBToT5XVVD",
  "key39": "44BF1TmEsaPBGgmx2gvC1eHXgfnugihrWHt8e9iQktKrtAS2SCLeapzCEfH1RsaydTP4dzj5FtQmgcPpXD2ya2vk",
  "key40": "3Wz2xM3fHUcrBCQ3eXCKbNqVuzFsTDuWJz9am1vesZYSBgUfwCCHFYYxwhJ7hcfAqGf4DNuMsoa78DFoPSmU5c7c",
  "key41": "2RV6yR1a2FmX7oT5nG9Vh5ecNPgRBMHfn5FdvRST5Dr4hdQiPx2aKW1bKP4XP8TY1AVjN7hS6tZFYL4LvWhCJmcw",
  "key42": "59Gxch9ciG4ARjTdDd9JwJv557XXv1Nuu8d6shG7JkXbE9jx5vxeonPj3u9tzn1XiCKs8rxB2AtLxzKB6JFYgxkv",
  "key43": "MwBux36Pire6jFbHacjPWeyTGFvYTNkKm9VuY6X3saUEzDZXJxL67Y5rkSvyBuXXDdcDAL8hTisFL4uk4JFVNr4",
  "key44": "27fBmYvTnjuGHQdX7qw1BkvTRbRJqv4fobEswHF8KYrUgguRy8Ngm9CKvo4ePcf53FtxrLFaJ6QZxrcr6RZWfHhS",
  "key45": "5CCi5DNDMrew8ENemEEbMKgALtyG6R7GhhxxovVSKWAyqgAcxaUysEi6S5chW4U41mtkpV4pCMahsigvp7LTKaid",
  "key46": "5P9AwrsJCxE71JEhdYJ4tZg7qXnZkNvGUjToukx6tXbe9B6XrB8UBkEd4AtjsW6ut9yVPLwv9kQ3aB7idLUom5HM",
  "key47": "2RHB5bF69JFsidkzrAjaxFc6WER2HATo6ib7c64vEwFTJzpV3ntuVYXFiyu9HNkJxmN2HMNBB9auBFABN29jus9n",
  "key48": "tZu4xjxBQUGaogFGeU7wrUsig4kYzSYcg5yV765V4MBnxFQzTT6zueZxEH9aqT2MkV1cyZFcVXrSbBGBXkZWojB",
  "key49": "5HeiYFEv8AuZrhgCcr4UkQZ7W2ZBswhqHsbd8yuw76gd4H7GWifoSvk2VBRrL4SdaMdsbiQf4v4PWFmVMqro8EmT"
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
