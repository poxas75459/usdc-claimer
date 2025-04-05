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
    "3NoxJSsJYzueHh6wwGDDGpZjh1KdiHigZvbHHQfiBaxiKddL2EkF64pHZKYxgUnDGzLkyeYRf1xA2aMjtB8tvpMA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o1uesN3ZvTW2bA6dVcrQuNcDi91i9HaShawiq5baegVHq8f3SDGghBphhqajcj1iwFsFsqBwg1yG2nEJMvCC8Yz",
  "key1": "4HNA1w4hpKo62H3fJJ6XYPHdZ161YnRF3Sk3C7mpFwJ2XFwG3d6e8cL4Lx1rPtdqo6kqYXwLurvpraeJ2syWk8Fs",
  "key2": "5cdkDpFGmk4LMnj1u1m8RLtH8vfFZtU8QkZAs6U3i6D7sDYoKaCEiHfboKq2F4ntSMjgW6KQbfTP2GijUjTs2vWX",
  "key3": "3zsuAnbErzNRPPkwqkhQgmK2Nughk86c3yQjg1Z3hE5nNJJnqVpeY8vkFh2pbhG8ZrNJ6RTTVE8vt3TJG2oVZdWG",
  "key4": "3GGuS5K1u8Yhj9wu4q35uyXBNggpWYETBonsvz8vrgvnQzkYUNuZS262bb3ckVZRXkZTAANtUsNTXUqNG7sQenPt",
  "key5": "2QrRwpjcitPaTcvndMSz6qJ9ZjZw1mVE7oCMUEBCrGFNtPzkPHU8zttKPaYs7yN6Z4ju6jof4znjAqgn9hfxKHrL",
  "key6": "2BnEuj2g2HFyATAyYWpCJW6h6rvDxsBgHpu44EeKCqDL6of4jvaXhVaHLqQAkVyTZ4Usmn6yRd5ZHbGN2RYfGfTi",
  "key7": "2EDrGnWdg2WVM6b19AWoTdWUxYRVaEZTrYkZLG8S5T5sJ43Fw1CwW34ZT5sQ8XQwwFjhmidwwCd4CrgFTHmk6dVm",
  "key8": "3udrh69mynMPeiA7V8RDuyJH8E5C5UgwRqdwPX9qPfPsk6dvKpqiWTNvTsxUQi5imouRzAKNDhGYXQqWjNLYzTy5",
  "key9": "3idXTh4tTkN11XoFmygWikMFZKyPkqeZmMyrwm6GbfotiPZeijA1NEyyYVzkB7HjaxpR34QfifdZJdpbaDe2NccA",
  "key10": "25dg4ioNkL7aTVyDdCVyJV8tdVU96JNDuokZqqvY7nUeuV9ADdQ78dNremCvM9TLyVQrCVfmmVks4DiZZP5GasGL",
  "key11": "2TDQHTY2imxdZj4PnEHdPAy2S85QZXhPxFR1ivXxmRX4M64vMxWtVJk74vQ754hSUm7PRrZTG7TFgEUsqGuGbngu",
  "key12": "8N5PBiUBnE5zgCsCsnYSac9UyPkyMKX8LgiZJko5AtK3HDdy1y5FxuvwxNRVrfXMPT9NZ63AuL8UXxdVAwPNdTV",
  "key13": "37LaDreEgxZ7zJG98RfSWo2Ab8uJ7wTWMHtJdhcegXfhacUhCSAeyBaZGEkufe42vy8kQwqi77n7h7GUgevzJXN8",
  "key14": "2amgZ2Rtk4EHa8yHxwS7bDoVonNuaUgs3YBzB1B1umSYw5hKWok8PKowJ3bySLB2r9KRTJ53XjfWrwUHwLcFE5Bd",
  "key15": "5vm2utTR6gEqQuHQCcakeULKzh8DVu8eRcLyDo2UWAWGa8TY6FiVtp2mC1TWndu5ugxQAqfR14yNFYLa5PX3UipT",
  "key16": "48UKqDUAoZWMfMEEkJ162gu7qB4S351JzzRWDWXbgXxA6E3iJDYmdC7g6iAtcj6XVmr7nfvbbu52DJWdEvTPzmmS",
  "key17": "3169jY6AoXyo2QQBa4oEJATMWcUz2a3UjirmKy78nwVKdJQNnmbbteoRDuousghoC9keN3RZgjDaqbzRzu8CnFSt",
  "key18": "SamajyJgC19gSSuZprTAcGuNa2Au2LysxFmSpr6VGQJ4ACfveYdg1pEPAprCZxvsYwD6NRs8AjANdSom1gYkSNR",
  "key19": "5s5u8yDQM4H9eqPvXFpAbyD1uaxcrvvdLvbvBd6RyJfKmjfM2P7WZuXpYtRoKvh6vVuhavtTKWibNFsPSzXT98RE",
  "key20": "4QWpnMgeL3updbAuW2QPiTQ9igE9HnYbSAdq97zoDtyqTp2BXEFnNyBA3sMVHdTxT4ydmitNuh88HzaGFM4XrvYb",
  "key21": "2xydjfS9n8R37NGJAJez9fcooFBieU9pat4pn3xXeAL5Eh7w4D3FkLBoMjcsDs8ebAXPPrPxaWJ3MS4Qc3XyW12E",
  "key22": "5vovBYcQxLe6pCe6stg4Pwbf5ghLQgy9Ed6YF4A8reKDwW1uGzb7EhHPWsgxLFAUsA51vmy9PNBJE22BzCFMqB6T",
  "key23": "3TGA39nLkP9vKnCcBy2MPtktmkHE6X62cXSjDT6mizrLUDf55QHBJQaZq66LzRZxGtJUSqLuAyXMQwUgygrfTEDX",
  "key24": "m2Dfej5VBn5ot5qFme4aswMMrSvsYJ3j4eZnDngmEfb9xyN4aXPqWQ5aZe3bR7HHqPxiJRhsVAHBEsYKDrw1S7L",
  "key25": "QHSqWd5nVaSZ8o2GYJxqeUCwQZ7ENmQBRjeAkjZzv7L7JqbHiyiiuzLXuNuSgbrzxj6DEaoy9Z5U4fwySex44CZ",
  "key26": "CZEFJRYhh7Sn5Dkvowp7WjURit611ra97FFJLqUG4AFh2WpTW8BKiPFADN97D27tVsNj9r7YvDfBaTm9cqHHi3B",
  "key27": "3HvY1SV97DtWfZci7XoVTSWAdCvBXvDNJqHpZ3CUWCXejn6PuK1adwGwwwD35j2n3SDMChhNh8e9cmxEUZkFxXg3",
  "key28": "2z43KSTTCBrZJStiL31m1Fi7mrRkK1zh6afCrAB9o8t5PRmWfSmiYrt67LqGqqiUZ28LhF9JR96BKZu6WW57sXvq",
  "key29": "52P7G4wtXyXrgHrLsLB15moycd984ZMaLV2miWGnAhPih5qcKq4p9M5Xhm4CVCa8aKmdcLMX7qiRZN3qFS65qmdF",
  "key30": "24cgQvzXdYRN4YV4YFKhooCJGyvmYUoZAbsw4uWC3H8zGWjJdSC3pZKMo6o2kaqwPjabLESqsYbWzCzMLLqpVF9a",
  "key31": "DojZei8wQCBKJJoHNvRkia69mYtWyyrQ7mFzKKsfQS7bA9twBTaU3Y6fV9pwsroPoV7UUvzLx8rabyMqbYtu1Cz",
  "key32": "61s4CcFnwPAEq6qdKFGQn2ygnjMe5qMzgMAJa1Lrfs9toWvns7KfrE4H8XByqdLxdA6XexuMGWeoahT5bqbZdCvB",
  "key33": "qhvGXXTaHPvALyJ7Pj9itF1jaVaPrB8iC2H6qVqL7d8jShra4dJzthZFvwVTbRyKtiKFF9VR8r6Z2qvUAZzSRTf",
  "key34": "rUkXY8TKSioZuKwP3SJKQRxJ5vWUWvGBYMFCaE6S5osufQLhYAA89ZSEnAMmZDpJi5xX6covYTXDnwe8m9aUKXo"
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
