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
    "5PjicFNnjJAoM76wuDXh8gxo4DBUm9RHuSVT2nmvbBF9wkhVzjv64kn6DpV7sH8YUQDkvArKpk4hMiifR5i3zwog"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jsnBJnv13CosPMweXS1g2ZcevHuDRTQLHD1dydudXaNSo43xzPf4VaRaTx4JqBHoNyGhQYPkubtwtT5vPgCt2g4",
  "key1": "DkKvzgp6i6rrVD9YHvmrMatLUyk3CowEwjSEcVguL7RxG9kvWWw91pRWKcmBzauZtSRVXFfZimrsXW4MxRffN7f",
  "key2": "2eGTipY1SYbUH9BHB32DAyxkKHTVU2UYvDiV5d5kvoWvR8PPwefo95a4Cu2mvmnA2kr8t4Du8kCUNcqQtK8XLpv",
  "key3": "4WvBFnQPkayhbmv2YfFMxpjVyy22rTd8bqUVyfm7KppdZnDdM73UnVVwakWEt3mU6zZtpbp3AQwXr2bFuGyReVuy",
  "key4": "WkTbJsB3EZ9wgwrLTHKLo85SazQ9UbdGeVDj64nZh9m5VW6Hcy6DEdQB8DEi4NzQFwmtAYPX6G7LUhP56nfaBne",
  "key5": "2oTtbEUGkn66PP9Zrk5aaqXybsYy8Zp2iub4MtDNHeohdRtPUyU5db3GKtw2VLX9GajZFR7Jcm7N4o3DXyb4ywr8",
  "key6": "2EGBEwtaMafqv97uAVYbmXad4X3BzQmTCKXmcdpxaZ3rDki25YdkCodha1SCstsdv29GfV1vQ7PQktdY5gLahq6g",
  "key7": "5nZRBuouHExjCYrNoLyw718CVrbeBH9qTvVK5iiN4juFvZHoKmC1MSPiwEg3inK669yT2undAMq5W4sYGwMbtyu4",
  "key8": "5xo8FcppNFiaKnWGxwDAhVGGdT4DQzukC1hpKsUu8V8bSeF5EJaeW8rEGxXNUQJdXqFjLWRZMBqwhuXhcnp1Xg91",
  "key9": "bQREVSWbh5HxW5QUGuPT3ER5bVQuWYhRpWu248pi3qwsFRGB3SC8sZrSWSgvdZyYhCzE9Fj74NHesWThyZdmSyh",
  "key10": "2sus7Nbo3kh7LG36dtWKm8F24rWKAkhaYeB9RZXQcHKnXybYU3Mmkj3zKLvPUtAi7JnPTQwHXjFUzQDFdt9L7uF9",
  "key11": "MuysFwGDXEXxpTUWa8XvBTc3BLMMuNqmzJvpvoi4NWVUnAXGSuby6g3bpWCZvxjabGxbRK73VfoP2PbFBNHkuij",
  "key12": "381HiFjeFQtozhZUSqXSQkSjVda63CH75NorpWg9zfEQkWV7KeSAQri4TuRF8wrmoWgGpaCpS1WqPVr4MCJWsmzZ",
  "key13": "2PWPBGYWfKP6e2XbCRzuJsux1hVXg9UtqcfZ6N7UGSNGjMvcFYxTRYkfxwa9LSeRtXCHua5urGCpR6k4mq8gjB7",
  "key14": "27h8EHh6wGdYwpAhkJfmc2P2vrFD1Ccux9BMpQsrYdrgqRZ1etsVTzQrW3pEZM8oeqwBrJR7LF39S87Z7SqLoPQa",
  "key15": "3LwXKumPeYqc2MCcxMWxQU8f81yatAr8TAFMVKbHCdZtaQJZx6fBVfpJm8ZfLNmB5n3fi9VD5Vtj1dvr47eLG4aY",
  "key16": "wwnmTHeSLrQXQxBnB2nMb5tBBDLWZhGMec1PaNzcMahZSDy9T7q6NTC7BiBiCZPv9v65VSPBYmf4PPeCi95oYv3",
  "key17": "BQZY1saRbLxwEVp5E8NdYrujKhVZYcP8U54v3nT4cqw2KEHJeZQB5xWTYhJfb8BoYMibSwdPvZgbtbDLiXFnzrT",
  "key18": "4JUpHtEdWQyWjtYK1mroPL9vsZaeeDVqGNVRaDZkVuKYJUH7oY6NrsoVRNcV2WzC9xeMsvTDpDAmqguTr1fQzvmW",
  "key19": "43JP67E1PPKuZ9bFQ8wKqqRh7c14oWjKSo7qjZgGNhdGRwCv7foab1k7zm8i4UzVDeLhDd6ses65RdLmkgLoMvLz",
  "key20": "4QZTjGX9AZLzRRCAKcgppNTRjtq9HoxegJfFwo1LfLegfTSUeuqyzwzT9ve1oHY5FDka9BCYUvoUtNAJ5bK5rTdo",
  "key21": "5WoRXoW3EtiNbPyHFQspL2TKPZ2KpkyRqSWGN5RQoE2LJX8LHVRHbyH4Xo8E25LEPm8JxeRHVp5pyXEZqf2TNV3C",
  "key22": "o2mpvtcg97jb1QUGA26g7iv9MhMhiYLR4GyUyhyqSgK2YwyQ8aGji2cn9WQQtxU5KqFuRJ4PY322aG7ovwKqcrD",
  "key23": "2xUxfdYm2jPjk3sBohQAYaChkHCDbiMT4zXWbq1tKB4vd5ZW4PH9CCo9zUBFky2TjGK7JK7RgjxQ1iEZRC4t2SsT",
  "key24": "52CpU7Ef2qHXu9hesCb61iPTEQqwNzG6Lh8b8bRNVYfktJ2Acc8knc1S3W7ZbzjjkMtLNTABhdys1CPhxKJA5BxX",
  "key25": "9sodaUguow32K5BZBQnuwNrnrK2eikxsxCL9Mn8tdxXFVi5VrSzBCWyww7bEAvzirebRqjWmKrvkU17buDpTgg2",
  "key26": "BMw6LGs4mSKnJYc22oc6bD3fQUSWQnPo93wsPu5osMfWkKqo3jMvwSDziYSwKsQd4ZqRFSyBDK54wkbQD9cGUmg",
  "key27": "5qEPrkcA6SJCaiqz9y9A7YnUEmUhiHzYQJJFy5KJFvtMWnqcKuHCXLL3Nt8K7ntGMeaYGsKkRnRZ9DjUKP1ZwNuj",
  "key28": "3hVXsjBZDut67B7kGp2q2fPtk4opLqdN7Nf5qbJSgyiy78U7ixtsESoB7rzmUdELj25QCZPnEzUGPfJHRMJZr6Ei",
  "key29": "4E4iR69acGTPYgLVox1nTwqNQvF1E8b9FTYNMxJ3wRUGyG54RWGTd6pJESEF9oQwWqL7aw7KsZT46B3hW6MUWFYY",
  "key30": "2dpcbnKnfkrM5qSPVed4UaF8wPEn3qW6YA6HA5G6AhHfTSL49VQSgT6b4GRWEMHPULTZvZN4ccT2CyCtpUy8Qnis",
  "key31": "4bASq8imsrLAYdN8T1zN8SzoWv7Q4eXdEdJu8Y2zFf2zep6Np9LGJpXcPM2KA2zHxmLcj8r8hfYZMnv2kgQ5LY21",
  "key32": "7SjycJ2wRQP9s7uYpx87NnvBmXJS7JyiHoBTGLz2dkWMkq9DCfWUvhK5Nt5jNPCnvp4V4QDiLBMSqScCbkWfnTS",
  "key33": "4RrdR5GitpgSNy9Rb4bQQA1hFLN6ozcb2Yi9NNx75wXQR1sUR9w5fjp1ZLkWAHgCjpBBpKXBiUEVAwCPFtZQq7Cu",
  "key34": "1Bab74WMBtBAbRRB57kZkjyuuD6FSSx7VKuPiD1qxeaRDxXuivbshqb3rw3AYaLiY8vNYQtDrWbMHPZTP93XZLi",
  "key35": "3SwjjjSVQiS4w1Hdpjbxf6GsHAP4zBG7HPSYVoaKDEQo1YKc4xGrnMSyN3gS7yRBwwboUxne53tLdvgZxZJD8GzG",
  "key36": "5xCmvyCFxnjxpqKQ8P6fGmPzDFXD7u8Ud9oEJNpffWRtA36gypZTRjQ5hpLZGZXWTztob1k4XJwASyuXjh6wujPj",
  "key37": "MbnoinWS4rF1NPV4V8GZEfEoco2ajP53f7gPBg6WLx4cyWHgDUzBGvT5WSwrRQA4hdW8LykWZmQKUVk18M3Df95",
  "key38": "5YjFG3x5YRdCesRMhrqs7RkpAUgdYNVZu9Kag297nBZuLpQr5MLisGXMZEj7dxTu4Kfm2wKAJqnYHzCq8Z4GdTZE",
  "key39": "wBmaepR8GN4rXy9ZBW4XddxxYyNck7KREhpCAKbtmydL6Ka1iENy6nMkJjBAHiLcFjKGDT3mPyNtrUAJFsvKQJX",
  "key40": "2XQzRW8MH9Rfo32iN11Fg3fiTZkVF6z4bMVYVrQGJ2JqZU3RdNb2s6u1i97dcHbW4SQtsuaRwSRL6smaQNZAxSSy"
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
