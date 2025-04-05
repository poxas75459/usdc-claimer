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
    "4jdf12SgqSYAPmG7Yy2sMxVhQNmybfLR5yF1N43DEvqxoTvCzjT2QisHrfJwo6bhrfrMQN6TQjhmbGA8Ub4UX7Xd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65TfU91oj55jk2HRycjbxwhQobJWxPTAoCHEPvjMZqJKUczdv9ULYHaLhDkPfrYWxnro7KKRxrZgqNP115F8BU5",
  "key1": "3JAHsRb7XqS314nTV4Nd9RpD2Hir9P2cGbqM9nFfmqz9eCAZRRZaN7E3WmsYSR7U7sgUs8hmxKu2EfLvcCBnTiQ9",
  "key2": "2vJxNpPdxMWuf25FUhy9QCVJ9XDH7ovT5xJsJxpGU4Y3zsgzwgUSMeQu5xCqq3HVAHUZZ1b5YEdsVb2JUJd4BUUX",
  "key3": "3PXHiMzYkaKMXDjj7ojiFEqpxCzYWvgiX8HfYBuGBGhw6Mgx7dDF5r4HZ1BdxkRTCqjkS6AEUrZLPDzfygiCBkXv",
  "key4": "BmZQdvXsebi7N3ztVV4QdxKw7xmC5hDgSqVAeMyCihHXGGiX7tUtkr7w5fW3WhQdCGqs2yvSsjDp8eyK7M4HroM",
  "key5": "2oVoM4TVWcM6geNKpN3nH8jeqc45T4eCobobsfFpzz4j4MoPoshXBvM1zxXSCozXTPXLrzNJ3GNHZJy8ctzpxQf1",
  "key6": "5QhZSrQZ74t9MP6MTZdNpMQi6TVNLdZgymyRpbjQ74PyXb8VE8G6M3oRZvDKFrQZYouNZgTKFfKAMTbinAgtNcJg",
  "key7": "3GoNZT1H9tkF4gLVWXrxfHBPk2hZrB6YaJaUdCpTaydLuSn2aFYTUHK4mXh4eEezfbAQBsnFKGEYwsA5Mdf45qno",
  "key8": "3oeirfdWYoWPGHSJZ9w7c5Hqz13JaB6oMcjf6FyGSEv1dxqez25gQRGgNuMXrZBWEaCqS3gdS6R68Gzu57xSu5zg",
  "key9": "5QSPbfXggerbrABoudoUs5emkdh78qjqPJb9Rx7tWE4uUBy9MDq8Vvbd6qG9ixaESTFnt35SbSso9dFLh3HhzhrF",
  "key10": "3ervMXEZk8zSjdEozMbDeAd2XVn4xaf7o1ETTvYJh5ym522ygfGLSJV8L8YFF8KLGVuq9RWDEdocTKUDu383AZh4",
  "key11": "5CviVoedYpA7a5xXoMoCByLWdGEgWeiJ9iw4c1zi61bqWVh7NyGjPhBsFbJ8C3QHHT4PLhnGdHrftQhp4vQGKUET",
  "key12": "5S9F64Q6Ye1VQnUzs5G4Z5s5sPLEXFzzMbNaS2rCeZXSTfsmHYTnHBYDKQXDnYGBqGyBnijGyZieYb2vL1Bj42u8",
  "key13": "3QscugJeq2rbFcJAD8YxM62rXVKB31Umg3NBXPEttZsCA4FeDnkc4WgATKg3Rm88w1G4uaNDCo6wwhSD12TaZFDp",
  "key14": "9SWaU679WVrS8XXjXz7Zzs4WWAktoUYfQG1y2Web7SXF8ztgx2S5KtiWt2Cv2Y5oaV8jPK5fbHcXWhS6MRhexwH",
  "key15": "2YidhxnQU59PYUtD6UbxUex8Vc427Vaf9s5pEm42bvrpmbKvm7N6UKDUqfWWGHD5f2Sk9PxtHHvuVMxRc2unB6JS",
  "key16": "55NEQr8e7eoRd7SZGymPSsb2NZV1S27gnNRmBpvQjGDAAE3dm5iCCY29vjPMRZcXtpaeQbFTuuvFuATTKGsLnvaV",
  "key17": "27aCQZPA28SDpgmgP2pKWCHo9Fuz7HZMf7yuxqAoCuZwtewqAJxcXWMbuYco4gax7Dpd5cCq1L2zow1UhzAJX7uu",
  "key18": "55FrShwozqBbJuTjGTPcms4VKPj8edkME7aZK4bqDDZGSZSxAwoYanGZqHzM41U7dWEwRu3AaKBxWULibvThfrF",
  "key19": "67S5aDDpsGHDhSAAAoe7C99shKNhB54Qxhep6tjinjmNnVEkJJn9qEvzUrvKrwFKrBR3i7KCEveGibpTo4GxsSE3",
  "key20": "eKTfusMCj1R8YoN9fNvoyNn9MBWW7NCk38fsH2fKHddtfgRyJ9qdj6fNZzrvKyEBWmyjoZzMPXGzchKWbcn3zRQ",
  "key21": "5BPTqArfN5vAvPBqyn6e5TYPphogdyitSgeqEGb1rz32yinuKXFChKUfpLXcFAjN53m4tRQb8vAnCs8psgD8Wcx7",
  "key22": "4QxBThvCfki2VKt9Kcg58jPFSAdic5oPo9PzAs2E25kFRfh1vrAUNsXfLYNXgZfm6L927avYrgrJoavPBmKhgXiv",
  "key23": "4VHpPB74Dx8Wu49tr3smS4149KX9hcWvAH2MrNXUMUvJreKHBrCs9s8ixVf5CVwwCnCvaQBVg8kY2wv42ew2eVST",
  "key24": "4o9q5v22En2WRDVWzkDF6fs7toRkFMDGhGrUT7GKEk8ncgD2fe92KTV5S8ULmgjKLz9SjbAP6kiGbhDrZAKTrbzS",
  "key25": "66JsehfECwcpk3G6hSvo1WvtwL7vb86AMK25d7ce12SzNip5MdRjrEY27tGpinzkQGPg418QbJNodAUS8tKc4AGp",
  "key26": "6c5Udz565og2xRNuNXozmvhN8PDDPd6P3UW4PTF5ts9ay9HuV7z1XLHFT8NzjrbzK95rz9se3kREqtX6GsfUmoK",
  "key27": "EVpRVysKZu2VtjyKxa8WtFVBNw1tobSFkxwPDEuZLzQ3rz1Ho3KSgXgGGkCTjt5qS8S6xQrqcPSsXru5RZjemQa",
  "key28": "XdVbmZEgmpV1HT1kfLhKmXNXFzEJQeF6ebrK3VRjuu8L8rd9FjynrqthR2qnSFfvvrJPqoyxcnScXwXkWCLSEfj",
  "key29": "5zWvQWz4nafH5RyjBpAjCghd1C3MErp9xvPZoBxJAtxHpftt4zkw26zXM96XZgmHyzTGKhWVR81DSS7hu12gpJk1",
  "key30": "55bA5rFx8nqBNALkQUvhwrorfcYkGQbK9Sh6JVBNgDUGeh3q5N6BdJKx9kTvvTvq6KWnH9rfygFUbQDqsbR9rb4A",
  "key31": "2cEG59ZqWd5j9pu3VKSRphtzjYCV8FnYN1RCz7E8NnFxarwYCUQeFewdAdhhKMptUTc9QHaFW9muZQ99LV43n8DH",
  "key32": "2W3XwrvsmRF3ar1b3ZnZUDWdQB3jbNTAs2SWT1GLiFYsNrHt3Eefqw9ZUwiiLr6pNvkAyVjbZXBdgPbr2eydrHK",
  "key33": "3GvUqPmmhLDnzUM9X2eakwADYtbnGr7wg48pQxQLFjgnk5Gg97vpjVdtjKvCtRWpLEPthNzRgKDyfCjXbEbjdiPx",
  "key34": "4YBW83RYEA8fXfLiQtJbYBEVo23UF5qXmaiSab8RdTncK5eveMPaohAh5QAgZdeVW3hDCvxWbTfystems6v18A1c",
  "key35": "5E1kDFtD1hYASgbswMHeoBEjPdNnecvAgysnMVauNoNuDD3Vtfratp286bcWKD2HW6nxZ9jKm6f14fLykNjQrXEH",
  "key36": "2W3ce6uhgG2FUqPcBWW9fY6kTYcek4Z8PLUm1f8SSr6P8QhUyFSCEZeYxsHmHt6VNLhagJLFmGJ3bLqMwe4eknPh",
  "key37": "VrrbWgpwFniFt9WHU9JaS7u6nJMYxJCCMrRCsSiu34Bb8qKwH1eWyn7Pf7zzseuNhTAAU23u1pn7EJg42Bnvi9C"
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
