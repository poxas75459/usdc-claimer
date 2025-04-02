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
    "5pkLv4kBKL48HHfway145oa2kjZ2kYp7WbTeKSVyPZxj4MKWErDqAYonnVgq67CsBzENgdybXwUsDnnNBbvbb3sv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39h27nDYEsGhsWwawqxAzG13vkNgExHMU9hFib6fzax4YeHoBqLhL7fG2cyaj7pMcR7YuLzxCsUNFQK616SxPZPx",
  "key1": "4RkUh3NSsMbXEUQcuSXw9rF57Q5bRtH5CKPQSeLhFoR2y5aUbBCTVd2UiWQP8SAnLpwXA7YxtyXHAans2a3iKt8W",
  "key2": "537hE5ku8n4K4XKwSwCPamd5Q6H1kCkmrLqLy8jnD7sV1DbyzUGiA8TPHkPpTV3XMeuy5APaMUq82pRuw3fgQ4e",
  "key3": "3AGjdNpQBgKLrPLK4atqHoW8tZSwVF1Bv4Ye9LRCdrGuz2oxQ2pSAoxfMHJimVxneqRsbCF6vpRHMBH3V2pYHzST",
  "key4": "3VbK48dFvopQtk7ZwibXpZkreTfLYpxUwHEN2VqW7g32fGMoJLpfjLM7J4D9nE2KuVpzUm4UXC7J4aPrqWRvcjjf",
  "key5": "2aR1JhjJ8t6MzbRsDCmLqKDCBnrARf7nUN4QNiCdSoKYNVzgKgUUb3LCjDDn7RUb99NKJfkVApZWNCxdHF4cRCHm",
  "key6": "rGb28xYoeS4aoK45VDHf9FkcFf33Ez2U4kGSGsueYJ9717kaBVgVRaa5h2EJqdRTyu9dz84cjgo4GUdKKGWRXxZ",
  "key7": "3rCqmw1xuDev1MMck95FQEWMjUrtmwd8Cd45Dp72F4u49nuDNpgTCD1UkjJkKpc8UCjPpaCbXd7gcGbW5WeEdggU",
  "key8": "3eWkK2xTSFvhBuueSx2gB4S3CHZUyhicGr9iFeSAhFqCEYAiDGpkrPSeoDBGMBjtLjkSrMACb1an3n8ezo8YoioF",
  "key9": "5FivgeGwPyoyL4gVyzdncUSNuJT3DPHSLLE8oo3uJBkrnndRC2seGTqi9GdGAwi9ehZCm3fFW93wS6XExx3Rf8mK",
  "key10": "2g1XX9zqTYKPP6z7G1wEt5GJeFQeirCKHEuD4sfXC4PKk2qjqZkpt5Msopfw2wntgN8HdffvhpWmBW1SPUs4STig",
  "key11": "3KVgTjeR1un44KBybXXqihLQQPUYcEmfRCzHTaC5Lfb6bdTiJcC6E2yFMxjigeT6pR1SJa3CSdBPXbTYvpkEYMky",
  "key12": "5HS9yW4XNBoBQCK7W33RnnTBz3Uyp25TzL4bJeygrsbSf3SrV5osYEDdtYeSp1N6pp32gbybbsvGkcHXY88f3kyq",
  "key13": "2FW1nogroDaqAMdogJHKQtbVrBbyNBPoxDAMuT99fEJWGY7qhWffhCLfjnwPCNyG9VaxbDB8sAcmwV21qY4FUc2X",
  "key14": "64kaCeSfNSHQCoSMcJTPJPwm19ifaztsxyjjAvuk8cPb1QfzVYHZWx9ESRiRyWt7ioSQFSY5FrUcYFvRv3RwvkvX",
  "key15": "2gGazV6UwHDy6CDcCaBCDdg2SiLsTxvLTc1FVXNCCXVwKTweA4uLExTLYcWWcqgLuvrh5AqoUBwtt2Vef5G3PWuj",
  "key16": "3Yvcpkeu7iTkau5ajxqB85MrCWnat7mibVcpVAmr6QPfzLsJBSxrT39wHtweRps81G1K5q1TqAPf8UYhkL78dzo5",
  "key17": "2q1MGRmUKHz9YURpfUj51TfDvgDn6yfRbj73eBNjBX5GLfiXEnYVUypnzY8F9HyrEnx3SqTJfMstgNGGJWv7Fvun",
  "key18": "3K392whwk3jdAMG9EYX6BeAxnweT2JCYB74bdRWhFoTwJnaK4MQ5pHZEY9nMvPLCiZfbCUSqDETMiKvR8tzqmcdp",
  "key19": "5no4FdUTrXg9vGafjHhLUhvcHLsWayugkvjmQzg5TamN6LEGw9K3o5HqGThPkKA9F6FyPDzPiUCKeTHaqqY1ZMQd",
  "key20": "5WwfXbLpLjgXYHmHD9YwQwmtuihBGYAMr61h5Uccwg8YGas8SxH2trBP9puqfKkH1bECezR6THYum6KHcXspEhPR",
  "key21": "4CxXhnwi2ZqdcnkTg7gkNg1S7da2TNUufAnK5b8wP8eA9SCK2Ndd4Nc3J9jKNaX4gmQyUVyLzwu9C3ob9JLKJFVi",
  "key22": "3SV4o7rJV7KULz5crr6ie9H8Bf3N9RGCafUuGk128e4tCqXHqVnt5yUhBNsQ8bGcFZHmimri1fefypbkiT1DGD4J",
  "key23": "sv2zPtHVVGdnx7MeZpgWe1WAQDZSfBJw5mJAoc1VbBoZ4GWtgM2rJVe3ueDCgvLdkdFa6CvZkNHWhhD8F1KxBGE",
  "key24": "29x4bBUyDNxpEx6i9UzFhvPKEFvGL552tk6DNvNox2mRqxUGPrdtXQFj82uRGjmygWWeCq98zvt1oU5srzJuPwRH",
  "key25": "2bBEUjgtSpySGv4XZ5nofjKzrXuCfArF3NX1qjvFaMcQPLEzooYrGALfRYDCY6WM2izGxsv731wr2VKx5FTDfwYF",
  "key26": "3pvQYiDScg8tHr6e8HWJKhi4UznJ7bcgGThVBq4mwPq2jTsbNsBGnyRVAkpiwi4kkyt7FSU1M24SL8ryiqS77srD",
  "key27": "4cRZ6fh7X7NvEfAsQQJSaKe3zTd3URknhfxYjGrzyjVcUy8namJzm8bn83fRxwhqfSt5VvN9woUu36jN47d1zrYc",
  "key28": "5ex3MwpgnjxyLqcfKtg2wZrKrkG8kev4uaTchqrr6dUS6zvnmtxT4HTxTbLWv38AuDpucUfZcdH3sFu4QEbE3tJX",
  "key29": "2EFJy4EqKh4Ru5Zr3X4fYio4EQnYcGYmHsLPeFQq6m9Teg9YcdLkw7Wesu4AUVeNH6vQuexeVSTeArp3prwiggTo",
  "key30": "sb3twtoCfgKKfM2MR6ikQppjf6hVKAPi14SdybSp2cNHmsHnPFXczu9nYAvgWM9kPUHMghJfYCmDATjgi6crUTR",
  "key31": "239gWCrj9SCU8DXkeqXwJcu4tLDkvNi1KjphBXkUBxYFVHMY66BxPF5TgARc2dXhyfRG8ASFyrstygMmXcGKT5HB",
  "key32": "5gcazNqjDotH2xCKWsGNiVdgL76EqAFVwp5rx32SQQTHuEWpkaSuiSDF9touYSGxorWsEQrEBKhCGo1jRnFakgRn",
  "key33": "3usNMTzmGn24k88febSowz4ueiNvrwpHAoNfqUqkm8gEjxU9GpZCcDzYYif4FdNijfGqL2gZbTvT5WzsdZ7wR1ne",
  "key34": "23aBcB1d6sfKTtw17CJNcmZpX7dE5DXgUe3zDumxw5fauF2becEpdqGUo37UHrBTegTDXMFDDhWtab1NBDCT6bD5",
  "key35": "jbUb72fTSAkSZBbAwi55hHW6J2bgyaDCAb6hbhhkFvoPr7a4sUWbtgsz9PfD779ergo72N6a6W66i6u1LcudXFV",
  "key36": "5h2eiwzq8jH6fFroBsUEgmSv9zYHEWCeoTU2RpyHJTctR5d6Btrgg5wXjGMTjonArrNkUpYCPEaBS9z5E1g3EwPG",
  "key37": "4cguc7eP5QCJZK2wMzxkmgn1jjUo5znHaFdfE4nmbPv91hZ4jYgwNoPmdKMqJT8QS7P346PpYefJKNm4wU3yJndE",
  "key38": "VjCPcWJNhuE6UTW9U3TBtMLx6ghZHkLrhs7taAGAf5q8YeLnZ6T7YpFYF7vfLHCjg4Kh3GyCWmN2CNPTVbgMPXB",
  "key39": "615xdCh8kyiK5qAswJEMgY6PwnuYs6CQHfUuGpzukmQEX9qpvK6rJWsMT5sRk8DVDTPbUUPjrmA12Ca9mnWZLLgJ",
  "key40": "w2p2bN3r3o2HV6XTrTyFtUtZ8G47Z7iYNFezkbe2NAqKbiXbvF7QjFaT3sqsLkEtE7EUvUWgcHEjqZCqjLe6nBi",
  "key41": "437DGXErcbuWzwTTyffgeqKW9aqBoxWUxW2WkEsui16A8cQvAU1rgsVgmDfTiUjnqGdQxY8Qzbd7DdHJtTExtCTC",
  "key42": "4xZF5mru62wnkNPFKZEfnxsYYDK1Vx5sEzCdAaxA1j1WAsa7hFZJmc21njdxfNyoixDChfVgNGzvy7M8rMmnMmyE",
  "key43": "28ocEzWoiNUhEKnRf9UKvBSyjLHXHfPdRKLqEj955yd7tE54PQY3su15N4jvp9fKcE17YfS6SXoPFcDoWQkmLRSe"
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
