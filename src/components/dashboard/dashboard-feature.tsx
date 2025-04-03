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
    "4NHSQd6QMgpNF5nYyun3r5X1Q5AuVqYHs8nK7fCxxyGkPr9xydPyyxTG2kaGRH8j26opznir737RRiYrRdzcPmJb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H4yBgS8wNe9bM5Yqrj9QdaRtvTqKqfgtXzmHbMLCvjYPYPHt7k8cYMXiGX46aUZ862yPqUvqeyFhUtkxCa1vW4q",
  "key1": "4PpEQDUxAswF7gtLd3NajhkStixztsjjAfsYrXKQ4zPq7986uEFnNJsHRiiF6Zw6up1ZNz2SZuyQ8LLDeYmEX9nf",
  "key2": "WbVNxMGaBt2doqdMMj758EWaXScjWZs4ZsZpavHxPYoTGobLUug2gQ6um5ACRiFDS7CmE1trD4wrurBXx21oh8j",
  "key3": "zo2FuSZ9cneyUtyhQcsu3xrschy3UQV8HAdCfT8ZE4ciM87rwhi5S2rur5sXhbtnT6vQvHu5FpdQm24FS2LYeRF",
  "key4": "dBo6oxNfSXWvFWfETLR3RFPP2twDEWMqoo7E6qxrjza2uMnBseijsj8zEQtYDRsTuQhaC6fox2M5FQ1uJewCwN2",
  "key5": "37hBD4fjwar8fFkTr3ffiewHVHVRLQ2DM3QwM6zW8PmcMLXUrKipimopY4bWcaSaMGkWy11AmDZ4FeHHtDyiqroR",
  "key6": "vziy6mNTgChLkxby1rqrYfkvRgdENLrcMxPp8WmyCZScy7QmPEnbhbETVVguM4LhX54xBTv6sc2x9RDptJZjDsn",
  "key7": "3keXwFMYBtNTqLjyGCEj3CjcXwNkrh8qZJbLBULSBCPdCvR8QHCevJtxc8Pi5quNAVN4Bq5xbYtV9yd5QpTU5QHr",
  "key8": "4f7PFjkHuHtCqcg6Z7g24BYGm3wim6fBd7HMA4zDwRyvsH2yBDYE7LbPjD2yMACXSUY6dS9DAtN7YZRPgjvqgcvq",
  "key9": "fXWCCUjpfoeLc98ExRivcFAVwBkp4zgz8RyGhczW6TXjsFcBvVoxVAyXZEisjStSGNYeM1gwJavmRqFLuZRqWXX",
  "key10": "2QKAQeCGpVTMP47CYsmnYVPpJRDbcUJGxvpNh8yzVg2RENfFZ8PJqRkxctwy9tbHSp5169hPTzu16keyvhaeUdHd",
  "key11": "55qHk5MKvrjqLRVEQaGMeEb6jZDpS87aVNpLs7U7gozPjGa8z6XH8GUmUoDTik9kDRUofPNaaytMJdCkkiiedWvs",
  "key12": "2yHJTHgBkL9e68DPSiRJhoSR5yeVBSjj9bXF51aGi6tmHrgdhJRjLu367GjNzCTqCSBBVXTi6QDybbmpLLA6GjZQ",
  "key13": "2nDVqcpSrHCReU9jEJW6p1VVjUwFW4sg1Jhs7bj2waiMGA2Y9ZWXpoSxkWbi6Rn3fDfRp1oHaKUqGitmPkFEAoap",
  "key14": "4dq6vVhxJ1UpnHUQFT7d3CBKugSYJtSi9gWdUHr2mgsS1cDSd15Ch3irhJt5xEVC8PeP3ME1my7PH86NMYtnDPo1",
  "key15": "2dfdmxmPNhLtNwLuTKtgXupUv5AkAajwXKJAfk2vS63is3zfFnzGScDv8Gajfk4WytU89Ko5NptYiZPLWmYoqfvJ",
  "key16": "38ew7JuzsMRvU56DeNth1tKJhukBHVvimqCSwKBAETmj7cFmU56aCsfRamCj6E9tfD9Cs1jsWMWvn1ctBqTonrsV",
  "key17": "4K3XZ6CBfWuw2QJZGGzCrdgXDX9hGa2PtwrF9kv259gbFFBJChsrvErrmEtyVmj6pCFvJWDPQ9c3fJLWFoxWa5sE",
  "key18": "4f5FCwpUbfQzNsRyWmTARRmC1f1vHEi3YJHjms7FmtEyRHJb6vrGn1hyr6a8u3bzhT2ZETiUT2xSbVR5YiMJmhnp",
  "key19": "4QWwHj7fUyTGvZam3s99noUynEPa7M5XdgUcNUvWVWzoD8J2mSzr8HtcnikP2z6ssVw93cWSCNfKsmXrnViSfSC9",
  "key20": "3pWNwgnepqEsyU5gUdEJaEyvw5nig4CCo2YLLs2hcjZzw9KrWs7ijv5Qx1Ere78vAUg8AHbLDyHygytDA7Xz53cT",
  "key21": "VPUSmPHBJbDwFFjTHfP4dKBe9Rpcjnho59B8tjrVzCpLMXrQ8aiUYgeUnF7QZfmwd6YTmm3fvz88LCdYmNNJmZf",
  "key22": "3qFg9xdrDV8QoDKHoybFjRXhsUNdQgyLmE3iVm1q3jwgBaNkQpijrNh7ffpncVzyoixYEpiQFJCcqtTtXpH8gdKo",
  "key23": "3KG6NoQBrKP6M3o1tCRPQ8L53nGHkaQibeZiu3512c8PD4N7pRvTriNDog4CWm2NYs4HCGxKYvMg7TQJJmUgDc8U",
  "key24": "3PPpxVDbB1TmRYUp2zSPPhtLtAAbyVpS3YABV6CHBGEXUBYcZMHtMx3VXHQnyNjVDwv2MptQqHFdQKDQ6eJAMyPo",
  "key25": "4cFxMGcA5z1oX6BF1qt1NG9JVLsJsRRpnwTpuChV1VCwdFGhMJzA8P3eKdc3QjTNd1Z4EVMNs13DzDneLSRMsxSk",
  "key26": "5d7vLS4ewFrXwj9KbaGDv4oSEwuxSabLxCzUdcRVWZ4TLrwxd3xZp3tYb96SBY4dfA72tPZhwxH5Hw9fSnPTqFpM",
  "key27": "5FSATNS5wLjQPdbVmPd2DMobyGGbgXcPN2pUqWWdfdKAGomDhASZuyoXDn58d1TeFtPMabucxUbRfdj6xW1rksVu",
  "key28": "3BHBMeGtk4THUVJ6uqb9S5sfhqQJ3R7n36KyURwsE7wdpgHW7EVLPc4T6G2AdaAY1PriXSK6XLRb76zbo8Lt4mB5",
  "key29": "3fwprkGRHwNeqv9K8ppFqfi9jmPZemPnqFkM7YGFWqnTews4ijjRijjVhwVC4Xyn8uj9shNhWRDbTm7pbfDFY5EY",
  "key30": "5GoWG77wumjNketGq9tZuhYbjyLP8b6gP2EwbESQDXneAKLhqjBR72gLbRUh6DTr44aWWgWwt8XiaTH9hLNi5uTr",
  "key31": "ZPt9yEbQRjqTScQsLQvvSGF8idmPhQ7fGLBuFNCw5CUbEotNGQfuhczZdZdmrvkqg5gx88AczvPHi3E8khAfuy9",
  "key32": "5FHeDaGZB92NgYtfirTrEYTHNfK1aQosodzAsX8ncCqKT7JcK6FxgFvu8BsnhvuCqzE45hhNqgx1eYa4PPCRBp4v"
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
