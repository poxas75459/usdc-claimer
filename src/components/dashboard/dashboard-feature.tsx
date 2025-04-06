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
    "RhpcLr2SVskUMzWJpotpxtivWwD3EpsVQJC2fS8qioNLFmDtG46G93tdXnPKB6PPj59yvyCDQHk3jmsj3qJmVNZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f3SCLUzMDdn8fqsJwmEXv9XTa5GNRZM4RphgXyAtXgmS88fK3i9fDYveariBmUsFVa7t1fmGgmimSaknKRjjeoA",
  "key1": "25nvWEa7oZgtTdxznrWYmCGXEQANqkcVeScfdELCEMyHXJMsERrEj6YMPfgMs7hUpPGokbYAG4HEJcVJ8s5FRWLw",
  "key2": "5hpTcE5jmTKyZkntCnV96fyVXztx35bhppBYk14HpRhDpL9udrBBXJwh99bo8DFUWrEneD1BAccdwFTazhPRpuNG",
  "key3": "2MNbqGvyZH9BoE59GgttD1EbVpYZpztVic4uviLJpHxGwCMfhVSg4YLGCQBfcZjde1r3fWWmsxd9qdunoE3y8y1F",
  "key4": "2ryJMrJCubD7ZsCQystH5PNPmXS8nXTjqpuzzJmESt5xnwqw6kHaT567yNrdWPWZ2W2N3ykfaKCoAMzKKKsLjL6c",
  "key5": "4S2VsEu3kbCCjrc2PEKceWvWcNeE1YJ2yfCJKiiEQsNd4pmLj1fw9Rp9dFxDWA94SmVz3vToF8g9Q4WA7mYqKkVM",
  "key6": "4VREaDcYRisxibUW3TBYmR1RwRmwxuP9db1DovBQySRQ2p3tApofLLzNdFH8wq9hkYYRz3cRweuR2cTZbjt1g5sn",
  "key7": "cdpzV8VdCSv1fMdD7PvLbx4S8LowpFeXQf78w6F6EnL2DyPTJ1rVNZJh1w7wCMumimBP6VKx4HE7wiUmP56tqkf",
  "key8": "4j9H3iRs9LHYmMsSDZnffU8y4ZikT8GDV21CU6noJFpRXCrAXBr36FBhVsDd9WbAzfLkeK1WRfuTCYhMB7aJ6jfp",
  "key9": "2Q8XcN52iUYGAPPHUKdn5qsR8bvXfyeJGXwHC2jFwCkT2xn8Du25uxPG8z83Wuif3zkAEUsYNicuCD7Uf5tXUmNX",
  "key10": "4WWDapc68UFciCSQTPzadxDHL6aALSULaKMDtygyRCMybiFhwdNNoCeTL8yty2pxbA7k8UwocsmHNnAwuA36RJec",
  "key11": "26s9TwqXoegxtEQ3wxRP4MakX8oEpNv6YQwmE2SiH7DVevYCGZm4LYJwZ4yjjcZtcjVzxypg1KzTCksWZRrKG7zy",
  "key12": "3VHNAmqhytWUsucjWZhiVqXP7fkXtLYrH7ijr375r1PJEeM1LxVhvwHw1J4PeW3CTxWoDJRvCtnEmGk1HxhiJGJw",
  "key13": "21FsGP2ehK2jKq1o7ep6JMWeSYesDy3z6QHeb8ifqyoWPHrZE93JkgwwNCSMdKx6hQKmic1PJv6mjcyNvokMY6C3",
  "key14": "3vDVhisjb7N8gtvZ9QjvvghY6v8yoQZCTcayyHEVTFTQeBeNfZgHqe4NhMa6WumjFcSbtvi9FDd46DUkyoJ4DXut",
  "key15": "4WfmBJSZPqCjqLtmypctHSjVT7tr43jkz8sPGB6eijxYGYDKUr6f8YsRSkrX1UQk51NNHRk1yk2WQZUkzXBp7h9J",
  "key16": "4xjvTz8F2Q1YecWdQ9P3J3ScDPoh5iKpDVtY7QHG7LXkxeT5mjCWZwyu1ze8VUmiuw39Guqjh9hiqdQyW5MpP1FC",
  "key17": "21VDRdBvT74XAWfzJDuxjftoXv38rMCfKioCE9tn8DSrAPRi2tqe6X8GjRMekS7onDTdiu9iJaWZwCSawGgmDXD7",
  "key18": "64CExBmcBRqUv2VDk3Kv8hx84hXYnnvvgxQ53hjtcnBrWdnVUrHBRRosVKW7PU4pLJCHawoXZARkkptct2j2Ch3d",
  "key19": "LcLZ35s7QZQuXMe88PvFCe5wGVfzfY1rwBesMQfPU6FmJwfnXoibu3uZoe4fgFQhKTJqKXVgcaDFHxvasnSaoxK",
  "key20": "N3defq5cJ3SKeSCKxnJzmxoNazhYnZjgdJmZEZqVw6kudFkSnBaXMJSd1F3fukCo1FpRwtThMETjr4iedxqygqA",
  "key21": "24Lie81mrG2tgZWhW6FRz8eXQatJ8HFzSbDWQNd9mcezqEaNjtt7k9WiVo4atdpnB89d8zoktWjy3wQq7cPbGmMH",
  "key22": "3186pvvxRpJHGVLuxBsYHA1EwBEpSFcnekV7vmVyZMvAemXuXFcGBxKAdeR9J9iNaL1X7i5r5nGsf93DdG2UJ949",
  "key23": "26DXphSbguTWDwiQKeNbAnUxhTGg7KtvoKA4UEkjDk5taWG7fFF1JCccZbnR5yyPzW2VrcTKnPqu5s4JJNsfm2eC",
  "key24": "4fQoS8ZJ1SKkyFFJyKSHHDMLQym5oESWHB54vVnJWrFRkA5JyYPQeFS3V4UX4yCcoDiZYfg2pjwpryHam3MntYDL",
  "key25": "33iEseokAdHU1GkxKFRbvcG95KEuKbxuJwXzdjxNZPgBTZ4g79ZgR6K7QCME3wqcKynFoFGpNqhRtzUCAMrmLYCE",
  "key26": "2QGjQqPmUwuQKA4WQcWqzFYzjJFPB5FXYcyc185EHLxWLS8BfEZ14EG22eXXyG5vUNK1HZd6vnuvvtvtboz8znkG",
  "key27": "LUHrrtVp4YPMXsovvvHM7vRjEhSeY27ACBJ95ithMmL6KXCjbf1h316zW9emcidoC4JBBcY9zEA23ejXwr78wzx",
  "key28": "4a4otHsBRZk1JjK1sQfXxYC4z3nfXtB1EmSQsvYSXDUM9KFfac6yjPG3s5uP1XnRsotAvXuYzmxp68Q7rZwkdEkv",
  "key29": "3VS5d3cgFbxHvmBfGX1jJzXeytYBccQKMpvDu3Dg4mK1jaxGyqUsPY3sk6xTuLCMt5nixKxy5Y7QACZkYoZoSSKX",
  "key30": "48V1yZqBWC8GbtF6miEB6hcVKDE6E2uHHXtcRciuB3D5etSRCk8BjwsPX3XMPo4zCq3jEdDMKcwJ23P85Gic7sZs",
  "key31": "ocCRpg5oibi6isi2LHAVQDzDFtPVs3HGb6UcWjbQ7Joyd2UJzgZD7Qu53U5gofaMjoESUxoyG4Bi2KUiEmv6fg7",
  "key32": "4jTcCjcuLQX4MVsjRvNyub41LJr7TFCAjqff6cwyTnztiuMiTJBuSozEPRrwZutbqtbGnWoNQGaEPSmXkSmHCG66",
  "key33": "4NQeYj9qsPdAXVAizQy4VdXQwobGs2ZFvpGmfqbZn3idaDLj7YRi5LXEnLJPqHdstM82ujWGJvKA1RBKVM5q4MhK",
  "key34": "26GcjtK9X6LJ2FSojmZeVQHLc251YCvnxB2vXvzEzkMW9htjmcb8jMsTF2xvMJzQdynj22UxG8pditV9GbZTXQPX",
  "key35": "3nzEiWyaXq7q6FUDt15PrjspFckGBGHNPedS5NvwYfCbi9uqcckvDW7QDUpqpbQseQA4bWGFheh1BUpmmD4yqZB5",
  "key36": "54vKcDQzZspbyCJ7mypvvphzDGS1vDaxj33HqovKWsc1thJgLRFDEs927cdxEwu5MWPNtunEDvZHFXMhHW7UgEBc",
  "key37": "4Lts6K2RSuYrPrToLnSrRrW2eUHusPs6Kp6oU2xaTRPo7ZEwwCMEG9K5zW5p87KjGuDMEe5BFUk7M19q25sVroNX",
  "key38": "3J1C9Cv4WgpELvxXm19KSCMZYtntSJcucpbxeg74JXDV1cgxZx8345MF28sUgkSkmAbrrj5gUyJFMFyCZRdkzcB6",
  "key39": "31YQMs3vZEHH661ncJiu9g2WbxaVPM7jUBKc6mzSi9BPxKwUm75KjpvUvEr7GjSGyv8Beb6oP3Trb3YHSz9jHAzs",
  "key40": "3jSWLAzg8y4UjS6JtwdpEMweJRJu6ZxKCd6BXRmhVBctq2dqmnLPjD2eFTZjPsfcn4WHyrHEGE3aazzd1kjJ4Dgx",
  "key41": "3Ei6tWbJFYGbmDeLMf6H7nFqbqW2yDB3kTnkCudD8aPfjpvqgTD9jeS8HidD47mz89FB6rDDqEqkHktfuR3PRb4E",
  "key42": "3d1JTvLJ1JQ4JVbZgBFjPah1AChfWBkqErwywFJFEiL6viBJN95wAyxJSQMFj32JQKbpS3QTSXUmWQEbEcJZ8kuS",
  "key43": "4cxDdMxgFin4s4K9TQYbJBWevTtaFrGtospUgDHDgfknQz8JbdpAX34Ze5CMdsyxZ1GUfJo8FJRjRwALuf4efSKD",
  "key44": "VxT6GYSWWZMSyVau7Cu2f79nKKcZboQgSXUsHocMwhTSXEBaFbACk9VjLAD4cS6o88ff2Tn4mHKhMCDCmzpYreW",
  "key45": "3x8g8HUDmd4AT157h2M4t6gQGFkxsxsXnvw23D6nA2Fx7h1P2ymen7TeZW6TPpCmJXafd35fBgneygBp7Uovj8ba",
  "key46": "3JiCegNbS2ZAhh46psJSGYeYQNadTXaonwtaoVsBQX83mMKJ1HSyCPgoThmhFxgDW7gBhimhXND7WCiTR2wPLQju",
  "key47": "4FPvd3nETcKqmt6ZA4FxFAwD1FW3q4YZU1Qo8yTN6F3iV1We2ifpHHFC8oxxbYREgx6ej1Vw7bA6zMHpnrPVjVvZ"
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
