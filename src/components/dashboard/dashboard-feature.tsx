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
    "3q95CMghwVp8gpvVZN5UrPHhwbvebrE7Rxr3bz8dnCJR7WqqUqTrFyWk3Jz6HgDf9oFtB7c6jsPFZM2rWQVC1csB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "geEYZwRBacEGXQJYGT4Rkd4yBZMm7fdRJGV6nW464HWkvJcgX7ZU53TasZoqPVWLQuSPXeTBhpY2gLAyfFnyJUX",
  "key1": "5ZpcgXL9RcVmYLdRqeN4BtH5BEThwnneyvxSFu1HyWdBzMxFvv7pL6TERauGUktg5KS4j1dAxWfNSZE34pEd6dYz",
  "key2": "3RnAd1U46HYNo1WLUhMckDVXBFwauxK4zd2V4TGiqPhYTiYCpYCF8PJyaFMdxA9cWZuYkYqmPeQZebrL1gm4QWa7",
  "key3": "2xuf49TjQpWNg1auaw5Q7gkWKTtmtSJv8fQYA4NWGaFvsJmCtK9BeAuviVwWqzFHEPJeTVPkerpxKmv6jToidUw5",
  "key4": "4bjt1SEaCd98QUMZvxjL7b7zCxPThvvpC6HkUqCcbpTDPwyda9VsTpfmmcDbTHSHrUYzg5D4DwNWvKpUivEQ5pMh",
  "key5": "2faJgWMVB557BpRTJcPmh2hZHPBcyMdoFPKULTjEdg53syLCJdWxzWuzGFyAsHqGFX8VntkMCF7BY3wYXDadXy2",
  "key6": "3tgerctG14f9JPKmCucbrdrV4DAidZNigRSGMK4euwaJZur9mS4wpptmdXzvz82CL7FuxkWJ3t9cZ2JXHP5GYJ7h",
  "key7": "4ARAaW2Xjyg7kXHpY4J7gjzdtDEuvEqifMps6PQy3rcgSKxHPLca7siE3bTptBQJrKTtqjnNeY5QEKPqRdmro7NG",
  "key8": "s9rtVge9sMATAWEU7Q39RGABDvBeQr3mH9sKFxQUprNeLmYiBzcJPKtuUqwvVqt7PSCsCt5MAEqs3tZhwL8PUy4",
  "key9": "QVy9mNFAmXeEqxjYpN71orx9paUaMESwq6EVWbgftHC1HT1Z2LN1e8mURAQTb2x9xxAnkUNcvbhz8kmtfQFE4Q1",
  "key10": "4W7yWG8n7KuPyUJNkbPu45mX1qcezpGMuC5Uuf6yWdLai9kgK1RFF1CTPP6FfAJR21eF1NbamXgpQhzj73dYtNg4",
  "key11": "3QpaQv5RpwW2vVtvKUdubxxRBDkmD3VpeDxwEAdtMEEzZk5AwTu9vJpARRbt2fBmerVVgyg9XZZhjXEWAQ1gpNSN",
  "key12": "5NFePNTXzYM8qZP2d4J185SG11wV1JNPv5sZXM98X9cCQAArq2k9bsbkvgYUcFMaK2kcMQQk34B45hhxY1EJfxdb",
  "key13": "2mPSNfupKdSo97Mnh7HK2iCr895tguD6Rab51B1aSUintKKdGpU86hJ3vovPfcR5FQuih8hYTvdn2KZuiJUvVBZ4",
  "key14": "4gj4GBXjzzoW1fSsw5ANnXGNEM8s3bszAUCm3B4GVg9KS9n4X2rwjjYXbiT6YUuGEieEKP7JXXfb8umdWcGg4W6F",
  "key15": "dp5QM6XCMbNtvVUjm72N8z1THPCwdwqTurzGsKvadXEucpGUKTfroCML9j2FdErUr81RCsShCzTqFqk8T2zMpFR",
  "key16": "26kNz8UgiqvVeGnfwVsNcr2KGiVDLdaXPm3S6x9ECMuf5tqMQvoVWhbZnYkbQZurFGednex1RHkzSiNbWropPuqS",
  "key17": "3iten64z7VwU4PwP4p7BdioZphRn2tEnQQzYvwbRRKPfEe4KF6xjYD7EgyPDQYsmbAXdwUGgdtFgtPtDzJ7Ea6ng",
  "key18": "eHbEJqvSkwvFrJXbieoWXpqBdxbxCDB3spmxpChfoJyg7mHxFoRDjfwPsjX3A6f39f5skPjZpfZYmDU3Neh1HeR",
  "key19": "4DPJ7pxC6vkxov8RALFqbKuZXtUjTd5NwMkTnzQF9MRQkegRj3oENpArKY9jMdu4cHeBtLvk4aNXD81ikXaZM2bk",
  "key20": "49eqBcmPMSJMbPcGAWvwEmBKexnGe3bPfpyfsjPk9VpJ5pQAv5ggXXxjEhY6Mr2d1m8wnBYHNdXepN58pBVN1Exp",
  "key21": "4rUooDVCUqaZDTSW54QqhpBa9FdqbrvpNy52Ev8mQJnBQ4YtqrvNF1eE5u873y9Y3T9txCy23it2rWda8oywxreA",
  "key22": "2sXr429MAMb2ZbtYR5uu9eUDWeozPb3WRz7u9FuZB1Q2J7H1ArNcyHYu32z4BjJ5gte69fLeZCZSs6sWCefjfbEf",
  "key23": "5ENh1gKkcinT9XS38D3XLurQyBTXGMmeJjhmSaPAtwvKSkPjtmDgKc8tDfbSsFCxnrhhwnCMCrq3Rd1ZU1TFuuU",
  "key24": "dLW4PCh9UCNdJVgrfFPrhZWowQJbxpgPovExTDP1cyrBMMfJyALx18SNqdrJHWeoZ68renxAqV6rjQPJU9mwbTL",
  "key25": "4jfbh9jwK5bh7pHj4mCSzTifJMYHYnnxyS44qpyKTu1CM2Pm38T5SQyLS8m74v2kWQPbicMAny9EkB2cK6Cgh7wA",
  "key26": "SmcRYhivifEiDxd9tL5HMt5RNVsk9rMsMzgtwv6WEbBhKaTCRpPLJiJ4xpbpGaPkhLPdkDKdtVymNSKHPf8QHkZ",
  "key27": "swah6cFW9reoefjLmXodMB5x5du5nYoK4FfqvPauwvt8MCv9uXqiGs2f6UgjCqn9eJ8RcHtS6UpN2zx1kiifdmV",
  "key28": "GZoKSybnVQroZTEs3s6ggPmoBbtF9SSuCyBKkYsnhidffR2GgQQwVZT18kq2sSPCexxuZJmnia1oMzWW2kMHEca",
  "key29": "3qfzdv7iet377JMRYSL73oiV7qtV1UWuohdHVZ3phm4JGaa5AM4xRzUQNfFeQKULpD7GaYyb3yD7LsmMzfFK1pxt",
  "key30": "63VSFyRPG3gGPTGa5XmvJcf4WnYeo1dWSq7wCCk1xUvMac5DFZsBbSdaHxcQVasBATyxi3s7WiMSc3yTf7V4e2BK",
  "key31": "5rHJbskaFA7LAgN6d75aCpry3Pe64zMe6k6hBqVd48rSP66HDQenCcyZvSumtGvhD4GwNFSfnUAz5FG8wBS4e9At",
  "key32": "43rMfGADp1h28AjS2z3jXyEbJGTvS27tSmr63txHdwU3bz5nmqZsMhDvmQXiKmnjCfkAcGPGdeME6SeUnAmM3XW3",
  "key33": "2vkewuB8Y4iVenZ3HjcobsYeowFdcpTLGa6h7Gny1dmcmL9jF7xPWDLKqTtFsVbx1vfs5T88xBK7FQJLkHPkx5iQ",
  "key34": "523Mszg1h8VWtHc57dCfwW17eth6PaXTM4u6a7Rpumev6wAd1pwhvUaCHuTSoPjpDx6BZdG6pckXX9XXzHs43S22",
  "key35": "2BnyNBMi9u86czLco8CLo3NReMrF7ZuwPktXNUq5rqijyfAUn1QihrDqNqcccsRCSBwRjuC6iCQTQVzgUrxjajQq",
  "key36": "4JbYdK6qp9A6mGpYd8nd9KBmhZs7t4NZtkuoqWABEBq7MT1uoPCK3hJhD2NxPzoU9rhfHcXg5rhQH1mC1iwFfZ3R",
  "key37": "qzieaab7JHJAEfEa3fzNNkLdeGhK1z4y9WXmU4pbv6AHxhX8wjmYkxjZMzHDHdez733WWcm9fchVpTp29tpT6WT",
  "key38": "3vKeydT5JMWZHGN35pkCKz1LyhoDQjA5sRJe9XdoFtC48aqENHrMPHJCWsi1DyFkJT6GJnDBP7t9mSWZoVQtxD8o",
  "key39": "2ktLRjTeTUFNvaFuRHQspZS1Ksa91QLvpov71Dw8mV3CtFvJSAkS8srTxE5HsRAXKSrLnjiDtqg12qGbR7wyEtSL",
  "key40": "2rrrGQAAAYs8cuaxyMMrVfYeWh8YrEqe6TuGgAuRxL3wh7wiHwdR1KHjMbCRZrv6UR9RUukEbhTc1oY4xvndXV8X",
  "key41": "xPznjp5vgB5U5XY4JMfBoDTwJK1uYgcGHevyPARexxqcoDCAEdk4KxccNk2xk3yx6QZ54rYKyX41a4rVzmNyLfp",
  "key42": "3oMiNCBeNrkcAxDas5v6jN5sfo2PrMpCTrBzu9ach95mipQGjokTvjezSGETRsexj4yBZHfSFdGBZ4MFGMsW8MJG",
  "key43": "38gVNrZQPHjXjgUJKrDFnPSB1R3x49AQgwkGm4jP9DJf8quamk1AtyCKZcXkekhH59vhtphK3hnJN5rTRvdhAAs8",
  "key44": "S3h1MRoijDdTQeG53YGMPndcHu4cTHwZbdS3gMKRcZF14uRTnDVx8zP1YBtw3E26VV3BNxjZeUeq9Q4ThbUrKpX"
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
