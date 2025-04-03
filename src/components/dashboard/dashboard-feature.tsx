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
    "SLy8s8phWva3GXdXGhfgRPN74Yu8kcftmg45R5x957UiGqnQY9n5xrVymp6bfL3hatj9BWrGLGpMGXqwWcdhVbM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EaS6eKmHUzfHYKMoHnMKSityMhmW3rxBP7z9eNBjtDcoPFPqVHKcceCd9Z8b9XtASfiByuKPuGoona5whFkMqQj",
  "key1": "K4uYyb7bmARRkAN7fRX16rEYAc5Grke495buGp43TyQrewwN524vS5oSsNUFLyDQoeVNJo7tMvgRVkUN1mkAm7E",
  "key2": "5UD8YboRwkKA1cRuHneAWAQ5z9q7ADnzUDjMwftHh4dTuwR64FVSKgUaK6dkhEqz8i65mBeSDQpQ5GvyzVKE3csZ",
  "key3": "2kCrCC5uBniBW1ScQijgWaraJ331YnGBM6ox1U7hFHkD3JQLkncHG9cyoKSk9TZVR89WFBvTrapPqgQ5K9A9uHRv",
  "key4": "4Kp5YsEUhXCyEcFWiFvmt2qf44uEmDK328rGspAGHViVK3WmFWoCJyJ9Z3SkCJd7e6PLYJayf25fBq1si5eSiAdi",
  "key5": "41Wn794MiyngRE97qaRqH6R1HUCwXmtmE7qyazdViHkhYvjPwEvFD2ATWsUsHeVaw61wtRSdaCai8BSjtWUh1tL3",
  "key6": "55FTc6HvdGRf5P9FG91UL8HPZJA2DE5jkLjjN56sHSPJW48dqNmARbz1ERbGg4pcCsP7Surc2N1ckFiDN6Yqo8nU",
  "key7": "5kAftZQLbg4PTJ1EQMQCSED61be7wiHppuRN9uSfF266hbay5pCGCucKgaDUEBvexS7EgLHs6ZTDRRntqxaDRuNg",
  "key8": "2VC4u31Sr87fjN7QyQNgxsDHmdq3GGDHxBsBXEXBmFLE9SGmewczPxdbeVBPWkuu3GJXWVs9ey6cCWJuahBYemdX",
  "key9": "29pNDF2Zpu4RYfRZ6JPDC4ZuhsAieBP4vchTeBfMDN9Bp51VYeAFPvmmvpCWuYuM6WBAv1D4U7kik7khcpDNicWf",
  "key10": "651g1Gx7ypNpDDBjZFiuv5jsYau7idN2cPaxQype8C7dNnAzCHRA2uvmXeXiBm8YwF9Cj8ysd3V6gQL7ctbVMA3a",
  "key11": "3xk26YN7SyByUCJCdAZ8qCdXw9yWHJHA8rnLexkxby8Sr95yWooXSj1oFvougFZEKkok7QcKdvcBqb2gPbvzLn26",
  "key12": "jSJBaMSeCGAc82AFteJd6M338QWWAQUaKixkUFfYr8ns3ZAa463FXqHudnAKDiojZm6izmE7BbZiQm7yLjfpdWM",
  "key13": "31xQeCxT8RdcAmDTsSJYyw1GJXuZ5NQEQQ4piQiJhqWAgdTZf71QdvoVQXRDqQEyvg8kVsDbFjnYbSNfy7B37G89",
  "key14": "4r94emifvmfs5cwATn5PYd3wyBKbPWGnzStYHRxcjsXEeiFaSnfc5W4VgupeJJMu4qVhAe6CMVyRzNUu2vwbz2uf",
  "key15": "HNeqYPsXYhvrjt61cffRkJCngwVoJ4Gksq3KX1dLgETEwup5pgu9Vtt2TPhBpHgWaTjfDU9BeGrLQGxsvNa2kPt",
  "key16": "fQbJd1w5PwwcAcUkGnRGZD9siykpxwu3obN72St38f13pXEbwAcA6y9AJwQrTqx7M8TzjiqogM2sA4g6xdwXPTW",
  "key17": "5Bqa9bUt9shyiSsM9afHG9dYnvk8zTqPb6yZmdZMrxa84PfEuzWXSEoNajcje3h5imSXjdtuFcPnxSC6CuNg5cBR",
  "key18": "3dWfQrUUyu7xp4FEmMYEgTVhC5CLqGm7cFaz6DpaNKGvM87HLW25btqacCeaXFFu37M87vPNXbpK4XT1hxT1CKso",
  "key19": "3UnbeQCpABf2ecyp6reVtrD8PNVM2ot4EFFNJLK62UiPe61UPu1noqeiEAKjhijMVDqGc7yTfmTLJLpjhWrQMRJr",
  "key20": "8bS9drmLKZrikyS1djGgc4TxVEFTppqxwZ6fumG2FzbxJH9i2k55xDimVLwXGd1fpQsCugxmLH25yoPzEiJVfrj",
  "key21": "3EuvZrho8VVqWy6FApYsMuYGEreVKmXeF4rcymM2QACJHRckAGS6TRjAa4uappsRRX6p5cMNZVjzWyf44jBZ3bZ2",
  "key22": "5eBGW7JVjiAgM4RqYeY1qVJqVwykQj8cSmfpvp2XtKsjraLes5WQsN5rqcXMYVFkH5CLJof6L5MJv4sThMQ5YAyT",
  "key23": "38S2VfQEqQbEoGmswyCQaB5rpQctbaA9SuGqD3H1yjRRtENnJMM9MzaX1wL2ZwCDD1Rgw46qUvZiLTMWZHRKte76",
  "key24": "4hiuvFvMkc98xCBj2fhqWpHkE4CAhLAtjccSRfY394dZNNYsr13Kb8y3T9UvSgUBcHNRRBZCN2BQHpsdN6N4mpWF",
  "key25": "4p2KrgBAtjLcSdtV96MmwbF6pErHuZ99xE81W2n27oWLSp7TCa3QRh7MLkwBwkB4MMRDDkcEfSdB1Tz5RDAzwi5i",
  "key26": "ZEduecr425foP4GFVURDeJdP7NnH33xvMtp3Jm4ogkqYkZFayU2wAT9DvP8rn2iJgZh4TDqYdthZcafvPU2xTop",
  "key27": "221NnDnF6b6Rh1vGsVCU8nDNwoSnmxsf3wXxHFR9atzng8pCywp4uFzarqhg3PEJiNmWoc7bwSjh8XPZr1GYJrR5",
  "key28": "3RiYYkTMxbgd5A1J8cmxcMeDCg2jiS4c4WTsfbHz8ShC6mh4c4kjy4mCjRzGyevQzRrn25xJyE8f77BP9JYA1q9h"
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
