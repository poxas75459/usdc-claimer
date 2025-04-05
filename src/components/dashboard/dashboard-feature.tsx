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
    "2dnnPZzRcvXZQrpTDt8qgfxyui3QFhT5d11dmHqvZ4vk9dfPhqc8Ap9ZNosqk6gafLG8RbwHXg1hHXmwuNaLKnt6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49fpKytgzyGjC49yiFsp6MvTpQ57ekfYRCR8P1LztmmMXaY4isuuH1ojej3Jo2H3TVuWYUrybZmvRexCv1TS99BU",
  "key1": "27EfBDtcqtQ9Rv9TeUez34kEnXPkEv8eUYTb9ge1q9gRiQpHrKXESLNPHTMnvY1MoQbZHPq6RY9WXSGSheVWnhYv",
  "key2": "3hgT1p9VQ5oinJRzuKE6xMd5um92M4C8XrywHqxXUvavn4WLCRFQ8CxZVCWcDWWhRFc4tyZNHkD7xBY27WrL4cgt",
  "key3": "3fBKhcd23j2dyhkSnBrkL2ftXU84CXugtRXj3oruvjjn4VaY7V5M6J3afFUrNCvLxfRTF5x6wj2goYdFSdyGkzQm",
  "key4": "3AaaQa2Jdw8kQAZ6i5QeCv4jW5EC4vft5wfRCgGJRQuoR8M5eroBoQQWfZKE98owCqfLGqMcGt8mJXf5g2CzxoFG",
  "key5": "5SDygEX17SD3RYs4Dx6hDrLq2DHL9CLm9KMstikuWQhbDe89xqcp8PuCcSEFhWmc8TUsEUKtcCTLHbnSj8bdnjo8",
  "key6": "4rZVNQVwbRrkXtMwxQbg92vr1pNPQ5u4KUuS32g6zH5vVCvuVghfuRiwvwUUQyZ4KQ7qv1TdxPGFPVWMWyLMU49s",
  "key7": "5eBSEJAZezkptniHmFPkdmGG9eUdQm6JnrzMpnkasrk2VhtNY9oJa9N8AJr6MT39E8SKCCuaxEKcp4hCwPcLSVnd",
  "key8": "3MyLybB1h3mfLpaNJ8r8sEBz4GFuTD41Qr3Z5S22f2FnWZpxpsDs8Mt6MzzcavXFsQbJ7pkdFScKztJTpQZBcJ25",
  "key9": "4kWQyBWm3bCDcJ98j67dQ1c1QQk2pr6mC7aGVu2mrqdhunAhsCyedVYCv7jSBjqp4PBqbzyPEc5nRR1iYxeCgXy5",
  "key10": "H1pYF1JKdAeuc1SZw5cvdWPsAQnNNiLuH3fHfRB6Reu2BAZdrerY2UQhAEjvdUSYPubTdmauT1BKZvsGtQvdvup",
  "key11": "g5VfS2XbJT6nM86B6Uxzxh4QvgmnRh5zgjEXx64TAYtgVBW64m6Jt2ZQG6aFvzR6XHsWbgVbGWEfMGucrMXdTcS",
  "key12": "5AwjFwGDSYMX4qfv6QkkRVk6ufYXfKyrugSDBMNY94qjB4X6cKwihifwrFA45JGmmNrH5mhuQsTwpPFNL9dpZLDr",
  "key13": "3gNDpyMkxfGVhTbUEzxbAkv9eqo1Nm16if3A7ZnB1ydpNURXU3oNMrego8DN9N6ccHd8yq33svs4TQsxuKDXqAJW",
  "key14": "3t9P2TRzWsbEgznRf6Pt6wo6nsZgfDkfNyrM6dz1yE4BTbcifXrwSHoqXiiRucPCuV348rs4s7GKop39igqGot2n",
  "key15": "3GNKfUATuXe1tnHG9bmXY1a4ERmn5VKcpHfGEBPC9QDz3a2C7WPgqCMZgmPw3tyqQvStUb2KTYaHcVchGKngccrZ",
  "key16": "2SN8S3p6rhZyRDZEPw6PupaLirLMFhfLumBumC3YRZT6zr9f3eyyPxXgfgLkzrjTeFzHmpcu5dsrBw1tJNwhaL7k",
  "key17": "NaKXCBLeb2vEfnpwLvbcVkBUc7Sfab16ze8QWqsYzbB48hxQ2fR7vwmSQfAfB9AJNxoE1jm2TfBEVPXYDs3ZaaJ",
  "key18": "2SH4Bwbg4Zjbx6Yebgz2CMLfuPcXF7GMJpyTc11GqLVHN9DD1izf7nJNWnuLhNP1hsk54ZKwKVseBxq5WgvHetYu",
  "key19": "v3om3xwTRN3vBCvS2PUKSECtQqCe7skj2RVtw9ws5fXZvY7AsibkxXuV4yfG975dVUUpyAfXx5DkGHf1CZYjtSp",
  "key20": "52SFyj5Tqdh85Dzn754kn8bjtq9tkZF77g7JzVwFnZwdYdbNa7WiDmvCFjBWA6yBDgqmLaaHuYGfPkAFdKV9MeWN",
  "key21": "2rBqk7WfMPTevNKtbQskZSz7PD8eVqpCDKwucNPVtUJbQy9kgMCZvNMLkoj3dQcjz7xoE1WDr8wj8v4KRJUT41Xc",
  "key22": "5JYnXEHMsyjFfiKeryciYw6mV3gNirH3r9eTDGzwQtLDv2Zt8eZ3Qsvo9NycyQXX5cDXmG2yFN2D1jfCLieHbKWv",
  "key23": "3j4rUEg536rNmNVA7DQdCgftYdNuiyF2YbbmmbAtC4iwKo31ikrz6dSXC6VqqbvjBd6wkbZydZSmUJjGPkUbYuLm",
  "key24": "2uVmRMKrkSALmHWnhM2oGB3KGvapFrWfCxdEoPfCAa3R6QBipaw92mQYr3GrhSx8aCBt5g6SSr94y57CcwnMXLsT",
  "key25": "2N9hPTWtLCUSWSCAC4qLAh1uxSF8Xoq4XEu2a6QzNjT7RetdynCViTUhvj1AAEEP1wvtPiafHSUc4JGerCuG9TZY",
  "key26": "5ZfGaFfHN511sRCEcyYAhBHBvEcaTCbJnGghMnboZHJ1wPq5bSEqyx87BKjMmXtU7AynRVPdkYACV4t9dQeyWpos",
  "key27": "2FUbSpHB9oFKvDFLH5Gnsyp4vDpEQzF5RYsJrTrYxt2HiN7XL6BWU1ZACkQbZ12eeHZCWYRzWHxDVywciZbcqr8w",
  "key28": "tUmP5Ck4NkGVpCUBbp4CjP674Na7kvWRtGAjwX2aFdj5tXHRyqaJESBLrEDDCndXSDj2BcXgwQmBEkkkUKdrZDx",
  "key29": "2ExzRgyNXHPue7Rz6AVKYdPvMeteUovPjLepoY7tbQAot45JBermoC3PVFXWkUYXhbyoWNcRnorCSmVWqJ58WLsY",
  "key30": "5xHSgKK3GhAZ9JFbzjA5GnoSTzdrSBDyPF9yxqaDe1Z2e7h4EmX1GohDKRQfGpFjniihQqV4fVY5nh91xHuuhf8b",
  "key31": "2VpLBW3W3LU4hC2W4uHftP4C3DAfMbJqmoaHWAezsAihkqV65rpWB6nhEQGxvc6yGCtQLBwgnzzhXJtXhFXRC2Pc",
  "key32": "4Zod2sDajJWAe1ndNDv4QLAq4NJP2A6YQa9HhG5pzmiB3WDqAyw11xM2h32HcN6BqvPnhQVnLQqbtj3n2fLmkefm",
  "key33": "35A3DsbBuSdPeM4KLMQHgjze7FWvksYfc9sYW2oEWDHqNjsTfYxs7d3KrNLiDVH9z54Q2bjgyZPnKK3ZRtcuL4zN",
  "key34": "55f52MUm4S5So9CDxSRnNK3JRbRp9Rc4zThNyF82DBnHGM6y6CChAQcfcRbtyzfQfvmziKehLu3bbmCk1QkJgxpS"
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
