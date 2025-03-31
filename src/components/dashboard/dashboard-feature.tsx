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
    "3Tbpg72R8s567vw579j8XQoh95M64eh2DSDmnjZyHvk7H5zf7uLSJ43TmPa7zZradUU6E9qoA5fyTWyqdWiAh3Te"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CpFk4DG97AqjsPQjUXX2sUKDVHJZq8cqPgTgx9j1AG8baq5T2t72X6n1KxTiEJoG6iMz2PS2eWkWvzRBzWzRuaL",
  "key1": "4kaa9LvRKRsCy9xCTNhgEFdvTbVsn8jbFAHTRZJNNgRKfpfGYGXBtrJmJPdk9AEEycg1EzmiqBn25cfvXXSL2RYv",
  "key2": "NJW8K2GHk61JuTBTLxWATk95rgXNzLDUwH3kVMyZcm4sK8SHd4pyC4GMhKxAsJGHkU2wYYEMn28XyidcACyT8MC",
  "key3": "5KRGeJPDDNKxGewU98fFUobXTRy8VLQvrgavRHDn8uWZjcRcWtjpL4v8tyamhBXka5N5i1j1Gp7o7g92vHZGSwfo",
  "key4": "5QbWhfpHzGAgET2EZFmkmayqu3YEShnwcnDwyoiJUZYskwHANba65DDXirivkZQuDnmPrQnBeyZLfRXGV2JM8ZoT",
  "key5": "476MUkLgbgRHvGE3E9dyHANAd6xE7hPaZ9cFfn88f6qEpmUnTLA1bjxZ7X5ChDocVq7LGHMgY4AeJf64No2dtMkz",
  "key6": "2fSSxQX6pXchTF4tAUKwzKnvzLPfh1RXRZq2Y9PgDT3a4vV3S3jn7X8AoTwHCNzvEf56YLNEHKGTDKQKz3wqTkw7",
  "key7": "2MUf9Ct83CFdrtxNwceAnsn1x1MCNmtnYZuzQZRepT5TSghZxRTprgXffh8eZt5vqU93gM2ZNodurb2nTEEmh5pY",
  "key8": "2TqPnwpoBDQ8ecQofAagXNXVMZqwbTFwjCvSHnqJADAJhnyJ52bZENDyH9b8zKYTUSwTtXFpxN83fy74PxxmkERz",
  "key9": "4vqEfinmHBPoyKBgMMbEiBBM2Kdo17SjH8g7tEV4r72kb9FcqoFJVH7tSNKV3uv2Unb8P79CrLT8rkeSyJAyZPpL",
  "key10": "trM4NiJAbso1CSxcfqryyEJvFoXnx8TnRxYqzSzcGae6uH7EqvUX9snfwYXEbewhQKuBFbjfoqeisUu4SeqmFmq",
  "key11": "43fy1CRCPdBHxSKexqE3h9EhRG9ZTepHYobDBvZ75V8o8NAgr2inTXp33T7qfLQZ9KWuaUeFScNBeU9Z3wTzE4ik",
  "key12": "54ek1uRzaHAfYBzoAPYogapJUAm68uBpH2cqxRUv9VmhRj9jUViPEP4vSiVHPGfHXiAZhhez4KBgZPCfMkqMxNbt",
  "key13": "28oLjghAxMfbfK4LehZ28YZCmHszYvt1ALBkMGqPbwtFoHnX78HppxLE1C1e2DHY3UTgN1gF8oaKGSsWMLFf1V8h",
  "key14": "5tAiFZKNhAUMQ5Cee7ptGgvuZ7ZmCpmop48uumj65YRqP9sSVBKrT8kbbC8F3LfUenieeUPfDvPxdSmNQQK7rKRw",
  "key15": "3Uw1cc1Mycs5reJnfyBuRCzGP9CQLFHWUba19UmPTrWb8ZbR1zbCdATgH7K4svW7haJGiFLAauaFhJQz1cDXYMzj",
  "key16": "4s7WftL6eDYFgTN3sj56Nyrk9n4JE1v5Jbc3NhSqhegH3hjMMp1rkwQSEcpiXJNt5iGoKKb3jyXAxUxFzCrJfeJt",
  "key17": "5tSqRCcXeHdEudCgWULkLruwHcKDecDZm4QgJ5amUdQideHreDDzmQK3RZw659usiHsykX94cssMhkAfVnvEH1FM",
  "key18": "59TSh5693evMu2sh3Zt8BfmEEKVobLxGGNfENokLKMo3eCwaJmXp3gxvFwe3gu6tL1SSzFA3nXsSXAdv2fUykfqV",
  "key19": "4JcwiABvPSj5f4oVKMmUns25eR5Tp6df4g5Xh268TNo35bXFtm7pNBG7Mzfa2nUQzJDugpapxZHCeYvmTw6zYLcu",
  "key20": "4GoEPdDKvNdTaR5ninbxMU1kPaxF83siCtxK5manEHVGvyU7ToAu7X63mhQP7bbYQWn2gUvmkM13EYu6RVgmfKL9",
  "key21": "24FcHkj4muai7uChZ1YC2kypUQBxFX3URPsEWzVcxUWvkvXjKr3Z8fsJGszTAzMpDCKztijQNSDhXBCf56VUZFsh",
  "key22": "4peg4MVBqjw3K218t5VLUnNR3FExNY4sAEFZSuebDEGBUzAqXTSiQFmS2StcZhugTSWoYvBWgF2ECyBrfsA3sUho",
  "key23": "eYCff5n8gYmsK9EPYNd3q5Da8UTt6nEPu1VuZnfTm6ZD6k9dzMXbq2uerGxUTJLzGUbM4xkfqnqLNDRk5Ast4Ph",
  "key24": "4VNY1FbBo7JbHzwmqXTxKzDe5RdTEDwBCftY8K9ohc86AuAosmagBA8gbKWWnb4CcmPgQ9fo4dHUJuc4cG5EHJiz",
  "key25": "5ZXtQGEy3fjTcz7TUKnGwUP55TpfhHT5QtsYAn5KJj1XB5EeJat7pLUnBnzZrQdJh4e7tWjRoXmBaXXTpSW8FWi",
  "key26": "2XQphJGzwMizrrEQsUuJVtDgR8uFxkBzSk9gLr2jNT3E4sZq7YNGh38KEycbDgF8qrw23Q7mgfyq2VpiG8EVoCtb",
  "key27": "3SNQ9Ez2kPcfbwc5YRyMmozYjbgFJ2iFdPyUn4Ata4paJ7oyTpjjZrgGk96tEHWv9ewb1p45jKVrtKP1Q5ic1ki6",
  "key28": "63APnygPUri8RskjqX1RpgHtr79GfkxbGnFbVVgNN92obFo2F5yzsM26fxTNZ6WuorjLkDAiMCmEEKxpbPQGpM3m",
  "key29": "4QLsKGCvQZWTaBZcrrsHpDnpuLMFNBwAbc969qJdWjW2k9mPRj8tEb3BRP5ZzgvXiafgn1D9VWkNU8Wzf3qNtY7R",
  "key30": "2YZw2Xv6MxFKebnTAQ4MSqYG3C2srzB5FwXaBv5AiRBQbiZvVsLtfXRfXvsEF9DT3rHjR9HHf3Nb2NK8cgFye5qR",
  "key31": "4MskY3yQk4mUXsxDBqE6yXg9tjDvFEgR5BZ8LPCmXgn2QqeaVnvxKcNg43XbafPCZVWxvYWn5pRxoHQUkcxAvzvj",
  "key32": "NbuhzaczvLqkfJG5rCQytC7EgDWzcR4qXtQRrzYtTZouXnN8KWjPh98PsKaPfsECvNyRSuETxvzPYMTdHnsjh8E",
  "key33": "p7a59xLYv67RJUnj8KrZtpMSuNayrDFiyBz1VVY5V2sn9hs4GvpY2MVZp4dbrMT1Qd6fgNhKfQ8FjGZWSFnZJ2V",
  "key34": "4masyi5AWvoU5w4x916caVERiatzJiaw9LQqixo5TAKdGhPv2FSppeLWTjjQv9ceDbbofG1BKYfWcwmnZWa3xmfa",
  "key35": "4MW5d6cP3bitvaaoFTqxqLR6WEh1R8naLCAJ5YJRaafSTWuefGWVyA3JGVpWkz4vvLqofCAVZRZsMvb3mjevwasj",
  "key36": "41rF5xFbnG8fuqjGWzWXmtpCpYfk7W1Ft62ZmAR9WxagxycU5LZYB2xPq941ciE98ALHvSVqBF7p4kz4Zwb3LrC2",
  "key37": "5jLXR11eroCosgqkTruQxgMUj9cWVV7SM631SgqnKF7JtJJ6kPpsLFwBifBY8hZStRMupzscdhP5KsXfHW93datG"
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
