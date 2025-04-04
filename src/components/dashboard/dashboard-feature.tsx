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
    "3qtQoryXx5G6nG5bgoyBmGVcYfBC5pFoJoBitMvYyzjEGjJRyqLgjrWXVkBZ51HZAw5QhvmvzT69r4M5ZqXyuEEF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FbKEcS6Pp1tyfwfBT3k5DsPw1p7hJzPkC35G1BQC46eEHxpwDQqyRnCYQrwXNhGkkLjbgcX8r3rcHL6YKUn6QW4",
  "key1": "2KLtfY57tNfWWyBgoumFuJCny3RiaWnQn7XmKtB8wcFfN9uyCHJJcsMPoNs2oS2fSTD8DDheC792Lcjr7zgsx8uG",
  "key2": "4Pnyygn1qi2kAuSQtDUwKJAobZ2owC2UPNf9T4qFxLoueny1BAouCZWod6S2KMWutCsxqhtG5x9P1LbgtrojCTmz",
  "key3": "3hYAbcRB9HDcvwXXoDGVC1qp3Jdg8d5123uRFmANQKUFQxLU67Yb5ZegzfvwwhCtJxQCMgJv2rRzYSByqyg2CLci",
  "key4": "4apXrb6JARUPbxSNY6yJaU7QryEoSqpBfpdzt51t1u7Wut3SPM2j9SpwZoPHJQrToXQDwVjt3Xooi5gM3yJVS2PY",
  "key5": "cXfhcZzqcbdTaPT7Zzk54Y1JLBkHnYm8Uwdnc6RuFvNLvLHyXfzrHxW1r43eLY3Xpw4qi6EZEmgV7tkYo791ZXw",
  "key6": "4pRJW2pwAoqHDXA4tmPWoCLEc6hUhW6otYSfKATYonQiL576ALfkxjHVjdVnzEEAs1d6ygG8EryNfTPSSDfCekjV",
  "key7": "3KDVpL5AYshQdDRcgBYFkoCVMMX6dnTQ9v1Vmb3Hxej3GkLbBrgJYSnDqp5XLqKSmoKS6tS5scumPVs6pQSJ5gym",
  "key8": "sovtsRYqtw8Gq9BDn3WJU7vcLX3wHB8dAsRQsZqZnpxKmUfGQtU6PMaJS46mTfcdkxpPaKxGtAmaMtn3w9b6BK3",
  "key9": "2uGzY78HJsm1cXgGyvinNUmmGnjUuZdZhfu7KGfNYc23tQaw64tX4jSMcy7HeiFSkomHPMqvFqBtrccQZLzhadrx",
  "key10": "4ERWfcBbf8whSPrT7m3Km7Xt3Nd55ZTgHkfewZqW4FaUYbZVbg1QE8F6qCkCtK1XPMCd7FgRaCPd7L8ab18Pn5Ta",
  "key11": "2Ggzqt3G4K2y9YotXHXakLGb7RBNMGc7zQdwUVSnPFM6Qv3t7LSxL9sbDoMAxEQgBVQmDH1fotphivyEAaCEUFrj",
  "key12": "5QtBEWB5xkYUAbu6MXX5gQtjow2gnZwqtStiPzNBdGrb9CLcS8v2JENAr8kzQ5fTtBoqY8mvKwaBFX2qjTX9HzUJ",
  "key13": "65GpUqcw7subYUvDunCYt9GftT3bTnTfcY8GbdbAKZ12hhqd4AE5tQjeLzJwHsTx2DxmuK3J13ApmbyVJBYxA3re",
  "key14": "2FGE6CNH2YPaQmnfX1wQ6JvF1ekWAdv654mgVRjS9UQjwHFbhDocxne74jo6nJRZRPJx8KWqPjGNcGXYxkXqMxbC",
  "key15": "3QQPoaEFeTKRdvkYwXTcsUeJF6rPEaYfNpHXWXHGMBvM6pZETuHgBuC8aJnbSVyRtBP2s9TkgciVfALXNKV2E6VX",
  "key16": "4KKKAg2XikyKHebbKmk8yUwucf3azSPW4FVHw4L7FQTGqb1uYYvDjNjRQ9yQSXLVQRHpn1ZVNEYPtoM5ebqRZLRv",
  "key17": "3q6YFPGvJymkM7ZTF2TaigicxexFDVnvBKhGz54MXzXa5W3NtZBLKZwtU86zrRxErdDs6bW7rEh6vgcTjhsPP6Vu",
  "key18": "4ycguPBWxKs1mYf6nSKdtGDq1E3d4ZyWbJdGwx2YKc5NwJvMoR6bx6R3s7RWUZaRZ5Ls4Cc3CZzj4qZJL4cKPyMX",
  "key19": "2ErRMQUu7khiMmiFZA7NjErQ92FGj8V2Tdzg3NW1P9C4Sd8yrcK3zDCuqjnRVG1KdyJcZUAnbQxAAU5UHEqcLEuD",
  "key20": "uWWXcRaVRzM2bpE5njNG18C7oDyr1kzrdAe9t7BUSNzKVmnDFpwJwV3Cpb9rr1BTvMjwgUgmK2Kz4yKBgKJ3nUQ",
  "key21": "5SdJ46Mi7mBXtQU612RoYxFaVRNiVN8JzMPXx7FZt1NGMhwYAqvJNpGsaC44GSexoUbeakWznMzkjGc1JBbht65N",
  "key22": "AgSmGM19vHbSXMBtoCPzK1VvFhHH8xH7CMLA3CRXF8qkUHUSkxEmrjkgv1L4PmWw8CsURRwXShi8s6mAkiMyVCJ",
  "key23": "JYYC5X9WzeMh6b4aS6ujy2Npj8BW4EaSzB8jH1eKDaJTpd9YCeavXDcTk4bkWZYn9sgfF8E8bdCuFBEVi1mt474",
  "key24": "42v5PPK9vU6kpJCp27k7Q5xVVFdvwxFpHDZHamugwpCFhcDLPhd5zDsizTnor8BNahHdjwLjvk9RN2r8tG7MXMhs",
  "key25": "3gu1zwBbP17AC4LSD9XZm8D7wYbg8oniHCDxADM3YbTjDD79uURRLNADsSoApC4PzuHSwuFRaJLnDud9jW1yFmpv",
  "key26": "6WvZJ5UcP6ZDP7szyhuyfvcFwWjAVWPZXtiSsNu4ne4iLNfyZzNvVmsCka4YYMpk4qWKB1z7YuSmj8p95mxPUXK",
  "key27": "3WjQ7KUoKc5WVDT9uFN8nnbQ1mkRXzr5nNp2ihUxYxtf8phBWRziQ2ZT7A32fbNqVy2dnoynseDaVZcFu6urc9Tq",
  "key28": "5BAmYBrsRADExZ64vWKt1aZFX1TtzKQqdeeiW2XNbrTDETj75bk1sYfvgVZPs52Q4e3d2iYaLcxrqBaP42vTYgY6",
  "key29": "5mNp29Qro8QPRkaHxpHi7gwE7XsP17bGnfh6qPFZu2Si1EN792P1btscQ59ng68kp3ZEvFhsSc9XpRdvR3bU62B3",
  "key30": "2RhzRGDJJUdGa7ZiZJSLVGiEhyVjALd2h5HZuGyVemSseFtQPjeWKhXN77uehuiVrTTrm5qMJNK6ujgQTzcWajwc",
  "key31": "2omiS9cFbxsynBx1khfhiczHbu1vvJjuNd34WcNdUiyKUG8Cw6CrWGQAmbhMbmMonH4P8h5GufBbvqobeMz2jQQ9",
  "key32": "h46wxKdDTr7sWALwGtHT5y255C9cZH23vLTV62cGFTDdGitFFab4rZvjdZYHxsoqZTNxhvj48mShSp46y1CvKcW",
  "key33": "3JmymQZDj48QPT6hnLGTWWVyFXFCTTr7Scsv4yn9xdpUQtG7zmHLK2XYvYYizjd3rUQsZYNX2SWysJU95fi7FdPe",
  "key34": "5Pf1apQJUMo4ZRFa9Ezmyz3ae6x3mCy7wdKZCHLuar6djftLHaHgTyDcyihyFV4DSgKTtSKukkZeaCNGssKCT57S",
  "key35": "4UgVdS6hYfH4FnLAisfWAYfE25dGc3ejqic7wu1eAnKjD5Bo8a45BNSQUawhXLrxPgH69eLDejxtnC8ZRbaQmMSy",
  "key36": "4QhMiFGt8gjrzfpM38zM9RYZSEw9x2A6rVfJqyvTVDPEACd2iAzBPQrDg6TwtKcTnyYGopE1y1xqSxB8merP6dCR",
  "key37": "3RuTfYvnL3HSvddSmJtcuKRUyt3KEsaUQpyB5bChqx9iDdS4AzLgDFSZpCCekRjD7tKo6E6iVFckReAJW8H2xWHY",
  "key38": "2X9XPa14S7w73Bw78NUaS2tSWk9WNXcaJfDCB3qTK7C4RnEoe9DuLPVKRV2pDCfAyGfgeH9ujp6UGUfy3wopWjhe",
  "key39": "WtePfp6AzD3ZzXuNgiZRC6Z6sjqdGyG8oGB43GvQzCo9DB8dfyeyML29oVwyY1CQe2ZpbWpzVzpCXZb4wa797Td",
  "key40": "3bZHwu8GB7g241Rtzpy1BfUuesruJYujWSHHHtu5Men7v4z7Xe5ztoz9AUp3XXeazd1k1UV4sPdMbNfVarD57CvE",
  "key41": "3Unwr6gjPZdPTfa4RotR7zcoat53WjaQCCLQ7wCfn3U8HJbgiaGWHD8UMpLGSmUrtq9wnXyXfSVRJPCmcu6btB9i"
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
