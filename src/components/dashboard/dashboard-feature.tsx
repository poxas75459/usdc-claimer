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
    "5PnuvhGkfPfBN7HvQBZPfgsebUA63JUJMvMMHZYfHLiPKrYQU3a1z9sRyQMVATLo64NuEZmjGdUnkdDCuWLDbmHA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JUrWVfjBpHCqzAN5wR7kF7aaiuxt5c1oMoYDoYQ8rbnz4U8N4hS6UXNBWdoW97NjeTXGt8MLDZd7vg1fVHUxjhB",
  "key1": "Kc8rxHaWfdTSjuwtGibJdQY2meFZ8DbeDuWh8ojqn6yP41C7CKFPs5RNaJYv5D8FJEJUPsR2t9ruLPrC6yr3VMG",
  "key2": "45U9cGARApcHfGrf9EJQdiK7bP2SWZgBZ5rzJ7LEqXcTmiYFG1vJCWe53eDVkRki1WTJ16ULpGfX9ZwbdYcQWxGQ",
  "key3": "q1JKZbMNKmZDk8TjfNxjXVMYmZU3hhkLfuX2YEuC4Ht38nT12WviEUmzhC2LtHkijfopx4duQd9E9AQT4vqfJq9",
  "key4": "21UQQNR6Y8EwQxdFf5qg7BAVgZEgGTe3ZzcajcJGKeuMkC6W1grbqqR6Lq3hEpiJsmVRnMLPEXGt5XiaBdyG7ADh",
  "key5": "Y6UAhBmRhveqRyzMoiFKQW2VP5TH441vcogG3fCoJLhEMdZjWydpT9XsJM666mMdgwUNhcrR1B5x1wYbYbdE5KY",
  "key6": "26fUzfghQLqY5zYdDBKp7dSNgXWmMBnFyUUNgvyk8DfKN6ZgV1fQ2YA32skaQa3jXzuaRwZ4VMEPXSGW4fZbV5U9",
  "key7": "24TfjtsQYvHa6Y8Hwmeq8qA4VN3yYT1rvvzpu2gC47RhEw3fukeNrJJ2GF38AxSArthVzi4quqHBzpJM2xLcppWF",
  "key8": "2Q2J56kmDSe1m2DLJ8HFzwNaRDdE8gjiCTcxfSUTZWZw9jfxqCQE7yuzknh1U9RvsjPkRFfyrcbRfx9CDHGnJ9So",
  "key9": "3mQRDPRfRPDV9F2cX4y1qjdhpjTP2ZHZxfvjJGpseVbUjGmhJh9Zoct6PZirCtpsM2GsvX7XpDg6wjgAF6D7kXck",
  "key10": "2gWbamZSN9txfWAeEgg9v2drhKCwxXBnREF34qxFXFg5t6hV3u9kgzi72p3e6a3oZSRvJe4FwM42kjnQCqmEiVLN",
  "key11": "3JiFav4Mbh8DqTEkQvjKAMFGpLXGDpFXkuCgvwm9gWf2wjQmx1TuwJb9qE43fHkB49mgE1uC95zby4fPtichEdEb",
  "key12": "2yrEZ8wjrm8URFRDfpS15sP6bodqnjZrioRu8y28dv9cczJ5voLCF9W9HdEhqT3HkhW3jzQ6xcGPXTB19PTPH94e",
  "key13": "XKXHiH1GXSrhMyCho1dKMS9cvuaLheuXDaXxuuv83XYeXc11P4vU5VdCMARfiaevWgNas4zzMBJZapiDW6tM6gG",
  "key14": "aUvoEbHfCG96gJRpnpBkiWfm9TomXc9dRgJ9cy5eQFRaqixpTpDndNGcQ5PYcT5feVgfQkwKjWdU8xixT2RB7nW",
  "key15": "4Tw6yDggKtfyh1yXheTSqacgSYdL8THqdumKmACMPT8mT6mR8r8zrEZpguJ7JktNRZsZoLZWSQTtm8SVKfMV2bui",
  "key16": "3miDpCtCL3JacyaecRprKF9rfvye2mzuoaRc2eUNUijxeXhVye9ty11nrpqf945WDCwDyWwpxh15Fjp1DX4cLtot",
  "key17": "MWokf6c7ykTUEaoU5kxFQhGpc9t3JB7y3vrdmCPXX6s2WZ3sBugZ8MQp4C34xAJny4Q1mCSKsTvBqkPefmBpToR",
  "key18": "3dDQkPQkEZZSSRpgM11HFDnmiwpWrUZdz11GhD3D3NdSYRN3qJXMegAtPjAFt5QarGjBYQXDfGUWZxjMVFdM13Qe",
  "key19": "4ARcrkvfCXZ8ojYzxC9F1wnugeqTpJnqfmieZCErmXhyH8pum7tdduFHa687qGtQRTJYZGKmSJu29KXSiHyRscc8",
  "key20": "36KGTz7pQkBMXQukDDnTVnHG1Tn8R1DFnuDjib9nPNKZipkxL2ZqRpSjWwXvwpAuH38MsGj3ppPNH4CDj5TdTiq",
  "key21": "3N6wiAdkaax9exohqVJ6x8sBqjG5iBz331PuEC3HFenGEEMBXPJNhgwcANGG8yPJLZuQs3rysMC6iA7gbbNVvJDc",
  "key22": "2FD2NGuv2fhvzDt3ZYDD9XWsggmLWwFvVptt1zckUW9w4WCCV3yeF6Tgutm9myo8Y5LyGyFFtaTFJH8Z3ybiwZaY",
  "key23": "4Ui3Mf9tc2azqYjijts4rqow9sXXhpt8ktHk1W7td3GqFRDkZxmDG8hAxM9k2yZ4pGBRh1uzfkRwBsChSbLqnAii",
  "key24": "2fNyDQCMuzEMJX9uegyBmUpsDM1M5FgAicYV3qUtb6TxpTDw7NjTYao1p45MgRnY2qH95pV6Xcgr5SdP6D79Fnv7",
  "key25": "5SzGR2ihyEdDjKJZvmCTahNT2MQmjQ8EzanjgxC1RGAhWXdi1o3hdKhB21mLxMZ9ggSqS8mdw6Ly92xVV19RQHBK",
  "key26": "5uesHVwzpAMMgSDCpvWQqCXkHCo4uBpR4MyqQFyQn8JHyj4x5UQLc7QKV9bz28w5fboiGKfzzsTA392qyCQiuz9R",
  "key27": "4zgmn7RDLWyRbKpBWYEwqSJzvUKBxa2w8NXmuJf2xrSgqF4mTSQsKz14vvH7C2QVwAKH1BAffyVJscA5azroHRHZ",
  "key28": "2uKnHoKp5dAFt1uzknCG5enH14oVDeaWiLMYpN3hLg6AmRDPnoeoVEnaHzc6Yy6jHmduz3yaLNfZ8vUd1kKMpmE9",
  "key29": "ysAQ3PyCi85M18r1y2WjW88aM518b2wmHU4ZWHQNQnxkZPPBC1w4TmDaZ5QjswvERfQ6TA4MVaAbvNRbQ7AAKeQ",
  "key30": "3321jPg7zSK8iPe2vUAFoA8s5nmrHhq1mwnymvtTtunusD8mqWNp6zpuHKvhKcjtMYjdNZtFnVFjrZgVHLejdjpa",
  "key31": "3LnjvS8cApbJCG6Z8CfQ2Eduam8iHNwjzK44YH2a8SQv7nWE3VTtNwdkQxXsdnZ9iWyE6hoowiah4eepdRKyRDuj",
  "key32": "4nTMaGt9cSgyRyHfXZRh4QjPEmZ4VrTBPo9PVhJ4Ys3WuypLt312SyKFFaLLp5ow9j7GUfGpS6iDfQbX1hLFQspB"
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
