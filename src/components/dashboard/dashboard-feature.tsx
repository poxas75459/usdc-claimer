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
    "58NYDsr5eyL8VmcKA8SvQ66ojcfNKG6QVaweaXh5aWJ6asidNbqhZVGZwdTN3CXcfgpSrzkXspMyMFrAgY17mRNc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3icyGDyba68533dMLE3YxRxbVaYggNXd4wYkodkGqbocfaYW7nYDvCPypGPGsAfJv4yQqzq1WhjygqyyerJws5uN",
  "key1": "46g6nmdbwuQjzcs9nVbEo2z2t22MsRC8NuW3rQTAoJuQEZ2mwdYLhG437JUtTfvRVrhT5cHqDGf4pCqzmJb84cpU",
  "key2": "3XqbBpjqydQK3FisE2hXfsh9R1LeG8QbKwTaynjvDGvVDEnohoRY1Go5YE47b74vN32Adgch4vukJA7g9FhabxAC",
  "key3": "TD5s7mnnHPHcrsZx25g9vRrDoo1JZndjcKC9jKNbaMpTVN9UKZDJkVxSDVsX4zHH4SjMf28EyM8ecDXgiWXoJxD",
  "key4": "q91348qZibC7Rze6497wfnaoFAfncFkoQuf5siNerrmHeb5h1SS27RAAWQ2hs8NiamK68PYXQdojAUxgTMVJSiC",
  "key5": "2LRLRikpf3QLk6o7SLV1ttAgpYoHWVpnkw8vb8y3GZBiX2KJAKErpAnPZp2o1ojWX1k2jnEs2N1R9Nq97q5Qqtoy",
  "key6": "GPo98gtXmJo5a4G9QoyGsfnH58BUvHXJdKrG4GEpmJsPhaJVbVjrPmtgqh6jWChRpJSDSq5eD195gBAmEPgg3ae",
  "key7": "5J4vcqeKsPDzPeEqnGrmKayLrhQqE8VJwhoKohMyPq7dQbmySM6WANjjDrac4PH7GQzSD1a9WPd7bAiz9Vmric8M",
  "key8": "Ja6M4Pav6baf5oAXstsVKaMPDcChtMSVvpph3JwYk2yVQBfhn8oCif4otb3T89uwoTb2KZeWCV9gDkkokZsTP4d",
  "key9": "4pjmWe8QBZohkYYCJ4XJtyxbLXijYBLDPSSfZsZPDuBMdseNa7iz51K1D9W9vvszF1UDA8i61vgRNbdCEZj7vqUE",
  "key10": "hS4EGUzv9hsPkx9eh7CZW6XxhtspW16XcfTrue8ZCpTcFmKCvjbvUMR5JBmsJ8EA5mWpsEupNQoVoY6dwRkuq3G",
  "key11": "3RJNfet9Ku8CRMRJhDZsKZWfyQcrCAHNrYnvga2xMhfwAiYC7n9NX7TZQJucbq1E515oyPDUJuTTqJuEXaFgQYee",
  "key12": "2C9fZLRJ7rkLLQWtxxpNDhTN2UHm6ponTR4Kv15LSgPfcxWCCT96TP4D2W7By8cbrYZfHJ2wkR6qgJfR5mswJaw3",
  "key13": "9j4fvuXgQz5Usxg66dniXxY6WS3vruSBnVsYm4NWA41b12Lw7fm3pRmrrzaLxzNRGgW7MbTrMaxSAx4FX2GZkeR",
  "key14": "3PPKV3K8GZ2NT4xMWDZn9npZepkVG12R3y3ycGo7TwagXbsrCjt36e1kxctnQsCkdgoJpJE6p3yEhQ7ckSzSriPL",
  "key15": "5JHLVaHANRz8rgjnjUB8QDBLke7bQRh9YgcJpLjCWuVdG7uVuFSEsrc2sHqstdE8MQkUhphfCQs6FGxeuVVbWupx",
  "key16": "MTunyUC7TdGyWwfpwEhtGGzFdRk6Rntw3gqBjV8UBb3rFVQE6vfBZ1v4AcaMm8cd4tTktKy54zGBiUePkLUeHcD",
  "key17": "VmFAkUw7ytoP3h4zKFpzv1NKd9LG77uur8tS3eGbHwePknMBP8GgsUQ7a9GZAm7ZxeKmcxvFCgWEqZXEX7Vnjo5",
  "key18": "3aYinsecdTFKQzF7mSkB3vzAgVABA26MBfLscWx9dZYFpdviJK9zgECab4io9HwsfLhDBUP73hBPAtkDhmrthBdV",
  "key19": "5vham2K1kYsSkQPAxp4cfxdLQLzT4V7L72WHotp5bwtsBgtnvXFPG7MnwqTAgRwjyKb8C9L783Lf35xWc5RRniMv",
  "key20": "3h1KMptYcc2Hxvx2A42M7aZqXnXkhfXwALTeJXWe1Doz9YbKqQYtsZumjbhW2vxECJF2TGs1vzXJatHDDfz25mhd",
  "key21": "33nG5okrLGdwzLsjwxW8WGZAaxq7Aewanq4ekx2K11j5GtcmU3mkMxu8SCKUUVWWZpt9SU8ZjZuPWvr2rSETGBtr",
  "key22": "3ebKwoPpFtrEjuU7iCRRYFjinJvW1twicnTLHLqLLLLAneARi677A2QBvJzv2MNePx1eKo61ri66EfnLRU9P9asi",
  "key23": "3bwvMU2qhA1aPCyYA3DSfXyCA6jzCappAEvBoK4BBkmNgb2j89Za1bQYdhDadqJoMRAgawNLRycFxMcN4fh54cYD",
  "key24": "4n1vxKb7YSfAnxxqowxrQMGfFKq1YB1hxgbRfDasQcuAEeEHobdzcB5KeaemS9oUAcy6pfJyqiYzHLcr7aSJhsfV",
  "key25": "5XR5yrkyQj738zzD34wQp5sK4Ld5AfdV96P4RAHAEbLsH96M74qL2DxEvojgG1LpksJrbM84zAhZ3MzvdH2NEuJx",
  "key26": "3jKTvoqPWTDrhAicvex1H2v5LFap2bscodiQb8jx1W17qrcagGjXqkXS7KwxLy5NwirVais8VwhRyLVfE4K4ri94",
  "key27": "5KGCf7e9gq6AJ3wxtbVSzptMAQNijz2YoeNDLLiqwhuCzdWC4gfsXmAFPJ4nsw1EY8aQAcS215GLGrNeGdCVaXwc",
  "key28": "5tn8mgVVUYJe9WWyBrR3Da37gkMLzWLuwygZowj3YZmEY71W1K2ap9gRfP9U8cd9UoWauVupESgRVrqoRy3sAJZY",
  "key29": "5UJTmek1FzA6XTJSARX7jqZvKjQVxrB5dBemmwGeAAtJT6sPAvdZDx3SdW8otVwTUc5jf7Tk1HE1EtW9bTg1osPn",
  "key30": "4Adm8w8pC4P1LaAa8378N2H2w4EjLsY1TZSsJVNxJsdcDZUyTN3R8AWt2EYPFdufZaqjBuVzxqLDrZ2TfAAX9xcE",
  "key31": "3NtMMj5U1HEkZG3oCQmnX6A64BvPvSCMNdDhW5u22YQCjYk5irwFJYEuz3UfbV4ZTpjGECyv2GgSfKZW8VEVJy1d",
  "key32": "5fooHyabWMjvacyMjd4BjvWWp55H5TTup2vi4DunnyxD4imfN3Hqpg25iMVV7duw8G9rTpqLXb6kuHbnnApR7ijV",
  "key33": "523ZGWWwxV3fD3WSiYYZ7AtZytwfmnpTztfTVnnFnjhXRZNYgqrkRtoMorU2nruiGpVmYXzEAQGDWgQudoXRhCys",
  "key34": "3XjYHZS1Ed7xt9AYhcv1KNUqZXgWHkJvGezSNVZG9DiatcwUhTU99FvfZEaAXHAxWM6rUqEpQfvhQYcMDVz9xrxJ",
  "key35": "3SUW8ZXrfwkeZgpUdHHzYxg8keKCFu2Fo1tgdHMFiQ17eHEQNQfotjxTGKBsXhhG7ZuZn4AL8AErVbvYGGhAPDGJ",
  "key36": "2XXTTqz2WLeBrZhJtiQekwHvhPMNnbTmAAeGYWJQPhAoJxRTQcgV5Zm6pvhubNVP6dYnnu5oJG9SAWSz47Xufakm",
  "key37": "5WJ3WN5iCQ9TCB7nGcLUfJe8At4ydGeWcT1EfmnSUQ5k8NwV9wSL6qxhtpoV2F5GmMgJVm1Qc2qggQ1p4UAMsgrN",
  "key38": "5mseAGfC3b69QNSCvvcMgDzeDw21xGnKoU2PhfTAbnL9qvpyfHy723ASWMvYZzvkTLbScVH7s3q61ts1XfdKUTfU"
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
