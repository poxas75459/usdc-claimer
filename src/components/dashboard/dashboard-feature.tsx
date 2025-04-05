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
    "5sn8iXLLWynbTUZBmnqcPVKT61WoQWZSjo9r3iXGc21anEQdp42B1ydWstPWzVa2EgAcYu9JJMt5tv4aCfVCosP2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VT41Z9RXbc5qYFxpTjxkpL3vE3qt92VGNdU7qyPh7oqZRiZnKin1TmyK4PYnfeia5iDwCzbKfcewBANenUazEqH",
  "key1": "4keFLzC42kRJyRUAQf7Mwdn1Qxi9udjYbG6GWseY67QPeZojceQGWtCyfuG6iKAcggJRxXntjX77r6TM7PvYf5cH",
  "key2": "4MXX5MJpnjUVSMu29gh7JVv22YJXb3QWbmrCCGvH4huKpLMEcgfriNARLfRRMd1CBniYNnEtw6rfGkwCL5QV5jPj",
  "key3": "2WhVAMvG4Q3Ldht9ekqQ9C36GGNmJkxEaECnbBVa4S32RjtTt3H3TW9VthY8m6AFJnrj8fHDgj9E77KoZuadQ9Kn",
  "key4": "4YVnaGStJ6UcWBns9bzqcxdDvmEiDdBbaAgGJRwmUTqZCq8JMjsjCEmCkMU9B6z6wASoNGz2x4M66QqcGNmvWJdH",
  "key5": "5PxEJzbFsEqYZFPhJBpytYX7b5aoXVXm5NjfxnSifDa6tWC6aucFXBffkhpsNocsdfYnrVXYELJi3Jq4k1zEPmsJ",
  "key6": "tQWwDVUwkGGGahdrKti5X9hc3oM7zYC7vpNFQ2LGsXn9T1VDp2BeaghaGR4sopxfAHjn1uK7JsrvizJ4to5QCGy",
  "key7": "2L1He3J7KG4zfTRujcJHioEzzYzcEpX3AsPB4fHcQi6qEkwyd8Fej5z1agzCMYSr6XhNmvvP7xpx8esV5MEU3DQu",
  "key8": "2BkLSKJFpnTao1rSjJcC4erXbCS6TVNkDJv8Kvc5QApS5z3mbH5yvCUEgzHXcJgJqTH3fhV8qRn3wAMPUsaZmVgG",
  "key9": "Ne91r7hq82aApPpWmnAQ9LazeA2s32NTEGRr8fBDDpFybThUh56Ph1iCKHdagEAaguqV1FYwviP6nfZeFnDwCrK",
  "key10": "2ff2vTg2tLjQ7w7zyPULabtAnNVeMmcGLoFFQGRtYvm8SdnyVzUGwDMj1Apd7R3EXbYhjcJvLauofGYj9Jj8UmC9",
  "key11": "3gii9j3yvHtbiYgHoT161hVcQLVFXCEbLuCteCxhj5yTUGhVLQ3eb6YGMFMujYHbfg7dphBUuLz5twLP4nSbG9L8",
  "key12": "4VVMe1cmJ9oK4h9kWE3NMUDMsKm44f4VdM6mCXrRxSffywUQxtT3Xua3pqhyRtgNf6mgDwggdrkNgztQPcTjjKpy",
  "key13": "2cP5nHaZ5w9dFy1FXEB2UZyZsDhy51puPiSAhRUthEskHTq8WEMGQK5QtbWrcnVs3EYH21xi1cnxuj54atG4fyx4",
  "key14": "5LPyRhohotgEbbrQuri9g3xg4NM46o2pQkCG5Zb9tQsJRG2x3XP3ivnLb1jLfP976WFDiw7vonXjXBHAXHc6gnnw",
  "key15": "WnERyqUDu3aCXnzF5JckhXG7ECAK8yW3fAcneBvo8NTvBVvaNGZcfPeKBEif6tzFxohZSL64TPtiAVQ9NbVoC4W",
  "key16": "GVDeVwZAJ8oWgR7RGjrjHZkmb5zYnP47ct6ThXdcg7BJCjmttmjEAwvAzxwZw9DEFTmn5MRdpSrfxdEyis2WRo2",
  "key17": "3te5j4BvMyryPP9y8zBMqErmepsyGbVDEHvweyA2JufQ2ZbAfGsVJfrgXi8RJYAdXMrZzfZ9rxPgm9BAZMUNCbSN",
  "key18": "2snwL6GyZCtPFPzJpkrsM1G4oWo4J8kKqSC4fEbX2vGYXNc27QSYK6wEJxd1vNbhdLFtrTwrRErKVsQGZ3hBhNWn",
  "key19": "5YcE7ufDm2g2Qx5sdYEiboh26MNqFWrCJonijjyYGaeQgLtS9CNbzXzLcXoAd3ZYxWNfXRS1DTxW8eXkqgK82nmg",
  "key20": "32Rfn9dTgwFuU7SohHJv6vAfHuD6BsbZynnjEZ3pv8dqgN2zvoajXStzEVim5LbpYYMbsWNraXA1yRbSgZLQrS3f",
  "key21": "3j2RPiAv1mPhGp9e5brHqkipZhXC1QWU2iJxJz49wvzxR632VKQZND91r97rtWYX46ypHKCqEoz3DrwDZhdKvrAv",
  "key22": "2AKbYDnPRPt718Vr2CUULhYeuQmmRdmSFwS8PFKRuS8ZhU1bT9S4PazPdBfgcrAFLeXqKgdHZhgU3BvXNG5bPvsH",
  "key23": "3snstFZQ1Fn7SQS73T6LVq9daauz8oe5j7QzZxSXdAQhC228fougqLRVb3NAYKwyZZ47SpX5y5FRiquoc9PjXLV5",
  "key24": "5nCZYh7pe5t68c1fqpu7fDtY9NMehapt33Mb1pNSVh6VBW7zne92Wyd9DygCnpUHwsU7LmddmrLSW47xx3XrmkLE",
  "key25": "3FvaQEWM3Mn2WMDnAmPekVRALQrbrVFrnZyqnpHXmRhrEHj7cySeMxr4VMNazXcgqDgPHbk39vvytJJhnsMTXZah",
  "key26": "3bo4YpDSD65USkf8NbGJhrQTcATAWEjfHgkY7GvN4XKUuinr18J9cZVY99hqTLw5GdsuntuvGkzAJZZGrLWuWZY2",
  "key27": "2QMnjtV6AxLGYacpgzeVP1RLARx4CMhYev5u5sX6dBEskfW7Jd5fZosiJZBDQCBpmjAKbVRhZHDAciBk7r8AiDke",
  "key28": "5U4T2XeeKRFiAvb8P4LfhCtVpL5ieMBUMABnqkAby6xken9RU73kQryd7yRMweLEyzJBHXMEdQ1u2ftQcm7HBUKu",
  "key29": "X7DAgfDzH59wwfJcDjDYZhtd1S6SAugzzNDyeRrQ7fmkPGkfAdjgL3zysc75YoS2EH2jCoBGSHyuLdbUnSXhhN5",
  "key30": "3mQ4Mk8uAa4uqHjKUt6aTfRMr9YcvCkZjvYwckmMSP6tLgRYYrLwEZPxQttHqT2LLzB7eoL2NKHBKBryZGWqMzbD",
  "key31": "4zw5HUaLZPTvUphcdk4kpvaiNBScQKDHUyJGEzBPhSFg54BvrF4PmS5prVVUPydjFdy1qvY8ojjTtNq1SHJpMiFF",
  "key32": "4HyPQQpkqLknhHANSUtD8yyfuXubkS5Y4LAWUBxERASdtHE9QQY5mt1vS5SqgtE1kMCEtiJAUsrpHeYXcJ1pMkV4",
  "key33": "4aezvAAXy6vt5wMNLNjt3urdGwD2gt4TUua9npKWYWLiCCfonKtVw365Sp3kcyemkqoVUjBgbHv87L5gf84F3oji",
  "key34": "5Ugt43ww2Ay6NiWA2vMLPzdDfhnMrrFdKfVrEsU9kpJ3jexD3QTDKjZ6K6QQg75XscU3wBirXPtNc9s1yu3fqKrc",
  "key35": "2NStw5u83sKRfJdiUcbhSoDGP7sk7cNkPPuWcf1syMoSzkCuuY8YQ4ggtVonmTjyZARLnAcEWNwBocFg8LLzNGJH",
  "key36": "3jjLmUmdfX9PbrNMvFSfFAKd2BTh81jHNStBnTpdSwB5yvHQ8teB5P1hwrLn6My7uD9EJXRgZPRvi71rG7RV737U",
  "key37": "24SUwrJNbzBrUSi96FMtcndQzLR9bfHfXjdbTmefXEAZ8bomGXeDqM8dxaFjH43BzaQKc7S9ytufTxMVu8r5HGhy",
  "key38": "62B38mXkJXGhcHvruZ3MTk3LaXbig9JBtFUPjS4B8cDeWQVCjvZ622TaK92CFYVFUo3b7izXq5Mi66Md2djTVUYQ",
  "key39": "3mnAu6XAp8Pjm8o7SPc9pb6wdAPUoCu9EW7UMisZYyEQCvbtHZcxQ4AJUCHD4eE9PArqbs4HRqdFRedUG7weohWi",
  "key40": "2TdhgGbxSMDhhXPV427soKx1qm1ovDkSVWDCtY6gnUkd7HC9Lkj4sXtGCMbEhye8NwwTNzDrVpzZapFJpZN7fucb",
  "key41": "34KtheWXzvSC5E3FE8cTxxbngHtygWzzyToBcab2MSj9yFtxJvCfBwGewP2apgZodnZgLCiZaJLRZpf14dLKi4KD",
  "key42": "4pNNv19DvyKjg5AyFApyeNexXvbC2j98gGqPGUJmhivJnjfpNsRZtE78u8FT9smsgcNNZjdk1jmMgtFEFq2yyw85"
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
