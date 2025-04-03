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
    "5VB5qHpgHwX6B3sT2oRZgBb9BPJcAjTPCp3xz5RjvvuX4dddYQigN4kNL78o1tdE9j7tcE7FWdTckmmQehgB4Rqb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Nkixg8VFqMau7Ep9XGQSUjRbpaLfaB7W3wqpCmu7Zrsef3ZxCRSeLkkVqGr8wBcf4z2yHP8meZCYCCSfHL2mf2y",
  "key1": "3BDEzvgTBpgdR4AU6KGmNpZz6uxrtbywbWN4y64gw12p5EtUD9fdffWsv6ubiwNwDQ26j1BTXDsEYR6hP26JrR1s",
  "key2": "4q37DdaqcqTR8fX7MW1tviG2FgKSgPWzSEhQkwGFvvmtrfyAAQr7fMUco8VdASEg8ZPhXXd6SwPdwoyPp8q14Jg2",
  "key3": "2m3EnDXCeCPFLbwvS1TkdwyZaSYqimyM8tGpLBxuJKiPaEwCtWNtZFvLaX4nyuaSNFSf8KCnk77pj7bSN5aKNKY",
  "key4": "2y8E1FoB4opRwBAtDJFowGDaxHM2GMptaBfPABWX6ke8suygspSypQPZh8TQtjfCArDkZgTisZCiTmugkJjjm9Da",
  "key5": "XEj5qptCJbriB61eZJRf9CJiuDZKQP4Ypge6BwWSqryhgPdQYsuGAYRyM2aHBet4qHuQdeu7rEBVi8uTZgz6AxM",
  "key6": "5dd4XZjdP2F7ZHzi8ZRhVQFvPC6AR6qCwYyNevBTwvWGnipWwe6ESM7JpnzacDHxUKmGesuocrmMCTsbuYDH5BB7",
  "key7": "23MfT86NPko2vmugwwkisP5S9rNvvJk4Rgur2XKrktZwhiwCejLKAxVSgoDnfQvriizuWavfbowtUAExHEmZ1gpA",
  "key8": "5qwH8fvXu6mnVTW2mj5xqj7z4y2424n2bbd5JZWnQquFQmqwAcyEmD6NsyKvLMeVsdThpwbsxe7z8yPhkDjAPrMe",
  "key9": "4L55P1GYJSeXWyUbr3AYQ7FeQE4LWJFsob8WzueqrgUQULadhSiqJDoBc4jW5zqa9862dXqyRLoNAxs5PqjuymYo",
  "key10": "3EieKJRZQonbGaNF5AVXxsrmDwuw4ZZBErKL8AobkuhYJaf1fGVRvfqbcEe2Ysw3MhKDiUNNszAgTs6T6VQUQjv9",
  "key11": "voYu2H1W2eu4hRgP2qDPCpGMSMAoQ7nVEs2vHAeQZVDP5ziHkMvoKX7dGYV9gX6Hqqoqri2H3xM32tTbM8aPSnt",
  "key12": "2ctFZRvL6sLmq9gwWnWWjRJAZg1LY19PeYprk3y2k1JVMFb98NXgCyat6eyEcGaf5gsEWn5258G6nQoM4dgkZu1i",
  "key13": "5tR3fWAvRDfWZukKtNmgJhA3CMrqB731gCuZ1KbwNSudZCt9xwNKDaEvQgEvJtsuZcXmAsYcuqkasSpqYJwWq46i",
  "key14": "557uCCsRM9zSH4rcXYg57uMyTEo5MTCJp47VPMwdLV7A5Qs8cjT2DW9iDQXB67Az8wXTLQdnVdKr9fNL3XLJhAnX",
  "key15": "5B69Tb2Fa8a3eA6mvBeVMVWQit5NzPC5bK9mTj9ddHwK2G33VaRDhJhsfwmKw6ExibdQGQhvqujymvUyMrwtfzfp",
  "key16": "5B6jE4zm4yFs3vMiMeG85dq4n7W4ZNfWKbEoSuqWR72CCgspE1jxdi5FwXVFfgtRxbSLz8j4WYEduZQZ8QGuvKkn",
  "key17": "5ZhhYtpANuzo4L22VTLyCjpG1h7UDN5fiiKgSwp7NBHG8txg3atFw6NnGMyUQWstTBeCPyEPvEx2sXNSfLSmQhh8",
  "key18": "2c77wyhcTLSrPu1ZKyb1ZfsH8tWqvSZSSZ6r6DBpgBzh1WeYmx7Ht6ZS7v1CHYXR4Zpp89KqiPRXbCk7PT9toNkK",
  "key19": "skb3u5Ficn5FWZtRRHUXoYLWQa9zxrJwGH4SKN7av5kByvktWyJvEE1qDdRUsXC5BaySbLRJqrjVUGV7Q62929T",
  "key20": "5eoZPTFpe9bbtuxBfmJLNGfvDu4t5a6AVz3fcVNNKNiSnRMi4DTMdzwaAHvWbZ8BTuG6dHB8v5WoRY8Q1YPB8TgJ",
  "key21": "5QhiwNcvUjw6fATEWHA7AuHF2dLNme5hxUYLdqzws12Xnf8wS8nvjFigvSAQXgr1mbBsaYmEEqNsafmgDQbc2RYw",
  "key22": "24BvbR8hbK2JScBF51ro6J1WeQx6pG1jCPEBoPnwN7Jtv9fKCqSYLT2STEMmAJTPwp2PT9HKxvxSbJXsy51mhQMb",
  "key23": "NoFNbWk2MK2Zie9j456rx6N4JTJZek8uiXm5L6EF6a8x2FQh4UEiMdcpFHKugmJm9fFwUQgyeH3ccoKuz7jBy8p",
  "key24": "4mygPdAPfrKAquf73hryF3H4iMpeJTLip5R5SqezXrJyLWkPMXsBDXUTVcnm4dGXGZnyWf7drdg3CJWiKuT5XhPy",
  "key25": "5Q7HHMyJz53CNj34bCTKDcZ9SFbrh6e6amwxsqytoRGFLoVdKfpGyRUfMxbdsU2PEeKdRmSCwdBoGygecUBJmmp8",
  "key26": "5SRzPrF25d9MhBWjmcfccry6yk7PuiSbubxxj43ccxxBRPvUfbmpUoHfKENgjM2AyFVsZSrM8Miuw4NHHUty8wK6"
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
