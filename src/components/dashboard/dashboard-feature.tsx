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
    "5YFoTvQabSTSogc3CTiW2xbSzxRreQgsra7syaMySyrbQXhn9prRm7xmdnoi27vFhNTFpP1e2U7qpv1PRCR2HsgW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wp8iakJ9uiFnTHjUmJXiPWZJgmpd7DoNiKY8V5wFFZo77oLwaAtZtYeqaYkphN7TnqgeHkA3rrgEdBmDwgU8Nuu",
  "key1": "61cZRPa5j6YWhZzLXumdPMQXFCd4FYhCKt8pVvUAMpWJ9tnJqnsHzxcoC2T9tnmRbnPd3wyT2CLT9qfKpxXCDnzk",
  "key2": "3hvJGafChPPTTXdXc437E4oUc6UTaTuDp9AkY1sHphGaogT93KypqqYFDzHFy1MzNBdAioCe4ffJoVBtLTw88DYp",
  "key3": "6qVc64o4EPY8JJfFFisbEYPZZUxajb1NPjX8fGFbExEacDsRSfS5BoraaF8ND7dHhZxpDcEeqTcTbst18VyNGYd",
  "key4": "4daubbmW7hWNrxFpm2EskPcrY134q6pHS4xH7fmZnVqj2wPmrPVDhW1uaz2wcxafWDTw5yGb78bDGAdacFZ3r2oa",
  "key5": "2DqSFRqmR2Fpas593SamUoACHEyAppjhaTQbrScpZcfr42TvRca8t2Nbpup5rX6rK5A2vpWzRZTSzeDo7PkPsSnt",
  "key6": "3crAh4rUFihSmm8sgnCK4offJKasBuokDercqJTRPgQZ3FUkLkmcw49uphryA6zmiqz7Ygp8LGJv64qhKbDHYLGk",
  "key7": "4o3jg2NCa8QqAg3KA7bJtaWhn3jWZSuZ6nFAmvDFiy2WnrUkkGj8yfBsqwEFVPPkaTDgFcG8QDgceGmojaUjgMJd",
  "key8": "5m5CeQW3JNmDkBYz9QKVwrXJDLzesWqcxF6w8SNBrYCAnFydKhKXCAEJ1JJVkDEK3EqhM3okMYHPPfbLGs8ZN5Vh",
  "key9": "3cC9MFD1khpaUJwk6VXiWfT7vZcbXFtyoXzEsaxpEu8QMs9d4yZ5e3t2xQz6DapJjLW2LyBXGEyA9KSak7PM1dbV",
  "key10": "3wuW4N4tFCrVAFTNMExMRhmk2wNfMoTWZZp8rRCahgyWLpe3ZPX7ZABqtoeViRBgKhxEVzkF9S6nqysuhpVMQLrx",
  "key11": "4ukWP3jaYM9CwTbJt9c2Ku2RNpSeRe7ZFp3gnPiiGyRH4Sj7FrsQZ5fUeD7E29N152ZQqnbsQ2ZspXzfUKYu6GJy",
  "key12": "2wB1jyhHcejastkqCwhitKZaqQbQfmaKuvnRzYPUgYvDFhTr29dUcpEoW2USwuoChnLvjn5LDJTFdoEDvtvh6cwq",
  "key13": "55BxZBV77U7Bv9Dgb4uufc5i3pzQAcdw1oMafBY4XECy6K6b8s4UdPzTwGtKG66GkbVFXtDTwswHA84UnjesAkMe",
  "key14": "4ruCcB3WHRYVvtp43uuCW6ziaBACECiyLGa8tPax8H17A5KogFtdvEXsmQLd4Vc2ZAaUNYP2ej4oS81EPoDw5QKU",
  "key15": "42hW8wkqh4gZxKcMwsrcwvKHuccJFyb4wZBHTeLDLY3oK3aL3ArCpeYabz79fr4F1stgSCkDSNcJ2P41HFUARJnu",
  "key16": "2EG3g3ngC95QSoKMDuNzyoyYnW5bMvyUgTpDaKh5oJwQsrLs8jjpP5bFd3ky519MaFNzLuGfYiqHnkw7FhT5RUTm",
  "key17": "2Sisu529Ejc5dd9NLvUt5eyG7uLg91dafyyBfGeXMBSj4SCfb6LpPn74W1QKGL2CdwZjzUpZgB6QkvYrXb2618Xu",
  "key18": "4TbQXWrNGDBSYS4YueATJbS7qF8sgdA28VfmknBus2bxwSkpNPZa28uWSEShB4wpZtjAEpRJdmfxQ7mgxSD8VWSW",
  "key19": "3GmEH7bJ4w9pPLu3z4DEruNFWHEYVCVyrj5uWXzFvtdQ963Bfzqsr5hdUCSaXVWEwzmmwhcAJJisCHM5w4HLo8r1",
  "key20": "22NJ1ParXvQXo1rUYspoWsdCbBHxewYYnVnC9yL1UXga3HSBC1WN3xqJ5KoWkGqY11PtcxZ1u1eEQxbmT3zwHi6F",
  "key21": "4iM36unCxVAP8wim1esXkbWncJJNzXRiLKNgXpS7sCo4BitR2UGXiyCiCQ1opHM9wG942ri7VEBhMjP6VfWtRgVD",
  "key22": "o7Ut5jZzeuNKBxjMUwothewJMceHmZ2nRrJyCjixM2qjkSBLZmKySmG6jxZouRs8dx31TZBpEcxK469AoA1wGUx",
  "key23": "2J8tmyKUTu3JfmYxha8dc3wsTrhHwj3KYQQdFoYcQcFMUypQReJAR9ch1C8AzQPXupN6ezx8KUwLnwGDdm9BmDgW",
  "key24": "4kax4boadYrXmpXRh5XtfB9vnc69V13TC6ZnBdp8gBoADbN6DrwoNJxuFS89jsjiQbkkvMPmffEZUV6dStccobdZ",
  "key25": "667QsNJLaG5WoFNsPjkawhSvhPpRRNv3cQH1VUvcvm6CQpJGbHHR5B8zbczqV7hakWEFe5eFHUWPRzN1rgYFUeHP",
  "key26": "3ohQfsB1qmR7ZGbSGZn7FAvs1BXmWTvAi7NLaiVBhb7gRpdMEqaY9nhnuYR25dGVT9GsX2QsQU1wf4WwKvyr7yG6",
  "key27": "4S1qL23ZXXdyv27Zod2h1XgpxiW8S7CfBbb14LTbCAeJYBVMCbewXUSrghPyvtvgXiSRMa88iZX7Qz8Me5JKpbAB",
  "key28": "5GQZRhxMXdwcJb7dq7sp9p8K3Zoo9geUkKyi16kfL6DKenbfCY5wk4yY3m6ZBzUJPxZQ3P2GaMe6CktEYW8dBQFC",
  "key29": "3jGFodsYaMb7U92Z1LtriWVKXqckttPYSWriSxVoA2tfk5413z7mckXLWkvdqEgd6KLfzjssJfTsBAUUXo1GXUPF",
  "key30": "5GpBq56FC6ncCfNZ5D8gozYLd9v6MhdMP8T8KgxvZNuMfN4xd7sk9i6y3vy32n9WqbtceneSVJ4bNFTYUYyMa3jo",
  "key31": "39M16QyyWRHeC5hYn3ZXVxcVdJEdyiXv2EJNojg6ERHn7c7b1e46zjG4mXCAUA3W6enNkDFxC5kSqymgaxavEndd"
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
