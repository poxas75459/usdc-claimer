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
    "5sfdSi62VMyz7jrk1PKFziphckaJUjCRLVC4nmBegPZEoqcboMBU7stsrq7BFmaT7qJc5f5koyu9zCKve4QmE444"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hUq5c5aKfZmhFaHdNiVNAugNMmc1z3VzZUeP1EnE4vZnAHN6Ch6CH1aYbD8JwYJjQVm7CabkeWaDTD738B4ceu6",
  "key1": "3waL9SrfuhEQ4jaJRC6Murz1FFttHKKfKUnEpRGnn7J1WRWfTAQeUK1tvzEiRN57TfQM7qh7n7L3PwxovKzm7xiw",
  "key2": "5dZKcm5RSUmTeJ1tQDxsC1DaaSfJ6YcEMfhPQE7rRVZzNZbyqGTvFJ6gcLFPx5zMUbE9827rXjMPhKB3sxnzvEQs",
  "key3": "qgyTkqK7ZMSjtjMk6UNQVUvm8wHmz4iAtDfCrzVGMx8MSHPCDgDmFPdXBcdAFtc5rdffrUTzeNpqd7K5mUr2bQj",
  "key4": "43CQEwwWenVfurt8gRt9bD6c38wV4Pk8iEMyghNWmQX6rKjXaxAuBqaBQGy9vQN2RkxT3t9MW7BDnARwtY88Cccp",
  "key5": "59FVaiLZjjkkvEQnjfxmnJpTRSE8GMRhXQ54HbSAPCQ5uidmetHhdzqyUBJxtPaVLv1AVm3V59Z8qsw6jTfGwX33",
  "key6": "4na4u9G3eKM8H4co7yxLJn95VDTLtLsDFw2bf4znh436EH2W35KFMXFjEY4KKk5hh3BqYRtTdJ4YfyN78nbePx6Z",
  "key7": "3HBiM61WXq7m39YFJ16bzm3GD4LScfrGtamdGZxrLUWLLjxdmwC1WhvMRX5CBsXwad6xTihQedMdak5bZEUZQjwL",
  "key8": "DnXnTptKC8KAEiHnW8wC6kzf2FAeAAVfVwc4WUv5XRR7Xe6bAJb44ugwTF4zarPuMxBH46FyVZ6advR5ZPm5LhB",
  "key9": "5fDn96rGw8v3WXLFaa1Rh9RockBc1qydgfyxX6ndjxShvxdi21ZkQjRmqrG8Q4YUkXHjGyvb99keby9tMzNKDotf",
  "key10": "WGEZvt6u4LW7DiGMfmnnEALt2LogtJpZVJUPxTuKQFPYzb3ZZApzMw6p1nJY1ja9dALoDqSuKjAsAQE6mgq5BNu",
  "key11": "35UGuJng6uooZaXpxoXUJsT1r82UQdABuZ9rNCtkc7Czeckfzt3DknQ5hzXLP9m9KcZpb9aJzqzTUZ3rTBQk8hZg",
  "key12": "3VQo1Vhe2Lq5EgvhbvHrXJoum3ikftFbkW35JhXEnSN87KcXNteZ8V6vvggdpQwTLK8GSdJQ4TCix43hQGeb1tWS",
  "key13": "5sdFVnmDgASYgjmsHKHaDQbTctNLaDXuFTd8hAvHzRjb6wqKHjaW7LXvVsvwDrKKvmvSJAMtJ99YEdajdwikqUTX",
  "key14": "3g2ixUjRnDUy5pK1KpVE36cgx2TPYSqkmjZzbXGqABqbmS2LtASzJN59FYVnXoMPE4LNMzD7cUZdmxkuv7thjj5t",
  "key15": "4jaoWjTxvPQaqrgT5CpNCQen16w7dubtedPxq4bwVPsDAyHJpNzXLG4SphYBdGoWCzYQrEjVakpJnqdLSdYZ1AzV",
  "key16": "517Jbqwxr6Pj4pKet5rfYvA43vfXConxC9zvMpEjkVgEEFJebMW6BXM2R6ayc4UDJntWD4WQFcWR2GPjhGTWAToB",
  "key17": "5jJd8a7siUZnThaUAf7EhKp1bTeepbgLZKwRGtKiGk1iPFPcapvc2iFY9vckGjrM5x4DcEdtndRCs3Rj3HVWbg7S",
  "key18": "3sEQ9nYkyFYTcaHbRmd2gDjGRPkV1zSPp32hELuxq4QbxHrxECQZFTA7qQW74nV4fweuQpLioGMhp9r4dWr2V1zw",
  "key19": "4pQsrYRUFPFmMCS6GaCg25DuyyipvvXqn6hSoYcHdZSyQyXseagWu4MkVAiYSjush58XFKC191SX8Enib1NxhL3w",
  "key20": "3JkUSb81b1xzoeYaSiUQMH42S1Nfn9LvA3zuYvy9fKxfZiPRsdP6bpW6GdCwcESKhN7Sn7dop8ZoEyEKsUCU3rdH",
  "key21": "dtporSrupAtZjpX4orboaBkFx2MjoCWbsTzYq4GYnkBAXW6AVUtqivw6ehck74V6XyErpPHdeCGTXsaR2u2uNs4",
  "key22": "2tuo3HXNtsHNfMP2wSX3LBcqwT6vEtztHHQr9mgL1JtMLFg6jYJYvW1HUpnABqPDeAHFQBvCCeRZkjR1xgSp4Gcs",
  "key23": "Kkkq6NR1tR3bmSMv4og58HWXDvkwfCwEj2W3QQ3emwWmxreqFYhe3ZoqSGqxLE3fUrPPqtDrEruRhHnyM17UUe9",
  "key24": "2CW2YdCDxcVDNa1FeC137FRPHb7kyPPGeRDgnSyN4XTsFGMVpzosGDqHcXJAKPuVmoFsSc7oA5PPVp458FJz1nyz",
  "key25": "3eekbVfoAwzPi7BZaVHxfEj6dUij7MwQDvbqMDBk19Yo5BvPisXRgYgj7xjqA9smaT14uEisQZeihNXRX5nMhy9N",
  "key26": "F7MkP6RS5fPbtjojJfR1uhmiHPoBm8b9wRCTEe8NzHQ4QSsY5kuABxDHL3FZ5gCixK4aQSrmYkCC6BBn4ijhbxn",
  "key27": "3TCLUsiCZFjaXgBdJh8ZHhUfM5RRUkyjs6owj6XvMbNJECvHUnH7Ukk23QTuG7y1dXL6deQAdjfSXHmQyT1ndy5B",
  "key28": "5oHaF7YrYrSHTDubSYoPjhHUMCKcNeQRQx4zi6jeHEbZJ2vqiDSYD4pspzw1suqkZdfTyWB72WcsKDnZCKYjKs7p",
  "key29": "3JwZk3RtNFsiWGV1meybWNNiidQc3VyczQQsKiRWbR5bxG1hPhYszbcTqNJB6M77wSevjywF5Fy8PKdkJe8wZDeQ",
  "key30": "3vMG75ykphnQeMd58zbzjYMpdNh8vU3vJDf9Fv2MKo8zhRmogWjDfr6UFv7kBAoq62RCP48C59KSbzMmsNmfCHRt",
  "key31": "Y5DdBD62YGRVRaQAgznhdpSkEvs3e5Fb3uhqtZbkWp59Qz9FnTPHkxdogSRY2FWA7kC1KeWyndC86GE6Dp7zbx8",
  "key32": "SYMqCFQzHeVKLz4EycxTKyb1NgWEHHMFjA3wAnX223jDESgR3z4hV9SgQNAPgsTtNUEk1qkGxUTnyz8rJi3JvA3",
  "key33": "4Y1YJ1TreN6kiStKsDosEM3AqQPJooTEHVs5NubKCfx2BB5ivvgRaW88Ew6GKcBmEXffVxWvPJtvAaZkV6mHkvHD",
  "key34": "3A1iX5HcfhYM9jgnrErfRh8XfqjrmMCU7FfMoafPUMxVwt23TnYLj9XawrqjguURuxGecE91t3uQR94jU6BeRPLB",
  "key35": "5Gnewg5SVF3DsYtsEXbQZ4NEXDDFco4ok21rjDEKnqR8uyuCMQ5HRPJ8CQR5gthzk3FMUYvJ29cmnR3M6cWVAL3i",
  "key36": "62DnncBbRSCqcTAFWRiUJXxVaLMg9vt3istVph11TWsgWr8g5h8zbSVfzJo4uDXEJRLBhtwv4aLaMn4TcbCNDJ2W",
  "key37": "2sCxWKwD6b9egdTqfKnrFhU6Vpkf6KWFGECE2MHzC7ePCKU5ERn2gY9bisBPU83dGMdPutjyXqv5ADy85iVfXeQX",
  "key38": "KkHDzxeYXH3FbcEJSmRBRhtN52d1py5tfLPrfAJTQEjaWguafnyvHvu6doyUzkyvQi7FPtzyFkFx8Kraj6B5b2H",
  "key39": "2bfuu9eWAf6wgPaMsgMobPmTbv6mzsBjSgGgpxYWARhQ1pJgUUEk6kkerfzG7ffGXPeEiES3bPupAygpi5pwWnNq",
  "key40": "3tCpG6esVLEA79EvZUPKXSD7G3P8EMymU1QEaJvLMRFiRtx6pF5BLhhuHa3YqVxv8VPiFkKq4uHed9EjV932oszV"
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
