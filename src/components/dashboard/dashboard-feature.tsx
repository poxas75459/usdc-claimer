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
    "2ujKw1ippY2EEUuVdPKJj6tXxQAyQgwt27rt97H7VTsR99CxkPLqfUQ8khAe7HeY5rA14fmR5bfkiNmeqjY58nSV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ULmPuwHUqoDraq9KM7Pzy1RA4Wb5ACzXz4CQas4PUSf3TSuackMmymnMFWY2TvALQdaNv4Pno7Uqgf654vRjGtT",
  "key1": "2QHdqAM3otuPaGHSZ6xk6MJbH14LrWCeLimXiUaTNBpTnG4hwzjtCa6SvL1SYvP7Et8Jx5XrMXyqN88nAtPW5aZk",
  "key2": "5WuzWzJm1JCXH8JSLW67uafLzgMpg3LL82yFLYVbGiaQ9GJqd2vJTcSg5mC3msCA7eWDehS8tBJfqM1YvroCTYvM",
  "key3": "5obF75X8DvkuVUqhgq3zGo7BfbYGb5Bezksjb9FcLX7Bf3SDawD9RCN4KnA871SvVfdxGqJ19Twfeay37gQ9DU5D",
  "key4": "4iQhzNhJJY2UMsWutiEVbo8uhPjH11GgHjTxzk72czj9kYpT7wyzJ7Er3cJydwNATD5DDrRVdRDGMYLRGCPeDt5H",
  "key5": "2VwTWj5Ld4LSJcTe7GzRNLDLxS7AV9bNL6JdJyipNhxFZMhnNJqkP5kF3trZeDB25ZBKxnRHZu7YpufZv8vyHuc6",
  "key6": "4RHZxD6Jk3vMaYAed37Cu8RRJnfPWEeVAUN7zCDN68rscMUG9AvsAZuckTXeJhcWkuovkpvHkmsQzJXRVwLg67CH",
  "key7": "REZy7DqREifnnJuaPm8SDa3KKx9AKKB5w4tFmVQHegwANhPUrSiEEwYDwYY83U6AN7BqDcmsJdm2drLvxk4pv7Z",
  "key8": "44WBQQdktHV4gDFnmrnm8x2BCCp3ceF73LhdCXjdAFc1YNJCmVM4QP2DR8oMzBQ1eWkJ37vLtdwr1D2m7FaAJaJS",
  "key9": "5tn9kMzYL2MJgLBCREWqGTt9Nec2gvJQ2yqgtWqAq6L74KUK5K5uckGjYHCVH6QysWKAwJJXEPCsDheR4aFQgSDB",
  "key10": "5eRYvUws2Lt8kYbtut8xiNzEtTFuyZTUh45hMCxgnbw4V2NsRjbvBLcDgX4JYA5mpoMWfhmw7DAzkQJZGNGbu7bz",
  "key11": "4uCS19kqv9qcYcKzAGfdiHqpHXnBJAME4Kpb9HdagbyEADe2QnAWAp79hc8XUs4gQoyKUF1hjgwtLANvC2AHmQjQ",
  "key12": "4sLx7Rx2Rfkk1TAAYnKSBu6cj8BwgBTgmRUzTcpbuDmzDmxUE5VMWEVd9XmqjxiSsPCdn2jKZeA3wq65bFZEHA2D",
  "key13": "5rs5SB2ptuQYiyoufdrrsZLqGuf6CXc3TUdZr4msWXdAmUUXqv2vUG89Kj4Nnhd3tA4x25M933Ls8syC458DrgRQ",
  "key14": "2FDHk4yRReCwjEv5AY4Xhe6nAai8gzANLP1Z86t1o9jNAF1CmQpboHqZiMvbpJhhoPxPvQZT9wpfqdQqDmHeKTA8",
  "key15": "5DVu3TeSYtmojRtmukQN1m8jNwqqdvpo1XUEjcN5JRcL7p4tfHscpeJrVEZPbPtuw8FieZGbEkriwC1oSzruKe8b",
  "key16": "4acJDELwbTZ4hbAKu8CG7J8a9TS4jNckcs8Sxt8QmhycebxNYnAKxyjKCVxBk3dKJfriU83CDLsjw3MQTM4KkdFE",
  "key17": "5DLdTFxNFGkYcJT8cyBoStqHcUgcRou61dGBJTYfJqMBnXo86SjKcPVcjjweFZh8pajfkJax4u9wnUV7ZzBaDgCF",
  "key18": "59yjrsFaSgfGqtmdRnhMWq2gAfo9X5TqD11pAusZEmY7cPGQzZeiyuYMq2aJaUpeBHVQX5sAtARZkrhHmQR471mz",
  "key19": "3GVdqeDhkc5PJcNMcNE1JeMgJkWaqwUFsHHJYsHLaPhGWeNk6hPy8HDgW1iXRSjSBpCLo4whQ8ukJW6SX5iaHd6",
  "key20": "2CucuSwUgBWsKQJTNvGfhVBHY66A2BKWxuXgtvUWs8X3y8zdaD63xzroH1EjRz4H19KzbLq1vhdo9sF5ZsrghVao",
  "key21": "4DhsibcEgqAemZLznDvYi1TSGqPwcf2JwGKkeKQLEng5iXKgh67TJyHFsLMVda1jujNDLxjLcBZv53sRdj3KtYas",
  "key22": "2XXTDPtPGsCd1f9L6TvgZBxRuocNEDt9ZRMFXoC1Y8JJ4zXbR5KsqvGrngtnsA8RSESNfkG46wP69J6xhrnYNbXM",
  "key23": "2gQfAmXEfscnvgwBkmRg75wTyUPVNc1GWcSLrmHnCxdoz4fBKjYidxjEVPmJBpXnN4jRu42vxuuE3S3XwbT3Jj8h",
  "key24": "4n4w8CyQQpBrWGg4VBjtkN6jQePvuamtYrd4q2DdJxYizJLo8kuRsLu1uos5KMLKpQYU8MPWQegyKTVwh8ajq7Ji",
  "key25": "4T1C1pTAuCxbXSLg9ypGtoczr9zBBAqaJvXkSfjCRtgeS71GVw7r8oUgJqZVbEpMGWDrDihAdG9kyEiHBRnLThUi",
  "key26": "PDkLf27ZUquEzpeQSQMjgKBi86AhQX4sVWRo37U4DaypGJSdPC3r1maiVhgRgMFCYMt3u98dJLpeQuBZvxYU4Ei",
  "key27": "5rccYZfdanwxLyLH7WawRGCsZ7RR8YinRKH4HhkemMFo7DSZSHZkWgn2jor1UzHkCphYe73npd2gb62z9E7FaN2w",
  "key28": "3zKfsV4M6oukVdNRfE7hoCWM1MSbPRYxJtCzSWEp5epssrasYGiuSgM7K2BTuUhwrs7F8n1aJoMEvcf9gX3GKL7A",
  "key29": "U4juX19UBiQCqRfnEoTyk6jmxU3gehEfH3KYorrmxRrbwkgfkEbuobVe5gRATyQPNCJrP9rJW5CSYyxj4eqAHNJ",
  "key30": "5mpTsyxfLvLKPZwH7HW3riJFU2LnUeuvmJrT8gMLc23iLJzAtMvLEm1ermgPXR8S8ZJSCWGtJW9Jy734e47Dpdw6",
  "key31": "3BM5DXyXm1SVT3sZ8ormigcssyV76ZKeuCEWcmxtPUBvjh3Um993NBNYrsiL3K9zH8vnhE6raSEQnb9eb8QnNwJj",
  "key32": "5F7DtgWqvsFgvzxgZrzgSMbJqxeJZGftLcJzvaJG1Sq5Q6KcrrDkqjiyEuaAh6mQsD2MxQEo8d5eeLPKbfGfko2E",
  "key33": "4vo18RYtFD4QW9VsABqAafjQneEjDk6H2p3u7yWCXoqaA1JG1tprQCneZzHXVVzhs7AYiSpeY9Y6K9oNBxXYDoMj"
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
