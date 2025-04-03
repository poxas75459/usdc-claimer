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
    "42FJC3mRJqzeQUTiXCeTsQfhT4ZBCJVUj1v1D8zzjMhShS3vnyNkBXgzQPMqbiALqJ8rTMed29UNv3sfutSuwSre"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j1KtpfCYb6Qa22wwRCJ9UsuvUq6QVoC2J9QVoBmgovwc8w3M5QpS3ucBgcC4guRzEWp18VKAqE9NXq4MJoxvjck",
  "key1": "ransT4r9geDtwaRjXrm6izodSgVTMYiaoGHqEZCn4A5XpTo6PedAZLFYaMVjHsJcpLLdrDD74TUZz8KkmmpfR7r",
  "key2": "4aDzchSgzJU7WBJbExxBHwL1sZ4EF1nRPRrv79mxMYqzRZLCFsZGtHAUAFyvSUFw3N9DVzf2hHK4hV92dermbezg",
  "key3": "4NLQ4iB4g5FTH6BNBmoM1Nq46TbyiJxKsnnjBQeYuo7q6i8hh7tYTZgyURDxP6U9xrUniUNmQo7tzkmwaWqiiAEc",
  "key4": "392wjo7k8q6zHtiHR3d5xzMA2D58h7p99QuB93FuEa78esFA7sWfuPayfqgGbt5vEdPHz61VyRN14wjSXiVVk5Ae",
  "key5": "5SJRnNauPxgrqkwyBAzHNf4zse2VtP9LeFKue42zr51F8tQ8mNza3PGQ9BSuH7yrhegtpZBKLY7yikoddaUJpPBB",
  "key6": "4PfhJdBz6dKaMTQ7eSU3Z1Ry3bbHWwiH3votD8d51ir5B4TiAodsLpK5NQ15vUAXdbAGaERv5qZfKRUj68RfBNyd",
  "key7": "2a8pctxUYPh6uKtaA5BjxgQ5tP4Jo93rorNLUvJbJ8JmYJTRM9yBxUBq8QyNAEte7GYeVMkF53gd8e6miWScui4d",
  "key8": "2skWN4vCz5VZLxmDz6VgBxUjQBvuRwGobQbZRr5QqNqQoyMeCUkusnB5ak6SkDJZ6bM9cS81rTWPYvEt25mxKnTC",
  "key9": "2TAbvyoYQRfqUqX8gkEbftp2SASCBfZtrE3wLeDMcRFL4NBpKCmjk8o5zv8b3AjgKZNMXARfJP4QyTxPNGpBGYMH",
  "key10": "4pDd8uYmrhnUyCrf2AhF8wMQDpUriikhoWaTVudTGsshmFkbw3vcn227YBmKAtcp5A6KJErvPvNJ63NPBp4zt22r",
  "key11": "2QYiKj9eGmRVdWpvz8EhowrKcbejhCdt7rNYzzZWSfk5JvRfUU1ztTABaPWTCtTKaZz6qgRD2vAfpWRV1NxPvUQG",
  "key12": "53REFDmidxvyTvy1TExqrRxpd82AYS3sWYN81vycTXDWPVLojfQkQXh9onm1bBMDPC6Md4J9iuskKfrU3oFKaEj3",
  "key13": "NzeT42sNb5bwVWpPE1mvqp3F1WcfDHPQY5LLxfc9TfWfRiWs9B5kMxiFZHWHxzp3Rfd7eXuAuuRahj7BJuFifLM",
  "key14": "4siSbwfMdXczbcnKPdX37ue6xxmH3knFPqivvS2ZEtH5YPXQ6d1HXgpFSoRadmy62pNCFBo7sjGJhfbMo65ARYPY",
  "key15": "52qLHKfKBR5XN9Md8KmU3iBRPEmHkYZNTe8xY93R3T1sjfZcP99GD6S6wj7sSBARoJSA27bNpG7sg7MRMjEhRhQW",
  "key16": "63fdLdL1985s79zQSQDVEjVdPHMLjpLzBwAMhr7fLvkzt1Qyh9eeVdYtrrKxwAstGF1fc7sYdCCW3SYqkH6NE2p6",
  "key17": "5Tz7EQdnE3Fx2ytb1LeDvXptX6eVaKZSCA5XTVUhSWSsJ2gCE9qrRPUyDSa1gMVBkZFJxvtZUUrzDYVjwjFSseDH",
  "key18": "5CbGJSq72xqv5n6zo8kArzf85kg4VtTN46GhFaX3qYx3oKanrVWw76DUySPZKYgtdCAyzonorizdAePodsen3rKW",
  "key19": "FU4G8tFS3pj4gNo3qeE7MxycaA9CT59fstcoJELQ1WVRusZLWZ7AfBCaiEm6X8UtnFb1Pg4yWfsTFyJAAuoQ59N",
  "key20": "3N6VjyNKER4maFWemaF5HN1tzzoMKVjMADW9cf6w7hT7SyrSateBuh2yNfarV239a864Eqzkxgrv3L2HsCbZszba",
  "key21": "3yYfTBA9FjTKL1A1bAxFw6T4oNu4rqm61FU7T7daYhQ4nCQh5JFqTZ776SstbLtSUHSpsbkvc16wmB2x941oUmk9",
  "key22": "3NSYJjsrws1yU2ceYs1jGJH2EaVT12JYwEBAybfgZ5GeSyuEp9WmTZ3ErEDKswt2BfoLAJZhukvZZactrtmixUdM",
  "key23": "yu55cL5t5wQzc7sp6ASauvpFK4Xga7VR4nTGKPYaSDBbsZi4GkWt7bdU6JeSZcMcG19JwtWucd1Mab4JUizD4MN",
  "key24": "3yzekVZnEGs9XifJCxbGFfZEWXXiAvEdB1H9L7KyWiZMgrT6rbQ2kopugPeyCYzvvpqKpJVstKrvqhRZh6sGftwe",
  "key25": "4Dd4T26D6PRUbjiNXtsFKevsSnXLeUfriudrDYGMtUehZf4e2e2XSZMVHzA7oDxC9BoVcoiAQCznjf4HP7uxQiwJ",
  "key26": "3fHr3zPCMSDnGhQF5vBmnRjSpVoLyxDum1iCxuJM57shACg5j2xbQ9R2yGPtduUuDNaGSRGrhx4H3UsraiPCbLFF",
  "key27": "28qHoVLyF3NZPHjqqQtxautJMwdxdKwTix7SUY3bvV6FFsCEWoDpw6EZqv8Gpg3u6KLRjjws3E7hZA3pgC6rN7wV",
  "key28": "4MBRHGK52AEr9aqQRxYzbWyikVjfzVr5p6q5nd3yXMmiMweiDgmHZxGNsDfTmPnZFgf4Dk83FwFYgkcBXcziK3Mp",
  "key29": "5pYaapaovzhjNpEEAwZWaT6ccxD2ARz5GkEoMQUTd7ojjb7khYwgDGU1RzE4aRrP59VkDKsqjdvH8KsrzuQwnb6m",
  "key30": "4JeHxwryLDZveihENFmqCS5C6qLNwSWVBAfeL2df8SaQcRhw1X1adVGbxqH8N39JiDvF38iktP4ZSazEWmPLYJzZ",
  "key31": "4iuPKruPjHjfvsVpApV2WrM7eCj4tGobQr9CeYMSyReEc8SJhxKJBRSN1i3ixaZygj5wooDG4JegvofBqLUKcmyy",
  "key32": "gvYFGQTVqSFQBSRfRjp1Gk1VRbSnm7NQgjtNsDaqt5LPcz2dRTmWkSnWTEKfRtYtiQmJJ7ZYwsSvP4FBbCeKpPU"
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
