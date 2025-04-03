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
    "2xAjC8R13guzsFQusDJSaz2bUXWQ5Ath9S4koyJL4ob7FUXupkX41LVagz69fbrxJ7kJw83Xa29kfhGJiuipirKn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uGozkJuEhH19UB1tg5p16rHGwdz5TbairRt9h7gKzxg9SoENKwQDa5gEUWvZtuxSoVzmFWJL3xRPH69FvNLSMWm",
  "key1": "4toTDodi9aGAApXFKUgzTkVLCd15p6UGQLpHgpRS7tuokKBKjqDAyXks33mx1tLjTjohEC5zfvBivoL6BbXVj759",
  "key2": "2Fa67Gt4k4fijwKnYCZ4Sk6eDvhoMjdj5uSYBy3QxgnVUFzkpNUQ1J6EpUH64jBMA1CF2jA1MgxTKVqTDP1yWvsy",
  "key3": "2kSiBJJPiHNyycMzuuTEG4geDChVdxuETo1cvrRpLuDYrxSFmHhtneywJdRoA12CzCFnhMcq8VVT3JF4P4886chM",
  "key4": "ywk3ETvcTPrVvcrUKkLFCnm4ocwXidNe5QWKoBZduUxdQjFzf4jicWk2dGUhzm1oCy969pLaMQwg5GCepPERmB9",
  "key5": "iughmLTKbG6ndDPZj7Mdh9R8h15nwSV3vxRRouftUnB2cz8L51RosiBPP1SL3ozA7p1uaAc6VVj7gjWMscVAna4",
  "key6": "5phi5dxdUXABvvm8vLjBiAPt5Em7VSDGBVjzbkJV11Sj9LhQ24qdp47xdyDstDH5ZCeBtaFheVUwXaFL4acKVBqQ",
  "key7": "ZbRganjy6apnFNzMf8PfefpgonCPc66Locp6gRhA3zGdCiG6fRJzuwJ4WZQqKnz852RimhkxUZn9jbVrr5DQh88",
  "key8": "u79pXBdw34QqbBDGAU6gTutJo3Ly9MBzKpjo7KZXSVxwFKQA9VUfKrgrkgBGYNf1ZfeUReCpUATKSx6VMRxXSHR",
  "key9": "5tKa5uyd1LduDxD5CRr5jy73gkxXRF5WsKyqN7wPhtpifarDdZ1tnjPmW1nTUeJJuwnRd8UbYy8K7YnFB2GphUpn",
  "key10": "3AuKXDfEysHys7uVh85ZndKuq3bRkf9VTEe4aXj584Dr3xnrcvgRZmqanUNUz1r5gum1FVtrBrzBYRhn6EF9oecn",
  "key11": "2LHQcL3nn6moDGj1qMiLgxDwbrktobKqCiiNCXWxWfRH4ZQyVQig66wePccbGE3F3Kz2SJPajC95xFPMFarrbTq5",
  "key12": "4bwwtmXEvmtpxjZn91iD7r8g44VokMt7mUxiXZwqWdvbghGbkymP9hki5NyrcBV8Uh3X59EZVuBcfPBqLEhdcXUD",
  "key13": "2JSYxndLLpJpR8Evr2y8NzDr4oBg3ggySSJ4EjacWw4QD6rYxR2GtrEEcuuyNVXMMqakbciLtm59zZiQYUgckid8",
  "key14": "4awUT1yLcn74XwzF6xWRq2nJ487FS3s6WmLYoijX9p9vwHP9moWCtBcdDFUvB4a78wtZF73og4moATHqrTBo2AJ5",
  "key15": "4S9p9L9dXKrT4UVDcGcm9mzW8KEJBFyX6TYBrvzv4o8NCTBXMYuJsHWWLcRu5yPhdwi5YDtLDf1YUqQS2hs57fm3",
  "key16": "4yb1G69L8CnFgt2t3DnrRTqqYQdbBTHwpxuYcUoHkrPY8opMj9fCbsDH16wGsQ8QyyuXyJkqMxbg85J2YiKq5Xs",
  "key17": "2KrUny9ZYtXp84PsmnZ8teyWXJ8HPHtdzBbdjv8XohKRC4As7iodEsK8q96rnXWmE5bq2GG7nAX4zSwT5wwh5gRb",
  "key18": "5K5n8b9KqEcJsC9Ymvabni4D9VXU3ENc7MHchgSH8KQy7UjKHK8aSvRzwspdmRMhSRbQsxQRMJpQiyVuDa9khK9X",
  "key19": "2byhAd89YUpysAvziYWtW3fmLbsFUSrnh5GeprXz23ucLFC2vRPrtFH2YcSqKEyayj5CX8Un5m25jWxrpCAA9YbR",
  "key20": "5csRecu4c3WZG3DtRw5Prrn5XxraiE4wr5PJJd9qzQG8Dm2337fu3XpahVFnxw2VgswvysrtXzVewZRdGcPu5gSX",
  "key21": "C2RjxXgDRckoD7WjAw8mRzy7k6bk2NPPNGUGoM26kaVqQmjS9LeTL46WTBrD225NJT7krpDdgSGSJtFXSCEb4Wk",
  "key22": "24oHgDS6imJgvSYnW3UBRed2UBmXPr6iKbHKW6q2jivD9pfsMnZc9opefrdc7bWzXWohqFeFJT4GUxYkkkpN6G1n",
  "key23": "4oF3Wog31bE91pkKvgo33YKMEoZsLMsvAaKFaETxNMiiHTNW7SypXEg82EphuSYab12wtH4zaW4nUsArAPcCeMnZ",
  "key24": "3Nmzx8uu9ZAymkyZkarx7Fv1Xkd261JZTSWk9u2moJkYsj4Hww9KBGCdqaw7De6nv1UMFvc9mtG7vTCEiDkP1Amb",
  "key25": "Y5goqbNW3C5zY35WDtNiGLna8MaGiNe6qnw5YRUSesnL8cdr4kYrSqqjNrtf7jnUduYhuBNNR1gNNgW2c8fZQFv",
  "key26": "5BsTfxQCMUeazYzQkavCAiywBjYFHqy3qggtT4pmLQ77M5tTu4yA7p1ANMQ8w8vyZRR3c514XLG4ybXpZsedabbf",
  "key27": "5WS3FXyhz1NUYnU2EEqUNzgx9LpYdaVnktK8pqL7KruwNCS5xrEAsN4wc7n1KqdX2rdc35mWzii5yUDJHrCoWCjh",
  "key28": "Cw7wRuWGusPgeiZE12ekyRQbuLLUPBJSx7xhAp99HnX9TwPN9nPbYQUXd4gFSoRp32rv8mAdzfa1EeHZd3CXQTp",
  "key29": "4iUGrMhBMsZgMJ9Zr8sT9Z1cDBoDJyxS4ouf5pJkDb7SwFPw178RYZ4gE2NARLrm7PCaqc8RPcmcawjphYNcU6Hh",
  "key30": "ktKWkytqCtfCo35BcLRzGjQAWgnmDYjxGNHFbm3ToRCp8LU2B22EoAHm97bBkMS31R976u1oqQFhkufw5nDc12n",
  "key31": "4y9FGrwbegzBCujj67b8mZhJT9xC32Fvz3oNPSxM4korzR71sYqWdkPRQ9aBi4o6xEPmBEQJE22Kixd95TJD53bu",
  "key32": "4WgQ6yF6q34bUUjJViTU9sAarxuZ5pWKgZkzcowKQEEpFQ5xxp93sQuGPL8WhHcmeE1RUhcpCY5tFSu7AAffhgFc",
  "key33": "2s7QxAYeCrpBDc7Gp7VXEHwEZcykrLg1oyxk7Qmp1hMnh4fGg5VWAwVgMSDq24Q1wpbvLiaAA8B7nPG3JdnUkqr4",
  "key34": "Gmkn87fReNUZVzP7A7WrYaG4PfepoUKRRTNsGtZy7HbB7Hd5CQWWZXmKVu4bSjAFLUjBXHTbKJGncaFc2qZvryN",
  "key35": "3buNWZyrfVmyDoyBbD2bWUrWFW6y1TRRGxqHiE16rTLQpjhQHeygzCkAmJghrEGmksGQVkWZAtrM6xdAzgKxcutm"
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
