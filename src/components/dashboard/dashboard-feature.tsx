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
    "3cfCzN6qR3cGVqhJAhXNoX5vF5FT49nC3tZGHtCykxA6NTsTqNC5iV2yJYadTCnNoZC3C1LDBLVcf9WSgmmMVKtT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sbdrSSkLbSYjfFFh4KECSRKPaWAgbcFjFktJr3zHCiZ8KD2wrwCnB15pEmpbzdfiHFjng3GzFEnWTCLNXe7TCj2",
  "key1": "3u45fCPjAdcCTPbMDWZoGEkvYyBrpmFtg5zLWB4R2vLdgmrs5EvH43i1ohWm4fnUmwQoFHMJ5Lxj3HTuTSrgBzPy",
  "key2": "48Dt4UsEbpXMYfRdkHdqULiAXYNGT3kMEapQXwC5yUVtTCDiax3gv8BqZyRozqbcurBtpopjJAWKJHKtCny1LwtN",
  "key3": "4rHm59wMoinnoBjoWuDzHaCZx1uC3Rv5KmkaXhnsip9nt8Abxqoc5ENj56Qo6CZ9WzuHYnwACGmU2yXPNsEGhQYi",
  "key4": "3X9p3emNYZmcDrRh3qQMaHjHMsEHGmajUcz1p8CkEBitVqS69yeAnPdNdMP9a8F4qvvQdAjn7yKowGbz1ocMNDLa",
  "key5": "2ZWqgEenrGgGJbFsbpk42GoyHmh3dVFzHGi8dif3xuQqQGgLBH6R5wQ7safid6odRGGsbB3V1BvwpW5sJXEuAPBy",
  "key6": "5J6PcVdZCASp3EPzVoUBXH7AuCyirHWcizKHKdDvR4NEoYqMR4mbvvgmDKwAM4roavdBJXK1DBYnwJYyR6ZJpTwh",
  "key7": "5cxZsCscVfywoNTc1CujRZ6mYb1F1rWycUaJYesfKNJAX2fWfdSfRt6NwTTYbArNbcDQMFFMk5Cwe6x7nvoVKnwT",
  "key8": "4FxPZzBo5YYMULpN6PFmNPhSKkheVCga3CAv8ytmTvYcQxVtXbhf5oDU9CqigijVvULzZp2XqD1XFDVMgB2cSb2R",
  "key9": "4eunLoLrHtxWJXcjDotDdztjKse1BQD4tnnN3hMHdcTrw4K5HWYycvfuzn3MitLNwxg3xU4VBf63gNw1ZjYeQJsf",
  "key10": "2Ho6dBMawC96x1VQAqUk68JAJqwfr6vgGhzdHAvvwUG1vK53kCntxbKy2qASiXi163jujnEzVECNYEbaMGZtYuFK",
  "key11": "2Daoh2DBvvW6cwwkKDLjxQ6hZnizWXxEKFvWHRQmadmVEvPAsBPEpWJdZ1WX9KGXB2RcVWi4YZfggZgFF59d6ojm",
  "key12": "2xbHFTHTCRWL7tuNmu8pWhzK2Cj49Poq6N8AD4f6rEeyc7DcHhDqgb9FW1EpAAQPFwQ3jaJm3v5fGgGosWBm9ZfG",
  "key13": "S4Vh4JzGRbgxUA3AJZiY4RGKZXf78URH4jJ7ccoc5yZSfbmnxPo1a3NXfygEAoisY6jAszsSdYxTU8WGkA1zypF",
  "key14": "2QmBUvCum4rpPC6pe8rjy4cvRQ7UcHtyHMo1ySkEf1AqgqKfmbzHjXpJrpJuNW4XAvjn3oNnxGeiaTtebLqCarga",
  "key15": "4yGNdYa3QG22FT4VDZV86vqcUdeWkftDTKoVH7Utu9BQsLDdBS7VEyT3zow3VhYzJRK4S1G8tegBEbPBy85jzYiM",
  "key16": "48cxtuy3CF54t1e1QuT1VAfpY3dDqZb5W8dvwXcrPQs5eVum3NoQjdEzUEH3wizBtUhoTtm9SnoW2hWAAkzZLYo2",
  "key17": "2xWrkhtLzAXvjDiUfhxqyHuwMGo6Mj56ciPnhYaG9eUbZPwTtHqvk3ierJG2RS92FikGPKuG2Amzttz7xWFDVo3J",
  "key18": "2v7YiKDHGM7QAgMKbhhD2WvhXqoyttrxiBLZRZ4jzQh9MfvRGBAJ9r3St1A9pAvvE9c7UR63tyG1cTVRxeLLGqw1",
  "key19": "5BeY2UgWzwndQ8BTyNKJt5uDgYYRwcaxvNNjGDYYZFoVopSAxiCCEpKc5LyHcc7bLVPVQEm1ruhGQHhM5bKxnmzS",
  "key20": "37jcZm5oFNbnvkhwFi1DMoRo5tmcHDt3pbEuq3dym3zDMJatauatG8BUpJ1KPAnTiofKo2Hs86DGctmpqiwjLK6h",
  "key21": "5gjSnskuRgiEQViVB1RGPzdBKvJcXoQfoMjGiVYGXoZQ6wHtbWKAFTi5JsW9P24i7gos19N1uffab1WwbreWorsx",
  "key22": "5h4Q2aeesgKhy5z5XPjqLTAyEDw8XSJ8XqTfKxpFkrp2PLh2ABsDiTAQWRhhUx4oYW81Bk47wp6SxX68oMp94oKw",
  "key23": "2TNzr9vM9xcDHPamcMqWHoTfNqD4kgAN7oa6zMcwz7v3vDnKpPKtiRmtmjbKhbMK6wCUojs8DFTwX6vyEf9vgwMq",
  "key24": "2EMsQ84JX27eezidrpxbeHv8gHcqma3kma1m3zycayj7tvbW3fjqkN6wm5eBjEoPikLWkwux7HQVjBEH3tSfgjss",
  "key25": "5Aawh9zfj65h5Xhbr8hTDEimQKg1SQ6xjPSt4iRAq3YW4RN7KULKkAcMN4oGnkSTKrkk4UZDNqqhvYw4yPEvoz1s"
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
