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
    "2Ma32XEGMo8t38t1fmkf5FueStADR9RezwR768DuK7VAAWP471VhgiJThQUL1WttVhetCutqWZB5PXuDe9GPFPw8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a5GwEQFSnuBSEy1nUUT2mhGGjq76Q2ESuMPGnPJTmC8ansEMTyx7Wycq3XecBjC13mU7XTupipPt5Hc7ek3TkbD",
  "key1": "4Xq8dLstk9XrkDNic4xsHU2g5a6mgFVHQNE7BjxG1PgCMacXEmvDHXQdfzy4X5jJ6x1M9wnxYr2Wdy2uB7VjWvr2",
  "key2": "539Shnr4veCs6GD2sXLo2ZdngLvi1eGsy9GmZ4ZvaxUcR17DuWVUPiLH3AbeAGrH5qRS5SumN4YdiHRRPpW1PrQP",
  "key3": "24YJyHPeptGJZN9jGWAmcpStoPeALx8kZ7WsZ9CEu9dhLSbNPacUbC9mSQVLpmFHNcTCYUjBHxieDsfwFmdTvETj",
  "key4": "2QWD2BHyMbLLHjECKN3iPqrqsniGMMwLQA8jJrAoYpjm28KdStB6PD3Kybe2Q65Caot3PuCPEsXjrBLMpTCiPLv8",
  "key5": "2SoE8UpRiXYTWHmSq7AFnpL75h2Cy9EaZ6st65Lmd1kcavCSCPhjUeiPiMTZ1ZVtV14wvk53jyT2UR339L4c8gxn",
  "key6": "33MbwUa1P9HVriq3WkJVbJmbgWDramtGYMFF3jGK1ec6WPrzW6f5gNB1wVLg4d85Zs1U5UNorTjyvNrHy7A2UGsi",
  "key7": "3wVhuzGGSMhxaF7WL7cXhqKL3L88XUfU4LzLxCLmXddjv7HHkbcsmww25F8JGXY8EF5rCCijzLWSMc5BF8KCJ2hA",
  "key8": "2DTriig7BYZrsY1Zw1k9Z3wzHYTSMGncDiiLsj52qqepEVBwgsujP8gCBdUvvKeYZDidqDVaSq2QqkBhbxcwCMQV",
  "key9": "4j3geM7PCpMCfmVSTwvUf6TZ6ZzfTMApyjvFVUs1nuN45impanp7VLKeDCofs5VTTqREELneKvvTw9VsiigNFB2Z",
  "key10": "J5mggpptUWbkTqFNYG1esKCGFiFDfNXeNsBF9qd47yJTmyM9qZCkqSfQ8gvAivGcnx1hyPd977YtazyeMzNni67",
  "key11": "49zCK9EmkCpQbTbr64UuA5BVToRynFaBVHbTuxtTo66TTLBjpj6CEG4fV8skyfw34WJdXzoyhhpuvY9VUon5qkWs",
  "key12": "56LkqzxsVUSTh9wx8hEPG92cq9tMsZaaRmQnWQbtbRSCbQ8SiZc3WmWNDXf16vuRyN4KmqJruBKdwdMWHrbvYzhZ",
  "key13": "4H43X2QvmATN1RtCVquBS1fnja7WP3dQnVPAzNBPC6X1z5vJ269M632YempdGi6YvZ46QFP8iWNRexiuk2Th1xun",
  "key14": "5hNtr2mEV4gdmQDG8ej1s5nP3sZmddBKTwDYZhs5kv1y5hCSZZQRWsb5QXgKSd7jnBqVkhTwiZ433v2Lobmr6LDu",
  "key15": "4LQF2DpJH7XJpfsFFCkF9iA9MbKvRS9UMqxxKcdVf7NMgxKy8UbgRhkE7Fx9DU8ZyLJcL7vH2JZ7nHERkVNR3uDE",
  "key16": "2qo7vLP4NVL2ngn2rrLMNMjqbi6Z2yX5MHAymKLsqonHZ7VzFRLVKjDsB1pBtuR2BqMHZzXhwbH5NdJBfyefkAUr",
  "key17": "4T6Js6FBuCSyLNjXQgae2JKP4aew1t3H5dbR8uTzzXwzqqD6KdBN8x3Y9qir7ChT5wKbVDQXPUzLTVjynvXRFWua",
  "key18": "3vnefFXMhGnQbHXAbrSSS8z6iKfqo1qK6ktN2LmQ6QtKz5sKLntgHzQ1N8BbUJJek9CbqEvvReRQ2Xirbm2ijvPr",
  "key19": "2F9q5dts7BZtW8zVTjMkCLQ6YhQorYcGHX6Gzh1Am1zPqmEnc7FoDnc4s8oCznJPSzdUAd9c1EMh4NbLpDu8ukEC",
  "key20": "66fp5T8oHZMcGmn6DFuNZVGVS6ibxkrpDcQf9PodSyuMpGeS1NThd96isdGv6zqLhqvNaHrDxyhEwMS8rRuGv5aH",
  "key21": "xUe7gEBaS4CkkQVrbQPsXacFZRQKXS11mdLeJ17c1f9LwyfEDPJHoMHya9JGWLL7YFeqsNFusMTbHc2ptpiT8wQ",
  "key22": "2n9RrcracEDuumkeuEMrARcG9YikMiFGVEQ4TGqwDTc2CZk7F4piY8kRQWGQY97zMQ7Puk4muk2nJEktwhXRB9fS",
  "key23": "YJPpi2zuyhJZwAjL6ahXaWBRjcEd5ixh3A3xgdpJrUZ8DbQkRUdV2pVvvsQU1VnpKfMfbHREH8szNRC7qdcMXnM",
  "key24": "3WpQ1aQ1hqJGiaq5fNFFipPn86ktMtNDQH2qk4JDyrCudbcAaa7U3VjRNc1hSNVaH8s9EJW9Kd4eYNvpyE89gQ8V"
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
