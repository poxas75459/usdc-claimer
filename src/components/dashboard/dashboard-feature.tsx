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
    "ZHgjLs4RgiwpU4qnwhQuzoGiNrt7D1HqrX1MBXBS1REReXdCbSkkKzEzL7G54wg3TbruedMjJ9KJitC8qt11We8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tFCkxvVZK4ABAbmwspLqW1p3QQnH1MW9qkcUUwAiGEHni5Tv7eU9joYJYpeRj4DVDnWeLUjQ38kF6N7L87Ro9uX",
  "key1": "aKhuQHiFGpFiRdU3BS1P7LEoDwsXiLcxoTp2tRhFTMS9N9z2MTnvmsgo2vcAuPWdPcurTCcwgbZTBuQHgecQ8nw",
  "key2": "5kN1EAsmFwewFsvFMwummXPtKHfurHpALuuohU4cKLqEhiwNpZHxACttoGrb5PxbCkyjzsQZTqLtWUjqBhPc8RCz",
  "key3": "4zn5K8e7HyBXkwpVTJsn4YoQUazwz3Hkw1vyxRE4Piok8ZNd1ZKQz6qQbmxpkVktwfy5A1dvbhsFvZUkj8nJL5jR",
  "key4": "2oYuJgdxcQECUJid4SxnvUK6QjkqwDp1NCkX2c39CopJcV7BCBwbnXT6AHvXRVAoPANdLLrPak3KBp165UaFW3LD",
  "key5": "4EEHtov7mBykf9V8F2V9gm8BNzbqfUyhA1Znsq1wdJTb16xZG9SqrRCNogvmRyPCRRGKj8xYJkrk64ipa7QjsiXT",
  "key6": "GbipCtCfAxjX1VorTYq8gZzg5F9cXrGqBwzLHXKpcGtkpbcAMSZoSDhjPyvjD8bRKXYiMxdfR1YukTFL35FiRH8",
  "key7": "3BvPfmkRdTknEudvCWCrt2hGyca4vWcT9N1r5Y6uGqyMWUgDFzUwvXjMh3615A1LY9xiwDdgEzbeDU8sg4znrJt5",
  "key8": "4sbQdhQitwGEv4KkfMDxeKnsdXBK3qfujQLck4akpoHPRGHfUNW4wes2m7ZPRsyK1BTa7QJwf1qqt23R7vtPnxdg",
  "key9": "3N796m5ZcfSgS5je2urEH4yGHNAr7k9sja5SzTSubDAXsWtpAEFYqw8thJtM8CtuJbtESTnw7aZbBomnW4FsX4E7",
  "key10": "5Lo3huV1iA4kU7FzLT9D7Qx8Fc3pBq7mpwUi7sBkS1A4pktpMv6257hLtPDYy23SQCvjjNC5e7tpDhM2YuMk6VCe",
  "key11": "JwAoNNCzQKRT64bWxk82rXeQJCSjjadGNxh7kr24ZqB8oU1HtrgjzAMr1Puppq5pWQULFeYXoEXTL3rEMbA7EhM",
  "key12": "3JxzioNULpTmLEEdUJg1PK33SsiYJG3DWEXG9VMMnKykQ9Za2srD1K5ehCQBbZv8B6uFWvQYEKgTNkouTGwBYrRJ",
  "key13": "3nbkEquT67hpL2QYxv6qwTsKVTh8o5gGXyWRvyAD7kRgYGoxqmnKj37CqCDkKRBbijtQPfeemQdVpp7kZMdcDC6m",
  "key14": "5rStN1YapHG5XUogapRMXUC61zZRhgLAHLeZXeQfjjqRAZBVxrWq93hFroXuA9ALCXd13Fmw5VRVC9SooLgfa5ni",
  "key15": "cDGodmMJtaUrqFftoJDfspvDJKwZ84dNDrMfvbLXKpC7BoBNCmE2VxB2LFsPX1HYTpDC5eSdD5hh6VVPmiELLvD",
  "key16": "5P5RH1Xzrvc1vgwQmFoMVJ7MQsGF4oeuJw7ufP7eUyknYxC7PgP4tRQnUXPan1dcvZbmiqVxQAEEfYdgiaZaq7pA",
  "key17": "3pGNAiqgcjQYfotY1NJcvwdZRfrGMnjub2ifqNzsNinETBcVbEmVgpxEBXG3d4g5jojkJKJjiaSzXPNxiWf3gLgG",
  "key18": "CdL29xPn5tkZpJUvkYgnfw97tR6T2Z18tR99gB9TZP5485rs3t53cCjyRLnrHLem1ospMdBzocysKu7bTp2zjiG",
  "key19": "5Mn4umHPpeC1f8UWo88i8X58PEZiv1GommqNcRksz87jgqx9nRBq1kf9VgveqPF8piYyJY1dWtDnfso4kURKuzMQ",
  "key20": "2d2YGnGHhnmxqBEy3eAtg9vVWuGo88uJUeQ5g3mskHwbuVb4pDLjoSmbteuyhijGSNJUQWpmKQqCFVaL4JBbq9iC",
  "key21": "4LCMf5Gwmq3Q5C1naVKaSWFYtmQTG2UMzVYDAKeVjpsgkv8dxoEwshD3xvJdwPVrKgF1dKMNCRRMgqr8surzFqEs",
  "key22": "3115iV7UStn5uETEQuaYvkmK7LzYExPRPtpkHY5FETrMpAixk5rmvXUYXVCu8pycgf4rYFJas2LRYEa6fxvhXZmX",
  "key23": "259bPXjYFAfEbyLSkSccgqroX2sstvgoewoYfg2Q16ZcxPcuuSuvJKFg1Bvu8am6EsnpbPD8sqx6BSGu5zNruZpA",
  "key24": "345ZKgwnorP5ZyHxTKiz5n7RE3NqExW6v4cTiKP7gce3Sw3mszyeH1uCfTKDGtFg4xkmWNSgSggkqYdmYnXTx7Sz",
  "key25": "AJDm7AdQW5NQeEhmFhMjyanGXWiLXYUtVpEzcGyAiebJKG15CQFAwHuJ7aL14WG3SXbmettkBmeTSmtWXK2C3AD",
  "key26": "2r9etGPx1DAqFyyJ9ewKC2iss8TKUjY9ot7yxj6bqysByLD5d61QAPZvjg2BQind81HV2343cBwwBLnTN7U1w9hH",
  "key27": "3qVyBZoYuT5vPqXQw1BwJTcgpFFLB6qgRiuthsuDMkp8esRssEMn2Muqod1jxBokaWWhokNGBjcvoVgtnjSAdyPf",
  "key28": "3YSDHgqZV8vbbGHPP3PTSiwaRWYXuYdV89hA3SN4DdsutqHGaYwc7niqoyqtPp9cHyGqybgvkXFZjLRqpiZLvRwF",
  "key29": "2JwYiNd1VetDWi3eHr9fwsTJm4ftjYXv7uaDD1aZfj6ySD1XZML6RzSrMwCJ9B2ikNmzDWtN1S2oaP6L5stRXBXA",
  "key30": "44HMG6wR92CUv5pkkQPGAzGU735maeJPtV6wVXueoLQDsHewQp7sohrkVyKwpW1fqgWsy7v3JN4HzCoCqFqx7fXh",
  "key31": "5FELWTJdTrFSqe63rUfZEiFXi9qaJZngXNvdGiSybyAdBVWZYiiPk5LEe69VU46H2ZmyFRfLRjU4Gae2edTVyjzs",
  "key32": "3XECBkBtDCJ8LkneYNFma62oE3XWxW3An8AhCHFxgLDDbRiqSJNEqroaxt1oAexeiCmeCMem8QqGLcZPpZt97cpe",
  "key33": "3hqeXYYf8evv46w5Q7RJFgNHhw7Kn2bVV2zbQh56v2BPRzWgipRyFQALrnDMM8MPiWeq3sqpfBH5uwwJXymZLhcy",
  "key34": "668AbdQZi8KR75KPrQs46XTsFCXhuYKuVmuUNz5HoZYUQmgSEC6oV168PTy4wZLShwRSX4yhoPMHi7LC8P2rrHWB",
  "key35": "Xv2NGvEsQzzJvgzBbmeJyHqTgnzHsmqZAu2vAYqvUPoSpCUFqUEY143T9uZtjpUmamfiPFRVbMGS8PafknQwi63",
  "key36": "5VnLRt7mzQHj2wd7h4uhiUVMuQvukRtFFWCLAuGVNLTFHSbM21QaBiDbAssvcibDcdcJMz33nRC4y2iyZutc8LoH",
  "key37": "2fLZuXhAYAmh2tU6hC7rwJ8A6LGHuqjYFAyaq1bNx8VTUqCsDvF1wgumPuti1N8MU1AGTw3bPVLdidqzDYbSaBzz",
  "key38": "4u7wDEyMaTmwPrNsfDugZ4g4SMw3hmUb9FbyHNY48MPLxzPmWJBK9VLwXT3uwtL2pQefshiPRmLAifJi2ubQ8Q8q",
  "key39": "wG5gty28YUx5dHqXktsGB6L3Ws7WTq4EgZQvLWuUA7LKoHnfwtpYRRq47vQVQDc7CK5VhscAEkohJdbufYKuvF2",
  "key40": "5X56GLjXhFkNE7ajVHhBoHhM9GfnbjqXF6J2JYVHyS3PJ3KcsEVybt5TEMibpd68QL62Vom8sABcwVb9gBbQEUgh"
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
