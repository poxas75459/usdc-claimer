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
    "3kyCo43gDtqNyLaKHEcXqBA2jHqNWX3gSLHSGarKS7aZArrXorRiX8LSDsGSay9dYzGEhNoKDgNPd7hwFVyVHRae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mw2Sp8ZhHf1wbXD7rWNZhThA1tBpWjBJJaT9tnJTJ5zptMHD9hoxAXMBQaJwLD6NG66J8WhQ9SmErz7E8jiYKdL",
  "key1": "3mbPvHnpyQ7BcaPeXoJNguExFLE6RGJDvBWxcERZPYN4mA7jFQVhCn1pCqJPVJXPADy6i6cQoFr6rED7dXXU6NR1",
  "key2": "q6LS3gRFRXjqH3cXvDc8THVTwEcGT68WqUu7gSzzhqPH32fz7gUVLUPjD5kKTjeJdn2YvAVgjKfYw6zprLhX2DN",
  "key3": "4AvDnG6wySmdqPmc1rkoE7VC9ej2Je8ho4ZhNPY1BRc8Y6qDorZ5VDPgd8dfK4uweTY1ruNUhnvkA6NFK5yV4TXY",
  "key4": "611YZtvWTyUWAyjJiL2LLxMzC2fe8NJE9PGi5EY4k5Qb3agzjgdG91fHHn1KtP4ezvTKhFZ7aF3ucGQJtL2kQVej",
  "key5": "2ag7yf9uDHWfbNxH4oV5QGb8xUNJzeZ6xUjrKos8Gj2ESrcNQBCod8m7gMsWKSkPAmZcwAGrrx1QRjK2ehZqfcZ6",
  "key6": "3fsF3KBqZdN2TECZwV7iW2KFi1UTUKuyWpQfEyNGWpF68CbeAzsomP7AAWithspssQRWybWfoaBB8gEBdTtCteho",
  "key7": "UQivXV5i1enM3W5qnEUKN4UK7PHoedyYVdwCEGxNDmTcqdEJcwJLyK3QXGQjT7nxe1WfzXuTUFH4QDGfEu4oov6",
  "key8": "3HmVphHf1uDqFWDLbvCT8nm1ZJYLHdkTgvvjVFrnXn9bSXUxTgAdMvD7h9AefgSkGGqFBXuW1HDMckvM7qRMFUJg",
  "key9": "3ViYfiXESKeTFAwEdo2MCQSKUSQA7PFN6mJhwctGWtUVwSMCEpTxAsYBVjUZbGzQNZ9sLpaLKFEZ7oNRBmDxHKRv",
  "key10": "2ygg36fVaWKwzAhibS12JyfoBFhmBJ6GQhkvEm3rWaUGwnEZGQzFFEBii5yeBVuU6g8g1wW66rKDJq2rMJ8R16pQ",
  "key11": "kxWhyPfjK6uNbvRUQxDkjLuTB4NE93BmVzqhbSqDpoLMkSh6s7q9sgVFZJv6jLsVP9htc6j1ggs19JiFL5vJzSd",
  "key12": "3fBDj5RGTtbkB9S12oag3U1QbY6Ewho6z5wYCjyKXEEwathNxbHtLyhg2cMHmik7AXPKw1oab9emQx7YfeFVV2P5",
  "key13": "9F3gtNzYsUsdYkQLCMU1Jogikf94TQzgHdEQucpirxyUgYFanBUbmpq3MJk13MxXCSDUrr5uhQ2YciLr7RSts5s",
  "key14": "4D6rT4rGFQJg55CJrEg4Y7ZtPXuj3MxDyfbrFEAqaBqxydicBtVk1Vi9s2Cckg4X6QRYLZWLsnAMXnSrhCX8eZyk",
  "key15": "3nYA7USi1SGmG6TFkXK2tR5phwoREV87P4XosmnLTKFjsnTkpMQp4MZRsceG8PR25akk1ixmJJubVfVvN5nAKHWj",
  "key16": "3dC76sHL9hu6ruBEtwxopkWfyBQ8GY6Jq5gVL6oWesj7SgqBwGdBuRWJg4Y86khPXuiDbQaEis5zZ6fw5zwKDfe2",
  "key17": "33t76sb53ctw9WBYsynkYHV5qTkY3tc31BMUByfLBkzTpz5T5mBJv155ysuJNbRLowFoka5VM55gTzGYY3YpL5zH",
  "key18": "3YPmrwzHsyzSXaVCce4VJMTGHabWS7EiUpdrsXDLbdH4zhKk6YNVhDqTGqwsjX6yFoqsf7PC4DhYBky9vaRVRGX6",
  "key19": "5RyyrbtRzzDJo5jZpMZjeo4dQNyW2yfoM2WXF4mubB8qURBPeEi7Lxxs4krX6Z4kULWkMAqKt9mpbqNqPA6m4rj1",
  "key20": "4amkq1TdqyQT7JoCmxbmfG5wp3V5Zf86S7etjoUBNatzm3VNVJmH156KcNK983GjPfC7A7mqYp33n2m2neaxL5mX",
  "key21": "56Q8T1vpUq6t45oJmd6PRdahbUwc4imD7nZ4GffmxR9nh7qFZ3mWRAGkyseb23i8Fsd3urDKpsbZ1oVDZ9uiHA1V",
  "key22": "5XgEcP9BYgx4prhxziefRJ7tduSvab6oHQrLR4g2RKQJf8DD93UjSBpuyjMkP4YpdeWtS5NAwZPNw5rsgszV1KAz",
  "key23": "21LHtV1rq8ZS9PcXJr4SLe3Etw5NURZdSZ6nPpe8d84yCUL5rJNDR5tsVUVaA2VKFW5o8BFQTpSbRgUJEbRLXtd9",
  "key24": "2uf2Z2qM2H3s8q8rqnemJA32YAD7e5NbZnbgvacYzCHWdoALjyK4Q3N3gx7zzdUMWFeMEPqhuDeNFBgrUJN7FERD",
  "key25": "MGydgyx87omDkAUNnDkApS1Snpg3AqRRXVfEbTz6hem7b56XvmaHw3H9JgtyQhTpUUE9ghdd8ZYx15jtGnMZptR",
  "key26": "Xo7NHFg2hG36v43RBeQyhtfHZeerLHa5hjSoq9uRmB6qRfm1mhbcohHhSwEvRrCho2dmK2U45JBo4rmpJfRXYhB",
  "key27": "tE8D7STPSZ3Tq3uP3rwu8vBUVy5ACdVsdBGGTCSYsCM7oAYfcjDEpL48USNnJDcXSeVUfzCt1EzaW4fjwoHPgWj",
  "key28": "4NappSN2t4f2tuv2UcuFn4AsNa5GWS8mRfsR82JM37dkjkWBrpebhdfUxyvakSAFia7YQ73HqJAne1AtwgqPApd7",
  "key29": "5saHzwfh8aDZ7KuduJXWGEqJBYGStAu2pdXPWpDRy9rcmjRDhKnB5SaEN24ksbLohSoyobvhuz5ZYXo2Q5YNmNbs",
  "key30": "5GAe4jUqU8o4FgiCbj61umonyYFvcE26tmCZrWPrErZox4v7accXkr8xQAd4VBBRTwiUtDA6UeFi2HHFTySeFbEs",
  "key31": "5L7hUsGARM7vpTg3Z4MVf2wzK6EV37PkVYgAt7arKfCoRkPpuJXUii3iLsVhDsE11Qu7K89osbtMax2B8mtk64zb",
  "key32": "4WtvztnDu8SqHCKgPMfX3fXm53MXij3yxthg7aEhziRapDvrGdeo41v5zmFRFuoRNDkCPxYhT8Q9qaonQQr32Ke2",
  "key33": "313Ep1f3ug6AzKGpLwHh61i9T9bWMhU7a3drJctEEPbJiBTmAT7dKgLrxi68m8ctqPY3rp4sPSdVs83eGs1JNJyd",
  "key34": "3F1oUcMyvwWFPoaqzypBoynCa8yfgMDRJgXYPNEerCGCk5CteuaFPhteY5xga3DUzP5w3n4Cz9AwsSgoBr2fveeX",
  "key35": "5BVZGAt9CganzYZ5LojfTsrRJp8gafMa9ZeGCxhfEC4fw8yxneG5AtgyAWe5gVDdk57QJDbGvWBrEKL31eHUuCkm",
  "key36": "21JHWgWgqzb82679BY86je88Nyij7kRMbUQYrbep2TqxpZZJrfBJvCgNJ4YGCNvgkXibQ2CWnBMAdkeGmkTncwGd",
  "key37": "3TAcXpY3txUSg9VfLM8nwE6iP3BXH4UtGDDvea8fLe1v8E87sRtmKqm3854trq6dB22FoRCcmTY3sfFh89KAErLw",
  "key38": "23LGgEhMtryPQxGUwrBQC6w9gSNPs3hM2y2XoSt9BMt7MkpJtttqjjxa1Ze2NoLzJZPFCBFomHQUXqDaHYmjoW9f",
  "key39": "4Qr9juvJPWcZsEwfJG3cGU177jZDSJkPv9Fo2P2KbPCf3JKg6Vg6iSfadr1r8nc7uVL5sN1YXpEYJZVistSi7dYa"
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
