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
    "2xx3d4Mc3DwedSfnpLKF45dBuZbds3gAjctkVWSEk1sq3VuGSXzLNfbEoF2jVGc2eCHyhFgkj8e7aFQTAKx3PwZc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22ukfRsL32XkFwVhnpj65VFTSpgCcCg5z29gQJ7y69pQvqb4UPgaf5uyLNtZE4c7MetB48XfSZjFEg44pQfYc7UE",
  "key1": "3ojbiZgA45K7ZJZANkRafatFQ7mDFuK3mZ7Ec6E7inaAFW7fV4iRHySY4TVNHDd3M6nJ64ipK3sEzdxF5E9NYZgB",
  "key2": "2aKwghyuef5NxjbBaLXCPEf2LZQ5Ti588aQMkQo1v9ozodqboTjUEaMNef1cuK3Aa61LpW7EnbEvmDSBrKjh3H7g",
  "key3": "yZNq5gr8mjfcQ5ffUgru5ob6p71n8bz2xdz6Lr9utJasuvDKyeVBZnomxUD4z4MEgr43YLvYuxyBCth8BnDxao9",
  "key4": "4JzHqaVvam9k9b4PWY1RRUkhhdTtVUVZszhVNJxgfbt3SkfiLh2fQYKgAfxgqqkD6489Jvyvmp2MbtBV5kxvHgmM",
  "key5": "4r3YbE9LxBqWhz7AkkpJs3AWiJZfarHztwEDdxZRBYVf4yGetD9PBA3zGJsvwd7xRUxqxmSDdqF2nZnfPShdz1Vy",
  "key6": "3izPCkY8xtVGmTv2me1dkWi5x5UBAhX8cR5AGZ13FVMyC3pgb1VRNuQG8Z9U94N7exLx53UkxqBSGLmif1Kyts71",
  "key7": "5VqqqAzJ7Wqamc94AmsXi4Z5izqAsQrQi8e6EYNJZiSFRStQSqetjjVBhxpS6Bsj4W7Th5cBpkFKccpAot32AMQc",
  "key8": "2XxcjWZBaghvZAawCPi3bxuLTMADqmsr7g9e6X5Wm2noiiL1SrhpqsewiXLNyVm9ceULQheXRU6YWu3DbMSjaTj9",
  "key9": "oUD5bmh7W54krMGS7TUqgEhMCNuuTpqZdzzxNEPLmbJf4md6Mbqt2h16gUUi5xocrzGfrooYcbPtodQEHv3tvrt",
  "key10": "2vgyaqPazPgpenroVZSEhnNKE3nV1L3TBGjmYPjheyLnVKj8N8ztbqdDbKfMVLekS5UAysxFy1pKMrG2DpTK4UYF",
  "key11": "k8LfCixexvEYZrQJEPFrjaEjr9UdPiDi1cGBxmbW5HNV51qHrpZBqtawq428KfcVUKYFE6BzvtgSKMbYi49vCMx",
  "key12": "jHt1RiXdfN7mJadm2XWBnFwbcD1uhgH3SSMKcWU65VUch3EdCAy8RWe4HJrg9x3k5hBPGjxYHViJYxPRSwz8gP6",
  "key13": "34rGugMPJCqSGQULcQBzrmStBJCFSeKE9m3YDpB76VXkSvywHL6nCejKQuU2xHWbc65MZDu9qKhi2y8FsQTc4FVR",
  "key14": "5YWp95Py3faa6bWg2pzkPYp6dQsgbXfZFpRpxVPUF5kctgcGnFBRH76cBXN4NHUigKB9NBfAfp2dyyiiaBj1Y178",
  "key15": "jeB25sUHv4MJKzRUQFG2DdFg8v1qnr9FpovZxLqHCT9ejDyFfg1X7bD7d6tUJ3tr3iREfJPhouDhLhuWPU2JVT7",
  "key16": "4hA3pUB18oSU75pWKGCprzTbTyxSttE1fK4AdY5ooJoeVkUMXnzddZDcWCWKHznR6LjkbctncFkPfNkbGtoAkp1n",
  "key17": "4PEcJsPah7d72aSdLRDxWfHDwocrBRyvopcpevgaUwpDMAWL7QYtp69Lc2c7eCdUdrd8Rzpu8K3SAaFnPiRXQSVN",
  "key18": "4X7b6vBFg99uqGhwVD2w2R15GN87xqjvECiQdkxiWiGu3xZzWi7ftDcEusaVWhEQM4MV5jqRkyfxsdyPrQknPuc1",
  "key19": "4W4TTknGoPGTHFS42BtS79BAUaWwoGdHDafN23fv75Nv9LCcKdkbmaVDfeuytd6N1tWMhk15p3HdJwyLizyHpqSS",
  "key20": "3fwD9taffKSgquLfTbRjyFeYmT4C7xZMxbswfapcy35aHs2dgdBudDfVo6hFNmsjthTx9bx4TGd48896G69kLBrH",
  "key21": "w95RTUipa3RRbDHHBhE3arG1LZi7iwcmUrdZdT2Wxf5BR38PVoDjcp234ZWWnkpCwN6GM7apeeT6R6eyYKm1g9a",
  "key22": "2o5SqeGGMHjZtE65rAUbZmBEtysTGrmVXowQzMZJ9x1sAUBFDB6yTNMaCVxFrYFMyMKfw9X53pZv9HoMe6mxEcAR",
  "key23": "ibqyVSJa1mVTt9xuCYQF56D814sdWfhY31wXpNFY7XSxdtWWfrPUJBY2YKSB4KHsPShLdC96VCmrWHdSd7CzCqU",
  "key24": "51LeiFRjKcC6Jz9DnyAYHFfvpQeyQUrTGpVS5VJKkBGkZzL9h3fLUyrieKadGcfzh5qtxCuuLW8tGQ27pkaxNGwx",
  "key25": "2WFTqTrP1DQqLcDKKND4mtgnki3Kgu86nYg3WcoZ4ekeAhRjFU2riDZdw8C16q5hqXSLUmck7R8irhagFhM9YymW",
  "key26": "JRGdkPtR8ES9Jsjk9dYsSuDDbHPQd5nnsenDqr5eemZUneoJF4G8fwMEF9VMuxVtQC9EAeQQCoNftwCiRc2NbeH",
  "key27": "2emot5GPvpe56S3K37pZA29eJ26A97xwepTTqtDsHDsvaKcwsU8inrTop6XyMSdAkeBpprgn8PGd23hAYVNuHMbq",
  "key28": "5BUdChw5g3BkhaKCxkdvTn633ReHWYze6cHLxaxPYXWWJKBW2hSm3eMG2QyiDvHBYH2cGcaKppFzFbP36uNvtYKL",
  "key29": "EiQuKkYSfEvkkpyCoMcW726VPLa7KfEvr555Jps1P1CZHjnct92c7w4sdvbq2SrS3pUr1KURw3MxA7WUxk8rjZu",
  "key30": "4T9RGfc9sCSudJqVAbp2CbpKDsg27CjzfagPiJKy6DQe7yWeh8pzoUoLWYK8bvRvZNpt1tMdtXhC9Ki3zitnM8Xg"
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
