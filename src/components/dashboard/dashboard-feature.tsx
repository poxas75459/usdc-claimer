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
    "5TceB4HMenBzZktmWUqDet5wJ5gaz9raZzhzgFSk6vve5tD5xqB3jvqLGnBRrEF1ZvUfvmyXifS4CzyZ9WeqssLd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wxYYbJaFYBHVMa4zw6rXu1ZBe2w8Vwy2DFzKmFRB8NXmGJtBpWjVdyauyrCL45bRqqp4MJg4xJBhVAsyWnBFobP",
  "key1": "5N5W6Wu51ZpuZsHRPZMHkNyy3LxqyXCJQxsgV3P9zp8me1GUyhthNgtmXT1GDvogSBeuvFVwSPPiRk4sTbsj5tRJ",
  "key2": "2vkafiahi5Pz4Hp1cGovPuFhiWF1tPUytBfCezPsw2Jz9jKiQCxymxkWiUpDGWWyT2szH6QyibPkzgA7x31UoKJn",
  "key3": "3BejBuEXjZPyTGTHH71ovjqGZNMSV58eDZFKhFPFVfhK7Y8KZdde9ehCL58UZxYFd13F2Xp8oxrxhjgf6Kwx1Dv5",
  "key4": "5rE63rN8Eki37mawh2L7omku2oGp1iB3bvDfHbxY3A7mFS6wZE1YYaGoHubrf7uPd3Ez9A8J5chxGNPY4H8jty2H",
  "key5": "3eurYCZkHRU9AhGJN92MiMMqu4RJrJcq972roRgmioAoKBMbzZ2kiHkpZzjAX9ytfdfYsacvgGfB3HW7AXxPTkzD",
  "key6": "3uBP16HRktVJCLfNmu4TFytDNkrBPkMVmcsud1E3C5EtW9f6UD5vA11vutJrU1iGCJv5ciA7g32Y7gy521mW4qnq",
  "key7": "4NhEmzvbce595rzb6PmMwqeDDv1xWsaR2uZaCkrcSdAudQoLa9dPLadYfAfHHoHNmrvp5xHD8doAWKREiXaLV1dZ",
  "key8": "2ph6v88gUGXrmShPfhV1oJ8FRc3dECwZNKjvZfncnHGg4Uz6kZBeP3hhDANRfQ5s4QUXhLPUAgRQvzxXHUKCA16k",
  "key9": "41qii2SuU3HgteTxTRPRPLhYKS2G74tX8sXsZg7ifsWiijTRQo9K3QnQoX9ZdG4Nj8D31n2QuCWzNkdVsJNgdL35",
  "key10": "3gByjbAUfK9kEHYrXd1KWXGH2Mg5XgenYNWUpz5WvDpfqB4o2XRf6TqpSAwiXiCUVayrz6LJ9GX8PZ6CGMfKcy6W",
  "key11": "5eJmimgMsXpo7MA6rcKiQRwAvFKvthTcozVycTVy6WJoEJLzLer8s5HJ6W5U22DMUWpoUHo32K8CVqP7wqhf7Wkx",
  "key12": "3FPvMjevtBqbw3q8HVFLihFmwmjVpwNnSBquToKBvubd5rgYhUtTXUhL6JyutQZTfgvBdxgtXgCtDPefnrxDTVMk",
  "key13": "4RRwA5eDV2ivMDCK1acHqXvnV9Hh2dYK4STeJxjomr7qGKwdyAU2baUozwGhrmyS3FSncW1XriEdKhQ5BvBUquA1",
  "key14": "2BiB5UidmtGYHmLSiHzzeX4wiyRrsQe66o8YDcgU6SGzRrtRRNzT3raHGSsALDjVeHZ4zYTm4BSZd7AZ4Luppkej",
  "key15": "3GoqG816VpZvjUVbGKcmSknBmuEutc3CD5CPTEQzP5cZbrGgiw4rAwyYLt2ncUTYbhubfU9eMHGcDqAdTq1z7FAk",
  "key16": "5ppA6NqrFEX5RytUbfxfmsgu4FWaC68Cb7tfRTbaR32bwPejpBcR1eeqPZsM5dtdovcrojAReVcBsty5q9yopwWA",
  "key17": "3qPw6Rpd6mhchycUcECux95dzJhMUZEbgXtFoKXeTxWp6xW6zp4so3FURiZveiegcW7WjuRRFCEKgHFAuc2fpFXv",
  "key18": "5c6NMPPyGcnh2n1DTeENLKjQW8UELR4UerXvzt7NRuuep9jGVUmJ1bGRJdgZPn9tTD1oWC1tF69d6frA7FvgMQ7U",
  "key19": "434FhzHjBmHQctjLp6wxWkFwPhxZvmLbuySiVj1xwtVfeZrtBD72TRUNQMq3YNr1nTtzMKP1eE8kbN9iHwA5W4xr",
  "key20": "e3UZD5H2SCCo4ko4NqKa9RiZe9hnT92XgffiwmYyDXn1e7HXbYAAkjSmwsrNGw9udowb44BdX44FC7NQtEQbwyS",
  "key21": "5NbSBRQZzXAa4MDqovDAMPkva7EMqNk97YWDLMAdWvpU9zvcYBsB1XstQTsGxTvzLwhBpWVg6Z91NCW4X7EBFGCJ",
  "key22": "57LjZPi7Qfpdnn5PAZDM7T6QPVP9orJaYeDun7EEBxGaEx6itGmBEwpv8cbLF7BwvckVexLTtYC6SbpQ95Jw97CD",
  "key23": "Qtw8WK6FbdQp4DqELtxANjE2MReYuw7QgA5PwcQzYrTGWTJZDRgAg4RQhanknC965i5onnCEyUyvVQvjWUaiQsq",
  "key24": "CySx7PmwU4LrVs4PcJchCMHHz8eBgupEL5iMz3T9neyEEXiTfYMopXxXhwwSKkBiHb2Q2Wg4JznnzaH5gw6Rd7x",
  "key25": "3YyuJDAEZnttaMQrDWdxD6phPaAYnb9kRk6AzR2NrDMew4mwzj6Lxq1W92mtumutGMpxNALh1B1xgVyM53fr7Yvc",
  "key26": "3qmR1YDWDhTdBtez7cRaCsACLD4si3JLSD7MD21zmAPCRHdNvTcRTS1RzTzxYqAuHiJmvZzYHXNtNoAgpBRCE9mN",
  "key27": "HPQVJy4UXroSx8wcKuPLEysHEVUqzQZMqfk27AkqUNGgTZEW9gwvkQ8xhvrvZoB1icJBQP6mam6xfh4opy4w3w6",
  "key28": "Z8kcDjerXWxJWfsXzd1G5yDcS3M7d9udzDHw6z2MYRGW8vb2uTCCuLLWN1nXCuZUATQFTE17rjyC2xMkeaGQmEA",
  "key29": "3PcJrtKUckyzSKd7yczrrr8BvdUAULwdRWW2WXCngikzuE8haSjATwtX7G1wTsmRctndQegMtC4vUX7KyytTNMRU",
  "key30": "8eexPQzEfJidduEiGytTqetohJiiP4Zs4tLSmDBtGCEg4hviFmRaPu5fV2yKkqr9Tw6A6wE87dTE3dW2Gc6hrz7",
  "key31": "3dvyHGZzgCs1njfrxRPBfigJ6k8KsJkM2ETTqgaJG1TVqxUzsVB6ZWQctepqGhFMsvwCU48kPDSffWpG8pDGXGMz",
  "key32": "5DX536WBrHpZxJryTrZTqKGDn9oRoPEnALpUMDz7LrBp1kE7ZDQg4zWaF1jPhvDD5VW5GTkeLPfEnhjpAkVUMrpB"
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
