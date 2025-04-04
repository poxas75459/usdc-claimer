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
    "2moEzwuwacT2EosVee8Pm51BPgiVqun1yajioQEUT4jFaBp8qEJFTrobxKhr5TxpovU1XFkA7uA9mTApbcFQyZVz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K6VWdhdFTdrSy9zZT7sbm5gUEW7bh8kUYwQRznHSmwZS8CGax7w9n7QZ3eFGxeVcSe7j5WGZxYczfMUKDKHE8gX",
  "key1": "ufj1U3i3fGVTR2brZDij2hvtRmRnzjsmipoygZ2KE99CaAUeEcC5j5dAmMKvEid6LCz6vwVoZeEbVrtWLZWHG46",
  "key2": "5gsBTeecJc7YxLSfdofpb99qTpRXQjEx6a1JQoUqhBmia75HeVT6uS9rNDYTaKAz79Gobv9U3uBSrRmHYfuHWqwG",
  "key3": "4WPScpipzrrZwBPMqguc5BJAkuA2AweHpa8jGA2PF11hdcTN7PFwT26VcV5p5Pvoad3p5tweBNqTxySa7bGVQPSB",
  "key4": "fEwWtN6Ph2w9Ei99VxYo6oFpddfT5kSvomMKM76DfAKESbJfjR3EoyqDpGnpfqe4NVfQnp5eKPWsUCkyXjSRfB2",
  "key5": "5hHFRjBJXyKXifBwAT1Lnizg1UV8RGvzHyr6QmtgKfXbP5rWQ2Bzoj4CWVKyef7h4484dG5uFYfjUrrxGpa5wF7c",
  "key6": "5Vt6XLkU5dZRUjj77cEvUHDBgcv5u1Fy1sf6PjoTSuVohDq2Pkopdbbn7XK6dCjE6Tdtm5yC8bD1KYSdqizXGGhg",
  "key7": "3mBQDXPccQ3HcA7L6CdJbojSR6P5uFxHwDHDkVvM8CPw5EbvuKRw1PY2xFo2p815f9RzLiETpX3zjBuxhD23GATC",
  "key8": "3rrzd5NRhNJmgjV8Fz66nuvN12x9PKqAxhFFtDLFWcZ5A5PhrtEeSvaKJQ2ibs5wqGduTgjCqoWyJDLzTK7Rpp6i",
  "key9": "62xxEde26PFjS6cpUpw1u5BkjLnZm6vSQBsKhrVXCRMGAyUKxUq8bvGnmARvrx4gkT9hybdPydN2mPLCcthUKF2f",
  "key10": "4uhiC1uE8M2PqGV4Lpp2RxijjqBerS8FkLQEQbiWcV4NYhXowddwSd3YkLy7x51f8qQf6m3fEuMAwQQx6z7DYV7A",
  "key11": "3k8UiRFfrJua4osGFaqg9WLYK3jqMJchCMNMFoWWKznsyNGgSTc8fZRVtnFtp9pDFVYenA55VFsnQbdHSvo1WbVo",
  "key12": "4bhuMU7M7edtb5qaBALviHC5CnkFLwK3RsbH4iK1eZZKVQMGYJPUrAfXZdecb9NZtPntpd9jM4TCrGnAtxQzkRKS",
  "key13": "3XvoKFDER69MEHZBDwGq6o5yD2G1Rn7ovrPzwowszQcTwoFdXByycAouH2yMVU3EMPcPxfDqQKKSqVLTfg5sjmc3",
  "key14": "5GmBxokGVzjq5KbD4f2FsQ2LJWAeY6yHiYvBcy34cgTcBFkN5xZMtfdZJf3QYh4nN4hwB5tG976CRQeKSgups9r2",
  "key15": "2wS3yinrbUku3qWMXEhgEsDy3eQLH5hfAvmBVbtRFcxSjMmEbbN2nF1Z5CSfhT33vgnw5ZU31dhXRnyGWo5j8hCu",
  "key16": "3zCuLCN3b5EqcUSxCa9NQa4uvnTux9uUv5JKyjPya12dS2ZrWYAiMpMfQeeRwgTUg9jHzWikkjVAZjnX5YRgXsi6",
  "key17": "4t7pVu1cKEi7dugwPGn6XLrb71Wk7wBGTozHqEPSHGbdPawddZmsZpgWvii432V6ki1Zn5kMeHMtS7kKkRPPwsN3",
  "key18": "447x9g9LYTRSCvSLMZdxwm9yVwWPHY3AWsER5McJXBoMKSHs9kV3sD2GCM6E1hfsUZyQVnDDY2XCPZ56YVnEynog",
  "key19": "aof29MEFBPi9NnePjK3sVYcerBDKcYyLYw4PyuSZPGzufXtc5d7v2ZfsG4xBCNeHPAxbhVYTLBvhbh54fjaobXr",
  "key20": "b1Q7hzuk5LbrXUQ4wpbzgtsAP9AUfabbEssJiCM8pLBuFja7Es4NGbUmC8Yrwk9oqi8eJ994kMKvCf1YJZtmszf",
  "key21": "3JKaHHiKZdMBW7KKU5aajLh1Ja42cQUxks8ZwjzFkeDCghpc8VaKPtTdfg3UNzxh4bc9zMWhoFhrKDf8h6g64CFD",
  "key22": "fKvGPPZtJieBXhs4DiowahuG9hB6b3U9rGY1RjGRp8qHXd6WN8LTJ3vXT1Vx39oY6sqRmuMYkJoedJBoDeeRNQg",
  "key23": "2aAXYEhE8paFRwKQsHSSTYCUnqUygPzNKJvQ1KgE5h8XNGZaBxBZSsm1KZpX5deHCkMNS9iXGyQj5rwjJHN9vnTv",
  "key24": "5cUqdU4kBVCJBdebuUEcUoLxNh3Mre8e64NRCb1ZQSPMSKVdYLPqFPJ9npGxp1ibRFVxGvgRhR45embawf4Upa5J",
  "key25": "5kZYKxNAxbBaitYp76isS5FKBEyN3kS4GZDvPAf1NiQtYZ5QTDqpKZtRT2eXJgfxsyK8zpSHEDiNz4e6xMdfBvpK",
  "key26": "j9Y2Y12UxJu3PErp3DLrTcKmtUXVR5mWrc5E3sT47nWVquXqbTgKv9LHaD3r2iWsT562RCPEve8n8Vy9jyk3BKt",
  "key27": "2MDw2WXdZ67vdijEFabcM1KXzzVpuYiT7noNwQWY8ArJrddAUmPDzMAJzYiETqQh3GdJssoZi1w3QpaySLrRSovL",
  "key28": "4YDCf4TB8vZT6JubuHuT86927Efhz5xAFjckkLVfRr8Bw3AkY3Unjb1gqS3McrScCUFP5JdizFT3SWSsNZU6ZMNG",
  "key29": "4uCtvKLxnk96bEtgpFmY8di7fiDn2rqhzxvYJdtSec5wF7ViGWqfn3MUBEviXZdtZNpo5pPDxUy8onYC7qmMUZL5",
  "key30": "51pbvgzG5DJ5wSdNGbrF2gmRnv18QERNbdSEx8qavCHcnTHroEtTBvm9Qmy1c91v6u4wxzaCs3WYsLrmFBshq5eA",
  "key31": "2VwZYaDyEDb7yj9H8MXQhVZcowBefZnmExTBwHr69DgRd9J9QP3XEFdMGwRzVT9D2wfAGzw1GBqrnNJkTSRqXT5B",
  "key32": "52ymTvd3q9yd9CU6KqW6ureXHwnZBMfCX73dFicgdoee1StVzF2yXe5gJNEHowfnmuJki94YACYjfT26eLAzmtNG",
  "key33": "2SDotunwezq6qoQ6teiiE696PnLdia3RNgopZeqMTwmuBMDQ3qiFyPP9gvgcpsuaihxUxGzV8J9y7VurZtGgGNVH",
  "key34": "478yoLrHcGeiLAfdS6Q17UYoycRZxVv3hZDQBkwjPh1H6C7WVNJajFdEjkhAPF3Yi24zcer8Cp53izqrCV2A1woz",
  "key35": "4yqxXaBVvmqVJKYesQTKBibhSBESV5E3sfrs1WM6X4CjyuiKxUzLMW3LRjwNtCgYcY33p87ay5DbLUS1KiNVv1Nh"
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
