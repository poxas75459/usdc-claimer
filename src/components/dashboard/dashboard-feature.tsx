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
    "368srG86oixao64yNDrXD1Q6oH2w9JXbsD1BWooBbYRaCT4s88uJarwQKvNagRxnyiW8YphqQXGqnYnWa2QRx9JD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tEMrtZBNwHRuXkvY4vr95cjKVc8dqZSCaocFWzCbLRaZbzpwyQdHBnpyopEkSZN4NgSxesCtCsHTfL4nSFMKuB8",
  "key1": "2nTHMQM5WRJLxR4F1hpXJ3yLtW3R9vhw4WF84BC7uiftJhfgi2dEdJGAxqvw7K3YNuZsqoV5jFGmD8saoFcVFp78",
  "key2": "Lq8PJsbP86h74SZswFai8u9TYT3uDqkQmwbJQ7Nzqg2ftbYaEvAk7U6rpiPcfRPKvf54KU4RvFwWLjs5xkHwheT",
  "key3": "SsMQPLChp2tgdfuXRJg7EHkiLx9enG1Lu29Ms9N9AWrkMxhXsbdvVDnKLwZBuC6LyQRQ8AGoyMfhfmN3pwm9DcU",
  "key4": "pS8rAQpGhNKgdPWbwmoo8qkc932JnQcPutvf4eDr7T73uQxqVbNvT474YUpB4KsBSWq1QTAoYxWKMigTz8yaW6T",
  "key5": "2btyd4yfFS7QiUfPmttPZ1CKd4mWyfveFJyWg7fGuSmjRKcVU4wTxM88Gwa3VrbxihmmtEGAbvLnXo1i6j85n4mn",
  "key6": "2uksdPMoyfo9UAibFFsDaivJePTLLGKztmdeY1kye9mJgu8Awm6Tw7fH3GnoVTbRWPnTi1sbPyCbT6qyaQhzjJW9",
  "key7": "231NYFkAbNxKWpAk4wTU2ntYv82XwU5N6N5Xp4SMkyXjvcvsL1KbN7AhV9QH5eJ8qaRRynDKK1Nxr9TjYx7MrZiX",
  "key8": "4H2XXXMf9WDigsABmgLUMUe93ooN1P9nwbC4LFtfyRtbaxCcW4GrwV8bJhLyaZ8xxvnVMjiUVLTE3M8N8aJGt4H8",
  "key9": "5pDTw38UvAVqovHbfCa5UwSoQPTLY5PkAXz2J7eYX8NSnnLFwV3YTqxGxdtVqQCAAkKBSgQddq8fq566XF9BTUVv",
  "key10": "QHNSutnmwjFskDDK9VhFQuD1uBveaLdBvU4UjrQZxEMfRJDnydh9KbaJehssRfEer4KqDfQa4mdjjL9AVuQuq6s",
  "key11": "2E6JDZL28jsPph2jeXP58wJzVcnFgLwyhy1Gpkc5ydtriHwHYU5X5BoUBXwzUwCUZB6H7ZhhBrHdNGkbZUQUkFJ2",
  "key12": "A8341Kk9mKy2YCKKKUHHJRqTA9MfR4PgbUWh8UuYLrHevkDbEXKofza6sNNt6oVgGhLaLevtCPsz2NYj2BoDaRM",
  "key13": "5y6GycU1gx8jf83TMvtb2MuSVWEbtyE3ait96yq64BpDYCgDdN3tf3P9ZVsiCxt2r9V8fXZa7DYUrjcZTTZc8XTB",
  "key14": "65rzPeTwbAACZzef16pdKwhhjqWcs6db8UmLn7MEuLdBBZiT5zLFtvEdrqi41tJXhRWHevSzpipbXm3XzYBwXJ76",
  "key15": "4vxVuFgV7TNBSwFpBrZjYY1aY6g77GiThsoCLp1fpYtXkDMUqvtG6BphX9zZgwRU6FE8jv1Bmvxrj2wURJ83SNzg",
  "key16": "M6oDvVehxkhrZ8JmedGBkezyroWg5k47WrA7VxSaUWQ7USR9cR5YLaGcSZeeZ2WjFBRsd6HQhjzLSs4LBXddiWC",
  "key17": "o5KgDxTKGf94JwSSGLM5Gyt91fZ9QMwVVpFWktFPmaCyEm9AcJiKsxYSf8BT6pV3gtoyNQMhnUHHeth6CzSmoRX",
  "key18": "5CNQTWJweK8bTnieiU5LcK7sXczBHnzbeejBedz1viZabH4pi9LAT6pzaveKpWV865hUg1SLJHMFAjoDyDJN5xdp",
  "key19": "Qp2KwHLAgk16nBD2dmh4U8oE36WHVTnErXpFRpabwNgU9Zi3DxDgSqSgo4Fa8dS3A8LJhMMhSEgV2uDwApCKvae",
  "key20": "5EUiYc7pz6jRebFmHWad459UJ2X8RZcaGjTsKDWCd7ftwCi1WeSSsc6UKvXA9xFYdiEgKYzaMV1ez5CobY6DLNne",
  "key21": "5NDxH232gwfbYLA6W6uWWT4npCJLRWWq2jXZdCCkpUNHJ1Qh1ZgyGhzVgBTs8miegimpVi1LVWziJFyx8gVCr29V",
  "key22": "43dE9JHxoz3Adh9vmYAUfJYJQteMkoy6gGjj1ptQv8ZkQQk1pbMjYHvboCXPawjyAmMhratV5ZXxiqXyzWUfhCxF",
  "key23": "5WagjEmAAyZHjWcHn7cRidziooa561B4yQpYgnoW9K2bfrjJDy9LnfEjvgL6WRcbmGytNSxvUWmfHQThsxPk6Cfo",
  "key24": "zqpjYqwn8retFfjZaoWV2vSaRCCu3U5H1BMVxwGzhG2qtr5knY4x3x4ipXTBvKJf5pnHMM7vQ8rdtaGtPEYssb6",
  "key25": "3Yun2JhpGuZ39sYJQHvYrEvSMzjzo1zxiab7BhEsh4zxhdimpSwqU7pnYdXEg1AuTPHyUYoPGDftoVEEVoZ5xkxJ",
  "key26": "TQUoaaUspCrvyUEYFR8Dg17tyYYdUpjsJYYiQiAPDkYX3rUPfvinzrG7CJmWzc3MX2JECP9zBzU76ddMscMLvJV",
  "key27": "n4ptYhbyZpzjGCnWm4cwVWLq2wbGiEo8Ci7hsMGwKFNcsqZEQnNSWALxZW6WJ9kMJDvKGPcdjEvTqgYxwq8VBBj",
  "key28": "63qVtfMtmhT3jpW5pDMEmdXWWyEYrbvf5EH46Wh6zj6PjknhZ4Xmeaq9Pix5PHCEvn8cSgJrYbR5aSUKrys4BsMs",
  "key29": "4hJpcYCRmgTzJCT2JYdT38itf89f6RrEsLQBCkei3BUz5oUDrrnMmyqYzsb49cKR4DvPgFkvss9NSdv37oReEoxy",
  "key30": "3m1fdQ7qeLKVyMCAeLAXsuU8xVHwspRxFYBQRK7KQfq4nuQ7TDLKJy6RAPcffhiaiUMY1g5FVNcdE5z4oTSMYtHa",
  "key31": "3SetURf8CV1iWxmNwtkEHBGp2fwFvMnR1vJrwfUZdZvhufqUHZM9xw8Rz2HCNBuyXhdJgPW9oUpy2b5gyAA53rCQ",
  "key32": "4sSsrpCFq1mTuWvQ8AK5kbN7fK4jy4Nn5rENz1woromNcxAV2tPYzrzJJYfUun4qLiVaZ8R3zRPWeexqfmy74ovA",
  "key33": "34wFKQSwbKT8nHssAt46UpeGrL1XfweAJGi3kTxt1bqRbdZQ9XDRxYcuuKWyq1HTAL1HXwPgN7KDtEZiu3Xyri6g",
  "key34": "4iaQdbxu6Qj2ggmUfVfdiWc1qECGFfc3ETahLmB7dL2dwU15frvLTvgmoD3YBUQirdzTNVxDHuUGxGXqsF2zULJL",
  "key35": "47eocSDFnCMxqTN6nHaTh89TXZTaug7z8y8pj92sNegeEqhY41yuDiqm9mhP6nA96rmrfmetNBdRS2ZteAWvfWGB",
  "key36": "4phATSDw5y8TntvN6UoXW4tiMXucATwo9axt4t5uNDnUXhD1nBFyWD9UFdoLsLbZANYDaJMX9C26gb8UiEn5g16g",
  "key37": "4ni388mGfzLtuH2oKTy7yHYGVkqwBbJfnDYEPatinKepPG3D2K5PqAxzSsbeFdjWdt5KWhtj1RnCt5Zwxyu67xQo"
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
