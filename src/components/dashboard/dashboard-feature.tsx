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
    "5DXmvGyASYkDbeP5vxWxM7F3wbgKp9xfQcfYcFNjTaUYQCAQiiJr8r4MDbWmtdDEUUAX26h5C2WZusP2ur9uVEJW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RtGeRBHFcYz2UtEBMGquSfmpKF8mJzKshftHdmoXEHWnUZFc64wHVkxEYuWQH832C6L33CUXuHencdrSzqnVx82",
  "key1": "33hQ1yDir2v3mFwRE3agYC3M6wqEqYBQXaDb8Be4qgNy2q5VezvBPHuD6tTYiNjeFh41ZJQTYPKHFDs2V4Sw1Tt2",
  "key2": "48jNQ3tJUNiYTMDMY4U8BbUsXeRQ7g8pzfMpa9gXSkBu6VnmagqLS4jqVYfTZ7QW9RaNyfnk86fXYMqD2bddsbou",
  "key3": "VaMAR52oH8QQ9T1NKYjm3zQ9GodczhVL14j3LTojStKDJo6aYkQvu57pjTRNJrDKMTkkdd23VdbVqMSSVkAmkg2",
  "key4": "2TGnVkwkDDdFB7HtgseaZn1G8b7cq8ucNPHb1pqCB89BZdaqMhn2sf4uGsyeze72EzGdfu5yj6CvU94r9mCm6KiC",
  "key5": "3JPwfQtXfTCrWGwEJ8Rig1GwT2NC4WwpwFYmEsmZNnkYXgyQAC48DqvMBUNepsMK3fqkzjVNSd8QNKZTLyx2KdR8",
  "key6": "4wLQbs89pA1CT7CeFd9ATyEjd2AtTKc8m2xRrePz7gYmWRjS6Dbd5UeKDBLqQLYhtj27ys2qxY9W5N24xZKGFdKm",
  "key7": "45SfQrYufJTMduFvj5z4sVx4yuQv53SdRhnYbHpDp7bhsEQ81kjfwAamyVNB6sR7LNwgChDGyatTc6nyptYT8Ahw",
  "key8": "nkw32MvvtfbCcjoDn9MeVR1MzhmxA3ETtVE9sphpQRxLGmGNctRAbYge88QsXbaB2NPej6nxcxUihwNxczPDKQA",
  "key9": "5AaLQvGWcQzwZPFsB8urDsCQWPfcNg1d8rcutrPWvj98bUchEY7MAjfkr2KupYuuB9TxvTADtTzJ6JqwwHyCUCJa",
  "key10": "4W6drDWSV4R6Kjedwh8oQvk8ydq76TwhU1qHUQfr99eqPxJwaTJmsYnPdCsPc1txXDuGbxQrEUMvDpdFJekWFPD5",
  "key11": "AJX6JtFPsm3fZ39eY4UJ5PsrGdFxQTQc9ngyEQ71pmuQ5eUBrhcgBSQNZG9RxqKEqspM4b8fg82V6uoF3oVStKz",
  "key12": "24a72jXyqYVRYXY3mqReeWNKhtuKqozEBNYSW4VJn78aUK2mBuMXYS5CCWoxTSwbkQPNGbjXB9uhEdpEK4YaLBtf",
  "key13": "5TP2C88WgMTMHTRzU5YGR46ihKfYJKwQ1Zx6aaRP3tzbecto3YdCwvis7BTC8AdkNNBRkDBb7qXfDGedRS2G9Pgb",
  "key14": "4fdkAR3KikxeeoDLrNbjWjaSm5zf8Xvi9Wk7nv2Rat7LnVoedb8wXAUYwACsmACWod68hsGF6bY6wVzJroAzWLr",
  "key15": "5WyuRan9kCMoW77ZxY3xFhZPEkHCc6DHQsB4ZF8N7MtsJsjteAS8PfqQ4K74k6yPbnRpjd8kfBGSdEayKULBMcf1",
  "key16": "4MD85h4wGaCMab6jwSg4NA9gNp1QMjLxQB42DyDHUi8ghjs2zjKqGUWa2BiA6uq4BKnx7gS8MBBUJJ8sWfDddaRi",
  "key17": "4E8WxsEynNCuHJEyrgB8m66UbRuZ9C6B3MeP1pr8GHE4wzUuE7LdBAk7bWHTssptuzmk8ezxaBhzM7shB3RKE8yo",
  "key18": "4paPFRLu8pvpwBRJT9Y7MAh1mC4RWUJYhjbgXotwekG7Gep2jJsKLTuxr6uTEWicKTKkobyqQMRuYUqBRADQRnHD",
  "key19": "wJ24pp4Kfu5iQdTCke4mYdHAm2n5V1YEyhbqjihbw2z1bfERpMvkoyHcjbi3sRUbawC1RtFWwk8CmKTZ3AuaYmZ",
  "key20": "6ZgupjPhNoZ6tgw2V9ahfPVTQrwRL45zAR1Zj3R3ZYGLKyDUdtavQcxA4AY7TuvHhQeDK2Ba4jeQqNKo6M4tqiY",
  "key21": "3kMa2oAz9eiYdjSmmPSkjJM1mDyfGUWTnHviLWkLGUoUo6XxmomYq1emzpJdJjJnJoy6qqQiqdX3iFSG5y2vE5XS",
  "key22": "qgWbs3Xs12Zr2kS6gW4UMAiNnzp9u2VvSrSPxZSR5kyhWkpY17ZZK76tYSBpo4t1gjYoWcTrK4iVQW418WZauzS",
  "key23": "Q7sPGx1ivckpWREnVPv9pyXA7hRk9pT5fUdjZ1GGD1ttNC6DvrB2U4vLVRxRTykdy86ZFg29y5DNEi7JDwo9aJ7",
  "key24": "F4h7xcTYMT8UEo1TSkWaXkUPn453mVbEJY83dF9TT3nvTnvBaCvAGQ6f8A8Su7yiQFTMR6iEnaUkJR24uUFE9mC",
  "key25": "5mkkV5bUBqTL3uqPEu9u5KfJm8kxhUb7QS6PfaFQg2Npdv8rE9JnSpnDyAm8bPBUdkJ7AFA4urNRySnYh4YV9odP",
  "key26": "2PeLjmARXdk1Ldn8sHaaPqUEWJ76W1x2wx9uuCjeCBTP8rPfYcPLzNYzmt77EuoVmX5jKyh8z1dHF8PrNCBxAAR7",
  "key27": "5ZbmXqn2qnDbAp4GFUPHckHfMEHWmwgpJUjvxeqTqn5kfgPHS2rWPedznj5nZC65xFiGymqu4vBTomVocSbRdmmn",
  "key28": "4fmGyAzmSzRd1CPhRkfXKBgn4UxYM38bLf7MHiJeTLzVP2mEXPrUaudpkUz1Jr2sFSMZ63RTdMKCfP4oSygPYz5F",
  "key29": "3UkfR8iCVoEqtSmLzJiy3VRPiYQQZFSNC27zGNBKJsi759Wyfc7UJjRkBxQT6mJG3tZpxKqX6XkbR29HYhyq2ga3",
  "key30": "5HS8ymY2bLucPMrenRoUJxHhzJPMCpJSpfdwPTs1Xotb6BrC8xf7GTH72PBT9ZUmwA9PEJXq57EP8QvXCqqsBsfP",
  "key31": "5tmQkb64h4uWhnduRMMK9rpGhrunCwbiN2KaM8jDXgJ2kdrpHm2W5cPEcvJqRBSgqREBVFPSSftCkartFXEeevQN",
  "key32": "eLozsaPjiYCp3Tfh2DVYeJzFL1L9TaVMb2pEcC342cTZNo9uHZGzYKyt61dYEcyzjAMFJN4KLGPJA3rRnxD7qy3",
  "key33": "r7xJ3QYkiAT558oebnEfUoFYJA8SAGuNVGPoko3SjNaU9mrpHu73xEME3zuaDsvRcByh3414mMhdGH58RTY6VbZ",
  "key34": "5hBb6C7tqkwDDCHYjChrjtbhLX8mDVEaWGPTmoNJhYotciHRXpmNr6BTVfjHdcAUmvNfvAegVjEDhx6TSAU15quu",
  "key35": "36sn3LyrWaYDfe9PCZZTJZ6guJ3dvw7geqwnTtiESa75aA88BSRLmY6js6WdukAhYoDztpAq3KkV9F9r87nJr8HM",
  "key36": "3qHboSPSuWvnixuruCjo6e9KaA4taYktxwMcTiXR6yKhfVnMzK4ay2bh9vm3x8KjgjYRwNWZT5DNUskLsRZjaHig",
  "key37": "5mNZsT4mDDCDzh3VexpEsAyFcPgEfy2jBf6dq5UqFR93vsZ9YWo2FN2JPTbaYMH3ysBJ623226RkSz9jVwzfXBsu",
  "key38": "5vuav36wHCFKLNuZa6SoUGfQFJayyMjFDQ6p2AuNLfNjGWUrVVHWkRF9PHqgXwZCqX3vRAXsmE9JabJjpeGPKGwB",
  "key39": "4cxB3sV6yvJqbWnqWMfPDqA3SoTonxvpNEEa2mQABH6asUv9a7zhyBspz1e4ZPJ7eotiWeWkYX2KY5XNPg8NYqVe",
  "key40": "wPPBqLtZ4xQ6XSFzJ7SjGoyesZzQ1dNbrrcG7C1PdYhQhRjp6Uku5gUUyDAsxywTdCXqTZMieeUDbqjZXVCsKTv",
  "key41": "YCJavfz7kMMk4rQHDqghzJsN3BWAaKs4kVxJHcFQS7ExgSxsv3cive9m7iGgEajhwUcsv5oM8XDB9uxTK8NE6mU"
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
