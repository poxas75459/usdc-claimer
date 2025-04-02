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
    "2Zar3kwJWQnJnpP5kCABmDsDGb6EaM7nYh4wn8Vgovm1zRiTYbyScDVJJftqN2yb6Goxg7UYiiwtBvkMBvkFQi83"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zk2geZk4NnTPh6HUxCnoQmhrY55LMMbgstRpXUFfqH5ePMUpm7trir9L3A5HeYmreqWWBny44egwHgFAr5PHXuh",
  "key1": "3wYxvLfxvzEg1S8XuAYGtkdDQ4mf9wYgiPvTMKX82Z88p1TtNwggfs1UmE4VnxSaaBjcagwoJYooxRrAWPr9g1yX",
  "key2": "2Vzt1rQE12h5mvfznoLyWmY4VHr4FzcAbCZLgYdm9xdJBtqSYgzoCebXpet8LhcpV8nPPAEFPyF9sM23UDJvKVwN",
  "key3": "4m2fbNDwyhEumUeTRTz3gDtwL5BtgEGxoHpbhJyW2oVChWbquNJjpz4JD2HJP5BtT673fDar6p35ktcg5qvCCMbi",
  "key4": "2RMvUVZ3KEJc4hdJi1Qc91wVPPN5GQk14nodtTM8EBFTWECSVckThowB3qfdqnvGDpFC4D6KuymnZPrYP7ede2U4",
  "key5": "4Mpim6YjBQ2hfpM3imJ5aAoFV1Q25wLvdPfg3EYp9kaWCXohDoViZYFVGCjpdC4yb6Z3x6NswBe9TbU8wsvy7661",
  "key6": "45PLki4dJKPHp4TFyF1niGJB2334K1mqo2543FrCgzrjPzUfFnggk4Q5fsDUtCt9CY4Te8DK3PmsHeKiyYjjmdxs",
  "key7": "3TGFocKYbJMx5Jn4AV7haDAb3RgSXVJkAUqzMh5mh3qWdyKXEbw7Qru5DYrxv4G9F3nzUZ2fcWCrh24t4K3Xx8Xo",
  "key8": "4NRwVygEAUtShenteXyWJwxKGbMRtN5Jj9y7ZKioXAy2Uk3LVMG7G6AsLJyZ2V6xHAWJfvVFgsg9iviS28yJejgA",
  "key9": "2gKrc4fy1CVdu8TehfDuYXfuPK26wc3MHtZEAKHFympmzJrw86zFgLuWqwAgkz2UuL2pUURKcdRTRZWZ15oxWi19",
  "key10": "44e5qhHcF27LtGNefNaUQSPuigJ9HQMiZmrgSYPoeq2bnFeD3Kg8bwqkt1qtUdNrXcDpqZ2hxRAf8EQTWvkphY7V",
  "key11": "5By6UREm3de8FceA45dJdGpspSSsKvUR52ErcPHLRREqfgyujmiNzGDo12aszAFu8C9W1jg5HyFzrgDYJpLsD2Z9",
  "key12": "4YpNebALEbiWD2A1W6rPzV7oRLv5Xke2Huyf3kKCHtWEURAt43f9cHtuqTiXEbz4yQ5SAxQwc2xYn764bWmTS7Nt",
  "key13": "4Wpmdt5pM1iTh2BRTHPGebQm8WZQ163RF9RTzdhRHAyXwQcsaCpvYWwCd64V4uoUUom2nJCD1KEmkRjzkqN17j3N",
  "key14": "4QEDH6TtShNmWMTypPyaE6r4yVeSJ6FwoZbangDCwkDXBuHicREGkcJExW2u1M77E8pD2cpxWQQ4JnjmKkdhovLD",
  "key15": "5LKVERuHYh5EQgk7XEZrnuPj4C7uTGCBfgxTgnEsJNWXjhY9Q5H5FhUE88TxbcK9zvGpkuZeSmq2z84saiK637aD",
  "key16": "5xHQwCf6BVwa9MQRkBmz8fCtxcU66dYnuhoyfqr56QvbjsepUPpi2TsgM7aAfYupQ2qtXduXdQtS49Jb6ZKScxqU",
  "key17": "5twcj9FVzxkLw3zpQoygjiVN6vFT3A8d1ParL1KhNH9QVFPTeBcUVzS6qFwQyhQcsqrK8C1m98HZQn14FtF9Wy6w",
  "key18": "XbCk7XWeUNpVd94gm7maZPvQBsufiDyhDofWcHGdKVyWhCRm8Ryj5w56uJa4MXRUdJcZ27ZJUeb7nj6eGmSbA7D",
  "key19": "3AboVfwKxQuE7Mpn5jLQq8yjhvtUGRstLseXLEZYqegUud1QwBdt7tjfDuVLAUEsNSMo1JTAAgFFuYpw87UB3qWv",
  "key20": "jdkRq4cKTZAKprrvN55ZbqpqRtVmSnS94jiYjKXSmS8jfLETZN83XDfr17KyZcRtmbUhb3rkbW4YKpVhbTLrTzv",
  "key21": "4nYwY8W3n8ThaEna9iyE3yCLMEYSB9DfUmW2sjLhSMm3mPKMJDEgHkLZkGBKzM393i4ze3sLm9SnEGtQiAPyhH8X",
  "key22": "2PRpj9bZrHs9Hk1z1MhNvmc9uu94G5uZmSwm9YPkzJ8WjNRFiK8vvu99AagY1YdsdjEnJ2a4ySYhuVobyVgCofSY",
  "key23": "4tzX5pSXPDVQwgiSaw8cz5GpQccR3iMJyw5EmDxrMACJm6XkaoUeqWy8QJXyKvK2Be2XvnPYBJQeSfqhWcxBei6X",
  "key24": "3Mf2XZcP3s23rkZ2CsqFE2aJavvXygWu3jHUjuX4K9XuyEE3HBjtNrPkFEbxfukJXd1ReaquDvXNDupo5bVHtYMM",
  "key25": "k7NYs68WYEiz7Wyajz3vCdf5r4a49N3hx3FbzQ8sqcdYNNtCfQ8qpCNrYvfe33XCtajJfGFFK6g5Vq17428YZfW"
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
