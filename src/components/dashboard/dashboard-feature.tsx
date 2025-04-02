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
    "41scWGPVffqStYZqnzcZCEqDoR5dVDLsc8HwEws595ajN8HsfoEd4FggTRwzrkrqfdgHYVFbjbiaKR1weCbGynfY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hFDWP82Yo4PgMoeEdDJzSkT8En4ASca3uGhubnhtC4Sw2wfojjs6NVQiU5ix118ih5hD21KAyNb6htXon9BVtxt",
  "key1": "47ZCmoVtwG7yqfyewjvEjy7akariMPVsmbnqBKaLf68SsuLMEoTHd5TGio9HhVi4nXBKBCPCbiGHGp8vgBSoc8VB",
  "key2": "dNVtS3ZRkBngbkUBn41ztp1ZZUMaJTb3AhaTchKGePfdkBUApQP5Zviefqh6ruoyv7vgaAwBT4eyrzHSt74xbMo",
  "key3": "Mofdop58YQk1cSDCFjTS3DAJqtnjsnHQZzWJHeATetSf2NYapaiUmxtinfcaxgrRSS1oAXtitnvxrfVsp3nYx8g",
  "key4": "4Hb5QU68SBkD2LLCn1HLMhDHih9CsoPtnG6iwsdumhyLxjLFzKXLNsUEJcGVwT7XkAwCkm8yatPqTzKPqwWxGUXz",
  "key5": "2sdnU1wDYzH7Mex1zT2Zn9ycvprZg851j2k2seFuLR9QS4UrzteiANyMFcLHQUBxtTQx98KnxfXzJU9Et8ZebAkK",
  "key6": "4RMFsPVWBXCdjXrsBUthpAgSFg8ciZB1io69qusFu3ujtxcUaREyp4Hp4rGfiqfM8puWSWhojZqpKNVMJySFVnjB",
  "key7": "2RZt3V2G5CSHw9iyMvmG121Fptfu4URHbsBs5AM1kEdKR7pHeCD4rfQUnikTHXGHnJbb5Vws47Jwubj8um6h6ypZ",
  "key8": "5JatnqX5dxwhVyj68Y84rJmQBJs8itFX8gQcDvKg65Q8peReNrVBSdxFPU129LBEkhbUoU6GeeyZbNfLjDmz57BQ",
  "key9": "LUknr1YTSF4ewEYwyd2dMzzn1tPXegSG3RQUDmaYQbtesgQxzcnMfJ4yxnQL9tkE7XDvG2Q5aFG7fCq5SkeanfT",
  "key10": "5rmTtRRbzPA7pbDe6FwnB8Gh98WAgANagDdR2jrbYj9ZThbXoCJcseNSAsXy8uV9FPzdKTGUN7KhdnyDXU9TfkaF",
  "key11": "2SGdwnv4TrWgGK7WTiZ4rh2FhWc5xnSHGDhEtRJ8481z4TCxh6f3vNxjX2yPWYZRs3MWeTEcUccp5n4syDmdE2V8",
  "key12": "9YTVG2AWmhgiJenx3FqabY6PcC5zS6JY6vDLo4kLF7JE5vKL9tAyXUkkAEcNJ7Sxbkug8iTGhnbKwymNLbf4TxV",
  "key13": "4n9sVRoGYt5V8EdwvgtH2hbgVi71oTfrGytCfRcZGVPurJFEdQrmSpqrDpNrKHP2CDkSAakENDdPTT6wvBDzYC5v",
  "key14": "4aFfpqLm9i8iA7pK9mdj9TGzAY1DpqZeWmyMiKHfMwCUjxNaoxp1id7ppzztGBuHsebTUNfUZyBRY3XPeSS14vyt",
  "key15": "5LTWroNFrQoM5XfCSD5yfQTCAydagwpE155wMPeqHR5jz52rgoqE5DFrfyzfKdFVcc4R6i46ufEGq3jRv8234xET",
  "key16": "1pW7KcJQ6CrACdEyEDf9A66Q3gVw8QNfReCV1KsQUt4G1rDRbUfXXCwYR5mJhAiCH4nqLNoVYPXVuwwGHWKfUkV",
  "key17": "2hbBhtYc5QC8ey1zXK3ZVrP5BJs54eh383K5aPVTd8JN28yeTiVTAPdXQ95Q9kuvGsDkn2Zog6GpLNQZ8P8VQ9CB",
  "key18": "2mRZxdPV4hVtxQab9t8HusjQfvYLTnYWUgCqNYynF8xU3t7zYQUcjKMG66WJAEe9D3L2dJpnvViHkEVPMg5vcw4r",
  "key19": "5tFcEQ8Gr6o9bV3kLLF5nQqB2Vj1pHF7VYSxyWBVBbDJBT6Ad571YhFQ4FwYRqky8Ue4ZmfwQ4ScrzNQKhQgmQts",
  "key20": "5qt7SjzkwNvdzW6SRAQGkwVZPwyiyg24PieKTLtGMBvkioAwDivtu7W4GQZeXjGM7DEDySewNjw5UVEgvWomZZix",
  "key21": "5fmpXbM2qjNmfnPjLBcD8xbLXZPRv56L6XY7WhdY9RePYQswohb937tWQEXUjK3tBT4WL2dXAfoQRRp1b9G1nBkm",
  "key22": "3eZMNmqrTi5mDjm6cMctTdPj8Wt4i5mxjz15JNUeA1RmdtxSjFsY3EAtCdfJHGy5rd1WkEY9LRmEc19fvXGER3CM",
  "key23": "3gBtW5rkoSipjSE9eGE8jpztS9RerZgbmrXL1cigqhXXxkDTDWmgE9jv5UnrSbwHmsL3ZQTGf7TdDt4vUyy6LEvK",
  "key24": "qh34shSiDa7gEpq1VhiFg3n9b9EKRVmV7pE82abx3aqr1fMqRkodJrd83Th2QfuiafFV2tmJ7ftKwSmoYt49EUT",
  "key25": "5YYTBNpbXRd47dkYPsCpSe1nu9WQqoRtpzXqg9brsyWUidvAs6gE6DetUC851c5GtnaWFMue33QUEi5gn99XnPXw",
  "key26": "56AzFpJv1ufvx4P3khzgTBXWvPrattFLNhDjGAWhg5ssb96FZfoVUPnT728f1Y4STsNjf6pKYuuDaR7LJEZxGAWy",
  "key27": "2gP3a7KWULbhvCbFXNr62RVUgV3QG3TcKyDwgzmHj4Fngc9dPJMcn55ihavwUs2mVEdPEpyJiXvFR7eZj9tLUSgd",
  "key28": "kZnaYkZBXTo9whoDuPofDA4ALdcoToD2MGrFzFLHE8qxaPWJf71eTPwfx4dtYtLFeKfgCGfWQf5HWu2j7sRXYSg"
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
