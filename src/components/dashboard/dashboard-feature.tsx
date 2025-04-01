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
    "yTKhtKmo1uCQjZvzDYgmhdHkm19fGReA1BXwPpvQWYwX1y7oKHcdo3nmJmhHcvnRC94Ymx2TbD45G9AXrdmzfpb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25JfKX7ZMqpSLni9pCom9QaYgr4xx8vGfg4o2bYQmYbP5vLV8pRidjSdzGkw7NnLxQTVwQefzVGFGqnYER6aHU27",
  "key1": "kXhfw7RFiGy6zvChtQyxqrmdu42GkVbLvaJSPmiv4NJmyg4kApoFkCjDzhobcHLRdNkHxnr9jHqw7qYNyVaKPRk",
  "key2": "388y2n3RtBPDfshnehRA2qjcqjK12SERQKRSdHMo1N9THmmboHNCJrURXDYEi6pmEbyLuiSzmV1eCJepXiYKRNE",
  "key3": "56rmpW5DdY6vY2Uw3KzCbdfweuyP6EqS34oYw5VG2w44cJquHR5jTqt2U5G9C8tEUbUs9G4d5HDQdfRDg1f3d1RW",
  "key4": "3nZ8xMbFizm5EVFBqsGzLAj4cRFyRDnqAVnS3YLhPAq6j8eaMgXcswgMEYz2NoR8qBuiuthHh5HDzhKv1SB1x9Pr",
  "key5": "2zJnDzXCZV1uBTaycXMJQseADUA3VfErEPdzaQZoA1yh8uyU91cv84kqQdsKrLDurkqFfduKxHVyaExHbZLn9Crn",
  "key6": "razPkZQsAUDFf6EqcEqybdpQsPfFVr9RW48gqDkDxFvotuLEd9wkrc1JMKmcgCSqE6CzSQzMQqCE5776mEK3boQ",
  "key7": "2UvnZXoeXE57CWA8VANWktyVMSm5BgWnVLhHycP6qrcCfRfKYWhEbCz47vWk5zFXmP6QCw3Kv697QQJorKAAYCFX",
  "key8": "5kUcMcvHXRoo9XyM2BRXLGMYShMkk8hbxontv7hEW8cUH8upouGx31pnMWWnt8FmY4C42SgdidqZXb4nhARidGSQ",
  "key9": "39kZoRAPX1wdEyDTuN1veoPqDB1g3CjoxXUszC7ZAGHq7rC25S1NZtfxHffxUew9JQLUsh2CakwcMmhzzSCVde1n",
  "key10": "3fr6pncxdrQMY35VmjiHjyzGksuvLmUGnrXGhDyHhaufDwNGY1wxfWBT7pBfpus3XJqHxDYf1fx5jKoCUSJsZZqY",
  "key11": "3ySk8wbMYiGQcUmCnggecmEjjegNKWMUexjwKAEzURxfcveHEo1bpcMFmZkbb7n6YZgiE1cM1feDeq1h5eBxnuT4",
  "key12": "57iz3a3gnQJnTex7vgamECuZtSqYeMbbbvdg65Uu6UBfEWDYuSVpYYNmDq3xjXmVRMwxSKu3kxgJcBMhenBFctAx",
  "key13": "4JBQcf6MLRMSSYEG1EpMznyCTN7SQhiFC77aUHxFfTXwSBb5Mcn43B8EKhfoTTCe5CvgrBLr73zCqHxsRzRn6XcA",
  "key14": "EVVrPjVZkyPgRs7tNrGp91sqpMfKMzcJyF8DouHazkNk652Qa9puyLbfq6ng5LvG1e6d2kS32joQcJA6dfGFVVD",
  "key15": "4dfyh9qezx2qYnCcQSVTy9sYHGStfLPnmeVRYP7k4V4hJTHMa2WEpDzZLuPsJQzTo7VH98Aqpn9BSJscNNCXK35K",
  "key16": "5fSfrqL3eN3tyEVaJHXfNf1cSEwpxaT36rT47vCb7yFG6D2hSKDvmNJ1vyzyE4JLw6JpzgWRy49uXrwMt6TYuLc5",
  "key17": "5f14jmbq5m28XbJVb73YrwAQGEH5DyS5LMShShVaKY2ykbGbHVDQFKweaLRReQoVzNysWJxzALz9tWpYdjou5BfJ",
  "key18": "5BHuGdxtaSKUFMxVcvKQHWCgtqjRCY8uamomooVNagJnRdBbgk7orQmJDRoyTbBYuFRYV3uXw8vVLTmQ66hPfDsL",
  "key19": "3PHTgjNWFUJU9FesDZWCqaeAaJ2wo8Rngms7vs8ywT6AhCDdLtuRvWtXEycn29hhcLW6noySEFE7bom6Bh7PuPqZ",
  "key20": "4x8cfQuofEgT8hkPPwWDBJgtCBJQTrEmmndScVRyk9Ea9BxpEf4DnxAnLAfUWmBky6QUCjLufPapkZG8K4WV5yrk",
  "key21": "2aYocNSTiFPDwige4byrm8LH9R879oRB1KNCHLJP7gnzQuF3CW8JmroD76oioPN3gdtESRkfyYgJoNt7wj3jLSi5",
  "key22": "49VArzeUGAReXYqkxa5zhzp7MSSNqXkXrxRjT984J1tS5dvL5dk43k8k4wBUGG2N3CCjshuJ6f4fYbdyw3MBz6bD",
  "key23": "3oPde3HGNdnuoaf46KpjtksLs3ujpfp5ypH113eaV9RGao4SmjD4yxMzLMqwuesCVDXvZQP7YVD3LeBn12mvz7nf",
  "key24": "5N5vZxxrxqYHHLFt8ftbUiawMTNhAEbkqDeFP536kFfxrw7koBTUGoAvuGoqBsW7fhrS6tvtXbYKUsMhRNuncfCk",
  "key25": "5Joq4yUHsVtq6yFrQXgueoCjasNVcMN2PCGLtXuzrhaWJrznSeu7c6FkPfo4aX8xZV84DxNATgTURoqT5o53sPQa",
  "key26": "3NfpnmaHZy2NP2LbswkdZ1hjYH2Tds4MqMfdnZgnoQFWep6CRDXaoAg5wnWwoGNpAg6Pa6SPzit9bXKVZT7hEv9V",
  "key27": "3CZcPCUahnMVT99R7aDL4CiiiTZDc1ja7jbxYMzbCQPTxxzfNet4EuS2DvKgbsBNU3roFnaKNYwJahkymFXXFRWP",
  "key28": "3Qo8D5ZX8Y3RtDvW1bTzJj5uuXDu2JjRzTUYop22tcUX2DreChGYQtMLtRoXtK9eaJumFFvUAzfTjjrtPWEThCvy",
  "key29": "3EWYurGirLpU6fzwzY8xhSDb5FePgMFo81RFEuJ95XgiWr98j4Ak7qUd5iaTiqUTYnoDnJj6gSwo9cEJxcwygtAA",
  "key30": "7mESv9oCfUURV4YLCt8XkSVnKX2ZDW3oAdLVodNStSeYHaEjoeH4hejpJZmfC4nGJucnz8kBCv9LuK1Pn5J6F3Q",
  "key31": "yrPFQtUHDK9P7ywQ4fZNPBm2oMaWGbMEwbYixg2u7XiQLtsYH7X4cfuvs3825GY62YRjbCGDPUdye1Ygv6HFDtW",
  "key32": "2qoLHfyu6JRgKDTqEmfcD7x3GXd7y6tfug1bZFNnw73jZNt4QtuGSoqMhDsiz8HXx4RXQmDLLshSMS468YG8CpxA"
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
