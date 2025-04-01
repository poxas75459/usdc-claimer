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
    "JPugQDhKF8JnY5wsT9w1ZTKXDSqZuE1ah4gsNw62SekkbiSswufJiySb82onvsbAxFuX1swYRWJkQvD2SNtdsTV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43FBwiATffRHprWaWxTQqirvaAnvDAB1jghPWQMGUNHLU7vTYrs1eTtbg8BJTA6uERJY6qJe1FZBmZLBjS4sDqMX",
  "key1": "23BbosyzvouW3A3zs6CTiiZiLdBsnwfkYC7RUFx3xafnJ1MRQZpC252hbp8NcCBHisx4gkW7cJEcJvniCTzkLjem",
  "key2": "25MdmG1wSeoDtYEKJodWLPzwa5aPhSrJBaTLR9XLTMefpKSEysmg6SynyKh26mLs2XJsRT8VtEUZmWb778RAHyJR",
  "key3": "3EQ996JmpbMwfqkSnHCzECBxfkCkmoJ3iFeLUxHP8j1xY1tAXyTgTkPoK3dSvh8aWmbuCsBvBCi8i9HWEopaFJzC",
  "key4": "33mMCume11qRdBH7JdyTXyCDpERdPEMr7PwoKNJWYLgsbQ2JzFP8AcHLKmr1xSnyxXytQUkXDsKLYAhiaKqm4Ef",
  "key5": "3vm4PW7Xr99fQwgxfyz28sn83AsZK5sFQmCoYuAtgw9JsF2ZcRhs8P9bTpUgPNoL7FH1CZARo4A6EsZVnDSeEMAC",
  "key6": "23sdJ93kTwfWti1qiHpcRaR4ueiCna1zJw8vjG1eWqEQFaATVA3JdLixa1BjnQ9rMneLWp9MAqSM56k6zqFubpkd",
  "key7": "5qnUkCGnj6n5ZYa7qFJX58A4kbmkwWG48HnKD97d97Qz2rK6h3363qPA48NrcNJKimEK1tZyCASUeuo87EmjPyNU",
  "key8": "5cjiEokawWeWF2oFWjpuhAubEudPefWXZhT172tCJs4D1qrRAyH1rLrdJJnG45Ck6Bf6epwhJackn5hFYLWWG1bA",
  "key9": "3JRTe3q8nEegJHZJKYuEuSkuRs2rx2CC6UbgMwwWoaJz4GasUhtB3BhJFn2bJcDGw2sPR7KQHdSEq9uQp5tcrWRG",
  "key10": "4mHvYfwdyRUajN4otTNfAYbxpCuzvi6mbhaMKFPqKyABXSvrQywKTzDqD2ni7PDMxFr9fySTfrDAEJexXcnVJkn",
  "key11": "3uE7oBD58NAn8DR4pfYwZjQwy9M9mQaUg6tVhuFYTUkMZprAXMUPQJwMGrw96uFrXLoNZtXepYJyc7sekyVDUkuD",
  "key12": "4xPGVLTfMQii5irnPqgErFZFHU6ok962ae7aoJBxMDSBPacnjhrKnPnkscvtdcMoBQkZXU33c55VE1sxFsQrybCh",
  "key13": "beK3gHze4Hq31ZhykBBPTtGUQyrRRYtqLGLibrPV1NhF4WQB9wDSLmKHNqTTJHAeFERYAPEjQwGL3rMcvhAMBUM",
  "key14": "4LFJhWygsvYLhqyaH4WUucgFf51fXwNKnfU7m9Q8CV2gpHZtGvRMTdPvQaNQ2A8QLFETBgUQBaL3GzBwy6ihy2Kw",
  "key15": "639R6qBn3bmmgqDg4oZbtJT1CdLgZFgwJsYHayaFbvr2TiphCFEenxu6HSDJHasTwDAxmA8EmABDSuQA17cBM7hw",
  "key16": "2CZDpm9GjpGCx7M1cx5P18NgdmhDikkMRbogHQLkwJ2y4XoT6izKCjBPXbSdUqUHrd2K79nPo5XyBzrWnYF39tw9",
  "key17": "4mATgzwYYjR9VS2eum8eQCEuKWF7d3AEgcbqD1RzbdHw1o5ijCsa1ZWQqSLwGRHKvHHp6bWAYgxi9NL4vyRYZGMA",
  "key18": "KJUEMNg7bCdKq4xab8cb1jJ3YaQFQFWE3VMzWoFn2tQGDTtVz2vuN5GaSQcu3W5do2S22WkNnjc3MAeUQERW6xg",
  "key19": "3YhUqPiGHRg323BDBMZizFtktYpLGSjbPti8vmSe3GhLqdaiW6JU6LDytSdjzRNocD96X2D5VfEZHZo6dj87aTML",
  "key20": "4EVUX6ZCYEg6HkeL1TXbDeLGenw3heYQV4GxyCYLW6jtG31Qh4n1vgUpns4yjmwoidiJC3FgSfkbyqNR7zHsfNGT",
  "key21": "49WmSqYmCq8ULShDYubc3NjvBHs2nBL1kqg2YK6geiGy5wbFySAfUaRZzd1NfT7cxJ745WmGwEe13R6h1gikMphb",
  "key22": "dUvCctNCXuyijDECqgYUivGUdLUs8pwmnydoMRSMRCzLBSB6uPWH5Sy3BvRr1DBk4DbfsvgKQw2WTWMDnw4457t",
  "key23": "57diDuRsNXKihWCd36Uxnu1RM3KfEyBaeZyKwXniADASHSWzeoA4cmuurVFssebxTaDoq1GuxUEbJKRz61mnofYs",
  "key24": "4F8jXBKLuGHtDsK5CF6qb6uoCKyr6f7SdoSBuSC96hSrrLRgXD3TJNJ2HfqDWMFuqi6AYFLgengCFJUi5c35aFAd",
  "key25": "4etk6rveoNVqYvzsTRUSYNDa2GejGMc8GhJ6bwWvf2xdSgyJbcfMjxPnzF8Qi8bnEQ3ZQeZHSDyK3boQSSCwPjFW"
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
