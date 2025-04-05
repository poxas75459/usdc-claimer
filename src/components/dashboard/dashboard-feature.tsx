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
    "2UuByKftxhQKxq3nT1PEhVdSVVmhow6hWgBdMoNSXzLhkcb7oReU4omzptLpMeeAWPEuBJzvmFUxERsEYK4c37xn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PrrXaUDsXAWG7kDVc9Y1MgEBJyZjntSCkLbCvMtvRbBzx2QaV5Xe9XfudZQQFv16JioR7fveDQuFXT5rDXgKqWo",
  "key1": "2ZtDk3Bh7maGu6BhKrmCNgQv7p48XSQr5oHRz13Bk8YNwuGcjjoRb2xHP4n1M2N4Zw4yHhiV86FWqXdpsQjLqCS7",
  "key2": "3syGym87AuBvCkQ9EgZ78s9uUGdAyPzT1ispq6576Gb9MTnSf3hhvjERJnfuX3JsYQPvEqeb2QA2DJriupxb2EVS",
  "key3": "BPJkT48SqsWBo4CEJHoNmi4ePpqC81bAkE42gR6LBQy6R4FWvYr9HrVGHGTksM2WoJRzQz5boREwZiqG7vgt1fg",
  "key4": "3ppVkMhLf67fQah1tCAeyVZhtQbYaiwVaRwjGYoCKVDo5qQ4V98HEq72KbuCThfDJk99eQLxSJsS9RyVGS8h5J6G",
  "key5": "2SqvkRnQrKHTQcWEXSmv7phGD4uewAf31QCEGSQCCm6t47DcJwQtpbb5zLjVT9hKXngCdkUaW84ddr2eLQ1Febvi",
  "key6": "493fwEBsSoP2DdkGRtAUubYnWsW78sVtzFfPnEXJJKX1JCM9qodBoVxRG6dQxeEyW81dXxh5rHbhgG8dEaVGKemV",
  "key7": "2RS3MYcNLDDtu2T96miEGgAw7cThpEuSwqouw4e28jEqwd4j8rKbFoDRFXZVQ8x3C3NGDp2xM6UQE6J2vuVKcuFa",
  "key8": "4boXe43HRjTV6xKZDFgpbTK22NG1bkC3YLwDxaBUDgfB8i2P2Vpff7zJ7xdwdhmXsRs3xU3k2FPZLGi68UNNKQ4D",
  "key9": "Yp2AzmZJNA9sNAYkdgwuzSGsc5TELn4THJyfFrwQWMYv2tXMcUefABYgsNrjmKA6gJ8rWC6VWgrXEwivM8pAB9T",
  "key10": "VejZyRcNengWmtg7kvZ1c6MAyJ5r4ueekjfCPXscBEXy2ZcXpN777nQ8beVLT6TsGaZXXx195VyWVxTN63WSzFK",
  "key11": "4PvPacRzafhMXsxS9Sb5Wmie8HH7LYgxkBDwTW5CmpKUTVveM1QPLXeiJBWP1xtxCNeuRAW8EFnNVGEEzdwSQQat",
  "key12": "3ugrtpPw79onL7xcNxqRKJFWbBx5yjeqFuycGTz4bCuHh9MFE9yB2Jc3VmDFigRBuJdYUwcNn5xAQiqeYLQ6uz1f",
  "key13": "3yBYbjFXW6g4zrFt3QxthAj4SvJo3sG2iwnRGAAiDmcHKvLDiLde1uMSRsubUmaebPPdBCDJFiasdaWKavfZhSD6",
  "key14": "36DtS3ZqCzmK9LVCdu6ckYfWuBgHLm3wxJzLyBwHJ3UPRbg5x44N6GbS6iDq964kUwQ86QN8YSNgiQdfPcSHrJoY",
  "key15": "YS8DRyWwbUxVDgr5HcBp4gXjfbXoEuzYc6iRNiytr3wP3Mk76HqehG6i7AiqG5iaARmEBw2xqgENCTQ4ywZXorM",
  "key16": "5yw9qqXiyAVHZ1wTnLVhRV9SnrNde6vkmXh46GBJ1eGc2DsZ8dVit24q6veeMR2NzgrKmzTTxjL1X6DbRBPjtJ8b",
  "key17": "4R9A4LVp8Mo9n492PQhE6E1indpUjxXk19khaBYUzjDfRhPq6iezJmadRSEps1eKEuCGP9NpvDkxvo9MTryrE7Q6",
  "key18": "5RTohqQo7YT57mFt7bGoRroAqi2DRC8Yz6jeJTfgAifBLEtDEDkNjzdUgLWPhLUmfyrWx8fy6YHoJhREEjQd6TbC",
  "key19": "UBwzdH4AMZK5DVpei6sjYEvQroE25WKWRGkXraf5uHnV716bfNdXvj1hZhNyP6ahun4aFfDyPFUmr9XLLKMs6qN",
  "key20": "5Z175Rd4eMBwJiAkFLxRL6GZ2xewqtZSb68Uj12KEdeBGi8iHZxZgJQsfywEF3K4AnZXCfVyLhvabr47iCR1Qedn",
  "key21": "hiQtSUs1bZZAsccY92XFbLhQsCC4TrJKe8Ywp8ZW4vd1Wc1fLcCwBK4oQymhQ4fRD8umrzkYMY7BykB3dPsm3JK",
  "key22": "tYBx3e4h3XfSPAgYtszEYUvVeuaXsWCJxFjL98zj65LCFrjg3SBuLkMEY4aC9K4LkZVFs68TqYLAMBf3sWTj77d",
  "key23": "65cuVZKKa421SNPDMSRCTtmWb67ReiNuuybZ76ud7PhxuGtwUxpzQrEWQq5EoLKUpQWqH9uE2tfoGeqKEWy3AkrT",
  "key24": "5t4Ff5q95pugDNvEN1aPyzyRQ9z9ubq5UBug9tAdNFGSjc6oZXSuYQWJ5ms6Ms56N6MpmG4wFHQK1kZKccVxRXmx",
  "key25": "4CGVdqLSNqX4qq3Uk7rqtXrLbiFpi4PQ1D27MStp6yR6gcEHvVuf8pnRQ2R1danT3ejk4qnh2LpvPdQP4kkmAELA",
  "key26": "GPjah2aSYJ6HENr9U75seMYBZQbAfX3M47PheqqidzD5eSfGj12Cmftty9BZTozBTGENCrJBwXRhVZia58JFqpg",
  "key27": "3fS8PifZPAjcbmQSaxvvvG2nihYDT5XEVMQ5ovNuwZa6oiSfQGLPDLxZvNow1TkcTWfNV1AS7HV1HGG68coccp5g",
  "key28": "5QZyXLg2ZmtCZ2sw8FKBgW1oJNHEsMuxtUmtrUDbCKU1DxE7xgyayPStPUUij5XWtDydMdVcqjWba1tRY7TFy2ED",
  "key29": "5E1zi3g3K5gCZQhkaNSjz2mfK3VVK36B9rjKHV6iEfUBnzj57tTY7uwFYGwHmgBMxhRjem7qx8WKr1seZAN9W3Rf",
  "key30": "4U226LyxowHXvFw2NKx9ZWmi47gqxFe3o2J5ou3zHEiAp4gBtxUKtbk37GZ9mstYZUAD1XCee9nutG7YrWh1YXvp",
  "key31": "3Nh2JPzTdJkNFgc8aq26EJrscA2hLBpPuQzfEq3Cd5aaeH8PJkd3BvrQwxVDB4o9TfRjveD7jKrtmxT4Bn7N5QMT",
  "key32": "3Qw5LMWbSjxNquCz8bfcLJe65LVwdGFVrvJzQKKW9vfTmfnxdCd4xDHbaqL6CMFnHntTnF9cxwBswAUwM8dxxL6i",
  "key33": "3qbDaRbeWJbQ6J1LmyrjWtearK6NJeyZuZnv8dF2AAAticEE5sXhyqqz4if9LpfYoWYpfZVz2SJBTyj6R6VNZSCk",
  "key34": "5VB33kNpfa7gJRVbqw15MarSA2pkpUj54BiaiwvnPqB66b4sYmTN8vEfnq1kHQF7KqF9DVxSVvY53MTGND8FrUYC",
  "key35": "5Wq8VTiE48iCK7crcAYPLzWBFEB5BvHp6VNZNtykDv8a1uW8fbZ7T8bHBfFoCSDL6JERmvQ9C3Mvsz1fdjJEqUan",
  "key36": "2EjM2wX1dmrwsRm33TbVrphVWjteRcrUWR7Bd8U9k4ea7aLd9yBAdmDvsAiRymDSgPGs77nka1xromJdjAxTgSa1",
  "key37": "4Y75esK9vFS8wDwECucGnTApq6SprGPC4KHXexCTgCgbaFqfS3ay1iFGS7dAcSvA54TBm4pCH9VwemkLPMZaxPr5",
  "key38": "2XDcKjLoXEPmZuhtgRhwbjXpze9oCCJ3NHyhFzhRaRdWNZCx7J5bmgxx97VvEoABFaqVvHUam7u7gVDKh5jz4Bqa",
  "key39": "41jueVaUuia3ntcthTyLQemWigpzjiZXvLPtD7LfgV8AxBQjzccumr49UVdHxQLBDWA6RV1oLGoJojSq9woJKbQN",
  "key40": "27RanRE4Mt5ckpAYKR1CEYkr3gVoaRQdrcQREGXHyKUeghS6D2GPXZDpqSBEwqLZrMJoMdFo8RFTpnw9RZXT4qbU",
  "key41": "28YumJTnnr1DMEMQnNED6SCZ3E6PQ97PpoJ6wJ7iFYaSRkW2wjT4M9vvfo2dfGZk7gBm4rkmrMJ1sa32eNBG1TPJ",
  "key42": "xVrMtyaKuP92ff7EFD9AdJgMn76uHk5TcFLu1iyZLtqbjqPwPPsBaQxgFSQ3Hv2CCRv4yMR1DhLRariLeSKzEGa"
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
