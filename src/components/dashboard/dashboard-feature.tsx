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
    "3Qw7LYrCiTCyRZMhgrDW629WMkVJmYwMxny747XzbuYe8EMzW6igXGYWJSE6P8Xb9acPDk2XzZFZTf7X6td4pioi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aY4yb81d9iUFVfjZEbcUsYmuNhr6iYRWr49mG3UNhKf6cJMB4cyMFrXfzbNtkC7e3E7UND2NEeRnJTLcFfcWZAf",
  "key1": "37QYKyussV8RL7pNo9LygbpxWJVXyRVisQyLfUf4qbEmo5vSX7CHRjwYCNv13aTKYTyWGE9USWiBamG7ZRqHCfFC",
  "key2": "2f1szfZcmWCj8cooGJMkLPmoT9ePf7cpM8EVjyTSny41ure3NybJxWFBNo5UXxj8STmYgAKB2UekLA5fc86mHeeR",
  "key3": "FR9SthqL4PBYGjV6DhmjBDRGH1U87rfZho96FCr9iX6wpXLtEUyFvNs2SN5pfRTQ6bzAYjNsHy65RQwGG6YGtju",
  "key4": "55MXYeEjtaWEUPmE2UMiShrbfa16ypG6pc1rHZkGoptFHMhS5MeW6SUXbkpHezNQmQkpEzBhappow19Xmto9fYFB",
  "key5": "4g5iLCYsNg6UKSsngJJ8mVZqmyqrQGAWQgHMTLjrDXg263Z9mSzEjKqvuZ2MoTFLyFYXXxaFG9yiRcvQfmMg127S",
  "key6": "5ZFB8Dotnwou2NNMdSSnJYweRvaexJeawdN5nsKthDwttBMPPQUmpQchi9F8bjc5n2KYqJELHzK5fezVfhisC4Sg",
  "key7": "54LnQxB4C4udj8HhfvBT12oP96B1ykrbLg7yVASKJuiDrap97qWuWk2REv76ona1vj6CGg4TQK78EF2UTVRE2jKq",
  "key8": "5CqWzvY4VemyXqSbwWJo3Ebnp2etLrojmPmaAHMfGK6bpD5yB6eARb6y3bzioCcsBG6dU9Azy6eEGUJ9nsyAzV9N",
  "key9": "5dCS6pNUfrdXfgrHeR5pRixcym26yiPVaXcXzqgfzn4A49sHjYEGf84PXQGiM1YkDVPzFu6MbJYuEMtTrk9bSR9c",
  "key10": "5eZreu9wEwh2mpvv2qTgAJgeBYf5g8aBN29nPHma6sjASieZTEbZnE72czL4b4wzAxGrkR9SnAUgCTgZfcHwHENA",
  "key11": "3ZLuE1oVPWA7wydxVcrJ2WSCGcdejfddYsy3S9WKd5612awpKcUgFAeRMRyTVh49wWWtE8HmjtsARVgB72PZd4G8",
  "key12": "sMasWwKrKeisbXdgY6PeiYaMju8pDPH6GBA1xCBTT62R1xNeeqr6fDNuWjRDnspt6S56fUPsZSnVfRhFUpB29Qo",
  "key13": "23qj6eXdGawFiySeqz3WvSRYgqLRSXYi8wEU8hW7UoEKWUao3Hs8Q25CAodQ96SAMKwQLFjF8Tf3rYTmEQy4hiMJ",
  "key14": "5AqzJ47herGFDAkT4LoU3B21sTT7UKVoiGU3pcpRe2WQCAcNiTpfHNw26jEq9SMri27JW8L4btn492M18vWis5qz",
  "key15": "2ng2PVMtJJHnfTpgpbtHy83EdMC5KiLqVHpxWmocC4ECqbA8GbMFdhuJgcmiuBpdG7koz9DbKwsZfdNSb3V5ACyf",
  "key16": "5FAX1isvay3J33QTcd93txMTTczEge6T84i9SbhyDqPM6NhULTRQdngXCRxMmUgTi2zaTcGQf8J4Ta3FeTxdiGAn",
  "key17": "4ffZsMbGqARf3xbygQMsUCNeDpYJ2P9rafeUog3CuJk442HVsXRrD6NZDjZWmDcVjDkVwJB55xqfueWzhzgP3jvP",
  "key18": "2XuFyyoFD5mG3zErhTg5dG2Lytu9HZfqSLg3w7X5Gt77nF2mc5e4BW9tcHV9nBYEoEcFZ2WgUJ2zAkjuxhR6RT4P",
  "key19": "4iL7aZDtmkoEX5i85LNJAZ9dGsgYha99jzkZgKe9ASMeU22qFeXNWPvnEugfGyjvzJPePSGV4o1sBNde4kwA9taU",
  "key20": "2UrhcqPtvpUYGGadfd2vScVKn67qEdNwPLJuciS5oLezQ33zRLh5DBb7Aq9mkZ64GbyoCZkjQ8GRDqEy9oJMSCxy",
  "key21": "4rRhifFtjEtdEpgLCPQMpnxPRffcpduxL69mEjKbWtwR9hrQx5VR4o7DaXzRFTj8K2mURpMghZoPrhFdU2GRasvV",
  "key22": "4XVBzffQdPcj34D6m35FpNRwi4qy6Xh94F4rHwXuLcyGkuTeqDMdZMnX2gmnswFMcL9BLLnwhoPpt6akZS5aZmdY",
  "key23": "2DrfVXzVrFcNXvm28G1KtrWPnBa3tBm4y5ywNVLB5oHzeNgq8gC9McnngkkZe31D8UhMedQzu3KJw6UAGov6mS77",
  "key24": "52f68soLBJNi3f62ne8yrdmXmA3M6umboG5fCTFj6FhEVDcwonv83D4PycnetaacYJ1PaCQpujEyCNfhmuQjrjk8",
  "key25": "wd6UEirk5uv29c6WwCS5eob3od3UdGWbtCaNd3S57qKGQBMAVxNTVmxDtTFBLCYeus3oUdkKMHNA5pYgPeU6icv",
  "key26": "25NdXXnRvDcQvV2GXSoDiVjQKgpLuqkB2hTrfZh7UsgnxudJgnZGk7d566T7a9MPxoCHgwRurhrioeLPboB6ktHx",
  "key27": "5Yv2JcRyvfRsN3GjLw8JWBcoPHoUtbdmem8YQPCzfb5XvcPktSnDCWDKjr5F1mW1sPKhZGCGySmr4LpCmrxu3s4c",
  "key28": "hEeE97v8fuboDQhRVeztVCRz9QuBqekUnQM4gsJ1FJMq6NbE4oqkepiF7d7GivtyeG8b6dUbhu5vKfSVpWfQmyg",
  "key29": "5NoHoVqHS4pXwmP7dYKy97DHAJ5sctJtUuqyC6b12p6iW2qf1J54Qw5dSyUQCDrusbrT5vFy92qYFoJ1Gu4Gzxc",
  "key30": "2uEfbzSXP8WFRjTwKpxke2PsHyov6gpySE6H7XsVXBND89PwUAZnMiZBwQgBsphgarydbwUJ2GU5D8qiS2pRsPiW",
  "key31": "3fzvVEqH6M4LJuBpTyuXPG7nW3ES7bjdR7ougSmF5E4Nztru8Q13ET74BykcHJyRDzHFoa8yQNnpM5BASZNYkRr8",
  "key32": "5R14hxropZxKtZan1mLyp9X8x5icTFB35aGA3yuuEV8c59oxcKRmCaUBTP18gZwtWL8SpjvnQc98BhL7uVRiUyJ",
  "key33": "4hioDe8bngMKkBjK2yHQxSzhMcWKXwQxk1iaoZ6rNP2hqQsAqWLDV1HzcCPxQ9jJwjou5KA6KtVyynr5U1zdg681",
  "key34": "395LhifTMTmJGd9KTVoDh1fvUrEdMJHwHj4EAreBKzDUwp7sgRA6wc8sjBHgkKesSqvJvfMWSVUfdemLqMbizHNe",
  "key35": "2cVk5c5fXoDmoxhr8ZUajpBqeS8N3AWMKMbi4BjUqdmVaJCSeDJWKmWqnGf6h4vbic3xvvxBsFKvyXch5YginSiZ",
  "key36": "48P6T1opJj3bGVMWawcyZPaaMpQqz9zJY9tmvgpZWmzkKip82WSzVLhWjUiGDnzH6hCH8U5U41ELi2FJa2jXVchN",
  "key37": "32sGPBsX4Fhk292yhSpzj6aAmADF4SBRXLqmS8SWjtscL6idcZ1FgYNhHiicucCPVCQhqx3jP1ji3paQrvwy1kWE",
  "key38": "54aRZKmYTrdWVC4XAHyTJzx8TeZACrSs8Mqffqh72vQYFgwcWVWEr8K995yGmpj78nt6KGDAh2cc8uVnh5PqUGmT",
  "key39": "4Zz3i2swSkkfDchNmKGDeC5hzV5FBzNBn2AvwQHvcFcWfNpwY5zSJex9MtjAsqVhf2ZoXrC3a1WVbw6w4gmhCJz9",
  "key40": "5WXwPKdNQLX1UEDgJTWaegJCpNyaUQ1uZSPm2FyT8oJqYPqjoebXLsXSB2KhMfqT7qDbU9CPC2btuuFWJNS4csCS",
  "key41": "22C75sa3PU8HBMXdjeD8TaDpg7ucaJhh8ZMPoG9jDAWbPP1ateC3MXwYUwc7JK3U7t3jGLn1bczFhuAUZ2okDSxY",
  "key42": "2FuUTnFaGtRtHqtdNigr2zWDPdAvebg4nkMERcvwp3m9S9jNoFiuVPMu32VDbCufB67LLS7h6ynMWxysFcZFzppC",
  "key43": "CXVCoVn3VLE2nAZ8i8vcBYvrBZCgBQ7v1Qvv13JqsZKnMf1sB9jtkWsVobxTwu411jzZCeVFd5buDUq3cnLPHdM",
  "key44": "4NX53b3Z6rdECQ7Jw5QkXuZKtBjat4kGGgMcTGCpYuReWSFRdRmn7J3VWp4uNaZUUrNpoWz9YNhufVcLeUg5foQ1",
  "key45": "4FbNz7zKRf4qCCB3Urkh9AW4MWKccfJXa5geDUeYuBotAhsppxmjdc53DAQyNjR4WUGjdQ5usLj2eBAwDd6G3WXL"
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
