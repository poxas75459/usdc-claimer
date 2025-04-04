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
    "4chWXRs4YRjpoUo1kVeRcGRZZV5xmqw3G52rns5Sg2NjqdgrAo52AQ6YwECJ1SJ1yqiLAr8GtpS47yNgZdc5dmam"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DT5fxFQJ1q9TcFuXQ3fKAQD93sXQVSUFcViXFHyRQxEcZ5tyhLwPEjieDctN6DQ5XCnqg5GK3D5tAj2zWinhTJQ",
  "key1": "5Lfaq7JebssoSXTpn3iVKn3q869RRF7ZJs3qGA12xxeJiivXJFMaPaUj3eZdRPmAp711ZLMuQ4UJYvpFMYAEgRai",
  "key2": "38c7H99JFrhneGWatVEQTpd51VHFzRj2Uw4N87bXhJew73izkbzaaNZgDFoU8oWg5YVszc65Lw9McxXnGWzHYQr4",
  "key3": "5MW4f2GHgBWj7UPgH5mVAjgdypmcMkPst1VyX2aAS7UP9Nqa1yteQTkBKHmDzq47wkH3wEBdwkXJuM5WEGvy15v6",
  "key4": "3ATkhyzPNmeN5d7bDqSQYkGD8Kr6qPB9Qg2YaTBuKKPyeGAPBevxp2ad4oj6b8eFjZL1JDTtZ5vR5K6ogU9ERekK",
  "key5": "FhTa6KHb2yXp88avovrT38HeAb3U991K2MG1S5n1pYR6JfyegJrZHCAPswe8wJKfektrfB2E4xdK91fr5GR2LCp",
  "key6": "pVJok7ZPFxtrQB3EKWe3oWMAES6Jp2MoZhEV2qQo1DVJMkZjvuS8CBe2MjTQG8pFoqTNDLfg4Y4qJLkQfPUcPcm",
  "key7": "3enXqn2ho8xkodmXkuvYo11ZLDGZfrqkD3Qks7iRkuYwxH3srzjNMmfv9MEUBjvEohYFwkX3zTTQQj2kJhHkQXA5",
  "key8": "5FJTTWBzPTNRq9mnfDPMDpd4eeZQR1uAVCodtnz2FCUdykUfxxVneCwStts5fBwhjyDmLV4Az5wyZecWTFaHvtBi",
  "key9": "2ky5vBnQyCrkteFXhjS7d6cP91zK7gArj8kFy485g4CYdfsMvDceirWaHV5e5V8yTFsKiGvMcffJm71zbfRen5aq",
  "key10": "3k5skebwbfUCwRMbfUphgFaNdk4cn12Ya3fdEfM3oTscieBvmKib56X4XcBbvJtPxE7zghiTk5DZZRnwc2XchNwS",
  "key11": "3CkExqPpQ7Y7J9NvTLndqC4urXj3y6zpmHKQLBvJ9uQnFxbbJpq8BB5nRpUKwnhMrKDcoQ1TXay9dHuWGVi62tKJ",
  "key12": "5kyEFiSpADLp5YhqWEDNpLnF7KjXfyf6TvNW6yMTaPziVFUx7NvsQtP3jauz2RtZgmJFfu1GbNdHbu8gderPcakp",
  "key13": "2WTNnKpis2e2wEQ5fLwHuCSm5ofNqJvCeokVD6Kk2vYf9z3pREjcA8UgiAkEaYAUHF55uCRg3PT2ddHkhfCdMHaH",
  "key14": "ewRkMosQjCdZ1tYR6RZ7NjJJHRy2Ey8jRQZpxKaoPuok8RP9HJykKzK1LJfXEiSgVQfrih1bSm3EdX1BViHygPd",
  "key15": "5NFPukJ9N5otyaBTVBQNbVixAZCUW7RtZvsg8Ak9Z4yjWRgiYrGQBK8yymrsgd2VQGdwAfBuK9dmHXzpgNCVRUo5",
  "key16": "3UgmDxGYcjRog6AFXm3jkJ9RCLwSkibGJ4JvQL1YzxshFt7whTMiorgRDxgeQRgFe1cnVt98csD4MVUapksVVAB8",
  "key17": "hgvKSn7QX8fa3exxndMFsyW8fmB1sEXR3XMb84dTmmhLPxubzbTRXdMTimaeKRzDyfVAbRHpWx5XW6zSFsVqazP",
  "key18": "dHTjzpPpauJb2n4udMXeewrCCnkbF7sMej2gJrfnE1fPPR7uHTXKfinxrVHhomg75sr6mWZ3ktJ2EZcrdZRVPfY",
  "key19": "2gQoRMXqzKvMXc1UyRJd7AM8tv4ko8MyTdDkJhu5ZmWWLzUrnc4VaMM4SUdEiiqcnYzfhHoKo8fuZStLLXnLpF1k",
  "key20": "4kvgUitSauwefu6s5KWKzxfYGKap5UPWXfjjs85okULB8APJCkUd7g1NrVpDf9ZvT9Y6oKCEYXuEfbjGuJQK6Y2m",
  "key21": "5tsUfcJsF9MT5VDWyPJRa3H5cc8ZH7NYwLPWC1YdYk5uDejkBtmZMXGAcsTJrmeaY4PEJbgTUMDy2n8PsSba1jqx",
  "key22": "xgDogzcQo64KXyRNzH6Y8piwucTny4MceaY5pcHGfrCRFbCXi281BA7ggEEPCrZeUHXAHRUL2LVfEAf3SmdYsKT",
  "key23": "2pbMxaK9GdaDXD3DdCwigmTYjr59vZfKzy3dHHTer2vKYRFGo5eDw4pcB7v5nAdxqM8ZCV7SFLd9bCYfk1fm3keM",
  "key24": "4E1neTps1C4CwGfwoukdpoG5393nmTWNbthQYdrF3QrNbZFbA2DdiASjZEEv4WSSMw5F3NozDVD7cehB8zqNXw3m",
  "key25": "4gC3mDrwRp6iqsebudX93FKh4LVPunFC8e3cVwVKXzwABWbPjgEuhgJmN9UJ9U4q76sqQvbSuwmp3sPbHgEbapr4",
  "key26": "PCPVDdZbwSBFxV3Yj4JRHrWewjHEWA1XxF81bhkiPmeBLMQVKBYiZ8yUkpC8aXD3eyxEKb7AraWAheezHxHj5fd",
  "key27": "4YTa5JUQ7LAfpJzY9Yz3VEgAxKfS2caZ1ZY7hUzaJpwsMo1Yq3wLR6vLEt7WL1HeTu4t9Lumck3wRuyYGfvyhc2X",
  "key28": "42vDDAaNtFn45p3ma3T3Lo4wDpTxQdca3ynZav2sJUnMYEA6A72ZeUS9Agn9RS9bwpYc6MGfCes21DuCjvH3iWNd",
  "key29": "3AnoGP3Q59t7PCP2cYK73nAmhv3o2oQZz9FdARmCU4NVSQGe87sWbK8DVPnE8xPUDSfR3etxpNGQcQkSKeZaLygV",
  "key30": "4uRmqvFrrZ7uQNM8KmNySLFz3XhaSsMpG7VVkX9cNdFTcozBnYwgX5sbUaa7xdWYtvR4JuMicxWqpgyKV5xagvC4",
  "key31": "5WkgzYDvK5RRWATSTzrq54Mf3dwotFXMgq1cpEmVvV45FFMBa46SratALn15ooqb5uesRv6vM4pjYWBAAaeFDR8f",
  "key32": "2axihqnCv8V7twAyFU86Px2XmAH3yfg1fQSJrsVJb11iqmJTzgFQs4m1DtBLmi2kcxVmYXWaAfcApPqoQXtiyQsV",
  "key33": "3LdTqFH6Bue8R6ksLSPWsEsQikmEbnnJRaXr3Q27uW7PZcgSzXMMkNdwcHaevMLbW3Cezun3UvxxidJC8ieYJH5Z",
  "key34": "67CX9UXP1KPZhmDKg2Vi9KEfe1913FQMaJi1QKJJRGRQzVLjTXGEgtNBx5v7cKjV5FY4RhmWHeZhLUKEdzGkp3c9",
  "key35": "2cKVGquftZuXkPH1VBJe8M6XJ23n7K8jZgce2HMPQN38V7bDAhrWthyqbPniyJUDNTeiYkDj95ZVwrVfiskWkvdW",
  "key36": "3GbcTauEEqXLUNiy1ETV3zPDk1XYBQoSxpqbaqZFKWF4qS4ZZvP7Wd2uudpxrobuY2ZjSPtYBh2KZ5xA1xtbnVv4"
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
