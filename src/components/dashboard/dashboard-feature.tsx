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
    "3agc63PUC6XecLMYVx8yna8VUEiZ1EayDVQeNNoQ7nKn7oPWP2ef9ppexybic4btvK24drpF4whNfArdCzCMXAMD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jxaLXSjGMXYtZHnekypWdoYedRsWy2K4sbzry2uWU1PrMMT4XJ17JEkvawSD89BgysKZnE5DKjau8bE3Tu15iap",
  "key1": "4qmsTW53GTCZFX7DHLNnBSCffpkAj7d9pQFEJDUkXeTNRRL73qVsULggQzw1z1RPpkNcRGKGoVu9FpNbfhJ7p19o",
  "key2": "QCpBrVtpBfK9JiFVKkGSdPbsN4JvLSDVdSxUqnw2TqWR92FLDJYeUtYLTx6CNyass7Js5iX7LnZbPnuJPZrvGWN",
  "key3": "5gNAqzKCSx1DddcMSu55UUTMh7Ysi8E9AFKH5muE9TuC3QdnvVmGfu5m9MbHuG1j3MGvKQPhVtzqfKPpfZu8uhWD",
  "key4": "3N8FP4PtmVRF5Y1bADsm2hzX6yzNGC5tjRtMQ6ptHRHr9CFL29JaY5bCTAp5DnVmtDhjrmgGMxv32tdcWBsv3rzV",
  "key5": "V2VzBDcvfX35EtUuaDbJzL27Mtr2T5Q18B3KHuLZoNykcqoHQyiUCej4d1rUszTVSEGpWZg9M471obsYgQiamJx",
  "key6": "2hpY47rvPqkPRwwWonacs4BUoGN52RLdsePYWExscVEQXwukvRjTEgABzaw5osQzKJgsCF9r37Ps6BmSzJngcRXH",
  "key7": "3rmxuGb9Xi61dxRUDkejo5BRNDpHiqXzzbL4phjUEnpZz9evvRXXrTtiFL1gew1s2ivC8RTRxaxPNS5mjRx27iQd",
  "key8": "5Jfd6sxbuRCq9ju79abr16SPDS4MgTzpmt8M8Wm4Zuisb83QAkMA3UV7z1B3wAAghPrfeZhugR2BAcNRn3dK4Ui1",
  "key9": "45njpF4huoRR9kAoo5tbN55ETzpy57vpW7rwiys3qXLxqXUNpp8VUdHzMTratw98HJRHnAXbA3vbcd851K2cSbZc",
  "key10": "as3FnkdYyLC65SfJ6qwMngqLwLkcR7MMa6J2mA7zkCj1L6gwd5znubCXoZVTUXtKkvt1HwoNfvVMEwSEVmGtjTS",
  "key11": "3fmUcMbofC3uQPjt9LY3n4gPgCi1VWQK5wSNG22AYVHpLMmJNaDiBjEh6a2cgQQ6UVVPzxLhR5xvHmQNCRwkQtBP",
  "key12": "jDoEx8KFMCbJKWcAQSE684RaZFjhmMsqrJoJpWDwsL3TrF5ZmJcgVdv9yq8Y3JhShcmX1Gj6oujicQ7RSunK3EJ",
  "key13": "5f1m2uwtaRqgWk5yZxjDULuhLpsmgQqpoYyuGa1uTVM5j7kBYVspiNyGsLJZBdn3egwcJLHR1czWx8qj7byj4pTh",
  "key14": "2cBjVXXrhPXhroJBxV4AxR2oq981EXAgW6f2Fo8GVCiuWpaNZJzZH4wujBwicGbdRs8KJJp8QPUqPQm9vTXsqr54",
  "key15": "5jutANeofwM1CtagU2W8yngLVuumHNP4oWEjaCR3bhcjXUeiSCVJCnj6jbXM9wPYBHraYYofpEFowo5L55W3VNdd",
  "key16": "39jE6DtTaZRtJzThJDx6ZmgvH5c1Us9pVWfvnUmm7M2YLNGwS7o4q9vFTMQx8uRxMt49qN3WXArfkvpf2XuTpgJU",
  "key17": "47kbFnTcrCf5aEWekaQzBrR5iSyj86BYT1paco4VQBDgjyGBf1jwtgSs2dt1qaE3hq94MZEKMAF5YSziK6vpAPd6",
  "key18": "36ZmNZsVLfzg5cfcY7W3z1HBkBKQT5GfA5rhpdbBEzMsL4JJVwMeCYE6JQWtSmUDzE3ctgPknJDeSE3GKnMUvuCB",
  "key19": "3Bm39jfh2xGcJ47oehFywcDpS1ptbVmAxM3xPE7mwuikTPtZ88dhnnRHKcCogtKnZ6TWaqEAk2v2wCunoeK4V8Wr",
  "key20": "iG2VJ3pwK1YuhRA84JKQwky91oHb9XfsEcAktWx7naD69U2X3QjaegUJGrQQrtNrxFCZ6m3h1pnLotriMLgvdzZ",
  "key21": "5wDLcRfDgBg9KJJAHaJvBWyRyxe7AWTkhnYEn8bfZJhg5PZPyxcwxm827TdvXifc4vdFtp8PA6XFmSF4njPLCRWh",
  "key22": "4eSWxFVGR6zeQR8WHDcyWF9GvuKeF1ydnJfaF9duG5HZJvRMMn29z2X3dFEUqHhbkeHgzEYFT3DemA27enAt21Zi",
  "key23": "EoqnhkGs9Kbv1X7BLdJ7dngB2GAEDmAtfFBN2EX2rFGuUSxY6Z5ERQtdHLLCyrVSdkVBFnErKjcJEvMAN7uHX7m",
  "key24": "4vpGcAxxFDCjL7dADRAWv9RFTSXd9Avy9UVaNmpaUYWmFC9fR2yu2W5s92rYta2y98g5xazSijJQhVP7fmMYP4s3",
  "key25": "DGw8ys7ZNLnu5LasuHLeTJFkSR7R6C6vVuCb7yyaAsKzb5Eu3s5kRrJdaCUzk3WwJyJ56YVPpKqin65hkg1LvUh",
  "key26": "62FDSZLNUxWd1rFmJHiH3VqP4sGvSaMgwE8HxigoSLbT4FevjHJ4vyszcc6BKAz7syfNyH5EbnzjAFejYpEiNM2e",
  "key27": "3AxSrrsZTFA2N1hv46kjajgvWUmoeAEEFZtEcNc1PDye92aGZhsBKNDxG3aAzQanKRGqqs7d7KWKNpVyTs5U1AZP",
  "key28": "5AndcmuiR6zYasecE8yej9GKRciAerQcG8hTdkKSLnAWkLph3HTn7Su5kNWch3o46x1XJhMSbtf9tmjxK7wCi1Rm"
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
