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
    "4VpibK6XXRkC72RgZj3utiAaXZySGfZoFe6KdoCKTUZkk52fvT1dSxRU79Qx7gsW84DLwLneNJANysiZAGZBCfgV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T41kUNNZo7EVC9mPCCbrwNpStyv1hWuFaKJFW3k4Xe1Np1RD7TFpG8XY3NC5xsbpBh2ftWHQLcTiK184Mjdm4Ny",
  "key1": "2c5R4pAaqtNoz27MMMVGRDJDin1sFytnMwsRGD4xDdfo2Ec8BHBrAFQPdrfd7xVHR42WnEE6GMG82rnXxHK9i149",
  "key2": "3np1923mwx1YCynReDyLwcabhRcvYyzUVJQ3Rymh7peTr8ykYwTnocLyp4pJax5MhJohKPgzfMY46ULn2X989enJ",
  "key3": "p3h4pJZC5orerqYTUdZ6WPrH4N54pGyJ1LyQC8vNMJDKLkrUfJqGVwTph1BwabNwdnpMfWi5PqyLtcVV4FjFSrx",
  "key4": "rCf32zWiyiJMna38tU8VvUBpXEpk9BoFQCm5RLvj82wK4CarrwhdyyQizGf3uKNDKshyvCEoHEPUPZRUpqH1hUP",
  "key5": "3YgdMVCormqFuCDmJwpCnk3LSz7TQddNg3kJtiuhsbmN5L9pPrYbgQF3zmAKxhi1p7N32b6ePbad259TLGc9y7dx",
  "key6": "33o87JqpSxuRb3wxrU8CLSAZtjB8ixvz9FNjrRcR9ZMWfi9DrmZHhuBLC4FgRQ3kk3NYh3Cot6RdwZ6k9gRSiSRp",
  "key7": "4uLFgXbGsqY4fF2jQ4ECC8tfV7EfYj5A1JgVm2RG7d8BMAgfFfjWNEgzwVXEnvGfSek1mnLw7WQWhgdvC1fZRTRF",
  "key8": "3Ez1RB526v2jLveQoQCjjyisDbyu7VqbL8dtUGH7r6gfuPqZ6iBCj7dcj6V5Ue94srF4A9NecM7BWbBNoW8NpvuC",
  "key9": "2QMp7MSBBzBkpHMxoH6PXNDA2Gk1DRDZc6PFXvSmnBuPCqHgcrbDMevuwRByFjo4YeasYtBAr8BHuxqEitW7v6M8",
  "key10": "4SuabTpPqEoqmbTHPNZTwTQvWBsrmojoyxPKJEN1KKRjDC9iG25qkhxLsZDfVD1DRbkx41QN14CqhY9ZNgvqdwdG",
  "key11": "dgyuoxoHuNPpX4yj9vBkmFNYaf3JX7d1bSWoZYYFzXg1UMVncnscAUXscfs11UrJMg9Fs8utMJzNneERPBqzTNX",
  "key12": "4fRy1YrFtHCVRSEQHnQ172tAcjrPG2omFLFgpjXRZeQX1BEjCZSPtxoPXku52tXA9H7sbYU4hSHntgeMVjHeXVaM",
  "key13": "4riSL4Q8tdkHMCqxNJYQxpqGzDkzENi965WsZaZrqQmPusni3ik3eubJWDLoR4th8cBwqCNtpB5zFBtkLfoku66y",
  "key14": "4zRbskYKYmvAiu6UaPPKB4kEWdCL7Tc4CD5AFnBLUM73aQ7PM7bWP1tzHSpfWfKZjJvfSfURWMaFLLkfejM59MAJ",
  "key15": "5E1YDmuEppkTbyu3MmMqi9n8GxwMiTaqaf39rK2Nz5bFYKro83kPdnve1ZtPNnnio6nw1fi8zMVpohPFE8DwffVE",
  "key16": "5meLt4HakTf5eFieUM3aJrG8aVXoZTDkoyNq7sDW1CF9k4TuqaZM6ydbTwMSBBfitqfmXmWCRDpXc3ETnGA9Dk71",
  "key17": "51bgADi8Rn3K7rov2CRncgsNGC79zCvXsT9zzWT23TjLM79SBtEfHh5m3bqYwfRiWq1QeMm54F4pELeh444HJkJ9",
  "key18": "3vEdhQjHap1xzAMu787nwRjZLX6mfd6ZdtjSTasp47Yv48kufAMW8yYhqZVvB9K3nKT38fXhKYjfbkRCU97bqTFG",
  "key19": "3YNzetSH7FCivpo82p5bjeWSMVTjCDBzGESXU7QNzXThpYqQLc7Gv2mx16rWwb5XFuEWtVHnh8Grp89XTHX3HNLo",
  "key20": "59LfKt8qsSub3q1SbiFTumyvNjo9PMvEayP2ijkCHSMojyjF7jfpVwWWxAQ25sepLiSjUC5m2qEKVgar6zx2bmS7",
  "key21": "3vRj43sCofwAaioHsyWtP3mpnkThNAMmnDEZLzbhc39Bd7wFZMqaEM6HH8JaRodsTyUN6KJ6CJiwn2WM89KAuXGg",
  "key22": "6479fuk7ZhvBXJaiWhdBpvh6MScrisSE6XRrKwRjs2x1xVVvHU9DgsPQVzo61TXsLqYJfS75dRCBFQuKxHaaud2C",
  "key23": "3Z6N5NpLccmPEMyCHxcomnzjWBv8Rb8DaGMNgbxZGUS8n7ZQyDEqeHSc5RkCVn3hKjZwX5gB3r5QSQGc1y3HtQSv",
  "key24": "26K58PBH5vVd2uGagK79s9HLNkV2UdoY4JtxTvJeGNimDh6BS742z13dRKdshhcAcC4uWGaMnXvYm6W1f5ema55N",
  "key25": "yfceusrX4p7eC5oiV6SGrfKjhZA32Vp5A9RH2JgUe9zB162qEnmsjGkqc4btoCM7NRW67epE2x5eVVLVyaNqqhJ",
  "key26": "66x8Ah9pLMscxG4fdipmvcu8aLsJ5DYBoSLHznhASrDzDJyDenKs6f1oCwpSXi9p1PHK6eZqrqAJ1jb31hTmoWXg",
  "key27": "3Ed8ujN1xYRiaaUiWK8XJYghy8i8XMxqfZ6TzghaLY6guCCkTMXjeUJ94odwHWWVVimEgxFATVT28tKbUvDHWNnF",
  "key28": "4MXmAGUzs7kHCZhuKQzykkgJw5fCHwXaib7ZvPbQsqP66vwNQyMv2BSzTr4PqgGhXJT2AYhJ1Rc3cdTu4TS6ai7R",
  "key29": "yAuhCKwBjPdGaKkAr2zkYEMhbcf8dvTjfYwjXjbnWPKJRNvmuBMHW1zrUYaTJ9v2Ls81ZPxQgunrHrEjru7kWXd",
  "key30": "4dr6B1gjVRtmfLhwrzwxWFUTzFMcuw8LDrdQJubQHYT7bV7GKJnfeBmoMih4nBBK5SakvZ9wKQyMaWN51Q9pX745",
  "key31": "4mmhVuLYAMwYsRTjBad4GoPy6drFJoPXJynYXj1GCRTuDnvmqdxbR3Mdjx3VtQQJjWszYPJE3zTfPohceQEgGYi8",
  "key32": "barAXon76wvKfu57L6zA2XbB1ZCFevhtk2uwsa4qcNCRHxL8A9phjCJtrYds5AfAUv8VFv2xLpytQDwnKaHGYc6",
  "key33": "Ws7JwTbncRpaKUrMPPxzKaC4kUEj8NDqxnwAu6byr5zMfWbndBioF2DF3W6rvHpSMpFLzRvfYNkymQ1jZRZUmMc",
  "key34": "2rY56qjrBrDG2Daf7njfeLsmNeVFKYLk1gCY3DSmdvBsCgGeqcyFu8zhQ5Uqr2LHbPUfc4rMx4QRk9oVMr9A436G",
  "key35": "5KyvjNJsVcmngcm7zv1tehgXaDvfecpY1xR4zeNsvvAmhbXUmrYg5J1y8hJFHxsvYKPzaRgyMsBmLwSDVApFsrQh",
  "key36": "3X1sX2yKMA1KJeNpGQj6shuMJzBdmGYfowQrYwK4D4zerHMXzsDZRirA47n4gU5VstCK1DSBAwYJ3bcQtnyVN451",
  "key37": "K1RNHYiYMAfPNh3Au736uxMXEiDQra6y8QpGC7bHtiRy652sffboExVEQCLBWnRnm3951peLNcWn3kce2p7bEGj",
  "key38": "PCKKH2yG3g5SGYwCimcoQXJPPnq8mo6PiKAAs4BHms3ch5k5pcxrX3vdgpeumCrYi1wU7WwnWoVm66hBf3GLQty",
  "key39": "4GBDihMgifvhWu99ZKYz4w7arjwVWm912VPh98L5Qqe6GKjkzrhxn7LUu1NXJKxMrU6AbTWcBQ2Fjo4jExH3skaD",
  "key40": "24fHtCSu5vBD2GfKqXpnzKgNFP4Yz6zjqHFQHxZHyMKRKpYS7EZwBsJ3VYNHzzBJy7V7bP1vWnn7d6DZTxhcAJAK",
  "key41": "5jUFSZqRZL2MsT1RJ89sgMAYDDM9sAee6gAFUFG6s5HNJf5UWWFVHNfU6H2ZuL7ig1tdSf91S7k2rfrq461UbEdz",
  "key42": "pnM8qRwjCLoSnip545Pd4LfHTJSZUZG17sugvgoma53zA3UG3obaxT3MtiSfQnFtYcvTcN2T938uFJgXeV8tyTR",
  "key43": "5sC3tjCHR7UBfYYp5cp55Vv6wJEVCzF1uwFHg47qduoonKkuGpgB34goTgQFcJ1LuUvdkAJERfDyve1zhADNNhyF",
  "key44": "2JRnZjBEWxyXe8XmYp87QazKrYAkU71osqa5sXSDHTrzxeGjUmjQ3VNGw1A6eGtjXEMkdEyASMSid4sBQ3XBNEmm"
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
