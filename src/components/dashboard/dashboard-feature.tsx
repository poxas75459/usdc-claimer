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
    "2q7whoCkvj4nacHmT4U1cGPEC81Jw6yRkrctqzjET1n2mYwNXxcscDGBPoESMoAkeWMQUT9VdnqScSqxFneQsBUQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QHp8QYSy6k8S7buUjyZvnX1wy2xtDf6mQ3DsRvzS6H62z9U8Cc3uRWzSzoPasMKMxozQic9Dj9fAJBwXPdquZUW",
  "key1": "2saMEpbieF8D45zX447qTohT7W3Whcum1beYx67PptkrA47DE9guJodrwzbVu3JaXokZmBy55q4MWVqTWjFcrA85",
  "key2": "3FtfkFf31thCBAQjKqLoDv4hVbp5REBZYqvH3sWjNT9xuhkBkKegXfUK75sxoXGYfmsyZTpF4nGvenwo3zhH9nLB",
  "key3": "2bkUChya9nx6y3tLaTBNDE7aAkKS8JWi4k8hTTn3gLU9fUkX2LnaQJmMtjBDfLViwoEqTDeAgGoCdJ1MLwpZvYqW",
  "key4": "5vP2T72951y82g2QEG2n7Wg4LnYhmgFgcXZwF7LtZSn4towb2P92hBaTe4Z4kka5c9uAZetKGjK3qU5YJVtLjLMR",
  "key5": "2gRsrp9XNkAxakV8E5YKhn2VfnH1xPLQXCykmfjK96riXa7RToZhgDyAdDiT8cRJd5SWRxuZ9Bm9p1p9z7mv3SFS",
  "key6": "412rUsNAWyhBxWQe9sLFs1ZsZuPi7rU5kMYKf6LWjpcSjD43sDkWr2CTjbDjZEJEzq7qPM1CA96pDWDa98H6Y8cA",
  "key7": "3j47LjY4FLZPFwmzkVPbhkzGLYbxiXLF1NU3KyWtKicEHc6D9jWxULMU5bgr1QX1xocvKxKRKJx8VLhqKK79hARt",
  "key8": "3qVbf1xMFwEba4TH8GDX69gbFGiJu9ApJd1U11e1S8pkuoVgPi4qYsCcrKWjdS2koYopuEjtvsfvG1i1zaqQR1Dz",
  "key9": "nfWbEq463axYq3qyJ6cwzHx4CvUrcSqaqZgGeam6yB1LyVQS5PjdGrjtD5f5opkPdk7yvShCBL8S3fvpdSYyJsH",
  "key10": "2SBquDYV1F7XzgHPUhjrGzuPQuNmTgenXWseriGBTHmfQ8DCLrrgGCKhK7fLV9gTL41k2eLStTpGTjct84sfkNsM",
  "key11": "21xwu6kiTJEPihYqa8HCNgZ3Gt32tcMdKyhschAkkKiPT546LxmSPgGRqmwfgwPm6bVQzAnJ5dLstJ6W1k2AFGav",
  "key12": "4sok77Za5vwDYnRSXxvUhWRxSq2T6sQmfwSxhCaYVB2GFBHgyXifSaXE73UFTtpogMA4LGdFUvqbirLUv3ULx93q",
  "key13": "D2xXVKKEa5xrqWJDsZzCwMZgb88aQFBqkJHJeeJfCsKJXigAcy1tsjNB6dAaKq1hxuUScVcvu34VifuawJh5x87",
  "key14": "3L9sdw1f6SDu64QdwHLfuQXfuRPx6msasQyZmWT1574vJBQ3ymzXmAaTZXim9PPnegd21LdoUpAjq3kysdRNKjzb",
  "key15": "3451Zhvuxtt18FAFV4jKccHN6s6TDNMocnzj3vDvNFBSXMqZg6HTwSuBD3REDFoi52s5crRBK8HzWBSFGB729tDe",
  "key16": "4oyYLgTD5bem2A1c5waxKz4knS6m8FkoY4Z4Q3pECaPFQ2PGZhQMdyEhXtDnHs5yVgXfS1x5NswQzPuTL53KedCh",
  "key17": "5sXrb6bMSEKMR2aseJG55pGWzJow1HjMEanj7Liws9QaRpn82dd8WugZKLm6CXjLG6cGy2eDKcwQWy37C3gjqxm5",
  "key18": "2iygbi7WmqXLemJH6SYfBqPwrNxmoPXceqf6zAxMpewvVkiYPycN1tuMeFvvfwyC2iteFBYtTTKvV6FMcBvV3ua8",
  "key19": "1L5rckUeiz18hRik7pRUZ6yXG1h9ce32xpLYafeWJSVEgxAj883nDJfVqLDEwAAewitE8ioBJbNhSqsxaGVbwcE",
  "key20": "5vcYbVmD4EfYezcxVwyAbmJhkyUF82KgF4dYGfJACuDrwwpHcdbXdCutuqTtkGXjaFwAPdxm97HCEkSf4rg3EvyH",
  "key21": "2G2MjgoWP5DgethuL5qYX3suZjTHXgYBKXbWytP8NHPwaTLL6sWgJbgLBZ1YdLj5wWKwWivmeC3BKqtZHw172BPe",
  "key22": "iYCwpwH9wkpc1d7FJbSUGTxTPaamxY98ChEuzQ3KdLLL6T9jw3QNMdUCCQaPgjvQB7D4Ff1u2z73aF5mHZwBBpX",
  "key23": "5SrbaeDYgY5ZvYfjYNbPCov1eTXGxme9kFDBRMj2pzLSaezYNBniF4s9Cp6vMfYHzVjRAqwvDztBXGxhsfpbkriT",
  "key24": "5hAYzbrFWGNZDhop4LZSXCKbVJqcH9XugiuB8zY9kj8NZ7BXNetXR6jeNbtFQYh8qy8jsyY1M62FojMRBSbARgGt",
  "key25": "3jYfm1fMYY3uVBKYq5g2E46E1SmzhpcWsKSdQ7YJgkhnpKtJcWYz3V3bmeTNk5FfbmMrMoBN9zVu1dYSP5nVLzSA",
  "key26": "4ytVhtMaKMy47c35KPhq5ZLxo8H9XoSVtD95BQY1LELJmCcGQEaPb3PqFG8SGupDTzjFi3CUZZ8JxRTSGzpnK5xq",
  "key27": "4eZJPK4vnzS4JcTmVDDzxb4ApZQ5tFBbmxiwW9oTuZgrH8hH7auHaYTY3hbsgTxvUGCdsTqEmSYQe7Kr8Sd8qLdd",
  "key28": "4d7yFJQEF2nWFyBGHPfxNpeHEv3WhHjs9GyytLLtDh4BUFyRPyTLAHr62pEA6fhmDGtgvzgbZvQoiwwdguXMLNfr",
  "key29": "3v5mD8izzTQdScJC2bCUsENU8jUb79CDVXEqKTCp3ieiS7cuADANf8PeaN2mfQTjrJvLpWH9yUUugUtnzHLNRhna",
  "key30": "5w8CcJD25i8WJQMKLRfcQiCWkoBAvzanp9UCEiVF8aH3534U9GmX2ejQCWVAxDhRxnQUFbTgW5tPXiVMmLzUeqbR",
  "key31": "2M5ACKcFPbRJgTgyayr5EVqWarMiNgise8PvajrvyV2UUm177PsdePfPJMRwwU6QKz9DabQwfatLbAefEGLE5WJr",
  "key32": "3nUCgrvDudj5QV2qUEJCEFr17EENMC8tBFofGZyRYoBUJ7TRNsTKgsbAGkMZXXuWCCufuSQP99AhJYJPjkiGkF81",
  "key33": "4DGGhurW848iyS4AAZWAXhNrWGKdZ76NDhSVDLKD52fifaoAvaHJExG4yjMCLnkyyL7LCbmULVFngnmwQh32gx5T",
  "key34": "4LMajimQ8YVWKjy7nfNRMaKyuMBUzB9gGFCQRsABZsftmhZT8JJMSC3s4Boo2CkvfVie6MeKMh5PmkT28hNARRwk",
  "key35": "57pnCmP4siXjh2ECCNvY3dymiGbGDVq2UFSgvATFUy5BNGqvowZ5D8Lu5f4weBtawj7n7Qc9vaUbxSktjvUzzXFC",
  "key36": "3Zyud5vrvvoSHWrP1vdis6gPnmkCWT1xH1aQAQtruf9PGSi1R7JaS4QxCrGfnj4ZuVrDbQLktJnKbXVUNZaaRC1K",
  "key37": "5HWtkWg1r3XDmMRRtYWnZDEMgAf6er59TMpANdRFJpxyNwY2okjCyaTgvAGN5Wd31LbRapeQXZiytXFSJ3W9hTwc",
  "key38": "4eEYURhSv8asSXhTfuoZ1q7DnpXmBWsduVQYxaEtZZiL9dczidEsH4FgPM1hN9KNhYZDhDbxqxGuELYJRnshYE7G",
  "key39": "3oNY9kz4LKds7vUd8h9SYCZ49XcPwG1SG7mWECEmNssyjX5VGpzP6HRChNM27bFjZQU3Yx1e51jN3QKg5Cn2mFWK"
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
