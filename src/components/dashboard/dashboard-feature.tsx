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
    "41LvTzdf7tqgJd9eS11gA8xxaDmC25V9qF8pbBJ7RK2MZpnSyymzT2BwE2DaL3UjzihAHkj3GWZ9scGdZBpwR78k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UVznEqqC2VkyxS2komKkYj31n86xHYVFdqFAiyjRDQsyuwH5UrnoQWTxn5WmB6f9PAgP3GJ85igkwvxk2WPCUWg",
  "key1": "3KENBza4q8W9MfmaiPLV5wrK6FSPpqeikJTYT31FmKfZzs3ut5RzMCf5zhcn71dc17kiPKgHqpeBPjPU7unautaG",
  "key2": "UxemH6PuK24Q1XbC9zDBnHgFtWTwij8LJQD5KPXdJDXaMGYspNLTkLzDvxZqZa2B9yRXpQT7XoBeTfBohYJja9S",
  "key3": "2tEUyBRYzGtSPrMJWBKhi2LVgGRVHKR7fjxJqwD1vefDvXB8wS2mrvSLrjBGxCDz9ZAaYPZX2wRjFssLYsxqDcMH",
  "key4": "45Vc27jnnwckpKKJVnKLq6WCULDhhFNTgda3YdWdrfkm4QAgEscpE4rRqxuJEHQf5JWzfCTJNtsmiQ6mgYGdXnsx",
  "key5": "4a5abUGaDtkKAwcd61Hg1RATQcriWcQDHqrDDk9hQTAu4BQf5Bn1nzVgdE7iYsEYeKptXr7Q1Bo5Dd2xQKmkLqU5",
  "key6": "4u59dmC17cdv2CnJSrxxQ7Ca7Pqx4wCS932xuusJRnn4a8v4DTuArcCpffHekyEK5Aksouei6MF6utTPp5n2sJab",
  "key7": "2W5opBVjSRE9X727E2RZEf8m5TP6ydHpjrdZEcfLK1BzNTZrkT6LCEihusYocyKk7ZMgN1rkYPa5d3FKFe5ZTuPV",
  "key8": "52zno6sApXvLArypsJTZUkhCocguEH7Z7PVnqk6P1DDGvoHXDQK9YqstuAtk4Ld8vHJmMpynyGdgdcrKtBBYnD1c",
  "key9": "5E7G85GaLvHUn2WNNwRmxhDBdRjGzA3Xo53E679keYaFCYCb55xynSRKHTbqkH4qY9Q5rqJHrjiPtUPqrvhXSCwv",
  "key10": "2snMEZSPtebs9HcLgnVBWaGPr7GrZ2aBjETkABQWSqgAy87ocHdz9JcEYk1yZEVcf4x2fDSCw8cQnBYaU7znbj5M",
  "key11": "53PdDSUUPQL5RrfdCo2rGFtdemeegUWCJq7vYNferUCVDFg9CLNR3UJKjNQADbhk7Z9yhVt2gtnEXZXbhUqwLTow",
  "key12": "acaF543dApG4dRKsxCZEy7evPMVbtiVJy6U7x9MBTedTuP63jYTcJj3i5uJnmTrrybeieRbYq2UvLbss9XNUHZs",
  "key13": "5tqqZ245ntk2YoSGsNVa3n8XNUke2wrPWByfzL174GLos421yCjyv5uj4FHkrAcnqbtFAcHDjyUXpbFYSq9Q3jbV",
  "key14": "5XsNxkxf4qaUhcTXcgQMwWAUqsYDsoBkGYTDRHfLogHBFWXhDMQxs998udvKimajsW9VpN6exyQh547MQSxLzGQ3",
  "key15": "3owencJ21kZnhnHso35Sk19e4sYVS4F9sXbkPAwT7S1AKqBxYbfKg5vH4xEFtRD8C48hY8qT55ymSYf4C9HBcfPt",
  "key16": "2a3LToPpuLsLd6E4E6CvP5zrJ6YDANGFkdvc98gLFseT8cpgY6yd4GKa3ssHByGyiiSYGtuJKcfWJpBxSextkNzj",
  "key17": "2ccRSbuSjRJhMAv1FpPAyXoJJthHXneCoprBsUS1VUeSUmsuZiYP5PhYvjtYJrtkHEGTidZkTNUdiyfgXTRe18TA",
  "key18": "3FcX4v9Uo18S2xNZ8hhDoZmrNYySHpUDyGn5AQfnPNhAjmXNPWrotbJ2spghohH5XtoLszqXoHkh3NiCxjmfb52g",
  "key19": "jc4WUNQD8oKMZNEZGuwC6qbepxqsLDupsBiQ3D3dyDaETVnyVFc9iXwg7LDqdVqKNr6z6L2bsZ2nhVzrFfnLqhm",
  "key20": "W9LfDQ74PNrCv6xPskbu9QN6hYkVHsUebRj3ZY3C5qqLBHwNhJF97ZYb6Lj62sLg2QMwicTybjQa8prG1S1fpU4",
  "key21": "2nhbMJPF2Ezepd8S9kUkPeaZMCNQ3Fxvds6TnaTNi1Cw4TWq2MQKnNfE3RVT2Mk4xut2LFNM45VfjryHVqK6va19",
  "key22": "4vJyvhA7K7AWbn7JZw6Q5zC1RycQqb44wLaXuB7AQvKjJ2EWWMD82XjgxgwZmYfBYJYPbSebG1pZwb2op6P6ngAR",
  "key23": "4terX5Pxpmfbv5bWM5MLjCrzLjk1nAR8k66P4bSSeyNxe5tYVEsC7RK8SdvTbUkHWb2JgkrkvqSu3JGNFzWDpecS",
  "key24": "49C6GLstSNZVzCh3KPb7Be9tNV7Y9Z8EinyfsT3pt6DMCYDrKhnCLKc2iZn5HNAy8xpf69RXKVF3W6P2VdwE42S1",
  "key25": "2heYb7e4TnDNAiGn4Qdk3d4rbpz6wuXMNKD88trFS64RxXzUXJ45mZXq7sF9zKrArSRngu87KBk8ZbNN2KsQEVyM",
  "key26": "5VFM3xLpqyA1qnc6ejypmfMsrYku9q5QvFhLFwiLHxFxKKAGQbTsHL83pQiEAyQmiDrrPcnARzU43qu9ZvtCdJ9Z",
  "key27": "2QxmbioSD1nTFrv68bHq3VKqVwHt89RGKnp4RjoBzAvyMAFf51D2YkHM5MMnJPL5oaSYi4X3tTc9R9B8sjLy37qf",
  "key28": "45qkWafGVfJd7RDjJNoQqKmUh7HzAqQCUQtyZVNi22G4KvPy2EyQyU7VkZi6RCaDeeGgWdM6TtCfoiYFxB5xgev2",
  "key29": "5edUNfNgzNnDvnxMNYw5PLHWGS9xVS9WspzWGLGLUSS3dw1inDmXnMo4rx3hhLMBS8ojazrSQExrhJur5g8rzL4C",
  "key30": "ZPBGuiDVK698QJYdJYGF7UEDsNbGncsJBb8ADwaoq6h25sBhykkYHpzqxCdFTmQeJRzEitizu9GtSrUXstvtz3o",
  "key31": "3VKiR6iAzAoXcBmQScrr3vYENqu7sYJQ42eZHffAUHD361ffU6gAWNAWuQHkPvRwnBLmDVsLeWvkAMvK5nqUuHBk",
  "key32": "38CbPRHqCNza4b993Zd88W1x1M4NSJ4SiYz1e5rPcU3KqLbfcopbADkBo4m1VVyqS8stvHhNA85fAggbjrGLpaVg",
  "key33": "VKfeF5UCcNmkJmSPjoSsFk5Ajw8bCWRRqwL9qsMmVVsxXAsuwNCyiczPDjw4o8mVAMXUhnuYjZtpztpqSLRKsjw",
  "key34": "3EYxPaerAgY2W664MT55NZCQBjenqBHXJAmbh4rNDvq4gW5ChLW6y7P9x8a8J486EDFk3WaCY1yZMA52o8JSXdpr",
  "key35": "56ndxKHrZf7HJ9kU1JAf7mHXSErXPowhLzwvwNtSzLxwv9D4yahWWB6sUqadm7p1CvdyxpkgPMrgWqPDSyXaKR6G",
  "key36": "qnfbwfdq1h6jdCoCjTWdR1XPCo8f7iZRa3coMkrH6Mu2DyGVyKo7idmtM2qBXJ6AkLmAP9JtpBGSJMpqHaaJ3M5",
  "key37": "YtHN4jMeDoNhWikL7EgAQVzPEG77mAK11yxzYfuixor9hWnGC2j9jcY9a77ZdUkwCKoc867ByoRS7YrkRQ16zv8",
  "key38": "3BvUUFSSEbjs5DKVqu2gp8a9wT6QAJA5GNFgqipSFtDLLNFSA7Fx5RpdifXv349JNihfbsCyDoii6gCmQjWrwqnt",
  "key39": "gCRTzf1LjfGpLhYMN3GP7HdePBHE17q3ReF1WifettJo7Jr86FEXn92yeZDyfXGojKsGHqzSq3dWoSsFuCocgSk",
  "key40": "5pCK9BHsZpUJWmkV1J5GWzoQmuGnDvyuQf2TWDieSKhmpzLbYRsXauGXymxkdwVR92QGou8VK7qX7Ne82mndiFvQ",
  "key41": "W8XbP9eg1fLWDGYghUoKzh2XJ8Z4Fq65NUeXCgWfy6ykwe62xudvqJrfSTDK2AFA9rWzBxRkBXkMGpYoXWSUfAG",
  "key42": "4ViTFwuu2sYyT5X4WyXLPJHaSJ3i5RPYTjbeECopQ7QDu1xm7C1XcvxFExyWeAVciRcALYVFcLZWRdVyBzDL55DT"
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
