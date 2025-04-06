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
    "5XuBRxtL2WVweBVa4aYVZoKWwRy9uxCKUrYW8mKuu5virYvRMbWC3xq7xQfmCigrp6RhAPgaXyApw5hZbahcob2R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HrBbFEgaCtdkJs3f5XWNt8Hd5mLfXkeoX9T71ncJtTBa9bCm3M4yw2cuABFHaYiJVHC82gDim6nirZqhE3xG3e9",
  "key1": "Yea2i82F4cr6dowRM3X6z72HxAMMXtE3A2uFNAZwW4rA1X7yyajtj4XtPTjSCEqXv9P3ZKeFnAmnsac4zfUATnA",
  "key2": "2miSWbuJtAWAuQRKdTKFAPGdgxdw6no2zx3kDkDAxxNQHFZZvQ6w5Anppw82RyFyyZudPVEiadXGJMtfKPhTdoUC",
  "key3": "4Ng1dioxbracL2JnNsCc3r2UTEhAo58TQ7kzAUTsgThbPZrVVVGV5twRWcr28XUxkfr6HnTj4gYLK4WsAow6jiRh",
  "key4": "4LBSKvrgUgwYEdcDA5BLEazSRZZDofSQd9HrNFYYfUdD3kUWEUggVoCEGHVGLnD6uqoY9d7Kd2mGqFzcufS7Rhwa",
  "key5": "5Vte2TbjqzdxcQqLCeZoueGSqYeh8LTWRKBWKbfZksFpB12qvzSWHdjo9bJmXm5BtNPzNa66GoUidaKHpqQELmhs",
  "key6": "k5dMri1E5kgFs7a1nRRF1Pcm857Tw7uuecaPneR9UcpoQEU55FYBJeCcGKKbJNJc8SqRHMKW1FNo9tpQ8TNyAsL",
  "key7": "4h8fybbyfRUx1RhfcsHhKFxfRAjSCKac2Pu7qXmLpEMzD6m6Ea7irxp4YFm7khTbJauJBomxAtTCaiYhrmJrXMbK",
  "key8": "cuhLYnYcqj6CMhcHKiK9FqeaS8yJ4Cz787eNqRH9mStKUnWEvcRsY6ngytaCiAoHrUgk8orcLnmeLFti7DD33nX",
  "key9": "2HpqPZrXsA7uKE3HLN3RdZLiJQDagVooy9sfHHrTFPX7tQ1DZmAUuShxGSBbV2ka6LPy12gLMyU42J8vBoGAUvfL",
  "key10": "8yhQ4aafXdw6MoFncfo7VzuGijGcqKTE2HhseRveYqidQ5PRRTGe859Jj3wHEYbN12GfWgh6GEBUf6sTvJcWXUH",
  "key11": "2wkLBTAuyqyxQTihaNhvsXoC29bkqUG8UoDuMrAvuV8uDnWNpuByaofdLUXWtmb4YAx9goPeVxTHH5TzAQkYxtQB",
  "key12": "3aMAsLMVbgGzmeR6zLhZ6Bk1buLzSda9SvrtUqQeVcEEEprxkwve7fMijMowDAz8HBEr14LpoqFzbVA31RMXfgyq",
  "key13": "4CNR5Kg5LK1h6fq3cM44XRMp1gxCVa2xHt6NXMV9YgDW5MFr34LKroY7ioQKwSGaA5ou1FRqTbusSV1tT4wLibvV",
  "key14": "5K3oETyhjdQ1FRnjBYfAchgtiWvNGNkYMkqLpKWqx29TfeNsgZ1hb1zPKH9e7xW6AzuQzGvXzc8ZgF8np9NJfXeb",
  "key15": "PctKrXUDAaSPfwFTB7JvsVgo3tz8QVGwy276LH2p6Frv4y6kJvMMPpK9AfUWgt2cMnPwuFFjnKynC3mhuRhAMZP",
  "key16": "u3TTEroz8Myn93k97dmJzmMN3HqtiiKa7mhH3txgm12ijek6rHtP6kmYuypS96bP6YMSjJd6jAb5Nwjx1jSQCGn",
  "key17": "2E9xGHw1ShmKBdB4ptgk9wYzxcp8KGGn9z39yQ8xJmRgrWPfx2pFZXmxvfh8H33Gx55bayiDYm3Tp1YY6A1dDL2j",
  "key18": "4ZUTpWuwph41GVQY7Mzz1hrm95KTHv5wxPz51sAjCXoNCzCt8PcGhxUFtjXfTYG83yuRgHoMnVbcRjBsFRHGcrof",
  "key19": "ZLTGAK1cRmJJYc1mvgasMqoyxqA5Hnv25Yzjehqgyxs5CE6C95fy72RUFXeKxSsKAcYxpHvuTYpMNs9f1tNyT4f",
  "key20": "3Wk654ds4rHdkPQ96Ffd5q8vSj21Gbb1qo8y1x2BZJ6cYdtAbThVZR6vAKgvLRBLT9PQmFwuE3zVq5o4wkpGR8g5",
  "key21": "3taKtNgaMTDBKRuL28hRGEB8cHHsmA5gKVcurSQEufCjz1UEvEgjhnJfH4usGrxfcpgLokcm2H29ZyhKLFjX61NU",
  "key22": "29vDS57jiVr3LbYaeUaFCEHrnDkNX8x2oKkqzpufHmYB38vA9CU6SGhhwXaXtWoyj5ccy2Zwnc59yPqwQnLopakX",
  "key23": "4bc8iEwdCKKni9AiqqxoJmzapy92M4ncbvgpKcntFJhQh6b8F9m2EkCMCqqey4bgsXr8tNtuxrJWh2duCzhxSrbo",
  "key24": "5HSmHWRQkyCA2UsrmJDwFxnfmh6z9Ayb3qpbScJiTbcGq5hp9zqrcVsHtaQAzCcwnhHXS3DkouTDCrkeq1Sat2yh",
  "key25": "2hL2o36rmKZha6qTUMgrBb9GZSRqtw2CDhKZ1VmQmZKisKVxRwjc7ZT5ot85BRgVyaj5i8fyG5w8553RJ1cHRhgj",
  "key26": "3d2NaQ84JVy55xoL5AjztEP4UsRWDoBtxs1MGnbpGuSp9aVGFrcUrqHwKtRxFEJHJzMompP2M7FAUmtgUBeHfwz1"
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
