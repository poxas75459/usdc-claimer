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
    "4XnRXeWirE2FTJaSpSRdajrDaE1zBeuGY5BAMFskLLVRra3kWsa7172ztxfE6abKB7M1buqSZiAQnJStUwzgcATu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RMUgNTBRJqkkxkJHEgaB39KsLUKmw4J65zg5qmdLx45UY5NdyGER4Ww95V93yLWJRqzZTj39B6hbTkDCq5V6ku9",
  "key1": "1URp1ipNigjz1nTP9S1jBwPBrj4SPdcCRNpfZmLzxbFWLapyBPK1FosmorMFzW79UvZTpRsy9HM26qN7yCXDuJb",
  "key2": "3SvYTWSYwYQSTwZFoxeYJ45zj9YCJMrVS77pmJsJYGLNPpqVZF68PdRhDy15e8wZxaQMFhQhbA4n8riMLWZtbhbK",
  "key3": "54ZgxaGvvWWb4Vusts6BHpj76Wvi3vtMShGNZWhrhZzN9qhu52dUZGupJ8TQEwXVP1VAxjVw2Z8C5py8aSeEiPSu",
  "key4": "321f6t1Lv1UeZDhGBQXySVsh2pKp9FLFwYQ6g5TgGmnHcMu5e2da2CHmC7yXzzZA3SabVDpVM7ACtgzm9iSeYhSn",
  "key5": "5s6ZrRaBwTX5bY5oXw5zFyJKrxuU6ubRS8HoQDNpjJi8JsxgG2fxzyRLbgKABTmmtPfvJaSrbTqDuxiMNnYVS8rB",
  "key6": "rn6zC8zE6fGJMQpjC99rYSo6L2vcZ5QwVfqGBKFPaS15TRk3eg7mLtnfVQ9sgDcXDzMMWJMt6UhMqbQcpA6xfv1",
  "key7": "HitYzDgNVCyCmcJfaYxfpm3vjRSE4zJ5XbX2wygX65DT8kpGpbb5uYejmSFCQCKNC1kXrUhtFDVe6nwQYBEu1g8",
  "key8": "5wuzdku2WmcYYs3FPA9rJH43Crd6MDFRLjnmujCgj85TreQ2euraebx2rN9gGTStn4zBx3WZz1hUy497sgJKkPw7",
  "key9": "2eGRPhsnqFNSZebAc9Gim4RfXq3qxdhjnk2HY4htyNT1xRzK2doRgPEGvQchB3CSXeEXdbXNTesYrQSVnKk51b14",
  "key10": "2xC7pXFSq1149L1Err3mgnWf2aT42RWLv5AsfgXeU417pifLtv1Skn8kLxza39eotFkyPVVNEY5qRhqW9Tp7Ao2b",
  "key11": "4Zeg59CBtGnooKn81cm771yAna4KRqgwArJbmopET4asL16p2RaWtCyf1d4hpgQBY4Q4GSqqiE2FbsY3ztkbm4cs",
  "key12": "2Ss8psiPVESzQvCkzSu2sXgQLUdB8ZnhZNvQjUkkEWMubaMNuL3P91WX65mcToVDcDGJfoShAv4e6NwKdgxPgG5H",
  "key13": "4XYj4n6inaqoqhD8CcJcEocM6UHJNgQ5AYvdHc47Y44Szh8Kmkv8SkH8AtYRzogstqLKR1E6gVGFWpWakgvzwfmC",
  "key14": "9cKbQypU9g4Pu7oM48LQ5tm92r5YpG2eoFMifpKeeNDjMEo9HGdcZPSqCAB5PyegWFGAfQDdZ6P3PobgeGLMZr1",
  "key15": "RGyZvLD34mh2JVc7MdKnQxYdWgbC9FLjSNLAFpomCPrc8VEji25GktLnTtXNFQnB8gKuvK7Szy5eKcdTGAg4KiN",
  "key16": "4dB51fne8hTKNTWtWCXkEW5XkfGh7Cc5WeXtaU4sZPfBp8Ch1DPnhctyabb66yKkd1o8SDa9tVViej8ta2vj8jyn",
  "key17": "5vTsyaFacnNhwZiFfsqVnWkhLu4dc1zkcotFKfTnvh9ytaZQap4Bgzy3sKPRkJYfub8KQs1Vzup4wmJqVdfpeA7n",
  "key18": "e42oeqmuL9bANkM592VUbaMocww2k3ayfQV6TCDZwCuze4p1jXaShC6qLaiQoREAyEyBUq61obXKvDhjBVHua1o",
  "key19": "4pbBakn1hye75sQyD7YgYcb5Ffkyagy7T5XbZA8LXtBsEwGgD2q8fRk2wb9zEdbsqAxYL85Ji1ZuWrFjBzfwCvJU",
  "key20": "4KwDmseRUuBLAunyrjoMm2aMqnKNpsnEteaZ5vejx2TTz3MxHNf4AJNYiDVBvFWjjzjhaPnvkaPJRGvesA7uVMBP",
  "key21": "AreVhF4BXXqfhoTLMS2kDgk7NLZQLkxW3T9boixSfYwqxMD2jd7mq6LX4zisBX4rAwoAcuEWFsP86F3AsrPKovy",
  "key22": "3ichwm8E3V7BuXXd8XnByZiAVdbLKCzCp6ApDRAkatMLcCNAnkf9pU8jtf8PEQ32uxKLyY8jwZFwW8y2Jnndq4Mz",
  "key23": "3ipiTT9n6vS3UxujXTAcjaBoM399HHuf7zZW7L5BjHxuutrufQW8dqXYHQCopBsZkXMFqAPDAEJiqrYtSQkLsyG5",
  "key24": "36uS3W5EqbdEPSNn6ENE3QdTaVFZ7Xfk1NhSPk6Qt97XpapmLdqSEG4vPHgkctyepFRFtPYD6arZ4n5w21z35pru",
  "key25": "4HHat3UwcR1yHhk7km7u78nzKARBNuzHvFfzKT4bbLR1E6H6psPh2jVJLUgfrfHqHb1nt9Y6vDMshbkiRxdkNnH7",
  "key26": "5AMAsNsedGaTBVvwmKH5XPsYzUa3yJKpNDEJt5YprTgCsB1iBLzGYwLwtQfgXy5kEvw1KsXMFcY3z5xkA1RBcY3U",
  "key27": "63Rf71f2LGVhnc8j4GpLEgfcuKA8cM7EiGNrmcdf2KBgRCtkcFCxqsQ6mWgLzPHvyF645XACNBc3L4ubZmrPHDQz",
  "key28": "5EujP2AZ1cvbX5qJJ43Dh11MfWeeHca2YJnG1wig49kHoUcfiy1F39vLwHBFaqNraxRzsdDToEKvxDw3BtqMSYFd",
  "key29": "4FCvDGwH6Q1bLgzD2XVMd81gs1Zuvk58kEy72cQvhJrynvVWM22SYsyb4d69tMqY5hHGqbdXdjUTAoXGUgstacvb",
  "key30": "2JEAJT8K6Dgu2V6Z8njuZ5VsaZcvduWZiyRn2CEZ8DxAwzLaKHvG4sfbZgzsu63qvFfg2sxS4L1e5LLHWWzQHAV7",
  "key31": "33GpxExrD4ymx9oZSaPKXjnnzCUZFSGaEzhgjRGQ3twbcZDGcVjWjPVXDLMX74C9c9Z1cMXV5rrhWrmX2JCPhvVS",
  "key32": "2TZcVbm6UeWtfzvxyMQNTdi632kx6hBXq77xqBzaGW8HXzk1kPssYwtqYeh8MEReLcyWSgUThTLc1sUnRE2UXg97",
  "key33": "4MWCvHiax7YtH6vmL1oYb54vHrD74XWJH1YVupfYcCGNrsZYLT1nF5TaCew9ASwbYp9MDxWpigb6J9uG7WG9tD9R",
  "key34": "qdC86gKSP2EpYgjWqurY3VtTyy3Z4N4JyMJvA19h5foLHRbiMkvWbmVDHEyhMCz7gu21gMFmxhPf6ACDE1XjF5m",
  "key35": "594pgMKPxjpo2hvz67CMJ7rheG28AYBRdChSmyJV27pTEef7nhp84Wt9CfY6LdHiQ1kDbTbcTjix3zGqLPhQcEmR",
  "key36": "4bXrHPm24ZAeaEdXeYQhYvweaKdvuH4SMKcQaJZsqgbppisfedm4evtQFYdKac8qBHb37xoK8U9KK1QP7wnD9dag",
  "key37": "2r8siDrHBYBG7ptVrX71kgbtoy97wrjasKLuqNJFXTqyULWmi7s15GG8hP4o7itz63N5ZxBgUviNvkac932nKBHL",
  "key38": "LarSXpYsHVgSnxWrN6DhujbmUoWXZMg2Vmy1LFPWoiZgY8XAeEz6B4eV99rsQgMKpGvPdUNCbZCEU5L1FcsikWt",
  "key39": "u32j5y8p1hC6jDTqTW4JxG7zkVeZkk2LW6QELMjCHETpgjHGYQDDFj64H8i5cJiRqN2D2sVSZaarXKXRSaFbuh6",
  "key40": "BtamyHzRrZ47LcR2TREk7FRMqJT4YcgWT4N76oNQtpFj5LMtq9TNBnv4hPRHUqGpRnKKiVTCndoPZTvd7zFd9uy",
  "key41": "3ztMkXMSkHDorBqBYF4XmjbBmxRyGHfZgbNFo8cmL84cQnUp4KcqX58gh6qLRLaUdFbK7NbeBHjdiFCNxSjqdZVN",
  "key42": "1k6nzkFRYPfuGQJGZs6pceQd6wLzjpqZhTqHa3QFJzLeo36b7Wrd9oJxv4PpqZva7u9xCjA1PLVxBhvMTrwFDb3",
  "key43": "4RS4S23XDeiw6ycmmRgpTkoLrgN5dSpgf5reEEJ8cRFqCXsMQHEgqtvapRPjKVhmGcAkiMs2WdCvFypCqZPP1zNx",
  "key44": "2eqFudBAkBHvfge8PCyPbjYftqMNfLv6xLp1s3AzQZ9Ra83gDSKvJZDrVpjh1xXjqDMSa2ycpBa58W1eUtEUYjHE",
  "key45": "2qRpKhEhrzUdUg2PCMstAN1iMzgMci9iJKU9Q742JSLLZntVLdqrKsAaHSrN5hLbJAEUwd6ygYT887YvpEV5AVbt"
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
