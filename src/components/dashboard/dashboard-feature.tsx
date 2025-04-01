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
    "49bdpwSabeFHFGQi3ufDZbKhjNQDrRTjwxmwJq5vqegpf9DVeHnEW5KiVTcMeYHtEh8UJxQaXUkfy8JPNmnbDmsW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z27MfgiUpqNsj9ayz6XMJNGuxRwp6peHikdKUfgd2wLKWAQTgK6Mx5cWWRfZWKxvHmJNyCoJwNWvm5RoW43kouE",
  "key1": "3d6sNfuhpGLSw8UfdgHomtR3LPYXAXYT6qECvvXqaQt8Zg7fXQ63fk14gWoheoMUG1yCo4yqQRriFkno7bSNc5sE",
  "key2": "51JyJvafTopwuRWbiuweMQyXHQnhXYFBxinkqrmaxoM59zCPHaK4Ep1iS6AajdP9rtjdCjEU9Mb8nJWehsNDDYpA",
  "key3": "Fkx6z4SnZDg2ZUKx9hoUboDjX6J9zZwhC8eASAfCm7bYGVEn2XW5Tu58E47ikynpqioa16tStgTWBnHeFBGzx7o",
  "key4": "fh2R9CoNNeFYCvNNyiJsQ1JtBW9RiCivJrYfb4YNLEzVRCsDZ2CscWGDeZyTF1wTr2H4UY5W4nmqsQ88d3GbQ3z",
  "key5": "3dz1DRwBVWcijmBPkWVzKGYThdPjLd62xn13iSbVeTMsc43k31HYVH798EszX6Qi3ynP2sT5hM1iBGsGbBGswkGJ",
  "key6": "31T3MqDdqnJmAD5SQs7XfKKEBDfiMoZWdnojENuFEiaNU3cmmMFdcBnboKvfiJ2tSdSNKihsrRnTXXkTYAannFs5",
  "key7": "2YZuztPSdJm1sDCznjHbyZ1grMaMjLGC2vCQf3zcfTimyUWWuVHfAkryAdRG3gXC7ZTXaoQFbGRZjgxqKXkqcpjr",
  "key8": "2FXookvxC1Uid8m7nfJZnRT7dKt2Vi84mh7MGktU5K2nGG6Uijzr4yEkz4Yz3498mUwMFwc6X81szxeCpUgbn1n9",
  "key9": "4LiHHupKmeFeKyTPswh36Tshs5QfSA654EBzwPxzQXCbedJdvYejeCiuY5VjuKXhoyZB5HrWkexd2htP8MQzfQT8",
  "key10": "51A3ZW2wC5Kg4VcQMFB4Hn1J5Epf68Q9gzuaDPPRb3EezWXFcigYks6dCEu7osPYUYWGbevmQxzAUrvPTwCWezB2",
  "key11": "4yW8wdMF3uvsn7JZYocfd15coW5MyHx6aPwZqfHfvqdN2VPhe9wSa2MUubnj9SUfSuDd2qTC4rRHr6qQPgdDHrwg",
  "key12": "PxkyLrZuYyvUKxLYrFtzkTkKssh6Kd58mG8eHYPJdWWv8nDxZbBAfPaQVUsUEGG5vJzEYc4eSm1bqyHf81yzwHJ",
  "key13": "3rxAazP7p8VuVL97EKKi9SF7Rq1HpeM9eEA35dd9cUSADZVRTePQimgtWa2qd4GmbdBdepbsnuhK1QgHWSLjaJyn",
  "key14": "4nVrQPqRjfbJDsbKwMV32F1JMqQRLs8TgftTKZqFfzycHmw7QTE2BRdZufr4JAX7V4QpDb5dFK7Ji4YDw1kEUwme",
  "key15": "4Co2Fw56xidw1sPDQMWWVJmhicFTjq13MF5g8kRLQo69vWi4VhuRANojdv83TmyQCSutEH8DEvra8aVHjQQC32o8",
  "key16": "2YeRrqQGgE5QkHzTHUwpVgbfzNFKN9b2RXNXEidVkpxfeSBtbiPqscxDgcm8RXc8mdxQrah7iNqAwdLpk1B7vghq",
  "key17": "4QEtx3NhuKgPStX6JUsxHPVHGvQriyPTDG13ptWdGSiZK1RNr5JSwZABYHJ1rKWceMCF3Dszeixt53sVDsVYWhr9",
  "key18": "4NeWSNHPPHfhGRojAAUR6aB4BRw6qP7geMr8rFxzKy1Fs3JCqSXyzL7XUD3ocYdtTzq3wMh4WbqjPARNuTCNRExm",
  "key19": "5GiPjazaxDDdD3BULnqoyLeXbGVUegGAvnzKEEc3cWXMSP4qDu5SwyEGhfoqY1Knpxn2hZqicma9JzoX4AB9YhT5",
  "key20": "3W6hUVvuXR57HKPH6vyahmzCFWjkbqrbXnxgXE4NtgxvfzJtBEyzHzSdBns3QSyaVrRm9rWNUvUsowYMTrw5SwSF",
  "key21": "5nxRR872gRjbJkZ9QxkVbp4gAnannYq37nctQGRYeeEjYkYnMkW3qRXKPspRYdq3o5qT2KXW9CsfTpt9MjC2YKHt",
  "key22": "3uFLWp7hz1fW4AiyvoRxbAx3zG6HpyBDPeQs7FN55FSEfbCDHcCySvnB4PQodhwhswoMFgXbwiDr18uCH1DN9tVy",
  "key23": "4xsGxtyh8ci7BJwThjRrbucA2qx3Un7c2YgHqieUfn1TK7z9NGXkTbFGT5T1fCB273YrKqTJsxHaMLnMFPNFQRSQ",
  "key24": "5BQfM7BThyVqzTRRzQjFpf7L8RVDRHeFQi3n9M72mmfHtx4yQrsUjn17qRNaysEbLau1XtykMySYWf5Jxi12e1xK",
  "key25": "3aGiv5tbabKf2Eu1PX1n12EpgdT5WE7gwTkguPp7WcD2JcK2pEt9B11imTx4LriV7Tcrs8NvA5CJEpkQGvENxTLA",
  "key26": "Rt7dS6BydyLDHpzGPahQAmsdHpsQCCvk1Hi7Cvtb3RETbne4qEQTydPrDa1D5uDXr2FpifFcFP2GfeTDkNfVrwN",
  "key27": "FMsjuSeU8qzMogGYyAuJH5N9YaQeDtxn6HmSn5aWg33aU9CKRFJPECAUHx4FfcyezP2pDuEGGDoHtS1ve3uuTat",
  "key28": "2uojURbtnAa2nRgtCHHbXdU2JDrWza2NJq6yU7peg21yz7gttMvQ2pEPzBZJAK5ewGxvjbXUhZqtn7VkJSawWqEV",
  "key29": "4LzJVefnvrN92qxGFXqN4R3pRnWSX4MBtcSw9CCubqyWduaXzP4L1fs9x9RWY6k3dX1yV112wu3ke2omX8WQdxPF",
  "key30": "3XfujtRofkDtDqL1Cw1zAh41xKVtsBZky3imgnDCi2H9ijggf3dJpkZ3xtETtJeAnwdqcpP6Vbj2A6iLyo1yPQ4m",
  "key31": "UuGyT4EMzg1A6gycr3oRbg2KzthCJonRaXGGBVDDBJyBaqnbxkeKx5fpaZMumismouUaFW2wHyfZtpW6NeiGbej",
  "key32": "5NJjB4LggqEFEbZtLy6jG36afxA42z1iz5DasH7Jk3SxMotCQBKv5vEox2HNjL8d8ph2NkVHaATzczRchVwJfnGn",
  "key33": "5sWJZi19UExmq7nVaoNc9R3djo9nUaEhP5zx7hHt44t42bqAAiz8K8GoAmkqG4gywyni1i7gDgda5nLyXEBqdYwP",
  "key34": "dh7SFoJLd7QKwk6rBjoLTJ1BhBevuyYAvxMCHwz8PwRssYVR1t9sPUr4HwG132QXUHL2u7zL2jk1Z29Q84UzmZK",
  "key35": "2neUB8g6s9bXREmqAr8QTJiYSAps6trbojXKVreTdy852iRFDBaLfNTEZeJWR6yjHgMPaATDBVZDSwTshrbCdLK8",
  "key36": "2rW7L3Pjk2JMzFBJi5sAXwgP9J38XaKz2mcUSrez7uEcxqzer4xQfiEV69B8zjadLcNL3374HxEmvjAHq2rFUcnV",
  "key37": "4JDqm42C292mtAMb2BQyuXNt74pyq3T8n6iT4CEJT6h78tm9pqxTtwPnQDqNWkNyy5ZpwNw13Z5qRDQAm7hv11uD",
  "key38": "5PBMkTkgDjC8EaeRqwzdg5aHDG8EBhjDvRZmRCukzPegQGb9sKcX5x2bvf4tdSsZioFNChqjf2875R6pVTbQLixp",
  "key39": "6dt56a3za77otoWzDCNeKDB35ZQqSTv2jCMHUoUDh7WNHeMdosyyKj9iV1FFb2LhA1gjZuKvzoszKS48prktKhb",
  "key40": "oY1wfMbCUGoCZJVVLmJrBM6dk5j41VsKxfz45yHXFTRDK2B9JrbQJ4B26y3jpPGtUh8996Ty2nb4ymWyEMZgcC1"
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
