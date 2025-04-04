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
    "3HT9fSpxLpRdKi1PupzqZo4ZeNzyBFGofmyYd8x2NmBq6kEuFKkF1Ppc8opPW1QudLbuyB2zL2xmEKVhvSjZXwze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tqw9ny6kb3dpDQ6T5GDRBt6cWURwRS3mRjKYmWkADhLuhBMXW3RwzZWQnpGJZsjo1WXbvjsiptSRaAPPnsJixvT",
  "key1": "kreStFyZ3d27P3FZkvMKwJ6hGiHuuNAEznJGApDoB9pzH6WCq4TRU7uShNCm3tZpHz4GbMA44fxbxJepxsJMSzd",
  "key2": "5rQAejbhNpXvSrVx2aYvFuUidR5WfmmtWR6VGMzTJ5E6PFqCyXDTff41c3X9pUhuMxBbXtYHB6cQGeGJ8AGp4MBV",
  "key3": "4JMwKtff4ryiFspfjvvgCyPEKYXZ4GYSeZA1iP7R1ez5SNghmGVRCkxhAAoGYP5maikR2ABw7DpeK8hjkfjMK2ni",
  "key4": "2YdVuBdeYtDn3wDmuBNiRFjJRPPC2YWs3cNM2q8bxu4Sb3uUsaKbnvaReAnyF9SV5CnLQZu3MjQpy7aKiXqLeRjJ",
  "key5": "3toMEpmVFGay8s2JWSSc8kwe8YCQgcp3fqy9cxhpFDGrjhH7GiVxUDhHEFmKgnFdwBefKGAPpeYukdae8B2ZVb75",
  "key6": "Y2xwJ8YzY6X4pZFPqvG718vJgYi32TVfqddSgXPyQ1a1bZzS7pGT6cSw2sfcHwnHsHwJQraZ72gQuMzUAqBfBrH",
  "key7": "5pfBj5yLLm5SUhPjpSGtPxJcURetc59c2BfCuRDs8AmanU65qvPghucVRcxUhbihPg4XAPwMJAY7k5zHCe6jRzG3",
  "key8": "3Y5rpS1v6oDYaVkmyu9ZStAC8U8CKpm3JoHSz4HmbJnB1ZyiixquNQBUEKAPWqnbaWnM2z7G2Mex9x639zftcQyF",
  "key9": "58xbPFQaX4UvxNZF2FJxjWZdDfQkCNvhFdTbak3RYU8UKivbkzYwHqE7amu48bZ4RLA6rrus1rZzjFrW4zywk9Mb",
  "key10": "pwBNiCZ1yV52eHY5kZXksB3CFx2AJaXvEUt7njs2RkYLESb2c4oKVpVfJTNT77eYUdizYFnkTRhTDqTF4qTvc7p",
  "key11": "4KUdmZw6EbDnRYERcBSHRQ1PSpdJvhB28orLm4Ycbk4gcJiUKG6SAZbTkoZ5h83gobUQqQEd169bviCxD996Ct6G",
  "key12": "2CLASWrMrCMZnmPqxZTUHVsJuFpyZMze8wf1KxvMjTRVHiTabf3ggn3Rw3MNJv5LZoUqHWKZCAwHNpEt6kTfZVBx",
  "key13": "4rSgAYteSPUQ1yMxHiUweg2dKbjyVfUjTHQ3ycgumviZGzeB9SGNa8ctBhi3M6spJhbnazY33wiDhXszpG6kevwJ",
  "key14": "5KtE4ciaz5RBLndYuRexDCyAEkEbPtBpy4dugbEB2Mz4yA1VLmRYqX2NP6JYnSqbUdrap2tnEGL4aA1kevGCjvo4",
  "key15": "4jHastCAWY9YdWY4CFGicKFBc82XPyedp9W2jwZEUi3foEe4NydUFdRDihzCt3nYugUs7hVCAXYPzjx2YB8MFkGo",
  "key16": "2xx5Fo3N43D88RMcQkpAj6SamFRbSmF5cRhg2FwAC5ca1aQfyrnxYfNDEPJqWzL7H4YnXyE8so9KcE4YCbM6V6rM",
  "key17": "duaMqxTNYuuta1TtYLeaUM9MNu7rqe4SyTKd4X4rF9zwkXnhx18LQUbY7u5bE2BtsPSRWM9hx3xJbst9ca5rpT8",
  "key18": "Nn6JTiHtecZds8LEdjKMJV8Sw1GAH4tMpiCPfoAhNr38hQAuszw4NdaizsheinnGbv1JB9UPkDYFkJ4FenJ5Ntn",
  "key19": "5YBaYZWcg4oU1uC5wU29B5f7tmoazdRTGBv9DpYvzTYH1HLmLjifnxrNxC6YjrcNGdH9RvJkWStVP4Zp2qXAtkzC",
  "key20": "UbJH4yhr2cUqPE269Q3g1cSjhTGh9wPu2eew1kTHxtq5GaTVPmk5RSQxFAGdsnfAfhUfSxqnAJzK5Vq9XrgBKZR",
  "key21": "5QhR1L4ETYJuNRf4Hig6p9fwib3Bibay1nStsPuxFcPzouKSNCjp3HuvayRtowprVDN3HaF9Ybr86jo4xdvUF6Bd",
  "key22": "33KuYTgb49CWf2iLFE7JXSNA8PYRPt5GcB8fDsL3QCQYxhbtArdTD9U6Cgop5Q9vX69UBwSuMqPXRJ1ohNtpKEZv",
  "key23": "5UM4B3SjCohVvV7qpMhD2HZk7uqSNHq8CxVc15quyxta5a5WmGUYmaXRkRGwrABesQmdtvtyEkQvSdriPqFjQRqi",
  "key24": "33uLBLH7ZRmafQS5X5kzafD1qyWve83KG6HoBtTRozWqmy7QYi2tGqhBaUfbYtqAPEc1L5cDAetKLNkmVGFGK9uc",
  "key25": "5iW8wpyTHXGfZvdGMPLQNN5sHMor89pksKtTH8dTchUDZHnv5G1u23YcU2DVxmpwnWTKtVZqtSpCMZkP4gHXRYWc",
  "key26": "wYkmg74D6GznJvQ29Vg8wZUYEAkj6GonZjVk7PMBxydM5MEKSxKyFt5FgSDd4vYBJits4ueoNJ6QqNwrfAEitw7",
  "key27": "2KxHPLRYRUWHJuugd1h8QALXjnCAgwHi4YRGuuFuE8spgt24ncdpDTu5DkRztiTZfxp881HHuU1gLuZNtt3Kc7Jp",
  "key28": "3mEqV9AbXNm3bQb9ECTUjtsUQyGNhB3rSqrSbxNvGeZaDHRDd8BHhSodddNdJwrtXTaY4oEaQ3nmWHRUBxHjGd32",
  "key29": "T3e4zz15TEC3mXiqC4ApYvND7FSRwk3vQ9SySF2F8UojgLjBoMQcow57H1ZnDRSnxuSZUExyCXAdutUBo7TMyxk",
  "key30": "24VHrzBYBSbUkWJp1j6t4hPs1giAYzPzqp9uqpeUiyXEEYF9DUH7DwPj9xp9PaCRohdwFoMzA14mfwBbwgTwnsQ8",
  "key31": "hJkPM7un4zFszWfaEE7f6JQhXwenDXbHPNGrhjeGAn2ot8n4ifhRgypVCLPff7cv6bGpeKAudXfjP7sLeBYcjFr",
  "key32": "61sZ44AKVd5Y39AX89wWtE2YgT9Ai2LY6iB1ZK8XxFMC1DSpMTYVT7tjBRh3RpVULjY1FP88GXJqRS7wm4Eb84YP",
  "key33": "3Hi7TDMVJmXKEwYGqcLCjYNrUhoGsykLdQMk4iHPsagDG44RZtp2JuHitBiF2HLd5LA233mv49ZBp4t7NxTu5Kaw",
  "key34": "4FhSNeXKfCtVzkZxxhtHVWNg1HfwjsVGqe89oVkv53weYFzAd1MSwpK31dJdj3ZWAfCkQsDwxXizv94s6uXSkyvt",
  "key35": "4diTdjoykK6k8AvDgL81oDE5jwuLLzvZhjpGFSaT9PfirpZsfaaXX3V3JjLBzxTDW1NjgSCzNhHLYqxSAXadKFvk",
  "key36": "2HvRLuhnfkjnWXZKZTonsyJbujrC9xpGU1LDiu8MNycqzjcjgZ3QLYiFWZK38yV7U15cRedWzdhKmMCAFvfbXpJz",
  "key37": "5phUiDrw5Evuy2Uz64wmnKF6Z1NRwAeFnxho1THWnB12qQzkrWWR3YXJ8b4X6jhutK5F4dnqrvcgSc1VZbHJDrnC",
  "key38": "fL1keUELJTve5JZooosiwAj9wThyepekznKRbyJKYubXh8NuG16N84TAywsNAPn4DMvXdYsZTcy3FnJUhiJUzAn",
  "key39": "GQUkign4eZqsahDrEGYHBpaA838juRVcoUi36qoqmGQQYVB9tuKnuK44QV1VzsmyyZgHmvmYvKf4Ur4ECx4kiDC",
  "key40": "2ERoooYPArwATni3yGsHywXqfn8Jf9c4rYsu7jGHYfChhvUNEZxaVjLkteF2izPNoDbL9w3nYNPB1mrYuhMfbda",
  "key41": "3E9ezEAHNfVoeQXS7zcgLy7gHJ53Z6GxHMVT31L8p7oN99pbWUdBctwMfsiTmAb8VXNZJSQWBc2hhySUsczh7szv",
  "key42": "4eh3mgJR1mZs9KuEVsrP5HnEPZZ7WNHcnLP9qRJuohHfFRgSZ79QwMr4hFzFsiYaHkyaEV944U1bZd9LSUU9eU2C",
  "key43": "3RaqhTyQT5fyZcUHGPmQ4HyGPcEcGoqUBAovwdAiPLrpkiHcGtueZBXBw3jHn21wqZRw2X4gXunp3dBxQUvQaM91",
  "key44": "4NuM7PSgk6Lsar1fMsmbBcYsGaUNnevJiaX1iz9jnnVaikePro8k8cnbTNs18ArH91KnarRLW1BK9MTas2CP6R2m"
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
