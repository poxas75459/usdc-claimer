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
    "9we9dmbnSAw9oQks3xnhgPNdKD9Rxb2MGRYDBjPGAohdbptyhyMmmmZpqNvB8dQWX8aLekgeTFvjhCZ6tvV3Tad"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VwyfvmQT4Rts5ZaEeTf7ocEZVHn3DUhxzqWzxSYBEriSNqCch77nJ5dwQszHEYGnU8qccdeZ8CMtZrSxF1YyyrF",
  "key1": "NvfWEYQgfCL542QXPQdKECU4ahkqpgcJi9RAr6sghBV88Q2vb5ZVKPdsu1C1T5GcRaspCqw4hsPjCsRpAjZEyFA",
  "key2": "3gKVqDCNhiqUyvUX9C64C23NmdrgmhcXAb7ZpynYfS1Eh9Xyp7uw6B6A9WrWjWfRL9hM1ZXVo4eWg2q7rGkb2FVG",
  "key3": "3i1wZGi2fYqgRm9nr3czm4LewPjPj9wUXHYccMr8ouddcNBnisYhiTgFCDSonbYavsmpTMYVwd3yVh8rEbfnBXT1",
  "key4": "2RqnM2u6eJQ7z2dmR3VXi7VqyAvyDiPpXWCjBwcFgzZPXCYgqTwMKdmmNtLgQDBq9z6tokQ1ST3VXffvcszRFkU4",
  "key5": "4yPmt1a58JrS4oEofYXzh5xpGqGD6a3HKksdXrC1uHtsXAc6gxRJUHkmZMpEhgM51aZXLYENQea4bpVcqjiS3vwJ",
  "key6": "go7sxb8iqqpqrKKHMavYVdk7Eiy8zhUBTiX1cm5KRojCcmUZdiEMcYJZqujxGUcaqDN9u7AKMRZkKZUbxjv3Ajf",
  "key7": "3eQvnMhhdzeDC9qztmgW5eK2HCZM5epSJjAFibfwNRwQrDKYd3UynFADonRxAzBkPFTDrYAnC7bdDYN1aHQi6scU",
  "key8": "ht1MDZZbQpbddXCYpyjfG2bz8n9Azrvu1o1tnFpBjE6dUfeByshjdSdi9rTkZWwuQoGRpy5sme6RLj8omsirtva",
  "key9": "cCCcLWbKTgue5WW3yxzB5EZeYRCLzoQTQZ4Xas6jPRigJmd34qk5kVCR914yGcTvNWKECAC5esJxdtjkM5d2j64",
  "key10": "4XYY7VHhjT6W2Wv1Tk3MZr9Yj2KNnnFCfA2i2t9uG5fE4ioyT9UwKKVqAmaCBYZMWyQCnnQ7gucFm2jEn4xWbhd6",
  "key11": "54VGgUtip42tdZfPiipSp1obRQzKTukeqwAnLgaN68nMx4QURk7Zq4TVBZPw3To5fhwQ4CbfNVhpoL8aRh98VQEr",
  "key12": "4aTDSWVqDFnpLXCJk685xt4T7DBRgKT15wZRSVBbcP7fDAMQSVyfywdhQGdzAvi1yPsLzThZw5n75iQ8A3HqYFXT",
  "key13": "ncgFobZ48Dw9kCEkoy6YVbVQUDWkcFSTK2hXYemWpW3CejTjUpdjgHJWnwNDSfBMJgJ8W8TCGMMFu6wtuVdibcy",
  "key14": "5etKc8WxGtjEzhmvg1L9HSG3F86jfMvCR5Xcd6jyNQT9NrK94EMf4p86WxgxHZoW6hcPGewuVsRFD2qVouUAUmun",
  "key15": "3wGm98Qr95YdPymErFq7Z46fG4Ca7UxAZgN9HYijsKCX9PJoLwbhZrFn4WM1YiwNp2M66JEkwA5bKyu5QwDoVHfQ",
  "key16": "4KNb7wPkVdoDtRyopthBCVEVPogaC8yKm3149huWJBwLbQMqStM8V1vERJ7uTZhqvsrCpzrRySrDpTwn9zARViqi",
  "key17": "5yR5tZodGdn23zZGxBjmzWkZmndMRpduTnCVmyoexg8tGQMjpwqTiu7ZfPKF8bPXJLDb1WCbZJNYvVBvAJ5rVbZS",
  "key18": "2NDx6om72W3uWZzRnb2x7X6rSFKkvDeLdiUbTL8KwortDm4pkUALpg7fUjv1iEwBJKAawg9z2fgJRoNnyi9Fgrmw",
  "key19": "ePdYZm5Y8FwdpbpT6HkFfreLw4tPB6WpmLRbex6ekQLPEAbTBA99FBsNgy8C5RtjQzdZP6mMDq6vmHzajDCMMwp",
  "key20": "4mqYyRD7YiQE11m8dPEJCXyVnUTFpaLwJWuzLwMaTUqLKHVumxzKDbQPLPRLmknSqmxgQqZVcAYGaZ6CLVd7nKwq",
  "key21": "4wFgmF8pRV4FbjnDhCY9MTGA7S4Vu4TynGwdTjAoa4YH4vCCDwCbHgBP9bcMFyDzPhtq8rsYPgNHmcqvodofNUVW",
  "key22": "4oZTxvRJWGzzZD628yCFJXqa7cTra5ZqpYsFQKCbV83BskgABojWsGDveK1YYwwozBkhPK9XuEY7Z4DghHZtUTaf",
  "key23": "25svHja9tRTwvnGeb1ZJeNU4RB2pX2f9ectN3LJtkyviNP1sTXGnxDUr2Sna4o8p4SdqBioFoz66gNG6QGXif9FD",
  "key24": "2zMMa6Y8VTnVnDZoPSKQo5KkTHTcxTXR54eyZQc8r5i6X8YSmB7b1mvHYVnTJgC7kSskYUwmvCS8nN8VQz5ZQ4J8",
  "key25": "2S3LkE96EkJrgBaZ6sKeMkzNAfhimLLKbPn6Et9NuLsVLrhecSeRSoaT2YCb6Twd6zxqR6RcLUpAuBVUihtmzVm2",
  "key26": "4H42XUEK2gaeSjHWnPWPNmFC1bqdZJy6ys1TEsRJd6VdGd6x3ZLPKuLSv4VX8Daq7LNjJ9ueevPdRKEncs3WszRg",
  "key27": "43bod7Abu9pGGeaEcCs5XsbuXvLYbZQdktsTUuVs55kkH44jJhcmGbQxZMxKXdxtNbSjD2dtNiRYMJwvvSbeHmy2",
  "key28": "3jqJ8Fo9mB2WUP3nwHkPNcYQDSKzDWWd7cStpH42iDKxQuegKeXT4gmBzGz4sSebLeoVZJS3y61mJeyYywvhtWDh",
  "key29": "5UTHYeWG16aJTLLeSyPDEmSx2uWPpUDBfPht4GTN4g3L7e17bjKys55uosac5qFvpk4kb9EsHGtnYczsyaXmiAQh",
  "key30": "bS1rj2UN32BVxHWnC7n4B5J5P49AoQKqZEx8iZNTE7nK2MSL6dLzvjvPBAmueTRTk8C6ifZVJU8KTQrYrLg9BMv",
  "key31": "2NhFpa2a5msKV6AG4jVJ8aLZp5jGvmGyr7mjwn6JMKQqK5Kk4XsuF25Md54qvq3LXrAHxHo9zesJ3f7VAiRbK8F9",
  "key32": "3HTybZ5NTX9eGDEk1MVGPc6QWHqYrPdchEiVJh4CiRmvRZPz3UoXZAYjPMg6Vt4aSNFdsdMrM2NTBbyNhxBRezfN",
  "key33": "52pg6Q3sQB13JtqdmspSJAcBLHJXpNPyEESTkuNebNP4ovTX3hWDgzDu6udVHmT4wA4HbE8qn3WEBvUbpPua4eVJ",
  "key34": "4Ef2eJPT9MvjKXtVBE9F3zHoU8gWvGNS62W1CUXPSKBsBkGBWKzcPdyFn1YfAzYnyEedWJzwZprkuTcgVpsBfAWb",
  "key35": "5CLJL9ZHC5wpngGhq8xCnXo5VhCq1ZNJSgntZpooYJLcL5WBqkyzqCUw17cj31eayRa2hjnhNvogj9isgWKvazHq",
  "key36": "36WWck6hcaJGkVvQB74y1vEbjr3nze11C7vYWZb7nRJkSeLiBR3Gk5nemi9o5Qp9YMev3RR5b3EhpGSAsEGg3K1f",
  "key37": "9RfeZcqMy6RKs5q8c7EsHf5uzCeM3tbUEe33UcdEHpf6sqZ9af5Q7UycpxUuZCY3axiyPp7mDbpj4MzXWNfQ8pb",
  "key38": "ihzXLmnRA4is4J1uzyLGRYK2RV3zTamPdPTgkeQRokKcVgLAfTL8TaXAqhnAUmuNUZ7TkYLUSWfu4rJt4ygqRLf"
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
