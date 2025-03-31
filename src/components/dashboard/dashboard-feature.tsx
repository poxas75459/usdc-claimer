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
    "5ihyqQ45qrUXT7tQGbPxixee9opE8XV4drHAShcxAXLq1jr2EFc7MH3TxNf7KDQ56rWioXACd7u4wyyytsuPFxMW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "695p9BfegGDkYsw5yfpUU3R98GW3iTRKG8KEJcBSYcVAb6ixWfsg3m9iZ7Wjj9jUXqCqCUikBxRqtfvmaitac7p",
  "key1": "eQeEVxZRBCeJ3em8VfnXKCRGnXqL3iHb5q9ppvrT1uyskC9YDcRo2kfHdNV5a4cJXGDiD5uRLVD3QeUBMex3Mvj",
  "key2": "3r8Zcy2ByUSRMWhVtRqvA6aQnBayBmQ5anWRVx1ed5RtDs7bgZScJURyL7HHYKQbqjD9H8z3g1qNPtVx7DC8Tmr6",
  "key3": "22vKHrE1xm7NzGQyqjCmEz2iq3CokuAxRdSBYPu8H6ZMFz5fQXBeSF9Tpa6GyF3721UK95jrwUkr2LPPRguFRAGD",
  "key4": "55MPqXiM7HdbemQRE4q2ck57hkMNAYNPCUJ9gyYZJmrEiACcyWkVsFVzuFTevHPUtXzUNVSqMYhCkgdtsBwBqZ8P",
  "key5": "2GQSr6ov5NQZtPjtwkzbQepfX2xvo9GhtQkPFvBsbahDQaR2R15TfnzCwQaNTR64xdQmWadmeruS54CcPp3kRqyV",
  "key6": "4jKLrgqShXN8gh9EZoADcHEjfkkGbFA4xEGyz7fmYSrLbAEkkGkPijQy4xJeuTJVMJ12AaVdRisi6Zk6wpW26RYW",
  "key7": "5kttuNjz6NKPciiMeLUPuXPaJMsFmFA1rRAv6yKrsN3z9uqJZTPSYoixr9by2LSxxJ3mRmELsNiffbCuKz2u8RjU",
  "key8": "3ivc2WL7TtmycLDvTdwv2K5YTfJ6RUYZyJg64oQbJR9a3xMwMtG5S1gg38cEf2JFSvULXcP6vutNCe3URNsFrg1c",
  "key9": "3sYuXyEPCX2rD7fc44PsbYxDTkYQB6ehQFjb6cWVPLWGu9ddd6Ziip17cGPLs11G5pSBxLiM3dpGE94h7yRptAF9",
  "key10": "4zAj5z75k23uqAdxAc5iDpcsDLCgk7AvkGBTZLZYtm4M3jqzQUHJxRQyYQ8xS1B6asxLB46CFLLPAxP5JPRBZwhe",
  "key11": "4R7Zbd735Xdkk2nAqaCWNpJRZiHA5Lyce57fqVibdYEje546k1Fisxvc8JWdH8HeH1qBuYU1bkh3qLwv7Jsj4o7a",
  "key12": "61HHoJbeBjg3KAu5LCUxziJ6mXnE9Q1MrDkzuTKoLXU4Q3wBkJ8Gyayf2f6QUyBXChUFytMW1vLHwHLYYb18aZoP",
  "key13": "5ac7GZyn9C5eoC95oeikkomfvN6DZoLDRAMyNhE4ssYwBBwe73BdkaKQHJKjVSXrtD86kdxL8VDxCJ6Ef6VNonQ",
  "key14": "28otJLSKWP6mZqPgHPii4SmoEF4Y3pfhWFR6qQThLjR8XtUDTszPKEQrxwxwxsiZV8xM3VgQ9Hz3homd93o5k1cQ",
  "key15": "4gZkxaCgksQX8GXwnbtf5D3dU7J2VukG8w2bjgDSyqEvAjFecybL8ycTzzNpcqAvUwiRsyu2NGYHE2EKr6oUukKH",
  "key16": "2PCArNe79G87fNnvkZANTZAhYNvhTYxUoo71PavvMxMjgowkfSaTbYM6tWtgS2k9RXM5aVhKfvXeRfJFkbKApKxp",
  "key17": "h4swmeU3f5oYh7kuZnt6Kpfs5qKkLH2ouXN3PUDURC3Sf7YNpY1hhBHMudZuPcXdL3aGKkGgtqP7Q5VCcK6WD6z",
  "key18": "22vANgRjP6XMS43VLckuDTtLB9oGsmsSDL9wNRBcw4JT1XrKuo3jmkPJYxibT1CoUFCzRrnUYJA2EKnnFZC9dWJ9",
  "key19": "4xmVTZYLYxWQdXCEfnBoWV5wAfiUpq9E6XxKhjuz6y1rsTzbMp97BpToeriv526azTCciLGoQn7uXezDBhL1KUkg",
  "key20": "zx2ByZgtkxnt4MHvntD5pxWVwcvoUGFVmuNxdr2RsbXCSvsZHhXtLo3NTaynaZ95XsYC1uoShaexA1UAKpqWRQr",
  "key21": "2jSggQWTSpHjVnKgFBrzeM7XuB6scefUgtTzcs8zVFo1bj2DSLtHzJQDJohAKuc3V4ytx9QrhYe3LipstBfJciL3",
  "key22": "5JhjhnvzcLFE32U1t2R2rKfCECczoYFHjA5G2MzroRShWnydbu6nqWpY5Tv1zuuZmY2wyskwrE27XvnWeARNr8Vo",
  "key23": "4vBSsujG5tkwLceLekLUezCMnHnRg8KbuXbfhtMn7TUV3b8aoggs4rAaEYzNvvm7NyadKpt9KEzbfVqJJJvq6pUG",
  "key24": "4RZNa8KC8BbvHnSsFVuiP2KhXkueJVKqpCDQuP33YkTXXqa4WScT6M1tGdS7ziq7TPTc4Ton3AsT8m3T5ApjSchz",
  "key25": "aCFDKpAZEczKuNy4Y63NrKVrfhZTAFxnyV4HpWZmaLzBs9HTwWN4nPbq6Edzn9KaMvjVtimL7w9rRFvjZaz1fUh",
  "key26": "4XSTPsLys5Cn6tG3s1zbd3wn9rQMW3EJd7tf37b6WTs4kM22S7vZSEzZUugucg2gFRJHGj8ZgfdDRGmfHmtDjXgh",
  "key27": "3uTsZJSkhRRigcHSmKGGtwhin8yEUxjPyyvEhYoR5D7ayo9s2AfADnckMCQbsmG19DrJLKvYY6oPcjnhK28gSHa6",
  "key28": "3nGVLcaKNoZGfFNP4w4PyP1AqqWrPeYBLXUUQDAsXPieCuu17pRDywF1UtPGNE2RtBE7nTVUbDrQuwtamDXsdFNa",
  "key29": "5uy7sq3YFMoe4yWcgd94J6c9QDBmLu649NZ7sQ1p7fdv97A7uckERbT6KxcqtvqDLyFUjsRFUVuhgvtaULAgvHyx",
  "key30": "BF4aEzSrH9QYhjt827FpSYLottBi7v3nNH1Ze1A9cXoN77WtbLK4tQTDY2yCqaKDLSBhUQq98QZNmALHFJNjeFN",
  "key31": "27dKpbkJcFF5nkoSmnnUENcmGdThkpAgRd6NahDQvZ2R4fk2AKFbqsJid9uCk5kWtBrJY1528xAypiuyxD27xL6W",
  "key32": "2Mrct5V8Q7tieYpk6MsjCtjbDkimRP39XRdJ7idqoGhwcdZxEug8KqiVZkaSG84zRiJViZ3ZSDiQhWKiaNRYXUcP",
  "key33": "5cGkwvkC1FfQYjAwBYyzPxG8xLKXggGJpMjuG3EX8K45jC5x4XfXYySpGbzdmtvacnpGRfEePQMZRSrPgeJ7HU2X",
  "key34": "3iDQZ8SV7xifyC5WXrf57JC3XvgUKY8Sx5Y4tY2zWC9NRf6bGu2kjA9McvW5AjrUH2PFNj42CdQfEqdTyUtoBWeC",
  "key35": "5pF84LrWoiu2Fq1duSGSqghw6aepQqeTp8c7HEwuHgdDJs1mw6D5M3Zz8YGUMVLUxJP3Sv5bEUcsDyJfjcVnMm7f",
  "key36": "S47vxNREz2pfj65V1XaA9Ne1LXdvACS7m6BxD3CrqX4g8qa3AJqkvMrwFk96fBRyPGoN2gMaeK8jeWkxdmRue4d",
  "key37": "5nMNWqxiSQhMfP1TGeZb1pDSUPTPWeeqJSuFxE6LcstjujjJN5hkBLuDwQGDQXJuZwDbR6Yejo8sVZV41VL5HZD7",
  "key38": "3kT28zTU3cxTuaoeoB2CKP8i5JtcJST8Dz6UJnRDKQyNayL1qmZ32MmmdmXATrZdfJNg7xazuPFZNsZq4fnmNwKH"
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
