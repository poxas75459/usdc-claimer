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
    "3w2vHLcdZroETxC5Czstm5j4xeVNRLP3Y79hHvZ29nuiv8ka1d9hqMkCGM9jCe8RQWEsfqEbSDbgbgRw3G8kAgkE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vr2YsWRBcqvmUJpSfqM8UrbYFbVtM5bk8NL7dxd1tiSBfe7kgeA94QGmEyveAXsHEK6UdXVPifftjv95Dio4miH",
  "key1": "5ND7VnhHZSXtK7vUhS8VV4BAqxxicoFpC9JkwsrGUYKcqFbv6omZJRffCwdwFu5BFsyAsUVp7XqW2d1JmaNbepLx",
  "key2": "23wJFsfqGqCvw5qt4t8oxxQzCqmRNv3imS8Xtmc9TFRRsFNuHZ2rYJhGFKMQesSrmrBFYikdQdjPAPzV4NjCautu",
  "key3": "5nMWmFFSncnwRuRqmC1MtofkJvgXGjCUXjZ6qsf86rFMFDYdUgyEafsZGvsGqQNN64cPTF7FS19AVTB11tTnmwM1",
  "key4": "5fkp9ba9zj3qpqgLJPMDBwiGuYXKbfHiTbEXTA9nCDd4YwrG9GttFq9VxTb2pRvbQbCgBCNphMuj1Suo18VeZaSf",
  "key5": "2So7JWsRMJWwMoMJ8jhnL356QmLDXrk27dkprM93Yu8HkgvXPBjL6AN8wqMgaVXW1xwfgL6EQcbbRTEuCacJNQfP",
  "key6": "U94w8wroyjvPTCa3GcFc6yFDDh9FpaR8T3TUZbxUzZy78s9NyxSXgUBqgT2aCKceZi8zeVnAB33GbnTuBz6RRWj",
  "key7": "LfFnqLqEUhSXpaPmqNA35ne65RFgoc22jJRixdc5fbUPLdk938azysBZ2rJxE6tCDPYnz9JR4JM9nt8aGkEvhQs",
  "key8": "siUoqEopYfMUo6YLXdZ3rWNu3vuksE2MtoHe6Zj5YSetPFJeYhW3dDmYW1ND6XgPDvUz165CNDEAkB2pLQrvpK6",
  "key9": "1XxmmXj4uiSpVnJJroVt1jBhegZoXUJF5B9m7EoRF2cZV7PytEY6kjTDBRMRycJttBkLdbnWSxm6n4hoBJ8cu17",
  "key10": "65a5KFfCumzrGuQHDVka2FCoSC9HrKuxGkhnABD63GXYk9KKAtP1BdGCkxZWQ6jn1CRQ4x2srKFM3nSPaCojtfCo",
  "key11": "23iFvG3mhqenoEM5mZvHzPrQF8hsnAUDJp1McfH2eWRD5qLnjrrxRJ4DWtpJQbWXz69ZpUY53qsyXzbKhr3QFiP6",
  "key12": "gVC4B4hdF5rmyN1MEE2qjeDASr9poSFPuvSXm3BueCHee1PhtBTfFNJjsPnymweHTG2GWeW2sQh3j4PiHXTzAPr",
  "key13": "4usKtDWxgyzsEvZgmoabgRkfaxGy8wBoSGzccgfcxQwm5DwFPdPCFU2NyvEvDo5c85vP3DJWH3SCxaGszkyJutbr",
  "key14": "3gwXBEuzZmhatXJdGeDDnRixkvprT5kQ6fD6rEygWBiKAZCC5RSjDPRRsnSr4Le6c44c26KyAfZQLRUu2ommWtrw",
  "key15": "AJFsHkGe6iWe6zN9MTsZfbBaqPBTQQe3ey5dPqdAC5KxrbU3sFwrShKuBscgePyGU5AwuBT34uei92TrPakyiLo",
  "key16": "67jHHFaabTTzuZCbcU1JwZzUJuee8PPz65pj32ihCepqVbdwBN2UBuQagmZoAKCpqCTMFqFtT5L3SZfZSQn97YcJ",
  "key17": "5oZQDXWQ5FtN8MZwcgAP61SoZdK6jV7GRQi5tUvrfzXyBrwFQK7YobF9ev2BtkRwdWY7ZQesHVoYkFxRA1JJV9QG",
  "key18": "f7E4AN1vyrhf3dPvHiHSM5hdifpf8q5AzmeCNoZ4PJ1DRek4MZ3zEHqqoShf9NufdZrqprK5mse1Ex2nkRTWxLw",
  "key19": "62xuLEVf1JCugNGRFqpWjph8KPctrUMyDZ3tBhmuEPnxsYhGuJ4x5dTfvZkuhBgNVSNSBVHNqVzH1d1gTVmrgA2h",
  "key20": "5FC4nQc6aH377EF3jYnQpfp3h1RVhq4cR9uAgLjRHtYL236RRoKGRQNLVmvD3zqLjeyDXm7uN7k4EvtsLg1t2WEE",
  "key21": "EJJSvYNPwaJoocJRg2xKVigxeDRqtqDn7iXL6dLmjmYR9aLTHjwicsz1Gq4ScwAthAEHssjELmR7KkJia93aT1Z",
  "key22": "4tt1P8CKLfNqRm8GKK4j5SrdqDnYPFHiF5mD6YRZ2VfAiCWvdD14BTSzQLtJ721BMmFu2KYNemKdimHev6b4jSre",
  "key23": "5kcV88j8Hqx8Ze6J2nwRL4Rzr9P2uM6KH2HeMf2cySf9xb2atM54RC1MMeYmQ7LYhhGxcYqvQx5uV6TCZDwGfYVA",
  "key24": "3dkKWnAeEUqTd6BdbGRUYBU2yzxoayV7V6AZAPKCm2zWcNzXk7uDC7pnpQtSHTLpfyYwqm5Kbt6T4aeY7mNjcDQU"
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
