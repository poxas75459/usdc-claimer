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
    "62Xx5LSKRqLV9DVWsMxe2FeJqLFUy9VCxLoGmJoWJ3FWowZDmQLMPxeZd6v92fBQVQFowaVhKAB64Kk1qPntqiNA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WQDNZFwGYw644ZmhRov1wwHGw9NjHH4DphYZcyTTDrRVbkj8Md1GUuZBmDL2Xfkqw9ao1MrXnsNzehJdh4dNqsh",
  "key1": "2mg5bny4VqEpM2s5o5CHLxpa5rjGy4gP3Z3sME2QKi8h4RzZqCktAuVKo5hjgxh1dFNhtmXtceNAwQaSFbBM2y5S",
  "key2": "P3NpxS2hpHACJdDmNuXhH45nyxZ23EhaiF9WqVL5TQfi1hUQL2F9Rv916uvpV8A6k8sHGf2pDVAUA9A2nzw62ah",
  "key3": "4HJ47QtXQ26PtmneUGcfhrVZsLtQzX7W28SvA5GDA3w1dGfFUXaDR4aUBCZFLtbUY3ZDM9FZfo4jNPmRRF5xkRiw",
  "key4": "3Xdww5WyLqHbamHHYVwWPo2d7ndDkzm3R1TbXjDtxLDN7rMgxQoffGyxUj1MhYHH7Hk2VK4o7C1mnHVubCdsQG8c",
  "key5": "3cGQ7dRFECSb5fSvLTCwqZPbfgwCkiVs7ctSyLiTeDHurbRQG1gK5kt6ygTPs84RCK4WHyYudCgGhZanPsoxc6dQ",
  "key6": "2xJstBUGaNQ36xN5pvRR2m675DdzveHzvrN3AJdSzUYR1EgLq5yxczkp9NSmvjYory4BUZPsoLLXJjLwotc1qMzr",
  "key7": "4Am5WW8zRypAX8gKoZdC47TmsUeipr4KkMJNrHAmGQSyaGb5pbZfcJKL9XxeBuoyA4kvX37GmU9qtryiZm23XRP2",
  "key8": "2D35HL8jvdmpnzzcKk2X8kQrZQbDQPU3FKEvKoXV6MjRy11QKgKDzv3hABC1nw1fz4H2YymS4qm4DqwiXyv7N7Ce",
  "key9": "4k4r8wgpKkBENRRvMv6gtrHU85bcZs7WGkskown1GT7fULpdJnT1nE2oaj1dHrzTzPPxmpM24v8QfbhPtRqvPKgp",
  "key10": "2mVM2vtkAKqJzPdeoG4hKdEVg3nYViizfP1i6T8EGNxwVMdG4GTbSEZbiFcobN6DFD6g7sXVjf13Fi5qv2HKjSgM",
  "key11": "4bdWzPruGSqcfDMxu7d2BRu6kCHTnrGynz8DZEKuQNjmZE6MbiDTin9NTorH41qVLY9gQbhr7ih1myqkDGcfrhJJ",
  "key12": "5WpW3awTD3uA1ZgKbnz91Gg9obKh7ha9oPDPiCkSK46jjzGxF45hxe2rqkgAmta2zFmwN7cMnmYiXXKuHq3uvyFz",
  "key13": "2USdW5qNR3VjMBY9c62XyaSzpYtbqPVGfSsgYMNQW3L6hS1qohPmjeYbG2qbRg5JFc3rqWtX5kpYDiEa3tWXCZUQ",
  "key14": "3hzNKmBPZmzTdtzEUTBj3wMfi6PbqkCVcKYHZf3d8BWXEr8MKcPFSPHiVsUcrkiAAgVYbYRCTBKphAbk1AEdVWs1",
  "key15": "4nH63MSPLZC8A5CBDYzgBj1otzuz77SqmCzrF6QZff9bB4bzW1hKgnxnZTukNTCmvZC8X8bWoCu92jCRtWPofaxh",
  "key16": "3dY9trBZdB1A24Wp9gG6TxbS7tBZKciSNaUKJ9xEJgGi5ZrPx1vdCFbH13pi645MWAwvbzH79NhdRrFvXuqMYTzq",
  "key17": "4oNfSYdzd8AcZx8oDqpk2punHubUKp3fvk16MGRkhK6dJKtpfA99ceXwd67vQL4TDjnesB5u1N2UmFr199Dm9KHL",
  "key18": "4jnbQZUWo4kJYNLyV3mWdpVRC3SSqHQmuFEaQbcog8ZPk1Z6Amh9Uc9mAUT4v8izEiHv8NWchGvvmRN3GBtWT4hN",
  "key19": "MctiwnZPjHzUAhZ2ELW71H5MBLKDbY994vtrMD3aa7dH9J5e1AMnUnYDM8ZAbFxLkv6JwRQpF67NZP9nvQNTny9",
  "key20": "2a5EhQmKoJE4So4UFKkdqeKbJZ3SwwVtPiSVvX9cB1VtwBUEbDnodJpEER6r9b44Xiqny8kjqQmj1yTUPSQ5wEcj",
  "key21": "4whUwx9ZFeyYBXq7RNRWsAsDv8UStF3RJXmqHbRknVdifRGkgnLovh2oUDV2CV7gTHFpwKLnU1q4iQnzGdsuGnUX",
  "key22": "414XkJo4giiT1HYPZryGPp3Rhkp7a3cz9GJDYcFnQA2BYrYnMs26uAQUi78GjTrru1GNY9KdaGRaoHRh7JCCuTw6",
  "key23": "5gzrBCXHXKbVDMS7UntteYedeAP2zcwegGGbqPmYTtsK3SGJAmoBq4UFL9Fd3NX6zPMMvmH5DVwMqUzq1K5xsqcP",
  "key24": "jnbWvi4RSRRKwUUq29bMk1atAUEfJy8SY8PoBgcypGPAgoafGA69kRJedPEPrXiikTpYppkJxodrQ4TJJKGSCt2",
  "key25": "x6RpE1LWfb21j6VTwh15V3KotKdfjJ1HuxKj5Gq285L9V6fDcgtz1KiPdAm1PrFBgz7r6QK9WQj217bPdJFZLNt",
  "key26": "z8ZVLsqqRQu8Ujczj6heY97RGLDiX4yQ31E5MCCvX8SGGywQr3vz91ZrRFURCxM75ax4vWiQiaHNMnFKG5WWEps",
  "key27": "4SeYqkUevUVBkhSXVkxY5TSpdhWJHMHy3DsV4fE4g52MyULQixZEvErb8Foyx2HiXs5TEJ4Q4KjBW5eMJaqfG4Xh",
  "key28": "zHk96w5x3mq94eiSQNRaoYrAjhGiUQv7Mi8v4BZmEYpzh5YbKbQVdfVnjvgvpXruTqeyP56WS2y1wKqKpYZJrWs",
  "key29": "zgjhAnKgQnfNPtvt1k1NeKZUZ6gcRgxYnXRT2WHQYrC1rPwJmAduPF6Qtk3DMjMuX9NDAwKJ8EEKCLbmPmb6ZzU",
  "key30": "4bwHANULEemDdcMwWZFEBT7YDRxGmHfbNztZYm2itHxhh5JtFCwwGNLeEBv4mCmhjNwozpgMmG8kWKZKahmpyc4L",
  "key31": "3Ke2txgXECKPvXoiNB4DnXHLDyDcxggYbFNnGUS3G1NoY3Hm3CtD24fzwawfF71cJgaLTGPTPypDif9HsdFg7hjR",
  "key32": "5pXHRUYjRpuXbHWX9LeGiSEB19QGfQAaFP63ATLoSduUuL6aYWZznmg67uay1ccYiywhXQyeNd3hMsE1otNcaChJ",
  "key33": "FfmKacnMCCErQhLY3d9C7LpF4Z6N6n4rFuAnPSnm4oQkVa8RL3RQXX5Fi9XkxMcjgb9HzMksUgKQ2Gutx4fEMeb",
  "key34": "4YTtm7kFUSZGvZapwfqmDVCZY8uk8nVa2Rk29ySohQ9osVq7hSu2Rsx1H3QZBxRjSYFWn68L8hinxdjEYGTSvobE",
  "key35": "26U5GrqqsUcJabWrPh6MqXXo159G3M66QXZSqQBNvbAhucGLCC6yMLNfmoA8rH8EJHfwFuZNHRFS29DY7t2PpFPn",
  "key36": "4t9d5Bondb5AhVox9r1E14ccj91CRVi9JPBTddfxkUXwTpYNdwAyyqwjZZYx4CaYwYVKunNWZ5ifC3aGD97Qfq2",
  "key37": "LEiMgDDQ7dLhrjLTf6ytngJjsnLxDvX56mzKVgqDQhfjk2cJuokpL2qyvR1eWEtKdaM7Z9EuiqArpg1Mxe26cqM",
  "key38": "47DwjA9FUaS3H5yGeEqSvDC8ZWqauYzoFFJZeGmtGECUvfTJTjxwViHzifv1BaN3Hb2BgvnhMVKRvWSeBTucPVJU",
  "key39": "zLkqtUB87EHWT32hoUh5ZKRPB2yM4VYeZ5LXXi6tT9Yu82iFHBz8Uk7UCDwtDqzitpzQ3nk95HbyaHXZkyY1Dam",
  "key40": "3DeiTU7YfLFraPsEkSWBHacwtY9jwuke7VS24vuCxPJeQifajT2jJL7WkTr1LruWsUQycuXkvfPJSPSMjGPePdwt",
  "key41": "3XxRFasxewuiDiXszMqbvRMzYSDuMdGah8iqdzeS8dndsQZKg3iigYDguyiHLU55752xVRE2ULDoDNHWJG5N39Jv"
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
