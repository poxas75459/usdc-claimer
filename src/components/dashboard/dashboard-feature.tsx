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
    "2Z86R8e6e4MW54FikP4S37hvvVYGcQUxmvwzTsS1vDNPCSXawzqdQqqm9RFNMY8MMrQJj45JWrP7BPidBtZsVEuv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z9R5mNh5NVC5cGCuYb4FKWxqRAQsnXwxyF8tsmAAjncyJGGKZJ3MeKimBCFVHEpgi6Z365oS5sFUxqmpEVxD9ow",
  "key1": "5bPDWBFYU5apk8Geik1m2dS2aHcMR4Pu1BVUCzB4y31UnNXaEwptStgXSYcKu6Yc9DYLkWg4YPiEjEP5XHueBz1Q",
  "key2": "3vqeDHXyyfjqoUsqDZt23hhaBDgZADsgtKXQ2zDMbadPovexx8V5dr4897ZtNciK5GJ3dPEcE2saY2grSHRqGFX2",
  "key3": "2yhZMCehq5tLWfaQCM8YerdHSwQ5M4FkvsjKGnNcMWDSETAGkF9wtk53noMVBLEQ1yqc31AnBSVaurSZLjSWXkQg",
  "key4": "3uDMKb3UdHAxGdhWn4Bh8kcDZLnbp8CKyE32gKwuW6HWZbXv52zPMZczH6UWbBMfy3HRdaaiEqzDAGuYqqwmqxjt",
  "key5": "322EvTFFy1UatzPHpsU5eNctW5DSpQbACzfXZ2Mx885RG3sWpQSb181MvmbhYRPhV4aBkGmSDPeYLJHJ2BeFgJuY",
  "key6": "5EyR5CCHXmuGYngWo8ezbLc9SW9E4C4b1qmA1cyEmYKN5PdvnPeLE5xT4TAdj4xCchysGRuzvUk3W7Z7hVmTzKJ7",
  "key7": "5LjG8Y5bBQ2puVc2wwDuPHLAW3GqjwyP4iiDsuNAfrc5TbHF6ARuqaEEt2gtLnsAifKMcLeT14tFzmXSpUJ8YJhY",
  "key8": "2Ghpve59P9hmAUb9Gi8nLJCEbWUzNvBYYtdfwbYiyTSn3XYepmMpToTrG8SudMi6vG6GbM5jmnuaXwr8hyh6yHc",
  "key9": "5HKWibiqTVecaJkaga91NnTGGXcYhBkvL2P1BziMNoKd9UxvaHiuztkPiSKpDy747n4CoCsH49FazE1YAw4qen4H",
  "key10": "47RgDggVnTZp3yiVbD4cqUnGFRDhWfAvxb6idQcn4sqSWGviAkMAQ2SdUrL8jgPAVnPqdiuS1PZrXA4x8W35ZWpp",
  "key11": "4kxzngVTwERviy5wFh9n5mftznmC47qrw9YMy4jm677Z2VqKhRcEDrJKkWQ4cURnvNs1k8TM99XdkSmyrxxA7rgi",
  "key12": "3uuMJ8R2zaKSeboQM67zvCcArBFWKGYyQJUiqPL6WnyyKMAkxCvKeCR7hRxpas7waxP1yVhbQCiT1Rq3HrHxEq76",
  "key13": "2HP8V8B34f4X2DoKFnbeqSfKDoMBsvZzif6Dzwmbc3ALbe7ryPiMCivWTqhQeCMWvvPSfDctbFAF2PzxZfnrZaeP",
  "key14": "4Uca6ApekMzb7jzTkhcWTQTF4gfPcv3ZSzJrfsbUkav9H2zogjbdNA9LgULNBhHJt9PjWuD9Ca6etPhb5UAQ7s1C",
  "key15": "5p22tKgw1P36GMdYfizoPR8bTXWJ1qRTFF8eXfuPmUmcTPh6VCst2YYhhFWBEP1LUXwC3B3ACRYoazLh78zfPMoy",
  "key16": "2izadRWxtkLQpVqp9373XtqMhCK7SP1v7dw7n5YLFyFrvNyxaeZgwmuRwRfwX3MQyKyvm9VZMDB438BAMiJVRy6i",
  "key17": "P8fqWeu7vwDqdy7ez4Zzk8grhTHJ66eZy6AWjckVDCovn3X2u2aYTnDzd1K5S7M3mvzHbaSsMhycGeDV9YWudXR",
  "key18": "4Ne7QdydNX8sUxBzMvgCohmbc5pYKDyxLd76qeLTFTLqjmWLTLUDbiKp2j23k5c7j9HF6a164MW7DyrWQeDRAyV2",
  "key19": "4gpjgpYnQihsN1JF8zupmRVHgTN2c9v9GyKCjSa9DabvHCKYbhn9fhAQUQcgjHkPJC2rgDYKhZndwEVPJ7WQmLEy",
  "key20": "2Y5MX5sutmxFFfQEkhhGAdp48cJT3ZkbcsxmxTZByr1WuodntcxHz3NnEhamxbuGZDt7YUXfQfnMsfKiqVGRTBeA",
  "key21": "2Q3yxZEk7S3CibSHxXsBBV6bMV2EXgZaTj5FkiSmPv3QKZtmnA9gCrgn3wvpNMJpTkMYZcAU5PU3KbTse6aZGv3q",
  "key22": "4Xtdh8sZVYWGRWxqsRXRyAExF3Cqgp2vg72iXpMUEbXUuNMm4CVF1KV3TvcLofv7qHabo8MDNf1TAYDVdpUpXZy2",
  "key23": "633TvQHwtK9rY2Qr6365ouKLGB4oxwpzP7tNTmJL7jyV8GRXJFqH7xrTR5vE6m5hQfwfagDmmuCQnq9T8Xt9XSwW",
  "key24": "5S9JxGrh64HdZkB6kS7jL7heBKaUHdzJKinkpDCjgYYHAzTTRSpNzZumradqGR89uNdcarKUmsejFRDy5JUmozM3",
  "key25": "2dd7n9442VM6We4BRAw2ttPsqGB7ckNVo1smAfVAFNGeik6Tm9eS3TnW3Cm8esc5PxAnfDomATHMVKKAXQ36prKK",
  "key26": "32TYYV2sR4ojoYCC32oYsZfMTWFRPKkPSitD4XtinqMsr9ZjmCHbKCDDeiQ2P6R4MeWR4ERgkWbQsWKHb3vaPCSZ",
  "key27": "2LHv5yEnymwt1GugtJMveSF8qwJcQtMfKQsCJuFj9tQWEZunjoeZWemnqnrTfeWVixTjsu9cATzjyC1jk2D8bu7Y",
  "key28": "56jbehv7Jgg4pWSBGqz6SowK7UKhbaAXrGKHw6REb7Aw7MMFs1Q76hjUxQf3EDJCEaXUmFC1nABEpbspaUThh1Bt",
  "key29": "2NTzs8Ly3f3NbE6YLDWtWWgc8mvUsyHiJm8oP29cjaCbPKBXra8jaNFGWsbAEX5VZ1HD2oWG6fRNAkooCcdqM9Mr",
  "key30": "67Zh3VsWbFNBAcGvKNRJukE9oHtdZMkpnYvmS7SPd5TQ1NUy4LRM2PakhmqKLF33Yph7dnoEdQYWu3ZagRfFKLVN",
  "key31": "wDz94Q3zTTtv4TWxxG93wA8GeN4d8ek5hUarvL2kJi3ekgfvG1KQhUMwxeMqxm2qW6vGpaRWYtZ3SRG6j4zDS4o",
  "key32": "zbuQWgnaN8PGBLUXZF35dsww8EM1pBQAwnGwgBmE1vb2boANbkkjLmRNqBnmX2LcKBg9HkvMyWxaFweq5QAre8R",
  "key33": "2as7SWK8wLuMPHHX5J8ToZ5bGeD5NXgLBR3QvwbYnAKAuyMwd51GcbyNnjAENUh5JwkFdXrLuRGT3Ym9PZGxaU7w",
  "key34": "bcxL2XhPxT11qHiHccyQakr5afyTH8ZpHeMrpyGPpirVdQTx4ALT3SADvaNnyVF7mMahTZiEKMe6LeJZ9Y6fqvT",
  "key35": "5q74t2yQbXVdrdpHVsvj5adXuWPRvHiKhF12crXvP4r11DmmWaMnaV1j3g2rZjvxDhsE85KSwz9SQbShwqHzhDGz",
  "key36": "CGjx7duLYvN9Hd5i8TqNxXQSHvjVV1HjzrJUn1ExC5ogMtuxFdQcP55zctnabft9eM2KeQu4c564UF5NzDpBorD",
  "key37": "2aHUr2U1aEiEbLcwYwwiy6pbwxqaa4Y7i4zCPGPyE7gFEviaTBdn6R6dn3XmMsENCZGVFkvJ4LZXj9Ko9oHJmNq7",
  "key38": "3VNp9BWaV3mTSCvxhdiLzT5up6pRneRJeRy3w6FRGeXVuFb828UAsrxXDnJai5i1Q7WFDU2c6ogAYm9BZqpnk55S",
  "key39": "jfyNvtMJ6mChfSvBd5vArCkBru1HwfGybyUeocpKiTcFvYZFByskzKMrLcQkaHPCtJLRKhCadZhbcJpu4ViAJBy",
  "key40": "3XrXWCrQbg4HPjrfFh8K6HRNERgcaqudaLuUngwax1SsMSXDy6ojgVWByBv6YkFvAzDncZyaCTspmnHBdSL3Wbcs",
  "key41": "jGQPKT7PgTSpJosJSKcRAyJ1eA24UpwijQK18fotpDt9tgMnUy7dQyCTL217BqvdB3ospPG1Zn8An4cQqP3SCEr",
  "key42": "5x2uUocR5mg7D3ieDaYaZi1PhsetkbPw6Eu65DoGCjB7o4vuzZmpinQh3vY5oQaD5E3ndiA4YDnpB2skhyvQ29MZ",
  "key43": "3ZJy3mTdwpRy2PtiBbMEbH7jxokojvFqW7qUauxt5e1LQdJ7k7g5zcgH5r6tYhNsK4QoryFrGSbnFcuf4aEXmT1g",
  "key44": "2WiaXiJgFBiLWRr2RK7WYUgDTwMqyXNPH8Q9enhziGQfNxPBJFS6G9HMudTDQtvTmaNgQsVBaFqLy1yMqXvhBwGW"
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
