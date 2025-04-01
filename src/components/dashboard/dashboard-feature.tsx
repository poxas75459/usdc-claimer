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
    "4dDPVHwsvLvyjULQRJL44qKL9JsWUUBSUeYyobg1P4jc9Uk3TFv1VmeQtekM4UK2ybnW94J9ZWWmSSSUVAsd7MR8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wkAWWt7rLJhpjfoyKm4pnZhRViDRsdqDUw2bGqS31KuzbA4inc1MJNsQk8VPcrUwRtGLKZRjoXvMkA5fH2snDRg",
  "key1": "2VnVtXcZNuop4knV32SJ7PwFsRfw3i1dqyR2czUVwzykYXu6yTCDmefFGbQ2TrhqkwDzwCdTJCgTAxEvaANZT7sM",
  "key2": "5Q7n1miAL8AcYQqUnzyZmJY4oZHXLFKH1Dph5tXpYdtm939mLd9HY6gF1aLVGL6fvQX5tyYgugfTsse1tbsDmKZb",
  "key3": "4o8tw6VNMEiYu4sYDPCWRxymFLcFgrxNCUm6UFNGQPYeg89yiUFR6vweWX18gPHg7q2X6t6aZwXCjtahBPFv7EhJ",
  "key4": "3Pp2UxjJaYjtxLkZMwQ8Mb6nxDTgBEJTMWvizL7BUmbYpYAxUgf4RUqvf2vCEU333iXiX1q6bYzSauctYh6Bfp7R",
  "key5": "ByDXJvSoQpDGBWeN2iqxEZn4MaQDLhBfgQyJUtRMcKTpZHyqeaTEnSnxPYmTrs2oZ1QWq5k2YLwWkJHA92sthQt",
  "key6": "2WgSqQDcJ82kj4b6NPcnmHQLRTjtGdBojnajhM2ePoBGNZ7Y9DMCLcs4xgdCWPu7KkGApEwCsPVBhXHFWS5sF54p",
  "key7": "8sAyNHuhZJEbowVaynAyLEjrUXojSoLxHKmV6okVqS5kaGPpcmZFcgkEZdFvAL8bVoqFRKuNg4tNwjKN631vF1h",
  "key8": "2rHPj4xKXXDLMUXsAS1MoT54CUWoX4AvS8p7YBbJz9SufehCE16nJ1PS95QznTKuTgBaGSSNPA3f8c74TyD1D6t3",
  "key9": "24D2rktiBYqDJTpvmF4gTrxyaeW2ddGJRMY28Rj2vm3q8mGhXfY6x7iqSoBm3o6aMAy55GGkr62kLYA5623mMbPF",
  "key10": "3AWEtJKutLGxYyuPJdbcbUz8WF3bLuKZtucpthvTNe2ZG9zHDEac7FFwSV8AhZo4JqSNphuH6KcsenwxYZfkLR58",
  "key11": "4UNrpxHrY34hxRRnrPQ1oPLfXY12tAwrCyQoHA632Hw5QWoeVmczwuvn7U4b28Pmo5pMF3UVtMrMhV8FbGGLctpr",
  "key12": "2vUfUN6itUgKZajW5zeGVmQuRDWUAf91Rcp669tG2BEeUFWwHMtNR2gbjKF2xEvtGGJAAayK2bbMXGtett1QbGSk",
  "key13": "YM6idsrgvBiDxsc1N1aM1DBjD755m1rRKCoFSe2q1V8RTzPkiEAeZZKVZUdajGwse8b4uUdEV8cK4WZ2oW5iQxJ",
  "key14": "5yQsfzCZxrUgNMUgVEanVxpckw1SDRPvGkv2da5LoRCh785WHudqXtptd7k5ngSeU5SBEsyaeGnGrrnH4TLuxhrJ",
  "key15": "5HHcQXWMCfRPio87dbFj32uuisrvTr92axzVKPtJ7GxHep8kh1px1TPV2hPpRviEPcqbmJn8jP1u3xfrQPHmwJ93",
  "key16": "4v6ZnCUmNQxAT4YQTppiU4hjTGdv2T4SnUpDyGW2WK2p5LBKxUkZ4gyxMnwkBPBfk6tvJAy2fwA1BLo1FyY2C6oR",
  "key17": "4pPD5mERmDH9ZdSBRZbn4vys7gE6eGduHgo3fPkJBDSCemKPWSraTw4XWWd3zQ7rDfS3f4pk64DDNdLWDUYpzxTo",
  "key18": "65M7aMo1AarGtKw3ALKNuN1ik7CMaLMd7Mo5iNDjE2BXb5CvyjTDTwz39HotULC76UTH3uq6xApk9TZiXJF7qeUh",
  "key19": "395UNZ2Q3uGNyvdxL4zo47Ud8vAn51hVxpzKWnR7ReDQMbiSt9ubTwGp6hKG3kzo16DQ1JEvKpntuEXnFtuV2Tgh",
  "key20": "5yS65YfkvsnQ7NSTUPKEd8Z94CGSTiNgGF4zaYnrweYCW3NSjWrGxaskBNmEjKhmUzjHX17qP3WtVpLYMZcHXjiT",
  "key21": "hHQUx8fqPQQf26pYavP5w451bPRMc1797FFzoUyY5GTsdp2xVAtKEBdgyVpWcGqXuEETyxxSbV9woxfJ33V2N2F",
  "key22": "3QKFf8VPSvWkrzD4GS3mzNZzZSYDLY3TUUWcPEuEpLZyev8UFhxi4x5vG1na61ZEqmwfn3i1iJfwjsMY3HDdd55w",
  "key23": "3g4QSjo7yftcUZ3yvLgXgYuMauSXg9cbXAcniUCkcSsZtBS9ZmW1bA27TMwWpBrTQ42GTSbp9kvEX7ZBPxLPMkPY",
  "key24": "3LGMyCkHCWM71xA4MQ5NKsoThaoqn9JUYh3Ve5u8d9Sfsf2gsGW9734ft2ogiV2RK6wirvfGVfBkicLBMreNp7Bi",
  "key25": "5QQPg4j4gjSpCDhNQxduQavcvgwi98SSBBa6E4CxY837xP7VioZxNrVgpqC1ZqLf4oiXWjpYkFiY62wUuaUMPK9y",
  "key26": "2QgqC9a4LhSBn2ZNNEMiDXWz8QTb9CwTejtWkrmMDaBnr9duJAJq6G6AVDbEA7SdZ8rgjDR1x5ocwrbp4ZE5Z7LX"
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
