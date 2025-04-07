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
    "3HwPeDkWVHVeYnL1RKALWVFWNXPF7D6T1q5occF64cZtGRmW6sAWEbsxdmJ5gCtrCuQfZQQquWCJi1QCANdv9Vuh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33YxgQn2RBTSZ71eMnFGpM2GkRdd6D7eAi71FJx8t6WCE2p7JXKX5RyrA1SeZcNzpRcpJXzumfne31tpiK869a6z",
  "key1": "yp6fMcPqhemNthUj7ZDS3AK36bZZXwMCAsBerqa1teSCNb1M9ETcSMwcgFmVA9QzKi65siE4M31TqkcEMw89yzx",
  "key2": "2MCtSxC2xzNxL1arAD1YiZnQd2zUxUgKg7DHH5bnZr6sa79FDrE2H9cdzgT5PwmTyuX6T65wjnKdyE2yyTB1b6LE",
  "key3": "3QxRyXCkdPvpdb22spzZ1QDoLHtiB1PE3GkUy5aA6PAxip3ULyBKK84vqU96myeKoSmGAfU6PWnjnucyEgAtXvAE",
  "key4": "5jA4ZsuteYTUgAs1zjgYK4X48RbnfXR8a5XF9pQhVg4YybpCHrUkjPSvLMZpGdXZ3zk2AYCjVbaeaRQ5QJuzBvo5",
  "key5": "XrPQRWQSRumxhTqGvC1XDVd9Ga8hWiGZKz4UKDjJmGQw6NzWZtA4i48tipCg3seK5cx3tbBmmCgsejRwvmfQj5Y",
  "key6": "3K6erd4oRc1iQonLKgZkyzeZDtrmucciS2qYxnkfCMFpyR2Z8arMQo9K99EnrLgbi8RwbraNTQKZ5PScdMFqks2B",
  "key7": "5BGt2mQMoFtq1oQ8SN5ouEabptTrMmdvzQc2e2wEoZk9iyy2mmWomgfve65zSm8YYDJzCtijqZidrydq59ZuFrZh",
  "key8": "e7558Rjjy3sKLYUMu1MezPJscGCSCugmBeR3i8BXVeotF2pZQszDZicWjuLKASM7kDBKJkVfUWppnFfxPTiDkQg",
  "key9": "4ySp7jy5aEujfMcLpB4e8H5QyYUk8k6JMqCsPjKbvLaHcyotPMbEdqmgHH62fRniRrXASVJbLGU2rGLUg9RDutMX",
  "key10": "4U52ZpdSzZnksV4esVuKWG6MRuvnBBjisnJSR8ezCNoZMDxgav2Gg7ybxVjg8RNg49tf68SE1PAj1SZtcAq3R5Nc",
  "key11": "3Gc6HSqU8uu5eGttyD1YzP29UwQ8xwwJbvUnQ3BTU9yzcVrDhVjq7xSG3iL3WVVKjkvGXjYGt9XbgqfTeK4HFXf5",
  "key12": "4Ge5LnWz7CjYLjn23xBBTwZTMNdcbDTK95Z8VzzD15DQh9S3ubSJ86ZLwzVyxzSkAZkNFYLkSBe2P1vrPBj3fNiZ",
  "key13": "UKLZqRP84RVwz5Gy7qxw1vDjtHfVxzVBm5MSK9xgKyZDBRe7EoMbmxHVFBR3CBGxLRAgCe4yoaea8GemNHFqbs7",
  "key14": "4cnmgHnrhZuxcCyp7uuhbnFQQu9EEf4TsH1BkNvHp7KYmRFz4bJxzZH7wtogETb1HEZHTz6gQoGfEHjtfSh7ojBE",
  "key15": "xLEGfxwvN5M6D6iot424NBLDVatSPB7EQEQ96dd7s9S7dDJZsPcFwrY28kPMcy4HpSkFD9knxNXrFNGh9vur5gg",
  "key16": "rwTEhg26HoFx5H7rJ3RcCKApVj76DyYBUAg4enP2fatkUaNdFjZe7Ct5gu87QTNLT3Fkz3tF3LuPxWHiz58MVw4",
  "key17": "4kTEJQ6vZQ6FGZvaj4NCbu8CTdJXyP6jBPjLVrp6W49hThyNM9bTAYAwHNnVwrRAfxQTyAVbczx5BCbhdHurAFWg",
  "key18": "37Cd7ze1QWjm7MBevNrbhrSkS5TvpLgajTBnKvBNSufTSzvFbQYdZQyoiBXoDfTmkmTazhtPnCJmmfqFzn3Qw2hc",
  "key19": "5NZXeYJXnTCM8yd4AFPvcsVtmh3kD6SeeWkr2vnhfNj88dmPw24hYD2JwmBtBhAoYt7qX5A8SNJ6LX5qbzYyPFci",
  "key20": "4JURrSY3hJwexvGREK8mQjG2atnRMQC36aM6aoE35cVZYFNpPys9pYeLWMhtaGLApihHGX2BjaazoiFKsjENFw87",
  "key21": "3Vu2b8RASZGFnsN6rNM8v56ibFh1qq5evoKDjTrpenfPFhHN5wwGBKnzLhpzS4ioAUNcSJMmYG89zNEGi4REkoQk",
  "key22": "tXFoQPH76hTpg5HCBbSmR8QiK4kdJ2P2WoofAxGd7LXGCHG1qEu5nY1qKrg4zkVvqPMaF91ENc1sfE65GXHTFdg",
  "key23": "4n1zoc6zL1RS99vWUjy3YxugDBbsd8WTWrjV5aVXFBTimQBz8HesdqtpS9N68wLWk3tiHtMz5V8Hur9HiidZzKbS",
  "key24": "ziRGYDYLFraUaFqRzX8zCntsQ4VsSJx4tmLJYibaznvQ38L3ydh9Dvsrzx9y7pfoEEnAXYEkftm2pk5sZTrYvWo",
  "key25": "2ibneM6FH9PkprqMtChnQt4vcYVZNnuNrHuZaxR4fKGZfLXGoT2ZmmdBumbUv5PCgrrFhd3Qt8Yy478BSFsuJWfo",
  "key26": "26vrBvpz8eM8rMHiz8cGQwxYNrs9cuicy6N4XcQYvEXnMTtCDZQTGFFEXUYc5T9HVL5mDQWjQD3YE9yJr1aq76jb",
  "key27": "bgNCh6xLTXjpfZXm18Mox52PfW2GaxUsSwHVkYXxzTqJGx7YKyos6iiURRt6JwRNQ1jXTaHUuAZ2Duxz5dVMHNR",
  "key28": "4Xmq7iWwdUF3NDVZwEnB4frjcwRhKccLpaJJHSxD5hx7PNAsY9crjSHYVTH8rRXuqsqXJVZoNFfwzJVWnR9jfwKT",
  "key29": "qYMuZa5k4kaMmFpxUSaefiHyMxM8Yfqqr2Av8Zb36DhrE1e8ocwpz78iZgBcawrNxEvB22zQvKUiEvKFpoNqJjR"
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
