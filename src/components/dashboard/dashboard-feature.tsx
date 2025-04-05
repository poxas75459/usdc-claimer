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
    "3ucTWymJzEKzu7XWVnqpXw1gkdh8vLXTqvGURm42VK4Ktj7hgryZRmEoV7S31MtorfpiBtYpCkSBy8qExFQUk1V4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32n2rbs2LiLJTqSWXEjALr7k5PLVsGsXqSpXsgHC3JgunFW5C7VjgMZpicnkJHsHwPs9wEsgf4VpvJGHisfrioXa",
  "key1": "R2Fuy7HYhbUqTHhSgSNb11YWXuKsH8UpvgVAbQUvGg818mmuoHCa485kW3nes5CCLLh9MYKyCU3aaLstL4c1mCo",
  "key2": "5fQZWctG2FWGEwcUbWYY8hN3v62A2XVH6jkk5hepQe8qhS68dfnVQX5qM1sjHksPYwr5Q47CtLKPqdvbQnaTUHRS",
  "key3": "4PgH3144eL1RJj9Hsqsk2DNR9jmiaZG1pRzt7svqkSqfn5r5NvSRKkiNnJn3AvZM3jDaGPQp92SDvMA7WiAuPxjf",
  "key4": "4rJP1GTzAexgGtxKWoMYJDoH5HRavN2xXnR6dtPiWSZ8SYhYkPM4efqde2bQPxKedmZsWwgwnXAFmbYhQDy4MXUX",
  "key5": "3Dd2tDzJgXPYV4HYBedGrqpDrYPqHmynhP1KttqJUnxuDasScFhcTos4ByK1vg8GidqYLdEn8sMGkJymJsGReZAp",
  "key6": "55BqGCaZBZmUFnuXaEgBFB4PWFa8n8uof4Uic7hemvWRKbkzvns1Yuk9LjymizU7fhbRH8hMnVFg9JR7qduV1dDz",
  "key7": "2Q5oFKZGN3RSuSneZ9hwyZ4jx1KwUfYuRVaU5FvQkt2NdN1KiDLhvDcHLYSYZwJk1pKa7aMsFs9r7Jgucxsya9Ca",
  "key8": "5nRz83mwwiWS8gZXjyuszWUKoXwTjXneMHRBpmLNnppESc4TjNhJdfxPSE5RAh9xnF5bHmmWU8pQXf7ZSuiD9RVQ",
  "key9": "4WpFtcWDmncaEhq6bRg12QYioaaQ9GPWptpyuqWWzY4H6tLNrBphUDANH42txN1MZHhYqxueWik9ezy4Eaa4muLA",
  "key10": "2tFPLVD3f9wed6B2wXvbpwsD1aUqTJrdwPnmZPrw1ghHJ9sXwvLFtyfNFvJKFj22yx4XADVQ4MWcNtv9pLjetR8N",
  "key11": "2RHL2am8ydXpQgysmVYwKuSdP55nK6Z6ssbEsGEC5vyKgcsNL6Wv83s5ivSGqmKmNHtrrQcb37cHXTqSeJbCGkD2",
  "key12": "pxwQt6xHadXy3cPuN1pYJpAZ8diLga1mMgTmALkkxsK1REBB2xYkWkRGKEDNe1FmY2kxyNAyxda7Ni7TMcuimpS",
  "key13": "37C7MNxDfzDz9KgUHkLRBuqAjuMdN7D6W7XypmBjynXMTwwActiVbnEQUXh9xXpz3yXrBoao9XqRYsgL2SDaJKQn",
  "key14": "2LJSEc6LhaJAsKyT5xYNX4SazVqkU8YsmxQW3WS2bikZi7WRuN8FvsaNvgqQj1N3MRtzhUfh7RZMFcSGo3CBDPez",
  "key15": "Xv8oYQR8xR5o5DukPR2GAEbwDp2VtFhud32wSWeTRVFi2qsLXpeQQeRcSB6ExJJ2a6nE2DKoYzjij7q7rqaUdZX",
  "key16": "2bvVDbRys7HjZjGurnb9oT2vsXKytxLebjBhVVGx5o2FFS1HW2aJUa3yJAj8a1hNg9C6p2Nvwygq9N1tvHbk9wMf",
  "key17": "2ZKrUHGx4w64kCpASxasNNmXYoFS8rRV6yhDaiDbtYBDYSQ8sX41nyE7f2E3xDTxzQDMrsqL8YJcbicTbE5nRgSm",
  "key18": "4mEgYeugZwYG5V8fbmvD6HcZnLNQnGk6QYk4RUA4M6aLWspgoFiZodzaseapRtfr4fJity1jSXD7kf4hfw2U6gKd",
  "key19": "3Kmv5MdKZpWFhEADfk8QP7JHMBzo9WT5MXv4R5FnaeKJfop7GEVMKTgpLCkekKS2s6E2ek6CxygRnPioeBnaNh4G",
  "key20": "sB234Xae4PKLJjDY9fJQLVi2x1mjKqsSkxbdxfpMmUcji8VpBcbyWWvrikeGuBh56isBzurFtQ5jDHppHVfTyAW",
  "key21": "2gcS9UiCr2fVRMo7szxXaT8N7B9bmpwgFoYy8B49bBauuygG9K3UvgufUNZ8oPetdS1o2h7w8Vwfdpr2U7CfRSVC",
  "key22": "NtnL8ukX7L3gjjbZjsqsnZyjMYAYkVWsb1HEoCXVqyvgSSDhUqzVb5PE3k1ZomUgQ1nk7tyxuGxghTEs4oM5Vk1",
  "key23": "26puRHGJSbZkUuDmjDCwYUK4WnoeJmUCFGKk7fV3gQ27VHV2TerCBb4aLgNZ8nGr1DRo1Kx5rVPzLUKKtfgs35WP",
  "key24": "47uqFmtZCoRpDxvX9ReuwcyBV9y9xVkp7zFf24xJsBydGY18KYxmB87KHEkeiNXmFWH3v67sY2TRiuoP2U9f59Kv",
  "key25": "4G85S6bh6WwMzT2jf7hjsiRtGBUfymMf9UrBYPWNsfj5iDzU45nYWkGmMjDKzVU9oS83vW6TRo5DkXPoRVrWCbWU",
  "key26": "3ES72qEGbbmGKoBBsyakVKRio3toaKkmCw4HoyTnJSUM8WaL1q51s6SRzii71RKbPLtkQuoRCfA3o8KdtEiDpZVV",
  "key27": "33Q6UeV4Pv5N6Yjzyx28Mw9T5AwPu5mjxnEFSoxuMLGwGNEzZLY3VZNoJWDH5u6wi5J8DdiwPs1g3wjZt1mA5DTF",
  "key28": "2Ug2vpt7aq5dd4ifspuG4v5s3mscZmrA9PiHj7rYjvvESEcBhX54XaLjJKn81AoeZMNnP3D7B7LVRVVbUKNpDu33",
  "key29": "irHSkS2EQAjWkHTPq5mt8GbntRCRBzgs7fyLPDU6Fss5Qu4447v6iR8XRiUXeUzJPQXZagTsncyEAhoCEyiMLR5",
  "key30": "3T2FteWgamHGYnFxpW7nvGMhzVNYimXfCydZYJHqHANCr5xVZiBJ7FvCrSqxFfnv34BFKPjSo5uRpHvhpJMJ5L89",
  "key31": "4DB53QQSf1Ug6Hm8KezqNMcHGj1zrXgi5axVWZ1HWzrpF4n3E31cXCEHuTVjCy81FDdbNe9mAgJ8HBM8iDDBeULt"
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
