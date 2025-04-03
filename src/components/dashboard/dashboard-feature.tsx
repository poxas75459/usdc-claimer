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
    "4jADCYZrniUJy9fP9B51qm3x7HCp3ihnFzdTUE24ngvd75kEP4TNGgYV7mNgRGVRfMd8X2MdNa28hFu2JsHwxXzP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FGfY96rDTbAb3aCGWgTG2YNHMtSeJp2BRuAqwRoHw6kDBxunoV5zA5LkuDTFyo8Jxy2zzWFZ2gkHov3HPhh56ZR",
  "key1": "2GUtjzSuVuNPFmuQ1EpjWpwixM2KPhdZPHjA5ybkiVTh6wP8z9xB7NAS4VFrKk1Wck7iy5iYkYHFEdquqDejBChv",
  "key2": "2RQEktA3bsAZ3e7ZZ5F5fvrTbuPTZDGF8XQ8R38AbMmMU77fXD5iVnqfxCCszWqumsCr2J1wLQe4JvNGy4Af64TH",
  "key3": "3UKCKUD2GLqmng1JezeXvXTYeZrNGh6veojbYXddniugNj1PFb72ujgcYePpFBFqtPdLGL6WfkSvR9M3PQFKGwmn",
  "key4": "4qVc3i9iwXmu2bSU59iNr2z4Aj7JwfsrnNEcXb3tRW3UipdLKyGYD2XEuqQThL2YgbgdpVQJvTMP8EVRzjzqTgGC",
  "key5": "2Ue56pizS17gzFu3kvBS6QhfriGV7kAhzfLNuY1GYxvg3YmC4vQafNDKr5N2i1KWA6gYx2wFKNjVPe5k7gwQXZ5D",
  "key6": "2yztQpLXxvGqtGNVL1MJEb1aXVbUNsUdfo7WCddvnf2yvAX9JKr1z3kYVinbLLH2c3Y9ivuA4cHsNkrsonrB9LAL",
  "key7": "52qd1xVQvpMbLTozKVhD2F9wJoNdA9DPN3e1b8U6QGai86QUw4FYWfALwGKS2DZn1HpA6AzrUrKADD6qmDSvKnEo",
  "key8": "mWCKhdZysVyDpJyZh6W3Fc3zV3yURWcTm3PtAbyMUxY8hCykDak4kVmK2QQtG3wHWdeGr5hnnCw4NbtR8mWbPK9",
  "key9": "4pCiq9tu6ZsHogXQofCw8jEtoVEjDcYEKNTY7rYzWzKTipn4z1bXQHgLnverXM2vzDenRu89KnQFeKkamic5zokx",
  "key10": "5G8rrwmNKuhJq4tULBRV9Ufgh9BwqdEEJ8AdaxDcVRtRNL3nZSp3tFTXJPmzj1WUBeQHNn4AiPPtHruAF35RoCEZ",
  "key11": "4DMrRhQ14WVa7MkQ62BNzWPndBEsLaHybuMWqZnidCXK1bBR467LdercEj522hKvkg4Qvums7vbM32qvyom1Ynnn",
  "key12": "3q2VTkTuFL7tf8jZaRpc3eUQPzYtnFM7zH6oRdKyC6VgwMtDZPGJ52fCzoGg2dKoHjenjTc9rsh1qa7tyQzxf7a3",
  "key13": "23tiGWRQSn1NVmQftKyWfUWdw3iZyuExbreXMqxQeW2gC2RyXkMj6cSsicvD4WAfCvnJsYWUSwLJaW5MnwLh7eYF",
  "key14": "3ocNshu6nRnjwBwVAgraHKsyYWoP66jiEDoAnmsJS8deT9Y2idmto49h5RPUBjb9w9sPnTvSrKZpCvszwerQpqBK",
  "key15": "x9BsxaGxn9gBxxz4yGbevUVKATurPfM3HpQBTVAk8MmJ8jRSok1UJWQWpx8Hi1mynua1DwU1DwNYaw9KPuHG8PM",
  "key16": "HnijKdtpRygyKb65dMvHATTQ58xCNqgqmyUoq9LhV8At6w1rVHsNAiMbYXNY8PcGgARRJTAaods3swam7JjiQ7S",
  "key17": "SB2n4RbCdVxHgGiJHGMQnHpT2XfHBTQUkPKGQFSayKBGBCbM59dCa2YwbXb8iFKtb2g9Qq8oZj16Zih5e6oYRPZ",
  "key18": "4YJyYcEczvmRLaSDuxwEgo9mBAdnftCy8CNQtg53vyvqyH2Co53drrpVNBqrX7fXPewZDWAwgGoWoYFDtGKVUosU",
  "key19": "416WaT8hi8PBDcrbDnrPY5Wt2mgFkxMtU3ppGTHBws5aStxHQRen18GWrudUJM6roC1ycto7HWwBgwnUrzdPxhMx",
  "key20": "41FdzMg276Ptc8jhnDfF3ukapQj5RZpqcqcVRjUtfksp9d7zR9c4gvDqLftL3v5eaZp8tBjwPriucFmp5g3TsGog",
  "key21": "3LZVAEDjMU6pFynZTbQ8eTU2S83VjC6HyNZDQkycKeEPMnbXga5hbmL4YR13Ls5MMbL8MZh43DsG1B9jMfGQCJSv",
  "key22": "2fffSufcg1hBQ4X7MQDzX3Xjt5xT3v5G54n2ps14aUa8uatYnmMkovg4LrDqi6Y7UZLDQhz1WxxkEKCvyZtPR6kx",
  "key23": "43mRQTMPD8dzYuTm6FMUehikJi7aUjhn2H8XHdVpRv7h9d2cGFsbR31kUG3RCc5taqaXszzvzoq195N2k8QCoGi6",
  "key24": "5FHcNDJKbuPjzguYudLVkrd99NWgW622hUYzmgLpGB2De7WTN2goUsXZJrKiT9sf4YnwGxw34kEZ6prWVxCvffqg",
  "key25": "5kF11gc57APjP2JpfrsP6mSAMPAJABCzPhxBTVPpKuDcEASv4MYHUpni94kBM1fcD9aiEsT1NwkDyaPs5NDM2dok",
  "key26": "3BxfiUSqcj4E8zEm1tnFaBQJaotBxxUUSmPgWP6NXYJVSduoXEWgAkbm4dan96HmFuWV1qyaJNKEugaTE8HJNdG2",
  "key27": "2nDiUMSKCeKsoVziGhUXTb7skErTbdHbD3mmgFmXyuaHmffXCDjRPRX8yu6MNveULXZ2cY1uzKioEyBk4fBMR5PX",
  "key28": "2kTQS7hUKyfz2bdSxfRbBaiNJHqZxKsvUkZ6xdZjZd6HBmvqsrvjQB1fxpbHMVnST7hannmMjUp37doVqoYQzkmK",
  "key29": "3GQYDYJnVGo2g4C8k42N9hVmfu1qJfMUUTY8okZUjSDiLdTix8KP5En4Asg6tJmofTWcZhESHQ1dPcQPGVyMdm5L",
  "key30": "2i3JePzi8zeP99KtqiYanLqZfKnSda1gRCVgoqoWT9d6kxgw5xeAtqLV6Ryx24fd3Cg6GXe4YkpesgcPfUqnonw",
  "key31": "nEEquPSzeLFkBNtsgvKqnNaKkaqCCXgHdNcefod6gy9kjpkK9YqAztPNwgCn7iKckTZNSuYLPkuCbQiV86SEpB6",
  "key32": "msExiYr79AdT6jgsNgibzueNxiUZw5bdso4Q8UcTu3dhxFZpoWWtrSfDQ9WKrm9dDggnShzadsJxzonk11R1sB6",
  "key33": "2f4SoGv3fS4BsJ2fJWDg46GjBS3wR5KRKqYWpxhnBh4khvGPTfWxpUCJRVD1zec2wb4P4XFZbtfJwv4BCJYpYCS4",
  "key34": "61GZ9tMaWxQgRRG1jmr7oAkCbCTtKrmMHKHg9We7kjEdx8LjFFpogVduUk8wGKmHXE2Q5P7mtqfJqGCFwTh18meK",
  "key35": "2S6JgydygfGc9K2VMuNcAeb8Hjp9KECLxy6uBHxFi9Lmu6RAThPQRn2G8dHKqWAkgh3mDDNS4tzZrwh4R1uak8tU",
  "key36": "3Ppct8PeayyDX6y1C8aKi7jjA7BZ1dzcjfkJ3WGbCTQy6XNv79czCdvCLfQgex3SYX4BY4mAkzu5w7MKPVDX2XNJ",
  "key37": "3jUii9QNTLLCgxenP1X86kTtH8oRjanX48eUHEhZ9iwsBW3RbSYEtUat2JqSFDQgQ4qsFyJUeBNJszRKysbSYmk",
  "key38": "5grac6wkuqDQb4MxnmFp3qJj8hX3siwqxMVZaiv1iS6wafRScPU42wA6ot4sP7ahShpfNc3Sq7cwepHJ4QvJsdxE",
  "key39": "2DtVpXHRRi2vsyWYfu86ryp7nq5FuRAGaMceEGt97Jv3ZJxGmNP6WQmpURVs5VU7THn9gtjm3WZrpcKvE36GE75w",
  "key40": "3DU1muZGCArhDmwiEVBjLfAWc7t1JSsCb6fSUbZumzf7vjKJ5jQEGVB5Y8tfNrXgF4rnXZKT2ECgYuRJTi7ZmEQK"
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
