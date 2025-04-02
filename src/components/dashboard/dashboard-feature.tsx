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
    "2ErBkjAwfHefxs9eKLDibR7FQ9q6t1to6ufz3sb5hdeG8hj78Y2bFgZPUUzAAWD4n233oXyEhuNaLPDUqMUFb6sk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RJFGw1DoTagF6hFKQESEkBjnRQ7v6EUhEN3ymvqrtPrnz4dNE1TzwGvo6MveVzQY9MRdxGCJFfbgsJC1dXCHw5C",
  "key1": "2A1GNRoNF2GX8KiP2YgW6SswqL1HrMBxDB5YjECT5kWfaFWJhTWuZgQbQQydrApg6CMDEzWx9A55ieKJbQZ89scS",
  "key2": "4182JfDSQsHUTcusuhMZMnY97G5Y7PHjy6pZusZceQWTQP1kDGbMbfDrXeZLebBBhKUeQExEMRavWQP6j8TGLfn3",
  "key3": "4Wj1n1hPuce1y6J74NW6gvKRguXEG9JzG6h1j3WL5NAcUYbAehWy8PkfJzT1xictkbgtFSDq4mtuHn7BNtct8wCs",
  "key4": "3T6YwFZxcAKLTb7P46Y1RNgTTfxvX52b3MnbksJPiUURaTFBDcDyntpnuJrf6ChLz3tjPeG3x829NaNSbg2bGkDF",
  "key5": "uQHQDJsYLwnbugibiU71hK5shHeaGRo17YW8BZQr25LNRMcjzBgQiSmBqgFS2mW3DRmxP66TNnKxLvLFMUDjpf1",
  "key6": "4HkwWUYgtobF61iq9aZSCVM27KvVX1UVV1asEsb3mnWy6uCvu8dP8DY7e1qSeX1oqSbjByP24bifW4TuMLHojSZT",
  "key7": "25nvCfb98oeGY5suDaSev6i8bzGZYdugtZBVe4MkVDghNUmEYk7P5kpG9y3eoB9McUVq1ZionZQJZQKnyXM1XfPp",
  "key8": "2fhK4SjdEVG3XD5zpDM8kAJMdo6WQtvzExLAQs2VBDEVvTh9TSz2SB4gAEjrS99REL9DsJhwyWHwVF6vqJ4T4JNJ",
  "key9": "5QyPtBBrdvA4nxEKTK8UTWtHLpdqWPuAhBL3fP7NWePrBBTCUgT4gtVsjq4dhQgDRg9P7DLbKFFfBQtRgns43zhN",
  "key10": "4fsoGKsCgjWP7rerjD6dxi6CtDw63Y5pGgLn8Cg2CjiF6oEqAyMnP259xyacNmd13wqUwW8GpM8DNpzEtwJUUjKh",
  "key11": "qxs2JuFFbziieh3g9agcnkG1nMEEwyLAMpQXH9fE6e5woantso53AKdhqX8YSYMQq4MvFeapKxgp42ymVmeGWif",
  "key12": "4RCxcPEmoSrKnTwThE6VVcDPkg3WdwQHCPL5cZZjjyhPw72PnRFT7432bGi7uWwfp5bkUgRxjkzBz1FQvYPc5QnJ",
  "key13": "3eCH8xgV8iBErcBFZTVFndu3Ta4tKitNBdDa32k6q19VQPrhUcNRQVwcsskw3qbJtWMnjE25hr61PM7bHRw4EN8E",
  "key14": "5ep8WwTVPJ3sXJgDNm29xVBuCHtvLWktUCbSp3nKLXiZMt6V8G7Zq73me2npYhNjXeGYSB5z4bg1pcGGSCnbok4T",
  "key15": "2ULkNLyRW6skhcwtrxHut56gCphH9yAUoMQKM4bs1favPSxC7ZxZyTudfJCDnUzHPZJzGABrWfVQxFmqzBj6MgV5",
  "key16": "2iAKk74gcdeVivvHDYzf9EVP72jCUupxmPkU4H5KgP17YekEj1A5FrtrCLmUupHMMRqtMqGkg7sURpxuFHtL2TRa",
  "key17": "UeDwWXSf5QKps6JjswyghPhUoXW7MevjWsPRjAKWWCDzwXJXrxtzCPzkxstc2a1nZFADD8iRXRpSgyyNViWTLzo",
  "key18": "2QrbkYtojVKNfWV9X3DrJJwx2ptTw1qzsRa4pgnCbEKMaVgzARVAw4bJHjxknaoM4SZ2MP96K8PHksi83AizG8bM",
  "key19": "S8VJarpgjLjisuiSAwqcVMZPQbbyMXomAKW77Fv3At9YJiJW4TaD2J7RRkLjwEyhAPnPXt6VkcpsuXsLbBGYvvh",
  "key20": "5QgbbbM8f7XxJdkuGmufVWwS56ZZXoiYGA2yVLcCuTuGXCh31mZcjHHudh29X7N2LA2RFAHHUQR2wEDghoVxHS6R",
  "key21": "2xMnUwG1fdUT9HCyUug9wrCWHYSz9it13pMLwBu5NcMuzSb7GdSejKWWs78Yttmzx5gJHNSFotemNv5Dp1cLSN9U",
  "key22": "3rpX2XxHz2gjdhmWXMPrpEbzX2CrmgwzwRsAxgmYd12BSps5znDXFhhyZsgpkgKw2rngwPqk5qsFKz7RmpE6MPoH",
  "key23": "37DKW7JJuqAcHYDAusRD7ct4FxueXJTX8sJwPZxc7SoYZjujVYss4ypNud3kBC3dXz8YPyozVzHabzvTs8mCNBVr",
  "key24": "3wLGcS5v24nUiDpuDWKzYaFDYSFC7H3hacuJgtkr7Cf8awrLQMaCyHXRnsH7rcaQKhGh1jNGhdZdD8qotLtUhXDN",
  "key25": "2tVn8jdT9CU3dnXPEZixGgBdsY1GdqPAkgRvgVLEyPtsECN8Rsg4fev6sDps1F5baExWjPhgRG2LgpgztNwoqGFy",
  "key26": "64Lkfxz8ASpYx8gGhfopJD2ZQHqk126FVL4nU5UMS6NLNNtfphRSLkmjDQaains61hsgEj3WFQznQQbQPEVGZqgj",
  "key27": "3kHq6ZR2VnJshveRVwni3i6JrhxrErvZncoGSg9DXXeWUB8Gh9vc3wAoWA7sSqC1PfK6rWQWFAitTXN6R2Pe4ceU"
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
