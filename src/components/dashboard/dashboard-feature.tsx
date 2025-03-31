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
    "2iGUriAPSmgu1qodYpPJVZAYVTEJ3n26D8FaTDYu3vKjSbxCkzhjFTV4Gzci8v41dzU6AXgUgPFJHQPqy4GCEdBr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44fDrza9nMyqLVc18Sp6RgokibvE4SJrvF4UDQLTsGHP3n87h95SK8jrhF8qSvwrDdz8AfzJgkbyB8qbht36uUKh",
  "key1": "31F9cp2KvZyhFQsD3ZTF8ENXXHJ62NcnyTz6inuo8p5rNrrWitM4vqLxMLVooioaPuT153N5e8r829mMkkRjXDCb",
  "key2": "4VzRs6teTwFzEXwRWroiQGogFbnFAS9bFZQoH5YXxLhnjDH2UVaBcJ4arrYftdS4TPN2fEGTA9xnuKgqwRxiMnJF",
  "key3": "5dakswwW7CEzdWYhecTHvAErYZSL4UfRkKSL7N28ogpFUfKwBdjZSaJ6JSjnrHTrJaP5e2DsYHmVZ5sXxqDYwEXt",
  "key4": "4aYdHTQtHTAuTt5dfaZeyc6SA5sRFJXmdZGLbUDpP9WPpwMnEhE1yQizR7D6jXXxTMC4X8M1gagw4zvbDZUtGPgj",
  "key5": "5cpwijUiK191FpxrKQ7BGA2zHSYLPgYWsQHr6rYNLWLKBK7MsEo9ojKfwJtMVMV5ZkQxnZVcPzvRLVmRwSNthVzL",
  "key6": "27pArvpx5QUK98mMDNZJii2Nsk9C6WnVq6diMKABrffHgULGrbWdsJuvJG8yA9uz9GjsL1p1C2n48fkXdBBATNcX",
  "key7": "vtVANHVDHuTG9KQqpWvbPwNX14fkPSrwzcCNHP7vPosKyv5X8sQzsXoyUgQsHfJk2Prxy5uAzPs4oNMKeS2AHCr",
  "key8": "mQg1uxLwTcZKAbJdZbTebMJqPK21ojij9sGbCGvmXabtf41CmPLxwyJhzgqFtmWxnFkZnK5idUVqB7cn2EwBpAq",
  "key9": "Gh66H9fzbeL6upzzSmaBsTuq9YMdMB9zQaqwFwtW2YYi9n139TbhNGBTMR4JZcj968pDyG6en2R4WbkiawGhpAM",
  "key10": "2krzsqggV2FoAjhCengCHz5VdJZWSisZAywQHQJZzfq2FQTzJYk1eXfRdtcErizx3K1d75DiMBNkmBWhEPF4E8dQ",
  "key11": "4bWsZdX6xE5m1CszH5WJC7v7x7SYZHjHBMYRad1i11EngQEfHtFv8Rks7iUWjxTgbF4gEaJNSaskcJSzdccv5HBK",
  "key12": "5GpQ8zzpWm42NLSn82vWuS42JcWX3nHAwoEApywbBW4ARsKBqCvYbcYNAah1MHVQMXqmpExEvCW6Frhi7M54qdCo",
  "key13": "XTwiSnyQSu7dJzhAkQcUbENWRDZk1phKTnDXLVVD7MSqesuxMJ5PTX31Dp1z5dG5d7jJ2uioTsRNiosXsprfwzn",
  "key14": "3oD5P7MnzMGzSPZdtnhYFVrscDwe8xk9wEbbpnjU7jEHSHQngiZJnNfbnSErkyiJ9Eycoac775qq1Q9qMwJ1dxqs",
  "key15": "4ywkAH2ZkL5Kz3a4hNGnr9yqoaNwmrDBRgum2Mf8jMkFUfTW6yKg9YFw4bevLCGdXXcSeXuCp5qBXQ1b3bU2xT6T",
  "key16": "5VYtLoEMNL6E3vv9RyBCB2f99XnXHmjdYEN9dBYF4rX7BfJq3mB4phVA3mZjLKoAvvSkn6EDEJfpfE4XoSa1NGwD",
  "key17": "3X2aVWpdZTcXqq2EN8yrxs9EkRsoPGzouqYuLWY1eCn6iA8MN9y7QLxQKC1X2riSp9M6GWc3ZpRtw6tAeinoN6qk",
  "key18": "2TE5r6JcV3CjSafN5eCo4fF7iK2UDySbSdu7c3Qm3mZUuppv5jAUHMEUoJZFtjphsbfWiRTjyPqdBVX4tBz3gYa6",
  "key19": "4GQpNqAFZmPxDG3PGvkCGjLfYZcCaL2FpDbpawKS28CUQb86cfZqcNg3D3mCbHn1Gq3KBCyaAPoXskRM6qn3xnsw",
  "key20": "3UwKgFYC75yQbFzx2QFeCDkigAemfcnQwzcYG6sSJuAzVmcr4N4DFqG1xFwGQVN8Rb4vDn2F5tB88HPvApzs2Gko",
  "key21": "4b89cA526zHveSv7jhABNPcSG7a598B56V4WvpQHLEbtbEwNfJFdMMkVqN83Yh1VgdNcSxaYx8wWnAajM83qWKRo",
  "key22": "jxKTnfFXrBsGq6m8mqfxWmKWCquMS25xS7xLqk6toziHWyvPLbcQRDQdEbrZpPpqSdznZ8zUtEmnmD4PaSMJxbN",
  "key23": "5q3b5kSg2Rk65JPiY4tmNUadEe8s4WLpHWFPFo5z3VdUkfnbeBp9SXBCzW8NLdTaV3aRAGVYZYr7YEzhtNyn5o9m",
  "key24": "4vJpcFsJcwfqkChWhzUBEmha1BZ2NjWUnqDzoV6HbgTy6eQrpgc56PWj2aruE2jDJijQtH3ucD8k3xYao3MkAHHK",
  "key25": "ruBHtwNSfNrvZdCL6McxbmX4LpGFKmUyYsEXeSNeRniURPBGsScpNHv5ZbR9jD6LxykQztnYRh6o38xdx2oDhQk",
  "key26": "Ui6JBAUJqccttvefVfHnVWhHtYDJcfe35XwZFNcXY7oEvKqGoNW9QiLeLeuJwJNYNcPQA1gfGXgSBfnv6mjDt2w",
  "key27": "5UCuc5i2KGCVnrkEsnX7V7TRuqCxEn9JaC2RfrE6wRKprUZVu3Qthodw9eVxSawowaJaNEkUgSXR2wUWLCLk3ATk",
  "key28": "mNE87KNyk5mFwssdBEXFNagfPV2kAysDZYiMXHKHQJNKaFkiqNUGWjFjQtgsSWav3wvdpTaVaGzTkzKTu5YAyfo",
  "key29": "3K5dqMPu6j2dmiaP7a4HFGeqEehpZMvLLzqafwTEsJEjpN9s7yTCzg17k4BdssBmM9UYwtiEutwhM9Sqq3G9cmJV",
  "key30": "Wp8x3dKmfvCqzz58aWDL8FFSwGBXWPF6Kr9ge7Cc7BovNPwQWCgAH2Zt9BtjuGHLN8RRbcMpoFNSfBn69tEaEex",
  "key31": "4JH1Ym79Yg8iaHioKFcSngG8MgMmzjqETByB9VK2G4McJfb4KJJY2etmW8193UtJb7izdYaaZxaKneLxKV4GpGq6",
  "key32": "4k3XpVRx5GXNfJCNLttEkLd2kHK98TL6J1RqBGBZTAhvcdaeasur4qWKhHPiCWhwdfEmNaCLfEmfRKRBYzJvrq39",
  "key33": "5NT8tAxbBfAzobRJYXvfKqGSk65xgnGXqSbpvMfMiQTGvdXxnJN1oe3bnFJrHT194eXdQaGnTDnfJRXFt6nyaapN",
  "key34": "5RnfR7ksEPnbzqRoG9mZpNJbneRBY4mp3wsgsNq7zb1LLM7JoE8ppF3A7aDx9twMqHWPPuxEyVFMZHDYr18ih65M",
  "key35": "5Zex7GCKm1iUoWqdEGyC6ConpjvAjLVKVDYGiCZxtVpPd5rD9X7TRmPVv66eYYL7kQ1DfKhUYhLC1V7aCPhhv5vD",
  "key36": "3cgwbzwvSSoXPaa3Pifk5ib97kmwkCvPnuuraAuarXJLMehEZYxV28egSYhSTF2c2ch9Zq44LqqLcbAYqX3fpRML",
  "key37": "fUn86HktSupe8GcVwCf7423ZT2WoxJuxpNa2ab6BTR2PYfqyTU7QeCAHbB2jg2vPvimkkCYbXp7vUn8GsV9pLM1",
  "key38": "4Yg9BUEhidr3dCCgx2iaW5zkdn8DEFLw2YGqxPeWNSMiaHzwBAc57Y2Vak9kBpEE4K1aMNumFde1qUHXUhuFHwF8",
  "key39": "vD7f61axBBwfcqU7M744CY22heGKijn115Eq9mxojFTytkFpFusjjbuXonjXBtrWgAjw6BGmnyfd8RTpY7JzAPx",
  "key40": "4six6h4o9ZzJryuS3tgNYzjPubVd9DESSDUBMcyZgT4fvGBNk3nsPQmSTt7kgfiRhuJGyzgpkhkfozXq2fRCoX9m",
  "key41": "3xtwZcQad6LasjDsWQYtjj2ipu156DEkQfCfcJ7yNey1U2UUTzqywuWYEDNUWsHsdjK3X5Ci9sp3f9TLSXYXPiMM",
  "key42": "59ZYMSvWgE8NxXE8PfbXWEhctVbtSYE83BifJ784J7V7F3Y3G1jEAAv4cuUi8HYxqpfWPXw5gEb2YwKuNfd756Y9",
  "key43": "4Eybo4qAkywbS74c6b4Jc6gLHsn7QaXjaQsEr7HcZfxQ7FWo8SmTC5v2qiDJ5sTfjhhtqV9pWYXSTV4CFzmGtfgg"
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
