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
    "2uZLRDGjochPBWN3f44dPgP3gEFQBcqz3Zok9pNhihRsdGvSghGxNXq9zqRfoqVXfR9o8LA362Qd7gwfiMc1WBS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UDNHarPpPw9qBrDDhDfCFLLAvzQgrjeCkTfCWE4oLxdYLg88rNEEpY5qZFSM5emZR5TbBrU8gEVX58daVAyJfwJ",
  "key1": "2v3bLGMfiPBGbo8xprcpcsz7X5Y7cw2xq2h2QfugCdXatXZSg1kv6ckaiJXuB6tvzUmnXNAwXDGYidakyYWHUFUW",
  "key2": "BVXGqAcFd5mRa6HqfZKv5x4JwPopy3zCArHyuxdebxnVqwrcADz13GaAGMqtfZeiAxE2DGajL2oanoTqmgAQLio",
  "key3": "211AjGoK5CBUB2eEqtNGgrPrWHAAjzSqE935EQX1vKHbj5KCMQcra5hzsmdMWdbH2EXZyvWEA7h75AQPC6aW8sed",
  "key4": "w5NuUc3GcJrVTdPh1jVYECQDanbxqCXYEx4UwbbyoRVk6vnVvbuuNRmdUaR7XW3mKEbAaS1iYATBWd17rJwU6aM",
  "key5": "2s7Br7eoHBDGpgHj9p8XxP282d9jsAAB34qjDdxKzi4VpT2wivRebDtN69SuQq83XSeqCD7Zow57XaJh7cbyhsZC",
  "key6": "4SWt2o2Cw1Uu4zHj4fy5ArARGK1tsSFhPjoTT4MXoKmTvHZHg9LYxTzrySLTekAVUonuycEkb3Yz76uFw1729nx2",
  "key7": "5t84oQU9LhUxXrQqNRC4RdzSbCyQWCqZK9iWfohHXuPk5WvyXM91wxX1GteSXoJKAuvTony3WgDcWZWRhAJD7CQE",
  "key8": "26xM5QtAKqGMKCzq8um8XTCTbs6tfgSgKxppjbfjxPgotnunRNfy35gvGNGBwJSF9kkCY68cw9Tp4JQBmas23Vb6",
  "key9": "6546H2FytYwy9ero8r1K7HeUcZZU163D91oabF1yUkZzzjGXN1mWM8bofLN95Mi9zyf7ysV7zwu7pWwsQPQwBxWd",
  "key10": "2UPxgqcRmQ96tjZNtaMzje84Wn9wwjU7i8M9k19T8rx6z1jRAE2ye78QQBjMxoXcNgZsZzsXjRs5hEWSPTakwRAy",
  "key11": "4MuCim77xB6zG9FScuWDxYmwKMNotLdmpDMa1iM7qkezbkxo7VGeporq86Me2tt4hAnM2sh35nDwa4pHTNBH22mQ",
  "key12": "4XUy54gMyYCfKyup3pth7s9BnPnUuaGpKbNuvUEyYLQNGNVGYA1jtUtpxof6EV18TaYkhZ99YFuoeo96huqv83Gc",
  "key13": "3sUoSWJzNd1qp2j8xcbHqQn9rkbCepADBBcLqP2nFHNvC9qZejdUWy73Xf8WXqPqNitC9bR1b27SvRtehmmWtxza",
  "key14": "zyPqmy4feMoc2EBKxi5cxCQMDhXtD8Zjr7VAVe3yHqo31Hh5jpHhR6aEBScb3cF9R8gaHjVkz6jTQ4mydX7u2QY",
  "key15": "2DbmRPyLtAALZJDSvpzhVyqEYtjCkMgwJbXVAjP5CcF8SxWgpwrpey21v7op3B3LZ2261iFuEdkSEuVPQfEb83SQ",
  "key16": "5Bhv5mRMMQpt976L5yBdZGcqnXkSAjeygEszBE5LwADjw8CiG4iSveWCNQN46KSJ16Juxx6GCYFd52zATXVb5H4Y",
  "key17": "5puCWQFgoCqoM3KsyCNCQSWXW7g2hpegp2sPzxK6CsJLDAv1Sxt9MxTSZu4e418UxqRBbb3HzgGea9fFmLtgePZD",
  "key18": "ApgE6gH9QYcFma6Vv8xLeqKYTPQUYXKaCUxpRcWMzPqKNoPZkebmDz7UHRg7jxYCN68LoVPWWhBvXprNC5g3Nnu",
  "key19": "4vQoadjPX5pNqwqqvqm7FNKPbGjwTocpafkYCixKAypBvQCJuXnkjPPWiiErzo83BEW6awBjLXSwGZz8Fe41sErs",
  "key20": "3JKEPCPnMQvUQG5Benzbt2YQ5J5KBh3FQmPFP6AJiyvCKi8BY3XFSCt2HCrDDPj7nJ2zdUUeiacjTDSqnavkbSnU",
  "key21": "4sxwuD1G7BypykZsm8j8M2MgTu6bvkhhWMC86wFsfWtfbw21FDFacrCfRc7MSu7F2Km6rkk811VkHkRgJEnX9Mjp",
  "key22": "2p51XrvF9yLe1kj9rxKwThXM9vvYTpnx5DDrbx1596NHSDqpQpUnW4zzkxHWtRbr6hhzshuT2SuabyHvB8V86zUh",
  "key23": "4vwfcsdjshjkqMDdzEa2F4rRkJ8WaV17Z7ev1vQ8ngpWgkPwsWdCDfXWAXroMc5juQiepkmRHT8hTqCxH8AQb1VM",
  "key24": "4QWU688MEFD799hwQUznREWLqPLSgKWeFyFJ6vAdQRdRzxU3BMSYMz9Mh7wtCqmizAvcBsGgTGigyutPhkB8XTRi",
  "key25": "34esPfNkt69uWssSeDAYHYuE2UWQRih2xDKfyBgr8scMRznCZE9NssQ4drisS1RmCSy5QNy7Pbm9kiFueMjS5jc5",
  "key26": "3G19w4qt9KLzdU8FN3bhzGoLqcEnndKWsG1vrh2qCUd8QVSNJN1cdY2xNz1r8fh6rkX9N8wkNAXXDVQHQXsPqoAy",
  "key27": "3ZXEFW3bSmQ1Th4CbZHGVCk52VZcoQ7TJgP1xcXBCUcDDDJK7NpEGBWrVgZVhKk12BhYBDAdnej5t4WsHtr3wvZk",
  "key28": "5i4ueuuC5j2Jwi8A1bizNoVbSZFZKYRLDgJ2VodaTgCjGcSiBnkF7YFb5mj78Vwxe37qiApXLv3khJGeUALBaGvR",
  "key29": "YNvuw2B8oPeoEJwVs9NEi5DYGx3GgDgBQuQ2dVdZ9wohtcenQwGUC2K6FJDaLEEZVRGSu8XoZJRe5uuZC1dJdtj",
  "key30": "4m4g33uT7A8SU3hAGY4xH438FEdR6uJJPr8SicQZHpTQLsgohGPtcS3AfgxfuKwb2tDb4TfHknhAnC7nBPM9BFVJ",
  "key31": "5EwZGGi7mYmY3iZWBxvgrjyM88mDXt1dLMWNBes7WzxfAvbB83DmxpVEBbP2zdjmNctkXA2H9LPenZmFZBbCy1mh",
  "key32": "53KEZPgrt5vi9zKdiH6oDwWowDZj6UzT4WtAoQdHgfoHsxsEzeQ9fLRv93TGnjnvukMSXoNtbqtHMAMwgeyVRPb1"
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
