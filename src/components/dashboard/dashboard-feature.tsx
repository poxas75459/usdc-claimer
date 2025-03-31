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
    "9avUUiY2cyn9KsphPEU88Vu3aEYr2QcRLnFV5HkRwhLAMrWPKpYVaSjhoWrmeGF33WPBJXoecUYb2Hd3Tvpesnh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QfGEN1LK19zAUeBbb4svMnHdaXeRmHvv137G7qFLV1agaGYNVSn8TtrSvLMR5D9gwdhZq9feXys92VHFuf6F7Wi",
  "key1": "5DqpeshjZdcjkwcHUWAdQgidSPGVdKb1TDz7M3aXHhYKRMK1URJZwkdvYnfYXyagRUL3pd6nNC9VZFPb8k2YNE9s",
  "key2": "ZnZHFYARwEb2kH4SC7hrMCNNLWeTxet1vsANGaQG5j2uxHDekBrH3bXySzPtvBwJ6uWBTxxe8E9SmRjF9pMpnsq",
  "key3": "4uGDYUoqi5tFxRg3nxmbGU7A6UTBSmFArja4LVWT6yn3qtDGTNwxuoXsxSCpExheAxWtrnDwyrVZcf5xrVVGLF6u",
  "key4": "2V5WJo6AvuPuuQTxBuWdcQjFwBHpQoa7qRJJfwtGhDq5EXtBa5f4nxmqizGBfMmJ519gDcziwa2as7dt1j2DFqvB",
  "key5": "4vb2wbWq7S3g62AhakKgbn9HTBhBrdhoN5Vwks94xLfmnTexNSDoqbYuCK9U3TjGibBggjhXxPsYj5hY9CEc6ZtP",
  "key6": "3w3Q7a8Zo3LnsziGAGGWbjnqbYtE3oaHsRMXJt7syhHwnDFPCcKRAGmVXvdpVSwwsw8CTDAUFqR8u6LWQ2sEtKdT",
  "key7": "TnAAQBhLpA1sKiFFRAofJSj5x33ynWunQAv9yKySWRwnRFaVRjKXPjUrmvh1kNnY8n6hDbSzSzXEwRzBqoPuGbN",
  "key8": "31fzQHDEqFLefoKZcrbbVCdibzGvu7nLTq4V2J3bLfnCv4Jh1vAmwrvSxTAhfeN9A2S3fVSbVphKcjqJVCWaQubc",
  "key9": "2SCT4CyRmFd8TuEb2H3opoXpyCv2WA5WJwgJFYRYT2VGNFoUbigkTsebwKgGFz7HwUpZd5JToaDeKAUySPojxc82",
  "key10": "4PMjRaLs7ww2ESfzNTNZGqEEFpkUBYax73tSgSyw9PLaFnDhQPM8XgCVwt8v5jadzF7zFuc4kBVMCkGesz7cGy3e",
  "key11": "38WdXvS7qTSQM3BBgbw58SmLfEbyhiKujEQRMd9dxsHYcZPbLiSaAaQX18hacRuR6ZM6Nz1L4crjt9TD1CkM6JwH",
  "key12": "41UTGQUc9mdp8YQwdjUeePfhc8mKS54Shvh6SJGf2eg3NHv2FhJ6nvduWAEzBgaFAHEFLmniaynmhippQMiwvbBm",
  "key13": "4GecXWkC1Me2DbyENhifTCcxGe4LA6XWiu1KB8uZFcwEQJPSUzYkKZ6t2UvhJ5ypWZYAMnfWwd65WzV9P8mwS3S3",
  "key14": "4P1TqCtJy2rAd92PWPqhJoximkdv3aCxY3iFnpwVPhc8hoN6UEwb4d3ZLfnXGyX4MxERvy8LBWcuFWsxkqvdjaci",
  "key15": "2uWa7iycZ8Hzw3THvHG3Zvo9yfxn5mRou3SwXembSSdhXVYJkriXpdcQtYmg6us5rEqsVnPDUz97UVWNcmvqsJBn",
  "key16": "zWGa9byasZZ11oDs3Y6k5t8oZeCZi789Qzfn5BiUQFCjGf8B7kWmbTMgBWjKrkPEAHuu3yV6ZmxCXoYXoheiAU8",
  "key17": "57UjvTG4R979h4FroA5T9K7hc4p2LBq3zPw2LoHSQahPHbUMvbtigEgk2WtJiQfE9LCj4r7JWjmWn8bk3vTPcvTE",
  "key18": "5w3LKqGst59eY8ayExV9ibmSUbcZRHWzZmTQmULziWqrfkNGu3qRy2rYWicQuoZ4wueCg4Ujp9jVW1benSoY7VP7",
  "key19": "3a94nokEhDJ7ceiPXMAAVDehVQWC7jP1GZH95DcmW1JJgPvm68yXoixEsBxRBKg21KVoxztK9WDGkhGBQtoMNWHm",
  "key20": "44tga8ZVprotgvfjcm1e2otQ3r4cVb6w653bDKb6mWS67M1oNfDHQ99VtqY5T5dJi3B4QjUch5Q3NX651CVnAzYJ",
  "key21": "2EZuFHjGicxzHzjBHakVs5GLTKAGqggFWVmyzEnNmTjx9UpgDVo4WvcFbQyYBxsLSgPKFb266AL5zXTy7QuLWpzJ",
  "key22": "nEQMb5BcpbRp4i9NsGnkFNZgAS9U9jtEXRhoAmSZuHZpXx8Ass43ZgMzou9mqonoPn5V6vbXj3DxuAQSddQDyLh",
  "key23": "nNNMiRjsiWgHdovTEb4YaBhepeg7BHjj1SBnbLD6Sw6gDoKWgmvzv2ZaJMaZdTKmuMJT6W9LNT6d7y5HvpcdiK7",
  "key24": "4c5VpiGe1wDNhU4REStMnox251rY6UxsiW6hrzZ1FhJ3ZtDCfvAhGiDegUQBBUhYuonrHWYEL57vFd674DLKckea",
  "key25": "4YwWR3G1vMCNZkHB6KQhEXmREA1QwkD5sDgP5rBi9VcUT35M9QKLDVqvW8GyLL3Ug9VLtbeHWmFZuYmQKrbJp1p9",
  "key26": "4zQwGgF7P5Xiat6t3WJe4TJGWSz8xaALWFfvfdpNSLxQnJAvrWkcqe1AU3aduwbq8FvZ8S8GpCjQ3Kw61Sr5i1bM",
  "key27": "1D2QWWVcwj6tGAUHz5nkraBTN3TbWaTAkEvGacfrzzz1u7QNoYivpUodfPoRacCkE6AUoT26ShVdXWvexMFcnXv",
  "key28": "5WaL85iknSCJ9LxSALZfpA3AiwvCsDJRKjmjNG3QTWfAeDPeccLBRY4BA4EXuM7SwcgtvP5c3DbZFdnCaBanmQw4",
  "key29": "5p4LsWkHVV6PP9BKQXk1yu1Y17oFHqq6tK6nVdZmD9V4X7N3gQ6zRQwqFAEgSPAnmXxZRdbtpZkNXX5QUGwWF33w",
  "key30": "4Ty671JqV8nVmPAPdruhWoUC9znvCgjbvdu9Ab4RWHrbu7ypqJLCdW5n3gQKT132B8WvGPJVVRszKAn9Hu4Jx4kn",
  "key31": "5HiGV7p8xxbmk5rQ8Lu3LktciVtTLj5VEB87mdjurUSt1nrePdyFVrjCDx36VaofqVuLv11DfB9za2xLMmdvH7V3",
  "key32": "2aj9ybk89XkYszeAgsCC6QMsvYTNRj6x1j7SxtE1VrsASgNTqg7GXb1v1vFs68GUeFU4cixxdPiC4RYzg9FThVNr",
  "key33": "2rgSGLJbnr2pwzkdqRS141YTK9WEw6zpr99Kyade4EWz3Bsm2g14VSpvCMPNQ1xqYr7b8u5Zv9vpKd5qwEQAnj2B",
  "key34": "4AZmPPoEiqX8krKDpxgJKn5eRH48ZztmhpScn5KyqpF8DXVRYGaToPh6V3a7nbhzCRDy3tx4TxyqkiyTj9MCxxVC",
  "key35": "2Ub1YZDV3n1YhUTFUTyjoyHMFmh1j6q7RS4wnSpimdi6nfoZuuiyBRePAZsoC7pe5jTJnExrTRo1a22mgjrFVZV6",
  "key36": "4vvQrhwZUcH9siWkbsoND9Xy4vkLMNc5aUFvAHyFKEDr23GJfvMfQpAeGBFofdTKFK5pwZLDdRTX5JnnyiStyXQb",
  "key37": "68LnJwvZp74a8axJkk5BMUqNkgesczTj865xjrmSDbN7DqDk4YhjdnccP7tbBn6kQTzmw6BTSqWSTTaHb6Urjpc",
  "key38": "YmSUC8D38zacniiD7uyDrnkSdh4sRHZ6JDavgYK3TRhn2mZbfDhNzTdg95UrA3ZGn7HGKGAcyhXA5qWqkUkWAhg",
  "key39": "4ZSAsEMrDwoYE9BniwxRAyQxfDwKR81cmjmpSmX2eJ1jvgQqAAbeCZ9cv5jxsCAVMH5hJsJCbTpHdUbVaRiAFBfX"
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
