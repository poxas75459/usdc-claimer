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
    "xDE811cvkqvHUnccFJWLRMNLsD2Ann8Hfbz7Wauya498fKNMNXfkbaAWyh43fdgAMmxyLa8S19fHcfw3vhfRqhz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JzaPhZQTxoGTo9MSv9inGZQbv9YDohmoE8fo9zF6ZYZj3aotNDaTygTbjzfsBkFGVXJ5YiFX8etAAE8hJDD8MTJ",
  "key1": "3uyBJCCNod2791DuzKmSZdm1HTVyAU1TakcRaTo1LH3dDNeakAqob3R4WqB6cvnd8pMqejFdYbHQZgeKnuS4zYKd",
  "key2": "qNZGgHbGgQLrXPEh1x37yHprKYzMW45HQtMZvpt3uqkSwTXmWMCsBvjxQemzCQ4zqQq5fSNADSV1TygdjQBcVeQ",
  "key3": "3ZKbVG7uyR5KWPaa7Chgbba2eUG2krKfj96c8kp6zL1CVuPDsEiZcRmCkNtLqH2eZWMJnKoCnps26U52sPg2a8ME",
  "key4": "5zPJrftaQRoHfgWqZbdzPwezKFuB44sniugBKEqeUXcQXspkXqwu64Vfz8dyxyk29tmU72couSQBAywYbt7Y9wUM",
  "key5": "3JfZ4FqZBKMWr45nWc13hupwCUDDccJYhJmd2Jr3N4hu4biduHUk8guw5nJaKMTtQLWjAvCwReN93VYCwqqnjxK6",
  "key6": "enLTrpyDdC8yBPoQBbfgA4WoM12x8gp3G8pv3VjkvNhqpS7X47ycLQCGj1WyXkUE9rxYLrRaDhBh4c4m2EbX5xk",
  "key7": "2LL24ACsSoXpNdGnSEf9Xa7RBHT1GhFzLG6WQRYSeNt5bxULkKJKMpDN4RbqN4gd8WSsrdYH71bSd9YmhnXemmno",
  "key8": "4G5DwKJwdYowAAzHUDf8C3K5ZGU3TyKbhtfVcEe2kSDrUW4kVsbM1WgzURhTy6REcJsrTii7dVMcLArpGpNPsYtZ",
  "key9": "2Xs1zpWJM1xZXsSsHGWx7KjLXbxjr1BLccsaSnLTe6UAe4BzRAxCKSFSqmSpEuDGc2Z88pXRXA3C56Xec6GBcFCi",
  "key10": "3kUS6xUuwGkEhE7cZb4qxRmoaCEGwwwp2b1m7LsGF7BuWH3uBYc6cCp7sZA6seG38hnafHXG59XCVMK4DFSx3qFL",
  "key11": "5AhsexAS5ekX7cc7MENPgze4NYSnw4XXmfLJjpiEvd9RfFzv5gxtBdeQpSe4yV7yuqdRwQXtxTiD4FL1P6DbP2yB",
  "key12": "4FGNqFMQfQRi1sNbdQjrpR2BBnbs9vxhNsQzffZmfW98nn9ghC8kiLpF4SAADisKfsxsAc3xJqfEgGzV7zxtJkfP",
  "key13": "3F5gMkLq85NACsWpVEizwcaxBzUPshkmX6Tdne5LnCf5NPc2RKSaw2X5BUvMfunZPZnaUND9dH4L94zqo9it4uRE",
  "key14": "oiZSfsZVfYGTtqhggdWtK6aVkJD12p5a4AuceyFvNKAHAB6mWDHWzm9xPuR4hYBjAHpUVkt9X5L49zwM2Yju716",
  "key15": "3N5F7CyUD6i1pD4YHdRi5NuibGpT5u8ViWPUzggW2CPcQFaFcSsRYU9rmXqL7WSaQW13NTYaVLxeeVH6xvqhL7aX",
  "key16": "2hBVqv3Hmw49qCgUhmxY72S2ez3ocDCXAjGYYrPwiWg3mi7KunFWVgX7anXaNHcQXhgS9gqw4zE5kmgftFvEXnjF",
  "key17": "34CSzkhbyxZ7SrDupa16VUtq1ZDRSrnSUA3X9cnuCpazUEnywum9cobMMppzZNSBpr89o2DPxiLLSZE5Vjz1H3um",
  "key18": "L1YGuLgv9HoJfiXAg29SR1xtya61FuA6BwJTvwQ8af7QjrFCZULWNxmM2tdTrCKminTkabbs2BHLwi7CenHibqL",
  "key19": "4Dz1ZNGLENDPRkLUBZMj82c2cnwUKdu9cYANkB2gkbREFgiSYezBLwN1eMsAxRZASkvePbfTDVzExAKZX7haYMty",
  "key20": "4YEmyYEarBhjuvDJadEGwh9EKWCiFDcdVwHA9Q1wnuaA2363ZjyeYaJLM5rSft4tZ7M1eJM5p4dkAvZaKtSteEwm",
  "key21": "HxRacBbw5nMKGjYMBgC9LQmSeSU6HpQcksF7fha22xXnyzBpqpQsA8v8APGj6g7j5y8a5oQFeySPP9iVkJWs6BY",
  "key22": "2SjBh6pbfzDJMCMdVavmresWnbLe3JxTHxemFDYWXie7jX2Q8sBU798aCyK5JHCosgXrBAvBED7QSFG9xxdEesuT",
  "key23": "65L8tDQJkBEsbZ9ujrHQiWYGTf5UUGh3n3htrhj1CvUbDUhmA2vBbbWYUUet65kjRKcTuigrm3uaHWawrCVbp7Hw",
  "key24": "4FptPKSvdci8vFw4ws1SEDQwvNjhqwSqhZ8EPkViUucnjJvbgKCrERxZp8rtw9NSyYyU1WmSdWbsSv9q4aV4o4HW",
  "key25": "5iHatM9ArEbbbHQUkV9HLcpFzi5ts4w8YZ6KLKSTFccedNwJkXtcWVr84DoeoQUzVsJqyg85LWUMNGK6eDz8B5dq",
  "key26": "4WrpZhez4UTrBRtgjiYz3osjLJ85AzpSeMsZ4N4aegpgGokKnY7FvoXq3CsthfzSQkAacszxvxyUViujLh9rZxuw",
  "key27": "AfTc55wiwBb6NWyYZ1PK6sL7dJj57QqAQG7LftmWifHAytbGgxmvoU4XybFu1UG1GPBQnABZzycmgFdFAStu5cR",
  "key28": "3Q37bvF279TP3ArUMzZVuwVe3TL9fQPGwmeF7km9PTwxxgERP44qktTHr8Ro4dJcXFxB4nhDarFaCRQT9YUMh8Lt",
  "key29": "57KABaPt6X278Eo9vT9eUSFjKU6S8aQJWWFNqPQnFj5H7fuEHeFSp4hoSNVPk8TJ2yhTEjhcsKB5XKGYrt23wQ8T",
  "key30": "2rieBYh7BxPoHxb1deCAoseCrYhsMN6Uw7xtYLN2XL8sWZcqKo3wk4s9bPSJcMGXaYJZviNeVLKDDhongYSzywaH",
  "key31": "392F2CqJMq4kBJ8K5GhUtjdm9vJEsjyDCwmHqn8dskxAYk9r7KETQttPbinYrAAuYxfWpMQ5MRJBpMLPs6g9Fpxp",
  "key32": "4WPVHwo8M7UekjdHriKEEa7ioqcfk1sP3DndbCFp43DKpCqqgTS5DZxS9djehNMQZER57fWYNZS2kHnrjrixFyeb",
  "key33": "3ao94TJjF1NyscrCw62F8NpSNX3D4WxzGX3uU6qCkmhRHvaLpBdkXchmqPRwoLmAriZAfjv1ffxNmAr54MStfXu",
  "key34": "5R5HsEnLJsPUtHyHZDpPJ1vStaMzy12dDprvR1nPE4eVt2ph1MHvfGWFvTkCRh9eDXkzYbUo4XtaYm7UPnGWkhzF",
  "key35": "59Y6JFp1BUKgbc5PN3WTmUQYyGwZ59h6A15bAeTd9vZugRuNnn4Qtv4nJ4f4DakaB8SFShNcERYkukFrdEZqrp63",
  "key36": "3jdzvPffTHmLwtX6ttSvaEPrHUuEaWpj9ncDceved6bAt1GUtWEoJB4UCkKbTEXY4CfGKnwXKNztanPhG7mjQVPB",
  "key37": "5AUkt7X3pDofsUon63tfwEthq8GHNW9zMXreLPmcoNoGFZC35hNgAaUCECgTs3NyoQ5xRRYW9AJHKRmbZS1UTK5z",
  "key38": "2tzjYjwef5oBWr4n7g6gdZcaQbVRAKDwUykjCSnoDQT3gxnVtitKSbVcxvEXM8TqTMiB859caUTbGNiCmuWTGecc"
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
