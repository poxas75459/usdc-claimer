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
    "4yiqDzSLkzWTvTbqsn2QzSGUgRcCq3QjA8gRzJhVqVeFsnTdLt2KKqmjW4v7feqkrZgXQ1QrQKjjcYSoA5xCXMeG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ds8jqrQf9pB17Shr1U6ppS6qG7SHeBqH9FtKSumJzsz14TPJJENbaA7ZXSELNMUJo9eMrgHR998Urn71tHndssa",
  "key1": "G7Duj1Kqps2fgnmw6vAs3U3LuYPryYfSNuwkHsHgQ5E6T5UQD63Cdv8aFy3h1dqg1Qs4CkDspPm1QiXwLLphQ3U",
  "key2": "3sh8LaEq7bEdRAUhDwD1YXyvc9LSotLw7JyinVgC4ghjZKk6sGDMdVTw8amSPVUB18fUzaWSB8FqJuY2TWJdsT3S",
  "key3": "5RadYSpRVLcAKzDAN92fdVA7EZcwbmsKzEaiQ4jd7AGT9WJfVi9cSC1szeUCntmEhaBts1vRyFMZVCQzsYuF1Pto",
  "key4": "4UrQdkREsEY9y1oEWzxqW1XLP4Nirybd4HH45r99Yzhe3zw7pSBk8xT28tGtxcPeor97LNZb738KRGDEaoVLhm73",
  "key5": "5pCoCMP9QQprz8ErFHFkohpvP2tQ1cgwBBryf5Adq7WSSApAdwjBomBqkQvCMJzdSxLeaa9pVtHfTt6FcuPQCuBh",
  "key6": "29fxbS84Kx8K7rKnR6oEhWgjyJvnxRmBMzfkRF3FiqtBEGGHyaZZBVxFePnYFpPesCXrDw4nZaNFGfdquELFNz3K",
  "key7": "594QJDUYS1rdRbiW4PrUkfgTmqzfyPVipDxPhp1gQ1mbJcRofoPfwDBBFHBzyZKGdP46GAmsrLYAvaqYwQnEooXg",
  "key8": "66LYCjSDyf5nzDnmy7LaBBC7MpbGMvCkvzi3v6kbFCeN7LH26YZqa1Bp82rYnYJMaPnfcAqKrZ5nGPDZnwRwkNFG",
  "key9": "2VZ9AL48gpfgCFFz26nKAT5K4DorxmmAHwqZjaZzY8wzVPHpxfDnH5KG7QR3BPP2kFCTeSuWPPKZ9UzVY77fju89",
  "key10": "48Z69mSwJeRr6NQDERMpjuUmi2F382WkqGT8YPiVowFDYeu9u5mV7Tz85ihwgymkX56Loun4TdC3tq9SoSdzwUry",
  "key11": "23DBJE33t9FfrBUL3BJCzaVvBUKrsz5nzq6qDpVwrqZ1sem2ceSrH1udo3ayJ4eRN3tBQ4h9G1aWnXdhppry5bw8",
  "key12": "5aMjRfz4sCNywZra3wgv1zYc7srJ8Pk5GLxKmXYSZHD54M6Xo48su2eqdhWv7DSkKyAa2icPNMWpARRyo94Pxsf6",
  "key13": "5CS383eigQEpWq8n3MmaBNGWE3oqNrhuBSRBLw4h3tefFBwrakAePhrQoR4Uc5i2HxPUr5r6dvjumkixp1bsmKVn",
  "key14": "2bCXNm7ZR2xJVN1bnmmfUL4TszGHLB3GTKKZNU4UhcmF27V8qUav3nTkxHXCuZ5FCSxFaFVoSyDP1ZeRN6vCpoXc",
  "key15": "31PAqNLqswxypzjukJDX2XB7Y8vF9t5jNyqn2pTC2abrmoYhZ79FFrXXbCvuczTYzj6rp9QREzFXu9bD39AtAVoT",
  "key16": "SaxYxmwF2FWNgv51SjHLsUF4bnpnyr9BYJDV6i7thqysbFKbbgYoSH79vaEh3PnStNDrGvx9dqEFYsVoZetxBeQ",
  "key17": "21EVcYbNtFe1DCqyhtJMaJFyV8m3S534hk95qGHsfAo33BNduQwv2Y6yZLkNLixajCWDuF87Q7529MYNY8dRB3Sx",
  "key18": "3hPz5usG5HSAKgUdxaqqaJKVSLgdrh8KicEUtCVb4WjBXy4bojBZLgfYMfiRbt2jwqXdtHr5a81XvKpDUpnnNEsf",
  "key19": "2KkrXbYGwkmhaeGkZwg2iUbSugyTDXg6zLjiL1uqLdhxjL6JRJowaQsCydYjrQteExpgZBKSub5vZgoErKNTPxKy",
  "key20": "5nfQqdEzfUjW4qy3GjQQADpLUEJzMSar3TtavTeZKMKeZ5NUgJapworsMfVu79hem2waexx4UVLa4U3EEbT8aZCg",
  "key21": "3jGcKgcMZeVU2r5JyAXN9vkF4ernPJwpJ6pr5fDwk3U6aJZkLz8718HV2zmsNC5ViUw5dTJzWNj5e1jxyauHvwMH",
  "key22": "5ZTHc7EcMCUBCW6EGPtojQoXe4N5TZ4G3QLQdsTpYh2LV5LKcWGw42pn7KYThSeTyGUSBuWdYqxRP4xzHdeEsrd6",
  "key23": "3iYWRLtbTQz7fdGKJuatLRU3EUzX9hZTCorjkFVpazugFw4AALPVAXrPd3sGV9SftGXchmzbhZa3utuCj4xf99xx",
  "key24": "56g9TVn5UZdCKNbq3L9yMWeZR25PBamY52zYfGpGtKVubYW1QuZTRJZfUXZf9ZeyUbZDkRggKWK4d5m2pUMQHjE4",
  "key25": "4EDGu6AaaXeLzefW2Dsav87JbUFPzLMKAkPR5zeuqGvtN52cnP6xxXnuFLCS9muuKFeTPdMKzx1Xqurn7p79jzSp",
  "key26": "4tWVEezBKayf9r3o1u3N1qPQfE3JrGgqXMCCjNdDHNeb1GpE8uhq4CVsCD1QyFP4PKBYKtmQ3KKwBwNNt3Agvoou",
  "key27": "ghkM49e8N2rrUFgczuJoKw2EfKxCDw4hc5pKTiR66jLYCAdiLJ2j5hYcaq87Qbf6ggVcBK86HstjpomMkek7HaZ",
  "key28": "3JvU9ujgJShYnkBWLyYkuAXFaBCeQBqqVU5RHxZktLVekRuoJfbFLS2C7GohqKZLynVEkpVtsgNmW1WNTYBSGZsX",
  "key29": "5tir1R2aikQQv99b5B1qBgKZf1EbwCS9mrHromB1zAAgMGv7dq6jFGKjCAh54yRcQrbUne6LjmySQ9twECBpEXZ1",
  "key30": "Qf7zTWEVicji7RkdUxu45hhd4Zxw2fye462iayEBZxcAmDKVRkj3G8Vg2mnf71stWVm4VDissoZe5yVC6zY8DLm",
  "key31": "4uR3emwoc2b86K4XuUhmMiAKdtkZtLBHyJrA4C19NXwNiL966jKK95VftqEHCRxBsEZH3vRnpTZgyCaRzmuHwfyB",
  "key32": "3DMfPts9LE7UY1wP6ndrK7hoaeQwtceEhcXxpyqcXL4pfvGKwofnWgGF21AUuPAU2XFahNiFZBmchRmWYuXDSA5T",
  "key33": "2gJxbdo41udPDf5TLPWYSFYdakvVUhVRxch9q6rWsQjcSJZJg5K2eCcsvM486T6JCA6KK4DtjPBs2JgUKoQoe2dz",
  "key34": "35XFhzpd72uyWNKrheYVEkJWVN3bP3UxWRr1pMWi6GhnG4yJd6KbuX3hX4ivv74pzBbvNr8yrUe2e49rdFRNu9pQ",
  "key35": "4UV7hLv7x5n8TeQ16xwaKBc3FzjmDrV1xjqPHSh7buiNqYXh6XKryqvMTgJurxCSZYwEA7B2Fni1Farf5cSKwPeR"
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
