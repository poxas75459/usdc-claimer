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
    "26Uv8xQW8oStvmLn9zJtVpSN2ruNhMQK7svf3scLUkQ5iqhCmoiMeePexsRDqk7QqY59ms4jCrN5P78RoSem4fJX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wqyanR2yZ5bowkJTbwaGRruHZgkYDayntuQ9WaQQANk8w8wnY94UszqhNQoFsV55i8hxDD464LDqu7YMLG1QY9k",
  "key1": "41WjhcQR7kiew7pkJtTWwYxxAYHxeR2SuLaKfQxobDvFqmCdevcj7aJVPTMpzL6Pb3afzuwX3k8SeuvcW5fj7SKi",
  "key2": "zkcyPJeJmVwSmXYVWdGNN3ne21XVgxKutB7ePfdW6NQznSA67BhYYtcuuuqvy5vxYUsffXFywSxUW9ZweF4PLu8",
  "key3": "5BPBGjd7qiYBvrgPoczg6kNSjSBfSnxKqkT14J2bJaVK2UAjhLARtFje2bsB1oEBrwwhr7z6xwLKuD4MfYY1rsDd",
  "key4": "utcY5iMFgBGVUjucko5bHh4DJC9cBGEW3mR2eWpuoM8PwrUbMzfmrJMBT9njG8pZXp7MHmCSgC8gGyHkdxTqDGa",
  "key5": "576AM7XYvB7rXUY2Sb1eUPcETuAncvG7jgTKDVoAAHRC7iSXcQf5U5M9yuTTj5kAAsYqSMY2iQ3EPysnTEeeHx5J",
  "key6": "4dzPMbNbQwMrKqCw6eY7DrqQf6pGCPunHVsTWeWJsaTv63fZqnr9Qc6qTjAqcjrTYfFbG7UpurcQF6DLWhyN67Xs",
  "key7": "4vD3Kmj6zPf3z3tWXmcwYrYuTDbuq6qdM2VyuHzCGJ75qarJtzcBybMcx2mb5WYyMG3NmehRCLMnNHMN3LCR3eqN",
  "key8": "4PkR1RSgRsGqsSM3RrHuf3mH8u16cEghGqrEczR9Tg2dmHuJTErpL2MydKJ5yN1gjqLKwzXszpwEsvh1cQ2USyo3",
  "key9": "4mHr1Ws25QrSps2ay94ZuzTJrrFENE62hMgo7MHn3CR4CPitx1MbEBZvSauoSrzza1r9s4L76ECYQ8G8aMTMTvoF",
  "key10": "4N9FQjiczfZP7THpkfqNAyJohSRZCJ8CQvdQCLwBFR8Nkf94A7GLGibdpYVzBtdnPwBVHgXoyeqYxjN6BcqwfpoT",
  "key11": "4b42vxZDXyYBrWotWGTESNfr51PifwWiw3qhKeVY1JfmLq6DFULdo7NyLTSebm22qqdRtEpZBcMXYjvPUVJvnPDH",
  "key12": "2F5Nicv9DkLeqe7Ato8tZWcEimamoeZRb6qgAxkrnvJ2h41M7tUmWQsLCUQ8X2Z1MN5fpAqo8CCVpUWSVsDgLG8L",
  "key13": "2aeRF7SPPZ5pVqKeT4DLwgwsbgJhiJrv9qge7qSWJDgQJ3F6GhwfBtKLgWK9afJ7GVebK2znZfhK9mZDFhY8fQo2",
  "key14": "2rfb373QHYipr4gD25oEA3ASsdjUkCC7ENMHEBa98fkR4aJrU4sXugnWHpFgru1dp4jQjYVwH6xNj1do2YAvvVZ7",
  "key15": "WfZ3sX7Wzi97UVCkYiMFAbDHBsndp4NKpmkTc3zcuaWXGENwJq7PtR71eULxWJ35UBN6SBiML72ywLeK4NDuWiF",
  "key16": "2oUHE6fNHe2qF9zqywuk7v26W8GcBrDcMzmM2V5RKX7uZDdWHfKGeEKnysbYqWeKGXMyDniAnawg2j1BeosVWiCo",
  "key17": "2L1XE6vjxWvXj8p8An2AiAVeCbqbC9gy3xcAPq5KybjCSKpUix8LXACksVThMBkbv3CcfABj82wwQjnbJmix6EX5",
  "key18": "2drtvHsYxDdb5nJCtYau9yhgtAQP7EZxnJCQofF713UB1gn9tQAFpRMbrj5Ht5mdTcyiQQKgQw9DZzBPnBhMa5i4",
  "key19": "4T4t9eb4ppdwoCPdCtf54YfPFobtKHSmDWAAnerGvhXV8m4Booam2p5fmJyCvu9WxMrZSaFmaufMtZEBv5THsFGk",
  "key20": "2jDEosTM7BcEZXhUfXrF267b8TuFWnjQyd4yDMnQzVpHZmuDCDwzVg9xpa7JLRdsHSpNBbK7NrY7NTx8fYc6Novt",
  "key21": "23HP9SGbUe6A2p7AQQswEpxw5V3q7vAxSsC5BZqWY3qh4Z1ARHTiTjBgwxew9sDzeVojyTydDWpNxTn2ZebyEY71",
  "key22": "3P3XuuGfRSXDKS6DAGJWj96TGjRyVAyiaAUY3w7iqJrprF73U77FzQSw6swtXRqzoZ4U6yzg5zaJtcX5F5y9jyAD",
  "key23": "4BLg74VdyLmnSJZNCFQeTSriM7yi7ZUNJM7vNqkJjqrrjiyyNgyAzVNwURwpFdZUAQcJk8EAWEti1K2Sv9NMknF7",
  "key24": "5oWqdddabT54EssKKXuJnJZcSkudVfuHej7qKGs4A2vzm7QurYQw9UUYZoKrwbufdWN5jMBt5jfq269etCNPUfLd",
  "key25": "2efaSRT1CZCWxhABnRBsKvXL6nV9ftxeK2i1f4aE81bHFg1C5ET7rqeo75r7po9oeBtJyboZnXHQYiHmsYUhQgc5",
  "key26": "3dRP3qfWrwoJXJ2rgvioiwhayZAZKtCuvFVhspYXsd4t14qWsVrgUFsphFq7Zir9FzHgx1XzJ9UPQRwtnKvLB2qd",
  "key27": "4N8DFMdwV5yiPyNbUS7SpRYq6KXEsUqCTajx11VEuEzPnPzNuvbWjcoxyyEBvdot2kabYgWw6CRRTiGqEPATypan",
  "key28": "5qiKiTaiqfMM4GcRms4qmpbdcCF2P9f2qUpusL7wzAMJVd1S7WjZkFVPdFNHyP1JsyP5LdGBDYgfes121hzHmJ8c",
  "key29": "5HUrE1u6tq8NrzcEypqvtLSBCn8UkEvxRMyCjJUA7nhNCbPx4nLDNHWEJLYUcMxJDYBoX3MBYbg7esRXB1Dz8Wsu",
  "key30": "3nqALaGST4eZEa3hNni7uLPLDGJNcypU6g8tAoyHoUk3Z2LR8ggWQ8iPyePCM1PQiTP8dTEeEqL8czjNLZ81HWYz",
  "key31": "2x2bnu1Lh9sXx7rdJFdsdQ3556NSYDnBYAeBE9JjLv3XJzq8dSU1e3TDiRkjLCu5MfADmpk4rzfjXonAZN42H1D6",
  "key32": "21fNh4C9qy5m5jdm17ecQ2ecPQKKxPpnEGdDrPUWuh7fiUibuUwiDi3ixCtup2j5zezVSGV7j9fR9RvSPA5A6BuZ",
  "key33": "5CBqrBCsa4iTkqDBpTTT5TJkX5KGUCHDHEAcUyPrk7D6bsSEktjhTKqGByVH3W7PcDfFkwbqCEv9Lp7bMt4gt3wv"
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
