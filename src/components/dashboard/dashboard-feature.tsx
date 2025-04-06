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
    "5y9pmzY6JvtmbcDaerxdmANMG96ghNn5UyJXaYc7xZf1xXVqmr3osC8EHWqeuWCjHhMK4QonMQkHHpbyFRaSQqE4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T2H6qZoDcYnyyFVyXjcfSZxRd1fytJkLyWR84NxBw88BMcHpJN12iembAzgBJUhbT3vdvqn3j6avmw1wUkh5ws3",
  "key1": "PyEvMFG91JehDm8SKsiS59BFZ6bwoNbcwJ4g6U5bXaaLCEr9bvMNkQuvTqcCGp113bh2VEQjbeunnKLAEhj8pgR",
  "key2": "5y3HRiXcBkD6hjE8d1NjWfDQViAPhxT5hJUSgJQFqtgVyNUdJwQDpXp7dmUea9EggVebbYS92v52WdYWxe3nJ9kf",
  "key3": "4BCY319wM5jjVrUEf4LzQb438znabA9BjCPifUaRFCz8kU45MktrpvYyr9odMQx1y1mx59ru5Wwj76Yaxwv4SCQd",
  "key4": "2tzNh3sdeTPuQmmdhaDqTiQr4gKMaskNC8ST5i7KZpEZUSNaFSGeun8nUZ6Sze8X8kMyD6JnKhQvjEZg8A56LLVK",
  "key5": "5M1m9Nn8o2o53g2usNgQXaDCBc1hoXXPJh9Ecy2BXEZSzEFCTbj7A46Cb8DMsfA6Up5ncez4P2LaPAJKF2VXuS1W",
  "key6": "4bAeucPjBpt2P4NGc1CmhJDZniNTWEtkC1h5zhzVabkPaZTz5KC8YnQpdQaZEev37rKvuYLEazY1ehUpwbyRun8i",
  "key7": "Vq15FM2rw5RRg3PA6cXish6eBhPKgKW25gtVgPsi3F2JQyJGhEokExNKqNiy5UqBkJU1tavYui9i7VLymqhVWDV",
  "key8": "2yDPqbKZyggYsECDgDW9QCEAbHQy8STmAqHoGgf8uXX6P46bhT9d8UsyL38hjFxqJQq91n1NJ6ssicfPEit9Q4N5",
  "key9": "61rWqW9vDV4GrnFtJvAnuzndhtKcbpstAhwcUy93BGMKSMuoKDxvpRg6pjQE4FqwhzGQACwZiUR14fWDdQxNngJH",
  "key10": "3kzmoySAzxLqsDdzBV7bQNVotyQkyYyn2TNZVdFiGi5kJz1YNCVjdeonkg6ocDkdm7zhkx2vJwMmB3yTLsevZSqU",
  "key11": "dG1qLiPUSuSxwcVFbrpZU4LV3pUeT1PNtkZZEgghyvkxRDWss2ePEf27NvwmJNTgDJTdYTWk1FP8YCmKAwEqUJX",
  "key12": "27Zy1ZrT1wvVeFarYTr2jj3esPRgcwLEqHs4DAozQDLzJECm1HjHZtWmZV5xLbRgxAk2AS6QDBocgdDjcHUP9m5k",
  "key13": "3ZJJoshuRF5W9Y7GhNnYgthkyqVrtuwZGpwEfLQN1YuVjAn2fGCUxPXCxpsWnRgH51jWtwGXUHroUAav3oLgcKLV",
  "key14": "ZKZ5yiQgTSQ1CALwQRy9Lut2zqZmXxgqAXsWpRGM94f4fcEPTZDczDNszXeTRdFGk2GkNjSNWE5jfyBaLygMVDZ",
  "key15": "3GmEiMG25cdy1YkoD2C3WiWDDFfWWaSGKZWcrBm4D5SynpiP3nziqvodar9Qw3nr1S2xSBJ9BxTanie5Q4E4mkoi",
  "key16": "5LU64owZid8qKpXUnF7wnxVgViDa7TuxxksPWvWg6qGGrbX7npGUVfjHTBibZjNUkverhsbhGdfFiE8TLF6H3cc3",
  "key17": "5VHVjThRmjQcmv5yNKN2SGQkjxQpZcJdbdHdXDwtZntSryp2jPhGQy3MRxWCdQtNQd9tccdQrKFT8474AK2c4uHn",
  "key18": "2ZzVtA1yw7GNAeXqLUSAURVBinbHjQ1KK9hzB8S7uzWjEBXAPEQ3feYESLVbjiYGkNR816ohHokty4m4grbVycwv",
  "key19": "4cL64uEgdpatV6e7xsgRb1ZZr8aU6yUGw9L32TDHJvnzHPoCdJBwtVFfYsWLQDC5F57mpi5Q2gLnzZsSDpFask8e",
  "key20": "4QdtoGi196THPmqzJRiqq2GjJ3yQTx1yQQXsYX8WvVeHLU32qHSsFVCmkHi2ytzP21BtCAEYxwZwPeXkGTjtXggn",
  "key21": "4sfHsvadMcTgkVDJLuLBcPKWaeYbNiMKY2cPZA4xw8sbkP4MjS9tn7acoS4MBc7oNFy3VEv8US8eRTrWABpGVRTv",
  "key22": "LtHR46KjjhBxvT3BSh3Zx46V9ngKD8v1cTERDV83fAYAVkE9xKkZZ8yiupPjHHT6LGsunRHZLSyrkLiJmn27rha",
  "key23": "2RpWLnKvEqeAc1jNGuoMsqzLVmPtix9i3ExZidwSEqiLsukXDbAsaxXp8J7f3c5NftyXLavrU6PvY6g712KCAcWo",
  "key24": "611wtjGCfVNxPzkytFjjRJyUqHhCNYhJz9VGDMzJxz6LxRRiHUkwt3pZWLyuL2FHwWW8Yq88iNbxcSbiZ1kPF5Z3",
  "key25": "3qFQBkr6tvZaXwHT9rBARqvYpVg33degrGoEPskgfFbAHvbkdtryAqzuqDVBsEYehCycEwPMkDi4WJJn3bHMruvc",
  "key26": "5PcwBpYiAMd4jSXU1vPCdVEBuAZzoGmjSopJkmjHwyWicD5CFGkjTX8nGyyt8MTsqxh7WWRW5YWMsmQkXBpP9DhU",
  "key27": "3WzAghRjnefGMYuY39wxK5QFqZyv8FAXshjNoiXuDSoXat8sZFX1V1BQavZnQJc3PUumzLvTHDwJQqvvCcBkrWL1",
  "key28": "3LYyjArd6CyJ5rmPFBvqk1zTAHQqAbxXwCGFv8k9BJV5vi4wAwbN1iyuHMDjJisrggG8Bgghcp36gkf7J7VnhxHw",
  "key29": "5PTXz3sKoy5XEtgYkLn54PUJyaSu2jN4MNwSty4n9W6KDjhhs4eLQhVbZcwYWbYX7AWAYCyJoFM46ujyYLQdmyrh",
  "key30": "44rsmfJixS2EdM4TpUkuQw39TAeRj2rA54gov9XF1UGh8RGUv4Yf3u1Y4ccAwdnoTvs9H8cYfxhCM2F6r7eaHQSn",
  "key31": "2cmCZsgaaqh5VuVUKmmXzmkeabHJJeXUwTW2uYzcrvfRu5LbP6fvarXsZs3SzHxcBTXS83LgQsDF5cVasEVfrzaG",
  "key32": "5vk3sGR1m4ReaJiqeWxtgh8Vtz4QWUGfUwKUxaQZw48rsy3YrWHJVb4W3xaKJTMrP8K3DP1fi4egzCx3o3QBheG8",
  "key33": "3LDD7ve6ecmxXfVg3GdAc6mGxHuCtMExQZCu2XXXSwm48KNspdYCatdVZKhiPzPksk8UNXPTdcUe9JtW5FSMCiah",
  "key34": "26dgTWFqfcPZUWiezUZky84oynKKc3JxcxSRdk9m8E3CNpSdjafo459Lj42BVFUF7KyTTPRBQuqTChyoVREdXWJb",
  "key35": "3bCYNvKQJZTfDwm1jBVaHLqKspBUbPrnJXLHwjP1rmRtuQgiKdVEFNZsmbGVaXSyJXk3PqeNCJY3aKmvhK4APtWn"
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
