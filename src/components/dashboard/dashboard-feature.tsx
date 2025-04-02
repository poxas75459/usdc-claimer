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
    "66RzLBmMiMV5WkdNzXkSPc3yC9vsjTCHywcywmwtGKi3HVa7j9RNJnXTy14KzAiexgpZGqDuPzu6h6JKbzy99GAk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qgbt4kTyikgB7m4fTUAKPMDHVF1Agj1XXKtZtn652fEC734vAqWwywaNTqXzaQ9qWzm93HPGGdATxD8Pp4NPex5",
  "key1": "3eJk8PCzFBefZf4GRNANjpJq53wZU6xmSLdn8ZVSRnugk2aKwyMYbqSoTrPirscTVnGReXJQDQxTVnnF93uDjENM",
  "key2": "yJmkfJiMrsbDuzpixm84s6Wj8uoXy17Hy5QnxpusxC3x6c3Q1SperBNeoSY9aacdHtgfSfBaB1ApqKDduzUwSd8",
  "key3": "5RwviCDMwk3HMrVJjeGFRoSMsJZmoNE2iu6jFXRS5SfibyykSao356f7pJHTkBrwNzvmzdxTryutR3JgDUzk1YAg",
  "key4": "3TNkEpeMARo5Rvw6DLJQroxkpowNgg8GBzknMh1AXtwu32B1N2fBYYmEnrrCMvFn2LqA5MzUpuSHuxg4PWgGbBy6",
  "key5": "3qZPdgCRKd5q9cd3WjZx5B49DJ3BYwF6NbsZUSuVNwwrg8c5AkMgJb9Pz7ci9oGKp4AqVgUBW9Sqyimv2UoZ9wFe",
  "key6": "4tXmRaKzusNqsWHsCSBg5U3itWYmjc8B7sHZjrCqmKD8KRKo1aTePXuihNHFxnYCuuU1vf6qR9pC1bYcpwqpY2Dz",
  "key7": "27JJApHCGepYUgyuRPKzwamwU9mumekEwWG4KL2LTXm4ESM3xsTzXNE9CsQ1myV68ye864uCZjmQJ2YamJdWVfma",
  "key8": "2G4eoXiw8ocu45735n8MH3oz5TqgnreNZszuYH2WEGV1pcCWHhGzi5fEHSFB7uKoTyyDrCFvvSDY7A1KYH9j5X1Q",
  "key9": "E7jqZzf5P1CTD9DBKRz5hkpVfsxJap2XTAFJMNkr5nBtnEqUoqWR7gigEKMCJa6byKzC92QcRypehaV61PcPqJL",
  "key10": "32PPZMUMiyFJcsNQ3HcE8pRVJhLQ6LG97tH98rkFHqgaJAkSxscLfr3oBHEcYj8DwnbytEdeQwRsX4wbmZRZ2B3N",
  "key11": "dtypDJ1e5om9F2aU9LF3VAj575PBBqsh5C4RGgFDpHsNNYL7Be1HfNsjwwH33qo8TL946gruxqTxo67skmMxhgk",
  "key12": "24HiQnwVMH5EPXuioQBv4tkGnZLHopanCLQe1VKe8bbETYwpchXjy3Q8gMMbhKL82RF5iXq6sLNSGZscUKgRLNKR",
  "key13": "3sCop7hWAdqoVHdA3573UkjMWZFwZhR4cLauUPsioyyuVYAA1WfLy6NPy66EcCjVjuid3SjvEo37gXjfoThpsa22",
  "key14": "5mCPTGayQy9bCDjCNk6Qtqph43Pzyk2Q3kvEvaAW5FUNUEEQL6GSdGv4cnnHdBC3NAmrD2TL9eYnThBsM3CuDbtx",
  "key15": "3iTXpqBA1iUuR3SFpv9UJ28CsDm4MAdoFzcQEWyXzXPxJitvDUDnKRWs624WTLijcePUrX2X7AsBRCuwJU2xnYi9",
  "key16": "4nLmqnte9JoSbq4TJZz9WY7DS4PhP5pbcpFTevj6nT42nESUyTSEUq1JGymvxTNjJJQ8vYaiGvSh4Ukp9Ycf286K",
  "key17": "5T4XSqYTzLaknLgQazfkzQXsVfNfZjagoGKVt8Q5L665wj5dAzj6ewXWFA5G2UoL7JuXk26VUzYDPW8tn4gorm49",
  "key18": "2kcQ8zxusLP7HwmXmAyHKXdxAfZxTVHWu8AGmkVvN9dpTRPdbAWX5DrpAGLW4onvKFiSBts5XyV2w5pLbci49TRo",
  "key19": "25MJNCuSW4HjtSmiKDNuorCSxre6gvRgYq52KsAx7cXsCae8THXsfoxE7aMQXi75toFBM4AvWxNpN5hZLH6Nbg6L",
  "key20": "2xqm2RZoNeqKJNcXD9WqtbVk2YnMGdL4FhgCZELYkBxQvGEPLpDqRYvncUZyyFMCQskU9QDt412uHNjsR8isakuX",
  "key21": "4uWqbGSBWJ4vmLLxjF6gfExv7VvgrNxXxW9bmfFdrycsq8mUh4P2QGEs6DD1qfRTQMGQE3RHTSSsHgsDTZbSrVSD",
  "key22": "383rYu8VYrQdN8dSRpZ3aqV8BekJGCP5y9XV6k1WVFQ1bz4uGgStnRZxDetJRBTKMK8oF9o8su1rqSLsgLoxp6To",
  "key23": "51ynmisXt2Q1pXbPsGJYoNk62ZRYigsQ1ugMt51FMCPiHgLpR3QwitWQh1QtaQufSFj7zg6Ej7t59PycjSUjdGAs",
  "key24": "3YufUHqaCRpuPxBKhBCjj5GX37x4rERxFTrPk2rZDcbvmu4GZTLwUtQPBPDsaDTNxhAyV5wSChMQ4q1kXvCHkztg",
  "key25": "5nVBqNgWRitRK66YJgszKJpeGpu7KQANS73SDn7PFzQAvmZNjmpqzu2TJV5ib8cHGoZGuQzk6gju6abBHo9snWP5",
  "key26": "TKPDd8yA3Q4ZP67CUg6rUQwDRL1DGtpPQpnbj94JsBzzkQAwisN631c3TLBaK48y9fT2tRbxAoSSAbNWkb4yBup",
  "key27": "3Gc2xQLzBSo51rXMT7Sc5SdscXqeEymUE7FF76t7CHtR4wwcDm8HQZdWou1hp459dHQrRKBbi9Ghhe54FvHeo9QQ",
  "key28": "46NdVfBsmNr9yhAZsudh217W6CoH1Gmqota6e4JpPNHkRS89pdFCZf8MFU5wUVk6gKNY6LpTEMjVGqKcDG9cU3HD",
  "key29": "BVejGx7jbh5Z2BBZ9r5gYD5gAR1EdSFPi3FmhnXcBp5WHMszXebr3yW7eafHV89SkTBhvhAtmMeDyAfMyediUC3"
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
