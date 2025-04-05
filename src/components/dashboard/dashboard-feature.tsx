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
    "25rjXqUAPvShSWnHcnHJW3o3EnvZjg7Aj2a3XFcKFjUid6MAedzT1JSPCvW9TjKKUC8L8ooqgSTBWUgTmqVppKRJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LLXFRcSp6DUp4NjRTPf293XGAns5y5K3ZjJ1EdXDF6PfYiExSX8EBqDA4M1VPp4iHsvNUx8tFwxiJt234gWJhA4",
  "key1": "v6XSEDacBAUSooYHsAMACHnr2QjjhtLFcTZtgb7WSMTTtMZuBJ4LG5WhtTHaqoSJRzPKSYjX2poAydhknfxf9AL",
  "key2": "5mbu5BaLWE1PGKrrfwnF716p2PLo8LpaUjCGqhDe6wvZSFDSDF3hZo39cFP5dQ4qbf9sC8WiakbXu2eJF7aQTrz8",
  "key3": "4YYNfDUZfk7a12gYdGsQUNWdWR93JV4Uz5CFCUiPoiUccTMQXnJ5wHPmERzfBWygouE5GQSaytj5GfiAvhGQSe6J",
  "key4": "4DShs4gv1BTmNnR2Mt6hY3KxM9h5kAogwh8zep8w4mGWuNQjF5GsGx1hggHbgYceMtLVsbHshAZyzKWWEtxZMxzN",
  "key5": "5CncioxMin5NhVS4fpmuxSYsNhxV6Qp4JFPLAL68QHpQrZjYRnLqYeu6mSQ3MJjavLnHBZJAbWy1aDxnsTZQTV8y",
  "key6": "4RbwSXGVucN2XAEy3u6R8qW6agPi8h6g6XCcvJJjabaNUhrwuVPibiPwtUJiRXGLqnmkfFnZq7SSHb4mXvoAduHo",
  "key7": "ZyJaftsv7xfPS6QuxAzyBHJUWPiffDuQtMpJaJqurAubrJfh9WggyH1wzinHMqxwL2HDR32UgRS8YaK6TBWUCR7",
  "key8": "3nBmCnhP5QesdUJ43tpP1LyMk8PXsYFXJCzoqJZyWi44ZMBAj64LqvacdAaDfo24JFodEBvQ9Hx3ftocAaij1F1s",
  "key9": "5npEio6YLXDxDnzxUDfFtugPYZD8JR9LaGbFj64MhmrjQ7zymycZSYCJo85fCVmz3ciAT1zrSx75TFcMWJKoVaSE",
  "key10": "2AnuxNCVio638jbVReYYWrBuNoWEeYZ1oAabjt5CesGHNvCvruJkogPYvuyAQ6jiyuhZo6JHupTo5p2NMRJmNK8g",
  "key11": "3eJm1cAr7izRBCE7ETsCu7wMBa8MDxYYpFq3G7B1ZkSGVYffkWMLP1gTtDbDDwdigMbPet85bgEjSgnBHq5mvKsK",
  "key12": "3HrBp7rsJAFEjT1re5geHd2ss76JhoF58w1rQFBHTV7MvYL4Gf9p7hJP3eAZYPGAkFs3hB7rRLbvHynsBvobEsKP",
  "key13": "4o2X7j6MzYFDo5sjxFSzWoz1oMbdYGo4P2ksWQsmpgEer5ZXxneGpTxo1nLeqFfSe3EpbQCC5Jxw99G1shkuXpuu",
  "key14": "5NXg1iSS7qTrmUxPUB4DFNW8HRpcK3ZJk2A6hNF8VUS887KbfCqnN8UtubteSPawH1e8MoBQt15BPm1c58GumnJ4",
  "key15": "kmGNDxUdQ9h22w6kF68SuEqKWhFnDqYW6TJwdDZ3b66oXdtaeu2zML5VLZRJwp3wRkmSPwnZkwTr1L7dopqGGBP",
  "key16": "4gryS4owCnvvmtv5Hfa1N7CZC56w8YBoGZE6yg5LzcuB33gn6gYWYBjamMF9NCkrvFpuusspjYS8BQBeqAq5Gcko",
  "key17": "hcQqEdbUwjyiov1dGy2QMjKy6cdHtZtgYtqnwf9MWgYTFNm5UTN14mxoMQNShZPPdfKj7U2KkGiF5yNLbviLtvy",
  "key18": "2MwWn7SSZXVguu4WZ6J6mq2JufbkJ54AX8KTa52Uouzv3A76EdFWVuUpZ6aHunJvK7GQPpgBUpSSDWSjoS1NeYAb",
  "key19": "3YWpJkgDLwqr7gq3mB1n5jYmAA1ZmW8ERGzAT1HKKpLpQv9CsKxUX1qKFdG75TBcjhuQByqrRuwzcYDtQkxdECFz",
  "key20": "3nqmKc2ec1VnZEpoNuniP1fKxXgWHt4TPSg2BXvFJtwH16f1EkVrh4qAfAcj9AWEcRQfAA7rzBpMDYachFf6vTHo",
  "key21": "3tGCRak8uFAzqeiWb8dmVNdCvUB6d7H7ktWePrNydpfF6PbxUxL7p1Vj1KkkcSrkZZF8jpV2meh74AycTD2fvZ9F",
  "key22": "4WcHT2bUfjD8JEV2ACNwGzXrxcFx9uv1Pn7E3cNUN6S6gfiECjPR6UmyompRKYuXdhtxFyA9zJ49Qp8pURmiNgAn",
  "key23": "2rpmwfvUzrNyLC3gTweFsY9ANS2QubJLNPdf6jx7LPjhMSeLuUAMgcKmR1XZKePmMV3SkUrACcBPx2eoq7Q4KTDp",
  "key24": "wiLjwybwA77bbU43NQibgJj5vydF1pCAvDEzWjVFQxZevoE9fhtTB5EnF42ucZ6xJkwjHTjubMdnfNqEGiQpHYL",
  "key25": "mF83aNS883tmwjoQvwm1qhV1DZ4Yc6DWbJUtnCUYFtVhV9o6Xvb3joan8dVHLufRpkVK2V4Lgtbn8za1QAuHaTQ",
  "key26": "4wwR12cvL5AJyJ7W1N2pUDpPGiH9y7sRCZ3pNLmFW6f7Kk2k1rEamEf4W55FJ5o3qYa849U3qhxtmnD59DXJxjAg"
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
