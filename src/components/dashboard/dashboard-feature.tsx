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
    "4LiWTUFpwFZk2YyRQL7c48SgkEuK4DWbFZ8kkcbdbmncvnWhRo7ZPuKVAv55yBpubmpDM9ykXdbyapLVpUPj7Roi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HJn62THDobPWbFoe96DFFTes9xCPsxq4t6NXTbznDKG63WbYRZhqTVMZSKkuYH2rRncRsrpoGzukiq4xNSC9Szr",
  "key1": "62UYHR7i7FUZmQ8tVbFn9oW3HZA3zTi3NgLJS5wxhQXpNY6MvjQStVFSVLaNdt7ooFyHQu8c4bBddjKeqcZ92d65",
  "key2": "2KSWbsMkZdjLNrnP3gjQ9xsJmL88CfTweCr9U89dagjCrjaVFmsugE7tnS9Py2HE2NFmxK9wcQH9ShYLwsehLawp",
  "key3": "5neQ6JiirAb8Qsuhbimr5SEKnXWtrkGS3YmRLiv9HPYEFyUyiS5vSpWYpnLCdrMngMKU8krWC8JQiEMRcGDhXUZP",
  "key4": "3tW4Zq4U7HWhxEfcfwpHUrbBiU27YreHMFPymkWkdpHuZfJcVghZPrESKeJFcWRx1p1BdKPWhdEdTgit7sGAPd5g",
  "key5": "2SPAafeWLtWCX5VmS6kRFHxpCtNj1nVvQ9stvDFGWgP3fZL6aKcqcCwtK9tkx3nefTWUrzGZ9Nx4Zxkjh2cHK4pQ",
  "key6": "3SHDzuB8sUre8CKUkjtJ8MzRYBa5bh8upj3CmJXfNTugCi51SN7LMDHjLz99VF4nySDQJw6MwquGKaZp44Xk3V1y",
  "key7": "2S4tbj9KYDEK8NkuuMUEGde4GceuHEZxNGuPFoV1U9VHuQSbkoYjhYk61Gyb8HoWPdwXgKqbwyWQtYSJjtsau8NR",
  "key8": "5PZS45KbnAje3hPP1vi2PQHTJ7KTkywmx7U5zAJ2LrMAEy4EpbRdRdu4kZwLKwcXxPeDDxqMNB7iuj2ESatFfPLj",
  "key9": "22zqedZZSGFRePmp1MuGbu8chBroz6j62mXBvdX6KbC7w4VZXjQEh7vxmUAAZqJgcVMz5cW99WBXi3PvkBNbY729",
  "key10": "3mAXsX5LkmWWGZtwDBffKUFxqJ79eyZ1xKwXMW1pHHZ7g7cW7bGQWvnT42rmPjrpq1bdz1ZPKKKg6HfiZEK3VqSA",
  "key11": "5pVTQijtn9CpsM3mDjHW93eongH674t6awKoCW5M8oyBDhHSEFSFMbxsW1AH1Qkz3szvQxhStxkXkCGaUNZwReLF",
  "key12": "5TyfJTQKNkTsEi5NXa4bBbPpyQ2kZ6VWEYqW3xC6g68mSKGNJuNkxRFfPWXSjmARHNBZtJTXJmYWhfijEAomXWy9",
  "key13": "QCWyffvQCSn1kBubppboHQd6vTtmeQwgbKH8gmhD2SvdhLS7jDzf3fo6NCqSMQnZbBB5r3iFAUTJofGGbbcqxRL",
  "key14": "5bYXTv1HRY9wRD3eJMmEY2AfFqq3bREURqByWPa5ari7bkBBFxq54sSHfgbR9Tqcq4yUeGxpg3U8zNDUzMUctemL",
  "key15": "9XvahpuHjuvf88gKvZvt6kijKkzx4RaUkbjVzVTS8L2QdxurFV7KmfM3m4ss7vz9BQXXDxcXWSEnZ7pvKDk3dtq",
  "key16": "2i4w57d2kXV7uEXs7keUB1QG7txSjNHTVj3LRgvjQv3BTdj2LnMvaygXuy8isiLFytyDWvTxL85EykZu9o7Nt96U",
  "key17": "3VeGZtwR1znDAK5GvRgYpJZsYJPHzXoKWeQtqaLXEM88niSdmgMVe8eCnz1u65vbfemC5rxAT1ZadQ7xovgcTUEw",
  "key18": "2WWxfQP1TYFf5z6EhDJSjaHNb9a6cDwSKSFfTd45DnnKqjiKY1S3tpc8HbHwBAtbCNeHhsexHwtmJ1yy3EAHecLU",
  "key19": "YwTwBBYsY2xhLMJ7NKPZEnYUsumb7cUGwvicHghaeZdF5ccqXyKKgz1Cp5ujtobZVdxcuDWmcrdSWCBPNQW9bpc",
  "key20": "4CZNKxofpGXBeHu85QPZXwRJ4BAen7nTojktsq2bQWy5LTH1aM82Vk9BkzUUKHC2ShvKmxLYWRpQP5YUbGw8QjGy",
  "key21": "2LnyEPzzY8JRpZqsWdQhjvUt36y7kEPigQKzbU4hMeTBWj1phtqug6Zhu2aqCrcNaa7Cqyh1p13mwbTbCaXsk2LG",
  "key22": "2j8tNFLyCuXx5TvmXhu1RHmvKv83y7xrYvyZV9WeXV8A8scAEGiWnacnxYrU9q64RofGmr82y7hp2TRfPrpYgKvM",
  "key23": "281G4N7R9wgDeqvTvW2mCJVzHFHRpNEsBF4aQ4vjGpjQN8rSh8xx9rgPqEg53kBmWi58ASUEssa3TfLDNt1jRd4a",
  "key24": "4iAjkXYgwJenpgLwJP4KRoV4PjkVfjEkuPZ9vWv9LC42g5kxR7pG1cqsDw5f4yLhxVm7qsYYUMPJQKpYrF9bZASp",
  "key25": "4aJhN8fzceHf7HGt5ajdoNV7BeE96AT38EtLK12zjMWGgmytPz5P8oMmSfVhuxTwBx37fW4uVceBwnJpYDUwTuwn",
  "key26": "3zBkRm6dViFjpUrAbPa989BHuLP9wvLU4Yhn4A9SkEwMe613KQzn1q9M1ZdMhyvkXNC61qyehD36zKeeoWAWkmSN",
  "key27": "nEo1R76masffHnP3r7uG49UDVFb7RtovnGzXzgUo4nAfNGyHmeZDma4DpeqGqpHbg25fREPNP7KATzUzbqcVtb7",
  "key28": "5UrPptmpEh9xiS2NNKHDJqEbf57XseA9kHtoJiFdF2jMutyoSXyuFZ4bUZ79kfMSEetfmn7BpwXLW4xtYirHptrK",
  "key29": "3mKHQiGVHDiiri92xLBvG4ruYqHpiBBp55RutMoGAKiiNBDowDNDay9k4iWHYp68SzdhAtNdBXWML8Fs6n3f8Q12",
  "key30": "4czJ7unSsh75y3PsEuDb3yVWkm62uaca8nacvKbrdDmanZdtwMj1ufAbyGr5QKkaviTSk5orbDGqKLghhXYNnFpS",
  "key31": "5r6UavFWBLxkSixRMwLfS5Fo7DH4kLHDe2T9dxuCUkxi9uMXdejy3U42NVuDvdeUebz3duzHUGpEqN4AvRFeCvGV",
  "key32": "33SBQEyDV94VamcNGsy8vcNMz24TqvV1CPscvi8qEGH6grqTcXvRZ2MTzcXEUkVFwyj51Usz5h9wKw4QCBGzJ5Tm",
  "key33": "4xCUhbhBipFafr74oevLTm8WtL5pDS8LMEqhdMKUKQgdoMwnbwAYc6B3kSgykpR49oaPcfWKA6cWuiogXsjLAo1g",
  "key34": "6DucxKo4mPZWtyhKpuxpZxn6u56DjuxL8RjkJriRMToD5NwoBDGC8ADGMyp4SyxaW4fex24kDwomtcswq65JT4e",
  "key35": "53Axgg795wMi9AmQMSeFPYDGYfhqCsjUjfA711T25R1aKmLWiUxc9TEAxSmLyvWAcPRZXBFdg5j8xRTdmDyq6hzm"
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
