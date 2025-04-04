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
    "2MPoSxJF5Cona3itA7MYqsEfvaQabRGydTEKHGX8WPzCt7ctKmoYzXYmr1qZgdJ1P3Mp4n6VUeKucbv5fUx947Ha"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G4WitUEX9EBdLqspcUuxoXP7PbHYu9XiCg1rYyiV4q3XrTZpYAVs9uzhSd79oMBCyubuGDZ33cHmQHt1pPEh569",
  "key1": "owxLSpmwUHhzwHV3mKzD8D5SPNETPNGj2VjRVd8YQfVygxumYm8RLGLvTeJtGUv3P5anKXQu29pjbJumDF5jkGp",
  "key2": "37BhTuC8Fo7pcMrHGvtyT3hVsRQqsbd1qX1L1jEypNnidFHJn5mY9tbZ6Qw8K9ALaXMofeeL9mjAwqHhWs3PN16Z",
  "key3": "58CeZEuB8c4zZfJEkUxpmdo99ggwucytrbQNeXRUqwKZ7TkzYjLifHouo6z9C7kEzChXPxCobVyhCjCXPxC7tfP8",
  "key4": "67CbMqe2N4t8n72pkPVCM6Khwy5WYh4K5L673ptceMUSF1syRjuEq5D4sbyrurYmdZgVEEUxAjubxeX5HpxJiaoX",
  "key5": "5CEN5N1YYJJwS6tbxZTVUvi4eHJpvcUsM18Wo6KhyRhtvty4nGbNxVDayCF6m7KN5nvt6ivUHmjFSozFme53EGme",
  "key6": "3x8Y6DVyVdyNCSd5FhvWZX339Jiw8WYfnha61CvJNwa8U9nkqCzwZGYdpQhkpxayrZYWoWneMnxrove61AmUVSUH",
  "key7": "5gUoewfETqnJstyh2QdrfbcJnCaYpV8bHZFpqXPQDh5y4HqTd65pLXS2kzxTDwZjBzVStDw2UTpjMK8b7hp5EAhC",
  "key8": "9CCZTZVVjKhHjFi52xGizhrvDw4KvMCdTy1JZnVy4DMMuPyoLbFsU1HqGzyikBYFRFSRXAFeXWQKL7E7dZznFuS",
  "key9": "2NNujYwa6YcBF8vKmBkYkmhh5G4qZMEnJWWtkX98gh3z6wmPj17qtosKDjk23GmqwATWjHotyfkd1SAsxmoJw2Qn",
  "key10": "5druiKG57he3JkuCcCB6BKt4PtAivZ6vz96qx89y1td7mEzsDjojeWrvPacNUKHNKpsAXbKY5iMm79uXxFEZwzSV",
  "key11": "55tcNwA9jUDUvFABfGmFgFsaZWvmdLwGtSphNiiFNi19YY8r8Z5PeDJHnFvagP5J3fwxmgxqBaRxyzCcn6P7CbP2",
  "key12": "5jYwCVTNzeoqeZKT2vQW9V5HtWWART3DKVCuh2d4pVWrxjBTrSGDKUsJ8SsXu4DRVaRuR3TiVfWnmjK9jsof2bmD",
  "key13": "3UqoueGBTJfQ3HzhsqxCxxGr2fMf4Gc2sFDdbwkhyKdCukX4vSxAGd83SaQHaG4HFmHS9ytBT2LwLnR7Tijy5Qih",
  "key14": "3sxAZDfUByjAC6X2xR9PZvzkk9tB2iZS3f4WUAhnAxeDCXn4GE659vrfgStNXvNwTswtN3x5UG4mBm7CJZekVjuA",
  "key15": "3wfxdKjoWZ7Bu4NUdjNnHWuBbuDrKdzVdo48Sz5a1fEPqSYCLXJuPHapxnjZBSzRXM4FtuKMTPdPJn44MLtWUGpX",
  "key16": "2DGBrgUraUxsNYht9UuHiwRiLorx25RtDepMGYqMPTuvfmedm96bFcwHVLPcuyXXfhHRscvCLNbUHL8YoN4y7hGR",
  "key17": "65VwsMkm2Zuawydezxn8SZftFTDbKoWgWjSDK6Vqqcpa356yT6NQfPeb6xTqtP8QK4WMfaPWaSTHEt1w4jLAWn3J",
  "key18": "3ZHFbiGpNK8hSQG2P3u4j8ckQJ488qSkqjnNo1EutvWKUTL4zzo6txVmav57pqQbQP3nPXKVK5vwKQNNGXBvqd7N",
  "key19": "N2MSD9BLY3wcWXFX4LPkj5rE7jGMFPGWbnZkdkABy61RFstubqV3jDRnuo2zPmBxDq4kTmU6vmzi3czvdbVWx9R",
  "key20": "owWZjknfTGdUn2UDjHcBnCjP91J6VsbBFNr4LY3PZrixaMczDbuwDjLF7ZWsodc6P2dzoaeDwsUotfLvTAGdoT3",
  "key21": "rgMRhXFNYKnp6JRdZpkYtnj4Y8fQ6zxuCXfqFqUWkWNTeMpoSz4gWt4iWxJh2FsnMB44Sx6FpQnLZxTcxxAXuBd",
  "key22": "5cx7pvjDz57E8o7zBWsm1X4ASkSNWMnnZc8GGMyzxojYCpre1wBQG48bVR9sosZsqg8L6CKy2JR66KqKhXpekhsn",
  "key23": "2wNLMZ922WbQv3HQecXQ3eKgGEUjbKQhgHHZ1GSUuKCJFR7QqHSCyFf5LZoqUyBp9Fg1y8cFusUmDnHghj4L7b24",
  "key24": "4L9nZK9Qnfjqf17o3pD5JFbCPDdV8KPoiorwFWFhPvxXHNx8GJm5z5FkF3cnYEyvAnWN75WgHX1RLgkzEXPVDqyL",
  "key25": "34zoiLJg7xFh86zMkoBjJG91i8bS6hhqn9PNURSqk97fuWrzeAdN4BQmUTCrrMUQueLx4koWfcRJr7Nc43sFbc8E",
  "key26": "5f2mkb7tPWGWHAJ1Kr6o8k8ssWcii6ZqaUSo5pQmZ56eyWngXQtz7J8diEG9PyKR2JjkPrDwYde5Rotw5tcDBuQs",
  "key27": "2q6zweZ85EBKiFXQqqHPaUAeQPZ4pH41TeMMHggrmRnYMbKcj9rWwxyX7YZ26eZRih8xds7mk5fBPUE59aGX1qpE",
  "key28": "3AtVfdVQxBYxcYZjML3iHaGFWmgNs4HbaSkPfz5FCHmEJhHrpG7aEDarzY1dZhKcaupvPmpTKAE9zSsiqPJHcJjz",
  "key29": "667XKU6R64fzFruUGHTjKxjNXZy1J9w6oc4aJJBMNtLLdC2ALE8frf9PDegKPrfbpUaeqjtr4yV6mkGVY55942Pi",
  "key30": "5ZEnRGDezkBYiNGocC7egkvBGt5zwfmTHWySqHZUqj1htCuynicfkkpmDFHhB7G4m1SLR2vZDRuKaAaPiDbieJHm",
  "key31": "33xLGgBKrq3wsvZeGKUwVDCyvRPV7J1hHEtmHV1ruWu1bqA9GszdygrW9q9BtzA4dnxVDQrnofet4CXSU9FLxAqa",
  "key32": "47VAvqXtXfWcsGev7knRnHsTUgNN9BmFx6WJ7wBv3UhdrqEVkNWVEnNhmqfQQDnR37H1uHyjArfTEDNaPhMbEu8Z",
  "key33": "39ANyS2qzLBg8tt9tNUY7ybuJ5wLPqNcEWa6jKK67TJ1Y6BL5cF8zdFAwxKZvbP5pqtpXiP7XJC7u6EhXU7GEj7X",
  "key34": "5YNP7U55cTY2JwW1zfi1nBe3bLswa3m4yxQ5P9XQb2jUdLxsX86t69Zd5Aj1aGagHXQfUdh2D9QvX7urSirN27qH",
  "key35": "oCejkAzXknadjMRo86upsxYQqXPsu6P8FSQ57iPNyZHXSzc8Yv7rBb4CLoZFfcV8DDhjrrrX2AR3wmenKjZMcud"
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
