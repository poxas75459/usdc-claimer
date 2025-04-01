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
    "5UAjELLupw4sENBAK2S6XL5DbaqBYbT4eECKYoywW3rtM28y6cc9NDLxqS4f1q3n2x36EmMUgauvaPuzkokNVhgh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sqPL6Cbrg4HXABqcyncdAvRC9nBP64tiQmgkxF1NqoKq7yqhGTJ5R56NgQ3uajJDooTy1PkrTCuetn5pP4jrivL",
  "key1": "2uGETwUmvTCoZwnvMGcsHcNiAoWvsfy7TJ9bMidRGjbGojT2qEUZ6KNsEr8oMaENcBwcwRJ5mJcXJETw7VZ7k8Rm",
  "key2": "3quffGdotyfwATfBmfyszMX8MRonAVHbF4WFX7bGai63KQnqK2p1vGFin5n58ZRLkTf81prdyrXW3Th1BW7CCgUy",
  "key3": "2TcMNnfZi5oF2wyR7TAvGep5EahCrCcqm5iipkNwmmsGqHVzNBAxrqTnG4LRGpeEhE3Yr71pdtA6wpzSqZY8Yv7W",
  "key4": "22G8c9HXfpNtz6SRxeZnn7aoPkRhA1heDCvZutymCZu6rtoEBvBSdwwDYLFEVDG5EZrmYHwmdkrXDhTwa55uAJzY",
  "key5": "3GcaoZFa9AMQnfwUPQpfUPUjjWoP2kg2SUCp3NF3NeRcEcfjr9otQbjNa4SaKs8k3K69BDqztkfniNsAVCCbMEVa",
  "key6": "4zYGwk1hxUUTNnbMRQG1HdPX6Ao6rHSeJmWhxUV7P3bU12c7fkEpLHj1h47deBB8dL8bG66bffa8nWLN7VmVfaxM",
  "key7": "4DXK37ZvpSFByh4S6p5JbM9Mmi1dsap7UYyaPvZKaVACn9ijM9JxC1Z9NZnswBSFzh2vzKMbWqXnsqmZu71PTQ8p",
  "key8": "5xDrZuWU48km6CVg72zAnyH1drADVWaHho79mFthtosEVfS5Y3jxp63tkLjuXphjz4HVkjYww6aTnksyo7jdq5Q4",
  "key9": "4kybhoYnjjs2qjQvZ7SWtHtGbKQFg19sut8yPvMsNCnJYXcmG4KQqQgKAmKkZ698hD8MneXXfhncuNzZvDAWYBtR",
  "key10": "i3QmwSx4p6R7T4Jgxu1VUn1iSidaMmFC7hsoYfkUV4KSPH3cNQHvn7eECJ5NSarpF7XDpUo1SeHnMXaT2avS9sM",
  "key11": "4TbDSWMr7U8dAKwGwPfZ2zs1qHx5e8WmYuU68sTubF2temsQpHL37J5GDQ4Qj9Fwfi8AMqwTCP74MytU3zkfVYci",
  "key12": "dSDdqX6NkepNFnXPXyLidWGFSzj9m4RtPLggRdLhg3u8TEvnGtHejPCFx9zUR6NSvUm2UZ5dqHJapJhBhRamgUQ",
  "key13": "2zDCk8iwLDtvt8pJ3hm3FFEwnyXBEv9x2T31GG6JvhpSHzfBVSi9oBRBSjLX9C5yEaDADmZkRiL8gNqQcD8wCxiB",
  "key14": "3P1CF9T8PVUXgQXmiWitCL2kmcGTbkigLr2aYaZ5pbDbP8QPBRX8d58fgmZygdEgydnjn9tdGffWjrXatk4dX2U1",
  "key15": "3itv2347iZRxCgrWUqqkPsn8KFzWjSoJx32U5rh88EMpuv1gHWA2CiZA2zAQZvjrLV18QuWTNnvUpTw5w1g2NaTm",
  "key16": "2UgKs2aXd76DgNgLqeFH5YKon4ghNjnK6FPeq3UfTd5F2sLTsuZJ8xfXj89Tq5VtrMTeA9N77cWB64dea9UKKcAw",
  "key17": "2Dk9oAimoAX1eSnVPyFsaBwomBUSabM1XaZ5Qn7Paa3eq6LFLxcvydFo62PuVoJR5zpSNnMi3kQ1xn1iRWrNyPHV",
  "key18": "fL3VktF4i1AaqUwpsMwdyJUYxhuQDVGZmmNo4hUdCnBcVkA83r4B6DVsaxmp2UWBDvnNvcaQavcwU8bFDT3hknV",
  "key19": "muaeBfarLjs4ucaVD85ngJg7WZvqk35RMigu5bSXSgG9saPBd9MjGQrVyy4TFnevogMQ2QejAs22D95u9hqM8tL",
  "key20": "61tH4JZsibusfp1B9UWEkxT9SL2jddVMwSodhRSTGxzT95u9b8vv3VxU9kTXKqMdRHcj1FHMorzfNhPhEt5XPGu1",
  "key21": "2g7prBL79K52kUaKjctRTCBCdf2Z6TE9Kw8brSNns1Xk9qbEh1Rjrdo14awuPtgiZ7TSxuiteWdfvrvqrQRaYR6L",
  "key22": "7Gj6bnwPsRmfRbEFaT5p6DrYiwaZhnCN1pox5fq2zT34VZj8fRs9iFxc5zeznXubUtPZqMfDMxh8WQQNLiQbt5J",
  "key23": "3wU6KE5ru3HUftNC1r7aSM7Hu25WdB8u2FbjZbWvTJrDRsDQFrztJa6v8UaVq4ZPRVqC77EwHfmjK6F3pWL7qagS",
  "key24": "5x9o1hFpc9fZoJAMteE7vkNASkoK47sQo9UiH13CuoKQqvwogfUWLHMVBPBYDXaPUqA87k637Dx6yz9XWYtkyfLH",
  "key25": "z1KUgj2USRLtsivYSFRTnZ4A9DwTMezbGrwywxDT9UrqF9B1jy7t1in64D4c1RcksMrqCi9VSp46JEGUNngs8GM",
  "key26": "5t9BUMCvPZZEPAyWhod67NBpTJQCTEUs6mSuLHrxLCkz44MF2HeVErUWr2E5GGZ2EqRrbDteERwH1y52ifV7FjgL",
  "key27": "5PPwVGRcU2rvYVu6inhpQypmYQ6nTzsX1n9GvjUowQSThFj3TwbPkfQLZwQL7LTNquq9GgZ4uSYo3YqZ6BCt5MhE",
  "key28": "5oJbH2wmdzMkpXDUsMQtLusiDcemohZUgUksNcSfjzud4uDnm2k4wtt2KVsFZpox47n69bMSWeUyvjnYzfBhkbb6",
  "key29": "8TaCYaM6s4ogYtWXmStab9U9TSBVU4bjDBXUWQvodwhuGWYcfsaPnV57BrHFFrjZdosixYFhTXeDvWEB7FDi64q",
  "key30": "2D1wrb1mycWgnPcTid7yfiPfEpg6CfTyoFRyGh4eoLTLHiX7ADvTDnNQnUFPM9S7HzUCJYUu6dqnVTQEBtPXtXmU",
  "key31": "4AxKAsxJTyH6CpNV9LyLZ8A9sDtqirryLWS9aawQiCxvAp2JAAE6gcfofkZjdgooUmqSUpZaFRLrWY8XgoM1uQBn",
  "key32": "5sN5jfTywknWAxJNaMvR5Ys1WrnKtq7gdDvRzgtXnMnx2ajh3tKCBg77sAsj1hVdtKgmyjeHK4Vqnr1B14S9mYyh",
  "key33": "5XmNZP1otWgGRhkWEtn4kHhBHT5ei24BtmKNEq6jErycMvhcRFuwNjtNXsE517A4BTvWfGtSxzxDEHSATwXti9Pc",
  "key34": "62qnAgvFZXChMmu2PiD5xukMb4ke6z1enic8CjPRdFgXSLFDkF8RZdB6ytuLbhwTCpNh4kcYdnKwgar33HVM2gY7",
  "key35": "3BG8JzFbY4zERzZprWram4mVS6zRwQKMw2Pdm3avCB4LDpouU5ky39k9NCpWBHrqd7jatnUUw6y6XWnEnYk1zQgF",
  "key36": "3TmqZQBCTUEyfEC9tuuwNHYoQ1yvSwD3xoKgTKmoukuS6LyVcpYWkAyGtZhTfr9ea87xjg4J16kRSVVJDHH38KcW",
  "key37": "2L58Rk13FtE42jwfzcwfdbsZYbXquJSjN2rer7zW7S1BKYdhJoWWDHjxhNhcwZ24G5258UTMBtp1xZpfKg52WwWP"
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
