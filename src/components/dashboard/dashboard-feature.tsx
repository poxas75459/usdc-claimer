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
    "41kf7XVHsm5U9BZTmwCuN1tvQz4ZrVJcPjcTsSBjP2JP8uAZbUcuYZgvzotk9b1bcuAQqak58VD8Uh8DTbrdXvi3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wBqzHbLsVtYg9YsXd87iGZ8MqU7xGgHSFfiMsMZShNsjyu6DJs8jLf4QcLcK6tKrLxtiH5GvuXvk1q2AudSmxds",
  "key1": "4ZaaXmoUi3hPa51VCgdfWHNjHrXq8QzjKcdG9KnSxYCjJLSQSWeuzCBvGbZnNSL5QRXAA3mw2XrKjXPHMXQB62ZU",
  "key2": "4Pny6Rn2RarJTQYmuQcg5zNbJaZjfQmR52RhYKKfTc6Egz9EDb5oFxWevavhSvpEottieQ9Yx731KfTfJ2anfvEj",
  "key3": "5wSDaLC1azWaPerg468H5gyWJumaGkUvdaUVJBzs4Yz66HqVnKVQvidvfBiUQQV38R15D3qqPUHyxAxuADXAWMMZ",
  "key4": "5VS8JngyxKYRMxzA4RGrUEKt8XKxxgXWFP4mWpjKrvD2LUfSvWqVW1t8pwuBFsBvGguqyHwVvcP1YpjYmrmy3HKf",
  "key5": "4kn8a72mNMyTWVbNxzHY9sWcpX3xms3fKCAWfZGuvGqUnuzsKdwcmBqWyaue5cmL5muuCVYoshUxHTcp9DyVJ6ZW",
  "key6": "3U9eaToXn6BE3ua23cdvmiyKTsDJT7MLVar6bsx1WsHCenGmwLyweb7Rk1gyi5wWiuU5f7kXBvg8i1hvZwiD9Xyi",
  "key7": "2AV27yBfSiQWnPSsZE6CDCWAtgtAtkUpDszG5TZVUiW8FbJnZ8DdJKHpMv5xiem7Ur4aRK5bz2Cu8gpPxmB7oPdc",
  "key8": "5SBURb8W14rJus4DChwopHtsmrXxLRveM8FDsMz9x4d9qCBjgQ829gfnhwCa3s8WQHLP2vgWutYyVEFk94vqQ7JT",
  "key9": "JghaubJfNkjkXmzKn2YpfRJUCYhjujzqom5aEdME1UjZUwferASe4khq95GmKqCSL6ghaZS1gT78bixYNrqnYNP",
  "key10": "4H87N5ZdXmdA4KDnMpiCvGRmF9fSZKWQCkQk2uTuCTjChQeoPoEJbfS3J8rWYeXEqsj7oS5tjqg2nnXVx6jCjLMm",
  "key11": "5bsS7W95CS4UeZm5ek4A228DaSmb5bma4Y6YZL2qDb8pEExzwWCKRVMTRQ2sSLnVZSf1Lrp7J5vgBLnSGuzi5g7T",
  "key12": "66uNU4HY8BgwVBXJkfSrGGpZPmUn51QzyhVXuapqN19nzvMNyiu2coc2xtic22DxTBhbEnzUmyqMrtXXFLmu3nkg",
  "key13": "5ivWB1UtQSoabDEd57ZzuPUEnQT4xBit2HvK4QnNLsQhBFSb4qcsjNNG3gVuyj6Jm7u5cvxuS4gJRViU6BxqVKLz",
  "key14": "123vcwB4NtDdp5wbAx8QBz6d5gSo1cXtDaZZCUpb35Laezy7TpJfHYCP14uhB7vejr3QNLSpJcXB2DP9RHkLwoiT",
  "key15": "5kS4VvkwK4qRpytDuDMf7f3EMYmJ5YtbTvhsd9XPvnFmBzMHLdXtqfjJXe1CJnNDc47Gf6w6e3d4NcgZxkoSuFbR",
  "key16": "5YMSSxHfvTL9MsMDwfAJKpNiBDKwStwFG4jh9CJpbvMEGofoGFcRuBs6kYYboD3534eaKYVSYvvQAFg7WXAwcZMc",
  "key17": "SrcBHoChepNUBG7VadeDqdkxdGUY4GpJ2vzAGz8DsejN5rprFmgo82xnjJFuPTSFyHm6oD5KuYoYyQ56iDWi5oY",
  "key18": "5RUqbw8fdkJiXRoMPrUTbc3nxrrRGHn2vJsEZYDwTyY6VGNVT862MBCzXp94fqVh8kEGMCwADyEnA8xgXVQnC97f",
  "key19": "5EMuzRY4bTK9Ry721SwSsWwECcv5HbKwtT4dbcdoCJgaMuTh32JZzV2z4c8xbdFNn6VfwaejypapCTxdrDEZ2ZUc",
  "key20": "3ksmVbuHrhTezveN7HEB1JZTVBcPjni4XH9HBC9c3LGUnwAaEN61P32riE3mkinj5MgBUDWXikxx2kCWfXFX2HMV",
  "key21": "4FzNzbVtab44fDat7fy9ssR17PmNJi5pp1ad1mpSGb4HTVjt9V2DG3HhNmfiTKiTA2vekRon2MoxZPNeu14MGa2d",
  "key22": "2CA5CsjqzcYLCfA7NpbvQqmaxiasNhLKNLommWhVRGGn9ybGe1JV2aH8CzM8c5ab1MeS81WeydiPWm6oeiAqHjVY",
  "key23": "2NNfakCv2s28YpeHdHBLztZ3PMoYoz487K35odup1zk2dWVPzHRvdsQg5gRBLkt42oSfD4i7oKrtm7DHJMpcijS4",
  "key24": "affzSZnxxiuX6K2WHsRYySyFNzguaiTnWQctJivey7kWCi9KrHvoyC4KktjneQXEGnQs7xvWdjU1efjBGyZASpL"
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
