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
    "48AXQJ6ZFwpmfyW1dntPAeDEgc323n6M8shwpnPqghoHZS8NBsFdEooRuDFz9b8jdNw6vuKRyYQm8cNi4KzDPuNy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mfdgX4xBC7Thrf9MuxkxoiNQdFUocWxNfD2dnsmKaJZvL5MixVKXznbiyjGxJ73cur3nQhcoJe78QFBk7vWUjLs",
  "key1": "4NKWFn2W8AqKzwizourNnkTcDDhenvN2uaBUamNDLMhFszNcRMqv3UKNg4bpVvj8yLX71h5yvSTE3sQkJgTmKZkV",
  "key2": "5WPbXrgihZJREMBx75vrxMH1hRqTSvQEp3pN8dnGHHPHjCcMiQSiBV4JyrCNhqPnHkNAadryDjQCQsmG5NkCm9kQ",
  "key3": "e9jXzWymczEcmfUtgstec1qgJ6nThfr7E4amCob51NnF78UiraKe2p6VuwmxoGxsKShxqbHunvh3V4mT19iL7w5",
  "key4": "5qkRL3UKwYeDf3YG5bG3PT3WAAMtL8QJLSHU7yvcMcXtcZy4rVxhED7gX5LL2qQWEVUwxJDMnkScCZcLKw1W2z4u",
  "key5": "2JEHNNHNbLVTbfdn3NtyNwR5di91dU3cas7qvo7f7NnZnS7LU71kqEfE7P6Arz73d9J3T21tWP9LiX7QS4Vbdjpn",
  "key6": "5vTPPEoCKE4qFWSBQrLsarPf6ZWWTawtexfbNo2MDyprhLYjnK7a8HW9nyUs8n6222GJgk8WEaTLkJoZ5gsiUc1h",
  "key7": "3JiS71JxjHCdTsxBNrhFfrQ9awXhr6RhL9EB8vrNV7rGAhpJn5QZemmSxNe2aMJ7AFXz5w2VqRe48zbJYhLnjmHF",
  "key8": "41xVsD9TWiceVndnZY98sFfxemYkGqRUsoMLFf8dG3kc8ZSvaarz6HvyrPv6Ro4i7pY96rhpkHRcoaWezTR5yvZm",
  "key9": "4DWQ1YNeipwgqZy4QShAuVxKUnqCFCr5umDZyw5WGhSFmuKhJZfmsJhCxgm5hqBY4NHLPBDZ7SJ6LzRZKE2jeAad",
  "key10": "4wmwKoke5UCezxYBqNEkwcaMK2epwfPrYyWXwajjeh9fgr9KfxjVgCWh4vM7tm5qz8hffS3NJ79ZxKNf7HUxbo96",
  "key11": "FLonr8KXycwHmn4fVeGs9nwovL9LJckJv8KNhRyz2pizZVHbUZk2bt3e6hxgnq9ctDBNqHHhZDBn7CWLyDGmC4R",
  "key12": "2i8MTQZkeDrRpbwQjuDvUy7cqeKPiUq2cCxQ6nX2mE7znUGxbtJj9Emk7q71XD8wK22m2Dp7Sx8Hn82BKexjADw8",
  "key13": "2QcE9q84V45cEuQYmJPzGv57f6qwDukRhpj2zSudqWp1eRU2BLz2xUGrL3MZgkZXAFW9jtDF4XfiUn7ZDn2w9cce",
  "key14": "5Stovdj1uMvxqGdqcMso1gMZPDnNgBC7AAjntzADzbg5E7Z3SAmZBSEAe4iLABhrH8UymAcsjsLjNchTjaQnmSTT",
  "key15": "mBHzfnuw3mPPLankbM4wu4v3ixMXfF3S2sWmij7U1i1hhs3Lfv7vGarBvbAJXd5fgoupMYrphfLviVdDyW9vDen",
  "key16": "5KYeej5xhytpeB4hm7DbSXEtRc7fdMqGJEUxMH3vTBQmGVA13xHXG2gfzspdhikuhTt2NR6dfRQcHJNdRb4cbtsV",
  "key17": "3Rf6MnRFZXQAoU9a4uBD4Py22sWRXz4yFYUcNN4CF2ZaBr9QLxMzcdNEA5EaQ7UG1J2qG3YKn9VZz2iKTkrTehhf",
  "key18": "3R3eAD3JZZy88rnx2UMHqJ9eMsm1T98CYGtEUNdpZef75hjTTC3ZxoBBdtkGxDddq3nEgBnREWSo3jLFaup6VuTY",
  "key19": "rtxt1Fdr3R3MMuTToDQ6FvJcx3XoEVbfUmmH2X6qqhKSBzkPvnvTbDVmE6qCmFcPt5JwfpPa4Ygd3wh4KFJ5DT8",
  "key20": "5dqL85ekBsR1kZQbkq6EvQyCKJay99KxFZSw13WGTdBMN581S8BoY7rwzvoErXn6QT8N5bvZx5ZuybJhgjg8HAhL",
  "key21": "5rPDtCFAejdYKfoqsfYWcTXoqFP81TJc5ftMwVHNE4bcWpj6qsx6jo4rEjpPYCsN5M5b97KLVP9z6PwGutUNCgCT",
  "key22": "3NJZierH3senXVLoFLWvRfm6b4nRmZxFGKc7KNc76SxfY6fxp6JF62PzVoBcFGdA2zMNH2vhwHneQo5qJpnXbFoq",
  "key23": "67cjsXzU72WQwry6gZFUVm4biPqFArakLrdtnxmGEPy7yF7RkNvBMaSufse4zgwrbr94M7agD6bXz47fJGCpp8kw",
  "key24": "2jQXER6kKbrW9U6pkftmG1yg3xVeS2KspEeqcTa5MzfRS8H3b11L6gf8a61rxYqgRGoywqE53DcfFAQx9DYdKMJk",
  "key25": "21cBtedN3Wa5rUf66KyEvF9mrJucTv4nGPPWeHbh5VQZVQXZfcYLYVMzcXKJbwbKS574ZGrCFm7m3qTFMFDXiVjx",
  "key26": "3mFAV2ext2BaEBeV2F3g9WDo7f63sXc4VTdkqqdYSsnRyBQRmZf9BssheWu2wHEz3eCBBWBciMAaJg8XAN6cFQPm",
  "key27": "58af4gJt99ZLkEyhF2nufVj51sWNYxoGAgW4H2cx8RigqhvLei6o4g95AyEvNQyEvPRGxEyrjULime3RW9LYS1im",
  "key28": "3ufXsiiVWx2Whpy3CtP8bdJU2RnBMt7Y6PeCFhB3E135gCMjdJxyDSBZpcqMhHtvjAs1qAJjNqgmz3jMzz8yRzWw",
  "key29": "4nVCZooo9LoNB8MVCP5NwkM31MEqCR7FD8FwiQ9KHrHyKjLFdQckZtV1o3sPbAE8AfjtMSpwcr9KDKru1xMpSdak",
  "key30": "5WuW8WitoC3VncGJqUFQrCrraMapq5Htd3s3tHZ1daJyJB9VYkuVUEvvF7QAKzrJHDqz3N37HheWUmKtCcesyNSB",
  "key31": "5LypwhwTQMuLjzRUc8FVGm91BiXnJ7MEx6SuLX2hoogFmTBXB4Kq2UtFvQi382aZimEdpvnPTcWbQLXw5ZQKmx9G",
  "key32": "5BQPatvbCSRNq8pxcBpDXTnyvYGf9rdzP5ngtYHo58r5GmvcxwtFBnGZ1ufAw9xozzPkXrwdTzXyU7mKsFQB3NCU",
  "key33": "2EJJoTntTsG9Pxo2HL1Djc6MkLV3HtUTjGKT452oLW6yoeC8u9ho5aTCBg4TNWZ6MzZcDJv4fr3TLrnJbYKPxRrd",
  "key34": "4w4PXLWRjyxghLHYH2woY1bTiEJ6MSd2byxmbr33MrKbgrq3MoMewvq9rhc127aFPtr9Edn18CcfEe9rJnLbhtWH",
  "key35": "2Q5AhEbHt9zy73G4Mv4UCygphqd5ujt4vaThUXh8Psdyvh9XEjeiKu4ZE17LJtCAZDjCpDLVUPmdhybspcqYd8h8",
  "key36": "3j4dhjgGotLPYsHJxj26g1Zmj6iC1tigHyoTBfX3c1J7Ww7KryPjgDRhurxbmezPGN267WE8kdyvfuJcP2dNY4Sn",
  "key37": "2W4HKconwFXuLBXKiTstnU2MUEK8KC31uYcmghQn3DNim3x9BuDdP3LFz48VaPyov7sBZfidSXAMoHKb1ZtqQ9VU",
  "key38": "4cZWYqf4BmBkvxGTENCZYRLLw4PVsAUAyy82oG6p3257gZ5WbJRMFfghz4CzooJhh6wfZMwdAB3fJaXVr4dz7DBc",
  "key39": "3pL4T4JZ6WG5jjEVgR9PwyRvDguTx4a9y6cBDevxhqs7WFJ3orWyJKtFJNz97CAjEL8qzoxPwyBYTK1K2L4gsSas",
  "key40": "4oSzQZb74MshATE59tqq43mSUFzfZ8vgFGDw2pQWU2pTJqfWbFvLBV5XzAvYyGFtjixzzpiCDnKqAFFxf8NCfvbV",
  "key41": "2RqHU1hZzLHXo9T7L91AHG94bxFih4tfeAcLWUT3sM7EhaqTG7QTzwckbz3uoY8JmhgBZkqVkKZJhVtfcjkGLBkg"
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
