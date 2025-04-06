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
    "433h1A7bSiYysT2FNFnSr3N4z2wo3b3abvSFHr4ihCrARjujMj1tWjMaq93VKgkhWdYUfve8HoX92uztpd4GKhvU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hKqifSA2uVqJ9rQRok6wXu4q56Hn1Cq85f35m5M8D8x6cFrJHJARixSSasoJdQYr3UhqGf2FHQ9jf6TSG8nRbCu",
  "key1": "apRdzkeqjhu4JZJmedNjXEzu5Fe8q9RpJiXFCW1X6uykuAduUgpZ2XvxSr4s6L2nUzuSHmgVGyRyPRkecFbNuPL",
  "key2": "2JRLZfqwJiUiypDCQBMBnuYQ58ubPyPSaSEnk5q3Q3ixtaCt16sXYCTrjxmJy4G2gaAeVW9u849wV4uRZ6mBn3VC",
  "key3": "4XrQfD1GUHJUfQ5KDuDTrw5E8aSDmdCLf1GdFXkYuHi28s7PNxYQYpP6xQHToXMuQa45NHLb2quLNqETooMhikFA",
  "key4": "2svhkGPNxrP7BAQZyRGkM1acj2fURtdLyQTru7axVQbQ9bjCCUrQSeWV9SmjMV4F5iFpNAuGXGCRBorBiy9VeHU",
  "key5": "hGjXFnvfFX5NryX5r8QZA7GpkxrgzgCAejjsJN23fENzb99qTTZLnXLicTiP8npDun7s2DJbk5XYiUrf8qdw7Lu",
  "key6": "4Zr9G8gnvmUiMHaWnsGJ6N2HGFoiHLcLxNUraUn6Stev188qddQoSdPcvZUX9dkKupUZ8WB71aBbgdQHEbusFkEr",
  "key7": "41wvuvXLPP8KvFqdMUAXAu7si8mszg4FRmM8anxY3yMXcQZ6c5DNNsUTKZ8FGWHcS2sYwX3WDgMGzdBqTCipN2QS",
  "key8": "4zrxTJYQvA3YR8q2CJg9NTXTFYhkANLBbJ5ugkuU5LZV34GXUiPUdGG2bfdon4mkkuV1P9Hf4UYEa4FLEduCkNk1",
  "key9": "TLy6hThZBWQPv8UiZPjUUu2srv6mgEW9dyUnUu6YXXocKgeN7h49T7pGtAhUDusAMvH9BiTjvvHBSyNMHeQhWh5",
  "key10": "2s8fD3QbargAYmF2DPWLMApYXZL5jkt56rawKbNdgWTQpBdbqRrJEjFHdwRsXkyfPia169YKGCAmkaCioYouvNoz",
  "key11": "2gNyocusoF6wP1Bs2ra2UPk2UJ5Fd9DPhBExg2ToZGK1YB1KfroTdu44Bcx24MV5i95YoxVsvkXxsPoAZM9wubgL",
  "key12": "5a5Sdpk4mqiRHALXRSAZuZtSht26tBzZftP7KhA5PKMMrx8ziFUBNa1fih8AcAZra2uUykVLTHk2Y3TGHFSbidj",
  "key13": "4Y6VSifQ6gkJs2jD713oPd3PTCPkycHqV1QdhKc94Fie14kQVSyv7eJUakd18nAs5LqDZTgt8GhGGCUSMFGq1X9m",
  "key14": "5aSowDoDtLerXnv291FZCT9ZyanXXupKnAd5UtoSZgxVMtRvGihzTX8pVFs82FsUh48nErcuAAPvzehoV1BSsmXq",
  "key15": "25AuzezXHcYess9bvFmRmF51bjSGA1BoPyyirotXUmVbur5AvL9xyyLoqdfBgwVbZ59CzrTJeuH4TN7Xb8SxqUKG",
  "key16": "3ma9fgN5nJJQL858Dtm2ZJYmwHHWohMA2ePExakNHpC9Wnb5q1kkCrLQuYViG1GL6NDHJqikS9GnhWkiFkHCQP99",
  "key17": "Fp4q1keZKtm9aBUB2A7KEf4SihhvJ7GZqM1kjCX9d2NUDj8xTridHEEJjAMAHqN5dnDV959ww8Lo55Cn12TXJoS",
  "key18": "8TB8M1v7vidNvJDwS3kD2RCX1iSn19DVJV5b4LJMjyWMwEhEVSdV9SinJrzt1qHpS56jEPqw4hYKQajgBfaTqrV",
  "key19": "5LPUyCDsYRXKDPJFepUZjfB456xi5xznWQAbtW4kua6FwXGWEUzszDoUBPtB1b7Ua2fza3t891ids87PD89dNK27",
  "key20": "zCwCqh7TxmB2boNvrZ4StDvRU1y6dos5pWYopkJTNbWiKd6jRK7htGKVwsUh1M7gNXUezAHisamJsqNBX33MA76",
  "key21": "479xjgAcSRiy66SxXtsTJSnnQDW3NSfS6GeyxRgjmjpgXDcjuWMSy4q9wBL1r5QHa6j4PDcBZGJN7UeTrttWm6cV",
  "key22": "5KkutMN4LfFN9EQNvDHqNWmqj8oDu2mMdMKG9b8NverDpFYB9Wtgvu7JzjHD1jQzjw5r9VjWVByB2mZA9BemYH7m",
  "key23": "4SQh2BtzRH9tD1mVGwTykCGj73JD7KS5BD6firVhDQMkGnAxtsYrL3vCrgcB8DfbtSBkpX55BhcT3Z3GYbnEUmnu",
  "key24": "2m3n9qhjR6KPKEXGNUhVpwfGVtJLCbXJuTXRxLV6jLdZxyTRPStBQFqaXnBaios8U4s7DVtoWnPHV7QRjmzdxJbW",
  "key25": "2XwwwJboqu6LnNr6R86wRgyh2kHNKc8H8bxc5AKNWusEhjpG1kuysd8rqFiXVZ9Z3hT12ZBqURtXMhZPyvchK3da",
  "key26": "oPN6Lsm5PhkuNHgfWBQZWu2RzzF7BDfkeEHt4tj71Cx8Tq4bQNLVPGbnBkVVtNn9ooPPcGCqNqanh1nuBiwfFSX",
  "key27": "4NJTM9zycfDpL4wRbhnPtUYRAxqYf31nyrYLzcxxkz9Yif3wSvpbDYMWWMjMR4CHKXLVnc9zyMjLLgTdjJTYCiS8",
  "key28": "p5EzNWpHKQnpjEyGPeMuZiJ1vKk14bnbojNgAyRMUooDLnKGRzfMy8yUFMKzmUTfwt2YnE6cpMMgsLBrFP8bsFm",
  "key29": "23SSPmTRS8HBPYASCqJfp9w9cfgNY4KDEaTana68zw1ruhmEXa3bhsJn68zbEWRFkiHcRNd6Piv6ag517EptwWX4",
  "key30": "5P1tDNZHwk9dvRFNHQTP1FKbDt24J2ZhzXuQtWkeM6owoTGDLz9ZjghiEG9gBXZG1icr9NVhHPqRgAKyEEYFPdfo",
  "key31": "9XgaSAMQMjxww6iJ4UkijDKAGc4nfPKvDcDuou9HcigfaziGS1FxYwUjR5geb1VvVXW3x1PoEjV717VLADk6BX5",
  "key32": "558eVf9wVw4tJcbajX1WTp822ds1LDEw7XhV6LiBrN5nkDJYkkNatZCHggtL1BxU3zWkw4aiwrmuD7pGKQNBHjJN",
  "key33": "aqSJaZVoisr1zEWxJ5R8YMiu4h8Qf1dBKcYWSp8A6FFBnboWxFWyBTCeWWAXJYo8DW3FbqAhfkqAmAYLRLs4u6b",
  "key34": "4zSL82ogXNndvJyGcijC2gE8jYiZVRVs4cDLPEgv6gqEEWZHBnVHudfhkrTnmiEYpWmBvSVyfPpauJhJRyqHaXjn",
  "key35": "v86h2JB7LnSCBP9QYVqoFQshFdFHuxPi8mMztCKqP6yVRJQJVPatPNNi93eFyB4wr822q8sCG5crcPcYCmWk8S4"
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
