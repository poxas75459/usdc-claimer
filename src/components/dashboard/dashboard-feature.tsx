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
    "3sST6CwbgvqHefF3vT6aYKd1KCm5uVHJVr7T4e8iJvaibrwjYZ9cbSS8vuEDnkTjRnxCzGRLkWzPW1hYWXjiFyEn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B8MDxLJkSsB72zMkch6wQcbzvQbVawro9kDaHC6dAhGxZwH4YbgLCQPoDDAGrbYaaNCHeNWuHR8nuu2TJ3nMTxA",
  "key1": "2ZKFk1t2JCxDSDwQnCoiezHe1tefqqnX4CD4wp7EwF1szqPgG8o5L9hzwYeoyFKoZujm62tBJcRZKb5vxUFJ2J3X",
  "key2": "3gCTwcP85NHjD8bAhESXcgwZ5XHjdLaULD27vg3vCxYDsd8e76NvUWwhsf7cj4LcBqWS2jAaF8HSfk2ntCGqQX9P",
  "key3": "4x7cbBia2AorZYqR5vdNrPutetCvvRm8TjbMd2Py4Fj5Uak2jCJwk7JTXT9tBFDbMg4Kw7QpePihhiY6bBaBHF3Q",
  "key4": "vKvCQpdNyTzCv2pvUUohP8kKaZMMEgwuTQ4FfwX1QQC7z5kL328xGvF4dwhZpsJjFHE29Vn9yby2n9vsAKMEUyX",
  "key5": "5iyXeckx4sG2xcmGtKoR2dsVNaqE2o8nBedcLNxck96EPi7KddmXjS42FGGr5TxseCvfaefJkw5rUpxw6hWJ2jCq",
  "key6": "d3XjwDKbcr5YdMVLMeZzufy8TN8Dfdjnc856cMbzso9bEz25okVPRpxnXFLopoHAjtgD2jaqUb5vdyTTnSXTs1S",
  "key7": "4dkYkgE3WYEiQ195JPFbu41aUBEW5Qz6fwYbMH5qn2ZZwvH2hCoFiyuhLeHZjbiBo1FLoNuZ25mm7G4D4DkGEo3W",
  "key8": "2EyugkQ2bxtMjXtTfm8eckhS7xzeT9N5ixLLovXXSHL3btWEe9eL788i83rKHGgVhZGSd6PwTudrYf3ePS2FxjHm",
  "key9": "4ihvwYzCgWm6KY9CcLuwfn5TwHCUdRN1qynu6JJWRJLTN3yMYyb5AYmubMF5nqmNY1Q5NPtUMzAbqHf1NELaTALQ",
  "key10": "4d5Ps9hudN9ygsuEzdtNhSZM6Rx3RWbgBWfTz6UC2mDWsya85GetzxDnQxcmD5T2g1DBTBeGqPcYoGFSaPA2BrPF",
  "key11": "2F2kzqGzAHP3TcZ9vhtrRvsoC45DMFjpDihoneNwYGjxAAEACSLkimE6c9ko1sEGHhwTtjAZpBYssBVRjg5E7nGL",
  "key12": "2FMvj3yjGKdG7esEgAVVTd8FCnRhoTyzzisX6HzbHksbnEfemu2vZyShiQrvyDEHfXtHPFS5LXENBQymL4cH58vC",
  "key13": "PkQFWZYVaiFS333GrARre82W8iXk3CffhMUDi6Tv8dDQc6YQEG5PRqW7MyyrWu4PZvkARMwjqWhh1FYBoCk81ax",
  "key14": "5W1cPwxFZZn7PrwP3ziVzVML4x76cUyVEthPQDVnHCfb6zFKeJyVNgndX3W5sw3tv8Uv6Ai6LsZdF3GCA6c2zaiQ",
  "key15": "4cEyVo48Mp6AF34Rmce1ESEfKVPv3QrzYtDd6gGKHYtMQT65Fpa3rZDu8Y2g7R9BfVZpJdEBWCFZu7Ky1Y6XtyGn",
  "key16": "5wrXrFR7qifvUqj7ZM3e1vRweDNwJWW5Nu7oMKP4jLZvYMeBrJaRokoeUoXHN9wUWEkPe3J1VXTS73HyxGbvCnbV",
  "key17": "5Gjbnk4AuRU6SNsfpL2Nf8LUSaeTv7MbwjtHmDQUWgLkijo16fao8BZRKTSWqQFynhMeedJew5vp4jAgM26tiooi",
  "key18": "5vdmhzqLakTp1iwCiyjdvUeDQoxhcH1nyjc8j1FTXBWUvcbWNxLwS17sBph7mgrED3Qx2MmyLD9tkKF9mL8673Vw",
  "key19": "4yzrgfgvNX9XyejBmfLRsDskN6wVWv1Z8Rj7FEYKHJMp5XZjdUJA2aqPuDNtZV29oUH4YPCTtkoeFZqhRHinfTnd",
  "key20": "5pnMNyi36AokjW8iPNhQgJRtJUHiKwtA2HsX2PuxtCLQ4icdbXyKBx4kwBK2eC13BNrGZXwucHZxr9iNz3M2sGwF",
  "key21": "2WcLF15snoBFDJpCuaet5WEqb2c2WmFHSLfznk73bsQ1bYs7mV13BzxYfsQeJCaTxhTAQrWUE18ZsLcJV91td2XK",
  "key22": "DCm4aumrq9uX9tg5Ah1TyJLUu9BDgqwKgwEsZiRRAr4ZQMFuFvEUNPk6Rx8U3ahUPGLrUYJ3RVJ5N6pyHaTJMRU",
  "key23": "5GNHCEhMEibgeVDFVjPzpEJxBffGEV21HHt8zWFUqHW4K9zHpTCz9jKA2me6r8rfo9Jerrqi9Hkmm8Av7iadMj2p",
  "key24": "PiPGtg6hfjSPjWBT4ihd11JW9uq3MsPVU5ZjpSzWfiMbfrxWFmiXD1wbkLHpoHJUtkmZ762JWrtZswqKWs8Gxd1",
  "key25": "3EW6MnW1NXyyMqg4qwfhWPsgHHqhMxGQFq2g9VUfg4h1m7QspNnC9nFEF9Mj6QVVmh2iaEpAK72ojejVrGBnVe7N",
  "key26": "3gkh5X3NtSu5HgwAQQYKusJbxDZekgWNLgwUW3JyRaqk7NL66Ad7nwKDVczAjaUFKVHM9WTkdXyJyRwLW4hVkAov",
  "key27": "v9eQtYyTinbaHyEA9YEkMcosnV7Rcw7p9Xbg7CtKm9b6iUaLMBPGD93NReRjccgXdfVuY5sPcTxRQkWpcTeN6C7",
  "key28": "5kk5gakpii5Dsw6UqKKaLwgkfxncHqURFv2Afe2fRkYe6oHE3kZ9nQyxW3yioreqiWCYhEdhwgxmSTvcnMifJDxM",
  "key29": "4YpvMEa8w1zF9vnDNsGZbP5jjMnTtBn52dj7oarieqe1bNJdJ82JocenoAYVkDUX9rFhej6PD863H5Kx2x6cZ4SG",
  "key30": "5nnDbqchrgondyk99MjxGkJdVSebK6YrHxsdUxj8ixHxGZD9dVLLVko7qvptphCzZUKvQGWRLNWs54TTsVfJo7Cc",
  "key31": "2e1yentcCTDL1yYSX2jSk4CN27xRn2wmnYxSjs5mz7pqLGTkmKtQRHZVdPfiR2bqYi7i8UVHxCajXLkxAZsE6Hyt",
  "key32": "5tUdukdyaR2YHno1UdCd8yver4gtDeeDh8cruYdm6AvSYB7CcieecNUMsoq1Fq11eTaPtHat7k59kWgRuvka9k38",
  "key33": "2V4ic5sdcj1pFUCz7fMY2FmNw8qafhVAAVR2cNxdEuz754wy5p1crppKRyyzwyRCxQzMNo34Ft4wayfbosRg89jA",
  "key34": "4TEw7axUzR4Jrx4MvWUwH4DR4kqzn7FXCtTm3n1Z75qGB2L8VhB2sW4wmjyFzxdLhEZN9rU1NXUbSyk9Hv2oxoV7",
  "key35": "3k8UmaeM3MQs919nYvcrfjhpuVXTsiDkpyaiQ1jvo332ugXiLCpzLntsTKcWUnxo4za29FCTS1vbKUmD5ViNbmWx",
  "key36": "3wCtiPSZLWEQMvbvy1gqT3YCvAf6Ew2KqrXdEq3beAnYtFbM4oifWMbJ7kzacUZrgy6pkNGxTqgNjPikjc6QXTcn",
  "key37": "4MeXzhq4xnogB9BgdnJcB7VPdLSjDd55W24tAqKuhogCdggr6znBqZzE6rvpJ75vHFQSBZJyuAPVaKqsmjNhyKeN",
  "key38": "48qpGnkA2gpSmydXFN7jsWpdMCViA5FShvXv3ZKUYoibvrX1HRa9Yn1LzZpXYZp5DnsAc5tXhVPvwy94x6EUMUVe",
  "key39": "5EGbWmY4izJXQaWes4kANtBFrG8vMyhayjxW8cBneU4nn7gL87fSWjhk3xJzP6Rid318E7JLZkZgENKKaxHckFFy",
  "key40": "5866bCsWhe9yGsLTNYLbCL5PZsd2GpZ9XUr8TmdeUBRgJiSt2XXgSftyiPZy6TfRq8F9nd4VNjvndXS1Yb76mpsu",
  "key41": "gJSGi7QYxYJ16iRbxk13X3LqeU4boMXdbCDPH2MMkpTnirUvWu7NVHewmSr4rsKHmAWpGXmVKv7E9hoLgsV41zX",
  "key42": "2XHCvXkepFYgbT2rcfiCuWKcBm7nLEyrAHiuTNxk9sWnRsZD3VpTNejyVT37opZK8TULqWYyLocC4cwRFU33U77K",
  "key43": "5QrHBWWGj5sX86THZX5uubvtZELyp3GvtmqDef6qTH4WYAaiYfAD1xc9hUqnGahaerVVhcUNTpCSNqodncJRRrHA"
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
