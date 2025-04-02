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
    "3peZ44GKMfhe4UeaXWf3bsFvYHNZ9uNrpmooLiqWeT4LJZAxquFtPBjjT32Anqe5nZ4TC6yRH83LL7bzenH6Gwja"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mVma5b8LcyLgcUFN7KAbB8Axeb2fYL7L9uGM1e4PAw1CZMMVZ7o2FGMcaEo1CNiAi9oWqaC4TK2suEyyGvwESGk",
  "key1": "4Zy2uNsfwvRFT2GCWzjpRhBmU3a1MuupMMESYdXMkcaEqZV9agEZaQAbZs5Gy3xt7Z8Ur1aHZLiuM8D3XZa5JXa9",
  "key2": "5vfgtUgNkKtKXWFvJ9yJxqgsWkQMxu1tandZbsPkMwUmxNcDpQiZtgGqKFgD7zRTizzTPPjuKq3Vj5mBAxAebXEY",
  "key3": "2JZ65YKHYsSpQugBFcbKDKguwo1z5DKVXePT45jfZpHQDGfsxPP9PaV9WLaiuUt7oJC5Nz6zJ5Ye3L6cf7Nd1ZUS",
  "key4": "3mRRJSnLwEBU5QKjQT1ofzGQUcXEcmQy2oMMg6Buz9yGGNWWYxFQ3ghnEUzi2rYas4Xf6GeeviQc9E9iaXSpkCEp",
  "key5": "1cusmz7AB5kcVgymTs9sjYgbSUfRiJ9ovPWi3RPrLt36eCcmgz6Cp4MAKCSAL1f41D62czWoDNWGNXyuzfVTmER",
  "key6": "5CYtDiyJCb6XXi6N2a3kggdyNeif752ZopuLbEUWcPSwRHGM5U8xAzTjsgw8YFDuYyrBJx7ULGd87YPvQperY1F9",
  "key7": "42agXUTEUYkTG1eDmRNP9SFF1yJUar2ZVKTCCLbfaDfRfSmNNReDoz9KxPo9E6VC1svWKzMcgyYRzACV3sn6oQnk",
  "key8": "SCwj6JHH5f3c1FYLAsEk6aNZs7ZgU84ET7tX5YJz1XqRwzqij9UU5xTU9fZRLQ2LLcunGMhEL2mbTk3AQ5zChuT",
  "key9": "4txRvCYHttnbTz4dKYyKuZSbLTFqQpLwXYzsqkD1zT4JpK3FcE5bYcpuMKXEcJr1utvXGWmUbBnAKMFnGMGYpsJY",
  "key10": "aQdFnNZ7bMfC7KwBvhTXbsMssGuDMg7gGmfY4dtK1Qr5AU6P8ZbHaeYQk7TAAX3YkX4bqvCFcPZHTmCkk2jkBF9",
  "key11": "2ofuRrxrH9weWTtqptJx6mX4tvzbJrj4nriNgSv3XCk5PvotvjVsh911hRKbsoaUSuAoD5voNexH4o4NZ5y4VJL3",
  "key12": "665Qw7bszbLJdeKQG8VPHVRuYmWLnoYFPhRqZSQpv9B2x4Yktd5MhhGREE2HdqQWNQT6QuGqBvcFeLnTn3uksKf5",
  "key13": "26ZreSXRB5aUad47R6bU2721U6Phb5ZUWYkRecyko17EayxMDc8op9AAJquZHtA2wTrZZ7TcJspaSVSWaehhtcsT",
  "key14": "26GHHtxJXW8x8TaqWJ9FG2GSGxWWmdPriYUxN5VuwCuWoFu5bMdWdXfeRQDC26JLyTW5yAV4U5awa9MJkpqWjdqv",
  "key15": "45pcabh1B8VMAPeygfJXTZbrYGkKnkxcEvriwk4hn7VWqZbNt6wCREV2EMo9jH2ZCkTKkum4TnWR87qtCyonxRK7",
  "key16": "21fZANLXRL3bTRCpevjAnau4vt8zcMq1yzGTRzkwEEupDF7LB8d1C4ydCAb6Sxo3WbUiy9HGCdEQZTsnp2WKa4pV",
  "key17": "fJXtSYcixLQ8NiBrnfSkBetCTtYuGbwWvyY5Pc8BqZSYuQdMm6SrmWfzsU5qNWoC9hubndQChR8YqE8AqfboRX5",
  "key18": "66z9KfSsZVsETAwsWtPn5FZdegAfwKApw9miJcAtS2a26n7vLgBSdCSwia8C1hUJVBbAH7ThEuhb51hbodNet7Zb",
  "key19": "63q4meD6F3afZRvKxbGgxU9XBXi8uFESaKbjt5nxnfy7ZvWDHUyu7VrgKFRR2vDVF4ErpTz8fFJm2nEKbsVQJFiT",
  "key20": "3iCdi9FtAb1UzPRDSWkeDDoJcyS9xjJh5tifzHRrPn49ULD88nDSVooBG5hMmJK7NtTdVRiTjqd7DHqBnFz8fbhw",
  "key21": "5qk579y9cnmLzSouoKqZAgPREHdxLTUWcvTop1ovo75aiHeQCUFgNGM2NoVaPsWeKd1gQGzWzb6KNDd1qPAwGt8j",
  "key22": "5HSXA1nYaK3XUrM19Lp8nTKgiUU2GPREz8bs6sKjmJ62LsVYgHc1DkV4RvYyRVVH3RsaQYptSBDoX7xmMfBcc4wY",
  "key23": "2qi6BSyqgwHfTjKQQ98XvcAGQoJspbdFoDNTSXaKEAwwDuKubF7vumEpoeyNiB2eRzVbf8eMM5ZrvDWUqoXA3Ham",
  "key24": "4HCNzjfJ5wncLthjNCxvrxrQAboXuGkoHeMFQhrQD36fSALhaU1sVCTju2TPS64gyDXuKaNs3LrVufg7QuBCRUnV",
  "key25": "26nPBE1BUdqitS3pmEVW8YrNMGcAqa5EG6V4HvDFox2L2t8p7EtFo11SUDot4a3QH1vit91meURTSzwupWdF69Bj",
  "key26": "4XdnyYR6MzeK2ppHLWHcEB46iiirvtXA94UKcAg6dUiMowe46Gpif4XqmBCVbqZcnE8N6dKXgPUMBxyGN6pNyVjo",
  "key27": "4ivcbzyqc3RdATyWKpkBjoeB1VL2CTuLPPyUtVo7o4APcFqMaByPsTN8VtfzvvDhxgvPzPKUYQoPMTn19zMawBD1",
  "key28": "bgJUqBeJgT2AaicfpuSuFtsTy284KH5Y3THkPtUhwuP97Tr47fwhxRS1ddsf5Me6dUiZF288mXzSg3GWG38R9TF",
  "key29": "3x3d1kCpVHoiSvs6jJPsEi48RyGML5zXbjU6HD6dY6tUxqGUELKEvzF3x8maK62dJY24tULwvJWc7v8ikHpamhhb",
  "key30": "fiDq1jhPnCX1eRf55we4FXxaySbTjRpCZrzyskhXVRhSeeKZd36mDFD3Z9T3jcRESGvpvt9rSatFeVvkPP1e3kR",
  "key31": "26D6S6h1QXb9oDWFThJdZVeqLh9oM57qGLCoTbwjkP6R6wa6FeMmAVQV6itCD4oBKJogeRfQw768NMM72rCZ1aqU",
  "key32": "2VnKahX7ks2pjP4jKYLM1TeHt6MSsTzY6yhTaUXmJBLzegPyEvZNMLcfL3MJwayyYtR7qXHLJWEMThEpUTVxron5",
  "key33": "2Ltv4PEkKcjLX4v35sTPLnr8rcBmPyeHgzjiEJLmcze2sZoVVYEnaaGUZPDsgKWh2MLqqvaHNiLR9HEMtgZ6cHqa",
  "key34": "2DX9bTJvQV6WbrhkayMUX2KFvc3H6pB8qri5arZbfcx2vyBTxS8FUdvGAuJkbAHhJGVu6Kvk8foF6hHvRecoiJzz"
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
